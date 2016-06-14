/**
 * Class representing a local player
 
 * @author P M Pepper
 */

//#import com.asliceofcrazypie.three.engine.client.Player
//#import com.asliceofcrazypie.fw.input.Controls;
 
ACPF.registerClass( 'LocalPlayer', 'com.asliceofcrazypie.three.engine.client',
function( base ){var Player = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.client.Player');var Controls = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.input.Controls');
    
    var Self = this.constructor = function( model ){
		base.constructor.call( this, model );
        
        this._controls = new Controls( model.controller.controls );
        this._input = {};
        
        /*controls.addEventListener( Controls.MODE_CHANGED, function(event, listener){
            console.log( 'new Controls mode "', event.newMode+'", from "'+event.oldMode+'"' );
        } );*/
    }
    
    this.getControls = function(){
        return this._controls;
    }
    
    this.getInput = function(){
        return this._input;
    }
    
    this.update = function( frameTime ){
        var input = this._input,
            controls = this._controls;
        
        //reset
        input.pitch = input.yaw = input.roll = input.throttle = 0;
        input.isFiring = false;
        
        //TODO take input
        switch( controls.getActiveModeName() ){
            case 'mouseAndKeyboard':
                
                break;
            case 'gamepad':
                input.pitch = controls.getInputByName( 'pitch' ).value;
                input.yaw = controls.getInputByName( 'yaw' ).value;
                input.roll = controls.getInputByName( 'roll' ).value;
                input.throttle = controls.getInputByName( 'throttle' ).value;
                
                input.isFiring = !!controls.getInputByName( 'fire' ).value;
                break;
        }
        
        base.update.call( this, frameTime );
    }
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.client.Player' )
);