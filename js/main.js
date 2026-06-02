/* ============================================================
   main.js — Application Logic
   Handles: routing, language switch, dynamic rendering, community
   ============================================================ */

// --- State ---
let currentLang;
try { currentLang = localStorage.getItem('naraka-lang') || 'zh'; }
catch { currentLang = 'zh'; }
let currentTab = 'home';
let comboFilterHero = 'all';
let comboCategory = 'hero'; // 'hero' | 'weapon' | 'advanced'
let souljadeCategory = 'weapon'; // 'weapon' | 'general' | 'stat'
let souljadeWeaponFilter = 'all';

// --- Utility ---
function t(key) {
  return window.i18n[currentLang][key] || key;
}

function tData(data) {
  if (!data) return '';
  if (typeof data === 'string') return data;
  return data[currentLang] || data['zh'] || '';
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage();
  updateLangToggleUI();
  setupEventListeners();
  renderDynamicContent();
  updateActiveNav();

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

// --- Language ---
function switchLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('naraka-lang', currentLang); } catch {}
  applyLanguage();
  updateLangToggleUI();
  renderDynamicContent();
}

function applyLanguage() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.innerHTML = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.placeholder = t(key);
  });

  document.title = t('siteTitle');
}

function updateLangToggleUI() {
  const zhSpan = document.querySelector('.lang-zh');
  const enSpan = document.querySelector('.lang-en');
  if (currentLang === 'zh') {
    zhSpan.style.color = 'var(--gold)';
    zhSpan.style.fontWeight = '700';
    enSpan.style.color = '';
    enSpan.style.fontWeight = '';
  } else {
    enSpan.style.color = 'var(--gold)';
    enSpan.style.fontWeight = '700';
    zhSpan.style.color = '';
    zhSpan.style.fontWeight = '';
  }
}

// --- Event Listeners ---
function setupEventListeners() {
  document.getElementById('langToggle').addEventListener('click', switchLanguage);

  // Desktop nav
  document.querySelectorAll('#mainNav .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
  });

  // Mobile nav
  document.querySelectorAll('#mobileNav .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
      closeMobileMenu();
    });
  });

  // Mobile menu toggle
  document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);

  // Back to top
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Combo category sub-tabs
  document.querySelectorAll('#comboCategoryTabs .combo-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      comboCategory = btn.getAttribute('data-category');
      comboFilterHero = 'all';
      updateComboCategoryTabs();
      renderComboFilter();
      renderCombos();
    });
  });

  // Hero modal close
  document.getElementById('heroModalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeHeroDetail();
  });
  document.getElementById('heroModalClose').addEventListener('click', closeHeroDetail);

  // Souljade category tabs
  document.querySelectorAll('#souljadeCategoryTabs .combo-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      souljadeCategory = btn.getAttribute('data-sjcat');
      souljadeWeaponFilter = 'all';
      updateSouljadeCategoryTabs();
      renderSouljadeFilter();
      renderSouljades();
    });
  });

  // Message submit
  document.getElementById('msgSubmit').addEventListener('click', addMessage);

  // Ctrl+Enter to submit message
  document.getElementById('msgContent').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      addMessage();
    }
  });
}

// --- Tab Switching ---
function switchTab(tabName) {
  currentTab = tabName;
  comboFilterHero = 'all';

  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });
  const target = document.getElementById('tab-' + tabName);
  if (target) target.classList.add('active');

  updateActiveNav();
  renderDynamicContent();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === currentTab) btn.classList.add('active');
  });
}

window.switchTab = switchTab;

// --- Mobile Menu ---
function toggleMobileMenu() {
  document.getElementById('mobileNav').classList.toggle('show');
}

function closeMobileMenu() {
  document.getElementById('mobileNav').classList.remove('show');
}

