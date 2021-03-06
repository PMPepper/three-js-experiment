function create_geometry_92(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -312.373, 62.858, 36.276,
            -296.114, 67.906, 39.025,
            -299.938, 105.893, 42.849,
            -299.938, 105.893, 42.849,
            -312.373, 113.644, 36.276,
            -312.373, 62.858, 36.276,
            -292.214, 62.858, 16.117,
            -292.214, 113.644, 16.117,
            -285.641, 105.893, 28.551,
            -285.641, 105.893, 28.551,
            -289.464, 67.906, 32.375,
            -292.214, 62.858, 16.117,
            -312.373, 113.644, 36.276,
            -299.938, 105.893, 42.849,
            -285.641, 105.893, 28.551,
            -285.641, 105.893, 28.551,
            -292.214, 113.644, 16.117,
            -312.373, 113.644, 36.276,
            -299.938, 105.893, 42.849,
            -296.114, 67.906, 39.025,
            -289.464, 67.906, 32.375,
            -289.464, 67.906, 32.375,
            -285.641, 105.893, 28.551,
            -299.938, 105.893, 42.849,
            -296.114, 67.906, 39.025,
            -312.373, 62.858, 36.276,
            -292.214, 62.858, 16.117,
            -292.214, 62.858, 16.117,
            -289.464, 67.906, 32.375,
               -296.114, 67.906, 39.025
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.216, -0.086, 0.972,
            -0.132, -0.112, 0.985,
            -0.412, -0.020, 0.911,
            -0.412, -0.020, 0.911,
            -0.467, -0.000, 0.884,
            -0.216, -0.086, 0.972,
            0.972, -0.086, -0.216,
            0.884, 0.000, -0.467,
            0.911, -0.020, -0.412,
            0.911, -0.020, -0.412,
            0.985, -0.112, -0.132,
            0.972, -0.086, -0.216,
            0.353, 0.866, 0.353,
            0.353, 0.866, 0.353,
            0.353, 0.866, 0.353,
            0.353, 0.866, 0.353,
            0.353, 0.866, 0.353,
            0.353, 0.866, 0.353,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.249, -0.936, 0.249,
            0.249, -0.936, 0.249,
            0.249, -0.936, 0.249,
            0.249, -0.936, 0.249,
            0.249, -0.936, 0.249,
               0.249, -0.936, 0.249
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
