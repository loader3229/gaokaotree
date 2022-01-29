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
	num: "2",
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
	if(player.gk.points.gte(5))ret=ret.add(layers.chi.getResetGainStable().log10().sqrt().div(20).add(0.1).mul(getPointMul()).mul(getAutoSpeed()));
	if(player.gk.points.gte(9))ret=ret.add(layers.mat.getResetGainStable().log10().sqrt().div(20).add(0.2).mul(getPointMul()).mul(getAutoSpeed()));
	if(player.gk.points.gte(12))ret=ret.add(layers.eng.getResetGainStable().log10().sqrt().div(20).add(0.3).mul(getPointMul()).mul(getAutoSpeed()));
	if(player.gk.points.gte(25))ret=ret.add(layers.is.getResetGainStable().log10().sqrt().div(20).add(0.4).mul(getPointMul()).mul(getAutoSpeed()));
	return ret;
}

function getPointMul() {
	let ret=new Decimal(1)
	if(player.gk.points.gte(2))ret = ret.mul(player.gk.points);
	ret=ret.mul(buyableEffect("chi",11));
	ret=ret.mul(buyableEffect("mat",11));
	ret=ret.mul(buyableEffect("eng",11));
	ret=ret.mul(buyableEffect("is",11));
	if(hasUpgrade("chi",13))ret=ret.mul(upgradeEffect("chi",13));
	if(hasUpgrade("mat",13))ret=ret.mul(upgradeEffect("mat",13));
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


// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"Mod Author: qq1010903229 (loader3229)"
]

// Determines when the game "ends"
function isEndgame() {
	return player.gk.points.gte(50);
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