// --- Scroll Handler ---
function handleScroll() {
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

// --- Dynamic Content Rendering ---
function renderDynamicContent() {
  if (document.getElementById('weaponsGrid')) renderWeapons();
  if (document.getElementById('heroesGrid')) renderHeroes();
  if (document.getElementById('basicTutorialsList')) renderTutorials('basicTutorialsList', window.basicTutorials);
  if (document.getElementById('advancedTutorialsList')) renderTutorials('advancedTutorialsList', window.advancedTutorials);
  if (document.getElementById('comboFilter')) {
    updateComboCategoryTabs();
    renderComboFilter();
    renderCombos();
  }
  if (document.getElementById('souljadesGrid')) {
    updateSouljadeCategoryTabs();
    renderSouljadeFilter();
    renderSouljades();
  }
  if (document.getElementById('messagesList')) renderMessages();
}

// --- Render Weapons ---
function renderWeapons() {
  const grid = document.getElementById('weaponsGrid');
  if (!grid) return;
  grid.innerHTML = window.weaponsData.map(w => `
    <div class="weapon-card" onclick="openWeaponDetail('${w.id}')" title="${tData(w.name)} — ${t('clickForDetail')}">
      <div class="weapon-image">
        <img src="${w.image || ''}" alt="${tData(w.name)}"
             onload="this.style.display=''"
             onerror="this.style.display='none';this.nextElementSibling.style.display=''"
             loading="lazy">
        <span class="weapon-icon-fallback" style="display:none">${w.icon}</span>
      </div>
      <span class="weapon-name">${tData(w.name)}</span>
      <span class="weapon-type">${t(w.type === 'melee' ? t('weaponMelee') : t('weaponRanged'))} · ${'★'.repeat(w.difficulty)}</span>
    </div>
  `).join('');
}

// --- Weapon Detail Modal ---
function openWeaponDetail(weaponId) {
  const weapon = window.weaponsData.find(w => w.id === weaponId);
  if (!weapon) return;

  const modal = document.getElementById('heroModalOverlay');
  const content = document.getElementById('heroModalContent');

  content.innerHTML = `
    <div class="hero-modal-top">
      <div class="hero-modal-portrait">
        <img src="${weapon.image || ''}" alt="${tData(weapon.name)}"
             onload="this.style.display=''"
             onerror="this.style.display='none';this.nextElementSibling.style.display=''">
        <span class="hero-avatar-fallback" style="display:none;font-size:5rem">${weapon.icon}</span>
      </div>
      <div class="hero-modal-info">
        <h2>${tData(weapon.name)}</h2>
        <span class="modal-role">${t(weapon.type === 'melee' ? 'weaponMelee' : 'weaponRanged')} · ${t('comboDifficulty')}: ${'★'.repeat(weapon.difficulty)}${'☆'.repeat(5-weapon.difficulty)}</span>
        <div class="modal-desc" style="margin-top:12px">${tData(weapon.desc)}</div>
      </div>
    </div>
    ${weapon.tips ? `<div class="hero-modal-tips">💡 ${tData(weapon.tips)}</div>` : ''}
  `;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

window.openWeaponDetail = openWeaponDetail;

// --- Render Heroes ---
function renderHeroes() {
  const grid = document.getElementById('heroesGrid');
  if (!grid) return;
  grid.innerHTML = window.heroesData.map(h => `
    <div class="hero-card" onclick="openHeroDetail('${h.id}')" title="${tData(h.name)} — ${t('clickForDetail')}">
      <div class="hero-avatar">
        <img src="${h.image}" alt="${tData(h.name)}"
             onload="this.style.display=''"
             onerror="this.style.display='none';this.nextElementSibling.style.display=''"
             loading="lazy">
        <span class="hero-avatar-fallback" style="display:none">${h.avatar}</span>
      </div>
      <span class="hero-name">${tData(h.name)}</span>
      <span class="hero-title">${tData(h.title)}</span>
      <div class="hero-skills">
        <div>${t('heroSkill')}: ${tData(h.skill.name)}</div>
        <div>${t('heroUltimate')}: ${tData(h.ultimate.name)}</div>
      </div>
    </div>
  `).join('');
}

// --- Hero Detail Modal ---
function openHeroDetail(heroId) {
  const hero = window.heroesData.find(h => h.id === heroId);
  if (!hero) return;

  const modal = document.getElementById('heroModalOverlay');
  const content = document.getElementById('heroModalContent');

  // Build skill branches HTML
  const skillBranches = hero.skill.branches.map(b =>
    `<div class="skill-branch"><div class="branch-name">${tData(b.n)}</div><div class="branch-desc">${tData(b.d)}</div></div>`
  ).join('');

  const ultBranches = hero.ultimate.branches.map(b =>
    `<div class="skill-branch"><div class="branch-name">${tData(b.n)}</div><div class="branch-desc">${tData(b.d)}</div></div>`
  ).join('');

  content.innerHTML = `
    <div class="hero-modal-top">
      <div class="hero-modal-portrait">
        <img src="${hero.image}" alt="${tData(hero.name)}"
             onload="this.style.display=''"
             onerror="this.style.display='none';this.nextElementSibling.style.display=''">
        <span class="hero-avatar-fallback" style="display:none;font-size:5rem">${hero.avatar}</span>
      </div>
      <div class="hero-modal-info">
        <h2>${tData(hero.name)}</h2>
        <div class="modal-title">${tData(hero.title)}</div>
        <span class="modal-role">${tData(hero.role)} · ${t('comboDifficulty')}: ${'★'.repeat(hero.difficulty)}${'☆'.repeat(5-hero.difficulty)}</span>
        <div class="modal-desc">${tData(hero.desc)}</div>
      </div>
    </div>

    <div class="hero-modal-skills">
      <div>
        <h3>⚔️ ${t('heroSkill')}: ${tData(hero.skill.name)}</h3>
        ${skillBranches}
      </div>
      <div>
        <h3>🔮 ${t('heroUltimate')}: ${tData(hero.ultimate.name)}</h3>
        ${ultBranches}
      </div>
    </div>

    ${hero.tips ? `<div class="hero-modal-tips">💡 ${tData(hero.tips)}</div>` : ''}
    ${heroVideos[hero.id] ? `
      <div style="text-align:center;margin-top:20px">
        <a href="${heroVideos[hero.id].url}" target="_blank" rel="noopener" class="btn-secondary" style="font-size:0.9rem;display:inline-flex;align-items:center;gap:8px">
          📺 ${heroVideos[hero.id].title}
        </a>
      </div>` : ''}
  `;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeHeroDetail() {
  const modal = document.getElementById('heroModalOverlay');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

// --- Feature Detail Modal ---
function openFeatureDetail(featureId) {
  const feature = window.featuresData && window.featuresData[featureId];
  if (!feature) return;

  const modal = document.getElementById('heroModalOverlay');
  const content = document.getElementById('heroModalContent');

  const sectionsHTML = feature.sections.map(s => `
    <div style="margin-bottom:20px">
      <h4 style="color:var(--gold-light);margin-bottom:8px;font-size:1.05rem">${tData(s.title)}</h4>
      <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.8;white-space:pre-line">${tData(s.content)}</p>
    </div>
  `).join('');

  content.innerHTML = `
    <div style="text-align:center;margin-bottom:24px">
      <div style="font-size:4rem;margin-bottom:8px">${feature.icon}</div>
      <h2 style="font-family:var(--font-serif);color:var(--gold);font-size:1.8rem">${tData(feature.name)}</h2>
    </div>
    ${sectionsHTML}
    <div style="text-align:center;margin-top:24px">
      <button class="btn-primary" onclick="closeHeroDetail();switchTab('${feature.linkTo}')" style="font-size:0.9rem">
        📖 ${currentLang === 'zh' ? '查看相关教程' : 'View Related Tutorials'}
      </button>
    </div>
  `;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Expose globally
window.openHeroDetail = openHeroDetail;
window.closeHeroDetail = closeHeroDetail;
window.openFeatureDetail = openFeatureDetail;

// --- Tutorial Video Links ---
const tutorialVideos = {
  'basic-1': { url: 'https://www.bilibili.com/video/BV19M4y1c7pf/', title: { zh: '飞索全技巧教学', en: 'Grappling Hook Guide' } },
  'basic-2': { url: 'https://www.bilibili.com/video/BV1F64y1B78e/', title: { zh: '普攻全解析', en: 'Normal Attack Guide' } },
  'basic-3': { url: 'https://www.bilibili.com/video/BV1V3411z7k4/', title: { zh: '振刀全解析', en: 'Parry Guide' } },
  'basic-4': { url: 'https://www.bilibili.com/video/BV1nb4y1r7Zb/', title: { zh: '闪避与身法教学', en: 'Dodge & Footwork Guide' } },
  'basic-5': { url: 'https://www.bilibili.com/video/BV1aV411J7TQ/', title: { zh: '魂玉搭配入门', en: 'Souljade Guide' } },
  'basic-6': { url: 'https://www.bilibili.com/video/BV1ue4y1f7H6/', title: { zh: '回复管理技巧', en: 'Healing Guide' } },
  'adv-1': { url: 'https://www.bilibili.com/video/BV1iRqeY9EKa/', title: { zh: '取消后摇教学', en: 'Animation Cancel Guide' } },
  'adv-2': { url: 'https://www.bilibili.com/video/BV1WQ4y1v7oe/', title: { zh: '蓝取消进阶教学', en: 'Blue Cancel Guide' } },
  'adv-3': { url: 'https://www.bilibili.com/video/BV1MF41187vu/', title: { zh: '地图资源点攻略', en: 'Map Resource Guide' } },
  'adv-4': { url: 'https://www.bilibili.com/video/BV1Z4421Z7TM/', title: { zh: '团队配合教学', en: 'Team Coordination Guide' } },
  'adv-5': { url: 'https://www.bilibili.com/video/BV1pY411s7EU/', title: { zh: '全武器克制教学', en: 'Weapon Matchup Guide' } },
};

// Hero video links
const heroVideos = {
  'tarka_ji': { url: 'https://www.bilibili.com/video/BV1i44y127c8/', title: '季沧海连招教学' },
  'ning_hongye': { url: 'https://www.bilibili.com/video/BV1zU4y1K7Ni/', title: '宁红夜教学' },
  'jia_nan': { url: 'https://www.bilibili.com/video/BV1t44y1r7HE/', title: '迦南进阶教程' },
  'kurumi': { url: 'https://www.bilibili.com/video/BV1xdtre9EMM/', title: '胡桃教学' },
  'yue_shan': { url: 'https://www.bilibili.com/video/BV1Z4421Z7TM/', title: '岳山教学' },
  'cui_sanniang': { url: 'https://www.bilibili.com/video/BV1Miy6Y2Evv/', title: '崔三娘教学' },
  'temur': { url: 'https://www.bilibili.com/video/BV1pY411s7EU/', title: '特木尔全技能教学' },
  'yoto_hime': { url: 'https://www.bilibili.com/video/BV1VS421d7L4/', title: '妖刀姬教学' },
  'tianhai': { url: 'https://www.bilibili.com/video/BV1Z4421Z7TM/', title: '天海教学' },
  'gu_qinghan': { url: 'https://www.bilibili.com/video/BV1pY411s7EU/', title: '顾清寒教学' },
};

// --- Render Tutorials ---
function renderTutorials(listId, tutorials) {
  const list = document.getElementById(listId);
  if (!list) return;
  list.innerHTML = tutorials.map((tut, i) => {
    const vid = tutorialVideos[tut.id];
    const videoBtn = vid ? `
      <a href="${vid.url}" target="_blank" rel="noopener" class="combo-video-link" style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;font-size:0.8rem;padding:6px 14px">
        📺 ${tData(vid.title) || (currentLang === 'zh' ? '查看视频教程' : 'Watch Video')}
      </a>` : '';
    return `
      <div class="tutorial-card">
        <div class="tutorial-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="tutorial-body">
          <h3>${tData(tut.title)}</h3>
          <p>${tData(tut.content)}</p>
          ${tut.tip ? `<div class="tutorial-tip">${tData(tut.tip)}</div>` : ''}
          ${videoBtn}
        </div>
      </div>
    `;
  }).join('');
}

// --- Combo Category Tabs ---
function updateComboCategoryTabs() {
  document.querySelectorAll('#comboCategoryTabs .combo-cat-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === comboCategory) btn.classList.add('active');
  });
}

// --- Render Combo Filter ---
function renderComboFilter() {
  const filter = document.getElementById('comboFilter');
  if (!filter) return;

  // Only show hero filter for hero category
  if (comboCategory !== 'hero') {
    filter.classList.add('hidden');
    return;
  }
  filter.classList.remove('hidden');

  const heroIds = [...new Set(window.combosData.map(c => c.heroId))];
  const heroMap = {};
  window.heroesData.forEach(h => { heroMap[h.id] = h; });

  filter.innerHTML = '';

  const allFilterBtn = document.createElement('button');
  allFilterBtn.className = 'filter-btn' + (comboFilterHero === 'all' ? ' active' : '');
  allFilterBtn.setAttribute('data-hero', 'all');
  allFilterBtn.textContent = t('comboFilterAll');
  allFilterBtn.addEventListener('click', () => {
    comboFilterHero = 'all';
    renderComboFilter();
    renderCombos();
  });
  filter.appendChild(allFilterBtn);

  heroIds.forEach(heroId => {
    const hero = heroMap[heroId];
    if (!hero) return;
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (comboFilterHero === heroId ? ' active' : '');
    btn.setAttribute('data-hero', heroId);
    btn.textContent = `${hero.avatar} ${tData(hero.name)}`;
    btn.addEventListener('click', () => {
      comboFilterHero = heroId;
      renderComboFilter();
      renderCombos();
    });
    filter.appendChild(btn);
  });
}

// --- SVG Combo Diagram Generator ---
function generateComboDiagram(combo) {
  // Parse the input string to create a visual diagram
  const inputText = tData(combo.input);
  const steps = inputText.split('→').map(s => s.trim());

  // Determine weapon icon based on combo data
  let weaponIcon = '⚔️';
  let weaponColor = '#c9a96e';
  if (combo.weaponId) {
    const weapon = window.weaponsData.find(w => w.id === combo.weaponId);
    if (weapon) {
      weaponIcon = weapon.icon;
      weaponColor = weapon.type === 'ranged' ? '#3498db' : '#c9a96e';
    }
  } else if (combo.weapons && combo.weapons.length > 0 && combo.weapons[0] !== 'any') {
    const w = window.weaponsData.find(wp => wp.id === combo.weapons[0]);
    if (w) weaponIcon = w.icon;
  }

  const stepCount = steps.length;
  const diagramWidth = Math.max(stepCount * 90 + 40, 260);
  const diagramHeight = 120;

  // Generate step nodes
  let stepNodes = '';
  let arrowPaths = '';

  steps.forEach((step, i) => {
    const x = 30 + i * 85;
    const y = 50;

    // Determine icon/color for this step
    let icon = '⬡';
    let bgColor = '#22222e';
    let borderColor = '#444';

    const stepLower = step.toLowerCase();
    if (stepLower.includes('左键') || stepLower.includes('lmb')) {
      icon = '🖱️'; bgColor = '#2a2020'; borderColor = '#c0392b';
    } else if (stepLower.includes('蓄力') || stepLower.includes('charge')) {
      icon = '⚡'; bgColor = '#2a2010'; borderColor = '#e67e22';
    } else if (stepLower.includes('闪避') || stepLower.includes('dodge')) {
      icon = '💨'; bgColor = '#1a2030'; borderColor = '#3498db';
    } else if (stepLower.includes('飞索') || stepLower.includes('grapple')) {
      icon = '🪝'; bgColor = '#1a3020'; borderColor = '#27ae60';
    } else if (stepLower.includes('技能') || stepLower.includes('skill')) {
      icon = '✨'; bgColor = '#201a30'; borderColor = '#8e44ad';
    } else if (stepLower.includes('大招') || stepLower.includes('ultimate')) {
      icon = '💥'; bgColor = '#301020'; borderColor = '#e74c3c';
    } else if (stepLower.includes('切换') || stepLower.includes('swap')) {
      icon = '🔄'; bgColor = '#202020'; borderColor = '#999';
    } else if (stepLower.includes('空中') || stepLower.includes('aerial')) {
      icon = '🦅'; bgColor = '#1a2a30'; borderColor = '#1abc9c';
    }

    stepNodes += `
      <rect x="${x - 30}" y="${y - 25}" width="60" height="50" rx="10"
            fill="${bgColor}" stroke="${borderColor}" stroke-width="2"/>
      <text x="${x}" y="${y - 2}" text-anchor="middle" font-size="20">${icon}</text>
      <text x="${x}" y="${y + 16}" text-anchor="middle" font-size="8" fill="#888">${step.length > 10 ? step.substring(0, 10) + '…' : step}</text>
    `;

    // Arrow to next step
    if (i < stepCount - 1) {
      arrowPaths += `
        <line x1="${x + 30}" y1="${y}" x2="${x + 50}" y2="${y}"
              stroke="#c9a96e" stroke-width="2" opacity="0.6"/>
        <polygon points="${x + 50},${y - 4} ${x + 55},${y} ${x + 50},${y + 4}"
                 fill="#c9a96e" opacity="0.6"/>
      `;
    }
  });

  // Weapons used indicator at bottom
  let weaponBar = '';
  if (combo.weapons && combo.weapons.length > 0 && combo.weapons[0] !== 'any') {
    const wIcons = combo.weapons.map(wid => {
      const w = window.weaponsData.find(wp => wp.id === wid);
      return w ? w.icon : '⚔️';
    }).join(' ');
    weaponBar = `
      <text x="${diagramWidth / 2}" y="${diagramHeight - 12}" text-anchor="middle" font-size="9" fill="#888">
        武器/Weapon: ${wIcons}
      </text>`;
  } else if (combo.weaponId) {
    weaponBar = `
      <text x="${diagramWidth / 2}" y="${diagramHeight - 12}" text-anchor="middle" font-size="9" fill="#888">
        ${weaponIcon} ${tData(window.weaponsData.find(w => w.id === combo.weaponId)?.name || '')}
      </text>`;
  }

  return `
    <svg viewBox="0 0 ${diagramWidth} ${diagramHeight}" width="${diagramWidth}" height="${diagramHeight}"
         xmlns="http://www.w3.org/2000/svg" style="max-width:100%;">
      <!-- Background -->
      <rect x="0" y="0" width="${diagramWidth}" height="${diagramHeight}" rx="8" fill="transparent"/>
      ${arrowPaths}
      ${stepNodes}
      ${weaponBar}
    </svg>`;
}

// --- Render Combos ---
function renderCombos() {
  const grid = document.getElementById('combosGrid');
  if (!grid) return;

  // Select data source based on category
  let dataSource = [];
  if (comboCategory === 'hero') {
    dataSource = window.combosData || [];
  } else if (comboCategory === 'weapon') {
    dataSource = window.weaponCombosData || [];
  } else if (comboCategory === 'advanced') {
    dataSource = window.advancedCombosData || [];
  }

  // Filter for hero category
  let filtered = dataSource;
  if (comboCategory === 'hero' && comboFilterHero !== 'all') {
    filtered = dataSource.filter(c => c.heroId === comboFilterHero);
  }

  const heroMap = {};
  if (window.heroesData) {
    window.heroesData.forEach(h => { heroMap[h.id] = h; });
  }
  const weaponMap = {};
  if (window.weaponsData) {
    window.weaponsData.forEach(w => { weaponMap[w.id] = w; });
  }

  grid.innerHTML = filtered.map(combo => {
    const hero = heroMap[combo.heroId];
    const heroName = hero ? tData(hero.name) : '';

    // Difficulty stars
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += i <= combo.difficulty
        ? '<span class="star">★</span>'
        : '<span class="star-empty">★</span>';
    }

    // SVG combo diagram
    const diagram = generateComboDiagram(combo);

    // Video link (for 4+ star combos)
    let videoSection = '';
    if (combo.difficulty >= 4 && combo.videoLink) {
      const isYouTube = combo.videoLink.includes('youtube.com') || combo.videoLink.includes('youtu.be');
      const ytClass = isYouTube ? ' youtube' : '';
      videoSection = `
        <a href="${combo.videoLink}" target="_blank" rel="noopener" class="combo-video-link${ytClass}">
          ${t('comboWatchVideo')}
        </a>`;
    } else if (combo.difficulty >= 4 && !combo.videoLink) {
      videoSection = `<span style="color: var(--text-muted); font-size: 0.85rem;">${t('comboNoVideo')}</span>`;
    }

    // Tags
    let tagsHTML = '';
    if (comboCategory === 'weapon' && combo.weaponId) {
      const weapon = weaponMap[combo.weaponId];
      if (weapon) {
        tagsHTML += `<span class="combo-tag weapon-tag">${weapon.icon} ${tData(weapon.name)}</span>`;
      }
    }
    if (comboCategory === 'advanced' && combo.weapons && combo.weapons.length > 0) {
      combo.weapons.forEach(wid => {
        if (wid === 'any') {
          tagsHTML += `<span class="combo-tag multi-tag">⚔️ 通用</span>`;
        } else {
          const w = weaponMap[wid];
          if (w) tagsHTML += `<span class="combo-tag weapon-tag">${w.icon} ${tData(w.name)}</span>`;
        }
      });
      tagsHTML += `<span class="combo-tag type-tag">🔥 进阶</span>`;
    }

    // Header: hero name for hero category, weapon name for weapon category, or standalone
    let headerHTML = '';
    if (comboCategory === 'hero' && heroName) {
      headerHTML = `
        <div>
          <div class="combo-hero">${heroName}</div>
          <div class="combo-name">${tData(combo.name)}</div>
        </div>`;
    } else if (comboCategory === 'weapon' && combo.weaponId) {
      const weapon = weaponMap[combo.weaponId];
      const wName = weapon ? tData(weapon.name) : '';
      headerHTML = `
        <div>
          <div class="combo-hero">${wName}</div>
          <div class="combo-name">${tData(combo.name)}</div>
        </div>`;
    } else {
      headerHTML = `
        <div>
          <div class="combo-name" style="font-size:1.1rem;">${tData(combo.name)}</div>
        </div>`;
    }

    return `
      <div class="combo-card" data-difficulty="${combo.difficulty}">
        <div class="combo-header">
          ${headerHTML}
          <div class="combo-difficulty" title="${t('comboDifficulty')}: ${combo.difficulty}/5">
            ${stars}
          </div>
        </div>
        ${tagsHTML ? `<div class="combo-tags">${tagsHTML}</div>` : ''}
        <div class="combo-image-wrap">
          ${diagram}
        </div>
        <div class="combo-input">
          <span style="color: var(--text-muted); font-size: 0.8rem;">${t('comboInput')}:</span><br>
          ${tData(combo.input)}
        </div>
        <div class="combo-damage">
          ⚡ ${tData(combo.damage)}
        </div>
        <div class="combo-desc">${tData(combo.desc)}</div>
        ${videoSection}
      </div>
    `;
  }).join('');

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:40px;">暂无相关连招数据 / No combos found for this filter.</div>`;
  }
}

// --- Souljade Rendering ---
function updateSouljadeCategoryTabs() {
  document.querySelectorAll('#souljadeCategoryTabs .combo-cat-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-sjcat') === souljadeCategory) btn.classList.add('active');
  });
}

