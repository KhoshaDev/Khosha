var cr=Object.defineProperty;var Zn=e=>{throw TypeError(e)};var dr=(e,t,s)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var j=(e,t,s)=>dr(e,typeof t!="symbol"?t+"":t,s),Wa=(e,t,s)=>t.has(e)||Zn("Cannot "+s);var o=(e,t,s)=>(Wa(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?Zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,a)=>(Wa(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),k=(e,t,s)=>(Wa(e,t,"access private method"),s);var Xt=(e,t,s,a)=>({set _(n){f(e,t,n,s)},get _(){return o(e,t,a)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const pr=localStorage.getItem("retaileros_logged_in")==="true",ur=localStorage.getItem("retaileros_retailer_id")||null,fr=localStorage.getItem("retaileros_retailer_code")||null,xr=localStorage.getItem("retaileros_retailer_name")||null,mr=localStorage.getItem("retaileros_push_notifications")!=="false";window._pushNotificationsEnabled=mr;const p={retailerId:ur,retailerCode:fr,retailerName:xr,currentApp:window.innerWidth<768?"launcher":"sales",currentTab:"new-sale",salesMode:"default",salesHistoryId:"ORD-99281",historyViewMode:"completed",historyDateFilter:"today",historyFromDate:"",historyToDate:"",showMobileReceipt:!1,reportsTab:"sales",repairTab:"active",repairViewMode:"search",selectedRepairDevice:null,activeRepairId:null,repairContext:null,selectedClient:null,selectedClientId:null,clientViewMode:"directory",clientSearchQuery:"",clientInvoiceId:null,selectedGroupId:null,groupViewMode:"list",groupSearchQuery:"",promoterViewMode:"performance",inventoryTab:"brands",inventoryMode:"details",activeCategory:null,settingsView:null,viewportWidth:window.innerWidth,gridCols:window.innerWidth<768?4:3,schemesTab:"list",activeSchemeBrand:"Apple",activeScheme:"June Activation Bonus",showSchemeDetails:!1,marketplaceTab:"browse",marketplaceViewMode:"list",myStoreTab:"dashboard",myStoreViewMode:"list",activeStoreOrderId:null,activeListingId:null,isLoggedIn:pr,authMode:"login",registrationStep:1,inquiryViewMode:"list",activeInquiry:null,preBookingViewMode:"dashboard",activeCampaign:null,automationViewMode:"dashboard",activeAutomationId:null},jl=[],Pl=e=>{jl.push(e)},C=(e=!0)=>{jl.forEach(t=>t(e))};function br(e){p.currentApp=e,e==="clients"&&(p.clientViewMode="directory"),C()}function hr(e){p.currentTab=e,C()}function gr(e){p.salesHistoryId=e,e&&window.innerWidth<768&&(p.showMobileReceipt=!0),C()}function wr(e){p.showMobileReceipt=e,C()}function vr(e){p.reportsTab=e,C()}function yr(e){p.repairTab=e,C()}function kr(e,t=null){p.repairViewMode=e,t&&(p.selectedRepairDevice=t),C()}function _r(e){p.gridCols=e,C()}function Nl(e,t=null,s=null){p.clientViewMode=e,t&&(p.selectedClient=t),s&&(p.selectedClientId=s),e!=="invoice"&&(p.clientInvoiceId=null),C()}function Sr(e){p.clientInvoiceId=e,p.clientViewMode="invoice",C()}function Er(e){p.schemesTab=e,C()}function $r(e){p.activeSchemeBrand=e,C()}function Ir(e){p.activeScheme=e,C()}function Rr(e){p.showSchemeDetails=e,C()}function Cr(e){p.marketplaceTab=e,C()}function Ar(e){p.marketplaceViewMode=e,C()}function Tr(e,t,s){p.retailerId=e,p.retailerCode=t,p.retailerName=s,localStorage.setItem("retaileros_retailer_id",e),localStorage.setItem("retaileros_retailer_code",t),localStorage.setItem("retaileros_retailer_name",s)}function ql(){p.retailerId=null,p.retailerCode=null,p.retailerName=null,localStorage.removeItem("retaileros_retailer_id"),localStorage.removeItem("retaileros_retailer_code"),localStorage.removeItem("retaileros_retailer_name")}function Mr(){return p.retailerId}function Dr(e){p.isLoggedIn=e,e?localStorage.setItem("retaileros_logged_in","true"):(localStorage.removeItem("retaileros_logged_in"),ql());const t=window.innerWidth<768;p.currentApp=e?t?"launcher":"sales":"launcher",C()}function Lr(e){p.authMode=e,p.registrationStep=1,C()}function Or(e){p.registrationStep=e,window.updateAuthContent?window.updateAuthContent():C()}function jr(e){p.inquiryViewMode=e,C()}function Pr(e){p.activeInquiry=e,C()}function Nr(e){p.preBookingViewMode=e,C()}function qr(e){p.activeCampaign=e,C()}function Br(e){p.automationViewMode=e,C()}function Fr(e){p.activeAutomationId=e,C()}window.triggerRender=C;window.setApp=br;window.setTab=hr;window.setSalesHistoryId=gr;window.toggleMobileReceipt=wr;window.setReportsTab=vr;window.setRepairTab=yr;function Bl(e){p.salesMode=e,C()}window.setSalesMode=Bl;function Ur(e){p.historyViewMode=e,C()}function Vr(e){p.historyDateFilter=e,e!=="custom"&&(p.historyFromDate="",p.historyToDate=""),C()}function Hr(e,t){p.historyFromDate=e,p.historyToDate=t,p.historyDateFilter="custom",C()}window.setHistoryViewMode=Ur;window.setHistoryDateFilter=Vr;window.setHistoryCustomDates=Hr;window.setRepairMode=kr;window.setGridCols=_r;window.setClientMode=Nl;window.viewClientInvoice=Sr;window.setSchemesTab=Er;window.setSchemeBrand=$r;window.setScheme=Ir;window.toggleSchemeDetails=Rr;window.setMarketplaceTab=Cr;window.setMarketplaceViewMode=Ar;function Gr(e){p.myStoreTab=e,p.myStoreViewMode="list",C()}function Wr(e){p.myStoreViewMode=e,C()}function zr(e){p.activeStoreOrderId=e,p.myStoreViewMode="order-detail",C()}function Yr(e){p.activeListingId=e,C()}window.setMyStoreTab=Gr;window.setMyStoreViewMode=Wr;window.setActiveStoreOrder=zr;window.setActiveListing=Yr;window.setRetailer=Tr;window.clearRetailer=ql;window.getRetailerId=Mr;window.setLoginStatus=Dr;window.setAuthMode=Lr;window.setRegistrationStep=Or;window.setInquiryViewMode=jr;window.setActiveInquiry=Pr;window.setPreBookingViewMode=Nr;window.setActiveCampaign=qr;window.setAutomationViewMode=Br;window.setActiveAutomation=Fr;function Jr(e){p.groupViewMode=e,C()}function Kr(e){p.selectedGroupId=e,C()}window.setGroupViewMode=Jr;window.setSelectedGroup=Kr;function Qr(){const e=window._pushNotificationsEnabled!==!1;window._pushNotificationsEnabled=!e,localStorage.setItem("retaileros_push_notifications",e?"false":"true"),C()}window.togglePushNotifications=Qr;const Xr="modulepreload",Zr=function(e){return"/"+e},el={},Ys=function(t,s,a){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(s.map(d=>{if(d=Zr(d),d in el)return;el[d]=!0;const c=d.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const x=document.createElement("link");if(x.rel=c?"stylesheet":Xr,c||(x.as="script"),x.crossOrigin="",x.href=d,r&&x.setAttribute("nonce",r),document.head.appendChild(x),c)return new Promise((b,v)=>{x.addEventListener("load",b),x.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(i){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i}return n.then(i=>{for(const r of i||[])r.status==="rejected"&&l(r.reason);return t().catch(l)})};function Fl(e){const t=e==="mobile";return`
        <div class="h-full w-full flex flex-col items-center justify-center p-6 animate-slide-up">
            ${t?`
                <!-- Logo + Branding for mobile -->
                <div class="text-center mb-10">
                    <img src="/ros-logo.jpeg" alt="RetailerOS" class="w-20 h-20 rounded-3xl object-cover shadow-xl mx-auto mb-4">
                    <h1 class="text-lg font-black text-slate-900 tracking-tight">RetailerOS</h1>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Retail Store Management</p>
                </div>
            `:`
                <!-- Header Section (Subtle for Sidebar) -->
                <div class="text-center mb-8">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Enterprise Authentication</p>
                </div>
            `}

            <!-- Login Content -->
            <div class="w-full max-w-sm space-y-8">
                <div>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Mobile Number or Store Code</p>
                    <div class="relative group">
                        <input type="text" id="login-identifier" placeholder="e.g. 9876543210 or ROS-20260206-0001" class="w-full h-14 pl-5 pr-12 bg-white border border-slate-100 rounded-2xl text-xs font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 transition-all shadow-sm">
                        <span class="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">store</span>
                    </div>
                </div>

                <div id="login-error" class="hidden">
                    <div class="p-3 bg-slate-100 border border-slate-200 rounded-xl">
                        <p class="text-[10px] font-bold text-slate-600" id="login-error-text"></p>
                    </div>
                </div>

                <div class="pt-4 space-y-3">
                    <button id="login-btn" onclick="window.loginWithCredentials()" class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                        Authenticate
                    </button>
                    <button class="w-full py-4 bg-white border border-slate-200 text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                         <span class="material-icons-outlined text-lg">qr_code_scanner</span> Scan Store QR
                    </button>
                </div>

                ${t?`
                    <div class="pt-2 space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="flex-1 h-px bg-slate-100"></div>
                            <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest">or</span>
                            <div class="flex-1 h-px bg-slate-100"></div>
                        </div>
                        <button onclick="setAuthMode('register')" class="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
                            <span class="material-icons-outlined text-sm">add_business</span>
                            Register New Store
                        </button>
                    </div>
                `:""}

                <div class="text-center">
                    <button class="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors">Forgot PIN?</button>
                </div>
            </div>

            <!-- Bottom Footnote -->
            <div class="mt-12 flex items-center gap-2 opacity-30">
                <span class="material-icons-outlined text-slate-400 text-sm">verified_user</span>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">End-to-end Encrypted</p>
            </div>

            ${t?`
                <p class="text-center text-[7px] font-bold text-slate-300 uppercase tracking-[0.15em] mt-6">A product of Khosha Systems</p>
            `:""}
        </div>
    `}window.loginWithCredentials=async function(){const e=document.getElementById("login-identifier"),t=e?e.value.trim():"",s=document.getElementById("login-error"),a=document.getElementById("login-error-text"),n=document.getElementById("login-btn");if(!t){s&&a&&(a.textContent="Please enter your mobile number or store code.",s.classList.remove("hidden"));return}s&&s.classList.add("hidden"),n&&(n.disabled=!0,n.textContent="Authenticating...");try{const{query:l}=await Ys(async()=>{const{query:d}=await Promise.resolve().then(()=>Mn);return{query:d}},void 0);let i=null;if(/^\d{10}$/.test(t)){const d=await l("SELECT * FROM retailers WHERE mobile_number = ? AND status = 'active' LIMIT 1",[t]);d.length>0&&(i=d[0])}if(!i){const d=await l("SELECT * FROM retailers WHERE retailer_code = ? AND status = 'active' LIMIT 1",[t.toUpperCase()]);d.length>0&&(i=d[0])}if(!i){s&&a&&(a.textContent="No registered store found. Please check your mobile number or store code, or register first.",s.classList.remove("hidden"));return}window.setRetailer(i.id,i.retailer_code,i.retailer_name);const{syncData:r}=await Ys(async()=>{const{syncData:d}=await Promise.resolve().then(()=>Ji);return{syncData:d}},void 0);await r(),window.setLoginStatus(!0)}catch(l){console.error("Login failed:",l),s&&a&&(a.textContent="Login failed: "+l.message,s.classList.remove("hidden"))}finally{n&&(n.disabled=!1,n.textContent="Authenticate")}};function Js(e="mobile"){return e==="desktop-primary"?eo():e==="desktop-secondary"?to():so()}function eo(){const e=p.registrationStep;return e===3?`
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
                <div class="animate-slide-up max-w-md">
                    <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-icons-outlined text-slate-900 text-5xl">check_circle</span>
                    </div>
                    <h2 class="text-2xl font-black text-slate-900 mb-3">Almost There!</h2>
                    <p class="text-sm text-slate-500 mb-8">Please review and confirm your store details in the right panel to complete registration.</p>

                    <div class="space-y-3">
                        <div class="flex items-center gap-3 p-4 bg-slate-100 border border-slate-200 rounded-xl">
                            <div class="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-white text-sm">done</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-slate-900 uppercase">Mobile Verified</p>
                                <p class="text-xs text-slate-600">+91 98765 43210</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                            <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-600 text-sm">arrow_forward</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-slate-600 uppercase">Next Step</p>
                                <p class="text-xs text-slate-500">Confirm store details →</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-6 flex items-center gap-2">
                    <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure Encryption</p>
                </div>
            </div>
        `:`
        <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
            ${yn(e)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
        </div>
    `}function to(){return p.registrationStep<3?`
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-slate-50/50 dot-grid relative overflow-hidden text-center">
                <div class="opacity-40 text-center">
                    <div class="w-20 h-20 bg-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
                        <span class="material-icons-outlined text-slate-400 text-4xl">store</span>
                    </div>
                    <h2 class="text-xl font-black text-slate-400 mb-2">Store Details</h2>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coming up next...</p>
                    <div class="mt-8 space-y-2">
                        ${["Store Name","Owner Details","GSTIN","Store Type"].map(t=>`
                            <div class="h-12 bg-white/50 border border-slate-200 rounded-xl"></div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `:`
        <div class="h-full w-full flex flex-col p-8 bg-white relative overflow-y-auto custom-scrollbar">
            ${yn(3)}
        </div>
    `}function so(){const e=p.registrationStep;return`
        <div class="h-full w-full flex flex-col items-center justify-center p-4 md:p-6 bg-white dot-grid relative overflow-y-auto">
            <div class="w-full flex-1 flex items-center justify-center py-8">
                ${yn(e)}
            </div>

            <div class="flex items-center gap-2 pb-4">
                <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 rounded-full mb-3"></div>
        </div>
    `}function yn(e){let t="";if(e===1)t=`
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                 <div class="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto">
                    <span class="material-icons-outlined text-white text-3xl">terminal</span>
                </div>
                <h1 class="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 mb-1">Registration</h1>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 md:mb-12">RetailerOS Enterprise</p>

                <div class="card p-6 md:p-8 border-slate-100 shadow-xl text-left">
                    <p class="text-[9px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Enter Mobile Number</p>
                    <div class="flex items-center gap-2 mb-6 md:mb-8">
                         <div class="h-14 md:h-14 px-3 md:px-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2 shrink-0">
                            <div class="w-6 h-4 bg-slate-900 rounded-sm"></div>
                            <span class="text-sm font-black text-slate-900">+91</span>
                         </div>
                         <input
                            type="tel"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            maxlength="10"
                            id="mobile-input"
                            placeholder="00000 00000"
                            class="flex-1 h-14 px-4 md:px-5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-black text-slate-900 tracking-wider focus:border-slate-900 focus:outline-none transition-colors">
                    </div>
                    <button onclick="window.requestOtp()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl active:scale-98 transition-transform">
                        Request OTP
                    </button>
                </div>

                <p class="mt-6 md:mt-8 px-4 md:px-12 text-[8px] font-medium text-slate-400 leading-relaxed text-center">By continuing, you agree to our <span class="text-slate-900 underline">Terms of Service</span> and <span class="text-slate-900 underline">Privacy Policy</span></p>
            </div>
        `;else if(e===2)t=`
            <div class="animate-slide-up w-full max-w-sm mx-auto px-4 md:px-0">
                 <header class="flex items-center justify-between mb-8 md:mb-12 w-full">
                    <button onclick="window.setRegistrationStep(1)" class="w-10 h-10 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg">
                        <span class="material-icons-outlined text-white text-xl">terminal</span>
                    </div>
                    <div class="w-10 md:w-8"></div>
                </header>

                <div class="text-left w-full">
                    <h1 class="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2">Verify OTP</h1>
                    <p class="text-xs md:text-[11px] font-bold text-slate-400 leading-relaxed mb-2">We've sent a 6-digit code to <span class="text-slate-950">+91 ${(window._approvedRetailerData||{}).MobileNumber||"your number"}</span></p>
                    <div class="mb-6 md:mb-8 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                        <p class="text-[10px] font-bold text-slate-600 mb-1">Development Mode</p>
                        <p class="text-[9px] text-slate-500">Use default OTP: <span class="font-black text-slate-900">444619</span> or any 6-digit code</p>
                    </div>

                    <div class="grid grid-cols-6 gap-2 md:gap-2 mb-6 md:mb-8" id="otp-container">
                        ${[0,1,2,3,4,5].map(n=>`
                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]"
                                maxlength="1"
                                id="otp-${n}"
                                class="h-16 md:h-14 bg-white border-2 border-slate-100 rounded-xl text-center text-2xl md:text-xl font-black text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                                onkeydown="window.handleOtpKeydown(event, ${n})"
                                oninput="window.handleOtpInput(event, ${n})"
                                onpaste="window.handleOtpPaste(event)"
                            />`).join("")}
                    </div>

                    <p class="text-[10px] md:text-[10px] font-bold text-slate-400 text-center mb-8 md:mb-12">
                        Didn't receive the code? <button onclick="window.resendOtp()" class="text-slate-500 underline">Resend Code</button>
                    </p>

                    <button onclick="window.verifyOtp()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5 active:scale-98 transition-transform">
                        Verify & Proceed
                    </button>
                </div>
            </div>
        `;else if(e===3){const s=window._approvedRetailerData||{};t=`
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                <header class="flex items-center justify-between mb-6 md:mb-8">
                    <button onclick="window.setRegistrationStep(2)" class="w-10 h-10 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="flex gap-1">
                        <div class="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                        <div class="w-4 h-1.5 bg-slate-950 rounded-full"></div>
                    </div>
                </header>

                <div class="text-center mb-6 md:mb-8">
                    <h1 class="text-xl md:text-2xl font-black tracking-tighter text-slate-900 mb-1">Confirm Store Details</h1>
                    <p class="text-[9px] font-bold text-slate-400 leading-relaxed px-2">Please verify the business information retrieved from your profile.</p>
                </div>

                <div class="space-y-3 mb-6 md:mb-8">
                    ${[{l:"STORE NAME",v:s.RetailerName||"N/A"},{l:"OWNER NAME",v:s.ContactPerson||"N/A"},{l:"MOBILE NUMBER",v:s.MobileNumber||"N/A"},{l:"GSTIN",v:s.VATNnumber||"N/A"},{l:"EMAIL",v:s.Email||"N/A"},{l:"CITY",v:s.CityName||"N/A"},{l:"STATE",v:s.StateName||"N/A"}].map(a=>`
                        <div class="card p-4 border-slate-100 flex items-center justify-between">
                            <div class="text-left flex-1 min-w-0">
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1">${a.l}</p>
                                <p class="text-[11px] md:text-[11px] font-black text-slate-900 truncate">${a.v}</p>
                            </div>
                             <div class="w-5 h-5 bg-slate-950 rounded-md flex items-center justify-center shrink-0 ml-3"><span class="material-icons-outlined text-white text-xs">done</span></div>
                        </div>
                    `).join("")}
                </div>

                <button onclick="window.finalizeRegistration()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5 active:scale-98 transition-transform">
                    Finalize Setup
                </button>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mt-4 md:mt-6 opacity-40 text-center">Details can be edited later in settings</p>
            </div>
        `}return t}window.handleOtpInput=function(e,t){const s=e.target.value;if(s&&!/^\d$/.test(s)){e.target.value="";return}if(s&&t<5){const a=document.getElementById(`otp-${t+1}`);a&&a.focus()}};window.handleOtpKeydown=function(e,t){if(e.key==="Backspace"){if(!document.getElementById(`otp-${t}`).value&&t>0){const a=document.getElementById(`otp-${t-1}`);a&&(a.focus(),a.select())}}else if(e.key==="ArrowLeft"&&t>0){e.preventDefault();const s=document.getElementById(`otp-${t-1}`);s&&s.focus()}else if(e.key==="ArrowRight"&&t<5){e.preventDefault();const s=document.getElementById(`otp-${t+1}`);s&&s.focus()}else e.key==="Enter"&&(e.preventDefault(),window.verifyOtp())};window.handleOtpPaste=function(e){e.preventDefault();const t=e.clipboardData.getData("text").trim();if(/^\d{6}$/.test(t)){for(let a=0;a<6;a++){const n=document.getElementById(`otp-${a}`);n&&(n.value=t[a])}const s=document.getElementById("otp-5");s&&s.focus()}};window.requestOtp=async function(){const e=document.getElementById("mobile-input"),t=e?e.value.trim():"";if(!t||t.length!==10){alert("Please enter a valid 10-digit mobile number");return}try{const{db:s}=await Ys(async()=>{const{db:l}=await Promise.resolve().then(()=>Mn);return{db:l}},void 0);if(await s.retailers.isRegistered(t)){alert("This mobile number is already registered. Please login instead."),window.setAuthMode("login");return}const n=await s.approved.checkApproval(t);if(!n){alert("This mobile number is not approved for registration. Please contact support.");return}window._approvedRetailerData=n,console.log("Sending OTP to:",t),window.setRegistrationStep(2),setTimeout(()=>{const l=document.getElementById("otp-0");l&&l.focus()},100)}catch(s){console.error("Approval check failed:",s),s.message&&s.message.includes("401")?alert(`Database authentication error. Please contact the system administrator.

Technical: External database token has expired.`):s.message&&s.message.includes("network")?alert("Network connection error. Please check your internet connection and try again."):alert(`Unable to verify approval status. Please try again.

If the problem persists, contact support.

Error: `+s.message)}};window.verifyOtp=function(){const e=[];for(let a=0;a<6;a++){const n=document.getElementById(`otp-${a}`);n&&e.push(n.value)}const t=e.join("");if(t.length!==6){alert("Please enter all 6 digits");return}const s="444619";console.log("Verifying OTP:",t),t===s?console.log("✅ Default OTP accepted:",s):console.log("ℹ️  Development mode: Any OTP accepted"),window.setRegistrationStep(3)};window.resendOtp=function(){for(let t=0;t<6;t++){const s=document.getElementById(`otp-${t}`);s&&(s.value="")}const e=document.getElementById("otp-0");e&&e.focus(),console.log("Resending OTP..."),alert("OTP has been resent successfully!")};window.finalizeRegistration=async function(){try{const e=window._approvedRetailerData;if(!e){alert("Session expired. Please start registration again."),window.setRegistrationStep(1);return}const{db:t}=await Ys(async()=>{const{db:n}=await Promise.resolve().then(()=>Mn);return{db:n}},void 0),s=await t.retailers.add(e);window.setRetailer(s.id,s.retailerCode,e.RetailerName),localStorage.setItem("retaileros_logged_in","true"),delete window._approvedRetailerData;const{syncData:a}=await Ys(async()=>{const{syncData:n}=await Promise.resolve().then(()=>Ji);return{syncData:n}},void 0);await a(),window.setLoginStatus(!0),console.log("Registration completed successfully:",s)}catch(e){console.error("Registration failed:",e),alert("Registration failed. Please try again.")}};function Ul(){return p.authMode==="register"?Js("mobile"):Fl("mobile")}const ao=[{n:"ALERTS",i:"notifications",k:"notifications"},{n:"SALES DESK",i:"account_balance_wallet",k:"sales"},{n:"CLIENTS",i:"group",k:"clients"},{n:"INQUIRIES",i:"help_outline",k:"inquiries"},{n:"PROMOTERS",i:"business_center",k:"promoters"},{n:"MY STORE",i:"storefront",k:"mystore"},{n:"INVENTORY",i:"inventory_2",k:"inventory"},{n:"REPAIRS",i:"build",k:"repairs"},{n:"MARKETPLACE",i:"swap_horizontal_circle",k:"marketplace"},{n:"CLAIMS",i:"verified_user"},{n:"SCHEMES",i:"percent",k:"schemes"},{n:"MARKETING",i:"campaign",k:"marketing"},{n:"AUTOMATION",i:"smart_toy",s:!0,k:"automation"},{n:"PRE-BOOKING",i:"rocket_launch",k:"prebooking"},{n:"REPORTS",i:"bar_chart",k:"reports"},{n:"SETTINGS",i:"settings",k:"settings"}];function no(e){const t=e?p.gridCols:4,s=e&&{2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4"}[t]||"grid-cols-4",a=window.getNotificationCount?window.getNotificationCount():0;return`
        <div class="card overflow-hidden border-slate-200">
            <div class="grid ${s} divide-x divide-y divide-slate-100">
                ${ao.map(n=>{const i=n.k==="notifications"&&a>0;return`
                    <button onclick="setApp('${n.k||"launcher"}')" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all ${p.currentApp===n.k?"bg-slate-100":""}">
                        <div class="relative">
                            <span class="${n.s?"material-symbols-outlined":"material-icons-outlined"} text-2xl ${p.currentApp===n.k?"text-slate-900 font-bold":"text-slate-500"} mb-1">${n.i}</span>
                            ${i?'<span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>':""}
                        </div>
                        <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${p.currentApp===n.k?"text-slate-900":"text-slate-500"} ${n.n.length>10?"max-w-[90%]":""}">${n.n}</span>
                    </button>
                    `}).join("")}
            </div>
        </div>
    `}function lo(e){return`
        <footer class="p-4 bg-[#F8FAFC]/95 backdrop-blur-md border-t border-slate-100 shrink-0 mt-auto sticky bottom-0 z-20">
            ${p.isLoggedIn?`
                <p class="text-center text-[11px] font-black text-slate-900/[0.12] uppercase tracking-[0.35em] mb-2 select-none pointer-events-none">RetailerOS</p>
                <div class="card p-3 flex items-center justify-between border-slate-200/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-900 shadow-inner">AM</div>
                        <div class="text-left ${e?"":"hidden xl:block"}">
                            <p class="text-xs font-black text-slate-900">Arjun M.</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Apple Store - Mumbai Central</p>
                        </div>
                    </div>
                    <button onclick="setLoginStatus(false)" class="flex items-center gap-2 group p-1.5 hover:bg-slate-50 rounded-lg transition-all" title="Logout">
                            <span class="material-icons-outlined text-lg text-slate-900 group-hover:text-slate-400 transition-all">logout</span>
                    </button>
                </div>
            `:`
                ${p.authMode==="login"?`
                    <button onclick="setAuthMode('register')" class="w-full h-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center gap-4 group hover:scale-[1.02] active:scale-95 transition-all shadow-2xl">
                            <span class="text-[10px] font-black uppercase tracking-widest">Register New Store</span>
                            <span class="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <button onclick="setAuthMode('login')" class="w-full mt-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-950 transition-colors">Already have an ID? Login</button>
                `:`
                    <button onclick="setAuthMode('login')" class="w-full h-14 border-2 border-slate-950 text-slate-950 rounded-2xl flex items-center justify-center gap-4 group hover:bg-slate-50 transition-all">
                            <span class="text-[10px] font-black uppercase tracking-widest">Back to Login</span>
                            <span class="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform rotate-180">arrow_forward</span>
                    </button>
                `}
            `}
            <p class="text-center text-[7px] font-bold text-slate-300 uppercase tracking-[0.15em] mt-3">A product of Khosha Systems</p>
        </footer>
    `}function Vl(e){const t=e==="mobile";return`
        <div class="flex flex-col min-h-full w-full">
            <header class="px-5 sm:px-8 pt-5 sm:pt-8 pb-3 shrink-0">
                <div class="flex items-center justify-between">
                     <div class="flex items-center gap-3.5">
                        <img src="/ros-logo.jpeg" alt="RetailerOS" class="w-14 h-14 rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow">
                        <div class="text-left">
                            ${p.isLoggedIn&&p.retailerName?`<p class="text-xs font-black text-slate-900 tracking-tight leading-tight">${p.retailerName}</p>`:""}
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ${p.isLoggedIn&&p.retailerName?"mt-0.5":""}">${new Date().toLocaleDateString("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric"})} · ${new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}</p>
                        </div>
                     </div>
                     ${t?`
                     <button class="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-all">
                        <span class="material-symbols-outlined text-lg text-slate-600">search</span>
                     </button>`:""}
                </div>
            </header>

            <div class="flex-1 px-6 relative pb-4 overflow-y-auto custom-scrollbar">
                ${p.isLoggedIn?`
                    ${no(t)}

                    <!-- News Ticker -->
                    <div class="news-ticker-container mt-6">
                        <div class="news-ticker">
                            <span class="text-[9px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-6">
                                <span class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse"></div> TELECOM: 5G rollout reaches 92% urban coverage</span>
                            </span>
                        </div>
                    </div>
                `:`
                    <!-- Auth View (Login only in desktop, full auth in mobile) -->
                    <div id="auth-container" class="h-full w-full py-10">
                         ${t?Ul():Fl()}
                    </div>
                `}
            </div>

            ${lo(t)}
        </div>
    `}class q extends Error{constructor(s,a,n,l,i){a!==void 0&&(s=`${a}: ${s}`);super(s,{cause:i});j(this,"code");j(this,"extendedCode");j(this,"rawCode");this.code=a,this.extendedCode=n,this.rawCode=l,this.name="LibsqlError"}}class as extends q{constructor(s,a,n,l,i,r){super(s,n,l,i,r);j(this,"statementIndex");this.statementIndex=a,this.name="LibsqlBatchError"}}function io(e){const t=ro.exec(e);if(t===null)throw new q(`The URL '${e}' is not in a valid format`,"URL_INVALID");const s=t.groups,a=s.scheme,n=s.authority!==void 0?oo(s.authority):void 0,l=zt(s.path),i=s.query!==void 0?po(s.query):void 0,r=s.fragment!==void 0?zt(s.fragment):void 0;return{scheme:a,authority:n,path:l,query:i,fragment:r}}const ro=(()=>{const e="(?<scheme>[A-Za-z][A-Za-z.+-]*)",t="(?<authority>[^/?#]*)",s="(?<path>[^?#]*)",a="(?<query>[^#]*)",n="(?<fragment>.*)";return new RegExp(`^${e}:(//${t})?${s}(\\?${a})?(#${n})?$`,"su")})();function oo(e){const t=co.exec(e);if(t===null)throw new q("The authority part of the URL is not in a valid format","URL_INVALID");const s=t.groups,a=zt(s.host_br??s.host),n=s.port?parseInt(s.port,10):void 0,l=s.username!==void 0?{username:zt(s.username),password:s.password!==void 0?zt(s.password):void 0}:void 0;return{host:a,port:n,userinfo:l}}const co=new RegExp("^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$","su");function po(e){const t=e.split("&"),s=[];for(const a of t){if(a==="")continue;let n,l;const i=a.indexOf("=");i<0?(n=a,l=""):(n=a.substring(0,i),l=a.substring(i+1)),s.push({key:zt(n.replaceAll("+"," ")),value:zt(l.replaceAll("+"," "))})}return{pairs:s}}function zt(e){try{return decodeURIComponent(e)}catch(t){throw t instanceof URIError?new q(`URL component has invalid percent encoding: ${t}`,"URL_INVALID",void 0,void 0,t):t}}function Qa(e,t,s){if(t===void 0)throw new q(`URL with scheme ${JSON.stringify(e+":")} requires authority (the "//" part)`,"URL_INVALID");const a=`${e}:`,n=uo(t.host),l=fo(t.port),r=`//${xo(t.userinfo)}${n}${l}`;let d=s.split("/").map(encodeURIComponent).join("/");return d!==""&&!d.startsWith("/")&&(d="/"+d),new URL(`${a}${r}${d}`)}function uo(e){return e.includes(":")?`[${encodeURI(e)}]`:encodeURI(e)}function fo(e){return e!==void 0?`:${e}`:""}function xo(e){if(e===void 0)return"";const t=encodeURIComponent(e.username),s=e.password!==void 0?`:${encodeURIComponent(e.password)}`:"";return`${t}${s}@`}const Hl="3.7.8",mo=Hl,Ts=typeof Buffer=="function",tl=typeof TextDecoder=="function"?new TextDecoder:void 0,sl=typeof TextEncoder=="function"?new TextEncoder:void 0,bo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",js=Array.prototype.slice.call(bo),ha=(e=>{let t={};return e.forEach((s,a)=>t[s]=a),t})(js),ho=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,ae=String.fromCharCode.bind(String),al=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),Gl=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),Wl=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),zl=e=>{let t,s,a,n,l="";const i=e.length%3;for(let r=0;r<e.length;){if((s=e.charCodeAt(r++))>255||(a=e.charCodeAt(r++))>255||(n=e.charCodeAt(r++))>255)throw new TypeError("invalid character found");t=s<<16|a<<8|n,l+=js[t>>18&63]+js[t>>12&63]+js[t>>6&63]+js[t&63]}return i?l.slice(0,i-3)+"===".substring(i):l},kn=typeof btoa=="function"?e=>btoa(e):Ts?e=>Buffer.from(e,"binary").toString("base64"):zl,Xa=Ts?e=>Buffer.from(e).toString("base64"):e=>{let s=[];for(let a=0,n=e.length;a<n;a+=4096)s.push(ae.apply(null,e.subarray(a,a+4096)));return kn(s.join(""))},va=(e,t=!1)=>t?Gl(Xa(e)):Xa(e),go=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?ae(192|t>>>6)+ae(128|t&63):ae(224|t>>>12&15)+ae(128|t>>>6&63)+ae(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return ae(240|t>>>18&7)+ae(128|t>>>12&63)+ae(128|t>>>6&63)+ae(128|t&63)}},wo=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Yl=e=>e.replace(wo,go),nl=Ts?e=>Buffer.from(e,"utf8").toString("base64"):sl?e=>Xa(sl.encode(e)):e=>kn(Yl(e)),ns=(e,t=!1)=>t?Gl(nl(e)):nl(e),ll=e=>ns(e,!0),vo=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,yo=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),s=t-65536;return ae((s>>>10)+55296)+ae((s&1023)+56320);case 3:return ae((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return ae((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},Jl=e=>e.replace(vo,yo),Kl=e=>{if(e=e.replace(/\s+/g,""),!ho.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let t,s,a,n=[];for(let l=0;l<e.length;)t=ha[e.charAt(l++)]<<18|ha[e.charAt(l++)]<<12|(s=ha[e.charAt(l++)])<<6|(a=ha[e.charAt(l++)]),s===64?n.push(ae(t>>16&255)):a===64?n.push(ae(t>>16&255,t>>8&255)):n.push(ae(t>>16&255,t>>8&255,t&255));return n.join("")},_n=typeof atob=="function"?e=>atob(Wl(e)):Ts?e=>Buffer.from(e,"base64").toString("binary"):Kl,Ql=Ts?e=>al(Buffer.from(e,"base64")):e=>al(_n(e).split("").map(t=>t.charCodeAt(0))),Xl=e=>Ql(Zl(e)),ko=Ts?e=>Buffer.from(e,"base64").toString("utf8"):tl?e=>tl.decode(Ql(e)):e=>Jl(_n(e)),Zl=e=>Wl(e.replace(/[-_]/g,t=>t=="-"?"+":"/")),Za=e=>ko(Zl(e)),_o=e=>{if(typeof e!="string")return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},ei=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),ti=function(){const e=(t,s)=>Object.defineProperty(String.prototype,t,ei(s));e("fromBase64",function(){return Za(this)}),e("toBase64",function(t){return ns(this,t)}),e("toBase64URI",function(){return ns(this,!0)}),e("toBase64URL",function(){return ns(this,!0)}),e("toUint8Array",function(){return Xl(this)})},si=function(){const e=(t,s)=>Object.defineProperty(Uint8Array.prototype,t,ei(s));e("toBase64",function(t){return va(this,t)}),e("toBase64URI",function(){return va(this,!0)}),e("toBase64URL",function(){return va(this,!0)})},So=()=>{ti(),si()},Sn={version:Hl,VERSION:mo,atob:_n,atobPolyfill:Kl,btoa:kn,btoaPolyfill:zl,fromBase64:Za,toBase64:ns,encode:ns,encodeURI:ll,encodeURL:ll,utob:Yl,btou:Jl,decode:Za,isValid:_o,fromUint8Array:va,toUint8Array:Xl,extendString:ti,extendUint8Array:si,extendBuiltins:So},Ks="https://github.com/libsql/libsql-client-ts#supported-urls";function en(e){if(e==="write")return"BEGIN IMMEDIATE";if(e==="read")return"BEGIN TRANSACTION READONLY";if(e==="deferred")return"BEGIN DEFERRED";throw RangeError('Unknown transaction mode, supported values are "write", "read" and "deferred"')}class Eo{constructor(t,s,a,n,l){j(this,"columns");j(this,"columnTypes");j(this,"rows");j(this,"rowsAffected");j(this,"lastInsertRowid");this.columns=t,this.columnTypes=s,this.rows=a,this.rowsAffected=n,this.lastInsertRowid=l}toJSON(){return{columns:this.columns,columnTypes:this.columnTypes,rows:this.rows.map($o),rowsAffected:this.rowsAffected,lastInsertRowid:this.lastInsertRowid!==void 0?""+this.lastInsertRowid:null}}}function $o(e){return Array.prototype.map.call(e,Io)}function Io(e){return typeof e=="bigint"?""+e:e instanceof ArrayBuffer?Sn.fromUint8Array(new Uint8Array(e)):e}const il=":memory:";function Ro(e,t){var g,_;if(typeof e!="object")throw new TypeError(`Expected client configuration as object, got ${typeof e}`);let{url:s,authToken:a,tls:n,intMode:l,concurrency:i}=e;i=Math.max(0,i||20),l??(l="number");let r=[];s===il&&(s="file::memory:");const d=io(s),c=d.scheme.toLowerCase(),u=c==="file"&&d.path===il&&d.authority===void 0;let x;u?x={cache:{values:["shared","private"],update:(E,T)=>r.push(`${E}=${T}`)}}:x={tls:{values:["0","1"],update:(E,T)=>n=T==="1"},authToken:{update:(E,T)=>a=T}};for(const{key:E,value:T}of((g=d.query)==null?void 0:g.pairs)??[]){if(!Object.hasOwn(x,E))throw new q(`Unsupported URL query parameter ${JSON.stringify(E)}`,"URL_PARAM_NOT_SUPPORTED");const P=x[E];if(P.values!==void 0&&!P.values.includes(T))throw new q(`Unknown value for the "${E}" query argument: ${JSON.stringify(T)}. Supported values are: [${P.values.map(V=>'"'+V+'"').join(", ")}]`,"URL_INVALID");P.update!==void 0&&(P==null||P.update(E,T))}const b=r.length===0?"":`?${r.join("&")}`,v=d.path+b;let w;if(c==="libsql")if(n===!1){if(((_=d.authority)==null?void 0:_.port)===void 0)throw new q('A "libsql:" URL with ?tls=0 must specify an explicit port',"URL_INVALID");w="http"}else w="https";else w=c;if(w==="http"||w==="ws"?n??(n=!1):n??(n=!0),w!=="http"&&w!=="ws"&&w!=="https"&&w!=="wss"&&w!=="file")throw new q(`The client supports only "libsql:", "wss:", "ws:", "https:", "http:" and "file:" URLs, got ${JSON.stringify(d.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED");if(l!=="number"&&l!=="bigint"&&l!=="string")throw new TypeError(`Invalid value for intMode, expected "number", "bigint" or "string", got ${JSON.stringify(l)}`);if(d.fragment!==void 0)throw new q(`URL fragments are not supported: ${JSON.stringify("#"+d.fragment)}`,"URL_INVALID");return u?{scheme:"file",tls:!1,path:v,intMode:l,concurrency:i,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch,authToken:void 0,encryptionKey:void 0,remoteEncryptionKey:void 0,authority:void 0}:{scheme:w,tls:n,authority:d.authority,path:v,authToken:a,intMode:l,concurrency:i,encryptionKey:e.encryptionKey,remoteEncryptionKey:e.remoteEncryptionKey,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch}}let ts;typeof WebSocket<"u"?ts=WebSocket:typeof global<"u"?ts=global.WebSocket:typeof window<"u"?ts=window.WebSocket:typeof self<"u"&&(ts=self.WebSocket);class ai{constructor(){j(this,"intMode");this.intMode="number"}}class z extends Error{constructor(t){super(t),this.name="ClientError"}}class D extends z{constructor(t){super(t),this.name="ProtoError"}}class ni extends z{constructor(s,a){super(s);j(this,"code");j(this,"proto");this.name="ResponseError",this.code=a.code,this.proto=a,this.stack=void 0}}class Ce extends z{constructor(t,s){s!==void 0?(super(`${t}: ${s}`),this.cause=s):super(t),this.name="ClosedError"}}class li extends z{constructor(t){super(t),this.name="WebSocketUnsupportedError"}}class tn extends z{constructor(t){super(t),this.name="WebSocketError"}}class ya extends z{constructor(s,a){super(s);j(this,"status");this.status=a,this.name="HttpServerError"}}class Is extends z{constructor(t){super(t),this.name="ProtocolVersionError"}}class It extends z{constructor(t){super(t),this.name="InternalError"}}class Ms extends z{constructor(t){super(t),this.name="MisuseError"}}function Ne(e){if(typeof e=="string")return e;throw Ds(e,"string")}function Be(e){if(e!=null){if(typeof e=="string")return e;throw Ds(e,"string or null")}}function Yt(e){if(typeof e=="number")return e;throw Ds(e,"number")}function Qs(e){if(typeof e=="boolean")return e;throw Ds(e,"boolean")}function Ia(e){if(Array.isArray(e))return e;throw Ds(e,"array")}function ne(e){if(e!==null&&typeof e=="object"&&!Array.isArray(e))return e;throw Ds(e,"object")}function Rt(e,t){return Ia(e).map(s=>t(ne(s)))}function Ds(e,t){if(e===void 0)return new D(`Expected ${t}, but the property was missing`);let s=typeof e;return e===null?s="null":Array.isArray(e)&&(s="array"),new D(`Expected ${t}, received ${s}`)}function En(e,t){return t(ne(e))}var K,mt,Qe,Tt;class Co{constructor(t){y(this,Qe);y(this,K);y(this,mt);f(this,K,t),f(this,mt,!1)}begin(){o(this,K).push("{"),f(this,mt,!0)}end(){o(this,K).push("}"),f(this,mt,!1)}string(t,s){k(this,Qe,Tt).call(this,t),o(this,K).push(JSON.stringify(s))}stringRaw(t,s){k(this,Qe,Tt).call(this,t),o(this,K).push('"'),o(this,K).push(s),o(this,K).push('"')}number(t,s){k(this,Qe,Tt).call(this,t),o(this,K).push(""+s)}boolean(t,s){k(this,Qe,Tt).call(this,t),o(this,K).push(s?"true":"false")}object(t,s,a){k(this,Qe,Tt).call(this,t),this.begin(),a(this,s),this.end()}arrayObjects(t,s,a){k(this,Qe,Tt).call(this,t),o(this,K).push("[");for(let n=0;n<s.length;++n)n!==0&&o(this,K).push(","),this.begin(),a(this,s[n]),this.end();o(this,K).push("]")}}K=new WeakMap,mt=new WeakMap,Qe=new WeakSet,Tt=function(t){o(this,mt)?(o(this,K).push('"'),f(this,mt,!1)):o(this,K).push(',"'),o(this,K).push(t),o(this,K).push('":')};function ii(e,t){const s=[],a=new Co(s);return a.begin(),t(a,e),a.end(),s.join("")}const Ws=0,sn=1,an=2,Ao=5;var Ue,Xs,ye;class To{constructor(t){y(this,Ue);y(this,Xs);y(this,ye);f(this,Ue,t),f(this,Xs,new DataView(t.buffer,t.byteOffset,t.byteLength)),f(this,ye,0)}varint(){let t=0;for(let s=0;;s+=7){const a=o(this,Ue)[Xt(this,ye)._++];if(t|=(a&127)<<s,!(a&128))break}return t}varintBig(){let t=0n;for(let s=0n;;s+=7n){const a=o(this,Ue)[Xt(this,ye)._++];if(t|=BigInt(a&127)<<s,!(a&128))break}return t}bytes(t){const s=new Uint8Array(o(this,Ue).buffer,o(this,Ue).byteOffset+o(this,ye),t);return f(this,ye,o(this,ye)+t),s}double(){const t=o(this,Xs).getFloat64(o(this,ye),!0);return f(this,ye,o(this,ye)+8),t}skipVarint(){for(;o(this,Ue)[Xt(this,ye)._++]&128;);}skip(t){f(this,ye,o(this,ye)+t)}eof(){return o(this,ye)>=o(this,Ue).byteLength}}Ue=new WeakMap,Xs=new WeakMap,ye=new WeakMap;var fe,oe,jt,Ps;class Mo{constructor(t){y(this,jt);y(this,fe);y(this,oe);f(this,fe,t),f(this,oe,-1)}setup(t){f(this,oe,t)}bytes(){k(this,jt,Ps).call(this,an);const t=o(this,fe).varint();return o(this,fe).bytes(t)}string(){return new TextDecoder().decode(this.bytes())}message(t){return qa(this.bytes(),t)}int32(){return k(this,jt,Ps).call(this,Ws),o(this,fe).varint()}uint32(){return this.int32()}bool(){return this.int32()!==0}uint64(){return k(this,jt,Ps).call(this,Ws),o(this,fe).varintBig()}sint64(){const t=this.uint64();return t>>1n^-(t&1n)}double(){return k(this,jt,Ps).call(this,sn),o(this,fe).double()}maybeSkip(){if(!(o(this,oe)<0)){if(o(this,oe)===Ws)o(this,fe).skipVarint();else if(o(this,oe)===sn)o(this,fe).skip(8);else if(o(this,oe)===an){const t=o(this,fe).varint();o(this,fe).skip(t)}else if(o(this,oe)===Ao)o(this,fe).skip(4);else throw new D(`Unexpected wire type ${o(this,oe)}`);f(this,oe,-1)}}}fe=new WeakMap,oe=new WeakMap,jt=new WeakSet,Ps=function(t){if(o(this,oe)!==t)throw new D(`Expected wire type ${t}, got ${o(this,oe)}`);f(this,oe,-1)};function qa(e,t){const s=new To(e),a=new Mo(s);let n=t.default();for(;!s.eof();){const l=s.varint(),i=l>>3,r=l&7;a.setup(r);const d=t[i];if(d!==void 0){const c=d(a,n);c!==void 0&&(n=c)}a.maybeSkip()}return n}var Ae,bt,rs,xe,ee,Ns,ka,ri,qs;const Kn=class Kn{constructor(){y(this,ee);y(this,Ae);y(this,bt);y(this,rs);y(this,xe);f(this,Ae,new ArrayBuffer(256)),f(this,bt,new Uint8Array(o(this,Ae))),f(this,rs,new DataView(o(this,Ae))),f(this,xe,0)}bytes(t,s){k(this,ee,qs).call(this,t,an),k(this,ee,ka).call(this,s.byteLength),k(this,ee,Ns).call(this,s.byteLength),o(this,bt).set(s,o(this,xe)),f(this,xe,o(this,xe)+s.byteLength)}string(t,s){this.bytes(t,new TextEncoder().encode(s))}message(t,s,a){const n=new Kn;a(n,s),this.bytes(t,n.data())}int32(t,s){k(this,ee,qs).call(this,t,Ws),k(this,ee,ka).call(this,s)}uint32(t,s){this.int32(t,s)}bool(t,s){this.int32(t,s?1:0)}sint64(t,s){k(this,ee,qs).call(this,t,Ws),k(this,ee,ri).call(this,s<<1n^s>>63n)}double(t,s){k(this,ee,qs).call(this,t,sn),k(this,ee,Ns).call(this,8),o(this,rs).setFloat64(o(this,xe),s,!0),f(this,xe,o(this,xe)+8)}data(){return new Uint8Array(o(this,Ae),0,o(this,xe))}};Ae=new WeakMap,bt=new WeakMap,rs=new WeakMap,xe=new WeakMap,ee=new WeakSet,Ns=function(t){if(o(this,xe)+t<=o(this,Ae).byteLength)return;let s=o(this,Ae).byteLength;for(;s<o(this,xe)+t;)s*=2;const a=new ArrayBuffer(s),n=new Uint8Array(a),l=new DataView(a);n.set(new Uint8Array(o(this,Ae),0,o(this,xe))),f(this,Ae,a),f(this,bt,n),f(this,rs,l)},ka=function(t){k(this,ee,Ns).call(this,5),t=0|t;do{let s=t&127;t>>>=7,s|=t?128:0,o(this,bt)[Xt(this,xe)._++]=s}while(t)},ri=function(t){k(this,ee,Ns).call(this,10),t=t&0xffffffffffffffffn;do{let s=Number(t&0x7fn);t>>=7n,s|=t?128:0,o(this,bt)[Xt(this,xe)._++]=s}while(t)},qs=function(t,s){k(this,ee,ka).call(this,t<<3|s)};let nn=Kn;function oi(e,t){const s=new nn;return t(s,e),s.data()}var ke,Xe;class Bs{constructor(){y(this,ke);y(this,Xe);f(this,ke,new Set),f(this,Xe,new Set)}alloc(){for(const s of o(this,Xe))return o(this,Xe).delete(s),o(this,ke).add(s),o(this,ke).has(o(this,ke).size-1)||o(this,Xe).add(o(this,ke).size-1),s;const t=o(this,ke).size;return o(this,ke).add(t),t}free(t){if(!o(this,ke).delete(t))throw new It("Freeing an id that is not allocated");o(this,Xe).delete(o(this,ke).size),t<o(this,ke).size&&o(this,Xe).add(t)}}ke=new WeakMap,Xe=new WeakMap;function J(e,t){throw new It(t)}function zs(e){if(e===null)return null;if(typeof e=="string")return e;if(typeof e=="number"){if(!Number.isFinite(e))throw new RangeError("Only finite numbers (not Infinity or NaN) can be passed as arguments");return e}else if(typeof e=="bigint"){if(e<Do||e>Lo)throw new RangeError("This bigint value is too large to be represented as a 64-bit integer and passed as argument");return e}else{if(typeof e=="boolean")return e?1n:0n;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(e instanceof Uint8Array)return e;if(e instanceof Date)return+e.valueOf();if(typeof e=="object")return""+e.toString();throw new TypeError("Unsupported type of value")}}const Do=-9223372036854775808n,Lo=9223372036854775807n;function ci(e,t){if(e===null)return null;if(typeof e=="number")return e;if(typeof e=="string")return e;if(typeof e=="bigint")if(t==="number"){const s=Number(e);if(!Number.isSafeInteger(s))throw new RangeError("Received integer which is too large to be safely represented as a JavaScript number");return s}else{if(t==="bigint")return e;if(t==="string")return""+e;throw new Ms("Invalid value for IntMode")}else{if(e instanceof Uint8Array)return e.slice().buffer;throw e===void 0?new D("Received unrecognized type of Value"):J(e,"Impossible type of Value")}}function xa(e){return{affectedRowCount:e.affectedRowCount,lastInsertRowid:e.lastInsertRowid,columnNames:e.cols.map(t=>t.name),columnDecltypes:e.cols.map(t=>t.decltype)}}function di(e,t){const s=xa(e),a=e.rows.map(n=>fi(s.columnNames,n,t));return{...s,rows:a}}function pi(e,t){const s=xa(e);let a;return e.rows.length>0&&(a=fi(s.columnNames,e.rows[0],t)),{...s,row:a}}function ui(e,t){const s=xa(e);let a;return e.rows.length>0&&s.columnNames.length>0&&(a=ci(e.rows[0][0],t)),{...s,value:a}}function fi(e,t,s){const a={};Object.defineProperty(a,"length",{value:t.length});for(let n=0;n<t.length;++n){const l=ci(t[n],s);Object.defineProperty(a,n,{value:l});const i=e[n];i!==void 0&&!Object.hasOwn(a,i)&&Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0})}return a}function Rs(e){return new ni(e.message,e)}var os,cs,Ze;class $n{constructor(t,s){y(this,os);y(this,cs);y(this,Ze);f(this,os,t),f(this,cs,s),f(this,Ze,void 0)}_getSqlId(t){if(o(this,os)!==t)throw new Ms("Attempted to use SQL text opened with other object");if(o(this,Ze)!==void 0)throw new Ce("SQL text is closed",o(this,Ze));return o(this,cs)}close(){this._setClosed(new z("SQL text was manually closed"))}_setClosed(t){o(this,Ze)===void 0&&(f(this,Ze,t),o(this,os)._closeSql(o(this,cs)))}get closed(){return o(this,Ze)!==void 0}}os=new WeakMap,cs=new WeakMap,Ze=new WeakMap;function ln(e,t){return t instanceof $n?{sqlId:t._getSqlId(e)}:{sql:""+t}}var Ve,Te;class Ra{constructor(){y(this,Ve);y(this,Te);f(this,Ve,[]),f(this,Te,[])}get length(){return o(this,Ve).length+o(this,Te).length}push(t){o(this,Ve).push(t)}shift(){return o(this,Te).length===0&&o(this,Ve).length>0&&(f(this,Te,o(this,Ve).reverse()),f(this,Ve,[])),o(this,Te).pop()}first(){return o(this,Te).length!==0?o(this,Te)[o(this,Te).length-1]:o(this,Ve)[0]}}Ve=new WeakMap,Te=new WeakMap;let xi=class{constructor(t){j(this,"sql");j(this,"_args");j(this,"_namedArgs");this.sql=t,this._args=[],this._namedArgs=new Map}bindIndexes(t){this._args.length=0;for(const s of t)this._args.push(zs(s));return this}bindIndex(t,s){if(t!==(t|0)||t<=0)throw new RangeError("Index of a positional argument must be positive integer");for(;this._args.length<t;)this._args.push(null);return this._args[t-1]=zs(s),this}bindName(t,s){return this._namedArgs.set(t,zs(s)),this}unbindAll(){return this._args.length=0,this._namedArgs.clear(),this}};function mi(e,t,s){let a,n=[],l=[];if(t instanceof xi){a=t.sql,n=t._args;for(const[d,c]of t._namedArgs.entries())l.push({name:d,value:c})}else Array.isArray(t)?(a=t[0],Array.isArray(t[1])?n=t[1].map(d=>zs(d)):l=Object.entries(t[1]).map(([d,c])=>({name:d,value:zs(c)}))):a=t;const{sql:i,sqlId:r}=ln(e,a);return{sql:i,sqlId:r,args:n,namedArgs:l,wantRows:s}}var Zs,ds,Ml;let Oo=(Ml=class{constructor(t,s){j(this,"_stream");y(this,Zs);j(this,"_steps");y(this,ds);this._stream=t,f(this,Zs,s),this._steps=[],f(this,ds,!1)}step(){return new No(this)}execute(){if(o(this,ds))throw new Ms("This batch has already been executed");f(this,ds,!0);const t={steps:this._steps.map(s=>s.proto)};return o(this,Zs)?Po(this._stream,this._steps,t):jo(this._stream,this._steps,t)}},Zs=new WeakMap,ds=new WeakMap,Ml);function jo(e,t,s){return e._batch(s).then(a=>{for(let n=0;n<t.length;++n){const l=a.stepResults.get(n),i=a.stepErrors.get(n);t[n].callback(l,i)}})}async function Po(e,t,s){const a=await e._openCursor(s);try{let n=0,l,i=[];for(;;){const r=await a.next();if(r===void 0)break;if(r.type==="step_begin"){if(r.step<n||r.step>=t.length)throw new D("Server produced StepBeginEntry for unexpected step");if(l!==void 0)throw new D("Server produced StepBeginEntry before terminating previous step");for(let d=n;d<r.step;++d)t[d].callback(void 0,void 0);n=r.step+1,l=r,i=[]}else if(r.type==="step_end"){if(l===void 0)throw new D("Server produced StepEndEntry but no step is active");const d={cols:l.cols,rows:i,affectedRowCount:r.affectedRowCount,lastInsertRowid:r.lastInsertRowid};t[l.step].callback(d,void 0),l=void 0,i=[]}else if(r.type==="step_error"){if(l===void 0){if(r.step>=t.length)throw new D("Server produced StepErrorEntry for unexpected step");for(let d=n;d<r.step;++d)t[d].callback(void 0,void 0)}else{if(r.step!==l.step)throw new D("Server produced StepErrorEntry for unexpected step");l=void 0,i=[]}t[r.step].callback(void 0,r.error),n=r.step+1}else if(r.type==="row"){if(l===void 0)throw new D("Server produced RowEntry but no step is active");i.push(r.row)}else throw r.type==="error"?Rs(r.error):r.type==="none"?new D("Server produced unrecognized CursorEntry"):J(r,"Impossible CursorEntry")}if(l!==void 0)throw new D("Server closed Cursor before terminating active step");for(let r=n;r<t.length;++r)t[r].callback(void 0,void 0)}finally{a.close()}}var et,Pt,Fs,Dl;let No=(Dl=class{constructor(t){y(this,Pt);j(this,"_batch");y(this,et);j(this,"_index");this._batch=t,f(this,et,[]),this._index=void 0}condition(t){return o(this,et).push(t._proto),this}query(t){return k(this,Pt,Fs).call(this,t,!0,di)}queryRow(t){return k(this,Pt,Fs).call(this,t,!0,pi)}queryValue(t){return k(this,Pt,Fs).call(this,t,!0,ui)}run(t){return k(this,Pt,Fs).call(this,t,!1,xa)}},et=new WeakMap,Pt=new WeakSet,Fs=function(t,s,a){if(this._index!==void 0)throw new Ms("This BatchStep has already been added to the batch");const n=mi(this._batch._stream._sqlOwner(),t,s);let l;o(this,et).length===0?l=void 0:o(this,et).length===1?l=o(this,et)[0]:l={type:"and",conds:o(this,et).slice()};const i={stmt:n,condition:l};return new Promise((r,d)=>{const c=(u,x)=>{u!==void 0&&x!==void 0?d(new D("Server returned both result and error")):x!==void 0?d(Rs(x)):r(u!==void 0?a(u,this._batch._stream.intMode):void 0)};this._index=this._batch._steps.length,this._batch._steps.push({proto:i,callback:c})})},Dl),ge=class Mt{constructor(t,s){j(this,"_batch");j(this,"_proto");this._batch=t,this._proto=s}static ok(t){return new Mt(t._batch,{type:"ok",step:rl(t)})}static error(t){return new Mt(t._batch,{type:"error",step:rl(t)})}static not(t){return new Mt(t._batch,{type:"not",cond:t._proto})}static and(t,s){for(const a of s)ol(t,a);return new Mt(t,{type:"and",conds:s.map(a=>a._proto)})}static or(t,s){for(const a of s)ol(t,a);return new Mt(t,{type:"or",conds:s.map(a=>a._proto)})}static isAutocommit(t){return t._stream.client()._ensureVersion(3,"BatchCond.isAutocommit()"),new Mt(t,{type:"is_autocommit"})}};function rl(e){if(e._index===void 0)throw new Ms("Cannot add a condition referencing a step that has not been added to the batch");return e._index}function ol(e,t){if(t._batch!==e)throw new Ms("Cannot mix BatchCond objects for different Batch objects")}function qo(e){return{paramNames:e.params.map(t=>t.name),columns:e.cols,isExplain:e.isExplain,isReadonly:e.isReadonly}}var Nt,Us;class bi{constructor(t){y(this,Nt);j(this,"intMode");this.intMode=t}query(t){return k(this,Nt,Us).call(this,t,!0,di)}queryRow(t){return k(this,Nt,Us).call(this,t,!0,pi)}queryValue(t){return k(this,Nt,Us).call(this,t,!0,ui)}run(t){return k(this,Nt,Us).call(this,t,!1,xa)}batch(t=!1){return new Oo(this,t)}describe(t){const s=ln(this._sqlOwner(),t);return this._describe(s).then(qo)}sequence(t){const s=ln(this._sqlOwner(),t);return this._sequence(s)}}Nt=new WeakSet,Us=function(t,s,a){const n=mi(this._sqlOwner(),t,s);return this._execute(n).then(l=>a(l,this.intMode))};class hi{}const Bo=1e3,Fo=10;var ja,qt,ps,us,Bt,tt,Ft,Pa,gi;class Uo extends hi{constructor(s,a,n){super();y(this,Pa);y(this,ja);y(this,qt);y(this,ps);y(this,us);y(this,Bt);y(this,tt);y(this,Ft);f(this,ja,s),f(this,qt,a),f(this,ps,n),f(this,us,new Ra),f(this,Bt,new Ra),f(this,tt,void 0),f(this,Ft,!1)}async next(){for(;;){if(o(this,tt)!==void 0)throw new Ce("Cursor is closed",o(this,tt));for(;!o(this,Ft)&&o(this,Bt).length<Fo;)o(this,Bt).push(k(this,Pa,gi).call(this));const s=o(this,us).shift();if(o(this,Ft)||s!==void 0)return s;await o(this,Bt).shift().then(a=>{if(a!==void 0){for(const n of a.entries)o(this,us).push(n);o(this,Ft)||f(this,Ft,a.done)}})}}_setClosed(s){o(this,tt)===void 0&&(f(this,tt,s),o(this,qt)._sendCursorRequest(this,{type:"close_cursor",cursorId:o(this,ps)}).catch(()=>{}),o(this,qt)._cursorClosed(this))}close(){this._setClosed(new z("Cursor was manually closed"))}get closed(){return o(this,tt)!==void 0}}ja=new WeakMap,qt=new WeakMap,ps=new WeakMap,us=new WeakMap,Bt=new WeakMap,tt=new WeakMap,Ft=new WeakMap,Pa=new WeakSet,gi=function(){return o(this,qt)._sendCursorRequest(this,{type:"fetch_cursor",cursorId:o(this,ps),maxCount:Bo}).then(s=>s,s=>{this._setClosed(s)})};var se,Ie,st,_e,ht,Me,Q,Zt,on,_a,Sa;const Qn=class Qn extends bi{constructor(s,a){super(s.intMode);y(this,Q);y(this,se);y(this,Ie);y(this,st);y(this,_e);y(this,ht);y(this,Me);f(this,se,s),f(this,Ie,a),f(this,st,new Ra),f(this,_e,void 0),f(this,ht,!1),f(this,Me,void 0)}static open(s){const a=s._streamIdAlloc.alloc(),n=new Qn(s,a),l=()=>{},i=d=>{var c;return k(c=n,Q,Sa).call(c,d)},r={type:"open_stream",streamId:a};return s._sendRequest(r,{responseCallback:l,errorCallback:i}),n}client(){return o(this,se)}_sqlOwner(){return o(this,se)}_execute(s){return k(this,Q,Zt).call(this,{type:"execute",streamId:o(this,Ie),stmt:s}).then(a=>a.result)}_batch(s){return k(this,Q,Zt).call(this,{type:"batch",streamId:o(this,Ie),batch:s}).then(a=>a.result)}_describe(s){return o(this,se)._ensureVersion(2,"describe()"),k(this,Q,Zt).call(this,{type:"describe",streamId:o(this,Ie),sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return o(this,se)._ensureVersion(2,"sequence()"),k(this,Q,Zt).call(this,{type:"sequence",streamId:o(this,Ie),sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return o(this,se)._ensureVersion(3,"getAutocommit()"),k(this,Q,Zt).call(this,{type:"get_autocommit",streamId:o(this,Ie)}).then(s=>s.isAutocommit)}_openCursor(s){return o(this,se)._ensureVersion(3,"cursor"),new Promise((a,n)=>{k(this,Q,on).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_sendCursorRequest(s,a){if(s!==o(this,_e))throw new It("Cursor not associated with the stream attempted to execute a request");return new Promise((n,l)=>{o(this,Me)!==void 0?l(new Ce("Stream is closed",o(this,Me))):o(this,se)._sendRequest(a,{responseCallback:n,errorCallback:l})})}_cursorClosed(s){if(s!==o(this,_e))throw new It("Cursor was closed, but it was not associated with the stream");f(this,_e,void 0),k(this,Q,_a).call(this)}close(){k(this,Q,Sa).call(this,new z("Stream was manually closed"))}closeGracefully(){f(this,ht,!0),k(this,Q,_a).call(this)}get closed(){return o(this,Me)!==void 0||o(this,ht)}};se=new WeakMap,Ie=new WeakMap,st=new WeakMap,_e=new WeakMap,ht=new WeakMap,Me=new WeakMap,Q=new WeakSet,Zt=function(s){return new Promise((a,n)=>{k(this,Q,on).call(this,{type:"request",request:s,responseCallback:a,errorCallback:n})})},on=function(s){o(this,Me)!==void 0?s.errorCallback(new Ce("Stream is closed",o(this,Me))):o(this,ht)?s.errorCallback(new Ce("Stream is closing",void 0)):(o(this,st).push(s),k(this,Q,_a).call(this))},_a=function(){for(;;){const s=o(this,st).first();if(s===void 0&&o(this,_e)===void 0&&o(this,ht)){k(this,Q,Sa).call(this,new z("Stream was gracefully closed"));break}else if((s==null?void 0:s.type)==="request"&&o(this,_e)===void 0){const{request:a,responseCallback:n,errorCallback:l}=s;o(this,st).shift(),o(this,se)._sendRequest(a,{responseCallback:n,errorCallback:l})}else if((s==null?void 0:s.type)==="cursor"&&o(this,_e)===void 0){const{batch:a,cursorCallback:n}=s;o(this,st).shift();const l=o(this,se)._cursorIdAlloc.alloc(),i=new Uo(o(this,se),this,l),r={type:"open_cursor",streamId:o(this,Ie),cursorId:l,batch:a},d=()=>{},c=u=>i._setClosed(u);o(this,se)._sendRequest(r,{responseCallback:d,errorCallback:c}),f(this,_e,i),n(i)}else break}},Sa=function(s){if(o(this,Me)!==void 0)return;for(f(this,Me,s),o(this,_e)!==void 0&&o(this,_e)._setClosed(s);;){const i=o(this,st).shift();if(i!==void 0)i.errorCallback(s);else break}const a={type:"close_stream",streamId:o(this,Ie)},n=()=>o(this,se)._streamIdAlloc.free(o(this,Ie)),l=()=>{};o(this,se)._sendRequest(a,{responseCallback:n,errorCallback:l})};let rn=Qn;function In(e,t){t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId),e.arrayObjects("args",t.args,wi),e.arrayObjects("named_args",t.namedArgs,Vo),e.boolean("want_rows",t.wantRows)}function Vo(e,t){e.string("name",t.name),e.object("value",t.value,wi)}function Ca(e,t){e.arrayObjects("steps",t.steps,Ho)}function Ho(e,t){t.condition!==void 0&&e.object("condition",t.condition,cn),e.object("stmt",t.stmt,In)}function cn(e,t){if(e.stringRaw("type",t.type),t.type==="ok"||t.type==="error")e.number("step",t.step);else if(t.type==="not")e.object("cond",t.cond,cn);else if(t.type==="and"||t.type==="or")e.arrayObjects("conds",t.conds,cn);else if(t.type!=="is_autocommit")throw J(t,"Impossible type of BatchCond")}function wi(e,t){if(t===null)e.stringRaw("type","null");else if(typeof t=="bigint")e.stringRaw("type","integer"),e.stringRaw("value",""+t);else if(typeof t=="number")e.stringRaw("type","float"),e.number("value",t);else if(typeof t=="string")e.stringRaw("type","text"),e.string("value",t);else if(t instanceof Uint8Array)e.stringRaw("type","blob"),e.stringRaw("base64",Sn.fromUint8Array(t));else if(t!==void 0)throw J(t,"Impossible type of Value")}function Go(e,t){if(e.stringRaw("type",t.type),t.type==="hello")t.jwt!==void 0&&e.string("jwt",t.jwt);else if(t.type==="request")e.number("request_id",t.requestId),e.object("request",t.request,Wo);else throw J(t,"Impossible type of ClientMsg")}function Wo(e,t){if(e.stringRaw("type",t.type),t.type==="open_stream")e.number("stream_id",t.streamId);else if(t.type==="close_stream")e.number("stream_id",t.streamId);else if(t.type==="execute")e.number("stream_id",t.streamId),e.object("stmt",t.stmt,In);else if(t.type==="batch")e.number("stream_id",t.streamId),e.object("batch",t.batch,Ca);else if(t.type==="open_cursor")e.number("stream_id",t.streamId),e.number("cursor_id",t.cursorId),e.object("batch",t.batch,Ca);else if(t.type==="close_cursor")e.number("cursor_id",t.cursorId);else if(t.type==="fetch_cursor")e.number("cursor_id",t.cursorId),e.number("max_count",t.maxCount);else if(t.type==="sequence")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type==="get_autocommit")e.number("stream_id",t.streamId);else throw J(t,"Impossible type of Request")}function Rn(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId);for(const s of t.args)e.message(3,s,vi);for(const s of t.namedArgs)e.message(4,s,zo);e.bool(5,t.wantRows)}function zo(e,t){e.string(1,t.name),e.message(2,t.value,vi)}function Ba(e,t){for(const s of t.steps)e.message(1,s,Yo)}function Yo(e,t){t.condition!==void 0&&e.message(1,t.condition,Cn),e.message(2,t.stmt,Rn)}function Cn(e,t){if(t.type==="ok")e.uint32(1,t.step);else if(t.type==="error")e.uint32(2,t.step);else if(t.type==="not")e.message(3,t.cond,Cn);else if(t.type==="and")e.message(4,t.conds,cl);else if(t.type==="or")e.message(5,t.conds,cl);else if(t.type==="is_autocommit")e.message(6,void 0,yi);else throw J(t,"Impossible type of BatchCond")}function cl(e,t){for(const s of t)e.message(1,s,Cn)}function vi(e,t){if(t===null)e.message(1,void 0,yi);else if(typeof t=="bigint")e.sint64(2,t);else if(typeof t=="number")e.double(3,t);else if(typeof t=="string")e.string(4,t);else if(t instanceof Uint8Array)e.bytes(5,t);else if(t!==void 0)throw J(t,"Impossible type of Value")}function yi(e,t){}function Jo(e,t){if(t.type==="hello")e.message(1,t,Ko);else if(t.type==="request")e.message(2,t,Qo);else throw J(t,"Impossible type of ClientMsg")}function Ko(e,t){t.jwt!==void 0&&e.string(1,t.jwt)}function Qo(e,t){e.int32(1,t.requestId);const s=t.request;if(s.type==="open_stream")e.message(2,s,Xo);else if(s.type==="close_stream")e.message(3,s,Zo);else if(s.type==="execute")e.message(4,s,ec);else if(s.type==="batch")e.message(5,s,tc);else if(s.type==="open_cursor")e.message(6,s,sc);else if(s.type==="close_cursor")e.message(7,s,ac);else if(s.type==="fetch_cursor")e.message(8,s,nc);else if(s.type==="sequence")e.message(9,s,lc);else if(s.type==="describe")e.message(10,s,ic);else if(s.type==="store_sql")e.message(11,s,rc);else if(s.type==="close_sql")e.message(12,s,oc);else if(s.type==="get_autocommit")e.message(13,s,cc);else throw J(s,"Impossible type of Request")}function Xo(e,t){e.int32(1,t.streamId)}function Zo(e,t){e.int32(1,t.streamId)}function ec(e,t){e.int32(1,t.streamId),e.message(2,t.stmt,Rn)}function tc(e,t){e.int32(1,t.streamId),e.message(2,t.batch,Ba)}function sc(e,t){e.int32(1,t.streamId),e.int32(2,t.cursorId),e.message(3,t.batch,Ba)}function ac(e,t){e.int32(1,t.cursorId)}function nc(e,t){e.int32(1,t.cursorId),e.uint32(2,t.maxCount)}function lc(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function ic(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function rc(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function oc(e,t){e.int32(1,t.sqlId)}function cc(e,t){e.int32(1,t.streamId)}function Cs(e){const t=Ne(e.message),s=Be(e.code);return{message:t,code:s}}function An(e){const t=Rt(e.cols,ki),s=Ia(e.rows).map(i=>Rt(i,$i)),a=Yt(e.affected_row_count),n=Be(e.last_insert_rowid),l=n!==void 0?BigInt(n):void 0;return{cols:t,rows:s,affectedRowCount:a,lastInsertRowid:l}}function ki(e){const t=Be(e.name),s=Be(e.decltype);return{name:t,decltype:s}}function _i(e){const t=new Map;Ia(e.step_results).forEach((a,n)=>{a!==null&&t.set(n,An(ne(a)))});const s=new Map;return Ia(e.step_errors).forEach((a,n)=>{a!==null&&s.set(n,Cs(ne(a)))}),{stepResults:t,stepErrors:s}}function Si(e){const t=Ne(e.type);if(t==="step_begin"){const s=Yt(e.step),a=Rt(e.cols,ki);return{type:"step_begin",step:s,cols:a}}else if(t==="step_end"){const s=Yt(e.affected_row_count),a=Be(e.last_insert_rowid),n=a!==void 0?BigInt(a):void 0;return{type:"step_end",affectedRowCount:s,lastInsertRowid:n}}else if(t==="step_error"){const s=Yt(e.step),a=Cs(ne(e.error));return{type:"step_error",step:s,error:a}}else{if(t==="row")return{type:"row",row:Rt(e.row,$i)};if(t==="error")return{type:"error",error:Cs(ne(e.error))};throw new D("Unexpected type of CursorEntry")}}function Ei(e){const t=Rt(e.params,dc),s=Rt(e.cols,pc),a=Qs(e.is_explain),n=Qs(e.is_readonly);return{params:t,cols:s,isExplain:a,isReadonly:n}}function dc(e){return{name:Be(e.name)}}function pc(e){const t=Ne(e.name),s=Be(e.decltype);return{name:t,decltype:s}}function $i(e){const t=Ne(e.type);if(t==="null")return null;if(t==="integer"){const s=Ne(e.value);return BigInt(s)}else{if(t==="float")return Yt(e.value);if(t==="text")return Ne(e.value);if(t==="blob")return Sn.toUint8Array(Ne(e.base64));throw new D("Unexpected type of Value")}}function uc(e){const t=Ne(e.type);if(t==="hello_ok")return{type:"hello_ok"};if(t==="hello_error")return{type:"hello_error",error:Cs(ne(e.error))};if(t==="response_ok"){const s=Yt(e.request_id),a=fc(ne(e.response));return{type:"response_ok",requestId:s,response:a}}else if(t==="response_error"){const s=Yt(e.request_id),a=Cs(ne(e.error));return{type:"response_error",requestId:s,error:a}}else throw new D("Unexpected type of ServerMsg")}function fc(e){const t=Ne(e.type);if(t==="open_stream")return{type:"open_stream"};if(t==="close_stream")return{type:"close_stream"};if(t==="execute")return{type:"execute",result:An(ne(e.result))};if(t==="batch")return{type:"batch",result:_i(ne(e.result))};if(t==="open_cursor")return{type:"open_cursor"};if(t==="close_cursor")return{type:"close_cursor"};if(t==="fetch_cursor"){const s=Rt(e.entries,Si),a=Qs(e.done);return{type:"fetch_cursor",entries:s,done:a}}else{if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:Ei(ne(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Qs(e.is_autocommit)};throw new D("Unexpected type of Response")}}const Ye={default(){return{message:"",code:void 0}},1(e,t){t.message=e.string()},2(e,t){t.code=e.string()}},As={default(){return{cols:[],rows:[],affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.cols.push(e.message(Ii))},2(e,t){t.rows.push(e.message(Ri))},3(e,t){t.affectedRowCount=Number(e.uint64())},4(e,t){t.lastInsertRowid=e.sint64()}},Ii={default(){return{name:void 0,decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},Ri={default(){return[]},1(e,t){t.push(e.message(yc))}},Aa={default(){return{stepResults:new Map,stepErrors:new Map}},1(e,t){const[s,a]=e.message(xc);t.stepResults.set(s,a)},2(e,t){const[s,a]=e.message(mc);t.stepErrors.set(s,a)}},xc={default(){return[0,As.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(As)}},mc={default(){return[0,Ye.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(Ye)}},Ci={default(){return{type:"none"}},1(e){return e.message(bc)},2(e){return e.message(hc)},3(e){return e.message(gc)},4(e){return{type:"row",row:e.message(Ri)}},5(e){return{type:"error",error:e.message(Ye)}}},bc={default(){return{type:"step_begin",step:0,cols:[]}},1(e,t){t.step=e.uint32()},2(e,t){t.cols.push(e.message(Ii))}},hc={default(){return{type:"step_end",affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.affectedRowCount=e.uint32()},2(e,t){t.lastInsertRowid=e.uint64()}},gc={default(){return{type:"step_error",step:0,error:Ye.default()}},1(e,t){t.step=e.uint32()},2(e,t){t.error=e.message(Ye)}},Ta={default(){return{params:[],cols:[],isExplain:!1,isReadonly:!1}},1(e,t){t.params.push(e.message(wc))},2(e,t){t.cols.push(e.message(vc))},3(e,t){t.isExplain=e.bool()},4(e,t){t.isReadonly=e.bool()}},wc={default(){return{name:void 0}},1(e,t){t.name=e.string()}},vc={default(){return{name:"",decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},yc={default(){},1(e){return null},2(e){return e.sint64()},3(e){return e.double()},4(e){return e.string()},5(e){return e.bytes()}},kc={default(){return{type:"none"}},1(e){return{type:"hello_ok"}},2(e){return e.message(_c)},3(e){return e.message(Ec)},4(e){return e.message(Sc)}},_c={default(){return{type:"hello_error",error:Ye.default()}},1(e,t){t.error=e.message(Ye)}},Sc={default(){return{type:"response_error",requestId:0,error:Ye.default()}},1(e,t){t.requestId=e.int32()},2(e,t){t.error=e.message(Ye)}},Ec={default(){return{type:"response_ok",requestId:0,response:{type:"none"}}},1(e,t){t.requestId=e.int32()},2(e,t){t.response={type:"open_stream"}},3(e,t){t.response={type:"close_stream"}},4(e,t){t.response=e.message($c)},5(e,t){t.response=e.message(Ic)},6(e,t){t.response={type:"open_cursor"}},7(e,t){t.response={type:"close_cursor"}},8(e,t){t.response=e.message(Rc)},9(e,t){t.response={type:"sequence"}},10(e,t){t.response=e.message(Cc)},11(e,t){t.response={type:"store_sql"}},12(e,t){t.response={type:"close_sql"}},13(e,t){t.response=e.message(Ac)}},$c={default(){return{type:"execute",result:As.default()}},1(e,t){t.result=e.message(As)}},Ic={default(){return{type:"batch",result:Aa.default()}},1(e,t){t.result=e.message(Aa)}},Rc={default(){return{type:"fetch_cursor",entries:[],done:!1}},1(e,t){t.entries.push(e.message(Ci))},2(e,t){t.done=e.bool()}},Cc={default(){return{type:"describe",result:Ta.default()}},1(e,t){t.result=e.message(Ta)}},Ac={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},Tc=new Map([["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]),Ai=new Map([["hrana3-protobuf",{version:3,encoding:"protobuf"}],["hrana3",{version:3,encoding:"json"}],["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]);var le,He,Ut,me,Vt,be,fs,De,gt,xs,B,dn,Ti,pn,Mi,Di,Fe,Li,Oi,Ll;let Mc=(Ll=class extends ai{constructor(s,a){super();y(this,B);y(this,le);y(this,He);y(this,Ut);y(this,me);y(this,Vt);y(this,be);y(this,fs);y(this,De);y(this,gt);j(this,"_streamIdAlloc");j(this,"_cursorIdAlloc");y(this,xs);f(this,le,s),f(this,He,[]),f(this,Ut,!1),f(this,me,void 0),f(this,Vt,!1),f(this,be,void 0),f(this,fs,!1),f(this,De,new Map),f(this,gt,new Bs),this._streamIdAlloc=new Bs,this._cursorIdAlloc=new Bs,f(this,xs,new Bs),o(this,le).binaryType="arraybuffer",o(this,le).addEventListener("open",()=>k(this,B,Ti).call(this)),o(this,le).addEventListener("close",n=>k(this,B,Di).call(this,n)),o(this,le).addEventListener("error",n=>k(this,B,Mi).call(this,n)),o(this,le).addEventListener("message",n=>k(this,B,Li).call(this,n)),k(this,B,dn).call(this,{type:"hello",jwt:a})}getVersion(){return new Promise((s,a)=>{if(f(this,fs,!0),o(this,me)!==void 0)a(o(this,me));else if(o(this,Ut))s(o(this,be).version);else{const n=()=>s(o(this,be).version);o(this,He).push({openCallback:n,errorCallback:a})}})}_ensureVersion(s,a){if(o(this,be)===void 0||!o(this,fs))throw new Is(`${a} is supported only on protocol version ${s} and higher, but the version supported by the WebSocket server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(o(this,be).version<s)throw new Is(`${a} is supported on protocol version ${s} and higher, but the WebSocket server only supports version ${o(this,be).version}`)}_sendRequest(s,a){if(o(this,me)!==void 0){a.errorCallback(new Ce("Client is closed",o(this,me)));return}const n=o(this,gt).alloc();o(this,De).set(n,{...a,type:s.type}),k(this,B,dn).call(this,{type:"request",requestId:n,request:s})}openStream(){return rn.open(this)}storeSql(s){this._ensureVersion(2,"storeSql()");const a=o(this,xs).alloc(),n=new $n(this,a),l=()=>{},i=d=>n._setClosed(d),r={type:"store_sql",sqlId:a,sql:s};return this._sendRequest(r,{responseCallback:l,errorCallback:i}),n}_closeSql(s){if(o(this,me)!==void 0)return;const a=()=>o(this,xs).free(s),n=i=>k(this,B,Fe).call(this,i),l={type:"close_sql",sqlId:s};this._sendRequest(l,{responseCallback:a,errorCallback:n})}close(){k(this,B,Fe).call(this,new z("Client was manually closed"))}get closed(){return o(this,me)!==void 0}},le=new WeakMap,He=new WeakMap,Ut=new WeakMap,me=new WeakMap,Vt=new WeakMap,be=new WeakMap,fs=new WeakMap,De=new WeakMap,gt=new WeakMap,xs=new WeakMap,B=new WeakSet,dn=function(s){if(o(this,me)!==void 0)throw new It("Trying to send a message on a closed client");if(o(this,Ut))k(this,B,pn).call(this,s);else{const a=()=>k(this,B,pn).call(this,s),n=()=>{};o(this,He).push({openCallback:a,errorCallback:n})}},Ti=function(){const s=o(this,le).protocol;if(s===void 0){k(this,B,Fe).call(this,new z("The `WebSocket.protocol` property is undefined. This most likely means that the WebSocket implementation provided by the environment is broken. If you are using Miniflare 2, please update to Miniflare 3, which fixes this problem."));return}else if(s==="")f(this,be,{version:1,encoding:"json"});else if(f(this,be,Ai.get(s)),o(this,be)===void 0){k(this,B,Fe).call(this,new D(`Unrecognized WebSocket subprotocol: ${JSON.stringify(s)}`));return}for(const a of o(this,He))a.openCallback();o(this,He).length=0,f(this,Ut,!0)},pn=function(s){const a=o(this,be).encoding;if(a==="json"){const n=ii(s,Go);o(this,le).send(n)}else if(a==="protobuf"){const n=oi(s,Jo);o(this,le).send(n)}else throw J(a,"Impossible encoding")},Mi=function(s){const n=s.message??"WebSocket was closed due to an error";k(this,B,Fe).call(this,new tn(n))},Di=function(s){let a=`WebSocket was closed with code ${s.code}`;s.reason&&(a+=`: ${s.reason}`),k(this,B,Fe).call(this,new tn(a))},Fe=function(s){if(o(this,me)===void 0){f(this,me,s);for(const a of o(this,He))a.errorCallback(s);o(this,He).length=0;for(const[a,n]of o(this,De).entries())n.errorCallback(s),o(this,gt).free(a);o(this,De).clear(),o(this,le).close()}},Li=function(s){if(o(this,me)===void 0)try{let a;const n=o(this,be).encoding;if(n==="json"){if(typeof s.data!="string"){o(this,le).close(3003,"Only text messages are accepted with JSON encoding"),k(this,B,Fe).call(this,new D("Received non-text message from server with JSON encoding"));return}a=En(JSON.parse(s.data),uc)}else if(n==="protobuf"){if(!(s.data instanceof ArrayBuffer)){o(this,le).close(3003,"Only binary messages are accepted with Protobuf encoding"),k(this,B,Fe).call(this,new D("Received non-binary message from server with Protobuf encoding"));return}a=qa(new Uint8Array(s.data),kc)}else throw J(n,"Impossible encoding");k(this,B,Oi).call(this,a)}catch(a){o(this,le).close(3007,"Could not handle message"),k(this,B,Fe).call(this,a)}},Oi=function(s){if(s.type==="none")throw new D("Received an unrecognized ServerMsg");if(s.type==="hello_ok"||s.type==="hello_error"){if(o(this,Vt))throw new D("Received a duplicated hello response");if(f(this,Vt,!0),s.type==="hello_error")throw Rs(s.error);return}else if(!o(this,Vt))throw new D("Received a non-hello message before a hello response");if(s.type==="response_ok"){const a=s.requestId,n=o(this,De).get(a);if(o(this,De).delete(a),n===void 0)throw new D("Received unexpected OK response");o(this,gt).free(a);try{if(n.type!==s.response.type)throw console.dir({responseState:n,msg:s}),new D("Received unexpected type of response");n.responseCallback(s.response)}catch(l){throw n.errorCallback(l),l}}else if(s.type==="response_error"){const a=s.requestId,n=o(this,De).get(a);if(o(this,De).delete(a),n===void 0)throw new D("Received unexpected error response");o(this,gt).free(a),n.errorCallback(Rs(s.error))}else throw J(s,"Impossible ServerMsg type")},Ll);var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var un={exports:{}};(function(e,t){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof ga<"u"&&ga,a=function(){function l(){this.fetch=!1,this.DOMException=s.DOMException}return l.prototype=s,new l}();(function(l){(function(i){var r=typeof l<"u"&&l||typeof self<"u"&&self||typeof ga<"u"&&ga||{},d={searchParams:"URLSearchParams"in r,iterable:"Symbol"in r&&"iterator"in Symbol,blob:"FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in r,arrayBuffer:"ArrayBuffer"in r};function c(h){return h&&DataView.prototype.isPrototypeOf(h)}if(d.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],x=ArrayBuffer.isView||function(h){return h&&u.indexOf(Object.prototype.toString.call(h))>-1};function b(h){if(typeof h!="string"&&(h=String(h)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(h)||h==="")throw new TypeError('Invalid character in header field name: "'+h+'"');return h.toLowerCase()}function v(h){return typeof h!="string"&&(h=String(h)),h}function w(h){var S={next:function(){var M=h.shift();return{done:M===void 0,value:M}}};return d.iterable&&(S[Symbol.iterator]=function(){return S}),S}function g(h){this.map={},h instanceof g?h.forEach(function(S,M){this.append(M,S)},this):Array.isArray(h)?h.forEach(function(S){if(S.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+S.length);this.append(S[0],S[1])},this):h&&Object.getOwnPropertyNames(h).forEach(function(S){this.append(S,h[S])},this)}g.prototype.append=function(h,S){h=b(h),S=v(S);var M=this.map[h];this.map[h]=M?M+", "+S:S},g.prototype.delete=function(h){delete this.map[b(h)]},g.prototype.get=function(h){return h=b(h),this.has(h)?this.map[h]:null},g.prototype.has=function(h){return this.map.hasOwnProperty(b(h))},g.prototype.set=function(h,S){this.map[b(h)]=v(S)},g.prototype.forEach=function(h,S){for(var M in this.map)this.map.hasOwnProperty(M)&&h.call(S,this.map[M],M,this)},g.prototype.keys=function(){var h=[];return this.forEach(function(S,M){h.push(M)}),w(h)},g.prototype.values=function(){var h=[];return this.forEach(function(S){h.push(S)}),w(h)},g.prototype.entries=function(){var h=[];return this.forEach(function(S,M){h.push([M,S])}),w(h)},d.iterable&&(g.prototype[Symbol.iterator]=g.prototype.entries);function _(h){if(!h._noBody){if(h.bodyUsed)return Promise.reject(new TypeError("Already read"));h.bodyUsed=!0}}function E(h){return new Promise(function(S,M){h.onload=function(){S(h.result)},h.onerror=function(){M(h.error)}})}function T(h){var S=new FileReader,M=E(S);return S.readAsArrayBuffer(h),M}function P(h){var S=new FileReader,M=E(S),F=/charset=([A-Za-z0-9_-]+)/.exec(h.type),H=F?F[1]:"utf-8";return S.readAsText(h,H),M}function V(h){for(var S=new Uint8Array(h),M=new Array(S.length),F=0;F<S.length;F++)M[F]=String.fromCharCode(S[F]);return M.join("")}function re(h){if(h.slice)return h.slice(0);var S=new Uint8Array(h.byteLength);return S.set(new Uint8Array(h)),S.buffer}function Kt(){return this.bodyUsed=!1,this._initBody=function(h){this.bodyUsed=this.bodyUsed,this._bodyInit=h,h?typeof h=="string"?this._bodyText=h:d.blob&&Blob.prototype.isPrototypeOf(h)?this._bodyBlob=h:d.formData&&FormData.prototype.isPrototypeOf(h)?this._bodyFormData=h:d.searchParams&&URLSearchParams.prototype.isPrototypeOf(h)?this._bodyText=h.toString():d.arrayBuffer&&d.blob&&c(h)?(this._bodyArrayBuffer=re(h.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):d.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(h)||x(h))?this._bodyArrayBuffer=re(h):this._bodyText=h=Object.prototype.toString.call(h):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof h=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):d.searchParams&&URLSearchParams.prototype.isPrototypeOf(h)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},d.blob&&(this.blob=function(){var h=_(this);if(h)return h;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var h=_(this);return h||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(d.blob)return this.blob().then(T);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var h=_(this);if(h)return h;if(this._bodyBlob)return P(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(V(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},d.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}var Qt=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function Ls(h){var S=h.toUpperCase();return Qt.indexOf(S)>-1?S:h}function $e(h,S){if(!(this instanceof $e))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');S=S||{};var M=S.body;if(h instanceof $e){if(h.bodyUsed)throw new TypeError("Already read");this.url=h.url,this.credentials=h.credentials,S.headers||(this.headers=new g(h.headers)),this.method=h.method,this.mode=h.mode,this.signal=h.signal,!M&&h._bodyInit!=null&&(M=h._bodyInit,h.bodyUsed=!0)}else this.url=String(h);if(this.credentials=S.credentials||this.credentials||"same-origin",(S.headers||!this.headers)&&(this.headers=new g(S.headers)),this.method=Ls(S.method||this.method||"GET"),this.mode=S.mode||this.mode||null,this.signal=S.signal||this.signal||function(){if("AbortController"in r){var L=new AbortController;return L.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&M)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(M),(this.method==="GET"||this.method==="HEAD")&&(S.cache==="no-store"||S.cache==="no-cache")){var F=/([?&])_=[^&]*/;if(F.test(this.url))this.url=this.url.replace(F,"$1_="+new Date().getTime());else{var H=/\?/;this.url+=(H.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}$e.prototype.clone=function(){return new $e(this,{body:this._bodyInit})};function R(h){var S=new FormData;return h.trim().split("&").forEach(function(M){if(M){var F=M.split("="),H=F.shift().replace(/\+/g," "),L=F.join("=").replace(/\+/g," ");S.append(decodeURIComponent(H),decodeURIComponent(L))}}),S}function Os(h){var S=new g,M=h.replace(/\r?\n[\t ]+/g," ");return M.split("\r").map(function(F){return F.indexOf(`
`)===0?F.substr(1,F.length):F}).forEach(function(F){var H=F.split(":"),L=H.shift().trim();if(L){var ba=H.join(":").trim();try{S.append(L,ba)}catch(Ga){console.warn("Response "+Ga.message)}}}),S}Kt.call($e.prototype);function ue(h,S){if(!(this instanceof ue))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(S||(S={}),this.type="default",this.status=S.status===void 0?200:S.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=S.statusText===void 0?"":""+S.statusText,this.headers=new g(S.headers),this.url=S.url||"",this._initBody(h)}Kt.call(ue.prototype),ue.prototype.clone=function(){return new ue(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},ue.error=function(){var h=new ue(null,{status:200,statusText:""});return h.ok=!1,h.status=0,h.type="error",h};var or=[301,302,303,307,308];ue.redirect=function(h,S){if(or.indexOf(S)===-1)throw new RangeError("Invalid status code");return new ue(null,{status:S,headers:{location:h}})},i.DOMException=r.DOMException;try{new i.DOMException}catch{i.DOMException=function(S,M){this.message=S,this.name=M;var F=Error(S);this.stack=F.stack},i.DOMException.prototype=Object.create(Error.prototype),i.DOMException.prototype.constructor=i.DOMException}function Ha(h,S){return new Promise(function(M,F){var H=new $e(h,S);if(H.signal&&H.signal.aborted)return F(new i.DOMException("Aborted","AbortError"));var L=new XMLHttpRequest;function ba(){L.abort()}L.onload=function(){var te={statusText:L.statusText,headers:Os(L.getAllResponseHeaders()||"")};H.url.indexOf("file://")===0&&(L.status<200||L.status>599)?te.status=200:te.status=L.status,te.url="responseURL"in L?L.responseURL:te.headers.get("X-Request-URL");var At="response"in L?L.response:L.responseText;setTimeout(function(){M(new ue(At,te))},0)},L.onerror=function(){setTimeout(function(){F(new TypeError("Network request failed"))},0)},L.ontimeout=function(){setTimeout(function(){F(new TypeError("Network request timed out"))},0)},L.onabort=function(){setTimeout(function(){F(new i.DOMException("Aborted","AbortError"))},0)};function Ga(te){try{return te===""&&r.location.href?r.location.href:te}catch{return te}}if(L.open(H.method,Ga(H.url),!0),H.credentials==="include"?L.withCredentials=!0:H.credentials==="omit"&&(L.withCredentials=!1),"responseType"in L&&(d.blob?L.responseType="blob":d.arrayBuffer&&(L.responseType="arraybuffer")),S&&typeof S.headers=="object"&&!(S.headers instanceof g||r.Headers&&S.headers instanceof r.Headers)){var Xn=[];Object.getOwnPropertyNames(S.headers).forEach(function(te){Xn.push(b(te)),L.setRequestHeader(te,v(S.headers[te]))}),H.headers.forEach(function(te,At){Xn.indexOf(At)===-1&&L.setRequestHeader(At,te)})}else H.headers.forEach(function(te,At){L.setRequestHeader(At,te)});H.signal&&(H.signal.addEventListener("abort",ba),L.onreadystatechange=function(){L.readyState===4&&H.signal.removeEventListener("abort",ba)}),L.send(typeof H._bodyInit>"u"?null:H._bodyInit)})}return Ha.polyfill=!0,r.fetch||(r.fetch=Ha,r.Headers=g,r.Request=$e,r.Response=ue),i.Headers=g,i.Request=$e,i.Response=ue,i.fetch=Ha,i})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var n=s.fetch?s:a;t=n.fetch,t.default=n.fetch,t.fetch=n.fetch,t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response,e.exports=t})(un,un.exports);var Ma=un.exports;let ss;if(typeof queueMicrotask<"u")ss=queueMicrotask;else{const e=Promise.resolve();ss=t=>{e.then(t)}}var Se,Le,he,Na,ji;class Lc{constructor(t){y(this,Na);y(this,Se);y(this,Le);y(this,he);f(this,Se,new Uint8Array(new ArrayBuffer(t))),f(this,Le,0),f(this,he,0)}get length(){return o(this,he)-o(this,Le)}data(){return o(this,Se).slice(o(this,Le),o(this,he))}push(t){k(this,Na,ji).call(this,t.byteLength),o(this,Se).set(t,o(this,he)),f(this,he,o(this,he)+t.byteLength)}shift(t){f(this,Le,o(this,Le)+t)}}Se=new WeakMap,Le=new WeakMap,he=new WeakMap,Na=new WeakSet,ji=function(t){if(o(this,he)+t<=o(this,Se).byteLength)return;const s=o(this,he)-o(this,Le);if(s+t<=o(this,Se).byteLength&&2*o(this,he)>=o(this,Se).byteLength)o(this,Se).copyWithin(0,o(this,Le),o(this,he));else{let a=o(this,Se).byteLength;do a*=2;while(s+t>a);const n=new Uint8Array(new ArrayBuffer(a));n.set(o(this,Se).slice(o(this,Le),o(this,he)),0),f(this,Se,n)}f(this,he,s),f(this,Le,0)};function Oc(e){const t=Be(e.baton),s=Be(e.base_url),a=Rt(e.results,jc);return{baton:t,baseUrl:s,results:a}}function jc(e){const t=Ne(e.type);if(t==="ok")return{type:"ok",response:Pc(ne(e.response))};if(t==="error")return{type:"error",error:Cs(ne(e.error))};throw new D("Unexpected type of StreamResult")}function Pc(e){const t=Ne(e.type);if(t==="close")return{type:"close"};if(t==="execute")return{type:"execute",result:An(ne(e.result))};if(t==="batch")return{type:"batch",result:_i(ne(e.result))};if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:Ei(ne(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Qs(e.is_autocommit)};throw new D("Unexpected type of StreamResponse")}function Nc(e){const t=Be(e.baton),s=Be(e.base_url);return{baton:t,baseUrl:s}}const qc={default(){return{baton:void 0,baseUrl:void 0,results:[]}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()},3(e,t){t.results.push(e.message(Bc))}},Bc={default(){return{type:"none"}},1(e){return{type:"ok",response:e.message(Fc)}},2(e){return{type:"error",error:e.message(Ye)}}},Fc={default(){return{type:"none"}},1(e){return{type:"close"}},2(e){return e.message(Uc)},3(e){return e.message(Vc)},4(e){return{type:"sequence"}},5(e){return e.message(Hc)},6(e){return{type:"store_sql"}},7(e){return{type:"close_sql"}},8(e){return e.message(Gc)}},Uc={default(){return{type:"execute",result:As.default()}},1(e,t){t.result=e.message(As)}},Vc={default(){return{type:"batch",result:Aa.default()}},1(e,t){t.result=e.message(Aa)}},Hc={default(){return{type:"describe",result:Ta.default()}},1(e,t){t.result=e.message(Ta)}},Gc={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},Wc={default(){return{baton:void 0,baseUrl:void 0}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()}};var ea,Ht,at,Ge,nt,ms,ut,fn,Pi,Ni;class zc extends hi{constructor(s,a){super();y(this,ut);y(this,ea);y(this,Ht);y(this,at);y(this,Ge);y(this,nt);y(this,ms);f(this,ea,s),f(this,Ht,a),f(this,at,void 0),f(this,Ge,new Lc(16*1024)),f(this,nt,void 0),f(this,ms,!1)}async open(s){if(s.body===null)throw new D("No response body for cursor request");f(this,at,s.body[Symbol.asyncIterator]());const a=await k(this,ut,fn).call(this,Nc,Wc);if(a===void 0)throw new D("Empty response to cursor request");return a}next(){return k(this,ut,fn).call(this,Si,Ci)}close(){this._setClosed(new z("Cursor was manually closed"))}_setClosed(s){o(this,nt)===void 0&&(f(this,nt,s),o(this,ea)._cursorClosed(this),o(this,at)!==void 0&&o(this,at).return())}get closed(){return o(this,nt)!==void 0}}ea=new WeakMap,Ht=new WeakMap,at=new WeakMap,Ge=new WeakMap,nt=new WeakMap,ms=new WeakMap,ut=new WeakSet,fn=async function(s,a){for(;;){if(o(this,ms))return;if(o(this,nt)!==void 0)throw new Ce("Cursor is closed",o(this,nt));if(o(this,Ht)==="json"){const i=k(this,ut,Pi).call(this);if(i!==void 0){const r=new TextDecoder().decode(i),d=JSON.parse(r);return En(d,s)}}else if(o(this,Ht)==="protobuf"){const i=k(this,ut,Ni).call(this);if(i!==void 0)return qa(i,a)}else throw J(o(this,Ht),"Impossible encoding");if(o(this,at)===void 0)throw new It("Attempted to read from HTTP cursor before it was opened");const{value:n,done:l}=await o(this,at).next();if(l&&o(this,Ge).length===0)f(this,ms,!0);else{if(l)throw new D("Unexpected end of cursor stream");o(this,Ge).push(n)}}},Pi=function(){const s=o(this,Ge).data(),n=s.indexOf(10);if(n<0)return;const l=s.slice(0,n);return o(this,Ge).shift(n+1),l},Ni=function(){const s=o(this,Ge).data();let a=0,n=0;for(;;){if(n>=s.byteLength)return;const i=s[n];if(a|=(i&127)<<7*n,n+=1,!(i&128))break}if(s.byteLength<n+a)return;const l=s.slice(n,n+a);return o(this,Ge).shift(n+a),l};function Yc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.arrayObjects("requests",t.requests,Jc)}function Jc(e,t){if(e.stringRaw("type",t.type),t.type!=="close"){if(t.type==="execute")e.object("stmt",t.stmt,In);else if(t.type==="batch")e.object("batch",t.batch,Ca);else if(t.type==="sequence")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type!=="get_autocommit")throw J(t,"Impossible type of StreamRequest")}}function Kc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.object("batch",t.batch,Ca)}function Qc(e,t){t.baton!==void 0&&e.string(1,t.baton);for(const s of t.requests)e.message(2,s,Xc)}function Xc(e,t){if(t.type==="close")e.message(1,t,Zc);else if(t.type==="execute")e.message(2,t,ed);else if(t.type==="batch")e.message(3,t,td);else if(t.type==="sequence")e.message(4,t,sd);else if(t.type==="describe")e.message(5,t,ad);else if(t.type==="store_sql")e.message(6,t,nd);else if(t.type==="close_sql")e.message(7,t,ld);else if(t.type==="get_autocommit")e.message(8,t,id);else throw J(t,"Impossible type of StreamRequest")}function Zc(e,t){}function ed(e,t){e.message(1,t.stmt,Rn)}function td(e,t){e.message(1,t.batch,Ba)}function sd(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function ad(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function nd(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function ld(e,t){e.int32(1,t.sqlId)}function id(e,t){}function rd(e,t){t.baton!==void 0&&e.string(1,t.baton),e.message(2,t.batch,Ba)}var lt,wt,bs,ta,hs,vt,Oe,yt,it,rt,kt,We,gs,O,ft,xn,Dt,qi,Bi,mn,Fi,Ui,bn;class od extends bi{constructor(s,a,n,l,i){super(s.intMode);y(this,O);y(this,lt);y(this,wt);y(this,bs);y(this,ta);y(this,hs);y(this,vt);y(this,Oe);y(this,yt);y(this,it);y(this,rt);y(this,kt);y(this,We);y(this,gs);f(this,lt,s),f(this,wt,a.toString()),f(this,bs,n),f(this,ta,l),f(this,hs,i),f(this,vt,void 0),f(this,Oe,new Ra),f(this,yt,!1),f(this,rt,!1),f(this,kt,!1),f(this,We,void 0),f(this,gs,new Bs)}client(){return o(this,lt)}_sqlOwner(){return this}storeSql(s){const a=o(this,gs).alloc();return k(this,O,ft).call(this,{type:"store_sql",sqlId:a,sql:s}).then(()=>{},n=>this._setClosed(n)),new $n(this,a)}_closeSql(s){o(this,We)===void 0&&k(this,O,ft).call(this,{type:"close_sql",sqlId:s}).then(()=>o(this,gs).free(s),a=>this._setClosed(a))}_execute(s){return k(this,O,ft).call(this,{type:"execute",stmt:s}).then(a=>a.result)}_batch(s){return k(this,O,ft).call(this,{type:"batch",batch:s}).then(a=>a.result)}_describe(s){return k(this,O,ft).call(this,{type:"describe",sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return k(this,O,ft).call(this,{type:"sequence",sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return o(this,lt)._ensureVersion(3,"getAutocommit()"),k(this,O,ft).call(this,{type:"get_autocommit"}).then(s=>s.isAutocommit)}_openCursor(s){return new Promise((a,n)=>{k(this,O,xn).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_cursorClosed(s){if(s!==o(this,it))throw new It("Cursor was closed, but it was not associated with the stream");f(this,it,void 0),ss(()=>k(this,O,Dt).call(this))}close(){this._setClosed(new z("Stream was manually closed"))}closeGracefully(){f(this,rt,!0),ss(()=>k(this,O,Dt).call(this))}get closed(){return o(this,We)!==void 0||o(this,rt)}_setClosed(s){if(o(this,We)===void 0){for(f(this,We,s),o(this,it)!==void 0&&o(this,it)._setClosed(s),o(this,lt)._streamClosed(this);;){const a=o(this,Oe).shift();if(a!==void 0)a.errorCallback(s);else break}(o(this,vt)!==void 0||o(this,yt))&&!o(this,kt)&&(o(this,Oe).push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),f(this,kt,!0),ss(()=>k(this,O,Dt).call(this)))}}}lt=new WeakMap,wt=new WeakMap,bs=new WeakMap,ta=new WeakMap,hs=new WeakMap,vt=new WeakMap,Oe=new WeakMap,yt=new WeakMap,it=new WeakMap,rt=new WeakMap,kt=new WeakMap,We=new WeakMap,gs=new WeakMap,O=new WeakSet,ft=function(s){return new Promise((a,n)=>{k(this,O,xn).call(this,{type:"pipeline",request:s,responseCallback:a,errorCallback:n})})},xn=function(s){if(o(this,We)!==void 0)throw new Ce("Stream is closed",o(this,We));if(o(this,rt))throw new Ce("Stream is closing",void 0);o(this,Oe).push(s),ss(()=>k(this,O,Dt).call(this))},Dt=function(){if(o(this,yt)||o(this,it)!==void 0)return;if(o(this,rt)&&o(this,Oe).length===0){this._setClosed(new z("Stream was gracefully closed"));return}const s=o(this,lt)._endpoint;if(s===void 0){o(this,lt)._endpointPromise.then(()=>k(this,O,Dt).call(this),n=>this._setClosed(n));return}const a=o(this,Oe).shift();if(a!==void 0)if(a.type==="pipeline"){const n=[a];for(;;){const l=o(this,Oe).first();if(l!==void 0&&l.type==="pipeline")n.push(l),o(this,Oe).shift();else if(l===void 0&&o(this,rt)&&!o(this,kt)){n.push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),f(this,kt,!0);break}else break}k(this,O,qi).call(this,s,n)}else if(a.type==="cursor")k(this,O,Bi).call(this,s,a);else throw J(a,"Impossible type of QueueEntry")},qi=function(s,a){k(this,O,mn).call(this,()=>k(this,O,Fi).call(this,a,s),n=>dd(n,s.encoding),n=>n.baton,n=>n.baseUrl,n=>cd(a,n),n=>a.forEach(l=>l.errorCallback(n)))},Bi=function(s,a){const n=new zc(this,s.encoding);f(this,it,n),k(this,O,mn).call(this,()=>k(this,O,Ui).call(this,a,s),l=>n.open(l),l=>l.baton,l=>l.baseUrl,l=>a.cursorCallback(n),l=>a.errorCallback(l))},mn=function(s,a,n,l,i,r){let d;try{const c=s();d=o(this,ta)(c)}catch(c){d=Promise.reject(c)}f(this,yt,!0),d.then(c=>c.ok?a(c):pd(c).then(u=>{throw u})).then(c=>{f(this,vt,n(c)),f(this,wt,l(c)??o(this,wt)),i(c)}).catch(c=>{this._setClosed(c),r(c)}).finally(()=>{f(this,yt,!1),k(this,O,Dt).call(this)})},Fi=function(s,a){return k(this,O,bn).call(this,new URL(a.pipelinePath,o(this,wt)),{baton:o(this,vt),requests:s.map(n=>n.request)},a.encoding,Yc,Qc)},Ui=function(s,a){if(a.cursorPath===void 0)throw new Is(`Cursors are supported only on protocol version 3 and higher, but the HTTP server only supports version ${a.version}.`);return k(this,O,bn).call(this,new URL(a.cursorPath,o(this,wt)),{baton:o(this,vt),batch:s.batch},a.encoding,Kc,rd)},bn=function(s,a,n,l,i){let r,d;if(n==="json")r=ii(a,l),d="application/json";else if(n==="protobuf")r=oi(a,i),d="application/x-protobuf";else throw J(n,"Impossible encoding");const c=new Ma.Headers;return c.set("content-type",d),o(this,bs)!==void 0&&c.set("authorization",`Bearer ${o(this,bs)}`),o(this,hs)!==void 0&&c.set("x-turso-encryption-key",o(this,hs)),new Ma.Request(s.toString(),{method:"POST",headers:c,body:r})};function cd(e,t){if(t.results.length!==e.length)throw new D("Server returned unexpected number of pipeline results");for(let s=0;s<e.length;++s){const a=t.results[s],n=e[s];if(a.type==="ok"){if(a.response.type!==n.request.type)throw new D("Received unexpected type of response");n.responseCallback(a.response)}else if(a.type==="error")n.errorCallback(Rs(a.error));else throw a.type==="none"?new D("Received unrecognized type of StreamResult"):J(a,"Received impossible type of StreamResult")}}async function dd(e,t){var s;if(t==="json"){const a=await e.json();return En(a,Oc)}if(t==="protobuf"){const a=await e.arrayBuffer();return qa(new Uint8Array(a),qc)}throw await((s=e.body)==null?void 0:s.cancel()),J(t,"Impossible encoding")}async function pd(e){var a;const t=e.headers.get("content-type")??"text/plain";let s=`Server returned HTTP status ${e.status}`;if(t==="application/json"){const n=await e.json();return"message"in n?Rs(n):new ya(s,e.status)}if(t==="text/plain"){const n=(await e.text()).trim();return n!==""&&(s+=`: ${n}`),new ya(s,e.status)}return await((a=e.body)==null?void 0:a.cancel()),new ya(s,e.status)}const ud=[{versionPath:"v3-protobuf",pipelinePath:"v3-protobuf/pipeline",cursorPath:"v3-protobuf/cursor",version:3,encoding:"protobuf"}],hn={versionPath:"v2",pipelinePath:"v2/pipeline",cursorPath:void 0,version:2,encoding:"json"};var ws,sa,vs,aa,ot,Gt,ys,Ea,Ol;let fd=(Ol=class extends ai{constructor(s,a,n,l,i=2){super();y(this,ys);y(this,ws);y(this,sa);y(this,vs);y(this,aa);y(this,ot);y(this,Gt);j(this,"_endpointPromise");j(this,"_endpoint");f(this,ws,s),f(this,sa,a),f(this,vs,n??Ma.fetch),f(this,aa,l),f(this,ot,void 0),f(this,Gt,new Set),i==3?(this._endpointPromise=xd(o(this,vs),o(this,ws)),this._endpointPromise.then(r=>this._endpoint=r,r=>k(this,ys,Ea).call(this,r))):(this._endpointPromise=Promise.resolve(hn),this._endpointPromise.then(r=>this._endpoint=r,r=>k(this,ys,Ea).call(this,r)))}async getVersion(){return this._endpoint!==void 0?this._endpoint.version:(await this._endpointPromise).version}_ensureVersion(s,a){if(!(s<=hn.version)){if(this._endpoint===void 0)throw new Is(`${a} is supported only on protocol version ${s} and higher, but the version supported by the HTTP server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(this._endpoint.version<s)throw new Is(`${a} is supported only on protocol version ${s} and higher, but the HTTP server only supports version ${this._endpoint.version}.`)}}openStream(){if(o(this,ot)!==void 0)throw new Ce("Client is closed",o(this,ot));const s=new od(this,o(this,ws),o(this,sa),o(this,vs),o(this,aa));return o(this,Gt).add(s),s}_streamClosed(s){o(this,Gt).delete(s)}close(){k(this,ys,Ea).call(this,new z("Client was manually closed"))}get closed(){return o(this,ot)!==void 0}},ws=new WeakMap,sa=new WeakMap,vs=new WeakMap,aa=new WeakMap,ot=new WeakMap,Gt=new WeakMap,ys=new WeakSet,Ea=function(s){if(o(this,ot)===void 0){f(this,ot,s);for(const a of Array.from(o(this,Gt)))a._setClosed(new Ce("Client was closed",s))}},Ol);async function xd(e,t){const s=e;for(const a of ud){const n=new URL(a.versionPath,t),l=new Ma.Request(n.toString(),{method:"GET"}),i=await s(l);if(await i.arrayBuffer(),i.ok)return a}return hn}function Vi(e,t,s=2){if(typeof ts>"u")throw new li("WebSockets are not supported in this environment");var a=void 0;s==3?a=Array.from(Ai.keys()):a=Array.from(Tc.keys());const n=new ts(e,a);return new Mc(n,t)}function dl(e,t,s,a,n=2){return new fd(e instanceof URL?e:new URL(e),t,s,a,n)}var ks,ct,ce;class Hi{constructor(t,s){y(this,ks);y(this,ct);y(this,ce);f(this,ks,t),f(this,ct,s),f(this,ce,void 0)}execute(t){return this.batch([t]).then(s=>s[0])}async batch(t){const s=this._getStream();if(s.closed)throw new q("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{const a=t.map(Jt);let n;if(o(this,ce)===void 0){this._getSqlCache().apply(a);const i=s.batch(o(this,ct)>=3),r=i.step(),d=r.run(en(o(this,ks)));let c=r;n=a.map(u=>{const x=i.step().condition(ge.ok(c));o(this,ct)>=3&&x.condition(ge.not(ge.isAutocommit(i)));const b=x.query(u);return b.catch(()=>{}),c=x,b}),f(this,ce,i.execute().then(()=>d).then(()=>{}));try{await o(this,ce)}catch(u){throw this.close(),u}}else{o(this,ct)<3&&await o(this,ce),this._getSqlCache().apply(a);const i=s.batch(o(this,ct)>=3);let r;n=a.map(d=>{const c=i.step();r!==void 0&&c.condition(ge.ok(r)),o(this,ct)>=3&&c.condition(ge.not(ge.isAutocommit(i)));const u=c.query(d);return u.catch(()=>{}),r=c,u}),await i.execute()}const l=[];for(let i=0;i<n.length;i++)try{const r=await n[i];if(r===void 0)throw new as("Statement in a transaction was not executed, probably because the transaction has been rolled back",i,"TRANSACTION_CLOSED");l.push(Fa(r))}catch(r){if(r instanceof as)throw r;const d=W(r);throw d instanceof q?new as(d.message,i,d.code,d.extendedCode,d.rawCode,d.cause instanceof Error?d.cause:void 0):d}return l}catch(a){throw W(a)}}async executeMultiple(t){const s=this._getStream();if(s.closed)throw new q("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{if(o(this,ce)===void 0){f(this,ce,s.run(en(o(this,ks))).then(()=>{}));try{await o(this,ce)}catch(a){throw this.close(),a}}else await o(this,ce);await s.sequence(t)}catch(a){throw W(a)}}async rollback(){try{const t=this._getStream();if(t.closed||o(this,ce)===void 0)return;const s=t.run("ROLLBACK").catch(a=>{throw W(a)});t.closeGracefully(),await s}catch(t){throw W(t)}finally{this.close()}}async commit(){try{const t=this._getStream();if(t.closed)throw new q("Cannot commit the transaction because it is already closed","TRANSACTION_CLOSED");if(o(this,ce)!==void 0)await o(this,ce);else return;const s=t.run("COMMIT").catch(a=>{throw W(a)});t.closeGracefully(),await s}catch(t){throw W(t)}finally{this.close()}}}ks=new WeakMap,ct=new WeakMap,ce=new WeakMap;async function Da(e,t,s,a,n=!1){n&&s.step().run("PRAGMA foreign_keys=off");const l=s.step(),i=l.run(en(e));let r=l;const d=a.map(v=>{const w=s.step().condition(ge.ok(r));t>=3&&w.condition(ge.not(ge.isAutocommit(s)));const g=w.query(v);return r=w,g}),c=s.step().condition(ge.ok(r));t>=3&&c.condition(ge.not(ge.isAutocommit(s)));const u=c.run("COMMIT");s.step().condition(ge.not(ge.ok(c))).run("ROLLBACK").catch(v=>{}),n&&s.step().run("PRAGMA foreign_keys=on"),await s.execute();const b=[];await i;for(let v=0;v<d.length;v++)try{const w=await d[v];if(w===void 0)throw new as("Statement in a batch was not executed, probably because the transaction has been rolled back",v,"TRANSACTION_CLOSED");b.push(Fa(w))}catch(w){if(w instanceof as)throw w;const g=W(w);throw g instanceof q?new as(g.message,v,g.code,g.extendedCode,g.rawCode,g.cause instanceof Error?g.cause:void 0):g}return await u,b}function Jt(e){let t,s;Array.isArray(e)?[t,s]=e:typeof e=="string"?t=e:(t=e.sql,s=e.args);const a=new xi(t);if(s)if(Array.isArray(s))a.bindIndexes(s);else for(const[n,l]of Object.entries(s))a.bindName(n,l);return a}function Fa(e){const t=e.columnNames.map(i=>i??""),s=e.columnDecltypes.map(i=>i??""),a=e.rows,n=e.affectedRowCount,l=e.lastInsertRowid!==void 0?e.lastInsertRowid:void 0;return new Eo(t,s,a,n,l)}function W(e){if(e instanceof z){const t=Gi(e);return new q(e.message,t,void 0,void 0,e)}return e}function Gi(e){return e instanceof ni&&e.code!==void 0?e.code:e instanceof D?"HRANA_PROTO_ERROR":e instanceof Ce?e.cause instanceof z?Gi(e.cause):"HRANA_CLOSED_ERROR":e instanceof tn?"HRANA_WEBSOCKET_ERROR":e instanceof ya?"SERVER_ERROR":e instanceof Is?"PROTOCOL_VERSION_ERROR":e instanceof It?"INTERNAL_ERROR":"UNKNOWN"}var na,ze;class Tn{constructor(t,s){y(this,na);y(this,ze);j(this,"capacity");f(this,na,t),f(this,ze,new md),this.capacity=s}apply(t){if(this.capacity<=0)return;const s=new Set;for(const a of t){if(typeof a.sql!="string")continue;const n=a.sql;if(n.length>=5e3)continue;let l=o(this,ze).get(n);if(l===void 0){for(;o(this,ze).size+1>this.capacity;){const[i,r]=o(this,ze).peekLru();if(s.has(r))break;r.close(),o(this,ze).delete(i)}o(this,ze).size+1<=this.capacity&&(l=o(this,na).storeSql(n),o(this,ze).set(n,l))}l!==void 0&&(a.sql=l,s.add(l))}}}na=new WeakMap,ze=new WeakMap;var je;class md{constructor(){y(this,je);f(this,je,new Map)}get(t){const s=o(this,je).get(t);return s!==void 0&&(o(this,je).delete(t),o(this,je).set(t,s)),s}set(t,s){o(this,je).set(t,s)}peekLru(){for(const t of o(this,je).entries())return t}delete(t){o(this,je).delete(t)}get size(){return o(this,je).size}}je=new WeakMap;function bd(e){var t=0,s=[];function a(){t--,t<e&&n()}function n(){var d=s.shift();r.queue=s.length,d&&i(d.fn).then(d.resolve).catch(d.reject)}function l(d){return new Promise(function(c,u){s.push({fn:d,resolve:c,reject:u}),r.queue=s.length})}function i(d){t++;try{return Promise.resolve(d()).then(function(c){return a(),c},function(c){throw a(),c})}catch(c){return a(),Promise.reject(c)}}var r=function(d){return t>=e?l(d):i(d)};return r}function hd(e,t){var s=!1,a=this;return Promise.all(e.map(function(){var n=arguments;return a(function(){if(!s)return t.apply(void 0,n).catch(function(l){throw s=!0,l})})}))}function pl(e){return e.queue=0,e.map=hd,e}var gd=function(e){return pl(e?bd(e):function(t){return t()})};const Wi=Dc(gd);function wd(e){if(e.scheme!=="wss"&&e.scheme!=="ws")throw new q(`The WebSocket client supports only "libsql:", "wss:" and "ws:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new q("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="ws"&&e.tls)throw new q('A "ws:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="wss"&&!e.tls)throw new q('A "wss:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Qa(e.scheme,e.authority,e.path);let s;try{s=Vi(t,e.authToken)}catch(a){if(a instanceof li){const n=e.scheme==="wss"?"https":"http",l=Qa(n,e.authority,e.path);throw new q(`This environment does not support WebSockets, please switch to the HTTP client by using a "${n}:" URL (${JSON.stringify(l)}). For more information, please read ${Ks}`,"WEBSOCKETS_NOT_SUPPORTED")}throw W(a)}return new yd(s,t,e.authToken,e.intMode,e.concurrency)}const vd=60*1e3,ul=100;var la,ia,ra,X,ie,vn,oa,Ee,es,Vs;class yd{constructor(t,s,a,n,l){y(this,Ee);y(this,la);y(this,ia);y(this,ra);y(this,X);y(this,ie);j(this,"closed");j(this,"protocol");y(this,vn);y(this,oa);f(this,la,s),f(this,ia,a),f(this,ra,n),f(this,X,k(this,Ee,Vs).call(this,t)),f(this,ie,void 0),this.closed=!1,this.protocol="ws",f(this,oa,Wi(l))}async limit(t){return o(this,oa).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{const n=await k(this,Ee,es).call(this);try{const l=Jt(a);n.conn.sqlCache.apply([l]);const i=n.stream.query(l);n.stream.closeGracefully();const r=await i;return Fa(r)}catch(l){throw W(l)}finally{this._closeStream(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{const a=await k(this,Ee,es).call(this);try{const l=t.map(u=>Array.isArray(u)?{sql:u[0],args:u[1]||[]}:u).map(Jt),i=await a.conn.client.getVersion();a.conn.sqlCache.apply(l);const r=a.stream.batch(i>=3);return await Da(s,i,r,l)}catch(n){throw W(n)}finally{this._closeStream(a)}})}async migrate(t){return this.limit(async()=>{const s=await k(this,Ee,es).call(this);try{const a=t.map(Jt),n=await s.conn.client.getVersion(),l=s.stream.batch(n>=3);return await Da("deferred",n,l,a,!0)}catch(a){throw W(a)}finally{this._closeStream(s)}})}async transaction(t="write"){return this.limit(async()=>{const s=await k(this,Ee,es).call(this);try{const a=await s.conn.client.getVersion();return new kd(this,s,t,a)}catch(a){throw this._closeStream(s),W(a)}})}async executeMultiple(t){return this.limit(async()=>{const s=await k(this,Ee,es).call(this);try{const a=s.stream.sequence(t);s.stream.closeGracefully(),await a}catch(a){throw W(a)}finally{this._closeStream(s)}})}sync(){throw new q("sync not supported in ws mode","SYNC_NOT_SUPPORTED")}async reconnect(){try{for(const a of Array.from(o(this,X).streamStates))try{a.stream.close()}catch{}o(this,X).client.close()}catch{}if(o(this,ie)){try{o(this,ie).client.close()}catch{}f(this,ie,void 0)}const t=k(this,Ee,Vs).call(this),s=await t.client.getVersion();t.useSqlCache=s>=2,t.useSqlCache&&(t.sqlCache.capacity=ul),f(this,X,t),this.closed=!1}_closeStream(t){t.stream.close();const s=t.conn;s.streamStates.delete(t),s.streamStates.size===0&&s!==o(this,X)&&s.client.close()}close(){if(o(this,X).client.close(),this.closed=!0,o(this,ie)){try{o(this,ie).client.close()}catch{}f(this,ie,void 0)}this.closed=!0}}la=new WeakMap,ia=new WeakMap,ra=new WeakMap,X=new WeakMap,ie=new WeakMap,vn=new WeakMap,oa=new WeakMap,Ee=new WeakSet,es=async function(){if(this.closed)throw new q("The client is closed","CLIENT_CLOSED");if(new Date().valueOf()-o(this,X).openTime.valueOf()>vd&&o(this,ie)===void 0){const n=k(this,Ee,Vs).call(this);f(this,ie,n),n.client.getVersion().then(l=>{o(this,X)!==n&&o(this,X).streamStates.size===0&&o(this,X).client.close(),f(this,X,n),f(this,ie,void 0)},l=>{f(this,ie,void 0)})}if(o(this,X).client.closed)try{o(this,ie)!==void 0?f(this,X,o(this,ie)):f(this,X,k(this,Ee,Vs).call(this))}catch(n){throw W(n)}const a=o(this,X);try{a.useSqlCache===void 0&&(a.useSqlCache=await a.client.getVersion()>=2,a.useSqlCache&&(a.sqlCache.capacity=ul));const n=a.client.openStream();n.intMode=o(this,ra);const l={conn:a,stream:n};return a.streamStates.add(l),l}catch(n){throw W(n)}},Vs=function(t){try{return t??(t=Vi(o(this,la),o(this,ia))),{client:t,useSqlCache:void 0,sqlCache:new Tn(t,0),openTime:new Date,streamStates:new Set}}catch(s){throw W(s)}};var ca,_t;class kd extends Hi{constructor(s,a,n,l){super(n,l);y(this,ca);y(this,_t);f(this,ca,s),f(this,_t,a)}_getStream(){return o(this,_t).stream}_getSqlCache(){return o(this,_t).conn.sqlCache}close(){o(this,ca)._closeStream(o(this,_t))}get closed(){return o(this,_t).stream.closed}}ca=new WeakMap,_t=new WeakMap;function _d(e){if(e.scheme!=="https"&&e.scheme!=="http")throw new q(`The HTTP client supports only "libsql:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new q("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="http"&&e.tls)throw new q('A "http:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="https"&&!e.tls)throw new q('A "https:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Qa(e.scheme,e.authority,e.path);return new Sd(t,e.authToken,e.intMode,e.fetch,e.concurrency,e.remoteEncryptionKey)}const zi=30;var Z,_s,Ss,Es,da,$s,pa,ua;class Sd{constructor(t,s,a,n,l,i){y(this,Z);j(this,"protocol");y(this,_s);y(this,Ss);y(this,Es);y(this,da);y(this,$s);y(this,pa);y(this,ua);f(this,_s,t),f(this,$s,s),f(this,Ss,a),f(this,Es,n),f(this,da,l),f(this,pa,i),f(this,Z,dl(o(this,_s),o(this,$s),o(this,Es),i)),o(this,Z).intMode=o(this,Ss),this.protocol="http",f(this,ua,Wi(o(this,da)))}async limit(t){return o(this,ua).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{try{const n=Jt(a);let l;const i=o(this,Z).openStream();try{l=i.query(n)}finally{i.closeGracefully()}const r=await l;return Fa(r)}catch(n){throw W(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{try{const n=t.map(c=>Array.isArray(c)?{sql:c[0],args:c[1]||[]}:c).map(Jt),l=await o(this,Z).getVersion();let i;const r=o(this,Z).openStream();try{new Tn(r,zi).apply(n);const u=r.batch(!1);i=Da(s,l,u,n)}finally{r.closeGracefully()}return await i}catch(a){throw W(a)}})}async migrate(t){return this.limit(async()=>{try{const s=t.map(Jt),a=await o(this,Z).getVersion();let n;const l=o(this,Z).openStream();try{const r=l.batch(!1);n=Da("deferred",a,r,s,!0)}finally{l.closeGracefully()}return await n}catch(s){throw W(s)}})}async transaction(t="write"){return this.limit(async()=>{try{const s=await o(this,Z).getVersion();return new Ed(o(this,Z).openStream(),t,s)}catch(s){throw W(s)}})}async executeMultiple(t){return this.limit(async()=>{try{let s;const a=o(this,Z).openStream();try{s=a.sequence(t)}finally{a.closeGracefully()}await s}catch(s){throw W(s)}})}sync(){throw new q("sync not supported in http mode","SYNC_NOT_SUPPORTED")}close(){o(this,Z).close()}async reconnect(){try{this.closed||o(this,Z).close()}finally{f(this,Z,dl(o(this,_s),o(this,$s),o(this,Es),o(this,pa))),o(this,Z).intMode=o(this,Ss)}}get closed(){return o(this,Z).closed}}Z=new WeakMap,_s=new WeakMap,Ss=new WeakMap,Es=new WeakMap,da=new WeakMap,$s=new WeakMap,pa=new WeakMap,ua=new WeakMap;var Wt,fa;class Ed extends Hi{constructor(s,a,n){super(a,n);y(this,Wt);y(this,fa);f(this,Wt,s),f(this,fa,new Tn(s,zi))}_getStream(){return o(this,Wt)}_getSqlCache(){return o(this,fa)}close(){o(this,Wt).close()}get closed(){return o(this,Wt).closed}}Wt=new WeakMap,fa=new WeakMap;function Yi(e){return $d(Ro(e))}function $d(e){if(e.scheme==="ws"||e.scheme==="wss")return wd(e);if(e.scheme==="http"||e.scheme==="https")return _d(e);throw new q(`The client that uses Web standard APIs supports only "libsql:", "wss:", "ws:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED")}const Id={url:"libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA"},Rd={url:"libsql://retailer-data-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAyODMwNTgsImlkIjoiZTVmNzQ5MjMtMDFiMi00YzkxLTlmMjEtZTJhZDIxMzBmMmZmIiwicmlkIjoiZjQzNTc5NTMtN2E2OS00M2UzLWE3MWUtNDcyYzk1MWM1NTRiIn0.8dOIX1XeNnJswuRGhacgPypg_h_9_-bRAwBxtKhBX7rJ4bQuEtSz9Z6igZsvGrWxDlsYlHMo4V3KKIuIZRSuBA"},Lt=Yi(Id),fl=Yi(Rd);async function m(e,t=[]){try{return(await Lt.execute({sql:e,args:t})).rows}catch(s){throw console.error("DB Query Error:",s.message,"SQL:",e,"Params:",t),s}}async function Cd(e){try{return await Lt.batch(e)}catch(t){throw console.error("DB Transaction Error:",t),t}}function $(){return localStorage.getItem("retaileros_retailer_id")}const A={clients:{getAll:()=>{const e=$();return e?m("SELECT * FROM customers WHERE retailer_id = ?",[e]):m("SELECT * FROM customers")},add:e=>{const t=$();return m("INSERT INTO customers (id, name, phone, email, joined_at, dob, location, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.name,e.phone||"",e.email||"",new Date().toISOString(),e.dob||null,e.location||"",t])},getById:e=>{const t=$();return t?m("SELECT * FROM customers WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM customers WHERE id = ?",[e])}},companies:{getAll:()=>{const e=$();return e?m("SELECT * FROM companies WHERE retailer_id = ?",[e]):m("SELECT * FROM companies")},add:e=>{const t=$();return m("INSERT INTO companies (id, name, gst_number, customer_id, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?)",[e.id,e.name,e.gst_number,e.customer_id,new Date().toISOString(),t])},getByCustomerId:e=>{const t=$();return t?m("SELECT * FROM companies WHERE customer_id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM companies WHERE customer_id = ?",[e])},getById:e=>{const t=$();return t?m("SELECT * FROM companies WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM companies WHERE id = ?",[e])}},sales:{getAll:()=>{const e=$();return e?m("SELECT * FROM sales WHERE retailer_id = ? ORDER BY date DESC",[e]):m("SELECT * FROM sales ORDER BY date DESC")},getById:e=>{const t=$();return t?m("SELECT * FROM sales WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM sales WHERE id = ?",[e])},getDrafts:()=>{const e=$();return e?m("SELECT * FROM sales WHERE status = 'draft' AND retailer_id = ? ORDER BY date DESC",[e]):m("SELECT * FROM sales WHERE status = 'draft' ORDER BY date DESC")},add:e=>{const t=$();return m(`INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, gst_required, company_id, installation_required, installation_date, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.customer_name,e.date,e.total_amount,e.status||"completed",e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null,t])},update:e=>{const t=$(),s=t?"WHERE id = ? AND retailer_id = ?":"WHERE id = ?",a=[e.customer_id,e.customer_name,e.total_amount,e.status,e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null,e.id];return t&&a.push(t),m(`UPDATE sales SET customer_id = ?, customer_name = ?, total_amount = ?, status = ?,
                 payment_mode = ?, payment_reference = ?, gst_required = ?, company_id = ?,
                 installation_required = ?, installation_date = ? ${s}`,a)},delete:e=>{const t=$();return t?m("DELETE FROM sales WHERE id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM sales WHERE id = ?",[e])},addItem:e=>m(`INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, discount_type, discount_value, discount_amount, scheme_id, final_price, imei, serial_number, mac_id, manufacturing_date, installation_date, extra_fields)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.sale_id,e.product_id,e.product_name,e.category,e.quantity,e.price,e.discount_type||null,e.discount_value||null,e.discount_amount||null,e.scheme_id||null,e.final_price||e.price,e.imei||null,e.serial_number||null,e.mac_id||null,e.manufacturing_date||null,e.installation_date||null,e.extra_fields||null]),deleteItems:e=>m("DELETE FROM sale_items WHERE sale_id = ?",[e]),getItems:e=>m("SELECT * FROM sale_items WHERE sale_id = ?",[e])},inventory:{getProducts:()=>m("SELECT * FROM products")},schemes:{getAll:()=>m("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name"),getById:e=>m("SELECT * FROM schemes WHERE id = ?",[e]),getByBrand:e=>m("SELECT * FROM schemes WHERE brand = ? AND status = 'active'",[e]),getByCategory:e=>m("SELECT * FROM schemes WHERE category = ? AND status = 'active'",[e]),getApplicable:(e,t,s)=>m(`SELECT * FROM schemes WHERE status = 'active'
             AND (brand = ? OR brand IS NULL)
             AND (category = ? OR category IS NULL)
             AND (min_price IS NULL OR min_price <= ?)
             AND (max_price IS NULL OR max_price >= ?)
             AND date(start_date) <= date('now') AND date(end_date) >= date('now')`,[e,t,s,s])},groups:{getAll:()=>{const e=$();return e?m("SELECT * FROM groups WHERE retailer_id = ? ORDER BY created_at DESC",[e]):m("SELECT * FROM groups ORDER BY created_at DESC")},add:e=>{const t=$();return m(`INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.description||null,e.is_company||0,e.gst_number||null,e.contact_person||null,e.created_at,t])},getById:e=>{const t=$();return t?m("SELECT * FROM groups WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM groups WHERE id = ?",[e])},delete:e=>{const t=$();return t?m("DELETE FROM groups WHERE id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM groups WHERE id = ?",[e])},getMembers:e=>{const t=$();return t?m("SELECT * FROM group_members WHERE group_id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM group_members WHERE group_id = ?",[e])},getAllMembers:()=>{const e=$();return e?m("SELECT * FROM group_members WHERE retailer_id = ?",[e]):m("SELECT * FROM group_members")},addMember:e=>{const t=$();return m("INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id) VALUES (?, ?, ?, ?, ?)",[e.id,e.group_id,e.customer_id,e.added_at,t])},removeMember:(e,t)=>{const s=$();return s?m("DELETE FROM group_members WHERE group_id = ? AND customer_id = ? AND retailer_id = ?",[e,t,s]):m("DELETE FROM group_members WHERE group_id = ? AND customer_id = ?",[e,t])},deleteMembers:e=>{const t=$();return t?m("DELETE FROM group_members WHERE group_id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM group_members WHERE group_id = ?",[e])}},automations:{getAll:()=>{const e=$();return e?m("SELECT * FROM automations WHERE retailer_id = ? ORDER BY created_at DESC",[e]):m("SELECT * FROM automations ORDER BY created_at DESC")},getById:e=>{const t=$();return t?m("SELECT * FROM automations WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM automations WHERE id = ?",[e])},getByCustomer:e=>{const t=$();return t?m("SELECT * FROM automations WHERE customer_id = ? AND retailer_id = ? ORDER BY created_at DESC",[e,t]):m("SELECT * FROM automations WHERE customer_id = ? ORDER BY created_at DESC",[e])},getBySale:e=>{const t=$();return t?m("SELECT * FROM automations WHERE sale_id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM automations WHERE sale_id = ?",[e])},add:e=>{const t=$();return m(`INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.customer_id,e.customer_name,e.sale_id||null,e.status||"active",e.created_at||new Date().toISOString(),t])},update:(e,t)=>{const s=$();return s?m("UPDATE automations SET status = ?, completed_at = ? WHERE id = ? AND retailer_id = ?",[t.status,t.completed_at||null,e,s]):m("UPDATE automations SET status = ?, completed_at = ? WHERE id = ?",[t.status,t.completed_at||null,e])},delete:e=>{const t=$();return t?m("DELETE FROM automations WHERE id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM automations WHERE id = ?",[e])},getMessages:e=>{const t=$();return t?m("SELECT * FROM automation_messages WHERE automation_id = ? AND retailer_id = ? ORDER BY day_offset",[e,t]):m("SELECT * FROM automation_messages WHERE automation_id = ? ORDER BY day_offset",[e])},getAllMessages:()=>{const e=$();return e?m("SELECT * FROM automation_messages WHERE retailer_id = ? ORDER BY scheduled_date",[e]):m("SELECT * FROM automation_messages ORDER BY scheduled_date")},addMessage:e=>{const t=$();return m(`INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.automation_id,e.message_type,e.title,e.content,e.day_offset,e.scheduled_date,e.status||"pending",t])},updateMessageStatus:(e,t,s)=>{const a=$();return a?m("UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ? AND retailer_id = ?",[t,s,e,a]):m("UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ?",[t,s,e])},deleteMessages:e=>{const t=$();return t?m("DELETE FROM automation_messages WHERE automation_id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM automation_messages WHERE automation_id = ?",[e])}},communications:{getAll:()=>{const e=$();return e?m("SELECT * FROM communication_log WHERE retailer_id = ? ORDER BY sent_at DESC",[e]):m("SELECT * FROM communication_log ORDER BY sent_at DESC")},getByCustomer:e=>{const t=$();return t?m("SELECT * FROM communication_log WHERE customer_id = ? AND retailer_id = ? ORDER BY sent_at DESC",[e,t]):m("SELECT * FROM communication_log WHERE customer_id = ? ORDER BY sent_at DESC",[e])},add:e=>{const t=$();return m(`INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.type,e.direction||"outgoing",e.content,e.sent_at||new Date().toISOString(),e.automation_id||null,e.sale_id||null,e.status||"sent",t])},updateStatus:(e,t)=>{const s=$();return s?m("UPDATE communication_log SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):m("UPDATE communication_log SET status = ? WHERE id = ?",[t,e])}},inquiries:{getAll:()=>{const e=$();return e?m("SELECT * FROM inquiries WHERE retailer_id = ? ORDER BY created_at DESC",[e]):m("SELECT * FROM inquiries ORDER BY created_at DESC")},getById:e=>{const t=$();return t?m("SELECT * FROM inquiries WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM inquiries WHERE id = ?",[e])},add:e=>{const t=$();return m("INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.customer_name,e.product_name,e.request,e.status||"PENDING",e.created_at||new Date().toISOString(),t])},updateStatus:(e,t)=>{const s=$();return s?m("UPDATE inquiries SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):m("UPDATE inquiries SET status = ? WHERE id = ?",[t,e])}},repairs:{getAll:()=>{const e=$();return e?m("SELECT * FROM repairs WHERE retailer_id = ? ORDER BY created_at DESC",[e]):m("SELECT * FROM repairs ORDER BY created_at DESC")},getById:e=>{const t=$();return t?m("SELECT * FROM repairs WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM repairs WHERE id = ?",[e])},add:e=>{const t=$();return m("INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, estimated_cost, assigned_to, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.customer_name,e.phone,e.device,e.issue,e.status||"COLLECTED",e.job_sheet_no,e.estimated_cost||"0",e.assigned_to||"Unassigned",e.created_at||new Date().toISOString(),t])},updateStatus:(e,t)=>{const s=$();return s?m("UPDATE repairs SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):m("UPDATE repairs SET status = ? WHERE id = ?",[t,e])}},inventoryLogs:{getAll:()=>{const e=$();return e?m("SELECT * FROM inventory_logs WHERE retailer_id = ? ORDER BY date DESC",[e]):m("SELECT * FROM inventory_logs ORDER BY date DESC")},add:e=>{const t=$();return m("INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.product_id,e.type,e.quantity,e.reason,e.date||new Date().toISOString(),t])}},settings:{getAll:()=>{const e=$();return e?m("SELECT category, settings FROM retailer_settings WHERE retailer_id = ?",[e]):Promise.resolve([])},get:e=>{const t=$();return t?m("SELECT settings FROM retailer_settings WHERE retailer_id = ? AND category = ?",[t,e]):Promise.resolve([])},save:(e,t)=>{const s=$();if(!s)return Promise.resolve();const a=`setting_${s}_${e}`;return m("INSERT OR REPLACE INTO retailer_settings (id, retailer_id, category, settings, updated_at) VALUES (?, ?, ?, ?, ?)",[a,s,e,JSON.stringify(t),new Date().toISOString()])}},teamMembers:{getAll:()=>{const e=$();return e?m("SELECT * FROM team_members WHERE retailer_id = ? ORDER BY created_at",[e]):m("SELECT * FROM team_members ORDER BY created_at")},add:e=>{const t=$(),s=new Date().toISOString();return m("INSERT INTO team_members (id, retailer_id, name, role, phone, email, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,t,e.name,e.role,e.phone||null,e.email||null,e.status||"invited",s,s])},update:(e,t)=>{const s=$();return m("UPDATE team_members SET name = ?, role = ?, phone = ?, status = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",[t.name,t.role,t.phone,t.status,new Date().toISOString(),e,s])},delete:e=>{const t=$();return t?m("DELETE FROM team_members WHERE id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM team_members WHERE id = ?",[e])}},teamRoles:{getAll:()=>{const e=$();return e?m("SELECT * FROM team_roles WHERE retailer_id = ? ORDER BY created_at",[e]):m("SELECT * FROM team_roles ORDER BY created_at")},add:e=>{const t=$(),s=new Date().toISOString();return m("INSERT INTO team_roles (id, retailer_id, name, permissions, description, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,t,e.name,JSON.stringify(e.permissions),e.description||null,s,s])},update:(e,t)=>{const s=$();return m("UPDATE team_roles SET name = ?, permissions = ?, description = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",[t.name,JSON.stringify(t.permissions),t.description,new Date().toISOString(),e,s])},delete:e=>{const t=$();return t?m("DELETE FROM team_roles WHERE id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM team_roles WHERE id = ?",[e])}},plugins:{getAll:()=>{const e=$();return e?m("SELECT * FROM retailer_plugins WHERE retailer_id = ?",[e]):Promise.resolve([])},upsert:(e,t,s)=>{const a=$();if(!a)return Promise.resolve();const n=`plugin_${a}_${e}`,l=new Date().toISOString(),i=t==="connected"?l:null;return m("INSERT OR REPLACE INTO retailer_plugins (id, retailer_id, plugin_key, status, config, connected_at, updated_at) VALUES (?, ?, ?, ?, ?, COALESCE((SELECT connected_at FROM retailer_plugins WHERE id = ?), ?), ?)",[n,a,e,t,s?JSON.stringify(s):null,n,i,l])}},activityLogs:{getAll:(e=50)=>{const t=$();return t?m("SELECT * FROM activity_logs WHERE retailer_id = ? ORDER BY created_at DESC LIMIT ?",[t,e]):m("SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT ?",[e])},add:e=>{const t=$(),s=e.id||`log_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;return m("INSERT INTO activity_logs (id, retailer_id, action, detail, user_name, icon, color, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[s,t,e.action,e.detail||null,e.user_name||null,e.icon||null,e.color||null,new Date().toISOString()])}},storeListings:{getAll:()=>{const e=$();return e?m("SELECT * FROM store_listings WHERE retailer_id = ? ORDER BY created_at DESC",[e]):m("SELECT * FROM store_listings ORDER BY created_at DESC")},getById:e=>{const t=$();return t?m("SELECT * FROM store_listings WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM store_listings WHERE id = ?",[e])},add:e=>{const t=$(),s=new Date().toISOString();return m("INSERT INTO store_listings (id, product_id, product_name, brand, category, base_price, listing_price, description, status, stock_qty, created_at, updated_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.product_id,e.product_name,e.brand||null,e.category||null,e.base_price,e.listing_price,e.description||null,e.status||"draft",e.stock_qty||0,s,s,t])},update:(e,t)=>{const s=$(),a=new Date().toISOString();return m("UPDATE store_listings SET listing_price = ?, description = ?, status = ?, stock_qty = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",[t.listing_price,t.description,t.status,t.stock_qty,a,e,s])},delete:e=>{const t=$();return t?m("DELETE FROM store_listings WHERE id = ? AND retailer_id = ?",[e,t]):m("DELETE FROM store_listings WHERE id = ?",[e])}},storeOrders:{getAll:()=>{const e=$();return e?m("SELECT * FROM store_orders WHERE retailer_id = ? ORDER BY order_date DESC",[e]):m("SELECT * FROM store_orders ORDER BY order_date DESC")},getById:e=>{const t=$();return t?m("SELECT * FROM store_orders WHERE id = ? AND retailer_id = ?",[e,t]):m("SELECT * FROM store_orders WHERE id = ?",[e])},add:e=>{const t=$();return m("INSERT INTO store_orders (id, order_number, customer_name, customer_phone, customer_email, shipping_address_line1, shipping_address_line2, shipping_city, shipping_state, shipping_pincode, order_date, total_amount, order_status, payment_status, payment_mode, payment_reference, tracking_number, courier_name, shipped_date, delivered_date, notes, sale_id, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.order_number,e.customer_name,e.customer_phone||null,e.customer_email||null,e.shipping_address_line1||null,e.shipping_address_line2||null,e.shipping_city||null,e.shipping_state||null,e.shipping_pincode||null,e.order_date,e.total_amount,e.order_status||"pending",e.payment_status||"pending",e.payment_mode||null,e.payment_reference||null,e.tracking_number||null,e.courier_name||null,e.shipped_date||null,e.delivered_date||null,e.notes||null,e.sale_id||null,t])},updateStatus:(e,t,s={})=>{const a=$(),n=["order_status = ?"],l=[t];s.tracking_number!==void 0&&(n.push("tracking_number = ?"),l.push(s.tracking_number)),s.courier_name!==void 0&&(n.push("courier_name = ?"),l.push(s.courier_name)),s.shipped_date!==void 0&&(n.push("shipped_date = ?"),l.push(s.shipped_date)),s.delivered_date!==void 0&&(n.push("delivered_date = ?"),l.push(s.delivered_date)),s.sale_id!==void 0&&(n.push("sale_id = ?"),l.push(s.sale_id)),s.payment_status!==void 0&&(n.push("payment_status = ?"),l.push(s.payment_status)),l.push(e),a&&l.push(a);const i=a?"WHERE id = ? AND retailer_id = ?":"WHERE id = ?";return m(`UPDATE store_orders SET ${n.join(", ")} ${i}`,l)},addItem:e=>m("INSERT INTO store_order_items (id, order_id, listing_id, product_id, product_name, category, quantity, unit_price, discount_amount, final_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.order_id,e.listing_id||null,e.product_id,e.product_name,e.category||null,e.quantity,e.unit_price,e.discount_amount||0,e.final_price]),getItems:e=>m("SELECT * FROM store_order_items WHERE order_id = ?",[e]),deleteItems:e=>m("DELETE FROM store_order_items WHERE order_id = ?",[e])},approved:{checkApproval:async e=>{const t=`
                SELECT * FROM retailers
                WHERE MobileNumber = ?
                AND process_status = 'approved'
                AND Approval_Status = 'Approved'
                LIMIT 1
            `;try{const s=await fl.execute({sql:t,args:[e]});return s.rows.length>0?s.rows[0]:null}catch(s){throw console.error("Error checking approval:",s.message),s}},getByMobile:async e=>{const t="SELECT * FROM retailers WHERE MobileNumber = ? LIMIT 1";try{const s=await fl.execute({sql:t,args:[e]});return s.rows.length>0?s.rows[0]:null}catch(s){throw console.error("Error fetching retailer:",s.message),s}}},retailers:{isRegistered:async e=>(await Lt.execute({sql:"SELECT id FROM retailers WHERE mobile_number = ? LIMIT 1",args:[e]})).rows.length>0,generateCode:async()=>{const t=new Date().toISOString().slice(0,10).replace(/-/g,""),a=await Lt.execute({sql:"SELECT COUNT(*) as count FROM retailers WHERE retailer_code LIKE ?",args:[`ROS-${t}-%`]}),l=(parseInt(a.rows[0].count)+1).toString().padStart(4,"0");return`ROS-${t}-${l}`},add:async e=>{const t=await A.retailers.generateCode(),s=`retailer_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;return await Lt.execute({sql:`
                INSERT INTO retailers (
                    id, retailer_code, retailer_name, contact_person, email,
                    mobile_number, phone_number, address_line_1, address_line_2,
                    country_name, state_name, city_name, district_name, area_name, pin_code,
                    vat_number, pan_number, bank_name, bank_account_holder, bank_account_number,
                    bank_branch, bank_ifsc, parent_retailer_name, nd_name, rds_name,
                    salesman_name, reporting_to_name, csa_on_counter, counter_potential_volume,
                    counter_potential_value, retailer_category, retailer_category1,
                    retailer_classification, dob, creation_date, approval_remarks,
                    external_db_id, external_approval_status, external_process_status,
                    status, onboarded_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            `,args:[s,t,e.RetailerName,e.ContactPerson,e.Email,e.MobileNumber,e.PhoneNumber,e.Address_Line_1,e.Address_Line_2,e.CountryName,e.StateName,e.CityName,e.DistrictName,e.AreaName,e.PinCode,e.VATNnumber,e.PAN_Number,e.Name_of_Bank,e.Name_of_Bank_Account_Holder,e.Bank_Account_Number,e.Branch_Location,e.IFSC_Code,e.ParentRetailerName,e.NDName,e.RDSName,e.SalesmanName,e.Reporting_To_Name,e.CSA_on_Counter,e.Counter_Potential_in_Volume,e.Counter_Potential_in_Value,e.Retailer_Category,e.RETAILER_CATEGORY1,e.RETAILER_CLASSIFICATION,e.DOB,e.Creation_Date,e.ApprovalRemarks,e.id,e.Approval_Status,e.process_status,"active"]}),{id:s,retailerCode:t}},getById:async e=>(await Lt.execute({sql:"SELECT * FROM retailers WHERE id = ?",args:[e]})).rows[0]||null,getAll:async()=>(await Lt.execute("SELECT * FROM retailers ORDER BY onboarded_at DESC")).rows}};window.saveSettings=async function(e){const t=document.querySelector(`[data-settings-category="${e}"]`);if(!t){console.error("No settings container for",e);return}const s={};t.querySelectorAll('input[type="checkbox"][data-field]').forEach(a=>{s[a.dataset.field]=a.checked}),t.querySelectorAll("select[data-field]").forEach(a=>{s[a.dataset.field]=a.value}),t.querySelectorAll('input[type="text"][data-field], input[type="range"][data-field], input[type="number"][data-field]').forEach(a=>{s[a.dataset.field]=a.type==="range"||a.type==="number"?Number(a.value):a.value}),t.querySelectorAll("[data-field-group]").forEach(a=>{const n=a.querySelector('[data-active="true"]');n&&(s[a.dataset.fieldGroup]=n.dataset.value)});try{await A.settings.save(e,s),window._db_cache.retailerSettings||(window._db_cache.retailerSettings={}),window._db_cache.retailerSettings[e]=s;const a=(()=>{var i;const n=window.getCache(),l=localStorage.getItem("retaileros_retailer_id");return((i=n.retailers)==null?void 0:i.find(r=>r.id===l))||{}})();A.activityLogs.add({action:"settings",detail:`Updated ${e} settings`,user_name:a.contact_person||"Owner",icon:"settings",color:"slate"}),window.toast&&window.toast.success("Settings saved")}catch(a){console.error("Failed to save settings:",a),window.toast&&window.toast.error("Failed to save settings")}};const Mn=Object.freeze(Object.defineProperty({__proto__:null,db:A,query:m,transaction:Cd},Symbol.toStringTag,{value:"Module"}));async function Y(){console.group("🔄 Synchronizing Data with Turso...");try{const e=localStorage.getItem("retaileros_retailer_id"),t=(R,Os="")=>{const ue=Os?` ORDER BY ${Os}`:"";return e?m(`SELECT * FROM ${R} WHERE retailer_id = ?${ue}`,[e]):m(`SELECT * FROM ${R}${ue}`)},[s,a,n,l,i,r,d,c,u,x,b,v,w,g,_,E,T,P,V,re,Kt,Qt,Ls]=await Promise.all([t("customers").catch(R=>(console.error("Sync customers failed:",R),[])),m("SELECT * FROM products").catch(R=>(console.error("Sync products failed:",R),[])),t("sales","date DESC").catch(R=>(console.error("Sync sales failed:",R),[])),(e?m("SELECT si.* FROM sale_items si INNER JOIN sales s ON si.sale_id = s.id WHERE s.retailer_id = ?",[e]):m("SELECT * FROM sale_items")).catch(R=>(console.error("Sync sale_items failed:",R),[])),t("companies").catch(R=>(console.error("Sync companies failed:",R),[])),t("groups","created_at DESC").catch(R=>(console.error("Sync groups failed:",R),[])),t("group_members").catch(R=>(console.error("Sync group_members failed:",R),[])),t("automations","created_at DESC").catch(R=>(console.error("Sync automations failed:",R),[])),t("automation_messages","scheduled_date").catch(R=>(console.error("Sync automation_messages failed:",R),[])),t("communication_log","sent_at DESC").catch(R=>(console.error("Sync communications failed:",R),[])),m("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name").catch(R=>(console.error("Sync schemes failed:",R),[])),m("SELECT * FROM retailers ORDER BY onboarded_at DESC").catch(R=>(console.error("Sync retailers failed:",R),[])),t("inquiries","created_at DESC").catch(R=>(console.error("Sync inquiries failed:",R),[])),t("repairs","created_at DESC").catch(R=>(console.error("Sync repairs failed:",R),[])),t("inventory_logs","date DESC").catch(R=>(console.error("Sync inventory_logs failed:",R),[])),t("retailer_settings").catch(R=>(console.error("Sync retailer_settings failed:",R),[])),t("team_members","created_at").catch(R=>(console.error("Sync team_members failed:",R),[])),t("team_roles","created_at").catch(R=>(console.error("Sync team_roles failed:",R),[])),t("retailer_plugins").catch(R=>(console.error("Sync retailer_plugins failed:",R),[])),t("activity_logs","created_at DESC").catch(R=>(console.error("Sync activity_logs failed:",R),[])),t("store_listings","created_at DESC").catch(R=>(console.error("Sync store_listings failed:",R),[])),t("store_orders","order_date DESC").catch(R=>(console.error("Sync store_orders failed:",R),[])),(e?m("SELECT soi.* FROM store_order_items soi INNER JOIN store_orders so ON soi.order_id = so.id WHERE so.retailer_id = ?",[e]):m("SELECT * FROM store_order_items")).catch(R=>(console.error("Sync store_order_items failed:",R),[]))]),$e={};(E||[]).forEach(R=>{try{$e[R.category]=JSON.parse(R.settings)}catch{$e[R.category]={}}}),window._db_cache={customers:s||[],products:a||[],sales:n||[],saleItems:l||[],companies:i||[],groups:r||[],groupMembers:d||[],automations:c||[],automationMessages:u||[],communications:x||[],schemes:b||[],retailers:v||[],inquiries:w||[],repairs:g||[],inventoryLogs:_||[],retailerSettings:$e,teamMembers:T||[],teamRoles:P||[],retailerPlugins:V||[],activityLogs:re||[],storeListings:Kt||[],storeOrders:Qt||[],storeOrderItems:Ls||[],marketplace:[],campaigns:[],bookings:[]},console.log("✅ Sync Complete. Tables cached:",{customers:s.length,products:a.length,sales:n.length,automations:c.length})}catch(e){console.error("❌ Data Sync Failed:",e),window.toast&&window.toast.error("Failed to sync data. Check your connection.")}finally{console.groupEnd(),C(!1)}}window.getCache=()=>window._db_cache||{customers:[],sales:[],products:[],saleItems:[],companies:[],groups:[],groupMembers:[],automations:[],automationMessages:[],communications:[],schemes:[],retailers:[],inventoryLogs:[],inquiries:[],repairs:[],retailerSettings:{},teamMembers:[],teamRoles:[],retailerPlugins:[],activityLogs:[],storeListings:[],storeOrders:[],storeOrderItems:[],marketplace:[],campaigns:[],bookings:[]};const Ji=Object.freeze(Object.defineProperty({__proto__:null,syncData:Y},Symbol.toStringTag,{value:"Module"}));let St=!1,de="",we={customers:[],sales:[]};window.toggleSalesSearch=()=>{St=!St,St||(de="",we={customers:[],sales:[]}),window.triggerRender()};window.updateSalesSearch=e=>{const t=document.getElementById("sales-universal-search"),s=(t==null?void 0:t.selectionStart)||e.length;if(de=e.toLowerCase().trim(),!de){we={customers:[],sales:[]},window.triggerRender(!1),xl("sales-universal-search",s);return}const a=window.getCache(),n=a.customers||[],l=a.sales||[],i=a.saleItems||[];we.customers=n.filter(r=>{var d,c,u;return((d=r.name)==null?void 0:d.toLowerCase().includes(de))||((c=r.phone)==null?void 0:c.includes(de))||((u=r.email)==null?void 0:u.toLowerCase().includes(de))}).slice(0,5),we.sales=l.filter(r=>{var c,u;return(c=r.id)!=null&&c.toLowerCase().includes(de)||(u=r.customer_name)!=null&&u.toLowerCase().includes(de)?!0:i.filter(x=>x.sale_id===r.id).some(x=>{var b;return(b=x.product_name)==null?void 0:b.toLowerCase().includes(de)})}).slice(0,5),window.triggerRender(!1),xl("sales-universal-search",s)};function xl(e,t){setTimeout(()=>{const s=document.getElementById(e);s&&(s.focus(),s.setSelectionRange(t,t))},0)}window.selectSearchCustomer=(e,t)=>{p.historyViewMode="completed",p.historyDateFilter="all",window.setTab("history");const a=window.getCache().sales.find(n=>n.customer_id===e);a&&window.setSalesHistoryId(a.id),St=!1,de="",we={customers:[],sales:[]},window.triggerRender()};window.selectSearchSale=e=>{window.setTab("history"),window.setSalesHistoryId(e),St=!1,de="",we={customers:[],sales:[]},window.triggerRender()};function Ki(e){const t=we.customers.length>0||we.sales.length>0;return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Sales Desk</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${e==="new-sale"?"New Transaction":"Transaction History"}</p>
                </div>
                <button type="button" onclick="window.toggleSalesSearch()" class="p-2 text-slate-400 hover:text-slate-900 ${St?"bg-slate-100 rounded-full text-slate-900":""}">
                    <span class="material-icons-outlined text-xl">${St?"close":"search"}</span>
                </button>
            </div>
            
            <!-- Search Bar -->
            ${St?`
                <div class="mb-4 relative">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                        <input type="text" 
                               id="sales-universal-search"
                               value="${de}"
                               oninput="window.updateSalesSearch(this.value)" 
                               placeholder="Search customers, orders, products..." 
                               class="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm"
                               autofocus>
                    </div>
                    
                    <!-- Search Results Dropdown -->
                    ${de&&t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
                            ${we.customers.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">person</span>
                                        Customers (${we.customers.length})
                                    </p>
                                </div>
                                ${we.customers.map(s=>{var a;return`
                                    <button type="button" onclick="window.selectSearchCustomer('${s.id}', '${(a=s.name)==null?void 0:a.replace(/'/g,"\\'")}')" class="w-full p-4 text-left hover:bg-slate-50 border-b border-slate-50 flex items-center gap-3">
                                        <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                            <span class="material-icons-outlined text-slate-400">person</span>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-black text-slate-900 truncate">${s.name}</p>
                                            <p class="text-[10px] font-bold text-slate-400">${s.phone||""} ${s.email?"• "+s.email:""}</p>
                                        </div>
                                    </button>
                                `}).join("")}
                            `:""}
                            
                            ${we.sales.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">receipt</span>
                                        Transactions (${we.sales.length})
                                    </p>
                                </div>
                                ${we.sales.map(s=>`
                                    <button type="button" onclick="window.selectSearchSale('${s.id}')" class="w-full p-4 text-left hover:bg-slate-50 border-b border-slate-50 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 ${s.status==="draft"?"bg-slate-200":"bg-slate-100"} rounded-full flex items-center justify-center">
                                                <span class="material-icons-outlined ${s.status==="draft"?"text-slate-500":"text-slate-600"}">${s.status==="draft"?"edit_note":"check_circle"}</span>
                                            </div>
                                            <div>
                                                <p class="text-sm font-black text-slate-900">#${s.id}</p>
                                                <p class="text-[10px] font-bold text-slate-400">${s.customer_name} • ${new Date(s.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <p class="text-sm font-black text-slate-900">₹${parseInt(s.total_amount||0).toLocaleString()}</p>
                                    </button>
                                `).join("")}
                            `:""}
                        </div>
                    `:""}
                    
                    ${de&&!t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-8 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 mb-2">search_off</span>
                            <p class="text-xs font-bold text-slate-400">No results found for "${de}"</p>
                        </div>
                    `:""}
                </div>
            `:""}
            
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="setTab('new-sale')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="new-sale"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">New Sale</button>
                <button type="button" onclick="setTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        </header>
    `}let ls=!1,$a="",I=[],qe=null,dt="Select Customer",pe=!1,Je="",Ke="",ma=!1,G="",pt="",Et=null;const is=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`,Ad=["appliances","air conditioners","ac","washing machines","refrigerators","tvs","television","home theater","dishwasher","microwave","geyser","water heater"];function Dn(e){if(e.installation_required===1)return!0;const t=(e.category||"").toLowerCase();return Ad.some(s=>t.includes(s))}async function Td(e){const t=window.getCache().products,s=window.getCache().schemes||[],a=t.find(n=>n.id===e);if(a){const n=Dn(a),l=s.filter(r=>{const d=!r.brand||r.brand===a.brand,c=!r.category||r.category===a.category,u=(!r.min_price||a.mop>=r.min_price)&&(!r.max_price||a.mop<=r.max_price),x=new Date(r.start_date)<=new Date&&new Date(r.end_date)>=new Date;return d&&c&&u&&x&&r.status==="active"});I.push({...a,qty:1,imei:"",serial_number:"",mac_id:"",manufacturing_date:"",showDetails:!1,installation_required:n,installation_date:"",discount_type:null,discount_value:0,discount_amount:0,scheme_id:null,scheme_name:null,final_price:a.mop,applicableSchemes:l,showDiscount:!1,extraFields:[]});const i=document.getElementById("sales-item-search");i&&(i.value=""),window.triggerRender()}}window.toggleCartItemDiscount=e=>{if(I[e]){I[e].showDiscount=!I[e].showDiscount;const t=document.querySelector(".scrolling-content"),s=t?t.scrollTop:0;window.triggerRender(),requestAnimationFrame(()=>{t&&(t.scrollTop=s);const a=document.querySelector(`[data-cart-item="${e}"]`);a&&I[e].showDiscount&&setTimeout(()=>a.scrollIntoView({behavior:"smooth",block:"nearest"}),50)})}};window.applyStoreDiscount=(e,t)=>{if(I[e]){const s=I[e],a=parseFloat(t)||0;a>0&&a<=100?(s.discount_type="store",s.discount_value=a,s.discount_amount=Math.round(s.mop*a/100),s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop-s.discount_amount,s.showDiscount=!1):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.applySchemeDiscount=(e,t)=>{if(I[e]){const s=I[e],n=(window.getCache().schemes||[]).find(l=>l.id===t);n?(s.discount_type="scheme",s.scheme_id=n.id,s.scheme_name=n.name,n.discount_type==="percentage"?(s.discount_value=n.discount_value,s.discount_amount=Math.round(s.mop*n.discount_value/100)):(s.discount_value=n.discount_value,s.discount_amount=n.discount_value),s.final_price=s.mop-s.discount_amount,s.showDiscount=!1):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.clearItemDiscount=e=>{if(I[e]){const t=I[e];t.discount_type=null,t.discount_value=0,t.discount_amount=0,t.scheme_id=null,t.scheme_name=null,t.final_price=t.mop,window.triggerRender()}};function Qi(e,t){qe=e,dt=t;const s=document.getElementById("customer-dropdown-menu");s&&s.classList.add("hidden");const n=(window.getCache().companies||[]).find(l=>l.customer_id===e);n&&(Je=n.name,Ke=n.gst_number),window.triggerRender()}window.updateCartItemDetail=(e,t,s)=>{I[e]&&(I[e][t]=s)};window.toggleCartItemDetails=e=>{if(I[e]){I[e].showDetails=!I[e].showDetails;const t=document.querySelector(".scrolling-content"),s=t?t.scrollTop:0;window.triggerRender(),requestAnimationFrame(()=>{t&&(t.scrollTop=s);const a=document.querySelector(`[data-cart-item="${e}"]`);a&&I[e].showDetails&&setTimeout(()=>a.scrollIntoView({behavior:"smooth",block:"nearest"}),50)})}};window.toggleItemInstallation=e=>{I[e]&&(I[e].installation_required=!I[e].installation_required,I[e].installation_required||(I[e].installation_date=""),window.triggerRender())};window.updateItemInstallationDate=(e,t)=>{I[e]&&(I[e].installation_date=t)};const Md="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";function Dd(){return localStorage.getItem("openai_api_key")||Md}window.captureDeviceImage=async e=>{const t=Dd(),s=document.createElement("input");s.type="file",s.accept="image/*",s.capture="environment",s.onchange=async a=>{const n=a.target.files[0];if(n){ls=!0,$a="Reading image...",window.triggerRender(!1);try{const l=await Ld(n);$a="AI analyzing...",Od(e,$a);const i=I[e],r={name:i.name,brand:i.brand,category:i.category},d=await jd(l,r,t);I[e]&&d&&(d.imei&&(I[e].imei=d.imei),d.serial_number&&(I[e].serial_number=d.serial_number),d.mac_id&&(I[e].mac_id=d.mac_id),d.manufacturing_date&&(I[e].manufacturing_date=d.manufacturing_date),d.extraFields&&d.extraFields.length>0&&(I[e].extraFields=[...I[e].extraFields||[],...d.extraFields])),ls=!1,window.triggerRender(!1);const c=[];d.imei&&c.push("IMEI"),d.serial_number&&c.push("Serial"),d.mac_id&&c.push("MAC ID"),d.manufacturing_date&&c.push("Mfg Date"),d.extraFields&&d.extraFields.forEach(u=>c.push(u.label)),c.length>0?window.toast.success(`Found: ${c.join(", ")}`):window.toast.warning("No device details found. Try a clearer image.")}catch(l){console.error("AI Vision Error:",l),ls=!1,window.triggerRender(!1),window.toast.error(l.message||"Error analyzing image")}}},s.click()};function Ld(e){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>{const n=a.result.split(",")[1];t(n)},a.onerror=s,a.readAsDataURL(e)})}function Od(e,t){const s=document.getElementById(`ocr-progress-${e}`);s&&(s.textContent=t)}async function jd(e,t,s){var d,c,u,x;const a=`You are analyzing a product label/box image to extract device information.

Product: ${t.name}
Brand: ${t.brand||"Unknown"}
Category: ${t.category||"Electronics"}

Look at this image and extract ALL device identifiers you can find. Return a JSON object with these fields:
- imei: IMEI number (15 digits) if visible
- imei2: Second IMEI for dual-SIM phones if visible
- serial_number: Serial number (S/N) if visible
- mac_id: MAC address (format XX:XX:XX:XX:XX:XX) if visible
- manufacturing_date: Manufacturing date in YYYY-MM-DD format if visible
- model: Model number if visible
- color: Color if visible
- storage: Storage capacity (e.g., "128 GB") if visible
- Any other relevant identifiers you find

For extraFields array, include additional fields found with format: {"key": "field_name", "label": "Display Label", "value": "extracted_value"}

Return ONLY valid JSON. If a field is not found, omit it from the response.

Example response:
{
  "imei": "123456789012345",
  "serial_number": "ABC123XYZ",
  "extraFields": [{"key": "model", "label": "Model", "value": "SM-A546E"}]
}`,n=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:[{type:"text",text:a},{type:"image_url",image_url:{url:`data:image/jpeg;base64,${e}`,detail:"high"}}]}],max_tokens:1e3,temperature:.1})});if(!n.ok){const b=await n.json().catch(()=>({}));throw new Error(((d=b.error)==null?void 0:d.message)||`API Error: ${n.status}`)}const i=((x=(u=(c=(await n.json()).choices)==null?void 0:c[0])==null?void 0:u.message)==null?void 0:x.content)||"";console.log("AI Vision Response:",i);const r=i.match(/\{[\s\S]*\}/);if(!r)return{extraFields:[]};try{const b=JSON.parse(r[0]);return Pd(b)}catch(b){return console.error("Failed to parse AI response:",b),{extraFields:[]}}}function Pd(e){const t={imei:e.imei||null,serial_number:e.serial_number||e.serialNumber||null,mac_id:e.mac_id||e.macId||e.mac||null,manufacturing_date:e.manufacturing_date||e.manufacturingDate||e.mfg_date||null,extraFields:[]};return e.imei2&&t.extraFields.push({key:"imei2",label:"IMEI 2",value:e.imei2,type:"text"}),e.model&&t.extraFields.push({key:"model",label:"Model",value:e.model,type:"text"}),e.color&&t.extraFields.push({key:"color",label:"Color",value:e.color,type:"text"}),e.storage&&t.extraFields.push({key:"storage",label:"Storage",value:e.storage,type:"text"}),e.extraFields&&Array.isArray(e.extraFields)&&e.extraFields.forEach(s=>{s.value&&s.label&&(t.extraFields.some(n=>n.key===s.key)||t.extraFields.push({key:s.key||s.label.toLowerCase().replace(/\s+/g,"_"),label:s.label,value:s.value,type:s.type||"text"}))}),t}window.updateCartItemExtraField=(e,t,s)=>{I[e]&&I[e].extraFields[t]&&(I[e].extraFields[t].value=s)};window.addCustomExtraField=e=>{I[e]&&window.showPrompt('Enter field name (e.g., "IMEI 2", "Warranty Code"):',"",t=>{const s=t.toLowerCase().replace(/\s+/g,"_");I[e].extraFields=I[e].extraFields||[],I[e].extraFields.push({key:s,label:t,value:"",type:"text",custom:!0}),window.triggerRender()})};window.removeExtraField=(e,t)=>{I[e]&&I[e].extraFields&&(I[e].extraFields.splice(t,1),window.triggerRender())};window.toggleGstRequired=()=>{pe=!pe,window.triggerRender()};window.updateGstField=(e,t)=>{e==="companyName"&&(Je=t),e==="gstNumber"&&(Ke=t.toUpperCase())};window.openPaymentModal=()=>{if(I.length===0||!qe){window.toast.warning("Please select a customer and add items to cart");return}const e=I.filter(t=>t.installation_required&&!t.installation_date);if(e.length>0){window.toast.warning(`Set installation date for: ${e.map(t=>t.name).join(", ")}`);return}ma=!0,window.triggerRender()};window.closePaymentModal=()=>{ma=!1,G="",pt="",window.triggerRender()};window.selectPaymentMode=e=>{G=e,pt="",window.triggerRender()};window.updatePaymentReference=e=>{pt=e};window.confirmPayment=async()=>{if(!G){window.toast.warning("Please select a payment mode");return}if((G==="card"||G==="upi")&&!pt){window.toast.warning("Please enter the transaction reference");return}ma=!1,await Xi()};async function Xi(){const e=document.getElementById("complete-txn-btn");e&&(e.disabled=!0,e.innerHTML="Processing...");try{const t=Et||is("ORD"),s=I.reduce((r,d)=>r+(d.final_price||d.mop),0);let a=null;pe&&Je&&Ke&&(a=is("COMP"),await A.companies.add({id:a,name:Je,gst_number:Ke,customer_id:qe}));const n=I.some(r=>r.installation_required),i=I.filter(r=>r.installation_required&&r.installation_date).map(r=>r.installation_date).sort()[0]||null;Et?(await A.sales.deleteItems(Et),await A.sales.update({id:t,customer_id:qe,customer_name:dt,total_amount:s,status:"completed",payment_mode:G,payment_reference:pt,gst_required:pe?1:0,company_id:a,installation_required:n?1:0,installation_date:i})):await A.sales.add({id:t,customer_id:qe,customer_name:dt,date:new Date().toISOString(),total_amount:s,status:"completed",payment_mode:G,payment_reference:pt,gst_required:pe?1:0,company_id:a,installation_required:n?1:0,installation_date:i});for(const r of I)await A.sales.addItem({id:is("ITEM"),sale_id:t,product_id:r.id,product_name:r.name,category:r.category,quantity:1,price:r.mop,discount_type:r.discount_type||null,discount_value:r.discount_value||null,discount_amount:r.discount_amount||null,scheme_id:r.scheme_id||null,final_price:r.final_price||r.mop,imei:r.imei||null,serial_number:r.serial_number||null,mac_id:r.mac_id||null,manufacturing_date:r.manufacturing_date||null,installation_date:r.installation_required?r.installation_date:null,extra_fields:r.extraFields&&r.extraFields.length>0?JSON.stringify(r.extraFields):null});Ln(),await Y(),window.setTab("history"),window.setSalesHistoryId(t)}catch(t){console.error(t),window.toast.error("Error completing transaction: "+t.message),e&&(e.disabled=!1,e.innerHTML="Complete Transaction")}}async function Nd(){if(I.length===0){window.toast.warning("Please add items to cart before saving draft");return}try{const e=Et||is("DRF"),t=I.reduce((i,r)=>i+(r.final_price||r.mop),0);let s=null;pe&&Je&&Ke&&(s=is("COMP"),await A.companies.add({id:s,name:Je,gst_number:Ke,customer_id:qe}));const a=I.some(i=>i.installation_required),l=I.filter(i=>i.installation_required&&i.installation_date).map(i=>i.installation_date).sort()[0]||null;Et?(await A.sales.deleteItems(Et),await A.sales.update({id:e,customer_id:qe,customer_name:dt||"No Customer",total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:pe?1:0,company_id:s,installation_required:a?1:0,installation_date:l})):await A.sales.add({id:e,customer_id:qe,customer_name:dt||"No Customer",date:new Date().toISOString(),total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:pe?1:0,company_id:s,installation_required:a?1:0,installation_date:l});for(const i of I)await A.sales.addItem({id:is("ITEM"),sale_id:e,product_id:i.id,product_name:i.name,category:i.category,quantity:1,price:i.mop,discount_type:i.discount_type||null,discount_value:i.discount_value||null,discount_amount:i.discount_amount||null,scheme_id:i.scheme_id||null,final_price:i.final_price||i.mop,imei:i.imei||null,serial_number:i.serial_number||null,mac_id:i.mac_id||null,manufacturing_date:i.manufacturing_date||null,installation_date:i.installation_required?i.installation_date:null,extra_fields:i.extraFields&&i.extraFields.length>0?JSON.stringify(i.extraFields):null});Ln(),await Y(),window.setTab("history"),window.toast.success("Draft saved successfully!")}catch(e){console.error(e),window.toast.error("Error saving draft: "+e.message)}}async function qd(e){const t=window.getCache(),s=t.sales.find(l=>l.id===e);if(!s)return;if(Et=e,qe=s.customer_id,dt=s.customer_name,pe=s.gst_required===1,s.company_id){const l=t.companies.find(i=>i.id===s.company_id);l&&(Je=l.name,Ke=l.gst_number)}const a=t.saleItems.filter(l=>l.sale_id===e),n=t.products;I=a.map(l=>{const i=n.find(c=>c.id===l.product_id)||{},r=l.installation_date||Dn(i);let d=[];if(l.extra_fields)try{d=JSON.parse(l.extra_fields)}catch(c){console.warn("Failed to parse extra fields:",c)}return{...i,id:l.product_id,name:l.product_name,category:l.category,mop:l.price,qty:l.quantity,imei:l.imei||"",serial_number:l.serial_number||"",mac_id:l.mac_id||"",manufacturing_date:l.manufacturing_date||"",showDetails:!1,installation_required:!!r,installation_date:l.installation_date||"",extraFields:d}}),window.setTab("new-sale"),window.triggerRender()}function Ln(){I=[],qe=null,dt="Select Customer",pe=!1,Je="",Ke="",ma=!1,G="",pt="",Et=null}window.selectSaleCustomer=Qi;window.addProductToCart=Td;window.completeTransaction=Xi;window.saveDraft=Nd;window.loadDraft=qd;window.getActiveCart=()=>I;window.getSelectedCustomer=()=>({id:qe,name:dt});window.getSaleState=()=>({gstRequired:pe,companyName:Je,gstNumber:Ke,paymentMode:G,paymentReference:pt});window.clearCart=()=>{Ln(),window.triggerRender()};window.removeFromCart=e=>{I.splice(e,1),window.triggerRender()};window.toggleCustomerDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("customer-dropdown-menu");t&&t.classList.toggle("hidden")};let Hs="";window.updateCustomerSearch=e=>{Hs=e.toLowerCase(),window.triggerRender(!1)};window.addNewCustomer=async()=>{window.setSalesMode("add-customer");const e=document.getElementById("customer-dropdown-menu");e&&e.classList.add("hidden")};function Zi(){const e=window.getCache(),t=e.products||[],s=e.customers||[],a=Hs?s.filter(c=>{var u;return c.name.toLowerCase().includes(Hs)||((u=c.phone)==null?void 0:u.includes(Hs))}):s,n=document.getElementById("sales-item-search"),l=n?n.value.toLowerCase():"",i=l?t.filter(c=>{var u;return c.name.toLowerCase().includes(l)||((u=c.brand)==null?void 0:u.toLowerCase().includes(l))}):[],r=I.reduce((c,u)=>c+(u.final_price||u.mop||0),0);I.reduce((c,u)=>c+(u.discount_amount||0),0);const d=I.filter(c=>c.installation_required).length;return`
        ${Ki("new-sale")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Customer Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Details</h3>

                <div class="relative text-left">
                    <button type="button" id="customer-dropdown-trigger" onclick="window.toggleCustomerDropdown(event)" class="card p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all text-left w-full">
                        <div class="flex items-center gap-4 text-slate-900 text-left">
                            <span class="material-icons-outlined text-slate-400">person</span>
                            <span class="text-sm font-black text-left">${dt}</span>
                        </div>
                        <span class="material-icons-outlined text-slate-300">expand_more</span>
                    </button>
                    <!-- Dropdown Content -->
                    <div id="customer-dropdown-menu" class="hidden absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl max-h-60 overflow-y-auto text-left mt-2 flex flex-col">
                        
                        <!-- Search Bar within Dropdown -->
                        <div class="p-3 sticky top-0 bg-white z-20 border-b border-slate-100" onclick="event.stopPropagation()">
                             <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                                <input type="text" 
                                       value="${Hs}"
                                       oninput="window.updateCustomerSearch(this.value)" 
                                       placeholder="Search customer..." 
                                       class="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                             </div>
                        </div>

                        <button type="button" onclick="window.addNewCustomer()" class="p-4 bg-slate-900 text-white border-b border-slate-900 cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-800 sticky top-[60px] z-10">
                            <span class="material-icons-outlined text-xs">add</span>
                            <span class="text-[10px] font-black uppercase tracking-widest">Create New Customer</span>
                        </button>

                        ${a.length===0?`
                             <div class="p-4 text-center text-slate-400 text-xs font-bold">No customers found</div>
                        `:a.map(c=>`
                            <button type="button" onclick="window.selectSaleCustomer('${c.id}', '${c.name.replace(/'/g,"\\'")}')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left w-full">
                                <p class="text-xs font-black text-slate-900 text-left">${c.name}</p>
                                <p class="text-[9px] font-bold text-slate-400 text-left">${c.phone||""}</p>
                            </button>
                        `).join("")}
                    </div>
                </div>
            </section>

            <!-- GST Billing Section -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">GST Billing</h3>
                    <button type="button" onclick="window.toggleGstRequired()" class="flex items-center gap-2 text-[9px] font-black uppercase ${pe?"text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">${pe?"check_box":"check_box_outline_blank"}</span>
                        ${pe?"Enabled":"Disabled"}
                    </button>
                </div>
                
                ${pe?`
                    <div class="card p-4 space-y-4">
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Company Name</label>
                            <input type="text" value="${Je}" oninput="window.updateGstField('companyName', this.value)" placeholder="Enter company name" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">GST Number</label>
                            <input type="text" value="${Ke}" oninput="window.updateGstField('gstNumber', this.value)" placeholder="e.g. 27AAACR3456D1Z5" maxlength="15" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                    </div>
                `:""}
            </section>

            <!-- Product Search Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Product Search</h3>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                    <input type="text" id="sales-item-search" oninput="window.triggerRender(false)" placeholder="Search products..." class="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    
                    ${l?`
                        <div class="absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl mt-2 overflow-hidden text-left max-h-60 overflow-y-auto">
                            ${i.length>0?i.map(c=>{var x;const u=Dn(c);return`
                                <button type="button" onclick="window.addProductToCart('${c.id}')" class="p-4 hover:bg-slate-50 cursor-pointer flex justify-between items-center text-left w-full border-b border-slate-50">
                                    <div class="text-left flex-1">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <h4 class="text-xs font-black text-slate-900 text-left">${c.name}</h4>
                                            ${u?`
                                                <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5">
                                                    <span class="material-icons-outlined text-[10px]">build</span> Install
                                                </span>
                                            `:""}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${c.brand} • ${c.category}</p>
                                    </div>
                                    <p class="text-xs font-black text-slate-900 text-right ml-2">₹${((x=c.mop)==null?void 0:x.toLocaleString())||0}</p>
                                </button>
                            `}).join(""):'<p class="p-6 text-[10px] text-slate-300 font-black uppercase text-center">No products found</p>'}
                        </div>
                    `:""}
                </div>
            </section>

            <!-- Cart Section -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                        Cart (${I.length})
                        ${d>0?`<span class="ml-2 text-slate-600">${d} install</span>`:""}
                    </h3>
                    <button type="button" onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900">Clear All</button>
                </div>
                
                <div class="space-y-3 text-left">
                    ${I.map((c,u)=>{var x,b,v;return`
                        <div class="card overflow-hidden ${c.installation_required?"border-slate-300":""}" data-cart-item="${u}">
                            <div class="p-4 flex items-center gap-4 text-left">
                                <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner text-left shrink-0">
                                    <span class="material-icons-outlined text-xl text-slate-300 text-left">${c.installation_required?"home_repair_service":"devices"}</span>
                                </div>
                                <div class="flex-1 text-left min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <h4 class="text-sm font-black text-slate-900 text-left truncate">${c.name}</h4>
                                        ${c.installation_required?`
                                            <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5 shrink-0">
                                                <span class="material-icons-outlined text-[10px]">build</span> Install
                                            </span>
                                        `:""}
                                    </div>
                                    <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${c.category}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    ${c.discount_amount>0?`
                                        <p class="text-[9px] font-bold text-slate-400 line-through text-right">₹${((x=c.mop)==null?void 0:x.toLocaleString())||0}</p>
                                        <p class="text-xs font-black text-right">₹${((b=c.final_price)==null?void 0:b.toLocaleString())||0}</p>
                                    `:`
                                        <p class="text-xs font-black text-right">₹${((v=c.mop)==null?void 0:v.toLocaleString())||0}</p>
                                    `}
                                    <button type="button" onclick="window.removeFromCart(${u})" class="text-[8px] font-black text-slate-400 uppercase text-right hover:text-slate-900">Remove</button>
                                </div>
                            </div>
                            
                            <!-- Discount Badge (if applied) -->
                            ${c.discount_amount>0?`
                                <div class="px-4 py-2 bg-slate-900 text-white flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="material-icons-outlined text-sm">local_offer</span>
                                        <span class="text-[9px] font-black uppercase">
                                            ${c.discount_type==="scheme"?c.scheme_name:`Store Discount (${c.discount_value}%)`}
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-[10px] font-black">-₹${c.discount_amount.toLocaleString()}</span>
                                        <button type="button" onclick="window.clearItemDiscount(${u})" class="text-white/60 hover:text-white">
                                            <span class="material-icons-outlined text-sm">close</span>
                                        </button>
                                    </div>
                                </div>
                            `:""}
                            
                            <!-- Discount Toggle -->
                            <button type="button" onclick="window.toggleCartItemDiscount(${u})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black ${c.discount_amount>0?"text-slate-900":"text-slate-500"} uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${c.showDiscount?"expand_less":"local_offer"}</span>
                                ${c.showDiscount?"Hide Discount":c.discount_amount>0?"Change Discount":"Add Discount"}
                            </button>
                            
                            ${c.showDiscount?`
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-4">
                                    <!-- Store Discount -->
                                    <div>
                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Store Discount (%)</label>
                                        <div class="flex gap-2">
                                            ${[5,10,15,20].map(w=>`
                                                <button type="button" onclick="window.applyStoreDiscount(${u}, ${w})" class="flex-1 py-2 ${c.discount_type==="store"&&c.discount_value===w?"bg-slate-900 text-white":"bg-white border border-slate-200 text-slate-600"} rounded-lg text-[10px] font-black hover:bg-slate-800 hover:text-white transition-all">
                                                    ${w}%
                                                </button>
                                            `).join("")}
                                            <input type="number" placeholder="Other" min="1" max="100" onchange="window.applyStoreDiscount(${u}, this.value)" class="w-16 px-2 py-2 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-center focus:outline-none focus:border-slate-900">
                                        </div>
                                    </div>
                                    
                                    <!-- Scheme Discounts -->
                                    ${c.applicableSchemes&&c.applicableSchemes.length>0?`
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Brand Schemes</label>
                                            <div class="space-y-2">
                                                ${c.applicableSchemes.map(w=>`
                                                    <button type="button" onclick="window.applySchemeDiscount(${u}, '${w.id}')" class="w-full p-3 ${c.scheme_id===w.id?"bg-slate-900 text-white border-slate-900":"bg-white border border-slate-200 text-slate-700"} rounded-xl text-left flex items-center justify-between hover:border-slate-900 transition-all">
                                                        <div>
                                                            <p class="text-[10px] font-black">${w.name}</p>
                                                            <p class="text-[8px] font-bold ${c.scheme_id===w.id?"text-white/70":"text-slate-400"}">${w.brand}</p>
                                                        </div>
                                                        <span class="text-[10px] font-black ${c.scheme_id===w.id?"text-white":"text-slate-900"}">
                                                            ${w.discount_type==="percentage"?`${w.discount_value}%`:`₹${w.discount_value.toLocaleString()}`} OFF
                                                        </span>
                                                    </button>
                                                `).join("")}
                                            </div>
                                        </div>
                                    `:`
                                        <div class="text-center py-3 opacity-50">
                                            <p class="text-[9px] font-bold text-slate-400">No brand schemes available for this product</p>
                                        </div>
                                    `}
                                </div>
                            `:""}
                            
                            <!-- Installation Date (for products requiring installation) -->
                            ${c.installation_required?`
                                <div class="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center gap-3">
                                    <span class="material-icons-outlined text-slate-500 text-sm">event</span>
                                    <div class="flex-1">
                                        <label class="text-[8px] font-black text-slate-600 uppercase tracking-widest block mb-1">Installation Date</label>
                                        <input type="date" value="${c.installation_date||""}" onchange="window.updateItemInstallationDate(${u}, this.value)" min="${new Date().toISOString().split("T")[0]}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                    </div>
                                    <button type="button" onclick="window.toggleItemInstallation(${u})" class="text-[8px] font-black text-slate-400 uppercase hover:text-slate-600" title="Disable installation">
                                        <span class="material-icons-outlined text-sm">close</span>
                                    </button>
                                </div>
                            `:""}
                            
                            <!-- Device Details Toggle -->
                            <button type="button" onclick="window.toggleCartItemDetails(${u})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black text-slate-500 uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${c.showDetails?"expand_less":"expand_more"}</span>
                                ${c.showDetails?"Hide":"Add"} Device Details
                            </button>
                            
                            ${c.showDetails?`
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-3">
                                    <!-- AI Scan Button (Mobile Only) -->
                                    <button type="button" onclick="window.captureDeviceImage(${u})" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all sm:hidden ${ls?"opacity-50 cursor-not-allowed":""}" ${ls?"disabled":""}>
                                        ${ls?`
                                            <span class="material-icons-outlined text-sm animate-spin">sync</span>
                                            <span id="ocr-progress-${u}">${$a||"Analyzing..."}</span>
                                        `:`
                                            <span class="material-icons-outlined text-sm">photo_camera</span>
                                            <span>Scan with AI</span>
                                        `}
                                    </button>
                                    
                                    <!-- Standard Fields -->
                                    <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">IMEI Number</label>
                                            <input type="text" value="${c.imei||""}" onchange="window.updateCartItemDetail(${u}, 'imei', this.value)" placeholder="Enter IMEI" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Serial Number</label>
                                            <input type="text" value="${c.serial_number||""}" onchange="window.updateCartItemDetail(${u}, 'serial_number', this.value)" placeholder="Enter Serial" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">MAC ID</label>
                                            <input type="text" value="${c.mac_id||""}" onchange="window.updateCartItemDetail(${u}, 'mac_id', this.value)" placeholder="Enter MAC" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Mfg. Date</label>
                                            <input type="date" value="${c.manufacturing_date||""}" onchange="window.updateCartItemDetail(${u}, 'manufacturing_date', this.value)" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                    </div>
                                    
                                    <!-- Dynamic Extra Fields (from AI or manually added) -->
                                    ${c.extraFields&&c.extraFields.length>0?`
                                        <div class="pt-2 border-t border-slate-200">
                                            <div class="flex items-center justify-between mb-2">
                                                <span class="text-[8px] font-black text-slate-500 uppercase tracking-widest">Additional Fields</span>
                                            </div>
                                            <div class="grid grid-cols-2 gap-3">
                                                ${c.extraFields.map((w,g)=>`
                                                    <div class="relative">
                                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">${w.label}</label>
                                                        <div class="flex gap-1">
                                                            <input type="${w.type||"text"}" 
                                                                   value="${w.value||""}" 
                                                                   onchange="window.updateCartItemExtraField(${u}, ${g}, this.value)" 
                                                                   placeholder="Enter ${w.label}"
                                                                   class="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                                            <button type="button" onclick="window.removeExtraField(${u}, ${g})" class="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-all" title="Remove field">
                                                                <span class="material-icons-outlined text-sm">close</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                `).join("")}
                                            </div>
                                        </div>
                                    `:""}
                                    
                                    <!-- Add Custom Field Button -->
                                    <button type="button" onclick="window.addCustomExtraField(${u})" class="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-slate-100 transition-all">
                                        <span class="material-icons-outlined text-sm">add</span>
                                        Add Custom Field
                                    </button>
                                    
                                    <!-- Manual installation toggle for products that don't auto-require it -->
                                    ${c.installation_required?"":`
                                        <button type="button" onclick="window.toggleItemInstallation(${u})" class="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">build</span>
                                            Add Installation
                                        </button>
                                    `}
                                </div>
                            `:""}
                        </div>
                    `}).join("")}

                    ${I.length===0?`
                        <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 text-center">shopping_basket</span>
                            <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] text-center">Cart is empty</span>
                        </div>
                    `:""}
                </div>
            </section>

            <!-- Action Buttons -->
            <div class="flex gap-3 pt-6 border-t border-slate-100 mt-6 text-left">
                <button type="button" onclick="window.saveDraft()" class="flex-1 py-4 border-2 border-slate-900 rounded-2xl text-[10px] font-black uppercase hover:bg-slate-50 transition-all text-center">Save Draft</button>
                <button type="button" id="complete-txn-btn" onclick="window.openPaymentModal()" class="flex-[2] py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-center">
                    Complete (₹${r.toLocaleString()})
                    <span class="material-icons-outlined text-sm text-center">arrow_forward</span>
                </button>
            </div>
        </div>

        <!-- Payment Modal -->
        ${ma?`
            <div class="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
                    <div class="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest">Select Payment Mode</h3>
                        <button type="button" onclick="window.closePaymentModal()" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900">
                            <span class="material-icons-outlined">close</span>
                        </button>
                    </div>
                    
                    <div class="p-6 space-y-4">
                        <div class="grid grid-cols-3 gap-3">
                            <button type="button" onclick="window.selectPaymentMode('cash')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${G==="cash"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${G==="cash"?"text-slate-900":"text-slate-400"}">payments</span>
                                <span class="text-[10px] font-black uppercase ${G==="cash"?"text-slate-900":"text-slate-500"}">Cash</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('card')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${G==="card"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${G==="card"?"text-slate-900":"text-slate-400"}">credit_card</span>
                                <span class="text-[10px] font-black uppercase ${G==="card"?"text-slate-900":"text-slate-500"}">Card</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('upi')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${G==="upi"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${G==="upi"?"text-slate-900":"text-slate-400"}">qr_code</span>
                                <span class="text-[10px] font-black uppercase ${G==="upi"?"text-slate-900":"text-slate-500"}">UPI</span>
                            </button>
                        </div>

                        ${G==="card"||G==="upi"?`
                            <div>
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">${G==="card"?"Card Reference / Last 4 Digits":"UPI Transaction ID"}</label>
                                <input type="text" value="${pt}" oninput="window.updatePaymentReference(this.value)" placeholder="${G==="card"?"Enter reference":"Enter UPI ID"}" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        `:""}

                        <div class="pt-4 border-t border-slate-100">
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-xs font-bold text-slate-500 uppercase">Total Amount</span>
                                <span class="text-xl font-black text-slate-900">₹${r.toLocaleString()}</span>
                            </div>
                            <button type="button" onclick="window.confirmPayment()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                <span class="material-icons-outlined text-sm">check_circle</span>
                                Confirm Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `:""}
    `}function ml(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function wa(e){const t=new Date(e);return t.setHours(23,59,59,999),t}function za(e,t,s,a){if(t==="all")return e;const n=new Date,l=ml(n);return e.filter(i=>{const r=new Date(i.date);switch(t){case"today":return r>=l&&r<=wa(n);case"week":{const d=new Date(l);return d.setDate(d.getDate()-d.getDay()),r>=d&&r<=wa(n)}case"month":{const d=new Date(l.getFullYear(),l.getMonth(),1);return r>=d&&r<=wa(n)}case"custom":{if(!s&&!a)return!0;const d=s?ml(new Date(s)):new Date(0),c=a?wa(new Date(a)):new Date;return r>=d&&r<=c}default:return!0}})}window.toggleDateFilterDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("date-filter-dropdown");t&&t.classList.toggle("hidden")};window.updateHistoryFromDate=e=>{p.historyFromDate=e,p.historyToDate&&(p.historyDateFilter="custom",window.triggerRender())};window.updateHistoryToDate=e=>{p.historyToDate=e,p.historyFromDate&&(p.historyDateFilter="custom",window.triggerRender())};function er(){const e=window.getCache(),t=e.sales||[],s=e.saleItems||[],a=(e.storeOrders||[]).filter(g=>g.order_status!=="delivered"&&g.order_status!=="cancelled"),n=t.filter(g=>g.status==="draft"),l=t.filter(g=>g.status!=="draft"),i=p.historyViewMode||"completed",r=p.historyDateFilter||"all",d=za(n,r,p.historyFromDate,p.historyToDate),c=za(l,r,p.historyFromDate,p.historyToDate),u=za(a.map(g=>({...g,date:g.order_date})),r,p.historyFromDate,p.historyToDate),x=i==="drafts"?d:i==="online"?u:c,b=()=>{switch(r){case"today":return"Today";case"week":return"This Week";case"month":return"This Month";case"custom":return p.historyFromDate||p.historyToDate?"Custom Range":"All Time";default:return"All Time"}},v=g=>{switch(g){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}},w=g=>{switch(g){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Paid"}};return`
        ${Ki("history")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Toggle & Filter Section -->
            <section class="space-y-4">
                <!-- View Mode Toggle -->
                <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                    <button type="button" onclick="window.setHistoryViewMode('completed')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${i==="completed"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">check_circle</span>
                        <span class="hidden sm:inline">Completed</span> (${l.length})
                    </button>
                    <button type="button" onclick="window.setHistoryViewMode('online')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 relative ${i==="online"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">public</span>
                        <span class="hidden sm:inline">Online</span> (${a.length})
                        ${a.filter(g=>g.order_status==="pending").length>0?`<span class="absolute -top-1 right-1 w-4 h-4 bg-slate-900 text-white text-[7px] font-black rounded-full flex items-center justify-center">${a.filter(g=>g.order_status==="pending").length}</span>`:""}
                    </button>
                    <button type="button" onclick="window.setHistoryViewMode('drafts')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${i==="drafts"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">edit_note</span>
                        <span class="hidden sm:inline">Drafts</span> (${n.length})
                    </button>
                </div>

                <!-- Date Filter -->
                <div class="flex items-center justify-between gap-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        ${i==="drafts"?"Saved Drafts":"Completed"}
                        <span class="text-slate-300 ml-1">(${x.length})</span>
                    </h3>
                    
                    <div class="relative">
                        <button type="button" onclick="window.toggleDateFilterDropdown(event)" class="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-[9px] font-black text-slate-600 uppercase hover:border-slate-300 transition-all">
                            <span class="material-icons-outlined text-sm">calendar_today</span>
                            ${b()}
                            <span class="material-icons-outlined text-sm text-slate-400">expand_more</span>
                        </button>
                        
                        <!-- Date Filter Dropdown -->
                        <div id="date-filter-dropdown" class="hidden absolute top-full right-0 z-50 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
                            <div class="p-2 space-y-1">
                                <button type="button" onclick="window.setHistoryDateFilter('all'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="all"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">all_inclusive</span>
                                    All Transactions
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('today'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="today"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">today</span>
                                    Today
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('week'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="week"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">date_range</span>
                                    This Week
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('month'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="month"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">calendar_month</span>
                                    This Month
                                </button>
                            </div>
                            
                            <div class="border-t border-slate-100 p-3 space-y-3">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Custom Date Range</p>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">From</label>
                                        <input type="date" value="${p.historyFromDate||""}" onchange="window.updateHistoryFromDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">To</label>
                                        <input type="date" value="${p.historyToDate||""}" onchange="window.updateHistoryToDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Transactions List -->
            ${x.length===0?`
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <span class="material-icons-outlined text-3xl text-slate-200">${i==="drafts"?"edit_note":i==="online"?"public":"receipt_long"}</span>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        No ${i==="drafts"?"saved drafts":i==="online"?"pending online orders":"transactions"} found
                    </span>
                    <span class="text-[9px] font-bold text-slate-300">
                        ${i==="online"?"Delivered orders appear in Completed tab":r!=="all"?"Try adjusting your date filter":""}
                    </span>
                </div>
            `:`
                <section class="space-y-3 text-left">
                    ${i==="online"?`
                        <!-- Online Orders List -->
                        ${u.map(g=>{const _=(e.storeOrderItems||[]).filter(V=>V.order_id===g.id),E=_[0]?_[0].product_name:"Order items",T=_.length>1?`+ ${_.length-1} more`:"",P=V=>{switch(V){case"pending":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600">Pending</span>';case"confirmed":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';case"shipped":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Shipped</span>';default:return""}};return`
                                <button type="button" onclick="window.setApp('mystore'); window.setActiveStoreOrder('${g.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full border-transparent hover:border-slate-200">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">${g.order_number}</p>
                                                <span class="bg-slate-900 px-1.5 py-0.5 rounded text-[7px] font-black text-white flex items-center gap-1 uppercase tracking-tighter">
                                                    <span class="material-icons-outlined text-[10px]">public</span> Online
                                                </span>
                                                ${P(g.order_status)}
                                                ${g.payment_status==="paid"?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">Paid</span>':g.payment_mode==="cod"?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">COD</span>':""}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${g.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${g.total_amount?parseInt(g.total_amount).toLocaleString():0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${E} ${T}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">language</span>
                                                ${g.payment_mode==="cod"?"COD":g.payment_mode==="upi"?"UPI":"Online"} • ${g.shipping_city||"Ship pending"}
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(g.order_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </div>
                                </button>
                            `}).join("")}
                    `:i==="drafts"?`
                        <!-- Drafts List -->
                        ${d.map(g=>{const _=s.filter(P=>P.sale_id===g.id),E=_[0]?_[0].product_name:"No items",T=_.length>1?`+ ${_.length-1} more`:"";return`
                                <div class="card border-2 border-dashed overflow-hidden ${p.salesHistoryId===g.id?"border-slate-900 shadow-lg":"border-slate-200"}">
                                    <button type="button" onclick="window.setSalesHistoryId('${g.id}')" class="p-5 text-left w-full">
                                        <div class="flex justify-between items-start mb-3 text-left">
                                            <div class="text-left">
                                                <div class="flex items-center gap-2 mb-1 text-left">
                                                    <span class="bg-slate-900 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                                                        Draft
                                                    </span>
                                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">#${g.id}</p>
                                                </div>
                                                <h4 class="text-lg font-black text-slate-900 tracking-tighter text-left">${g.customer_name||"No Customer"}</h4>
                                            </div>
                                            <p class="text-lg font-black text-slate-900 tracking-tighter text-right">₹${g.total_amount?parseInt(g.total_amount).toLocaleString():0}</p>
                                        </div>
                                        <div class="space-y-1 text-left">
                                            <p class="text-[10px] font-bold text-slate-500 uppercase text-left">${E} ${T}</p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-left">${new Date(g.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </button>
                                    <div class="px-5 pb-4 flex gap-2">
                                        <button type="button" onclick="window.loadDraft('${g.id}')" class="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-all">
                                            <span class="material-icons-outlined text-sm">edit</span>
                                            Resume Draft
                                        </button>
                                        <button type="button" onclick="window.deleteDraft('${g.id}')" class="py-2.5 px-4 bg-white border border-slate-200 text-slate-500 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            `}).join("")}
                    `:`
                        <!-- Completed Transactions List -->
                        ${c.map(g=>{const _=s.filter(re=>re.sale_id===g.id),E=_[0]?_[0].product_name:"Custom Sale",T=_.length>1?`+ ${_.length-1} more`:"",P=v(g.payment_mode),V=w(g.payment_mode);return`
                                <button type="button" onclick="window.setSalesHistoryId('${g.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full ${p.salesHistoryId===g.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">Order #${g.id}</p>
                                                <span class="px-1.5 py-0.5 rounded text-[7px] font-black ${g.source==="online"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} flex items-center gap-1 uppercase tracking-tighter text-left">
                                                    <span class="material-icons-outlined text-[10px] text-left">${g.source==="online"?"public":"store"}</span> ${g.source==="online"?"Online":"In-Store"}
                                                </span>
                                                ${g.gst_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter">
                                                        GST
                                                    </span>
                                                `:""}
                                                ${g.installation_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter flex items-center gap-0.5">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Install
                                                    </span>
                                                `:""}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${g.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${g.total_amount?parseInt(g.total_amount).toLocaleString():0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${E} ${T}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">${P}</span>
                                                ${V} • Completed
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(g.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </div>
                                </button>
                            `}).join("")}
                    `}
                </section>
            `}
        </div>
    `}window.deleteDraft=async e=>{window.showConfirm("Are you sure you want to delete this draft?",async()=>{try{await A.sales.deleteItems(e),await A.sales.delete(e),await Y(),window.toast.success("Draft deleted successfully")}catch(t){console.error("Error deleting draft:",t),window.toast.error("Error deleting draft: "+t.message)}})};window.printReceipt=()=>{window.print()};window.shareWhatsApp=()=>{const e=Ua();if(!e)return;const t=tr(e),s=`https://wa.me/?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};window.automateTransaction=()=>{const e=Ua();if(!e){window.toast.warning("No transaction data to automate");return}window._automationContext={transactionId:e.id,customer:e.customer,phone:e.phone,items:e.items,total:e.total,date:e.date,installationRequired:e.installationRequired,installationDate:e.installationDate},window.setApp("automation"),window.setAutomationViewMode("create")};window.shareNative=async()=>{const e=Ua();if(!e)return;const t=tr(e);if(navigator.share)try{await navigator.share({title:`Invoice #${e.id}`,text:t})}catch(s){s.name!=="AbortError"&&console.error("Share failed:",s)}else try{await navigator.clipboard.writeText(t),window.toast.success("Receipt copied to clipboard!")}catch(s){console.error("Copy failed:",s),window.toast.error("Failed to copy receipt")}};function Ua(){var s,a,n;const e=p.currentTab==="history",t=window.getCache();if(e){const l=(t.sales||[]).find(u=>u.id===p.salesHistoryId);if(!l)return null;const i=(t.saleItems||[]).filter(u=>u.sale_id===l.id),r=(s=t.customers)==null?void 0:s.find(u=>u.id===l.customer_id),d=l.company_id?(a=t.companies)==null?void 0:a.find(u=>u.id===l.company_id):null,c=l.total_amount||0;return{id:l.id,status:l.status,customer:l.customer_name,customerId:l.customer_id,phone:(r==null?void 0:r.phone)||"N/A",date:new Date(l.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(l.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:i.map(u=>{let x=[];if(u.extra_fields)try{x=JSON.parse(u.extra_fields)}catch{}return{name:u.product_name,category:u.category||"Standard",price:u.price,imei:u.imei,serial_number:u.serial_number,mac_id:u.mac_id,manufacturing_date:u.manufacturing_date,installation_date:u.installation_date,extraFields:x}}),subtotal:c/1.18,gst:c-c/1.18,total:c,paymentMode:l.payment_mode,paymentReference:l.payment_reference,gstRequired:l.gst_required,company:d,installationRequired:l.installation_required,installationDate:l.installation_date}}else{const l=window.getActiveCart?window.getActiveCart():[],i=window.getSelectedCustomer?window.getSelectedCustomer():{name:"Walk-in Customer",id:null},r=window.getSaleState?window.getSaleState():{},d=(n=window.getCache().customers)==null?void 0:n.find(x=>x.id===i.id),c=l.reduce((x,b)=>x+(b.final_price||b.mop||0),0),u=l.reduce((x,b)=>x+(b.discount_amount||0),0);return l.length===0?null:{id:"DRAFT",status:"draft",customer:i.name,customerId:i.id,phone:(d==null?void 0:d.phone)||"",date:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:l.map(x=>({name:x.name,category:x.category,price:x.mop,discount_type:x.discount_type,discount_value:x.discount_value,discount_amount:x.discount_amount,scheme_name:x.scheme_name,final_price:x.final_price||x.mop,imei:x.imei,serial_number:x.serial_number,mac_id:x.mac_id,manufacturing_date:x.manufacturing_date,installation_date:x.installation_required?x.installation_date:null,extraFields:x.extraFields||[]})),subtotal:c/1.18,gst:c-c/1.18,total:c,totalDiscount:u,paymentMode:r.paymentMode,paymentReference:r.paymentReference,gstRequired:r.gstRequired,company:r.gstRequired?{name:r.companyName,gst_number:r.gstNumber}:null,installationRequired:r.installationRequired,installationDate:r.installationDate}}}function tr(e){let t=`INVOICE #${e.id}
`;return t+=`━━━━━━━━━━━━━━━━━━━━
`,t+=`${e.date} | ${e.time}

`,t+=`${e.customer}
`,t+=`${e.phone}
`,e.company&&(t+=`${e.company.name}
`,t+=`GST: ${e.company.gst_number}
`),t+=`
━━━━━━━━━━━━━━━━━━━━
`,t+=`ITEMS:
`,e.items.forEach(s=>{t+=`
• ${s.name}
`,t+=`  ${s.category} - ₹${parseInt(s.price).toLocaleString()}
`,s.imei&&(t+=`  IMEI: ${s.imei}
`),s.serial_number&&(t+=`  S/N: ${s.serial_number}
`),s.installation_date&&(t+=`  Install: ${new Date(s.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}
`)}),t+=`
━━━━━━━━━━━━━━━━━━━━
`,t+=`Subtotal: ₹${e.subtotal.toLocaleString(void 0,{maximumFractionDigits:2})}
`,t+=`GST (18%): ₹${e.gst.toLocaleString(void 0,{maximumFractionDigits:2})}
`,t+=`━━━━━━━━━━━━━━━━━━━━
`,t+=`TOTAL: ₹${parseInt(e.total).toLocaleString()}
`,e.paymentMode&&(t+=`
Paid via ${{cash:"Cash",card:"Card",upi:"UPI"}[e.paymentMode]||e.paymentMode}`,e.paymentReference&&(t+=` (Ref: ${e.paymentReference})`)),e.installationRequired&&e.installationDate&&(t+=`

Installation: ${new Date(e.installationDate).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}`),t+=`

━━━━━━━━━━━━━━━━━━━━
`,t+=`Thank you for shopping!
`,t+="Powered by RetailerOS",t}function Bd(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function Fd(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function sr(){const e=p.currentTab==="history",t=Ua();if(!t)return`<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
            <span class="material-icons-outlined text-4xl mb-2">${e?"receipt_long":"shopping_cart"}</span>
            <p class="text-xs font-black uppercase tracking-widest">${e?"Select a transaction to view receipt":"Add items to cart to preview invoice"}</p>
        </div>`;const s=t.status==="draft";return`
        <div id="receipt-content" class="card p-6 sm:p-8 bg-white text-slate-900 font-inter leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100 print:shadow-none print:border-0">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-2xl font-black tracking-tighter mb-1">${s?"Draft Invoice":"Invoice"}</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>GSTIN: 27AAACR3456D1Z5</span>
                    <span>Order #${t.id}</span>
                </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                <div class="text-left">
                   <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Billed To</p>
                   <p class="text-sm font-black text-slate-900 text-left">${t.customer}</p>
                   <p class="text-[10px] font-bold text-slate-400 text-left">${t.phone}</p>
                </div>
                <div class="text-right">
                   <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-right">Transaction</p>
                   <p class="text-sm font-black text-slate-900 text-right">${t.date}</p>
                   <p class="text-[10px] font-bold text-slate-400 text-right">${t.time}</p>
                </div>
            </div>

            <!-- GST Company Info -->
            ${t.gstRequired&&t.company?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                    <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
                        <span class="material-icons-outlined text-sm">business</span>
                        GST Invoice
                    </div>
                    <p class="text-sm font-black text-slate-900">${t.company.name}</p>
                    <p class="text-[10px] font-bold text-slate-500">GSTIN: ${t.company.gst_number}</p>
                </div>
            `:""}

            <!-- Installation Summary -->
            ${t.installationRequired?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                        <span class="material-icons-outlined text-sm">build</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Installation Required</p>
                        <p class="text-[10px] font-bold text-slate-500">See individual items for scheduled dates</p>
                    </div>
                </div>
            `:""}

            <!-- Items -->
            <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2 text-left">
                ${t.items.map(a=>`
                    <div class="pb-4 border-b border-slate-100 last:border-0">
                        <div class="flex justify-between items-start mb-2 text-left">
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${a.name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${a.category}</p>
                            </div>
                            <div class="text-right shrink-0 ml-2">
                                ${a.discount_amount>0?`
                                    <p class="text-[9px] font-bold text-slate-400 line-through">₹${parseInt(a.price).toLocaleString()}</p>
                                    <p class="text-sm font-black text-slate-900">₹${parseInt(a.final_price||a.price).toLocaleString()}</p>
                                `:`
                                    <p class="text-sm font-black text-slate-900">₹${parseInt(a.price).toLocaleString()}</p>
                                `}
                            </div>
                        </div>
                        ${a.discount_amount>0?`
                            <div class="flex items-center gap-2 mb-2 bg-slate-900 text-white px-2 py-1 rounded-lg">
                                <span class="material-icons-outlined text-xs">local_offer</span>
                                <span class="text-[8px] font-black uppercase flex-1">
                                    ${a.discount_type==="scheme"?a.scheme_name:`Store Discount (${a.discount_value}%)`}
                                </span>
                                <span class="text-[9px] font-black">-₹${parseInt(a.discount_amount).toLocaleString()}</span>
                            </div>
                        `:""}
                        ${a.imei||a.serial_number||a.mac_id||a.installation_date||a.extraFields&&a.extraFields.length>0?`
                            <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                    <span class="material-icons-outlined text-xs">verified</span> Device Info
                                </div>
                                <div class="grid grid-cols-2 gap-2 text-left">
                                    ${a.imei?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">IMEI</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${a.imei}</p>
                                        </div>
                                    `:""}
                                    ${a.serial_number?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">Serial</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${a.serial_number}</p>
                                        </div>
                                    `:""}
                                    ${a.mac_id?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">MAC ID</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${a.mac_id}</p>
                                        </div>
                                    `:""}
                                    ${a.manufacturing_date?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">Mfg. Date</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${new Date(a.manufacturing_date).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}</p>
                                        </div>
                                    `:""}
                                    ${(a.extraFields||[]).map(n=>`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">${n.label}</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${n.value}</p>
                                        </div>
                                    `).join("")}
                                    ${a.installation_date?`
                                        <div class="col-span-2 pt-2 mt-2 border-t border-slate-200">
                                            <p class="text-[7px] font-bold text-slate-500 uppercase flex items-center gap-1">
                                                <span class="material-icons-outlined text-[10px]">build</span> Installation Date
                                            </p>
                                            <p class="text-[9px] font-black text-slate-700">${new Date(a.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    `:""}
                                </div>
                            </div>
                        `:""}
                    </div>
                `).join("")}
            </div>

            <!-- Footer Totals -->
            <div class="border-t border-dashed border-slate-200 pt-6 mt-4 space-y-2">
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${t.subtotal.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                ${t.totalDiscount>0?`
                    <div class="flex justify-between text-[10px] font-bold text-slate-900 uppercase">
                        <span class="tracking-widest flex items-center gap-1"><span class="material-icons-outlined text-xs">local_offer</span> You Saved</span>
                        <span>-₹${parseInt(t.totalDiscount).toLocaleString()}</span>
                    </div>
                `:""}
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${t.gst.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                    <span>Grand Total</span>
                    <span class="text-slate-900">₹${parseInt(t.total).toLocaleString()}</span>
                </div>
            </div>
            
            <!-- Payment Status -->
            ${t.paymentMode?`
                <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-icons-outlined text-sm">${Bd(t.paymentMode)}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black uppercase tracking-widest text-left">Paid via ${Fd(t.paymentMode)}</p>
                            ${t.paymentReference?`<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase text-left">Ref: ${t.paymentReference}</p>`:""}
                        </div>
                    </div>
                    <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                </div>
            `:s?`
                <div class="bg-slate-100 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <span class="material-icons-outlined text-sm">pending</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Payment Pending</p>
                        <p class="text-[8px] font-bold text-slate-400">Complete transaction to record payment</p>
                    </div>
                </div>
            `:""}
            
            <!-- Action Buttons -->
            <div class="flex justify-end gap-2 mt-4 no-print">
                <button type="button" onclick="window.automateTransaction()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Create Automation">
                    <span class="material-icons-outlined text-lg">smart_toy</span>
                </button>
                <button type="button" onclick="window.shareWhatsApp()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share via WhatsApp">
                    <span class="material-icons-outlined text-lg">chat</span>
                </button>
                <button type="button" onclick="window.shareNative()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share">
                    <span class="material-icons-outlined text-lg">share</span>
                </button>
                <button type="button" onclick="window.printReceipt()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Print">
                    <span class="material-icons-outlined text-lg">print</span>
                </button>
            </div>
        </div>
    `}function Va(e,t="RETAILEROS"){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="${p.clientViewMode==="directory"||p.clientViewMode==="groups"?"setApp('launcher')":"setClientMode('directory')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">${p.clientViewMode==="directory"||p.clientViewMode==="groups"?"Back":"Directory"}</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">${e}</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${t}</p>
                </div>
                <div class="w-10"></div>
            </div>
        </header>
    `}function bl(){const e=window.getCache(),t=e.customers||[],s=p.clientSearchQuery||"",n=[...s?t.filter(l=>l.name.toLowerCase().includes(s.toLowerCase())||l.phone&&l.phone.includes(s)||l.email&&l.email.toLowerCase().includes(s.toLowerCase())):t].sort((l,i)=>new Date(i.joined_at||0)-new Date(l.joined_at||0));return`
        ${Va("Clients","RETAILEROS")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 relative text-left">
            <!-- Toggle -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-2 text-left">
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg bg-white shadow-sm text-slate-900 text-center">Directory</button>
                <button onclick="window.setClientMode('groups')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg text-slate-400 text-center">Groups</button>
            </div>

            <!-- Search -->
            <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                <input type="text" 
                       id="client-search-input"
                       value="${s}"
                       oninput="window.updateClientSearch(this.value)" 
                       placeholder="Search by name, phone, email..." 
                       class="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
            </div>

            <!-- Stats Bar -->
            <div class="flex items-center justify-between text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                    ${n.length} ${n.length===1?"Client":"Clients"}
                    ${s?` matching "${s}"`:""}
                </p>
                <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">Database: Live</span>
            </div>

            <!-- Client List -->
            <div class="space-y-3 pb-24 text-left">
                ${n.length===0?`
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">person_off</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                            ${s?"No clients found":"No clients yet"}
                        </span>
                        ${s?'<span class="text-[9px] font-bold text-slate-300">Try a different search term</span>':""}
                    </div>
                `:n.map(l=>{var d;const i=(e.sales||[]).filter(c=>c.customer_id===l.id&&c.status!=="draft"),r=i.reduce((c,u)=>c+(u.total_amount||0),0);return(d=i[0])==null||d.date,`
                    <button type="button" onclick="window.setClientMode('profile', '${l.name.replace(/'/g,"\\'")}', '${l.id}')" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full ${p.selectedClient===l.name?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400 text-center shrink-0">${l.name.split(" ").map(c=>c[0]).join("").toUpperCase()}</div>
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${l.name}</h4>
                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${l.phone||l.email||"No contact"}</p>
                            </div>
                        </div>
                        <div class="text-right shrink-0 ml-2">
                            ${r>0?`
                                <p class="text-xs font-black text-slate-900 tracking-tighter text-right">₹${r.toLocaleString()}</p>
                                <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">${i.length} orders</p>
                            `:`
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-tighter text-right">No orders</p>
                            `}
                        </div>
                    </button>
                `}).join("")}
            </div>

            <!-- Floating Add Button -->
            <button onclick="setClientMode('add')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}window.updateClientSearch=e=>{const t=document.getElementById("client-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;p.clientSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("client-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};async function Ud(){const e=document.getElementById("client-name"),t=document.getElementById("client-phone"),s=document.getElementById("client-email"),a=document.getElementById("client-location");if(!e||!t){console.error("Form inputs not found"),window.toast.error("Form error. Please try again.");return}const n=e.value.trim(),l=t.value.trim(),i=s.value.trim(),r=a?a.value.trim():"";if(!n||!l){window.toast.warning("Name and Phone are required");return}const d=document.getElementById("save-client-btn");let c="";d&&(c=d.innerHTML,d.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...',d.disabled=!0);try{const u="CL-"+Math.random().toString(36).substr(2,6).toUpperCase();console.log("Saving client:",{id:u,name:n,phone:l,email:i,location:r}),await A.clients.add({id:u,name:n,phone:l,email:i,location:r}),console.log("Client saved successfully"),await Y(),window.toast.success("Client added successfully!"),p.currentApp==="sales"?(Qi(u,n),Bl("default")):Nl("directory")}catch(u){console.error("Error saving client:",u),window.toast.error("Error saving client: "+u.message),d&&(d.innerHTML=c,d.disabled=!1)}}window.saveClient=Ud;function gn(e){const t=e==="desktop";return`
        ${t?"":Va("New Client","RETAILEROS • CLIENTS")}
        <div class="${t?"h-full flex flex-col pt-8":"scrolling-content"} px-4 sm:px-8 space-y-8 pb-12 text-left">
             ${t?`
                <div class="flex items-center justify-between mb-2 text-left">
                     <div class="flex items-center gap-4">
                         <div class="w-12 h-12 bg-slate-900 rounded-[18px] flex items-center justify-center shadow-lg text-center">
                             <span class="material-icons-outlined text-white text-center">person_add</span>
                         </div>
                         <div class="text-left">
                            <h2 class="text-xl font-black tracking-tighter text-left">New Customer</h2>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] text-left">Add to Sales Transaction</p>
                         </div>
                     </div>
                     <button type="button" onclick="window.setSalesMode('default')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                         <span class="material-icons-outlined">close</span>
                     </button>
                </div>
             `:""}

            <div class="space-y-6 text-left">
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Full Name <span class="text-slate-900">*</span></label>
                    <input type="text" id="client-name" placeholder="e.g. Jonathan Ive" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Mobile Number <span class="text-slate-900">*</span></label>
                    <input type="tel" id="client-phone" placeholder="+91 98765 43210" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Email Address</label>
                    <input type="email" id="client-email" placeholder="client@example.com" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left relative">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Location</label>
                    <input type="text" id="client-location" placeholder="City, State" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm pr-14 text-left">
                    <span class="absolute right-5 top-[38px] material-icons-outlined text-slate-300 text-right">location_on</span>
                </div>
            </div>

            <button type="button" id="save-client-btn" onclick="window.saveClient()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center">
                Save Customer
                <span class="material-icons-outlined text-xs text-center">done_all</span>
            </button>
            
            ${t?`
                <p class="text-[9px] font-bold text-slate-300 text-center">Customer will be automatically selected after saving</p>
            `:""}
        </div>
    `}function hl(e){var g;const t=e==="desktop",s=window.getCache(),a=((g=s.customers)==null?void 0:g.find(_=>_.id===p.selectedClientId||_.name===p.selectedClient))||{name:p.selectedClient||"Unknown",joined_at:new Date().toISOString()},n=a.name?a.name.split(" ").map(_=>_[0]).join("").toUpperCase():"?",l=(s.sales||[]).filter(_=>_.customer_id===a.id&&_.status!=="draft").sort((_,E)=>new Date(E.date)-new Date(_.date)),i=s.saleItems||[],r=(s.inquiries||[]).filter(_=>_.customer_id===a.id||_.customer_name===a.name),d=(s.repairs||[]).filter(_=>_.customer_id===a.id||_.customer_name===a.name),c=(s.automations||[]).filter(_=>_.customer_id===a.id),u=s.automationMessages||[],x=(s.communications||[]).filter(_=>_.customer_id===a.id),b=l.reduce((_,E)=>_+(E.total_amount||0),0),v=l.length,w=[...l.map(_=>({type:"sale",date:_.date,data:_,items:i.filter(E=>E.sale_id===_.id)})),...d.map(_=>({type:"repair",date:_.created_at||_.date,data:_})),...r.map(_=>({type:"inquiry",date:_.date||_.created_at,data:_})),...c.map(_=>({type:"automation",date:_.created_at,data:_,messages:u.filter(E=>E.automation_id===_.id)})),...x.map(_=>({type:"communication",date:_.sent_at,data:_}))].sort((_,E)=>new Date(E.date)-new Date(_.date));return`
        ${t?"":Va("Client Profile","RETAILEROS")}
        <div class="scrolling-content px-4 sm:px-8 space-y-8 pb-12 text-left">
            <!-- Profile Header -->
            <div class="flex flex-col items-center pt-8 text-center">
                <div class="w-20 h-20 sm:w-24 sm:h-24 bg-slate-100 rounded-full mb-6 flex items-center justify-center font-black text-2xl sm:text-3xl text-slate-400 shadow-inner border-[6px] border-white relative text-center">
                    ${n}
                    <div class="absolute bottom-1 right-1 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 border-4 border-white rounded-full text-center"></div>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 text-center">${a.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">
                    ${a.location||"Customer"} • Joined ${new Date(a.joined_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}
                </p>
                
                <!-- Contact Info -->
                <div class="mt-4 flex flex-col items-center gap-1 text-center">
                    ${a.phone?`<p class="text-xs font-bold text-slate-500">${a.phone}</p>`:""}
                    ${a.email?`<p class="text-xs font-bold text-slate-400">${a.email}</p>`:""}
                </div>
                
                <!-- Quick Actions -->
                <div class="flex items-center gap-4 mt-8 text-center justify-center">
                    ${a.phone?`<a href="tel:${a.phone}" class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">call</span></a>`:""}
                    <button class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">chat_bubble</span></button>
                    <button onclick="setApp('sales')" class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-105 transition-all text-center"><span class="material-icons-outlined text-center">local_mall</span></button>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-2 gap-3">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${b.toLocaleString()}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${v}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Orders</p>
                </div>
            </div>

            <!-- Timeline Section -->
            <div class="space-y-6 text-left">
                <div class="flex justify-between items-center text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Activity Timeline</h3>
                    <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded text-right">${w.length} events</span>
                </div>

                ${w.length===0?`
                    <div class="text-center py-16 opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">history_toggle_off</span>
                        <p class="text-[10px] font-black uppercase tracking-widest leading-relaxed">No activities recorded<br>for this client yet.</p>
                    </div>
                `:`
                    <!-- Timeline -->
                    <div class="relative pl-8 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 before:border-l before:border-dashed before:border-slate-200 text-left">
                        ${w.map(_=>{if(_.type==="sale"){const E=_.data,T=_.items;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-600 text-center">shopping_cart</span>
                                        </div>
                                        <button type="button" onclick="window.viewClientInvoice('${E.id}')" class="card p-4 sm:p-5 group hover:border-slate-900 hover:shadow-lg transition-all text-left w-full cursor-pointer">
                                            <div class="flex justify-between items-start mb-3 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Purchase</h4>
                                                        ${E.gst_required?'<span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">GST</span>':""}
                                                        ${E.payment_mode?`<span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${E.payment_mode}</span>`:""}
                                                    </div>
                                                    <p class="text-xl font-black tracking-tighter text-left">₹${(E.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(E.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                                    <span class="material-icons-outlined text-sm text-slate-300 group-hover:text-slate-900 transition-colors">chevron_right</span>
                                                </div>
                                            </div>
                                            <!-- Items List -->
                                            <div class="space-y-2 text-left">
                                                ${T.map(P=>`
                                                    <div class="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                                                        <div class="text-left flex-1 min-w-0">
                                                            <p class="text-[10px] font-black text-slate-900 truncate">${P.product_name}</p>
                                                            <p class="text-[8px] font-bold text-slate-400 uppercase">${P.category||"Product"}</p>
                                                        </div>
                                                        <p class="text-[10px] font-black text-slate-600 ml-2">₹${(P.price||0).toLocaleString()}</p>
                                                    </div>
                                                `).join("")}
                                            </div>
                                            ${E.installation_required?`
                                                <div class="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">build</span>
                                                    Installation ${E.installation_date?`on ${new Date(E.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}`:"Required"}
                                                </div>
                                            `:""}
                                        </button>
                                    </div>
                                `}if(_.type==="repair"){const E=_.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">build</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <h4 class="text-xs font-black text-slate-900 text-left">Device Repair</h4>
                                                    <p class="text-lg font-black tracking-tighter text-left">₹${E.cost||"Estimating"}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(E.created_at||E.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${E.device_model||"Device"} • ${E.status||"In Progress"}</p>
                                        </div>
                                    </div>
                                `}if(_.type==="inquiry"){const E=_.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-400 text-center">info</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 flex justify-between items-start group hover:border-slate-300 transition-all text-left">
                                            <div class="text-left">
                                                <h4 class="text-xs font-black text-slate-900 text-left">Inquiry</h4>
                                                <p class="text-[11px] font-bold text-slate-500 text-left">${E.request||"Product Interest"}</p>
                                                <div class="flex items-center gap-1 mt-2 text-left">
                                                    <div class="w-1.5 h-1.5 ${E.status==="PENDING"||E.status==="pending"?"bg-slate-400":"bg-slate-900"} rounded-full text-left"></div>
                                                    <p class="text-[8px] font-black text-slate-400 uppercase text-left">${E.status||"Open"}</p>
                                                </div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(E.date||E.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                        </div>
                                    </div>
                                `}if(_.type==="automation"){const E=_.data,T=_.messages||[],P=T.filter(re=>re.status==="sent").length,V=T.filter(re=>re.status==="pending").length;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 border border-slate-900 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-white text-center">smart_toy</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left border-l-4 border-l-slate-900">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Automation</h4>
                                                        <span class="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${E.status}</span>
                                                    </div>
                                                    <p class="text-sm font-black tracking-tight text-left">${E.name}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(E.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <div class="flex items-center gap-3 mt-3 text-left">
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">check_circle</span>
                                                    ${P} sent
                                                </div>
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                                                    <span class="material-icons-outlined text-xs">schedule</span>
                                                    ${V} scheduled
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `}if(_.type==="communication"){const E=_.data,T=E.type==="whatsapp"?"chat":E.type==="call"?"call":"mail",P=E.type==="whatsapp"?"WhatsApp":E.type==="call"?"Phone Call":"Email";return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">${T}</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left flex-1 min-w-0">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">${P}</h4>
                                                        <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${E.direction}</span>
                                                        ${E.status==="delivered"?'<span class="text-slate-400"><span class="material-icons-outlined text-xs">done_all</span></span>':""}
                                                    </div>
                                                    <p class="text-[10px] font-bold text-slate-500 text-left line-clamp-2">${E.content}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right shrink-0 ml-2">${new Date(E.sent_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
                                            </div>
                                        </div>
                                    </div>
                                `}return""}).join("")}
                    </div>
                `}

                <div class="pt-8">
                     <button onclick="setApp('sales'); setTab('new-sale');" class="w-full py-5 bg-slate-900 text-white rounded-[20px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-center">
                        New Purchase
                    </button>
                    <button onclick="setClientMode('directory')" class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 mt-4 text-center">Back to Directory</button>
                </div>
            </div>
        </div>
    `}const ar=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`;let N={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""};function Vd(){N={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""}}window.updateGroupForm=(e,t)=>{N[e]=t,e==="isCompany"&&window.triggerRender(!1)};window.toggleGroupIsCompany=()=>{N.isCompany=!N.isCompany,window.triggerRender(!1)};window.saveGroup=async()=>{if(!N.name.trim()){window.toast.warning("Please enter a group name");return}const e=document.getElementById("save-group-btn");e&&(e.disabled=!0,e.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...');try{const t=ar("GRP");await A.groups.add({id:t,name:N.name.trim(),description:N.description.trim(),is_company:N.isCompany?1:0,gst_number:N.isCompany?N.gstNumber.trim():null,contact_person:N.isCompany?N.contactPerson.trim():null,created_at:new Date().toISOString()}),Vd(),await Y(),p.groupViewMode="list",p.selectedGroupId=t,window.toast.success(`${N.isCompany?"Company":"Group"} created successfully!`),window.triggerRender()}catch(t){console.error("Error saving group:",t),window.toast.error("Error saving group: "+t.message),e&&(e.disabled=!1,e.innerHTML="Create Group")}};window.deleteGroup=async e=>{window.showConfirm("Are you sure you want to delete this group? All member associations will be removed.",async()=>{try{await A.groups.deleteMembers(e),await A.groups.delete(e),await Y(),p.selectedGroupId=null,p.groupViewMode="list",window.toast.success("Group deleted successfully"),window.triggerRender()}catch(t){console.error("Error deleting group:",t),window.toast.error("Error deleting group: "+t.message)}})};window.addMemberToGroup=async(e,t)=>{try{await A.groups.addMember({id:ar("GM"),group_id:e,customer_id:t,added_at:new Date().toISOString()}),await Y(),window.toast.success("Member added"),window.triggerRender(!1)}catch(s){console.error("Error adding member:",s),window.toast.error("Error adding member: "+s.message)}};window.removeMemberFromGroup=async(e,t)=>{try{await A.groups.removeMember(e,t),await Y(),window.toast.info("Member removed"),window.triggerRender(!1)}catch(s){console.error("Error removing member:",s),window.toast.error("Error removing member: "+s.message)}};window.updateGroupSearch=e=>{const t=document.getElementById("group-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;p.groupSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("group-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};function Hd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=p.groupSearchQuery||"",n=a?t.filter(r=>r.name.toLowerCase().includes(a.toLowerCase())||r.description&&r.description.toLowerCase().includes(a.toLowerCase())):t,l=n.filter(r=>r.is_company===1),i=n.filter(r=>r.is_company!==1);return`
        ${Va("Groups","RETAILEROS")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 relative text-left">
            <!-- Toggle -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-2 text-left">
                <button onclick="window.setClientMode('directory')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg text-slate-400 text-center">Directory</button>
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg bg-white shadow-sm text-slate-900 text-center">Groups</button>
            </div>

            <!-- Search -->
            <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                <input type="text" 
                       id="group-search-input"
                       value="${a}"
                       oninput="window.updateGroupSearch(this.value)" 
                       placeholder="Search groups & companies..." 
                       class="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
            </div>

            <!-- Stats -->
            <div class="flex items-center justify-between text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                    ${n.length} Total • ${l.length} Companies • ${i.length} Groups
                </p>
            </div>

            <!-- Groups List -->
            <div class="space-y-3 pb-24 text-left">
                ${n.length===0?`
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">group_off</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                            ${a?"No groups found":"No groups yet"}
                        </span>
                        <button onclick="window.setGroupViewMode('create')" class="mt-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                            Create First Group
                        </button>
                    </div>
                `:`
                    ${l.length>0?`
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Companies</p>
                            ${l.map(r=>{const d=s.filter(c=>c.group_id===r.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${r.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${p.selectedGroupId===r.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                                                <span class="material-icons-outlined text-lg">business</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${r.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${r.gst_number||"No GST"}</p>
                                            </div>
                                        </div>
                                        <div class="text-right shrink-0 ml-2">
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${d}</p>
                                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">Members</p>
                                        </div>
                                    </button>
                                `}).join("")}
                        </div>
                    `:""}
                    
                    ${i.length>0?`
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Groups</p>
                            ${i.map(r=>{const d=s.filter(c=>c.group_id===r.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${r.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${p.selectedGroupId===r.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                                <span class="material-icons-outlined text-lg">group</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${r.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${r.description||"No description"}</p>
                                            </div>
                                        </div>
                                        <div class="text-right shrink-0 ml-2">
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${d}</p>
                                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">Members</p>
                                        </div>
                                    </button>
                                `}).join("")}
                        </div>
                    `:""}
                `}
            </div>

            <!-- Floating Add Button -->
            <button onclick="window.setGroupViewMode('create')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}function Gd(){return`
        <div class="h-full flex flex-col">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white">add</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">New ${N.isCompany?"Company":"Group"}</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Create & Add Members</p>
                    </div>
                </div>
                <button onclick="window.setGroupViewMode('list')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <!-- Form -->
            <div class="flex-1 overflow-y-auto p-6 space-y-5">
                <!-- Company Toggle -->
                <div class="card p-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 ${N.isCompany?"bg-slate-900":"bg-slate-100"} rounded-xl flex items-center justify-center transition-all">
                            <span class="material-icons-outlined text-lg ${N.isCompany?"text-white":"text-slate-400"}">${N.isCompany?"business":"group"}</span>
                        </div>
                        <div>
                            <h3 class="text-sm font-black text-slate-900">${N.isCompany?"Company":"Group"}</h3>
                            <p class="text-[9px] font-bold text-slate-400">${N.isCompany?"B2B with GST":"For marketing"}</p>
                        </div>
                    </div>
                    <button type="button" onclick="window.toggleGroupIsCompany()" class="w-11 h-6 ${N.isCompany?"bg-slate-900":"bg-slate-200"} rounded-full relative transition-all">
                        <div class="absolute top-0.5 ${N.isCompany?"right-0.5":"left-0.5"} w-5 h-5 bg-white rounded-full shadow transition-all"></div>
                    </button>
                </div>

                <!-- Form Fields -->
                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">${N.isCompany?"Company Name":"Group Name"} <span class="text-slate-300">*</span></label>
                    <input type="text" 
                           value="${N.name}"
                           oninput="window.updateGroupForm('name', this.value)" 
                           placeholder="${N.isCompany?"e.g. Reliance Industries":"e.g. VIP Customers"}" 
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                </div>

                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                    <textarea 
                           oninput="window.updateGroupForm('description', this.value)" 
                           placeholder="${N.isCompany?"Company details, address...":"Purpose of this group..."}" 
                           rows="2"
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all resize-none">${N.description}</textarea>
                </div>

                ${N.isCompany?`
                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">GST Number</label>
                        <input type="text" 
                               value="${N.gstNumber}"
                               oninput="window.updateGroupForm('gstNumber', this.value.toUpperCase())" 
                               placeholder="e.g. 27AAACR3456D1Z5" 
                               maxlength="15"
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Person</label>
                        <input type="text" 
                               value="${N.contactPerson}"
                               oninput="window.updateGroupForm('contactPerson', this.value)" 
                               placeholder="e.g. Mukesh Ambani" 
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                `:""}

                <!-- Save Button -->
                <button type="button" id="save-group-btn" onclick="window.saveGroup()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                    Create ${N.isCompany?"Company":"Group"}
                    <span class="material-icons-outlined text-xs">arrow_forward</span>
                </button>
            </div>
        </div>
    `}function Wd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=e.sales||[],l=t.find(u=>u.id===p.selectedGroupId);if(!l)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">error_outline</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Group not found</p>
                </div>
            </div>
        `;const i=s.filter(u=>u.group_id===l.id).map(u=>u.customer_id),r=a.filter(u=>i.includes(u.id)),c=n.filter(u=>i.includes(u.customer_id)&&u.status!=="draft").reduce((u,x)=>u+(x.total_amount||0),0);return`
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-6 text-center border-b border-slate-100 shrink-0">
                <div class="w-16 h-16 ${l.is_company?"bg-slate-900":"bg-slate-100"} rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl ${l.is_company?"text-white":"text-slate-400"}">${l.is_company?"business":"group"}</span>
                </div>
                <h2 class="text-xl font-black text-slate-900 tracking-tighter">${l.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    ${l.is_company?"Company":"Group"} • Created ${new Date(l.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}
                </p>
                ${l.description?`<p class="text-xs font-bold text-slate-500 mt-2">${l.description}</p>`:""}
                ${l.gst_number?`<p class="text-[10px] font-black text-slate-400 mt-1">GST: ${l.gst_number}</p>`:""}
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-5">
                <!-- Stats -->
                <div class="grid grid-cols-2 gap-3">
                    <div class="card p-4 text-center">
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">${r.length}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Members</p>
                    </div>
                    <div class="card p-4 text-center">
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${c.toLocaleString()}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex gap-2">
                    <button class="flex-1 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5">
                        <span class="material-icons-outlined text-sm">chat</span>
                        WhatsApp
                    </button>
                    <button class="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5">
                        <span class="material-icons-outlined text-sm">campaign</span>
                        Campaign
                    </button>
                </div>

                <!-- Members Section -->
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Members (${r.length})</h3>
                        <button onclick="window.setGroupViewMode('add-members')" class="text-[9px] font-black text-slate-900 uppercase flex items-center gap-1">
                            <span class="material-icons-outlined text-sm">person_add</span>
                            Add
                        </button>
                    </div>

                    ${r.length===0?`
                        <div class="card p-6 border-dashed border-slate-200 text-center">
                            <span class="material-icons-outlined text-2xl text-slate-200 mb-2">group_add</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No members yet</p>
                            <button onclick="window.setGroupViewMode('add-members')" class="mt-3 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                                Add Members
                            </button>
                        </div>
                    `:`
                        <div class="space-y-2">
                            ${r.map(u=>{const b=n.filter(v=>v.customer_id===u.id&&v.status!=="draft").reduce((v,w)=>v+(w.total_amount||0),0);return`
                                    <div class="card p-3 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${u.name.split(" ").map(v=>v[0]).join("").toUpperCase()}</div>
                                            <div>
                                                <p class="text-xs font-black text-slate-900">${u.name}</p>
                                                <p class="text-[9px] font-bold text-slate-400">${u.phone||"No phone"}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            ${b>0?`<span class="text-[9px] font-black text-slate-500">₹${b.toLocaleString()}</span>`:""}
                                            <button onclick="window.removeMemberFromGroup('${l.id}', '${u.id}')" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
                                                <span class="material-icons-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    </div>
                                `}).join("")}
                        </div>
                    `}
                </div>

                <!-- Delete Button -->
                <button onclick="window.deleteGroup('${l.id}')" class="w-full py-3 text-[9px] font-black text-slate-400 uppercase border border-slate-200 rounded-xl hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2 mt-4">
                    <span class="material-icons-outlined text-sm">delete</span>
                    Delete ${l.is_company?"Company":"Group"}
                </button>
            </div>
        </div>
    `}function zd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=t.find(r=>r.id===p.selectedGroupId);if(!n)return p.groupViewMode="list","";const l=s.filter(r=>r.group_id===n.id).map(r=>r.customer_id),i=a.filter(r=>!l.includes(r.id));return`
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 ${n.is_company?"bg-slate-900":"bg-slate-100"} rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined ${n.is_company?"text-white":"text-slate-400"}">${n.is_company?"business":"group"}</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">Add Members</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${n.name} • ${l.length} current</p>
                    </div>
                </div>
                <button onclick="window.setGroupViewMode('detail')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-4">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available Clients (${i.length})</h3>
                
                ${i.length===0?`
                    <div class="card p-8 border-dashed border-slate-200 text-center">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-2">check_circle</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">All clients are members</p>
                    </div>
                `:`
                    <div class="space-y-2">
                        ${i.map(r=>`
                            <div class="card p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${r.name.split(" ").map(d=>d[0]).join("").toUpperCase()}</div>
                                    <div>
                                        <p class="text-xs font-black text-slate-900">${r.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${r.phone||r.email||"No contact"}</p>
                                    </div>
                                </div>
                                <button onclick="window.addMemberToGroup('${n.id}', '${r.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase">
                                    Add
                                </button>
                            </div>
                        `).join("")}
                    </div>
                `}
            </div>
        </div>
    `}function gl(){return Hd()}function wl(){switch(p.groupViewMode){case"create":return Gd();case"detail":return Wd();case"add-members":return zd();default:return`
                <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                    <div class="text-center">
                        <span class="material-icons-outlined text-4xl mb-2 opacity-50">group</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">Select a group to view details</p>
                    </div>
                </div>
            `}}function Yd(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function Jd(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function vl(e="desktop"){var u,x;const t=window.getCache(),s=p.clientInvoiceId,a=(t.sales||[]).find(b=>b.id===s);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">receipt_long</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Invoice not found</p>
                </div>
            </div>
        `;const n=(t.saleItems||[]).filter(b=>b.sale_id===a.id),l=(u=t.customers)==null?void 0:u.find(b=>b.id===a.customer_id),i=a.company_id?(x=t.companies)==null?void 0:x.find(b=>b.id===a.company_id):null,r=a.total_amount||0,d=n.map(b=>{let v=[];if(b.extra_fields)try{v=JSON.parse(b.extra_fields)}catch{}return{name:b.product_name,category:b.category||"Standard",price:b.price,imei:b.imei,serial_number:b.serial_number,mac_id:b.mac_id,manufacturing_date:b.manufacturing_date,installation_date:b.installation_date,extraFields:v}}),c={id:a.id,status:a.status,customer:a.customer_name,phone:(l==null?void 0:l.phone)||"N/A",date:new Date(a.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(a.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:d,subtotal:r/1.18,gst:r-r/1.18,total:r,paymentMode:a.payment_mode,paymentReference:a.payment_reference,gstRequired:a.gst_required,company:i,installationRequired:a.installation_required,installationDate:a.installation_date};return`
        <div class="h-full flex flex-col bg-white">
            <!-- Header with back button -->
            <div class="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-4 shrink-0 bg-slate-50">
                <button onclick="window.setClientMode('profile')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
                    <span class="material-icons-outlined">arrow_back</span>
                </button>
                <div>
                    <h2 class="text-sm font-black text-slate-900 tracking-tight">Invoice #${c.id}</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${c.date}</p>
                </div>
            </div>
            
            <!-- Scrollable Receipt Content -->
            <div class="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50">
                <div class="card p-6 sm:p-8 bg-white text-slate-900 leading-relaxed shadow-sm border border-slate-100">
                    <!-- Header -->
                    <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                        <h2 class="text-2xl font-black tracking-tighter mb-1">Invoice</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                        <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                            <span>GSTIN: 27AAACR3456D1Z5</span>
                            <span>Order #${c.id}</span>
                        </div>
                    </div>

                    <!-- Info Grid -->
                    <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                        <div class="text-left">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Billed To</p>
                           <p class="text-sm font-black text-slate-900">${c.customer}</p>
                           <p class="text-[10px] font-bold text-slate-400">${c.phone}</p>
                        </div>
                        <div class="text-right">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Transaction</p>
                           <p class="text-sm font-black text-slate-900">${c.date}</p>
                           <p class="text-[10px] font-bold text-slate-400">${c.time}</p>
                        </div>
                    </div>

                    <!-- GST Company Info -->
                    ${c.gstRequired&&c.company?`
                        <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                            <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
                                <span class="material-icons-outlined text-sm">business</span>
                                GST Invoice
                            </div>
                            <p class="text-sm font-black text-slate-900">${c.company.name}</p>
                            <p class="text-[10px] font-bold text-slate-500">GSTIN: ${c.company.gst_number}</p>
                        </div>
                    `:""}

                    <!-- Items -->
                    <div class="space-y-4 text-left">
                        ${c.items.map(b=>`
                            <div class="pb-4 border-b border-slate-100 last:border-0">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-black text-slate-900 truncate">${b.name}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5">${b.category}</p>
                                    </div>
                                    <p class="text-sm font-black text-slate-900 shrink-0 ml-2">₹${parseInt(b.price).toLocaleString()}</p>
                                </div>
                                ${b.imei||b.serial_number||b.mac_id||b.installation_date||b.extraFields&&b.extraFields.length>0?`
                                    <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                        <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                            <span class="material-icons-outlined text-xs">verified</span> Device Info
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            ${b.imei?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">IMEI</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${b.imei}</p>
                                                </div>
                                            `:""}
                                            ${b.serial_number?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Serial</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${b.serial_number}</p>
                                                </div>
                                            `:""}
                                            ${b.mac_id?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">MAC ID</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${b.mac_id}</p>
                                                </div>
                                            `:""}
                                            ${b.manufacturing_date?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Mfg. Date</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${new Date(b.manufacturing_date).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}</p>
                                                </div>
                                            `:""}
                                            ${(b.extraFields||[]).map(v=>`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">${v.label}</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${v.value}</p>
                                                </div>
                                            `).join("")}
                                            ${b.installation_date?`
                                                <div class="col-span-2 pt-2 mt-2 border-t border-slate-200">
                                                    <p class="text-[7px] font-bold text-slate-500 uppercase flex items-center gap-1">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Installation Date
                                                    </p>
                                                    <p class="text-[9px] font-black text-slate-700">${new Date(b.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                                </div>
                                            `:""}
                                        </div>
                                    </div>
                                `:""}
                            </div>
                        `).join("")}
                    </div>

                    <!-- Footer Totals -->
                    <div class="border-t border-dashed border-slate-200 pt-6 mt-4 space-y-2">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${c.subtotal.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${c.gst.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                        <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                            <span>Grand Total</span>
                            <span>₹${parseInt(c.total).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <!-- Payment Status -->
                    ${c.paymentMode?`
                        <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span class="material-icons-outlined text-sm">${Yd(c.paymentMode)}</span>
                                </div>
                                <div>
                                    <p class="text-[9px] font-black uppercase tracking-widest">Paid via ${Jd(c.paymentMode)}</p>
                                    ${c.paymentReference?`<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase">Ref: ${c.paymentReference}</p>`:""}
                                </div>
                            </div>
                            <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                        </div>
                    `:""}
                    
                    <!-- Action Buttons -->
                    <div class="flex justify-center gap-3 mt-6 pt-4 border-t border-slate-100">
                        <button type="button" onclick="window.shareInvoiceWhatsApp('${c.id}')" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                            <span class="material-icons-outlined text-sm">chat</span>
                            WhatsApp
                        </button>
                        <button type="button" onclick="window.print()" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                            <span class="material-icons-outlined text-sm">print</span>
                            Print
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `}window.shareInvoiceWhatsApp=e=>{var r,d;const t=window.getCache(),s=(t.sales||[]).find(c=>c.id===e);if(!s)return;const a=(r=t.customers)==null?void 0:r.find(c=>c.id===s.customer_id),n=(t.saleItems||[]).filter(c=>c.sale_id===s.id);let l=`INVOICE #${s.id}
`;l+=`━━━━━━━━━━━━━━━━━━━━
`,l+=`${new Date(s.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}

`,l+=`${s.customer_name}
`,l+=`${(a==null?void 0:a.phone)||""}
`,l+=`
━━━━━━━━━━━━━━━━━━━━
`,l+=`ITEMS:
`,n.forEach(c=>{l+=`
• ${c.product_name}
`,l+=`  ${c.category||"Product"} - ₹${parseInt(c.price).toLocaleString()}
`}),l+=`
━━━━━━━━━━━━━━━━━━━━
`,l+=`TOTAL: ₹${parseInt(s.total_amount).toLocaleString()}
`,l+=`
Thank you for shopping!
`,l+="Powered by RetailerOS";const i=`https://wa.me/${((d=a==null?void 0:a.phone)==null?void 0:d.replace(/\D/g,""))||""}?text=${encodeURIComponent(l)}`;window.open(i,"_blank")};function On(e){const t=e==="desktop-secondary",s=e==="desktop-primary";return t?p.clientViewMode==="add"?gn("desktop"):p.clientViewMode==="invoice"?vl("desktop"):p.clientViewMode==="profile"?hl("desktop"):p.clientViewMode==="groups"?wl():`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">person_search</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a client to view profile</p>
                </div>
            </div>
        `:s?p.clientViewMode==="groups"?gl():bl():p.clientViewMode==="add"?gn("mobile"):p.clientViewMode==="invoice"?vl("mobile"):p.clientViewMode==="profile"?hl("mobile"):p.clientViewMode==="groups"?p.groupViewMode==="detail"||p.groupViewMode==="create"||p.groupViewMode==="add-members"?wl():gl():bl()}window._reportDateFilter||(window._reportDateFilter={from:"",to:"",show:!1});window._toggleReportsDatePicker=()=>{window._reportDateFilter.show=!window._reportDateFilter.show,window.triggerRender()};window._setReportDateFilter=()=>{var s,a;const e=(s=document.getElementById("report-date-from"))==null?void 0:s.value,t=(a=document.getElementById("report-date-to"))==null?void 0:a.value;window._reportDateFilter.from=e||"",window._reportDateFilter.to=t||"",window._reportDateFilter.show=!1,window.toast&&window.toast.success(e||t?`Filtered: ${e||"start"} to ${t||"now"}`:"Filter cleared"),window.triggerRender()};window._clearReportDateFilter=()=>{window._reportDateFilter={from:"",to:"",show:!1},window.toast&&window.toast.success("Date filter cleared"),window.triggerRender()};window._exportReportsCSV=()=>{const e=window.getCache(),t=p.reportsTab||"overview";let s,a,n;if(t==="sales"||t==="overview"){const c=e.sales||[];s=["ID","Date","Customer","Product","Amount","Status","Payment Mode"],a=c.map(u=>[u.id,u.date,u.customer_name||"",u.product_name||"",u.total_amount||u.total||"",u.status||"",u.payment_mode||""]),n="sales_report.csv"}else if(t==="inventory"){const c=e.products||[];s=["ID","Name","Brand","Category","MOP","Price","Stock"],a=c.map(u=>[u.id,u.name,u.brand||"",u.category||"",u.mop||"",u.price||"",u.stock||""]),n="inventory_report.csv"}else{const c=e.automations||[];s=["ID","Customer","Template","Status","Created"],a=c.map(u=>[u.id,u.customer_name||"",u.template_name||"",u.status||"",u.created_at||""]),n="marketing_report.csv"}const l=[s.join(","),...a.map(c=>c.map(u=>`"${u}"`).join(","))].join(`
`),i=new Blob([l],{type:"text/csv"}),r=URL.createObjectURL(i),d=document.createElement("a");d.href=r,d.download=n,d.click(),URL.revokeObjectURL(r),window.toast&&window.toast.success(`${n} downloaded`)};const Ya=(e,t,s=[])=>{const a=window._reportDateFilter||{},n=a.from||a.to;return`
    <header class="p-4 sm:p-8 pb-4 shrink-0 px-8">
        <div class="flex items-center justify-between mb-6">
            <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                <span class="material-icons-outlined">chevron_left</span>
                <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
            </button>
            <div class="text-center translate-x-1">
                <h1 class="text-xl font-black tracking-tighter text-slate-900">${e}</h1>
                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${t}</p>
            </div>
            <div class="flex items-center gap-1">
                <button onclick="window._exportReportsCSV()" class="p-2 text-slate-400 hover:text-slate-900" title="Export CSV"><span class="material-icons-outlined text-xl">download</span></button>
                <button onclick="window._toggleReportsDatePicker()" class="p-2 ${n?"text-slate-900":"text-slate-400"} hover:text-slate-900" title="Date Filter"><span class="material-symbols-outlined text-xl">calendar_today</span></button>
            </div>
        </div>
        ${a.show?`
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4 space-y-3">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">From</label>
                        <input type="date" id="report-date-from" value="${a.from}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900">
                    </div>
                    <div>
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">To</label>
                        <input type="date" id="report-date-to" value="${a.to}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900">
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="window._setReportDateFilter()" class="flex-1 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest">Apply</button>
                    <button onclick="window._clearReportDateFilter()" class="px-4 py-2 bg-white border border-slate-200 text-slate-500 rounded-xl text-[9px] font-black uppercase tracking-widest">Clear</button>
                </div>
            </div>
        `:""}
        ${n&&!a.show?`
            <div class="flex items-center gap-2 mb-4">
                <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Filtered:</span>
                <span class="px-2 py-1 bg-slate-100 rounded-lg text-[9px] font-bold text-slate-600">${a.from||"start"} → ${a.to||"now"}</span>
                <button onclick="window._clearReportDateFilter()" class="text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-sm">close</span></button>
            </div>
        `:""}
        ${s.length>0?`
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                ${s.map(l=>`<button onclick="setReportsTab('${l}')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${p.reportsTab===l?"bg-white shadow-sm text-slate-900":"text-slate-400"}">${l.toUpperCase()}</button>`).join("")}
            </div>
        `:""}
    </header>
    `};function Kd(){var a;const e=window.getCache(),t=[{t:"Total Sales",v:e.sales?`₹${e.sales.reduce((n,l)=>n+parseInt(l.amount||l.total_amount),0).toLocaleString()}`:"₹0",p:e.sales?`+${e.sales.length}`:"0",i:"account_balance_wallet"},{t:"Clients",v:e.customers?e.customers.length.toLocaleString():"0",p:"Total",i:"group"},{t:"Inquiries",v:e.inquiries?e.inquiries.length.toLocaleString():"0",p:"Pending",i:"chat_bubble"},{t:"Repairs",v:e.repairs?e.repairs.length.toLocaleString():"0",p:"Active",i:"settings"},{t:"Schemes",v:e.schemes?`${e.schemes.length} Active`:"0",p:"Live",i:"percent"},{t:"Inventory",v:e.products?`₹${(e.products.reduce((n,l)=>n+parseInt(l.price)*parseInt(l.stock),0)/1e7).toFixed(1)}Cr`:"₹0",p:"Stock Value",i:"inventory_2"},{t:"Campaigns",v:e.campaigns?e.campaigns.length.toLocaleString():"0",p:"Pre-booking",i:"rocket_launch"},{t:"Automations",v:e.automations?e.automations.length.toLocaleString():"0",p:"Live",i:"bolt"}],s=`
        <div class="flex items-center gap-12 text-[13px] font-bold text-slate-600 pr-12 text-left">
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Real-time Intelligence:</strong> Connected to Turso DB. Syncing ${t.reduce((n,l)=>n+parseInt(l.v.toString().replace(/[^0-9]/g,"")||0),0).toLocaleString()} data points.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Sales Performance:</strong> Weekend footfall has surged by <strong class="text-slate-900">14.5%</strong> compared to the previous cycle.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Automations:</strong> Lead generation is currently processing <strong class="text-slate-900">${((a=e.inquiries)==null?void 0:a.length)||0} active inquiries</strong>.</span>
        </div>
    `;return`
        <div class="card p-6 bg-white text-slate-900 relative overflow-hidden group mb-6 border-slate-100 shadow-sm">
            <div class="relative z-10 text-left mb-4">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Live Intelligence</p>
                <h2 class="text-2xl font-black tracking-tighter leading-none text-slate-900 text-left">Dashboard Insights</h2>
            </div>
            <div class="overflow-hidden border-t border-slate-100 pt-5 text-left">
                <div class="fast-ticker">
                    ${s}
                    ${s}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            ${t.map(n=>`
                <div class="card p-5 space-y-3 relative overflow-hidden group hover:border-slate-300 transition-all text-left">
                    <div class="flex justify-between items-start">
                        <div class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                            <span class="material-icons-outlined text-sm text-slate-400">${n.i}</span>
                        </div>
                        <span class="text-[8px] font-black uppercase tracking-tighter ${n.p==="Live"||n.p.startsWith("+")?"text-slate-900":"text-slate-400"}">${n.p}</span>
                    </div>
                    <div>
                        <h4 class="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 text-left">${n.t}</h4>
                        <p class="text-lg font-black tracking-tighter text-slate-900 text-left">${n.v}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `}function Qd(){return`<div class="card p-8 space-y-8 text-left"><div class="flex justify-between items-start text-left"><div class="text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Revenue (30D)</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">₹42.8L</h2></div><div class="bg-slate-100 px-2 py-1 rounded-lg flex items-center gap-1"><span class="material-icons-outlined text-[10px] text-slate-900">trending_up</span><span class="text-[10px] font-black text-slate-900">+12.4%</span></div></div><div class="h-48 relative border-b border-slate-100 flex items-end justify-between px-2"><div class="absolute inset-0 flex items-center justify-center opacity-10"><h2 class="font-black text-8xl tracking-tighter text-slate-400">OS</h2></div><svg class="w-full h-full text-slate-900" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 35 L20 30 L40 32 L60 15 L80 20 L100 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg><div class="absolute bottom-0 left-0 text-[8px] text-slate-300 font-black uppercase">01 Oct</div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] text-slate-300 font-black uppercase">15 Oct</div><div class="absolute bottom-0 right-0 text-[8px] text-slate-300 font-black uppercase">30 Oct</div></div></div><div class="grid grid-cols-2 gap-4"><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">shopping_bag</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Avg Order Value</p><h4 class="text-xl font-black text-slate-900 text-left">₹18.2K</h4><p class="text-[8px] font-black text-slate-300 uppercase mt-1 text-left">vs ₹16.4K last month</p></div></div><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">category</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Top Category</p><h4 class="text-xl font-black text-slate-900 text-left">Smartphones</h4></div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales List</h3><button class="text-[8px] font-black text-slate-900 uppercase border-b border-slate-900">Export CSV</button></div><div class="space-y-3 text-left">${[{d:"Today, 24 Oct",c:"14 Orders",v:"₹1.42L",p:"+4.2%"},{d:"Yesterday, 23 Oct",c:"11 Orders",v:"₹1.18L",p:"-2.1%"},{d:"22 Oct",c:"18 Orders",v:"₹2.33L",p:"+1.8%"}].map(e=>`<div class="card p-5 group hover:bg-slate-50 transition-all cursor-pointer flex justify-between items-center"><div class="text-left"><h4 class="text-sm font-black text-slate-900 text-left">${e.d}</h4><p class="text-[10px] font-bold text-slate-400 capitalize -mt-0.5 text-left">${e.c}</p></div><div class="text-right"><p class="text-sm font-black text-slate-900 text-right">${e.v}</p><p class="text-[9px] font-black ${e.p.startsWith("+")?"text-slate-900":"text-slate-400"} uppercase text-right">${e.p}</p></div></div>`).join("")}</div></section>`}function Xd(){return`<div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Blocked Capital</p><h3 class="text-xl font-black text-slate-900 text-left">₹84.2L</h3><p class="text-[8px] font-black text-slate-500 uppercase flex items-center gap-1 text-left"><span class="animate-pulse">●</span> +2.4% vs last mo.</p></div><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Ageing > 90D</p><h3 class="text-xl font-black text-slate-900 text-left">124 <span class="text-[10px] font-bold text-slate-400 uppercase text-left">Units</span></h3><p class="text-[8px] font-black text-slate-500 uppercase text-left">12.1% of total stock</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center mb-2 text-left"><h3 class="text-[10px] font-black text-slate-900 uppercase tracking-widest text-left">Stock Distribution</h3><span class="material-icons-outlined text-slate-300 text-sm">info</span></div><div class="flex items-center gap-10 text-left"><div class="relative w-32 h-32 flex items-center justify-center text-left"><svg class="w-full h-full transform -rotate-90"><circle cx="64" cy="64" r="54" stroke="#f8fafc" stroke-width="20" fill="transparent" /><circle cx="64" cy="64" r="54" stroke="#0f172a" stroke-width="20" stroke-dasharray="340" stroke-dashoffset="100" fill="transparent" stroke-linecap="round" /></svg><div class="absolute text-center"><p class="text-[8px] font-black text-slate-400 uppercase leading-none mb-1 text-left">Total</p><p class="text-xl font-black tracking-tighter text-left">1,024</p></div></div><div class="flex-1 space-y-3 text-left">${[{l:"Apple",p:"45%",c:"bg-slate-900"},{l:"OnePlus",p:"25%",c:"bg-slate-500"},{l:"Samsung",p:"15%",c:"bg-slate-300"},{l:"Others",p:"15%",c:"bg-slate-100"}].map(e=>`<div class="flex items-center justify-between text-left"><div class="flex items-center gap-2 text-left"><div class="w-2 h-2 rounded-full ${e.c}"></div><span class="text-[10px] font-black text-slate-500 text-left">${e.l}</span></div><span class="text-[10px] font-black text-slate-900 text-right">${e.p}</span></div>`).join("")}</div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1 text-left"><h3 class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Low Stock Alerts</h3><span class="bg-slate-100 text-slate-500 text-[8px] font-black px-2 py-0.5 rounded uppercase text-left">5 Critical</span></div><div class="space-y-3 text-left">${[{n:"iPhone 15 Pro - 256GB",s:"SKU: APP-15P-256-NG",q:"2 Left",r:"Reorder pt: 5"},{n:"Watch Series 9 - 45mm",s:"SKU: APP-W9-45-ST",q:"0 Left",r:"Reorder pt: 3"},{n:"AirPods Pro (2nd Gen)",s:"SKU: APP-AP2-MGS",q:"8 Left",r:"Reorder pt: 10"}].map(e=>`<div class="card p-5 relative group hover:border-slate-300 transition-all cursor-pointer flex justify-between items-start text-left"><div><h4 class="text-sm font-black text-slate-900 text-left">${e.n}</h4><p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${e.s}</p></div><div class="text-right"><p class="text-xs font-black text-slate-500 uppercase text-right">${e.q}</p><p class="text-[8px] font-bold text-slate-300 uppercase mt-0.5 text-right">${e.r}</p></div></div>`).join("")}</div><button class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 text-left">View All Alerts</button></section>`}function Zd(){return'<section class="space-y-6 text-left"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Campaign Performance</h3><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-start text-left"><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Campaign Conversion Rate</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">24.8%</h2></div><span class="bg-slate-100 text-slate-900 text-[8px] font-black px-2 py-1 rounded-lg text-left">+3.2%</span></div><div class="space-y-3 text-left"><div class="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-slate-500 rounded-full shadow-inner text-left" style="width: 24.8%"></div></div><p class="text-[9px] font-bold text-slate-400 italic text-left">Derived from pre-booking landing pages</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center text-left"><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">AI Image Usage</p><span class="material-symbols-outlined text-slate-200 text-xl text-left">grid_guides</span></div><div class="flex items-center justify-between text-left"><h2 class="text-5xl font-black tracking-tighter text-slate-900 text-left">1,284</h2><div class="flex flex-col items-end gap-1 text-left"><div class="w-24 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100/50 text-left"><div class="h-full bg-slate-900 rounded-full text-left" style="width: 65%"></div></div><p class="text-[10px] font-black text-slate-300 tabular-nums text-left">65%</p></div></div></div><div class="space-y-4 text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Automation Metrics</p><div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Retention Rate</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">88.4%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-slate-700 text-left" style="width: 88.4%"></div></div></div><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Upsell Conv.</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">12.5%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-slate-500 text-left" style="width: 12.5%"></div></div></div></div></div></section>'}function jn(e){const t={overview:{t:"Reports",s:"Business Intelligence"},sales:{t:"Sales",s:"Deep-Dive Analytics"},inventory:{t:"Inventory",s:"Stock & Logistics"},marketing:{t:"Marketing",s:"Campaign Insights"}},s={overview:Kd(),sales:Qd(),inventory:Xd(),marketing:Zd()};if(e==="desktop-primary")return`
            ${Ya(t.overview.t,t.overview.s)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s.overview}
            </div>
        `;if(e==="desktop-secondary"){const n=p.reportsTab==="overview"?"sales":p.reportsTab;return`
            ${Ya(t[n].t,t[n].s,["sales","inventory","marketing"])}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s[n]}
            </div>
        `}const a=t[p.reportsTab]||t.overview;return`
        <div class="h-full flex flex-col bg-white overflow-hidden">
            ${Ya(a.t,a.s,["overview","sales","inventory","marketing"])}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s[p.reportsTab]}
            </div>
        </div>
    `}const Ja=(e,t,s="",a=!1)=>`
    <header class="p-4 sm:p-8 pb-4 shrink-0 px-8">
        <div class="flex items-center justify-between mb-6">
            <button onclick="${a?"setApp('launcher')":"setRepairMode('search')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                <span class="material-icons-outlined">chevron_left</span>
                <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
            </button>
            <div class="text-center translate-x-1">
                <h1 class="text-xl font-black tracking-tighter text-slate-900">${e}</h1>
                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${t}</p>
            </div>
            ${s?`<div class="p-2">${s}</div>`:'<div class="w-10"></div>'}
        </div>
        ${a?`
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button onclick="setRepairTab('active')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${p.repairTab==="active"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">Active Jobs</button>
                <button onclick="setRepairTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${p.repairTab==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        `:""}
    </header>
`;window.setRepairCustomer=(e,t)=>{p.repairContext={customer_name:e,customer_phone:t},C()};function ep(){const e=document.getElementById("repair-search-input"),t=e?e.value.trim():"",s=window.getCache?window.getCache():{customers:[]},a=t?s.customers.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())||n.phone.includes(t)):[];return`
        <div class="space-y-8 animate-slide-up text-left">
            <div class="space-y-4 text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Search Customer</p>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-left">search</span>
                    <input type="text" id="repair-search-input" oninput="triggerRender(false)" placeholder="Search Name or Mobile..." class="w-full h-16 pl-14 pr-6 bg-slate-50 border border-slate-100 rounded-3xl text-sm font-black text-slate-900 focus:bg-white focus:border-slate-900 focus:shadow-2xl focus:shadow-slate-200/50 transition-all outline-none text-left">
                </div>
            </div>

            ${t?`
                <div class="space-y-3 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Search Results</h3>
                    <div class="space-y-3 text-left">
                        ${a.map(n=>`
                            <div onclick="window.setRepairCustomer('${n.name}', '${n.phone}'); setRepairMode('intake');" class="card p-5 border-2 border-transparent hover:border-slate-200 cursor-pointer flex items-center justify-between text-left">
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 text-left">${n.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${n.phone}</p>
                                </div>
                                <span class="material-icons-outlined text-slate-300 text-left">arrow_forward</span>
                            </div>
                        `).join("")}
                        ${a.length===0?'<p class="text-center py-8 text-[10px] text-slate-300 font-black uppercase">No customer found</p>':""}
                    </div>
                </div>
            `:`
                <div class="space-y-4 text-left">
                     <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Existing Jobs</h3>
                     <div class="card p-8 border-dashed border-slate-200 flex flex-col items-center gap-4 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-4xl text-slate-200 text-center">qr_code_scanner</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest text-center">Scan Job Sheet to track status</p>
                     </div>
                </div>
            `}

            <button onclick="setRepairMode('intake')" class="w-full py-5 bg-slate-50 border border-slate-100 text-slate-900 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all text-center">
                New Repair (Walk-in)
            </button>
        </div>
    `}async function tp(){const e=p.repairContext||{customer_name:"Walk-in",customer_phone:""},t=document.getElementById("repair-device").value,s=document.getElementById("repair-issue").value,a=document.getElementById("repair-cost").value;if(!t||!s){alert("Device and Issue are required.");return}const n=document.getElementById("create-job-btn");n.disabled=!0,n.innerText="Creating...";try{const l="REP-"+Math.random().toString(36).substr(2,6).toUpperCase();await A.repairs.add({id:l,customer_name:e.customer_name,phone:e.customer_phone,device:t,issue:s,status:"COLLECTED",job_sheet_no:l,estimated_cost:a||"0",assigned_to:"Unassigned",created_at:new Date().toISOString()}),await Y(),window.setActiveRepairJob(l),window.setRepairMode("status")}catch(l){alert("Error creating job: "+l.message),n.disabled=!1,n.innerText="Create Job Sheet"}}window.createJobSheet=tp;window.setActiveRepairJob=e=>{p.activeRepairId=e};function sp(){const e=p.repairContext||{customer_name:"New Walk-in",customer_phone:""};return`
        <div class="card p-6 border-slate-200/50 space-y-4 relative overflow-hidden text-left bg-slate-50/10">
            <div class="text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Customer Context</p>
                <h4 class="text-lg font-black tracking-tighter text-slate-900 text-left">${e.customer_name}</h4>
                <p class="text-[10px] font-bold text-slate-400 text-left">${e.customer_phone||"Direct Walk-in"}</p>
            </div>
            <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-50 rounded-full opacity-50"></div>
        </div>

        <div class="space-y-6 text-left pt-4">
            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Device Model & Serial</label>
                <input type="text" id="repair-device" placeholder="e.g. iPhone 15 Pro Max (SN: RZ...)" class="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm text-left">
            </div>

            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Fault Description</label>
                <textarea id="repair-issue" placeholder="Describe the issues reported by the customer..." class="w-full min-h-[120px] p-6 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm resize-none text-left"></textarea>
            </div>

            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Estimated Cost (₹)</label>
                <input type="number" id="repair-cost" placeholder="₹0" class="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm text-left">
            </div>
        </div>

        <button id="create-job-btn" onclick="createJobSheet()" class="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-[0.98] transition-all active:scale-95 mt-8 text-center">Create Job Sheet</button>
    `}async function ap(e){if(p.activeRepairId)try{await A.repairs.updateStatus(p.activeRepairId,e),await Y()}catch(t){alert("Update failed: "+t.message)}}window.updateRepairStatus=ap;window._showReassignPicker||(window._showReassignPicker=!1);window._toggleReassignPicker=()=>{window._showReassignPicker=!window._showReassignPicker,window.triggerRender()};window._reassignRepair=async e=>{window._showReassignPicker=!1,window.toast&&window.toast.success(`Reassigned to ${e}`),window.triggerRender()};function np(){const e=window.getCache(),t=e.repairs.find(n=>n.id===p.activeRepairId)||e.repairs[0];if(!t)return'<div class="p-20 text-center opacity-30 text-[10px] font-black uppercase">No active job selected</div>';const s=[{l:"Collected",s:"COLLECTED",i:"done"},{l:"Sent to Brand",s:"SENT_TO_BRAND",i:"shipping"},{l:"At Service Center",s:"IN_REPAIR",i:"build"},{l:"Ready for Pickup",s:"READY",i:"check_circle"},{l:"Handed Over",s:"COMPLETED",i:"person"}],a=s.findIndex(n=>n.s===t.status);return`
        <div class="card p-6 border-slate-200/50 flex gap-5 items-center relative overflow-hidden text-left bg-slate-50/50">
            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-left">
                <span class="material-icons-outlined text-slate-400 text-2xl text-left">smartphone</span>
            </div>
            <div class="text-left">
                <h4 class="text-sm font-black text-slate-900 leading-none text-left">${t.device}</h4>
                <p class="text-[10px] font-bold text-slate-900 mt-1 uppercase text-left">${t.issue}</p>
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-0.5 text-left">Customer: ${t.customer_name}</p>
            </div>
            <button class="absolute top-6 right-6 text-slate-400"><span class="material-icons-outlined text-sm text-left">info</span></button>
        </div>

        <div class="space-y-4 text-left">
            <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Assignment</h3>
            <div class="card p-4 flex items-center justify-between text-left">
                <div class="flex items-center gap-4 text-left">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-left">
                        <span class="material-icons-outlined text-slate-400 text-left">person</span>
                    </div>
                    <div class="text-left">
                        <h4 class="text-xs font-black text-slate-900 text-left">${t.assigned_to||"Runner A"}</h4>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-left">Logistics Team</p>
                    </div>
                </div>
                <button onclick="window._toggleReassignPicker()" class="px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all">Reassign</button>
            </div>
        </div>

        ${window._showReassignPicker?`
            <div class="card p-3 space-y-1 border-slate-200">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest px-2 mb-2">Select Team Member</p>
                ${(()=>{const n=(e.teamMembers||[]).filter(i=>i.status==="active");return(n.length>0?n.map(i=>i.name):["Runner A","Runner B","Tech Lead"]).map(i=>`
                        <button onclick="window._reassignRepair('${i}')" class="w-full px-3 py-2.5 text-left text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-all">${i}</button>
                    `).join("")})()}
            </div>
        `:""}

        <div class="space-y-4 text-left">
            <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Service Lifecycle</h3>
            <div class="card p-8 relative overflow-hidden text-left">
                <div class="absolute left-[45px] top-10 bottom-10 w-px bg-slate-100 border-l border-dashed border-slate-200 text-left"></div>
                
                <div class="space-y-10 relative text-left">
                    ${s.map((n,l)=>{const i=l<=a,r=l===a;return`
                        <div class="flex items-start gap-8 relative text-left">
                            <div class="w-5 h-5 rounded-full flex items-center justify-center z-10 shrink-0 text-left ${i?"bg-slate-900 text-white":"bg-slate-100 border border-slate-200"}">
                                <span class="material-icons-outlined text-[12px] font-black text-left">${i?"done":""}</span>
                            </div>
                            <div class="text-left ${i?"":"opacity-30"}">
                                <h4 class="text-xs font-black text-slate-900 text-left ${r?"text-slate-900 underline underline-offset-4":""}">${n.l}</h4>
                                <p class="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter text-left">
                                    ${r?"CURRENT STATUS":i?"COMPLETED":"PENDING"}
                                </p>
                            </div>
                        </div>
                        `}).join("")}
                </div>
            </div>
        </div>

        <div class="flex gap-2 text-left">
            <button onclick="updateRepairStatus('${s[Math.min(a+1,s.length-1)].s}')" class="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-[0.98] transition-all active:scale-95 flex items-center justify-center gap-3 text-left">
                Update Status
            </button>
        </div>
    `}function yl(){const t=window.getCache().repairs||[];return`
        <div class="space-y-4 text-left px-8">
            <div class="flex justify-between items-center px-1 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Historical Job Cards</h3>
                <span class="text-[8px] font-black text-slate-300 uppercase text-right">${t.length} Jobs Total</span>
            </div>
            
            ${t.map(s=>`
                <div onclick="window.setActiveRepairJob('${s.id}'); setRepairMode('status');" class="card p-5 border-2 transition-all group border-transparent hover:border-slate-200 cursor-pointer text-left">
                    <div class="flex justify-between items-start mb-4 text-left">
                        <div class="text-left">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">#${s.job_sheet_no}</p>
                            <h4 class="text-sm font-black text-slate-900 text-left">${s.device}</h4>
                            <p class="text-[10px] font-bold text-slate-400 lowercase -mt-0.5 text-left">${s.customer_name}</p>
                        </div>
                        <div class="text-right">
                            <span class="text-[9px] font-black uppercase text-right ${s.status==="COMPLETED"?"text-slate-900":"text-slate-400"}">${s.status}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-slate-50 pt-4 text-left">
                        <p class="text-[10px] font-black text-slate-900 text-left">${s.estimated_cost?`₹${parseInt(s.estimated_cost).toLocaleString()}`:"Estimate pending"}</p>
                        <p class="text-[8px] font-black text-slate-300 uppercase italic text-right">${new Date(s.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            `).join("")}

            ${t.length===0?`
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">history</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No repair jobs found</p>
                </div>
            `:""}
        </div>
    `}function Pn(e){const t={search:{t:"RetailerOS",s:"Repairs Management",txn:null},intake:{t:"Device Intake",s:"Repair Management",txn:"TXN-4920"},status:{t:"Job ID: #REP-2024",s:"Repair Assignment",badge:"ACTIVE"},history:{t:"Job History",s:"Service Records",badge:null}},s={search:ep(),intake:sp(),status:np()};if(e==="desktop-primary")return`
            ${Ja(t.search.t,t.search.s,'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>',!0)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${p.repairTab==="active"?s.search:yl()}
            </div>
        `;if(e==="desktop-secondary"){const r=p.repairViewMode==="search"?"status":p.repairViewMode,d=t[r],c=r==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${d.txn}</span>`:`<span class="bg-slate-200 text-slate-600 text-[8px] font-black px-2 py-1 rounded-full">${d.badge}</span>`;return`
            ${Ja(d.t,d.s,c)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${p.repairTab==="history"?'<div class="card p-8 bg-slate-50 border-dashed border-2 border-slate-200 text-center py-20"><span class="material-icons-outlined text-4xl text-slate-200 mb-4">analytics</span><p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Select a job card on the left<br>to view full service details.</p></div>':s[r]}
            </div>
        `}const a=p.repairTab==="history"?"history":p.repairViewMode,n=t[a],l=a==="search"||a==="history",i=a==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${n.txn}</span>`:a==="status"?`<span class="bg-slate-200 text-slate-600 text-[8px] font-black px-2 py-1 rounded-full">${n.badge}</span>`:'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>';return`
        <div class="h-full flex flex-col bg-white overflow-hidden">
            ${Ja(n.t,n.s,i,l)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${p.repairTab==="history"?yl():s[p.repairViewMode]}
            </div>
        </div>
    `}function lp(){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
             <div class="flex items-center justify-between mb-6">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Marketing</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">AI Creative Generator</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">auto_awesome</span></button>
            </div>
        </header>
    `}window._marketingState||(window._marketingState={generatedImageUrl:null,generatedPrompt:null,isGenerating:!1,uploadedImages:[],currentSuggestions:[],lastError:null});const ip=["Diwali special offer poster for mobile phones under ₹15,000","New iPhone launch announcement for electronics store","Independence Day sale banner with 20% off on all appliances","Grand opening celebration poster for electronics showroom","EMI offer creative for Samsung Galaxy series smartphones","Navratri festive discount poster for home appliances","Back to school deals on laptops and tablets","Summer sale poster for air conditioners and coolers","Republic Day clearance sale for TVs and home theater","Raksha Bandhan gift guide for smartphones and watches","Year end stock clearance for washing machines and fridges","New store branch opening announcement poster","Cashback offer poster for credit card payments on electronics","Exchange offer creative for old phone trade-in program","Service center launch poster for mobile and laptop repairs","Holi celebration offer on phone cases and accessories","Wedding season deals on premium home appliances","Monsoon sale on waterproof gadgets and devices","Christmas and New Year electronics mega sale poster","Flash sale countdown poster for limited stock flagship phones"];function rp(){if(window._marketingState.currentSuggestions.length===0){const e=[...ip].sort(()=>Math.random()-.5);window._marketingState.currentSuggestions=e.slice(0,5)}return window._marketingState.currentSuggestions}window._refreshMarketingSuggestions=()=>{window._marketingState.currentSuggestions=[],window.triggerRender()};window._fillMarketingPrompt=e=>{const t=document.getElementById("marketing-prompt");t&&(t.value=e)};window._uploadMarketingImage=()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.multiple=!0,e.onchange=t=>{Array.from(t.target.files).forEach(a=>{const n=new FileReader;n.onload=l=>{window._marketingState.uploadedImages.push({base64:l.target.result,name:a.name,size:(a.size/1024).toFixed(0)+" KB"}),window.triggerRender()},n.readAsDataURL(a)})},e.click()};window._removeMarketingImage=e=>{window._marketingState.uploadedImages.splice(e,1),window.triggerRender()};const op="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";function nr(){return localStorage.getItem("openai_api_key")||op}window._generateCreative=async()=>{var n,l,i,r,d,c,u;const e=nr(),t=document.getElementById("marketing-prompt"),s=(n=t==null?void 0:t.value)==null?void 0:n.trim();if(!s){window.toast&&window.toast.error("Enter a prompt to generate a creative");return}const a=window._marketingState;a.isGenerating=!0,a.lastError=null,a.generatedPrompt=s,window.triggerRender();try{let x=s;if(a.uploadedImages.length>0){const _=a.uploadedImages.map(T=>({type:"image_url",image_url:{url:T.base64,detail:"low"}})),E=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:[{type:"text",text:`You are a marketing creative expert for an Indian electronics retail store. The user wants to create a marketing creative with this prompt: "${s}". They have uploaded reference images. Analyze the images and create an enhanced, detailed DALL-E prompt that incorporates visual elements from the images. Keep the Indian retail context. Output ONLY the enhanced prompt, nothing else. Max 200 words.`},..._]}],max_tokens:300})});E.ok&&(x=((r=(i=(l=(await E.json()).choices)==null?void 0:l[0])==null?void 0:i.message)==null?void 0:r.content)||s)}const b=`Create a professional marketing poster/creative for an Indian electronics retail store. Style: modern, clean, vibrant, professional. ${x}. The design should be suitable for social media, WhatsApp status, and print. Include bold typography if text is needed. Indian market context.`,v=await fetch("https://api.openai.com/v1/images/generations",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"dall-e-3",prompt:b,n:1,size:"1024x1024",quality:"standard"})});if(!v.ok){const _=await v.json().catch(()=>({}));throw new Error(((d=_.error)==null?void 0:d.message)||`API error: ${v.status}`)}const g=((u=(c=(await v.json()).data)==null?void 0:c[0])==null?void 0:u.url)||null;if(a.generatedPrompt=s,g){try{const E=await(await fetch(g)).blob(),T=new FileReader;a.generatedImageUrl=await new Promise(P=>{T.onloadend=()=>P(T.result),T.readAsDataURL(E)})}catch{a.generatedImageUrl=g}window.toast&&window.toast.success("Creative generated!")}else throw new Error("No image returned from API")}catch(x){console.error("Creative generation failed:",x),a.lastError=x.message,window.toast&&window.toast.error("Generation failed: "+x.message)}finally{a.isGenerating=!1,window.triggerRender()}};function kl(){nr();const e=window._marketingState,t=rp();return`
        ${lp()}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 sm:space-y-8 pb-32">
            <!-- API Key Check -->
            

            <!-- Prompt Input -->
            <div class="relative text-left">
                <textarea id="marketing-prompt" placeholder="Describe the marketing creative you want to generate..." class="w-full h-36 p-5 bg-white border border-slate-200 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm resize-none leading-relaxed text-left" ${e.isGenerating?"disabled":""}>${e.generatedPrompt||""}</textarea>
            </div>

            <button type="button" onclick="window._generateCreative()" class="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 ${e.isGenerating?"opacity-50 pointer-events-none":""} ">
                ${e.isGenerating?`
                    <span class="animate-spin material-icons-outlined text-lg">progress_activity</span> Generating...
                `:`
                    <span class="material-icons-outlined text-lg">bolt</span> Generate Creative
                `}
            </button>

            <!-- Prompt Suggestions -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Prompt Ideas</h3>
                    <button type="button" onclick="window._refreshMarketingSuggestions()" class="text-[8px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-1">
                        <span class="material-icons-outlined text-xs">refresh</span> New Ideas
                    </button>
                </div>
                <div class="flex flex-wrap gap-2 text-left">
                    ${t.map(s=>`
                        <button type="button" onclick="window._fillMarketingPrompt('${s.replace(/'/g,"\\'")}')" class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all text-left">
                            ${s}
                        </button>
                    `).join("")}
                </div>
            </section>

            <!-- Reference Images Upload -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Reference Assets</h3>

                <!-- Upload Tips -->
                <div class="card p-4 bg-slate-50/50 border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Upload tips for best results</p>
                    <div class="grid grid-cols-2 gap-2 text-left">
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">storefront</span>
                            <span class="text-[9px] font-bold text-slate-500">Store front photo</span>
                        </div>
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">phone_iphone</span>
                            <span class="text-[9px] font-bold text-slate-500">Product image</span>
                        </div>
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">branding_watermark</span>
                            <span class="text-[9px] font-bold text-slate-500">Brand logo</span>
                        </div>
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">celebration</span>
                            <span class="text-[9px] font-bold text-slate-500">Festival/event photo</span>
                        </div>
                    </div>
                </div>

                <!-- Uploaded Images -->
                ${e.uploadedImages.length>0?`
                    <div class="flex gap-2 flex-wrap">
                        ${e.uploadedImages.map((s,a)=>`
                            <div class="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 group">
                                <img src="${s.base64}" alt="${s.name}" class="w-full h-full object-cover">
                                <button type="button" onclick="window._removeMarketingImage(${a})" class="absolute top-1 right-1 w-5 h-5 bg-slate-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="material-icons-outlined text-xs">close</span>
                                </button>
                                <div class="absolute bottom-0 left-0 right-0 bg-black/50 px-1 py-0.5">
                                    <p class="text-[7px] font-bold text-white truncate">${s.name}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:""}

                <!-- Upload Zone -->
                <button type="button" onclick="window._uploadMarketingImage()" class="card h-28 border-dashed border-2 border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors group text-center w-full">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 group-hover:text-slate-900 group-hover:scale-110 transition-all">
                        <span class="material-icons-outlined">add_photo_alternate</span>
                    </div>
                    <div class="text-center">
                        <p class="text-[10px] font-bold text-slate-600">Upload Store or Product Images</p>
                        <p class="text-[8px] font-bold text-slate-400 mt-0.5">AI will use these as visual context</p>
                    </div>
                </button>
            </section>
        </div>
    `}function _l(){const e=window._marketingState||{};return window._downloadCreative=async()=>{if(e.generatedImageUrl)try{const s=await(await fetch(e.generatedImageUrl)).blob(),a=URL.createObjectURL(s),n=document.createElement("a");n.href=a,n.download=`creative-${Date.now()}.png`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a),window.toast&&window.toast.success("Creative downloaded!")}catch(t){console.error("Download failed:",t),window.toast&&window.toast.error("Failed to download. Try right-click → Save Image.")}},window._regenerateCreative=()=>{const t=document.getElementById("marketing-prompt");t&&e.generatedPrompt&&(t.value=e.generatedPrompt),window._generateCreative()},window._refineCreative=()=>{var l;const t=document.getElementById("refine-prompt"),s=document.getElementById("marketing-prompt");if(!((l=t==null?void 0:t.value)!=null&&l.trim()))return;const a=t.value.trim(),n=(e.generatedPrompt||"")+". Additional: "+a;s&&(s.value=n),e.generatedPrompt=n,window._generateCreative()},e.isGenerating?`
            <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center animate-pulse">
                    <span class="material-icons-outlined text-3xl text-slate-400 animate-spin">progress_activity</span>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-black text-slate-900 tracking-tighter mb-1">Generating Creative</h3>
                    <p class="text-[10px] font-bold text-slate-400">This may take 10-20 seconds...</p>
                </div>
            </div>
        `:e.lastError&&!e.generatedImageUrl?`
            <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                    <span class="material-icons-outlined text-2xl text-slate-400">error_outline</span>
                </div>
                <div class="text-center">
                    <h3 class="text-sm font-black text-slate-900 tracking-tighter mb-1">Generation Failed</h3>
                    <p class="text-[10px] font-bold text-slate-400 max-w-xs">${e.lastError}</p>
                </div>
                <button type="button" onclick="window._regenerateCreative()" class="px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                    Try Again
                </button>
            </div>
        `:e.generatedImageUrl?`
            <div class="h-full flex flex-col p-6 sm:p-8">
                <!-- Header -->
                <div class="text-center border-b border-dashed border-slate-200 pb-4 mb-4">
                    <h2 class="text-xl font-black tracking-tighter mb-1">Generated Creative</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">AI Marketing Creative</p>
                </div>

                <!-- Image -->
                <div class="flex-1 flex items-center justify-center overflow-hidden mb-4">
                    <div class="card border border-slate-200 shadow-sm overflow-hidden rounded-2xl relative group max-w-sm w-full">
                        <img src="${e.generatedImageUrl}" alt="Generated creative" class="w-full h-auto" crossorigin="anonymous">
                        <div class="absolute top-3 right-3 bg-slate-900 text-white text-[8px] font-black uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">1024 x 1024</div>
                    </div>
                </div>

                <!-- Prompt Used -->
                <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl mb-4 text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Prompt Used</p>
                    <p class="text-[10px] font-bold text-slate-600 leading-relaxed">${e.generatedPrompt||""}</p>
                </div>

                <!-- Action Buttons -->
                <div class="grid grid-cols-2 gap-3 mb-4">
                    <button type="button" onclick="window._regenerateCreative()" class="py-3 border-2 border-slate-200 rounded-xl text-[10px] font-black text-slate-900 uppercase hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">refresh</span> Re-Generate
                    </button>
                    <button type="button" onclick="window._downloadCreative()" class="py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">download</span> Download
                    </button>
                </div>

                <!-- Refine -->
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">Refine Result</p>
                    <div class="relative text-left">
                        <input type="text" id="refine-prompt" placeholder="e.g., 'Make colors more vibrant'" class="w-full pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                        <button type="button" onclick="window._refineCreative()" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                            <span class="material-icons-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        `:`
        <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-6 text-left">
            <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-slate-300">auto_awesome</span>
            </div>

            <div class="text-center">
                <h3 class="text-lg font-black text-slate-900 tracking-tighter mb-1">AI Creative Studio</h3>
                <p class="text-[10px] font-bold text-slate-400">Your generated creatives will appear here</p>
            </div>

            <div class="w-full max-w-sm space-y-3 text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">Tips for great creatives</p>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">tips_and_updates</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Be specific about your offer</p>
                        <p class="text-[9px] font-bold text-slate-400">Include prices, discounts, and product details</p>
                    </div>
                </div>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">palette</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Mention colors and style</p>
                        <p class="text-[9px] font-bold text-slate-400">e.g., "vibrant red", "minimal white"</p>
                    </div>
                </div>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">add_photo_alternate</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Upload reference images</p>
                        <p class="text-[9px] font-bold text-slate-400">Store photos and product images improve results</p>
                    </div>
                </div>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">aspect_ratio</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Output: 1024 x 1024px</p>
                        <p class="text-[9px] font-bold text-slate-400">Perfect for Instagram, WhatsApp, and print</p>
                    </div>
                </div>
            </div>
        </div>
    `}function Nn(e){const t=e==="desktop-secondary",s=e==="mobile";if(t)return _l();if(s){const a=window._marketingState||{},n=a.generatedImageUrl||a.isGenerating||a.lastError;return`
            ${kl()}
            ${n?`
                <div class="px-4 pb-8">
                    ${_l()}
                </div>
            `:""}
        `}return kl()}function cp(){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
             <div class="flex items-center justify-between mb-6">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Promoters</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Team & Attendance</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">search</span></button>
            </div>
            
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button class="flex-1 py-3 bg-white shadow-sm text-slate-900 text-[10px] font-black uppercase rounded-lg transition-all">Team</button>
                <button class="flex-1 py-3 text-slate-400 text-[10px] font-black uppercase rounded-lg transition-all hover:bg-white/50 hover:text-slate-600">Reports</button>
            </div>
        </header>
    `}if(!window._promoterCheckIns)try{window._promoterCheckIns=JSON.parse(localStorage.getItem("promoter_checkins")||"{}")}catch{window._promoterCheckIns={}}window._togglePromoterCheckIn=(e,t)=>{t&&t.stopPropagation(),window._promoterCheckIns[e]=!window._promoterCheckIns[e],localStorage.setItem("promoter_checkins",JSON.stringify(window._promoterCheckIns)),window.toast&&window.toast.success(window._promoterCheckIns[e]?"Checked in":"Checked out"),window.triggerRender()};const dp=[{id:"P1",initials:"RS",name:"Rohan S.",role:"PREMIUM BRAND"},{id:"P2",initials:"AK",name:"Ananya K.",role:"STORE STAFF"},{id:"P3",initials:"VM",name:"Vikram M.",role:"ELECTRONICS PRO"},{id:"P4",initials:"SD",name:"Sarah D.",role:"AUDIO SPECIALIST"}];function pp(){const t=(window.getCache().teamMembers||[]).filter(n=>n.status==="active"),s=[...dp,...t.map(n=>({id:n.id,initials:n.name.split(" ").map(l=>l[0]).join("").slice(0,2).toUpperCase(),name:n.name,role:(n.role||"STAFF").toUpperCase()}))],a=s.filter(n=>window._promoterCheckIns[n.id]).length;return`
        ${cp()}
        <div class="scrolling-content px-4 sm:px-8 space-y-3 pb-32">
            ${s.map(n=>{const l=window._promoterCheckIns[n.id]||!1;return`
                    <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all ${p.promoterViewMode==="performance","border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-sm">${n.initials}</div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900">${n.name}</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide">${n.role}</p>
                            </div>
                        </div>
                        <div class="text-right" onclick="event.stopPropagation()">
                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1">CHECK-IN</p>
                            <button onclick="window._togglePromoterCheckIn('${n.id}', event)" class="w-10 h-5 ${l?"bg-slate-900":"bg-slate-200"} rounded-full relative cursor-pointer ml-auto transition-colors">
                                <div class="w-3 h-3 bg-white rounded-full absolute ${l?"right-1":"left-1"} top-1 shadow-sm transition-all"></div>
                            </button>
                        </div>
                    </div>
                `}).join("")}

            <!-- Add Button -->
            <div class="fixed bottom-32 right-8 z-20 sm:absolute sm:bottom-32 sm:right-8">
                <button onclick="setPromoterViewMode('onboarding')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span class="material-icons-outlined text-2xl">add</span>
                </button>
            </div>
        </div>

        <!-- Footer Stats -->
        <div class="p-6 border-t border-slate-100 bg-white grid grid-cols-2 gap-4 shrink-0 z-10 relative text-left">
             <div class="text-left border-r border-slate-100">
                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1">CHECKED IN</p>
                <h3 class="text-xl font-black text-slate-900 tracking-tight">${a}/${s.length}</h3>
             </div>
             <div class="text-right">
                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1">TOTAL TEAM</p>
                <h3 class="text-xl font-black text-slate-900 tracking-tight">${s.length}</h3>
             </div>
        </div>
    `}window._confirmPromoterHire=async()=>{var n,l,i,r,d,c,u;const e=(l=(n=document.getElementById("promoter-name"))==null?void 0:n.value)==null?void 0:l.trim(),t=(r=(i=document.getElementById("promoter-phone"))==null?void 0:i.value)==null?void 0:r.trim(),s=(c=(d=document.getElementById("promoter-hire-date"))==null?void 0:d.value)==null?void 0:c.trim(),a=(u=document.getElementById("promoter-brand"))==null?void 0:u.value;if(!e){window.toast&&window.toast.error("Full name is required");return}try{const x="TM-"+Math.random().toString(36).substr(2,8).toUpperCase();await A.teamMembers.add({id:x,name:e,role:a&&a!=="Select Brand"?`${a} Promoter`:"Store Staff",phone:t||null,email:null,status:"active",joined_at:s||new Date().toISOString().split("T")[0]});const b=(()=>{var g;const v=window.getCache(),w=localStorage.getItem("retaileros_retailer_id");return((g=v.retailers)==null?void 0:g.find(_=>_.id===w))||{}})();A.activityLogs.add({action:"team",detail:`Hired new promoter: ${e}`,user_name:b.contact_person||"Owner",icon:"person_add",color:"green"}),await Y(),window.toast&&window.toast.success(`${e} added to team`),window.setPromoterViewMode("list")}catch(x){console.error("Hire failed:",x),window.toast&&window.toast.error("Failed to add team member")}};function Sl(){return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                <div class="flex items-center gap-3 text-left">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 tracking-tight">Add Promoter</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5">STAFF ONBOARDING</p>
                    </div>
                </div>
                <button onclick="setPromoterViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full"><span class="material-icons-outlined text-lg">close</span></button>
            </div>

            <div class="flex-1 overflow-y-auto p-8 space-y-8 text-left">
                <div class="text-left">
                    <h1 class="text-xl font-black text-slate-900 tracking-tight mb-1">Staff Onboarding</h1>
                    <p class="text-xs text-slate-500 font-medium">Register a new promoter or store employee.</p>
                </div>

                <div class="space-y-5 text-left">
                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" id="promoter-name" placeholder="Enter legal name" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
                        <input type="text" id="promoter-phone" placeholder="9876543210" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Hiring Date</label>
                        <input type="date" id="promoter-hire-date" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Assigned Brand</label>
                        <div class="relative">
                            <select id="promoter-brand" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm appearance-none text-slate-600">
                                <option>Select Brand</option>
                                <option>Samsung</option>
                                <option>Apple</option>
                                <option>Sony</option>
                                <option>LG</option>
                                <option>OnePlus</option>
                                <option>Nothing</option>
                            </select>
                            <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">expand_more</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-slate-100 shrink-0">
                <button onclick="window._confirmPromoterHire()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    Confirm Hire <span class="material-icons-outlined text-sm">person_add</span>
                </button>
            </div>
        </div>
    `}function El(){return`
        <div class="h-full flex flex-col relative bg-white text-left">
             <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                 <button onclick="setPromoterViewMode('list')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                </button>
                <div class="text-left">
                    <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Rohan S.</h2>
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5 text-left">ELECTRONICS - TIER 1</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 text-left"><span class="material-icons-outlined text-lg text-left">more_vert</span></button>
            </div>

            <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left">
                
                <!-- Performance Snapshot -->
                <section class="space-y-3 text-left">
                     <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Performance Snapshot</h3>
                     <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm relative overflow-hidden text-left">
                        <span class="absolute top-4 right-4 bg-slate-100 text-slate-900 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide text-left">+12.4%</span>
                        <div class="flex items-center gap-2 mb-4 text-slate-400 text-left">
                            <span class="material-icons-outlined text-lg text-left">payments</span>
                        </div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Total Revenue Generated</p>
                        <h2 class="text-3xl font-black text-slate-900 tracking-tighter text-left">₹48,25,400</h2>
                     </div>

                     <div class="grid grid-cols-2 gap-3 text-left">
                         <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-left">Avg Selling Price</p>
                            <h3 class="text-xl font-black text-slate-900 tracking-tight text-left">₹64,200</h3>
                            <div class="h-1 w-12 bg-slate-900 rounded-full mt-3 text-left"></div>
                         </div>
                         <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-left">Cont. Margin %</p>
                            <h3 class="text-xl font-black text-slate-900 tracking-tight text-left">14.2%</h3>
                            <div class="h-1 w-8 bg-slate-900 rounded-full mt-3 text-left"></div>
                         </div>
                     </div>
                </section>

                <!-- Daily Sales Trend (Bar Chart Mock) -->
                <section class="space-y-3 text-left">
                    <div class="flex items-center justify-between text-left">
                         <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales Trend</h3>
                         <p class="text-[8px] font-bold text-slate-300 uppercase tracking-wide text-right">Last 7 Days</p>
                    </div>
                    <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm h-48 flex items-end justify-between gap-2 px-8 text-left">
                         <!-- Bars -->
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[40%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[60%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">MON</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[55%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[100%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">TUE</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[30%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[80%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">WED</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[70%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[100%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">THU</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[60%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[85%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">FRI</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[45%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[90%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">SAT</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[15%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[100%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">SUN</p></div>
                    </div>
                </section>

                <!-- Attendance Calendar -->
                 <section class="space-y-3 pb-8 text-left">
                    <div class="flex items-center justify-between text-left">
                         <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Attendance Calendar</h3>
                         <div class="flex gap-3 text-right">
                            <span class="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase text-right"><div class="w-1.5 h-1.5 rounded-full bg-slate-900 text-right"></div> Present</span>
                            <span class="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase text-right"><div class="w-1.5 h-1.5 rounded-full bg-slate-200 text-right"></div> Off</span>
                         </div>
                    </div>
                    <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                         <div class="grid grid-cols-7 gap-1 text-center mb-2 text-left">
                            <span class="text-[8px] font-bold text-slate-300 text-center">24</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">25</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">26</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">27</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">28</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">29</span>
                            <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-black mx-auto text-center">1</div>
                         </div>
                         <div class="grid grid-cols-7 gap-1 place-items-center text-left">
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">2</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">3</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">4</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">5</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">6</div>
                             <div class="w-6 h-6 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center text-[8px] font-bold text-center">7</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">8</div>
                             
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">9</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">10</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">11</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">12</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">13</div>
                             <div class="w-6 h-6 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center text-[8px] font-bold mt-2 text-center">14</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">15</div>
                         </div>
                    </div>
                 </section>
            </div>
        </div>
    `}function qn(e){const t=e==="desktop-secondary";if(window.setPromoterViewMode=s=>{p.promoterViewMode=s,C()},t)return p.promoterViewMode==="onboarding"?Sl():El();if(e==="mobile"){if(p.promoterViewMode==="onboarding")return Sl();if(p.promoterViewMode==="performance")return El()}return pp()}function up(){return`
         <header class="p-4 sm:p-8 pb-4 shrink-0 transition-all">
            <div class="flex items-center justify-between mb-6">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Inventory Management</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Stock & Assets</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">search</span></button>
            </div>

             <!-- Toggle Tabs -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                 <button onclick="setInventoryTab('brands')" class="flex-1 py-3 ${p.inventoryTab==="brands"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Brands</button>
                 <button onclick="setInventoryTab('categories')" class="flex-1 py-3 ${p.inventoryTab==="categories"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Category</button>
            </div>
        </header>
    `}function fp(){return`
        <div class="scrolling-content px-6 space-y-4 pb-32">
             <!-- Apple -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white ${p.inventoryMode==="details"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">Apple</h3>
                        <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Premium</span>
                    </div>
                    <div class="text-right">
                        <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5">AVG MARGIN</p>
                        <p class="text-sm font-black text-slate-900">12.4%</p>
                    </div>
                </div>
                <div class="mb-5 text-left">
                     <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL VALUE BLOCKED</p>
                     <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">₹42,84,500</h2>
                </div>
                <div class="border-t border-dashed border-slate-100 pt-3 text-left">
                     <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-2 text-left">TOP ITEM METRICS</p>
                     <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MRP</p>
                            <p class="text-[8px] font-black text-slate-900">₹1,29,900</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MOP</p>
                            <p class="text-[8px] font-black text-slate-900">₹1,14,999</p>
                        </div>
                         <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">DP</p>
                            <p class="text-[8px] font-black text-slate-900">₹1,02,450</p>
                        </div>
                     </div>
                </div>
            </div>

            <!-- OnePlus -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white border-transparent hover:border-slate-200">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">OnePlus</h3>
                        <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Electronics</span>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5">AVG MARGIN</p>
                        <p class="text-sm font-black text-slate-900">15.8%</p>
                    </div>
                </div>
                <div class="mb-5 text-left">
                     <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL VALUE BLOCKED</p>
                     <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">₹28,12,300</h2>
                </div>
                <div class="border-t border-dashed border-slate-100 pt-3 text-left">
                     <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-2 text-left">TOP ITEM METRICS</p>
                     <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MRP</p>
                            <p class="text-[8px] font-black text-slate-900">₹74,999</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MOP</p>
                            <p class="text-[8px] font-black text-slate-900">₹69,999</p>
                        </div>
                         <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">DP</p>
                            <p class="text-[8px] font-black text-slate-900">₹58,400</p>
                        </div>
                     </div>
                </div>
            </div>

            <!-- Nothing -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white border-transparent hover:border-slate-200">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">Nothing</h3>
                        <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Audio & Mobile</span>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5">AVG MARGIN</p>
                        <p class="text-sm font-black text-slate-900">18.2%</p>
                    </div>
                </div>
               <div class="mb-5 text-left">
                     <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL VALUE BLOCKED</p>
                     <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">₹14,45,000</h2>
                </div>
                <div class="border-t border-dashed border-slate-100 pt-3 text-left">
                     <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-2 text-left">TOP ITEM METRICS</p>
                     <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MRP</p>
                            <p class="text-[8px] font-black text-slate-900">₹24,990</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MOP</p>
                            <p class="text-[8px] font-black text-slate-900">₹22,500</p>
                        </div>
                         <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">DP</p>
                            <p class="text-[8px] font-black text-slate-900">₹18,450</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <!-- Floating Action Button -->
        <div class="fixed bottom-8 right-8 z-20 sm:absolute sm:bottom-8 sm:right-8">
            <button onclick="setInventoryMode('inward')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `}function xp(){const s=((window.getCache?window.getCache():{products:[]}).products||[]).reduce((i,r)=>{const d=r.category||"Uncategorized";i[d]||(i[d]={count:0,blocked:0,margin:0,icon:"category"}),i[d].count+=parseInt(r.stock)||0;const c=parseInt(r.price)||0,u=c*.9;return i[d].blocked+=(parseInt(r.stock)||0)*u,i[d].margin+=(c-u)*(parseInt(r.stock)||0),d.toLowerCase().includes("phone")?i[d].icon="smartphone":d.toLowerCase().includes("tablet")?i[d].icon="tablet_mac":d.toLowerCase().includes("audio")&&(i[d].icon="headphones"),i},{}),a=Object.keys(s),n=Object.values(s).reduce((i,r)=>i+r.blocked,0),l=Object.values(s).reduce((i,r)=>i+r.margin,0);return`
        <div class="scrolling-content px-6 space-y-4 pb-32">
            <div class="text-left mb-2 px-2">
                <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-2 text-left">INVENTORY > OVERVIEW</p>
                <h2 class="text-lg font-black text-slate-900 mt-1 text-left">Category Breakdown</h2>
            </div>

            ${a.length===0?`
                <div class="p-10 text-center opacity-30">
                    <p class="text-[10px] font-black uppercase tracking-widest">No inventory data available</p>
                </div>
            `:a.map(i=>{const r=s[i];return`
                <div onclick="state.activeCategory='${i}'; setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white flex items-center justify-between border-transparent hover:border-slate-200 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600"><span class="material-icons-outlined text-lg">${r.icon}</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${i}</h3>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">STOCK COUNT: ${r.count}</p>
                        </div>
                    </div>
                     <span class="material-icons-outlined text-slate-300">chevron_right</span>
                </div>
                <div class="grid grid-cols-2 gap-4 px-2 -mt-2 mb-4 text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${r.blocked.toLocaleString()}</h4>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight text-right">₹${r.margin.toLocaleString()}</h4>
                    </div>
                </div>
                `}).join("")}

            <!-- Brand Health Widget -->
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mt-4 text-left">
            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-left">BRAND HEALTH</p>
            <div class="flex gap-4 text-left">
                <div class="flex-1 bg-slate-900 rounded-xl p-3 text-white text-left">
                    <p class="text-[7px] font-black uppercase tracking-widest opacity-60 mb-1 text-left">TOTAL CAPITAL</p>
                    <p class="text-lg font-black tracking-tight text-white text-left">₹${(n/1e7).toFixed(2)} Cr</p>
                </div>
                <div class="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-900 flex justify-between items-center text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black uppercase tracking-widest opacity-40 mb-1 text-left">AVG. MARGIN</p>
                        <p class="text-lg font-black tracking-tight text-left">${n>0?(l/n*100).toFixed(1):0}%</p>
                    </div>
                    <span class="material-icons-outlined text-slate-900 bg-white rounded-full p-1 shadow-sm text-sm text-left">bar_chart</span>
                </div>
            </div>
        </div>
        </div>

        <!-- Floating Action Button -->
        <div class="fixed bottom-8 right-8 z-20 sm:absolute sm:bottom-8 sm:right-8">
            <button onclick="setInventoryMode('inward')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `}async function mp(){const e=document.getElementById("inward-model").value,t=document.getElementById("inward-imei").value;if(document.getElementById("inward-sn").value,!e||!t){alert("Model name and IMEI are required.");return}const s=document.getElementById("confirm-inward-btn");s.disabled=!0,s.innerText="Syncing...";try{const n=(await A.inventory.getProducts()).filter(i=>i.name===e);let l;if(n.length>0){l=n[0].id;const i=parseInt(n[0].stock||0)+1;await A.query("UPDATE products SET stock = ? WHERE id = ?",[i,n[0].id])}else l="PRD-"+Math.random().toString(36).substr(2,6).toUpperCase(),await A.query(`
                INSERT INTO products (id, name, category, brand, price, stock, imei)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `,[l,e,"Smartphone",e.split(" ")[0],5e4,1,t]);await A.inventoryLogs.add({id:"LOG-"+Math.random().toString(36).substr(2,6).toUpperCase(),product_id:l,type:"INWARD",quantity:1,reason:"New Shipment Arrival",date:new Date().toISOString()}),await Y(),window.setInventoryMode("details")}catch(a){alert("Inward failed: "+a.message),s.disabled=!1,s.innerText="Confirm Inward"}}window.confirmInward=mp;function $l(){return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                 <div class="flex items-center gap-3 text-left">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg text-left"><span class="material-icons-outlined text-white">input</span></div>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Inward Shipment</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5 text-left">Scanning & Details</p>
                    </div>
                </div>
                 <button onclick="setInventoryMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                    <span class="material-icons-outlined text-lg text-left">close</span>
                 </button>
            </div>

            <div class="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar text-left">
                 <div class="space-y-4 text-left">
                    <div class="space-y-1 text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Model Name</label>
                        <input type="text" id="inward-model" placeholder="Model Name..." class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    </div>

                    <div class="grid grid-cols-2 gap-4 text-left">
                        <div class="space-y-1 text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">IMEI Number</label>
                            <input type="text" id="inward-imei" placeholder="IMEI..." class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                        </div>
                        <div class="space-y-1 text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Serial Number</label>
                            <input type="text" id="inward-sn" placeholder="Serial..." class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                        </div>
                    </div>
                 </div>
            </div>

            <div class="p-6 border-t border-slate-100 shrink-0 text-left">
                 <button id="confirm-inward-btn" onclick="confirmInward()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-center text-center">
                     Confirm Inward <span class="material-icons-outlined text-sm text-center">arrow_forward</span>
                 </button>
            </div>
        </div>
    `}function Il(){const t=(window.getCache?window.getCache():{products:[]}).products||[];return`
         <div class="h-full flex flex-col relative bg-white text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 shrink-0 text-left">
                <button onclick="setInventoryMode('list')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors mb-2">
                    <span class="material-icons-outlined text-lg">chevron_left</span>
                    <span class="text-[10px] font-black uppercase tracking-widest">Back</span>
                </button>
                <div class="flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">
                    <span class="text-left">Inventory</span>
                    <span class="material-icons-outlined text-[10px] text-left">chevron_right</span>
                    <span class="text-left">Apple</span>
                    <span class="material-icons-outlined text-[10px] text-left">chevron_right</span>
                    <span class="text-slate-900 underline text-left">Smartphones</span>
                </div>
                <div class="flex items-center justify-between text-left">
                     <h2 class="text-xl font-black text-slate-900 tracking-tighter text-left">Smartphones</h2>
                     <div class="flex gap-2 text-slate-400 text-left">
                        <button class="hover:text-slate-900"><span class="material-icons-outlined text-lg">search</span></button>
                         <button class="hover:text-slate-900"><span class="material-icons-outlined text-lg">filter_list</span></button>
                     </div>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-slate-50/50 text-left">

                ${t.length===0?`
                    <div class="p-20 text-center opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">inventory_2</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">No Inventory Found</p>
                    </div>
                `:t.map(s=>{const a=parseInt(s.stock)||0,n=parseInt(s.price)||0,l=n*1.1,i=n*.9,r=a*i,d=(n-i)*a;return`
                    <div class="card p-5 bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-sm group text-left">
                        <div class="flex justify-between items-start mb-4 border-b border-dashed border-slate-100 pb-3 text-left">
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">${s.name}</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide mt-0.5 text-left">${s.color||"Standard"} • ${a} UNITS</p>
                            </div>
                            <span class="text-[8px] font-bold text-slate-300 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 text-left">ID: ${s.id}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-left">
                            <div class="text-left">
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${r.toLocaleString()}</h4>
                            </div>
                             <div class="text-right">
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-right">₹${d.toLocaleString()}</h4>
                            </div>
                        </div>
                        <div class="flex justify-between items-center text-center bg-slate-50 rounded-lg p-2 border border-slate-100">
                            <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">MRP</p>
                                <p class="text-[9px] font-black text-slate-900">₹${l.toLocaleString()}</p>
                            </div>
                            <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">MOP</p>
                                <p class="text-[9px] font-black text-slate-900">₹${n.toLocaleString()}</p>
                            </div>
                             <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">DP (DIST.)</p>
                                <p class="text-[9px] font-black text-slate-900">₹${i.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    `}).join("")}
            </div>
            
            <div class="p-6 border-t border-slate-100 shrink-0 bg-white text-left">
                <div class="flex justify-between items-center mb-4 text-left">
                    <div class="text-left">
                         <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Category Total</p>
                         <h2 class="text-xl font-black tracking-tighter text-slate-900 text-left">₹54,62,100</h2>
                    </div>
                    <button class="px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 text-left">
                         <span class="material-icons-outlined text-sm text-left">download</span> Export Inventory
                    </button>
                </div>
            </div>

        </div>
    `}function Bn(e){const t=e==="desktop-secondary";if(window.setInventoryTab=s=>{p.inventoryTab=s,C()},window.setInventoryMode=s=>{p.inventoryMode=s,C()},t)return p.inventoryMode==="inward"?$l():Il();if(e==="mobile"){if(p.inventoryMode==="inward")return $l();if(p.inventoryMode==="details")return Il()}return`
        <div class="h-full flex flex-col relative bg-white">
            ${up()}
            ${p.inventoryTab==="brands"?fp():xp()}
        </div>
    `}function bp(e){return`
         <div class="h-full flex flex-col relative bg-white text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Settings</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Global Dashboard</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">tune</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 pt-0 custom-scrollbar text-left">
                <!-- Settings Grid -->
                <div class="card overflow-hidden border-slate-200 mb-8 text-left">
                    <div class="grid ${e==="mobile"?"grid-cols-4":"grid-cols-6"} divide-x divide-y divide-slate-100 text-left">
                        ${[{n:"Roles",i:"admin_panel_settings",k:"roles"},{n:"Finance",i:"account_balance",k:"accounting"},{n:"Ledger",i:"menu_book",k:"ledger"},{n:"Store",i:"store",k:"store"},{n:"Security",i:"security",k:"security"},{n:"Alerts",i:"notifications",k:"alerts"},{n:"Taxes",i:"percent",k:"taxes"},{n:"Plugins",i:"grid_view",k:"plugins"},{n:"Teams",i:"hub",k:"teams"},{n:"Logs",i:"history",k:"logs"},{n:"Lang",i:"language",k:"lang"},{n:"Backup",i:"cloud_upload",k:"backup"},{n:"Bills",i:"description"},{n:"AI Config",i:"smart_toy",k:"ai"},{n:"Updates",i:"update",k:"updates"},{n:"API",i:"key"},{n:"Theme",i:"palette",k:"theme"},{n:"Help",i:"support",k:"help"}].map(n=>`
                            <button onclick="${n.k?`window.setSettingsView('${n.k}')`:""}" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all text-center ${p.settingsView===n.k?"bg-slate-100":""}">
                                <span class="material-icons-outlined text-2xl ${p.settingsView===n.k?"text-slate-900 font-bold":"text-slate-500"} mb-1 text-center">${n.i}</span>
                                <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${p.settingsView===n.k?"text-slate-900":"text-slate-500"}">${n.n}</span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <div class="mb-4 text-left">
                     <p class="text-[8px] font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-900 rounded-full text-left"></span> System Health
                     </p>
                     <div class="bg-white border border-slate-100 rounded-2xl p-4 flex gap-8 shadow-sm text-left">
                        <div class="text-left">
                             <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">SERVER STATUS</p>
                             <div class="flex items-center gap-1.5 text-[9px] font-black text-slate-900 uppercase tracking-wide text-left">
                                <span class="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse text-left"></span> Optimal
                             </div>
                        </div>
                         <div class="text-left">
                             <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">LAST SYNC</p>
                             <div class="flex items-center gap-1.5 text-[9px] font-black text-slate-900 uppercase tracking-wide text-left">
                                <span class="material-icons-outlined text-xs text-left">history</span> 2m ago
                             </div>
                        </div>
                     </div>
                </div>
            </div>
         </div>
    `}function hp(){const e=p.settingsSubView==="add",t=p.settingsActiveRole||"Store Manager";return`
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Roles & Access</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Security Settings</p>
                    </div>
                    <button onclick="window.setSettingsSubView('add')" class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">add_circle</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                
                <!-- SECTION 1: Current Roles List -->
                <div class="p-6 space-y-3 border-b border-dashed border-slate-200 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Current Roles</p>
                     
                     <div onclick="window.setSettingsRole('Store Manager')" class="card p-4 border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${t==="Store Manager"&&!e?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 text-left"><span class="material-icons-outlined text-left">security</span></div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">Store Manager</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">Full System Access • PIN Enabled</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-left ${t==="Store Manager"&&!e?"text-slate-900":"text-slate-300"}">chevron_right</span>
                     </div>

                     <div onclick="window.setSettingsRole('Sales Staff')" class="card p-4 border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${t==="Sales Staff"&&!e?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 text-left"><span class="material-icons-outlined text-left">badge</span></div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">Sales Staff</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">8 Apps Enabled • No Reports</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-left ${t==="Sales Staff"&&!e?"text-slate-900":"text-slate-300"}">chevron_right</span>
                     </div>
                </div>

                 <!-- SECTION 2: Details OR Add Form -->
                <div class="p-6 space-y-4 animate-slide-up text-left">
                    ${e?`
                        <!-- ADD NEW ROLE FORM -->
                        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 border-dashed animate-slide-up text-left">
                            <div class="flex items-center gap-2 mb-6 text-left">
                                <span class="bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase text-left">NEW</span>
                                <p class="text-[10px] font-black text-slate-900 uppercase tracking-widest text-left">Create Access Level</p>
                            </div>
                            <div class="space-y-4 text-left">
                                <div class="space-y-1 text-left">
                                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Identify Name</label>
                                    <input type="text" placeholder="e.g. Floor Supervisor" class="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-900 rounded-xl text-xs font-bold focus:outline-none transition-all shadow-sm text-left">
                                </div>
                                <div class="space-y-3 pt-2 text-left">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">Initialize Permissions</p>
                                    <div class="flex items-center justify-between py-2 border-b border-slate-100 text-left">
                                        <span class="text-xs font-bold text-slate-900 text-left">Dashboard & Reports</span>
                                        <div class="relative inline-block w-8 h-4 align-middle select-none text-left"><input type="checkbox" class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer left-0"/><label class="toggle-label block overflow-hidden h-4 rounded-full bg-slate-200 cursor-pointer"></label></div>
                                    </div>
                                </div>
                                <div class="pt-4 flex gap-3 text-left">
                                    <button onclick="window.setSettingsSubView('detail')" class="flex-1 py-3 border-2 border-slate-200 text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest text-center">Cancel</button>
                                    <button onclick="window.saveNewRole()" class="flex-[2] py-3 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg text-center">Create Role</button>
                                </div>
                            </div>
                        </div>
                    
                    `:`
                        <!-- VIEW/EDIT ROLE FORM -->
                        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm animate-slide-up text-left">
                            <div class="flex items-center justify-between mb-6 text-left">
                                <div class="flex items-center gap-2 text-left">
                                    <div class="w-2 h-6 bg-slate-900 rounded-full text-left"></div>
                                    <p class="text-[11px] font-black text-slate-900 uppercase tracking-widest text-left">Editing: ${t}</p>
                                </div>
                                <span class="text-[8px] font-bold text-slate-300 uppercase text-right">UID: ROLE_8812</span>
                            </div>

                            <div class="space-y-5 text-left">
                                <div class="space-y-1 text-left">
                                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Role Identity</label>
                                    <input type="text" value="${t}" class="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-slate-200 rounded-xl text-xs font-bold focus:outline-none transition-all text-left">
                                </div>

                                <div class="space-y-3 text-left">
                                    <div class="flex justify-between items-center mb-1 text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">App Permissions</p>
                                        <span class="text-[8px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-right">15 Enabled</span>
                                    </div>
                                    
                                    <div class="flex items-center justify-between py-2.5 border-b border-slate-50 text-left">
                                        <div class="flex items-center gap-3 text-left">
                                            <div class="w-6 h-6 bg-slate-50 rounded flex items-center justify-center text-slate-400 text-left"><span class="material-icons-outlined text-sm text-left">point_of_sale</span></div>
                                            <span class="text-xs font-bold text-slate-900 text-left">Sales Desk</span>
                                        </div>
                                        <div class="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in text-left">
                                            <input type="checkbox" checked class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-slate-900 border-4 border-slate-200 appearance-none cursor-pointer left-4"/>
                                            <label class="toggle-label block overflow-hidden h-4 rounded-full bg-slate-200 cursor-pointer"></label>
                                        </div>
                                    </div>
                                    
                                    <div onclick="window.toast.info('Full permissions matrix view is coming soon!')" class="bg-slate-50 rounded-xl p-3 text-center text-[9px] font-black text-slate-400 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">View Full permissions matrix</div>
                                </div>

                                <!-- Security Access PIN -->
                                <div class="space-y-3 pt-4 border-t border-dashed border-slate-100 text-left">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Security Pin Access</p>
                                    <div class="flex gap-2 text-left">
                                        <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md text-left">•</div>
                                        <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md text-left">•</div>
                                        <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md text-left">•</div>
                                        <div class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg text-left"></div>
                                        <div class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg text-left"></div>
                                        <div class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg text-left"></div>
                                    </div>
                                    <button onclick="window.updateRole()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl mt-4 hover:scale-[1.02] transition-transform text-center">Update Role Profile</button>
                                </div>
                            </div>
                        </div>
                    `}
                </div>
            </div>
         </div>
    `}function gp(){return`
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                     <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Accounting</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Financial Data Export</p>
                    </div>
                    <div class="w-10 text-left"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left">
                <!-- Date Range -->
                <div class="space-y-2 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Date Range</p>
                     <div class="flex gap-2 text-left">
                         <div class="flex-1 border border-slate-200 rounded-xl p-3 bg-white text-left">
                             <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">From</p>
                             <p class="text-sm font-black text-slate-900 text-left">01 Oct 2023</p>
                         </div>
                         <div class="flex-1 border border-slate-200 rounded-xl p-3 bg-white text-left">
                             <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">To</p>
                             <p class="text-sm font-black text-slate-900 text-left">31 Oct 2023</p>
                         </div>
                     </div>
                     <div class="bg-slate-50 rounded-lg p-2.5 text-center text-[9px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors">Quick Select: Last Month</div>
                </div>

                <!-- Include in Export -->
                 <div class="space-y-2 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left text-left">Include In Export</p>
                     
                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">receipt_long</span>
                             <span class="text-xs font-bold text-slate-900 text-left">Sales Transactions</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">local_offer</span>
                             <span class="text-xs font-bold text-slate-900 text-left">Discounts & Vouchers</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">account_balance</span>
                             <span class="text-xs font-bold text-slate-900 text-left">GST Breakup</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                      <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">qr_code</span>
                             <span class="text-xs font-bold text-slate-900 text-left">HSN / SAC Codes</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>
                </div>

                <button class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform text-center">
                    Download Transaction Excel
                    <span class="block text-[8px] font-normal text-slate-400 lowercase mt-0.5 text-center">XLSX • 1.2 MB Estimated</span>
                </button>
                
                <div class="pt-6 border-t border-dashed border-slate-200 text-left text-left">
                     <div class="flex items-center gap-3 mb-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 text-left"><span class="material-icons-outlined text-left">account_box</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">Connect Accountant</h3>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">Automated monthly reports</p>
                        </div>
                     </div>
                     <div class="relative text-left">
                          <input type="text" value="accountant@firm.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 focus:outline-none text-left">
                          <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm text-left">help</span>
                     </div>
                     <button class="w-full py-3 mt-3 border-2 border-slate-900 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-colors text-center">
                        Enable Auto-Sync
                    </button>
                </div>
            </div>
        </div>
    `}function wp(){return`
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                     <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Ledger</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Financial Oversight</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">filter_list</span></button>
                </div>
            </header>

            <div class="p-4 bg-slate-50 border-b border-slate-100 text-left">
                 <div class="relative text-left">
                     <span class="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg text-left">search</span>
                     <input type="text" placeholder="Search ledgers (Sales, Cash, Brand...)" class="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all text-left">
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar text-left">
                
                <!-- Main Ledger Card -->
                <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden text-left">
                     <div class="flex justify-between items-start mb-4 relative z-10 text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white text-left"><span class="material-icons-outlined text-left">account_balance</span></div>
                            <div class="text-left">
                                 <h3 class="text-sm font-black text-slate-900 text-left">Sales Ledger (Main)</h3>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">A/C No: 4402-2291-XX</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <h3 class="text-sm font-black text-slate-900 text-right">₹2,44,500.00</h3>
                            <p class="text-[8px] font-black text-slate-900 uppercase tracking-wide text-right">CR BALANCE</p>
                        </div>
                     </div>

                     <div class="space-y-4 relative z-10 text-left">
                         <div class="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 text-left">
                             <span class="text-left">Date/Desc</span>
                             <div class="flex gap-4 text-right"><span>Debit</span><span>Credit</span></div>
                         </div>
                         
                         <div class="flex justify-between items-center text-left">
                              <div class="text-left">
                                  <p class="text-[9px] font-bold text-slate-900 text-left">12 Oct 2023</p>
                                  <p class="text-[8px] text-slate-400 text-left">Store Front Retail Sale...</p>
                              </div>
                              <div class="flex gap-8 text-[9px] font-black tabular-nums text-right">
                                <span class="text-slate-300 text-right">---</span>
                                <span class="text-slate-900 text-right">₹45,000</span>
                              </div>
                         </div>

                         <div class="flex justify-between items-center text-left">
                              <div class="text-left">
                                  <p class="text-[9px] font-bold text-slate-900 text-left">11 Oct 2023</p>
                                  <p class="text-[8px] text-slate-400 text-left">Vendor Credit Return -...</p>
                              </div>
                              <div class="flex gap-8 text-[9px] font-black tabular-nums text-right">
                                <span class="text-slate-400 text-right">₹12,400</span>
                                <span class="text-slate-300 text-right">---</span>
                              </div>
                         </div>

                         <div class="flex justify-between items-center text-left">
                              <div class="text-left">
                                  <p class="text-[9px] font-bold text-slate-900 text-left">10 Oct 2023</p>
                                  <p class="text-[8px] text-slate-400 text-left">Amex Settlement #8812</p>
                              </div>
                              <div class="flex gap-8 text-[9px] font-black tabular-nums text-right">
                                <span class="text-slate-300 text-right">---</span>
                                <span class="text-slate-900 text-right">₹1,12,000</span>
                              </div>
                         </div>
                     </div>
                     
                     <div class="mt-4 pt-3 border-t border-slate-100 text-center">
                        <span class="text-[8px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-slate-900">View All Journal Entries</span>
                     </div>
                </div>

                <!-- Other Ledgers -->
                 <div class="space-y-3 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left px-1">Other Active Ledgers</p>
                     
                     <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 transition-colors cursor-pointer text-left">
                         <div class="flex items-center gap-3 text-left">
                             <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 text-left"><span class="material-icons-outlined text-sm text-left">payments</span></div>
                             <div class="text-left">
                                 <p class="text-xs font-black text-slate-900 text-left">Cash In Hand</p>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase text-left">Liquid Assets</p>
                             </div>
                         </div>
                         <div class="flex items-center gap-3 text-right">
                             <div class="text-right">
                                 <p class="text-xs font-black text-slate-900 text-right">₹18,290.00</p>
                                 <p class="text-[7px] font-black text-slate-300 uppercase text-right">DR</p>
                             </div>
                             <span class="material-icons-outlined text-slate-300 text-sm text-right">chevron_right</span>
                         </div>
                     </div>

                     <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 transition-colors cursor-pointer text-left">
                         <div class="flex items-center gap-3 text-left">
                             <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 text-left"><span class="material-icons-outlined text-sm text-left">diamond</span></div>
                             <div class="text-left">
                                 <p class="text-xs font-black text-slate-900 text-left">Brand Settlements</p>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase text-left">Pending Payables</p>
                             </div>
                         </div>
                         <div class="flex items-center gap-3 text-right">
                             <div class="text-right">
                                 <p class="text-xs font-black text-slate-400 text-right">₹(5,92,000.00)</p>
                                 <p class="text-[7px] font-black text-slate-300 uppercase text-right">CR</p>
                             </div>
                             <span class="material-icons-outlined text-slate-300 text-sm text-right">chevron_right</span>
                         </div>
                     </div>
                     
                     <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 transition-colors cursor-pointer text-left">
                         <div class="flex items-center gap-3 text-left">
                             <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 text-left"><span class="material-icons-outlined text-sm text-left">savings</span></div>
                             <div class="text-left">
                                 <p class="text-xs font-black text-slate-900 text-left">Petty Cash</p>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase text-left">Operational</p>
                             </div>
                         </div>
                         <div class="flex items-center gap-3 text-right">
                             <div class="text-right">
                                 <p class="text-xs font-black text-slate-900 text-right">₹4,500.00</p>
                                 <p class="text-[7px] font-black text-slate-300 uppercase text-right">DR</p>
                             </div>
                             <span class="material-icons-outlined text-slate-300 text-sm text-right">chevron_right</span>
                         </div>
                     </div>
                 </div>
                 
                 <div class="grid grid-cols-2 gap-4 mt-6 text-left">
                      <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                          <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL DEBIT</p>
                          <p class="text-lg font-black text-slate-900 text-left">₹16.4L</p>
                      </div>
                       <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                          <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL CREDIT</p>
                          <p class="text-lg font-black text-slate-900 text-left">₹14.2L</p>
                      </div>
                 </div>
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-8 right-8 z-20 text-left">
                <button class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
          </div>
    `}function vp(){const e=localStorage.getItem("openai_api_key")||"";return e?e.substring(0,7)+"..."+e.substring(e.length-4):""}window.saveOpenAIKey=()=>{var s;const e=document.getElementById("openai-key-input"),t=(s=e==null?void 0:e.value)==null?void 0:s.trim();if(!t){window.toast.warning("Please enter an API key");return}if(!t.startsWith("sk-")){window.toast.error('Invalid API key format. OpenAI keys start with "sk-"');return}localStorage.setItem("openai_api_key",t),window.toast.success("API key saved successfully!"),window.triggerRender()};window.removeOpenAIKey=()=>{window.showConfirm("Remove OpenAI API key? AI features will fall back to local processing.",()=>{localStorage.removeItem("openai_api_key"),window.toast.info("API key removed"),window.triggerRender()})};window.testOpenAIKey=async()=>{var s;const e=localStorage.getItem("openai_api_key");if(!e){window.toast.warning("No API key configured");return}const t=document.getElementById("test-key-btn");t&&(t.disabled=!0,t.innerHTML='<span class="material-icons-outlined text-sm animate-spin">sync</span> Testing...');try{const a=await fetch("https://api.openai.com/v1/models",{headers:{Authorization:`Bearer ${e}`}});if(a.ok)window.toast.success("API key is valid and working!");else{const n=await a.json();window.toast.error("API key test failed: "+(((s=n.error)==null?void 0:s.message)||"Unknown error"))}}catch(a){window.toast.error("Connection error: "+a.message)}finally{t&&(t.disabled=!1,t.innerHTML='<span class="material-icons-outlined text-sm">play_arrow</span> Test Connection')}};function yp(){const e=!!localStorage.getItem("openai_api_key"),t=vp();return`
        <div class="h-full flex flex-col bg-white">
            <header class="p-6 border-b border-slate-100 shrink-0">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <button onclick="window.setSettingsView(null)" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                            <span class="material-icons-outlined">arrow_back</span>
                        </button>
                        <div>
                            <h1 class="text-lg font-black tracking-tighter text-slate-900">AI Configuration</h1>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">OpenAI Integration</p>
                        </div>
                    </div>
                    <div class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white text-xl">smart_toy</span>
                    </div>
                </div>
            </header>
            
            <div class="flex-1 overflow-y-auto p-6 space-y-6">
                <!-- Status Card -->
                <div class="card p-5">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 ${e?"bg-slate-900":"bg-slate-100"} rounded-2xl flex items-center justify-center">
                                <span class="material-icons-outlined ${e?"text-white":"text-slate-400"}">${e?"check_circle":"key_off"}</span>
                            </div>
                            <div>
                                <h3 class="text-sm font-black text-slate-900">${e?"AI Enabled":"AI Not Configured"}</h3>
                                <p class="text-[10px] font-bold text-slate-400">${e?"Using OpenAI GPT-4o-mini":"Using local fallback processing"}</p>
                            </div>
                        </div>
                        ${e?`
                            <button id="test-key-btn" onclick="window.testOpenAIKey()" class="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                <span class="material-icons-outlined text-sm">play_arrow</span>
                                Test Connection
                            </button>
                        `:""}
                    </div>
                </div>
                
                <!-- API Key Configuration -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">OpenAI API Key</h3>
                    
                    ${e?`
                        <div class="card p-4 space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-xs font-black text-slate-900">Current Key</p>
                                    <p class="text-[10px] font-mono text-slate-500">${t}</p>
                                </div>
                                <button onclick="window.removeOpenAIKey()" class="px-3 py-2 text-slate-400 hover:text-slate-900 text-[9px] font-black uppercase flex items-center gap-1">
                                    <span class="material-icons-outlined text-sm">delete</span>
                                    Remove
                                </button>
                            </div>
                        </div>
                    `:`
                        <div class="card p-4 space-y-4">
                            <div class="space-y-2">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Enter API Key</label>
                                <input type="password" 
                                       id="openai-key-input"
                                       placeholder="sk-..." 
                                       class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-mono focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                            <button onclick="window.saveOpenAIKey()" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                                <span class="material-icons-outlined text-sm">save</span>
                                Save API Key
                            </button>
                        </div>
                    `}
                </div>
                
                <!-- Info Section -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">How It Works</h3>
                    
                    <div class="card p-4 space-y-4">
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">photo_camera</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">Scan Product Labels</p>
                                <p class="text-[10px] font-bold text-slate-400">Capture product box/label images with your phone camera</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">text_fields</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">OCR Text Extraction</p>
                                <p class="text-[10px] font-bold text-slate-400">Tesseract.js extracts text from images locally</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">psychology</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">AI Processing</p>
                                <p class="text-[10px] font-bold text-slate-400">${e?"OpenAI GPT-4o-mini intelligently extracts device info":"Local pattern matching (configure API for better results)"}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">auto_fix_high</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">Dynamic Fields</p>
                                <p class="text-[10px] font-bold text-slate-400">AI adds extra fields like IMEI2, Model, Color, Storage as needed</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Get API Key -->
                <div class="card p-4 bg-slate-50 border-dashed">
                    <div class="flex items-center gap-3">
                        <span class="material-icons-outlined text-slate-400">info</span>
                        <div class="flex-1">
                            <p class="text-xs font-black text-slate-900">Need an API key?</p>
                            <p class="text-[10px] font-bold text-slate-400">Get one from OpenAI Platform</p>
                        </div>
                        <a href="https://platform.openai.com/api-keys" target="_blank" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center gap-1">
                            Get Key
                            <span class="material-icons-outlined text-sm">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `}function kp(){var n;const e=p.settingsSubView==="edit",t=window.getCache(),s=localStorage.getItem("retaileros_retailer_id"),a=((n=t.retailers)==null?void 0:n.find(l=>l.id===s))||null;return a?`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Store Profile</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Business Information</p>
                    </div>
                    <button onclick="window.setSettingsSubView('${e?null:"edit"}')" class="p-2 text-slate-400 hover:text-slate-900 text-left">
                        <span class="material-symbols-outlined text-xl text-left">${e?"close":"edit"}</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">

                <!-- Store Header Card -->
                <div class="p-6 border-b border-slate-100 text-left">
                    <div class="card p-6 border-2 border-slate-900 shadow-xl text-left">
                        <div class="flex items-start gap-4 text-left">
                            <div class="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 text-left">
                                <span class="material-icons-outlined text-3xl text-white text-left">store</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <h3 class="text-lg font-black text-slate-900 mb-1 truncate text-left">${a.retailer_name||"Store Name"}</h3>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 text-left">${a.retailer_code||"N/A"}</p>
                                <div class="flex items-center gap-2 text-left">
                                    <span class="px-2 py-0.5 bg-slate-900 text-white rounded text-[8px] font-black uppercase text-left">${a.status||"Active"}</span>
                                    <span class="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[8px] font-black uppercase text-left">${a.retailer_category||"Retailer"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Business Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Business Information
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${U("Contact Person",a.contact_person||"N/A","person")}
                        ${U("Email",a.email||"N/A","email")}
                        ${U("Mobile",a.mobile_number||"N/A","phone")}
                        ${U("Phone",a.phone_number||"N/A","call")}
                    </div>
                </div>

                <!-- Address Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Address
                    </p>

                    <div class="card p-4 border-slate-100 text-left">
                        <div class="space-y-2 text-left">
                            <p class="text-sm font-bold text-slate-900 text-left">${a.address_line_1||"N/A"}</p>
                            ${a.address_line_2?`<p class="text-sm font-bold text-slate-700 text-left">${a.address_line_2}</p>`:""}
                            <p class="text-xs text-slate-500 text-left">
                                ${a.area_name?a.area_name+", ":""}${a.city_name||"N/A"}, ${a.district_name||""} ${a.state_name||"N/A"} - ${a.pin_code||"N/A"}
                            </p>
                            <p class="text-xs font-bold text-slate-400 text-left">${a.country_name||"India"}</p>
                        </div>
                    </div>
                </div>

                <!-- Financial Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Financial Details
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${U("GST Number",a.vat_number||"N/A","receipt_long")}
                        ${U("PAN Number",a.pan_number||"N/A","credit_card")}
                    </div>
                </div>

                <!-- Bank Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Bank Details
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${U("Bank Name",a.bank_name||"N/A","account_balance")}
                        ${U("Account Holder",a.bank_account_holder||"N/A","person")}
                        ${U("Account Number",a.bank_account_number||"N/A","numbers")}
                        ${U("IFSC Code",a.bank_ifsc||"N/A","tag")}
                        ${U("Branch",a.bank_branch||"N/A","location_on")}
                    </div>
                </div>

                <!-- Hierarchy Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Hierarchy & Reporting
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${U("Parent Retailer",a.parent_retailer_name||"N/A","store")}
                        ${U("National Distributor",a.nd_name||"N/A","business")}
                        ${U("Regional Distributor",a.rds_name||"N/A","corporate_fare")}
                        ${U("Salesman",a.salesman_name||"N/A","badge")}
                        ${U("Reporting To",a.reporting_to_name||"N/A","supervisor_account")}
                    </div>
                </div>

                <!-- Business Metrics -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Business Metrics
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${U("CSA on Counter",a.csa_on_counter||"N/A","groups")}
                        ${U("Potential Volume",a.counter_potential_volume||"N/A","inventory")}
                        ${U("Potential Value",a.counter_potential_value||"N/A","payments")}
                    </div>
                </div>

                <!-- Category & Classification -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Category & Classification
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${U("Category",a.retailer_category||"N/A","category")}
                        ${U("Category 1",a.retailer_category1||"N/A","label")}
                        ${U("Classification",a.retailer_classification||"N/A","stars")}
                    </div>
                </div>

                <!-- Additional Information -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Additional Information
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${U("Date of Birth",a.dob?new Date(a.dob).toLocaleDateString():"N/A","cake")}
                        ${U("Creation Date",a.creation_date?new Date(a.creation_date).toLocaleDateString():"N/A","event")}
                        ${U("Onboarded At",a.onboarded_at?new Date(a.onboarded_at).toLocaleDateString():"N/A","schedule")}
                    </div>

                    ${a.approval_remarks?`
                        <div class="card p-4 bg-slate-50 border-slate-200 text-left">
                            <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Approval Remarks</p>
                            <p class="text-xs text-slate-900 text-left">${a.approval_remarks}</p>
                        </div>
                    `:""}
                </div>

                ${e?`
                    <!-- Edit Mode Actions -->
                    <div class="p-6 border-t border-slate-200 text-left">
                        <button onclick="window.toast.info('Edit functionality coming soon!')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform text-center">
                            Save Changes
                        </button>
                    </div>
                `:""}
            </div>
        </div>
    `:`
            <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
                <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                    <div class="flex items-center justify-between mb-6 text-left">
                        <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                        <div class="text-center translate-x-1">
                            <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Store Profile</h2>
                            <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Business Information</p>
                        </div>
                        <div class="w-8"></div>
                    </div>
                </header>

                <div class="flex-1 overflow-y-auto custom-scrollbar p-6 flex items-center justify-center text-center">
                    <div class="animate-pulse">
                        <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="material-icons-outlined text-3xl text-slate-300">store</span>
                        </div>
                        <p class="text-sm font-black text-slate-400">Loading store information...</p>
                        <p class="text-[9px] text-slate-300 mt-2">Please wait</p>
                    </div>
                </div>
            </div>
        `}function U(e,t,s){return`
        <div class="card p-3 border-slate-100 text-left">
            <div class="flex items-center gap-2 mb-1 text-left">
                <span class="material-icons-outlined text-slate-400 text-sm text-left">${s}</span>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${e}</p>
            </div>
            <p class="text-sm font-bold text-slate-900 truncate text-left">${t}</p>
        </div>
    `}function _p(){var l;const e=(()=>{var d;const i=window.getCache(),r=localStorage.getItem("retaileros_retailer_id");return((d=i.retailers)==null?void 0:d.find(c=>c.id===r))||{}})(),s=((l=window.getCache().retailerSettings)==null?void 0:l.security)||{},a={otp_on_login:s.otp_on_login??!0,email_verification:s.email_verification??!1,auto_logout_timer:s.auto_logout_timer??"30 min",remember_device:s.remember_device??!0},n=["15 min","30 min","1 hour","4 hours","Never"];return`
        <div data-settings-category="security" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-left">Security</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Access & Protection</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Store PIN -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Store PIN
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                <span class="material-icons-outlined text-slate-500">pin</span>
                            </div>
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">4-Digit Access PIN</p>
                                <p class="text-[9px] font-bold text-slate-400">Last changed 30 days ago</p>
                            </div>
                        </div>
                        <button onclick="window.toast.info('PIN management coming soon')" class="px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all">Change</button>
                    </div>
                </div>

                <!-- Two-Factor Authentication -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Two-Factor Authentication
                    </p>
                    <div class="card p-4 space-y-4 text-left">
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">verified_user</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">OTP on Login</p>
                                    <p class="text-[9px] font-bold text-slate-400">SMS to ${e.mobile_number||"••••••••••"}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="otp_on_login" class="sr-only peer" ${a.otp_on_login?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full peer-focus:ring-2 peer-focus:ring-slate-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">email</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">Email Verification</p>
                                    <p class="text-[9px] font-bold text-slate-400">${e.email||"Not configured"}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="email_verification" class="sr-only peer" ${a.email_verification?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full peer-focus:ring-2 peer-focus:ring-slate-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Session Management -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Session Management
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Logout Timer</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically logout after inactivity</p>
                            </div>
                            <select data-field="auto_logout_timer" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${n.map(i=>`<option ${a.auto_logout_timer===i?"selected":""}>${i}</option>`).join("")}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Remember Device</p>
                                <p class="text-[9px] font-bold text-slate-400">Skip 2FA on trusted devices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="remember_device" class="sr-only peer" ${a.remember_device?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Active Devices -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Active Devices
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-white">computer</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">This Browser</p>
                                    <p class="text-[9px] font-bold text-slate-900">Active Now</p>
                                </div>
                            </div>
                            <span class="text-[8px] font-bold text-slate-300 uppercase">Current</span>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-400">smartphone</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">Mobile App</p>
                                    <p class="text-[9px] font-bold text-slate-400">Last active 2 hours ago</p>
                                </div>
                            </div>
                            <button onclick="window.toast.info('Device revoked')" class="px-3 py-1.5 bg-slate-100 text-slate-400 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">Revoke</button>
                        </div>
                    </div>
                </div>

                <!-- Login History -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Recent Login History
                    </p>
                    <div class="space-y-2 text-left">
                        ${[{time:"Today, 10:30 AM",device:"Chrome / macOS",ip:"192.168.1.x",status:"success"},{time:"Yesterday, 6:15 PM",device:"Safari / iPhone",ip:"49.36.xx.xx",status:"success"},{time:"Yesterday, 2:00 PM",device:"Chrome / Windows",ip:"103.xx.xx.xx",status:"failed"},{time:"3 days ago",device:"Chrome / macOS",ip:"192.168.1.x",status:"success"}].map(i=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="text-left">
                                    <p class="text-[10px] font-bold text-slate-900">${i.device}</p>
                                    <p class="text-[8px] font-bold text-slate-400">${i.time} &middot; ${i.ip}</p>
                                </div>
                                <span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${i.status==="success"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"}">${i.status}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('security')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Security Settings
                    </button>
                </div>
            </div>
        </div>
    `}function Sp(){var i;const e=(()=>{var c;const r=window.getCache(),d=localStorage.getItem("retaileros_retailer_id");return((c=r.retailers)==null?void 0:c.find(u=>u.id===d))||{}})(),s=((i=window.getCache().retailerSettings)==null?void 0:i.alerts)||{},a={whatsapp_notifications:s.whatsapp_notifications??!0,sms_notifications:s.sms_notifications??!1,email_notifications:s.email_notifications??!0,push_notifications:s.push_notifications??!0,low_stock_warning:s.low_stock_warning??!0,low_stock_threshold:s.low_stock_threshold??"5 units",out_of_stock_alert:s.out_of_stock_alert??!0,daily_sales_summary:s.daily_sales_summary??!0,high_value_sale_threshold:s.high_value_sale_threshold??"₹25,000",new_sale_notification:s.new_sale_notification??!1,birthday_reminders:s.birthday_reminders??!0,inactive_customer_alert:s.inactive_customer_alert??!0,repair_status_change:s.repair_status_change??!0,installation_due:s.installation_due??!0},n=["3 units","5 units","10 units","20 units"],l=["₹10,000","₹25,000","₹50,000","₹1,00,000"];return`
        <div data-settings-category="alerts" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Alerts</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Notifications & Reminders</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Notification Channels -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Notification Channels
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{name:"WhatsApp",field:"whatsapp_notifications",desc:`Messages to ${e.mobile_number||"••••••••••"}`,icon:"chat",color:"green"},{name:"SMS",field:"sms_notifications",desc:"Text alerts for critical events",icon:"sms",color:"blue"},{name:"Email",field:"email_notifications",desc:e.email||"Not configured",icon:"email",color:"indigo"},{name:"Push Notifications",field:"push_notifications",desc:"Browser & mobile push alerts",icon:"notifications_active",color:"amber"}].map(r=>`
                            <div class="card p-4 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                        <span class="material-icons-outlined text-slate-500">${r.icon}</span>
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${r.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${r.desc}</p>
                                    </div>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" data-field="${r.field}" class="sr-only peer" ${a[r.field]?"checked":""}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Inventory Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Inventory Alerts
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Warning</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when product stock falls below threshold</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="low_stock_warning" class="sr-only peer" ${a.low_stock_warning?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Threshold</p>
                                <p class="text-[9px] font-bold text-slate-400">Minimum units before alert triggers</p>
                            </div>
                            <select data-field="low_stock_threshold" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${n.map(r=>`<option ${a.low_stock_threshold===r?"selected":""}>${r}</option>`).join("")}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Out of Stock Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Immediate alert when stock hits zero</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="out_of_stock_alert" class="sr-only peer" ${a.out_of_stock_alert?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Sales Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Sales & Revenue
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Daily Sales Summary</p>
                                <p class="text-[9px] font-bold text-slate-400">End-of-day report via WhatsApp at 9 PM</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="daily_sales_summary" class="sr-only peer" ${a.daily_sales_summary?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">High-Value Sale Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Notify when sale exceeds threshold</p>
                            </div>
                            <select data-field="high_value_sale_threshold" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${l.map(r=>`<option ${a.high_value_sale_threshold===r?"selected":""}>${r}</option>`).join("")}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">New Sale Notification</p>
                                <p class="text-[9px] font-bold text-slate-400">Real-time alert on every new sale</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="new_sale_notification" class="sr-only peer" ${a.new_sale_notification?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Customer Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Customer Engagement
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Birthday Reminders</p>
                                <p class="text-[9px] font-bold text-slate-400">Get notified on customer birthdays</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="birthday_reminders" class="sr-only peer" ${a.birthday_reminders?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Inactive Customer Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Flag customers with no purchase in 90 days</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="inactive_customer_alert" class="sr-only peer" ${a.inactive_customer_alert?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Repair & Service -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Repairs & Service
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Repair Status Change</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when repair job moves to next stage</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="repair_status_change" class="sr-only peer" ${a.repair_status_change?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Installation Due</p>
                                <p class="text-[9px] font-bold text-slate-400">Reminder 1 day before scheduled installation</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="installation_due" class="sr-only peer" ${a.installation_due?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('alerts')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Alert Preferences
                    </button>
                </div>
            </div>
        </div>
    `}function Ep(){var u;const e=(()=>{var v;const x=window.getCache(),b=localStorage.getItem("retaileros_retailer_id");return((v=x.retailers)==null?void 0:v.find(w=>w.id===b))||{}})(),s=((u=window.getCache().retailerSettings)==null?void 0:u.taxes)||{},a={gstin:s.gstin??e.vat_number??"",pan:s.pan??e.pan_number??"",registration_type:s.registration_type??"Regular",show_tax_breakdown:s.show_tax_breakdown??!0,tax_inclusive_pricing:s.tax_inclusive_pricing??!0,invoice_prefix:s.invoice_prefix??`${(e.retailer_code||"ROS").split("-")[0]}-INV-`,e_invoice_enabled:s.e_invoice_enabled??!1},n=s.gst_rates||{smartphones:18,laptops_tablets:18,audio_wearables:18,television:28,air_conditioners:28,appliances:28,accessories:18,services_repairs:18},l=s.hsn_codes||{mobile_phones:"8517",laptops:"8471",headphones_audio:"8518",television:"8528",air_conditioners:"8415",washing_machines:"8450",refrigerators:"8418",repair_services:"9987"},i=[0,5,12,18,28],r=[{label:"Smartphones",key:"smartphones"},{label:"Laptops & Tablets",key:"laptops_tablets"},{label:"Audio & Wearables",key:"audio_wearables"},{label:"Television",key:"television"},{label:"Air Conditioners",key:"air_conditioners"},{label:"Appliances (Washing Machine, Fridge)",key:"appliances"},{label:"Accessories & Cables",key:"accessories"},{label:"Services & Repairs",key:"services_repairs"}],d=[{label:"Mobile Phones",key:"mobile_phones"},{label:"Laptops",key:"laptops"},{label:"Headphones & Audio",key:"headphones_audio"},{label:"Television",key:"television"},{label:"Air Conditioners",key:"air_conditioners"},{label:"Washing Machines",key:"washing_machines"},{label:"Refrigerators",key:"refrigerators"},{label:"Repair Services",key:"repair_services"}],c=["Regular","Composition","Unregistered"];return window.saveTaxSettings=async function(){var v,w,g,_,E,T,P;const x=document.querySelector('[data-settings-category="taxes"]');if(!x)return;const b={gstin:((v=x.querySelector('[data-field="gstin"]'))==null?void 0:v.value)||"",pan:((w=x.querySelector('[data-field="pan"]'))==null?void 0:w.value)||"",registration_type:((g=x.querySelector('[data-field="registration_type"]'))==null?void 0:g.value)||"Regular",show_tax_breakdown:((_=x.querySelector('[data-field="show_tax_breakdown"]'))==null?void 0:_.checked)??!0,tax_inclusive_pricing:((E=x.querySelector('[data-field="tax_inclusive_pricing"]'))==null?void 0:E.checked)??!0,invoice_prefix:((T=x.querySelector('[data-field="invoice_prefix"]'))==null?void 0:T.value)||"ROS-INV-",e_invoice_enabled:((P=x.querySelector('[data-field="e_invoice_enabled"]'))==null?void 0:P.checked)??!1,gst_rates:{},hsn_codes:{}};x.querySelectorAll("[data-gst-key]").forEach(V=>{const re=parseInt(V.value);b.gst_rates[V.dataset.gstKey]=isNaN(re)?18:re}),x.querySelectorAll("[data-hsn-key]").forEach(V=>{b.hsn_codes[V.dataset.hsnKey]=V.value});try{await A.settings.save("taxes",b),window._db_cache.retailerSettings||(window._db_cache.retailerSettings={}),window._db_cache.retailerSettings.taxes=b;const V=(()=>{var Qt;const re=window.getCache(),Kt=localStorage.getItem("retaileros_retailer_id");return((Qt=re.retailers)==null?void 0:Qt.find(Ls=>Ls.id===Kt))||{}})();A.activityLogs.add({action:"settings",detail:"Updated tax configuration",user_name:V.contact_person||"Owner",icon:"percent",color:"slate"}),window.toast&&window.toast.success("Tax settings saved")}catch(V){console.error("Failed to save tax settings:",V),window.toast&&window.toast.error("Failed to save tax settings")}},`
        <div data-settings-category="taxes" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Taxes</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">GST & Tax Configuration</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- GST Registration -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> GST Registration
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">receipt_long</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">GSTIN</p>
                            </div>
                            <input type="text" data-field="gstin" value="${a.gstin}" placeholder="e.g. 27AABCT1234F1Z5" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">credit_card</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">PAN Number</p>
                            </div>
                            <input type="text" data-field="pan" value="${a.pan}" placeholder="e.g. AABCT1234F" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">location_on</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">State</p>
                            </div>
                            <p class="text-sm font-bold text-slate-900">${e.state_name||"Not set"}</p>
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">category</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Registration Type</p>
                            </div>
                            <select data-field="registration_type" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                                ${c.map(x=>`<option ${a.registration_type===x?"selected":""}>${x}</option>`).join("")}
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Tax Rates by Category -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Tax Rates by Category
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${r.map(x=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                                        <span class="text-[10px] font-black text-slate-500">${n[x.key]}%</span>
                                    </div>
                                    <p class="text-xs font-bold text-slate-900">${x.label}</p>
                                </div>
                                <select data-gst-key="${x.key}" class="px-3 py-1.5 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                    ${i.map(b=>`<option value="${b}" ${n[x.key]===b?"selected":""}>${b===0?"0% (Exempt)":b+"% GST"}</option>`).join("")}
                                </select>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- HSN/SAC Codes -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> HSN / SAC Codes
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${d.map(x=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <p class="text-xs font-bold text-slate-900">${x.label}</p>
                                <input type="text" data-hsn-key="${x.key}" value="${l[x.key]}" class="w-20 text-right px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Invoice Settings -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Invoice Configuration
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show Tax Breakdown</p>
                                <p class="text-[9px] font-bold text-slate-400">Display CGST + SGST split on invoices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="show_tax_breakdown" class="sr-only peer" ${a.show_tax_breakdown?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Tax Inclusive Pricing</p>
                                <p class="text-[9px] font-bold text-slate-400">Product prices already include GST</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="tax_inclusive_pricing" class="sr-only peer" ${a.tax_inclusive_pricing?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Prefix</p>
                                <p class="text-[9px] font-bold text-slate-400">Prefix for invoice numbers</p>
                            </div>
                            <input type="text" data-field="invoice_prefix" value="${a.invoice_prefix}" class="w-28 text-right px-3 py-2 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">E-Invoice (IRN)</p>
                                <p class="text-[9px] font-bold text-slate-400">Enable e-invoicing via NIC portal</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="e_invoice_enabled" class="sr-only peer" ${a.e_invoice_enabled?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveTaxSettings()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Tax Configuration
                    </button>
                </div>
            </div>
        </div>
    `}function $p(){const t=window.getCache().retailerPlugins||[],s={};t.forEach(d=>{s[d.plugin_key]=d.status});const a=[{label:"Payments & POS",plugins:[{name:"Pine Labs POS",key:"pine_labs_pos",desc:"Accept card, UPI, wallet & EMI payments on Pine Labs terminals. Auto-push sale amount to device, capture transaction ID and settle instantly.",icon:"point_of_sale",color:"blue"},{name:"Razorpay Payments",key:"razorpay",desc:"Accept UPI, cards, net banking & wallets online. Auto-reconcile payments with sales records.",icon:"account_balance_wallet",color:"indigo"},{name:"PhonePe POS",key:"phonepe_pos",desc:"QR-based payments at counter. Instant settlement and daily reconciliation reports.",icon:"qr_code_scanner",color:"purple"},{name:"Paytm for Business",key:"paytm_business",desc:"Accept Paytm wallet, UPI & Paytm Postpaid. Sound box alerts and auto-settlement.",icon:"payments",color:"blue"}]},{label:"Consumer Finance & EMI",plugins:[{name:"Bajaj Finserv EMI",key:"bajaj_finserv_emi",desc:"Offer No-Cost EMI & low-cost EMI on Bajaj Finserv cards. Instant approval at checkout, auto-capture EMI tenure and subvention.",icon:"credit_score",color:"blue"},{name:"HDFC Consumer Finance",key:"hdfc_consumer_finance",desc:"Enable HDFC consumer durable loans at POS. Approve customers via Aadhar OTP, auto-link loan ID to sale invoice.",icon:"account_balance",color:"indigo"},{name:"IDFC First Finance",key:"idfc_first_finance",desc:"Consumer durable loans with instant digital approval. Support for 3–24 month tenures on electronics & appliances.",icon:"savings",color:"purple"},{name:"Home Credit",key:"home_credit",desc:"EMI for non-card customers. Aadhar-based approval in 5 minutes for smartphones, appliances & electronics.",icon:"approval",color:"amber"},{name:"ZestMoney / DMI Finance",key:"zestmoney_dmi",desc:"Buy Now Pay Later and no-cost EMI for online & in-store. Instant credit line for customers without credit cards.",icon:"currency_rupee",color:"green"}]},{label:"Telecom & Recharge",plugins:[{name:"Jio Partner",key:"jio_partner",desc:"Activate Jio SIMs, process recharges & sell JioFiber plans from your store. Earn commission on every transaction.",icon:"sim_card",color:"blue"},{name:"Airtel Mitra",key:"airtel_mitra",desc:"Activate Airtel prepaid & postpaid connections, process recharges, sell Airtel Xstream & DTH plans.",icon:"cell_tower",color:"red"},{name:"Vi (Vodafone Idea)",key:"vi_vodafone",desc:"Process Vi recharges, new SIM activations & postpaid upgrades. Track commissions per transaction.",icon:"signal_cellular_alt",color:"rose"},{name:"BSNL Retailer",key:"bsnl_retailer",desc:"BSNL SIM activations, recharges & broadband plan bookings. Government ID verification support.",icon:"router",color:"slate"},{name:"Multi-Recharge API",key:"multi_recharge_api",desc:"Unified recharge API for all operators — prepaid, postpaid, DTH, broadband & electricity bills from one dashboard.",icon:"bolt",color:"amber"}]},{label:"Brand & Warranty",plugins:[{name:"Samsung Partner Portal",key:"samsung_partner",desc:"Sync Samsung product catalog, claim brand warranty registrations & submit display incentive claims.",icon:"devices",color:"blue"},{name:"Xiaomi Retail Suite",key:"xiaomi_retail",desc:"Access Mi product feed, process Mi Extended Warranty activations & sync sell-out data for incentives.",icon:"smartphone",color:"orange"},{name:"OneAssist / Onsitego",key:"oneassist_onsitego",desc:"Sell extended warranty & damage protection plans at POS. Instant policy issuance linked to sale invoice.",icon:"verified_user",color:"green"}]},{label:"Communication",plugins:[{name:"WhatsApp Business",key:"whatsapp_business",desc:"Send automated messages, invoices & reminders to customers via WhatsApp Business API.",icon:"chat",color:"green"},{name:"MSG91 SMS",key:"msg91_sms",desc:"Transactional SMS for OTPs, invoices, payment confirmations & promotional campaigns.",icon:"sms",color:"amber"}]},{label:"Accounting & ERP",plugins:[{name:"Tally Integration",key:"tally",desc:"Auto-sync sales, expenses & GST data directly into Tally ERP for seamless accounting.",icon:"calculate",color:"blue"},{name:"Google Sheets",key:"google_sheets",desc:"Export daily sales, inventory & customer data to Google Sheets automatically.",icon:"table_chart",color:"green"}]},{label:"Hardware & Logistics",plugins:[{name:"Thermal Printer",key:"thermal_printer",desc:"Connect Bluetooth or USB receipt printers for instant POS invoice printing.",icon:"print",color:"slate"},{name:"Barcode Scanner",key:"barcode_scanner",desc:"Pair Bluetooth or USB barcode scanners. Auto-lookup products by EAN/UPC code during billing.",icon:"qr_code",color:"slate"},{name:"Shiprocket",key:"shiprocket",desc:"Ship products to customers with tracking. Auto-generate shipping labels from sales.",icon:"local_shipping",color:"orange"}]}];a.forEach(d=>{d.plugins.forEach(c=>{c.status=s[c.key]||"available"})});const n=a.flatMap(d=>d.plugins),l=n.filter(d=>d.status==="connected").length,i=n.filter(d=>d.status==="available").length;window._togglePlugin=async function(d,c,u){const x=u==="connected"?"available":"connected";try{await A.plugins.upsert(d,x,null);const b=(window._db_cache.retailerPlugins||[]).findIndex(w=>w.plugin_key===d);b>=0?window._db_cache.retailerPlugins[b].status=x:window._db_cache.retailerPlugins.push({plugin_key:d,status:x});const v=(()=>{var _;const w=window.getCache(),g=localStorage.getItem("retaileros_retailer_id");return((_=w.retailers)==null?void 0:_.find(E=>E.id===g))||{}})();A.activityLogs.add({action:"plugin",detail:`${x==="connected"?"Connected":"Disconnected"} ${c}`,user_name:v.contact_person||"Owner",icon:"extension",color:"slate"}),window.toast&&window.toast.success(x==="connected"?`${c} connected`:`${c} disconnected`),window.setSettingsView&&window.setSettingsView("plugins")}catch(b){console.error("Plugin toggle failed:",b),window.toast&&window.toast.error("Failed to update plugin")}};const r=d=>{const c=d.status==="connected";return`
            <div class="card p-5 ${c?"border-slate-200 bg-slate-50/30":"hover:border-slate-300"} transition-all text-left">
                <div class="flex items-start justify-between text-left">
                    <div class="flex items-start gap-4 text-left">
                        <div class="w-12 h-12 ${c?"bg-slate-100":"bg-slate-50"} rounded-2xl flex items-center justify-center shrink-0">
                            <span class="material-icons-outlined text-slate-500 text-xl">${d.icon}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-sm font-black text-slate-900">${d.name}</p>
                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${d.desc}</p>
                        </div>
                    </div>
                    ${c?'<span class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-900 text-white">Active</span>':`<button onclick="window._togglePlugin('${d.key}','${d.name.replace(/'/g,"\\'")}','available')" class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all">Connect</button>`}
                </div>
                ${c?`
                    <div class="flex gap-2 mt-4 pl-16 text-left">
                        <button onclick="window.toast.info('Plugin settings coming soon')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">Configure</button>
                        <button onclick="window._togglePlugin('${d.key}','${d.name.replace(/'/g,"\\'")}','connected')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">Disconnect</button>
                    </div>
                `:""}
            </div>
        `};return`
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
                            <p class="text-2xl font-black text-slate-900">${l}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Connected</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${i}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Available</p>
                        </div>
                    </div>
                </div>

                <!-- Categories -->
                ${a.map(d=>`
                    <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> ${d.label}
                        </p>
                        <div class="space-y-3 text-left">
                            ${d.plugins.map(c=>r(c)).join("")}
                        </div>
                    </div>
                `).join("")}

                <div class="p-6 pt-2 text-left">
                    <div class="card p-4 bg-slate-50 border-transparent text-center">
                        <span class="material-icons-outlined text-slate-300 text-2xl mb-2">extension</span>
                        <p class="text-[10px] font-black text-slate-400">More integrations coming soon</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Zoho Books, BusyWin, Marg ERP, Vivo, Oppo & more</p>
                    </div>
                </div>
            </div>
        </div>
    `}function Ip(){const e=(()=>{var u;const d=window.getCache(),c=localStorage.getItem("retaileros_retailer_id");return((u=d.retailers)==null?void 0:u.find(x=>x.id===c))||{}})(),t=window.getCache(),s=t.teamMembers||[],a=t.teamRoles||[],n=s.length>0?s:[{id:"owner",name:e.contact_person||"Store Owner",role:"Owner",phone:e.mobile_number||"—",status:"active"}],l=a.length>0?a.map(d=>{let c=d.permissions;try{c=typeof c=="string"?JSON.parse(c):c}catch{c={}}return{...d,permissions:c,count:n.filter(u=>u.role===d.name).length}}):[{name:"Owner",count:n.filter(d=>d.role==="Owner").length||1,color:"slate",description:"Full access to all modules, settings & billing"},{name:"Store Manager",count:n.filter(d=>d.role==="Store Manager").length,color:"slate",description:"Sales, inventory, customers, reports. No billing or team settings"},{name:"Sales Executive",count:n.filter(d=>d.role==="Sales Executive").length,color:"slate",description:"New sales, customer lookup, inquiries. No reports or settings"},{name:"Technician",count:n.filter(d=>d.role==="Technician").length,color:"slate",description:"Repairs module only. View assigned jobs, update status"}],i=l.length>0?l.map(d=>d.name):["Owner","Store Manager","Sales Executive","Technician"];window._addTeamMember=async function(){const d=prompt("Team member name:");if(!d||!d.trim())return;const c=prompt("Phone number:"),u=prompt(`Role (${i.join(", ")}):`);if(!u)return;const x=`tm_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;try{await A.teamMembers.add({id:x,name:d.trim(),role:u,phone:c||null,email:null,status:"invited"}),window._db_cache.teamMembers||(window._db_cache.teamMembers=[]),window._db_cache.teamMembers.push({id:x,name:d.trim(),role:u,phone:c,status:"invited"});const b=(()=>{var g;const v=window.getCache(),w=localStorage.getItem("retaileros_retailer_id");return((g=v.retailers)==null?void 0:g.find(_=>_.id===w))||{}})();A.activityLogs.add({action:"team",detail:`Added team member ${d.trim()}`,user_name:b.contact_person||"Owner",icon:"person_add",color:"slate"}),window.toast&&window.toast.success(`${d.trim()} invited`),window.setSettingsView&&window.setSettingsView("teams")}catch(b){console.error("Add member failed:",b),window.toast&&window.toast.error("Failed to add member")}},window._removeTeamMember=async function(d,c){if(confirm(`Remove ${c} from the team?`))try{await A.teamMembers.delete(d),window._db_cache.teamMembers&&(window._db_cache.teamMembers=window._db_cache.teamMembers.filter(x=>x.id!==d));const u=(()=>{var v;const x=window.getCache(),b=localStorage.getItem("retaileros_retailer_id");return((v=x.retailers)==null?void 0:v.find(w=>w.id===b))||{}})();A.activityLogs.add({action:"team",detail:`Removed team member ${c}`,user_name:u.contact_person||"Owner",icon:"person_remove",color:"slate"}),window.toast&&window.toast.success(`${c} removed`),window.setSettingsView&&window.setSettingsView("teams")}catch(u){console.error("Remove member failed:",u),window.toast&&window.toast.error("Failed to remove member")}};const r={Owner:"slate","Store Manager":"slate","Sales Executive":"slate",Technician:"slate"};return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Teams</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Staff & Access Control</p>
                    </div>
                    <button onclick="window._addTeamMember()" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">person_add</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Team Stats -->
                <div class="p-6 pb-0 text-left">
                    <div class="grid grid-cols-3 gap-3 text-left">
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${n.filter(d=>d.status==="active").length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-400">${n.filter(d=>d.status==="invited").length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Pending</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${l.length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Roles</p>
                        </div>
                    </div>
                </div>

                <!-- Team Members -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <div class="flex items-center justify-between text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Team Members
                        </p>
                    </div>
                    <div class="space-y-3 text-left">
                        ${n.map((d,c)=>{const u=d.role==="Owner"&&c===0;return`
                            <div class="card p-4 flex items-center justify-between text-left ${d.status==="invited"?"border-dashed border-slate-200 bg-slate-50/20":""}">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                        <span class="material-icons-outlined ${u?"text-slate-500":"text-slate-400"}">person</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="flex items-center gap-2 text-left">
                                            <p class="text-xs font-black text-slate-900">${d.name}</p>
                                            ${u?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">You</span>':""}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400">${d.role} &middot; ${d.phone||"—"}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-left">
                                    ${d.status==="invited"?'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Invited</span>':'<span class="w-2 h-2 bg-slate-900 rounded-full"></span>'}
                                    ${u?"":`<button onclick="window._removeTeamMember('${d.id}','${(d.name||"").replace(/'/g,"\\'")}')" class="text-slate-300 hover:text-slate-900 transition-colors"><span class="material-icons-outlined text-sm">close</span></button>`}
                                </div>
                            </div>
                        `}).join("")}
                    </div>
                </div>

                <!-- Roles & Permissions -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Roles & Permissions
                    </p>
                    <div class="space-y-3 text-left">
                        ${l.map(d=>{const c=d.color||r[d.name]||"slate",u=d.description||(typeof d.permissions=="object"?Object.keys(d.permissions).join(", "):String(d.permissions||"")),x=d.count||0;return`
                            <div class="card p-4 text-left hover:border-slate-300 transition-all cursor-pointer" onclick="window.toast.info('Role editor coming soon')">
                                <div class="flex items-center justify-between mb-2 text-left">
                                    <div class="flex items-center gap-2 text-left">
                                        <span class="w-3 h-3 bg-${c}-400 rounded-full"></span>
                                        <p class="text-xs font-black text-slate-900">${d.name}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${x} member${x!==1?"s":""}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-400 pl-5">${u}</p>
                            </div>
                        `}).join("")}
                    </div>
                </div>

                <!-- Module Access Matrix -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Quick Access Matrix
                    </p>
                    <div class="card p-4 overflow-x-auto text-left">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                                    <th class="pb-3 pr-4">Module</th>
                                    <th class="pb-3 text-center">Owner</th>
                                    <th class="pb-3 text-center">Manager</th>
                                    <th class="pb-3 text-center">Sales</th>
                                    <th class="pb-3 text-center">Tech</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[{mod:"Sales Desk",o:!0,m:!0,s:!0,t:!1},{mod:"Customers",o:!0,m:!0,s:!0,t:!1},{mod:"Inventory",o:!0,m:!0,s:!1,t:!1},{mod:"Reports",o:!0,m:!0,s:!1,t:!1},{mod:"Repairs",o:!0,m:!0,s:!1,t:!0},{mod:"Automation",o:!0,m:!0,s:!1,t:!1},{mod:"Settings",o:!0,m:!1,s:!1,t:!1}].map(d=>`
                                    <tr class="border-t border-slate-50">
                                        <td class="py-2.5 pr-4 text-[10px] font-bold text-slate-900">${d.mod}</td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.o?"text-slate-900":"text-slate-300"}">${d.o?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.m?"text-slate-900":"text-slate-300"}">${d.m?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.s?"text-slate-900":"text-slate-300"}">${d.s?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.t?"text-slate-900":"text-slate-300"}">${d.t?"check_circle":"cancel"}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window._addTeamMember()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">person_add</span> Invite Team Member
                    </button>
                </div>
            </div>
        </div>
    `}function Rp(){(()=>{var g;const v=window.getCache(),w=localStorage.getItem("retaileros_retailer_id");return((g=v.retailers)==null?void 0:g.find(_=>_.id===w))||{}})();const t=window.getCache().activityLogs||[],s=new Date,a=t.length>0?t.map(v=>({action:v.action||"Activity",detail:v.detail||"",user:v.user_name||"System",icon:v.icon||"info",color:v.color||"slate",time:new Date(v.created_at)})):[{action:"No activity yet",detail:"Actions like sales, settings changes, and logins will appear here",user:"System",icon:"info",color:"slate",time:s}],n=v=>{const w=Math.floor((s-v)/6e4);return w<1?"Just now":w<60?`${w}m ago`:w<1440?`${Math.floor(w/60)}h ago`:w<2880?"Yesterday":`${Math.floor(w/1440)}d ago`},l=v=>v.toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}),i=s.toDateString(),r=new Date(s);r.setDate(r.getDate()-1);const d=r.toDateString(),c=a.filter(v=>v.time.toDateString()===i),u=a.filter(v=>v.time.toDateString()===d),x=a.filter(v=>v.time.toDateString()!==i&&v.time.toDateString()!==d),b=(v,w)=>`
        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
            <div class="w-8 h-8 bg-${v.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-icons-outlined text-${v.color}-500 text-sm">${v.icon}</span>
            </div>
            <div class="flex-1 min-w-0 text-left">
                <div class="flex items-start justify-between gap-2 text-left">
                    <p class="text-[11px] font-black text-slate-900">${v.action}</p>
                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${w?n(v.time):l(v.time)}</span>
                </div>
                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${v.detail}</p>
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${v.user} &middot; ${l(v.time)}</p>
            </div>
        </div>
    `;return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Activity Logs</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Audit Trail</p>
                    </div>
                    <button onclick="window.toast.info('Export coming soon')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">download</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                ${c.length>0?`
                    <div class="px-6 pt-4 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Today</p>
                    </div>
                    <div class="px-6 text-left">
                        ${c.map(v=>b(v,!0)).join("")}
                    </div>
                `:""}

                ${u.length>0?`
                    <div class="px-6 pt-6 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Yesterday</p>
                    </div>
                    <div class="px-6 text-left">
                        ${u.map(v=>b(v,!1)).join("")}
                    </div>
                `:""}

                ${x.length>0?`
                    <div class="px-6 pt-6 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Older</p>
                    </div>
                    <div class="px-6 text-left">
                        ${x.map(v=>b(v,!1)).join("")}
                    </div>
                `:""}

                ${a.length===0?`
                    <div class="p-6 text-center">
                        <span class="material-icons-outlined text-slate-200 text-4xl mb-3">history</span>
                        <p class="text-[10px] font-black text-slate-400">No activity recorded yet</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Actions will appear here as you use the app</p>
                    </div>
                `:""}

                <div class="p-6 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Showing last ${a.length} activit${a.length===1?"y":"ies"}</p>
                </div>
            </div>
        </div>
    `}function Cp(){var n;const t=((n=window.getCache().retailerSettings)==null?void 0:n.language)||{},s={app_language:t.app_language??"en",whatsapp_lang:t.whatsapp_lang??"English",invoice_lang:t.invoice_lang??"English",currency_format:t.currency_format??"₹ INR",number_format:t.number_format??"Indian (1,00,000)",date_format:t.date_format??"DD/MM/YYYY",time_format:t.time_format??"12-hour",timezone:t.timezone??"IST (UTC+5:30)"},a=[{code:"en",name:"English",native:"English",flag:"🇬🇧"},{code:"hi",name:"Hindi",native:"हिन्दी",flag:"🇮🇳"},{code:"ta",name:"Tamil",native:"தமிழ்",flag:"🇮🇳"},{code:"te",name:"Telugu",native:"తెలుగు",flag:"🇮🇳"},{code:"kn",name:"Kannada",native:"ಕನ್ನಡ",flag:"🇮🇳"},{code:"ml",name:"Malayalam",native:"മലയാളം",flag:"🇮🇳"},{code:"mr",name:"Marathi",native:"मराठी",flag:"🇮🇳"},{code:"bn",name:"Bengali",native:"বাংলা",flag:"🇮🇳"},{code:"gu",name:"Gujarati",native:"ગુજરાતી",flag:"🇮🇳"},{code:"pa",name:"Punjabi",native:"ਪੰਜਾਬੀ",flag:"🇮🇳"}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left" data-settings-category="language">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Language</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Locale & Formats</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- App Language -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> App Language
                    </p>
                    <input type="text" data-field="app_language" value="${s.app_language}" class="hidden">
                    <div class="grid grid-cols-2 gap-2 text-left">
                        ${a.map(l=>`
                            <button data-lang-btn onclick="document.querySelector('[data-field=app_language]').value='${l.code}'; this.closest('[data-settings-category]').querySelectorAll('[data-lang-btn]').forEach(b => b.classList.remove('border-slate-900','bg-slate-50','ring-1','ring-slate-900')); this.classList.add('border-slate-900','bg-slate-50','ring-1','ring-slate-900')" class="card p-4 text-left flex items-center gap-3 transition-all ${s.app_language===l.code?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <span class="text-lg">${l.flag}</span>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${l.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${l.native}</p>
                                </div>
                                ${s.app_language===l.code?'<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>':""}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Customer Communication Language -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Customer Communication
                    </p>
                    <div class="card p-4 space-y-4 text-left">
                        <div class="flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">WhatsApp Messages</p>
                                <p class="text-[9px] font-bold text-slate-400">Language for automated customer messages</p>
                            </div>
                            <select data-field="whatsapp_lang" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.whatsapp_lang==="English"?"selected":""}>English</option>
                                <option ${s.whatsapp_lang==="Hindi"?"selected":""}>Hindi</option>
                                <option ${s.whatsapp_lang==="Regional (auto-detect)"?"selected":""}>Regional (auto-detect)</option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Language</p>
                                <p class="text-[9px] font-bold text-slate-400">Language on printed/PDF invoices</p>
                            </div>
                            <select data-field="invoice_lang" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.invoice_lang==="English"?"selected":""}>English</option>
                                <option ${s.invoice_lang==="Hindi"?"selected":""}>Hindi</option>
                                <option ${s.invoice_lang==="Bilingual (EN + HI)"?"selected":""}>Bilingual (EN + HI)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Regional Formats -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Regional Formats
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Currency</p>
                                <p class="text-[9px] font-bold text-slate-400">Display format for prices & amounts</p>
                            </div>
                            <select data-field="currency_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.currency_format==="₹ INR"?"selected":""}>&#8377; INR (Indian Rupee)</option>
                                <option ${s.currency_format==="$ USD"?"selected":""}>$ USD</option>
                                <option ${s.currency_format==="AED (Dirham)"?"selected":""}>AED (Dirham)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Number Format</p>
                                <p class="text-[9px] font-bold text-slate-400">Indian (1,00,000) vs International (100,000)</p>
                            </div>
                            <select data-field="number_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.number_format==="Indian (1,00,000)"?"selected":""}>Indian (1,00,000)</option>
                                <option ${s.number_format==="International (100,000)"?"selected":""}>International (100,000)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Date Format</p>
                                <p class="text-[9px] font-bold text-slate-400">How dates appear across the app</p>
                            </div>
                            <select data-field="date_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.date_format==="DD/MM/YYYY"?"selected":""}>DD/MM/YYYY</option>
                                <option ${s.date_format==="MM/DD/YYYY"?"selected":""}>MM/DD/YYYY</option>
                                <option ${s.date_format==="YYYY-MM-DD"?"selected":""}>YYYY-MM-DD</option>
                                <option ${s.date_format==="DD Mon YYYY"?"selected":""}>DD Mon YYYY</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Time Format</p>
                                <p class="text-[9px] font-bold text-slate-400">12-hour or 24-hour clock</p>
                            </div>
                            <select data-field="time_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option value="12-hour" ${s.time_format==="12-hour"?"selected":""}>12-hour (2:30 PM)</option>
                                <option value="24-hour" ${s.time_format==="24-hour"?"selected":""}>24-hour (14:30)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Timezone</p>
                                <p class="text-[9px] font-bold text-slate-400">Store timezone for scheduling</p>
                            </div>
                            <select data-field="timezone" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.timezone==="IST (UTC+5:30)"?"selected":""}>IST (UTC+5:30)</option>
                                <option ${s.timezone==="GST (UTC+4:00)"?"selected":""}>GST (UTC+4:00)</option>
                                <option ${s.timezone==="SGT (UTC+8:00)"?"selected":""}>SGT (UTC+8:00)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('language')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    `}function Ap(){var l,i,r,d,c,u,x;const e=window.getCache(),t={customers:((l=e.customers)==null?void 0:l.length)||0,sales:((i=e.sales)==null?void 0:i.length)||0,products:((r=e.products)==null?void 0:r.length)||0,automations:((d=e.automations)==null?void 0:d.length)||0,repairs:((c=e.repairs)==null?void 0:c.length)||0,inquiries:((u=e.inquiries)==null?void 0:u.length)||0},s=Object.values(t).reduce((b,v)=>b+v,0),a=((x=e.retailerSettings)==null?void 0:x.backup)||{},n={auto_backup_enabled:a.auto_backup_enabled??!0,backup_frequency:a.backup_frequency??"Weekly",send_to_email:a.send_to_email??!0,retention_period:a.retention_period??"90 days",export_format:a.export_format??"CSV (Excel-compatible)"};return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left" data-settings-category="backup">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Backup</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Data Export & Restore</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Data Overview -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Your Data
                    </p>
                    <div class="grid grid-cols-3 gap-2 text-left">
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.customers}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Customers</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.sales}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Sales</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.products}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Products</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.automations}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Automations</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.repairs}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Repairs</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${s}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Total</p>
                        </div>
                    </div>
                </div>

                <!-- Manual Export -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Export Data
                    </p>
                    <div class="space-y-3 text-left">
                        <p class="text-[10px] font-bold text-slate-500">Select what to include in your backup:</p>
                        ${[{name:"Customers & Groups",icon:"people",checked:!0},{name:"Sales & Invoices",icon:"receipt",checked:!0},{name:"Products & Inventory",icon:"inventory_2",checked:!0},{name:"Automations & Messages",icon:"smart_toy",checked:!0},{name:"Repairs & Service Jobs",icon:"build",checked:!1},{name:"Communication Logs",icon:"chat",checked:!1},{name:"Inquiries",icon:"help_outline",checked:!1}].map(b=>`
                            <div class="card p-3 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="material-icons-outlined text-slate-400 text-sm">${b.icon}</span>
                                    <p class="text-xs font-bold text-slate-900">${b.name}</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${b.checked?"checked":""}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join("")}
                    </div>
                    <div class="flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Export Format</p>
                        </div>
                        <select data-field="export_format" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option ${n.export_format==="CSV (Excel-compatible)"?"selected":""}>CSV (Excel-compatible)</option>
                            <option ${n.export_format==="JSON (Developer format)"?"selected":""}>JSON (Developer format)</option>
                            <option ${n.export_format==="PDF Report"?"selected":""}>PDF Report</option>
                        </select>
                    </div>
                    <button onclick="window.toast.info('Export started — download will begin shortly')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">download</span> Download Backup
                    </button>
                </div>

                <!-- Auto Backup -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Automatic Backup
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Backup</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically backup data on schedule</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" data-field="auto_backup_enabled" onchange="window.saveSettings('backup')" ${n.auto_backup_enabled?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Frequency</p>
                                <p class="text-[9px] font-bold text-slate-400">How often to run auto-backup</p>
                            </div>
                            <select data-field="backup_frequency" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${n.backup_frequency==="Daily"?"selected":""}>Daily</option>
                                <option ${n.backup_frequency==="Weekly"?"selected":""}>Weekly</option>
                                <option ${n.backup_frequency==="Monthly"?"selected":""}>Monthly</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Send to Email</p>
                                <p class="text-[9px] font-bold text-slate-400">Email backup file to store owner</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" data-field="send_to_email" onchange="window.saveSettings('backup')" ${n.send_to_email?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Backup History -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Backup History
                    </p>
                    <div class="space-y-2 text-left">
                        ${[{date:"Feb 6, 2026 — 3:00 AM",size:"2.4 MB",type:"Auto",status:"success"},{date:"Jan 30, 2026 — 3:00 AM",size:"2.1 MB",type:"Auto",status:"success"},{date:"Jan 23, 2026 — 11:30 AM",size:"1.8 MB",type:"Manual",status:"success"}].map(b=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="material-icons-outlined text-slate-500 text-sm">cloud_done</span>
                                    <div class="text-left">
                                        <p class="text-[10px] font-bold text-slate-900">${b.date}</p>
                                        <p class="text-[8px] font-bold text-slate-400">${b.size} &middot; ${b.type}</p>
                                    </div>
                                </div>
                                <button class="text-[8px] font-black text-slate-500 uppercase tracking-widest hover:text-slate-900">Download</button>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Data Retention -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Data Retention
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Keep Backup History</p>
                            <p class="text-[9px] font-bold text-slate-400">Auto-delete old backups after period</p>
                        </div>
                        <select data-field="retention_period" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option ${n.retention_period==="30 days"?"selected":""}>30 days</option>
                            <option ${n.retention_period==="90 days"?"selected":""}>90 days</option>
                            <option ${n.retention_period==="1 year"?"selected":""}>1 year</option>
                            <option ${n.retention_period==="Forever"?"selected":""}>Forever</option>
                        </select>
                    </div>
                    <div class="card p-4 bg-slate-100 border-slate-200 text-left">
                        <div class="flex items-start gap-3 text-left">
                            <span class="material-icons-outlined text-slate-500 text-lg mt-0.5">warning</span>
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-500">Delete All Store Data</p>
                                <p class="text-[9px] font-bold text-slate-500 mt-1">Permanently erase all data including customers, sales, inventory and automations. This action cannot be undone.</p>
                                <button onclick="window.toast.warning('Please contact support to delete your data')" class="mt-3 px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">Request Data Deletion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}function Tp(){const e=[{version:"2.1.0",date:"February 6, 2026",tag:"Latest",tagColor:"slate",highlights:[{icon:"shield",title:"Complete Multi-Tenant Isolation",desc:"Every table now filtered by retailer_id — your data is fully isolated from other stores."},{icon:"table_chart",title:"3 New Modules",desc:"Inquiries, Repairs, and Inventory Logs now fully integrated with tenant architecture."},{icon:"settings",title:"11 New Settings Pages",desc:"Security, Alerts, Taxes, Plugins, Teams, Logs, Language, Backup, Updates, Theme, and Help."}],changes:["Added retailer_id filtering to all 11 tenant-scoped tables","New tenant-aware CRUD helpers for inquiries, repairs, inventory_logs","Replaced raw SQL calls with proper db helpers in all modules","Sync layer now fetches inquiries, repairs, inventory_logs from DB","Settings dashboard fully functional with all sub-apps"]},{version:"2.0.0",date:"February 5, 2026",tag:"Major",tagColor:"slate",highlights:[{icon:"store",title:"Multi-Tenant Architecture",desc:"Full SaaS multi-tenant design with row-level data isolation per retailer."},{icon:"login",title:"Real Authentication",desc:"DB-backed login via mobile number or store code. No more mock login."},{icon:"people",title:"Demo Retailers",desc:"TechZone Electronics and Digital World with isolated sample data for testing."}],changes:["Added retailer_id column to 8 tenant-scoped tables","State management for tenant identity (setRetailer/clearRetailer)","Tenant-filtered sync layer for all data queries","Real login flow with DB authentication","Settings > Store shows 40+ retailer fields","Created 2 demo retailers with isolated sample data"]},{version:"1.0.0",date:"January 2026",tag:"Initial",tagColor:"slate",highlights:[{icon:"rocket_launch",title:"RetailerOS Launch",desc:"Initial release with Sales Desk, Customers, Inventory, Automations, and Repairs modules."}],changes:["Sales Desk with new transaction flow","Customer management with groups","Product inventory with inward shipments","Automation sequences for post-purchase journeys","Repair job tracking with status lifecycle","WhatsApp communication log","Brand schemes and promotions","Settings with Roles, Finance, Ledger, AI Config"]}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Updates</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Release Notes & Changelog</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Current Version Banner -->
                <div class="p-6 pb-0 text-left">
                    <div class="card p-5 bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-left relative overflow-hidden">
                        <div class="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full"></div>
                        <div class="absolute -right-2 -bottom-8 w-16 h-16 bg-white/5 rounded-full"></div>
                        <div class="flex items-center justify-between text-left relative z-10">
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Current Version</p>
                                <p class="text-3xl font-black text-white mt-1 tracking-tight">v${e[0].version}</p>
                                <p class="text-[9px] font-bold text-slate-400 mt-1">${e[0].date}</p>
                            </div>
                            <div class="text-right">
                                <span class="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[8px] font-black uppercase tracking-widest">Up to date</span>
                                <p class="text-[8px] font-bold text-slate-500 mt-2">RetailerOS by DigitalHues</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Release Timeline -->
                ${e.map((t,s)=>`
                    <div class="p-6 ${s<e.length-1?"border-b border-dashed border-slate-200":""} text-left">
                        <div class="flex items-center gap-3 mb-4 text-left">
                            <div class="flex items-center gap-2 text-left">
                                <span class="text-sm font-black text-slate-900">v${t.version}</span>
                                <span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-${t.tagColor}-100 text-${t.tagColor}-600">${t.tag}</span>
                            </div>
                            <span class="text-[9px] font-bold text-slate-400">${t.date}</span>
                        </div>

                        ${t.highlights?`
                            <div class="space-y-3 mb-4 text-left">
                                ${t.highlights.map(a=>`
                                    <div class="card p-4 flex items-start gap-3 text-left">
                                        <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-slate-500 text-sm">${a.icon}</span>
                                        </div>
                                        <div class="text-left">
                                            <p class="text-[11px] font-black text-slate-900">${a.title}</p>
                                            <p class="text-[10px] font-bold text-slate-500 mt-0.5 leading-relaxed">${a.desc}</p>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        `:""}

                        <div class="text-left">
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 pl-1">Changes</p>
                            <div class="space-y-1.5 text-left">
                                ${t.changes.map(a=>`
                                    <div class="flex items-start gap-2 text-left">
                                        <span class="w-1 h-1 bg-slate-300 rounded-full mt-1.5 shrink-0"></span>
                                        <p class="text-[10px] font-bold text-slate-600">${a}</p>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                `).join("")}

                <div class="p-6 pt-0 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Built with care by DigitalHues</p>
                </div>
            </div>
        </div>
    `}function Mp(){var n;const t=((n=window.getCache().retailerSettings)==null?void 0:n.theme)||{},s={display_mode:t.display_mode??localStorage.getItem("retaileros_theme")??"light",accent_color:t.accent_color??localStorage.getItem("retaileros_accent")??"slate",layout_density:t.layout_density??localStorage.getItem("retaileros_density")??"comfortable",font_size:t.font_size??parseInt(localStorage.getItem("retaileros_font_size")||"100"),sidebar_collapsed:t.sidebar_collapsed??!1,show_app_labels:t.show_app_labels??!0,animations_enabled:t.animations_enabled??localStorage.getItem("retaileros_animations")!=="false"},a=[{name:"Slate",key:"slate",bg:"bg-slate-900",ring:"ring-slate-900"},{name:"Indigo",key:"indigo",bg:"bg-indigo-600",ring:"ring-indigo-600"},{name:"Blue",key:"blue",bg:"bg-blue-600",ring:"ring-blue-600"},{name:"Emerald",key:"emerald",bg:"bg-emerald-600",ring:"ring-emerald-600"},{name:"Violet",key:"violet",bg:"bg-violet-600",ring:"ring-violet-600"},{name:"Rose",key:"rose",bg:"bg-rose-600",ring:"ring-rose-600"},{name:"Amber",key:"amber",bg:"bg-amber-600",ring:"ring-amber-600"},{name:"Teal",key:"teal",bg:"bg-teal-600",ring:"ring-teal-600"}];return window.saveThemeSettings=async function(){const l=document.querySelector('[data-settings-category="theme"]');if(!l)return;const i={};l.querySelectorAll('input[type="hidden"][data-field], input[type="text"][data-field]').forEach(r=>{i[r.dataset.field]=r.value}),l.querySelectorAll('input[type="range"][data-field]').forEach(r=>{i[r.dataset.field]=Number(r.value)}),l.querySelectorAll('input[type="checkbox"][data-field]').forEach(r=>{i[r.dataset.field]=r.checked}),i.display_mode&&localStorage.setItem("retaileros_theme",i.display_mode),i.accent_color&&localStorage.setItem("retaileros_accent",i.accent_color),i.layout_density&&localStorage.setItem("retaileros_density",i.layout_density),i.font_size&&localStorage.setItem("retaileros_font_size",i.font_size),i.animations_enabled!==void 0&&localStorage.setItem("retaileros_animations",i.animations_enabled),window.applyTheme&&window.applyTheme();try{await A.settings.save("theme",i),window._db_cache.retailerSettings||(window._db_cache.retailerSettings={}),window._db_cache.retailerSettings.theme=i,window.toast&&window.toast.success("Theme saved")}catch(r){console.error("Failed to save theme:",r),window.toast&&window.toast.error("Failed to save theme")}},window._selectThemeOption=function(l,i){const r=document.querySelector(`[data-field="${l}"]`);r&&(r.value=i);const d=r==null?void 0:r.closest(".grid, .space-y-3");d&&d.querySelectorAll("[data-option-btn]").forEach(c=>{const u=c.dataset.optionValue===i;l==="accent_color"?(c.className=c.className.replace(/bg-slate-50 ring-2 ring-\w+-\d+/g,"").replace("hover:bg-slate-50",""),u?c.classList.add("bg-slate-50"):c.classList.add("hover:bg-slate-50")):(c.classList.toggle("border-slate-900",u),c.classList.toggle("bg-slate-50",u),c.classList.toggle("ring-1",u),c.classList.toggle("ring-slate-900",u),c.classList.toggle("hover:border-slate-300",!u))})},`
        <div data-settings-category="theme" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Theme</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Appearance & Display</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <input type="hidden" data-field="display_mode" value="${s.display_mode}">
                <input type="hidden" data-field="accent_color" value="${s.accent_color}">
                <input type="hidden" data-field="layout_density" value="${s.layout_density}">

                <!-- Mode -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Mode
                    </p>
                    <div class="grid grid-cols-3 gap-3 text-left">
                        ${[{name:"Light",key:"light",icon:"light_mode",desc:"Clean white interface"},{name:"Dark",key:"dark",icon:"dark_mode",desc:"Easy on the eyes"},{name:"System",key:"system",icon:"settings_brightness",desc:"Match device setting"}].map(l=>`
                            <button data-option-btn data-option-value="${l.key}" onclick="window._selectThemeOption('display_mode','${l.key}')" class="card p-4 text-center transition-all ${s.display_mode===l.key?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${s.display_mode===l.key?"text-slate-900":"text-slate-400"} mb-2">${l.icon}</span>
                                <p class="text-[10px] font-black text-slate-900">${l.name}</p>
                                <p class="text-[8px] font-bold text-slate-400 mt-0.5">${l.desc}</p>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Accent Color -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Accent Color
                    </p>
                    <div class="grid grid-cols-4 gap-3 text-left">
                        ${a.map(l=>`
                            <button data-option-btn data-option-value="${l.key}" onclick="window._selectThemeOption('accent_color','${l.key}')" class="flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${s.accent_color===l.key?"bg-slate-50 ring-2 "+l.ring:"hover:bg-slate-50"}">
                                <div class="w-8 h-8 ${l.bg} rounded-full ${s.accent_color===l.key?"ring-2 ring-offset-2 "+l.ring:""}"></div>
                                <span class="text-[8px] font-black text-slate-600 uppercase tracking-widest">${l.name}</span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Layout Density -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Layout Density
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{name:"Compact",key:"compact",desc:"Smaller spacing, more content visible. Best for desktop.",icon:"density_small"},{name:"Comfortable",key:"comfortable",desc:"Balanced spacing for readability. Default experience.",icon:"density_medium"},{name:"Spacious",key:"spacious",desc:"Extra breathing room. Best for touch devices.",icon:"density_large"}].map(l=>`
                            <button data-option-btn data-option-value="${l.key}" onclick="window._selectThemeOption('layout_density','${l.key}')" class="card p-4 flex items-center gap-4 text-left w-full transition-all ${s.layout_density===l.key?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">${l.icon}</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${l.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${l.desc}</p>
                                </div>
                                ${s.layout_density===l.key?'<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>':""}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Font Size -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Font Size
                    </p>
                    <div class="card p-5 text-left">
                        <div class="flex items-center justify-between mb-3 text-left">
                            <span class="text-xs font-bold text-slate-400">A</span>
                            <span class="text-xl font-bold text-slate-400">A</span>
                        </div>
                        <input type="range" data-field="font_size" min="80" max="120" value="${s.font_size}" class="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900">
                        <p class="text-[9px] font-bold text-slate-400 text-center mt-2">${s.font_size}% ${s.font_size===100?"(Default)":""}</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Sidebar
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Collapsed by Default</p>
                                <p class="text-[9px] font-bold text-slate-400">Start with minimized sidebar</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="sidebar_collapsed" class="sr-only peer" ${s.sidebar_collapsed?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show App Labels</p>
                                <p class="text-[9px] font-bold text-slate-400">Display text labels under sidebar icons</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="show_app_labels" class="sr-only peer" ${s.show_app_labels?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Animations -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Motion
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Animations</p>
                            <p class="text-[9px] font-bold text-slate-400">Enable slide & fade transitions</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" data-field="animations_enabled" class="sr-only peer" ${s.animations_enabled?"checked":""}>
                            <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveThemeSettings()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Apply Theme
                    </button>
                </div>
            </div>
        </div>
    `}function Dp(){const e=(()=>{var l;const a=window.getCache(),n=localStorage.getItem("retaileros_retailer_id");return((l=a.retailers)==null?void 0:l.find(i=>i.id===n))||{}})(),t=[{q:"How do I add a new customer?",a:"Go to Clients app from the launcher, then tap the + button. Fill in the customer name and phone number to create a new record."},{q:"How do I create a sale?",a:'Open Sales Desk, tap "New Transaction", select or add a customer, add products from your inventory, choose payment method, and confirm the sale.'},{q:"How do I set up automation for a sale?",a:"After completing a sale, go to Automation app. Create a new sequence linked to the sale — you can schedule WhatsApp messages at different day intervals."},{q:"How does multi-tenant isolation work?",a:"Each retailer's data (customers, sales, inventory, etc.) is completely separate. When you log in, you only see your own store's data. No other retailer can access it."},{q:"How do I track repair jobs?",a:"Use the Repairs module to create job sheets. Each repair moves through a lifecycle: Collected > Sent to Brand > In Repair > Ready > Handed Over."},{q:"How do I export my data?",a:"Go to Settings > Backup. Select the data you want to export, choose CSV or JSON format, and download. You can also set up auto-backups."},{q:"Can I add staff members?",a:"Go to Settings > Teams to invite staff. Each team member gets a role (Owner, Manager, Sales, Technician) with specific module access."}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Help</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Support & Documentation</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Quick Support -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Quick Support
                    </p>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <button onclick="window.toast.info('Opening WhatsApp support...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">chat</span>
                            <p class="text-[10px] font-black text-slate-900">WhatsApp</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Chat with us</p>
                        </button>
                        <button onclick="window.toast.info('Calling support...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">call</span>
                            <p class="text-[10px] font-black text-slate-900">Call Us</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">1800-XXX-XXXX</p>
                        </button>
                        <button onclick="window.toast.info('Opening email...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">email</span>
                            <p class="text-[10px] font-black text-slate-900">Email</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">support@retaileros.in</p>
                        </button>
                        <button onclick="window.toast.info('Opening ticket system...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">confirmation_number</span>
                            <p class="text-[10px] font-black text-slate-900">Raise Ticket</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Track your issue</p>
                        </button>
                    </div>
                </div>

                <!-- Video Guides -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Guides & Tutorials
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{title:"Getting Started",desc:"Complete setup guide for new retailers",icon:"rocket_launch",color:"indigo"},{title:"Sales & Billing",desc:"Create invoices, apply schemes, manage payments",icon:"receipt",color:"green"},{title:"Customer Management",desc:"Add customers, create groups, track engagement",icon:"people",color:"blue"},{title:"Inventory Control",desc:"Track stock, inward shipments, product catalog",icon:"inventory_2",color:"amber"},{title:"Automation Setup",desc:"Post-purchase sequences, WhatsApp campaigns",icon:"smart_toy",color:"purple"},{title:"Reports & Analytics",desc:"Sales reports, customer insights, performance",icon:"analytics",color:"teal"}].map(a=>`
                            <button onclick="window.toast.info('Guide: ${a.title} — coming soon')" class="card p-4 flex items-center gap-4 text-left w-full hover:border-slate-300 transition-all">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                                    <span class="material-icons-outlined text-slate-500">${a.icon}</span>
                                </div>
                                <div class="flex-1 text-left">
                                    <p class="text-xs font-black text-slate-900">${a.title}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${a.desc}</p>
                                </div>
                                <span class="material-icons-outlined text-slate-300 text-sm">chevron_right</span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- FAQ -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Frequently Asked Questions
                    </p>
                    <div class="space-y-2 text-left">
                        ${t.map((a,n)=>`
                            <details class="card overflow-hidden group text-left">
                                <summary class="p-4 cursor-pointer flex items-center justify-between text-left list-none">
                                    <p class="text-[11px] font-black text-slate-900 pr-4">${a.q}</p>
                                    <span class="material-icons-outlined text-slate-400 text-sm shrink-0 group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <div class="px-4 pb-4 text-left">
                                    <p class="text-[10px] font-bold text-slate-500 leading-relaxed">${a.a}</p>
                                </div>
                            </details>
                        `).join("")}
                    </div>
                </div>

                <!-- Account Info -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Your Account
                    </p>
                    <div class="card p-4 bg-slate-50 border-transparent text-left">
                        <div class="grid grid-cols-2 gap-3 text-left">
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Store</p>
                                <p class="text-xs font-bold text-slate-900">${e.retailer_name||"Your Store"}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Code</p>
                                <p class="text-xs font-bold text-slate-900">${e.retailer_code||"—"}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Plan</p>
                                <p class="text-xs font-bold text-slate-900">Professional</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Version</p>
                                <p class="text-xs font-bold text-slate-900">v2.1.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Report Bug -->
                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Bug report form coming soon')" class="w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">bug_report</span> Report a Bug
                    </button>
                </div>
            </div>
        </div>
    `}function Fn(e){const t=e==="mobile",s=e==="desktop-secondary";if(window.setSettingsView=a=>{p.settingsView=a,p.settingsSubView=null,C()},window.setSettingsSubView=a=>{p.settingsSubView=a,C()},window.setSettingsRole=a=>{p.settingsActiveRole=a,p.settingsSubView="detail",C()},window.saveNewRole=()=>{const a=document.querySelector('input[placeholder="e.g. Floor Supervisor"]');a&&a.value?(p.settingsActiveRole=a.value,p.settingsSubView="detail",window.toast.success(`Role "${a.value}" created successfully!`),C()):window.toast.warning("Please enter a role name")},window.updateRole=()=>{window.toast.success("Role profile updated successfully!"),window.setSettingsSubView("detail")},s||t&&p.settingsView){if(p.settingsView==="roles")return hp();if(p.settingsView==="accounting")return gp();if(p.settingsView==="ledger")return wp();if(p.settingsView==="ai")return yp();if(p.settingsView==="store")return kp();if(p.settingsView==="security")return _p();if(p.settingsView==="alerts")return Sp();if(p.settingsView==="taxes")return Ep();if(p.settingsView==="plugins")return $p();if(p.settingsView==="teams")return Ip();if(p.settingsView==="logs")return Rp();if(p.settingsView==="lang")return Cp();if(p.settingsView==="backup")return Ap();if(p.settingsView==="updates")return Tp();if(p.settingsView==="theme")return Mp();if(p.settingsView==="help")return Dp();if(s)return""}return bp(e)}function Lp(){return`
        <div class="space-y-4 text-left">
            ${[{id:"apple",n:"Apple",s:"PREMIUM PARTNER",amt:"₹4,82,500",live:12,comp:48,set:142,nSet:24,i:"apple"},{id:"nothing",n:"Nothing",s:"EMERGAGING BRAND",amt:"₹1,12,000",live:4,comp:15,set:56,nSet:8,i:"nothing"},{id:"oneplus",n:"OnePlus",s:"GLOBAL TECH",amt:"₹2,45,900",live:8,comp:32,set:98,nSet:12,i:"oneplus"}].map(t=>`
                <div onclick="selectSchemeBrand('${t.n}')" class="card p-5 border-2 transition-all group cursor-pointer relative overflow-hidden text-left ${p.activeSchemeBrand===t.n?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                    <div class="flex items-center justify-between mb-6 text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-left">
                                <span class="material-icons-outlined text-slate-400 text-left">${t.id==="apple"?"devices":t.id==="nothing"?"noise_aware":"bolt"}</span>
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">${t.n}</h3>
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-left">${t.s}</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-slate-200 group-hover:text-slate-400 transition-colors text-right">chevron_right</span>
                    </div>

                    <div class="space-y-4 text-left">
                        <div class="text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">TOTAL PENDING SETTLEMENT</p>
                            <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${t.amt}</h2>
                        </div>

                        <div class="grid grid-cols-2 gap-4 text-left">
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">LIVE SCHEMES</p>
                                <p class="text-lg font-black text-slate-900 text-left">${t.live}</p>
                            </div>
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">COMPLETED</p>
                                <p class="text-lg font-black text-slate-900 text-left">${t.comp}</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 pt-4 border-t border-slate-50 text-left">
                            <div class="flex items-center gap-1.5 grayscale opacity-50 text-left">
                                <div class="w-1.5 h-1.5 bg-slate-900 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Settled: ${t.set}</p>
                            </div>
                            <div class="flex items-center gap-1.5 text-left">
                                <div class="w-1.5 h-1.5 bg-slate-300 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Not Settled: ${t.nSet}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `}window.setSchemeViewMode=e=>{p.showSchemeDetails=e==="details",C()};window.setActiveScheme=e=>{p.activeScheme=e,C()};function Op(){const t=(window.getCache?window.getCache():{schemes:[]}).schemes||[];return`
        <div class="space-y-4 animate-slide-up text-left">
            ${t.map(s=>{var a;return`
                <div onclick="window.setSchemeViewMode('details'); window.setActiveScheme(${JSON.stringify(s).replace(/"/g,"&quot;")})" class="card p-6 border-2 transition-all cursor-pointer group text-left ${((a=p.activeScheme)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                    <div class="flex justify-between items-start mb-4 text-left">
                        <div class="text-left">
                            <h3 class="text-lg font-black text-slate-900 text-left">${s.name}</h3>
                            <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1 text-left">${s.brand}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5 text-right">PAYOUT</p>
                            <p class="text-sm font-black text-slate-900 text-right">₹${parseInt(s.payout).toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-left">
                        <p class="text-[10px] font-bold text-slate-400 text-left">${s.description||"Valid on all sales"}</p>
                        <p class="text-[9px] font-black text-slate-300 uppercase text-right">End: ${new Date(s.end_date).toLocaleDateString()}</p>
                    </div>
                </div>
            `}).join("")}

            ${t.length===0?`
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">inventory_2</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No active schemes found</p>
                </div>
            `:""}
        </div>
    `}window._submitSchemeClaims=async(e,t)=>{try{const s=(()=>{var l;const a=window.getCache(),n=localStorage.getItem("retaileros_retailer_id");return((l=a.retailers)==null?void 0:l.find(i=>i.id===n))||{}})();await A.activityLogs.add({action:"schemes",detail:`Submitted ${t} claims for ${e} settlement`,user_name:s.contact_person||"Owner",icon:"send",color:"blue"}),window.toast&&window.toast.success(`${t} claims submitted for ${e}`)}catch(s){console.error("Submit claims failed:",s),window.toast&&window.toast.error("Failed to submit claims")}};window._downloadSchemeCSV=e=>{const s=((window.getCache?window.getCache():{sales:[]}).sales||[]).filter(c=>(c.product_name||"").toLowerCase().includes(e.toLowerCase()));if(s.length===0){window.toast&&window.toast.error("No transactions to export");return}const a=["Order ID","Date","Customer","Product","Amount","IMEI"],n=s.map(c=>[c.id,new Date(c.date).toLocaleDateString(),c.customer_name||"",c.product_name||"",c.total_amount||c.total||"",c.imei||"N/A"]),l=[a.join(","),...n.map(c=>c.map(u=>`"${u}"`).join(","))].join(`
`),i=new Blob([l],{type:"text/csv"}),r=URL.createObjectURL(i),d=document.createElement("a");d.href=r,d.download=`${e}_scheme_transactions.csv`,d.click(),URL.revokeObjectURL(r),window.toast&&window.toast.success("CSV downloaded")};function jp(e){const t=e==="mobile",s=p.activeScheme;if(!s)return'<div class="p-10 text-center">Select a scheme to view details</div>';const n=((window.getCache?window.getCache():{sales:[]}).sales||[]).filter(u=>{const x=u.product_name||"",b=typeof s=="object"&&s.brand?s.brand:"";return x.includes(b)||u.items&&u.items.some(v=>(v.name||"").includes(b))}),l=typeof s=="object"&&s.brand?s.brand:s,i=typeof s=="object"&&s.name?s.name:"Scheme",r=typeof s=="object"&&s.payout?s.payout:"0",d=typeof s=="object"&&s.end_date?s.end_date:new Date,c={count:n.length,growth:"+0%",color:"bg-slate-950"};return`
        <div class="h-full flex flex-col bg-white animate-slide-up relative text-left">
            <header class="p-6 pb-4 shrink-0 flex items-center justify-between border-b border-slate-50 text-left">
                <div class="flex items-center gap-3 text-left">
                     <button onclick="${t?"toggleSchemeDetails(false)":"setApp('launcher')"}" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Scheme Details</h2>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-slate-400 text-left"><span class="material-icons-outlined text-lg text-left">more_vert</span></button>
            </header>

            <div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar pb-32 text-left">
                <!-- Scheme Header Card -->
                <div class="card p-5 border-slate-100 shadow-sm space-y-6 text-left">
                    <div class="flex items-center gap-3 text-left">
                         <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-left">
                            <span class="material-icons-outlined text-slate-400 text-left">devices</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest leading-none mb-1 text-left">BRAND: ${l.toUpperCase()}</p>
                            <h3 class="text-sm font-black text-slate-900 text-left">${i}</h3>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-left">
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">PAYOUT</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">₹${parseInt(r).toLocaleString()}</p>
                        </div>
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">VALID UNTIL</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">${new Date(d).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="${c.color} rounded-[32px] p-6 text-white relative overflow-hidden text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 text-left">TOTAL ORDERS UNDER SCHEME</p>
                    <div class="flex items-end gap-3 text-left">
                        <h2 class="text-5xl font-black tracking-tighter text-left">${c.count}</h2>
                        <p class="text-[10px] font-bold text-slate-900 mb-2 text-left">${c.growth} this week</p>
                    </div>
                    <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full text-left"></div>
                </div>

                <!-- Transactions -->
                <div class="space-y-4 text-left">
                    <div class="flex items-center justify-between px-1 text-left">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Recent Transactions</h3>
                         <button onclick="window._downloadSchemeCSV('${l}')" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm border border-slate-100 text-left">
                            <span class="material-icons-outlined text-lg text-left">download</span>
                        </button>
                    </div>

                    <div class="space-y-3 text-left">
                        ${n.length===0?`
                            <div class="p-8 text-center opacity-30">
                                <p class="text-[10px] font-black uppercase tracking-widest">No qualifying sales found</p>
                            </div>
                        `:n.map(u=>`
                            <div class="card p-4 border-slate-100 hover:border-slate-300 transition-all cursor-pointer text-left">
                                <div class="flex justify-between items-start mb-2 text-left">
                                    <div class="text-left">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">ORDER ID</p>
                                        <p class="text-xs font-black text-slate-900 text-left">${u.id}</p>
                                    </div>
                                     <div class="text-right">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-right">DATE</p>
                                        <p class="text-[10px] font-black text-slate-900 text-right">${new Date(u.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div class="flex justify-between items-end pt-3 border-t border-slate-50 text-left">
                                    <div class="text-left">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">MODEL</p>
                                        <p class="text-[10px] font-bold text-slate-500 text-left">${u.product_name}</p>
                                    </div>
                                     <div class="text-right">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-right">IMEI</p>
                                        <p class="text-[9px] font-bold text-slate-400 tracking-wider text-right">${u.imei||"N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>

            <!-- Sticky Footer Action -->
            <div class="p-6 border-t border-slate-100 bg-white/80 backdrop-blur-md sticky bottom-0 z-20 text-center">
                <button onclick="window._submitSchemeClaims('${l}', ${n.length})" class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 group overflow-hidden relative text-center">
                     <span class="relative z-10 text-center">SUBMIT ALL ${n.length} CLAIMS</span>
                     <span class="material-icons-outlined text-sm relative z-10 transition-transform group-hover:translate-x-1 text-center">send</span>
                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                <p class="text-[7px] font-bold text-slate-400 uppercase text-center mt-3 tracking-widest">COMPILING REPORT FOR ${l.toUpperCase()} SETTLEMENT</p>
            </div>
        </div>
    `}function Un(e){const t=e==="desktop-secondary",s=e==="mobile";if(window.selectSchemeBrand=n=>{p.activeSchemeBrand=n,p.schemesTab="list",C()},window.selectScheme=n=>{p.activeScheme=n,s&&(p.showSchemeDetails=!0),C()},window.setSchemesTab=n=>{p.schemesTab=n,C()},window.toggleSchemeDetails=n=>{p.showSchemeDetails=n,C()},t||s&&p.showSchemeDetails)return jp(e);const a=p.schemesTab==="brands";return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    ${s&&!a?`
                        <button onclick="setSchemesTab('brands')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                    `:`
                        <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                    `}
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Schemes</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Incentives & Claims</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">search</span></button>
                </div>

                <div class="flex bg-slate-100 p-1 rounded-xl gap-1 text-left">
                    <button onclick="setSchemesTab('brands')" class="flex-1 py-3 ${a?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all text-center">Brands</button>
                    <button onclick="setSchemesTab('list')" class="flex-1 py-3 ${a?"text-slate-400":"bg-white shadow-sm text-slate-900"} text-[10px] font-black uppercase rounded-lg transition-all text-center">Schemes</button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-32 text-left">
                ${a?Lp():Op()}
            </div>

            <!-- Profile Footer -->
            <footer class="p-6 bg-white shrink-0 mt-auto border-t border-slate-100 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-900 text-center">AS</div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900 text-left">Apple Store - Mumbai Central</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-medium text-left">Store Manager</p>
                        </div>
                    </div>
                    <button class="flex items-center gap-1.5 text-slate-900 font-black text-[9px] uppercase tracking-widest px-3 py-2 hover:bg-slate-50 rounded-lg transition-colors text-center">
                        Logout <span class="material-icons-outlined text-base text-center">logout</span>
                    </button>
                </div>
            </footer>

            <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-20 text-left">
                <button class="w-14 h-14 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform text-center">
                    <span class="material-icons-outlined text-2xl text-center">${a?"add":"filter_list"}</span>
                </button>
            </div>
        </div>
    `}function Pp(){const e=p.marketplaceTab==="browse";return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Marketplace</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${e?"B2B Trading Hub":"Manage My Listings"}</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">${e?"filter_list":"add_circle"}</span></button>
            </div>

            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-6 text-left">
                <button onclick="setMarketplaceTab('browse')" class="flex-1 py-3 ${e?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all text-center">Browse Listings</button>
                <button onclick="setMarketplaceTab('my-offers')" class="flex-1 py-3 ${e?"text-slate-400":"bg-white shadow-sm text-slate-900"} text-[10px] font-black uppercase rounded-lg transition-all text-center">My Offers</button>
            </div>

            ${e?`
                <button onclick="window.setMarketplaceViewMode('add')" class="w-full py-4 border-2 border-slate-900 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest mb-2 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-center">
                     <span class="material-icons-outlined text-lg text-left">add_circle</span> LIST PRODUCT TO MARKET
                </button>
            `:""}
        </header>
    `}function Np(){const t=window.getCache().marketplace||[];return`
        <div class="grid grid-cols-2 gap-4 animate-slide-up text-left">
            ${t.map(s=>`
                <div class="card bg-white border-slate-100 hover:border-slate-300 transition-all cursor-pointer overflow-hidden p-0 h-fit text-left">
                    <div class="aspect-square bg-slate-50/50 flex items-center justify-center py-8 relative text-left">
                        <span class="material-icons-outlined text-4xl text-slate-200 text-left">shopping_bag</span>
                        <span class="absolute top-2 right-2 px-1.5 py-0.5 rounded-[4px] text-[6px] font-black uppercase tracking-wider text-left bg-slate-900 text-white">LIVE</span>
                    </div>
                    <div class="p-4 space-y-3 text-left">
                        <h3 class="text-[11px] font-black text-slate-900 leading-tight h-8 overflow-hidden line-clamp-2 text-left">${s.product_name}</h3>
                        <div class="text-left">
                            <p class="text-[12px] font-black text-slate-900 text-left">₹${parseInt(s.price).toLocaleString()} <span class="text-[8px] text-slate-300 font-bold uppercase tracking-tight text-left">/Unit</span></p>
                            <div class="flex items-center gap-1 text-slate-300 mt-1 text-left">
                                <span class="material-icons-outlined text-[10px] text-left">inventory</span>
                                <p class="text-[8px] font-bold uppercase tracking-widest text-left">QTY: ${s.quantity}</p>
                            </div>
                        </div>
                        <button onclick="window.open('tel:${s.seller_phone||""}'); event.stopPropagation();" class="w-full py-2.5 bg-slate-50 border border-slate-100 text-slate-900 rounded-lg text-[9px] font-black uppercase hover:bg-slate-900 hover:text-white transition-all text-center">Contact Seller</button>
                    </div>
                </div>
            `).join("")}

            ${t.length===0?`
                <div class="col-span-2 py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">storefront</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No marketplace offers found</p>
                </div>
            `:""}
        </div>
    `}window._setOfferStatus=async(e,t)=>{try{window.toast&&window.toast.success(`Listing ${t==="paused"?"paused":t==="sold"?"marked as sold":"updated"}`),window.triggerRender()}catch{window.toast&&window.toast.error("Failed to update")}};function qp(){return`
        <div class="space-y-4 animate-slide-up text-left">
            ${[{id:"o1",t:"Flagship X Pro - 256GB",d:"Space Black • Sealed Box",s:"14 Units",inq:"8 New",st:"ACTIVE",i:"tablet_android"},{id:"o2",t:"Premium Audio Buds G2",d:"White • Demo Units",s:"5 Units",inq:"0 New",st:"PAUSED",i:"headset"},{id:"o3",t:'Smart Pad Ultra 11"',d:"Silver • WiFi Only",s:"2 Units",inq:"2 New",st:"ACTIVE",i:"tablet_mac"}].map(t=>`
                <div class="card p-5 border-slate-100 hover:border-slate-300 transition-all flex gap-4 pr-3 text-left">
                    <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                        <span class="material-icons-outlined text-slate-300">${t.i}</span>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="text-sm font-black text-slate-900">${t.t}</h3>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase ${t.st==="ACTIVE"?"bg-slate-900 text-white":"bg-slate-200 text-slate-600"}">${t.st}</span>
                        </div>
                        <p class="text-[10px] font-bold text-slate-400">${t.d}</p>
                        <div class="flex gap-4 mt-3 pt-3 border-t border-slate-50">
                            <div>
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">STOCK</p>
                                <p class="text-[10px] font-black text-slate-900">${t.s}</p>
                            </div>
                            <div>
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">INQUIRIES</p>
                                <p class="text-[10px] font-black text-slate-900">${t.inq}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between py-1 text-right">
                        <div class="space-y-2">
                            <div class="flex bg-slate-100 rounded-lg p-0.5">
                                <button onclick="window._setOfferStatus('${t.id}','paused')" class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 hover:bg-white transition-all text-center">Pause</button>
                                <button onclick="window._setOfferStatus('${t.id}','sold')" class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 hover:bg-white transition-all text-center">Sold</button>
                            </div>
                        </div>
                        <button onclick="window.setMarketplaceViewMode('add')" class="text-[8px] font-black text-slate-950 uppercase flex items-center gap-1 group">EDIT <span class="material-icons-outlined text-xs group-hover:translate-x-1 transition-transform">chevron_right</span></button>
                    </div>
                </div>
            `).join("")}
        </div>
    `}window._postToMarketplace=async()=>{const e=document.getElementById("mp-product-select"),t=document.getElementById("mp-quantity"),s=document.getElementById("mp-price"),a=e==null?void 0:e.value,n=parseInt(t==null?void 0:t.value)||1,l=((s==null?void 0:s.value)||"").replace(/[₹,\s]/g,""),i=parseFloat(l)||0;if(!a||a==="Choose a product..."){window.toast&&window.toast.error("Select a product");return}if(i<=0){window.toast&&window.toast.error("Enter a valid price");return}try{const r="LST-"+Math.random().toString(36).substr(2,8).toUpperCase(),d=new Date().toISOString();await A.storeListings.add({id:r,product_id:r,product_name:a,brand:a.split(" ")[0],category:"Marketplace",base_price:i,listing_price:i,description:`Marketplace listing: ${n} units`,status:"active",stock_qty:n,created_at:d,updated_at:d}),await Y(),window.toast&&window.toast.success("Listed on marketplace!"),window.setMarketplaceViewMode("list")}catch(r){console.error("Post to marketplace failed:",r),window.toast&&window.toast.error("Failed to post listing")}};function Bp(e){const t=e==="mobile",a=window.getCache().products||[];return`
        <div class="h-full flex flex-col bg-white animate-slide-up relative text-left">
            <header class="p-6 pb-4 shrink-0 flex items-center justify-between text-left">
                <div class="flex items-center gap-3 text-left">
                     <button onclick="${t?"window.setMarketplaceViewMode('list')":"setApp('launcher')"}" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full">
                        <span class="material-icons-outlined text-lg">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-xs font-black text-slate-900 uppercase tracking-widest leading-none">List a Product</h2>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-[0.1em] mt-1">Marketplace</p>
                    </div>
                </div>
                <div class="w-8"></div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 pt-2 space-y-6 custom-scrollbar pb-20 text-left">
                <div class="space-y-6 text-left">
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Select from Inventory</p>
                        <div class="relative group">
                            <select id="mp-product-select" class="w-full h-14 pl-4 pr-12 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 appearance-none focus:outline-none focus:border-slate-950 transition-all shadow-sm">
                                <option>Choose a product...</option>
                                ${a.map(n=>`<option value="${n.name}">${n.name} — ${n.brand||""}</option>`).join("")}
                            </select>
                            <span class="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">unfold_more</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Quantity</p>
                            <input type="number" id="mp-quantity" value="1" min="1" class="w-full h-14 px-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 focus:outline-none focus:border-slate-950 transition-all shadow-sm">
                        </div>
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Price per Unit</p>
                            <input type="text" id="mp-price" placeholder="₹ 0" class="w-full h-14 px-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 focus:outline-none focus:border-slate-950 transition-all shadow-sm">
                        </div>
                    </div>

                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Product Condition</p>
                        <div class="flex bg-slate-100 p-1 rounded-2xl gap-1">
                            <button class="flex-1 py-3 bg-white shadow-sm text-slate-950 text-[9px] font-black uppercase rounded-xl transition-all text-center">Sealed</button>
                            <button class="flex-1 py-3 text-slate-400 text-[9px] font-black uppercase rounded-xl transition-all text-center">Open Box</button>
                            <button class="flex-1 py-3 text-slate-400 text-[9px] font-black uppercase rounded-xl transition-all text-center">Used</button>
                        </div>
                    </div>

                    <p class="text-[8px] text-slate-400 font-medium text-center leading-relaxed max-w-[200px] mx-auto">By listing this product, you agree to the Marketplace Terms of Service.</p>

                    <button onclick="window._postToMarketplace()" class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 text-center">
                         <span class="material-icons-outlined text-xl">rocket_launch</span> POST TO MARKETPLACE
                    </button>
                </div>
            </div>
        </div>
    `}function Vn(e){if(e==="desktop-secondary"||e==="mobile"&&p.marketplaceViewMode==="add")return Bp(e);const a=p.marketplaceTab==="browse";return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${Pp()}
            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-20 text-left">
                ${a?Np():qp()}
            </div>

             <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-30 text-left">
                <button onclick="window.setMarketplaceViewMode('add')" class="w-16 h-16 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-3xl font-light text-center">add</span>
                </button>
            </div>
        </div>
    `}function Fp(){return`
        <header class="p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Inquiries</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">RetailerOS Hub</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">tune</span></button>
            </div>
        </header>
    `}function Up(){return`
        <div class="grid grid-cols-2 gap-4 mb-8 text-left">
            <div class="card p-5 border-slate-100 shadow-sm relative overflow-hidden group text-left">
                <div class="flex justify-between items-start mb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Unfulfilled</p>
                    <span class="material-icons-outlined text-slate-900 text-sm text-left">trending_down</span>
                </div>
                <h2 class="text-3xl font-black text-slate-900 mb-1 text-left">142</h2>
                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest leading-none text-left">Lost Sales: $12.4K</p>
                <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-left">
                    <span class="material-icons-outlined text-8xl text-left">error_outline</span>
                </div>
            </div>
            <div class="card p-5 border-slate-100 shadow-sm relative overflow-hidden group text-left">
                <div class="flex justify-between items-start mb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Demand Met</p>
                    <span class="material-icons-outlined text-slate-900 text-sm text-left">check_circle</span>
                </div>
                <h2 class="text-3xl font-black text-slate-900 mb-1 text-left">84%</h2>
                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest leading-none text-left">+12% VS Last Month</p>
                 <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-left">
                    <span class="material-icons-outlined text-8xl text-left">verified_user</span>
                </div>
            </div>
        </div>
    `}function Vp(){const t=window.getCache().inquiries||[],s=a=>{switch(a){case"PENDING":return"bg-slate-200 text-slate-600";case"FULFILLED":return"bg-slate-900 text-white";case"CONTACTED":return"bg-slate-300 text-slate-700";case"LOST SALE":return"bg-slate-100 text-slate-400";default:return"bg-slate-50 text-slate-400"}};return`
        <div class="space-y-3 text-left">
            ${t.map(a=>{var n;return`
                <div onclick="window.setActiveInquiry(${JSON.stringify(a).replace(/"/g,"&quot;")}); window.setInquiryViewMode('resolve')" class="card p-4 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${((n=p.activeInquiry)==null?void 0:n.id)===a.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                    <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shrink-0 text-left">
                        <span class="material-icons-outlined text-slate-300 text-xl text-left">info</span>
                    </div>
                    <div class="flex-1 min-w-0 text-left">
                        <div class="flex justify-between items-start mb-0.5 text-left">
                            <h4 class="text-xs font-black text-slate-900 truncate text-left">${a.product_name||a.request}</h4>
                            <span class="px-2 py-0.5 rounded-md text-[7px] font-black uppercase tracking-wider text-right ${s(a.status)}">${a.status}</span>
                        </div>
                        <div class="flex justify-between items-center text-left">
                            <p class="text-[10px] font-bold text-slate-400 text-left">${a.customer_name}</p>
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-right">${new Date(a.created_at).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            `}).join("")}

            ${t.length===0?`
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">contact_support</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No inquiries found</p>
                </div>
            `:""}
        </div>
    `}async function Hp(){const e=document.getElementById("inq-customer").value,t=document.getElementById("inq-product").value,s=document.getElementById("inq-notes").value;if(!e||!t){alert("Customer and Product are required.");return}const a=document.getElementById("log-inquiry-btn");a.disabled=!0,a.innerText="Logging...";try{await A.inquiries.add({id:"INQ-"+Math.random().toString(36).substr(2,6).toUpperCase(),customer_name:e,product_name:t,request:s,status:"PENDING",created_at:new Date().toISOString()}),await Y(),window.setInquiryViewMode("list")}catch(n){alert("Error: "+n.message),a.disabled=!1,a.innerText="Log Inquiry"}}window.saveInquiry=Hp;function Gp(e){return`
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20 text-left">
                <div class="flex items-center gap-4 text-left">
                    <button onclick="window.setInquiryViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none text-left">Capture Inquiry</h2>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-6 custom-scrollbar pb-32 text-left">
                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Customer Name</label>
                    <input type="text" id="inq-customer" placeholder="Search or add customer..." class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 text-left">
                </div>

                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Product Name</label>
                    <input type="text" id="inq-product" placeholder="e.g. Phone 16 1TB Blue" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 text-left">
                </div>

                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Notes</label>
                    <textarea id="inq-notes" placeholder="Add specific requirements or budget (₹)..." class="w-full h-32 p-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 resize-none text-left"></textarea>
                </div>
            </div>

            <div class="p-8 pt-0 sticky bottom-0 z-20 text-center">
                <button id="log-inquiry-btn" onclick="saveInquiry()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     <span class="material-icons-outlined text-lg text-left">layers</span> Log Inquiry
                </button>
            </div>
        </div>
    `}async function Wp(e){var t;if((t=p.activeInquiry)!=null&&t.id)try{await A.inquiries.updateStatus(p.activeInquiry.id,e),await Y(),window.setInquiryViewMode("list")}catch(s){alert("Update failed: "+s.message)}}window.updateInquiryStatus=Wp;function zp(){const e=p.activeInquiry;return e?`
        <div class="h-full flex flex-col bg-white animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between text-left">
                <button onclick="window.setInquiryViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                    <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                </button>
                <div class="flex gap-2 text-left">
                    <button onclick="updateInquiryStatus('LOST SALE')" class="px-4 py-2 bg-slate-100 text-slate-400 rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Lost Sale</button>
                    <button onclick="updateInquiryStatus('FULFILLED')" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Won Sale</button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-8 custom-scrollbar text-left">
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Product Interest</p>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${e.product_name||e.request}</h2>
                    <div class="flex items-center gap-2 mt-2 text-left">
                         <span class="bg-slate-200 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase text-left">${e.status}</span>
                         <span class="text-[9px] font-bold text-slate-400 text-left">Requested by ${e.customer_name}</span>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Requirements</h3>
                    <div class="card p-6 bg-slate-50 border-transparent text-left">
                        <p class="text-[11px] font-bold text-slate-600 leading-relaxed text-left">${e.request||"No specific requirements logged."}</p>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Recommended Actions</h3>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 hover:border-slate-900 cursor-pointer transition-all text-left">
                            <span class="material-icons-outlined text-slate-400 mb-2 text-left">call</span>
                            <h4 class="text-[10px] font-black text-slate-900 uppercase text-left">Call Customer</h4>
                        </div>
                        <div class="card p-4 hover:border-slate-900 cursor-pointer transition-all text-left">
                            <span class="material-icons-outlined text-slate-400 mb-2 text-left">chat</span>
                            <h4 class="text-[10px] font-black text-slate-900 uppercase text-left">WhatsApp</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-8 shrink-0 text-center">
                <button onclick="updateInquiryStatus('CONTACTED')" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     Mark as Contacted
                </button>
            </div>
        </div>
    `:'<div class="p-20 text-center uppercase text-[10px] font-black opacity-30">No inquiry selected</div>'}window._inquiriesShowAll===void 0&&(window._inquiriesShowAll=!1);window._toggleShowAllInquiries=()=>{window._inquiriesShowAll=!window._inquiriesShowAll,window.triggerRender()};function Hn(e){return e==="desktop-secondary"||e==="mobile"&&p.inquiryViewMode==="add"?Gp():p.inquiryViewMode==="resolve"&&p.activeInquiry?zp():`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${Fp()}
            <div class="px-8 text-left">
                ${window._inquiriesShowAll?"":Up()}
                <div class="flex items-center justify-between mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">${window._inquiriesShowAll?"All Inquiries":"Recent Inquiries"}</h3>
                    <button onclick="window._toggleShowAllInquiries()" class="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">${window._inquiriesShowAll?"Show Summary":"View All"}</button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto px-8 space-y-3 custom-scrollbar pb-32 text-left">
                ${Vp()}
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-10 right-8 z-30 text-left">
                <button onclick="window.setInquiryViewMode('add')" class="w-14 h-14 bg-slate-950 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
        </div>
    `}function Yp(){const t=window.getCache().campaigns||[];return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Pre-Booking</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Campaign Dashboard</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">search</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-4 custom-scrollbar pb-32 text-left">
                ${t.map(s=>{var a;return`
                    <div onclick="window.setActiveCampaign(${JSON.stringify(s).replace(/"/g,"&quot;")}); window.setPreBookingViewMode('details')" class="card p-6 border-2 transition-all cursor-pointer relative overflow-hidden group text-left ${((a=p.activeCampaign)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex justify-between items-start mb-6 text-left">
                            <div class="text-left">
                                <div class="flex items-center gap-2 mb-1 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse text-left"></div>
                                    <span class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">LIVE</span>
                                </div>
                                <h3 class="text-lg font-black text-slate-900 text-left">${s.title}</h3>
                            </div>
                            <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-right">#${s.id}</span>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 text-left">
                            <div class="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50 text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">DEPOSIT</p>
                                <p class="text-xl font-black text-slate-900 text-left">₹${parseInt(s.deposit_amount).toLocaleString()}</p>
                            </div>
                            <div class="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50 text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">START DATE</p>
                                <p class="text-sm font-black text-slate-900 text-left">${new Date(s.start_date).toLocaleDateString()}</p>
                            </div>
                        </div>

                         <div class="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity text-left">
                            <span class="material-icons-outlined text-9xl text-left">rocket_launch</span>
                        </div>
                    </div>
                `}).join("")}

                ${t.length===0?`
                    <div class="py-20 text-center opacity-20">
                        <span class="material-icons-outlined text-4xl">rocket</span>
                        <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No campaigns active</p>
                    </div>
                `:""}

                <button onclick="window.setPreBookingViewMode('create')" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 mt-4 active:scale-95 transition-all text-center">
                     <span class="material-icons-outlined text-lg text-left">add_circle</span> CREATE NEW CAMPAIGN
                </button>
            </div>
        </div>
    `}window._publishCampaign=()=>{var n,l,i,r,d,c,u,x;const e=(l=(n=document.getElementById("pb-title"))==null?void 0:n.value)==null?void 0:l.trim();if((r=(i=document.getElementById("pb-product"))==null?void 0:i.value)==null||r.trim(),(c=(d=document.getElementById("pb-deposit"))==null?void 0:d.value)==null||c.trim(),(x=(u=document.getElementById("pb-duration"))==null?void 0:u.value)==null||x.trim(),!e){window.toast&&window.toast.error("Enter a campaign title");return}const t=(e||"campaign").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),a=`https://store.retaileros.in/${localStorage.getItem("retaileros_retailer_code")||"store"}/prebook/${t}`;navigator.clipboard.writeText(a).then(()=>{window.toast&&window.toast.success("Campaign published! Link copied to clipboard")}).catch(()=>{window.toast&&window.toast.success("Campaign published!")}),window.setPreBookingViewMode("dashboard")};function Jp(e){return`
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-20 text-left">
                <div class="flex items-center gap-4 text-left">
                    <button onclick="window.setPreBookingViewMode('dashboard')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none text-left">Create Campaign</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-[0.1em] mt-1 text-left">Pre-booking Builder</p>
                    </div>
                </div>
                <div class="px-3 py-1 bg-slate-100 rounded-lg text-[9px] font-black text-slate-400 text-center">1/2</div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-8 custom-scrollbar pb-32 text-left">
                <div class="space-y-6 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest -mb-2 text-left">Campaign Details</p>
                    
                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Campaign Title</label>
                        <input type="text" id="pb-title" placeholder="e.g., Flagship Smartphone 16 Pro Launch" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                    </div>

                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Product Selection</label>
                        <div class="relative text-left">
                            <span class="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-left">search</span>
                            <input type="text" id="pb-product" placeholder="Search from inventory..." class="w-full h-14 pl-12 pr-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 text-left">
                        <div class="text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Deposit Amount</label>
                            <div class="relative text-left">
                                <span class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-[11px] text-left">₹</span>
                                <input type="number" id="pb-deposit" placeholder="2000" class="w-full h-14 pl-10 pr-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                            </div>
                        </div>
                        <div class="text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Duration (Days)</label>
                            <div class="relative text-left">
                                <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg text-left">calendar_today</span>
                                <input type="text" id="pb-duration" placeholder="14 Days" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-6 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest -mb-2 text-left">Landing Page Customization</p>
                    
                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Hero Image</label>
                        <div class="aspect-video bg-slate-50 border-2 border-dashed border-slate-100 rounded-3xl flex flex-col items-center justify-center group cursor-pointer hover:bg-slate-100 transition-colors text-center">
                            <span class="material-icons-outlined text-4xl text-slate-200 group-hover:scale-110 transition-transform mb-3 text-center">image</span>
                            <p class="text-[9px] font-black text-slate-300 uppercase tracking-widest text-center">Upload 16:9 Banner</p>
                        </div>
                    </div>

                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Short Description</label>
                        <textarea placeholder="Be the first to own the next generation..." class="w-full h-24 p-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none resize-none text-left"></textarea>
                    </div>
                </div>
            </div>

            <div class="p-8 pt-0 sticky bottom-0 z-20 text-center">
                <button onclick="window._publishCampaign()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     PUBLISH & GENERATE LINK <span class="material-icons-outlined text-center">arrow_forward</span>
                </button>
            </div>
            
             <footer class="p-6 pt-0 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 bg-slate-50/30 text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-300 text-center">RC</div>
                        <div class="text-left">
                            <p class="text-[9px] font-black text-slate-900 text-left">Retailer Center - Mumbai</p>
                            <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest text-left">Draft saved 2m ago</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    `}window._convertBookingToSale=e=>{window.setTab&&window.setTab("new-sale"),window.setApp("sales"),window.toast&&window.toast.success(`Starting sale for ${e}`)};function Kp(e){const t=p.activeCampaign;return t?`
        <div class="h-full flex flex-col bg-white dot-grid overflow-hidden animate-slide-up relative text-left">
            <header class="p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center gap-3 mb-6 text-left">
                    <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-left">PRE-BOOKING</span>
                    <span class="material-icons-outlined text-[10px] text-slate-300 text-left">chevron_right</span>
                    <span class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">${t.product.toUpperCase()}</span>
                </div>
                
                <div class="flex items-center justify-between mb-8 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <button onclick="window.setPreBookingViewMode('dashboard')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors text-left">
                            <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                        </button>
                        <h1 class="text-3xl font-black tracking-tighter text-slate-900 text-left">Campaign Details</h1>
                    </div>
                    <button class="w-10 h-10 flex items-center justify-center text-slate-400 bg-slate-50 rounded-xl text-left"><span class="material-icons-outlined text-left">more_horiz</span></button>
                </div>

                <div class="space-y-6 mb-8 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 text-left">Campaign Link</p>
                     <div class="card p-4 border-slate-100 flex items-center gap-4 bg-white shadow-sm text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-left">
                             <span class="material-symbols-outlined text-xl text-left">link</span>
                        </div>
                        <div class="flex-1 min-w-0 text-left">
                            <p class="text-xs font-black text-slate-950 truncate text-left">retailer.os/pre/${t.product.toLowerCase().replace(/ /g,"-")}</p>
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-1 text-left">Unique Campaign URL</p>
                        </div>
                        <button class="p-3 text-slate-400 hover:text-slate-900 transition-colors text-left"><span class="material-symbols-outlined text-left">share</span></button>
                     </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-4 text-left">
                    <div class="bg-white card p-5 border-slate-100 text-left">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">TOTAL LEADS</p>
                        <p class="text-2xl font-black text-slate-950 text-left">${(window.getCache().bookings||[]).filter(s=>s.campaign_id===t.id).length.toLocaleString()}</p>
                    </div>
                    <div class="bg-white card p-5 border-slate-100 text-left">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">CONVERSION</p>
                        <p class="text-2xl font-black text-slate-950 text-left">--%</p>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-8 mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Booking Log</h3>
                    <div class="px-2 py-1 bg-slate-900 text-white rounded-lg text-[8px] font-black tracking-widest text-right">LIVE</div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-4 custom-scrollbar pb-10 text-left">
                ${(window.getCache().bookings||[]).filter(s=>s.campaign_id===t.id).length===0?`
                   <div class="p-10 text-center opacity-30">
                        <p class="text-[10px] font-black uppercase tracking-widest">No bookings yet</p>
                   </div>
                `:(window.getCache().bookings||[]).filter(s=>s.campaign_id===t.id).map(s=>`
                    <div class="card p-5 border-slate-100 bg-white hover:border-slate-300 transition-all text-left">
                        <div class="flex justify-between items-start mb-4 text-left">
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-950 mb-0.5 text-left">${s.customer_name}</h4>
                                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter font-mono text-left">Deposited: ₹${s.amount}</p>
                            </div>
                            <span class="px-2 py-0.5 rounded-md text-[7px] font-black uppercase text-slate-900 tracking-wider text-right">${s.status||"PAID"}</span>
                        </div>
                        <button onclick="window._convertBookingToSale('${s.customer_name}')" class="w-full py-3 bg-slate-950 text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group shadow-xl text-center">
                            CONVERT TO SALE <span class="material-icons-outlined text-base group-hover:translate-x-1 transition-transform text-center">chevron_right</span>
                        </button>
                    </div>
                `).join("")}
            </div>
            
             <footer class="p-6 bg-white shrink-0 mt-auto border-t border-slate-100 z-20 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 bg-slate-50 relative text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">AS</div>
                        <div class="text-left">
                            <p class="text-[10px] font-black text-slate-900 text-left">Apple Store - Mumbai Central</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-left">Store Manager</p>
                        </div>
                    </div>
                    <button class="flex items-center gap-1 text-slate-900 font-black text-[8px] uppercase tracking-widest text-center">LOGOUT <span class="material-icons-outlined text-sm text-center">logout</span></button>
                </div>
            </footer>
        </div>
    `:""}function Qp(e){return`
        <div class="h-full flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar animate-slide-up text-left">
            <div class="w-full max-w-md mx-auto bg-white min-h-full flex flex-col shadow-2xl relative overflow-hidden text-left">
                <!-- Promo Header -->
                <header class="p-6 pb-4 flex justify-between items-center bg-white/40 absolute top-0 w-full z-20 backdrop-blur-md text-left">
                    <p class="text-[8px] font-black text-slate-950 uppercase tracking-[0.3em] text-left">EXCLUSIVE ACCESS</p>
                    <div class="flex items-center gap-1 px-3 py-1 bg-slate-950 text-white rounded-full text-left">
                         <span class="text-[8px] font-black uppercase tracking-widest text-left">APPLESTORE-MUMBAICENTRAL</span>
                         <span class="material-symbols-outlined text-[10px] text-left">verified</span>
                    </div>
                </header>

                <div class="relative w-full aspect-[4/5] bg-slate-950 overflow-hidden group text-left">
                    <img src="https://images.unsplash.com/photo-1726759081577-4c75ca7732a3?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s] text-left">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent text-left"></div>
                    
                    <div class="absolute inset-0 flex flex-col items-center justify-end p-10 pb-16 text-center text-white">
                        <div class="mb-10 text-center animate-pulse">
                            <p class="text-[8px] font-black uppercase tracking-[0.4em] mb-4 text-slate-400">PRE-BOOKING CLOSES IN</p>
                            <div class="flex gap-4 text-center justify-center">
                                <div class="text-center">
                                    <p class="text-2xl font-black tabular-nums">02</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">DAYS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">14</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">HOURS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">38</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">MINS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">05</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">SECS</p>
                                </div>
                            </div>
                        </div>

                        <h2 class="text-4xl font-black mb-2 tracking-tighter">iPhone 16 Pro</h2>
                        <p class="text-xs font-bold text-slate-400 mb-8 max-w-[200px]">The ultimate leap into the future.</p>
                        
                        <button class="px-8 py-2.5 border border-white/20 rounded-full text-[8px] font-black uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-white hover:text-slate-950 transition-all text-center">RESERVE NOW</button>
                    </div>
                </div>

                <div class="p-10 space-y-12 text-left">
                    <div class="text-center">
                        <h3 class="text-2xl font-black tracking-tighter text-slate-950 mb-2">Reserve your device.</h3>
                        <p class="text-[10px] font-bold text-slate-400 mb-6">Secure yours with a fully refundable deposit.</p>
                        <div class="inline-block px-4 py-2 border-2 border-slate-950 text-[8px] font-black uppercase tracking-widest rounded-xl mb-12">VALID ONLY AT APPLE STORE - MUMBAI CENTRAL</div>
                    </div>

                    <div class="space-y-6 text-left">
                         <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">FULL NAME</label>
                            <input type="text" placeholder="John Doe" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                        <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">PHONE NUMBER</label>
                            <input type="text" placeholder="+91 98765 43210" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                        <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">EMAIL ADDRESS</label>
                            <input type="email" placeholder="john@example.com" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                    </div>

                    <div class="pt-6 text-center">
                        <button onclick="window.setPreBookingViewMode('dashboard')" class="w-full py-5 bg-slate-950 text-white rounded-3xl text-[12px] font-black uppercase tracking-[0.1em] shadow-2xl flex flex-col items-center justify-center gap-1 mb-8 active:scale-95 transition-all text-center">
                             <div class="text-center">Pay ₹5,000 Deposit</div>
                             <div class="text-[8px] font-bold opacity-30 tracking-widest text-center">INSTANT CONFIRMATION</div>
                        </button>

                        <div class="flex flex-col items-center gap-4 py-8 border-t border-slate-100 text-center">
                             <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-center">Supported Payment Methods</p>
                             <div class="flex gap-6 grayscale opacity-30 text-center">
                                <span class="material-icons-outlined text-xl text-center">credit_card</span>
                                <span class="material-icons-outlined text-xl text-center">payments</span>
                                <span class="material-symbols-outlined text-xl text-center">account_balance</span>
                                <span class="material-symbols-outlined text-xl text-center">account_balance_wallet</span>
                             </div>
                        </div>

                         <div class="bg-slate-50 p-6 rounded-3xl space-y-4 text-left">
                            <div class="flex items-center gap-3 mb-2 text-left">
                                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm text-center"><span class="material-icons-outlined text-base text-center">info</span></div>
                                <h4 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Pre-booking Benefits</h4>
                            </div>
                            <ul class="space-y-2 pl-11 relative text-left">
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Guaranteed Day 1 Delivery
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Exclusive 'Mumbai Central' Launch Invite
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Complimentary Premium Case
                                </li>
                            </ul>
                        </div>
                    </div>

                    <footer class="pt-20 pb-10 flex flex-col items-center gap-6 text-center">
                        <div class="flex items-center gap-3 opacity-30 grayscale text-center">
                             <div class="w-8 h-8 bg-slate-950 rounded-xl flex items-center justify-center text-center"><div class="w-2 h-2 bg-white rounded-full text-center"></div></div>
                             <h4 class="text-base font-black tracking-tighter text-slate-950 text-center">RetailerOS</h4>
                        </div>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center uppercase">© 2024 APPLE STORE MUMBAI CENTRAL. ALL RIGHTS RESERVED.</p>
                        
                        <button class="flex items-center gap-3 px-5 py-3 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm bg-white hover:bg-slate-50 transition-colors mt-4 text-center">
                            <span class="material-icons-outlined text-base text-center">support_agent</span> Need Help?
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    `}function Gn(e){return e==="desktop-secondary"||e==="mobile"&&p.preBookingViewMode==="create"?Jp():p.preBookingViewMode==="details"&&p.activeCampaign?Kp():p.preBookingViewMode==="public"?Qp():Yp()}function Xp(){const e=window.getCache(),t=e.automations||[],s=e.automationMessages||[],a=t.filter(i=>i.status==="active").length;t.filter(i=>i.status==="completed").length,s.length;const n=s.filter(i=>i.status==="sent").length,l=s.filter(i=>i.status==="pending").length;return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
             <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Automation</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">RetailerOS</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">settings</span></button>
            </div>
        </header>

        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-32 text-left">
            <!-- Stats Cards -->
            <div class="grid grid-cols-3 gap-3 text-left">
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${a}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active</p>
                </div>
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${n}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Sent</p>
                </div>
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${l}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Scheduled</p>
                </div>
            </div>

            <!-- Active Automations List -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between px-1 text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">All Automations</h3>
                    <span class="text-[8px] font-black text-slate-300 uppercase">${t.length} total</span>
                </div>

                <div class="space-y-3 text-left">
                    ${t.map(i=>{const r=s.filter(u=>u.automation_id===i.id),d=r.filter(u=>u.status==="sent").length;r.filter(u=>u.status==="pending").length;const c=r.length>0?Math.round(d/r.length*100):0;return`
                            <button type="button" onclick="window.setAutomationMode('details', '${i.id}')" class="card p-4 border-2 transition-all cursor-pointer text-left w-full ${p.activeAutomationId===i.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-100"}">
                                <div class="flex items-center gap-4 text-left">
                                    <div class="w-12 h-12 ${i.status==="active"?"bg-slate-900":"bg-slate-200"} rounded-xl flex items-center justify-center text-center">
                                        <span class="material-icons-outlined ${i.status==="active"?"text-white":"text-slate-400"} text-lg">smart_toy</span>
                                    </div>
                                    <div class="flex-1 min-w-0 text-left">
                                        <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${i.name}</h4>
                                        <p class="text-[10px] font-bold text-slate-400 text-left">${i.customer_name}</p>
                                        <div class="flex items-center gap-3 mt-2">
                                            <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${c}%"></div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-400">${d}/${r.length}</span>
                                        </div>
                                    </div>
                                    <div class="text-right shrink-0">
                                        <div class="px-2 py-0.5 ${i.status==="active"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} text-[8px] font-black rounded uppercase tracking-wider mb-1">${i.status}</div>
                                        <p class="text-[9px] font-bold text-slate-300 uppercase">${new Date(i.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</p>
                                    </div>
                                </div>
                            </button>
                        `}).join("")}

                    ${t.length===0?`
                        <div class="py-16 text-center">
                            <span class="material-icons-outlined text-4xl text-slate-200 mb-4">smart_toy</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No automations yet</p>
                            <p class="text-[9px] font-bold text-slate-300 mt-1">Create one from a sale to get started</p>
                        </div>
                    `:""}
                </div>
            </section>
        </div>

        <!-- Floating Action Button -->
        <div class="absolute bottom-10 right-10 z-20 text-left">
            <button onclick="window.setAutomationMode('create')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}let Re=null,ve=null,$t="",Pe="product_journey";const wn={product_journey:{name:"Product Journey",description:"Welcome message, tips, and feedback sequence",messages:[{day:0,type:"welcome",title:"Welcome Message",content:"Thank you for your purchase! Here are some tips to get started with your new {product}..."},{day:1,type:"tips",title:"Getting Started",content:"Have you set up {product} yet? Here is a quick guide to help you..."},{day:3,type:"tips",title:"Pro Tips",content:"Here are some advanced tips to get the most out of your {product}..."},{day:7,type:"upsell",title:"Accessories",content:"Enhance your {product} experience with our recommended accessories..."},{day:14,type:"feedback",title:"How is it going?",content:"It has been 2 weeks! We would love to hear your feedback..."}]},installation:{name:"Installation Follow-up",description:"For products requiring installation",messages:[{day:0,type:"welcome",title:"Order Confirmed",content:"Your {product} order is confirmed! Installation will be scheduled soon."},{day:1,type:"reminder",title:"Installation Reminder",content:"Your installation is scheduled. Our technician will arrive on time."},{day:3,type:"tips",title:"Maintenance Tips",content:"Here are some tips to keep your {product} running smoothly..."},{day:7,type:"feedback",title:"Installation Feedback",content:"How was your installation experience? Let us know!"}]},premium:{name:"Premium Care",description:"Extended engagement for high-value purchases",messages:[{day:0,type:"welcome",title:"Welcome to Premium",content:"Thank you for your premium purchase! You now have access to priority support."},{day:1,type:"tips",title:"Exclusive Features",content:"Discover the exclusive features of your {product}..."},{day:3,type:"tips",title:"Expert Tips",content:"Our experts share their top tips for your {product}..."},{day:7,type:"upsell",title:"Extended Warranty",content:"Protect your investment with our extended warranty plans..."},{day:14,type:"tips",title:"Advanced Features",content:"Ready for advanced features? Here is what you can do..."},{day:21,type:"upsell",title:"Upgrade Options",content:"Check out the latest upgrades available for your {product}..."},{day:30,type:"feedback",title:"Monthly Check-in",content:"How is your experience so far? We value your feedback!"}]}};window.resetAutomationForm=()=>{Re=null,ve=null,$t="",Pe="product_journey",window._automationContext=null};window.selectAutomationCustomer=e=>{Re=e,ve=null,window.triggerRender()};window.selectAutomationSale=e=>{var n,l,i;ve=e;const t=window.getCache(),s=(n=t.sales)==null?void 0:n.find(r=>r.id===e),a=((l=t.saleItems)==null?void 0:l.filter(r=>r.sale_id===e))||[];s&&($t=`${((i=a[0])==null?void 0:i.product_name)||"Product"} - Post-Purchase Journey`,s.installation_required?Pe="installation":s.total_amount>=5e4&&(Pe="premium")),window.triggerRender()};window.updateAutomationName=e=>{$t=e};window.selectAutomationTemplate=e=>{Pe=e,window.triggerRender()};window.createAutomation=async()=>{var a,n,l;if(!Re||!ve||!$t){window.toast.warning("Please select a customer, sale, and enter a name");return}const e=window.getCache(),t=(a=e.customers)==null?void 0:a.find(i=>i.id===Re),s=wn[Pe];if(!t||!s){window.toast.error("Invalid selection");return}try{const i=`AUTO-${Math.random().toString(36).substr(2,8).toUpperCase()}`,r=new Date;await A.automations.add({id:i,name:$t,customer_id:Re,customer_name:t.name,sale_id:ve,status:"active",created_at:r.toISOString()});const c=((l=(((n=e.saleItems)==null?void 0:n.filter(u=>u.sale_id===ve))||[])[0])==null?void 0:l.product_name)||"your product";for(const u of s.messages){const x=`MSG-${Math.random().toString(36).substr(2,8).toUpperCase()}`,b=new Date(r.getTime()+u.day*864e5),v=u.content.replace(/\{product\}/g,c).replace(/\{name\}/g,t.name.split(" ")[0]);if(await A.automations.addMessage({id:x,automation_id:i,message_type:u.type,title:u.title,content:v,day_offset:u.day,scheduled_date:b.toISOString(),status:u.day===0?"sent":"pending"}),u.day===0&&t.phone){let w="sent";try{window.toast.info("Sending welcome message via WhatsApp..."),w=(await window.sendWhatsAppMessage(t.phone,v)).success?"delivered":"sent"}catch(g){console.error("WATI welcome message error:",g),w="failed"}await A.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:Re,type:"whatsapp",direction:"outgoing",content:v,sent_at:r.toISOString(),automation_id:i,sale_id:ve,status:w})}}await Y(),window.toast.success("Automation created successfully!"),window.resetAutomationForm(),window.setAutomationMode("details",i)}catch(i){console.error("Error creating automation:",i),window.toast.error("Failed to create automation: "+i.message)}};function Rl(e=!1){var r,d;const t=window.getCache(),s=t.customers||[],a=t.sales||[];if(window._automationContext&&!Re){const c=window._automationContext;Re=c.customerId,ve=c.transactionId,(d=(r=c.items)==null?void 0:r[0])!=null&&d.name&&($t=`${c.items[0].name} - Post-Purchase Journey`),c.installationRequired?Pe="installation":c.total>=5e4&&(Pe="premium")}const n=Re?a.filter(c=>c.customer_id===Re&&c.status!=="draft"):[],l=s.find(c=>c.id===Re);a.find(c=>c.id===ve),ve&&(t.saleItems||[]).filter(c=>c.sale_id===ve);const i=wn[Pe];return`
        <div class="h-full flex flex-col bg-white relative text-left">
            <header class="p-4 sm:p-6 pb-4 shrink-0 border-b border-slate-100 text-left">
                <div class="flex items-center gap-4 text-left">
                    <button onclick="window.resetAutomationForm(); window.setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm text-center">
                        <span class="material-icons-outlined">chevron_left</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter text-left">New Automation</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-left">Create Message Sequence</p>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 text-left">
                <!-- Step 1: Select Customer -->
                <div class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">1. Select Customer</p>
                    
                    ${l?`
                        <div class="card p-4 border-2 border-slate-900 shadow-lg flex items-center justify-between relative overflow-hidden text-left">
                            <div class="flex items-center gap-4 text-left">
                                <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">
                                    ${l.name.split(" ").map(c=>c[0]).join("").toUpperCase().slice(0,2)}
                                </div>
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">${l.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${l.phone||"No phone"}</p>
                                </div>
                            </div>
                            <button onclick="selectedCustomerId = null; selectedSaleId = null; window.triggerRender();" class="text-slate-400 hover:text-slate-900">
                                <span class="material-icons-outlined text-sm">close</span>
                            </button>
                        </div>
                    `:`
                        <div class="space-y-2 max-h-48 overflow-y-auto">
                            ${s.slice(0,10).map(c=>`
                                <button type="button" onclick="window.selectAutomationCustomer('${c.id}')" class="card p-3 w-full text-left hover:border-slate-300 transition-all flex items-center gap-3">
                                    <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-400">
                                        ${c.name.split(" ").map(u=>u[0]).join("").toUpperCase().slice(0,2)}
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${c.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${c.phone||"No phone"}</p>
                                    </div>
                                </button>
                            `).join("")}
                        </div>
                    `}
                </div>

                <!-- Step 2: Select Sale -->
                ${Re?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">2. Select Transaction</p>
                        
                        ${n.length===0?`
                            <div class="card p-6 text-center border-dashed">
                                <p class="text-[10px] font-bold text-slate-400">No completed sales for this customer</p>
                            </div>
                        `:`
                            <div class="space-y-2 max-h-48 overflow-y-auto">
                                ${n.map(c=>{var b;const u=(t.saleItems||[]).filter(v=>v.sale_id===c.id),x=ve===c.id;return`
                                        <button type="button" onclick="window.selectAutomationSale('${c.id}')" class="card p-4 w-full text-left transition-all ${x?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                            <div class="flex justify-between items-start">
                                                <div class="text-left">
                                                    <p class="text-xs font-black text-slate-900">${((b=u[0])==null?void 0:b.product_name)||"Sale"}</p>
                                                    <p class="text-[9px] font-bold text-slate-400">Order #${c.id} • ₹${(c.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 uppercase">${new Date(c.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
                                            </div>
                                            ${x?'<span class="material-icons-outlined text-slate-900 text-sm mt-2">check_circle</span>':""}
                                        </button>
                                    `}).join("")}
                            </div>
                        `}
                    </div>
                `:""}

                <!-- Step 3: Configure Automation -->
                ${ve?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">3. Automation Name</p>
                        <input type="text" value="${$t}" onchange="window.updateAutomationName(this.value)" placeholder="e.g., iPhone 15 - Welcome Sequence" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">4. Message Template</p>
                        <div class="grid grid-cols-1 gap-2">
                            ${Object.entries(wn).map(([c,u])=>`
                                <button type="button" onclick="window.selectAutomationTemplate('${c}')" class="card p-4 text-left transition-all ${Pe===c?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 ${Pe===c?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} rounded-xl flex items-center justify-center">
                                            <span class="material-icons-outlined text-sm">${c==="product_journey"?"route":c==="installation"?"build":"star"}</span>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-xs font-black text-slate-900">${u.name}</p>
                                            <p class="text-[9px] font-bold text-slate-400">${u.description}</p>
                                        </div>
                                        ${Pe===c?'<span class="material-icons-outlined text-slate-900 text-sm">check_circle</span>':""}
                                    </div>
                                </button>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Preview Messages -->
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Message Sequence Preview</p>
                        <div class="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                            ${i.messages.map((c,u)=>`
                                <div class="relative text-left">
                                    <div class="absolute -left-6 top-0 w-4 h-4 ${c.type==="welcome"?"bg-slate-900":c.type==="tips"?"bg-slate-700":c.type==="upsell"?"bg-slate-600":c.type==="feedback"?"bg-slate-500":"bg-slate-400"} rounded-full flex items-center justify-center z-10">
                                        <span class="text-white text-[8px] font-black">${u+1}</span>
                                    </div>
                                    <div class="bg-slate-50 rounded-xl p-3">
                                        <div class="flex items-center justify-between mb-1">
                                            <span class="text-[8px] font-black text-slate-500 uppercase">Day ${c.day} • ${c.type}</span>
                                        </div>
                                        <p class="text-[10px] font-black text-slate-900">${c.title}</p>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `:""}
            </div>

            <!-- Footer Action -->
            ${ve&&$t?`
                <div class="p-4 sm:p-6 bg-white border-t border-slate-100 text-center shrink-0">
                    <button onclick="window.createAutomation()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-center">
                        <span class="material-icons-outlined text-sm">play_circle</span> Start Automation
                    </button>
                </div>
            `:""}
        </div>
    `}window.sendAutomationMessage=async e=>{var t,s,a,n,l;try{const i=window.getCache(),r=(t=i.automationMessages)==null?void 0:t.find(g=>g.id===e),d=(s=i.automations)==null?void 0:s.find(g=>g.id===(r==null?void 0:r.automation_id)),c=(a=i.customers)==null?void 0:a.find(g=>g.id===(d==null?void 0:d.customer_id));if(!r||!d){window.toast.error("Message not found");return}if(!(c!=null&&c.phone)){window.toast.error("Customer phone number not found");return}window.toast.info("Sending WhatsApp message...");const x=((l=(((n=i.saleItems)==null?void 0:n.filter(g=>g.sale_id===d.sale_id))||[])[0])==null?void 0:l.product_name)||"your product",b=r.content.replace(/\{product\}/g,x).replace(/\{name\}/g,c.name.split(" ")[0]);let v="sent",w=null;try{w=await window.sendWhatsAppMessage(c.phone,b),w.success?(v="delivered",window.toast.success("WhatsApp message sent!")):(v="failed",window.toast.warning("Message queued but may not have been delivered"))}catch(g){console.error("WATI Error:",g),v="failed",window.toast.error("WhatsApp send failed: "+g.message)}await A.automations.updateMessageStatus(e,v==="failed"?"pending":"sent",new Date().toISOString()),await A.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:d.customer_id,type:"whatsapp",direction:"outgoing",content:b,sent_at:new Date().toISOString(),automation_id:d.id,sale_id:d.sale_id,status:v}),await Y()}catch(i){console.error("Error sending message:",i),window.toast.error("Failed to send message: "+i.message)}};window.toggleAutomationStatus=async e=>{var t;try{const a=(t=window.getCache().automations)==null?void 0:t.find(l=>l.id===e);if(!a)return;const n=a.status==="active"?"paused":"active";await A.automations.update(e,{status:n}),await Y(),window.toast.success(`Automation ${n==="active"?"resumed":"paused"}`)}catch(s){console.error("Error toggling automation:",s),window.toast.error("Failed to update automation")}};window.deleteAutomation=async e=>{window.showConfirm("Are you sure you want to delete this automation? All scheduled messages will be cancelled.",async()=>{try{await A.automations.deleteMessages(e),await A.automations.delete(e),await Y(),window.toast.success("Automation deleted"),window.setAutomationMode("dashboard")}catch(t){console.error("Error deleting automation:",t),window.toast.error("Failed to delete automation")}})};window.openWhatsAppMessage=(e,t)=>{const s=`https://wa.me/${(e==null?void 0:e.replace(/\D/g,""))||""}?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};function Cl(e,t=!1){var x,b,v;const s=window.getCache(),a=(x=s.automations)==null?void 0:x.find(w=>w.id===e);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Automation not found</p>
                </div>
            </div>
        `;const n=(s.automationMessages||[]).filter(w=>w.automation_id===e).sort((w,g)=>w.day_offset-g.day_offset),l=(b=s.customers)==null?void 0:b.find(w=>w.id===a.customer_id),i=(v=s.sales)==null?void 0:v.find(w=>w.id===a.sale_id);i&&(s.saleItems||[]).filter(w=>w.sale_id===i.id);const r=n.filter(w=>w.status==="sent").length,d=n.filter(w=>w.status==="pending").length,c=n.length>0?Math.round(r/n.length*100):0,u=w=>{switch(w){case"welcome":return{icon:"waving_hand",bg:"bg-slate-900",text:"text-white"};case"tips":return{icon:"lightbulb",bg:"bg-slate-700",text:"text-white"};case"upsell":return{icon:"trending_up",bg:"bg-slate-600",text:"text-white"};case"feedback":return{icon:"rate_review",bg:"bg-slate-500",text:"text-white"};case"reminder":return{icon:"notifications",bg:"bg-slate-400",text:"text-white"};default:return{icon:"chat",bg:"bg-slate-300",text:"text-slate-700"}}};return`
        <div class="h-full flex flex-col bg-white text-left">
            <!-- Header -->
            <header class="p-4 sm:p-6 border-b border-slate-100 shrink-0">
                <div class="flex items-center gap-4 mb-4">
                    <button onclick="window.setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm">
                        <span class="material-icons-outlined">chevron_left</span>
                    </button>
                    <div class="flex-1 min-w-0">
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter truncate">${a.name}</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${a.customer_name}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="window.toggleAutomationStatus('${a.id}')" class="w-10 h-10 flex items-center justify-center ${a.status==="active"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} rounded-xl hover:opacity-80 transition-all" title="${a.status==="active"?"Pause":"Resume"}">
                            <span class="material-icons-outlined text-sm">${a.status==="active"?"pause":"play_arrow"}</span>
                        </button>
                        <button onclick="window.deleteAutomation('${a.id}')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 text-slate-400 rounded-xl hover:text-slate-900 hover:border-slate-300 transition-all" title="Delete">
                            <span class="material-icons-outlined text-sm">delete</span>
                        </button>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="flex items-center gap-3">
                    <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${c}%"></div>
                    </div>
                    <span class="text-[10px] font-black text-slate-500">${r}/${n.length}</span>
                </div>
            </header>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
                <!-- Stats -->
                <div class="grid grid-cols-3 gap-3">
                    <div class="card p-3 text-center">
                        <p class="text-xl font-black text-slate-900">${r}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase">Sent</p>
                    </div>
                    <div class="card p-3 text-center">
                        <p class="text-xl font-black text-slate-900">${d}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase">Scheduled</p>
                    </div>
                    <div class="card p-3 text-center">
                        <span class="text-xl font-black ${a.status==="active"?"text-slate-900":"text-slate-400"}">${a.status==="active"?"●":"○"}</span>
                        <p class="text-[8px] font-black text-slate-400 uppercase">${a.status}</p>
                    </div>
                </div>

                <!-- Customer Info -->
                ${l?`
                    <div class="card p-4 flex items-center gap-4">
                        <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-sm text-slate-400">
                            ${l.name.split(" ").map(w=>w[0]).join("").toUpperCase().slice(0,2)}
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-black text-slate-900">${l.name}</p>
                            <p class="text-[10px] font-bold text-slate-400">${l.phone||"No phone"}</p>
                        </div>
                        ${l.phone?`
                            <a href="https://wa.me/${l.phone.replace(/\D/g,"")}" target="_blank" class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-all">
                                <span class="material-icons-outlined text-sm">chat</span>
                            </a>
                        `:""}
                    </div>
                `:""}

                <!-- Message Sequence -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Message Sequence</h3>
                    
                    <div class="relative pl-8 space-y-4 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-slate-200">
                        ${n.map((w,g)=>{const _=u(w.message_type),E=w.status==="sent",T=new Date(w.scheduled_date).toDateString()===new Date().toDateString();return new Date(w.scheduled_date)<new Date,`
                                <div class="relative">
                                    <div class="absolute -left-8 top-4 w-6 h-6 ${E?"bg-slate-900":"bg-white border-2 border-slate-200"} rounded-full flex items-center justify-center z-10">
                                        ${E?'<span class="material-icons-outlined text-white text-xs">check</span>':`<span class="text-[9px] font-black text-slate-400">${g+1}</span>`}
                                    </div>
                                    
                                    <div class="card p-4 ${E?"bg-slate-50 border-slate-100":T?"border-slate-900 shadow-lg":"border-slate-100"}">
                                        <div class="flex items-start gap-3">
                                            <div class="w-10 h-10 ${_.bg} rounded-xl flex items-center justify-center shrink-0">
                                                <span class="material-icons-outlined ${_.text} text-sm">${_.icon}</span>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center justify-between mb-1">
                                                    <span class="text-[8px] font-black ${E?"text-slate-400":T?"text-slate-900":"text-slate-400"} uppercase">
                                                        Day ${w.day_offset} • ${w.message_type}
                                                    </span>
                                                    <span class="text-[8px] font-bold ${E?"text-slate-400":T?"text-slate-900":"text-slate-300"}">
                                                        ${E?"Sent":T?"Today":new Date(w.scheduled_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}
                                                    </span>
                                                </div>
                                                <h4 class="text-xs font-black text-slate-900 mb-1">${w.title}</h4>
                                                <p class="text-[10px] font-bold text-slate-500 line-clamp-2">${w.content}</p>
                                                
                                                ${!E&&(l!=null&&l.phone)?`
                                                    <div class="flex items-center gap-2 mt-3">
                                                        <button onclick="window.sendAutomationMessage('${w.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-800 transition-all">
                                                            <span class="material-icons-outlined text-xs">send</span> Send Now
                                                        </button>
                                                        <button onclick="window.openWhatsAppMessage('${l.phone}', '${w.content.replace(/'/g,"\\'")}')" class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                                            <span class="material-icons-outlined text-xs">chat</span> WhatsApp
                                                        </button>
                                                    </div>
                                                `:""}
                                                
                                                ${E&&w.sent_at?`
                                                    <p class="text-[8px] font-bold text-slate-300 mt-2 flex items-center gap-1">
                                                        <span class="material-icons-outlined text-xs">done_all</span>
                                                        Sent ${new Date(w.sent_at).toLocaleString("en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}
                                                    </p>
                                                `:""}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        </div>
    `}function Wn(e){const t=e==="mobile",s=e==="desktop-secondary";return window.setAutomationMode=(a,n=null)=>{p.automationViewMode=a,n!==null&&(p.activeAutomationId=n),C()},s?p.automationViewMode==="create"?Rl():p.automationViewMode==="details"&&p.activeAutomationId?Cl(p.activeAutomationId):`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a workflow or create new</p>
                </div>
            </div>
        `:t&&p.automationViewMode==="create"?Rl(!0):t&&p.automationViewMode==="details"?Cl(p.activeAutomationId,!0):Xp()}function zn(){return`
    <div class="h-full w-full flex items-center justify-center p-6">
      <div class="text-center text-slate-500">
        <div class="text-sm font-bold uppercase tracking-widest mb-2">My Store</div>
        <div class="text-xs">This module is coming soon.</div>
      </div>
    </div>
  `}function Yn(){return`
    <div class="h-full w-full flex items-center justify-center p-6">
      <div class="text-center text-slate-500">
        <div class="text-sm font-bold uppercase tracking-widest mb-2">Notifications</div>
        <div class="text-xs">This module is coming soon.</div>
      </div>
    </div>
  `}function Zp(e=!0){if(!e)return;const t=[p.currentApp];p.currentApp==="sales"?t.push(p.currentTab):p.currentApp==="clients"?(t.push(p.clientViewMode),p.selectedClient&&p.clientViewMode==="profile"&&t.push(encodeURIComponent(p.selectedClient))):p.currentApp==="reports"?t.push(p.reportsTab):p.currentApp==="repairs"?(t.push(p.repairTab),t.push(p.repairViewMode)):p.currentApp==="inventory"?(t.push(p.inventoryTab),t.push(p.inventoryMode)):p.currentApp==="marketplace"?(t.push(p.marketplaceTab),t.push(p.marketplaceViewMode)):p.currentApp==="inquiries"?t.push(p.inquiryViewMode):p.currentApp==="prebooking"?t.push(p.preBookingViewMode):p.currentApp==="automation"?t.push(p.automationViewMode):p.currentApp==="schemes"?t.push(p.schemesTab):p.currentApp==="settings"?t.push(p.settingsView):p.currentApp==="mystore"&&(t.push(p.myStoreTab),p.myStoreViewMode!=="list"&&t.push(p.myStoreViewMode));const s="#/"+t.filter(Boolean).join("/");window.location.hash!==s&&window.history.pushState(null,"",s)}function Al(){const e=window.location.hash.replace("#/","");if(!e)return;const t=e.split("/"),s=t[0];s&&(p.currentApp=s),s==="sales"?t[1]&&(p.currentTab=t[1]):s==="clients"?(t[1]&&(p.clientViewMode=t[1]),t[2]&&(p.selectedClient=decodeURIComponent(t[2]))):s==="reports"?t[1]&&(p.reportsTab=t[1]):s==="repairs"?(t[1]&&(p.repairTab=t[1]),t[2]&&(p.repairViewMode=t[2])):s==="inventory"?(t[1]&&(p.inventoryTab=t[1]),t[2]&&(p.inventoryMode=t[2])):s==="marketplace"?(t[1]&&(p.marketplaceTab=t[1]),t[2]&&(p.marketplaceViewMode=t[2])):s==="inquiries"?t[1]&&(p.inquiryViewMode=t[1]):s==="prebooking"?t[1]&&(p.preBookingViewMode=t[1]):s==="automation"?t[1]&&(p.automationViewMode=t[1]):s==="schemes"?t[1]&&(p.schemesTab=t[1]):s==="settings"?t[1]&&(p.settingsView=t[1]):s==="mystore"&&(t[1]&&(p.myStoreTab=t[1]),t[2]&&(p.myStoreViewMode=t[2])),C(!1)}function eu(){window.addEventListener("hashchange",Al),Al()}const Ct={endpoint:"https://live-mt-server.wati.io/319917",token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hcmtldGluZ0BuZXN0ZXIuaW4iLCJuYW1laWQiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiZW1haWwiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiYXV0aF90aW1lIjoiMDIvMTAvMjAyNSAwOTo1MDoxOSIsInRlbmFudF9pZCI6IjMxOTkxNyIsImp0aSI6ImFiNzBlNGU3LTAxNDUtNDg4NS1hYWU3LTQ3ZDc3YTA0NThhOSIsImRiX25hbWUiOiJtdC1wcm9kLVRlbmFudHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.V1k2oIW0iDKep9_zG9WpS62LVcgXxj7vAndigvmZS2I"};function tu(e){if(!e)return null;let t=e.replace(/\D/g,"");return t.length===10&&(t="91"+t),t}async function su(e,t){var a;const s=tu(e);if(!s)throw new Error("Invalid phone number");try{const n=await fetch(`${Ct.endpoint}/api/v1/sendSessionMessage/${s}`,{method:"POST",headers:{Authorization:Ct.token,"Content-Type":"application/json"},body:JSON.stringify({messageText:t})}),l=await n.json();if(!n.ok){if(console.error("WATI API Error:",l),(a=l.message)!=null&&a.includes("session")||l.result===!1)return console.log("Session expired, trying template message..."),await au(s,t);throw new Error(l.message||"Failed to send message")}return{success:!0,data:l}}catch(n){throw console.error("WATI Send Error:",n),n}}async function au(e,t){try{const s=await fetch(`${Ct.endpoint}/api/v1/sendTemplateMessage`,{method:"POST",headers:{Authorization:Ct.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,templateName:"retaileros_notification",parameters:[{name:"message",value:t}],broadcast_name:"RetailerOS"})}),a=await s.json();return!s.ok&&a.result===!1?(console.log("Template not found, trying interactive message..."),await nu(e,t)):{success:!0,data:a,method:"template"}}catch(s){throw console.error("Template message error:",s),s}}async function nu(e,t){try{const s=await fetch(`${Ct.endpoint}/api/v1/sendInteractiveButtonsMessage`,{method:"POST",headers:{Authorization:Ct.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,header:{type:"Text",text:"RetailerOS"},body:t,footer:"Powered by RetailerOS",buttons:[{type:"reply",reply:{id:"reply_ok",title:"OK"}}]})}),a=await s.json();return{success:s.ok,data:a,method:"interactive"}}catch(s){throw console.error("Interactive message error:",s),s}}async function lu(){try{return(await fetch(`${Ct.endpoint}/api/v1/getContacts?pageSize=1`,{method:"GET",headers:{Authorization:Ct.token}})).ok}catch(e){return console.error("WATI connection test failed:",e),!1}}window.sendWhatsAppMessage=su;window.testWatiConnection=lu;let Ot=null,Ka=null;const Tl={success:{icon:"check_circle",bg:"bg-slate-900",text:"text-white"},error:{icon:"error",bg:"bg-slate-800",text:"text-white"},warning:{icon:"warning",bg:"bg-slate-600",text:"text-white"},info:{icon:"info",bg:"bg-slate-700",text:"text-white"}};function iu(){Ot||(Ot=document.createElement("div"),Ot.id="toast-container",Ot.className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none",document.body.appendChild(Ot))}function Gs(e,t="info",s=3e3){iu(),Ka&&clearTimeout(Ka);const a=Tl[t]||Tl.info,n=document.createElement("div");return n.className=`
        ${a.bg} ${a.text} 
        px-5 py-3.5 rounded-2xl shadow-2xl 
        flex items-center gap-3 
        transform transition-all duration-300 
        opacity-0 translate-y-[-20px] scale-95
        pointer-events-auto
        max-w-[90vw] sm:max-w-md
    `.trim().replace(/\s+/g," "),n.innerHTML=`
        <span class="material-icons-outlined text-lg shrink-0">${a.icon}</span>
        <span class="text-sm font-bold leading-snug">${La(e)}</span>
    `,(t==="error"||e.length>50)&&(n.innerHTML+=`
            <button onclick="this.parentElement.remove()" class="ml-2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-all shrink-0">
                <span class="material-icons-outlined text-sm">close</span>
            </button>
        `),Ot.innerHTML="",Ot.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("opacity-0","translate-y-[-20px]","scale-95"),n.classList.add("opacity-100","translate-y-0","scale-100")}),Ka=setTimeout(()=>{ru(n)},s),n}function ru(e){!e||!e.parentElement||(e.classList.remove("opacity-100","translate-y-0","scale-100"),e.classList.add("opacity-0","translate-y-[-20px]","scale-95"),setTimeout(()=>{e.remove()},300))}function La(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}const ou={success:(e,t)=>Gs(e,"success",t),error:(e,t)=>Gs(e,"error",t||5e3),warning:(e,t)=>Gs(e,"warning",t||4e3),info:(e,t)=>Gs(e,"info",t)};function cu(e,t,s){const a=document.createElement("div");a.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6 text-center">
                <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl text-slate-600">help_outline</span>
                </div>
                <p class="text-sm font-bold text-slate-900 leading-relaxed">${La(e)}</p>
            </div>
            <div class="flex border-t border-slate-100">
                <button id="confirm-cancel" class="flex-1 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Cancel
                </button>
                <button id="confirm-ok" class="flex-1 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 hover:bg-slate-100 transition-all border-l border-slate-100">
                    Confirm
                </button>
            </div>
        </div>
    `,document.body.appendChild(a);const n=a.querySelector("div > div");requestAnimationFrame(()=>{n.classList.remove("scale-95","opacity-0"),n.classList.add("scale-100","opacity-100")}),a.querySelector("#confirm-cancel").onclick=()=>{xt(a),s&&s()},a.querySelector("#confirm-ok").onclick=()=>{xt(a),t&&t()},a.onclick=l=>{l.target===a&&(xt(a),s&&s())}}function xt(e){const t=e.querySelector("div > div");t.classList.remove("scale-100","opacity-100"),t.classList.add("scale-95","opacity-0"),setTimeout(()=>e.remove(),200)}function du(e,t="",s,a){const n=document.createElement("div");n.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",n.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6">
                <p class="text-sm font-bold text-slate-900 mb-4">${La(e)}</p>
                <input type="text" id="prompt-input" value="${La(t)}" 
                       class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all"
                       autofocus>
            </div>
            <div class="flex border-t border-slate-100">
                <button id="prompt-cancel" class="flex-1 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Cancel
                </button>
                <button id="prompt-ok" class="flex-1 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 hover:bg-slate-100 transition-all border-l border-slate-100">
                    Add
                </button>
            </div>
        </div>
    `,document.body.appendChild(n);const l=n.querySelector("div > div"),i=n.querySelector("#prompt-input");requestAnimationFrame(()=>{l.classList.remove("scale-95","opacity-0"),l.classList.add("scale-100","opacity-100"),i.focus(),i.select()}),i.onkeydown=r=>{if(r.key==="Enter"){const d=i.value.trim();xt(n),d&&s&&s(d)}else r.key==="Escape"&&(xt(n),a&&a())},n.querySelector("#prompt-cancel").onclick=()=>{xt(n),a&&a()},n.querySelector("#prompt-ok").onclick=()=>{const r=i.value.trim();xt(n),r&&s&&s(r)},n.onclick=r=>{r.target===n&&(xt(n),a&&a())}}window.toast=ou;window.showToast=Gs;window.showConfirm=cu;window.showPrompt=du;function Jn(){const e=localStorage.getItem("retaileros_theme")||"light",t=parseInt(localStorage.getItem("retaileros_font_size")||"100"),s=localStorage.getItem("retaileros_density")||"comfortable",a=localStorage.getItem("retaileros_animations")!=="false",n=document.documentElement;let l=e;e==="system"&&(l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),n.classList.remove("light","dark"),n.classList.add(l);const i=s==="compact"?-5:s==="spacious"?5:0;n.style.setProperty("--font-scale",(t+i)/100),n.classList.toggle("no-animations",!a);const r=document.querySelector('meta[name="theme-color"]');r&&(r.content=l==="dark"?"#020617":"#0F172A")}window.applyTheme=Jn;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem("retaileros_theme")==="system"&&Jn()});Jn();function pu(){return p.currentApp==="sales"?p.currentTab==="new-sale"?Zi():er():p.currentApp==="clients"?On("desktop-primary"):p.currentApp==="reports"?jn("desktop-primary"):p.currentApp==="repairs"?Pn("desktop-primary"):p.currentApp==="marketing"?Nn("desktop-primary"):p.currentApp==="promoters"?qn("desktop-primary"):p.currentApp==="inventory"?Bn("desktop-primary"):p.currentApp==="settings"?Fn("desktop-primary"):p.currentApp==="schemes"?Un("desktop-primary"):p.currentApp==="marketplace"?Vn("desktop-primary"):p.currentApp==="inquiries"?Hn("desktop-primary"):p.currentApp==="prebooking"?Gn("desktop-primary"):p.currentApp==="automation"?Wn("desktop-primary"):p.currentApp==="mystore"?zn():p.currentApp==="notifications"?Yn():'<div class="p-10 flex items-center justify-center h-full text-slate-300 font-bold uppercase tracking-widest">App Module Not Found</div>'}function uu(){return p.currentApp==="sales"?p.salesMode==="add-customer"?gn("desktop"):sr():p.currentApp==="clients"?On("desktop-secondary"):p.currentApp==="reports"?jn("desktop-secondary"):p.currentApp==="repairs"?Pn("desktop-secondary"):p.currentApp==="marketing"?Nn("desktop-secondary"):p.currentApp==="promoters"?qn("desktop-secondary"):p.currentApp==="inventory"?Bn("desktop-secondary"):p.currentApp==="settings"?Fn("desktop-secondary"):p.currentApp==="schemes"?Un("desktop-secondary"):p.currentApp==="marketplace"?Vn("desktop-secondary"):p.currentApp==="inquiries"?Hn("desktop-secondary"):p.currentApp==="prebooking"?Gn("desktop-secondary"):p.currentApp==="automation"?Wn("desktop-secondary"):p.currentApp==="mystore"?zn():p.currentApp==="notifications"?Yn():'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">Select an app to view details</p></div></div>'}function lr(){return Vl("desktop")}function fu(){return`
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white w-full">
            <!-- Col 1: App Menu (25% Width) -->
            <div class="w-[25%] shrink-0 h-full bg-white z-20 overflow-y-auto border-r border-slate-200">
                ${lr()}
            </div>

            <!-- Col 2: Active App (Flexible / Remaining Width ~45%) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${p.isLoggedIn?p.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':pu():p.authMode==="register"?Js("desktop-primary"):'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'}
            </div>

            <!-- Col 3: Preview (30% Width) -->
            <div class="w-[30%] shrink-0 bg-slate-50/50 h-full overflow-hidden flex flex-col relative dot-grid border-l border-slate-200">
                ${p.isLoggedIn?p.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-6xl mb-4 opacity-20">dashboard</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Retailer OS Environment</p></div></div>':uu():p.authMode==="register"?Js("desktop-secondary"):'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>'}
            </div>
        </div>
    `}function ir(){if(p.currentApp==="sales"){const t=window.getActiveCart&&window.getActiveCart().length>0,s=p.currentTab==="new-sale"&&t||p.currentTab==="history"&&p.salesHistoryId;return p.showMobileReceipt&&s?`
                <div class="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                        <div class="flex items-center gap-2">
                             <button onclick="toggleMobileReceipt(false)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900"><span class="material-icons-outlined">arrow_back</span></button>
                             <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                        </div>
                    </div>
                    <div class="overflow-y-auto flex-1 p-4 pb-20 bg-slate-50/50">
                        ${sr()}
                    </div>
                </div>
            `:`
            <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
                ${p.currentTab==="new-sale"?Zi():er()}
                ${s?'<div class="h-28 shrink-0 w-full"></div>':""}
            </div>
            ${s?`
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 z-50 w-full mb-safe">
                <button onclick="toggleMobileReceipt(true)" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-xl flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">receipt_long</span> Preview Receipt
                </button>
            </div>
        `:""}
        `}let e="";if(p.currentApp==="clients")e=On("mobile");else if(p.currentApp==="reports")e=jn("mobile");else if(p.currentApp==="repairs")e=Pn("mobile");else if(p.currentApp==="marketing")e=Nn("mobile");else if(p.currentApp==="promoters")e=qn("mobile");else if(p.currentApp==="inventory")e=Bn("mobile");else if(p.currentApp==="settings")e=Fn("mobile");else if(p.currentApp==="schemes")e=Un("mobile");else if(p.currentApp==="marketplace")e=Vn("mobile");else if(p.currentApp==="inquiries")e=Hn("mobile");else if(p.currentApp==="prebooking")e=Gn("mobile");else if(p.currentApp==="automation")e=Wn("mobile");else if(p.currentApp==="mystore")e=zn();else if(p.currentApp==="notifications")e=Yn();else return'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">App Module Not Found</p></div></div>';return`
        <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
            ${e}
        </div>
    `}function xu(){return`
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white">
            <!-- Col 1: Sidebar Menu (300px fixed) -->
            <div class="w-[300px] shrink-0 h-full bg-white overflow-y-auto">
                ${lr()}
            </div>
            <!-- Col 2: Content (mobile-style stacked) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative">
                ${p.isLoggedIn?p.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':ir():'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'}
            </div>
        </div>
    `}function rr(){return p.isLoggedIn?p.currentApp==="launcher"?Vl("mobile"):ir():`
            <div class="h-full w-full bg-white">
                ${Ul()}
            </div>
        `}function Oa(){const e=document.getElementById("app");if(e)try{const t=window.innerWidth;t<768?e.innerHTML=rr():t>=768&&t<1024?e.innerHTML=xu():e.innerHTML=fu()}catch(t){console.error(t),e.innerHTML=`<div class="p-4 text-slate-500 font-bold">Error: ${t.message}<br><small>${t.stack}</small></div>`}}function mu(){const e=window.innerWidth;if(e<768){const t=document.getElementById("app");t&&(t.innerHTML=rr())}else{const t=document.querySelector(".flex-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative.z-10")||document.querySelector(".flex-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative"),s=document.querySelector(".w-\\[30\\%\\].shrink-0.bg-slate-50\\/50.h-full.overflow-hidden.flex.flex-col.relative.dot-grid.border-l.border-slate-200");t&&(t.innerHTML=p.authMode==="register"?Js("desktop-primary"):'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'),s&&e>=1024&&(s.innerHTML=p.authMode==="register"?Js("desktop-secondary"):'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>')}}window.updateAuthContent=mu;Pl(Oa);Pl(Zp);eu();window.addEventListener("resize",()=>{window.innerWidth!==p.viewportWidth&&(p.viewportWidth=window.innerWidth,p.gridCols=window.innerWidth<768?4:3,Oa())});Y().then(()=>{console.log("Initial data sync complete"),Oa()}).catch(e=>{console.error("Initial sync failed:",e),Oa()});
