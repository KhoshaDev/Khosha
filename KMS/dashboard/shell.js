(function(){
  const menu = [
    ['index.html','🏠 Dashboard'],
    ['projects.html','🚀 Projects'],
    ['agents.html','🤖 Agents'],
    ['tasks.html','✅ Tasks'],
    ['upgrade.html','🎯 Redesign Live'],
    ['comments.html','📝 Comments'],
    ['documents.html','📁 Documents']
  ];
  const nav = document.getElementById('global-nav');
  if (!nav) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  nav.innerHTML = menu.map(([href,label]) => `<a href="./${href}" class="${current===href?'active':''}">${label}</a>`).join('');
})();