$(document).ready(function(){
    let bakeGood = '#building-img';
    let hideblock = '#addons-block';
    let countDiv = '#counting';
    let buildingDiv = "#building-img";

        $(bakeGood).click(function() {

            $(bakeGood).addClass("grow");

                $(bakeGood).on('transitionend', function () {
                    if ($(bakeGood).hasClass("grow")) {

                        $(bakeGood).removeClass("grow");
                    }
                })

        });

    $.fn.digits = function(){
        return this.each(function(){
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
        })
    };

    $('.money-mask').digits();

    $(document).foundation();

    $(buildingDiv).click(function() {

        $(countDiv).addClass("count-top");

        $(countDiv).on('transitionend', function () {

            if ($(countDiv).hasClass("count-top")) {

                $(countDiv).removeClass("count-top");
            }
        })

    });


});



