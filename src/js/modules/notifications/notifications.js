import { state } from '../../state.js';

function getNotifications() {
    const cache = window.getCache();
    const notifications = [];

    // 1. Pending store orders
    const pendingOrders = (cache.storeOrders || []).filter(o => o.order_status === 'pending');
    if (pendingOrders.length > 0) {
        notifications.push({
            icon: 'local_shipping',
            title: 'Pending Store Orders',
            count: pendingOrders.length,
            description: 'You have new orders to process',
            color: 'orange',
            action: () => { window.setMyStoreTab('orders'); window.setApp('mystore'); }
        });
    }

    // 2. Low stock items (net stock <= 5)
    const products = cache.products || [];
    const logs = cache.inventoryLogs || [];
    const lowStockItems = products.filter(p => {
        const inward = logs.filter(l => l.product_id === p.id && l.type === 'inward').reduce((s, l) => s + (parseInt(l.quantity) || 0), 0);
        const outward = logs.filter(l => l.product_id === p.id && l.type === 'outward').reduce((s, l) => s + (parseInt(l.quantity) || 0), 0);
        const net = inward - outward;
        return net <= 5 && net >= 0;
    });
    if (lowStockItems.length > 0) {
        notifications.push({
            icon: 'inventory_2',
            title: 'Low Stock Items',
            count: lowStockItems.length,
            description: 'Products with 5 or fewer units in stock',
            color: 'red',
            action: () => window.setApp('inventory')
        });
    }

    // 3. Draft sales
    const draftSales = (cache.sales || []).filter(s => s.status === 'draft');
    if (draftSales.length > 0) {
        notifications.push({
            icon: 'edit_note',
            title: 'Incomplete Drafts',
            count: draftSales.length,
            description: 'Sales drafts waiting to be completed',
            color: 'amber',
            action: () => { window.setHistoryViewMode('drafts'); window.setTab('history'); window.setApp('sales'); }
        });
    }

    // 4. Unresolved inquiries
    const pendingInquiries = (cache.inquiries || []).filter(i => i.status === 'PENDING');
    if (pendingInquiries.length > 0) {
        notifications.push({
            icon: 'help_outline',
            title: 'Unresolved Inquiries',
            count: pendingInquiries.length,
            description: 'Customer inquiries awaiting response',
            color: 'blue',
            action: () => window.setApp('inquiries')
        });
    }

    // 5. Active repairs
    const activeRepairs = (cache.repairs || []).filter(r => r.status === 'active');
    if (activeRepairs.length > 0) {
        notifications.push({
            icon: 'build',
            title: 'Active Repair Jobs',
            count: activeRepairs.length,
            description: 'Repairs currently in progress',
            color: 'purple',
            action: () => window.setApp('repairs')
        });
    }

    // 6. Scheduled automation messages (next 7 days)
    const now = new Date();
    const weekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const scheduledMsgs = (cache.automationMessages || []).filter(m => {
        if (m.status !== 'pending') return false;
        const d = new Date(m.scheduled_date);
        return d >= now && d <= weekLater;
    });
    if (scheduledMsgs.length > 0) {
        notifications.push({
            icon: 'smart_toy',
            title: 'Scheduled Messages',
            count: scheduledMsgs.length,
            description: 'Automation messages in the next 7 days',
            color: 'teal',
            action: () => window.setApp('automation')
        });
    }

    // 7. Live pre-booking campaigns
    const liveCampaigns = (cache.campaigns || []).filter(c => {
        if (!c.start_date || !c.end_date) return c.status === 'active';
        const start = new Date(c.start_date);
        const end = new Date(c.end_date);
        return now >= start && now <= end;
    });
    if (liveCampaigns.length > 0) {
        notifications.push({
            icon: 'rocket_launch',
            title: 'Live Campaigns',
            count: liveCampaigns.length,
            description: 'Pre-booking campaigns currently active',
            color: 'emerald',
            action: () => window.setApp('prebooking')
        });
    }

    // 8. Client birthdays today
    const today = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const birthdays = (cache.customers || []).filter(c => {
        if (!c.dob) return false;
        const dob = c.dob.includes('T') ? c.dob.split('T')[0] : c.dob;
        const parts = dob.split('-');
        if (parts.length < 3) return false;
        return `${parts[1]}-${parts[2]}` === today;
    });
    if (birthdays.length > 0) {
        notifications.push({
            icon: 'cake',
            title: 'Birthdays Today',
            count: birthdays.length,
            description: birthdays.length === 1 ? `${birthdays[0].name}'s birthday!` : `${birthdays.length} clients celebrating today`,
            color: 'pink',
            action: () => window.setApp('clients')
        });
    }

    return notifications;
}

