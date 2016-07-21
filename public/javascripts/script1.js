var tri = function(obj){
    if(obj.children.length > 0 && obj.children[0].tagName === 'CANVAS'){
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
};

window.onresize = function(){
    tri(document.querySelector('.left'));
};