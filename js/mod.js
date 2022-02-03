let modInfo = {
	name: "The Gaokao Tree",
	id: "gaokaotree",
	author: "qq1010903229 (loader3229)",
	pointsName: "credits",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "4.1",
	name: "",
}

let changelog = ``

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	if(player.gk.points.gte(5))return true
	return false
}

function getPointGen() {
	let ret=new Decimal(0)
	if(player.gk.points.gte(5))ret=ret.add(layers.chi.getResetGainStable().log10().pow(getBasePointPow()).div(20).add(0.1).mul(getPointMul()).mul(getAutoSpeed()));
	if(player.gk.points.gte(9))ret=ret.add(layers.mat.getResetGainStable().log10().pow(getBasePointPow()).div(20).add(0.2).mul(getPointMul()).mul(getAutoSpeed()));
	if(player.gk.points.gte(12))ret=ret.add(layers.eng.getResetGainStable().log10().pow(getBasePointPow()).div(20).add(0.3).mul(getPointMul()).mul(getAutoSpeed()));
	if(player.gk.points.gte(25))ret=ret.add(layers.is.getResetGainStable().log10().pow(getBasePointPow()).div(20).add(0.4).mul(getPointMul()).mul(getAutoSpeed()));
	return ret;
}

function getBasePointPow() {
	if(player.gk.points.gte(200))return 1.5;
	if(player.gk.points.gte(125))return 1;
	return 0.5;
}

function getPointMul() {
	let ret=new Decimal(1)
	if(player.gk.points.gte(2))ret = ret.mul(player.gk.points);
	ret=ret.mul(buyableEffect("chi",11));
	ret=ret.mul(buyableEffect("mat",11));
	ret=ret.mul(buyableEffect("eng",11));
	ret=ret.mul(buyableEffect("is",11));
	ret=ret.mul(buyableEffect("chi",12));
	ret=ret.mul(buyableEffect("mat",12));
	ret=ret.mul(buyableEffect("eng",12));
	ret=ret.mul(buyableEffect("is",12));
	ret=ret.mul(buyableEffect("chi",21));
	ret=ret.mul(buyableEffect("mat",21));
	ret=ret.mul(buyableEffect("eng",21));
	ret=ret.mul(buyableEffect("is",21));
	ret=ret.mul(buyableEffect("chi",22));
	ret=ret.mul(buyableEffect("mat",22));
	ret=ret.mul(buyableEffect("eng",22));
	ret=ret.mul(buyableEffect("is",22));
	ret=ret.mul(buyableEffect("chi",31));
	ret=ret.mul(buyableEffect("mat",31));
	ret=ret.mul(buyableEffect("eng",31));
	ret=ret.mul(buyableEffect("is",31));
	ret=ret.mul(buyableEffect("is",32));
	ret=ret.mul(buyableEffect("is",41));
	if(hasUpgrade("chi",13))ret=ret.mul(upgradeEffect("chi",13));
	if(hasUpgrade("mat",13))ret=ret.mul(upgradeEffect("mat",13));
	if(hasUpgrade("eng",14))ret=ret.mul(upgradeEffect("eng",14));
	if(hasUpgrade("is",14))ret=ret.mul(upgradeEffect("is",14));
	return ret;
}

function getAutoSpeed() {
	let ret=new Decimal(1)
	if(player.gk.points.gte(15))ret = ret.mul(player.gk.points.pow(2).div(100).add(1));
	return ret;
}

function getPointGenString(){
	return "("+format(getPointGen())+"/sec)";
}

function getTextbooks(){
	let tblayers=["chi","mat","eng","is"];
	let tbids=[11,12,21,22,31,32,41];
	let tb=0;
	for(let i=0;i<=3;i++)for(let j=0;j<=(i==3?6:4);j++)if(player[tblayers[i]].buyables[tbids[j]].gt(0))tb++;
	return tb;
}

function autoBuyables(){
	let tblayers=["chi","mat","eng","is"];
	let tbids=[11,12,21,22,31,32,41];
	let tb=0;
	for(let i=0;i<=3;i++)for(let j=0;j<=(i==3?6:4);j++)if(layers[tblayers[i]].buyables[tbids[j]].unlocked() && layers[tblayers[i]].buyables[tbids[j]].canAfford()){
		layers[tblayers[i]].buyables[tbids[j]].buy();
		console.log(Date.now(),tblayers[i],tbids[j],"bought");
	}
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"Mod Author: qq1010903229 (loader3229)"
]

// Determines when the game "ends"
function isEndgame() {
	return player.gk.points.gte(375);
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}