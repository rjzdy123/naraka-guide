/* ============================================================
   data.js — Game Data: Weapons, Heroes, Tutorials, Combos
   All structured game content used to render pages dynamically.
   ============================================================ */

// --- Weapons ---
const weaponsData = [
  // 近战武器
  { id:'katana',icon:'🗡️',image:'assets/weapons/katana.jpg',type:'melee',difficulty:1,name:{zh:'太刀',en:'Katana'},desc:{zh:'攻速快、机动性强的均衡武器。百裂斩+惊雷一闪爆发伤害极高，适合新手入门。普攻速度快，闪避取消收益高，是最万金油的选择。',en:'Fast and agile balanced weapon. Hundred Cracks Slash + Thunder Flash burst damage. Fast normals with high dodge-cancel value. The most versatile beginner weapon.'},tips:{zh:'新手首选。熟练掌握闪避取消循环是进阶太刀的关键。',en:'Best for beginners. Master dodge-cancel loops to unlock Katana\'s potential.'}},
  { id:'greatsword',icon:'⛩️',image:'assets/weapons/greatsword.jpg',type:'melee',difficulty:2,name:{zh:'阔刀',en:'Greatsword'},desc:{zh:'重型武器，磐石架势拼刀不弹刀。崩山斩伤害极高，团战破阵利器。攻速慢但每击伤害爆炸，蓄力攻击范围大。',en:'Heavy weapon with Stone Stance preventing bounce. Mountain Crusher deals extreme damage. Slow but devastating per-hit, wide charged attacks.'},tips:{zh:'利用磐石架势硬拼，不要频繁振刀。蓄力攻击可打断敌方蓄力。',en:'Use Stone Stance to trade, don\'t parry often. Charged attacks interrupt enemy charges.'}},
  { id:'longsword',icon:'⚔️',image:'assets/weapons/longsword.jpg',type:'melee',difficulty:2,name:{zh:'长剑',en:'Longsword'},desc:{zh:'百兵之君，剑气远程消耗。蓄力可发射远程剑气攻击，中距离压制力强。连招稳定流畅，是新手友好型武器。',en:'King of weapons with ranged sword wave pokes. Charged attacks fire waves for mid-range pressure. Stable combos, beginner-friendly.'},tips:{zh:'利用剑气远距离消耗，不要急于近身。配合闪避保持中距离。',en:'Poke with waves from range, don\'t rush in. Maintain mid-range with dodges.'}},
  { id:'hengdao',icon:'🔪',image:'assets/weapons/hengdao.jpg',type:'melee',difficulty:3,name:{zh:'横刀',en:'Cross Blade'},desc:{zh:'太刀同源武器，独特蓄力撤回机制。位移灵活不消耗精力，适合拉扯打法。蓄力后可撤回原位，迷惑对手。',en:'Katana variant with unique charge-withdraw mechanic. Agile displacement without stamina cost. Charge then retreat to confuse opponents.'},tips:{zh:'利用撤回机制骗对手振刀，然后反击。',en:'Bait parries with withdraw mechanic, then counter.'}},
  { id:'spear',icon:'🔱',image:'assets/weapons/spear.jpg',type:'melee',difficulty:2,name:{zh:'长枪',en:'Spear'},desc:{zh:'攻击距离最远的近战武器。龙王破+哪吒闹海连招致命，霸体机制强。一寸长一寸强，适合中远距离牵制。',en:'Longest reach melee weapon. Dragon King Breach + Nezha Sea Rampage combo is lethal. Hyper armor strong. Outrange opponents.'},tips:{zh:'保持距离是关键。利用长度优势在敌人攻击范围外输出。',en:'Distance is key. Attack from outside enemy range using reach advantage.'}},
  { id:'dagger',icon:'🗡️',image:'assets/weapons/dagger.jpg',type:'melee',difficulty:3,name:{zh:'匕首',en:'Dagger'},desc:{zh:'机动性最高的武器。蹲伏蓄力可高速移动，闪步灵活多变。攻速极快，适合绕后收割和打乱节奏。',en:'Highest mobility weapon. Crouch-charge for speed boosts, agile sidesteps. Fastest attack speed for flanking and rhythm disruption.'},tips:{zh:'利用高机动绕后打背击。不要正面硬刚，打游击战。',en:'Flank for backstabs with high mobility. Guerrilla tactics, not head-on fights.'}},
  { id:'zanmadao',icon:'⚔️',image:'assets/weapons/zanmadao.jpg',type:'melee',difficulty:2,name:{zh:'斩马刀',en:'Zanmadao'},desc:{zh:'范围大、控制强，适合混战压制。攻击范围广，在团战中可以同时命中多个敌人。',en:'Wide range with strong control, ideal for teamfight pressure. Hits multiple enemies in chaotic fights.'},tips:{zh:'在敌人密集时使用蓄力横扫，最大化范围优势。',en:'Use charged sweeps when enemies cluster to maximize AoE advantage.'}},
  { id:'fan',icon:'🪭',image:'assets/weapons/fan.jpg',type:'melee',difficulty:3,name:{zh:'扇',en:'War Fan'},desc:{zh:'匕首同源，兼顾输出与辅助控场。灵活优雅的武器，连招多变。可搭配多种魂玉实现不同战术。',en:'Dagger variant balancing damage and support control. Elegant and flexible with varied combos. Multiple Souljade builds for different tactics.'},tips:{zh:'利用扇子的灵活性配合队友控制链。',en:'Use fan flexibility to chain with teammate crowd control.'}},
  { id:'nunchaku',icon:'🥢',image:'assets/weapons/nunchaku.jpg',type:'melee',difficulty:3,name:{zh:'双节棍',en:'Nunchaku'},desc:{zh:'龙虎功机制，蓄力可格挡对手蓄力。多段打击判定，单挑抗压能力强。灵活多变的上限极高武器。',en:'Dragon-Tiger mechanism, charge-block enemy charges. Multi-hit checks, strong duel pressure. High skill ceiling flexibility.'},tips:{zh:'利用龙虎功格挡后反击，掌握多段打击的节奏感。',en:'Counter after Dragon-Tiger blocks. Master the rhythm of multi-hit strikes.'}},
  { id:'dualblades',icon:'💢',image:'assets/weapons/dualblades.jpg',type:'melee',difficulty:2,name:{zh:'双刀',en:'Dual Blades'},desc:{zh:'惊鸿步边走边蓄力，拉扯能力强。快节奏连击，适合突袭绕后。灵活机动的中距离武器。',en:'Grace Step charges while moving, strong kiting. Fast-paced combos for ambush flanks. Agile mid-range weapon.'},tips:{zh:'利用惊鸿步蓄力拉扯，不要站桩输出。',en:'Use Grace Step to charge while kiting. Don\'t stand still.'}},
  { id:'shuangji',icon:'🔰',image:'assets/weapons/shuangji.jpg',type:'melee',difficulty:2,name:{zh:'双戟',en:'Twin Halberds'},desc:{zh:'能跑能打，范围与控制兼顾。攻击范围大并附带控制效果，混战中非常实用。',en:'Mobile and deadly with range + control combined. Wide attacks with control effects, very practical in chaos.'},tips:{zh:'利用范围优势在团战中控制多个敌人。',en:'Control multiple enemies in teamfights using range advantage.'}},
  { id:'lianjian',icon:'⛓️',image:'assets/weapons/lianjian.jpg',type:'melee',difficulty:4,name:{zh:'链剑',en:'Chain Sword'},desc:{zh:'剑鞭合一，蓄力后蓝霸体追击。卷轮/缠丝/扯风多样变招，拉扯压制兼备。上限极高的新武器。',en:'Sword-whip hybrid with blue-armor pursuit after charge. Multiple variations, pressure + pull combined. High-ceiling new weapon.'},tips:{zh:'蓄力蓝霸体可强制追击，利用变招迷惑对手。',en:'Blue-armor charge forces pursuit. Use stance variations to confuse.'}},
  { id:'staff',icon:'🏏',image:'assets/weapons/staff.jpg',type:'melee',difficulty:2,name:{zh:'棍',en:'Staff'},desc:{zh:'长枪同源武器，攻击范围大。范围控制优势明显，蓄力攻击可击飞多个敌人。',en:'Spear variant with wide attack range. Clear range-control advantage, charged attacks launch multiple enemies.'},tips:{zh:'利用大范围蓄力攻击控制战场。',en:'Control the battlefield with wide charged attacks.'}},
  { id:'wanrenlun',icon:'⚙️',image:'assets/weapons/wanrenlun.jpg',type:'melee',difficulty:2,name:{zh:'万刃轮',en:'Blade Wheel'},desc:{zh:'特殊武器，持续旋转伤害。混战中制造压制力，旋转攻击可同时命中周围多个敌人。',en:'Special weapon with continuous spin damage. Creates pressure in chaos, spinning hits multiple nearby enemies.'},tips:{zh:'在狭窄地形或敌人密集时使用效果最佳。',en:'Most effective in tight spaces or when enemies are clustered.'}},

  // 远程武器
  { id:'bow',icon:'🏹',image:'assets/weapons/bow.jpg',type:'ranged',difficulty:2,name:{zh:'弓箭',en:'Bow'},desc:{zh:'蓄力伤害极高，可搭配火箭魂玉灼烧。远距离精准打击的首选，爆头伤害翻倍。',en:'Extreme charged damage, pairs with fire arrow Souljade for burn. Top choice for long-range precision, headshot damage doubled.'},tips:{zh:'蓄满力再射，瞄头伤害最大化。配合高处优势。',en:'Fully charge before shooting, aim for head for max damage. Use high ground.'}},
  { id:'musket',icon:'🔫',image:'assets/weapons/musket.jpg',type:'ranged',difficulty:2,name:{zh:'鸟铳',en:'Musket'},desc:{zh:'单发伤害高，中距离点射破甲。精准度好，适合中距离狙击。相当于步枪/狙击枪定位。',en:'High single-shot damage, mid-range armor break. Good accuracy for mid-range sniping. Rifle/sniper role.'},tips:{zh:'瞄准敌人头部或护甲部位射击，配合近战切换。',en:'Aim for head or armor. Pair with melee weapon swapping.'}},
  { id:'cannon',icon:'💥',image:'assets/weapons/cannon.jpg',type:'ranged',difficulty:2,name:{zh:'火炮',en:'Cannon'},desc:{zh:'范围AOE伤害，清集群敌人与破坏掩体。抛物弹道需要预判，团战输出利器。',en:'AoE splash damage for clearing groups and destroying cover. Arcing trajectory needs prediction. Teamfight damage dealer.'},tips:{zh:'预判敌人移动方向射击。在敌人密集时使用效果最佳。',en:'Predict enemy movement when shooting. Best when enemies are grouped.'}},
  { id:'repeater',icon:'🎯',image:'assets/weapons/repeater.jpg',type:'ranged',difficulty:1,name:{zh:'连弩',en:'Repeating Crossbow'},desc:{zh:'射速快如轻机枪，毒箭魂玉附加持续伤害。持续压制力强，新手友好型远程武器。',en:'Fast fire rate like LMG, poison arrow Souljade adds DoT. Strong sustained pressure, beginner-friendly ranged weapon.'},tips:{zh:'保持中距离持续射击压制。配合毒箭魂玉叠加伤害。',en:'Sustained fire from mid-range. Stack poison arrow Souljade for extra damage.'}},
  { id:'wuyancong',icon:'🔫',image:'assets/weapons/wuyancong.jpg',type:'ranged',difficulty:2,name:{zh:'五眼铳',en:'Five-Eye Musket'},desc:{zh:'近距离爆发极高，霰弹枪效果。霸雷形态带电击。贴脸伤害爆炸，反突脸利器。',en:'Massive close-range burst, shotgun effect. Thunder mode adds shock. Devastating at point-blank, anti-rush tool.'},tips:{zh:'贴身距离使用伤害最大化。敌人突进时切换反击。',en:'Use at point-blank for max damage. Swap to counter enemy rushes.'}},
  { id:'flamethrower',icon:'🔥',image:'assets/weapons/flamethrower.jpg',type:'ranged',difficulty:1,name:{zh:'喷火筒',en:'Flamethrower'},desc:{zh:'持续灼烧限制走位，狭窄地形强势。特殊商人获取。无视护甲直接烧血。',en:'Continuous burn to restrict movement, dominant in tight spaces. From special merchants. Bypasses armor, directly burns health.'},tips:{zh:'在室内或狭窄通道使用效果最佳。',en:'Best in indoor or narrow passages.'}},
  { id:'yiwofeng',icon:'🐝',image:'assets/weapons/yiwofeng.jpg',type:'ranged',difficulty:1,name:{zh:'一窝蜂',en:'Beehive'},desc:{zh:'火箭发射巢，覆盖面广。团战压制力强，多枚火箭同时发射覆盖大范围区域。',en:'Rocket pod with wide coverage. Strong teamfight suppression, multiple rockets launched simultaneously over large area.'},tips:{zh:'团战时往敌人密集处发射，覆盖最大化。',en:'Fire into enemy clusters during teamfights for max coverage.'}},
  { id:'shuangcong',icon:'🔫',image:'assets/weapons/shuangcong.jpg',type:'ranged',difficulty:4,name:{zh:'双铳',en:'Dual Pistols'},desc:{zh:'S19赛季新增T0远程。左右交替点射+双连瀑射爆发。伏火机制：命中6次开启升华→蓄力埋弹→点射引爆破蓝霸体。滑铲360°铁莲花扫射反贴脸。',en:'S19 new T0 ranged. Alternating fire + double burst. Mine mechanic: 6 hits→ascend→charge plant bombs→shoot detonate for guard break. Slide 360° Iron Lotus sweep anti-rush.'},tips:{zh:'必带急蓄伏火魂玉。无魂玉不要蓄力只用点射。保持20-60米最佳射程。',en:'Must equip Quick-Charge Mine Souljade. Without it, only use tap-fire. Maintain 20-60m optimal range.'}},
];

