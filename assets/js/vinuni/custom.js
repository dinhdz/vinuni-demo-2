$(document).ready(function () {
    $(window).scroll(function (e) {
        if (100 > $(window).scrollTop()) {
            $("#global-nav").removeClass("affix").addClass("affix-top");
            $("#main-menu-mobile").removeClass("affix").addClass("affix-top");
        } else {
            $("#global-nav").removeClass("affix-top").addClass("affix");
            $("#main-menu-mobile").removeClass("affix-top").addClass("affix");
            if ($("#main-menu-mobile").hasClass('close-menu')) {
                $("div#main-menu-mobile.affix").css('top', ($("#global-nav").height() + 70) + "px");
            }
        }
    });
});
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
$('#share').click(function () {
    $("#share-social").slideToggle("fast");
});

$('#main-menu-mobile').click(
    function (e) {
        $("#global-nav").slideToggle("fast").show();
        if ($(this).hasClass('close-menu')) {
            $(this).removeClass('close-menu');
            $(this).html('<a><i class="fa fa-bars" aria-hidden="true"></i> Menu</a></div>');
            $("div#main-menu-mobile.affix").css('top', (70) + "px");
        } else {
            $(this).addClass('close-menu');
            $(this).html('<a><i class="fa fa-times" style="color:red;" aria-hidden="true"></i> Close Menu</a></div>');
            $("#main-menu-mobile.affix").css('top', ($("#global-nav").height() + 70) + "px");

        }
    }
);

$(".sf-menu li").hover(function () {
    $(this).addClass("sfHover");
},
    function () {
        $(this).removeClass("sfHover");
    });

$('.ui.text.menu a.item').click(function (e) {
    $('.ui.text.menu a.item.active').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
});