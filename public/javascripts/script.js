$(function() {

    $('#scotch-panel').scotchPanel({
        containerSelector: '#site-wrapper',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        distanceX: '30%',
        enableEscapeKey: true,

        beforePanelOpen: function() {
            $('header').css({
                '-moz-transform': 'translate3d(-30%, 0, 0)',
                '-ms-transform': 'translate3d(-30%, 0, 0)',
                '-o-transform': 'translate3d(-30%, 0, 0)',
                '-webkit-transform': 'translate3d(-30%, 0, 0)',
                'transform': 'translate3d(-30%, 0, 0)'
            });
        },
        beforePanelClose: function() {
            $('header').css({
                '-moz-transform': 'translate3d(0, 0, 0)',
                '-ms-transform': 'translate3d(0, 0, 0)',
                '-o-transform': 'translate3d(0, 0, 0)',
                '-webkit-transform': 'translate3d(0, 0, 0)',
                'transform': 'translate3d(0, 0, 0)'
            });
        }
    });

});