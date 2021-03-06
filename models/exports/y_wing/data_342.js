function create_geometry_342(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            218.513, 266.201, 7.012,
            202.634, 266.201, 7.012,
            202.634, 231.712, 7.012,
            202.634, 231.712, 7.012,
            218.513, 231.712, 7.012,
            218.513, 266.201, 7.012,
            202.634, 266.201, 7.012,
            202.634, 266.201, -17.769,
            202.634, 231.712, -17.769,
            202.634, 231.712, -17.769,
            202.634, 231.712, 7.012,
            202.634, 266.201, 7.012,
            218.513, 266.201, 7.012,
            218.513, 266.201, -17.769,
            202.634, 266.201, -17.769,
            202.634, 266.201, -17.769,
            202.634, 266.201, 7.012,
            218.513, 266.201, 7.012,
            218.513, 231.712, 7.012,
            218.513, 231.712, -17.769,
            218.513, 266.201, -17.769,
            218.513, 266.201, -17.769,
            218.513, 266.201, 7.012,
            218.513, 231.712, 7.012,
            202.634, 231.712, 7.012,
            202.634, 231.712, -17.769,
            218.513, 231.712, -17.769,
            218.513, 231.712, -17.769,
            218.513, 231.712, 7.012,
               202.634, 231.712, 7.012
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
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
