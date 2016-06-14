/**
 * abstract base class for controllers
 * @author P M Pepper
 */
 
//#import com.asliceofcrazypie.fw.Base

ACPF.registerClass( 'Controller', 'com.asliceofcrazypie.three.engine.server.controllers',
function (base){var Base = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base');
    var Self = this.constructor = function( model, body, definition ){
		base.constructor.call( this );
        
        this._model = model;
        this._body = body;
        this._definition = definition;
        
        
    }
    
    this.update = function( frameTime ){
        //TODO
    }
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base' )
);