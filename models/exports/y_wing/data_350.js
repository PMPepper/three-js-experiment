function create_geometry_350(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -197.694, 183.148, -24.082,
            -269.560, 183.148, -24.082,
            -269.560, 241.091, -24.082,
            -269.560, 241.091, -24.082,
            -197.694, 241.091, -24.082,
            -197.694, 183.148, -24.082,
            -197.694, 183.148, 0.700,
            -197.694, 241.091, 0.700,
            -269.560, 241.091, 0.700,
            -269.560, 241.091, 0.700,
            -269.560, 183.148, 0.700,
            -197.694, 183.148, 0.700,
            -197.694, 183.148, -24.082,
            -197.694, 241.091, -24.082,
            -197.694, 241.091, 0.700,
            -197.694, 241.091, 0.700,
            -197.694, 183.148, 0.700,
            -197.694, 183.148, -24.082,
            -197.694, 241.091, -24.082,
            -269.560, 241.091, -24.082,
            -269.560, 241.091, 0.700,
            -269.560, 241.091, 0.700,
            -197.694, 241.091, 0.700,
            -197.694, 241.091, -24.082,
            -269.560, 241.091, -24.082,
            -269.560, 183.148, -24.082,
            -269.560, 183.148, 0.700,
            -269.560, 183.148, 0.700,
            -269.560, 241.091, 0.700,
            -269.560, 241.091, -24.082,
            -269.560, 183.148, -24.082,
            -197.694, 183.148, -24.082,
            -197.694, 183.148, 0.700,
            -197.694, 183.148, 0.700,
            -269.560, 183.148, 0.700,
               -269.560, 183.148, -24.082
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
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