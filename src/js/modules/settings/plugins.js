export function renderSettingsPlugins() {
    const categories = [
        {
            label: 'Payments & POS',
            plugins: [
                {
                    name: 'Pine Labs POS',
                    desc: 'Accept card, UPI, wallet & EMI payments on Pine Labs terminals. Auto-push sale amount to device, capture transaction ID and settle instantly.',
                    icon: 'point_of_sale',
                    color: 'blue',
                    status: 'connected',
                    badge: 'Active'
                },
                {
                    name: 'Razorpay Payments',
                    desc: 'Accept UPI, cards, net banking & wallets online. Auto-reconcile payments with sales records.',
                    icon: 'account_balance_wallet',
                    color: 'indigo',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'PhonePe POS',
                    desc: 'QR-based payments at counter. Instant settlement and daily reconciliation reports.',
                    icon: 'qr_code_scanner',
                    color: 'purple',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'Paytm for Business',
                    desc: 'Accept Paytm wallet, UPI & Paytm Postpaid. Sound box alerts and auto-settlement.',
                    icon: 'payments',
                    color: 'blue',
                    status: 'available',
                    badge: 'Connect'
                },
            ]
        },
        {
            label: 'Consumer Finance & EMI',
            plugins: [
                {
                    name: 'Bajaj Finserv EMI',
                    desc: 'Offer No-Cost EMI & low-cost EMI on Bajaj Finserv cards. Instant approval at checkout, auto-capture EMI tenure and subvention.',
                    icon: 'credit_score',
                    color: 'blue',
                    status: 'connected',
                    badge: 'Active'
                },
                {
                    name: 'HDFC Consumer Finance',
                    desc: 'Enable HDFC consumer durable loans at POS. Approve customers via Aadhar OTP, auto-link loan ID to sale invoice.',
                    icon: 'account_balance',
                    color: 'indigo',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'IDFC First Finance',
                    desc: 'Consumer durable loans with instant digital approval. Support for 3–24 month tenures on electronics & appliances.',
                    icon: 'savings',
                    color: 'purple',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'Home Credit',
                    desc: 'EMI for non-card customers. Aadhar-based approval in 5 minutes for smartphones, appliances & electronics.',
                    icon: 'approval',
                    color: 'amber',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'ZestMoney / DMI Finance',
                    desc: 'Buy Now Pay Later and no-cost EMI for online & in-store. Instant credit line for customers without credit cards.',
                    icon: 'currency_rupee',
                    color: 'green',
                    status: 'available',
                    badge: 'Connect'
                },
            ]
        },
        {
            label: 'Telecom & Recharge',
            plugins: [
                {
                    name: 'Jio Partner',
                    desc: 'Activate Jio SIMs, process recharges & sell JioFiber plans from your store. Earn commission on every transaction.',
                    icon: 'sim_card',
                    color: 'blue',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'Airtel Mitra',
                    desc: 'Activate Airtel prepaid & postpaid connections, process recharges, sell Airtel Xstream & DTH plans.',
                    icon: 'cell_tower',
                    color: 'red',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'Vi (Vodafone Idea)',
                    desc: 'Process Vi recharges, new SIM activations & postpaid upgrades. Track commissions per transaction.',
                    icon: 'signal_cellular_alt',
                    color: 'rose',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'BSNL Retailer',
                    desc: 'BSNL SIM activations, recharges & broadband plan bookings. Government ID verification support.',
                    icon: 'router',
                    color: 'slate',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'Multi-Recharge API',
                    desc: 'Unified recharge API for all operators — prepaid, postpaid, DTH, broadband & electricity bills from one dashboard.',
                    icon: 'bolt',
                    color: 'amber',
                    status: 'available',
                    badge: 'Connect'
                },
            ]
        },
        {
            label: 'Brand & Warranty',
            plugins: [
                {
                    name: 'Samsung Partner Portal',
                    desc: 'Sync Samsung product catalog, claim brand warranty registrations & submit display incentive claims.',
                    icon: 'devices',
                    color: 'blue',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'Xiaomi Retail Suite',
                    desc: 'Access Mi product feed, process Mi Extended Warranty activations & sync sell-out data for incentives.',
                    icon: 'smartphone',
                    color: 'orange',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'OneAssist / Onsitego',
                    desc: 'Sell extended warranty & damage protection plans at POS. Instant policy issuance linked to sale invoice.',
                    icon: 'verified_user',
                    color: 'green',
                    status: 'available',
                    badge: 'Connect'
                },
            ]
        },
        {
            label: 'Communication',
            plugins: [
                {
                    name: 'WhatsApp Business',
                    desc: 'Send automated messages, invoices & reminders to customers via WhatsApp Business API.',
                    icon: 'chat',
                    color: 'green',
                    status: 'connected',
                    badge: 'Active'
                },
                {
                    name: 'MSG91 SMS',
                    desc: 'Transactional SMS for OTPs, invoices, payment confirmations & promotional campaigns.',
                    icon: 'sms',
                    color: 'amber',
                    status: 'available',
                    badge: 'Connect'
                },
            ]
        },
        {
            label: 'Accounting & ERP',
            plugins: [
                {
                    name: 'Tally Integration',
                    desc: 'Auto-sync sales, expenses & GST data directly into Tally ERP for seamless accounting.',
                    icon: 'calculate',
                    color: 'blue',
                    status: 'available',
                    badge: 'Connect'
                },
                {
                    name: 'Google Sheets',
                    desc: 'Export daily sales, inventory & customer data to Google Sheets automatically.',
                    icon: 'table_chart',
                    color: 'green',
                    status: 'available',
                    badge: 'Connect'
                },
            ]
        },
        {
            label: 'Hardware & Logistics',
            plugins: [
                {
                    name: 'Thermal Printer',
                    desc: 'Connect Bluetooth or USB receipt printers for instant POS invoice printing.',
                    icon: 'print',
                    color: 'slate',
                    status: 'available',
                    badge: 'Setup'
                },
                {
                    name: 'Barcode Scanner',
                    desc: 'Pair Bluetooth or USB barcode scanners. Auto-lookup products by EAN/UPC code during billing.',
                    icon: 'qr_code',
                    color: 'slate',
                    status: 'available',
                    badge: 'Setup'
                },
                {
                    name: 'Shiprocket',
                    desc: 'Ship products to customers with tracking. Auto-generate shipping labels from sales.',
                    icon: 'local_shipping',
                    color: 'orange',
                    status: 'available',
                    badge: 'Connect'
                },
            ]
        },
    ];

    const allPlugins = categories.flatMap(c => c.plugins);
    const connectedCount = allPlugins.filter(p => p.status === 'connected').length;
    const availableCount = allPlugins.filter(p => p.status === 'available').length;

    const renderPlugin = (p) => {
        const isConnected = p.status === 'connected';
        return `
            <div class="card p-5 ${isConnected ? 'border-slate-200 bg-slate-50/30' : 'hover:border-slate-300'} transition-all text-left">
                <div class="flex items-start justify-between text-left">
                    <div class="flex items-start gap-4 text-left">
                        <div class="w-12 h-12 ${isConnected ? `bg-${p.color}-100` : `bg-${p.color}-50`} rounded-2xl flex items-center justify-center shrink-0">
                            <span class="material-icons-outlined text-${p.color}-500 text-xl">${p.icon}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-sm font-black text-slate-900">${p.name}</p>
                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${p.desc}</p>
                        </div>
                    </div>
                    ${isConnected
                        ? `<span class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-100 text-green-600">${p.badge}</span>`
                        : `<button onclick="window.toast.info('Integration setup coming soon')" class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all">${p.badge}</button>`
                    }
                </div>
                ${isConnected ? `
                    <div class="flex gap-2 mt-4 pl-16 text-left">
                        <button onclick="window.toast.info('Plugin settings coming soon')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">Configure</button>
                        <button onclick="window.toast.info('Disconnected')" class="px-4 py-2 bg-white border border-red-200 rounded-lg text-[8px] font-black text-red-500 uppercase tracking-widest hover:bg-red-50 transition-all">Disconnect</button>
                    </div>
                ` : ''}
            </div>
        `;
    };

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Plugins</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Integrations & Extensions</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Stats -->
                <div class="p-6 pb-0 text-left">
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-green-600">${connectedCount}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Connected</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${availableCount}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Available</p>
                        </div>
                    </div>
                </div>

                <!-- Categories -->
                ${categories.map(cat => `
                    <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> ${cat.label}
                        </p>
                        <div class="space-y-3 text-left">
                            ${cat.plugins.map(p => renderPlugin(p)).join('')}
                        </div>
                    </div>
                `).join('')}

                <div class="p-6 pt-2 text-left">
                    <div class="card p-4 bg-slate-50 border-transparent text-center">
                        <span class="material-icons-outlined text-slate-300 text-2xl mb-2">extension</span>
                        <p class="text-[10px] font-black text-slate-400">More integrations coming soon</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Zoho Books, BusyWin, Marg ERP, Vivo, Oppo & more</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