// --- Heroes ---
const heroesData = [
  // ===== 控场型 =====
  { id:'ning_hongye', avatar:'👁️', image:'assets/heroes/ning_hongye.jpg', role:{zh:'控制',en:'Control'}, difficulty:3,
    name:{zh:'宁红夜',en:'Ning Hongye'}, title:{zh:'赤练无明·昆仑盲剑客',en:'Blind Swordmaster'},
    skill:{ name:{zh:'昆仑诀',en:'Kunlun Decree'},
      branches:[{n:{zh:'F1 昆仑诀·封',en:'F1 Seal'},d:{zh:'击飞敌人',en:'Launch enemies'}},{n:{zh:'F2 昆仑诀·禁',en:'F2 Silence'},d:{zh:'封禁敌人技能8秒',en:'Silence enemy skills for 8s'}},{n:{zh:'F3 昆仑诀·灭',en:'F3 HealCut'},d:{zh:'禁疗+高伤害',en:'Block healing + high damage'}}]},
    ultimate:{ name:{zh:'赤练无明',en:'Crimson Blind'},
      branches:[{n:{zh:'V1 赤练无明·晕',en:'V1 Stun'},d:{zh:'吟唱5秒后大范围眩晕',en:'Chant 5s → AoE stun'}},{n:{zh:'V2 赤练无明·默',en:'V2 Group Silence'},d:{zh:'群体沉默+反伤',en:'Group silence + reflect'}}]},
    tips:{zh:'三排优先选V1眩晕配合队友集火。昆仑诀封禁8秒是克制季沧海和无尘的关键。',en:'In trios, pick V1 stun for focus fire. Kunlun Silence counters Tarka Ji and Wu Chen.'},
    desc:{zh:'三排T0控场核心。昆仑诀可沉默/禁疗/击飞，赤练无明大范围眩晕——先手开团神技。',en:'Trios T0 control. Kunlun silences/blocks heals/launches. Crimson Blind AoE stuns — strongest initiation.'} },

  { id:'cui_sanniang', avatar:'🌊', image:'assets/heroes/cui_sanniang.jpg', role:{zh:'控制',en:'Control'}, difficulty:3,
    name:{zh:'崔三娘',en:'Cui Sanniang'}, title:{zh:'深海霸主·控场为王',en:'Tidal Dominator'},
    skill:{ name:{zh:'深渊梦魇·水矛',en:'Abyssal Spear'},
      branches:[{n:{zh:'F1 水矛束缚',en:'F1 Bind'},d:{zh:'发射水球束缚+水浸降攻',en:'Water ball binds + ATK down'}},{n:{zh:'F2 水浪',en:'F2 Wave'},d:{zh:'释放水浪控制敌人',en:'Release water wave control'}}]},
    ultimate:{ name:{zh:'深渊梦魇',en:'Abyssal Nightmare'},
      branches:[{n:{zh:'V1 深渊梦魇',en:'V1 Water Prison'},d:{zh:'召唤洋流大范围束缚+水矛投掷',en:'Massive water prison + spear throws'}},{n:{zh:'V2 水龙卷',en:'V2 Tornado'},d:{zh:'范围扩大30%+可移动释放',en:'AoE +30%, cast while moving'}}]},
    tips:{zh:'2026版本T0控场。水龙卷可移动释放是核心加强。配合特木尔形成连环控制。',en:'2026 T0 control. Moving tornado is key buff. Chain CC with Temur.'},
    desc:{zh:'水矛束缚+水浸降攻，大招召唤大范围洋流困住敌人。水龙卷范围扩大30%并可移动释放。',en:'Water spear binds+weakens. Ultimate summons tidal prison. Tornado AoE +30%, castable while moving.'} },

  { id:'temur', avatar:'🌪️', image:'assets/heroes/temur.jpg', role:{zh:'控制',en:'Control'}, difficulty:2,
    name:{zh:'特木尔',en:'Temur'}, title:{zh:'风之掌控者',en:'Wind Master'},
    skill:{ name:{zh:'风之精灵',en:'Wind Spirit'},
      branches:[{n:{zh:'F1 风弹',en:'F1 Wind Shot'},d:{zh:'释放风弹击退敌人',en:'Wind shot knocks back'}},{n:{zh:'F2 风墙',en:'F2 Wind Wall'},d:{zh:'制造风墙阻挡远程攻击',en:'Wall blocks all ranged attacks'}}]},
    ultimate:{ name:{zh:'风之牢笼',en:'Wind Prison'},
      branches:[{n:{zh:'V1 风之牢笼',en:'V1 Wind Prison'},d:{zh:'制造风牢困敌+持续清空精力',en:'Traps enemies + drains stamina'}},{n:{zh:'V2 风暴',en:'V2 Storm'},d:{zh:'扩大范围+减速效果',en:'Larger area + slow'}}]},
    tips:{zh:'风墙是抵挡远程的神技。在风墙后搭配弓箭/鸟铳安全输出。风牢配合崔三娘水牢双控无敌。',en:'Wind Wall blocks all ranged — pair with bow/musket. Wind Prison + Cui Sanniang = double lockdown.'},
    desc:{zh:'区域控制专家。风墙阻挡所有远程攻击，风之牢笼将敌人困住并持续清空精力。',en:'Zone control expert. Wind Wall blocks ranged. Prison traps+drains stamina — safe DPS behind barrier.'} },

  // ===== 刺客/机动型 =====
  { id:'jia_nan', avatar:'🌑', image:'assets/heroes/jia_nan.jpg', role:{zh:'刺客',en:'Assassin'}, difficulty:3,
    name:{zh:'迦南',en:'Jia Nan'}, title:{zh:'暗影刺客·瞬杀无形',en:'Shadow Assassin'},
    skill:{ name:{zh:'追魂',en:'Soul Chase'},
      branches:[{n:{zh:'F1 追魂',en:'F1 Dash'},d:{zh:'瞬移突进',en:'Teleport dash'}},{n:{zh:'F2 追魂·连闪',en:'F2 Double Dash'},d:{zh:'可充能两段双向瞬移',en:'2-charge double direction dash'}}]},
    ultimate:{ name:{zh:'寂静暗刑',en:'Silent Execution'},
      branches:[{n:{zh:'V1 寂静暗刑',en:'V1 Self Stealth'},d:{zh:'自身隐身+背刺增伤',en:'Self-stealth + backstab bonus'}},{n:{zh:'V2 群隐',en:'V2 Group Stealth'},d:{zh:'群体隐身12秒',en:'Group stealth 12s'}}]},
    tips:{zh:'单排收割机。追魂充能两段绕后，寂静暗刑背刺伤害翻倍。注意宁红夜眩晕可破隐身。',en:'Solo mode king. Double dash to flank, stealth backstab = double damage. Watch for Ning Hongye stun breaking stealth.'},
    desc:{zh:'极致灵活刺客。追魂双向瞬移两段充能，寂静暗刑隐身背刺伤害翻倍。单排收割、三排绕后首选。',en:'Peak mobility. Soul Chase double dash. Silent Execution stealth backstab x2 damage. Top solo flanker.'} },

  { id:'yoto_hime', avatar:'🗡️', image:'assets/heroes/yoto_hime.jpg', role:{zh:'刺客',en:'Assassin'}, difficulty:3,
    name:{zh:'妖刀姬',en:'Yoto Hime'}, title:{zh:'不祥之刃·爆发收割',en:'Ominous Blade'},
    skill:{ name:{zh:'妖刀斩',en:'Demon Blade'},
      branches:[{n:{zh:'F1 妖刀斩·飞袭',en:'F1 Flying Strike'},d:{zh:'投掷妖刀闪烁挑飞敌人',en:'Throw blade, teleport, launch'}},{n:{zh:'F2 妖刀斩·连斩',en:'F2 Multi-slash'},d:{zh:'两段斩击',en:'Two-stage slash'}}]},
    ultimate:{ name:{zh:'不祥之刃',en:'Ominous Blade'},
      branches:[{n:{zh:'V1 不祥之刃·三斩',en:'V1 3-Slash'},d:{zh:'三连大范围斩击回血',en:'3-slash barrage + heal'}},{n:{zh:'V2 不祥之刃·六斩',en:'V2 6-Slash'},d:{zh:'六连斩击高额伤害+回血',en:'6-slash massive damage + heal'}}]},
    tips:{zh:'钩锁+妖刀斩贴脸起手，V2六连斩每段回血=单挑无敌。配合万钧奥义可触发雷光连携。',en:'Grapple + Demon Blade for instant gap-close. V2 6-slash each heals = duel dominant. Combo with Wan Jun for lightning synergy.'},
    desc:{zh:'爆发突进刺客。投掷妖刀瞬间闪烁挑飞，大招六连斩高额伤害并回复自身。配合钩锁秒杀。',en:'Burst assassin. Throw blade→teleport launch. Ultimate 6-slash with massive damage+self-heal. Hook for instant kill.'} },

  { id:'gu_qinghan', avatar:'❄️', image:'assets/heroes/gu_qinghan.jpg', role:{zh:'刺客/战士',en:'Assassin/Warrior'}, difficulty:3,
    name:{zh:'顾清寒',en:'Gu Qinghan'}, title:{zh:'冰寒剑客',en:'Frost Blademaster'},
    skill:{ name:{zh:'冰冻结界',en:'Frost Barrier'},
      branches:[{n:{zh:'F1 冰冻结界',en:'F1 Freeze'},d:{zh:'冻结自身免疫伤害+回复护甲',en:'Self-freeze immunity + armor regen'}},{n:{zh:'F2 冰爆',en:'F2 Ice Burst'},d:{zh:'爆发冰冻周围敌人',en:'Burst-freeze nearby enemies'}}]},
    ultimate:{ name:{zh:'冰魄',en:'Ice Soul'},
      branches:[{n:{zh:'V1 冰魄·突进',en:'V1 Dash Freeze'},d:{zh:'突进冻结敌人',en:'Dash to freeze enemies'}},{n:{zh:'V2 冰魄·剑气',en:'V2 Frost Wave'},d:{zh:'挥出剑气+冰雾范围伤害',en:'Sword wave + ice mist AoE'}}]},
    tips:{zh:'冰冻结界可在危险时自保回甲。冰魄突进冻结后接剑气收割。攻守兼备的万金油英雄。',en:'Frost Barrier self-saves + armor regen. Ice Soul dash freeze into wave = versatile offense+defense.'},
    desc:{zh:'冰系刺客战士。冰冻结界免疫伤害回甲，冰魄突进冻结敌人后接剑气收割。攻守兼备。',en:'Ice hybrid. Barrier grants immunity+armor. Ice Soul dashes to freeze then frost wave. Versatile duelist.'} },

  // ===== 前排/坦克型 =====
  { id:'tianhai', avatar:'🙏', image:'assets/heroes/tianhai.jpg', role:{zh:'坦克',en:'Tank'}, difficulty:2,
    name:{zh:'天海',en:'Tianhai'}, title:{zh:'金刚伏魔·前排开团',en:'Vajra Subduer'},
    skill:{ name:{zh:'金钟罩',en:'Golden Bell'},
      branches:[{n:{zh:'F1 金钟罩·反',en:'F1 Reflect'},d:{zh:'格挡反弹远程伤害',en:'Block+reflect ranged dmg'}},{n:{zh:'F2 金钟罩·振',en:'F2 Parry'},d:{zh:'附带振刀效果',en:'Built-in parry effect'}},{n:{zh:'F3 金钟罩·飞',en:'F3 Launch'},d:{zh:'击飞周围敌人',en:'Launch nearby enemies'}}]},
    ultimate:{ name:{zh:'金刚伏魔',en:'Vajra Avatar'},
      branches:[{n:{zh:'V1 金刚伏魔',en:'V1 Vajra'},d:{zh:'变身大佛，抓取单个敌人摔砸',en:'Transform, grab+slam 1 enemy'}},{n:{zh:'V2 双抓',en:'V2 Double Grab'},d:{zh:'可同时抓取两个敌人',en:'Can grab+slam 2 enemies'}}]},
    tips:{zh:'残血开大是逆转战局的关键。优先抓取敌方输出位。金钟罩振刀可弹反对手的蓄力攻击。',en:'Ult at low HP turns fights. Prioritize grabbing enemy DPS. Golden Bell parry counters charged attacks.'},
    desc:{zh:'三排开团核心坦克。金钟罩格挡反弹+振刀。变身大佛抓取敌方输出摔砸，残血开大逆转。',en:'Trios tank core. Golden Bell blocks+parries. Transform into giant Vajra, grab enemy DPS. Ult at low HP to turn tides.'} },

  { id:'yue_shan', avatar:'⚔️', image:'assets/heroes/yue_shan.jpg', role:{zh:'坦克/战士',en:'Tank/Warrior'}, difficulty:3,
    name:{zh:'岳山',en:'Yue Shan'}, title:{zh:'千军辟易·重装突击',en:'Army Breaker'},
    skill:{ name:{zh:'陷阵冲锋',en:'Charge'},
      branches:[{n:{zh:'F1 陷阵冲锋',en:'F1 Charge'},d:{zh:'突进击飞敌人',en:'Dash+launch enemies'}},{n:{zh:'F2 磐石架势',en:'F2 Stone Stance'},d:{zh:'受击反击+破胆',en:'Counter on hit + fear'}}]},
    ultimate:{ name:{zh:'千军辟易·神将',en:'God General'},
      branches:[{n:{zh:'V1 神将·处决',en:'V1 Execute'},d:{zh:'变身神将处决敌人',en:'Transform, execute enemies'}},{n:{zh:'V2 神将·免控',en:'V2 Team Anti-CC'},d:{zh:'团队免控光环',en:'Team CC immunity aura'}}]},
    tips:{zh:'2026黑马。变身冷却仅60秒。磐石架势反击适合防守反击。神将劈砍范围极大可强行分割战场。',en:'2026 dark horse. Transform CD only 60s. Stone Stance for defensive counters. God General cleave splits battlefields.'},
    desc:{zh:'2026黑马前排。陷阵冲锋突进击飞，磐石反击。神将变身霸体+减伤，大范围劈砍。变身CD仅60秒。',en:'2026 dark horse. Charge launches, Stone counters. God General hyper armor+DR, massive cleave. Transform CD 60s.'} },

  { id:'wei_qing', avatar:'🛡️', image:'assets/heroes/wei_qing.jpg', role:{zh:'坦克',en:'Tank'}, difficulty:2,
    name:{zh:'魏轻',en:'Wei Qing'}, title:{zh:'玄武守护',en:'Xuanwu Guardian'},
    skill:{ name:{zh:'玄武盾',en:'Xuanwu Shield'},
      branches:[{n:{zh:'F1 持盾冲锋',en:'F1 Shield Charge'},d:{zh:'持盾冲锋+盾击',en:'Shield charge + bash'}},{n:{zh:'F2 盾击反击',en:'F2 Counter Bash'},d:{zh:'受击后盾击反击',en:'Counter bash on hit'}}]},
    ultimate:{ name:{zh:'玄武护体',en:'Xuanwu Guard'},
      branches:[{n:{zh:'V1 玄武护体',en:'V1 Guard'},d:{zh:'抵挡三次硬直打击+盾反',en:'Block 3 staggers + shield counter'}},{n:{zh:'V2 玄武领域',en:'V2 Domain'},d:{zh:'团队减伤光环',en:'Team DR aura'}}]},
    tips:{zh:'防守反击打法首选。V1三次免硬直可在关键时刻保命反杀。适合新手使用。',en:'Top pick for defensive counter play. V1 3 stagger blocks can save+reverse fights. Beginner-friendly.'},
    desc:{zh:'防守反击坦克。持盾冲锋顶飞敌人，玄武护体免三次硬直+盾反。适合防守反击打法。',en:'Counter-tank. Shield charge knocks back. Guard blocks 3 staggers + shield counter. Ideal for defensive play.'} },

  // ===== 输出/战士型 =====
  { id:'tarka_ji', avatar:'🔥', image:'assets/heroes/tarka_ji.jpg', role:{zh:'战士',en:'Warrior'}, difficulty:4,
    name:{zh:'季沧海',en:'Tarka Ji'}, title:{zh:'燎原之火·近战压制',en:'Blazing Flame'},
    skill:{ name:{zh:'燎原劲',en:'Blazing Force'},
      branches:[{n:{zh:'F1 燎原劲·反',en:'F1 Counter'},d:{zh:'格挡反击，免疫部分控制',en:'Counter, immune to some CC'}},{n:{zh:'F2 燎原劲·火球',en:'F2 Fireball'},d:{zh:'发射火球破霸体+灼烧',en:'Fireball guard-break + burn'}}]},
    ultimate:{ name:{zh:'迅烈如火',en:'Raging Inferno'},
      branches:[{n:{zh:'V1 迅烈如火',en:'V1 Speed Boost'},d:{zh:'大幅提升移速攻速+灼烧',en:'Massive ATK/SPD boost + burn'}},{n:{zh:'V2 炎神',en:'V2 Fire God'},d:{zh:'延长奥义+持续释放燎原劲',en:'Extended ult + continuous Blazing Force'}}]},
    tips:{zh:'著名的"颠勺连招"创始人。V1加攻速移速后闪避取消循环可实现无限压制。单排压制力极强。',en:'Famous "flip juggle" originator. V1 speed boost + dodge cancel loop = infinite pressure. Solo mode king.'},
    desc:{zh:'近战压制之王。燎原劲格挡反击或火球破霸体。迅烈如火大幅提升攻速移速附带灼烧。"颠勺连招"创始人。',en:'Melee pressure king. Blazing Force counters or guard-breaks. Raging Inferno boosts ATK/SPD with burn. Flip combo originator.'} },

  { id:'takeda', avatar:'👹', image:'assets/heroes/takeda.jpg', role:{zh:'战士',en:'Warrior'}, difficulty:3,
    name:{zh:'武田信忠',en:'Takeda Nobutada'}, title:{zh:'白刃取·恶灵缠身',en:'Blade Snatcher'},
    skill:{ name:{zh:'白刃取',en:'Blade Snatch'},
      branches:[{n:{zh:'F1 白刃取',en:'F1 Disarm'},d:{zh:'夺取敌方武器+反击吸血',en:'Disarm enemy + lifesteal counter'}},{n:{zh:'F2 白刃取·破',en:'F2 Guard Break'},d:{zh:'破霸体缴械',en:'Guard-break disarm'}}]},
    ultimate:{ name:{zh:'封印解除',en:'Seal Break'},
      branches:[{n:{zh:'V1 封印解除',en:'V1 Demon Slash'},d:{zh:'召唤恶灵发动致命斩击',en:'Summon demon for lethal slash'}},{n:{zh:'V2 恶灵缠身',en:'V2 Demon Haunt'},d:{zh:'击杀回血+持续追击',en:'Kill heal + continuous pursuit'}}]},
    tips:{zh:'缴械是武田的核心特色。白刃取夺武器反击吸血，大招斩杀回血。克制依赖武器的英雄。',en:'Disarm is Takeda\'s core. Blade Snatch steals weapons + lifesteal counter. Ult executes to heal. Counters weapon-dependent heroes.'},
    desc:{zh:'缴械战士。白刃取可夺敌方武器+反击吸血。封印解除召唤恶灵致命斩，击杀回血。',en:'Disarm warrior. Blade Snatch steals weapons+lifesteal. Seal Break summons demon for lethal slash — kills restore HP.'} },

  { id:'wan_jun', avatar:'⚡', image:'assets/heroes/wan_jun.jpg', role:{zh:'战士',en:'Warrior'}, difficulty:3,
    name:{zh:'万钧',en:'Wan Jun'}, title:{zh:'雷主降世·无极镖客',en:'Thunder Lord'},
    skill:{ name:{zh:'雷刃',en:'Thunder Blade'},
      branches:[{n:{zh:'F1 雷刃·击',en:'F1 Knockback'},d:{zh:'击退周围敌人',en:'Knockback nearby enemies'}},{n:{zh:'F2 雷刃·掷',en:'F2 Throw'},d:{zh:'掷出雷刃远程攻击',en:'Throw thunder blade ranged'}}]},
    ultimate:{ name:{zh:'雷主',en:'Thunder Lord'},
      branches:[{n:{zh:'V1 雷主',en:'V1 Thunder Lord'},d:{zh:'变身雷主回满体力+雷闪+对空处决',en:'Transform: full stamina + dash + aerial execute'}},{n:{zh:'V2 雷诛',en:'V2 Thunder Punish'},d:{zh:'配合李寻欢雷痕触发处决',en:'Combo with Li Xunhuan for execute'}}]},
    tips:{zh:'与李寻欢有奥义连携。雷主形态雷闪极快，对空处决可针对哈迪和飞天英雄。',en:'Ult synergy with Li Xunhuan. Thunder Lord dash is extremely fast. Aerial execute counters Hadi and flying heroes.'},
    desc:{zh:'雷电机动战士。雷刃击退/投掷，变雷主回满体力+雷闪+对空处决。单挑团战均稳定。',en:'Thunder fighter. Blade knocks back/throws. Thunder Lord transform: full stamina + dash + aerial execute.'} },

  // ===== 辅助/治疗型 =====
  { id:'kurumi', avatar:'🌸', image:'assets/heroes/kurumi.jpg', role:{zh:'辅助',en:'Support'}, difficulty:1,
    name:{zh:'土御门胡桃',en:'Kurumi'}, title:{zh:'团队生命线',en:'Team Lifeline'},
    skill:{ name:{zh:'庇护',en:'Blessing'},
      branches:[{n:{zh:'F1 庇护·愈',en:'F1 Heal'},d:{zh:'连接队友持续回血',en:'Tether ally for continuous heal'}},{n:{zh:'F2 庇护·盾',en:'F2 Shield'},d:{zh:'回血+护盾+减伤',en:'Heal + shield + DR'}},{n:{zh:'F3 庇护·复',en:'F3 Revive'},d:{zh:'可复活倒地队友',en:'Can revive downed ally'}}]},
    ultimate:{ name:{zh:'净天地',en:'Pure Realm'},
      branches:[{n:{zh:'V1 净天地',en:'V1 Pure Realm'},d:{zh:'群体治疗+复活+解控',en:'AoE heal + revive + cleanse'}},{n:{zh:'V2 庇护·光伞',en:'V2 Light Umbrella'},d:{zh:'治疗+护盾+攻击增幅',en:'Heal + shield + ATK buff'}}]},
    tips:{zh:'三排必选辅助。F3可复活队友是大优势。2026版新增群体护盾持续5秒。新手首选。',en:'Must-pick in trios. F3 revive is huge. 2026 adds 5s group shield. Best for beginners.'},
    desc:{zh:'三排必选全能辅助。庇护连接回血+护盾+复活，净天地群体治疗+复活+解控。新手首选。',en:'Must-pick support. Blessing tethers heal+shield+revive. Pure Realm AoE heal+revive+cleanse. Beginner #1 pick.'} },

  { id:'yin_ziping', avatar:'🌿', image:'assets/heroes/yin_ziping.jpg', role:{zh:'辅助',en:'Support'}, difficulty:1,
    name:{zh:'殷紫萍',en:'Yin Ziping'}, title:{zh:'稳健医者',en:'Steadfast Healer'},
    skill:{ name:{zh:'滋养·灵芝',en:'Nourish'},
      branches:[{n:{zh:'F1 滋养',en:'F1 Nourish'},d:{zh:'瞬间回复队友血甲+减伤',en:'Instant HP/armor restore + DR'}},{n:{zh:'F2 滋养·绿盾',en:'F2 Green Shield'},d:{zh:'附加绿盾免疫僵直',en:'Green shield: immune to stagger'}}]},
    ultimate:{ name:{zh:'常魂',en:'Eternal Soul'},
      branches:[{n:{zh:'V1 常魂',en:'V1 Soul Save'},d:{zh:'为团队续命抵挡致命伤害',en:'Save team from fatal damage'}},{n:{zh:'V2 常魂·阵',en:'V2 Soul Array'},d:{zh:'持续消耗怒气群体回复',en:'Continuous group heal, drains rage'}}]},
    tips:{zh:'容错率最高辅助。F2绿盾免疫僵直是关键。常魂可在团灭边缘救回全队。操作简单适合新手。',en:'Highest forgiveness. F2 green shield immune to stagger is key. Eternal Soul saves team from wipe. Beginner-friendly.'},
    desc:{zh:'容错率最高辅助。灵芝瞬回血甲+绿盾免疫僵直。常魂为团队续命免死。新手最友好。',en:'Highest forgiveness. Instant HP/armor restore + stagger-immune shield. Eternal Soul death-save. Most beginner-friendly.'} },

  { id:'wu_chen', avatar:'🔮', image:'assets/heroes/wu_chen.jpg', role:{zh:'辅助',en:'Support'}, difficulty:4,
    name:{zh:'无尘',en:'Wu Chen'}, title:{zh:'战术传送·斗转星移',en:'Tactical Teleporter'},
    skill:{ name:{zh:'两仪剑',en:'Yin-Yang Sword'},
      branches:[{n:{zh:'F1 两仪剑·飞',en:'F1 Flying Sword'},d:{zh:'远程飞剑回甲+抵挡致命伤',en:'Ranged sword, recovers armor, blocks fatal'}},{n:{zh:'F2 两仪剑·换',en:'F2 Swap'},d:{zh:'与敌人交换位置',en:'Swap positions with enemy'}}]},
    ultimate:{ name:{zh:'斗转星移',en:'Star Shift'},
      branches:[{n:{zh:'V1 斗转星移',en:'V1 Teleport'},d:{zh:'布置传送阵群体传送',en:'Deploy teleport array, group teleport'}},{n:{zh:'V2 斗转星移·换',en:'V2 Swap Array'},d:{zh:'将敌人换进阵中集火',en:'Swap enemies into array for focus fire'}}]},
    tips:{zh:'战术上限极高。传送阵可救队友出圈或把敌人换进毒圈。V2配合宁红夜赤练无明换敌入阵=团灭。',en:'Insane tactical ceiling. Teleport saves teammates or swaps enemies into storm. V2 + Ning ult = team wipe.'},
    desc:{zh:'战术位移核心。两仪剑远程回甲或换位，传送阵实现群体传送。救队友出圈或换敌人入圈。',en:'Tactical core. Sword recovers armor or swaps. Teleport array saves allies or abducts enemies. Game-changing utility.'} },

  { id:'gan_xuan', avatar:'⏳', image:'assets/heroes/gan_xuan.jpg', role:{zh:'辅助',en:'Support'}, difficulty:4,
    name:{zh:'甘璇',en:'Gan Xuan'}, title:{zh:'司天璇星·时间回溯',en:'Time Oracle'},
    skill:{ name:{zh:'引星诀',en:'Star Guide'},
      branches:[{n:{zh:'F1 引星诀',en:'F1 Star Dash'},d:{zh:'瞬移+根据承伤生成临时护盾10秒',en:'Teleport + 10s shield based on dmg taken'}},{n:{zh:'F2 引星诀·愈',en:'F2 Star Heal'},d:{zh:'化身流星突进回血+队友回体，溢出转护甲',en:'Dash heal self + team, overflow→armor'}}]},
    ultimate:{ name:{zh:'天机衍',en:'Celestial Fate'},
      branches:[{n:{zh:'V1 天机衍',en:'V1 Rewind'},d:{zh:'全员18秒免死印记：致命伤→回溯4秒前状态+位置',en:'18s team death-save: lethal dmg→rewind 4s state+position'}},{n:{zh:'V2 天机衍·溯',en:'V2 Pullback'},d:{zh:'标记敌人3秒后强制拉回原位，仅需60%怒气',en:'Mark enemy, force-pullback after 3s, only 60% rage'}}]},
    tips:{zh:'2026新英雄。V1全队"时间回溯"是游戏最强保命技，可复活魂冢队友。V2仅需60%怒气门槛极低。',en:'2026 new hero. V1 team time-rewind is strongest save in game, can temp-revive soul tombs. V2 needs only 60% rage.'},
    desc:{zh:'时间回溯辅助。引星诀瞬移护盾/群体回复。天机衍全队免死回溯4秒，可临时复活队友。2026年4月上线。',en:'Time-rewind support. Star Guide teleports+shields/heals. Celestial Fate rewinds team 4s on lethal dmg, temp-revives allies. Released Apr 2026.'} },

  // ===== 特殊机制型 =====
  { id:'shen_miao', avatar:'🤖', image:'assets/heroes/shen_miao.jpg', role:{zh:'支援',en:'Support'}, difficulty:3,
    name:{zh:'沈妙',en:'Shen Miao'}, title:{zh:'天工铳武·机甲师',en:'Mech Pilot'},
    skill:{ name:{zh:'铳武',en:'Firearm'},
      branches:[{n:{zh:'F1 铳武·爆',en:'F1 Bomb'},d:{zh:'后跳发射爆炸弹',en:'Backstep + explosive bomb'}},{n:{zh:'F2 铳武·默',en:'F2 Silence'},d:{zh:'精准形态附加沉默效果',en:'Precision mode: adds silence'}}]},
    ultimate:{ name:{zh:'天工·铳武',en:'Mech: Iron Guard'},
      branches:[{n:{zh:'V1 机甲铁卫',en:'V1 Iron Guard'},d:{zh:'召唤机甲+蓄力炮击',en:'Summon mech + charged cannon'}},{n:{zh:'V2 信标',en:'V2 Beacon'},d:{zh:'召唤信标供队友乘坐+护甲加成',en:'Beacon for team boarding + armor buff'}}]},
    tips:{zh:'三排大幅提升团队容错。信标可让队友共同乘坐机动。机甲炮击可远程压制敌方阵型。',en:'Boosts team forgiveness in trios. Beacon lets team ride together. Mech cannon pressures enemy formations from range.'},
    desc:{zh:'机甲支援英雄。铳武后跳爆炸弹+沉默，大招召唤机甲铁卫炮击或信标供队友乘坐。',en:'Mech support. Backstep bombs with silence. Ult summons mech cannon or beacon for team transport. Trios utility.'} },

  { id:'wu_zhen', avatar:'🏹', image:'assets/heroes/wu_zhen.jpg', role:{zh:'远程/控制',en:'Ranged/Control'}, difficulty:3,
    name:{zh:'巫真',en:'Wu Zhen'}, title:{zh:'神弓镇祟·混沌射手',en:'Chaos Archer'},
    skill:{ name:{zh:'灵羽',en:'Spirit Feather'},
      branches:[{n:{zh:'F1 灵羽',en:'F1 Spirit Feather'},d:{zh:'受击可用，击退敌人+召唤灵鸟，再次释放灵鸟攻击并回血',en:'Counter-launch + summon spirit bird, recast to attack & heal'}},{n:{zh:'F2 灵羽·照',en:'F2 Capture'},d:{zh:'灵鸟抓取敌人拖回面前，成功可触发处决，失败则范围击飞',en:'Bird grabs & drags enemy back, success = execute, fail = AoE launch'}}]},
    ultimate:{ name:{zh:'神弓镇祟',en:'Spirit Bow'},
      branches:[{n:{zh:'V1 神弓镇祟',en:'V1 Spirit Bow'},d:{zh:'25秒奥义+饮羽箭+架弓状态。二段释放火墙阻挡远程+灼烧',en:'25s ult + fire arrows + bow stance. 2nd cast: firewall blocks ranged + burns'}},{n:{zh:'V2 焚天·神弓镇祟',en:'V2 Flame Bow'},d:{zh:'二段变为自动瞄准+强力束缚箭矢，群体控制',en:'2nd cast: auto-aim binding arrows, AoE control'}}]},
    tips:{zh:'远程弓箭手。灵羽受击自保+回血，V1火墙克制远程英雄。与方诺有奥义连携。魏轻/沙男/冰女是她的克星。',en:'Ranged archer. Spirit Feather self-saves + heals. V1 firewall counters ranged heroes. Ult synergy with Fang Nuo. Wei Qing/Temur/Gu Qinghan counter her.'},
    desc:{zh:'混沌弓箭手。灵羽击退召唤灵鸟攻击+回血。神弓镇祟25秒架弓状态，二段火墙阻挡远程。远程压制+控制。',en:'Chaos archer. Spirit Feather launches bird for attack+heal. Spirit Bow 25s stance with firewall that blocks ranged. Ranged pressure + control.'} },

  { id:'hadi', avatar:'🦾', image:'assets/heroes/hadi.jpg', role:{zh:'机动',en:'Mobility'}, difficulty:4,
    name:{zh:'哈迪',en:'Hadi Ismail'}, title:{zh:'千机手·三维空战',en:'Aerial Engineer'},
    skill:{ name:{zh:'弹射',en:'Catapult'},
      branches:[{n:{zh:'F1 弹射',en:'F1 Catapult'},d:{zh:'受击击退敌人+弹射升空滑翔',en:'Counter-launch + glide'}},{n:{zh:'F2 机械臂',en:'F2 Grapple Arm'},d:{zh:'机械臂牵引拉敌人或队友',en:'Pull enemies or allies'}}]},
    ultimate:{ name:{zh:'飞天',en:'Flight'},
      branches:[{n:{zh:'V1 飞天',en:'V1 Flight'},d:{zh:'持续飞行+空中普攻+空中振刀',en:'Sustained flight + aerial attacks + aerial parry'}},{n:{zh:'V2 千机匣',en:'V2 Supply Box'},d:{zh:'部署千机匣供队友远程牵引',en:'Deploy boxes for team grapple points'}}]},
    tips:{zh:'永劫首个完整空战英雄。飞天可空中振刀+普攻。千机匣为队友提供飞索锚点，大幅提升团队机动性。',en:'First full air-combat hero. Flight enables aerial attacks+parry. Supply boxes give team grapple anchors — massive mobility boost.'},
    desc:{zh:'首个完整空战英雄。机械臂拉敌或弹射升空。飞天持续飞行+空中振刀。千机匣团队牵引。',en:'First air-combat hero. Arm pulls or launches. Sustained flight + aerial parry. Supply boxes for team grapple.'} },

  { id:'yulinglong', avatar:'🦊', image:'assets/heroes/yulinglong.jpg', role:{zh:'控制',en:'Control'}, difficulty:3,
    name:{zh:'玉玲珑',en:'Yu Linglong'}, title:{zh:'狐火魅影·精神控制',en:'Foxfire Phantom'},
    skill:{ name:{zh:'狐火',en:'Foxfire'},
      branches:[{n:{zh:'F1 狐火',en:'F1 Foxfire'},d:{zh:'受击击飞敌人，狐火再爆再次击飞',en:'Hitstun launch, foxfire detonates to launch again'}}]},
    ultimate:{ name:{zh:'迷魂',en:'Enchant'},
      branches:[{n:{zh:'V1 迷魂',en:'V1 Enchant'},d:{zh:'投掷狐狸灵体，触碰敌人需解魂否则被控制',en:'Throw fox spirit, enemies must counter or be controlled'}}]},
    tips:{zh:'独特的精神控制机制。狐火受击二段击飞可拆火。迷魂需敌人解魂对抗，心理战利器。',en:'Unique mind-control mechanic. Foxfire double-launch interrupts. Enchant forces enemies to counter — mind-game weapon.'},
    desc:{zh:'特殊控制英雄。狐火受击击飞+二次引爆。迷魂投掷狐狸灵体控敌，需解魂对抗。独特精神控制。',en:'Unique control. Foxfire double-launches. Enchant throws fox spirits — enemies must counter or be mind-controlled.'} },

  { id:'hu_wei', avatar:'🐯', image:'assets/heroes/hu_wei.jpg', role:{zh:'战士',en:'Warrior'}, difficulty:2,
    name:{zh:'胡为',en:'Hu Wei'}, title:{zh:'猛虎下山',en:'Pouncing Tiger'},
    skill:{ name:{zh:'虎掌',en:'Tiger Palm'},
      branches:[{n:{zh:'F1 虎掌',en:'F1 Tiger Palm'},d:{zh:'拍地板获减伤+可拆火脱战',en:'Ground slam DR + disengage'}}]},
    ultimate:{ name:{zh:'虎扑',en:'Tiger Pounce'},
      branches:[{n:{zh:'V1 虎扑',en:'V1 Tiger Pounce'},d:{zh:'受击三段虎扑，范围大伤害高',en:'3-stage pounce on hit, wide AoE high dmg'}}]},
    tips:{zh:'正面冲阵战士。虎掌拆火脱战保命，虎扑三段范围大伤害高。适合正面冲散敌方阵型。',en:'Frontline diver. Tiger Palm disengages to survive. 3-stage pounce massive AoE — great for breaking enemy formations.'},
    desc:{zh:'虎系战士。虎掌拍地减伤+拆火。大招三段虎扑范围大伤害高，适合正面冲阵拆散敌阵。',en:'Tiger warrior. Palm slams for DR+interrupt. 3-stage pounce massive AoE — frontline formation breaker.'} },

  { id:'ji_yingying', avatar:'🔥', image:'assets/heroes/ji_yingying.jpg', role:{zh:'变形',en:'Transform'}, difficulty:3,
    name:{zh:'季莹莹',en:'Ji Yingying'}, title:{zh:'幽冥火·无常索命',en:'Nether Flame'},
    skill:{ name:{zh:'幽冥火',en:'Nether Fire'},
      branches:[{n:{zh:'F1 幽冥火',en:'F1 Nether Fire'},d:{zh:'化身幽冥火飞行砸击敌人',en:'Transform into flame, fly+slam enemies'}}]},
    ultimate:{ name:{zh:'无常锁',en:'Soul Chain'},
      branches:[{n:{zh:'V1 无常锁',en:'V1 Soul Chain'},d:{zh:'武器变为无常锁，攻击范围极大',en:'Weapon morphs to chain with extreme reach'}}]},
    tips:{zh:'变形英雄。幽冥火飞行砸击可越地形追击。无常锁右蓄范围极大，压制力强。',en:'Transform hero. Nether Fire flies over terrain to chase. Soul Chain right-charged has massive reach+pressure.'},
    desc:{zh:'火焰变形英雄。幽冥火化身火焰飞行砸击。无常锁武器化锁大范围横扫。压制力极强。',en:'Fire transform. Nether Fire flies+smashes. Soul Chain morphs weapon to massive reach chain. Extreme pressure.'} },

  { id:'liu_lian', avatar:'💎', image:'assets/heroes/liu_lian.jpg', role:{zh:'战士',en:'Warrior'}, difficulty:3,
    name:{zh:'刘炼',en:'Liu Lian'}, title:{zh:'流金剑·司南星',en:'Gold Blade'},
    skill:{ name:{zh:'驭金闪',en:'Gold Flash'},
      branches:[{n:{zh:'F1 驭金闪',en:'F1 Gold Flash'},d:{zh:'击飞敌人+后撤，被振不掉刀1.5秒',en:'Launch+retreat, weapon delay on parry 1.5s'}},{n:{zh:'F2 驭金闪·化磁',en:'F2 Magnet'},d:{zh:'磁吸力牵引敌人至自身',en:'Magnetic pull enemies to self'}}]},
    ultimate:{ name:{zh:'金石铄',en:'Goldforge'},
      branches:[{n:{zh:'V1 金石铄（流金剑）',en:'V1 Gold Sword'},d:{zh:'远程流金剑→剑印束缚→瞬移击飞+回血',en:'Ranged sword→mark bind→teleport launch+heal'}},{n:{zh:'V2 金石铄·核（流金核）',en:'V2 Gold Core'},d:{zh:'抓取敌人2.5秒→投掷范围伤害',en:'Grab enemy 2.5s→throw AoE dmg'}}]},
    tips:{zh:'蓄力爆发战士。流金剑远程束缚+瞬移击飞回血的循环是核心。化磁可拉敌人进集火圈。',en:'Charge burst warrior. Gold Sword bind→teleport→launch→heal cycle is core. Magnet pulls enemies into focus fire.'},
    desc:{zh:'蓄力爆发战士。驭金闪击飞+被振不掉刀。流金剑远程束缚→瞬移击飞+回血。化磁牵引。',en:'Burst warrior. Gold Flash launches+parry protection. Gold Sword ranged bind→teleport launch+heal. Magnet pull.'} },

  { id:'xila', avatar:'✨', image:'assets/heroes/xila.jpg', role:{zh:'辅助',en:'Support'}, difficulty:2,
    name:{zh:'席拉',en:'Xila'}, title:{zh:'蚀日之辉·光球使徒',en:'Solar Radiance'},
    skill:{ name:{zh:'光晕',en:'Halo'},
      branches:[{n:{zh:'F1 光晕',en:'F1 Halo'},d:{zh:'后跳生成光球→2秒爆炸回血+眩目敌人',en:'Backstep create orb→2s explode heal+blind'}},{n:{zh:'F2 光晕·瞬附',en:'F2 Attach'},d:{zh:'光球吸附自身或队友，4秒后爆炸回血+眩目',en:'Orb attaches 4s→explode heal+blind'}}]},
    ultimate:{ name:{zh:'恩威之光',en:'Grace Light'},
      branches:[{n:{zh:'V1 恩威之光',en:'V1 Beam'},d:{zh:'光盾+左键光束伤害+右键光球治疗',en:'Light shield+LMB beam dmg+RMB orb heal'}},{n:{zh:'V2 恩威之光·阵',en:'V2 Array'},d:{zh:'光阵内队友攻击回复+结束眩目6秒',en:'Array: team lifesteal+end blind 6s'}}]},
    tips:{zh:'全能辅助。光球眩目控制+治疗兼备。V2光阵团队吸血+6秒眩目控制极强。与迦南有奥义连携。',en:'Versatile support. Orbs blind+heal. V2 array team lifesteal+6s blind is insane. Ult synergy with Jia Nan.'},
    desc:{zh:'全能光系辅助。光球爆炸回血+眩目控制。恩威之光护盾+光束输出。光阵团队吸血+6秒眩目。',en:'Light support. Orb heals+blinds. Grace Light shield+beam DPS. Array team lifesteal+6s blind. Ult synergy with Jia Nan.'} },

  { id:'li_xunhuan', avatar:'🎯', image:'assets/heroes/li_xunhuan.jpg', role:{zh:'刺客',en:'Assassin'}, difficulty:5,
    name:{zh:'李寻欢',en:'Li Xunhuan'}, title:{zh:'小李飞刀·例不虚发',en:'Little Flying Dagger'},
    skill:{ name:{zh:'探花步',en:'Flower Step'},
      branches:[{n:{zh:'F1 探花步',en:'F1 Flower Step'},d:{zh:'蹬跃跳起攻击下方→命中可再突刺',en:'Jump attack→hit to dash again'}},{n:{zh:'F2 探花步·反击',en:'F2 Counter'},d:{zh:'10秒内被攻击自动化解→飞刀反击回血',en:'10s auto-dodge counter→dagger throw heal'}}]},
    ultimate:{ name:{zh:'片叶不沾',en:'Untouchable'},
      branches:[{n:{zh:'V1 片叶不沾',en:'V1 Untouchable'},d:{zh:'25秒化解反击+踏风+神意索敌飞刀（无视闪避必中）',en:'25s dodge counter+aerial slam+homing dagger (undodgeable)'}},{n:{zh:'V2 片叶不沾·挥洒',en:'V2 Flurry'},d:{zh:'神意满后5轮飞刀+位移+残影爆炸僵直',en:'5 dagger volleys+dash+afterimage explode stun'}}]},
    tips:{zh:'操作上限最高英雄。化解需精准闪避时机。神意飞刀无视闪避必中。与万钧奥义连携触发雷光飞刀。',en:'Highest skill ceiling. Counter requires precise dodge timing. Homing dagger undodgeable. Ult synergy with Wan Jun for lightning daggers.'},
    desc:{zh:'古龙联动·小李飞刀。探花步自动化解反击。片叶不沾25秒无敌飞刀+踏风。神意索敌飞刀必中。',en:'Wuxia crossover. Auto-dodge counter. 25s untouchable mode+homing dagger. Ultimate daggers undodgeable. Max skill ceiling.'} },

  { id:'zhang_qiling', avatar:'🗿', image:'assets/heroes/zhang_qiling.jpg', role:{zh:'战士',en:'Warrior'}, difficulty:3,
    name:{zh:'张起灵',en:'Zhang Qiling'}, title:{zh:'闷油瓶·黑金古刀',en:'Black Gold Blade'},
    skill:{ name:{zh:'拨挡架势',en:'Parry Stance'},
      branches:[{n:{zh:'F1 拨挡架势',en:'F1 Parry'},d:{zh:'受击突进进入拨挡架势反击',en:'Counter-dash into parry stance'}}]},
    ultimate:{ name:{zh:'怒意绝斩',en:'Rage Slash'},
      branches:[{n:{zh:'V1 怒意绝斩',en:'V1 Rage Slash'},d:{zh:'拔出黑金古刀蓄力斩击，命中回血',en:'Draw black-gold blade charged slash, hit heals'}}]},
    tips:{zh:'盗墓笔记联动英雄。拨挡架势反击伤害可观。怒意绝斩蓄力命中回血，残血反杀利器。',en:'Daomu Biji crossover. Parry stance counter hits hard. Rage Slash charged hit heals — great for low-HP comebacks.'},
    desc:{zh:'盗墓笔记联动。拨挡架势反击。怒意绝斩拔出黑金古刀蓄力斩击回血。残血反杀利器。',en:'Crossover hero. Parry stance counters. Rage Slash draws black-gold blade, charged slash heals. Low-HP comeback king.'} },

  { id:'lan_meng', avatar:'💜', image:'assets/heroes/lan_meng.jpg', role:{zh:'机动',en:'Mobility'}, difficulty:3,
    name:{zh:'蓝梦',en:'Lan Meng'}, title:{zh:'彩球戏法',en:'Prism Juggler'},
    skill:{ name:{zh:'飞行',en:'Flight'},
      branches:[{n:{zh:'F1 飞行',en:'F1 Flight'},d:{zh:'向准星方向飞行，可打断衔接攻击',en:'Fly toward crosshair, cancel into attacks'}}]},
    ultimate:{ name:{zh:'弹射彩球',en:'Prism Barrage'},
      branches:[{n:{zh:'V1 弹射彩球',en:'V1 Prism Barrage'},d:{zh:'跃上戏布释放自动追踪彩球，吸血弹射',en:'Leap+release auto-track orbs, lifesteal ricochet'}}]},
    tips:{zh:'飞行机动+远程吸血。彩球自动追踪+弹射吸血，团战持续输出+自愈。飞行可打断接攻击灵活换位。',en:'Flight mobility+ranged lifesteal. Orbs auto-track+ricochet heal. Sustained DPS+self-heal in team fights.'},
    desc:{zh:'飞行机动英雄。飞行灵活换位接攻击。弹射彩球自动追踪+吸血弹射。团战持续输出+自愈。',en:'Flight mobility. Fly to reposition into attacks. Auto-track orbs lifesteal ricochet. Sustained team fight DPS+self-heal.'} },
];

