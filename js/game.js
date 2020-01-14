var gameController = (function(){

    var money = 0;

    //data model for Addons
    //function constructor
    var AddOn = function(classname, name, count, cost, MPS, increase, purchased, level, icon){

        this.classname = classname;
        this.name = name;
        this.count = 0;
        this.cost = cost;
        this.MPS = MPS;
        this.increase = increase;
        this.purchased = purchased;
        this.level = level;
        this.icon = icon;

    };
    //function constructor
   var Bakedgood = function(cost, prettycost, MPS, classname, level, purchased) {

       this.cost = cost;
       this.prettycost = prettycost;
       this.MPS = MPS;
       this.classname = classname;
       this.level = level;
       this.purchased = purchased;
   };

    return{

        addUpgrade: function(classname, name, count, cost, MPS, increase, purchased, level, icon){

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

        },

        addBakery: function(cost, prettycost, MPS, classname, level, purchased){
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
        },

        getMoney: function(){
            return money;
        },

        testing: function(){
            console.log(money);
        }

    }


})();

var UIController = (function(){

    var Domstrings = {

        clickIcon: 'cupcake'

    };

    return{

        getinput : function(){

        },

        getDomstrings: function(){
            return Domstrings;
        }

    };


})();


var controller = (function(gameCtrl, UICtrl){

    //this is for all the dom elements and event listeners
    var setupEventListeners = function(){

        var DOM = UICtrl.getDomstrings();

        document.getElementById(DOM.clickIcon).addEventListener('click', ctrlAddClick);

    };


    var ctrlAddClick = function(){

        var money;


        money = gameCtrl.getMoney();

        //1. iterate the clic
        //2. add the amount to the game controller


        //3. add the total to user interface
        //4. calculate amount of clicks
        //5. show amount of clicks
    };

    return{
        init: function(){

            console.log('appliation has started');
            setupEventListeners();
        }
    }

})(gameController, UIController);

controller.init();
