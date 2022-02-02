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
            effectDescription: "Automatically study Chinese once per second."
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
            effectDescription: "Unlock achievements and textbooks."
        },
		{
			requirement: new Decimal(12),
			requirementDescription: "Get 12 points",
            unlocked() {return player[this.layer].best.gte(10)},
            done() {return player[this.layer].best.gte(12)}, // Used to determine when to give the milestone
            effectDescription: "Automatically study English once per second."
        },
		{
			requirement: new Decimal(15),
			requirementDescription: "Get 15 points",
            unlocked() {return player[this.layer].best.gte(12)},
            done() {return player[this.layer].best.gte(15)}, // Used to determine when to give the milestone
            effectDescription(){"Autostudy speed is increased by your points. Currently: "+format(player.gk.points.pow(2).div(100).add(1))+"x"}
        },
		{
			requirement: new Decimal(25),
			requirementDescription: "Get 25 points",
            unlocked() {return player[this.layer].best.gte(15)},
            done() {return player[this.layer].best.gte(25)}, // Used to determine when to give the milestone
            effectDescription: "Unlock Integrated Science. Studying Integrated Science will get credits. Automatically study Integrated Science once per second."
        },
		{
			requirement: new Decimal(40),
			requirementDescription: "Get 40 points",
            unlocked() {return player[this.layer].best.gte(25)},
            done() {return player[this.layer].best.gte(40)}, // Used to determine when to give the milestone
            effectDescription: "Unlock Permanent Upgrades."
        },
		{
			requirement: new Decimal(50),
			requirementDescription: "Get 50 points",
            unlocked() {return player[this.layer].best.gte(40)},
            done() {return player[this.layer].best.gte(50)}, // Used to determine when to give the milestone
            effectDescription: "Unlock more textbooks."
        },
		{
			requirement: new Decimal(70),
			requirementDescription: "Get 70 points",
            unlocked() {return player[this.layer].best.gte(50)},
            done() {return player[this.layer].best.gte(70)}, // Used to determine when to give the milestone
            effectDescription: "Unlock a permanent upgrade."
        },
		{
			requirement: new Decimal(80),
			requirementDescription: "Get 80 points",
            unlocked() {return player[this.layer].best.gte(70)},
            done() {return player[this.layer].best.gte(80)}, // Used to determine when to give the milestone
            effectDescription(){return "Textbook's effect is increased by your points. Currently: ^"+format(player.gk.points.add(10).log10().pow(3).div(80).add(1),4)}
        },
		{
			requirement: new Decimal(100),
			requirementDescription: "Get 100 points",
            unlocked() {return player[this.layer].best.gte(80)},
            done() {return player[this.layer].best.gte(100)}, // Used to determine when to give the milestone
            effectDescription: "Unlock more textbooks."
        },
		{
			requirement: new Decimal(125),
			requirementDescription: "Get 125 points",
            unlocked() {return player[this.layer].best.gte(100)},
            done() {return player[this.layer].best.gte(125)}, // Used to determine when to give the milestone
            effectDescription: "Get more base credit from studying. Unlock a permanent upgrade."
        },
		{
			requirement: new Decimal(150),
			requirementDescription: "Get 150 points",
            unlocked() {return player[this.layer].best.gte(125)},
            done() {return player[this.layer].best.gte(150)}, // Used to determine when to give the milestone
            effectDescription: "Unlock more textbooks."
        },
		{
			requirement: new Decimal(200),
			requirementDescription: "Get 200 points",
            unlocked() {return player[this.layer].best.gte(150)},
            done() {return player[this.layer].best.gte(200)}, // Used to determine when to give the milestone
            effectDescription: "Get more base credit from studying. Unlock a permanent upgrade."
        },
		{
			requirement: new Decimal(255),
			requirementDescription: "Get 255 points",
            unlocked() {return player[this.layer].best.gte(200)},
            done() {return player[this.layer].best.gte(255)}, // Used to determine when to give the milestone
            effectDescription: "Current Endgame"
        },
		],
    resetDescription: "Get ",
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"每一个里程碑都会解锁一些升级。":"Every milestone will unlock some upgrades.")}],
				"milestones"
				],
	branches: ["chi","mat","eng","is","u"],
	canReset(){return layers.gk.getResetGain2().gt(player.gk.points);},
	prestigeButtonText(){
		return (window.chinesemode?"开始高考！你将会得到":"Ready for exam! You will get ")+formatWhole(layers.gk.getResetGain2())+(window.chinesemode?"分。":" points.");
	},
	onPrestige(gain){
		player.chi.points=new Decimal(0);
		player.chi.upgrades=[];
		player.chi.buyables={11: new Decimal(0),12: new Decimal(0),21: new Decimal(0),22: new Decimal(0)};
		player.mat.points=new Decimal(0);
		player.mat.upgrades=[];
		player.mat.buyables={11: new Decimal(0),12: new Decimal(0),21: new Decimal(0),22: new Decimal(0)};
		player.eng.points=new Decimal(0);
		player.eng.upgrades=[];
		player.eng.buyables={11: new Decimal(0),12: new Decimal(0),21: new Decimal(0),22: new Decimal(0)};
		player.is.points=new Decimal(0);
		player.is.upgrades=[];
		player.is.buyables={11: new Decimal(0),12: new Decimal(0),21: new Decimal(0),22: new Decimal(0)};
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
		gain=gain.mul(buyableEffect("chi",11));
		gain=gain.mul(buyableEffect("chi",12));
		gain=gain.mul(buyableEffect("chi",21));
		gain=gain.mul(buyableEffect("chi",22));
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.chi.points.add(5).log10();
		if(hasUpgrade("u",12))ret=ret.mul(1.1).add(1);
		if(hasUpgrade("u",13))ret=ret.mul(1.1).add(1);
		if(ret.gte(90))ret=softcap(ret,90);
		if(ret.gte(150))ret=softcap(ret,150,0);
		if(hasUpgrade("u",11) && ret.lt(50))ret=ret.mul(0.96).add(2);
		if(hasUpgrade("u",11) && ret.lt(20))ret=ret.mul(0.9).add(2);
		if(hasUpgrade("u",11) && ret.lt(10))ret=new Decimal(10);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的语文将会考":"You will get ")+formatWhole(tmp.chi.points)+(window.chinesemode?"分":" points in the Chinese exam.")}],
				"upgrades","buyables"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习语文！":"Study Chinese!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().pow(getBasePointPow()).div(20).add(0.1).mul(getPointMul()));
	},
	upgrades: {
        rows: 1,
        cols: 3,
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
		13: {
            description(){
				return window.chinesemode?"语文能力提升学分获得。":"Chinese ability boost credit gain.";
			},
            cost: new Decimal(5000),
            unlocked() { return player.gk.points.gte(10)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = Decimal.log10(player[this.layer].points.add(10));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
	buyables: {
        rows: 2,
        cols: 2,
            11: {
				title(){
					return window.chinesemode?"语文必修一":"Chinese Textbook 1";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(2, x.pow(1.5)).mul(100)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升语文学习力和获得的学分。当前：":"<br>Increase Chinese studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(10) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            12: {
				title(){
					return window.chinesemode?"语文必修二":"Chinese Textbook 2";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(5, x.pow(1.5)).mul(1e12)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升语文学习力和获得的学分。当前：":"<br>Increase Chinese studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(50) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            21: {
				title(){
					return window.chinesemode?"语文必修三":"Chinese Textbook 3";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(10, x.pow(1.5)).mul(1e30)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升语文学习力和获得的学分。当前：":"<br>Increase Chinese studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(100) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            22: {
				title(){
					return window.chinesemode?"语文必修四":"Chinese Textbook 3";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(20, x.pow(1.5)).mul(1e42)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升语文学习力和获得的学分。当前：":"<br>Increase Chinese studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(150) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
	},
	canReset(){return true},
	update(diff){
		if(player.gk.points.gte(5))player.chi.points=player.chi.points.add(this.getResetGainStable().mul(diff).mul(getAutoSpeed()));
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
		gain=gain.mul(buyableEffect("mat",11));
		gain=gain.mul(buyableEffect("mat",12));
		gain=gain.mul(buyableEffect("mat",21));
		gain=gain.mul(buyableEffect("mat",22));
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.mat.points.add(5).log10();
		if(hasUpgrade("u",12))ret=ret.mul(1.1).add(1);
		if(hasUpgrade("u",13))ret=ret.mul(1.1).add(1);
		if(hasUpgrade("u",14))ret=ret.mul(1.1).add(1);
		if(ret.gte(90))ret=softcap(ret,90);
		if(ret.gte(150))ret=softcap(ret,150,0);
		if(hasUpgrade("u",11) && ret.lt(50))ret=ret.mul(0.96).add(2);
		if(hasUpgrade("u",11) && ret.lt(20))ret=ret.mul(0.9).add(2);
		if(hasUpgrade("u",11) && ret.lt(10))ret=new Decimal(10);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的数学将会考":"You will get ")+formatWhole(tmp.mat.points)+(window.chinesemode?"分":" points in the Math exam.")}],
				"upgrades","buyables"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习数学！":"Study Mathematics!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().pow(getBasePointPow()).div(20).add(0.2).mul(getPointMul()));
	},
	upgrades: {
        rows: 1,
        cols: 4,
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
		13: {
            description(){
				return window.chinesemode?"数学能力提升学分获得。":"Math ability boost credit gain.";
			},
            cost: new Decimal(1e7),
            unlocked() { return player.gk.points.gte(15)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = Decimal.log10(player[this.layer].points.add(10));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		14: {
            description(){
				return window.chinesemode?"数学教材的效果变为原来的1.05次方。":"Effects of math textbooks ^1.05";
			},
            cost: new Decimal(1e52),
            unlocked() { return player.gk.points.gte(150)}, // The upgrade is only visible when this is true
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
	buyables: {
        rows: 2,
        cols: 2,
            11: {
				title(){
					return window.chinesemode?"数学必修一":"Math Textbook 1";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(2, x.pow(1.5)).mul(1000)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
					if(hasUpgrade("mat",14))ret=ret.pow(1.05);
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升数学学习力和获得的学分。当前：":"<br>Increase Math studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(10) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            12: {
				title(){
					return window.chinesemode?"数学必修二":"Math Textbook 2";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(5, x.pow(1.5)).mul(1e14)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    if(hasUpgrade("mat",14))ret=ret.pow(1.05);
					return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升数学学习力和获得的学分。当前：":"<br>Increase Math studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(50) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            21: {
				title(){
					return window.chinesemode?"数学必修三":"Math Textbook 3";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(10, x.pow(1.5)).mul(1e33)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    if(hasUpgrade("mat",14))ret=ret.pow(1.05);
					return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升数学学习力和获得的学分。当前：":"<br>Increase Math studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(100) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            22: {
				title(){
					return window.chinesemode?"数学必修四":"Math Textbook 4";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(20, x.pow(1.5)).mul(1e46)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    if(hasUpgrade("mat",14))ret=ret.pow(1.05);
					return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升数学学习力和获得的学分。当前：":"<br>Increase Math studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(150) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
	},
	canReset(){return player.gk.points.gte(3)},
	update(diff){
		if(player.gk.points.gte(9))player.mat.points=player.mat.points.add(this.getResetGainStable().mul(diff).mul(getAutoSpeed()));
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
		if(hasUpgrade("eng",12))gain=gain.mul(upgradeEffect("eng",12));
		if(hasUpgrade("eng",13))gain=gain.mul(upgradeEffect("eng",13));
		gain=gain.mul(buyableEffect("eng",11));
		gain=gain.mul(buyableEffect("eng",12));
		gain=gain.mul(buyableEffect("eng",21));
		gain=gain.mul(buyableEffect("eng",22));
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.eng.points.add(5).log10();
		if(hasUpgrade("u",12))ret=ret.mul(1.1).add(1);
		if(hasUpgrade("u",13))ret=ret.mul(1.1).add(1);
		if(ret.gte(90))ret=softcap(ret,90);
		if(ret.gte(150))ret=softcap(ret,150,0);
		if(hasUpgrade("u",11) && ret.lt(50))ret=ret.mul(0.96).add(2);
		if(hasUpgrade("u",11) && ret.lt(20))ret=ret.mul(0.9).add(2);
		if(hasUpgrade("u",11) && ret.lt(10))ret=new Decimal(10);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的英语将会考":"You will get ")+formatWhole(tmp.eng.points)+(window.chinesemode?"分":" points in the English exam.")}],
				"upgrades","buyables"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习英语！":"Study English!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().pow(getBasePointPow()).div(20).add(0.3).mul(getPointMul()));
	},
	upgrades: {
        rows: 1,
        cols: 4,
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
		13: {
            description(){
				return window.chinesemode?"语文能力提升英语学习力。":"Chinese ability boost English studying speed.";
			},
            cost: new Decimal(1e5),
            unlocked() { return player.gk.points.gte(12)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.5;
                let ret = Decimal.pow(base,Decimal.log10(player.chi.points.add(1)).pow(0.9));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		14: {
            description(){
				return window.chinesemode?"英语能力提升学分获得。":"English ability boost credit gain.";
			},
            cost: new Decimal(1e23),
            unlocked() { return player.gk.points.gte(80)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = Decimal.log10(player[this.layer].points.add(10));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
	buyables: {
        rows: 2,
        cols: 2,
            11: {
				title(){
					return window.chinesemode?"英语必修一":"English Textbook 1";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(2, x.pow(1.5)).mul(10000)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升英语学习力和获得的学分。当前：":"<br>Increase English studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(10) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            12: {
				title(){
					return window.chinesemode?"英语必修二":"English Textbook 2";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(5, x.pow(1.5)).mul(1e16)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升英语学习力和获得的学分。当前：":"<br>Increase English studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(50) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            21: {
				title(){
					return window.chinesemode?"英语必修三":"English Textbook 3";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(10, x.pow(1.5)).mul(1e36)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升英语学习力和获得的学分。当前：":"<br>Increase English studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(100) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            22: {
				title(){
					return window.chinesemode?"英语必修四":"English Textbook 4";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(20, x.pow(1.5)).mul(1e50)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.5, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升英语学习力和获得的学分。当前：":"<br>Increase English studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(150) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
	},
	canReset(){return player.gk.points.gte(7)},
	update(diff){
		if(player.gk.points.gte(12))player.eng.points=player.eng.points.add(this.getResetGainStable().mul(diff).mul(getAutoSpeed()));
	}
})

addLayer("is", {
    name: "integrated science", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "IS", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00FFFF",
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
    layerShown(){return player.gk.points.gte(25)},
	resetsNothing(){return true},
	autoPrestige(){return false},
	getResetGain(){
		let gain=this.getResetGainStable().mul(1+Math.random());
		return gain;
	},
	getResetGainStable(){
		let gain=new Decimal(1);
		if(hasUpgrade("is",11))gain=gain.mul(upgradeEffect("is",11));
		if(hasUpgrade("is",12))gain=gain.mul(upgradeEffect("is",12));
		if(hasUpgrade("is",13))gain=gain.mul(upgradeEffect("is",13));
		gain=gain.mul(buyableEffect("is",11));
		gain=gain.mul(buyableEffect("is",12));
		gain=gain.mul(buyableEffect("is",21));
		gain=gain.mul(buyableEffect("is",22));
		return gain;
	},
	getNextAt(){return new Decimal(0);},
    resetDescription: "Get ",
	doReset(){},
	points(){
		let ret=player.is.points.add(5).log10().mul(2).sub(1);
		if(hasUpgrade("u",12))ret=ret.mul(1.1).add(1);
		if(hasUpgrade("u",13))ret=ret.mul(1.1).add(1);
		if(hasUpgrade("u",14))ret=ret.mul(1.1).add(1);
		if(ret.gte(180))ret=softcap(ret,180);
		if(ret.gte(300))ret=softcap(ret,300,0);
		if(hasUpgrade("u",11) && ret.lt(50))ret=ret.mul(0.96).add(2);
		if(hasUpgrade("u",11) && ret.lt(20))ret=ret.mul(0.9).add(2);
		if(hasUpgrade("u",11) && ret.lt(10))ret=new Decimal(10);
		return ret.floor();
	},
	tabFormat: ["main-display","prestige-button",
				["display-text",function(){return (window.chinesemode?"你的理综将会考":"You will get ")+formatWhole(tmp.is.points)+(window.chinesemode?"分":" points in the integrated science exam.")}],
				"upgrades","buyables"
				],
	prestigeButtonText(){
		return window.chinesemode?"学习理综！":"Study Integrated Science!";
	},
	onPrestige(gain){
		if(player.gk.points.gte(1))player.points=player.points.add(gain.log10().pow(getBasePointPow()).div(20).add(0.4).mul(getPointMul()));
	},
	upgrades: {
        rows: 1,
        cols: 4,
		11: {
            description(){
				return window.chinesemode?"学分提升理综学习力。":"Credits boost Integrated Science studying speed.";
			},
            cost: new Decimal(1e11),
            unlocked() { return player.gk.points.gte(25)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.5;
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
				return window.chinesemode?"理综能力提升理综学习力。":"Integrated Science ability boost Integrated Science studying speed.";
			},
            cost: new Decimal(5e13),
            unlocked() { return player.gk.points.gte(50)}, // The upgrade is only visible when this is true
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
		13: {
            description(){
				return window.chinesemode?"数学能力提升理综学习力。":"Math ability boost Integrated Science studying speed.";
			},
            cost: new Decimal(1e15),
            unlocked() { return player.gk.points.gte(50)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.5;
                let ret = Decimal.pow(base,Decimal.log10(player.mat.points.add(1)).pow(0.9));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		14: {
            description(){
				return window.chinesemode?"理综能力提升学分获得。":"Integrated Science ability boost credit gain.";
			},
            cost: new Decimal(3e28),
            unlocked() { return player.gk.points.gte(100)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = Decimal.log10(player[this.layer].points.add(10));
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
	buyables: {
        rows: 2,
        cols: 2,
            11: {
				title(){
					return window.chinesemode?"物理必修一":"Physics Textbook 1";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(2, x.pow(1.5)).mul(1e10)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.25, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升理综学习力和获得的学分。当前：":"<br>Increase Integrated Science studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(25) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            12: {
				title(){
					return window.chinesemode?"化学必修一":"Chemistry Textbook 1";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(5, x.pow(1.5)).mul(1e20)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.25, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升理综学习力和获得的学分。当前：":"<br>Increase Integrated Science studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(50) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            21: {
				title(){
					return window.chinesemode?"生物必修一":"Biology Textbook 1";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(10, x.pow(1.5)).mul(1e40)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.25, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升理综学习力和获得的学分。当前：":"<br>Increase Integrated Science studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(100) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
            22: {
				title(){
					return window.chinesemode?"物理必修二":"Physics Textbook 2";
				},
                cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
                    let cost = Decimal.pow(20, x.pow(1.5)).mul(1e55)
                    return cost
                },
                effect() {
					let ret=Decimal.pow(1.25, player[this.layer].buyables[this.id]);
					if(player.gk.points.gte(80))ret=ret.pow(player.gk.points.add(10).log10().pow(3).div(80).add(1));
                    return ret;
                },
                display() { // Everything else displayed in the buyable button after the title
                    let data = tmp[this.layer].buyables[this.id]
                    return (window.chinesemode?"等级：":"Level: ")+format(player[this.layer].buyables[this.id])+
                    (window.chinesemode?"<br>提升理综学习力和获得的学分。当前：":"<br>Increase Integrated Science studying speed and credits gain. Currently: ")+format(data.effect)+"x"+
                    (window.chinesemode?"<br>花费：":"<br>Cost: ")+format(data.cost)+(window.chinesemode?"学分":" Credits");
                },
                unlocked() { return player.gk.points.gte(150) }, 
                canAfford() {
                    return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)	
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {}, // You'll have to handle this yourself if you want
                style: {'height':'222px'},
            },
	},
	canReset(){return player.gk.points.gte(25)},
	update(diff){
		if(player.gk.points.gte(25))player.is.points=player.is.points.add(this.getResetGainStable().mul(diff).mul(getAutoSpeed()));
	}
})

addLayer("a", {
        startData() { return {
            unlocked: true,
        }},
        color: "yellow",
        row: "side",
        layerShown() {return player.gk.points.gte(10)}, 
        tooltip() { // Optional, tooltip displays when the layer is locked
            return window.chinesemode?"成就":"Achievements"
        },
        achievements: {
            rows: 4,
            cols: 4,
            11: {
                name(){return window.chinesemode?"开始必修课程了！":"I started my required course!"},
                done(){return player.chi.buyables[11].gt(0) },
                tooltip(){return window.chinesemode?"购买语文必修一。":"Buy Chinese Textbook 1."},
            },
            12: {
                name(){return window.chinesemode?"及格的十分之一":"1/10 of Pass"},
                done(){return tmp.chi.points.gte(9) },
                tooltip(){return window.chinesemode?"使你的语文成绩达到9分。":"Have a Chinese score of 9."},
            },
            13: {
                name(){return window.chinesemode?"终于知道“力”是什么了！":"I know what is 'Force'!"},
                done(){return player.is.buyables[11].gt(0) },
                tooltip(){return window.chinesemode?"购买物理必修一。":"Buy Physics Textbook 1."},
            },
            14: {
                name(){return window.chinesemode?"满分的十分之一":"1/10 of Perfect"},
                done(){return player.gk.points.gte(75) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到75分。":"Have a total score of 75."},
            },
            21: {
                name(){return window.chinesemode?"见多识广":"More Knowledge"},
                done(){return player.chi.buyables[12].gt(0) },
                tooltip(){return window.chinesemode?"购买语文必修二。":"Buy Chinese Textbook 2."},
            },
            22: {
                name(){return window.chinesemode?"及格的五分之一":"1/5 of Pass"},
                done(){return tmp.chi.points.gte(18) },
                tooltip(){return window.chinesemode?"使你的语文成绩达到18分。":"Have a Chinese score of 18."},
            },
            23: {
                name(){return window.chinesemode?"物质转化":"Matter Conversion"},
                done(){return player.is.buyables[12].gt(0) },
                tooltip(){return window.chinesemode?"购买化学必修一。":"Buy Chemistry Textbook 1."},
            },
            24: {
                name(){return window.chinesemode?"100分是满分吗？":"Is 100 perfect?"},
                done(){return player.gk.points.gte(100) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到100分。":"Have a total score of 100."},
            },
            31: {
                name(){return window.chinesemode?"代数专家":"Algebra Expert"},
                done(){return player.mat.buyables[21].gt(0) },
                tooltip(){return window.chinesemode?"购买数学必修三。":"Buy Math Textbook 3."},
            },
            32: {
                name(){return window.chinesemode?"及格的三分之一":"1/3 of Pass"},
                done(){return tmp.chi.points.gte(30) },
                tooltip(){return window.chinesemode?"使你的语文成绩达到30分。":"Have a Chinese score of 30."},
            },
            33: {
                name(){return window.chinesemode?"原来我是由细胞构成的！":"I realized I have a lot of cells!"},
                done(){return player.is.buyables[21].gt(0) },
                tooltip(){return window.chinesemode?"购买生物必修一。":"Buy Biology Textbook 1."},
            },
            34: {
                name(){return window.chinesemode?"我可以上大学了！":"I can go to an university now!"},
                done(){return player.gk.points.gte(200) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到200分。":"Have a total score of 200."},
            },
            41: {
                name(){return window.chinesemode?"教材爱好者":"Textbook Lover"},
                done(){return getTextbooks()>=15; },
                tooltip(){return window.chinesemode?"购买15本不同的教材。":"Buy 15 Different Textbooks."},
            },
            42: {
                name(){return window.chinesemode?"及格的一半":"1/2 of Pass"},
                done(){return tmp.chi.points.gte(45) },
                tooltip(){return window.chinesemode?"使你的语文成绩达到45分。":"Have a Chinese score of 45."},
            },
            43: {
                name(){return window.chinesemode?"教材收集者":"Textbook Collector"},
                done(){return getTextbooks()>=20; },
                tooltip(){return window.chinesemode?"购买20本不同的教材。":"Buy 20 Different Textbooks."},
            },
            44: {
                name(){return window.chinesemode?"满分的一半":"Half of Perfect"},
                done(){return player.gk.points.gte(375) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到375分。":"Have a total score of 375."},
            },/*
            51: {
                name(){return window.chinesemode?"教辅书爱好者":"Reference Book Lover"},
                done(){return false;player.is.buyables[21].gt(0) },
                tooltip(){return window.chinesemode?"购买3本不同的教辅书。":"Buy 3 Different Reference Books."},
            },
            52: {
                name(){return window.chinesemode?"我及格了！":"I Passed!"},
                done(){return tmp.chi.points.gte(90) },
                tooltip(){return window.chinesemode?"使你的语文成绩达到90分。":"Have a Chinese score of 90."},
            },
            53: {
                name(){return window.chinesemode?"教辅书收集者":"Reference Book Collector"},
                done(){return false;player.is.buyables[21].gt(0) },
                tooltip(){return window.chinesemode?"购买8本不同的教辅书。":"Buy 8 Different Reference Books."},
            },
            54: {
                name(){return window.chinesemode?"我可以上本科大学了！":"I can be an undergraduate student now!"},
                done(){return player.gk.points.gte(500) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到500分。":"Have a total score of 500."},
            },
            61: {
                name(){return window.chinesemode?"我满分了！":"I got a perfect mark!"},
                done(){return tmp.chi.points.gte(150) },
                tooltip(){return window.chinesemode?"使你的语文成绩达到150分。":"Have a Chinese score of 150."},
            },
            62: {
                name(){return window.chinesemode?"老铁666，我可以上C9了！":"Hell Score"},
                done(){return player.gk.points.gte(666) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到666分。":"Have a total score of 666."},
            },
            63: {
                name(){return window.chinesemode?"我可以上清华大学了！":"I can go to Tsinghua University now!"},
                done(){return player.gk.points.gte(700) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到700分。":"Have a total score of 700."},
            },
            64: {
                name(){return window.chinesemode?"我高考满分了！！":"ALL PERFECT MARKS!!"},
                done(){return player.gk.points.gte(750) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到750分。":"Have a total score of 750."},
            },
            71: {
                name(){return window.chinesemode?"政策由我来掌控":"Policy Editor"},
                done(){return false },
                tooltip(){return window.chinesemode?"进行政策点重置。":"Policy Reset."},
            },
            72: {
                name(){return window.chinesemode?"超过满分！":"Above Perfect!"},
                done(){return player.gk.points.gte(751) },
                tooltip(){return window.chinesemode?"使你的高考成绩达到751分。":"Have a total score of 751."},
            },*/
		},
		tabFormat: [
			"blank", 
			["display-text", function() { return (window.chinesemode?"成就：":"Achievements: ")+player.a.achievements.length+"/"+(Object.keys(tmp.a.achievements).length-2) }], 
			"blank", "blank",
			"achievements",
		],
    }, 
)


addLayer("u", {
        startData() { return {
            unlocked: true,
        }},
        color: "#cccccc",
        row: 1,position: 1,
        layerShown() {return player.gk.points.gte(40)}, 
        tooltip() { // Optional, tooltip displays when the layer is locked
            return window.chinesemode?"考试技巧":"Permanent Upgrades"
        },
	upgrades: {
        rows: 1,
        cols: 4,
		11: {
            description(){
				return window.chinesemode?"蒙选择题。当你的单科考试成绩低于50时使它变得更好。":"For each subject, increase your score when score is lower than 50.";
			},
            cost: new Decimal(1e12),
            unlocked() { return player.gk.points.gte(40)}, // The upgrade is only visible when this is true
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		12: {
            description(){
				return window.chinesemode?"仔细审题。你的考试成绩变得更好。":"Increase your exam score.";
			},
            cost: new Decimal(1e16),
            unlocked() { return player.gk.points.gte(70)}, // The upgrade is only visible when this is true
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		13: {
            description(){
				return window.chinesemode?"调整心态。你的考试成绩变得更好。":"Increase your exam score.";
			},
            cost: new Decimal(1e40),
            unlocked() { return player.gk.points.gte(125)}, // The upgrade is only visible when this is true
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
		14: {
            description(){
				return window.chinesemode?"用草稿纸。你的理科考试成绩变得更好。":"Increase your math and integrated science exam score.";
			},
            cost: new Decimal(1e68),
            unlocked() { return player.gk.points.gte(200)}, // The upgrade is only visible when this is true
			currencyDisplayName(){
				return window.chinesemode?"学分":"Credits";
			},
			currencyInternalName:"points"
        },
	},
		tabFormat: [
			"upgrades"
		],
    }, 
)