function renderSouljadeFilter() {
  const filter = document.getElementById('souljadeWeaponFilter');
  if (!filter) return;

  if (souljadeCategory !== 'weapon') {
    filter.classList.add('hidden');
    return;
  }
  filter.classList.remove('hidden');

  // Get unique weapons from weapon + ranged souljades
  const weaponIds = [...new Set((window.weaponSouljades||[]).concat(window.rangedSouljades||[]).map(s => s.weapon))];
  const weaponMap = {};
  if (window.weaponsData) window.weaponsData.forEach(w => { weaponMap[w.id] = w; });

  filter.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn' + (souljadeWeaponFilter === 'all' ? ' active' : '');
  allBtn.textContent = t('comboFilterAll');
  allBtn.addEventListener('click', () => { souljadeWeaponFilter = 'all'; renderSouljadeFilter(); renderSouljades(); });
  filter.appendChild(allBtn);

  weaponIds.forEach(wid => {
    const w = weaponMap[wid];
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (souljadeWeaponFilter === wid ? ' active' : '');
    btn.textContent = w ? `${w.icon} ${tData(w.name)}` : wid;
    btn.addEventListener('click', () => { souljadeWeaponFilter = wid; renderSouljadeFilter(); renderSouljades(); });
    filter.appendChild(btn);
  });
}

