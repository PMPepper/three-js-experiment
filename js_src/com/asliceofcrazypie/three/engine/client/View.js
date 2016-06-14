//#import com.asliceofcrazypie.fw.Base

//#class com.asliceofcrazypie.three.engine.client.View extends com.asliceofcrazypie.fw.Base
function( base ){
    //static vars
    var distFromScreen = 1000;//This number seems wrong, but works - TODO convert from 'real' value using pixel density, etc?
    
    this.constructor = function( containerElement, models ){
		base.constructor.call( this );
        
        this._models = models;//object containing model constructors
        
        this._lights = [];//all lights with positions
        this._renderer = this._camera = this._scene = this._follow = this._$canvas = this._skyBox = null;
        
        this._objects = {};
        
        this._initRenderer( containerElement );
        this._initLights();//TODO pass in config
        this._initSky( '../images/assets/eso_milkyway.jpg' );//TODO this should probably be passed in as an argument (using global assets path)
        
    }
    
    this.add = function( model ){
        var view = this._objects[model.id] = new ViewObject( model ),
            viewConstructor = this._models[model.type];
        
        if( viewConstructor ){
            
            //add 3d model
            view.add( viewConstructor() );
        }
        
        this._scene.add( view );
    }
    
    this.follow = function( model ){
        var id = model.id;
        
        if( this._follow ){
            this._follow.visible = true;
        }
        
        var view = this._objects[id];
        
        this._follow = view;
        
        view.visible = false;
    }
    
    this.resize = function( x, y, width, height ){
        var renderer = this._renderer,
            camera = this._camera;
        
        renderer.setSize( width, height );
            
        camera.fov = Math.atan2( (height/2), distFromScreen ) * ( 180/Math.PI );
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        //position canvas
        this._$canvas.css( { left:x+'px', top:y+'px', width:width+'px', height:height+'px', position:'absolute', zIndex:'1' } );
    }
    
    this.update = function(){
        var objects = this._objects,
            camera = this._camera,
            follow = this._follow,
            lights = this._lights,
            light,
            i;
        
        //update all objects to match their models
        for( var id in objects ){
            objects[id].update();
        }
        
        //link camera to object it's following
        camera.position.x = follow.position.x;
        camera.position.y = follow.position.y;
        camera.position.z = follow.position.z;
        camera.quaternion.x = follow.quaternion.x;
        camera.quaternion.y = follow.quaternion.y;
        camera.quaternion.z = follow.quaternion.z;
        camera.quaternion.w = follow.quaternion.w;
        
        //update lights
        for( i = 0; i < lights.length; i++ ){
            light = lights[i];
            light.position.x = camera.position.x + light.data.offX;
            light.position.y = camera.position.y + light.data.offY;
            light.position.z = camera.position.z + light.data.offZ;
        }
        
        //skybox
        var skyBox = this._skyBox;
        skyBox.position.x = camera.position.x;
        skyBox.position.y = camera.position.y;
        skyBox.position.z = camera.position.z;
        
        //actually render update graphics
        this._renderer.render(this._scene, this._camera);
    }
    
    this._initRenderer = function( containerElement ){
        //Init the scene and camera
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( Math.atan2( (window.innerHeight/2), distFromScreen ) * ( 180/Math.PI ), window.innerWidth / window.innerHeight, 0.1, 111000 );

        var renderer = new THREE.WebGLRenderer();
        
        containerElement.append( renderer.domElement );
        
        this._scene = scene;
        this._camera = camera;
        this._renderer = renderer;
        this._$canvas = $(renderer.domElement);
    }
    
    this._initLights = function(){//TODO make this configurable
        var scene = this._scene;
        
        var light = new THREE.AmbientLight( 0x666666 ); // soft white light
        scene.add( light );
        
        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.data = {};
        directionalLight.data.offX = 3;
        directionalLight.data.offY = 15;
        directionalLight.data.offZ = 75;
        
        this._lights.push( directionalLight );
        
        /*directionalLight.castShadow = false;
        directionalLight.shadowCameraLeft = -100;
        directionalLight.shadowCameraRight = 100;
        directionalLight.shadowCameraBottom = -100;
        directionalLight.shadowCameraTop = 100;
        directionalLight.shadowCameraVisible = true;
        directionalLight.shadowMapWidth = 2048*2;
        directionalLight.shadowMapHeight = 2048*2;*/
        
        
        scene.add( directionalLight );
    }
    
    this._initSky = function( file ){
        var scene = this._scene;
        //skysphere
        var geometry = new THREE.SphereGeometry(100000, 60, 40);
        var uniforms = {
          texture: { type: 't', value: THREE.ImageUtils.loadTexture(file) }
        };

        var material = new THREE.ShaderMaterial( {
          uniforms:       uniforms,
          side: THREE.BackSide,
          vertexShader:   'varying vec2 vUV;\n'+
        '\n'+
        'void main() {\n'+
        '  vUV = uv;\n'+
        '  vec4 pos = vec4(position, 1.0);\n'+
        '  gl_Position = projectionMatrix * modelViewMatrix * pos;\n'+
        '}',
              fragmentShader: 'uniform sampler2D texture;\n'+
        'varying vec2 vUV;\n'+
        '\n'+
        'void main() {\n'+
        '  vec4 sample = texture2D(texture, vUV);\n'+
        '  gl_FragColor = vec4(sample.xyz, sample.w);\n'+
        '}'
        });

        skyBox = new THREE.Mesh(geometry, material);
        skyBox.scale.set(1, 1, 1);
        skyBox.rotation.order = 'XZY';
        skyBox.renderDepth = 1000.0;
        scene.add(skyBox);
        
        //skyBox.position = this._camera.position;//link skybox position to camera position
        
        this._skyBox = skyBox;
    }
    
    var ViewObject = function( model ){
        THREE.Object3D.call( this );
        
        this.model = model;
    }
    
    //View Object (Extends THREE.Object3D)
    ViewObject.prototype = new THREE.Object3D();
    ViewObject.prototype.constructor = ViewObject;
    
    ViewObject.prototype.update = function(){
        var model = this.model,
            position = this.position,
            rotation = this.quaternion,
            scale = this.scale;
        
        //update view
        //position
        position.x = model.px;
        position.y = model.py;
        position.z = model.pz;
        
        //rotation
        //rotation.set( model.rx, model.ry, model.rz, model.rw );
        rotation.x = model.rx;
        rotation.y = model.ry;
        rotation.z = model.rz;
        rotation.w = model.rw;
    }
}