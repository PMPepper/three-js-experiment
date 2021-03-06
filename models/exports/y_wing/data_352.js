function create_geometry_352(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -219.144, 188.968, 9.119,
            -219.144, 223.457, 9.119,
            -235.022, 223.457, 9.119,
            -235.022, 223.457, 9.119,
            -235.022, 188.968, 9.119,
            -219.144, 188.968, 9.119,
            -219.144, 188.968, -15.663,
            -219.144, 223.457, -15.663,
            -219.144, 223.457, 9.119,
            -219.144, 223.457, 9.119,
            -219.144, 188.968, 9.119,
            -219.144, 188.968, -15.663,
            -219.144, 223.457, -15.663,
            -235.022, 223.457, -15.663,
            -235.022, 223.457, 9.119,
            -235.022, 223.457, 9.119,
            -219.144, 223.457, 9.119,
            -219.144, 223.457, -15.663,
            -235.022, 223.457, -15.663,
            -235.022, 188.968, -15.663,
            -235.022, 188.968, 9.119,
            -235.022, 188.968, 9.119,
            -235.022, 223.457, 9.119,
            -235.022, 223.457, -15.663,
            -235.022, 188.968, -15.663,
            -219.144, 188.968, -15.663,
            -219.144, 188.968, 9.119,
            -219.144, 188.968, 9.119,
            -235.022, 188.968, 9.119,
               -235.022, 188.968, -15.663
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
               -0.000, -1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xBFBFC1,
            shininess: 2.297,
            ambient: 0x0B0101,
            side: THREE.FrontSide,
            specular: 0xD2D2D2
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
