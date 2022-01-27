addLayer("gk", {
    name: "gaokao", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "GK", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires(){
		//if(player.m.points.gte(99))return new Decimal(Infinity);
		return new Decimal(0);
	},
    resource: "points", // Name of prestige currency
    baseResource: "credits", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 1, // Row the layer is in on the tree (0 is the first row)
	base: new Decimal(1.5),
    layerShown(){return true},
	resetsNothing(){return true},
	autoPrestige(){return false},
	getResetGain2(){
		let points=tmp.chi.points.add(tmp.mat.points).add(tmp.eng.points).add(tmp.is.points);
		return points;
	},
	getResetGain(){
		let points=layers.gk.getResetGain2();
		return points.sub(player.gk.points).max(0);
	},
	getNextAt(){return new Decimal(0);},
	milestones: [
		{
			requirement: new Decimal(1),
			requirementDescription: "Get 1 point",
            unlocked() {return player[this.layer].best.gte(0)},
            done() {return player[this.layer].best.gte(1)}, // Used to determine when to give the milestone
            effectDescription: "Studying Chinese will get credits."
        },
		{
			requirement: new Decimal(2),
			requirementDescription: "Get 2 points",
            unlocked() {return player[this.layer].best.gte(1)},
            done() {return player[this.layer].best.gte(2)}, // Used to determine when to give the milestone
            effectDescription: "Multiply credits gain by points."
        },
		{
			requirement: new Decimal(3),
			requirementDescription: "Get 3 points",
            unlocked() {return player[this.layer].best.gte(2)},
            done() {return player[this.layer].best.gte(3)}, // Used to determine when to give the milestone
            effectDescription: "Unlock Mathematics. Studying Mathematics will get credits."
        },
		{
			requirement: new Decimal(5),
			requirementDescription: "Get 5 points",
            unlocked() {return player[this.layer].best.gte(3)},
            done() {return player[this.layer].best.gte(5)}, // Used to determine when to give the milestone
            effectDescription: "Automatically study chinese once per second."
        },
		{
			requirement: new Decimal(7),
			requirementDescription: "Get 7 points",
            unlocked() {return player[this.layer].best.gte(5)},
            done() {return player[this.layer].best.gte(7)}, // Used to determine when to give the milestone
            effectDescription: "Unlock English. Studying English will get credits."
        },
		{
			requirement: new Decimal(9),
			requirementDescription: "Get 9 points",
            unlocked() {return player[this.layer].best.gte(7)},
            done() {return player[this.layer].best.gte(9)}, // Used to determine when to give the milestone
            effectDescription: "Automatically study math once per second."
        },
		{
			requirement: new Decimal(10),
			requirementDescription: "Get 10 points",
            unlocked() {return player[this.layer].best.gte(9)},
            done() {return player[this.layer].best.gte(10)}, // Used to determine when to give the milestone
            effectDescription: "Current Endgame (Unlock achievements and textbooks in next update)."
        },
		],
    resetDescription: "Get ",
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"每一个里程碑都会解锁一些升级。":"Every milestone will unlock some upgrades.")}],
				"milestones"
				],
	branches: ["chi","mat","eng","is"],
	canReset(){return layers.gk.getResetGain2().gt(player.gk.points);},
	prestigeButtonText(){
		return (window.chinesemode?"开始高考！你将会得到":"Ready for exam! You will get ")+formatWhole(layers.gk.getResetGain2())+(window.chinesemode?"分。":" points.");
	},
	onPrestige(gain){
		player.chi.points=new Decimal(0);
		player.chi.upgrades=[];
		player.mat.points=new Decimal(0);
		player.mat.upgrades=[];
		player.eng.points=new Decimal(0);
		player.eng.upgrades=[];
		player.is.points=new Decimal(0);
		player.is.upgrades=[];
		player.points=new Decimal(0);
	},
})

