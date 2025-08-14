const themesList = document.getElementById('themes-list');
const subtopicsList = document.getElementById('subtopics-list');
const contentArea = document.getElementById('content-area');
let currentTheme = null;
let currentSubtopic = null;

function renderThemes() {
  themesList.innerHTML = '';
  Object.keys(DATA).forEach(theme => {
    const li = document.createElement('li');
    li.textContent = theme;
    li.dataset.theme = theme;
    li.tabIndex = 0;
    li.addEventListener('click', () => selectTheme(theme));
    li.addEventListener('keydown', (e) => { if (e.key === 'Enter') selectTheme(theme); });
    themesList.appendChild(li);
  });
}

function renderSubtopics(theme) {
  subtopicsList.innerHTML = '';
  const subs = DATA[theme] || {};
  Object.keys(subs).forEach(sub => {
    const li = document.createElement('li');
    li.textContent = sub;
    li.dataset.sub = sub;
    li.tabIndex = 0;
    li.addEventListener('click', () => selectSubtopic(sub));
    li.addEventListener('keydown', (e) => { if (e.key === 'Enter') selectSubtopic(sub); });
    subtopicsList.appendChild(li);
  });
}

function refreshSelectionUI() {
  Array.from(themesList.children).forEach(li => {
    li.classList.toggle('selected', li.dataset.theme === currentTheme);
  });
  Array.from(subtopicsList.children).forEach(li => {
    li.classList.toggle('selected', li.dataset.sub === currentSubtopic);
  });
}

function selectTheme(theme) {
  if (!DATA[theme]) return;
  currentTheme = theme;
  const firstSub = Object.keys(DATA[theme])[0] || null;
  currentSubtopic = firstSub;
  renderSubtopics(theme);
  refreshSelectionUI();
  updateContent();
}

function selectSubtopic(sub) {
  if (!currentTheme) return;
  if (!DATA[currentTheme][sub]) return;
  currentSubtopic = sub;
  refreshSelectionUI();
  updateContent();
}

function updateContent() {
  if (currentTheme && currentSubtopic) {
    contentArea.textContent = DATA[currentTheme][currentSubtopic];
  } else {
    contentArea.textContent = '';
  }
}

function init() {
  renderThemes();
  const firstTheme = Object.keys(DATA)[0];
  if (firstTheme) {
    selectTheme(firstTheme);
  }
}

document.addEventListener('DOMContentLoaded', init);
