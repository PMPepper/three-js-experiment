/**
 * abstract base class for controllers
 * @author P M Pepper
 */
 
//#import com.asliceofcrazypie.fw.Base

//#class com.asliceofcrazypie.three.engine.server.controllers.Controller extends com.asliceofcrazypie.fw.Base
function (base){
    this.constructor = function( model, body, definition ){
		base.constructor.call( this );
        
        this._model = model;
        this._body = body;
        this._definition = definition;
        
        
    }
    
    this.update = function( frameTime ){
        //TODO
    }
}