var moneyClicks = 0;
var currentLvl = 0;
var prestige = 0;
var level = 0;
var cost = 100;
var increase = 5;
var scps = 1;

function Building(image, level, cps, name, count){

    this.image = image;
    this.level = level;
    this.cps = cps;
    this.name =  name;
    this.count = count;

    this.frontBuilding = function(){

        document.getElementById("bldLevel").innerHTML = "<span class='current-lvl'> Current Bakery Level: " + currentLvl + "</span> <span class='nxt-lvl'> Next Lvl Cost: " + cost + "</span>";
    }
}


function upgradeBuildingLvl(Building){

    if (moneyClicks >= cost && Building.level <= currentLvl) {

        document.getElementById("building-img").classList.add(Building.name);
        /*document.getElementById("bldLevel").onclick = function () {
            upgradeBuildingLvl(Building.name)
        };*/
        //ToDo find a way to choose the image and or setting for the building
        moneyClicks -= cost;
        Building.count++;
        level++;
        cost = Math.round(cost * increase);
        currentLvl++;

        alert("current Level:" + currentLvl + "Building Name:" + Building.name + cost);


    } else {

        alert("you have no money");
    }

}

let starter = new Building("bakery", 0, 0, "bakery", 0);
let double = new Building("double", 10, 1, "double", 0);

function AddOn(classname, name, count, cost, MPS, increase, purchased, level, icon){

    this.classname = classname;
    this.name = name;
    this.count = 0;
    this.cost = cost;
    this.MPS = MPS;
    this.increase = increase;
    this.purchased = purchased;
    this.level = level;
    this.icon = icon;


    this.frontEndButton = function(){

        document.getElementById(this.classname+"Addon").innerHTML = "<span class='numberCount'>" + this.count + "</span>" + "<span class='name'>" + this.name + "</span>";
        document.getElementById(this.classname+"MPS").innerHTML = "<span class='persec'>Total</span> $" + this.count * this.MPS + "<span class='persec'> Per Sec</span>";
        document.getElementById(this.classname+"addMPS").innerHTML = "+ $" + this.MPS + "<span class='persec'> CPS </span>";
        document.getElementById(this.classname+"addonCost").innerHTML = "$" + "<span class='inner-cost'>" + this.cost + "</span>" ;
        document.getElementById(this.classname+"icon").classList.add(this.icon+'-icon');


    };

}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});



let bakers       = new AddOn("bakers",      "Bakers",                0, 10, 1, 2, 0, 0, "bakers");
let salesman     = new AddOn("salesman",    "Salesman",              0, 100, 2, 2, 0, 0, "salesman");
let store        = new AddOn("store",       "Store",                 0, 1100, 5, 3, 0, 0, "store");
let factory      = new AddOn("factory",     "Factory",               0, 12000, 10, 4, 0, 0, "bakers");
let corporate    = new AddOn("corporate",   "Corporate Office",      0, 130000, 15, 5, 0, 0, "bakers");
let research     = new AddOn("research",    "Research Facility",     0, 1400000, 20, 6, 0, 0, "bakers");
let moonbase     = new AddOn("moonbase",    "Mooon Base",            0, 20000000, 50, 10, 0, 0, "bakers");
let galactic     = new AddOn("galactic",    "Galactic Empire",       0, 330000000, 100, 10, 0, 0, "bakers");
let space        = new AddOn("space",       "Space Station",         0, 51000000000, 200, 10, 0, 0, "bakers");
let transporter  = new AddOn("transporter", "Transporter",           0, 75000000000, 300, 10, 0, 0, "bakers");
let blackhole    = new AddOn("blackhole",   "Black Hole",            0, 1000000000000, 500, 10, 0, 0, "bakers");
let timemachine  = new AddOn("timemachine", "Time Machine",          0, 14000000000000, 1000, 10, 0, 0, "bakers");

function newBuyClick(AddOn){

    if (moneyClicks >= AddOn.cost){
        AddOn.count++;
        moneyClicks -= AddOn.cost;
        AddOn.cost = Math.round(AddOn.cost * AddOn.increase);

    } else {
        alert("This is the new no money alert");
        //ToDo take display none off of popup
        //ToDo and then adding alert via document get element by
    }
}

