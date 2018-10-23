$(function() {


    var gnb = $('.gnb .menu_title');
    var menu = $('.gnb .menu');

    menu.hide();

    gnb.on({
        mouseover: function() {
            $(this).find('.menu').stop()
                .slideDown(200);
        },
        mouseout: function() {
            $(this).find('.menu').stop()
                .slideUp(200);
        }
    });

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


    $("div.m_title .icon-menu").click(function() {
        $('body').scrollTop(0);
        $(".popup").css("display", "block");
        $('.popup').css("height", $('div.mobile_main').height());
        $('.popup').css("width", $('div.mobile_main').width());
    });

    $("div.popup .icon-menu").click(function() {
        $(".popup").css("display", "none");
    });

});