// --- Basic Tutorials ---
const basicTutorials = [
  {
    id: 'basic-1',
    title: { zh: '移动与飞索使用', en: 'Movement & Grappling Hook' },
    content: { zh: '使用WASD键控制角色移动，空格键跳跃。飞索是游戏最重要的移动工具——瞄准任意表面按Q键发射飞索，角色会高速飞向目标点。在飞索飞行过程中可以再次按Q取消飞行，或按空格进行二段跳。飞索也可用于攀爬墙壁和快速翻越障碍物。熟练掌握飞索的收放是生存和追击的关键。', en: 'Use WASD keys for movement and Space to jump. The Grappling Hook is the most important mobility tool — aim at any surface and press Q to launch toward it at high speed. Press Q again mid-flight to cancel, or Space for a double jump. The grappling hook can also be used for wall climbing and vaulting obstacles. Mastering grapple control is key for survival and pursuit.' },
    videoLink:'https://www.bilibili.com/video/BV19M4y1c7pf/',
    tip: { zh: '💡 小贴士：在空中使用飞索不会消耗体力，利用这一点可以在空中连续飞索实现超长距离移动。', en: '💡 Tip: Using the grappling hook in mid-air doesn\'t consume stamina — use this to chain grapples for extreme long-distance traversal.' }
  },
  {
    id: 'basic-2',
    title: { zh: '普通攻击与蓄力攻击', en: 'Normal & Charged Attacks' },
    content: { zh: '鼠标左键发动普通攻击，按住左键可进行蓄力攻击。普通攻击速度快但伤害低，且会被蓄力攻击的霸体抵挡。蓄力攻击伤害高并带有霸体效果（不会被普通攻击打断），但蓄力期间容易被振刀弹反。战斗中需要根据情况灵活切换普通攻击与蓄力攻击。', en: 'Left-click for normal attacks; hold left-click for charged attacks. Normal attacks are fast but deal less damage and are countered by charged attack hyper armor. Charged attacks deal high damage with hyper armor (cannot be interrupted by normal attacks), but are vulnerable to Focus (parry) during charging. Flexibly switch between normal and charged attacks based on the situation.' },
    videoLink:'https://www.bilibili.com/video/BV1F64y1B78e/',
    tip: { zh: '💡 小贴士：不要总是无脑蓄力——熟练的对手会抓住你蓄力的时机振刀弹反。适当穿插普通攻击可以打乱对手的节奏。', en: '💡 Tip: Don\'t always charge mindlessly — skilled opponents will parry your charged attacks. Mix in normal attacks to disrupt their rhythm.' }
  },
  {
    id: 'basic-3',
    title: { zh: '振刀与格挡机制', en: 'Focus (Parry) & Blocking' },
    content: { zh: '按右键进入振刀姿态（蓝色光芒），在正确的时机振刀可以弹反敌人的蓄力攻击并将其击倒。振刀是"剪刀石头布"克制关系中的关键一环——克制蓄力攻击但被普通攻击克制。注意：振刀有短暂的前摇和冷却时间，时机的把握至关重要。', en: 'Right-click to enter Focus stance (blue glow). Time it correctly to parry enemy charged attacks and knock them down. Focus is the key link in the RPS counter system — it counters charged attacks but is countered by normal attacks. Note: Focus has a brief startup and cooldown — timing is crucial.' },
    videoLink:'https://www.bilibili.com/video/BV1V3411z7k4/',
    tip: { zh: '💡 小贴士：预判对手的蓄力节奏是振刀的关键。看准对手抬手动作再振，不要乱振导致被普攻惩罚。', en: '💡 Tip: Predicting the opponent\'s charge rhythm is key. Watch their windup animation before parrying — don\'t spam parry and get punished by normal attacks.' }
  },
  {
    id: 'basic-4',
    title: { zh: '闪避与身法', en: 'Dodging & Footwork' },
    content: { zh: '按下Shift键进行闪避，可以向任意方向快速位移一小段距离。闪避有无敌帧，可以在正确时机躲避攻击。连续闪避需要消耗体力（体力条显示在屏幕下方），体力耗尽后无法闪避。在战斗中合理管理体力，灵活使用闪避来调整位置和躲避关键技能。', en: 'Press Shift to dodge — a quick dash in any direction. Dodging has invincibility frames; time it correctly to evade attacks. Consecutive dodging consumes stamina (shown at the bottom of the screen). You cannot dodge when stamina is depleted. Manage stamina wisely and use dodges to reposition and evade key abilities.' },
    videoLink:'https://www.bilibili.com/video/BV1nb4y1r7Zb/',
    tip: { zh: '💡 小贴士：不要总是向后闪避。侧向闪避和向前闪避往往能出其不意地绕到对手侧面进行反击。', en: '💡 Tip: Don\'t always dodge backward. Side and forward dodges can often catch opponents off guard by letting you flank them for a counterattack.' }
  },
  {
    id: 'basic-5',
    title: { zh: '武器拾取与魂玉搭配', en: 'Weapon Looting & Souljade Builds' },
    content: { zh: '靠近地面上的武器按E键拾取。每个玩家可以携带两把主武器和一把副武器。魂玉分为武器魂玉（改变武器招式）和防具魂玉（提升属性）。在背包界面中装备魂玉，注意魂玉的品质（白<蓝<紫<金）。优先拾取高品级魂玉，并根据你的武器选择合适的武器魂玉。', en: 'Approach weapons on the ground and press E to pick them up. Each player can carry two main weapons and one sidearm. Souljades are divided into Weapon Souljades (modify attack patterns) and Armor Souljades (boost stats). Equip them in your inventory. Note Souljade quality (White < Blue < Purple < Gold). Prioritize high-tier Souljades and choose Weapon Souljades that match your equipped weapons.' },
    videoLink:'https://www.bilibili.com/video/BV1aV411J7TQ/',
    tip: { zh: '💡 小贴士：武器魂玉的选择比品质更重要——一个低品级但适合你打法的魂玉，往往比高品级但不匹配的魂玉更有用。', en: '💡 Tip: Weapon Souljade choice matters more than quality — a low-tier Souljade that fits your playstyle is often more useful than a high-tier one that doesn\'t match.' }
  },
  {
    id: 'basic-6',
    title: { zh: '回复与护甲管理', en: 'Healing & Armor Management' },
    content: { zh: '使用血药（红色）回复生命值，使用甲粉（蓝色）修复护甲。回复需要引导时间，期间不能移动或攻击，因此需要在安全位置使用。护甲在战斗中会先于生命值消耗，保持护甲的健康状态非常重要。优先拾取高级护甲和回复道具。', en: 'Use Health Powder (red) to restore HP and Armor Powder (blue) to repair armor. Healing requires a channeling time during which you cannot move or attack — always use them in safe locations. Armor depletes before health in combat, so keeping armor topped up is critical. Prioritize looting high-level armor and healing items.' },
    videoLink:'https://www.bilibili.com/video/BV1ue4y1f7H6/',
    tip: { zh: '💡 小贴士：战斗中使用回复道具非常危险，可以先用飞索拉开距离，躲在掩体后再回复。', en: '💡 Tip: Healing during combat is extremely risky. Use your grappling hook to create distance, then heal behind cover.' }
  },
];

