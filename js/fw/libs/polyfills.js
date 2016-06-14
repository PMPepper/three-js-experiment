try{
    window.requestAnimFrame = (function(callback){
        return window['requestAnimationFrame'] ||
        window['webkitRequestAnimationFrame'] ||
        window['mozRequestAnimationFrame'] ||
        window['oRequestAnimationFrame'] ||
        window['msRequestAnimationFrame'] ||
        function(callback){
            window['setTimeout'](callback, 1000 / 60 );
        };
    })();
}catch(e){}//suppress error