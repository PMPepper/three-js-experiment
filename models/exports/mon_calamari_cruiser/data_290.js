function create_geometry_290(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -16.113, -30.342, 60.641,
            -16.113, -30.050, 60.349,
            -16.405, -30.342, 60.349,
            -16.113, -30.342, 60.641,
            -16.405, -30.342, 60.349,
            -16.113, -30.633, 60.349,
            -16.113, -30.342, 60.641,
            -16.113, -30.633, 60.349,
            -15.822, -30.342, 60.349,
            -16.113, -30.342, 60.641,
            -15.822, -30.342, 60.349,
            -16.113, -30.050, 60.349,
            -16.113, -30.342, 60.058,
            -16.405, -30.342, 60.349,
            -16.113, -30.050, 60.349,
            -16.113, -30.342, 60.058,
            -16.113, -30.633, 60.349,
            -16.405, -30.342, 60.349,
            -16.113, -30.342, 60.058,
            -15.822, -30.342, 60.349,
            -16.113, -30.633, 60.349,
            -16.113, -30.342, 60.058,
            -16.113, -30.050, 60.349,
               -15.822, -30.342, 60.349
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 1.000, 0.000,
               1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xD2F0F8,
            shininess: 2.000,
            ambient: 0xD2F0F8,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}