function renderSouljades() {
  const grid = document.getElementById('souljadesGrid');
  if (!grid) return;

  let data = [];
  if (souljadeCategory === 'weapon') {
    data = (window.weaponSouljades || []).concat(window.rangedSouljades || []);
    if (souljadeWeaponFilter !== 'all') data = data.filter(s => s.weapon === souljadeWeaponFilter);
  } else if (souljadeCategory === 'general') {
    data = (window.generalSouljades || []).concat(window.movementSouljades || []);
  } else {
    data = window.statSouljades || [];
  }

  const weaponMap = {};
  if (window.weaponsData) window.weaponsData.forEach(w => { weaponMap[w.id] = w; });

  grid.innerHTML = data.map(sj => {
    let displayContent = '';

    // 属性魂玉 — 显示四品质数值
    if (sj.tiers) {
      const tierColors = { white:'#aaa', blue:'#3498db', purple:'#9b59b6', gold:'#c9a96e' };
      const tierNames = { white:'白', blue:'蓝', purple:'紫', gold:'金' };
      displayContent = `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px">` +
        Object.entries(sj.tiers).map(([tier,val]) =>
          `<span style="background:${tierColors[tier]}20;color:${tierColors[tier]};padding:2px 8px;border-radius:8px;font-size:0.75rem;font-weight:600">${tierNames[tier]}:${val}</span>`
        ).join('') + `</div>`;
      if (sj.desc) displayContent += `<div class="souljade-desc">${tData(sj.desc)}</div>`;
    } else {
      // 通用/武器魂玉 — 显示效果描述
      displayContent = `<div class="souljade-effect">${tData(sj.effect)}</div>`;
    }

    let weaponTag = '';
    if (sj.weapon) {
      const w = weaponMap[sj.weapon];
      if (w) weaponTag = `<span class="combo-tag weapon-tag">${w.icon} ${tData(w.name)}</span>`;
    }

    // 颜色标记: 通用金色，武器按类型
    let borderColor = '#888';
    if (sj.tiers) borderColor = '#c9a96e'; // 属性魂玉金色边框
    else if (!sj.weapon) borderColor = '#c9a96e'; // 通用魂玉金色
    else borderColor = '#e67e22'; // 武器魂玉橙色

    return `
      <div class="souljade-card" style="border-left: 4px solid ${borderColor}">
        <div class="souljade-header">
          <span class="souljade-name">${tData(sj.name)}</span>
        </div>
        ${weaponTag}
        ${displayContent}
      </div>
    `;
  }).join('');

  if (data.length === 0) {
    grid.innerHTML = `<div style="text-align:center;color:var(--text-muted);padding:40px">暂无魂玉数据</div>`;
  }
}

