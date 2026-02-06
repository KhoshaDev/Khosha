import { state } from '../../state.js';
import { renderMyStoreHeader } from './header.js';
import { renderListings } from './listings.js';
import { renderAddListing } from './add-listing.js';
import { renderOrders } from './orders.js';
import { renderOrderDetail } from './order-detail.js';
import { renderShipping } from './shipping.js';

export function renderMyStore(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    // Desktop Secondary: detail views
    if (isDesktopSecondary) {
        if (state.myStoreViewMode === 'order-detail' && state.activeStoreOrderId) {
            return renderOrderDetail();
        }
        if (state.myStoreViewMode === 'add-listing') {
            return renderAddListing();
        }
        // Default empty state
        return `<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">storefront</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Select an item to view details</p>
            </div>
        </div>`;
    }

    // Mobile: handle sub-views
    if (isMobile) {
        if (state.myStoreViewMode === 'order-detail' && state.activeStoreOrderId) {
            return renderOrderDetail();
        }
        if (state.myStoreViewMode === 'add-listing') {
            return renderAddListing();
        }
    }

    // Primary: tab-based content
    const getTabContent = () => {
        switch (state.myStoreTab) {
            case 'orders': return renderOrders(isMobile);
            case 'shipping': return renderShipping(isMobile);
            default: return renderListings(isMobile);
        }
    };

    return `
        <div class="h-full flex flex-col relative bg-white">
            ${renderMyStoreHeader()}
            ${getTabContent()}
        </div>
    `;
}
