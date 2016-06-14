function create_geometry_422(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -380.346, 97.749,
            -0.561, -380.823, 120.870,
            0.000, -380.749, 120.872,
            -0.000, -380.346, 97.749,
            -0.561, -380.419, 97.748,
            -0.561, -380.823, 120.870,
            -0.561, -380.419, 97.748,
            -1.083, -381.039, 120.867,
            -0.561, -380.823, 120.870,
            -0.561, -380.419, 97.748,
            -1.083, -380.636, 97.744,
            -1.083, -381.039, 120.867,
            -1.083, -380.636, 97.744,
            -1.532, -381.384, 120.861,
            -1.083, -381.039, 120.867,
            -1.083, -380.636, 97.744,
            -1.532, -380.980, 97.738,
            -1.532, -381.384, 120.861,
            -1.532, -380.980, 97.738,
            -1.876, -381.832, 120.853,
            -1.532, -381.384, 120.861,
            -1.532, -380.980, 97.738,
            -1.876, -381.428, 97.730,
            -1.876, -381.832, 120.853,
            -1.876, -381.428, 97.730,
            -2.092, -382.355, 120.844,
            -1.876, -381.832, 120.853,
            -1.876, -381.428, 97.730,
            -2.092, -381.951, 97.721,
            -2.092, -382.355, 120.844,
            -2.092, -381.951, 97.721,
            -2.166, -382.915, 120.834,
            -2.092, -382.355, 120.844,
            -2.092, -381.951, 97.721,
            -2.166, -382.511, 97.711,
            -2.166, -382.915, 120.834,
            -2.166, -382.511, 97.711,
            -2.092, -383.475, 120.824,
            -2.166, -382.915, 120.834,
            -2.166, -382.511, 97.711,
            -2.092, -383.072, 97.701,
            -2.092, -383.475, 120.824,
            -2.092, -383.072, 97.701,
            -1.876, -383.998, 120.815,
            -2.092, -383.475, 120.824,
            -2.092, -383.072, 97.701,
            -1.876, -383.594, 97.692,
            -1.876, -383.998, 120.815,
            -1.876, -383.594, 97.692,
            -1.532, -384.446, 120.807,
            -1.876, -383.998, 120.815,
            -1.876, -383.594, 97.692,
            -1.532, -384.043, 97.684,
            -1.532, -384.446, 120.807,
            -1.532, -384.043, 97.684,
            -1.083, -384.790, 120.801,
            -1.532, -384.446, 120.807,
            -1.532, -384.043, 97.684,
            -1.083, -384.387, 97.678,
            -1.083, -384.790, 120.801,
            -1.083, -384.387, 97.678,
            -0.561, -385.007, 120.797,
            -1.083, -384.790, 120.801,
            -1.083, -384.387, 97.678,
            -0.561, -384.603, 97.675,
            -0.561, -385.007, 120.797,
            -0.561, -384.603, 97.675,
            0.000, -385.081, 120.796,
            -0.561, -385.007, 120.797,
            -0.561, -384.603, 97.675,
            -0.000, -384.677, 97.673,
            0.000, -385.081, 120.796,
            -0.000, -384.677, 97.673,
            0.561, -385.007, 120.797,
            0.000, -385.081, 120.796,
            -0.000, -384.677, 97.673,
            0.561, -384.603, 97.675,
            0.561, -385.007, 120.797,
            0.561, -384.603, 97.675,
            1.083, -384.790, 120.801,
            0.561, -385.007, 120.797,
            0.561, -384.603, 97.675,
            1.083, -384.387, 97.678,
            1.083, -384.790, 120.801,
            1.083, -384.387, 97.678,
            1.532, -384.446, 120.807,
            1.083, -384.790, 120.801,
            1.083, -384.387, 97.678,
            1.532, -384.043, 97.684,
            1.532, -384.446, 120.807,
            1.532, -384.043, 97.684,
            1.876, -383.998, 120.815,
            1.532, -384.446, 120.807,
            1.532, -384.043, 97.684,
            1.876, -383.594, 97.692,
            1.876, -383.998, 120.815,
            1.876, -383.594, 97.692,
            2.092, -383.475, 120.824,
            1.876, -383.998, 120.815,
            1.876, -383.594, 97.692,
            2.092, -383.072, 97.701,
            2.092, -383.475, 120.824,
            2.092, -383.072, 97.701,
            2.166, -382.915, 120.834,
            2.092, -383.475, 120.824,
            2.092, -383.072, 97.701,
            2.166, -382.511, 97.711,
            2.166, -382.915, 120.834,
            2.166, -382.511, 97.711,
            2.092, -382.355, 120.844,
            2.166, -382.915, 120.834,
            2.166, -382.511, 97.711,
            2.092, -381.951, 97.721,
            2.092, -382.355, 120.844,
            2.092, -381.951, 97.721,
            1.876, -381.832, 120.853,
            2.092, -382.355, 120.844,
            2.092, -381.951, 97.721,
            1.876, -381.428, 97.730,
            1.876, -381.832, 120.853,
            1.876, -381.428, 97.730,
            1.532, -381.384, 120.861,
            1.876, -381.832, 120.853,
            1.876, -381.428, 97.730,
            1.532, -380.980, 97.738,
            1.532, -381.384, 120.861,
            1.532, -380.980, 97.738,
            1.083, -381.039, 120.867,
            1.532, -381.384, 120.861,
            1.532, -380.980, 97.738,
            1.083, -380.636, 97.744,
            1.083, -381.039, 120.867,
            1.083, -380.636, 97.744,
            0.561, -380.823, 120.870,
            1.083, -381.039, 120.867,
            1.083, -380.636, 97.744,
            0.561, -380.419, 97.748,
            0.561, -380.823, 120.870,
            0.561, -380.419, 97.748,
            0.000, -380.749, 120.872,
            0.561, -380.823, 120.870,
            0.561, -380.419, 97.748,
            -0.000, -380.346, 97.749,
               0.000, -380.749, 120.872
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.017,
            -0.259, 0.966, 0.017,
            -0.000, 1.000, 0.017,
            -0.000, 1.000, 0.017,
            -0.259, 0.966, 0.017,
            -0.259, 0.966, 0.017,
            -0.259, 0.966, 0.017,
            -0.500, 0.866, 0.015,
            -0.259, 0.966, 0.017,
            -0.259, 0.966, 0.017,
            -0.500, 0.866, 0.015,
            -0.500, 0.866, 0.015,
            -0.500, 0.866, 0.015,
            -0.707, 0.707, 0.012,
            -0.500, 0.866, 0.015,
            -0.500, 0.866, 0.015,
            -0.707, 0.707, 0.012,
            -0.707, 0.707, 0.012,
            -0.707, 0.707, 0.012,
            -0.866, 0.500, 0.009,
            -0.707, 0.707, 0.012,
            -0.707, 0.707, 0.012,
            -0.866, 0.500, 0.009,
            -0.866, 0.500, 0.009,
            -0.866, 0.500, 0.009,
            -0.966, 0.259, 0.005,
            -0.866, 0.500, 0.009,
            -0.866, 0.500, 0.009,
            -0.966, 0.259, 0.005,
            -0.966, 0.259, 0.005,
            -0.966, 0.259, 0.005,
            -1.000, -0.000, 0.000,
            -0.966, 0.259, 0.005,
            -0.966, 0.259, 0.005,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -0.966, -0.259, -0.005,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -0.966, -0.259, -0.005,
            -0.966, -0.259, -0.005,
            -0.966, -0.259, -0.005,
            -0.866, -0.500, -0.009,
            -0.966, -0.259, -0.005,
            -0.966, -0.259, -0.005,
            -0.866, -0.500, -0.009,
            -0.866, -0.500, -0.009,
            -0.866, -0.500, -0.009,
            -0.707, -0.707, -0.012,
            -0.866, -0.500, -0.009,
            -0.866, -0.500, -0.009,
            -0.707, -0.707, -0.012,
            -0.707, -0.707, -0.012,
            -0.707, -0.707, -0.012,
            -0.500, -0.866, -0.015,
            -0.707, -0.707, -0.012,
            -0.707, -0.707, -0.012,
            -0.500, -0.866, -0.015,
            -0.500, -0.866, -0.015,
            -0.500, -0.866, -0.015,
            -0.259, -0.966, -0.017,
            -0.500, -0.866, -0.015,
            -0.500, -0.866, -0.015,
            -0.259, -0.966, -0.017,
            -0.259, -0.966, -0.017,
            -0.259, -0.966, -0.017,
            -0.000, -1.000, -0.017,
            -0.259, -0.966, -0.017,
            -0.259, -0.966, -0.017,
            0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            0.000, -1.000, -0.017,
            0.259, -0.966, -0.017,
            -0.000, -1.000, -0.017,
            0.000, -1.000, -0.017,
            0.259, -0.966, -0.017,
            0.259, -0.966, -0.017,
            0.259, -0.966, -0.017,
            0.500, -0.866, -0.015,
            0.259, -0.966, -0.017,
            0.259, -0.966, -0.017,
            0.500, -0.866, -0.015,
            0.500, -0.866, -0.015,
            0.500, -0.866, -0.015,
            0.707, -0.707, -0.012,
            0.500, -0.866, -0.015,
            0.500, -0.866, -0.015,
            0.707, -0.707, -0.012,
            0.707, -0.707, -0.012,
            0.707, -0.707, -0.012,
            0.866, -0.500, -0.009,
            0.707, -0.707, -0.012,
            0.707, -0.707, -0.012,
            0.866, -0.500, -0.009,
            0.866, -0.500, -0.009,
            0.866, -0.500, -0.009,
            0.966, -0.259, -0.005,
            0.866, -0.500, -0.009,
            0.866, -0.500, -0.009,
            0.966, -0.259, -0.005,
            0.966, -0.259, -0.005,
            0.966, -0.259, -0.005,
            1.000, 0.000, -0.000,
            0.966, -0.259, -0.005,
            0.966, -0.259, -0.005,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            0.966, 0.259, 0.005,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            0.966, 0.259, 0.005,
            0.966, 0.259, 0.005,
            0.966, 0.259, 0.005,
            0.866, 0.500, 0.009,
            0.966, 0.259, 0.005,
            0.966, 0.259, 0.005,
            0.866, 0.500, 0.009,
            0.866, 0.500, 0.009,
            0.866, 0.500, 0.009,
            0.707, 0.707, 0.012,
            0.866, 0.500, 0.009,
            0.866, 0.500, 0.009,
            0.707, 0.707, 0.012,
            0.707, 0.707, 0.012,
            0.707, 0.707, 0.012,
            0.500, 0.866, 0.015,
            0.707, 0.707, 0.012,
            0.707, 0.707, 0.012,
            0.500, 0.866, 0.015,
            0.500, 0.866, 0.015,
            0.500, 0.866, 0.015,
            0.259, 0.966, 0.017,
            0.500, 0.866, 0.015,
            0.500, 0.866, 0.015,
            0.259, 0.966, 0.017,
            0.259, 0.966, 0.017,
            0.259, 0.966, 0.017,
            -0.000, 1.000, 0.017,
            0.259, 0.966, 0.017,
            0.259, 0.966, 0.017,
            -0.000, 1.000, 0.017,
               -0.000, 1.000, 0.017
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
