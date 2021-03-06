function create_geometry_17(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            3.036, -2.082, -1.633,
            3.036, -2.082, -2.533,
            4.073, -2.082, -2.533,
            3.036, -2.082, -1.633,
            4.073, -2.082, -2.533,
            4.073, -2.082, -1.633,
            3.013, -2.060, -2.533,
            3.013, -2.060, -1.633,
            3.013, 0.657, -1.633,
            3.013, -2.060, -2.533,
            3.013, 0.657, -1.633,
            3.013, 0.657, -2.533,
            5.690, 0.917, -1.633,
            5.690, 0.917, -2.533,
            5.553, 0.917, -2.533,
            5.690, 0.917, -1.633,
            5.553, 0.917, -2.533,
            5.553, 0.917, -1.633,
            5.713, 0.895, -2.533,
            5.713, 0.895, -1.633,
            5.713, -0.683, -1.633,
            5.713, 0.895, -2.533,
            5.713, -0.683, -1.633,
            5.713, -0.683, -2.533,
            5.713, 0.895, -2.533,
            5.701, 0.906, -2.545,
            5.690, 0.917, -2.533,
            5.713, 0.895, -2.533,
            5.690, 0.917, -2.533,
            5.690, 0.917, -1.633,
            5.713, 0.895, -2.533,
            5.690, 0.917, -1.633,
            5.713, 0.895, -1.633,
            3.013, -2.060, -2.533,
            3.024, -2.071, -2.545,
            3.036, -2.082, -2.533,
            3.013, -2.060, -2.533,
            3.036, -2.082, -2.533,
            3.036, -2.082, -1.633,
            3.013, -2.060, -2.533,
            3.036, -2.082, -1.633,
            3.013, -2.060, -1.633,
            4.513, 0.917, -1.633,
            4.583, 0.937, -1.703,
            4.583, 0.937, -2.533,
            4.513, 0.917, -1.633,
            4.583, 0.937, -2.533,
            4.513, 0.917, -2.533,
            5.553, 0.917, -1.633,
            5.483, 0.937, -1.703,
            4.583, 0.937, -1.703,
            5.553, 0.917, -1.633,
            4.583, 0.937, -1.703,
            4.513, 0.917, -1.633,
            5.553, 0.917, -2.533,
            5.483, 0.937, -2.533,
            5.483, 0.937, -1.703,
            5.553, 0.917, -2.533,
            5.483, 0.937, -1.703,
            5.553, 0.917, -1.633,
            5.483, 0.937, -1.703,
            5.483, 0.937, -2.533,
            4.583, 0.937, -2.533,
            5.483, 0.937, -1.703,
            4.583, 0.937, -2.533,
            4.583, 0.937, -1.703,
            5.553, -0.563, -1.633,
            5.553, -0.563, -2.533,
            5.553, 0.917, -2.533,
            5.553, -0.563, -1.633,
            5.553, 0.917, -2.533,
            5.553, 0.917, -1.633,
            4.513, -0.563, -1.633,
            4.513, -0.563, -2.533,
            5.553, -0.563, -2.533,
            4.513, -0.563, -1.633,
            5.553, -0.563, -2.533,
            5.553, -0.563, -1.633,
            4.513, 0.917, -1.633,
            4.513, 0.917, -2.533,
            4.513, -0.563, -2.533,
            4.513, 0.917, -1.633,
            4.513, -0.563, -2.533,
            4.513, -0.563, -1.633,
            5.713, -1.083, -1.633,
            5.713, -1.083, -2.533,
            5.713, -0.683, -2.533,
            5.713, -1.083, -1.633,
            5.713, -0.683, -2.533,
            5.713, -0.683, -1.633,
            4.913, -1.583, -1.633,
            4.913, -1.583, -2.533,
            5.713, -1.083, -2.533,
            4.913, -1.583, -1.633,
            5.713, -1.083, -2.533,
            5.713, -1.083, -1.633,
            4.073, -2.082, -1.633,
            4.073, -2.082, -2.533,
            4.913, -1.583, -2.533,
            4.073, -2.082, -1.633,
            4.913, -1.583, -2.533,
            4.913, -1.583, -1.633,
            3.333, 0.917, -1.633,
            3.333, 0.917, -2.533,
            3.013, 0.657, -2.533,
            3.333, 0.917, -1.633,
            3.013, 0.657, -2.533,
            3.013, 0.657, -1.633,
            4.513, 0.917, -1.633,
            4.513, 0.917, -2.533,
            3.333, 0.917, -2.533,
            4.513, 0.917, -1.633,
            3.333, 0.917, -2.533,
            3.333, 0.917, -1.633,
            4.513, -0.563, -1.633,
            4.513, -0.563, -2.533,
            4.513, 0.917, -2.533,
            4.513, -0.563, -1.633,
            4.513, 0.917, -2.533,
            4.513, 0.917, -1.633,
            5.553, -0.563, -1.633,
            5.553, -0.563, -2.533,
            4.513, -0.563, -2.533,
            5.553, -0.563, -1.633,
            4.513, -0.563, -2.533,
            4.513, -0.563, -1.633,
            5.553, 0.917, -1.633,
            5.553, 0.917, -2.533,
            5.553, -0.563, -2.533,
            5.553, 0.917, -1.633,
            5.553, -0.563, -2.533,
            5.553, -0.563, -1.633,
            -3.327, -2.082, -2.533,
            -2.290, -2.082, -2.533,
            -2.290, -2.082, -1.633,
            -3.327, -2.082, -2.533,
            -2.290, -2.082, -1.633,
            -3.327, -2.082, -1.633,
            -2.267, 0.658, -1.633,
            -2.267, -2.060, -1.633,
            -2.267, -2.060, -2.533,
            -2.267, 0.658, -1.633,
            -2.267, -2.060, -2.533,
            -2.267, 0.658, -2.533,
            -4.807, 0.918, -2.533,
            -4.944, 0.918, -2.533,
            -4.944, 0.918, -1.633,
            -4.807, 0.918, -2.533,
            -4.944, 0.918, -1.633,
            -4.807, 0.918, -1.633,
            -4.967, -0.682, -1.633,
            -4.967, 0.895, -1.633,
            -4.967, 0.895, -2.533,
            -4.967, -0.682, -1.633,
            -4.967, 0.895, -2.533,
            -4.967, -0.682, -2.533,
            -4.944, 0.918, -1.633,
            -4.944, 0.918, -2.533,
            -4.956, 0.906, -2.545,
            -4.944, 0.918, -1.633,
            -4.956, 0.906, -2.545,
            -4.967, 0.895, -2.533,
            -4.944, 0.918, -1.633,
            -4.967, 0.895, -2.533,
            -4.967, 0.895, -1.633,
            -2.290, -2.082, -1.633,
            -2.290, -2.082, -2.533,
            -2.279, -2.071, -2.545,
            -2.290, -2.082, -1.633,
            -2.279, -2.071, -2.545,
            -2.267, -2.060, -2.533,
            -2.290, -2.082, -1.633,
            -2.267, -2.060, -2.533,
            -2.267, -2.060, -1.633,
            -3.837, 0.938, -2.533,
            -3.837, 0.938, -1.703,
            -3.767, 0.918, -1.633,
            -3.837, 0.938, -2.533,
            -3.767, 0.918, -1.633,
            -3.767, 0.918, -2.533,
            -3.837, 0.938, -1.703,
            -4.737, 0.938, -1.703,
            -4.807, 0.918, -1.633,
            -3.837, 0.938, -1.703,
            -4.807, 0.918, -1.633,
            -3.767, 0.918, -1.633,
            -4.737, 0.938, -1.703,
            -4.737, 0.938, -2.533,
            -4.807, 0.918, -2.533,
            -4.737, 0.938, -1.703,
            -4.807, 0.918, -2.533,
            -4.807, 0.918, -1.633,
            -3.837, 0.938, -2.533,
            -4.737, 0.938, -2.533,
            -4.737, 0.938, -1.703,
            -3.837, 0.938, -2.533,
            -4.737, 0.938, -1.703,
            -3.837, 0.938, -1.703,
            -4.807, 0.918, -2.533,
            -4.807, -0.562, -2.533,
            -4.807, -0.562, -1.633,
            -4.807, 0.918, -2.533,
            -4.807, -0.562, -1.633,
            -4.807, 0.918, -1.633,
            -4.807, -0.562, -2.533,
            -3.767, -0.562, -2.533,
            -3.767, -0.562, -1.633,
            -4.807, -0.562, -2.533,
            -3.767, -0.562, -1.633,
            -4.807, -0.562, -1.633,
            -3.767, -0.562, -2.533,
            -3.767, 0.918, -2.533,
            -3.767, 0.918, -1.633,
            -3.767, -0.562, -2.533,
            -3.767, 0.918, -1.633,
            -3.767, -0.562, -1.633,
            -4.967, -0.682, -2.533,
            -4.967, -1.082, -2.533,
            -4.967, -1.082, -1.633,
            -4.967, -0.682, -2.533,
            -4.967, -1.082, -1.633,
            -4.967, -0.682, -1.633,
            -4.967, -1.082, -2.533,
            -4.167, -1.582, -2.533,
            -4.167, -1.582, -1.633,
            -4.967, -1.082, -2.533,
            -4.167, -1.582, -1.633,
            -4.967, -1.082, -1.633,
            -4.167, -1.582, -2.533,
            -3.327, -2.082, -2.533,
            -3.327, -2.082, -1.633,
            -4.167, -1.582, -2.533,
            -3.327, -2.082, -1.633,
            -4.167, -1.582, -1.633,
            -2.267, 0.658, -2.533,
            -2.587, 0.918, -2.533,
            -2.587, 0.918, -1.633,
            -2.267, 0.658, -2.533,
            -2.587, 0.918, -1.633,
            -2.267, 0.658, -1.633,
            -2.587, 0.918, -2.533,
            -3.767, 0.918, -2.533,
            -3.767, 0.918, -1.633,
            -2.587, 0.918, -2.533,
            -3.767, 0.918, -1.633,
            -2.587, 0.918, -1.633,
            -3.767, 0.918, -2.533,
            -3.767, -0.562, -2.533,
            -3.767, -0.562, -1.633,
            -3.767, 0.918, -2.533,
            -3.767, -0.562, -1.633,
            -3.767, 0.918, -1.633,
            -3.767, -0.562, -2.533,
            -4.807, -0.562, -2.533,
            -4.807, -0.562, -1.633,
            -3.767, -0.562, -2.533,
            -4.807, -0.562, -1.633,
            -3.767, -0.562, -1.633,
            -4.807, -0.562, -2.533,
            -4.807, 0.918, -2.533,
            -4.807, 0.918, -1.633,
            -4.807, -0.562, -2.533,
            -4.807, 0.918, -1.633,
               -4.807, -0.562, -1.633
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.265, -0.964, 0.000,
            -0.000, -1.000, 0.000,
            0.265, -0.964, 0.000,
            0.265, -0.964, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.139, 0.990, 0.000,
            0.000, 1.000, 0.000,
            0.139, 0.990, 0.000,
            0.071, 0.995, 0.071,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.071, 0.995, 0.071,
            -0.105, 0.989, 0.105,
            -0.139, 0.990, 0.000,
            -0.071, 0.995, 0.071,
            -0.139, 0.990, 0.000,
            -0.139, 0.990, 0.000,
            0.071, 0.995, 0.071,
            0.105, 0.989, 0.105,
            -0.105, 0.989, 0.105,
            0.071, 0.995, 0.071,
            -0.105, 0.989, 0.105,
            -0.071, 0.995, 0.071,
            0.139, 0.990, 0.000,
            0.139, 0.990, 0.000,
            0.105, 0.989, 0.105,
            0.139, 0.990, 0.000,
            0.105, 0.989, 0.105,
            0.071, 0.995, 0.071,
            0.105, 0.989, 0.105,
            0.139, 0.990, 0.000,
            -0.139, 0.990, 0.000,
            0.105, 0.989, 0.105,
            -0.139, 0.990, 0.000,
            -0.105, 0.989, 0.105,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.521, -0.854, 0.000,
            0.521, -0.854, 0.000,
            0.530, -0.848, 0.000,
            0.521, -0.854, 0.000,
            0.530, -0.848, 0.000,
            0.530, -0.848, 0.000,
            0.265, -0.964, 0.000,
            0.265, -0.964, 0.000,
            0.521, -0.854, 0.000,
            0.265, -0.964, 0.000,
            0.521, -0.854, 0.000,
            0.521, -0.854, 0.000,
            -0.631, 0.776, 0.000,
            -0.631, 0.776, 0.000,
            -0.631, 0.776, 0.000,
            -0.631, 0.776, 0.000,
            -0.631, 0.776, 0.000,
            -0.631, 0.776, 0.000,
            -0.071, 0.995, 0.071,
            -0.139, 0.990, 0.000,
            0.000, 1.000, 0.000,
            -0.071, 0.995, 0.071,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
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
            -0.265, -0.964, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.265, -0.964, 0.000,
            -0.000, -1.000, 0.000,
            -0.265, -0.964, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            -0.139, 0.990, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.139, 0.990, 0.000,
            0.000, 1.000, 0.000,
            -0.071, 0.995, 0.071,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.139, 0.990, 0.000,
            0.105, 0.989, 0.105,
            0.071, 0.995, 0.071,
            0.139, 0.990, 0.000,
            0.071, 0.995, 0.071,
            0.139, 0.990, 0.000,
            0.105, 0.989, 0.105,
            -0.105, 0.989, 0.105,
            -0.071, 0.995, 0.071,
            0.105, 0.989, 0.105,
            -0.071, 0.995, 0.071,
            0.071, 0.995, 0.071,
            -0.105, 0.989, 0.105,
            -0.139, 0.990, 0.000,
            -0.139, 0.990, 0.000,
            -0.105, 0.989, 0.105,
            -0.139, 0.990, 0.000,
            -0.071, 0.995, 0.071,
            0.139, 0.990, 0.000,
            -0.139, 0.990, 0.000,
            -0.105, 0.989, 0.105,
            0.139, 0.990, 0.000,
            -0.105, 0.989, 0.105,
            0.105, 0.989, 0.105,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.530, -0.848, 0.000,
            -0.521, -0.854, 0.000,
            -0.521, -0.854, 0.000,
            -0.530, -0.848, 0.000,
            -0.521, -0.854, 0.000,
            -0.530, -0.848, 0.000,
            -0.521, -0.854, 0.000,
            -0.265, -0.964, 0.000,
            -0.265, -0.964, 0.000,
            -0.521, -0.854, 0.000,
            -0.265, -0.964, 0.000,
            -0.521, -0.854, 0.000,
            0.631, 0.776, 0.000,
            0.631, 0.776, 0.000,
            0.631, 0.776, 0.000,
            0.631, 0.776, 0.000,
            0.631, 0.776, 0.000,
            0.631, 0.776, 0.000,
            0.000, 1.000, 0.000,
            0.139, 0.990, 0.000,
            0.071, 0.995, 0.071,
            0.000, 1.000, 0.000,
            0.071, 0.995, 0.071,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
               1.000, -0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.768, 0.892,
               0.768, -0.022,
               0.872, -0.022,
               0.768, 0.892,
               0.872, -0.022,
               0.872, 0.892,
               3.318, -0.022,
               3.318, 0.892,
               2.485, 0.892,
               3.318, -0.022,
               2.485, 0.892,
               2.485, -0.022,
               -0.034, 0.892,
               -0.034, -0.022,
               -0.020, -0.022,
               -0.034, 0.892,
               -0.020, -0.022,
               -0.020, 0.892,
               -1.413, -0.022,
               -1.413, 0.892,
               -1.896, 0.892,
               -1.413, -0.022,
               -1.896, 0.892,
               -1.896, -0.022,
               -1.413, -0.022,
               -1.409, -0.034,
               -1.406, -0.022,
               -1.413, -0.022,
               -1.406, -0.022,
               -1.406, 0.892,
               -1.413, -0.022,
               -1.406, 0.892,
               -1.413, 0.892,
               3.318, -0.022,
               3.322, -0.034,
               3.325, -0.022,
               3.318, -0.022,
               3.325, -0.022,
               3.325, 0.892,
               3.318, -0.022,
               3.325, 0.892,
               3.318, 0.892,
               0.084, 0.892,
               0.077, 0.821,
               0.077, -0.022,
               0.084, 0.892,
               0.077, -0.022,
               0.084, -0.022,
               -0.020, 0.892,
               -0.013, 0.821,
               0.077, 0.821,
               -0.020, 0.892,
               0.077, 0.821,
               0.084, 0.892,
               -0.020, -0.022,
               -0.013, -0.022,
               -0.013, 0.821,
               -0.020, -0.022,
               -0.013, 0.821,
               -0.020, 0.892,
               -0.013, 0.821,
               -0.013, -0.022,
               0.077, -0.022,
               -0.013, 0.821,
               0.077, -0.022,
               0.077, 0.821,
               -1.859, 0.892,
               -1.859, -0.022,
               -1.406, -0.022,
               -1.859, 0.892,
               -1.406, -0.022,
               -1.406, 0.892,
               0.916, 0.892,
               0.916, -0.022,
               1.020, -0.022,
               0.916, 0.892,
               1.020, -0.022,
               1.020, 0.892,
               2.406, 0.892,
               2.406, -0.022,
               2.859, -0.022,
               2.406, 0.892,
               2.859, -0.022,
               2.859, 0.892,
               -2.019, 0.892,
               -2.019, -0.022,
               -1.896, -0.022,
               -2.019, 0.892,
               -1.896, -0.022,
               -1.896, 0.892,
               0.956, 0.892,
               0.956, -0.022,
               1.036, -0.022,
               0.956, 0.892,
               1.036, -0.022,
               1.036, 0.892,
               0.872, 0.892,
               0.872, -0.022,
               0.956, -0.022,
               0.872, 0.892,
               0.956, -0.022,
               0.956, 0.892,
               0.203, 0.892,
               0.203, -0.022,
               0.235, -0.022,
               0.203, 0.892,
               0.235, -0.022,
               0.235, 0.892,
               0.084, 0.892,
               0.084, -0.022,
               0.203, -0.022,
               0.084, 0.892,
               0.203, -0.022,
               0.203, 0.892,
               -1.859, 0.892,
               -1.859, -0.022,
               -1.406, -0.022,
               -1.859, 0.892,
               -1.406, -0.022,
               -1.406, 0.892,
               -0.020, 0.892,
               -0.020, -0.022,
               0.084, -0.022,
               -0.020, 0.892,
               0.084, -0.022,
               0.084, 0.892,
               2.406, 0.892,
               2.406, -0.022,
               2.859, -0.022,
               2.406, 0.892,
               2.859, -0.022,
               2.859, 0.892,
               0.128, -0.022,
               0.232, -0.022,
               0.232, 0.892,
               0.128, -0.022,
               0.232, 0.892,
               0.128, 0.892,
               -1.485, 0.892,
               -2.318, 0.892,
               -2.318, -0.022,
               -1.485, 0.892,
               -2.318, -0.022,
               -1.485, -0.022,
               1.020, -0.022,
               1.034, -0.022,
               1.034, 0.892,
               1.020, -0.022,
               1.034, 0.892,
               1.020, 0.892,
               2.896, 0.892,
               2.413, 0.892,
               2.413, -0.022,
               2.896, 0.892,
               2.413, -0.022,
               2.896, -0.022,
               2.406, 0.892,
               2.406, -0.022,
               2.409, -0.034,
               2.406, 0.892,
               2.409, -0.034,
               2.413, -0.022,
               2.406, 0.892,
               2.413, -0.022,
               2.413, 0.892,
               -2.325, 0.892,
               -2.325, -0.022,
               -2.322, -0.034,
               -2.325, 0.892,
               -2.322, -0.034,
               -2.318, -0.022,
               -2.325, 0.892,
               -2.318, -0.022,
               -2.318, 0.892,
               0.923, -0.022,
               0.923, 0.821,
               0.916, 0.892,
               0.923, -0.022,
               0.916, 0.892,
               0.916, -0.022,
               0.923, 0.821,
               1.013, 0.821,
               1.020, 0.892,
               0.923, 0.821,
               1.020, 0.892,
               0.916, 0.892,
               1.013, 0.821,
               1.013, -0.022,
               1.020, -0.022,
               1.013, 0.821,
               1.020, -0.022,
               1.020, 0.892,
               0.923, -0.022,
               1.013, -0.022,
               1.013, 0.821,
               0.923, -0.022,
               1.013, 0.821,
               0.923, 0.821,
               2.406, -0.022,
               2.859, -0.022,
               2.859, 0.892,
               2.406, -0.022,
               2.859, 0.892,
               2.406, 0.892,
               -0.020, -0.022,
               0.084, -0.022,
               0.084, 0.892,
               -0.020, -0.022,
               0.084, 0.892,
               -0.020, 0.892,
               -1.859, -0.022,
               -1.406, -0.022,
               -1.406, 0.892,
               -1.859, -0.022,
               -1.406, 0.892,
               -1.859, 0.892,
               2.896, -0.022,
               3.019, -0.022,
               3.019, 0.892,
               2.896, -0.022,
               3.019, 0.892,
               2.896, 0.892,
               -0.036, -0.022,
               0.044, -0.022,
               0.044, 0.892,
               -0.036, -0.022,
               0.044, 0.892,
               -0.036, 0.892,
               0.044, -0.022,
               0.128, -0.022,
               0.128, 0.892,
               0.044, -0.022,
               0.128, 0.892,
               0.044, 0.892,
               0.765, -0.022,
               0.797, -0.022,
               0.797, 0.892,
               0.765, -0.022,
               0.797, 0.892,
               0.765, 0.892,
               0.797, -0.022,
               0.916, -0.022,
               0.916, 0.892,
               0.797, -0.022,
               0.916, 0.892,
               0.797, 0.892,
               2.406, -0.022,
               2.859, -0.022,
               2.859, 0.892,
               2.406, -0.022,
               2.859, 0.892,
               2.406, 0.892,
               0.916, -0.022,
               1.020, -0.022,
               1.020, 0.892,
               0.916, -0.022,
               1.020, 0.892,
               0.916, 0.892,
               -1.859, -0.022,
               -1.406, -0.022,
               -1.406, 0.892,
               -1.859, -0.022,
               -1.406, 0.892,
               -1.859, 0.892
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_EBOTTOM2.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
