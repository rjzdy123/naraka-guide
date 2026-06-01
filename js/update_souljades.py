import re
with open('F:/ai/wjwjdwz/js/data.js','r',encoding='utf-8') as f:
    lines = f.readlines()

# Find start and end of old souljade section
start = None
end = None
for i, line in enumerate(lines):
    if '// --- Souljades' in line:
        start = i
    if start is not None and '// Export' in line and i > start:
        end = i
        break

print(f'Replacing lines {start+1}-{end}')

new_data = """// ============================================================
// 魂玉数据 — 天选之人 当前版本
// 来源: 游戏内实际数据
// ============================================================

// 一、基础属性魂玉 (白/蓝/紫/金 四品质)
const statSouljades = [
  { id:'sj-stat-hp', name:{zh:'体力',en:'Vitality'},
    tiers:{white:'+100',blue:'+150',purple:'+200',gold:'+250'},
    desc:{zh:'提升生命值上限。',en:'Increases max HP.'} },
  { id:'sj-stat-atk', name:{zh:'攻击',en:'Attack'},
    tiers:{white:'+5',blue:'+7',purple:'+9',gold:'+12'},
    desc:{zh:'增加基础伤害。',en:'Increases base damage.'} },
  { id:'sj-stat-melee', name:{zh:'近抗',en:'Melee Resist'},
    tiers:{white:'6%',blue:'9%',purple:'12%',gold:'15%'},
    desc:{zh:'减免近战伤害。',en:'Reduces melee damage taken.'} },
  { id:'sj-stat-ranged', name:{zh:'远抗',en:'Ranged Resist'},
    tiers:{white:'6%',blue:'9%',purple:'12%',gold:'15%'},
    desc:{zh:'减免远程伤害。',en:'Reduces ranged damage taken.'} },
  { id:'sj-stat-head', name:{zh:'护头',en:'Head Guard'},
    tiers:{white:'-12%',blue:'-18%',purple:'-24%',gold:'-30%'},
    desc:{zh:'降低头部受伤伤害。',en:'Reduces headshot damage.'} },
  { id:'sj-stat-stamina', name:{zh:'精力',en:'Stamina'},
    tiers:{white:'+0.5/s',blue:'+0.7/s',purple:'+0.9/s',gold:'+1.2/s'},
    desc:{zh:'提升精力回复速度。',en:'Increases stamina regen.'} },
  { id:'sj-stat-rage', name:{zh:'怒气',en:'Rage'},
    tiers:{white:'+0.5/s',blue:'+0.7/s',purple:'+0.9/s',gold:'+1.2/s'},
    desc:{zh:'提升怒气回复速度。',en:'Increases rage regen.'} },
];

// 二、通用金色魂玉 (功能型)
const generalSouljades = [
  { id:'sj-gen-xuming', name:{zh:'续命术',en:'Life Extension'}, effect:{zh:'受致命伤免疫，5秒+40%减伤，回500体力(1次)',en:'Immune to fatal dmg, 5s 40% DR, restore 500 HP (1 use)'} },
  { id:'sj-gen-bigong', name:{zh:'毕工淌',en:'Work Flow'}, effect:{zh:'用武备匣=闪避当前招式',en:'Using repair kit = dodges current attack'} },
  { id:'sj-gen-jiabao', name:{zh:'甲爆',en:'Armor Burst'}, effect:{zh:'被破甲时向周围射甲片(2次)',en:'Fires shrapnel on armor break (2 uses)'} },
  { id:'sj-gen-jinchan', name:{zh:'金蝉脱壳',en:'Escape'}, effect:{zh:'受击可翻滚脱离，30秒CD(2次)',en:'Roll escape on hit, 30s CD (2 uses)'} },
  { id:'sj-gen-canfeng', name:{zh:'残锋',en:'Broken Edge'}, effect:{zh:'主手耐久<50%增伤，切换/归零失效(3次)',en:'Dmg up when main weapon dura<50% (3 uses)'} },
  { id:'sj-gen-shanling', name:{zh:'闪灵',en:'Flash Spirit'}, effect:{zh:'完美闪避->减25%技能CD+回体',en:'Perfect dodge-> -25% skill CD+stamina restore'} },
  { id:'sj-gen-zhenyue', name:{zh:'镇岳归元',en:'Mountain Guard'}, effect:{zh:'减伤+受击时霸体(S12新增)',en:'DR+hyper armor when hit (S12 new)'} },
  { id:'sj-gen-yinni', name:{zh:'隐匿射击·远程',en:'Stealth Shot'}, effect:{zh:'远程攻击不暴露轮廓(S12新增)',en:'Ranged attacks dont reveal silhouette (S12 new)'} },
  { id:'sj-gen-baoyan', name:{zh:'爆焱雷',en:'Flame Burst'}, effect:{zh:'振刀时触发火焰爆炸(S12新增)',en:'Flame explosion on parry (S12 new)'} },
  { id:'sj-gen-wanfu', name:{zh:'万夫莫敌',en:'Unstoppable'}, effect:{zh:'属性上限后，攻击+4%、体力+50',en:'After stat cap: ATK+4%, HP+50'} },
  { id:'sj-gen-liandan', name:{zh:'炼丹术',en:'Alchemy'}, effect:{zh:'属性上限后，近抗+5%、远抗+5%',en:'After stat cap: Melee DR+5%, Ranged DR+5%'} },
  { id:'sj-gen-hunran', name:{zh:'魂燃一线',en:'Soul Burn'}, effect:{zh:'体力<50%，攻击+12%',en:'HP<50%, ATK+12%'} },
  { id:'sj-gen-jingang', name:{zh:'金刚指',en:'Vajra Finger'}, effect:{zh:'振刀成功->回复体力+减伤',en:'Successful parry-> heal+DR'} },
  { id:'sj-gen-zhaolei', name:{zh:'召雷术',en:'Thunder Call'}, effect:{zh:'闪避后落雷(3次)',en:'Lightning strike after dodge (3 uses)'} },
  { id:'sj-gen-liuxing', name:{zh:'流星飞坠',en:'Meteor Crash'}, effect:{zh:'飞索命中->坠落攻击(3次)',en:'Grapple hit-> slam attack (3 uses)'} },
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
  { id:'sj-w-ls-1',weapon:'longsword',name:{zh:'凤凰羽',en:'Phoenix Feather'},effect:{zh:'蓄力双剑气',en:'Charged double sword wave'} },
  { id:'sj-w-ls-2',weapon:'longsword',name:{zh:'七星夺窍',en:'Seven Star'},effect:{zh:'蓄力后接蓝霸体，命中回血',en:'Blue armor after charge, lifesteal on hit'} },
  { id:'sj-w-ls-3',weapon:'longsword',name:{zh:'阴烛堕丹翎',en:'Candle Plume'},effect:{zh:'凤凰羽升级版，终结击眩晕',en:'Upgraded Phoenix Feather, finisher stuns'} },
  { id:'sj-w-katana-1',weapon:'katana',name:{zh:'噬魂斩',en:'Soul Reap Slash'},effect:{zh:'蓄力变长带拉扯',en:'Charged extends with pull'} },
  { id:'sj-w-katana-2',weapon:'katana',name:{zh:'惊雷十劫',en:'Thunder Ten'},effect:{zh:'纵击蓄力可追加',en:'Vertical charge can combo'} },
  { id:'sj-w-katana-3',weapon:'katana',name:{zh:'狂怒',en:'Fury'},effect:{zh:'蓄力伤害+，暴击率+',en:'Charge dmg+, crit rate+'} },
  { id:'sj-w-gs-1',weapon:'greatsword',name:{zh:'巽风震雷刀',en:'Thunderquake'},effect:{zh:'改三段蓄力，雷电多段',en:'3-stage charge, lightning multi-hit'} },
  { id:'sj-w-gs-2',weapon:'greatsword',name:{zh:'烈火斩',en:'Blaze Slash'},effect:{zh:'蓄力带灼烧',en:'Charged adds burn'} },
  { id:'sj-w-gs-3',weapon:'greatsword',name:{zh:'风雷步',en:'Storm Step'},effect:{zh:'蓄力移速+',en:'Charge movespeed+'} },
  { id:'sj-w-gs-4',weapon:'greatsword',name:{zh:'磐石架势',en:'Stone Stance'},effect:{zh:'反击伤害+',en:'Counter dmg+'} },
  { id:'sj-w-spear-1',weapon:'spear',name:{zh:'狂浪怒涛',en:'Raging Waves'},effect:{zh:'改哪吒闹海招式',en:'Modifies Nezha combo'} },
  { id:'sj-w-spear-2',weapon:'spear',name:{zh:'引雷',en:'Lightning Draw'},effect:{zh:'蓄力带雷击',en:'Charged adds lightning'} },
  { id:'sj-w-spear-3',weapon:'spear',name:{zh:'大圣游&风卷云残',en:'Monkey King & Cyclone'},effect:{zh:'纵击蓄力命中8次变招',en:'8 vertical charge hits->special move'} },
  { id:'sj-w-dagger-1',weapon:'dagger',name:{zh:'鬼哭神嚎',en:'Ghost Wail'},effect:{zh:'闪步纵击变招',en:'Dash-step vertical attack morph'} },
  { id:'sj-w-dagger-2',weapon:'dagger',name:{zh:'亢龙有悔',en:'Dragon Regret'},effect:{zh:'平击蓄力，终结回血',en:'Horizontal charge, finisher heals'} },
  { id:'sj-w-dagger-3',weapon:'dagger',name:{zh:'缠龙奔野',en:'Dragon Rush'},effect:{zh:'纵击蓄力变招',en:'Vertical charge morph'} },
  { id:'sj-w-db-1',weapon:'dualblades',name:{zh:'乾坤日月斩',en:'Sun Moon Slash'},effect:{zh:'蓄力大范围',en:'Charged wide range'} },
  { id:'sj-w-db-2',weapon:'dualblades',name:{zh:'铁马残红',en:'Iron Horse'},effect:{zh:'普攻流血',en:'Normal attacks cause bleed'} },
  { id:'sj-w-db-3',weapon:'dualblades',name:{zh:'斩破千军',en:'Army Breaker'},effect:{zh:'破甲伤害+',en:'Armor break dmg+'} },
  { id:'sj-w-nun-1',weapon:'nunchaku',name:{zh:'虎啸龙咆',en:'Dragon Tiger Roar'},effect:{zh:'横拦反击变招',en:'Cross-block counter morph'} },
  { id:'sj-w-nun-2',weapon:'nunchaku',name:{zh:'扬鞭劲',en:'Whip Force'},effect:{zh:'蓄力范围+',en:'Charge range+'} },
  { id:'sj-w-nun-3',weapon:'nunchaku',name:{zh:'机触&破门闩',en:'Trigger & Breaker'},effect:{zh:'横拦不耗龙虎功',en:'Cross-block costs no Dragon-Tiger'} },
  { id:'sj-w-zan-1',weapon:'zanmadao',name:{zh:'过关斩将',en:'General Slayer'},effect:{zh:'蓄力横扫范围+',en:'Charged sweep range+'} },
  { id:'sj-w-heng-1',weapon:'hengdao',name:{zh:'极光碎云闪',en:'Aurora Flash'},effect:{zh:'纵击位移+沉默',en:'Vertical dash+silence'} },
  { id:'sj-w-heng-2',weapon:'hengdao',name:{zh:'弧光',en:'Arc Light'},effect:{zh:'普攻附带剑气',en:'Normals add sword wave'} },
  { id:'sj-w-hal-1',weapon:'shuangji',name:{zh:'战龙在天',en:'Sky Dragon'},effect:{zh:'升龙变招',en:'Launcher morph'} },
  { id:'sj-w-hal-2',weapon:'shuangji',name:{zh:'蛟龙入海',en:'Sea Dragon'},effect:{zh:'下劈变招',en:'Slam morph'} },
  { id:'sj-w-chain-1',weapon:'lianjian',name:{zh:'地龙滚堂刹',en:'Earth Dragon'},effect:{zh:'蓄力旋转范围+',en:'Charged spin range+'} },
  { id:'sj-w-chain-2',weapon:'lianjian',name:{zh:'断罪碎锋',en:'Judgment'},effect:{zh:'命中附加易伤',en:'Applies vulnerability on hit'} },
  { id:'sj-w-fist-1',weapon:'quanren',name:{zh:'太极弄云手',en:'Tai Chi Hands'},effect:{zh:'平击三段蓄力伤害+',en:'3-stage horizontal charge dmg+'} },
  { id:'sj-w-fist-2',weapon:'quanren',name:{zh:'破空拳',en:'Sky Breaker'},effect:{zh:'升龙精准闪避追加打击',en:'Launcher precise dodge follow-up'} },
  { id:'sj-w-fan-1',weapon:'fan',name:{zh:'缠龙奔野',en:'Dragon Rush'},effect:{zh:'纵击蓄力变招',en:'Vertical charge morph'} },
  { id:'sj-w-fan-2',weapon:'fan',name:{zh:'阴阳裂',en:'Yin-Yang Rift'},effect:{zh:'蓄力带阴阳印记',en:'Charge applies yin-yang mark'} },
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

"""

new_lines = lines[:start] + [new_data] + ['\n'] + lines[end:]
with open('F:/ai/wjwjdwz/js/data.js','w',encoding='utf-8') as f:
    f.writelines(new_lines)
print('Done!')