// --- Advanced Tutorials ---
const advancedTutorials = [
  {
    id: 'adv-1',
    title: { zh: '取消后摇与连招取消', en: 'Animation Canceling & Combo Cancels' },
    content: { zh: '每种攻击都有前摇（攻击动作开始到产生伤害）和后摇（伤害产生到可以再次行动）。通过特定的操作可以取消后摇，加快攻击节奏。常见的取消方式包括：闪避取消、飞索取消、技能取消。例如，在普攻后摇期间使用闪避，可以立即取消后摇并进入闪避状态，然后接下一个攻击，形成流畅的连击。', en: 'Every attack has startup (from action to damage) and recovery (from damage to next action). Specific inputs can cancel recovery frames to speed up your attack rhythm. Common cancel methods: dodge cancel, grapple cancel, and skill cancel. For example, dodging during a normal attack\'s recovery instantly cancels it into a dodge, allowing you to chain into the next attack for a fluid combo.' },
    videoLink:'https://www.bilibili.com/video/BV1iRqeY9EKa/',
    tip: { zh: '💡 小贴士：闪避取消是最基础也是最重要的取消方式。在训练场对着木桩反复练习普攻→闪避→普攻的节奏，直到形成肌肉记忆。', en: '💡 Tip: Dodge canceling is the most fundamental and important cancel technique. Practice the rhythm of normal attack → dodge → normal attack on the training dummy until it becomes muscle memory.' }
  },
  {
    id: 'adv-2',
    title: { zh: '蓄力取消（蓝取消）', en: 'Charge Cancel (Blue Cancel)' },
    content: { zh: '蓄力攻击在蓄力过程中（蓝色闪光阶段）可以通过闪避或其他操作取消，这被称为"蓝取消"。蓝取消是高端对局中的核心技巧，用来迷惑对手、取消不利的蓄力位置、或是将蓄力转化为其他攻击。例如：开始蓄力→对手准备振刀→蓝取消接普攻→打断对手振刀。', en: 'Charged attacks can be canceled during the charging phase (blue flash) via dodge or other actions — this is called "Blue Cancel." It\'s a core high-level technique used to feint opponents, cancel unfavorable charge positions, or convert charges into other attacks. Example: Start charging → opponent prepares parry → blue cancel into normal attack → interrupt their parry.' },
    videoLink:'https://www.bilibili.com/video/BV1WQ4y1v7oe/',
    tip: { zh: '💡 小贴士：蓝取消的关键在于"骗"——让对手以为你要蓄力攻击而做出反应，然后取消蓄力利用对手的反应破绽进行打击。', en: '💡 Tip: The key to blue cancel is "baiting" — making opponents think you\'ll commit to a charged attack, then canceling to exploit their reaction.' }
  },
  {
    id: 'adv-3',
    title: { zh: '地图资源点分析', en: 'Map Resource Point Analysis' },
    content: { zh: '聚窟洲地图上的资源分布不均。高资源区（如不周滩、聚窟殿、悬空寺）有大量高级装备和魂玉，但也是玩家争夺最激烈的地方。中资源区适合稳健发育。低资源区适合避战。选择跳点时要考虑航线位置、队伍实力和个人打法风格。一般来说，新手建议选择中低资源区逐步熟悉地图。', en: 'Resources are unevenly distributed across Morus Isle. High-tier zones (e.g., Buzhou Beach, Naraka Palace, Suspended Temple) have abundant high-level gear and Souljades but are heavily contested. Mid-tier zones suit steady development. Low-tier zones are for avoiding early fights. When choosing a drop point, consider the flight path, team strength, and your playstyle. Beginners should generally pick mid-to-low tier zones to learn the map.' },
    videoLink:'https://www.bilibili.com/video/BV1MF41187vu/',
    tip: { zh: '💡 小贴士：记住几个固定的"安全路线"——从低资源区出发，沿途经过中资源区补给的路线，可以大幅提高你的存活率。', en: '💡 Tip: Memorize a few "safe routes" — paths starting from low-tier zones passing through mid-tier resupply areas — to significantly improve your survival rate.' }
  },
  {
    id: 'adv-4',
    title: { zh: '团队配合策略', en: 'Team Coordination Strategies' },
    content: { zh: '在三人组排模式中，团队配合决定了胜负。基本阵型：一位坦克型英雄在前排吸收伤害（如天海），一位输出英雄在中距离输出（如季沧海），一位辅助/控制英雄提供支援（如胡桃或宁红夜）。关键配合包括：集火同一个目标、大招的衔接配合、互相掩护回复。沟通是关键——使用语音或游戏内标记系统保持信息同步。', en: 'In Trios mode, team coordination decides victories. Basic formation: one tank hero soaks damage on the frontline (e.g., Tianhai), one DPS hero outputs from mid-range (e.g., Tarka Ji), and one support/control hero provides backup (e.g., Kurumi or Viper Ning). Key coordination: focus-firing the same target, chaining ultimates together, and covering each other\'s healing. Communication is key — use voice chat or the ping system to stay synced.' },
    videoLink:'https://www.bilibili.com/video/BV1Z4421Z7TM/',
    tip: { zh: '💡 小贴士：三人小队的大招配合是最强的——例如宁红夜的天雷配合迦南的暗影领域和季沧海的炼狱，可以瞬间融化敌方整队。', en: '💡 Tip: Ultimate combos in trios are devastating — e.g., Viper Ning\'s Thunder + Jia Nan\'s Shadow Domain + Tarka Ji\'s Inferno can instantly wipe an enemy squad.' }
  },
  {
    id: 'adv-5',
    title: { zh: '武器克制关系详解', en: 'Weapon Matchup Guide' },
    content: { zh: '不同武器之间存在天然的克制关系：长兵器（长枪、阔刀）克制短兵器（匕首、双刀），因为攻击范围更大。短兵器克制重型兵器（阔刀除外），因为攻速更快可以打断对方起手。太刀是最均衡的武器，无明显克制和被克制。弓弩类远程武器在特定距离内有优势，但被近战武器近身后处于劣势。了解武器克制关系可以帮助你在遭遇战中做出正确的武器切换。', en: 'Weapons have natural counter relationships: long weapons (Spear, Greatsword) counter short weapons (Dagger, Dual Blades) due to greater reach. Short weapons counter heavy weapons (except Greatsword) because faster attack speed can interrupt startups. Katana is the most balanced — no hard counters either way. Ranged weapons (Bow, Crossbow) have advantages at specific distances but are disadvantaged once melee weapons close in. Understanding weapon matchups helps you make correct weapon swaps during encounters.' },
    videoLink:'https://www.bilibili.com/video/BV1pY411s7EU/',
    tip: { zh: '💡 小贴士：随身携带一把长兵器和一把短兵器，根据对手的武器灵活切换，可以让你在大多数对局中占据优势。', en: '💡 Tip: Carry one long weapon and one short weapon. Flexibly switch based on your opponent\'s weapon to gain an edge in most matchups.' }
  },
];

