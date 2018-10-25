$(function() {

    $(".gnb .menu").hide();

    $(".gnb .menu").click(function() {
        $(this).next("ul").slideToggle(300);

        return false;
    });
    // var gnb = $('.gnb .menu_title');
    // var menu = $('.gnb .menu');

    // menu.hide();

    // gnb.on({
    //     mouseover: function() {
    //         $(this).find('.menu').stop()
    //             .slideDown();
    //     },
    //     mouseout: function() {
    //         $(this).find('.menu').stop()
    //             .slideUp();
    //     }
    // });

    $(".logo i").click(function() {
        $('body').scrollTop(0);
        $("#gnb_bg").css("display", "block");
        $('#gnb_bg').css("height", $(document).height());
    });

    $(".user_wrap i").click(function() {
        $("#gnb_bg").css("display", "none");
    });


    $(window).on("resize", function() {

        $("nav").removeAttr("style");
    });

    /* mobile(기술자 페이지) */

    var gnb = $('.m_gnb');
    var menu = $('.m_gnb_list ul');

    menu.hide();

    gnb.on({
        mouseover: function() {
            $(this).find('.m_gnb_list ul').stop()
                .slideDown(200);
        },
        mouseout: function() {
            $(this).find('.m_gnb_list ul').stop()
                .slideUp(200);
        }
    });


    $(".m_title .icon-menu").click(function() {
        $('body').scrollTop(0);
        $(".popup").css("display", "block");
        $('.popup').css("height", $('#content').height());
        $('.popup').css("width", $('#content').width());
    });

    $(".popup .icon-menu").click(function() {
        $(".popup").css("display", "none");
    });

});