$(document).ready(function($) {
        $(".jumper1").on("click", function(e) {
            e.preventDefault();
            $("body").animate({
                scrollTop: $("#js-landing-page").offset().top - 100
            }, 600);
        });
    });

$(document).ready(function($) {
        $(".jumper2").on("click", function(e) {
            e.preventDefault();
            $("body").animate({
                scrollTop: $("#js-work-page").offset().top - 100
            }, 600);
        });
    });

$(document).ready(function($) {
        $(".jumper3").on("click", function(e) {
            e.preventDefault();
            $("body").animate({
                scrollTop: $("#js-benefits-page").offset().top - 100
            }, 600);
        });
    });
$(document).ready(function($) {
        $(".jumper4").on("click", function(e) {
            e.preventDefault();
            $("body").animate({
                scrollTop: $("#js-platform").offset().top - 100
            }, 600);
        });
    });
$(document).ready(function($) {
        $(".jumper5").on("click", function(e) {
            e.preventDefault();
            $("body").animate({
                scrollTop: $("#js-footer").offset().top - 100
            }, 600);
        });
});

$(document).ready(function() {
    $('.robot-neo-info').append('<p>My name is Neo.</p>').delay(1000).queue(function (next) {
        $('.robot-anna-info').append("<p>My name is Anna.</p>");
        next();
    }).delay(1000).queue(function (next) {
        $('.robot-neo-info').append("<p>I am your finacial biot.</p>");
        next();
    }).delay(1000).queue(function (next) {
        $('.robot-anna-info').append("<p>I am your technical Assisant.</p>");
        next();
    }).delay(1000).queue(function (next) {
        $('.robot-neo-info').append("<p>I am already trained to handle BFSI queries.</p>");
        next();
    }).delay(1000).queue(function (next) {
        $('.robot-anna-info').append("<p>I can resolve customer queries easily.</p>");
        next();
    });
// $(".robot-neo-info").delay(800).append("<p class='add-text'>My name is Neo.</p>");
// $('.robot-anna-info').delay(2000).append("<p class='add-text2'>My name is Anna.</p>");
// $('.robot-neo-info').append('<p>I am your finacial biot.</p>');
// $('.robot-anna-info').append('<p>c.</p>');
// $('.robot-neo-info').append('<p>I am already trained to handle BFSI queries.</p>');
// $('.robot-anna-info').append('<p>I can resolve customer queries easily.</p>');
});

