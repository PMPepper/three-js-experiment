//#import com.asliceofcrazypie.three.engine.client.Controller
//#import com.asliceofcrazypie.three.AGameState
//#import com.asliceofcrazypie.three.engine.client.Player
//#import com.asliceofcrazypie.three.engine.client.LocalPlayer
//#import com.asliceofcrazypie.three.engine.client.View
//#import com.asliceofcrazypie.three.engine.shared.Settings

ACPF.registerClass( 'EngineState', 'com.asliceofcrazypie.three.states',
function( base )
{var Controller = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.client.Controller');var AGameState = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.AGameState');var Player = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.client.Player');var LocalPlayer = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.client.LocalPlayer');var View = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.client.View');var Settings = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.shared.Settings');
	var Self = this.constructor = function(){
		base.constructor.call( this );
        
        //init vars
        this._players = [];
        this._inputs = {};
        this._views = [];
        this._models = {};
        this._controllers = {};
        this._engine = null;
        this._isEngineReady = false;
        this._onEngineMessage = onEngineMessage.bind( this );
        
        //init view sizes/positions
        this._resizeHandler = resize.bind( this );
        
        //listen to HTML resize event
        $(window).on( 'resize', this._resizeHandler );
        
	}
    
    
    function onEngineMessage( event ){
        var message = event.data;
        var data = message.data;
        
        //console.log( 'client', message.type, event );
        switch( message.type ){
            case 'init':
                this._startEngine();
                break;
            case 'add':
                //TODO
                break;
            case 'remove':
                //TODO
                break;
            case 'update':
                this._updateClient( data );
        }
    }
    
    this._postMessage = function( type, data ){
        if( this._engine ){
            this._engine.postMessage( {type:type, data:data } );
        } else {
            throw new Error( 'cannot send message to engine, not inited' );
        }
    }
    
    function resize(e){
        var totalWidth = Math.floor( window.innerWidth ),
            totalHeight = Math.floor( window.innerHeight );
        
        //TODO view size logic
        switch( this._views.length ){
            case 1:
                this._views[0].resize( 0, 0, totalWidth, totalHeight );
                break;
            case 2:
                if( totalWidth > totalHeight*(16/9) ){
                    //taller than wide
                    totalWidth--;
                    
                    this._views[0].resize( 0, 0, Math.floor( totalWidth / 2 ), totalHeight );
                    this._views[1].resize( Math.floor( totalWidth / 2 )+1, 0, Math.ceil( totalWidth / 2 ), totalHeight );
                } else {
                    //wider than tall
                    totalHeight--;
                    
                    
                    this._views[0].resize( 0, 0, totalWidth, Math.floor( totalHeight / 2 ) );
                    this._views[1].resize( 0, Math.floor( totalHeight / 2 )+1, totalWidth, Math.ceil( totalHeight / 2 ) );
                }
                break;
            case 3:
            case 4:
                //space for divider lines
                totalWidth--;
                totalHeight--;
                
                var x1 = 0, 
                    x2 = Math.floor( totalWidth / 2 )+1, 
                    y1 = 0, 
                    y2 = Math.floor( totalHeight / 2 )+1, 
                    w1 = Math.floor( totalWidth / 2 ), 
                    w2 = Math.ceil( totalWidth / 2 ), 
                    h1 = Math.floor( totalHeight / 2 ), 
                    h2 = Math.ceil( totalHeight / 2 );
                
                //now position views
                this._views[0].resize( x1, y1, w1, h1 );
                this._views[1].resize( x2, y1, w2, h1 );
                this._views[2].resize( x1, y2, w1, h2 );
                
                if( this._views.length > 3 ){
                    this._views[3].resize( x2, y2, w1, h2 );
                }
                
                break;
            default:
                throw new Error( 'Need to implement resizing for this number of local players' );
        }
    }
	
	this.activated = function()
	{
		base.activated.call( this );
        this._elapsedTime = 0;
		
        //TODO This should be passed in as an argument
        var initWorldState = {
            objects:[
                { id:1, type:'y_wing', faction:null, controller:{type:'ai', level:'basic'}, px: 15, py: 0, pz:-50, rx:0.47942553860420295, ry:0, rz:0, rw:0.8775825618903726, lvx: 0, lvy:1, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                { id:2, type:'y_wing', faction:null, controller:{type:'ai', level:'basic'}, px:  0, py:-5, pz:-50, rx:0.47942553860420295, ry:0, rz:0, rw:0.8775825618903726, lvx:-1, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                { id:3, type:'y_wing', faction:null, controller:{type:'ai', level:'basic'}, px:-15, py: 0, pz:-50, rx:0.47942553860420295, ry:0, rz:0, rw:0.8775825618903726, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                { id:4, type:'y_wing', faction:null, controller:{type:'ai', level:'basic'}, px: 15, py:15, pz:-50, rx:0.47942553860420295, ry:0, rz:0, rw:0.8775825618903726, lvx:0, lvy:0, lvz:0, rvx:1, rvy:0, rvz:-0.5, state:{} },
                { id:5, type:'y_wing', faction:null, controller:{type:'ai', level:'basic'}, px:  0, py:15, pz:-50, rx:0, ry:0.47942553860420295, rz:0, rw:0.8775825618903726, lvx:0, lvy:0, lvz:0, rvx:0, rvy:1, rvz:0, state:{} },
                { id:6, type:'y_wing', faction:null, controller:{type:'ai', level:'basic'}, px:-15, py:15, pz:-50, rx:0, ry:0, rz:0.47942553860420295, rw:0.8775825618903726, lvx:0, lvy:0, lvz:0, rvx:0.5, rvy:0, rvz:1, state:{} },
                
                //player 1
                { id: 7, type:'y_wing', faction:null, controller:{type:'player', playerType:'local', num:0, name:'Bobby', controls:Settings.getPlayerControls(1)}, px:0, py:0, pz:0, rx:0, ry:0, rz:0, rw:1, lvx:0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                
                //player 2
                //{ id: 8, type:'y_wing', faction:null, controller:{type:'player', playerType:'local', num:1, name:'Billy', controls:Settings.getPlayerControls(2)}, px:0, py:0, pz:-100, rx:0, ry:1, rz:0, rw:0, lvx:0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                
                //player 3
                //{ id: 9, type:'y_wing', faction:null, controller:{type:'player', playerType:'local', num:2, name:'Benny', controls:Settings.getPlayerControls(3)}, px:50, py:0, pz:-50, rx:0, ry:0.7071067811865475, rz:0, rw:0.7071067811865475, lvx:0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                
                //player 4
                //{ id:10, type:'y_wing', faction:null, controller:{type:'player', playerType:'local', num:3, name:'Barry', controls:Settings.getPlayerControls(4)}, px:-50, py:0, pz:-50, rx:0, ry:-0.7071067811865475, rz:0, rw:0.7071067811865475, lvx:0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                
                //{ id:10, type:'cylinder', faction:null, controller:{type:'ai', level:'basic'}, px:-1.1, py:0, pz:-10, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:-10, rvx:1, rvy:1, rvz:0, state:{} },
                //{ id:11, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px:  0, py:-10, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                //{ id:12, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px: 10, py:-10, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                //{ id:13, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px:-10, py:  0, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                //{ id:14, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px:  0, py:  0, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                //{ id:15, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px: 10, py:  0, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                //{ id:16, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px:-10, py: 10, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                //{ id:17, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px:  0, py: 10, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} },
                //{ id:18, type:'cube', faction:null, controller:{type:'ai', level:'basic'}, px: 10, py: 10, pz:-75, rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} }
            ]
        };
        
        var i = 100;
        var ix = -10;
        var iy = -10;
        var iz = -50;
        var xs = 2;
        var ys = 5;
        var zs = 2;
        
        for( var x = 0; x < 10; x++ ){
            for( var y = 0; y < 10; y++ ){
                for( var z = 0; z < 10; z++ ){
                    //initWorldState.objects.push( { id:i++, type:'cylinder', faction:null, controller:{type:'ai', level:'basic'}, px:ix + ( x * xs ), py:iy + ( y * ys ), pz:iz + ( z * zs ), rx:0, ry:0, rz:0, rw:1, lvx: 0, lvy:0, lvz:0, rvx:0, rvy:0, rvz:0, state:{} } );
                }
            }
        }
        
        
        this._initViews( initWorldState );//init the views
        
        this._initWorld( initWorldState );//init level state
        
        //trigger init resize of the views
        this._resizeHandler();
	}
    
    //called once engine worker is running
    this._startEngine = function(){
        this._isEngineReady = true;
    }
    
    //updates the client with data from the engine
    this._updateClient = function( data ){
        var objects = data.objects,
            models = this._models,
            object,
            model;
        
        //For each model, update it's properties
        for( var id in objects ){
            object = objects[id];
            model = models[id];
            
            //position
            model.px = object.px;
            model.py = object.py;
            model.pz = object.pz;
            
            //rotation
            model.rx = object.rx;
            model.ry = object.ry;
            model.rz = object.rz;
            model.rw = object.rw;
        }
        
    }
    
    this.update = function( activeState, frameTime ){
        var controllers,
            players,
            i;
        
        if( this._isEngineReady && activeState == this ){
            //update controllers (includes players, AI, etc)
            controllers = this._controllers;
            players = this._players;
            
            for( var id in controllers ){
                controllers[id].update( frameTime );
            }
            
            //update views
            for( i = 0; i < this._views.length; i++ ){
                this._views[i].update();
            }
            
            //record elapsed time
            this._elapsedTime += frameTime;
            
            //postMessage to server
            this._postMessage( 'update', { input: this._inputs } );
        }
    }
	
    this._initViews = function( initWorldState ){
        initWorldState.objects.forEach( function( object ){
            if( object.controller && object.controller.type == 'player' && object.controller.playerType == 'local' ){
                this._views.push( new View( this.element, this.root.models ) ); 
            }
        }, this );
    }
    
    this._initWorld = function( initWorldState ){
        var root = this.root,
            models = root.models,
            objects = initWorldState.objects,
            worldData = { objects:[], configs:{} },
            i;
        
        //get basic config info about all world items
        for( var modelName in root.models ){
            worldData.configs[modelName] = root.models[modelName].config;
        }
        
        //start up the server process
        if(window.Server){
            //is running locally, tie up fake message handlers
            this._engine = window.Server;
            
            this._engine._postMessage = function( type, data ){
                this._onEngineMessage( { data:{type:type, data:data} }  );
            }.bind( this );
            
            this._postMessage = function( type, data ){
                this._engine._onMessage({ data:{type:type, data:data} });
            }.bind( this );
            
        } else {
            this._engine = new Worker( 'js/server.min.js' );
            this._engine.addEventListener( 'message', this._onEngineMessage );
        }
        
        //add all starting objects to the world
        for( i = 0; i < objects.length; i++ ){
            worldData.objects.push( this._addObject( objects[i] ) );
        }
        
        //send init world state to server
        this._postMessage( 'init', worldData );
    }
    
    this._addObject = function( data ){
        var views = this._views,
            model,
            controller,
            allModels = this._models,
            allControllers = this._controllers;
        
        //create model and controller
        model = this._getModel( data );
        controller = this._getController( model );//TODO
        
        //store ref to model and controller
        allModels[model.id] = model;
        allControllers[model.id] = controller;
        
        //add to view(s)
        for( var i = 0; i < views.length; i++ ){
            views[i].add( model );
        }
        
        //link object to view if local player
        if( data.controller.type == 'player' && data.controller.playerType == 'local' ){
            views[data.controller.num].follow( model );
        }
        
        return model;
    }
    
    this._getModel = function( data ){
        return JSON.parse( JSON.stringify( data ) );//just clone data
    }
    
    this._getController = function( model ){
        //vary controller based on model
        if( !model.controller ){
            return null;
        }
        
        switch( model.controller.type ){
            case 'player':
                var player;
                
                switch( model.controller.playerType ){
                    case 'local':
                        player = new LocalPlayer( model );
                        break;
                    default:
                        throw new Error( 'Unknown player type: '+model.controller.playerType );
                }
                
                this._players[player.getPlayerNum()] = player;
                this._inputs[model.id] = player.getInput();
                
                return player;
            default:
                return new Controller( model );
        }
        
        
    }
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.AGameState' )
);