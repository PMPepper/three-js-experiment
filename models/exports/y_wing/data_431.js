function create_geometry_431(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -44.889, -571.628, 34.344,
            -25.412, -573.023, 61.381,
            -25.686, -572.096, 61.677,
            -44.889, -571.628, 34.344,
            -44.517, -572.558, 34.220,
            -25.412, -573.023, 61.381,
            -44.517, -572.558, 34.220,
            -24.740, -573.399, 60.711,
            -25.412, -573.023, 61.381,
            -44.517, -572.558, 34.220,
            -43.617, -572.941, 33.968,
            -24.740, -573.399, 60.711,
            -43.617, -572.941, 33.968,
            -24.064, -573.000, 60.060,
            -24.740, -573.399, 60.711,
            -43.617, -572.941, 33.968,
            -42.715, -572.550, 33.736,
            -24.064, -573.000, 60.060,
            -42.715, -572.550, 33.736,
            -23.779, -572.063, 59.808,
            -24.064, -573.000, 60.060,
            -42.715, -572.550, 33.736,
            -42.340, -571.615, 33.660,
            -23.779, -572.063, 59.808,
            -42.340, -571.615, 33.660,
            -24.052, -571.135, 60.104,
            -23.779, -572.063, 59.808,
            -42.340, -571.615, 33.660,
            -42.711, -570.685, 33.784,
            -24.052, -571.135, 60.104,
            -42.711, -570.685, 33.784,
            -24.724, -570.760, 60.774,
            -24.052, -571.135, 60.104,
            -42.711, -570.685, 33.784,
            -43.611, -570.302, 34.036,
            -24.724, -570.760, 60.774,
            -43.611, -570.302, 34.036,
            -25.401, -571.158, 61.425,
            -24.724, -570.760, 60.774,
            -43.611, -570.302, 34.036,
            -44.513, -570.693, 34.268,
            -25.401, -571.158, 61.425,
            -44.513, -570.693, 34.268,
            -25.686, -572.096, 61.677,
            -25.401, -571.158, 61.425,
            -44.513, -570.693, 34.268,
            -44.889, -571.628, 34.344,
            -25.686, -572.096, 61.677,
            -25.686, -572.096, 61.677,
            -24.410, -573.053, 62.367,
            -24.675, -572.128, 62.688,
            -25.686, -572.096, 61.677,
            -25.412, -573.023, 61.381,
            -24.410, -573.053, 62.367,
            -25.412, -573.023, 61.381,
            -23.868, -573.421, 61.539,
            -24.410, -573.053, 62.367,
            -25.412, -573.023, 61.381,
            -24.740, -573.399, 60.711,
            -23.868, -573.421, 61.539,
            -24.740, -573.399, 60.711,
            -23.123, -573.019, 60.933,
            -23.868, -573.421, 61.539,
            -24.740, -573.399, 60.711,
            -24.064, -573.000, 60.060,
            -23.123, -573.019, 60.933,
            -24.064, -573.000, 60.060,
            -22.854, -572.079, 60.660,
            -23.123, -573.019, 60.933,
            -24.064, -573.000, 60.060,
            -23.779, -572.063, 59.808,
            -22.854, -572.079, 60.660,
            -23.779, -572.063, 59.808,
            -23.119, -571.154, 60.982,
            -22.854, -572.079, 60.660,
            -23.779, -572.063, 59.808,
            -24.052, -571.135, 60.104,
            -23.119, -571.154, 60.982,
            -24.052, -571.135, 60.104,
            -23.762, -570.784, 61.708,
            -23.119, -571.154, 60.982,
            -24.052, -571.135, 60.104,
            -24.724, -570.760, 60.774,
            -23.762, -570.784, 61.708,
            -24.724, -570.760, 60.774,
            -24.406, -571.188, 62.415,
            -23.762, -570.784, 61.708,
            -24.724, -570.760, 60.774,
            -25.401, -571.158, 61.425,
            -24.406, -571.188, 62.415,
            -25.401, -571.158, 61.425,
            -24.675, -572.128, 62.688,
            -24.406, -571.188, 62.415,
            -25.401, -571.158, 61.425,
            -25.686, -572.096, 61.677,
            -24.675, -572.128, 62.688,
            -24.675, -572.128, 62.688,
            -22.933, -573.075, 63.101,
            -23.038, -572.152, 63.509,
            -24.675, -572.128, 62.688,
            -24.410, -573.053, 62.367,
            -22.933, -573.075, 63.101,
            -24.410, -573.053, 62.367,
            -22.678, -573.438, 62.165,
            -22.933, -573.075, 63.101,
            -24.410, -573.053, 62.367,
            -23.868, -573.421, 61.539,
            -22.678, -573.438, 62.165,
            -23.868, -573.421, 61.539,
            -22.420, -573.028, 61.249,
            -22.678, -573.438, 62.165,
            -23.868, -573.421, 61.539,
            -23.123, -573.019, 60.933,
            -22.420, -573.028, 61.249,
            -23.123, -573.019, 60.933,
            -22.312, -572.086, 60.889,
            -22.420, -573.028, 61.249,
            -23.123, -573.019, 60.933,
            -22.854, -572.079, 60.660,
            -22.312, -572.086, 60.889,
            -22.854, -572.079, 60.660,
            -22.416, -571.163, 61.297,
            -22.312, -572.086, 60.889,
            -22.854, -572.079, 60.660,
            -23.119, -571.154, 60.982,
            -22.416, -571.163, 61.297,
            -23.119, -571.154, 60.982,
            -22.672, -570.800, 62.233,
            -22.416, -571.163, 61.297,
            -23.119, -571.154, 60.982,
            -23.762, -570.784, 61.708,
            -22.672, -570.800, 62.233,
            -23.762, -570.784, 61.708,
            -22.929, -571.210, 63.149,
            -22.672, -570.800, 62.233,
            -23.762, -570.784, 61.708,
            -24.406, -571.188, 62.415,
            -22.929, -571.210, 63.149,
            -24.406, -571.188, 62.415,
            -23.038, -572.152, 63.509,
            -22.929, -571.210, 63.149,
            -24.406, -571.188, 62.415,
            -24.675, -572.128, 62.688,
            -23.038, -572.152, 63.509,
            -23.038, -572.152, 63.509,
            -18.315, -574.998, 63.226,
            -17.955, -574.296, 63.579,
            -23.038, -572.152, 63.509,
            -22.933, -573.075, 63.101,
            -18.315, -574.998, 63.226,
            -22.933, -573.075, 63.101,
            -18.461, -575.272, 62.414,
            -18.315, -574.998, 63.226,
            -22.933, -573.075, 63.101,
            -22.678, -573.438, 62.165,
            -18.461, -575.272, 62.414,
            -22.678, -573.438, 62.165,
            -18.306, -574.959, 61.618,
            -18.461, -575.272, 62.414,
            -22.678, -573.438, 62.165,
            -22.420, -573.028, 61.249,
            -18.306, -574.959, 61.618,
            -22.420, -573.028, 61.249,
            -17.942, -574.240, 61.304,
            -18.306, -574.959, 61.618,
            -22.420, -573.028, 61.249,
            -22.312, -572.086, 60.889,
            -17.942, -574.240, 61.304,
            -22.312, -572.086, 60.889,
            -17.582, -573.538, 61.657,
            -17.942, -574.240, 61.304,
            -22.312, -572.086, 60.889,
            -22.416, -571.163, 61.297,
            -17.582, -573.538, 61.657,
            -22.416, -571.163, 61.297,
            -17.436, -573.263, 62.469,
            -17.582, -573.538, 61.657,
            -22.416, -571.163, 61.297,
            -22.672, -570.800, 62.233,
            -17.436, -573.263, 62.469,
            -22.672, -570.800, 62.233,
            -17.591, -573.577, 63.265,
            -17.436, -573.263, 62.469,
            -22.672, -570.800, 62.233,
            -22.929, -571.210, 63.149,
            -17.591, -573.577, 63.265,
            -22.929, -571.210, 63.149,
            -17.955, -574.296, 63.579,
            -17.591, -573.577, 63.265,
            -22.929, -571.210, 63.149,
            -23.038, -572.152, 63.509,
               -17.955, -574.296, 63.579
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.818, -0.015, 0.575,
            -0.547, -0.707, 0.449,
            -0.764, -0.011, 0.645,
            -0.818, -0.015, 0.575,
            -0.624, -0.654, 0.428,
            -0.547, -0.707, 0.449,
            -0.624, -0.654, 0.428,
            -0.022, -1.000, -0.005,
            -0.547, -0.707, 0.449,
            -0.624, -0.654, 0.428,
            -0.074, -0.997, 0.035,
            -0.022, -1.000, -0.005,
            -0.074, -0.997, 0.035,
            0.520, -0.714, -0.469,
            -0.022, -1.000, -0.005,
            -0.074, -0.997, 0.035,
            0.557, -0.724, -0.407,
            0.520, -0.714, -0.469,
            0.557, -0.724, -0.407,
            0.753, 0.013, -0.658,
            0.520, -0.714, -0.469,
            0.557, -0.724, -0.407,
            0.816, 0.011, -0.578,
            0.753, 0.013, -0.658,
            0.816, 0.011, -0.578,
            0.523, 0.731, -0.439,
            0.753, 0.013, -0.658,
            0.816, 0.011, -0.578,
            0.557, 0.738, -0.382,
            0.523, 0.731, -0.439,
            0.557, 0.738, -0.382,
            -0.016, 0.999, 0.032,
            0.523, 0.731, -0.439,
            0.557, 0.738, -0.382,
            -0.075, 0.995, 0.069,
            -0.016, 0.999, 0.032,
            -0.075, 0.995, 0.069,
            -0.544, 0.692, 0.475,
            -0.016, 0.999, 0.032,
            -0.075, 0.995, 0.069,
            -0.628, 0.634, 0.452,
            -0.544, 0.692, 0.475,
            -0.628, 0.634, 0.452,
            -0.764, -0.011, 0.645,
            -0.544, 0.692, 0.475,
            -0.628, 0.634, 0.452,
            -0.818, -0.015, 0.575,
            -0.764, -0.011, 0.645,
            -0.764, -0.011, 0.645,
            -0.418, -0.710, 0.567,
            -0.588, -0.021, 0.809,
            -0.764, -0.011, 0.645,
            -0.547, -0.707, 0.449,
            -0.418, -0.710, 0.567,
            -0.547, -0.707, 0.449,
            -0.019, -1.000, -0.003,
            -0.418, -0.710, 0.567,
            -0.547, -0.707, 0.449,
            -0.022, -1.000, -0.005,
            -0.019, -1.000, -0.003,
            -0.022, -1.000, -0.005,
            0.373, -0.714, -0.592,
            -0.019, -1.000, -0.003,
            -0.022, -1.000, -0.005,
            0.520, -0.714, -0.469,
            0.373, -0.714, -0.592,
            0.520, -0.714, -0.469,
            0.538, 0.024, -0.843,
            0.373, -0.714, -0.592,
            0.520, -0.714, -0.469,
            0.753, 0.013, -0.658,
            0.538, 0.024, -0.843,
            0.753, 0.013, -0.658,
            0.377, 0.747, -0.547,
            0.538, 0.024, -0.843,
            0.753, 0.013, -0.658,
            0.523, 0.731, -0.439,
            0.377, 0.747, -0.547,
            0.523, 0.731, -0.439,
            -0.017, 0.998, 0.057,
            0.377, 0.747, -0.547,
            0.523, 0.731, -0.439,
            -0.016, 0.999, 0.032,
            -0.017, 0.998, 0.057,
            -0.016, 0.999, 0.032,
            -0.417, 0.680, 0.603,
            -0.017, 0.998, 0.057,
            -0.016, 0.999, 0.032,
            -0.544, 0.692, 0.475,
            -0.417, 0.680, 0.603,
            -0.544, 0.692, 0.475,
            -0.588, -0.021, 0.809,
            -0.417, 0.680, 0.603,
            -0.544, 0.692, 0.475,
            -0.764, -0.011, 0.645,
            -0.588, -0.021, 0.809,
            -0.588, -0.021, 0.809,
            -0.311, -0.672, 0.672,
            -0.227, 0.021, 0.974,
            -0.588, -0.021, 0.809,
            -0.418, -0.710, 0.567,
            -0.311, -0.672, 0.672,
            -0.418, -0.710, 0.567,
            -0.224, -0.974, -0.034,
            -0.311, -0.672, 0.672,
            -0.418, -0.710, 0.567,
            -0.019, -1.000, -0.003,
            -0.224, -0.974, -0.034,
            -0.019, -1.000, -0.003,
            0.029, -0.675, -0.737,
            -0.224, -0.974, -0.034,
            -0.019, -1.000, -0.003,
            0.373, -0.714, -0.592,
            0.029, -0.675, -0.737,
            0.373, -0.714, -0.592,
            0.273, 0.084, -0.958,
            0.029, -0.675, -0.737,
            0.373, -0.714, -0.592,
            0.538, 0.024, -0.843,
            0.273, 0.084, -0.958,
            0.538, 0.024, -0.843,
            0.337, 0.756, -0.561,
            0.273, 0.084, -0.958,
            0.538, 0.024, -0.843,
            0.377, 0.747, -0.547,
            0.337, 0.756, -0.561,
            0.377, 0.747, -0.547,
            0.190, 0.975, 0.117,
            0.337, 0.756, -0.561,
            0.377, 0.747, -0.547,
            -0.017, 0.998, 0.057,
            0.190, 0.975, 0.117,
            -0.017, 0.998, 0.057,
            -0.039, 0.684, 0.728,
            0.190, 0.975, 0.117,
            -0.017, 0.998, 0.057,
            -0.417, 0.680, 0.603,
            -0.039, 0.684, 0.728,
            -0.417, 0.680, 0.603,
            -0.227, 0.021, 0.974,
            -0.039, 0.684, 0.728,
            -0.417, 0.680, 0.603,
            -0.588, -0.021, 0.809,
            -0.227, 0.021, 0.974,
            -0.227, 0.021, 0.974,
            -0.287, -0.656, 0.698,
            -0.014, -0.000, 1.000,
            -0.227, 0.021, 0.974,
            -0.311, -0.672, 0.672,
            -0.287, -0.656, 0.698,
            -0.311, -0.672, 0.672,
            -0.387, -0.922, -0.018,
            -0.287, -0.656, 0.698,
            -0.311, -0.672, 0.672,
            -0.224, -0.974, -0.034,
            -0.387, -0.922, -0.018,
            -0.224, -0.974, -0.034,
            -0.236, -0.657, -0.716,
            -0.387, -0.922, -0.018,
            -0.224, -0.974, -0.034,
            0.029, -0.675, -0.737,
            -0.236, -0.657, -0.716,
            0.029, -0.675, -0.737,
            0.090, -0.013, -0.996,
            -0.236, -0.657, -0.716,
            0.029, -0.675, -0.737,
            0.273, 0.084, -0.958,
            0.090, -0.013, -0.996,
            0.273, 0.084, -0.958,
            0.373, 0.640, -0.672,
            0.090, -0.013, -0.996,
            0.273, 0.084, -0.958,
            0.337, 0.756, -0.561,
            0.373, 0.640, -0.672,
            0.337, 0.756, -0.561,
            0.434, 0.900, 0.043,
            0.373, 0.640, -0.672,
            0.337, 0.756, -0.561,
            0.190, 0.975, 0.117,
            0.434, 0.900, 0.043,
            0.190, 0.975, 0.117,
            0.274, 0.637, 0.720,
            0.434, 0.900, 0.043,
            0.190, 0.975, 0.117,
            -0.039, 0.684, 0.728,
            0.274, 0.637, 0.720,
            -0.039, 0.684, 0.728,
            -0.014, -0.000, 1.000,
            0.274, 0.637, 0.720,
            -0.039, 0.684, 0.728,
            -0.227, 0.021, 0.974,
               -0.014, -0.000, 1.000
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
