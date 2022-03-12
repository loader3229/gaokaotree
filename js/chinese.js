window.chinesemode=true;

modInfo.name="高考树（高考加油！）";
VERSION.name="";
VERSION.cnum="0";
VERSION.withoutName="v"+VERSION.num+"c"+VERSION.cnum;
VERSION.withName="v"+VERSION.num+"c"+VERSION.cnum+"（作者的汉化版）";

displayThings = [
	"本MOD的作者QQ：1010903229"
]

winText="你暂时已经达到了这个树MOD的残局，但是现在...";

layers.donate.symbol="捐赠";
layers.donate.tooltip="捐赠";
layers.donate.tabFormat[3]=["raw-html", "<h1><a href=https://afdian.net/@loader3229/plan target=_blank>用爱发电吧！为我的高考加油！</a></h1>"]

layers.chi.symbol="语文";
layers.chi.resource="语文能力";
layers.chi.effectDescription="";
layers.chi.baseResource="学分";
layers.chi.resetDescription="获得";

layers.mat.symbol="数学";
layers.mat.resource="数学能力";
layers.mat.effectDescription="";
layers.mat.baseResource="学分";
layers.mat.resetDescription="获得";

layers.eng.symbol="英语";
layers.eng.resource="英语能力";
layers.eng.effectDescription="";
layers.eng.baseResource="学分";
layers.eng.resetDescription="获得";

layers.is.symbol="理综";
layers.is.resource="理综能力";
layers.is.effectDescription="";
layers.is.baseResource="学分";
layers.is.resetDescription="获得";

layers.gk.symbol="高考";
layers.gk.resource="分数";
layers.gk.effectDescription="";
layers.gk.baseResource="学分";
layers.gk.resetDescription="获得";

layers.sm.symbol="超市";
layers.sm.resource="零花钱";
layers.sm.effectDescription="零花钱的获得基于你得到的分数";
layers.sm.baseResource="分数";
layers.sm.resetDescription="获得";

layers.a.symbol="成就";
layers.u.symbol="技巧";
layers.un.symbol="大学";
layers.un.resource="学位点";
layers.un.effectDescription="学位点的获得基于你得到的分数";
layers.un.baseResource="分数";
layers.un.resetDescription="获得";

