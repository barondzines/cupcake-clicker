$(document).ready(function(){

    var cupcake = '#cupcake-img';

        $(cupcake).click(function() {

            $(cupcake).addClass("grow");

                $(cupcake).on('transitionend', function () {
                    if ($(cupcake).hasClass("grow")) {

                        $(cupcake).removeClass("grow");
                    }
                })

    });



});