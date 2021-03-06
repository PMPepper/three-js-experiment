function create_geometry_12(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -4.032, 47.265, 3.806,
            -3.802, 47.265, 3.711,
            -3.604, 47.265, 3.559,
            -4.032, 47.265, 3.806,
            -3.604, 47.265, 3.559,
            -3.452, 47.265, 3.361,
            -4.032, 47.265, 3.806,
            -3.452, 47.265, 3.361,
            -3.357, 47.265, 3.131,
            -4.032, 47.265, 3.806,
            -3.357, 47.265, 3.131,
            -3.324, 47.265, 2.884,
            -4.032, 47.265, 3.806,
            -3.324, 47.265, 2.884,
            -3.357, 47.265, 2.637,
            -4.032, 47.265, 3.806,
            -3.357, 47.265, 2.637,
            -3.452, 47.265, 2.407,
            -4.032, 47.265, 3.806,
            -3.452, 47.265, 2.407,
            -3.604, 47.265, 2.209,
            -4.032, 47.265, 3.806,
            -3.604, 47.265, 2.209,
            -3.802, 47.265, 2.057,
            -4.032, 47.265, 3.806,
            -3.802, 47.265, 2.057,
            -4.032, 47.265, 1.962,
            -4.032, 47.265, 3.806,
            -4.032, 47.265, 1.962,
            -4.279, 47.265, 1.929,
            -4.032, 47.265, 3.806,
            -4.279, 47.265, 1.929,
            -4.526, 47.265, 1.962,
            -4.032, 47.265, 3.806,
            -4.526, 47.265, 1.962,
            -4.756, 47.265, 2.057,
            -4.032, 47.265, 3.806,
            -4.756, 47.265, 2.057,
            -4.954, 47.265, 2.209,
            -4.032, 47.265, 3.806,
            -4.954, 47.265, 2.209,
            -5.106, 47.265, 2.407,
            -4.032, 47.265, 3.806,
            -5.106, 47.265, 2.407,
            -5.201, 47.265, 2.637,
            -4.032, 47.265, 3.806,
            -5.201, 47.265, 2.637,
            -5.234, 47.265, 2.884,
            -4.032, 47.265, 3.806,
            -5.234, 47.265, 2.884,
            -5.201, 47.265, 3.131,
            -4.032, 47.265, 3.806,
            -5.201, 47.265, 3.131,
            -5.106, 47.265, 3.361,
            -4.032, 47.265, 3.806,
            -5.106, 47.265, 3.361,
            -4.954, 47.265, 3.559,
            -4.032, 47.265, 3.806,
            -4.954, 47.265, 3.559,
            -4.756, 47.265, 3.711,
            -4.032, 47.265, 3.806,
            -4.756, 47.265, 3.711,
            -4.526, 47.265, 3.806,
            -4.032, 47.265, 3.806,
            -4.526, 47.265, 3.806,
            -4.279, 47.265, 3.839,
            4.485, 47.265, 3.806,
            4.715, 47.265, 3.711,
            4.913, 47.265, 3.559,
            4.485, 47.265, 3.806,
            4.913, 47.265, 3.559,
            5.064, 47.265, 3.361,
            4.485, 47.265, 3.806,
            5.064, 47.265, 3.361,
            5.160, 47.265, 3.131,
            4.485, 47.265, 3.806,
            5.160, 47.265, 3.131,
            5.192, 47.265, 2.884,
            4.485, 47.265, 3.806,
            5.192, 47.265, 2.884,
            5.160, 47.265, 2.637,
            4.485, 47.265, 3.806,
            5.160, 47.265, 2.637,
            5.064, 47.265, 2.407,
            4.485, 47.265, 3.806,
            5.064, 47.265, 2.407,
            4.913, 47.265, 2.209,
            4.485, 47.265, 3.806,
            4.913, 47.265, 2.209,
            4.715, 47.265, 2.057,
            4.485, 47.265, 3.806,
            4.715, 47.265, 2.057,
            4.485, 47.265, 1.962,
            4.485, 47.265, 3.806,
            4.485, 47.265, 1.962,
            4.237, 47.265, 1.929,
            4.485, 47.265, 3.806,
            4.237, 47.265, 1.929,
            3.990, 47.265, 1.962,
            4.485, 47.265, 3.806,
            3.990, 47.265, 1.962,
            3.760, 47.265, 2.057,
            4.485, 47.265, 3.806,
            3.760, 47.265, 2.057,
            3.562, 47.265, 2.209,
            4.485, 47.265, 3.806,
            3.562, 47.265, 2.209,
            3.411, 47.265, 2.407,
            4.485, 47.265, 3.806,
            3.411, 47.265, 2.407,
            3.315, 47.265, 2.637,
            4.485, 47.265, 3.806,
            3.315, 47.265, 2.637,
            3.283, 47.265, 2.884,
            4.485, 47.265, 3.806,
            3.283, 47.265, 2.884,
            3.315, 47.265, 3.131,
            4.485, 47.265, 3.806,
            3.315, 47.265, 3.131,
            3.411, 47.265, 3.361,
            4.485, 47.265, 3.806,
            3.411, 47.265, 3.361,
            3.562, 47.265, 3.559,
            4.485, 47.265, 3.806,
            3.562, 47.265, 3.559,
            3.760, 47.265, 3.711,
            4.485, 47.265, 3.806,
            3.760, 47.265, 3.711,
            3.990, 47.265, 3.806,
            4.485, 47.265, 3.806,
            3.990, 47.265, 3.806,
            4.237, 47.265, 3.839,
            0.179, 47.265, 0.920,
            0.409, 47.265, 0.825,
            0.607, 47.265, 0.673,
            0.179, 47.265, 0.920,
            0.607, 47.265, 0.673,
            0.759, 47.265, 0.475,
            0.179, 47.265, 0.920,
            0.759, 47.265, 0.475,
            0.854, 47.265, 0.245,
            0.179, 47.265, 0.920,
            0.854, 47.265, 0.245,
            0.887, 47.265, -0.002,
            0.179, 47.265, 0.920,
            0.887, 47.265, -0.002,
            0.854, 47.265, -0.249,
            0.179, 47.265, 0.920,
            0.854, 47.265, -0.249,
            0.759, 47.265, -0.480,
            0.179, 47.265, 0.920,
            0.759, 47.265, -0.480,
            0.607, 47.265, -0.677,
            0.179, 47.265, 0.920,
            0.607, 47.265, -0.677,
            0.409, 47.265, -0.829,
            0.179, 47.265, 0.920,
            0.409, 47.265, -0.829,
            0.179, 47.265, -0.924,
            0.179, 47.265, 0.920,
            0.179, 47.265, -0.924,
            -0.068, 47.265, -0.957,
            0.179, 47.265, 0.920,
            -0.068, 47.265, -0.957,
            -0.315, 47.265, -0.924,
            0.179, 47.265, 0.920,
            -0.315, 47.265, -0.924,
            -0.546, 47.265, -0.829,
            0.179, 47.265, 0.920,
            -0.546, 47.265, -0.829,
            -0.743, 47.265, -0.677,
            0.179, 47.265, 0.920,
            -0.743, 47.265, -0.677,
            -0.895, 47.265, -0.480,
            0.179, 47.265, 0.920,
            -0.895, 47.265, -0.480,
            -0.990, 47.265, -0.249,
            0.179, 47.265, 0.920,
            -0.990, 47.265, -0.249,
            -1.023, 47.265, -0.002,
            0.179, 47.265, 0.920,
            -1.023, 47.265, -0.002,
            -0.990, 47.265, 0.245,
            0.179, 47.265, 0.920,
            -0.990, 47.265, 0.245,
            -0.895, 47.265, 0.475,
            0.179, 47.265, 0.920,
            -0.895, 47.265, 0.475,
            -0.743, 47.265, 0.673,
            0.179, 47.265, 0.920,
            -0.743, 47.265, 0.673,
            -0.546, 47.265, 0.825,
            0.179, 47.265, 0.920,
            -0.546, 47.265, 0.825,
            -0.315, 47.265, 0.920,
            0.179, 47.265, 0.920,
            -0.315, 47.265, 0.920,
            -0.068, 47.265, 0.953,
            -6.295, 47.265, 8.679,
            -6.065, 47.265, 8.584,
            -5.867, 47.265, 8.432,
            -6.295, 47.265, 8.679,
            -5.867, 47.265, 8.432,
            -5.716, 47.265, 8.235,
            -6.295, 47.265, 8.679,
            -5.716, 47.265, 8.235,
            -5.620, 47.265, 8.004,
            -6.295, 47.265, 8.679,
            -5.620, 47.265, 8.004,
            -5.588, 47.265, 7.757,
            -6.295, 47.265, 8.679,
            -5.588, 47.265, 7.757,
            -5.620, 47.265, 7.510,
            -6.295, 47.265, 8.679,
            -5.620, 47.265, 7.510,
            -5.716, 47.265, 7.280,
            -6.295, 47.265, 8.679,
            -5.716, 47.265, 7.280,
            -5.867, 47.265, 7.082,
            -6.295, 47.265, 8.679,
            -5.867, 47.265, 7.082,
            -6.065, 47.265, 6.930,
            -6.295, 47.265, 8.679,
            -6.065, 47.265, 6.930,
            -6.295, 47.265, 6.835,
            -6.295, 47.265, 8.679,
            -6.295, 47.265, 6.835,
            -6.543, 47.265, 6.802,
            -6.295, 47.265, 8.679,
            -6.543, 47.265, 6.802,
            -6.790, 47.265, 6.835,
            -6.295, 47.265, 8.679,
            -6.790, 47.265, 6.835,
            -7.020, 47.265, 6.930,
            -6.295, 47.265, 8.679,
            -7.020, 47.265, 6.930,
            -7.218, 47.265, 7.082,
            -6.295, 47.265, 8.679,
            -7.218, 47.265, 7.082,
            -7.369, 47.265, 7.280,
            -6.295, 47.265, 8.679,
            -7.369, 47.265, 7.280,
            -7.465, 47.265, 7.510,
            -6.295, 47.265, 8.679,
            -7.465, 47.265, 7.510,
            -7.497, 47.265, 7.757,
            -6.295, 47.265, 8.679,
            -7.497, 47.265, 7.757,
            -7.465, 47.265, 8.004,
            -6.295, 47.265, 8.679,
            -7.465, 47.265, 8.004,
            -7.369, 47.265, 8.235,
            -6.295, 47.265, 8.679,
            -7.369, 47.265, 8.235,
            -7.218, 47.265, 8.432,
            -6.295, 47.265, 8.679,
            -7.218, 47.265, 8.432,
            -7.020, 47.265, 8.584,
            -6.295, 47.265, 8.679,
            -7.020, 47.265, 8.584,
            -6.790, 47.265, 8.679,
            -6.295, 47.265, 8.679,
            -6.790, 47.265, 8.679,
            -6.543, 47.265, 8.712,
            -3.457, 47.265, 8.679,
            -3.226, 47.265, 8.584,
            -3.029, 47.265, 8.432,
            -3.457, 47.265, 8.679,
            -3.029, 47.265, 8.432,
            -2.877, 47.265, 8.235,
            -3.457, 47.265, 8.679,
            -2.877, 47.265, 8.235,
            -2.781, 47.265, 8.004,
            -3.457, 47.265, 8.679,
            -2.781, 47.265, 8.004,
            -2.749, 47.265, 7.757,
            -3.457, 47.265, 8.679,
            -2.749, 47.265, 7.757,
            -2.781, 47.265, 7.510,
            -3.457, 47.265, 8.679,
            -2.781, 47.265, 7.510,
            -2.877, 47.265, 7.280,
            -3.457, 47.265, 8.679,
            -2.877, 47.265, 7.280,
            -3.029, 47.265, 7.082,
            -3.457, 47.265, 8.679,
            -3.029, 47.265, 7.082,
            -3.226, 47.265, 6.930,
            -3.457, 47.265, 8.679,
            -3.226, 47.265, 6.930,
            -3.457, 47.265, 6.835,
            -3.457, 47.265, 8.679,
            -3.457, 47.265, 6.835,
            -3.704, 47.265, 6.802,
            -3.457, 47.265, 8.679,
            -3.704, 47.265, 6.802,
            -3.951, 47.265, 6.835,
            -3.457, 47.265, 8.679,
            -3.951, 47.265, 6.835,
            -4.181, 47.265, 6.930,
            -3.457, 47.265, 8.679,
            -4.181, 47.265, 6.930,
            -4.379, 47.265, 7.082,
            -3.457, 47.265, 8.679,
            -4.379, 47.265, 7.082,
            -4.531, 47.265, 7.280,
            -3.457, 47.265, 8.679,
            -4.531, 47.265, 7.280,
            -4.626, 47.265, 7.510,
            -3.457, 47.265, 8.679,
            -4.626, 47.265, 7.510,
            -4.658, 47.265, 7.757,
            -3.457, 47.265, 8.679,
            -4.658, 47.265, 7.757,
            -4.626, 47.265, 8.004,
            -3.457, 47.265, 8.679,
            -4.626, 47.265, 8.004,
            -4.531, 47.265, 8.235,
            -3.457, 47.265, 8.679,
            -4.531, 47.265, 8.235,
            -4.379, 47.265, 8.432,
            -3.457, 47.265, 8.679,
            -4.379, 47.265, 8.432,
            -4.181, 47.265, 8.584,
            -3.457, 47.265, 8.679,
            -4.181, 47.265, 8.584,
            -3.951, 47.265, 8.679,
            -3.457, 47.265, 8.679,
            -3.951, 47.265, 8.679,
            -3.704, 47.265, 8.712,
            6.708, 47.265, 8.679,
            6.939, 47.265, 8.584,
            7.136, 47.265, 8.432,
            6.708, 47.265, 8.679,
            7.136, 47.265, 8.432,
            7.288, 47.265, 8.235,
            6.708, 47.265, 8.679,
            7.288, 47.265, 8.235,
            7.383, 47.265, 8.004,
            6.708, 47.265, 8.679,
            7.383, 47.265, 8.004,
            7.416, 47.265, 7.757,
            6.708, 47.265, 8.679,
            7.416, 47.265, 7.757,
            7.383, 47.265, 7.510,
            6.708, 47.265, 8.679,
            7.383, 47.265, 7.510,
            7.288, 47.265, 7.280,
            6.708, 47.265, 8.679,
            7.288, 47.265, 7.280,
            7.136, 47.265, 7.082,
            6.708, 47.265, 8.679,
            7.136, 47.265, 7.082,
            6.939, 47.265, 6.930,
            6.708, 47.265, 8.679,
            6.939, 47.265, 6.930,
            6.708, 47.265, 6.835,
            6.708, 47.265, 8.679,
            6.708, 47.265, 6.835,
            6.461, 47.265, 6.802,
            6.708, 47.265, 8.679,
            6.461, 47.265, 6.802,
            6.214, 47.265, 6.835,
            6.708, 47.265, 8.679,
            6.214, 47.265, 6.835,
            5.984, 47.265, 6.930,
            6.708, 47.265, 8.679,
            5.984, 47.265, 6.930,
            5.786, 47.265, 7.082,
            6.708, 47.265, 8.679,
            5.786, 47.265, 7.082,
            5.634, 47.265, 7.280,
            6.708, 47.265, 8.679,
            5.634, 47.265, 7.280,
            5.539, 47.265, 7.510,
            6.708, 47.265, 8.679,
            5.539, 47.265, 7.510,
            5.506, 47.265, 7.757,
            6.708, 47.265, 8.679,
            5.506, 47.265, 7.757,
            5.539, 47.265, 8.004,
            6.708, 47.265, 8.679,
            5.539, 47.265, 8.004,
            5.634, 47.265, 8.235,
            6.708, 47.265, 8.679,
            5.634, 47.265, 8.235,
            5.786, 47.265, 8.432,
            6.708, 47.265, 8.679,
            5.786, 47.265, 8.432,
            5.984, 47.265, 8.584,
            6.708, 47.265, 8.679,
            5.984, 47.265, 8.584,
            6.214, 47.265, 8.679,
            6.708, 47.265, 8.679,
            6.214, 47.265, 8.679,
            6.461, 47.265, 8.712,
            3.869, 47.265, 8.679,
            4.100, 47.265, 8.584,
            4.297, 47.265, 8.432,
            3.869, 47.265, 8.679,
            4.297, 47.265, 8.432,
            4.449, 47.265, 8.235,
            3.869, 47.265, 8.679,
            4.449, 47.265, 8.235,
            4.545, 47.265, 8.004,
            3.869, 47.265, 8.679,
            4.545, 47.265, 8.004,
            4.577, 47.265, 7.757,
            3.869, 47.265, 8.679,
            4.577, 47.265, 7.757,
            4.545, 47.265, 7.510,
            3.869, 47.265, 8.679,
            4.545, 47.265, 7.510,
            4.449, 47.265, 7.280,
            3.869, 47.265, 8.679,
            4.449, 47.265, 7.280,
            4.297, 47.265, 7.082,
            3.869, 47.265, 8.679,
            4.297, 47.265, 7.082,
            4.100, 47.265, 6.930,
            3.869, 47.265, 8.679,
            4.100, 47.265, 6.930,
            3.869, 47.265, 6.835,
            3.869, 47.265, 8.679,
            3.869, 47.265, 6.835,
            3.622, 47.265, 6.802,
            3.869, 47.265, 8.679,
            3.622, 47.265, 6.802,
            3.375, 47.265, 6.835,
            3.869, 47.265, 8.679,
            3.375, 47.265, 6.835,
            3.145, 47.265, 6.930,
            3.869, 47.265, 8.679,
            3.145, 47.265, 6.930,
            2.947, 47.265, 7.082,
            3.869, 47.265, 8.679,
            2.947, 47.265, 7.082,
            2.795, 47.265, 7.280,
            3.869, 47.265, 8.679,
            2.795, 47.265, 7.280,
            2.700, 47.265, 7.510,
            3.869, 47.265, 8.679,
            2.700, 47.265, 7.510,
            2.668, 47.265, 7.757,
            3.869, 47.265, 8.679,
            2.668, 47.265, 7.757,
            2.700, 47.265, 8.004,
            3.869, 47.265, 8.679,
            2.700, 47.265, 8.004,
            2.795, 47.265, 8.235,
            3.869, 47.265, 8.679,
            2.795, 47.265, 8.235,
            2.947, 47.265, 8.432,
            3.869, 47.265, 8.679,
            2.947, 47.265, 8.432,
            3.145, 47.265, 8.584,
            3.869, 47.265, 8.679,
            3.145, 47.265, 8.584,
            3.375, 47.265, 8.679,
            3.869, 47.265, 8.679,
            3.375, 47.265, 8.679,
               3.622, 47.265, 8.712
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xE4A734,
            shininess: 39.397,
            ambient: 0xFFFF68,
            side: THREE.FrontSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
