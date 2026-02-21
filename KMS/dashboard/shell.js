(function () {
  /* ── Inject Material Symbols font ── */
  if (!document.querySelector('link[href*="Material+Symbols"]')) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0';
    document.head.appendChild(l);
  }

  /* ── Fix brand logo (replaces broken ☀️ emoji) ── */
  const brand = document.querySelector('.brand');
  if (brand) {
    brand.innerHTML = `
      <div class="logomark">KM</div>
      <div>
        <h1>KMS</h1>
        <p>Khosha Management Systems</p>
      </div>`;
  }

  /* ── Nav items [href, icon, label] ── */
  const menu = [
    ['index.html',      'home',         'Home'],
    ['projects.html',   'folder_open',  'Projects'],
    ['tasks.html',      'task_alt',     'Tasks'],
    ['kanban.html',     'view_kanban',  'Kanban'],
    ['comments.html',   'comment',      'Comments'],
    ['agent-chat.html', 'chat',         'Chat'],
    ['resources.html',  'group',        'Resources'],
    ['agent-runs.html', 'smart_toy',    'Agent Runs'],
    ['documents.html',  'folder',       'Docs'],
    ['credentials.html','key',          'Keys'],
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  /* ── Top nav ── */
  const nav = document.getElementById('global-nav');
  if (nav) {
    nav.innerHTML = menu
      .map(([href, , label]) =>
        `<a href="./${href}" class="${current === href ? 'active' : ''}">${label}</a>`)
      .join('');
  }

  /* ── Bottom nav (5 key items, mobile only) ── */
  const bottomItems = [
    ['index.html',      'home',        'Home'],
    ['projects.html',   'folder_open', 'Projects'],
    ['tasks.html',      'task_alt',    'Tasks'],
    ['kanban.html',     'view_kanban', 'Kanban'],
    ['agent-chat.html', 'chat',        'Chat'],
  ];

  const bn = document.createElement('nav');
  bn.className = 'bottom-nav';
  bn.innerHTML = `<div class="bottom-nav-inner">${bottomItems
    .map(([href, icon, label]) =>
      `<a class="bn-item${current === href ? ' active' : ''}" href="./${href}">
        <span class="material-symbols-outlined">${icon}</span>
        <span>${label}</span>
      </a>`)
    .join('')}</div>`;
  document.body.appendChild(bn);

  /* ── Kanban mobile tree (accordion lanes) ── */
  if (current === 'kanban.html') {
    function initKanbanTree() {
      if (window.innerWidth > 640) return;
      document.querySelectorAll('.lane h3').forEach(h3 => {
        if (h3.dataset.treeInit) return;
        h3.dataset.treeInit = '1';
        h3.addEventListener('click', () => {
          h3.closest('.lane').classList.toggle('collapsed');
        });
      });
    }
    // Run after kanban.js renders (observe DOM changes)
    const obs = new MutationObserver(initKanbanTree);
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(initKanbanTree, 300);
  }
})();
