$(document).ready(function(){

    var cupcake = '#cupcake-img';
    var hideblock = '#addons-block';

        $(cupcake).click(function() {

            $(cupcake).addClass("grow");

                $(cupcake).on('transitionend', function () {
                    if ($(cupcake).hasClass("grow")) {

                        $(cupcake).removeClass("grow");
                    }
                })

    });

        /*
    $(function() {
        if (parseInt($("cost").text(), 10) <= parseInt($("moneyAmount").text(), 10)) {
            $("add-on-container").removeClass("no-money");
        } else if ($('add-on-container').not('no-money') && (parseInt($("cost").text(), 10) <= parseInt($("moneyAmount").text(), 10))) {
            $("add-on-container").addClass("no-money");
        }
    });*/

});