// --- Combos ---
// difficulty: 1-5 stars
// videoLink: URL for 4+ star combos
const combosData = [
  // === 季沧海 Tarka Ji ===
  { id:'combo-1',heroId:'tarka_ji',name:{zh:'基础三连',en:'Basic 3-Hit Chain'},difficulty:1,input:{zh:'左键 → 左键 → 左键',en:'LMB → LMB → LMB'},damage:{zh:'约180伤害',en:'~180 dmg'},desc:{zh:'最简单的三连攻击，第三下有击退效果。适合新手熟悉季沧海的攻击节奏。',en:'Simplest 3-hit chain with knockback on the third hit. Great for learning Tarka Ji\'s rhythm.'},videoLink:null},
  { id:'combo-2',heroId:'tarka_ji',name:{zh:'蓝取消骗振→普攻连击',en:'Blue Cancel Bait → Normal Chain'},difficulty:2,input:{zh:'按住左键蓄力 → Shift闪避取消 → 左键三连',en:'Hold LMB charge → Shift dodge cancel → LMB 3-hit'},damage:{zh:'约320伤害',en:'~320 dmg'},desc:{zh:'利用蓝取消（蓄力闪避取消）骗对手振刀，然后接普攻三连。季沧海的核心博弈技巧。',en:'Blue cancel to bait enemy parry, then 3-hit normal chain. Core mind-game technique for Tarka Ji.'},videoLink:null},
  { id:'combo-3',heroId:'tarka_ji',name:{zh:'燎原劲起手 → 迅烈如火收割',en:'Blazing Force Opener → Raging Inferno Finish'},difficulty:4,input:{zh:'技能燎原劲格挡反击 → 飞索追空 → 空中左键×2 → 落地迅烈如火 → 蓄力左键',en:'Skill Blazing Force counter → Grapple chase → Aerial LMB×2 → Land Raging Inferno → Charged LMB'},damage:{zh:'约650+伤害',en:'~650+ dmg'},desc:{zh:'季沧海高端连招：燎原劲格挡反击起手浮空，飞索追击空中连击，落地开迅烈如火加攻速移速收割。',en:'Tarka Ji advanced combo: Blazing Force counter launches, grapple chase for aerial hits, land into Raging Inferno for amplified speed+damage finish.'},videoLink:'https://www.bilibili.com/video/BV1XL411J7qn'},
  { id:'combo-4',heroId:'tarka_ji',name:{zh:'颠勺无限连',en:'Flip Infinite Combo'},difficulty:5,input:{zh:'左键 → 闪避取消 → 左键 → 闪避取消 → 循环... 接燎原劲收尾',en:'LMB → Dodge Cancel → LMB → Dodge Cancel → Loop... Finish with Blazing Force'},damage:{zh:'约400-800伤害',en:'~400-800 dmg'},desc:{zh:'季沧海标志性的"颠勺"无限连。通过闪避取消循环普攻压制敌人无法落地，直到体力耗尽或用燎原劲收尾。需要极高的节奏感。',en:'Tarka Ji\'s signature "flip juggle" infinite. Dodge-cancel loops prevent enemies from landing, until stamina runs out or finished with Blazing Force. Requires exceptional rhythm.'},videoLink:'https://www.bilibili.com/video/BV1uq4y1r7jE'},

  // === 宁红夜 Ning Hongye ===
  { id:'combo-5',heroId:'ning_hongye',name:{zh:'昆仑诀起手式',en:'Kunlun Opener'},difficulty:1,input:{zh:'左键 → 左键 → 技能昆仑诀（击飞）',en:'LMB → LMB → Skill Kunlun Decree (Launch)'},damage:{zh:'约200伤害+击飞控制',en:'~200 dmg + launch'},desc:{zh:'简单实用的起手连招。普攻两下后接昆仑诀击飞敌人，创造后续输出空间。三排可换沉默分支封技能。',en:'Simple opener. Two hits into Kunlun Decree launch. In trios, use the silence branch to lock enemy skills for 8s.'},videoLink:null},
  { id:'combo-6',heroId:'ning_hongye',name:{zh:'昆仑诀→赤练无明→收割',en:'Kunlun → Crimson Blind → Execute'},difficulty:4,input:{zh:'技能昆仑诀眩晕 → 赤练无明吟唱 → 蓄力左键×2 → 闪避取消 → 左键三连',en:'Skill Kunlun stun → Crimson Blind chant → Charged LMB×2 → Dodge Cancel → LMB 3-hit'},damage:{zh:'约700+伤害',en:'~700+ dmg'},desc:{zh:'宁红夜爆发连招。昆仑诀起手确保赤练无明命中，眩晕期间穿插蓄力和普攻打出爆炸伤害。三排集火神技。',en:'Ning Hongye burst combo. Kunlun ensures Crimson Blind hits; weave charged+normal attacks during stun for explosive damage. Trios focus-fire god tool.'},videoLink:'https://www.bilibili.com/video/BV1zU4y1K7Ni'},
  { id:'combo-7',heroId:'ning_hongye',name:{zh:'全技能链：昆仑→赤练→飞索追击',en:'Full Chain: Kunlun → Crimson → Grapple Chase'},difficulty:5,input:{zh:'左键 → 闪避取消 → 昆仑诀 → 赤练无明 → 飞索追空 → 空中左键 →落地蓄力',en:'LMB → Dodge Cancel → Kunlun → Crimson Blind → Grapple chase → Aerial LMB → Land Charged'},damage:{zh:'约850+伤害（满血秒杀）',en:'~850+ dmg (one-shot)'},desc:{zh:'宁红夜最强连招。从地面控到空中再落地，赤练无明覆盖下所有攻击增伤，可实现满血秒杀。对飞索瞄准和技能衔接要求极高。',en:'Ning Hongye\'s strongest combo — ground-to-air-to-ground. All attacks during Crimson Blind gain bonus damage for potential one-shot. Requires expert grapple aim and skill chaining.'},videoLink:'https://www.bilibili.com/video/BV1zU4y1K7Ni/'},

  // === 迦南 Jia Nan ===
  { id:'combo-8',heroId:'jia_nan',name:{zh:'追魂背刺',en:'Soul Chase Backstab'},difficulty:2,input:{zh:'追魂瞬移绕后 → 左键三连（背击） → 闪避取消 → 左键',en:'Soul Chase flank → LMB 3-hit (backstab) → Dodge Cancel → LMB'},damage:{zh:'约350伤害（背击加成）',en:'~350 dmg (backstab bonus)'},desc:{zh:'利用追魂双向瞬移绕到敌人背后发动突袭。背击有额外伤害加成，配合闪避取消延长连击。单排偷袭利器。',en:'Use Soul Chase double dash to flank behind enemies. Backstabs deal bonus damage; extend with dodge cancel. Solo mode ambush specialist.'},videoLink:null},
  { id:'combo-9',heroId:'jia_nan',name:{zh:'寂静暗刑无限连',en:'Silent Execution Infinite'},difficulty:4,input:{zh:'寂静暗刑隐身 → 左键 → 闪避取消 → 左键 → 循环 → 追魂脱离',en:'Silent Execution stealth → LMB → Dodge Cancel → LMB → Loop → Soul Chase escape'},damage:{zh:'约500-900伤害',en:'~500-900 dmg'},desc:{zh:'寂静暗刑状态下迦南攻速移速大幅提升，实现极快闪避取消循环连击。打完一套追魂安全脱离。单排顶级连招。',en:'Silent Execution massively boosts attack/move speed for ultra-fast dodge-cancel loops. Soul Chase out safely. Solo mode top-tier combo.'},videoLink:'https://www.bilibili.com/video/BV1YL411x7px'},

  // === 特木尔 Temur ===
  { id:'combo-10',heroId:'temur',name:{zh:'风之精灵连段',en:'Wind Spirit Chain'},difficulty:2,input:{zh:'左键 → 左键 → 风之精灵吹飞 → 飞索追击 → 左键',en:'LMB → LMB → Wind Spirit knockback → Grapple chase → LMB'},damage:{zh:'约280伤害+位移',en:'~280 dmg + reposition'},desc:{zh:'利用风之精灵的吹飞+位移效果造成伤害的同时调整位置，飞索追击接普攻收尾。',en:'Wind Spirit knocks back while repositioning — grapple chase for the finish.'},videoLink:null},
  { id:'combo-11',heroId:'temur',name:{zh:'风之牢笼集火连',en:'Wind Prison Focus Combo'},difficulty:3,input:{zh:'风之牢笼困敌 → 蓄力左键 → 飞索追击 → 空中左键',en:'Wind Prison trap → Charged LMB → Grapple chase → Aerial LMB'},damage:{zh:'约450伤害',en:'~450 dmg'},desc:{zh:'风之牢笼困住敌人并清空精力，接蓄力和飞索追击打出范围伤害。敌人密集时效果最佳。',en:'Wind Prison traps and drains stamina, then charged attack + grapple chase for AoE damage. Best when enemies are grouped.'},videoLink:null},

  // === 妖刀姬 Yoto Hime ===
  { id:'combo-12',heroId:'yoto_hime',name:{zh:'妖刀瞬杀',en:'Demon Blade Instant Kill'},difficulty:2,input:{zh:'妖刀斩投掷 → 闪烁挑飞 → 空中左键 → 落地左键三连',en:'Demon Blade throw → Teleport launch → Aerial LMB → Land LMB 3-hit'},damage:{zh:'约380伤害',en:'~380 dmg'},desc:{zh:'妖刀姬标准起手。投掷妖刀瞬间闪烁到敌人身边挑飞，空中追击落地连击。配合钩锁可快速贴脸。',en:'Yoto Hime standard opener. Throw Demon Blade to teleport and launch, aerial chase into ground chain. Pair with grapple for instant gap-close.'},videoLink:null},
  { id:'combo-13',heroId:'yoto_hime',name:{zh:'不祥之刃六连斩',en:'Ominous Blade 6-Slash'},difficulty:4,input:{zh:'左键 → 闪避取消 → 妖刀斩挑飞 → 不祥之刃六连斩 → 飞索追击',en:'LMB → Dodge Cancel → Demon Blade launch → Ominous Blade 6-slash → Grapple chase'},damage:{zh:'约650+伤害（含回血）',en:'~650+ dmg (with heal)'},desc:{zh:'妖刀姬爆发连招。妖刀斩起手挑飞后接不祥之刃六连斩，每段斩击回复生命值。高伤害+自愈=单挑无敌。',en:'Yoto Hime burst combo. Demon Blade launches into Ominous Blade 6-slash — each slash heals. High damage + self-heal = duel dominant.'},videoLink:'https://www.bilibili.com/video/BV1VS421d7L4'},

  // === 崔三娘 Cui San Niang ===
  { id:'combo-14',heroId:'cui_sanniang',name:{zh:'水矛束缚连',en:'Water Spear Bind Chain'},difficulty:2,input:{zh:'水矛束缚 → 左键三连 → 闪避取消 → 蓄力左键',en:'Water Spear bind → LMB 3-hit → Dodge Cancel → Charged LMB'},damage:{zh:'约300伤害+束缚控制',en:'~300 dmg + bind'},desc:{zh:'水矛命中束缚敌人并降低攻击力，接普攻三连和蓄力收尾。控制稳定、伤害可观。',en:'Water Spear binds and weakens enemy ATK, follow with 3-hit chain and charged finisher. Reliable control + solid damage.'},videoLink:null},
  { id:'combo-15',heroId:'cui_sanniang',name:{zh:'深渊梦魇水牢绞杀',en:'Abyssal Nightmare Water Prison'},difficulty:4,input:{zh:'深渊梦魇水牢困敌 → 蓄力左键×2 → 闪避 → 水矛 → 飞索追击空中左键',en:'Abyssal Nightmare prison → Charged LMB×2 → Dodge → Spear → Grapple chase Aerial LMB'},damage:{zh:'约550+伤害',en:'~550+ dmg'},desc:{zh:'2026版本T0控场连招。水牢大范围困敌，期间可移动释放蓄力攻击和水矛，最后飞索收割。水龙卷范围扩大30%。',en:'2026 T0 control combo. Water prison traps enemies in massive AoE; freely move while charging attacks and throwing spears. Tornado AoE +30%.'},videoLink:'https://www.bilibili.com/video/BV1su411z7HL'},

  // === 天海 Tianhai ===
  { id:'combo-16',heroId:'tianhai',name:{zh:'金钟罩站桩输出',en:'Golden Bell Turret'},difficulty:2,input:{zh:'金钟罩格挡 → 左键三连 → 蓄力左键',en:'Golden Bell block → LMB 3-hit → Charged LMB'},damage:{zh:'约300伤害（高减伤）',en:'~300 dmg (high DR)'},desc:{zh:'金钟罩格挡反弹远程并附带振刀，获得减伤后站桩输出。天海的高血量让他在对攻中占据优势。',en:'Golden Bell blocks ranged attacks with built-in parry. Trade blows with damage reduction — Tianhai\'s high HP wins exchanges.'},videoLink:null},
  { id:'combo-17',heroId:'tianhai',name:{zh:'金刚伏魔双抓',en:'Vajra Double Grab'},difficulty:3,input:{zh:'金刚伏魔变身 → 抓取敌人A摔砸 → 抓取敌人B摔砸 → 左键横扫 → 金钟罩退回',en:'Vajra transform → Grab enemy A slam → Grab enemy B slam → LMB sweep → Golden Bell retreat'},damage:{zh:'约600+伤害（金刚形态）',en:'~600+ dmg (Vajra form)'},desc:{zh:'变身大佛后优先抓取敌方输出位摔砸（最多抓两个），横扫清场，金钟罩安全退回。残血开大逆转战局。',en:'Transform into giant Vajra, prioritize grabbing enemy DPS (max 2), sweep to clear, Golden Bell retreat. Can turn lost fights when low HP.'},videoLink:null},

  // === 胡桃 Kurumi ===
  { id:'combo-18',heroId:'kurumi',name:{zh:'庇护自保连段',en:'Blessing Self-Defense Chain'},difficulty:1,input:{zh:'左键 → 左键 → 庇护（连接队友回血） → 左键',en:'LMB → LMB → Blessing (tether heal) → LMB'},damage:{zh:'约200伤害+团队回复',en:'~200 dmg + team heal'},desc:{zh:'简单实用的自保连招，输出同时用庇护连接队友回血并提供护盾。混战中维持团队血量的基础操作。',en:'Simple self-defense chain. Deal damage while tethering teammates for heal + shield. Basic sustain in chaotic fights.'},videoLink:null},

  // === 岳山 Yue Shan ===
  { id:'combo-19',heroId:'yue_shan',name:{zh:'陷阵冲锋→神将变身',en:'Charge → God General Transform'},difficulty:3,input:{zh:'陷阵冲锋突进击飞 → 左键三连 → 千军辟易·神将变身 →大范围劈砍',en:'Charge dash launch → LMB 3-hit → God General transform → Wide cleave'},damage:{zh:'约550+伤害',en:'~550+ dmg'},desc:{zh:'2026黑马岳山。陷阵冲锋突进击飞起手，接普攻后变身神将获得霸体+减伤，大范围劈砍清场。变身冷却仅60秒。',en:'2026 dark horse. Charge launches enemies, chain normals, transform into God General with hyper armor+DR, massive cleave. Transform CD only 60s.'},videoLink:'https://www.bilibili.com/video/BV13m421g7DA'},

  // === 哈迪 Hadi ===
  { id:'combo-20',heroId:'hadi',name:{zh:'弹射升空→飞天连击',en:'Catapult Launch → Flight Combo'},difficulty:4,input:{zh:'弹射升空进入滑翔 → 飞天模式 → 空中左键×3 → 空中振刀 → 千机匣撤退',en:'Catapult launch & glide → Flight mode → Aerial LMB×3 → Aerial parry → Supply Box retreat'},damage:{zh:'约480伤害',en:'~480 dmg'},desc:{zh:'哈迪三维空战连招。弹射升空滑翔进入飞天模式，空中普攻+振刀压制，千机匣为队友提供远程牵引。永劫首个完整空战英雄。',en:'Hadi 3D aerial combo. Catapult into glide, enter flight mode for aerial attacks+parry pressure. Supply boxes give team grapple points. First full air-combat hero.'},videoLink:'https://www.bilibili.com/video/BV1RCvmerEXy'},
];

