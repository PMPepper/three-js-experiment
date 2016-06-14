var config = {
    "scale":[1,1,1],
    "rotation":[0,0,0,1],
    "position":[0,0,0],
    "collision":{
        "hull":{
            "body":["box", 0, 0, 0, 1, 1, 1, 0, 0, 0, 1]
        }
    },
    "performance":{},
    "mass":5
};

function create( srcPath ){
    var scene = new THREE.Object3D();

function create_geometry_0(scene)
{
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, ambient:0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );
}

create_geometry_0(scene);

    create._config = config;
    
    scene.scale.x = +config.scale[0];
    scene.scale.y = +config.scale[1];
    scene.scale.z = +config.scale[2];
    scene.quaternion.x = +config.rotation[0];
    scene.quaternion.y = +config.rotation[1];
    scene.quaternion.z = +config.rotation[2];
    scene.quaternion.w = +config.rotation[3];
    scene.position.x = +config.position[0];
    scene.position.y = +config.position[1];
    scene.position.z = +config.position[2];
    
    return scene;
}
create.config = config;return create;