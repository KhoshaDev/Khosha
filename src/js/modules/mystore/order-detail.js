import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export function renderOrderDetail() {
    const cache = window.getCache();
    const orders = cache.storeOrders || [];
    const orderItems = cache.storeOrderItems || [];

    const order = orders.find(o => o.id === state.activeStoreOrderId);
    if (!order) {
        return `<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">search_off</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Order not found</p>
            </div>
        </div>`;
    }

    const items = orderItems.filter(i => i.order_id === order.id);

    const statusSteps = ['pending', 'confirmed', 'shipped', 'delivered'];
    const currentStepIdx = statusSteps.indexOf(order.order_status);
    const isCancelled = order.order_status === 'cancelled';

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'amber';
            case 'confirmed': return 'blue';
            case 'shipped': return 'purple';
            case 'delivered': return 'green';
            case 'cancelled': return 'red';
            default: return 'slate';
        }
    };

    const statusColor = getStatusColor(order.order_status);

    // Action handlers
    window._confirmOrder = async (orderId) => {
        try {
            await db.storeOrders.updateStatus(orderId, 'confirmed');
            const idx = window._db_cache.storeOrders.findIndex(o => o.id === orderId);
            if (idx >= 0) window._db_cache.storeOrders[idx].order_status = 'confirmed';
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Confirmed order ${order.order_number}`, user_name: r.contact_person || 'Owner', icon: 'check_circle', color: 'blue' });
            if (window.toast) window.toast.success('Order confirmed');
            window.triggerRender();
        } catch (err) {
            console.error('Confirm order failed:', err);
            if (window.toast) window.toast.error('Failed to confirm order');
        }
    };

    window._shipOrder = async (orderId) => {
        const container = document.getElementById('shipping-form');
        const tracking = container?.querySelector('[data-field="tracking_number"]')?.value || '';
        const courier = container?.querySelector('[data-field="courier_name"]')?.value || '';

        if (!tracking) { if (window.toast) window.toast.error('Enter tracking number'); return; }
        if (!courier) { if (window.toast) window.toast.error('Enter courier name'); return; }

        try {
            const now = new Date().toISOString();
            await db.storeOrders.updateStatus(orderId, 'shipped', {
                tracking_number: tracking,
                courier_name: courier,
                shipped_date: now
            });
            const idx = window._db_cache.storeOrders.findIndex(o => o.id === orderId);
            if (idx >= 0) {
                window._db_cache.storeOrders[idx].order_status = 'shipped';
                window._db_cache.storeOrders[idx].tracking_number = tracking;
                window._db_cache.storeOrders[idx].courier_name = courier;
                window._db_cache.storeOrders[idx].shipped_date = now;
            }
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Shipped order ${order.order_number} via ${courier}`, user_name: r.contact_person || 'Owner', icon: 'local_shipping', color: 'purple' });
            if (window.toast) window.toast.success('Order marked as shipped');
            window.triggerRender();
        } catch (err) {
            console.error('Ship order failed:', err);
            if (window.toast) window.toast.error('Failed to update shipping');
        }
    };

    window._deliverOrder = async (orderId) => {
        try {
            const now = new Date().toISOString();

            // 1. Create sale record
            const saleId = `sale_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            await db.sales.add({
                id: saleId,
                customer_id: null,
                customer_name: order.customer_name,
                date: now,
                total_amount: order.total_amount,
                status: 'completed',
                payment_mode: order.payment_mode === 'cod' ? 'cash' : order.payment_mode === 'upi' ? 'upi' : 'card',
                payment_reference: order.payment_reference || order.order_number,
                gst_required: 0,
                company_id: null,
                installation_required: 0,
                installation_date: null,
                source: 'online'
            });

            // 2. Create sale items
            for (const item of items) {
                const siId = `si_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
                await db.sales.addItem({
                    id: siId,
                    sale_id: saleId,
                    product_id: item.product_id,
                    product_name: item.product_name,
                    category: item.category || null,
                    quantity: item.quantity,
                    price: item.unit_price,
                    discount_type: null,
                    discount_value: 0,
                    discount_amount: item.discount_amount || 0,
                    scheme_id: null,
                    final_price: item.final_price,
                    imei: null,
                    serial_number: null,
                    mac_id: null,
                    manufacturing_date: null,
                    installation_date: null,
                    extra_fields: null
                });
            }

            // 3. Update order
            await db.storeOrders.updateStatus(orderId, 'delivered', {
                delivered_date: now,
                sale_id: saleId,
                payment_status: 'paid'
            });

            // 4. Sync to refresh cache
            await syncData();

            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Order ${order.order_number} delivered & invoice created`, user_name: r.contact_person || 'Owner', icon: 'check_circle', color: 'green' });
            if (window.toast) window.toast.success('Order delivered & sale recorded');
        } catch (err) {
            console.error('Deliver order failed:', err);
            if (window.toast) window.toast.error('Failed to mark as delivered');
        }
    };

    window._cancelOrder = async (orderId) => {
        if (!confirm('Cancel this order?')) return;
        try {
            await db.storeOrders.updateStatus(orderId, 'cancelled');
            const idx = window._db_cache.storeOrders.findIndex(o => o.id === orderId);
            if (idx >= 0) window._db_cache.storeOrders[idx].order_status = 'cancelled';
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Cancelled order ${order.order_number}`, user_name: r.contact_person || 'Owner', icon: 'cancel', color: 'red' });
            if (window.toast) window.toast.success('Order cancelled');
            window.triggerRender();
        } catch (err) {
            console.error('Cancel order failed:', err);
            if (window.toast) window.toast.error('Failed to cancel order');
        }
    };

    const formatDate = (d) => d ? new Date(d).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }) : '—';

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-2">
                    <button type="button" onclick="window.setMyStoreViewMode('list')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-lg font-black tracking-tighter text-slate-900">${order.order_number}</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Order Details</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 space-y-6 pb-12 text-left">
                <!-- Status Banner -->
                <div class="card p-4 bg-${statusColor}-50 border-${statusColor}-200 text-left">
                    <div class="flex items-center justify-between text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-${statusColor}-100 rounded-xl flex items-center justify-center">
                                <span class="material-icons-outlined text-${statusColor}-500">${isCancelled ? 'cancel' : order.order_status === 'delivered' ? 'check_circle' : order.order_status === 'shipped' ? 'local_shipping' : order.order_status === 'confirmed' ? 'thumb_up' : 'schedule'}</span>
                            </div>
                            <div class="text-left">
                                <p class="text-xs font-black text-${statusColor}-700 uppercase">${isCancelled ? 'Cancelled' : order.order_status}</p>
                                <p class="text-[9px] font-bold text-${statusColor}-400">${formatDate(order.order_date)}</p>
                            </div>
                        </div>
                        <p class="text-xl font-black text-${statusColor}-700 tracking-tighter">₹${parseInt(order.total_amount).toLocaleString()}</p>
                    </div>
                </div>

                <!-- Status Timeline -->
                ${!isCancelled ? `
                    <div class="space-y-4 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Order Progress
                        </p>
                        <div class="card p-5 text-left">
                            <div class="flex items-center justify-between text-left">
                                ${statusSteps.map((step, i) => `
                                    <div class="flex flex-col items-center gap-1 text-left">
                                        <div class="w-8 h-8 rounded-full flex items-center justify-center ${i <= currentStepIdx ? `bg-${getStatusColor(step)}-500 text-white` : 'bg-slate-100 text-slate-300'}">
                                            <span class="material-icons-outlined text-sm">${i <= currentStepIdx ? 'check' : i === currentStepIdx + 1 ? 'radio_button_unchecked' : 'circle'}</span>
                                        </div>
                                        <p class="text-[7px] font-black uppercase tracking-widest ${i <= currentStepIdx ? 'text-slate-900' : 'text-slate-300'}">${step}</p>
                                    </div>
                                    ${i < statusSteps.length - 1 ? `<div class="flex-1 h-0.5 mx-1 ${i < currentStepIdx ? 'bg-slate-900' : 'bg-slate-100'}"></div>` : ''}
                                `).join('')}
                            </div>
                        </div>
                    </div>
                ` : ''}

                <!-- Customer Info -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Customer
                    </p>
                    <div class="card p-4 text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                <span class="material-icons-outlined text-slate-400">person</span>
                            </div>
                            <div class="text-left">
                                <p class="text-sm font-black text-slate-900">${order.customer_name}</p>
                                <p class="text-[9px] font-bold text-slate-400">${order.customer_phone || '—'} ${order.customer_email ? ' · ' + order.customer_email : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Shipping Address -->
                ${order.shipping_address_line1 || order.shipping_city ? `
                    <div class="space-y-4 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Shipping Address
                        </p>
                        <div class="card p-4 text-left">
                            <div class="flex items-start gap-3 text-left">
                                <span class="material-icons-outlined text-slate-400 text-lg mt-0.5">location_on</span>
                                <div class="text-left">
                                    <p class="text-xs font-bold text-slate-900">${order.shipping_address_line1 || ''}</p>
                                    ${order.shipping_address_line2 ? `<p class="text-xs font-bold text-slate-700">${order.shipping_address_line2}</p>` : ''}
                                    <p class="text-[10px] font-bold text-slate-500">${[order.shipping_city, order.shipping_state, order.shipping_pincode].filter(Boolean).join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ` : ''}

                <!-- Order Items -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Items (${items.length})
                    </p>
                    <div class="card p-4 space-y-3 text-left">
                        ${items.map(item => `
                            <div class="flex items-center justify-between py-2 border-b border-slate-50 last:border-0 text-left">
                                <div class="text-left flex-1 min-w-0">
                                    <p class="text-xs font-black text-slate-900 truncate">${item.product_name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${item.category || ''} · Qty: ${item.quantity}</p>
                                </div>
                                <p class="text-sm font-black text-slate-900 shrink-0 ml-2">₹${parseInt(item.final_price).toLocaleString()}</p>
                            </div>
                        `).join('')}
                        <div class="flex items-center justify-between pt-2 border-t border-slate-200 text-left">
                            <p class="text-xs font-black text-slate-900 uppercase">Total</p>
                            <p class="text-lg font-black text-slate-900">₹${parseInt(order.total_amount).toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                <!-- Tracking Info (if shipped) -->
                ${order.tracking_number ? `
                    <div class="space-y-4 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Shipping Details
                        </p>
                        <div class="card p-4 text-left">
                            <div class="grid grid-cols-2 gap-4 text-left">
                                <div class="text-left">
                                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Courier</p>
                                    <p class="text-xs font-bold text-slate-900">${order.courier_name || '—'}</p>
                                </div>
                                <div class="text-left">
                                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Tracking #</p>
                                    <p class="text-xs font-bold text-slate-900 font-mono">${order.tracking_number}</p>
                                </div>
                                <div class="text-left">
                                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Shipped On</p>
                                    <p class="text-xs font-bold text-slate-900">${order.shipped_date ? formatDate(order.shipped_date) : '—'}</p>
                                </div>
                                ${order.delivered_date ? `
                                    <div class="text-left">
                                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Delivered On</p>
                                        <p class="text-xs font-bold text-slate-900">${formatDate(order.delivered_date)}</p>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                ` : ''}

                <!-- Shipping Form (when confirmed, ready to ship) -->
                ${order.order_status === 'confirmed' ? `
                    <div id="shipping-form" class="space-y-4 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Ship This Order
                        </p>
                        <div class="card p-4 space-y-3 text-left">
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Courier Name</p>
                                <input type="text" data-field="courier_name" placeholder="e.g. BlueDart, Delhivery, DTDC" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900">
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Tracking Number</p>
                                <input type="text" data-field="tracking_number" placeholder="e.g. AWB123456789" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900 font-mono">
                            </div>
                        </div>
                    </div>
                ` : ''}

                <!-- Action Buttons -->
                ${!isCancelled && order.order_status !== 'delivered' ? `
                    <div class="space-y-3 text-left">
                        ${order.order_status === 'pending' ? `
                            <button type="button" onclick="window._confirmOrder('${order.id}')" class="w-full py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                <span class="material-icons-outlined text-sm">thumb_up</span> Confirm Order
                            </button>
                        ` : ''}
                        ${order.order_status === 'confirmed' ? `
                            <button type="button" onclick="window._shipOrder('${order.id}')" class="w-full py-4 bg-purple-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                <span class="material-icons-outlined text-sm">local_shipping</span> Mark as Shipped
                            </button>
                        ` : ''}
                        ${order.order_status === 'shipped' ? `
                            <button type="button" onclick="window._deliverOrder('${order.id}')" class="w-full py-4 bg-green-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                <span class="material-icons-outlined text-sm">check_circle</span> Mark as Delivered
                            </button>
                        ` : ''}
                        <button type="button" onclick="window._cancelOrder('${order.id}')" class="w-full py-3 bg-white border border-red-200 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">cancel</span> Cancel Order
                        </button>
                    </div>
                ` : ''}

                ${order.order_status === 'delivered' && order.sale_id ? `
                    <div class="card p-4 bg-green-50 border-green-200 text-center">
                        <span class="material-icons-outlined text-green-500 text-2xl mb-1">receipt_long</span>
                        <p class="text-[10px] font-black text-green-700">Invoice created in Sales Desk</p>
                        <p class="text-[9px] font-bold text-green-500">Sale ID: ${order.sale_id}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}
