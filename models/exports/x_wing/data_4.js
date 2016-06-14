function create_geometry_4(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 75.022, -16.840,
            1.517, 66.415, -16.840,
            1.510, 66.458, -20.300,
            -0.000, 75.022, -20.300,
            -0.000, 75.022, -16.840,
               1.510, 66.458, -20.300
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.985, 0.174, -0.000,
            0.985, 0.174, -0.000,
            0.985, 0.174, -0.000,
            0.985, 0.174, 0.000,
            0.985, 0.174, -0.000,
               0.985, 0.174, -0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x969696,
            shininess: 2.000,
            ambient: 0x969696,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
