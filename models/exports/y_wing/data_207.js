function create_geometry_207(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            428.440, 105.893, -115.914,
            432.263, 67.906, -112.090,
            416.005, 62.858, -109.341,
            416.005, 62.858, -109.341,
            416.005, 113.644, -109.341,
            428.440, 105.893, -115.914,
            442.737, 105.893, -101.617,
            436.164, 113.644, -89.182,
            436.164, 62.858, -89.182,
            436.164, 62.858, -89.182,
            438.913, 67.906, -105.440,
            442.737, 105.893, -101.617,
            442.737, 105.893, -101.617,
            428.440, 105.893, -115.914,
            416.005, 113.644, -109.341,
            416.005, 113.644, -109.341,
            436.164, 113.644, -89.182,
            442.737, 105.893, -101.617,
            438.913, 67.906, -105.440,
            432.263, 67.906, -112.090,
            428.440, 105.893, -115.914,
            428.440, 105.893, -115.914,
            442.737, 105.893, -101.617,
            438.913, 67.906, -105.440,
            436.164, 62.858, -89.182,
            416.005, 62.858, -109.341,
            432.263, 67.906, -112.090,
            432.263, 67.906, -112.090,
            438.913, 67.906, -105.440,
               436.164, 62.858, -89.182
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.412, -0.020, 0.911,
            0.132, -0.112, 0.985,
            0.216, -0.086, 0.972,
            0.216, -0.086, 0.972,
            0.467, 0.000, 0.884,
            0.412, -0.020, 0.911,
            -0.911, -0.020, -0.412,
            -0.884, 0.000, -0.467,
            -0.973, -0.086, -0.216,
            -0.973, -0.086, -0.216,
            -0.985, -0.112, -0.132,
            -0.911, -0.020, -0.412,
            -0.353, 0.866, 0.353,
            -0.353, 0.866, 0.353,
            -0.353, 0.866, 0.353,
            -0.353, 0.866, 0.353,
            -0.353, 0.866, 0.353,
            -0.353, 0.866, 0.353,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.249, -0.936, 0.249,
            -0.249, -0.936, 0.249,
            -0.249, -0.936, 0.249,
            -0.249, -0.936, 0.249,
            -0.249, -0.936, 0.249,
               -0.249, -0.936, 0.249
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
