$(function() {

    var tri = function(obj){
        if(obj.children.length >= 2 && obj.children[1].tagName === 'CANVAS'){
            obj.removeChild(obj.children[1]);
        }
        var pattern = Trianglify({
            height: obj.clientHeight,
            width: obj.clientWidth,
            cell_size: 45,
            seed: '#f20a41'
        });

        obj.appendChild(pattern.canvas());
    };

    window.onload = function(){
        tri(document.querySelector('.left'));
    };

    window.onresize = function(){
        tri(document.querySelector('.left'));
    };

    $('#scotch-panel').scotchPanel({
        containerSelector: '#site-wrapper',
        direction: 'right',
        duration: 300,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        distanceX: '30%',
        enableEscapeKey: true,

        beforePanelOpen: function() {
            $('header, .out').css({
                '-moz-transform': 'translate3d(-30%, 0, 0)',
                '-ms-transform': 'translate3d(-30%, 0, 0)',
                '-o-transform': 'translate3d(-30%, 0, 0)',
                '-webkit-transform': 'translate3d(-30%, 0, 0)',
                'transform': 'translate3d(-30%, 0, 0)',
                'transition': 'all 300ms ease'
            });
        },
        beforePanelClose: function() {
            $('header, .out').css({
                '-moz-transform': 'translate3d(0, 0, 0)',
                '-ms-transform': 'translate3d(0, 0, 0)',
                '-o-transform': 'translate3d(0, 0, 0)',
                '-webkit-transform': 'translate3d(0, 0, 0)',
                'transform': 'translate3d(0, 0, 0)',
                'transition': 'all 300ms ease'
            });
        }
    });

});