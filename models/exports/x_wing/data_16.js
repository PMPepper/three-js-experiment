function create_geometry_16(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            14.173, -45.152, -29.590,
            16.825, -32.842, -31.804,
            16.340, -25.008, -28.141,
            18.814, 25.710, -17.071,
            14.173, -45.152, -29.590,
               16.340, -25.008, -28.141
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.912, -0.126, 0.391,
            0.912, -0.126, 0.391,
            0.912, -0.126, 0.391,
            0.921, -0.126, 0.370,
            0.921, -0.126, 0.370,
               0.921, -0.126, 0.370
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.552, 0.798,
               0.526, 0.773,
               0.509, 0.814,
               0.400, 0.939,
               0.552, 0.798,
               0.509, 0.814
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_XSIDE.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