function getNotificationCount() {
    return getNotifications().reduce((sum, n) => sum + n.count, 0);
}

// Expose globally for badge
window.getNotificationCount = getNotificationCount;

const colorMap = {
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-500', badge: 'bg-orange-500' },
    red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-500', badge: 'bg-red-500' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-500', badge: 'bg-amber-500' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-500', badge: 'bg-blue-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-500', badge: 'bg-purple-500' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-500', badge: 'bg-teal-500' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-500', badge: 'bg-emerald-500' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', icon: 'text-pink-500', badge: 'bg-pink-500' }
};

function renderNotificationCard(n, idx) {
    const c = colorMap[n.color] || colorMap.blue;
    return `
        <button onclick="window._notifActions[${idx}]()" class="w-full text-left ${c.bg} border ${c.border} rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all group">
            <div class="w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center shrink-0">
                <span class="material-icons-outlined text-xl ${c.icon}">${n.icon}</span>
            </div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-0.5">
                    <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-black text-white ${c.badge}">${n.count}</span>
                    <span class="text-xs font-bold text-slate-900">${n.title}</span>
                </div>
                <p class="text-[11px] text-slate-500 truncate">${n.description}</p>
            </div>
            <span class="material-icons-outlined text-sm text-slate-300 group-hover:text-slate-500 transition-colors">chevron_right</span>
        </button>
    `;
}

function renderPushToggle() {
    const enabled = window._pushNotificationsEnabled !== false;
    return `
        <button onclick="window.togglePushNotifications()" class="flex items-center gap-2 px-3 py-1.5 rounded-full border ${enabled ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-400'} transition-all text-[10px] font-bold uppercase tracking-wider">
            <span class="material-icons-outlined text-sm">${enabled ? 'notifications_active' : 'notifications_off'}</span>
            ${enabled ? 'On' : 'Off'}
        </button>
    `;
}

function renderHeader(isMobile) {
    const backAction = isMobile ? "setApp('launcher')" : "setApp('launcher')";
    return `
        <div class="flex items-center justify-between p-4 border-b border-slate-100 bg-white shrink-0">
            <div class="flex items-center gap-2">
                <button onclick="${backAction}" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-all">
                    <span class="material-icons-outlined text-lg">arrow_back</span>
                </button>
                <h1 class="text-xs font-black text-slate-900 uppercase tracking-widest">Alerts</h1>
            </div>
            ${renderPushToggle()}
        </div>
    `;
}

function renderEmptyState() {
    return `
        <div class="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div class="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                <span class="material-icons-outlined text-3xl text-emerald-500">check_circle</span>
            </div>
            <h2 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-1">All Caught Up</h2>
            <p class="text-xs text-slate-400">No pending notifications right now</p>
        </div>
    `;
}

function renderSecondary() {
    const notifications = getNotifications();
    const total = notifications.reduce((s, n) => s + n.count, 0);
    return `
        <div class="h-full flex flex-col items-center justify-center text-center p-8">
            <div class="w-20 h-20 rounded-2xl ${total > 0 ? 'bg-red-50' : 'bg-emerald-50'} flex items-center justify-center mb-4">
                <span class="material-icons-outlined text-4xl ${total > 0 ? 'text-red-500' : 'text-emerald-500'}">${total > 0 ? 'notifications_active' : 'notifications_none'}</span>
            </div>
            <p class="text-3xl font-black text-slate-900 mb-1">${total}</p>
            <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">${total === 1 ? 'Pending Alert' : 'Pending Alerts'}</p>
            ${total > 0 ? `
                <div class="mt-6 flex flex-wrap gap-2 justify-center">
                    ${notifications.map(n => {
                        const c = colorMap[n.color] || colorMap.blue;
                        return `<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${c.bg} ${c.icon}">${n.count} ${n.title}</span>`;
                    }).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

export function renderNotifications(mode) {
    if (mode === 'desktop-secondary') return renderSecondary();

    const notifications = getNotifications();

    // Store actions globally so onclick can call them
    window._notifActions = notifications.map(n => n.action);

    const cards = notifications.length > 0
        ? notifications.map((n, i) => renderNotificationCard(n, i)).join('')
        : '';

    return `
        <div class="h-full flex flex-col bg-slate-50">
            ${renderHeader(mode === 'mobile')}
            <div class="flex-1 overflow-y-auto">
                ${notifications.length > 0 ? `
                    <div class="p-4 flex flex-col gap-3">
                        ${cards}
                    </div>
                ` : renderEmptyState()}
            </div>
        </div>
    `;
}