function BakeGood(cost, prettycost, MPS, classname, lvl, purchased){

    this.cost = cost;
    this.prettycost = prettycost;
    this.MPS = MPS;
    this.classname = classname;
    this.lvl = lvl;
    this.purchased = purchased;

    this.cupcakeIcon = function(){
        document.getElementById(this.classname+"-icon").classList.add(this.classname);
        //document.getElementById(this.classname+"cupcake-icon").innerHTML = "<p> " + formatter.format(this.cost) + "</p>";
        document.getElementById(this.classname+"-icon").innerHTML = "<p> " + this.prettycost + "</p>";
    };
}

let cupcake       = new BakeGood(0, "Free", 0, "cupcake", 0, 1);
let macaron       = new BakeGood(500, "$500", 1, "macaron", 0, 0);
let roll          = new BakeGood(1200,"$1200", 2, "roll", 0, 0);
let donuthole     = new BakeGood(13000, "$13K", 3, "donuthole", 0, 0);
let donut         = new BakeGood(140000, "$140K", 4, "donut", 0, 0);
let bread         = new BakeGood(2000000, "$200K", 5, "bread", 0, 0);
let pudding       = new BakeGood(33000000, "$33M", 6, "pudding", 0, 0);
let tart          = new BakeGood(5100000000, "$5.1B", 7, "tart", 0, 0);
let custard       = new BakeGood(75000000000, "$75B", 8, "custard", 0, 0);
let pie           = new BakeGood(1000000000000, "$1T", 9, "pie", 0, 0);
let cannole       = new BakeGood(14000000000000, "$14T", 10, "cannole", 0, 0);
let cake          = new BakeGood(20000000000000, "$20T", 11, "cake", 0, 0);


function buyCupcake(BakeGood){


    if (moneyClicks >= BakeGood.cost && BakeGood.purchased <= 0) {

        document.getElementById(BakeGood.classname + "-icon").classList.remove("shadow" + BakeGood.classname);
        BakeGood.lvl++;
        BakeGood.purchased++;
        moneyClicks -= BakeGood.cost;


    }  else {

        alert("You Don't have enough money");

    }


}

function cupCakeMPS(){

    moneyClicks += cupcake.lvl     * cupcake.MPS;
    moneyClicks += macaron.lvl     * macaron.MPS;
    moneyClicks += roll.lvl        * roll.MPS;
    moneyClicks += donuthole.lvl   * donuthole.MPS;
    moneyClicks += donut.lvl       * donut.MPS;
    moneyClicks += bread.lvl       * bread.MPS;
    moneyClicks += pudding.lvl     * pudding.MPS;
    moneyClicks += tart.lvl        * tart.MPS;
    moneyClicks += custard.lvl     * custard.MPS;
    moneyClicks += pie.lvl         * pie.MPS;
    moneyClicks += cannole.lvl     * cannole.MPS;
    moneyClicks += cake.lvl        * cake.MPS;

}

function buttonAvailable(){


    var money = parseInt($('#inner-moneyAmount').text(), 10);
    //var upgradecost = document.getElementById("cost");


    $('.add-on-container').each(function(){

       var upgradeCost = parseInt($(this).find(".inner-cost").text(), 10);


      if(money >= upgradeCost){

           $(this).removeClass('no-money');

       } else{

          $(this).addClass('no-money');

      }

    });

}



function moneyClicked() {
    moneyClicks++;
    buttonAvailable();

}



var moneyProducerTimer = setInterval(function(){

    moneyProducers();
    cupCakeMPS();



}, 1000);

var moneyClickerTimer = setInterval(function(){

    updateMoney();
    //updateLvl();
    buttonAvailable();


}, 100);

