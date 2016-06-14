function create_geometry_280(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            465.681, 326.621, -24.336,
            425.279, 297.911, -24.336,
            467.616, 324.315, -23.939,
            425.279, 297.911, -24.336,
            425.279, 291.859, -23.939,
            467.616, 324.315, -23.939,
            425.279, 297.498, -25.102,
            465.813, 326.464, -25.102,
            425.279, 291.859, -24.732,
            465.813, 326.464, -25.102,
            467.616, 324.315, -24.732,
            425.279, 291.859, -24.732,
            465.813, 326.464, -25.102,
            465.681, 326.621, -24.336,
            467.616, 324.315, -24.732,
            465.681, 326.621, -24.336,
            467.616, 324.315, -23.939,
            467.616, 324.315, -24.732,
            463.877, 328.770, -25.498,
            425.279, 303.550, -25.498,
            465.681, 326.621, -24.336,
            425.279, 303.550, -25.498,
            425.279, 297.911, -24.336,
            465.681, 326.621, -24.336,
            425.279, 302.753, -26.185,
            464.132, 328.467, -26.185,
            425.279, 297.498, -25.102,
            464.132, 328.467, -26.185,
            465.813, 326.464, -25.102,
            425.279, 297.498, -25.102,
            464.132, 328.467, -26.185,
            463.877, 328.770, -25.498,
            465.813, 326.464, -25.102,
            463.877, 328.770, -25.498,
            465.681, 326.621, -24.336,
            465.813, 326.464, -25.102,
            462.329, 330.616, -27.347,
            425.279, 308.393, -27.347,
            463.877, 328.770, -25.498,
            425.279, 308.393, -27.347,
            425.279, 303.550, -25.498,
            463.877, 328.770, -25.498,
            425.279, 307.266, -27.907,
            462.689, 330.187, -27.907,
            425.279, 302.753, -26.185,
            462.689, 330.187, -27.907,
            464.132, 328.467, -26.185,
            425.279, 302.753, -26.185,
            462.689, 330.187, -27.907,
            462.329, 330.616, -27.347,
            464.132, 328.467, -26.185,
            462.329, 330.616, -27.347,
            463.877, 328.770, -25.498,
            464.132, 328.467, -26.185,
            461.140, 332.032, -29.756,
            425.279, 312.109, -29.756,
            462.329, 330.616, -27.347,
            425.279, 312.109, -29.756,
            425.279, 308.393, -27.347,
            462.329, 330.616, -27.347,
            425.279, 310.728, -30.152,
            461.582, 331.506, -30.153,
            425.279, 307.266, -27.907,
            461.582, 331.506, -30.153,
            462.689, 330.187, -27.907,
            425.279, 307.266, -27.907,
            461.582, 331.506, -30.153,
            461.140, 332.032, -29.756,
            462.689, 330.187, -27.907,
            461.140, 332.032, -29.756,
            462.329, 330.616, -27.347,
            462.689, 330.187, -27.907,
            460.393, 332.923, -32.562,
            425.279, 314.445, -32.562,
            461.140, 332.032, -29.756,
            425.279, 314.445, -32.562,
            425.279, 312.109, -29.756,
            461.140, 332.032, -29.756,
            425.279, 312.905, -32.767,
            460.886, 332.336, -32.767,
            425.279, 310.728, -30.152,
            460.886, 332.336, -32.767,
            461.582, 331.506, -30.153,
            425.279, 310.728, -30.152,
            460.886, 332.336, -32.767,
            460.393, 332.923, -32.562,
            461.582, 331.506, -30.153,
            460.393, 332.923, -32.562,
            461.140, 332.032, -29.756,
            461.582, 331.506, -30.153,
            460.138, 333.226, -35.573,
            425.279, 315.242, -35.573,
            460.393, 332.923, -32.562,
            425.279, 315.242, -35.573,
            425.279, 314.445, -32.562,
            460.393, 332.923, -32.562,
            425.279, 313.647, -35.573,
            460.648, 332.619, -35.573,
            425.279, 312.905, -32.767,
            460.648, 332.619, -35.573,
            460.886, 332.336, -32.767,
            425.279, 312.905, -32.767,
            460.648, 332.619, -35.573,
            460.138, 333.226, -35.573,
            460.886, 332.336, -32.767,
            460.138, 333.226, -35.573,
            460.393, 332.923, -32.562,
            460.886, 332.336, -32.767,
            460.393, 332.923, -38.584,
            425.279, 314.445, -38.583,
            460.138, 333.226, -35.573,
            425.279, 314.445, -38.583,
            425.279, 315.242, -35.573,
            460.138, 333.226, -35.573,
            425.279, 312.905, -38.378,
            460.886, 332.336, -38.378,
            425.279, 313.647, -35.573,
            460.886, 332.336, -38.378,
            460.648, 332.619, -35.573,
            425.279, 313.647, -35.573,
            460.886, 332.336, -38.378,
            460.393, 332.923, -38.584,
            460.648, 332.619, -35.573,
            460.393, 332.923, -38.584,
            460.138, 333.226, -35.573,
            460.648, 332.619, -35.573,
            461.140, 332.032, -41.389,
            425.279, 312.109, -41.389,
            460.393, 332.923, -38.584,
            425.279, 312.109, -41.389,
            425.279, 314.445, -38.583,
            460.393, 332.923, -38.584,
            425.279, 310.728, -40.993,
            461.582, 331.506, -40.993,
            425.279, 312.905, -38.378,
            461.582, 331.506, -40.993,
            460.886, 332.336, -38.378,
            425.279, 312.905, -38.378,
            461.582, 331.506, -40.993,
            461.140, 332.032, -41.389,
            460.886, 332.336, -38.378,
            461.140, 332.032, -41.389,
            460.393, 332.923, -38.584,
            460.886, 332.336, -38.378,
            462.329, 330.616, -43.799,
            425.279, 308.393, -43.799,
            461.140, 332.032, -41.389,
            425.279, 308.393, -43.799,
            425.279, 312.109, -41.389,
            461.140, 332.032, -41.389,
            425.279, 307.266, -43.238,
            462.689, 330.187, -43.238,
            425.279, 310.728, -40.993,
            462.689, 330.187, -43.238,
            461.582, 331.506, -40.993,
            425.279, 310.728, -40.993,
            462.689, 330.187, -43.238,
            462.329, 330.616, -43.799,
            461.582, 331.506, -40.993,
            462.329, 330.616, -43.799,
            461.140, 332.032, -41.389,
            461.582, 331.506, -40.993,
            463.877, 328.770, -45.647,
            425.279, 303.550, -45.647,
            462.329, 330.616, -43.799,
            425.279, 303.550, -45.647,
            425.279, 308.393, -43.799,
            462.329, 330.616, -43.799,
            425.279, 302.753, -44.960,
            464.132, 328.467, -44.960,
            425.279, 307.266, -43.238,
            464.132, 328.467, -44.960,
            462.689, 330.187, -43.238,
            425.279, 307.266, -43.238,
            464.132, 328.467, -44.960,
            463.877, 328.770, -45.647,
            462.689, 330.187, -43.238,
            463.877, 328.770, -45.647,
            462.329, 330.616, -43.799,
            462.689, 330.187, -43.238,
            465.681, 326.621, -46.809,
            425.279, 297.911, -46.809,
            463.877, 328.770, -45.647,
            425.279, 297.911, -46.809,
            425.279, 303.550, -45.647,
            463.877, 328.770, -45.647,
            425.279, 297.498, -46.043,
            465.813, 326.464, -46.043,
            425.279, 302.753, -44.960,
            465.813, 326.464, -46.043,
            464.132, 328.467, -44.960,
            425.279, 302.753, -44.960,
            465.813, 326.464, -46.043,
            465.681, 326.621, -46.809,
            464.132, 328.467, -44.960,
            465.681, 326.621, -46.809,
            463.877, 328.770, -45.647,
            464.132, 328.467, -44.960,
            467.616, 324.315, -47.206,
            425.279, 291.859, -47.206,
            465.681, 326.621, -46.809,
            425.279, 291.859, -47.206,
            425.279, 297.911, -46.809,
            465.681, 326.621, -46.809,
            425.279, 291.859, -46.413,
            467.616, 324.315, -46.413,
            425.279, 297.498, -46.043,
            467.616, 324.315, -46.413,
            465.813, 326.464, -46.043,
            425.279, 297.498, -46.043,
            467.616, 324.315, -46.413,
            467.616, 324.315, -47.206,
            465.813, 326.464, -46.043,
            467.616, 324.315, -47.206,
            465.681, 326.621, -46.809,
            465.813, 326.464, -46.043,
            469.552, 322.008, -46.809,
            425.279, 285.807, -46.809,
            467.616, 324.315, -47.206,
            425.279, 285.807, -46.809,
            425.279, 291.859, -47.206,
            467.616, 324.315, -47.206,
            425.279, 286.219, -46.043,
            469.420, 322.165, -46.043,
            425.279, 291.859, -46.413,
            469.420, 322.165, -46.043,
            467.616, 324.315, -46.413,
            425.279, 291.859, -46.413,
            469.420, 322.165, -46.043,
            469.552, 322.008, -46.809,
            467.616, 324.315, -46.413,
            469.552, 322.008, -46.809,
            467.616, 324.315, -47.206,
            467.616, 324.315, -46.413,
            471.355, 319.859, -45.647,
            425.279, 280.167, -45.647,
            469.552, 322.008, -46.809,
            425.279, 280.167, -45.647,
            425.279, 285.807, -46.809,
            469.552, 322.008, -46.809,
            425.279, 280.964, -44.960,
            471.100, 320.163, -44.960,
            425.279, 286.219, -46.043,
            471.100, 320.163, -44.960,
            469.420, 322.165, -46.043,
            425.279, 286.219, -46.043,
            471.100, 320.163, -44.960,
            471.355, 319.859, -45.647,
            469.420, 322.165, -46.043,
            471.355, 319.859, -45.647,
            469.552, 322.008, -46.809,
            469.420, 322.165, -46.043,
            472.904, 318.013, -43.799,
            425.279, 275.324, -43.798,
            471.355, 319.859, -45.647,
            425.279, 275.324, -43.798,
            425.279, 280.167, -45.647,
            471.355, 319.859, -45.647,
            425.279, 276.452, -43.238,
            472.543, 318.443, -43.238,
            425.279, 280.964, -44.960,
            472.543, 318.443, -43.238,
            471.100, 320.163, -44.960,
            425.279, 280.964, -44.960,
            472.543, 318.443, -43.238,
            472.904, 318.013, -43.799,
            471.100, 320.163, -44.960,
            472.904, 318.013, -43.799,
            471.355, 319.859, -45.647,
            471.100, 320.163, -44.960,
            474.092, 316.597, -41.389,
            425.279, 271.608, -41.389,
            472.904, 318.013, -43.799,
            425.279, 271.608, -41.389,
            425.279, 275.324, -43.798,
            472.904, 318.013, -43.799,
            425.279, 272.989, -40.993,
            473.651, 317.123, -40.993,
            425.279, 276.452, -43.238,
            473.651, 317.123, -40.993,
            472.543, 318.443, -43.238,
            425.279, 276.452, -43.238,
            473.651, 317.123, -40.993,
            474.092, 316.597, -41.389,
            472.543, 318.443, -43.238,
            474.092, 316.597, -41.389,
            472.904, 318.013, -43.799,
            472.543, 318.443, -43.238,
            474.839, 315.707, -38.584,
            425.279, 269.272, -38.583,
            474.092, 316.597, -41.389,
            425.279, 269.272, -38.583,
            425.279, 271.608, -41.389,
            474.092, 316.597, -41.389,
            425.279, 270.812, -38.378,
            474.347, 316.294, -38.378,
            425.279, 272.989, -40.993,
            474.347, 316.294, -38.378,
            473.651, 317.123, -40.993,
            425.279, 272.989, -40.993,
            474.347, 316.294, -38.378,
            474.839, 315.707, -38.584,
            473.651, 317.123, -40.993,
            474.839, 315.707, -38.584,
            474.092, 316.597, -41.389,
            473.651, 317.123, -40.993,
            475.094, 315.403, -35.573,
            425.279, 268.476, -35.573,
            474.839, 315.707, -38.584,
            425.279, 268.476, -35.573,
            425.279, 269.272, -38.583,
            474.839, 315.707, -38.584,
            425.279, 270.070, -35.573,
            474.584, 316.011, -35.573,
            425.279, 270.812, -38.378,
            474.584, 316.011, -35.573,
            474.347, 316.294, -38.378,
            425.279, 270.812, -38.378,
            474.584, 316.011, -35.573,
            475.094, 315.403, -35.573,
            474.347, 316.294, -38.378,
            475.094, 315.403, -35.573,
            474.839, 315.707, -38.584,
            474.347, 316.294, -38.378,
            474.839, 315.707, -32.562,
            425.279, 269.273, -32.562,
            475.094, 315.403, -35.573,
            425.279, 269.273, -32.562,
            425.279, 268.476, -35.573,
            475.094, 315.403, -35.573,
            425.279, 270.812, -32.767,
            474.347, 316.294, -32.767,
            425.279, 270.070, -35.573,
            474.347, 316.294, -32.767,
            474.584, 316.011, -35.573,
            425.279, 270.070, -35.573,
            474.347, 316.294, -32.767,
            474.839, 315.707, -32.562,
            474.584, 316.011, -35.573,
            474.839, 315.707, -32.562,
            475.094, 315.403, -35.573,
            474.584, 316.011, -35.573,
            474.092, 316.597, -29.756,
            425.279, 271.608, -29.756,
            474.839, 315.707, -32.562,
            425.279, 271.608, -29.756,
            425.279, 269.273, -32.562,
            474.839, 315.707, -32.562,
            425.279, 272.989, -30.152,
            473.651, 317.123, -30.153,
            425.279, 270.812, -32.767,
            473.651, 317.123, -30.153,
            474.347, 316.294, -32.767,
            425.279, 270.812, -32.767,
            473.651, 317.123, -30.153,
            474.092, 316.597, -29.756,
            474.347, 316.294, -32.767,
            474.092, 316.597, -29.756,
            474.839, 315.707, -32.562,
            474.347, 316.294, -32.767,
            472.904, 318.013, -27.347,
            425.279, 275.324, -27.347,
            474.092, 316.597, -29.756,
            425.279, 275.324, -27.347,
            425.279, 271.608, -29.756,
            474.092, 316.597, -29.756,
            425.279, 276.452, -27.907,
            472.543, 318.443, -27.907,
            425.279, 272.989, -30.152,
            472.543, 318.443, -27.907,
            473.651, 317.123, -30.153,
            425.279, 272.989, -30.152,
            472.543, 318.443, -27.907,
            472.904, 318.013, -27.347,
            473.651, 317.123, -30.153,
            472.904, 318.013, -27.347,
            474.092, 316.597, -29.756,
            473.651, 317.123, -30.153,
            471.355, 319.859, -25.498,
            425.279, 280.167, -25.498,
            472.904, 318.013, -27.347,
            425.279, 280.167, -25.498,
            425.279, 275.324, -27.347,
            472.904, 318.013, -27.347,
            425.279, 280.964, -26.185,
            471.100, 320.163, -26.185,
            425.279, 276.452, -27.907,
            471.100, 320.163, -26.185,
            472.543, 318.443, -27.907,
            425.279, 276.452, -27.907,
            471.100, 320.163, -26.185,
            471.355, 319.859, -25.498,
            472.543, 318.443, -27.907,
            471.355, 319.859, -25.498,
            472.904, 318.013, -27.347,
            472.543, 318.443, -27.907,
            469.552, 322.008, -24.336,
            425.279, 285.807, -24.336,
            471.355, 319.859, -25.498,
            425.279, 285.807, -24.336,
            425.279, 280.167, -25.498,
            471.355, 319.859, -25.498,
            425.279, 286.219, -25.102,
            469.420, 322.165, -25.102,
            425.279, 280.964, -26.185,
            469.420, 322.165, -25.102,
            471.100, 320.163, -26.185,
            425.279, 280.964, -26.185,
            469.420, 322.165, -25.102,
            469.552, 322.008, -24.336,
            471.100, 320.163, -26.185,
            469.552, 322.008, -24.336,
            471.355, 319.859, -25.498,
            471.100, 320.163, -26.185,
            467.616, 324.315, -23.939,
            425.279, 291.859, -23.939,
            469.552, 322.008, -24.336,
            425.279, 291.859, -23.939,
            425.279, 285.807, -24.336,
            469.552, 322.008, -24.336,
            425.279, 291.859, -24.732,
            467.616, 324.315, -24.732,
            425.279, 286.219, -25.102,
            467.616, 324.315, -24.732,
            469.420, 322.165, -25.102,
            425.279, 286.219, -25.102,
            467.616, 324.315, -24.732,
            467.616, 324.315, -23.939,
            469.420, 322.165, -25.102,
            467.616, 324.315, -23.939,
            469.552, 322.008, -24.336,
               469.420, 322.165, -25.102
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.180, 0.173, -0.968,
            -0.092, 0.096, -0.991,
            0.002, -0.005, -1.000,
            -0.092, 0.096, -0.991,
            0.023, -0.028, -0.999,
            0.002, -0.005, -1.000,
            0.094, -0.093, 0.991,
            0.175, -0.181, 0.968,
            -0.022, 0.026, 0.999,
            0.175, -0.181, 0.968,
            -0.000, 0.003, 1.000,
            -0.022, 0.026, 0.999,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.364, 0.327, -0.872,
            -0.218, 0.213, -0.953,
            -0.180, 0.173, -0.968,
            -0.218, 0.213, -0.953,
            -0.092, 0.096, -0.991,
            -0.180, 0.173, -0.968,
            0.221, -0.203, 0.954,
            0.351, -0.343, 0.871,
            0.094, -0.093, 0.991,
            0.351, -0.343, 0.871,
            0.175, -0.181, 0.968,
            0.094, -0.093, 0.991,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.536, 0.450, -0.714,
            -0.362, 0.327, -0.873,
            -0.364, 0.327, -0.872,
            -0.362, 0.327, -0.873,
            -0.218, 0.213, -0.953,
            -0.364, 0.327, -0.872,
            0.365, -0.315, 0.876,
            0.516, -0.471, 0.715,
            0.221, -0.203, 0.954,
            0.516, -0.471, 0.715,
            0.351, -0.343, 0.871,
            0.221, -0.203, 0.954,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.676, 0.536, -0.505,
            -0.531, 0.446, -0.720,
            -0.536, 0.450, -0.714,
            -0.531, 0.446, -0.720,
            -0.362, 0.327, -0.873,
            -0.536, 0.450, -0.714,
            0.534, -0.437, 0.724,
            0.654, -0.560, 0.508,
            0.365, -0.315, 0.876,
            0.654, -0.560, 0.508,
            0.516, -0.471, 0.715,
            0.365, -0.315, 0.876,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, 0.588, -0.260,
            -0.706, 0.559, -0.435,
            -0.676, 0.536, -0.505,
            -0.706, 0.559, -0.435,
            -0.531, 0.446, -0.720,
            -0.676, 0.536, -0.505,
            0.704, -0.558, 0.439,
            0.748, -0.609, 0.265,
            0.534, -0.437, 0.724,
            0.748, -0.609, 0.265,
            0.654, -0.560, 0.508,
            0.534, -0.437, 0.724,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.793, 0.609, 0.003,
            -0.793, 0.609, 0.003,
            -0.766, 0.588, -0.260,
            -0.793, 0.609, 0.003,
            -0.706, 0.559, -0.435,
            -0.766, 0.588, -0.260,
            0.784, -0.621, 0.002,
            0.784, -0.621, 0.002,
            0.704, -0.558, 0.439,
            0.784, -0.621, 0.002,
            0.748, -0.609, 0.265,
            0.704, -0.558, 0.439,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.756, 0.599, 0.265,
            -0.712, 0.547, 0.441,
            -0.793, 0.609, 0.003,
            -0.712, 0.547, 0.441,
            -0.793, 0.609, 0.003,
            -0.793, 0.609, 0.003,
            0.698, -0.570, -0.433,
            0.756, -0.600, -0.260,
            0.784, -0.621, 0.002,
            0.756, -0.600, -0.260,
            0.784, -0.621, 0.002,
            0.784, -0.621, 0.002,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.660, 0.553, 0.509,
            -0.538, 0.428, 0.726,
            -0.756, 0.599, 0.265,
            -0.538, 0.428, 0.726,
            -0.712, 0.547, 0.441,
            -0.756, 0.599, 0.265,
            0.527, -0.453, -0.719,
            0.669, -0.546, -0.505,
            0.698, -0.570, -0.433,
            0.669, -0.546, -0.505,
            0.756, -0.600, -0.260,
            0.698, -0.570, -0.433,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.520, 0.467, 0.716,
            -0.368, 0.310, 0.877,
            -0.660, 0.553, 0.509,
            -0.368, 0.310, 0.877,
            -0.538, 0.428, 0.726,
            -0.660, 0.553, 0.509,
            0.360, -0.331, -0.872,
            0.531, -0.456, -0.714,
            0.527, -0.453, -0.719,
            0.531, -0.456, -0.714,
            0.669, -0.546, -0.505,
            0.527, -0.453, -0.719,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.352, 0.341, 0.872,
            -0.222, 0.201, 0.954,
            -0.520, 0.467, 0.716,
            -0.222, 0.201, 0.954,
            -0.368, 0.310, 0.877,
            -0.520, 0.467, 0.716,
            0.217, -0.214, -0.952,
            0.362, -0.330, -0.872,
            0.360, -0.331, -0.872,
            0.362, -0.330, -0.872,
            0.531, -0.456, -0.714,
            0.360, -0.331, -0.872,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.175, 0.181, 0.968,
            -0.095, 0.092, 0.991,
            -0.352, 0.341, 0.872,
            -0.095, 0.092, 0.991,
            -0.222, 0.201, 0.954,
            -0.352, 0.341, 0.872,
            0.092, -0.097, -0.991,
            0.179, -0.174, -0.968,
            0.217, -0.214, -0.952,
            0.179, -0.174, -0.968,
            0.362, -0.330, -0.872,
            0.217, -0.214, -0.952,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.000, -0.003, 1.000,
            0.022, -0.026, 0.999,
            -0.175, 0.181, 0.968,
            0.022, -0.026, 0.999,
            -0.095, 0.092, 0.991,
            -0.175, 0.181, 0.968,
            -0.023, 0.028, -0.999,
            -0.002, 0.005, -1.000,
            0.092, -0.097, -0.991,
            -0.002, 0.005, -1.000,
            0.179, -0.174, -0.968,
            0.092, -0.097, -0.991,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.164, -0.198, 0.966,
            0.137, -0.158, 0.978,
            0.000, -0.003, 1.000,
            0.137, -0.158, 0.978,
            0.022, -0.026, 0.999,
            0.000, -0.003, 1.000,
            -0.137, 0.165, -0.977,
            -0.171, 0.195, -0.966,
            -0.023, 0.028, -0.999,
            -0.171, 0.195, -0.966,
            -0.002, 0.005, -1.000,
            -0.023, 0.028, -0.999,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.309, -0.388, 0.868,
            0.254, -0.308, 0.917,
            0.164, -0.198, 0.966,
            0.254, -0.308, 0.917,
            0.137, -0.158, 0.978,
            0.164, -0.198, 0.966,
            -0.252, 0.316, -0.915,
            -0.319, 0.381, -0.868,
            -0.137, 0.165, -0.977,
            -0.319, 0.381, -0.868,
            -0.171, 0.195, -0.966,
            -0.137, 0.165, -0.977,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.430, -0.557, 0.711,
            0.374, -0.472, 0.798,
            0.309, -0.388, 0.868,
            0.374, -0.472, 0.798,
            0.254, -0.308, 0.917,
            0.309, -0.388, 0.868,
            -0.371, 0.478, -0.796,
            -0.441, 0.548, -0.711,
            -0.252, 0.316, -0.915,
            -0.441, 0.548, -0.711,
            -0.319, 0.381, -0.868,
            -0.252, 0.316, -0.915,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            0.521, -0.689, 0.503,
            0.487, -0.634, 0.601,
            0.430, -0.557, 0.711,
            0.487, -0.634, 0.601,
            0.374, -0.472, 0.798,
            0.430, -0.557, 0.711,
            -0.485, 0.636, -0.600,
            -0.531, 0.681, -0.504,
            -0.371, 0.478, -0.796,
            -0.531, 0.681, -0.504,
            -0.441, 0.548, -0.711,
            -0.371, 0.478, -0.796,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.578, -0.773, 0.260,
            0.570, -0.756, 0.322,
            0.521, -0.689, 0.503,
            0.570, -0.756, 0.322,
            0.487, -0.634, 0.601,
            0.521, -0.689, 0.503,
            -0.570, 0.755, -0.324,
            -0.586, 0.767, -0.262,
            -0.485, 0.636, -0.600,
            -0.586, 0.767, -0.262,
            -0.531, 0.681, -0.504,
            -0.485, 0.636, -0.600,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            0.599, -0.801, -0.001,
            0.599, -0.801, -0.001,
            0.578, -0.773, 0.260,
            0.599, -0.801, -0.001,
            0.570, -0.756, 0.322,
            0.578, -0.773, 0.260,
            -0.603, 0.798, -0.001,
            -0.603, 0.798, -0.001,
            -0.570, 0.755, -0.324,
            -0.603, 0.798, -0.001,
            -0.586, 0.767, -0.262,
            -0.570, 0.755, -0.324,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.582, -0.770, -0.262,
            0.567, -0.758, -0.322,
            0.599, -0.801, -0.001,
            0.567, -0.758, -0.322,
            0.599, -0.801, -0.001,
            0.599, -0.801, -0.001,
            -0.574, 0.752, 0.324,
            -0.582, 0.770, 0.260,
            -0.603, 0.798, -0.001,
            -0.582, 0.770, 0.260,
            -0.603, 0.798, -0.001,
            -0.603, 0.798, -0.001,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.528, -0.683, -0.504,
            0.482, -0.640, -0.598,
            0.582, -0.770, -0.262,
            0.482, -0.640, -0.598,
            0.567, -0.758, -0.322,
            0.582, -0.770, -0.262,
            -0.489, 0.630, 0.603,
            -0.525, 0.687, 0.503,
            -0.574, 0.752, 0.324,
            -0.525, 0.687, 0.503,
            -0.582, 0.770, 0.260,
            -0.574, 0.752, 0.324,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            0.439, -0.549, -0.711,
            0.370, -0.482, -0.794,
            0.528, -0.683, -0.504,
            0.370, -0.482, -0.794,
            0.482, -0.640, -0.598,
            0.528, -0.683, -0.504,
            -0.375, 0.469, 0.800,
            -0.433, 0.555, 0.710,
            -0.489, 0.630, 0.603,
            -0.433, 0.555, 0.710,
            -0.525, 0.687, 0.503,
            -0.489, 0.630, 0.603,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.318, -0.381, -0.868,
            0.252, -0.318, -0.914,
            0.439, -0.549, -0.711,
            0.252, -0.318, -0.914,
            0.370, -0.482, -0.794,
            0.439, -0.549, -0.711,
            -0.254, 0.306, 0.917,
            -0.311, 0.387, 0.868,
            -0.375, 0.469, 0.800,
            -0.311, 0.387, 0.868,
            -0.433, 0.555, 0.710,
            -0.375, 0.469, 0.800,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            0.170, -0.195, -0.966,
            0.136, -0.166, -0.977,
            0.318, -0.381, -0.868,
            0.136, -0.166, -0.977,
            0.252, -0.318, -0.914,
            0.318, -0.381, -0.868,
            -0.137, 0.157, 0.978,
            -0.165, 0.197, 0.966,
            -0.254, 0.306, 0.917,
            -0.165, 0.197, 0.966,
            -0.311, 0.387, 0.868,
            -0.254, 0.306, 0.917,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, 0.000,
            0.002, -0.005, -1.000,
            0.023, -0.028, -0.999,
            0.170, -0.195, -0.966,
            0.023, -0.028, -0.999,
            0.136, -0.166, -0.977,
            0.170, -0.195, -0.966,
            -0.022, 0.026, 0.999,
            -0.000, 0.003, 1.000,
            -0.137, 0.157, 0.978,
            -0.000, 0.003, 1.000,
            -0.165, 0.197, 0.966,
            -0.137, 0.157, 0.978,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
            -0.766, -0.643, -0.000,
            -0.766, -0.643, 0.000,
               -0.766, -0.643, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x212123,
            shininess: 2.297,
            ambient: 0x0B0101,
            side: THREE.FrontSide,
            specular: 0xD2D2D2
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