// --- Community Messages ---
function getMessages() {
  try {
    const raw = localStorage.getItem('naraka-messages');
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveMessages(messages) {
  try { localStorage.setItem('naraka-messages', JSON.stringify(messages)); } catch {}
}

function addMessage() {
  const nameInput = document.getElementById('msgName');
  const contentInput = document.getElementById('msgContent');
  const name = nameInput.value.trim();
  const content = contentInput.value.trim();

  if (!name || !content) {
    if (!name) nameInput.style.borderColor = 'var(--accent-red)';
    if (!content) contentInput.style.borderColor = 'var(--accent-red)';
    setTimeout(() => {
      nameInput.style.borderColor = '';
      contentInput.style.borderColor = '';
    }, 1500);
    return;
  }

  const messages = getMessages();
  messages.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
    name: name,
    content: content,
    time: new Date().toISOString()
  });

  if (messages.length > 50) messages.length = 50;

  saveMessages(messages);
  nameInput.value = '';
  contentInput.value = '';
  renderMessages();
}

function deleteMessage(id) {
  if (!confirm(t('msgDeleteConfirm'))) return;
  let messages = getMessages();
  messages = messages.filter(m => m.id !== id);
  saveMessages(messages);
  renderMessages();
}

function renderMessages() {
  const list = document.getElementById('messagesList');
  if (!list) return;
  const messages = getMessages();

  if (messages.length === 0) {
    list.innerHTML = `<div class="no-messages">${t('msgNoMessages')}</div>`;
    return;
  }

  list.innerHTML = messages.map(msg => {
    const time = new Date(msg.time);
    const timeStr = time.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    return `
      <div class="message-item">
        <div class="message-header">
          <span class="message-author">${escapeHTML(msg.name)}</span>
          <span class="message-time">${timeStr}</span>
        </div>
        <div class="message-body">${escapeHTML(msg.content)}</div>
        <button class="message-delete" onclick="deleteMessageById('${msg.id}')" title="${t('msgDelete')}">✕</button>
      </div>
    `;
  }).join('');
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

window.deleteMessageById = deleteMessage;

// --- Keyboard Shortcut ---
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key >= '1' && e.key <= '7') {
    e.preventDefault();
    const tabs = ['home', 'intro', 'basic', 'advanced', 'combos', 'souljades', 'community'];
    switchTab(tabs[parseInt(e.key) - 1]);
  }
  if (e.ctrlKey && e.key === 'l') {
    e.preventDefault();
    switchLanguage();
  }
  // Escape to close hero modal
  if (e.key === 'Escape') {
    closeHeroDetail();
  }
});