// --- Weapon Combos (Basic) ---
const weaponCombosData = [
  // ===== KATANA / 太刀 =====
  {
    id: 'wcombo-1',
    weaponId: 'katana',
    name: { zh: '太刀基础三连', en: 'Katana Basic 3-Hit' },
    difficulty: 1,
    input: { zh: '左键 → 左键 → 左键', en: 'LMB → LMB → LMB' },
    damage: { zh: '约 160 伤害', en: '~160 damage' },
    desc: { zh: '太刀最基础的三连击，第三下速度极快，硬直小，适合新手熟悉太刀的攻击节奏。', en: 'The most basic Katana 3-hit chain. The third hit is extremely fast with minimal recovery, perfect for learning Katana timing.' },
    videoLink: null
  },
  {
    id: 'wcombo-2',
    weaponId: 'katana',
    name: { zh: '太刀蓄力升龙', en: 'Katana Charged Launcher' },
    difficulty: 2,
    input: { zh: '按住左键蓄力I段 → 命中 → 空中左键追击', en: 'Hold LMB Charge I → Hit → Aerial LMB chase' },
    damage: { zh: '约 280 伤害', en: '~280 damage' },
    desc: { zh: '太刀一段蓄力可将敌人挑飞，立即接空中左键进行追击。这是太刀最常用的起手连招。', en: 'Katana Charge I launches enemies upward. Immediately follow with aerial LMB for pursuit. This is the most common Katana opener.' },
    videoLink: null
  },
  {
    id: 'wcombo-3',
    weaponId: 'katana',
    name: { zh: '太刀闪避取消循环', en: 'Katana Dodge Cancel Loop' },
    difficulty: 3,
    input: { zh: '左键 → 闪避取消 → 左键 → 闪避取消 → 蓄力左键收尾', en: 'LMB → Dodge Cancel → LMB → Dodge Cancel → Charged LMB finish' },
    damage: { zh: '约 380 伤害', en: '~380 damage' },
    desc: { zh: '利用闪避取消快速循环普攻，最后用蓄力攻击收尾。太刀攻速快，闪避取消的收益很高。', en: 'Rapidly cycle normal attacks via dodge canceling, finishing with a charged attack. Katana\'s fast attack speed makes dodge canceling highly effective.' },
    videoLink: null
  },
  {
    id: 'wcombo-4',
    weaponId: 'katana',
    name: { zh: '太刀浮空追击连', en: 'Katana Aerial Pursuit Chain' },
    difficulty: 4,
    input: { zh: '蓄力升龙 → 飞索追空 → 空中左键×2 → 落地蓄力左键', en: 'Charged Launch → Grapple chase → Aerial LMB×2 → Land Charged LMB' },
    damage: { zh: '约 450 伤害', en: '~450 damage' },
    desc: { zh: '升龙浮空后用飞索追击到空中进行二段连击，落地蓄力收尾。对飞索瞄准要求较高。', en: 'After launching, grapple-chase into the air for a 2-hit aerial combo, landing with a charged finisher. Requires precise grapple aim.' },
    videoLink: 'https://www.bilibili.com/video/BV12P4y1w7rv'
  },

  // ===== GREATSWORD / 阔刀 =====
  {
    id: 'wcombo-5',
    weaponId: 'greatsword',
    name: { zh: '阔刀重击二连', en: 'Greatsword Heavy 2-Hit' },
    difficulty: 1,
    input: { zh: '左键 → 蓄力左键', en: 'LMB → Charged LMB' },
    damage: { zh: '约 320 伤害', en: '~320 damage' },
    desc: { zh: '阔刀伤害最高的简单连段。普攻后接蓄力攻击，利用阔刀的霸体不会被普攻打断的特性。', en: 'The highest damage simple string for Greatsword. Normal into charged attack, leveraging hyper armor to prevent interruption.' },
    videoLink: null
  },
  {
    id: 'wcombo-6',
    weaponId: 'greatsword',
    name: { zh: '阔刀横扫压制', en: 'Greatsword Sweep Pressure' },
    difficulty: 2,
    input: { zh: '蓄力左键横扫 → 闪避取消 → 蓄力左键横扫', en: 'Charged LMB Sweep → Dodge Cancel → Charged LMB Sweep' },
    damage: { zh: '约 400 伤害', en: '~400 damage' },
    desc: { zh: '连续两次蓄力横扫，中间用闪避取消后摇。大范围攻击可以有效压制多个敌人。', en: 'Two consecutive charged sweeps with dodge cancel in between. The wide attack range effectively pressures multiple enemies.' },
    videoLink: null
  },
  {
    id: 'wcombo-7',
    weaponId: 'greatsword',
    name: { zh: '阔刀三蓄绝杀', en: 'Greatsword Triple Charge Finisher' },
    difficulty: 3,
    input: { zh: '蓄力II段横扫 → 蓝取消骗振刀 → 蓄力III段下劈', en: 'Charge II Sweep → Blue Cancel bait → Charge III Slam' },
    damage: { zh: '约 550 伤害', en: '~550 damage' },
    desc: { zh: '用二段蓄力横扫逼迫对手振刀，蓝取消后立刻接三段蓄力下劈。三段蓄力的阔刀伤害极高。', en: 'Use Charge II sweep to bait the parry, blue cancel, then Charge III slam. A triple-charged Greatsword deals devastating damage.' },
    videoLink: null
  },
  {
    id: 'wcombo-8',
    weaponId: 'greatsword',
    name: { zh: '阔刀旋风斩连段', en: 'Greatsword Whirlwind Chain' },
    difficulty: 4,
    input: { zh: '飞索接近 → 空中左键 → 落地蓄力左键 → 闪避取消 → 蓄力左键', en: 'Grapple approach → Aerial LMB → Land Charged LMB → Dodge Cancel → Charged LMB' },
    damage: { zh: '约 600 伤害', en: '~600 damage' },
    desc: { zh: '飞索切入战场，空中攻击落地后连续蓄力压制。阔刀的空中攻击范围大，适合混战切入。', en: 'Grapple into battle, aerial attack into landing, then continuous charged pressure. Greatsword aerial attacks have wide range, ideal for diving into chaos.' },
    videoLink: 'https://www.bilibili.com/video/BV148411X7d4'
  },

  // ===== LONGSWORD / 长剑 =====
  {
    id: 'wcombo-9',
    weaponId: 'longsword',
    name: { zh: '长剑突刺三连', en: 'Longsword Thrust 3-Hit' },
    difficulty: 1,
    input: { zh: '左键突刺 → 左键横斩 → 左键上挑', en: 'LMB Thrust → LMB Slash → LMB Upward' },
    damage: { zh: '约 170 伤害', en: '~170 damage' },
    desc: { zh: '长剑的基础三连击，攻击距离远，第三下有小幅度击退效果。适合中距离牵制。', en: 'Longsword\'s basic 3-hit chain with long reach. The third hit has slight knockback. Great for mid-range poking.' },
    videoLink: null
  },
  {
    id: 'wcombo-10',
    weaponId: 'longsword',
    name: { zh: '长剑剑气连段', en: 'Longsword Sword Wave Combo' },
    difficulty: 3,
    input: { zh: '蓄力左键剑气 → 闪避接近 → 左键三连 → 蓄力左键', en: 'Charged LMB Wave → Dodge approach → LMB 3-hit → Charged LMB' },
    damage: { zh: '约 350 伤害', en: '~350 damage' },
    desc: { zh: '长剑蓄力可以发出远程剑气攻击，命中后闪避接近接普攻连段。剑气的远距离消耗能力是长剑的核心优势。', en: 'Longsword charged attacks fire ranged sword waves. After hitting, dodge in for a normal chain. The wave\'s ranged poke is Longsword\'s core advantage.' },
    videoLink: null
  },
  {
    id: 'wcombo-11',
    weaponId: 'longsword',
    name: { zh: '长剑无限剑气压制', en: 'Longsword Infinite Wave Pressure' },
    difficulty: 4,
    input: { zh: '蓄力剑气 → 飞索后撤 → 蓄力剑气 → 闪避Cancel → 蓄力剑气 → 飞索追击 → 落地左键', en: 'Charged Wave → Grapple retreat → Charged Wave → Dodge Cancel → Charged Wave → Grapple chase → Land LMB' },
    damage: { zh: '约 500 伤害', en: '~500 damage' },
    desc: { zh: '高端长剑连段：利用飞索控制距离，连续发射剑气消耗，最后飞索切入近战收割。需要优秀的距离把控。', en: 'High-level Longsword chain: use grapple for spacing, fire continuous waves to chip, then grapple in for melee execution. Requires excellent distance control.' },
    videoLink: 'https://www.bilibili.com/video/BV143411k7tm'
  },

  // ===== SPEAR / 长枪 =====
  {
    id: 'wcombo-12',
    weaponId: 'spear',
    name: { zh: '长枪突刺连击', en: 'Spear Thrust Chain' },
    difficulty: 1,
    input: { zh: '左键突刺 → 左键横扫 → 左键上挑', en: 'LMB Thrust → LMB Sweep → LMB Upward' },
    damage: { zh: '约 175 伤害', en: '~175 damage' },
    desc: { zh: '长枪的基础连击，攻击范围极大，是所有武器中普攻距离最远的。适合保持距离打消耗。', en: 'Spear\'s basic chain with the longest normal attack reach among all weapons. Ideal for keeping distance and chipping.' },
    videoLink: null
  },
  {
    id: 'wcombo-13',
    weaponId: 'spear',
    name: { zh: '长枪龙抬头', en: 'Spear Dragon Rise' },
    difficulty: 3,
    input: { zh: '蓄力左键 → 命中浮空 → 飞索追击 → 空中左键 → 落地蓄力', en: 'Charged LMB → Hit launch → Grapple chase → Aerial LMB → Land Charged' },
    damage: { zh: '约 380 伤害', en: '~380 damage' },
    desc: { zh: '长枪蓄力可以将敌人高高挑飞，配合飞索追加空中连击。浮空高度是全武器中最高的之一。', en: 'Spear\'s charged attack launches enemies very high — among the highest launches. Follow with grapple for aerial extensions.' },
    videoLink: null
  },
  {
    id: 'wcombo-14',
    weaponId: 'spear',
    difficulty: 4,
    input: { zh: '蓄力横扫 → 蓝取消 → 反向闪避 → 蓄力突刺 → 飞索追击 → 空中左键×2', en: 'Charged Sweep → Blue Cancel → Back dodge → Charged Thrust → Grapple chase → Aerial LMB×2' },
    damage: { zh: '约 520 伤害', en: '~520 damage' },
    desc: { zh: '利用长枪的超大攻击范围进行横扫压制，蓝取消骗对手后再用突刺追击。长枪的横扫可以覆盖极大的扇形区域。', en: 'Use Spear\'s massive sweep range to pressure, blue cancel to feint, then thrust for pursuit. Spear sweeps cover an enormous arc.' },
    videoLink: 'https://www.bilibili.com/video/BV1D64y1h7K2'
  },

  // ===== DAGGER / 匕首 =====
  {
    id: 'wcombo-15',
    weaponId: 'dagger',
    name: { zh: '匕首疾风连刺', en: 'Dagger Rapid Stabs' },
    difficulty: 1,
    input: { zh: '左键 → 左键 → 左键 → 左键', en: 'LMB → LMB → LMB → LMB' },
    damage: { zh: '约 140 伤害', en: '~140 damage' },
    desc: { zh: '匕首攻速极快，可以四连击。虽然单次伤害低，但出手速度快，适合打断对手蓄力和压制。', en: 'Dagger has the fastest attack speed, allowing a 4-hit chain. Low per-hit damage but extremely fast startup — great for interrupting charges and pressuring.' },
    videoLink: null
  },
  {
    id: 'wcombo-16',
    weaponId: 'dagger',
    name: { zh: '匕首背刺突袭', en: 'Dagger Backstab Rush' },
    difficulty: 3,
    input: { zh: '闪避绕后 → 左键四连（背击） → 技能取消后摇 → 左键', en: 'Dodge flank → LMB 4-hit (backstab) → Skill cancel → LMB' },
    damage: { zh: '约 320 伤害（含背击加成）', en: '~320 damage (with backstab bonus)' },
    desc: { zh: '利用匕首的灵活性和闪避速度绕到对手身后，打满四连背击。背击有额外伤害加成。', en: 'Use Dagger\'s mobility and dodge speed to flank behind enemies for a full 4-hit backstab chain. Backstabs deal bonus damage.' },
    videoLink: null
  },
  {
    id: 'wcombo-17',
    weaponId: 'dagger',
    name: { zh: '匕首无限压制', en: 'Dagger Infinite Pressure' },
    difficulty: 5,
    input: { zh: '左键 → 闪避取消 → 左键 → 闪避取消 →（无限循环）→ 蓄力左键收尾', en: 'LMB → Dodge Cancel → LMB → Dodge Cancel → (infinite loop) → Charged LMB finish' },
    damage: { zh: '约 400-700 伤害', en: '~400-700 damage' },
    desc: { zh: '匕首的终极技巧。由于匕首攻速极快，闪避取消的间隔极短，可以对被压制的敌人形成无限循环连击。对手几乎无法还手。', en: 'Dagger\'s ultimate technique. Due to extreme attack speed, dodge cancel windows are tiny, enabling near-infinite loops against pressured enemies. Opponents can barely retaliate.' },
    videoLink: 'https://www.bilibili.com/video/BV1YL411x7px'
  },

  // ===== NUNCHAKU / 双节棍 =====
  {
    id: 'wcombo-18',
    weaponId: 'nunchaku',
    name: { zh: '双节棍龙卷连打', en: 'Nunchaku Tornado Flurry' },
    difficulty: 2,
    input: { zh: '左键 → 左键 → 蓄力左键旋转攻击', en: 'LMB → LMB → Charged LMB Spin' },
    damage: { zh: '约 240 伤害', en: '~240 damage' },
    desc: { zh: '双节棍的特色连段，第三下蓄力攻击会进行多段旋转打击，每段都有伤害判定。', en: 'Nunchaku\'s signature chain — the third charged attack performs multiple spinning hits, each with its own damage instance.' },
    videoLink: null
  },
  {
    id: 'wcombo-19',
    weaponId: 'nunchaku',
    name: { zh: '双节棍盘龙棍法', en: 'Nunchaku Coiling Dragon' },
    difficulty: 4,
    input: { zh: '蓄力左键旋转 → 闪避取消 → 反向蓄力 → 飞索追击 → 空中旋转攻击', en: 'Charged LMB Spin → Dodge Cancel → Reverse Charge → Grapple chase → Aerial Spin' },
    damage: { zh: '约 480 伤害', en: '~480 damage' },
    desc: { zh: '双节棍的高阶连段，利用多次旋转攻击的持续判定和闪避取消的灵活性打出华丽的浮空追击。', en: 'High-level Nunchaku chain using multiple spin attack hit checks and dodge cancel flexibility for a stylish aerial pursuit.' },
    videoLink: 'https://www.bilibili.com/video/BV1844y147Gf'
  },
];

