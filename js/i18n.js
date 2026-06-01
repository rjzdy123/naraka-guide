/* ============================================================
   i18n.js — Chinese / English Translation Data
   All UI text is defined here for easy bilingual switching.
   ============================================================ */

const i18n = {
  zh: {
    // Site
    siteTitle: '永劫无间教学社区 - NARAKA Teaching Community',
    logoText: '永劫无间教学社区',

    // Navigation
    navHome: '首页',
    navIntro: '游戏介绍',
    navBasic: '基础教程',
    navAdvanced: '进阶教程',
    navCombos: '连招教程',
    navCommunity: '社区',

    // Home - Hero
    heroTitle: '永劫无间',
    heroSubtitle: '冷兵器大逃杀 · 武侠吃鸡 · 身法博弈',
    heroDesc: '欢迎来到永劫无间教学社区！无论你是刚入门的萌新，还是寻求突破的老手，这里都有你需要的教程和攻略。',
    heroStartBtn: '开始学习',
    heroComboBtn: '查看连招',

    // Home - Features
    homeFeaturesTitle: '游戏特色',
    feature1Title: '飞索系统',
    feature1Desc: '独特的飞索机制，自由飞檐走壁，实现立体战斗体验，随时攀附任何表面进行高速移动。',
    feature2Title: '冷兵器格斗',
    feature2Desc: '基于"剪刀石头布"的克制系统——普通攻击克制振刀、振刀克制蓄力攻击、蓄力攻击克制普通攻击。',
    feature3Title: '独特英雄',
    feature3Desc: '每位英雄拥有独特的技能和大招，季沧海的火、宁红夜的雷、迦南的隐身，各有千秋。',
    feature4Title: '60人吃鸡',
    feature4Desc: '60名玩家同场竞技，在广阔的聚窟洲地图上搜集装备、击败对手，成为最后的幸存者。',

    // Home - Quick Nav
    homeQuickNav: '快速入门',
    quickNavIntro: '了解游戏',
    quickNavBasic: '基础教学',
    quickNavAdvanced: '进阶技巧',
    quickNavCombos: '连招大全',

    // Game Intro
    introTitle: '游戏介绍',
    introStoryTitle: '背景故事',
    introStoryContent: '《永劫无间》是由24 Entertainment工作室开发的一款武侠风格的大逃杀游戏。游戏设定在一个被"永劫"之力侵蚀的奇幻世界——聚窟洲。玩家扮演各路英雄，在这片土地上争夺传说中的不朽面具，揭开永劫之谜。游戏融合了冷兵器格斗、飞索移动、英雄技能等元素，创造出了独一无二的"武侠吃鸡"体验。',
    introMechanicsTitle: '核心战斗机制',

    mechanicRPS: '剪刀石头布克制：普通攻击克制振刀（振刀时被打断），振刀克制蓄力攻击（可以弹反蓄力），蓄力攻击克制普通攻击（霸体不会被普攻打断）。掌握这个三角克制是游戏的核心。',
    mechanicGrapple: '飞索是游戏的核心移动工具，可以瞄准任何表面发射飞索进行高速位移。战斗中也可使用飞索进行追击或逃跑，空中的飞索攻击还有额外伤害加成。',
    mechanicSouljade: '魂玉是游戏中可以拾取的装备道具，分为武器魂玉和防具魂玉。武器魂玉可以改变武器的招式或增加特殊效果，防具魂玉提供额外属性加成。合理搭配魂玉是制胜关键。',

    introWeaponsTitle: '武器类型',
    introHeroesTitle: '英雄角色',

    // Basic Tutorials
    basicTitle: '基础教程',
    basicSubtitle: '掌握这些基础操作，迈出成为高手的第一步',

    // Advanced Tutorials
    advancedTitle: '进阶教程',
    advancedSubtitle: '深入理解战斗系统，提升你的实力上限',

    // Combos
    combosTitle: '连招教程',
    combosSubtitle: '从简单到复杂，每个英雄的连招都在这里',
    comboFilterAll: '全部',
    comboDifficulty: '难度',
    comboInput: '指令输入',
    comboDamage: '伤害',
    comboWatchVideo: '📺 查看视频教程',
    comboNoVideo: '暂无视频教程',

    // Community
    communityTitle: '玩家社区',
    communitySubtitle: '分享你的经验，向大神请教，一起进步',
    communityHotTopics: '🔥 热门讨论话题',
    topic1: '刚玩三天，有什么推荐的英雄和武器搭配？',
    topic2: '季沧海的无限连到底怎么打？求详细教学',
    topic3: '当前版本最强武器是哪个？太刀 vs 阔刀深度对比',
    topic4: '永劫无间世界赛观赛指南，职业选手的操作有多离谱',
    communityBoard: '💬 留言板',
    msgNamePlaceholder: '你的昵称 / Your Name',
    msgContentPlaceholder: '分享你的技巧或提问... / Share tips or ask questions...',
    msgSubmit: '发布留言',
    msgDelete: '删除',
    msgNoMessages: '暂无留言，来做第一个分享的人吧！',
    msgDeleteConfirm: '确定删除这条留言吗？',

    // Footer
    footerText: '永劫无间教学社区 © 2026 — 为爱发电，仅供学习交流',
    footerDisclaimer: '本站为玩家自发创建的教程社区，与网易/24 Entertainment工作室无关联',

    // Data labels
    weaponMelee: '近战',
    weaponRanged: '远程',
    heroSkill: '技能',
    heroUltimate: '大招',

    // Souljades
    navSouljades: '魂玉图鉴',
    souljadesTitle: '魂玉图鉴',
    souljadesSubtitle: 'S20赛季全魂玉一览 · 属性 + 通用 + 武器专属',
    sjCatWeapon: '⚔️ 武器魂玉',
    sjCatGeneral: '🔮 通用魂玉',
    sjCatStat: '📊 属性魂玉',
    souljadeQuality: '品质',
    souljadeEffect: '效果',
    sjWeaponExclusive: '专属武器',

    // Combo category tabs
    comboCatHero: '🦸 英雄连招',
    comboCatWeapon: '⚔️ 武器连招',
    comboCatAdvanced: '🔥 进阶连招',

    // Hero modal
    clickForDetail: '点击查看详情',

    // Combo difficulty labels
    diffVeryEasy: '非常简单',
    diffEasy: '简单',
    diffMedium: '中等',
    diffHard: '困难',
    diffVeryHard: '非常困难',

    // Weapon combo tags
    comboWeaponBasic: '基础连招',
    comboWeaponAdvanced: '进阶连招',
    comboWeaponAerial: '空中连招',
    comboWeaponMix: '混合连招',
  },

  en: {
    // Site
    siteTitle: 'NARAKA Teaching Community - BLADEPOINT Guides',
    logoText: 'NARAKA Teaching',

    // Navigation
    navHome: 'Home',
    navIntro: 'Game Info',
    navBasic: 'Basics',
    navAdvanced: 'Advanced',
    navCombos: 'Combos',
    navCommunity: 'Community',

    // Home - Hero
    heroTitle: 'NARAKA: BLADEPOINT',
    heroSubtitle: 'Melee Battle Royale · Martial Arts · Skill-Based Combat',
    heroDesc: 'Welcome to the NARAKA Teaching Community! Whether you\'re a beginner or a veteran seeking improvement, you\'ll find the guides and strategies you need here.',
    heroStartBtn: 'Start Learning',
    heroComboBtn: 'View Combos',

    // Home - Features
    homeFeaturesTitle: 'Game Features',
    feature1Title: 'Grappling Hook',
    feature1Desc: 'Unique grappling hook system allows free wall-running and three-dimensional combat. Latch onto any surface for high-speed traversal across the battlefield.',
    feature2Title: 'Melee Combat',
    feature2Desc: 'Based on a "Rock-Paper-Scissors" counter system — Normal attacks beat Focus, Focus beats Charged attacks, and Charged attacks (with hyper armor) beat Normal attacks.',
    feature3Title: 'Unique Heroes',
    feature3Desc: 'Each hero has unique skills and ultimates — from fiery assaults to lightning strikes and stealth tactics. Find the hero that matches your playstyle.',
    feature4Title: '60-Player BR',
    feature4Desc: '60 players compete on the vast Morus Isle map. Loot equipment, defeat opponents, and be the last one standing in this martial arts battle royale.',

    // Home - Quick Nav
    homeQuickNav: 'Quick Start',
    quickNavIntro: 'Game Overview',
    quickNavBasic: 'Basic Tutorials',
    quickNavAdvanced: 'Advanced Skills',
    quickNavCombos: 'Combo List',

    // Game Intro
    introTitle: 'Game Overview',
    introStoryTitle: 'Background Story',
    introStoryContent: 'NARAKA: BLADEPOINT is a martial arts battle royale developed by 24 Entertainment. Set on the mystical Morus Isle, corrupted by the "Naraka" force, heroes battle for the legendary Immortal Mask to uncover the island\'s secrets. The game uniquely blends melee weapon combat, grappling hook mobility, and hero abilities into an unparalleled "Wuxia battle royale" experience.',
    introMechanicsTitle: 'Core Combat Mechanics',

    mechanicRPS: 'Rock-Paper-Scissors Counter System: Normal attacks counter Focus (parry stance), Focus counters Charged attacks (can deflect them), and Charged attacks counter Normal attacks (hyper armor prevents interruption). Mastering this triangle is the core of combat.',
    mechanicGrapple: 'The Grappling Hook is the core mobility tool — aim at any surface to launch yourself at high speed. Use it in combat for pursuit or escape. Aerial grapple attacks also deal bonus damage.',
    mechanicSouljade: 'Souljades are equippable items found during matches, divided into Weapon Souljades and Armor Souljades. Weapon Souljades modify attack patterns or add special effects, while Armor Souljades provide stat bonuses. Optimal Souljade builds are key to victory.',

    introWeaponsTitle: 'Weapon Types',
    introHeroesTitle: 'Heroes',

    // Basic Tutorials
    basicTitle: 'Basic Tutorials',
    basicSubtitle: 'Master these fundamentals to take your first step toward becoming a champion',

    // Advanced Tutorials
    advancedTitle: 'Advanced Tutorials',
    advancedSubtitle: 'Deepen your understanding of the combat system and raise your skill ceiling',

    // Combos
    combosTitle: 'Combo Tutorials',
    combosSubtitle: 'From simple to complex — every hero\'s combos collected here',
    comboFilterAll: 'All',
    comboDifficulty: 'Difficulty',
    comboInput: 'Input',
    comboDamage: 'Damage',
    comboWatchVideo: '📺 Watch Video Guide',
    comboNoVideo: 'No video available',

    // Community
    communityTitle: 'Player Community',
    communitySubtitle: 'Share your experience, learn from experts, improve together',
    communityHotTopics: '🔥 Hot Topics',
    topic1: 'Just started 3 days ago — recommended hero and weapon combos?',
    topic2: 'How do you execute the infinite combo with Tarka Ji? Detailed guide please',
    topic3: 'What\'s the strongest weapon in the current meta? Katana vs Greatsword deep comparison',
    topic4: 'NARAKA World Championship viewing guide — pro player mechanics are insane',
    communityBoard: '💬 Message Board',
    msgNamePlaceholder: '你的昵称 / Your Name',
    msgContentPlaceholder: '分享你的技巧或提问... / Share tips or ask questions...',
    msgSubmit: 'Post Message',
    msgDelete: 'Delete',
    msgNoMessages: 'No messages yet — be the first to share!',
    msgDeleteConfirm: 'Are you sure you want to delete this message?',

    // Footer
    footerText: 'NARAKA Teaching Community © 2026 — Fan-made, for learning and sharing',
    footerDisclaimer: 'This is a player-created tutorial community, not affiliated with NetEase / 24 Entertainment',

    // Data labels
    weaponMelee: 'Melee',
    weaponRanged: 'Ranged',
    heroSkill: 'Skill',
    heroUltimate: 'Ultimate',

    // Souljades
    navSouljades: 'Souljades',
    souljadesTitle: 'Souljade Collection',
    souljadesSubtitle: 'S20 Season Souljades · Stats + General + Weapon Exclusive',
    sjCatWeapon: '⚔️ Weapon Souljades',
    sjCatGeneral: '🔮 General Souljades',
    sjCatStat: '📊 Stat Souljades',
    souljadeQuality: 'Quality',
    souljadeEffect: 'Effect',
    sjWeaponExclusive: 'Exclusive Weapon',

    // Combo category tabs
    comboCatHero: '🦸 Hero Combos',
    comboCatWeapon: '⚔️ Weapon Combos',
    comboCatAdvanced: '🔥 Advanced Combos',

    // Hero modal
    clickForDetail: 'Click for details',

    // Combo difficulty labels
    diffVeryEasy: 'Very Easy',
    diffEasy: 'Easy',
    diffMedium: 'Medium',
    diffHard: 'Hard',
    diffVeryHard: 'Very Hard',

    // Weapon combo tags
    comboWeaponBasic: 'Basic Combo',
    comboWeaponAdvanced: 'Advanced Combo',
    comboWeaponAerial: 'Aerial Combo',
    comboWeaponMix: 'Mix-up Combo',
  }
};

// Export for use in main.js (global variable)
window.i18n = i18n;
