$(function() {

    var tri = function(obj){
        if(obj.children.length >0 && obj.children[0].tagName === 'CANVAS'){
            obj.removeChild(obj.children[0]);
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
        $('.named').width($('.left').width());
    };

    window.onresize = function(){
        tri(document.querySelector('.left'));
        $('.named').width($('.left').width());
    };

    $('.nav-link').click(function(event){
        event.preventDefault();
        $('#nav-toggle').click();
        $('html, body').animate({
            scrollTop: $(this.getAttribute("href")).offset().top
        }, 500);
        return false;
    });

    $('#fixed-nav').show();

    $('#scotch-panel').scotchPanel({
        containerSelector: '#site-wrapper',
        direction: 'right',
        duration: 400,
        transition: 'ease',
        clickSelector: '.toggle-panel',
        distanceX: '40%',
        enableEscapeKey: true,

        beforePanelOpen: function() {
            $('header, .out').css({
                '-moz-transform': 'translate3d(-40%, 0, 0)',
                '-ms-transform': 'translate3d(-40%, 0, 0)',
                '-o-transform': 'translate3d(-40%, 0, 0)',
                '-webkit-transform': 'translate3d(-40%, 0, 0)',
                'transform': 'translate3d(-40%, 0, 0)',
                'transition': 'all 400ms ease'
            });
        },
        beforePanelClose: function() {
            $('header, .out').css({
                '-moz-transform': 'translate3d(0, 0, 0)',
                '-ms-transform': 'translate3d(0, 0, 0)',
                '-o-transform': 'translate3d(0, 0, 0)',
                '-webkit-transform': 'translate3d(0, 0, 0)',
                'transform': 'translate3d(0, 0, 0)',
                'transition': 'all 400ms ease'
            });
        }
    });

});