function create_geometry_138(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -467.616, 324.315, -23.939,
            -425.279, 297.911, -24.335,
            -465.681, 326.621, -24.335,
            -467.616, 324.315, -23.939,
            -425.279, 291.859, -23.939,
            -425.279, 297.911, -24.335,
            -425.279, 291.859, -24.732,
            -465.813, 326.464, -25.101,
            -425.279, 297.498, -25.101,
            -425.279, 291.859, -24.732,
            -467.616, 324.315, -24.732,
            -465.813, 326.464, -25.101,
            -467.616, 324.315, -24.732,
            -465.681, 326.621, -24.335,
            -465.813, 326.464, -25.101,
            -467.616, 324.315, -24.732,
            -467.616, 324.315, -23.939,
            -465.681, 326.621, -24.335,
            -465.681, 326.621, -24.335,
            -425.279, 303.550, -25.497,
            -463.877, 328.771, -25.497,
            -465.681, 326.621, -24.335,
            -425.279, 297.911, -24.335,
            -425.279, 303.550, -25.497,
            -425.279, 297.498, -25.101,
            -464.132, 328.467, -26.184,
            -425.279, 302.753, -26.184,
            -425.279, 297.498, -25.101,
            -465.813, 326.464, -25.101,
            -464.132, 328.467, -26.184,
            -465.813, 326.464, -25.101,
            -463.877, 328.771, -25.497,
            -464.132, 328.467, -26.184,
            -465.813, 326.464, -25.101,
            -465.681, 326.621, -24.335,
            -463.877, 328.771, -25.497,
            -463.877, 328.771, -25.497,
            -425.279, 308.393, -27.346,
            -462.329, 330.616, -27.346,
            -463.877, 328.771, -25.497,
            -425.279, 303.550, -25.497,
            -425.279, 308.393, -27.346,
            -425.279, 302.753, -26.184,
            -462.689, 330.187, -27.907,
            -425.279, 307.266, -27.907,
            -425.279, 302.753, -26.184,
            -464.132, 328.467, -26.184,
            -462.689, 330.187, -27.907,
            -464.132, 328.467, -26.184,
            -462.329, 330.616, -27.346,
            -462.689, 330.187, -27.907,
            -464.132, 328.467, -26.184,
            -463.877, 328.771, -25.497,
            -462.329, 330.616, -27.346,
            -462.329, 330.616, -27.346,
            -425.279, 312.109, -29.755,
            -461.140, 332.032, -29.755,
            -462.329, 330.616, -27.346,
            -425.279, 308.393, -27.346,
            -425.279, 312.109, -29.755,
            -425.279, 307.266, -27.907,
            -461.582, 331.506, -30.152,
            -425.279, 310.728, -30.152,
            -425.279, 307.266, -27.907,
            -462.689, 330.187, -27.907,
            -461.582, 331.506, -30.152,
            -462.689, 330.187, -27.907,
            -461.140, 332.032, -29.755,
            -461.582, 331.506, -30.152,
            -462.689, 330.187, -27.907,
            -462.329, 330.616, -27.346,
            -461.140, 332.032, -29.755,
            -461.140, 332.032, -29.755,
            -425.279, 314.445, -32.561,
            -460.393, 332.923, -32.561,
            -461.140, 332.032, -29.755,
            -425.279, 312.109, -29.755,
            -425.279, 314.445, -32.561,
            -425.279, 310.728, -30.152,
            -460.886, 332.336, -32.766,
            -425.279, 312.905, -32.766,
            -425.279, 310.728, -30.152,
            -461.582, 331.506, -30.152,
            -460.886, 332.336, -32.766,
            -461.582, 331.506, -30.152,
            -460.393, 332.923, -32.561,
            -460.886, 332.336, -32.766,
            -461.582, 331.506, -30.152,
            -461.140, 332.032, -29.755,
            -460.393, 332.923, -32.561,
            -460.393, 332.923, -32.561,
            -425.279, 315.242, -35.572,
            -460.139, 333.226, -35.572,
            -460.393, 332.923, -32.561,
            -425.279, 314.445, -32.561,
            -425.279, 315.242, -35.572,
            -425.279, 312.905, -32.766,
            -460.648, 332.619, -35.572,
            -425.279, 313.647, -35.572,
            -425.279, 312.905, -32.766,
            -460.886, 332.336, -32.766,
            -460.648, 332.619, -35.572,
            -460.886, 332.336, -32.766,
            -460.139, 333.226, -35.572,
            -460.648, 332.619, -35.572,
            -460.886, 332.336, -32.766,
            -460.393, 332.923, -32.561,
            -460.139, 333.226, -35.572,
            -460.139, 333.226, -35.572,
            -425.279, 314.445, -38.583,
            -460.393, 332.923, -38.583,
            -460.139, 333.226, -35.572,
            -425.279, 315.242, -35.572,
            -425.279, 314.445, -38.583,
            -425.279, 313.647, -35.572,
            -460.886, 332.336, -38.378,
            -425.279, 312.905, -38.378,
            -425.279, 313.647, -35.572,
            -460.648, 332.619, -35.572,
            -460.886, 332.336, -38.378,
            -460.648, 332.619, -35.572,
            -460.393, 332.923, -38.583,
            -460.886, 332.336, -38.378,
            -460.648, 332.619, -35.572,
            -460.139, 333.226, -35.572,
            -460.393, 332.923, -38.583,
            -460.393, 332.923, -38.583,
            -425.279, 312.109, -41.389,
            -461.140, 332.032, -41.389,
            -460.393, 332.923, -38.583,
            -425.279, 314.445, -38.583,
            -425.279, 312.109, -41.389,
            -425.279, 312.905, -38.378,
            -461.582, 331.506, -40.992,
            -425.279, 310.728, -40.992,
            -425.279, 312.905, -38.378,
            -460.886, 332.336, -38.378,
            -461.582, 331.506, -40.992,
            -460.886, 332.336, -38.378,
            -461.140, 332.032, -41.389,
            -461.582, 331.506, -40.992,
            -460.886, 332.336, -38.378,
            -460.393, 332.923, -38.583,
            -461.140, 332.032, -41.389,
            -461.140, 332.032, -41.389,
            -425.279, 308.393, -43.798,
            -462.329, 330.616, -43.798,
            -461.140, 332.032, -41.389,
            -425.279, 312.109, -41.389,
            -425.279, 308.393, -43.798,
            -425.279, 310.728, -40.992,
            -462.689, 330.187, -43.237,
            -425.279, 307.266, -43.237,
            -425.279, 310.728, -40.992,
            -461.582, 331.506, -40.992,
            -462.689, 330.187, -43.237,
            -461.582, 331.506, -40.992,
            -462.329, 330.616, -43.798,
            -462.689, 330.187, -43.237,
            -461.582, 331.506, -40.992,
            -461.140, 332.032, -41.389,
            -462.329, 330.616, -43.798,
            -462.329, 330.616, -43.798,
            -425.279, 303.550, -45.647,
            -463.877, 328.771, -45.647,
            -462.329, 330.616, -43.798,
            -425.279, 308.393, -43.798,
            -425.279, 303.550, -45.647,
            -425.279, 307.266, -43.237,
            -464.132, 328.467, -44.960,
            -425.279, 302.753, -44.960,
            -425.279, 307.266, -43.237,
            -462.689, 330.187, -43.237,
            -464.132, 328.467, -44.960,
            -462.689, 330.187, -43.237,
            -463.877, 328.771, -45.647,
            -464.132, 328.467, -44.960,
            -462.689, 330.187, -43.237,
            -462.329, 330.616, -43.798,
            -463.877, 328.771, -45.647,
            -463.877, 328.771, -45.647,
            -425.279, 297.911, -46.809,
            -465.681, 326.621, -46.809,
            -463.877, 328.771, -45.647,
            -425.279, 303.550, -45.647,
            -425.279, 297.911, -46.809,
            -425.279, 302.753, -44.960,
            -465.813, 326.464, -46.043,
            -425.279, 297.498, -46.043,
            -425.279, 302.753, -44.960,
            -464.132, 328.467, -44.960,
            -465.813, 326.464, -46.043,
            -464.132, 328.467, -44.960,
            -465.681, 326.621, -46.809,
            -465.813, 326.464, -46.043,
            -464.132, 328.467, -44.960,
            -463.877, 328.771, -45.647,
            -465.681, 326.621, -46.809,
            -465.681, 326.621, -46.809,
            -425.279, 291.859, -47.205,
            -467.616, 324.315, -47.205,
            -465.681, 326.621, -46.809,
            -425.279, 297.911, -46.809,
            -425.279, 291.859, -47.205,
            -425.279, 297.498, -46.043,
            -467.616, 324.315, -46.412,
            -425.279, 291.859, -46.412,
            -425.279, 297.498, -46.043,
            -465.813, 326.464, -46.043,
            -467.616, 324.315, -46.412,
            -465.813, 326.464, -46.043,
            -467.616, 324.315, -47.205,
            -467.616, 324.315, -46.412,
            -465.813, 326.464, -46.043,
            -465.681, 326.621, -46.809,
            -467.616, 324.315, -47.205,
            -467.616, 324.315, -47.205,
            -425.279, 285.807, -46.809,
            -469.552, 322.008, -46.809,
            -467.616, 324.315, -47.205,
            -425.279, 291.859, -47.205,
            -425.279, 285.807, -46.809,
            -425.279, 291.859, -46.412,
            -469.420, 322.166, -46.043,
            -425.279, 286.219, -46.043,
            -425.279, 291.859, -46.412,
            -467.616, 324.315, -46.412,
            -469.420, 322.166, -46.043,
            -467.616, 324.315, -46.412,
            -469.552, 322.008, -46.809,
            -469.420, 322.166, -46.043,
            -467.616, 324.315, -46.412,
            -467.616, 324.315, -47.205,
            -469.552, 322.008, -46.809,
            -469.552, 322.008, -46.809,
            -425.279, 280.167, -45.647,
            -471.355, 319.859, -45.647,
            -469.552, 322.008, -46.809,
            -425.279, 285.807, -46.809,
            -425.279, 280.167, -45.647,
            -425.279, 286.219, -46.043,
            -471.100, 320.163, -44.960,
            -425.279, 280.964, -44.960,
            -425.279, 286.219, -46.043,
            -469.420, 322.166, -46.043,
            -471.100, 320.163, -44.960,
            -469.420, 322.166, -46.043,
            -471.355, 319.859, -45.647,
            -471.100, 320.163, -44.960,
            -469.420, 322.166, -46.043,
            -469.552, 322.008, -46.809,
            -471.355, 319.859, -45.647,
            -471.355, 319.859, -45.647,
            -425.279, 275.325, -43.798,
            -472.904, 318.013, -43.798,
            -471.355, 319.859, -45.647,
            -425.279, 280.167, -45.647,
            -425.279, 275.325, -43.798,
            -425.279, 280.964, -44.960,
            -472.543, 318.443, -43.237,
            -425.279, 276.452, -43.237,
            -425.279, 280.964, -44.960,
            -471.100, 320.163, -44.960,
            -472.543, 318.443, -43.237,
            -471.100, 320.163, -44.960,
            -472.904, 318.013, -43.798,
            -472.543, 318.443, -43.237,
            -471.100, 320.163, -44.960,
            -471.355, 319.859, -45.647,
            -472.904, 318.013, -43.798,
            -472.904, 318.013, -43.798,
            -425.279, 271.609, -41.389,
            -474.092, 316.597, -41.389,
            -472.904, 318.013, -43.798,
            -425.279, 275.325, -43.798,
            -425.279, 271.609, -41.389,
            -425.279, 276.452, -43.237,
            -473.651, 317.123, -40.992,
            -425.279, 272.989, -40.992,
            -425.279, 276.452, -43.237,
            -472.543, 318.443, -43.237,
            -473.651, 317.123, -40.992,
            -472.543, 318.443, -43.237,
            -474.092, 316.597, -41.389,
            -473.651, 317.123, -40.992,
            -472.543, 318.443, -43.237,
            -472.904, 318.013, -43.798,
            -474.092, 316.597, -41.389,
            -474.092, 316.597, -41.389,
            -425.279, 269.273, -38.583,
            -474.839, 315.707, -38.583,
            -474.092, 316.597, -41.389,
            -425.279, 271.609, -41.389,
            -425.279, 269.273, -38.583,
            -425.279, 272.989, -40.992,
            -474.347, 316.294, -38.378,
            -425.279, 270.813, -38.378,
            -425.279, 272.989, -40.992,
            -473.651, 317.123, -40.992,
            -474.347, 316.294, -38.378,
            -473.651, 317.123, -40.992,
            -474.839, 315.707, -38.583,
            -474.347, 316.294, -38.378,
            -473.651, 317.123, -40.992,
            -474.092, 316.597, -41.389,
            -474.839, 315.707, -38.583,
            -474.839, 315.707, -38.583,
            -425.279, 268.476, -35.572,
            -475.094, 315.403, -35.572,
            -474.839, 315.707, -38.583,
            -425.279, 269.273, -38.583,
            -425.279, 268.476, -35.572,
            -425.279, 270.813, -38.378,
            -474.584, 316.011, -35.572,
            -425.279, 270.070, -35.572,
            -425.279, 270.813, -38.378,
            -474.347, 316.294, -38.378,
            -474.584, 316.011, -35.572,
            -474.347, 316.294, -38.378,
            -475.094, 315.403, -35.572,
            -474.584, 316.011, -35.572,
            -474.347, 316.294, -38.378,
            -474.839, 315.707, -38.583,
            -475.094, 315.403, -35.572,
            -475.094, 315.403, -35.572,
            -425.279, 269.273, -32.561,
            -474.839, 315.707, -32.561,
            -475.094, 315.403, -35.572,
            -425.279, 268.476, -35.572,
            -425.279, 269.273, -32.561,
            -425.279, 270.070, -35.572,
            -474.347, 316.294, -32.766,
            -425.279, 270.813, -32.766,
            -425.279, 270.070, -35.572,
            -474.584, 316.011, -35.572,
            -474.347, 316.294, -32.766,
            -474.584, 316.011, -35.572,
            -474.839, 315.707, -32.561,
            -474.347, 316.294, -32.766,
            -474.584, 316.011, -35.572,
            -475.094, 315.403, -35.572,
            -474.839, 315.707, -32.561,
            -474.839, 315.707, -32.561,
            -425.279, 271.609, -29.755,
            -474.092, 316.597, -29.755,
            -474.839, 315.707, -32.561,
            -425.279, 269.273, -32.561,
            -425.279, 271.609, -29.755,
            -425.279, 270.813, -32.766,
            -473.651, 317.123, -30.152,
            -425.279, 272.989, -30.152,
            -425.279, 270.813, -32.766,
            -474.347, 316.294, -32.766,
            -473.651, 317.123, -30.152,
            -474.347, 316.294, -32.766,
            -474.092, 316.597, -29.755,
            -473.651, 317.123, -30.152,
            -474.347, 316.294, -32.766,
            -474.839, 315.707, -32.561,
            -474.092, 316.597, -29.755,
            -474.092, 316.597, -29.755,
            -425.279, 275.325, -27.346,
            -472.904, 318.013, -27.346,
            -474.092, 316.597, -29.755,
            -425.279, 271.609, -29.755,
            -425.279, 275.325, -27.346,
            -425.279, 272.989, -30.152,
            -472.543, 318.443, -27.907,
            -425.279, 276.452, -27.907,
            -425.279, 272.989, -30.152,
            -473.651, 317.123, -30.152,
            -472.543, 318.443, -27.907,
            -473.651, 317.123, -30.152,
            -472.904, 318.013, -27.346,
            -472.543, 318.443, -27.907,
            -473.651, 317.123, -30.152,
            -474.092, 316.597, -29.755,
            -472.904, 318.013, -27.346,
            -472.904, 318.013, -27.346,
            -425.279, 280.167, -25.497,
            -471.355, 319.859, -25.497,
            -472.904, 318.013, -27.346,
            -425.279, 275.325, -27.346,
            -425.279, 280.167, -25.497,
            -425.279, 276.452, -27.907,
            -471.100, 320.163, -26.184,
            -425.279, 280.964, -26.184,
            -425.279, 276.452, -27.907,
            -472.543, 318.443, -27.907,
            -471.100, 320.163, -26.184,
            -472.543, 318.443, -27.907,
            -471.355, 319.859, -25.497,
            -471.100, 320.163, -26.184,
            -472.543, 318.443, -27.907,
            -472.904, 318.013, -27.346,
            -471.355, 319.859, -25.497,
            -471.355, 319.859, -25.497,
            -425.279, 285.807, -24.335,
            -469.552, 322.008, -24.335,
            -471.355, 319.859, -25.497,
            -425.279, 280.167, -25.497,
            -425.279, 285.807, -24.335,
            -425.279, 280.964, -26.184,
            -469.420, 322.166, -25.101,
            -425.279, 286.219, -25.101,
            -425.279, 280.964, -26.184,
            -471.100, 320.163, -26.184,
            -469.420, 322.166, -25.101,
            -471.100, 320.163, -26.184,
            -469.552, 322.008, -24.335,
            -469.420, 322.166, -25.101,
            -471.100, 320.163, -26.184,
            -471.355, 319.859, -25.497,
            -469.552, 322.008, -24.335,
            -469.552, 322.008, -24.335,
            -425.279, 291.859, -23.939,
            -467.616, 324.315, -23.939,
            -469.552, 322.008, -24.335,
            -425.279, 285.807, -24.335,
            -425.279, 291.859, -23.939,
            -425.279, 286.219, -25.101,
            -467.616, 324.315, -24.732,
            -425.279, 291.859, -24.732,
            -425.279, 286.219, -25.101,
            -469.420, 322.166, -25.101,
            -467.616, 324.315, -24.732,
            -469.420, 322.166, -25.101,
            -467.616, 324.315, -23.939,
            -467.616, 324.315, -24.732,
            -469.420, 322.166, -25.101,
            -469.552, 322.008, -24.335,
               -467.616, 324.315, -23.939
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.005, -0.003, 1.000,
            0.079, 0.108, 0.991,
            0.139, 0.207, 0.968,
            -0.005, -0.003, 1.000,
            -0.024, -0.028, 0.999,
            0.079, 0.108, 0.991,
            0.021, 0.027, -0.999,
            -0.148, -0.204, -0.968,
            -0.075, -0.109, -0.991,
            0.021, 0.027, -0.999,
            0.003, 0.001, -1.000,
            -0.148, -0.204, -0.968,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            0.139, 0.207, 0.968,
            0.172, 0.251, 0.953,
            0.259, 0.416, 0.872,
            0.139, 0.207, 0.968,
            0.079, 0.108, 0.991,
            0.172, 0.251, 0.953,
            -0.075, -0.109, -0.991,
            -0.277, -0.405, -0.871,
            -0.162, -0.253, -0.954,
            -0.075, -0.109, -0.991,
            -0.148, -0.204, -0.968,
            -0.277, -0.405, -0.871,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            0.259, 0.416, 0.872,
            0.260, 0.413, 0.873,
            0.350, 0.606, 0.714,
            0.259, 0.416, 0.872,
            0.172, 0.251, 0.953,
            0.260, 0.413, 0.873,
            -0.162, -0.253, -0.954,
            -0.374, -0.590, -0.715,
            -0.247, -0.414, -0.876,
            -0.162, -0.253, -0.954,
            -0.277, -0.405, -0.871,
            -0.374, -0.590, -0.715,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            0.350, 0.606, 0.714,
            0.347, 0.601, 0.720,
            0.411, 0.759, 0.505,
            0.350, 0.606, 0.714,
            0.260, 0.413, 0.873,
            0.347, 0.601, 0.720,
            -0.247, -0.414, -0.876,
            -0.438, -0.741, -0.508,
            -0.337, -0.601, -0.724,
            -0.247, -0.414, -0.876,
            -0.374, -0.590, -0.715,
            -0.438, -0.741, -0.508,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            0.411, 0.759, 0.505,
            0.428, 0.792, 0.435,
            0.446, 0.856, 0.260,
            0.411, 0.759, 0.505,
            0.347, 0.601, 0.720,
            0.428, 0.792, 0.435,
            -0.337, -0.601, -0.724,
            -0.470, -0.842, -0.265,
            -0.428, -0.790, -0.439,
            -0.337, -0.601, -0.724,
            -0.438, -0.741, -0.508,
            -0.470, -0.842, -0.265,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            0.446, 0.856, 0.260,
            0.462, 0.887, -0.003,
            0.462, 0.887, -0.003,
            0.446, 0.856, 0.260,
            0.428, 0.792, 0.435,
            0.462, 0.887, -0.003,
            -0.428, -0.790, -0.439,
            -0.476, -0.880, -0.002,
            -0.476, -0.880, -0.003,
            -0.428, -0.790, -0.439,
            -0.470, -0.842, -0.265,
            -0.476, -0.880, -0.002,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            0.462, 0.887, -0.003,
            0.415, 0.796, -0.441,
            0.458, 0.848, -0.265,
            0.462, 0.887, -0.003,
            0.462, 0.887, -0.003,
            0.415, 0.796, -0.441,
            -0.476, -0.880, -0.003,
            -0.460, -0.849, 0.260,
            -0.440, -0.787, 0.433,
            -0.476, -0.880, -0.003,
            -0.476, -0.880, -0.002,
            -0.460, -0.849, 0.260,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            0.458, 0.848, -0.265,
            0.328, 0.605, -0.726,
            0.430, 0.746, -0.509,
            0.458, 0.848, -0.265,
            0.415, 0.796, -0.441,
            0.328, 0.605, -0.726,
            -0.440, -0.787, 0.433,
            -0.421, -0.753, 0.505,
            -0.355, -0.598, 0.719,
            -0.440, -0.787, 0.433,
            -0.460, -0.849, 0.260,
            -0.421, -0.753, 0.505,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            0.430, 0.746, -0.509,
            0.242, 0.416, -0.877,
            0.370, 0.593, -0.716,
            0.430, 0.746, -0.509,
            0.328, 0.605, -0.726,
            0.242, 0.416, -0.877,
            -0.355, -0.598, 0.719,
            -0.357, -0.602, 0.714,
            -0.263, -0.412, 0.872,
            -0.355, -0.598, 0.719,
            -0.421, -0.753, 0.505,
            -0.357, -0.602, 0.714,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            0.370, 0.593, -0.716,
            0.160, 0.253, -0.954,
            0.275, 0.406, -0.872,
            0.370, 0.593, -0.716,
            0.242, 0.416, -0.877,
            0.160, 0.253, -0.954,
            -0.263, -0.412, 0.872,
            -0.263, -0.414, 0.872,
            -0.173, -0.251, 0.952,
            -0.263, -0.412, 0.872,
            -0.357, -0.602, 0.714,
            -0.263, -0.414, 0.872,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            0.275, 0.406, -0.872,
            0.074, 0.109, -0.991,
            0.148, 0.204, -0.968,
            0.275, 0.406, -0.872,
            0.160, 0.253, -0.954,
            0.074, 0.109, -0.991,
            -0.173, -0.251, 0.952,
            -0.140, -0.207, 0.968,
            -0.079, -0.107, 0.991,
            -0.173, -0.251, 0.952,
            -0.263, -0.414, 0.872,
            -0.140, -0.207, 0.968,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            0.148, 0.204, -0.968,
            -0.021, -0.026, -0.999,
            -0.003, -0.001, -1.000,
            0.148, 0.204, -0.968,
            0.074, 0.109, -0.991,
            -0.021, -0.026, -0.999,
            -0.079, -0.107, 0.991,
            0.005, 0.003, 1.000,
            0.023, 0.028, 0.999,
            -0.079, -0.107, 0.991,
            -0.140, -0.207, 0.968,
            0.005, 0.003, 1.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.003, -0.001, -1.000,
            -0.132, -0.162, -0.978,
            -0.166, -0.196, -0.966,
            -0.003, -0.001, -1.000,
            -0.021, -0.026, -0.999,
            -0.132, -0.162, -0.978,
            0.023, 0.028, 0.999,
            0.162, 0.202, 0.966,
            0.139, 0.163, 0.977,
            0.023, 0.028, 0.999,
            0.005, 0.003, 1.000,
            0.162, 0.202, 0.966,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.166, -0.196, -0.966,
            -0.259, -0.304, -0.917,
            -0.328, -0.372, -0.868,
            -0.166, -0.196, -0.966,
            -0.132, -0.162, -0.978,
            -0.259, -0.304, -0.917,
            0.139, 0.163, 0.977,
            0.320, 0.380, 0.868,
            0.267, 0.303, 0.915,
            0.139, 0.163, 0.977,
            0.162, 0.202, 0.966,
            0.320, 0.380, 0.868,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.328, -0.372, -0.868,
            -0.400, -0.450, -0.798,
            -0.474, -0.520, -0.711,
            -0.328, -0.372, -0.868,
            -0.259, -0.304, -0.917,
            -0.400, -0.450, -0.798,
            0.267, 0.303, 0.915,
            0.463, 0.530, 0.711,
            0.407, 0.449, 0.796,
            0.267, 0.303, 0.915,
            0.320, 0.380, 0.868,
            0.463, 0.530, 0.711,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.474, -0.520, -0.711,
            -0.540, -0.590, -0.601,
            -0.588, -0.633, -0.503,
            -0.474, -0.520, -0.711,
            -0.400, -0.450, -0.798,
            -0.540, -0.590, -0.601,
            0.407, 0.449, 0.796,
            0.578, 0.641, 0.504,
            0.542, 0.588, 0.600,
            0.407, 0.449, 0.796,
            0.463, 0.530, 0.711,
            0.578, 0.641, 0.504,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.588, -0.633, -0.503,
            -0.645, -0.693, -0.322,
            -0.661, -0.704, -0.260,
            -0.588, -0.633, -0.503,
            -0.540, -0.590, -0.601,
            -0.645, -0.693, -0.322,
            0.542, 0.588, 0.600,
            0.653, 0.710, 0.262,
            0.644, 0.693, 0.324,
            0.542, 0.588, 0.600,
            0.578, 0.641, 0.504,
            0.653, 0.710, 0.262,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.661, -0.704, -0.260,
            -0.685, -0.729, 0.001,
            -0.685, -0.729, 0.001,
            -0.661, -0.704, -0.260,
            -0.645, -0.693, -0.322,
            -0.685, -0.729, 0.001,
            0.644, 0.693, 0.324,
            0.681, 0.732, 0.001,
            0.681, 0.732, 0.001,
            0.644, 0.693, 0.324,
            0.653, 0.710, 0.262,
            0.681, 0.732, 0.001,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.685, -0.729, 0.001,
            -0.648, -0.690, 0.322,
            -0.657, -0.707, 0.262,
            -0.685, -0.729, 0.001,
            -0.685, -0.729, 0.001,
            -0.648, -0.690, 0.322,
            0.681, 0.732, 0.001,
            0.657, 0.707, -0.260,
            0.641, 0.696, -0.324,
            0.681, 0.732, 0.001,
            0.681, 0.732, 0.001,
            0.657, 0.707, -0.260,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.657, -0.707, 0.262,
            -0.547, -0.586, 0.598,
            -0.581, -0.639, 0.504,
            -0.657, -0.707, 0.262,
            -0.648, -0.690, 0.322,
            -0.547, -0.586, 0.598,
            0.641, 0.696, -0.324,
            0.585, 0.636, -0.503,
            0.536, 0.591, -0.603,
            0.641, 0.696, -0.324,
            0.657, 0.707, -0.260,
            0.585, 0.636, -0.503,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.581, -0.639, 0.504,
            -0.410, -0.448, 0.794,
            -0.465, -0.527, 0.711,
            -0.581, -0.639, 0.504,
            -0.547, -0.586, 0.598,
            -0.410, -0.448, 0.794,
            0.536, 0.591, -0.603,
            0.471, 0.523, -0.710,
            0.397, 0.450, -0.800,
            0.536, 0.591, -0.603,
            0.585, 0.636, -0.503,
            0.471, 0.523, -0.710,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.465, -0.527, 0.711,
            -0.270, -0.303, 0.914,
            -0.320, -0.379, 0.868,
            -0.465, -0.527, 0.711,
            -0.410, -0.448, 0.794,
            -0.270, -0.303, 0.914,
            0.397, 0.450, -0.800,
            0.327, 0.374, -0.868,
            0.257, 0.303, -0.917,
            0.397, 0.450, -0.800,
            0.471, 0.523, -0.710,
            0.327, 0.374, -0.868,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.320, -0.379, 0.868,
            -0.140, -0.163, 0.977,
            -0.162, -0.201, 0.966,
            -0.320, -0.379, 0.868,
            -0.270, -0.303, 0.914,
            -0.140, -0.163, 0.977,
            0.257, 0.303, -0.917,
            0.166, 0.196, -0.966,
            0.131, 0.162, -0.978,
            0.257, 0.303, -0.917,
            0.327, 0.374, -0.868,
            0.166, 0.196, -0.966,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.162, -0.201, 0.966,
            -0.024, -0.028, 0.999,
            -0.005, -0.003, 1.000,
            -0.162, -0.201, 0.966,
            -0.140, -0.163, 0.977,
            -0.024, -0.028, 0.999,
            0.131, 0.162, -0.978,
            0.003, 0.001, -1.000,
            0.021, 0.027, -0.999,
            0.131, 0.162, -0.978,
            0.166, 0.196, -0.966,
            0.003, 0.001, -1.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, 0.000,
            -0.766, 0.643, -0.000,
            -0.766, 0.643, -0.000,
               -0.766, 0.643, -0.000
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