function updateMoney() {

    let moneyPerSecond =
        bakers.count      * bakers.MPS +
        salesman.count    * salesman.MPS +
        store.count       * store.MPS +
        factory.count     * factory.MPS +
        corporate.count   * corporate.MPS +
        research.count    * research.MPS +
        moonbase.count    * moonbase.MPS +
        galactic.count    * galactic.MPS +
        space.count       * space.MPS +
        transporter.count * transporter.MPS +
        blackhole.count   * blackhole.MPS +
        timemachine.count * timemachine.MPS +
        cupcake.lvl       * cupcake.MPS +
        macaron.lvl       * macaron.MPS +
        roll.lvl          * roll.MPS +
        donuthole.lvl     * donuthole.MPS +
        donut.lvl         * donut.MPS +
        bread.lvl         * bread.MPS +
        pudding.lvl       * pudding.MPS +
        tart.lvl          * tart.MPS +
        custard.lvl       * custard.MPS +
        pie.lvl           * pie.MPS +
        cannole.lvl       * cannole.MPS +
        cake.lvl          * cake.MPS;


    let clicksPerSecond = scps +
        starter.count * starter.cps +
        double.count  * double.cps;

    document.getElementById("counting").innerHTML = "<span>" + clicksPerSecond + "</span>";
    document.getElementById("moneyPerSecond").innerHTML     = "$" + moneyPerSecond + " per sec";
    document.getElementById("moneyAmount").innerHTML        = "$ " + "<span id='inner-moneyAmount'>" + moneyClicks + "</span>";


    bakers.frontEndButton();
    salesman.frontEndButton();
    store.frontEndButton();
    factory.frontEndButton();
    corporate.frontEndButton();
    research.frontEndButton();
    moonbase.frontEndButton();
    galactic.frontEndButton();
    space.frontEndButton();
    transporter.frontEndButton();
    blackhole.frontEndButton();
    timemachine.frontEndButton();

    starter.frontBuilding();
    double.frontBuilding();


}


function moneyProducers(){

    moneyClicks += bakers.count      * bakers.MPS;
    moneyClicks += salesman.count    * salesman.MPS;
    moneyClicks += store.count       * store.MPS;
    moneyClicks += factory.count     * factory.MPS;
    moneyClicks += corporate.count   * corporate.MPS;
    moneyClicks += research.count    * research.MPS;
    moneyClicks += moonbase.count    * moonbase.MPS;
    moneyClicks += galactic.count    * galactic.MPS;
    moneyClicks += space.count       * space.MPS;
    moneyClicks += transporter.count * transporter.MPS;
    moneyClicks += blackhole.count   * transporter.MPS;
    moneyClicks += timemachine.count * timemachine.MPS;

}

function gameAddOns(){


    bakers.frontEndButton();
    salesman.frontEndButton();
    store.frontEndButton();
    factory.frontEndButton();
    corporate.frontEndButton();
    research.frontEndButton();
    moonbase.frontEndButton();
    galactic.frontEndButton();
    space.frontEndButton();
    transporter.frontEndButton();
    blackhole.frontEndButton();
    timemachine.frontEndButton();

    //below are the cupcakes
    cupcake.cupcakeIcon();
    macaron.cupcakeIcon();
    roll.cupcakeIcon();
    donuthole.cupcakeIcon();
    donut.cupcakeIcon();
    bread.cupcakeIcon();
    pudding.cupcakeIcon();
    tart.cupcakeIcon();
    custard.cupcakeIcon();
    pie.cupcakeIcon();
    cannole.cupcakeIcon();
    cake.cupcakeIcon();

    starter.frontBuilding();


}

/* save function needs to be fixed */

/*
function save(){

    var save = {
        money:moneyClicks,
        bakers: bakers,
        bakersCost: bakersCost,
        salesman:salesman,
        salesmanCost:salesmanCost,
        store:store,
        storeCost:storeCost,
        prestige: prestige
    };

    localStorage.setItem("save",JSON.stringify(save));
}


function load(){

    var savegame = JSON.parse(localStorage.getItem("save"));

    if (typeof savegame.bakers !== "undefined") bakers = savegame.bakers;
    if (typeof savegame.bakersCost !== "undefined") bakersCost = savegame.bakersCost;

    if (typeof savegame.salesman !== "undefined") salesman = savegame.salesman;
    if (typeof savegame.salesmanCost !== "undefined") salesmanCost = savegame.salesmanCost;

    if (typeof savegame.store !== "undefined") store = savegame.store;
    if (typeof savegame.storeCost !== "undefined") storeCost = savegame.storeCost;
}

function deleteSave(){

    localStorage.removeItem("save")
}*/