addLayer("chi", {
    name: "chinese", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CHI", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires(){
		//if(player.m.points.gte(99))return new Decimal(Infinity);
		return new Decimal(0);
	},
    resource: "Chinese ability", // Name of prestige currency
    baseResource: "credits", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
	base: new Decimal(1.5),
    layerShown(){return true},
	resetsNothing(){return true},
	autoPrestige(){return false},
	getResetGain(){
		let gain=this.getResetGainStable().mul(1+Math.random());
		return gain;
	},
	getResetGainStable(){
		let gain=new Decimal(1);
		if(hasUpgrade("chi",11))gain=gain.mul(upgradeEffect("chi",11));
		if(hasUpgrade("chi",12))gain=gain.mul(upgradeEffect("chi",12));
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.chi.points.add(5).log10();
		if(ret.gte(90))ret=softcap(ret,90);
		if(ret.gte(150))ret=softcap(ret,150,0);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的语文将会考":"You will get ")+formatWhole(tmp.chi.points)+(window.chinesemode?"分":" points in the Chinese exam.")}],
				"upgrades"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习语文！":"Study Chinese!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().sqrt().div(20).add(0.1).mul(getPointMul()));
	},
	upgrades: {
        rows: 1,
        cols: 2,
		11: {
            description(){
				return window.chinesemode?"学分提升语文学习力。":"Credits boost Chinese studying speed.";
			},
            cost: new Decimal(2),
            unlocked() { return player.gk.points.gte(1)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=2;
                let ret = Decimal.pow(base,Decimal.log10(player.points.add(1)).pow(0.9)).mul(Decimal.div(4,Decimal.add(1,player.points.add(1).pow(-1).mul(3))));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		12: {
            description(){
				return window.chinesemode?"语文能力提升语文学习力。":"Chinese ability boost Chinese studying speed.";
			},
            cost: new Decimal(5),
            unlocked() { return player.gk.points.gte(2)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=2;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
	canReset(){return true},
	update(diff){
		if(player.gk.points.gte(5))player.chi.points=player.chi.points.add(this.getResetGainStable().mul(diff));
	}
})


addLayer("mat", {
    name: "math", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MAT", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFF00",
    requires(){
		//if(player.m.points.gte(99))return new Decimal(Infinity);
		return new Decimal(0);
	},
    resource: "math ability", // Name of prestige currency
    baseResource: "credits", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
	base: new Decimal(1.5),
    layerShown(){return player.gk.points.gte(3)},
	resetsNothing(){return true},
	autoPrestige(){return false},
	getResetGain(){
		let gain=this.getResetGainStable().mul(1+Math.random());
		return gain;
	},
	getResetGainStable(){
		let gain=new Decimal(1);
		if(hasUpgrade("mat",11))gain=gain.mul(upgradeEffect("mat",11));
		if(hasUpgrade("mat",12))gain=gain.mul(upgradeEffect("mat",12));
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.mat.points.add(5).log10();
		if(ret.gte(90))ret=softcap(ret,90);
		if(ret.gte(150))ret=softcap(ret,150,0);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的数学将会考":"You will get ")+formatWhole(tmp.mat.points)+(window.chinesemode?"分":" points in the Math exam.")}],
				"upgrades"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习数学！":"Study Mathematics!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().sqrt().div(20).add(0.2).mul(getPointMul()));
	},
	upgrades: {
        rows: 1,
        cols: 2,
		11: {
            description(){
				return window.chinesemode?"学分提升数学学习力。":"Credits boost math studying speed.";
			},
            cost: new Decimal(20),
            unlocked() { return player.gk.points.gte(3)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=2;
                let ret = Decimal.pow(base,Decimal.log10(player.points.add(1)).pow(0.9));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		12: {
            description(){
				return window.chinesemode?"数学能力提升数学学习力。":"Math ability boost math studying speed.";
			},
            cost: new Decimal(50),
            unlocked() { return player.gk.points.gte(5)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=2;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
	canReset(){return player.gk.points.gte(3)},
	update(diff){
		if(player.gk.points.gte(9))player.mat.points=player.mat.points.add(this.getResetGainStable().mul(diff));
	}
})


addLayer("eng", {
    name: "english", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "ENG", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FF00",
    requires(){
		//if(player.m.points.gte(99))return new Decimal(Infinity);
		return new Decimal(0);
	},
    resource: "English ability", // Name of prestige currency
    baseResource: "credits", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
	base: new Decimal(1.5),
    layerShown(){return player.gk.points.gte(7)},
	resetsNothing(){return true},
	autoPrestige(){return false},
	getResetGain(){
		let gain=this.getResetGainStable().mul(1+Math.random());
		return gain;
	},
	getResetGainStable(){
		let gain=new Decimal(1);
		if(hasUpgrade("eng",11))gain=gain.mul(upgradeEffect("eng",11));
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.eng.points.add(5).log10();
		if(ret.gte(90))ret=softcap(ret,90);
		if(ret.gte(150))ret=softcap(ret,150,0);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的英语将会考":"You will get ")+formatWhole(tmp.eng.points)+(window.chinesemode?"分":" points in the English exam.")}],
				"upgrades"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习英语！":"Study English!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().sqrt().div(20).add(0.3).mul(getPointMul()));
	},
	upgrades: {
        rows: 1,
        cols: 2,
		11: {
            description(){
				return window.chinesemode?"学分提升英语学习力。":"Credits boost English studying speed.";
			},
            cost: new Decimal(200),
            unlocked() { return player.gk.points.gte(7)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=2;
                let ret = Decimal.pow(base,Decimal.log10(player.points.add(1)).pow(0.9));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		12: {
            description(){
				return window.chinesemode?"英语能力提升英语学习力。":"English ability boost English studying speed.";
			},
            cost: new Decimal(500),
            unlocked() { return player.gk.points.gte(9)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=2;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
	canReset(){return player.gk.points.gte(7)}
})

addLayer("is", {
    name: "integrated science", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "IS", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FF00",
    requires(){
		//if(player.m.points.gte(99))return new Decimal(Infinity);
		return new Decimal(0);
	},
    resource: "integrated science ability", // Name of prestige currency
    baseResource: "credits", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
	base: new Decimal(1.5),
    layerShown(){return player.gk.points.gte(999)},
	resetsNothing(){return true},
	autoPrestige(){return false},
	getResetGain(){
		let gain=this.getResetGainStable().mul(1+Math.random());
		return gain;
	},
	getResetGainStable(){
		let gain=new Decimal(1);
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.is.points.add(5).log10().mul(2).sub(1);
		if(ret.gte(180))ret=softcap(ret,180);
		if(ret.gte(300))ret=softcap(ret,300,0);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的理综将会考":"You will get ")+formatWhole(tmp.eng.points)+(window.chinesemode?"分":" points in the integrated science exam.")}],
				"upgrades"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习理综！":"Study Integrated Science!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().sqrt().div(20).add(0.4).mul(getPointMul()));
	},
	canReset(){return player.gk.points.gte(999)}
})
