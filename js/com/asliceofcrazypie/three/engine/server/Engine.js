//#require vendor.ammo;
//#require vendor.three-r68;
//#import com.asliceofcrazypie.fw.Base
//#import com.asliceofcrazypie.three.engine.server.ObjectDefinition
//#import com.asliceofcrazypie.three.engine.server.controllers.Controller
//#import com.asliceofcrazypie.three.engine.server.controllers.PlayerController

ACPF.registerClass( 'Engine', 'com.asliceofcrazypie.three.engine.server',
function( base ){var Base = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base');var ObjectDefinition = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.ObjectDefinition');var Controller = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.controllers.Controller');var PlayerController = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.controllers.PlayerController');
    
    //core physics vars
    var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    var overlappingPairCache = new Ammo.btDbvtBroadphase();
    var solver = new Ammo.btSequentialImpulseConstraintSolver();
    var dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
    
    //gravity..
    dynamicsWorld.setGravity(new Ammo.btVector3(0, 0, 0));
    
    var transform = new Ammo.btTransform();//general purpose
    
    var Self = this.constructor = function( global ){
        base.constructor.call( this );
        
        this.global = global;
        this._lastTime,
        this._paused = false,
        this._stopped = false;
        
        this._bodies = {};
        this._models = {};
        this._commsModels = [];
        this._controllers = {};
        this._definitions = {};
        
        global.addEventListener( 'message', this._onMessage.bind( this ) );
        this._update = this._update.bind( this );
    }
    
    this._onMessage = function( event ){
        //console.log( 'server'+', '+event.data.type );
        
        switch( event.data.type ){
            case 'init':
                this._init( event.data.data );
                break;
            case 'update':
                this._clientUpdate( event.data.data );
                break;
            case 'add':
                //TODO is this needed?
                break;
            case 'remove':
                //TODO is this needed?
                break;
            case 'pause':
                this._pause( event.data.data );
                break;
            case 'stop':
                this._pause( event.data.data );
                break;
        }
    }
    
    this._postMessage = function( type, data ){
        postMessage( {type:type, data:data } );
    }
    
    this._init = function ( data ){
        //TODO parse init data
        //console.log( JSON.stringify( data ) );
        var objects = data.objects,
            definitions = data.configs,
            definition,
            model,
            body,
            i;
        
        //init collision shapes
        for( var name in definitions ){
            this._definitions[name] = new ObjectDefinition( name, definitions[name], dynamicsWorld );
        }
        
        //for each body
        for( i = 0; i < objects.length; i++ ){
            model = objects[i];
            this._models[model.id] = getModel( model );
            this._commsModels[model.id] = getCommsModel( model );
            
            //create collision object based on model data
            body = this._bodies[model.id] = this._definitions[model.type].getBody( model.px, model.py, model.pz, model.rx, model.ry, model.rz, model.rw, model.lvx, model.lvy, model.lvz, model.rvx, model.rvy, model.rvz );
            
            //add to physic
            dynamicsWorld.addRigidBody(body);
            
            this._controllers[model.id] = getController( this._models[model.id], body, this._definitions[model.type] );
            
        }
        
        //inform the client that the engine is ready and running
        this._postMessage( 'init' );
        
        //begin update loop
        this._lastTime = Date.now();
        
        this._update();//begin update loop
    }
    
    this._clientUpdate = function ( data ){
        //pass in controller data
        for( var id in data.input ){
            this._controllers[id].updateInput( data.input[id] );
        }
    }
    
    this._pause = function ( data ){
        var newPaused = !!data;
        
        if( !this._stopped && newPaused != this._paused ){
            if( !newPaused ){
                //unpausing
                
                this._lastTime = Date.now();
                
                this._update();
            }
            
            this._paused = newPaused;
        }
    }
    
    this._stop = function ( data ){
        this._stopped = true;
    }
    
    
    this._update = function (){
        var data = { objects: this._commsModels },
            origin,
            rotation,
            model,
            body,
            id,
            bodies = this._bodies,
            models = this._commsModels,
            controllers = this._controllers;

        if( this._stopped || this._paused ){
            return;
        }
        var now = Date.now(),
            frameTime = ( now - this._lastTime ) / 1000;
        
        //update controllers
        for( var id in controllers ){
            controllers[id].update( frameTime );
        }
        
        //run simulation
        dynamicsWorld.stepSimulation(frameTime*1000, 2);
        //console.log( JSON.stringify( models ) );
        
        // Read bullet data into JS objects
        for( var id in models ){
            model = models[id];
            body = bodies[model.id];
            
            body.getMotionState().getWorldTransform(transform);
            origin = transform.getOrigin();
            rotation = transform.getRotation();
            
            model.px = origin.x();
            model.py = origin.y();
            model.pz = origin.z();
            model.rx = rotation.x();
            model.ry = rotation.y();
            model.rz = rotation.z();
            model.rw = rotation.w();
        }
        
        //TODO record collision data
        
        //send data to client
        this._postMessage( 'update', data );
        
        this._lastTime = now;
        
        //continue loop
        setTimeout( this._update, Math.floor( 1000/60 ) );//hmm..?
    }
    
    
    //extracts the important details about an object for storage and later use
    function getCommsModel( model ){
        return { id:model.id, px:model.px, py:model.py, pz:model.pz, rx: model.rx, ry:model.ry, rz:model.rz, rw:model.rw };
    }
    
    //creates the model object
    function getModel( model ){
        //Just clone the supplied model (might make this cleverer at some point)
        return JSON.parse( JSON.stringify( model ) );
    }
    
    //creates new controller object for the supplied model
    function getController( model, body, definition ){
        if( model && model.controller ){
            switch( model.controller.type ){
                case 'player':
                    //TODO
                    return new PlayerController( model, body, definition );
                    break;
                default:
                    return new Controller( model, body, definition );
            }
        }
        
        return null;
    }
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base' )
);