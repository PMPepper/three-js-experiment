function create_geometry_430(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            25.735, -572.096, 61.677,
            25.461, -573.024, 61.381,
            44.938, -571.628, 34.344,
            25.461, -573.024, 61.381,
            44.566, -572.558, 34.220,
            44.938, -571.628, 34.344,
            25.461, -573.024, 61.381,
            24.789, -573.399, 60.711,
            44.566, -572.558, 34.220,
            24.789, -573.399, 60.711,
            43.666, -572.941, 33.968,
            44.566, -572.558, 34.220,
            24.789, -573.399, 60.711,
            24.113, -573.000, 60.060,
            43.666, -572.941, 33.968,
            24.113, -573.000, 60.060,
            42.764, -572.550, 33.736,
            43.666, -572.941, 33.968,
            24.113, -573.000, 60.060,
            23.828, -572.063, 59.808,
            42.764, -572.550, 33.736,
            23.828, -572.063, 59.808,
            42.389, -571.615, 33.660,
            42.764, -572.550, 33.736,
            23.828, -572.063, 59.808,
            24.102, -571.135, 60.104,
            42.389, -571.615, 33.660,
            24.102, -571.135, 60.104,
            42.760, -570.685, 33.784,
            42.389, -571.615, 33.660,
            24.102, -571.135, 60.104,
            24.773, -570.760, 60.774,
            42.760, -570.685, 33.784,
            24.773, -570.760, 60.774,
            43.660, -570.302, 34.036,
            42.760, -570.685, 33.784,
            24.773, -570.760, 60.774,
            25.450, -571.158, 61.425,
            43.660, -570.302, 34.036,
            25.450, -571.158, 61.425,
            44.562, -570.693, 34.268,
            43.660, -570.302, 34.036,
            25.450, -571.158, 61.425,
            25.735, -572.096, 61.677,
            44.562, -570.693, 34.268,
            25.735, -572.096, 61.677,
            44.938, -571.628, 34.344,
            44.562, -570.693, 34.268,
            24.724, -572.128, 62.688,
            24.459, -573.053, 62.367,
            25.735, -572.096, 61.677,
            24.459, -573.053, 62.367,
            25.461, -573.024, 61.381,
            25.735, -572.096, 61.677,
            24.459, -573.053, 62.367,
            23.917, -573.421, 61.539,
            25.461, -573.024, 61.381,
            23.917, -573.421, 61.539,
            24.789, -573.399, 60.711,
            25.461, -573.024, 61.381,
            23.917, -573.421, 61.539,
            23.172, -573.019, 60.933,
            24.789, -573.399, 60.711,
            23.172, -573.019, 60.933,
            24.113, -573.000, 60.060,
            24.789, -573.399, 60.711,
            23.172, -573.019, 60.933,
            22.903, -572.079, 60.660,
            24.113, -573.000, 60.060,
            22.903, -572.079, 60.660,
            23.828, -572.063, 59.808,
            24.113, -573.000, 60.060,
            22.903, -572.079, 60.660,
            23.168, -571.154, 60.982,
            23.828, -572.063, 59.808,
            23.168, -571.154, 60.982,
            24.102, -571.135, 60.104,
            23.828, -572.063, 59.808,
            23.168, -571.154, 60.982,
            23.811, -570.784, 61.708,
            24.102, -571.135, 60.104,
            23.811, -570.784, 61.708,
            24.773, -570.760, 60.774,
            24.102, -571.135, 60.104,
            23.811, -570.784, 61.708,
            24.455, -571.188, 62.415,
            24.773, -570.760, 60.774,
            24.455, -571.188, 62.415,
            25.450, -571.158, 61.425,
            24.773, -570.760, 60.774,
            24.455, -571.188, 62.415,
            24.724, -572.128, 62.688,
            25.450, -571.158, 61.425,
            24.724, -572.128, 62.688,
            25.735, -572.096, 61.677,
            25.450, -571.158, 61.425,
            23.087, -572.152, 63.509,
            22.982, -573.075, 63.101,
            24.724, -572.128, 62.688,
            22.982, -573.075, 63.101,
            24.459, -573.053, 62.367,
            24.724, -572.128, 62.688,
            22.982, -573.075, 63.101,
            22.727, -573.438, 62.165,
            24.459, -573.053, 62.367,
            22.727, -573.438, 62.165,
            23.917, -573.421, 61.539,
            24.459, -573.053, 62.367,
            22.727, -573.438, 62.165,
            22.469, -573.028, 61.249,
            23.917, -573.421, 61.539,
            22.469, -573.028, 61.249,
            23.172, -573.019, 60.933,
            23.917, -573.421, 61.539,
            22.469, -573.028, 61.249,
            22.361, -572.086, 60.889,
            23.172, -573.019, 60.933,
            22.361, -572.086, 60.889,
            22.903, -572.079, 60.660,
            23.172, -573.019, 60.933,
            22.361, -572.086, 60.889,
            22.465, -571.163, 61.297,
            22.903, -572.079, 60.660,
            22.465, -571.163, 61.297,
            23.168, -571.154, 60.982,
            22.903, -572.079, 60.660,
            22.465, -571.163, 61.297,
            22.721, -570.800, 62.233,
            23.168, -571.154, 60.982,
            22.721, -570.800, 62.233,
            23.811, -570.784, 61.708,
            23.168, -571.154, 60.982,
            22.721, -570.800, 62.233,
            22.978, -571.210, 63.149,
            23.811, -570.784, 61.708,
            22.978, -571.210, 63.149,
            24.455, -571.188, 62.415,
            23.811, -570.784, 61.708,
            22.978, -571.210, 63.149,
            23.087, -572.152, 63.509,
            24.455, -571.188, 62.415,
            23.087, -572.152, 63.509,
            24.724, -572.128, 62.688,
            24.455, -571.188, 62.415,
            18.004, -574.295, 63.579,
            18.364, -574.998, 63.226,
            23.087, -572.152, 63.509,
            18.364, -574.998, 63.226,
            22.982, -573.075, 63.101,
            23.087, -572.152, 63.509,
            18.364, -574.998, 63.226,
            18.510, -575.272, 62.414,
            22.982, -573.075, 63.101,
            18.510, -575.272, 62.414,
            22.727, -573.438, 62.165,
            22.982, -573.075, 63.101,
            18.510, -575.272, 62.414,
            18.355, -574.959, 61.618,
            22.727, -573.438, 62.165,
            18.355, -574.959, 61.618,
            22.469, -573.028, 61.249,
            22.727, -573.438, 62.165,
            18.355, -574.959, 61.618,
            17.991, -574.240, 61.304,
            22.469, -573.028, 61.249,
            17.991, -574.240, 61.304,
            22.361, -572.086, 60.889,
            22.469, -573.028, 61.249,
            17.991, -574.240, 61.304,
            17.631, -573.538, 61.656,
            22.361, -572.086, 60.889,
            17.631, -573.538, 61.656,
            22.465, -571.163, 61.297,
            22.361, -572.086, 60.889,
            17.631, -573.538, 61.656,
            17.486, -573.263, 62.469,
            22.465, -571.163, 61.297,
            17.486, -573.263, 62.469,
            22.721, -570.800, 62.233,
            22.465, -571.163, 61.297,
            17.486, -573.263, 62.469,
            17.640, -573.577, 63.265,
            22.721, -570.800, 62.233,
            17.640, -573.577, 63.265,
            22.978, -571.210, 63.149,
            22.721, -570.800, 62.233,
            17.640, -573.577, 63.265,
            18.004, -574.295, 63.579,
            22.978, -571.210, 63.149,
            18.004, -574.295, 63.579,
            23.087, -572.152, 63.509,
               22.978, -571.210, 63.149
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.764, -0.023, 0.645,
            -0.547, 0.682, 0.485,
            -0.818, -0.015, 0.575,
            -0.547, 0.682, 0.485,
            -0.624, 0.631, 0.462,
            -0.818, -0.015, 0.575,
            -0.547, 0.682, 0.485,
            -0.022, 0.999, 0.047,
            -0.624, 0.631, 0.462,
            -0.022, 0.999, 0.047,
            -0.074, 0.993, 0.087,
            -0.624, 0.631, 0.462,
            -0.022, 0.999, 0.047,
            0.520, 0.738, -0.431,
            -0.074, 0.993, 0.087,
            0.520, 0.738, -0.431,
            0.557, 0.744, -0.369,
            -0.074, 0.993, 0.087,
            0.520, 0.738, -0.431,
            0.753, 0.022, -0.658,
            0.557, 0.744, -0.369,
            0.753, 0.022, -0.658,
            0.816, 0.019, -0.578,
            0.557, 0.744, -0.369,
            0.753, 0.022, -0.658,
            0.523, -0.707, -0.477,
            0.816, 0.019, -0.578,
            0.523, -0.707, -0.477,
            0.557, -0.717, -0.420,
            0.816, 0.019, -0.578,
            0.523, -0.707, -0.477,
            -0.016, -1.000, -0.020,
            0.557, -0.717, -0.420,
            -0.016, -1.000, -0.020,
            -0.075, -0.997, 0.017,
            0.557, -0.717, -0.420,
            -0.016, -1.000, -0.020,
            -0.544, -0.716, 0.438,
            -0.075, -0.997, 0.017,
            -0.544, -0.716, 0.438,
            -0.628, -0.657, 0.418,
            -0.075, -0.997, 0.017,
            -0.544, -0.716, 0.438,
            -0.764, -0.023, 0.645,
            -0.628, -0.657, 0.418,
            -0.764, -0.023, 0.645,
            -0.818, -0.015, 0.575,
            -0.628, -0.657, 0.418,
            -0.588, -0.022, 0.809,
            -0.418, 0.679, 0.603,
            -0.764, -0.023, 0.645,
            -0.418, 0.679, 0.603,
            -0.547, 0.682, 0.485,
            -0.764, -0.023, 0.645,
            -0.418, 0.679, 0.603,
            -0.019, 0.999, 0.049,
            -0.547, 0.682, 0.485,
            -0.019, 0.999, 0.049,
            -0.022, 0.999, 0.047,
            -0.547, 0.682, 0.485,
            -0.019, 0.999, 0.049,
            0.373, 0.744, -0.554,
            -0.022, 0.999, 0.047,
            0.373, 0.744, -0.554,
            0.520, 0.738, -0.431,
            -0.022, 0.999, 0.047,
            0.373, 0.744, -0.554,
            0.538, 0.020, -0.843,
            0.520, 0.738, -0.431,
            0.538, 0.020, -0.843,
            0.753, 0.022, -0.658,
            0.520, 0.738, -0.431,
            0.538, 0.020, -0.843,
            0.377, -0.718, -0.586,
            0.753, 0.022, -0.658,
            0.377, -0.718, -0.586,
            0.523, -0.707, -0.477,
            0.753, 0.022, -0.658,
            0.377, -0.718, -0.586,
            -0.018, -1.000, 0.004,
            0.523, -0.707, -0.477,
            -0.018, -1.000, 0.004,
            -0.016, -1.000, -0.020,
            0.523, -0.707, -0.477,
            -0.018, -1.000, 0.004,
            -0.417, -0.711, 0.566,
            -0.016, -1.000, -0.020,
            -0.417, -0.711, 0.566,
            -0.544, -0.716, 0.438,
            -0.016, -1.000, -0.020,
            -0.417, -0.711, 0.566,
            -0.588, -0.022, 0.809,
            -0.544, -0.716, 0.438,
            -0.588, -0.022, 0.809,
            -0.764, -0.023, 0.645,
            -0.544, -0.716, 0.438,
            -0.227, -0.071, 0.971,
            -0.311, 0.636, 0.706,
            -0.588, -0.022, 0.809,
            -0.311, 0.636, 0.706,
            -0.418, 0.679, 0.603,
            -0.588, -0.022, 0.809,
            -0.311, 0.636, 0.706,
            -0.224, 0.974, 0.017,
            -0.418, 0.679, 0.603,
            -0.224, 0.974, 0.017,
            -0.019, 0.999, 0.049,
            -0.418, 0.679, 0.603,
            -0.224, 0.974, 0.017,
            0.029, 0.713, -0.701,
            -0.019, 0.999, 0.049,
            0.029, 0.713, -0.701,
            0.373, 0.744, -0.554,
            -0.019, 0.999, 0.049,
            0.029, 0.713, -0.701,
            0.273, -0.033, -0.961,
            0.373, 0.744, -0.554,
            0.273, -0.033, -0.961,
            0.538, 0.020, -0.843,
            0.373, 0.744, -0.554,
            0.273, -0.033, -0.961,
            0.337, -0.726, -0.600,
            0.538, 0.020, -0.843,
            0.337, -0.726, -0.600,
            0.377, -0.718, -0.586,
            0.538, 0.020, -0.843,
            0.337, -0.726, -0.600,
            0.190, -0.980, 0.066,
            0.377, -0.718, -0.586,
            0.190, -0.980, 0.066,
            -0.018, -1.000, 0.004,
            0.377, -0.718, -0.586,
            0.190, -0.980, 0.066,
            -0.039, -0.721, 0.691,
            -0.018, -1.000, 0.004,
            -0.039, -0.721, 0.691,
            -0.417, -0.711, 0.566,
            -0.018, -1.000, 0.004,
            -0.039, -0.721, 0.691,
            -0.227, -0.071, 0.971,
            -0.417, -0.711, 0.566,
            -0.227, -0.071, 0.971,
            -0.588, -0.022, 0.809,
            -0.417, -0.711, 0.566,
            -0.014, -0.052, 0.999,
            -0.287, 0.619, 0.731,
            -0.227, -0.071, 0.971,
            -0.287, 0.619, 0.731,
            -0.311, 0.636, 0.706,
            -0.227, -0.071, 0.971,
            -0.287, 0.619, 0.731,
            -0.387, 0.922, 0.030,
            -0.311, 0.636, 0.706,
            -0.387, 0.922, 0.030,
            -0.224, 0.974, 0.017,
            -0.311, 0.636, 0.706,
            -0.387, 0.922, 0.030,
            -0.236, 0.693, -0.681,
            -0.224, 0.974, 0.017,
            -0.236, 0.693, -0.681,
            0.029, 0.713, -0.701,
            -0.224, 0.974, 0.017,
            -0.236, 0.693, -0.681,
            0.090, 0.065, -0.994,
            0.029, 0.713, -0.701,
            0.090, 0.065, -0.994,
            0.273, -0.033, -0.961,
            0.029, 0.713, -0.701,
            0.090, 0.065, -0.994,
            0.373, -0.604, -0.704,
            0.273, -0.033, -0.961,
            0.373, -0.604, -0.704,
            0.337, -0.726, -0.600,
            0.273, -0.033, -0.961,
            0.373, -0.604, -0.704,
            0.434, -0.901, -0.004,
            0.337, -0.726, -0.600,
            0.434, -0.901, -0.004,
            0.190, -0.980, 0.066,
            0.337, -0.726, -0.600,
            0.434, -0.901, -0.004,
            0.274, -0.674, 0.686,
            0.190, -0.980, 0.066,
            0.274, -0.674, 0.686,
            -0.039, -0.721, 0.691,
            0.190, -0.980, 0.066,
            0.274, -0.674, 0.686,
            -0.014, -0.052, 0.999,
            -0.039, -0.721, 0.691,
            -0.014, -0.052, 0.999,
            -0.227, -0.071, 0.971,
               -0.039, -0.721, 0.691
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