layers.gk.milestones[0].requirementDescription="得到1分";
layers.gk.milestones[0].effectDescription="学习语文可以获得学分。";
layers.gk.milestones[1].requirementDescription="得到2分";
layers.gk.milestones[1].effectDescription="使学分的获得乘以分数。";
layers.gk.milestones[2].requirementDescription="得到3分";
layers.gk.milestones[2].effectDescription="解锁数学。学习数学可以获得学分。";
layers.gk.milestones[3].requirementDescription="得到5分";
layers.gk.milestones[3].effectDescription="每秒自动学习1次语文。";
layers.gk.milestones[4].requirementDescription="得到7分";
layers.gk.milestones[4].effectDescription="解锁英语。学习英语可以获得学分。";
layers.gk.milestones[5].requirementDescription="得到9分";
layers.gk.milestones[5].effectDescription="每秒自动学习1次数学。";
layers.gk.milestones[6].requirementDescription="得到10分";
layers.gk.milestones[6].effectDescription="解锁成就和教材。";
layers.gk.milestones[7].requirementDescription="得到12分";
layers.gk.milestones[7].effectDescription="每秒自动学习1次英语。";
layers.gk.milestones[8].requirementDescription="得到15分";
layers.gk.milestones[8].effectDescription=function(){return "根据你的分数，自动学习的效果变得更好。当前："+format(player.gk.points.pow(2).div(100).add(1))+"x"};
layers.gk.milestones[9].requirementDescription="得到25分";
layers.gk.milestones[9].effectDescription="解锁理综。学习理综可以获得学分。每秒自动学习1次理综。";
layers.gk.milestones[10].requirementDescription="得到40分";
layers.gk.milestones[10].effectDescription="解锁考试技巧。进行高考不会重置考试技巧。";
layers.gk.milestones[11].requirementDescription="得到50分";
layers.gk.milestones[11].effectDescription="解锁新教材。";
layers.gk.milestones[12].requirementDescription="得到70分";
layers.gk.milestones[12].effectDescription="解锁新考试技巧。";
layers.gk.milestones[13].requirementDescription="得到80分";
layers.gk.milestones[13].effectDescription=function(){return "根据你的分数，教材效果变得更好。当前：^"+format(player.gk.points.add(10).log10().pow(3).div(80).add(1),4)};
layers.gk.milestones[14].requirementDescription="得到100分";
layers.gk.milestones[14].effectDescription="解锁新教材。";
layers.gk.milestones[15].requirementDescription="得到125分";
layers.gk.milestones[15].effectDescription="提升基础学分获得。解锁新考试技巧。";
layers.gk.milestones[16].requirementDescription="得到150分";
layers.gk.milestones[16].effectDescription="解锁新教材。";
layers.gk.milestones[17].requirementDescription="得到200分";
layers.gk.milestones[17].effectDescription="提升基础学分获得。解锁新考试技巧。";
layers.gk.milestones[18].requirementDescription="得到250分";
layers.gk.milestones[18].effectDescription="解锁新教材。";
layers.gk.milestones[19].requirementDescription="得到350分";
layers.gk.milestones[19].effectDescription="解锁超市。";
layers.gk.milestones[20].requirementDescription="得到420分";
layers.gk.milestones[20].effectDescription="解锁超市里面新的一行。解锁新考试技巧。";
layers.gk.milestones[21].requirementDescription="得到500分";
layers.gk.milestones[21].effectDescription="提升基础学分获得。解锁超市里面新的一行。解锁大学。解锁新考试技巧。";
layers.gk.milestones[22].requirementDescription="得到600分";
layers.gk.milestones[22].effectDescription="提升基础学分获得。解锁超市里面新的一行。解锁新的学位。";
layers.gk.milestones[23].requirementDescription="得到690分";
layers.gk.milestones[23].effectDescription="提升基础学分获得。解锁新的学位。解锁新考试技巧。";
layers.gk.milestones[24].requirementDescription="得到750分";
layers.gk.milestones[24].effectDescription="当前残局";

/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
	
    'You have': '你有',
    'You have ': '你有',
    'credits': '学分',
    ' credits': '学分',
    'Milestone Gotten!': '获得里程碑！',
    'Achievement Gotten!': '获得成就！',
	
    'Start': '开始',
    'Exit Early': '提前退出',
    'Completed': '已完成',
    'Finish': '完成挑战',
	
    'HARD RESET': '硬复位',
    'ON': '开启',
    'OFF': '关闭',
    'Save': '保存',
    'Export to clipboard': '导出到剪贴板',
    'Export': '导出',
    'Import': '导入',
    'You have': '你有',
    'ALWAYS': '一直',
    'Default': '默认',
    'Aqua': '水色',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'SHOWN': '显示',
    'INCOMPLETE': '未获得',
    'NEVER': '从不',
	
	'Hotkeys': '热键',
	
    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "Autosave: ": "自动保存：",
    "Offline Prod: ": "离线生产：",
    "Offline Time": "离线时间",
    "Theme: ": "主题：",
    "Show Milestones: ": "显示里程碑：",
    "Completed Challenges: ": "完成的挑战：",
    "High-Quality Tree: ": "高画质的树：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
	[/You have (.+)/, '你有 $1'],
	[/Req:(.+)\/ Infinity(.+)/, '需要：$1/ 无限$2'],
	[/Req:(.+)/, '需要：$1'],
	[/Next at Infinity(.+)/, '下一个需要 无限$1'],
	[/Next at(.+)/, '下一个需要$1'],
	[/(.+)\/ Infinity(.+)/, '$1/ 无限$2'],
	[/You are gaining(.+)per second/, '你正在获得$1每秒'],
	[/\((.+)\/sec\)/, '($1/秒)'],
	[/Cost: Infinity(.+)/, '花费：无限$1'],
	[/Cost:(.+)/, '花费：$1'],
	[/Currently:(.+)/, '当前：$1'],
	[/Reward:(.+)/, '奖励：$1'],
	[/Goal:(.+)/, '目标：$1'],
	[/Time Played:(.+)/, '游戏时间：$1'],
]);