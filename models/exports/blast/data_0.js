function create_geometry_0(scene)
{
    var geometry = new THREE.BoxGeometry(0.01,0.5,0.01);
    var material = new THREE.MeshPhongMaterial( { color: 0x0000FF, ambient:0x0000FF, emissive:0x0000FF, specular:0x0000FF } );
    var cube = new THREE.Mesh( geometry, material );
    
    scene.add( cube );
}