// --- Advanced Combos (Cross-weapon / High-level Techniques) ---
const advancedCombosData = [
  {
    id: 'acombo-1',
    name: { zh: '武器切换连段（太刀→阔刀）', en: 'Weapon Swap Chain (Katana→Greatsword)' },
    difficulty: 4,
    input: { zh: '太刀浮空连段 → 空中切换阔刀 → 阔刀空中重击 → 落地蓄力', en: 'Katana aerial chain → Mid-air swap to Greatsword → GS aerial heavy → Land charged' },
    damage: { zh: '约 550 伤害', en: '~550 damage' },
    desc: { zh: '利用太刀的浮空起手将敌人挑飞，空中瞬间切换到阔刀进行高伤害空中重击。切换武器的时机需要在浮空最高点。', en: 'Launch with Katana, swap to Greatsword mid-air for a high-damage aerial heavy. The swap window is at the peak of the launch.' },
    videoLink: 'https://www.bilibili.com/video/BV1VS421d7L4',
    weapons: ['katana', 'greatsword']
  },
  {
    id: 'acombo-2',
    name: { zh: '远程→近战切换压制', en: 'Ranged→Melee Switch Pressure' },
    difficulty: 3,
    input: { zh: '弓箭蓄力射击 → 闪避切换近战 → 飞索接近 → 近战连段', en: 'Bow charged shot → Dodge swap to melee → Grapple approach → Melee chain' },
    damage: { zh: '约 400 伤害', en: '~400 damage' },
    desc: { zh: '远距离弓箭消耗后立即切换近战武器飞索接近。对手刚被弓箭命中还处于硬直状态时你已经近身。', en: 'Fire a charged bow shot then immediately swap to melee and grapple in. The enemy is still in hitstun from the arrow when you close the distance.' },
    videoLink: null,
    weapons: ['bow', 'katana']
  },
  {
    id: 'acombo-3',
    name: { zh: '蓝取消→振刀反击连段', en: 'Blue Cancel → Parry Counter Combo' },
    difficulty: 4,
    input: { zh: '蓄力（骗振刀）→ 蓝取消 → 对手振刀落空 → 普攻三连 → 蓄力收尾', en: 'Charge (bait parry) → Blue Cancel → Enemy parry whiffs → LMB 3-hit → Charged finish' },
    damage: { zh: '约 380 伤害', en: '~380 damage' },
    desc: { zh: '高阶心理博弈连段。故意蓄力诱导对手振刀，蓝取消后对手振刀进入硬直，抓住这个空隙打出完整连段。', en: 'High-level mind game combo. Deliberately charge to bait the parry, blue cancel, then punish the parry recovery with a full chain.' },
    videoLink: null,
    weapons: ['any']
  },
  {
    id: 'acombo-4',
    name: { zh: '飞索空中二段变向连', en: 'Grapple Aerial Double Redirect' },
    difficulty: 5,
    input: { zh: '飞索左飞 → 空中取消 → 飞索右飞 → 空中左键 → 飞索上飞 → 空中蓄力下劈', en: 'Grapple left → Aerial cancel → Grapple right → Aerial LMB → Grapple up → Aerial Charged Slam' },
    damage: { zh: '约 450 伤害', en: '~450 damage' },
    desc: { zh: '终极飞索身法连段。在空中进行多次飞索方向变换来迷惑对手，最后蓄力下劈收割。需要极致的飞索操控和空间感。', en: 'Ultimate grapple movement combo. Multiple mid-air grapple direction changes to confuse the opponent, finishing with a charged slam. Requires peak grapple control and spatial awareness.' },
    videoLink: 'https://www.bilibili.com/video/BV1su411z7HL',
    weapons: ['any']
  },
  {
    id: 'acombo-5',
    name: { zh: '魂玉强化连段（夺魂+噬魂）', en: 'Souljade Enhanced Combo (Soul Reap + Soul Devour)' },
    difficulty: 4,
    input: { zh: '普攻触发夺魂 → 蓄力触发噬魂 → 闪避取消 → 蓄力→ 技能收尾', en: 'LMB trigger Soul Reap → Charged trigger Soul Devour → Dodge Cancel → Charged → Skill finish' },
    damage: { zh: '约 500+ 伤害（含魂玉加成）', en: '~500+ damage (with Souljade bonuses)' },
    desc: { zh: '利用夺魂和噬魂两个武器魂玉的叠加效果打出爆炸伤害。夺魂提升普攻伤害，噬魂提升蓄力伤害，两者叠加效果翻倍。', en: 'Stack Soul Reap and Soul Devour Souljade effects for explosive damage. Soul Reap boosts normal attack damage, Soul Devour boosts charged — together they multiply.' },
    videoLink: 'https://www.bilibili.com/video/BV13m421g7DA',
    weapons: ['katana']
  },
  {
    id: 'acombo-6',
    name: { zh: '无伤闪避反击连段', en: 'Perfect Dodge Counter Combo' },
    difficulty: 5,
    input: { zh: '预判对手攻击 → 完美闪避（触发无敌帧）→ 转身普攻三连 → 蓄力追击', en: 'Predict enemy attack → Perfect dodge (i-frame) → Turn LMB 3-hit → Charged pursuit' },
    damage: { zh: '约 350 伤害', en: '~350 damage' },
    desc: { zh: '利用闪避的无敌帧完美躲避对手攻击后立即反击。需要精确预判对手的攻击时机和方向，是最高水平的防御反击技术。', en: 'Perfectly evade an attack using dodge i-frames and immediately counter. Requires precise prediction of enemy attack timing and direction — the highest level of defensive counterplay.' },
    videoLink: 'https://www.bilibili.com/video/BV1Ve4y1v7Fv/',
    weapons: ['any']
  },
  {
    id: 'acombo-7',
    name: { zh: '双武器连续浮空连', en: 'Dual Weapon Infinite Juggle' },
    difficulty: 5,
    input: { zh: '长枪挑飞 → 空中切换太刀连斩 → 落地前切换阔刀 → 落地蓄力下劈', en: 'Spear launch → Mid-air swap Katana slash → Swap Greatsword before landing → Land Charged Slam' },
    damage: { zh: '约 650 伤害', en: '~650 damage' },
    desc: { zh: '全游戏最难的连段之一。利用三种武器的特性在浮空过程中切换两次，最大化空中伤害。需要极快的手指操作和完美的切换时机。', en: 'One of the hardest combos in the game. Exploits three weapon properties with two mid-air swaps to maximize air damage. Requires lightning-fast fingers and perfect swap timing.' },
    videoLink: 'https://www.bilibili.com/video/BV1RCvmerEXy',
    weapons: ['spear', 'katana', 'greatsword']
  },
  {
    id: 'acombo-8',
    name: { zh: '墙角无限连', en: 'Wall Splat Infinite' },
    difficulty: 3,
    input: { zh: '普攻击退至墙边 → 左键 → 左键 →（墙角硬直循环）→ 蓄力收尾', en: 'LMB push to wall → LMB → LMB → (wall splat loop) → Charged finish' },
    damage: { zh: '约 400-600 伤害', en: '~400-600 damage' },
    desc: { zh: '利用地形将敌人逼到墙边后，墙角会影响敌人的受击后退距离，使你可以多打出1-2次额外攻击。是实战中非常实用的地形利用技巧。', en: 'Push enemies against a wall to reduce their knockback distance, allowing 1-2 extra hits. A very practical terrain exploitation technique in real matches.' },
    videoLink: null,
    weapons: ['any']
  },
];

// --- Feature Cards Detail Data ---
const featuresData = {
  grapple: {
    icon: '🪝',
    name: { zh: '飞索系统', en: 'Grappling Hook System' },
    sections: [
      { title: { zh: '什么是飞索', en: 'What is the Grappling Hook' },
        content: { zh: '飞索是永劫无间最核心的移动机制。玩家可以瞄准任意表面（墙壁、地面、建筑、树木）按Q键发射飞索，瞬间高速飞向目标点。飞索不仅用于移动，更是战斗中的关键工具——追击、逃跑、空中连击都离不开它。', en: 'The grappling hook is NARAKA\'s core mobility mechanic. Aim at any surface and press Q to launch toward it at high speed. Beyond movement, it\'s essential in combat — for pursuit, escape, and aerial combos.' } },
      { title: { zh: '进阶技巧', en: 'Advanced Techniques' },
        content: { zh: '• 空中取消：飞行中再按Q取消，配合空格二段跳实现变向\n• 连续飞索：空中飞索不消耗体力，可无限连飞\n• 飞索攻击：空中左键有额外伤害加成\n• 墙壁攀爬：飞索命中墙壁后按住方向键可沿墙跑动\n• 追击技巧：敌人逃跑时预判其移动方向发射飞索拦截', en: '• Mid-air cancel: Press Q again to cancel, Space for double-jump redirect\n• Chain grappling: No stamina cost in air, chain infinitely\n• Grapple attack: Aerial LMB deals bonus damage\n• Wall running: Hold direction after hitting wall to wall-run\n• Chase: Predict enemy movement to intercept with grapple' } }
    ],
    relatedTutorials: ['basic-1', 'basic-4'],
    linkTo: 'basic'
  },
  combat: {
    icon: '⚔️',
    name: { zh: '冷兵器格斗', en: 'Melee Combat System' },
    sections: [
      { title: { zh: '剪刀石头布克制', en: 'Rock-Paper-Scissors Counter' },
        content: { zh: '永劫无间的核心战斗围绕三要素展开：\n✊ 普通攻击 → 克制振刀（振刀时会被普攻打断）\n✋ 振刀(右键) → 克制蓄力攻击（可弹反蓄力将其击倒）\n⚡ 蓄力攻击(长按左键) → 克制普通攻击（霸体不会被普攻打断）\n\n掌握这个三角关系是成为高手的第一步。不要总是无脑蓄力——高手会振刀反制。适当穿插普攻和振刀来打乱对手节奏。', en: 'NARAKA\'s combat revolves around three elements:\n✊ Normal Attack → beats Focus (interrupts parry attempt)\n✋ Focus (RMB) → beats Charged Attack (parries and knocks down)\n⚡ Charged Attack (hold LMB) → beats Normal Attack (hyper armor)\n\nMastering this triangle is step one. Don\'t always charge — skilled players will parry. Mix in normals and focus to disrupt their rhythm.' } },
      { title: { zh: '武器类型', en: 'Weapon Types' },
        content: { zh: '近战：太刀(均衡)、阔刀(高伤慢速)、长剑(远程剑气)、长枪(最长距离)、匕首(最快攻速)、双节棍(多段打击)、双刀(灵活)、棍(控制)\n\n远程：弓箭(蓄力狙击)、鸟铳(高伤单发)、火炮(范围爆炸)、连弩(持续射击)\n\n每把武器有独特的蓄力招式和魂玉搭配，建议新手从太刀入门。', en: 'Melee: Katana(balanced), Greatsword(high dmg slow), Longsword(ranged wave), Spear(longest reach), Dagger(fastest), Nunchaku(multi-hit), Dual Blades(agile), Staff(control)\n\nRanged: Bow(charged snipe), Musket(high dmg single), Cannon(AoE), Repeating Crossbow(sustained)\n\nEach weapon has unique charged moves and Souljade synergies. Beginners start with Katana.' } }
    ],
    relatedTutorials: ['basic-2', 'basic-3', 'adv-5'],
    linkTo: 'basic'
  },
  heroes: {
    icon: '🦸',
    name: { zh: '独特英雄系统', en: 'Unique Hero System' },
    sections: [
      { title: { zh: '英雄定位', en: 'Hero Roles' },
        content: { zh: '游戏目前有27位英雄，分为五大类：\n• 控制型：宁红夜、崔三娘、特木尔 — 团战先手控制\n• 刺客型：迦南、妖刀姬、顾清寒 — 高机动绕后收割\n• 坦克型：天海、岳山、魏轻 — 前排吸收伤害开团\n• 战士型：季沧海、武田信忠、万钧 — 正面输出压制\n• 辅助型：胡桃、殷紫萍、无尘、甘璇 — 治疗和保护\n• 特殊机制：哈迪(空战)、沈妙(机甲)、玉玲珑(精神控制)、李寻欢(飞刀)等', en: '27 heroes across five categories:\n• Control: Ning Hongye, Cui Sanniang, Temur — teamfight initiation\n• Assassin: Jia Nan, Yoto Hime, Gu Qinghan — high mobility flank\n• Tank: Tianhai, Yue Shan, Wei Qing — frontline damage soak\n• Warrior: Tarka Ji, Takeda, Wan Jun — frontline DPS pressure\n• Support: Kurumi, Yin Ziping, Wu Chen, Gan Xuan — heal & protect\n• Special: Hadi(air combat), Shen Miao(mech), Yu Linglong(mind control), Li Xunhuan(daggers)' } },
      { title: { zh: '英雄获取', en: 'Hero Acquisition' },
        content: { zh: '• 初始免费：部分英雄创建账号即可使用\n• 游戏币购买：通过游戏内获得的银两/古币解锁\n• 赛季通行证：新英雄通常伴随赛季推出\n• 联动英雄：李寻欢(古龙)、张起灵(盗墓笔记)等限时获取\n\n每个英雄有独立的F技能(3个分支)和V奥义(2-3个分支)，可根据单排/三排/打法灵活切换。', en: '• Free starters: Some heroes available from account creation\n• In-game currency: Unlock with earned silver/coins\n• Battle pass: New heroes launch with seasons\n• Crossover heroes: Li Xunhuan, Zhang Qiling — limited time\n\nEach hero has F skill (3 branches) and V ultimate (2-3 branches), swappable for solo/trios/playstyle.' } }
    ],
    relatedTutorials: ['adv-4'],
    linkTo: 'intro'
  },
  battle: {
    icon: '🏆',
    name: { zh: '60人大逃杀', en: '60-Player Battle Royale' },
    sections: [
      { title: { zh: '游戏模式', en: 'Game Modes' },
        content: { zh: '• 单排(Solo)：60人各自为战，最后存活者获胜\n• 双排(Duos)：30支二人队伍\n• 三排(Trios)：20支三人队伍 — 最主流的竞技模式\n\n地图：聚窟洲 — 包含多种地形(城市、森林、沙漠、雪山)\n\n特色机制：\n• 缩圈：安全区逐渐缩小，圈外持续掉血\n• 空投：随机掉落高级装备\n• 复活：队友可在魂冢处复活(限时)\n• 商店：地图上有秘密商店可购买道具', en: '• Solo: 60 players, last one standing\n• Duos: 30 teams of 2\n• Trios: 20 teams of 3 — main competitive mode\n\nMap: Morus Isle — diverse terrain (urban, forest, desert, snow)\n\nFeatures:\n• Closing circle: Safe zone shrinks, outside = damage\n• Airdrops: Random high-tier loot drops\n• Revival: Revive teammates at soul tombs (time-limited)\n• Shops: Hidden shops to buy items' } },
      { title: { zh: '新手生存指南', en: 'Beginner Survival Guide' },
        content: { zh: '1. 选择跳点：新手建议选中低资源区(远离热门城区)，逐步熟悉地图\n2. 优先级：武器 > 护甲 > 魂玉 > 回复道具\n3. 听声辨位：注意脚步声和飞索声，预判敌人位置\n4. 不要恋战：刚落地没装备时优先搜物资，等有基础装备再打架\n5. 善用飞索：逃跑时朝远处飞索快速脱离，不要直线跑\n6. 团队沟通：三排时保持语音沟通，集火同一个目标', en: '1. Drop point: Beginners pick mid-low tier zones away from hot drops\n2. Priority: Weapon > Armor > Souljades > Healing items\n3. Sound awareness: Listen for footsteps and grapple sounds\n4. Don\'t force fights: Loot first with no gear, fight after equipped\n5. Use grapple: Escape by grappling far away, don\'t run straight\n6. Team comms: Voice chat in trios, focus fire same target' } }
    ],
    relatedTutorials: ['basic-5', 'basic-6', 'adv-3'],
    linkTo: 'basic'
  }
};


// ============================================================
// 魂玉数据 — 天选之人 当前版本
// ============================================================

