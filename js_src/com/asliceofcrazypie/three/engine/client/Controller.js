//#import com.asliceofcrazypie.fw.Base

//#class com.asliceofcrazypie.three.engine.client.Controller extends com.asliceofcrazypie.fw.Base
function( base ){
    
    
    this.constructor = function( model ){
		base.constructor.call( this );
        
        this._model = model;
    }
    
    this.update = function( frameTime ){
        //var model = this._model;
        
        //perform interim model update?
        //model.px += model.vmx * frameTime;
        //model.py += model.vmy * frameTime;
        //model.pz += model.vmz * frameTime;
        //model.rx += model.vrx * frameTime;
        //model.ry += model.vry * frameTime;
        //model.rz += model.vrz * frameTime;
        
    }
}