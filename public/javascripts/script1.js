var tri = function(obj){
    $(obj.selector+'>canvas').remove();
    var pattern = Trianglify({
            height: obj.height(),
            width: obj.width(),
            cell_size: 45,
            seed: '#333'
        });

    $(obj).append(pattern.canvas());
};

$(window).load(function(){
    tri($('.left'));
});

$(window).resize(function(){
    tri($('.left'));
});