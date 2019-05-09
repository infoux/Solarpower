$(function() {


    var gnb = $('.gnb>li');
    var menu = $('.m_gnb_list ul');

    menu.hide();



    gnb.on({
        click: function() {
            menu.stop()
                .slideUp(200);

            $(this).find(menu).stop()
                .slideDown(200);
        }
    });


    $("header button.menu").click(function() {
        $('body').scrollTop(0);
        $('nav.mainMenu').addClass("on");

    });
    $("nav.mainMenu button.closeMenu").click(function() {
        $('body').scrollTop(0);
        $('nav.mainMenu').removeClass("on");

    });

});