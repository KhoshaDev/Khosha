(function(){
  const menu = [
    ['index.html','🏠 Home'],
    ['projects.html','🚀 Projects'],
    ['tasks.html','✅ Tasks'],
    ['kanban.html','🧩 Kanban'],
    ['comments.html','📝 Comments'],
    ['agent-chat.html','💬 Chat'],
    ['resources.html','👥 Resources'],
    ['agent-runs.html','🤖 Agent Runs'],
    ['documents.html','📁 Documents'],
    ['credentials.html','🔐 Credentials']
  ];
  const nav = document.getElementById('global-nav');
  if (!nav) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  nav.innerHTML = menu.map(([href,label]) => `<a href="./${href}" class="${current===href?'active':''}">${label}</a>`).join('');
})();