function create_geometry_11(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -3.846, -6.793, 5.872,
            -3.984, -6.009, 5.872,
            -3.885, -5.947, 5.648,
            -3.846, -6.793, 5.872,
            -3.885, -5.947, 5.648,
            -3.757, -6.672, 5.648,
            3.900, -5.947, 5.648,
            3.999, -6.009, 5.872,
            3.861, -6.793, 5.872,
            3.900, -5.947, 5.648,
            3.861, -6.793, 5.872,
            3.772, -6.672, 5.648,
            -4.009, -5.796, 5.873,
            -4.057, -4.936, 5.873,
            -3.955, -4.936, 5.651,
            -4.009, -5.796, 5.873,
            -3.955, -4.936, 5.651,
            -3.911, -5.734, 5.651,
            3.971, -4.936, 5.651,
            4.073, -4.936, 5.873,
            4.024, -5.796, 5.873,
            3.971, -4.936, 5.651,
            4.024, -5.796, 5.873,
            3.926, -5.734, 5.651,
            -1.371, 34.179, 7.559,
            -1.371, 34.773, 7.559,
            -1.371, 34.773, 7.213,
            -1.371, 34.179, 7.559,
            -1.371, 34.773, 7.213,
            -1.371, 34.179, 7.213,
            1.460, 34.773, 7.213,
            1.460, 34.773, 7.559,
            1.460, 34.179, 7.559,
            1.460, 34.773, 7.213,
            1.460, 34.179, 7.559,
            1.460, 34.179, 7.213,
            -1.031, 29.004, 7.618,
            -1.031, 29.780, 7.618,
            -1.031, 29.780, 7.190,
            -1.031, 29.004, 7.618,
            -1.031, 29.780, 7.190,
            -1.031, 29.004, 7.190,
            1.066, 29.780, 7.190,
            1.066, 29.780, 7.618,
            1.066, 29.004, 7.618,
            1.066, 29.780, 7.190,
            1.066, 29.004, 7.618,
            1.066, 29.004, 7.190,
            -4.299, 39.037, 8.069,
            -3.014, 39.037, 8.069,
            -3.014, 39.037, 8.519,
            -4.299, 39.037, 8.069,
            -3.014, 39.037, 8.519,
            -4.299, 39.037, 8.519,
            -6.665, 39.037, 7.990,
            -5.380, 39.037, 7.990,
            -5.380, 39.037, 8.441,
            -6.665, 39.037, 7.990,
            -5.380, 39.037, 8.441,
            -6.665, 39.037, 8.441,
            -5.246, 38.801, 6.649,
            -3.960, 38.801, 6.649,
            -3.960, 38.801, 7.100,
            -5.246, 38.801, 6.649,
            -3.960, 38.801, 7.100,
            -5.246, 38.801, 7.100,
            -7.611, 38.801, 6.649,
            -6.326, 38.801, 6.649,
            -6.326, 38.801, 7.100,
            -7.611, 38.801, 6.649,
            -6.326, 38.801, 7.100,
            -7.611, 38.801, 7.100,
            -6.034, 38.801, 5.624,
            -4.749, 38.801, 5.624,
            -4.749, 38.801, 6.075,
            -6.034, 38.801, 5.624,
            -4.749, 38.801, 6.075,
            -6.034, 38.801, 6.075,
            -4.694, 38.801, 4.757,
            -3.408, 38.801, 4.757,
            -3.408, 38.801, 5.207,
            -4.694, 38.801, 4.757,
            -3.408, 38.801, 5.207,
            -4.694, 38.801, 5.207,
            -6.586, 38.801, 4.757,
            -5.301, 38.801, 4.757,
            -5.301, 38.801, 5.207,
            -6.586, 38.801, 4.757,
            -5.301, 38.801, 5.207,
            -6.586, 38.801, 5.207,
            -3.293, 38.955, 3.163,
            -1.953, 38.955, 3.163,
            -1.953, 38.955, 3.794,
            -3.293, 38.955, 3.163,
            -1.953, 38.955, 3.794,
            -3.293, 38.955, 3.794,
            -5.107, 38.955, 3.163,
            -3.767, 38.955, 3.163,
            -3.767, 38.955, 3.794,
            -5.107, 38.955, 3.163,
            -3.767, 38.955, 3.794,
            -5.107, 38.955, 3.794,
            -2.347, 38.955, 1.823,
            -1.006, 38.955, 1.823,
            -1.006, 38.955, 2.454,
            -2.347, 38.955, 1.823,
            -1.006, 38.955, 2.454,
            -2.347, 38.955, 2.454,
            -1.795, 38.955, 0.403,
            -0.454, 38.955, 0.403,
            -0.454, 38.955, 1.034,
            -1.795, 38.955, 0.403,
            -0.454, 38.955, 1.034,
            -1.795, 38.955, 1.034,
            -3.014, 39.037, 8.519,
            -3.014, 39.037, 8.069,
            -4.299, 39.037, 8.069,
            -3.014, 39.037, 8.519,
            -4.299, 39.037, 8.069,
            -4.299, 39.037, 8.519,
            2.894, 39.037, 8.519,
            2.894, 39.037, 8.069,
            4.179, 39.037, 8.069,
            2.894, 39.037, 8.519,
            4.179, 39.037, 8.069,
            4.179, 39.037, 8.519,
            5.260, 39.037, 8.441,
            5.260, 39.037, 7.990,
            6.545, 39.037, 7.990,
            5.260, 39.037, 8.441,
            6.545, 39.037, 7.990,
            6.545, 39.037, 8.441,
            3.840, 38.801, 7.100,
            3.840, 38.801, 6.649,
            5.125, 38.801, 6.649,
            3.840, 38.801, 7.100,
            5.125, 38.801, 6.649,
            5.125, 38.801, 7.100,
            6.206, 38.801, 7.100,
            6.206, 38.801, 6.649,
            7.491, 38.801, 6.649,
            6.206, 38.801, 7.100,
            7.491, 38.801, 6.649,
            7.491, 38.801, 7.100,
            4.629, 38.801, 6.075,
            4.629, 38.801, 5.624,
            5.914, 38.801, 5.624,
            4.629, 38.801, 6.075,
            5.914, 38.801, 5.624,
            5.914, 38.801, 6.075,
            3.288, 38.801, 5.207,
            3.288, 38.801, 4.757,
            4.573, 38.801, 4.757,
            3.288, 38.801, 5.207,
            4.573, 38.801, 4.757,
            4.573, 38.801, 5.207,
            5.181, 38.801, 5.207,
            5.181, 38.801, 4.757,
            6.466, 38.801, 4.757,
            5.181, 38.801, 5.207,
            6.466, 38.801, 4.757,
            6.466, 38.801, 5.207,
            1.833, 38.955, 3.794,
            1.833, 38.955, 3.163,
            3.173, 38.955, 3.163,
            1.833, 38.955, 3.794,
            3.173, 38.955, 3.163,
            3.173, 38.955, 3.794,
            3.646, 38.955, 3.794,
            3.646, 38.955, 3.163,
            4.987, 38.955, 3.163,
            3.646, 38.955, 3.794,
            4.987, 38.955, 3.163,
            4.987, 38.955, 3.794,
            0.886, 38.955, 2.454,
            0.886, 38.955, 1.823,
            2.227, 38.955, 1.823,
            0.886, 38.955, 2.454,
            2.227, 38.955, 1.823,
            2.227, 38.955, 2.454,
            0.334, 38.955, 1.034,
            0.334, 38.955, 0.403,
            1.675, 38.955, 0.403,
            0.334, 38.955, 1.034,
            1.675, 38.955, 0.403,
            1.675, 38.955, 1.034,
            4.179, 39.037, 8.069,
            2.894, 39.037, 8.069,
            2.894, 39.037, 8.519,
            4.179, 39.037, 8.069,
            2.894, 39.037, 8.519,
            4.179, 39.037, 8.519,
            2.005, 36.985, 3.051,
            1.953, 36.971, 3.163,
            1.961, 36.905, 3.163,
            1.833, 36.905, 3.428,
            1.833, 36.939, 3.419,
            1.800, 36.930, 3.488,
            1.833, 36.905, 3.428,
            1.800, 36.930, 3.488,
            1.863, 36.453, 3.488,
            1.961, 36.905, 3.163,
            1.833, 36.905, 3.428,
            1.863, 36.453, 3.488,
            2.005, 36.985, 3.051,
            1.961, 36.905, 3.163,
            1.863, 36.453, 3.488,
            2.005, 36.985, 3.051,
            1.863, 36.453, 3.488,
            2.076, 36.453, 3.051,
            -5.439, 40.980, 12.357,
            -5.439, 40.984, 12.279,
            -4.864, 40.984, 12.279,
            -5.439, 40.980, 12.357,
            -4.864, 40.984, 12.279,
            -4.864, 40.980, 12.357,
            -5.439, 40.984, 12.279,
            -5.439, 40.980, 12.201,
            -4.864, 40.980, 12.201,
            -5.439, 40.984, 12.279,
            -4.864, 40.980, 12.201,
            -4.864, 40.984, 12.279,
            -5.439, 40.980, 12.201,
            -5.439, 40.975, 12.128,
            -4.864, 40.975, 12.128,
            -5.439, 40.980, 12.201,
            -4.864, 40.975, 12.128,
            -4.864, 40.980, 12.201,
            -0.896, 34.040, 9.241,
            -0.800, 34.068, 9.483,
            -0.829, 34.305, 9.483,
            -0.896, 34.040, 9.241,
            -0.829, 34.305, 9.483,
            -0.929, 34.305, 9.241,
            0.820, 34.305, 9.241,
            0.720, 34.305, 9.483,
            0.691, 34.068, 9.483,
            0.820, 34.305, 9.241,
            0.691, 34.068, 9.483,
            0.787, 34.040, 9.241,
            -0.929, 39.479, 10.546,
            -0.770, 39.647, 10.840,
            -0.929, 39.867, 10.840,
            -0.929, 39.479, 10.546,
            -0.929, 39.867, 10.840,
            -1.125, 39.747, 10.546,
            1.005, 39.747, 10.546,
            0.809, 39.867, 10.840,
            0.650, 39.647, 10.840,
            1.005, 39.747, 10.546,
            0.650, 39.647, 10.840,
            0.809, 39.479, 10.546,
            -4.230, 37.100, 5.487,
            -4.329, 37.321, 5.487,
            -4.363, 37.312, 5.263,
            -4.230, 37.100, 5.487,
            -4.363, 37.312, 5.263,
            -4.260, 37.084, 5.263,
            -4.329, 37.321, 5.487,
            -4.363, 37.557, 5.487,
            -4.397, 37.557, 5.263,
            -4.329, 37.321, 5.487,
            -4.397, 37.557, 5.263,
            -4.363, 37.312, 5.263,
            4.242, 37.312, 5.263,
            4.209, 37.321, 5.487,
            4.110, 37.100, 5.487,
            4.242, 37.312, 5.263,
            4.110, 37.100, 5.487,
            4.140, 37.084, 5.263,
            4.277, 37.557, 5.263,
            4.242, 37.557, 5.487,
            4.209, 37.321, 5.487,
            4.277, 37.557, 5.263,
            4.209, 37.321, 5.487,
            4.242, 37.312, 5.263,
            1.473, 37.908, 3.051,
            1.323, 37.757, 3.488,
            1.616, 37.375, 3.488,
            1.473, 37.908, 3.051,
            1.616, 37.375, 3.488,
            1.800, 37.482, 3.051,
            -1.762, 37.482, 3.051,
            -1.578, 37.375, 3.488,
            -1.285, 37.757, 3.488,
            -1.762, 37.482, 3.051,
            -1.285, 37.757, 3.488,
            -1.436, 37.908, 3.051,
            -2.038, 36.453, 3.051,
            -1.825, 36.453, 3.488,
            -1.762, 36.930, 3.488,
            -2.038, 36.453, 3.051,
            -1.762, 36.930, 3.488,
            -1.968, 36.985, 3.051,
            1.473, 36.843, 1.299,
            1.800, 36.930, 1.674,
            1.863, 36.453, 1.674,
            1.473, 36.843, 1.299,
            1.863, 36.453, 1.674,
            1.524, 36.453, 1.299,
            -1.487, 36.453, 1.299,
            -1.825, 36.453, 1.674,
            -1.762, 36.930, 1.674,
            -1.487, 36.453, 1.299,
            -1.762, 36.930, 1.674,
            -1.436, 36.843, 1.299,
            1.473, 34.999, 2.112,
            1.800, 35.425, 2.112,
            1.827, 35.409, 2.314,
            1.473, 34.999, 2.112,
            1.827, 35.409, 2.314,
            1.495, 34.977, 2.314,
            -1.762, 35.425, 2.112,
            -1.436, 34.999, 2.112,
            -1.458, 34.977, 2.314,
            -1.762, 35.425, 2.112,
            -1.458, 34.977, 2.314,
            -1.789, 35.409, 2.314,
            4.242, 37.557, 5.487,
            4.174, 37.557, 5.626,
            4.143, 37.337, 5.626,
            4.242, 37.557, 5.487,
            4.143, 37.337, 5.626,
            4.209, 37.321, 5.487,
            4.209, 37.321, 5.487,
            4.143, 37.337, 5.626,
            4.051, 37.132, 5.626,
            4.209, 37.321, 5.487,
            4.051, 37.132, 5.626,
            4.110, 37.100, 5.487,
            -4.329, 37.321, 5.487,
            -4.263, 37.337, 5.626,
            -4.295, 37.557, 5.626,
            -4.329, 37.321, 5.487,
            -4.295, 37.557, 5.626,
            -4.363, 37.557, 5.487,
            -4.230, 37.100, 5.487,
            -4.171, 37.132, 5.626,
            -4.263, 37.337, 5.626,
            -4.230, 37.100, 5.487,
            -4.263, 37.337, 5.626,
            -4.329, 37.321, 5.487,
            0.724, -25.116, -0.596,
            0.724, -25.520, -0.596,
            0.724, -25.520, -0.907,
            0.724, -25.116, -0.596,
            0.724, -25.520, -0.907,
            0.724, -25.116, -0.907,
            0.724, -23.382, -1.156,
            0.724, -23.681, -1.156,
            0.724, -23.681, -1.417,
            0.724, -23.382, -1.156,
            0.724, -23.681, -1.417,
            0.724, -23.382, -1.417,
            0.724, -23.902, -6.805,
            0.724, -24.306, -6.805,
            0.724, -24.306, -7.116,
            0.724, -23.902, -6.805,
            0.724, -24.306, -7.116,
            0.724, -23.902, -7.116,
            0.724, -23.740, -4.554,
            0.724, -24.144, -4.554,
            0.724, -24.144, -4.865,
            0.724, -23.740, -4.554,
            0.724, -24.144, -4.865,
            0.724, -23.740, -4.865,
            0.724, -23.780, -2.925,
            0.724, -24.185, -2.925,
            0.724, -24.185, -3.235,
            0.724, -23.780, -2.925,
            0.724, -24.185, -3.235,
            0.724, -23.780, -3.235,
            0.724, -22.930, -3.468,
            0.724, -23.335, -3.468,
            0.724, -23.335, -3.778,
            0.724, -22.930, -3.468,
            0.724, -23.335, -3.778,
            0.724, -22.930, -3.778,
            0.724, -22.242, -3.468,
            0.724, -22.647, -3.468,
            0.724, -22.647, -3.778,
            0.724, -22.242, -3.468,
            0.724, -22.647, -3.778,
            0.724, -22.242, -3.778,
            0.724, -25.520, -0.907,
            0.724, -25.520, -0.596,
            0.724, -25.116, -0.596,
            0.724, -25.520, -0.907,
            0.724, -25.116, -0.596,
            0.724, -25.116, -0.907,
            -0.553, -25.520, -0.907,
            -0.553, -25.520, -0.596,
            -0.553, -25.116, -0.596,
            -0.553, -25.520, -0.907,
            -0.553, -25.116, -0.596,
            -0.553, -25.116, -0.907,
            -0.553, -23.681, -1.417,
            -0.553, -23.681, -1.156,
            -0.553, -23.382, -1.156,
            -0.553, -23.681, -1.417,
            -0.553, -23.382, -1.156,
            -0.553, -23.382, -1.417,
            -0.553, -24.306, -7.116,
            -0.553, -24.306, -6.805,
            -0.553, -23.902, -6.805,
            -0.553, -24.306, -7.116,
            -0.553, -23.902, -6.805,
            -0.553, -23.902, -7.116,
            -0.553, -24.144, -4.865,
            -0.553, -24.144, -4.554,
            -0.553, -23.740, -4.554,
            -0.553, -24.144, -4.865,
            -0.553, -23.740, -4.554,
            -0.553, -23.740, -4.865,
            -0.553, -24.185, -3.235,
            -0.553, -24.185, -2.925,
            -0.553, -23.780, -2.925,
            -0.553, -24.185, -3.235,
            -0.553, -23.780, -2.925,
            -0.553, -23.780, -3.235,
            -0.553, -23.335, -3.778,
            -0.553, -23.335, -3.468,
            -0.553, -22.930, -3.468,
            -0.553, -23.335, -3.778,
            -0.553, -22.930, -3.468,
            -0.553, -22.930, -3.778,
            -0.553, -22.647, -3.778,
            -0.553, -22.647, -3.468,
            -0.553, -22.242, -3.468,
            -0.553, -22.647, -3.778,
            -0.553, -22.242, -3.468,
            -0.553, -22.242, -3.778,
            -0.553, -25.116, -0.596,
            -0.553, -25.520, -0.596,
            -0.553, -25.520, -0.907,
            -0.553, -25.116, -0.596,
            -0.553, -25.520, -0.907,
            -0.553, -25.116, -0.907,
            -0.703, -31.924, 0.330,
            -0.703, -31.143, 0.330,
            -0.703, -31.143, 0.027,
            -0.703, -31.924, 0.330,
            -0.703, -31.143, 0.027,
            -0.703, -31.924, 0.027,
            -0.653, -31.299, -10.194,
            -0.653, -30.518, -10.194,
            -0.653, -30.518, -10.496,
            -0.653, -31.299, -10.194,
            -0.653, -30.518, -10.496,
            -0.653, -31.299, -10.496,
            -0.653, -35.359, -10.572,
            -0.653, -34.578, -10.572,
            -0.653, -34.578, -10.875,
            -0.653, -35.359, -10.572,
            -0.653, -34.578, -10.875,
            -0.653, -35.359, -10.875,
            -0.703, -36.061, -0.049,
            -0.703, -35.281, -0.049,
            -0.703, -35.281, -0.351,
            -0.703, -36.061, -0.049,
            -0.703, -35.281, -0.351,
            -0.703, -36.061, -0.351,
            -0.703, -34.266, -5.727,
            -0.703, -33.485, -5.727,
            -0.703, -33.485, -6.030,
            -0.703, -34.266, -5.727,
            -0.703, -33.485, -6.030,
            -0.703, -34.266, -6.030,
            -0.703, -34.578, -3.531,
            -0.703, -33.797, -3.531,
            -0.703, -33.797, -3.834,
            -0.703, -34.578, -3.531,
            -0.703, -33.797, -3.834,
            -0.703, -34.578, -3.834,
            -0.703, -34.500, -1.941,
            -0.703, -33.719, -1.941,
            -0.703, -33.719, -2.244,
            -0.703, -34.500, -1.941,
            -0.703, -33.719, -2.244,
            -0.703, -34.500, -2.244,
            -0.703, -36.140, -2.471,
            -0.703, -35.359, -2.471,
            -0.703, -35.359, -2.774,
            -0.703, -36.140, -2.471,
            -0.703, -35.359, -2.774,
            -0.703, -36.140, -2.774,
            -0.703, -37.467, -2.471,
            -0.703, -36.686, -2.471,
            -0.703, -36.686, -2.774,
            -0.703, -37.467, -2.471,
            -0.703, -36.686, -2.774,
            -0.703, -37.467, -2.774,
            -0.703, -31.143, 0.027,
            -0.703, -31.143, 0.330,
            -0.703, -31.924, 0.330,
            -0.703, -31.143, 0.027,
            -0.703, -31.924, 0.330,
            -0.703, -31.924, 0.027,
            0.874, -31.143, 0.027,
            0.874, -31.143, 0.330,
            0.874, -31.924, 0.330,
            0.874, -31.143, 0.027,
            0.874, -31.924, 0.330,
            0.874, -31.924, 0.027,
            0.813, -30.518, -10.496,
            0.813, -30.518, -10.194,
            0.813, -31.299, -10.194,
            0.813, -30.518, -10.496,
            0.813, -31.299, -10.194,
            0.813, -31.299, -10.496,
            0.813, -34.578, -10.875,
            0.813, -34.578, -10.572,
            0.813, -35.359, -10.572,
            0.813, -34.578, -10.875,
            0.813, -35.359, -10.572,
            0.813, -35.359, -10.875,
            0.874, -35.281, -0.351,
            0.874, -35.281, -0.049,
            0.874, -36.061, -0.049,
            0.874, -35.281, -0.351,
            0.874, -36.061, -0.049,
            0.874, -36.061, -0.351,
            0.874, -33.485, -6.030,
            0.874, -33.485, -5.727,
            0.874, -34.266, -5.727,
            0.874, -33.485, -6.030,
            0.874, -34.266, -5.727,
            0.874, -34.266, -6.030,
            0.874, -33.797, -3.834,
            0.874, -33.797, -3.531,
            0.874, -34.578, -3.531,
            0.874, -33.797, -3.834,
            0.874, -34.578, -3.531,
            0.874, -34.578, -3.834,
            0.874, -33.719, -2.244,
            0.874, -33.719, -1.941,
            0.874, -34.500, -1.941,
            0.874, -33.719, -2.244,
            0.874, -34.500, -1.941,
            0.874, -34.500, -2.244,
            0.874, -35.359, -2.774,
            0.874, -35.359, -2.471,
            0.874, -36.140, -2.471,
            0.874, -35.359, -2.774,
            0.874, -36.140, -2.471,
            0.874, -36.140, -2.774,
            0.874, -36.686, -2.774,
            0.874, -36.686, -2.471,
            0.874, -37.467, -2.471,
            0.874, -36.686, -2.774,
            0.874, -37.467, -2.471,
            0.874, -37.467, -2.774,
            0.874, -31.924, 0.330,
            0.874, -31.143, 0.330,
            0.874, -31.143, 0.027,
            0.874, -31.924, 0.330,
            0.874, -31.143, 0.027,
               0.874, -31.924, 0.027
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.886, -0.156, -0.437,
            -0.886, -0.156, -0.437,
            -0.886, -0.156, -0.437,
            -0.886, -0.156, -0.437,
            -0.886, -0.156, -0.437,
            -0.886, -0.156, -0.437,
            0.886, -0.156, -0.437,
            0.886, -0.156, -0.437,
            0.886, -0.156, -0.437,
            0.886, -0.156, -0.437,
            0.886, -0.156, -0.437,
            0.886, -0.156, -0.437,
            -0.907, -0.051, -0.417,
            -0.907, -0.051, -0.417,
            -0.907, -0.051, -0.417,
            -0.907, -0.051, -0.417,
            -0.907, -0.051, -0.417,
            -0.907, -0.051, -0.417,
            0.907, -0.051, -0.417,
            0.907, -0.051, -0.417,
            0.907, -0.051, -0.417,
            0.907, -0.051, -0.417,
            0.907, -0.051, -0.417,
            0.907, -0.051, -0.417,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.893, 0.118, 0.434,
            0.000, -0.999, -0.048,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -0.999, -0.048,
            0.000, -1.000, 0.000,
            0.000, -0.999, -0.048,
            0.000, -1.000, 0.000,
            0.000, -0.998, 0.055,
            0.000, -0.998, 0.055,
            0.000, -1.000, 0.000,
            0.000, -0.998, 0.055,
            0.000, -1.000, 0.000,
            0.000, -0.998, 0.055,
            0.000, -0.998, 0.063,
            0.000, -0.998, 0.063,
            0.000, -0.998, 0.055,
            0.000, -0.998, 0.063,
            0.000, -0.998, 0.055,
            -0.918, -0.114, 0.380,
            -0.918, -0.114, 0.380,
            -0.918, -0.114, 0.380,
            -0.918, -0.114, 0.380,
            -0.918, -0.114, 0.380,
            -0.918, -0.114, 0.380,
            0.918, -0.114, 0.380,
            0.918, -0.114, 0.380,
            0.918, -0.114, 0.380,
            0.918, -0.114, 0.380,
            0.918, -0.114, 0.380,
            0.918, -0.114, 0.380,
            -0.639, -0.465, 0.613,
            -0.639, -0.465, 0.613,
            -0.639, -0.465, 0.613,
            -0.639, -0.465, 0.613,
            -0.639, -0.465, 0.613,
            -0.639, -0.465, 0.613,
            0.639, -0.465, 0.613,
            0.639, -0.465, 0.613,
            0.639, -0.465, 0.613,
            0.639, -0.465, 0.613,
            0.639, -0.465, 0.613,
            0.639, -0.465, 0.613,
            -0.872, -0.391, 0.293,
            -0.918, -0.265, 0.295,
            -0.949, -0.274, 0.153,
            -0.872, -0.391, 0.293,
            -0.949, -0.274, 0.153,
            -0.902, -0.405, 0.151,
            -0.918, -0.265, 0.295,
            -0.946, -0.135, 0.294,
            -0.978, -0.140, 0.152,
            -0.918, -0.265, 0.295,
            -0.978, -0.140, 0.152,
            -0.949, -0.274, 0.153,
            0.949, -0.274, 0.153,
            0.918, -0.265, 0.295,
            0.872, -0.391, 0.293,
            0.949, -0.274, 0.153,
            0.872, -0.391, 0.293,
            0.902, -0.405, 0.151,
            0.978, -0.140, 0.152,
            0.946, -0.135, 0.294,
            0.918, -0.265, 0.295,
            0.978, -0.140, 0.152,
            0.918, -0.265, 0.295,
            0.949, -0.274, 0.153,
            0.715, 0.548, 0.434,
            0.715, 0.548, 0.434,
            0.715, 0.548, 0.434,
            0.715, 0.548, 0.434,
            0.715, 0.548, 0.434,
            0.715, 0.548, 0.434,
            -0.715, 0.548, 0.434,
            -0.715, 0.548, 0.434,
            -0.715, 0.548, 0.434,
            -0.715, 0.548, 0.434,
            -0.715, 0.548, 0.434,
            -0.715, 0.548, 0.434,
            -0.893, 0.118, 0.434,
            -0.893, 0.118, 0.434,
            -0.893, 0.118, 0.434,
            -0.893, 0.118, 0.434,
            -0.893, 0.118, 0.434,
            -0.893, 0.118, 0.434,
            0.739, 0.097, -0.666,
            0.739, 0.097, -0.666,
            0.739, 0.097, -0.666,
            0.739, 0.097, -0.666,
            0.739, 0.097, -0.666,
            0.739, 0.097, -0.666,
            -0.739, 0.097, -0.666,
            -0.739, 0.097, -0.666,
            -0.739, 0.097, -0.666,
            -0.739, 0.097, -0.666,
            -0.739, 0.097, -0.666,
            -0.739, 0.097, -0.666,
            0.784, -0.602, -0.151,
            0.784, -0.602, -0.151,
            0.784, -0.602, -0.151,
            0.784, -0.602, -0.151,
            0.784, -0.602, -0.151,
            0.784, -0.602, -0.151,
            -0.784, -0.602, -0.151,
            -0.784, -0.602, -0.151,
            -0.784, -0.602, -0.151,
            -0.784, -0.602, -0.151,
            -0.784, -0.602, -0.151,
            -0.784, -0.602, -0.151,
            0.946, -0.135, 0.294,
            0.891, -0.127, 0.436,
            0.863, -0.251, 0.438,
            0.946, -0.135, 0.294,
            0.863, -0.251, 0.438,
            0.918, -0.265, 0.295,
            0.918, -0.265, 0.295,
            0.863, -0.251, 0.438,
            0.823, -0.369, 0.432,
            0.918, -0.265, 0.295,
            0.823, -0.369, 0.432,
            0.872, -0.391, 0.293,
            -0.918, -0.265, 0.295,
            -0.863, -0.251, 0.438,
            -0.891, -0.127, 0.436,
            -0.918, -0.265, 0.295,
            -0.891, -0.127, 0.436,
            -0.946, -0.135, 0.294,
            -0.872, -0.391, 0.293,
            -0.823, -0.369, 0.432,
            -0.863, -0.251, 0.438,
            -0.872, -0.391, 0.293,
            -0.863, -0.251, 0.438,
            -0.918, -0.265, 0.295,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x0172BC,
            shininess: 39.397,
            ambient: 0x000000,
            side: THREE.FrontSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
