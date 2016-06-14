//Key.js
var Key = (function(global){
    var keys = [],
        oldKeys = [];
    
    function update(){
        var i, l;
        for( i = 0; i < l; i++ ){
            oldKeys[i] = keys[i];
        }
        
        requestAnimationFrame(update);
    }
    
    update();//start update loop
    
    //TODO detect window focus loss
    
    global.addEventListener( 'keydown', function(e){
        var key = e.keyCode || e.which;
        keys[key] = true;
    } );
    
    global.addEventListener( 'keyup', function(e){
        var key = e.keyCode || e.which;
        
        keys[key] = false;
    } );
    
    return {
        isDown:function(key){
            return !!keys[key];
        },
        isUp:function(key){
            return !!!keys[key];
        },
        isPressed:function(key){
            return !!keys[key] && !oldKeys[key];
        },
        isReleased:function(key){
            return !keys[key] && !!oldKeys[key];
        }
    };
})(this);