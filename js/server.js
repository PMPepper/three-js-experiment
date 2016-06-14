//#require com.asliceofcrazypie.three.engine.server.Engine
//#require vendor.stacktrace


function trace( obj ){
    if( obj instanceof Ammo.btVector3 ){
        console.log( 'btVector3: '+obj.x()+', '+obj.y()+', '+obj.z() );
    } else if( obj instanceof Ammo.btQuaternion ){
        console.log( 'btQuaternion: '+obj.x()+', '+obj.y()+', '+obj.z()+', '+obj.w() );
    } else if( obj instanceof THREE.Quaternion ){
        console.log( 'THREE.Quaternion: '+obj.x+', '+obj.y+', '+obj.z+', '+obj.w );
    } else {
        var str = '';
        
        for( var s in obj ){
            str += ', ' + s;
        }
        
        console.log( str );
    }
}


(function( global ){
    
    try{
        var EngineClass = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.Engine' );
        var engine = new EngineClass( global );
    }
    catch(e){
        var trace = printStackTrace({e: e});
        
        console.log( trace );
    }
    
    global.onerror = function() {
        
        var trace = printStackTrace({e: e});
        
        console.log( trace );
        console.log( arguments );
    };
    
    global.Server = engine;
})(this);