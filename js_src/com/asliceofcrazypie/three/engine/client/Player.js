/**
 * Abstract base class for players
 * @author P M Pepper
 */
 
//#import com.asliceofcrazypie.three.engine.client.Controller
//#uses com.asliceofcrazypie.three.engine.client.LocalPlayer

//#class com.asliceofcrazypie.three.engine.client.Player extends com.asliceofcrazypie.three.engine.client.Controller
function( base ){
    
    
    this.constructor = function( model ){
		base.constructor.call( this, model );
        
        this._name = model.controller.name;
        this._playerNum = +model.controller.num;
    }
    
    this.getName = function(){
        return this._name;
    }
    
    this.getPlayerNum = function(){
        return this._playerNum;
    }
    
    this.getInput = function(){
        return null;
    }
    
    /*this.update = function( frameTime ){
        base.update.call( this, frameTime );
    }*/
}