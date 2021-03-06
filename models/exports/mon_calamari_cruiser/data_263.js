function create_geometry_263(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -13.285, -64.255, 17.212,
            -13.285, -63.963, 16.921,
            -13.577, -64.255, 16.921,
            -13.285, -64.255, 17.212,
            -13.577, -64.255, 16.921,
            -13.285, -64.547, 16.921,
            -13.285, -64.255, 17.212,
            -13.285, -64.547, 16.921,
            -12.993, -64.255, 16.921,
            -13.285, -64.255, 17.212,
            -12.993, -64.255, 16.921,
            -13.285, -63.963, 16.921,
            -13.285, -64.255, 16.629,
            -13.577, -64.255, 16.921,
            -13.285, -63.963, 16.921,
            -13.285, -64.255, 16.629,
            -13.285, -64.547, 16.921,
            -13.577, -64.255, 16.921,
            -13.285, -64.255, 16.629,
            -12.993, -64.255, 16.921,
            -13.285, -64.547, 16.921,
            -13.285, -64.255, 16.629,
            -13.285, -63.963, 16.921,
               -12.993, -64.255, 16.921
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
