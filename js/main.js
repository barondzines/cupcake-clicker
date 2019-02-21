var moneyClicks = 0;

var prestige = 0;

function AddOn(classname, name, count, cost, MPS, increase, icon){

    this.classname = classname;
    this.name = name;
    this.count = 0;
    this.cost = cost;
    this.MPS = MPS;
    this.increase = increase;
    this.icon = icon;

    this.frontEndButton = function(){

        document.getElementById(this.classname+"Addon").innerHTML = "<span class='numberCount'>" + this.count + "</span>" + "<span class='name'>" + this.name + "</span>";
        document.getElementById(this.classname+"MPS").innerHTML = "<span class='persec'>Total</span> $" + this.count * this.MPS + "<span class='persec'> Per Sec</span>";
        document.getElementById(this.classname+"addMPS").innerHTML = "+ $" + this.MPS + "<span class='persec'> CPS </span>";
        document.getElementById(this.classname+"addonCost").innerHTML = formatter.format(this.cost);
        document.getElementById(this.classname+"icon").classList.add(this.icon+'-icon');

    }


}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});


let bakers       = new AddOn("bakers",      "Bakers",                0, 10, 1, 2, "bakers");
let salesman     = new AddOn("salesman",    "Salesman",              0, 100, 2, 2, "salesman");
let store        = new AddOn("store",       "Store",                 0, 1100, 5, 3, "store");
let factory      = new AddOn("factory",     "Factory",               0, 12000, 10, 4, "bakers");
let corporate    = new AddOn("corporate",   "Corporate Office",      0, 130000, 15, 5, "bakers");
let research     = new AddOn("research",    "Research Facility",     0, 1400000, 20, 6, "bakers");
let moonbase     = new AddOn("moonbase",    "Mooon Base",            0, 20000000, 50, 10, "bakers");
let galactic     = new AddOn("galactic",    "Galactic Empire",       0, 330000000, 100, 10, "bakers");
let space        = new AddOn("space",       "Space Station",         0, 51000000000, 200, 10, "bakers");
let transporter  = new AddOn("transporter", "Transporter",           0, 75000000000, 300, 10, "bakers");
let blackhole    = new AddOn("blackhole",   "Black Hole",            0, 1000000000000, 500, 10, "bakers");
let timemachine  = new AddOn("timemachine", "Time Machine",          0, 14000000000000, 1000, 10, "bakers");

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

function CupCake(cost, prettycost, MPS, classname, lvl, purchased){

    this.cost = cost;
    this.prettycost = prettycost;
    this.MPS = MPS;
    this.classname = classname;
    this.lvl = lvl;
    this.purchased = purchased;

    //this.lvl = lvl;
    //this.icon = icon;

    this.cupcakeIcon = function(){
        document.getElementById(this.classname+"cupcake-icon").classList.add(this.classname);
        //document.getElementById(this.classname+"cupcake-icon").innerHTML = "<p> " + formatter.format(this.cost) + "</p>";
        document.getElementById(this.classname+"cupcake-icon").innerHTML = "<p> " + this.prettycost + "</p>";
    };
}

let standard = new CupCake(0, "Free", 0, "standard", 0, 1);
let bronze   = new CupCake(500, "$500", 1, "bronze", 0, 0);
let silver   = new CupCake(1200,"$1200", 2, "silver", 0, 0);
let gold     = new CupCake(13000, "$13K", 3, "gold", 0, 0);
let platinum = new CupCake(140000, "$140K", 4, "platinum", 0, 0);
let ghost    = new CupCake(2000000, "$200K", 5, "ghost", 0, 0);
let monster  = new CupCake(33000000, "$33M", 6, "monster", 0, 0);
let cyborg   = new CupCake(5100000000, "$5.1B", 7, "cyborg", 0, 0);
let magic    = new CupCake(75000000000, "$75B", 8, "magic", 0, 0);
let crystal  = new CupCake(1000000000000, "$1T", 9, "crystal", 0, 0);
let marble   = new CupCake(14000000000000, "$14T", 10, "marble", 0, 0);
let zombie   = new CupCake(20000000000000, "$20T", 11, "zombie", 0, 0);

function buyCupcake(CupCake){


    if (moneyClicks >= CupCake.cost && CupCake.purchased <= 0) {

        document.getElementById("cupcake-img").className = '';
        document.getElementById("cupcake-img").classList.add(CupCake.classname);
        document.getElementById(CupCake.classname + "cupcake-icon").classList.remove("shadow-cupcake");
        CupCake.lvl++;
        CupCake.purchased++;
        moneyClicks -= CupCake.cost;


    } else if(CupCake.purchased > 0) {

        document.getElementById("cupcake-img").className = '';
        document.getElementById("cupcake-img").classList.add(CupCake.classname);



    } else {

        alert("You Don't have enough money");

    }


}

function cupCakeMPS(){

    moneyClicks += standard.lvl      * standard.MPS;
    moneyClicks += bronze.lvl        * bronze.MPS;
    moneyClicks += silver.lvl        * silver.MPS;
    moneyClicks += gold.lvl          * gold.MPS;
    moneyClicks += platinum.lvl      * platinum.MPS;
    moneyClicks += ghost.lvl         * ghost.MPS;
    moneyClicks += monster.lvl       * monster.MPS;
    moneyClicks += cyborg.lvl        * cyborg.MPS;
    moneyClicks += magic.lvl         * magic.MPS;
    moneyClicks += crystal.lvl       * crystal.MPS;
    moneyClicks += marble.lvl        * marble.MPS;
    moneyClicks += zombie.lvl        * zombie.MPS;

}


function moneyClicked() {

    moneyClicks++;
    //buttonavailable();

}



var moneyProducerTimer = setInterval(function(){

    moneyProducers();
    cupCakeMPS();


}, 1000);

var moneyClickerTimer = setInterval(function(){

    updateMoney();


}, 100);

function updateMoney() {

    var moneyPerSecond =
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
        standard.lvl      * standard.MPS+
        bronze.lvl        * bronze.MPS+
        silver.lvl        * silver.MPS+
        gold.lvl          * gold.MPS+
        platinum.lvl      * platinum.MPS+
        ghost.lvl         * ghost.MPS+
        monster.lvl       * monster.MPS+
        cyborg.lvl        * cyborg.MPS+
        magic.lvl         * magic.MPS+
        crystal.lvl       * crystal.MPS+
        marble.lvl        * marble.MPS+
        zombie.lvl        * zombie.MPS;

    document.getElementById("moneyPerSecond").innerHTML     = "$" + moneyPerSecond + " per sec";
    document.getElementById("moneyAmount").innerHTML        = formatter.format(moneyClicks);

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
    standard.cupcakeIcon();
    zombie.cupcakeIcon();
    bronze.cupcakeIcon();
    silver.cupcakeIcon();
    gold.cupcakeIcon();
    platinum.cupcakeIcon();
    ghost.cupcakeIcon();
    monster.cupcakeIcon();
    cyborg.cupcakeIcon();
    magic.cupcakeIcon();
    crystal.cupcakeIcon();
    marble.cupcakeIcon();


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