// 一、基础属性魂玉 (白/蓝/紫/金 四品质)
const statSouljades = [
  { id:"sj-stat-hp", name:{zh:"体力",en:"Vitality"},
    tiers:{white:"+100",blue:"+150",purple:"+200",gold:"+250"},
    desc:{zh:"提升生命值上限。",en:"Increases max HP."} },
  { id:"sj-stat-atk", name:{zh:"攻击",en:"Attack"},
    tiers:{white:"+5",blue:"+7",purple:"+9",gold:"+12"},
    desc:{zh:"增加基础伤害。",en:"Increases base damage."} },
  { id:"sj-stat-melee", name:{zh:"近抗",en:"Melee Resist"},
    tiers:{white:"6%",blue:"9%",purple:"12%",gold:"15%"},
    desc:{zh:"减免近战伤害。",en:"Reduces melee damage taken."} },
  { id:"sj-stat-ranged", name:{zh:"远抗",en:"Ranged Resist"},
    tiers:{white:"6%",blue:"9%",purple:"12%",gold:"15%"},
    desc:{zh:"减免远程伤害。",en:"Reduces ranged damage taken."} },
  { id:"sj-stat-head", name:{zh:"护头",en:"Head Guard"},
    tiers:{white:"-12%",blue:"-18%",purple:"-24%",gold:"-30%"},
    desc:{zh:"降低头部受伤伤害。",en:"Reduces headshot damage."} },
  { id:"sj-stat-stamina", name:{zh:"精力",en:"Stamina"},
    tiers:{white:"+0.5/s",blue:"+0.7/s",purple:"+0.9/s",gold:"+1.2/s"},
    desc:{zh:"提升精力回复速度。",en:"Increases stamina regen."} },
  { id:"sj-stat-rage", name:{zh:"怒气",en:"Rage"},
    tiers:{white:"+0.5/s",blue:"+0.7/s",purple:"+0.9/s",gold:"+1.2/s"},
    desc:{zh:"提升怒气回复速度。",en:"Increases rage regen."} },
];


// 二、通用金色魂玉 (功能型)
const generalSouljades = [
  { id:'sj-gen-xuming', name:{zh:'续命术',en:'Life Extension'}, effect:{zh:'受致命伤免疫，5秒+40%减伤，回500体力(1次)',en:'Immune to fatal dmg, 5s 40% DR, restore 500 HP (1 use)'} },
  { id:'sj-gen-bigong', name:{zh:'毕工淌',en:'Work Flow'}, effect:{zh:'用武备匣=闪避当前招式',en:'Using repair kit = dodges current attack'} },
  { id:'sj-gen-jiabao', name:{zh:'甲爆',en:'Armor Burst'}, effect:{zh:'被破甲时向周围射甲片(2次)',en:'Fires shrapnel on armor break (2 uses)'} },
  { id:'sj-gen-jinchan', name:{zh:'金蝉脱壳',en:'Escape'}, effect:{zh:'受击可翻滚脱离，30秒CD(2次)',en:'Roll escape on hit, 30s CD (2 uses)'} },
  { id:'sj-gen-canfeng', name:{zh:'残锋',en:'Broken Edge'}, effect:{zh:'主手耐久<50%增伤，切换/归零失效(3次)',en:'Dmg up when main weapon dura<50% (3 uses)'} },
  { id:'sj-gen-shanling', name:{zh:'闪灵',en:'Flash Spirit'}, effect:{zh:'完美闪避→减25%技能CD+回体',en:'Perfect dodge: -25pct skill CD + stamina restore'} },
  { id:'sj-gen-zhenyue', name:{zh:'镇岳归元',en:'Mountain Guard'}, effect:{zh:'减伤+受击时霸体(S12新增)',en:'DR + hyper armor when hit (S12 new)'} },
  { id:'sj-gen-yinni', name:{zh:'隐匿射击·远程',en:'Stealth Shot'}, effect:{zh:'远程攻击不暴露轮廓(S12新增)',en:'Ranged attacks dont reveal silhouette (S12 new)'} },
  { id:'sj-gen-baoyan', name:{zh:'爆焱雷',en:'Flame Burst'}, effect:{zh:'振刀时触发火焰爆炸(S12新增)',en:'Flame explosion on parry (S12 new)'} },
  { id:'sj-gen-wanfu', name:{zh:'万夫莫敌',en:'Unstoppable'}, effect:{zh:'属性上限后，攻击+4%、体力+50',en:'After stat cap: ATK+4pct, HP+50'} },
  { id:'sj-gen-liandan', name:{zh:'炼丹术',en:'Alchemy'}, effect:{zh:'属性上限后，近抗+5%、远抗+5%',en:'After stat cap: Melee DR+5pct, Ranged DR+5pct'} },
  { id:'sj-gen-hunran', name:{zh:'魂燃一线',en:'Soul Burn'}, effect:{zh:'体力<50%，攻击+12%',en:'HP<50pct, ATK+12pct'} },
  { id:'sj-gen-jingang', name:{zh:'金刚指',en:'Vajra Finger'}, effect:{zh:'振刀成功→回复体力+减伤',en:'Successful parry: heal+DR'} },
  { id:'sj-gen-zhaolei', name:{zh:'召雷术',en:'Thunder Call'}, effect:{zh:'闪避后落雷(3次)',en:'Lightning strike after dodge (3 uses)'} },
  { id:'sj-gen-liuxing', name:{zh:'流星飞坠',en:'Meteor Crash'}, effect:{zh:'飞索命中→坠落攻击(3次)',en:'Grapple hit: slam attack (3 uses)'} },
];

// 三、位移/功能魂玉
const movementSouljades = [
  { id:'sj-mov-maozu', name:{zh:'猫足',en:'Cat Feet'}, effect:{zh:'脚步声大幅降低',en:'Greatly reduces footstep sounds'} },
  { id:'sj-mov-bihu', name:{zh:'壁虎游墙',en:'Gecko Climb'}, effect:{zh:'爬墙速度+，可壁走',en:'Wall climb speed+, can wall-run'} },
  { id:'sj-mov-ditang', name:{zh:'地堂霸脚',en:'Ground Roll Kick'}, effect:{zh:'滑铲可击飞',en:'Slide can launch enemies'} },
  { id:'sj-mov-tiebi', name:{zh:'铁壁',en:'Iron Wall'}, effect:{zh:'格挡伤害-，精力消耗-',en:'Block dmg reduced, stamina cost reduced'} },
  { id:'sj-mov-xunjie', name:{zh:'迅捷',en:'Swift'}, effect:{zh:'闪避距离+，精力消耗-',en:'Dodge distance+, stamina cost reduced'} },
];

// 四、近战武器魂玉
const weaponSouljades = [
  // 长剑
  { id:'sj-w-ls-1',weapon:'longsword',name:{zh:'凤凰羽',en:'Phoenix Feather'},effect:{zh:'蓄力双剑气',en:'Charged double sword wave'} },
  { id:'sj-w-ls-2',weapon:'longsword',name:{zh:'七星夺窍',en:'Seven Star'},effect:{zh:'蓄力后接蓝霸体，命中回血',en:'Blue armor after charge, lifesteal on hit'} },
  { id:'sj-w-ls-3',weapon:'longsword',name:{zh:'阴烛堕丹翎',en:'Candle Plume'},effect:{zh:'凤凰羽升级版，终结击眩晕',en:'Upgraded Phoenix Feather, finisher stuns'} },
  // 太刀
  { id:'sj-w-katana-1',weapon:'katana',name:{zh:'噬魂斩',en:'Soul Reap Slash'},effect:{zh:'蓄力变长带拉扯',en:'Charged extends with pull'} },
  { id:'sj-w-katana-2',weapon:'katana',name:{zh:'惊雷十劫',en:'Thunder Ten'},effect:{zh:'纵击蓄力可追加',en:'Vertical charge can combo'} },
  { id:'sj-w-katana-3',weapon:'katana',name:{zh:'狂怒',en:'Fury'},effect:{zh:'蓄力伤害+，暴击率+',en:'Charge dmg+, crit rate+'} },
  // 阔刀
  { id:'sj-w-gs-1',weapon:'greatsword',name:{zh:'巽风震雷刀',en:'Thunderquake'},effect:{zh:'改三段蓄力，雷电多段',en:'3-stage charge, lightning multi-hit'} },
  { id:'sj-w-gs-2',weapon:'greatsword',name:{zh:'烈火斩',en:'Blaze Slash'},effect:{zh:'蓄力带灼烧',en:'Charged adds burn'} },
  { id:'sj-w-gs-3',weapon:'greatsword',name:{zh:'风雷步',en:'Storm Step'},effect:{zh:'蓄力移速+',en:'Charge movespeed+'} },
  { id:'sj-w-gs-4',weapon:'greatsword',name:{zh:'磐石架势',en:'Stone Stance'},effect:{zh:'反击伤害+',en:'Counter dmg+'} },
  // 枪
  { id:'sj-w-spear-1',weapon:'spear',name:{zh:'狂浪怒涛',en:'Raging Waves'},effect:{zh:'改哪吒闹海招式',en:'Modifies Nezha combo'} },
  { id:'sj-w-spear-2',weapon:'spear',name:{zh:'引雷',en:'Lightning Draw'},effect:{zh:'蓄力带雷击',en:'Charged adds lightning'} },
  { id:'sj-w-spear-3',weapon:'spear',name:{zh:'大圣游与风卷云残',en:'Monkey King & Cyclone'},effect:{zh:'纵击蓄力命中8次变招',en:'8 vertical charge hits to special move'} },
  // 匕首
  { id:'sj-w-dagger-1',weapon:'dagger',name:{zh:'鬼哭神嚎',en:'Ghost Wail'},effect:{zh:'闪步纵击变招',en:'Dash-step vertical attack morph'} },
  { id:'sj-w-dagger-2',weapon:'dagger',name:{zh:'亢龙有悔',en:'Dragon Regret'},effect:{zh:'平击蓄力，终结回血',en:'Horizontal charge, finisher heals'} },
  { id:'sj-w-dagger-3',weapon:'dagger',name:{zh:'缠龙奔野',en:'Dragon Rush'},effect:{zh:'纵击蓄力变招',en:'Vertical charge morph'} },
  // 双刀
  { id:'sj-w-db-1',weapon:'dualblades',name:{zh:'乾坤日月斩',en:'Sun Moon Slash'},effect:{zh:'蓄力大范围',en:'Charged wide range'} },
  { id:'sj-w-db-2',weapon:'dualblades',name:{zh:'铁马残红',en:'Iron Horse'},effect:{zh:'普攻流血',en:'Normal attacks cause bleed'} },
  { id:'sj-w-db-3',weapon:'dualblades',name:{zh:'斩破千军',en:'Army Breaker'},effect:{zh:'破甲伤害+',en:'Armor break dmg+'} },
  // 双节棍
  { id:'sj-w-nun-1',weapon:'nunchaku',name:{zh:'虎啸龙咆',en:'Dragon Tiger Roar'},effect:{zh:'横拦反击变招',en:'Cross-block counter morph'} },
  { id:'sj-w-nun-2',weapon:'nunchaku',name:{zh:'扬鞭劲',en:'Whip Force'},effect:{zh:'蓄力范围+',en:'Charge range+'} },
  { id:'sj-w-nun-3',weapon:'nunchaku',name:{zh:'机触与破门闩',en:'Trigger & Breaker'},effect:{zh:'横拦不耗龙虎功',en:'Cross-block costs no Dragon-Tiger'} },
  // 斩马刀
  { id:'sj-w-zan-1',weapon:'zanmadao',name:{zh:'过关斩将',en:'General Slayer'},effect:{zh:'蓄力横扫范围+',en:'Charged sweep range+'} },
  // 横刀
  { id:'sj-w-heng-1',weapon:'hengdao',name:{zh:'极光碎云闪',en:'Aurora Flash'},effect:{zh:'纵击位移+沉默',en:'Vertical dash+silence'} },
  { id:'sj-w-heng-2',weapon:'hengdao',name:{zh:'弧光',en:'Arc Light'},effect:{zh:'普攻附带剑气',en:'Normals add sword wave'} },
  // 双戟
  { id:'sj-w-hal-1',weapon:'shuangji',name:{zh:'战龙在天',en:'Sky Dragon'},effect:{zh:'升龙变招',en:'Launcher morph'} },
  { id:'sj-w-hal-2',weapon:'shuangji',name:{zh:'蛟龙入海',en:'Sea Dragon'},effect:{zh:'下劈变招',en:'Slam morph'} },
  // 链剑
  { id:'sj-w-chain-1',weapon:'lianjian',name:{zh:'地龙滚堂刹',en:'Earth Dragon'},effect:{zh:'蓄力旋转范围+',en:'Charged spin range+'} },
  { id:'sj-w-chain-2',weapon:'lianjian',name:{zh:'断罪碎锋',en:'Judgment'},effect:{zh:'命中附加易伤',en:'Applies vulnerability on hit'} },
  // 拳刃
  { id:'sj-w-fist-1',weapon:'quanren',name:{zh:'太极弄云手',en:'Tai Chi Hands'},effect:{zh:'平击三段蓄力伤害+',en:'3-stage horizontal charge dmg+'} },
  { id:'sj-w-fist-2',weapon:'quanren',name:{zh:'破空拳',en:'Sky Breaker'},effect:{zh:'升龙精准闪避追加打击',en:'Launcher precise dodge follow-up'} },
  // 扇
  { id:'sj-w-fan-1',weapon:'fan',name:{zh:'缠龙奔野',en:'Dragon Rush'},effect:{zh:'纵击蓄力变招',en:'Vertical charge morph'} },
  { id:'sj-w-fan-2',weapon:'fan',name:{zh:'阴阳裂',en:'Yin-Yang Rift'},effect:{zh:'蓄力带阴阳印记',en:'Charge applies yin-yang mark'} },
  // 飞刀
  { id:'sj-w-tk-1',weapon:'throwingknife',name:{zh:'断月千刃舞',en:'Moon Blades'},effect:{zh:'蓄力多段',en:'Charge multi-hit'} },
  { id:'sj-w-tk-2',weapon:'throwingknife',name:{zh:'掌心雷',en:'Palm Thunder'},effect:{zh:'命中落雷',en:'Lightning on hit'} },
];

// 五、远程武器魂玉
const rangedSouljades = [
  { id:'sj-r-bow-1',weapon:'bow',name:{zh:'爆裂箭',en:'Explosive Arrow'},effect:{zh:'蓄力爆炸，二段伤降',en:'Charge explosion, 2nd hit reduced'} },
  { id:'sj-r-bow-2',weapon:'bow',name:{zh:'散射',en:'Scatter'},effect:{zh:'一次多发箭矢',en:'Multiple arrows per shot'} },
  { id:'sj-r-bow-3',weapon:'bow',name:{zh:'穿甲',en:'Armor Pierce'},effect:{zh:'无视部分护甲',en:'Ignores partial armor'} },
  { id:'sj-r-cannon-1',weapon:'cannon',name:{zh:'火龙炮',en:'Dragon Cannon'},effect:{zh:'炮弹直线加速',en:'Shell accelerates straight'} },
  { id:'sj-r-cannon-2',weapon:'cannon',name:{zh:'连珠炮',en:'Rapid Cannon'},effect:{zh:'快速连射',en:'Rapid fire'} },
  { id:'sj-r-cannon-3',weapon:'cannon',name:{zh:'反弹',en:'Ricochet'},effect:{zh:'炮弹可反弹',en:'Shells can ricochet'} },
  { id:'sj-r-wyc-1',weapon:'wuyancong',name:{zh:'御地雷',en:'Landmine'},effect:{zh:'蓄力留弹，内伤+爆炸',en:'Charge leaves mine, internal dmg+explosion'} },
  { id:'sj-r-wyc-2',weapon:'wuyancong',name:{zh:'甲破',en:'Armor Break'},effect:{zh:'只扣血量，不扣护甲',en:'Damages HP only, ignores armor'} },
  { id:'sj-r-ms-1',weapon:'musket',name:{zh:'穿甲弹',en:'Armor Piercer'},effect:{zh:'无视护甲',en:'Ignores armor'} },
  { id:'sj-r-ms-2',weapon:'musket',name:{zh:'落金乌',en:'Golden Crow'},effect:{zh:'子弹飞行速度+',en:'Bullet speed+'} },
  { id:'sj-r-rp-1',weapon:'repeater',name:{zh:'毒箭',en:'Poison Arrow'},effect:{zh:'命中带毒',en:'Hits apply poison'} },
  { id:'sj-r-rp-2',weapon:'repeater',name:{zh:'断筋弩',en:'Hamstring'},effect:{zh:'命中减速',en:'Hits slow'} },
  { id:'sj-r-tk-1',weapon:'throwingknife',name:{zh:'断月千刃舞',en:'Moon Blades'},effect:{zh:'蓄力多段',en:'Charge multi-hit'} },
  { id:'sj-r-tk-2',weapon:'throwingknife',name:{zh:'掌心雷',en:'Palm Thunder'},effect:{zh:'命中落雷',en:'Lightning on hit'} },
];


// Export
window.weaponsData = weaponsData;
window.heroesData = heroesData;
window.basicTutorials = basicTutorials;
window.advancedTutorials = advancedTutorials;
window.combosData = combosData;
window.weaponCombosData = weaponCombosData;
window.advancedCombosData = advancedCombosData;
window.featuresData = featuresData;
window.statSouljades = statSouljades;
window.generalSouljades = generalSouljades;
window.movementSouljades = movementSouljades;
window.weaponSouljades = weaponSouljades;
window.rangedSouljades = rangedSouljades;
