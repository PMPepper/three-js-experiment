function create_geometry_425(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -335.546, 97.109,
            -6.267, -339.054, 103.013,
            -0.000, -338.511, 103.022,
            -0.000, -335.546, 97.109,
            -7.495, -336.084, 97.043,
            -6.267, -339.054, 103.013,
            -7.495, -336.084, 97.043,
            -8.069, -360.043, 103.034,
            -6.267, -339.054, 103.013,
            -7.495, -336.084, 97.043,
            -9.485, -358.914, 94.315,
            -8.069, -360.043, 103.034,
            -9.485, -358.914, 94.315,
            -10.374, -366.466, 102.993,
            -8.069, -360.043, 103.034,
            -9.485, -358.914, 94.315,
            -12.523, -364.646, 94.030,
            -10.374, -366.466, 102.993,
            -12.523, -364.646, 94.030,
            -12.705, -372.792, 103.702,
            -10.374, -366.466, 102.993,
            -12.523, -364.646, 94.030,
            -16.262, -372.935, 92.796,
            -12.705, -372.792, 103.702,
            -16.262, -372.935, 92.796,
            -14.171, -379.979, 103.576,
            -12.705, -372.792, 103.702,
            -16.262, -372.935, 92.796,
            -18.138, -380.070, 91.920,
            -14.171, -379.979, 103.576,
            -18.138, -380.070, 91.920,
            -14.670, -383.776, 103.510,
            -14.171, -379.979, 103.576,
            -18.138, -380.070, 91.920,
            -18.778, -383.838, 91.457,
            -14.670, -383.776, 103.510,
            -18.778, -383.838, 91.457,
            -14.171, -387.572, 103.444,
            -14.670, -383.776, 103.510,
            -18.778, -383.838, 91.457,
            -18.138, -387.607, 90.994,
            -14.171, -387.572, 103.444,
            -18.138, -387.607, 90.994,
            -12.705, -391.110, 103.382,
            -14.171, -387.572, 103.444,
            -18.138, -387.607, 90.994,
            -16.262, -391.119, 90.563,
            -12.705, -391.110, 103.382,
            -16.262, -391.119, 90.563,
            -11.559, -394.121, 103.329,
            -12.705, -391.110, 103.382,
            -16.262, -391.119, 90.563,
            -12.137, -396.182, 89.941,
            -11.559, -394.121, 103.329,
            -12.137, -396.182, 89.941,
            -7.335, -398.257, 103.257,
            -11.559, -394.121, 103.329,
            -12.137, -396.182, 89.941,
            -7.335, -400.776, 89.377,
            -7.335, -398.257, 103.257,
            -7.335, -400.776, 89.377,
            -3.797, -402.112, 103.190,
            -7.335, -398.257, 103.257,
            -7.335, -400.776, 89.377,
            -3.797, -405.999, 88.736,
            -3.797, -402.112, 103.190,
            -3.797, -405.999, 88.736,
            -0.000, -402.612, 103.181,
            -3.797, -402.112, 103.190,
            -3.797, -405.999, 88.736,
            -0.000, -406.495, 88.675,
            -0.000, -402.612, 103.181,
            -0.000, -406.495, 88.675,
            3.797, -402.112, 103.190,
            -0.000, -402.612, 103.181,
            -0.000, -406.495, 88.675,
            3.797, -405.999, 88.736,
            3.797, -402.112, 103.190,
            3.797, -405.999, 88.736,
            7.335, -398.257, 103.257,
            3.797, -402.112, 103.190,
            3.797, -405.999, 88.736,
            7.335, -400.776, 89.377,
            7.335, -398.257, 103.257,
            7.335, -400.776, 89.377,
            11.559, -394.121, 103.329,
            7.335, -398.257, 103.257,
            7.335, -400.776, 89.377,
            12.137, -396.182, 89.941,
            11.559, -394.121, 103.329,
            12.137, -396.182, 89.941,
            12.705, -391.110, 103.382,
            11.559, -394.121, 103.329,
            12.137, -396.182, 89.941,
            16.262, -391.119, 90.563,
            12.705, -391.110, 103.382,
            16.262, -391.119, 90.563,
            14.171, -387.572, 103.444,
            12.705, -391.110, 103.382,
            16.262, -391.119, 90.563,
            18.138, -387.607, 90.994,
            14.171, -387.572, 103.444,
            18.138, -387.607, 90.994,
            14.670, -383.776, 103.510,
            14.171, -387.572, 103.444,
            18.138, -387.607, 90.994,
            18.778, -383.838, 91.457,
            14.670, -383.776, 103.510,
            18.778, -383.838, 91.457,
            14.171, -379.979, 103.576,
            14.670, -383.776, 103.510,
            18.778, -383.838, 91.457,
            18.138, -380.070, 91.920,
            14.171, -379.979, 103.576,
            18.138, -380.070, 91.920,
            12.705, -372.792, 103.702,
            14.171, -379.979, 103.576,
            18.138, -380.070, 91.920,
            16.262, -372.935, 92.796,
            12.705, -372.792, 103.702,
            16.262, -372.935, 92.796,
            10.374, -366.466, 102.993,
            12.705, -372.792, 103.702,
            16.262, -372.935, 92.796,
            12.843, -364.839, 94.030,
            10.374, -366.466, 102.993,
            12.843, -364.839, 94.030,
            8.069, -360.043, 103.034,
            10.374, -366.466, 102.993,
            12.843, -364.839, 94.030,
            9.623, -358.628, 94.315,
            8.069, -360.043, 103.034,
            9.623, -358.628, 94.315,
            6.267, -339.054, 103.013,
            8.069, -360.043, 103.034,
            9.623, -358.628, 94.315,
            7.495, -336.084, 97.043,
            6.267, -339.054, 103.013,
            7.495, -336.084, 97.043,
            -0.000, -338.511, 103.022,
            6.267, -339.054, 103.013,
            7.495, -336.084, 97.043,
            -0.000, -335.546, 97.109,
            -0.000, -338.511, 103.022,
            -0.000, -383.776, 103.510,
            -0.000, -338.511, 103.022,
            -6.267, -339.054, 103.013,
            -0.000, -383.776, 103.510,
            -6.267, -339.054, 103.013,
            -8.069, -360.043, 103.034,
            -0.000, -383.776, 103.510,
            -8.069, -360.043, 103.034,
            -10.374, -366.466, 102.993,
            -0.000, -383.776, 103.510,
            -10.374, -366.466, 102.993,
            -12.705, -372.792, 103.702,
            -0.000, -383.776, 103.510,
            -12.705, -372.792, 103.702,
            -14.171, -379.979, 103.576,
            -0.000, -383.776, 103.510,
            -14.171, -379.979, 103.576,
            -14.670, -383.776, 103.510,
            -0.000, -383.776, 103.510,
            -14.670, -383.776, 103.510,
            -14.171, -387.572, 103.444,
            -0.000, -383.776, 103.510,
            -14.171, -387.572, 103.444,
            -12.705, -391.110, 103.382,
            -0.000, -383.776, 103.510,
            -12.705, -391.110, 103.382,
            -11.559, -394.121, 103.329,
            -0.000, -383.776, 103.510,
            -11.559, -394.121, 103.329,
            -7.335, -398.257, 103.257,
            -0.000, -383.776, 103.510,
            -7.335, -398.257, 103.257,
            -3.797, -402.112, 103.190,
            -0.000, -383.776, 103.510,
            -3.797, -402.112, 103.190,
            -0.000, -402.612, 103.181,
            -0.000, -383.776, 103.510,
            -0.000, -402.612, 103.181,
            3.797, -402.112, 103.190,
            -0.000, -383.776, 103.510,
            3.797, -402.112, 103.190,
            7.335, -398.257, 103.257,
            -0.000, -383.776, 103.510,
            7.335, -398.257, 103.257,
            11.559, -394.121, 103.329,
            -0.000, -383.776, 103.510,
            11.559, -394.121, 103.329,
            12.705, -391.110, 103.382,
            -0.000, -383.776, 103.510,
            12.705, -391.110, 103.382,
            14.171, -387.572, 103.444,
            -0.000, -383.776, 103.510,
            14.171, -387.572, 103.444,
            14.670, -383.776, 103.510,
            -0.000, -383.776, 103.510,
            14.670, -383.776, 103.510,
            14.171, -379.979, 103.576,
            -0.000, -383.776, 103.510,
            14.171, -379.979, 103.576,
            12.705, -372.792, 103.702,
            -0.000, -383.776, 103.510,
            12.705, -372.792, 103.702,
            10.374, -366.466, 102.993,
            -0.000, -383.776, 103.510,
            10.374, -366.466, 102.993,
            8.069, -360.043, 103.034,
            -0.000, -383.776, 103.510,
            8.069, -360.043, 103.034,
            6.267, -339.054, 103.013,
            -0.000, -383.776, 103.510,
            6.267, -339.054, 103.013,
               -0.000, -338.511, 103.022
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.002, 0.893, 0.450,
            -0.700, 0.574, 0.426,
            -0.003, 0.893, 0.451,
            -0.002, 0.893, 0.450,
            -0.626, 0.645, 0.438,
            -0.700, 0.574, 0.426,
            -0.626, 0.645, 0.438,
            -0.960, 0.209, 0.189,
            -0.700, 0.574, 0.426,
            -0.626, 0.645, 0.438,
            -0.948, 0.235, 0.215,
            -0.960, 0.209, 0.189,
            -0.948, 0.235, 0.215,
            -0.893, 0.366, 0.263,
            -0.960, 0.209, 0.189,
            -0.948, 0.235, 0.215,
            -0.871, 0.398, 0.289,
            -0.893, 0.366, 0.263,
            -0.871, 0.398, 0.289,
            -0.915, 0.276, 0.295,
            -0.893, 0.366, 0.263,
            -0.871, 0.398, 0.289,
            -0.916, 0.267, 0.301,
            -0.915, 0.276, 0.295,
            -0.916, 0.267, 0.301,
            -0.937, 0.157, 0.313,
            -0.915, 0.276, 0.295,
            -0.916, 0.267, 0.301,
            -0.935, 0.158, 0.317,
            -0.937, 0.157, 0.313,
            -0.935, 0.158, 0.317,
            -0.947, -0.004, 0.322,
            -0.937, 0.157, 0.313,
            -0.935, 0.158, 0.317,
            -0.948, -0.044, 0.314,
            -0.947, -0.004, 0.322,
            -0.948, -0.044, 0.314,
            -0.917, -0.263, 0.301,
            -0.947, -0.004, 0.322,
            -0.948, -0.044, 0.314,
            -0.902, -0.333, 0.274,
            -0.917, -0.263, 0.301,
            -0.902, -0.333, 0.274,
            -0.892, -0.370, 0.262,
            -0.917, -0.263, 0.301,
            -0.902, -0.333, 0.274,
            -0.820, -0.538, 0.195,
            -0.892, -0.370, 0.262,
            -0.820, -0.538, 0.195,
            -0.801, -0.569, 0.185,
            -0.892, -0.370, 0.262,
            -0.820, -0.538, 0.195,
            -0.718, -0.684, 0.132,
            -0.801, -0.569, 0.185,
            -0.718, -0.684, 0.132,
            -0.707, -0.695, 0.130,
            -0.801, -0.569, 0.185,
            -0.718, -0.684, 0.132,
            -0.747, -0.650, 0.141,
            -0.707, -0.695, 0.130,
            -0.747, -0.650, 0.141,
            -0.493, -0.846, 0.202,
            -0.707, -0.695, 0.130,
            -0.747, -0.650, 0.141,
            -0.459, -0.858, 0.230,
            -0.493, -0.846, 0.202,
            -0.459, -0.858, 0.230,
            0.000, -0.966, 0.259,
            -0.493, -0.846, 0.202,
            -0.459, -0.858, 0.230,
            0.000, -0.966, 0.259,
            0.000, -0.966, 0.259,
            0.000, -0.966, 0.259,
            0.473, -0.851, 0.228,
            0.000, -0.966, 0.259,
            0.000, -0.966, 0.259,
            0.451, -0.866, 0.215,
            0.473, -0.851, 0.228,
            0.451, -0.866, 0.215,
            0.719, -0.680, 0.143,
            0.473, -0.851, 0.228,
            0.451, -0.866, 0.215,
            0.763, -0.636, 0.118,
            0.719, -0.680, 0.143,
            0.763, -0.636, 0.118,
            0.837, -0.534, 0.115,
            0.719, -0.680, 0.143,
            0.763, -0.636, 0.118,
            0.726, -0.668, 0.164,
            0.837, -0.534, 0.115,
            0.726, -0.668, 0.164,
            0.893, -0.410, 0.185,
            0.837, -0.534, 0.115,
            0.726, -0.668, 0.164,
            0.802, -0.547, 0.238,
            0.893, -0.410, 0.185,
            0.802, -0.547, 0.238,
            0.922, -0.269, 0.278,
            0.893, -0.410, 0.185,
            0.802, -0.547, 0.238,
            0.894, -0.337, 0.294,
            0.922, -0.269, 0.278,
            0.894, -0.337, 0.294,
            0.949, -0.010, 0.315,
            0.922, -0.269, 0.278,
            0.894, -0.337, 0.294,
            0.945, -0.051, 0.322,
            0.949, -0.010, 0.315,
            0.945, -0.051, 0.322,
            0.936, 0.153, 0.318,
            0.949, -0.010, 0.315,
            0.945, -0.051, 0.322,
            0.937, 0.155, 0.314,
            0.936, 0.153, 0.318,
            0.937, 0.155, 0.314,
            0.912, 0.280, 0.298,
            0.936, 0.153, 0.318,
            0.937, 0.155, 0.314,
            0.916, 0.265, 0.300,
            0.912, 0.280, 0.298,
            0.916, 0.265, 0.300,
            0.894, 0.335, 0.299,
            0.912, 0.280, 0.298,
            0.916, 0.265, 0.300,
            0.889, 0.360, 0.284,
            0.894, 0.335, 0.299,
            0.889, 0.360, 0.284,
            0.941, 0.240, 0.237,
            0.894, 0.335, 0.299,
            0.889, 0.360, 0.284,
            0.941, 0.262, 0.215,
            0.941, 0.240, 0.237,
            0.941, 0.262, 0.215,
            0.711, 0.565, 0.419,
            0.941, 0.240, 0.237,
            0.941, 0.262, 0.215,
            0.630, 0.638, 0.443,
            0.711, 0.565, 0.419,
            0.630, 0.638, 0.443,
            -0.003, 0.893, 0.451,
            0.711, 0.565, 0.419,
            0.630, 0.638, 0.443,
            -0.002, 0.893, 0.450,
            -0.003, 0.893, 0.451,
            0.000, -0.003, 1.000,
            0.000, 0.011, 1.000,
            -0.008, 0.010, 1.000,
            0.000, -0.003, 1.000,
            -0.008, 0.010, 1.000,
            -0.043, 0.005, 0.999,
            0.000, -0.003, 1.000,
            -0.043, 0.005, 0.999,
            -0.003, 0.028, 1.000,
            0.000, -0.003, 1.000,
            -0.003, 0.028, 1.000,
            0.054, 0.046, 0.997,
            0.000, -0.003, 1.000,
            0.054, 0.046, 0.997,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            -0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            -0.000, -0.017, 1.000,
            -0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            -0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.003, 1.000,
            0.000, -0.017, 1.000,
            -0.054, 0.046, 0.997,
            0.000, -0.003, 1.000,
            -0.054, 0.046, 0.997,
            0.003, 0.028, 1.000,
            0.000, -0.003, 1.000,
            0.003, 0.028, 1.000,
            0.043, 0.005, 0.999,
            0.000, -0.003, 1.000,
            0.043, 0.005, 0.999,
            0.008, 0.010, 1.000,
            0.000, -0.003, 1.000,
            0.008, 0.010, 1.000,
               0.000, 0.011, 1.000
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
