function create_geometry_37(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            4.518, -18.582, 4.146,
            4.871, -17.725, 4.757,
            4.948, -17.756, 5.008,
            4.871, -17.725, 4.757,
            4.907, -15.844, 4.761,
            4.948, -17.756, 5.008,
            4.907, -15.844, 4.761,
            4.948, -15.761, 5.006,
            4.948, -17.756, 5.008,
            4.518, -18.582, 4.146,
            4.490, -18.403, 4.039,
            4.871, -17.725, 4.757,
            4.518, -18.582, 4.146,
            4.146, -18.309, 3.363,
            4.490, -18.403, 4.039,
            4.518, -18.582, 4.146,
            3.972, -18.580, 3.172,
            4.146, -18.309, 3.363,
            3.972, -18.580, 3.172,
            4.036, -17.918, 3.133,
            4.146, -18.309, 3.363,
            3.972, -18.580, 3.172,
            3.816, -18.148, 2.832,
            4.036, -17.918, 3.133,
            3.816, -18.148, 2.832,
            4.075, -15.690, 3.128,
            4.036, -17.918, 3.133,
            3.816, -18.148, 2.832,
            3.972, -14.993, 3.168,
            4.075, -15.690, 3.128,
            3.972, -14.993, 3.168,
            4.200, -15.254, 3.357,
            4.075, -15.690, 3.128,
            3.972, -14.993, 3.168,
            4.518, -14.995, 4.180,
            4.200, -15.254, 3.357,
            4.518, -14.995, 4.180,
            4.565, -15.186, 4.067,
            4.200, -15.254, 3.357,
            4.518, -14.995, 4.180,
            4.907, -15.844, 4.761,
            4.565, -15.186, 4.067,
            4.518, -14.995, 4.180,
            4.948, -15.761, 5.006,
            4.907, -15.844, 4.761,
            3.816, -18.148, 2.832,
            3.816, -15.485, 2.830,
            3.972, -14.993, 3.168,
            -4.286, -14.995, 4.217,
            -4.815, -15.854, 4.750,
            -4.794, -15.761, 4.895,
            -4.815, -15.854, 4.750,
            -4.801, -17.791, 4.776,
            -4.794, -15.761, 4.895,
            -4.801, -17.791, 4.776,
            -4.794, -17.756, 4.897,
            -4.794, -15.761, 4.895,
            -4.286, -14.995, 4.217,
            -4.345, -15.231, 4.058,
            -4.815, -15.854, 4.750,
            -4.286, -14.995, 4.217,
            -3.940, -15.306, 3.371,
            -4.345, -15.231, 4.058,
            -4.286, -14.995, 4.217,
            -3.623, -14.993, 3.168,
            -3.940, -15.306, 3.371,
            -3.623, -14.993, 3.168,
            -3.843, -15.723, 3.148,
            -3.940, -15.306, 3.371,
            -3.623, -14.993, 3.168,
            -3.467, -18.148, 2.832,
            -3.843, -15.723, 3.148,
            -3.467, -18.148, 2.832,
            -3.832, -17.943, 3.133,
            -3.843, -15.723, 3.148,
            -3.467, -18.148, 2.832,
            -3.623, -18.580, 3.172,
            -3.832, -17.943, 3.133,
            -3.623, -18.580, 3.172,
            -3.954, -18.374, 3.359,
            -3.832, -17.943, 3.133,
            -3.623, -18.580, 3.172,
            -4.286, -18.582, 4.183,
            -3.954, -18.374, 3.359,
            -4.286, -18.582, 4.183,
            -4.350, -18.436, 4.045,
            -3.954, -18.374, 3.359,
            -4.286, -18.582, 4.183,
            -4.801, -17.791, 4.776,
            -4.350, -18.436, 4.045,
            -4.286, -18.582, 4.183,
            -4.794, -17.756, 4.897,
            -4.801, -17.791, 4.776,
            -3.623, -14.993, 3.168,
            -3.467, -15.485, 2.830,
               -3.467, -18.148, 2.832
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.937, -0.165, -0.309,
            0.937, -0.165, -0.309,
            0.937, -0.165, -0.309,
            0.955, -0.018, -0.296,
            0.955, -0.018, -0.296,
            0.955, -0.018, -0.296,
            0.987, -0.000, -0.162,
            0.987, -0.000, -0.162,
            0.987, -0.000, -0.162,
            0.914, -0.094, -0.395,
            0.914, -0.094, -0.395,
            0.914, -0.094, -0.395,
            0.874, -0.142, -0.465,
            0.874, -0.142, -0.465,
            0.874, -0.142, -0.465,
            0.853, -0.210, -0.478,
            0.853, -0.210, -0.478,
            0.853, -0.210, -0.478,
            0.808, -0.112, -0.578,
            0.808, -0.112, -0.578,
            0.808, -0.112, -0.578,
            0.841, -0.112, -0.529,
            0.841, -0.112, -0.529,
            0.841, -0.112, -0.529,
            0.813, -0.016, -0.582,
            0.813, -0.016, -0.582,
            0.813, -0.016, -0.582,
            0.242, 0.091, -0.966,
            0.242, 0.091, -0.966,
            0.242, 0.091, -0.966,
            0.724, 0.145, -0.674,
            0.724, 0.145, -0.674,
            0.724, 0.145, -0.674,
            0.810, 0.392, -0.436,
            0.810, 0.392, -0.436,
            0.810, 0.392, -0.436,
            0.777, 0.449, -0.442,
            0.777, 0.449, -0.442,
            0.777, 0.449, -0.442,
            0.934, 0.320, -0.158,
            0.934, 0.320, -0.158,
            0.934, 0.320, -0.158,
            0.934, 0.262, -0.242,
            0.934, 0.262, -0.242,
            0.934, 0.262, -0.242,
            0.908, -0.000, -0.419,
            0.908, -0.000, -0.419,
            0.908, -0.000, -0.419,
            -0.882, 0.444, -0.158,
            -0.882, 0.444, -0.158,
            -0.882, 0.444, -0.158,
            -0.989, -0.005, 0.145,
            -0.989, -0.005, 0.145,
            -0.989, -0.005, 0.145,
            -0.998, 0.000, 0.059,
            -0.998, 0.000, 0.059,
            -0.998, 0.000, 0.059,
            -0.886, 0.389, -0.251,
            -0.886, 0.389, -0.251,
            -0.886, 0.389, -0.251,
            -0.720, 0.502, -0.479,
            -0.720, 0.502, -0.479,
            -0.720, 0.502, -0.479,
            -0.753, 0.455, -0.475,
            -0.753, 0.455, -0.475,
            -0.753, 0.455, -0.475,
            -0.672, 0.222, -0.707,
            -0.672, 0.222, -0.707,
            -0.672, 0.222, -0.707,
            -0.220, 0.093, -0.971,
            -0.220, 0.093, -0.971,
            -0.220, 0.093, -0.971,
            -0.636, 0.002, -0.772,
            -0.636, 0.002, -0.772,
            -0.636, 0.002, -0.772,
            -0.698, -0.269, -0.663,
            -0.698, -0.269, -0.663,
            -0.698, -0.269, -0.663,
            -0.587, -0.240, -0.773,
            -0.587, -0.240, -0.773,
            -0.587, -0.240, -0.773,
            -0.640, -0.643, -0.421,
            -0.640, -0.643, -0.421,
            -0.640, -0.643, -0.421,
            -0.618, -0.666, -0.418,
            -0.618, -0.666, -0.418,
            -0.618, -0.666, -0.418,
            -0.869, -0.483, -0.109,
            -0.869, -0.483, -0.109,
            -0.869, -0.483, -0.109,
            -0.728, -0.646, 0.230,
            -0.728, -0.646, 0.230,
            -0.728, -0.646, 0.230,
            -0.908, -0.000, -0.419,
            -0.908, -0.000, -0.419,
               -0.908, -0.000, -0.419
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.089, 0.585,
               0.287, 0.843,
               0.280, 0.949,
               0.287, 0.843,
               0.722, 0.845,
               0.280, 0.949,
               0.722, 0.845,
               0.741, 0.948,
               0.280, 0.949,
               0.089, 0.585,
               0.130, 0.540,
               0.287, 0.843,
               0.089, 0.585,
               0.152, 0.255,
               0.130, 0.540,
               0.089, 0.585,
               0.089, 0.174,
               0.152, 0.255,
               0.089, 0.174,
               0.242, 0.158,
               0.152, 0.255,
               0.089, 0.174,
               0.189, 0.031,
               0.242, 0.158,
               0.189, 0.031,
               0.757, 0.156,
               0.242, 0.158,
               0.189, 0.031,
               0.919, 0.172,
               0.757, 0.156,
               0.919, 0.172,
               0.858, 0.252,
               0.757, 0.156,
               0.919, 0.172,
               0.918, 0.599,
               0.858, 0.252,
               0.918, 0.599,
               0.874, 0.552,
               0.858, 0.252,
               0.918, 0.599,
               0.722, 0.845,
               0.874, 0.552,
               0.918, 0.599,
               0.741, 0.948,
               0.722, 0.845,
               0.189, 0.031,
               0.805, 0.030,
               0.919, 0.172,
               0.918, 0.615,
               0.719, 0.840,
               0.741, 0.901,
               0.719, 0.840,
               0.271, 0.851,
               0.741, 0.901,
               0.271, 0.851,
               0.280, 0.902,
               0.741, 0.901,
               0.918, 0.615,
               0.864, 0.548,
               0.719, 0.840,
               0.918, 0.615,
               0.846, 0.258,
               0.864, 0.548,
               0.918, 0.615,
               0.919, 0.172,
               0.846, 0.258,
               0.919, 0.172,
               0.750, 0.164,
               0.846, 0.258,
               0.919, 0.172,
               0.189, 0.031,
               0.750, 0.164,
               0.189, 0.031,
               0.236, 0.158,
               0.750, 0.164,
               0.189, 0.031,
               0.089, 0.174,
               0.236, 0.158,
               0.089, 0.174,
               0.137, 0.253,
               0.236, 0.158,
               0.089, 0.174,
               0.089, 0.601,
               0.137, 0.253,
               0.089, 0.601,
               0.122, 0.542,
               0.137, 0.253,
               0.089, 0.601,
               0.271, 0.851,
               0.122, 0.542,
               0.089, 0.601,
               0.280, 0.902,
               0.271, 0.851,
               0.919, 0.172,
               0.805, 0.030,
               0.189, 0.031
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_WINDFRAM.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
