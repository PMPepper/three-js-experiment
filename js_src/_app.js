//#require libs.Key;
//#require vendor.screenfull;
//#require vendor.three-r68;
//#require vendor.ammo;
//#require vendor.jszip;
//#require vendor.three-loaders.MTLLoader;
//#require vendor.three-loaders.OBJLoader;
//#require com.asliceofcrazypie.fw.input.Controls;
//#require exp.physics;
//#require exp.editBox;


setTimeout(function(){

    var Controls = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.input.Controls');

    //stop default key actions
    this.addEventListener( 'keydown', function(e){
        var key = e.keyCode || e.which;
        
        if( key >= 37 && key <= 40 ){
            //e.preventDefault();
        }
        
        //console.log( e.which );
    });

    //Init the scene and camera
    var scene = new THREE.Scene();
    var distFromScreen = 500;//This number seems wrong - TODO convert from 'real' value using pixel density, etc?
    var camera = new THREE.PerspectiveCamera( Math.atan2( (window.innerHeight/2), distFromScreen ) * ( 180/Math.PI ), window.innerWidth / window.innerHeight, 0.1, 111000 );

    var renderer = new THREE.WebGLRenderer();

    //shadow settings
    renderer.shadowMapEnabled = true;
    renderer.shadowMapType = THREE.BasicShadowMap;

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    //r63
    renderer.setClearColor(0x000000, 1);
    
    ///*
    light = new THREE.PointLight(0x999999);
    light.position.set(22.502, -30.003, 45.005);
    scene.add(light);
    light = new THREE.PointLight(0x4C4C4C);
    light.position.set(-30.003, -30.003, 22.502);
    scene.add(light);
    light = new THREE.PointLight(0x4C4C4C);
    light.position.set(0.000, 30.003, 30.003);
    scene.add(light);
    //*/

    //clicking the mouse toggles on/off fullscreen (if supported)
    if (screenfull.enabled) {
        /*document.addEventListener( 'click', function(){
            if( screenfull.isFullscreen ){
                screenfull.exit();
            } else {
                screenfull.request( renderer.domElement );
            }
        });*/
    }

    window.addEventListener( 'resize', function(e){
        renderer.setSize( window.innerWidth, window.innerHeight );
        
        camera.fov = Math.atan2( (window.innerHeight/2), distFromScreen ) * ( 180/Math.PI );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
    } )

    function setShadows( obj, castShadow, receiveShadow ){
        obj.traverse( function( child ){
            if( obj instanceof THREE.Mesh ){
                obj.castShadow = !!castShadow;
                obj.receiveShadow = !!receiveShadow;
            }
        } );
    }
    
    function setSide( obj, side ){
        obj.traverse( function( node ) {
            if( node.material ) {
                node.material.side = side;
            }
        });
    }
        

    //add an axis helper
    //var axisHelper = new THREE.AxisHelper( 5 );
    //scene.add( axisHelper );

    //add an ambient light
    //-doens't seem to light models very well?
    var light = new THREE.AmbientLight( 0xAAAAAA ); // soft white light
    scene.add( light );

    
    var physicsBodies = [];
    /*
    
    //Add a cube
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, ambient:0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    setShadows( cube, true, true );
    cube.position.x = 2;
    cube.position.y = 0.1;
    cube.position.z = -4.5;
    scene.add( cube );
    physicsBodies.push( cube );

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, ambient:0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    setShadows( cube, true, true );
    cube.position.z = -4.5
    scene.add( cube );
    physicsBodies.push( cube );*/

    //add a directional light
    ///*
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set( 3, 15, 75 );
    directionalLight.castShadow = true;
    directionalLight.shadowCameraLeft = -100;
    directionalLight.shadowCameraRight = 100;
    directionalLight.shadowCameraBottom = -100;
    directionalLight.shadowCameraTop = 100;
    directionalLight.shadowCameraVisible = true;
    directionalLight.shadowMapWidth = 2048*2;
    directionalLight.shadowMapHeight = 2048*2;
    scene.add( directionalLight );
    //*/

    
    //add a point light
    //var light = new THREE.SpotLight( 0xffffff );
    //light.position.set( 0, 1.5, 15 );
    //light.castShadow = true;
    //light.shadowDarkness = 0.9;
    //light.shadowCameraVisible = true;
/*

    //shadow stuff
    light.shadowMapWidth = 1024;
    light.shadowMapHeight = 1024;
    light.shadowCameraNear = 1;
    light.shadowCameraFar = 200;
    //light.shadowCameraFov = 30;

    scene.add( light );

    //add a point light
    var light = new THREE.SpotLight( 0xffffff );
    light.position.set( 10, 1.5, 25 );
    light.castShadow = true;
    light.shadowDarkness = 0.9;
    light.shadowCameraVisible = true;
    light.target = cube;


    //shadow stuff
    //light.shadowMapWidth = 1024;
    //light.shadowMapHeight = 1024;
    light.shadowCameraNear = 1;
    light.shadowCameraFar = 200;
    //light.shadowCameraFov = 30;

    scene.add( light );
    */

    //init camera position
    //camera.rotation.y = Math.PI * 0.3;
    //camera.position.x = 5;
    //camera.position.z = 4;

    /*//add a grid
    var size = 10;
    var step = 1;

    var gridHelper = new THREE.GridHelper( size, step );		
    scene.add( gridHelper );

    gridHelper.position.y -= 0.5;
    */

    //skysphere
    var skysphere = (function( file ){
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
        
        return skyBox;
    })( '../images/assets/eso_milkyway.jpg' );

    //skybox
    /*var skybox = (function( name, ext ){
        ext = ext || 'png';
        
        var urls = [
          '../images/assets/'+name+'/px.'+ext,//right
          '../images/assets/'+name+'/nx.'+ext,//left
          '../images/assets/'+name+'/py.'+ext,//top
          '../images/assets/'+name+'/ny.'+ext,//bottom
          '../images/assets/'+name+'/pz.'+ext,//back
          '../images/assets/'+name+'/nz.'+ext//front
        ];

        var cubemap = THREE.ImageUtils.loadTextureCube(urls); // load textures
        cubemap.format = THREE.RGBFormat;

        var shader = THREE.ShaderLib['cube']; // init cube shader from built-in lib
        shader.uniforms['tCube'].value = cubemap; // apply textures to shader

        // create shader material
        var skyBoxMaterial = new THREE.ShaderMaterial( {
          fragmentShader: shader.fragmentShader,
          vertexShader: shader.vertexShader,
          uniforms: shader.uniforms,
          depthWrite: false,
          side: THREE.BackSide
        });

        // create skybox mesh
        var skybox = new THREE.Mesh(
          new THREE.CubeGeometry(1000, 1000, 1000),
          skyBoxMaterial
        );

        scene.add(skybox);
        
        return skybox;
    })( 'dawnmountain' );*/
    /*
    ///Draw the floor
    function drawFloorTile(colour, rectWidth, rectLength, x, y, z){
        var rectShape = new THREE.Shape();
        rectShape.moveTo( 0,0 );
        rectShape.lineTo( 0, rectLength );
        rectShape.lineTo( rectWidth, rectLength );
        rectShape.lineTo( rectWidth, 0 );
        rectShape.lineTo( 0, 0 );

        var rectGeom = new THREE.ShapeGeometry( rectShape );
        var material = new THREE.MeshPhongMaterial( { color: colour, ambient:colour } );
        material.side = THREE.DoubleSide;
        var rectMesh = new THREE.Mesh( rectGeom, material ) ;		

        
        rectMesh.rotation.x = -Math.PI * 0.5;
        rectMesh.rotation.y = 0;//Math.PI * 0.5;

        rectMesh.position.x = x;
        rectMesh.position.y = y;
        rectMesh.position.z = z;
        
        setShadows( rectMesh, true, true );
        
        scene.add( rectMesh );
    }

    var sx = -10, tWidth = 20, sz = -10, tLength = 20, tw = 1, tl = 1.5;

    for( var tx = 0; tx < tWidth; tx++ ){
        for( var tz = 0; tz < tLength; tz++ ){
            drawFloorTile( (0xFFFFFF * Math.random())|0, tw, tl, ( sx + tx ) * tw, -0.5, ( sz + tz ) * tl );
        }
    }*/

    var controls = (function initControls(){
        var controlsDefinition = {
            modes:{ 
                /*mouseAndKeyboard:{
                    devices:['mouse','keyboard'],
                    inputs:{
                        pitchUp:{input:'keyboard:up|keyboard:w',options:{}},
                        pitchDown:{input:'keyboard:down|keyboard:s',options:{}},
                        yawLeft:{input:'keyboard:left|keyboard:a',options:{}},
                        yawRight:{input:'keyboard:right|keyboard:d',options:{}},
                        rollCW:{input:'keyboard:x',options:{}},
                        rollCCW:{input:'keyboard:z',options:{}},
                        throttleUp:{input:'keyboard:shift',options:{}},
                        throttleDown:{input:'keyboard:ctrl',options:{}},
                    }
                },*/
                gamepad:{
                    devices:[/^gamepad[0-9]+$/],
                    inputs:{
                        pitch:{input:'rightY_raw',options:{changed:0.1, deadzone:0.5}},
                        yaw:{input:'rightX_raw',options:{changed:0.1}},
                        roll:{input:'leftX_raw',options:{changed:0.1}},
                        throttle:{input:'leftY_raw',options:{changed:0.1}},
                    }
                }/*,
                touch:{
                    //TODO really need to think about this one...
                }*/
            },
            defaultMode:'gamepad'
        };
        
        var controls = new Controls(controlsDefinition);
        
        return controls;
    })();

    controls.addEventListener( Controls.MODE_CHANGED, function(event, listener){
        console.log( 'new Controls mode "', event.newMode+'", from "'+event.oldMode+'"' );
    } );
    
    
    
    
    function getBoundingBoxFor( obj ){
        var minX = Number.MAX_VALUE, maxX = Number.MIN_VALUE, minY = Number.MAX_VALUE, maxY = Number.MIN_VALUE, minZ = Number.MAX_VALUE, maxZ = Number.MIN_VALUE,
            hasGeometry = false;
        
        obj.traverse (function (mesh)
        {
            if (mesh instanceof THREE.Mesh)
            {
                mesh.geometry.computeBoundingBox ();
                var bBox = mesh.geometry.boundingBox;

                // compute overall bbox
                minX = Math.min (minX, bBox.min.x);
                minY = Math.min (minY, bBox.min.y);
                minZ = Math.min (minZ, bBox.min.z);
                maxX = Math.max (maxX, bBox.max.x);
                maxY = Math.max (maxY, bBox.max.y);
                maxZ = Math.max (maxZ, bBox.max.z);
                
                hasGeometry = true;
            }
        });
        
        return hasGeometry ? new THREE.Box3( new THREE.Vector3( minX, minY, minZ ), new THREE.Vector3( maxX, maxY, maxZ ) ) : new THREE.Box3();
    }
    
    function getLargestAxis( bbox ){
        return Math.max( bbox.max.x - bbox.min.x, Math.max( bbox.max.y - bbox.min.y, bbox.max.z - bbox.min.z ) );
    }
    
    function setCraftRotation( craft, x, y, z ){
        
        craft.rotation.x = x;
        craft.rotation.z = y;
        craft.rotation.z = z;
    }
    
    function setCraftToScale( craft, targetSize ){
        var bbox = getBoundingBoxFor( craft );
        var largestAxis = getLargestAxis( bbox );
        
        craft.scale.x = targetSize / largestAxis;
        craft.scale.y = targetSize / largestAxis;
        craft.scale.z = targetSize / largestAxis;
        
        console.log( 'Craft scale: ', targetSize / largestAxis );
    }
    
    var craft,
        bbox,
        largestAxis,
        craftTargetScale;
    
    //create ISD
    /*craft = new THREE.Object3D();
    
    Create_isd( 'assets/isd/', craft );
    
    craft.position.x = 0;
    craft.position.z = -2500;
    
    bbox = getBoundingBoxFor( craft );
    largestAxis = getLargestAxis( bbox );
    craftTargetScale = 1600;
    
    craft.scale.x = craftTargetScale / largestAxis;
    craft.scale.y = craftTargetScale / largestAxis;
    craft.scale.z = craftTargetScale / largestAxis;
    
    setCraftRotation( craft, -Math.PI * 0.5, 0, Math.PI );
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    //create X-Wing
    craft = new THREE.Object3D();
    
    Create_x_wing( 'assets/x_wing/', craft );
    
    craft.position.x = -20;
    craft.position.z = -50;
    
    bbox = getBoundingBoxFor( craft );
    largestAxis = getLargestAxis( bbox );
    craftTargetScale = 12.5;
    
    craft.scale.x = craftTargetScale / largestAxis;
    craft.scale.y = craftTargetScale / largestAxis;
    craft.scale.z = craftTargetScale / largestAxis;
    
    setCraftRotation( craft, -Math.PI * 0.5, 0, Math.PI );
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    //create A-Wing
    craft = new THREE.Object3D();
    
    Create_a_wing( 'assets/a_wing/', craft );
    
    craft.position.x = 20;
    craft.position.z = -50;
    
    bbox = getBoundingBoxFor( craft );
    largestAxis = getLargestAxis( bbox );
    craftTargetScale = 9.6;
    
    craft.scale.x = craftTargetScale / largestAxis;
    craft.scale.y = craftTargetScale / largestAxis;
    craft.scale.z = craftTargetScale / largestAxis;
    
    setCraftRotation( craft, -Math.PI * 0.5, 0, Math.PI );
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    //create corvette
    craft = new THREE.Object3D();
    
    Create_corvette( 'assets/corvette/', craft );
    
    craft.position.y = -40;
    craft.position.z = -150;
    
    bbox = getBoundingBoxFor( craft );
    largestAxis = getLargestAxis( bbox );
    craftTargetScale = 150;
    
    craft.scale.x = craftTargetScale / largestAxis;
    craft.scale.y = craftTargetScale / largestAxis;
    craft.scale.z = craftTargetScale / largestAxis;
    
    setCraftRotation( craft, -Math.PI * 0.5, 0, Math.PI );
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    //create millenium_falcon
    craft = new THREE.Object3D();
    
    Create_millenium_falcon( 'assets/millenium_falcon/', craft );
    
    craft.position.z = -100;
    
    bbox = getBoundingBoxFor( craft );
    largestAxis = getLargestAxis( bbox );
    craftTargetScale = 26.7;
    
    craft.scale.x = craftTargetScale / largestAxis;
    craft.scale.y = craftTargetScale / largestAxis;
    craft.scale.z = craftTargetScale / largestAxis;
    
    setCraftRotation( craft, -Math.PI * 0.5, 0, Math.PI );
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    
    //create nx_05
    craft = new THREE.Object3D();
    
    Create_nx_05( 'assets/nx_05/', craft );
    
    craft.position.y = -150;
    craft.position.z = -250;
    
    bbox = getBoundingBoxFor( craft );
    largestAxis = getLargestAxis( bbox );
    craftTargetScale = 225;
    
    craft.scale.x = craftTargetScale / largestAxis;
    craft.scale.y = craftTargetScale / largestAxis;
    craft.scale.z = craftTargetScale / largestAxis;
    
    setCraftRotation( craft, Math.PI * 0.5, 0, Math.PI * 0.5 );
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    */
    //create nebulon_b
    craft = Create_nebulon_b( 'assets/nebulon_b/' );
    
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    craft.position.z = -220;
    
    //setCraftToScale( craft, 300 );
    
    //initEditBox( craft );
    
    //create y-wing
    craft = Create_y_wing( 'assets/y_wing/' );
    
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    craft.position.z = -20;
    
    
    //craft collision box
    
    function makeBasicCube( colour ){
        var geometry = new THREE.BoxGeometry(1,1,1);
        var material = new THREE.MeshPhongMaterial( { color: colour, ambient:colour } );
        material.transparent = true;
        material.opacity = 0.75;
        var cube = new THREE.Mesh( geometry, material );
        
        return cube
    }
    
    function makeBasicCylinder( colour ){
        var geometry = new THREE.CylinderGeometry(1,1,1,32,1,false);
        var material = new THREE.MeshPhongMaterial( { color: colour, ambient:colour } );
        material.transparent = true;
        material.opacity = 0.75;
        var mesh = new THREE.Mesh( geometry, material );
        
        return mesh;
    }
    
    function makeBasicSphere( colour ){
        var geometry = new THREE.SphereGeometry(1,32,32);
        var material = new THREE.MeshPhongMaterial( { color: colour, ambient:colour } );
        material.transparent = true;
        material.opacity = 0.75;
        var mesh = new THREE.Mesh( geometry, material );
        
        return mesh;
    }
    
    function drawCollision( craft, collisions ){
        function drawShape( craft, shape, colour ){
            var mesh;
            
            switch( shape[0] ){
                case 'box':
                    mesh = makeBasicCube( colour );
                    break;
                case 'cylinder':
                    mesh = makeBasicCylinder( colour );
                    break;
                case 'sphere':
                    mesh = makeBasicSphere( colour );
                    break;
                default:
                    console.log( 'unknown shape:', shape[0] );
                
            }
            
            mesh.position.x = +shape[1];
            mesh.position.y = +shape[2];
            mesh.position.z = +shape[3];
            mesh.scale.x = +shape[4];
            mesh.scale.y = +shape[5];
            mesh.scale.z = +shape[6];
            mesh.rotation.x = +shape[7];
            mesh.rotation.y = +shape[8];
            mesh.rotation.z = +shape[9];
            
            craft.add( mesh );
        }
        
        for( var part in collisions.hull ){
            drawShape( craft, collisions.hull[part], 0x00FF00 );
        }
        
        drawShape( craft, collisions.shield, 0x9999FF );
    }
    
    //drawCollision( craft, craft._config.collision );
    
    
    //
    
    //physicsBodies.push( cube );
    
    /*
    //mon_calamari_cruiser calamari cruiser
    craft = new THREE.Object3D();
    
    Create_mon_calamari_cruiser( 'assets/mon_calamari_cruiser/', craft );
    
    craft.position.y = -300;
    craft.position.z = -500;
    
    bbox = getBoundingBoxFor( craft );
    largestAxis = getLargestAxis( bbox );
    craftTargetScale = 1200;
    
    craft.scale.x = craftTargetScale / largestAxis;
    craft.scale.y = craftTargetScale / largestAxis;
    craft.scale.z = craftTargetScale / largestAxis;
    
    setCraftRotation( craft, Math.PI * 0.5, 0, Math.PI * 0.5 );
    
    setShadows( craft, true, true );
    setSide( craft, THREE.DoubleSide );
    
    scene.add( craft );
    
    
    */
    //end craft
    
    var xAxis = new THREE.Vector3( 1, 0, 0 );
    var yAxis = new THREE.Vector3( 0, 1, 0 );
    var zAxis = new THREE.Vector3( 0, 0, 1 );
    
    var now;
    var last = Date.now();
    var simulatePhysics = initPhysics();
    var quaternion = new THREE.Quaternion( 0, 0, 0, 0);

    //render loop
    function render() {
        //update physics
        now = Date.now();
        /*var physicsData = simulatePhysics( now - last );
        
        physicsData.objects.forEach( function( data, index ){
            var gfx = physicsBodies[index];
            
            gfx.position.x = data[0];
            gfx.position.y = data[1];
            gfx.position.z = data[2];
            
            quaternion.x = data[3];
            quaternion.y = data[4];
            quaternion.z = data[5];
            quaternion.w = data[6];
            
            quaternion.normalize();
            
            gfx.rotation.setFromQuaternion( quaternion );
            
        });*/
        
        last = now;
        
        var moveSpeed = 1,
            turnSpeed = 0.05,
            speed = 0,
            turn = 0;
        
        switch( controls.getActiveModeName() ){
            case 'mouseAndKeyboard':
                /*//pitch
                if( controls.getInputByName( 'pitchUp' ).value || controls.getInputByName( 'pitchDown' ).value ){
                    turn = 0;
                    
                    if( controls.getInputByName( 'pitchUp' ).value ){
                        turn += turnSpeed;
                    } else if( controls.getInputByName( 'pitchDown' ).value ){
                        turn -= turnSpeed;
                    }
                    
                    camera.rotateOnAxis( xAxis, turn );
                }
                
                //yaw
                if( controls.getInputByName( 'yawLeft' ).value || controls.getInputByName( 'yawRight' ).value ){
                    turn = 0;
                    
                    if( controls.getInputByName( 'yawLeft' ).value ){
                        turn += turnSpeed;
                    } else if( controls.getInputByName( 'yawRight' ).value ){
                        turn -= turnSpeed;
                    }
                    
                    camera.rotateOnAxis( yAxis, turn );
                }
                
                //roll
                if( controls.getInputByName( 'rollCW' ).value || controls.getInputByName( 'rollCCW' ).value ){
                    turn = 0;
                    
                    if( controls.getInputByName( 'rollCCW' ).value ){
                        turn += turnSpeed;
                    } else if( controls.getInputByName( 'rollCW' ).value ){
                        turn -= turnSpeed;
                    }
                    
                    camera.rotateOnAxis( zAxis, turn );
                }
                
                //roll
                if( controls.getInputByName( 'throttleUp' ).value || controls.getInputByName( 'throttleDown' ).value ){
                    speed = 0;
                    
                    if( controls.getInputByName( 'throttleUp' ).value ){
                        speed += moveSpeed;
                    } else if( controls.getInputByName( 'throttleDown' ).value ){
                        speed -= moveSpeed;
                    }
                    
                    camera.translateOnAxis( zAxis, -speed );
                }
                
                break;*/
            case 'gamepad':
                camera.rotateOnAxis( xAxis, -turnSpeed * controls.getInputByName( 'pitch' ).value );
                camera.rotateOnAxis( yAxis, -turnSpeed * controls.getInputByName( 'yaw' ).value );
                camera.rotateOnAxis( zAxis, -turnSpeed * controls.getInputByName( 'roll' ).value );
                camera.translateOnAxis( zAxis, moveSpeed * controls.getInputByName( 'throttle' ).value  );
                
                //console.log( controls.getInputByName( 'pitch' ).value );
                
                break;
        }
        
        skysphere.position.x = camera.position.x;
        skysphere.position.y = camera.position.y;
        skysphere.position.z = camera.position.z;
        
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    render();
}, 100);