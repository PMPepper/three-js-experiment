function create_geometry_412(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            64.680, 110.505, 46.586,
            65.058, 233.828, 46.057,
            63.699, 233.682, 42.790,
            64.680, 110.505, 46.586,
            66.025, 110.778, 49.841,
            65.058, 233.828, 46.057,
            66.025, 110.778, 49.841,
            68.335, 233.943, 47.418,
            65.058, 233.828, 46.057,
            66.025, 110.778, 49.841,
            69.284, 110.951, 51.193,
            68.335, 233.943, 47.418,
            69.284, 110.951, 51.193,
            71.611, 233.962, 46.073,
            68.335, 233.943, 47.418,
            69.284, 110.951, 51.193,
            72.549, 110.921, 49.846,
            71.611, 233.962, 46.073,
            72.549, 110.921, 49.846,
            72.969, 233.872, 42.813,
            71.611, 233.962, 46.073,
            72.549, 110.921, 49.846,
            73.910, 110.707, 46.593,
            72.969, 233.872, 42.813,
            73.910, 110.707, 46.593,
            71.610, 233.727, 39.547,
            72.969, 233.872, 42.813,
            73.910, 110.707, 46.593,
            72.565, 110.433, 43.338,
            71.610, 233.727, 39.547,
            72.565, 110.433, 43.338,
            68.333, 233.611, 38.185,
            71.610, 233.727, 39.547,
            72.565, 110.433, 43.338,
            69.306, 110.261, 41.987,
            68.333, 233.611, 38.185,
            69.306, 110.261, 41.987,
            65.057, 233.592, 39.530,
            68.333, 233.611, 38.185,
            69.306, 110.261, 41.987,
            66.040, 110.290, 43.333,
            65.057, 233.592, 39.530,
            66.040, 110.290, 43.333,
            63.699, 233.682, 42.790,
            65.057, 233.592, 39.530,
            66.040, 110.290, 43.333,
            64.680, 110.505, 46.586,
            63.699, 233.682, 42.790,
            63.699, 233.682, 42.790,
            64.314, 237.153, 46.089,
            63.042, 236.490, 42.837,
            63.699, 233.682, 42.790,
            65.058, 233.828, 46.057,
            64.314, 237.153, 46.089,
            65.058, 233.828, 46.057,
            67.335, 238.728, 47.418,
            64.314, 237.153, 46.089,
            65.058, 233.828, 46.057,
            68.335, 233.943, 47.418,
            67.335, 238.728, 47.418,
            68.335, 233.943, 47.418,
            70.336, 240.293, 46.040,
            67.335, 238.728, 47.418,
            68.335, 233.943, 47.418,
            71.611, 233.962, 46.073,
            70.336, 240.293, 46.040,
            71.611, 233.962, 46.073,
            71.562, 240.933, 42.767,
            70.336, 240.293, 46.040,
            71.611, 233.962, 46.073,
            72.969, 233.872, 42.813,
            71.562, 240.933, 42.767,
            72.969, 233.872, 42.813,
            70.291, 240.270, 39.514,
            71.562, 240.933, 42.767,
            72.969, 233.872, 42.813,
            71.610, 233.727, 39.547,
            70.291, 240.270, 39.514,
            71.610, 233.727, 39.547,
            67.270, 238.695, 38.186,
            70.291, 240.270, 39.514,
            71.610, 233.727, 39.547,
            68.333, 233.611, 38.185,
            67.270, 238.695, 38.186,
            68.333, 233.611, 38.185,
            64.268, 237.129, 39.563,
            67.270, 238.695, 38.186,
            68.333, 233.611, 38.185,
            65.057, 233.592, 39.530,
            64.268, 237.129, 39.563,
            65.057, 233.592, 39.530,
            63.042, 236.490, 42.837,
            64.268, 237.129, 39.563,
            65.057, 233.592, 39.530,
            63.699, 233.682, 42.790,
            63.042, 236.490, 42.837,
            63.042, 236.490, 42.837,
            63.247, 238.324, 46.089,
            62.537, 237.107, 42.837,
            63.042, 236.490, 42.837,
            64.314, 237.153, 46.089,
            63.247, 238.324, 46.089,
            64.314, 237.153, 46.089,
            64.933, 241.214, 47.418,
            63.247, 238.324, 46.089,
            64.314, 237.153, 46.089,
            67.335, 238.728, 47.418,
            64.933, 241.214, 47.418,
            67.335, 238.728, 47.418,
            66.608, 244.086, 46.040,
            64.933, 241.214, 47.418,
            67.335, 238.728, 47.418,
            70.336, 240.293, 46.040,
            66.608, 244.086, 46.040,
            70.336, 240.293, 46.040,
            67.292, 245.258, 42.767,
            66.608, 244.086, 46.040,
            70.336, 240.293, 46.040,
            71.562, 240.933, 42.767,
            67.292, 245.258, 42.767,
            71.562, 240.933, 42.767,
            66.583, 244.042, 39.514,
            67.292, 245.258, 42.767,
            71.562, 240.933, 42.767,
            70.291, 240.270, 39.514,
            66.583, 244.042, 39.514,
            70.291, 240.270, 39.514,
            64.897, 241.152, 38.186,
            66.583, 244.042, 39.514,
            70.291, 240.270, 39.514,
            67.270, 238.695, 38.186,
            64.897, 241.152, 38.186,
            67.270, 238.695, 38.186,
            63.221, 238.280, 39.563,
            64.897, 241.152, 38.186,
            67.270, 238.695, 38.186,
            64.268, 237.129, 39.563,
            63.221, 238.280, 39.563,
            64.268, 237.129, 39.563,
            62.537, 237.107, 42.837,
            63.221, 238.280, 39.563,
            64.268, 237.129, 39.563,
            63.042, 236.490, 42.837,
            62.537, 237.107, 42.837,
            62.537, 237.107, 42.837,
            61.422, 239.144, 46.055,
            61.063, 237.796, 42.787,
            62.537, 237.107, 42.837,
            63.247, 238.324, 46.089,
            61.422, 239.144, 46.055,
            63.247, 238.324, 46.089,
            62.031, 242.411, 47.418,
            61.422, 239.144, 46.055,
            63.247, 238.324, 46.089,
            64.933, 241.214, 47.418,
            62.031, 242.411, 47.418,
            64.933, 241.214, 47.418,
            62.534, 245.686, 46.075,
            62.031, 242.411, 47.418,
            64.933, 241.214, 47.418,
            66.608, 244.086, 46.040,
            62.534, 245.686, 46.075,
            66.608, 244.086, 46.040,
            62.637, 247.050, 42.816,
            62.534, 245.686, 46.075,
            66.608, 244.086, 46.040,
            67.292, 245.258, 42.767,
            62.637, 247.050, 42.816,
            67.292, 245.258, 42.767,
            62.278, 245.702, 39.549,
            62.637, 247.050, 42.816,
            67.292, 245.258, 42.767,
            66.583, 244.042, 39.514,
            62.278, 245.702, 39.549,
            66.583, 244.042, 39.514,
            61.668, 242.435, 38.186,
            62.278, 245.702, 39.549,
            66.583, 244.042, 39.514,
            64.897, 241.152, 38.186,
            61.668, 242.435, 38.186,
            64.897, 241.152, 38.186,
            61.165, 239.161, 39.528,
            61.668, 242.435, 38.186,
            64.897, 241.152, 38.186,
            63.221, 238.280, 39.563,
            61.165, 239.161, 39.528,
            63.221, 238.280, 39.563,
            61.063, 237.796, 42.787,
            61.165, 239.161, 39.528,
            63.221, 238.280, 39.563,
            62.537, 237.107, 42.837,
            61.063, 237.796, 42.787,
            61.063, 237.796, 42.787,
            22.204, 239.957, 49.116,
            21.923, 238.636, 45.852,
            61.063, 237.796, 42.787,
            61.422, 239.144, 46.055,
            22.204, 239.957, 49.116,
            61.422, 239.144, 46.055,
            22.378, 243.206, 50.491,
            22.204, 239.957, 49.116,
            61.422, 239.144, 46.055,
            62.031, 242.411, 47.418,
            22.378, 243.206, 50.491,
            62.031, 242.411, 47.418,
            22.343, 246.482, 49.168,
            22.378, 243.206, 50.491,
            62.031, 242.411, 47.418,
            62.534, 245.686, 46.075,
            22.343, 246.482, 49.168,
            62.534, 245.686, 46.075,
            22.121, 247.866, 45.926,
            22.343, 246.482, 49.168,
            62.534, 245.686, 46.075,
            62.637, 247.050, 42.816,
            22.121, 247.866, 45.926,
            62.637, 247.050, 42.816,
            21.840, 246.545, 42.662,
            22.121, 247.866, 45.926,
            62.637, 247.050, 42.816,
            62.278, 245.702, 39.549,
            21.840, 246.545, 42.662,
            62.278, 245.702, 39.549,
            21.666, 243.296, 41.287,
            21.840, 246.545, 42.662,
            62.278, 245.702, 39.549,
            61.668, 242.435, 38.186,
            21.666, 243.296, 41.287,
            61.668, 242.435, 38.186,
            21.701, 240.020, 42.609,
            21.666, 243.296, 41.287,
            61.668, 242.435, 38.186,
            61.165, 239.161, 39.528,
            21.701, 240.020, 42.609,
            61.165, 239.161, 39.528,
            21.923, 238.636, 45.852,
            21.701, 240.020, 42.609,
            61.165, 239.161, 39.528,
            61.063, 237.796, 42.787,
            21.923, 238.636, 45.852,
            21.923, 238.636, 45.852,
            -17.624, 240.785, 52.203,
            -17.904, 239.464, 48.939,
            21.923, 238.636, 45.852,
            22.204, 239.957, 49.116,
            -17.624, 240.785, 52.203,
            22.204, 239.957, 49.116,
            -17.450, 244.034, 53.578,
            -17.624, 240.785, 52.203,
            22.204, 239.957, 49.116,
            22.378, 243.206, 50.491,
            -17.450, 244.034, 53.578,
            22.378, 243.206, 50.491,
            -17.484, 247.309, 52.256,
            -17.450, 244.034, 53.578,
            22.378, 243.206, 50.491,
            22.343, 246.482, 49.168,
            -17.484, 247.309, 52.256,
            22.343, 246.482, 49.168,
            -17.707, 248.694, 49.013,
            -17.484, 247.309, 52.256,
            22.343, 246.482, 49.168,
            22.121, 247.866, 45.926,
            -17.707, 248.694, 49.013,
            22.121, 247.866, 45.926,
            -17.987, 247.373, 45.749,
            -17.707, 248.694, 49.013,
            22.121, 247.866, 45.926,
            21.840, 246.545, 42.662,
            -17.987, 247.373, 45.749,
            21.840, 246.545, 42.662,
            -18.161, 244.124, 44.374,
            -17.987, 247.373, 45.749,
            21.840, 246.545, 42.662,
            21.666, 243.296, 41.287,
            -18.161, 244.124, 44.374,
            21.666, 243.296, 41.287,
            -18.127, 240.848, 45.697,
            -18.161, 244.124, 44.374,
            21.666, 243.296, 41.287,
            21.701, 240.020, 42.609,
            -18.127, 240.848, 45.697,
            21.701, 240.020, 42.609,
            -17.904, 239.464, 48.939,
            -18.127, 240.848, 45.697,
            21.701, 240.020, 42.609,
            21.923, 238.636, 45.852,
            -17.904, 239.464, 48.939,
            -17.904, 239.464, 48.939,
            -57.978, 241.621, 55.313,
            -58.301, 240.274, 52.044,
            -17.904, 239.464, 48.939,
            -17.624, 240.785, 52.203,
            -57.978, 241.621, 55.313,
            -17.624, 240.785, 52.203,
            -57.453, 244.891, 56.679,
            -57.978, 241.621, 55.313,
            -17.624, 240.785, 52.203,
            -17.450, 244.034, 53.578,
            -57.453, 244.891, 56.679,
            -17.450, 244.034, 53.578,
            -57.033, 248.171, 55.341,
            -57.453, 244.891, 56.679,
            -17.450, 244.034, 53.578,
            -17.484, 247.309, 52.256,
            -57.033, 248.171, 55.341,
            -17.484, 247.309, 52.256,
            -56.965, 249.540, 52.083,
            -57.033, 248.171, 55.341,
            -17.484, 247.309, 52.256,
            -17.707, 248.694, 49.013,
            -56.965, 249.540, 52.083,
            -17.707, 248.694, 49.013,
            -57.288, 248.193, 48.814,
            -56.965, 249.540, 52.083,
            -17.707, 248.694, 49.013,
            -17.987, 247.373, 45.749,
            -57.288, 248.193, 48.814,
            -17.987, 247.373, 45.749,
            -57.813, 244.922, 47.447,
            -57.288, 248.193, 48.814,
            -17.987, 247.373, 45.749,
            -18.161, 244.124, 44.374,
            -57.813, 244.922, 47.447,
            -18.161, 244.124, 44.374,
            -58.233, 241.642, 48.786,
            -57.813, 244.922, 47.447,
            -18.161, 244.124, 44.374,
            -18.127, 240.848, 45.697,
            -58.233, 241.642, 48.786,
            -18.127, 240.848, 45.697,
            -58.301, 240.274, 52.044,
            -58.233, 241.642, 48.786,
            -18.127, 240.848, 45.697,
            -17.904, 239.464, 48.939,
            -58.301, 240.274, 52.044,
            -58.301, 240.274, 52.044,
            -62.043, 243.023, 55.349,
            -62.780, 241.803, 52.095,
            -58.301, 240.274, 52.044,
            -57.978, 241.621, 55.313,
            -62.043, 243.023, 55.349,
            -57.978, 241.621, 55.313,
            -60.289, 245.925, 56.679,
            -62.043, 243.023, 55.349,
            -57.978, 241.621, 55.313,
            -57.453, 244.891, 56.679,
            -60.289, 245.925, 56.679,
            -57.453, 244.891, 56.679,
            -58.546, 248.811, 55.304,
            -60.289, 245.925, 56.679,
            -57.453, 244.891, 56.679,
            -57.033, 248.171, 55.341,
            -58.546, 248.811, 55.304,
            -57.033, 248.171, 55.341,
            -57.833, 249.991, 52.032,
            -58.546, 248.811, 55.304,
            -57.033, 248.171, 55.341,
            -56.965, 249.540, 52.083,
            -57.833, 249.991, 52.032,
            -56.965, 249.540, 52.083,
            -58.570, 248.772, 48.778,
            -57.833, 249.991, 52.032,
            -56.965, 249.540, 52.083,
            -57.288, 248.193, 48.814,
            -58.570, 248.772, 48.778,
            -57.288, 248.193, 48.814,
            -60.323, 245.869, 47.447,
            -58.570, 248.772, 48.778,
            -57.288, 248.193, 48.814,
            -57.813, 244.922, 47.447,
            -60.323, 245.869, 47.447,
            -57.813, 244.922, 47.447,
            -62.067, 242.983, 48.823,
            -60.323, 245.869, 47.447,
            -57.813, 244.922, 47.447,
            -58.233, 241.642, 48.786,
            -62.067, 242.983, 48.823,
            -58.233, 241.642, 48.786,
            -62.780, 241.803, 52.095,
            -62.067, 242.983, 48.823,
            -58.233, 241.642, 48.786,
            -58.301, 240.274, 52.044,
            -62.780, 241.803, 52.095,
            -62.780, 241.803, 52.095,
            -65.425, 247.092, 55.349,
            -66.766, 246.580, 52.095,
            -62.780, 241.803, 52.095,
            -62.043, 243.023, 55.349,
            -65.425, 247.092, 55.349,
            -62.043, 243.023, 55.349,
            -62.234, 248.312, 56.679,
            -65.425, 247.092, 55.349,
            -62.043, 243.023, 55.349,
            -60.289, 245.925, 56.679,
            -62.234, 248.312, 56.679,
            -60.289, 245.925, 56.679,
            -59.061, 249.525, 55.304,
            -62.234, 248.312, 56.679,
            -60.289, 245.925, 56.679,
            -58.546, 248.811, 55.304,
            -59.061, 249.525, 55.304,
            -58.546, 248.811, 55.304,
            -57.764, 250.021, 52.032,
            -59.061, 249.525, 55.304,
            -58.546, 248.811, 55.304,
            -57.833, 249.991, 52.032,
            -57.764, 250.021, 52.032,
            -57.833, 249.991, 52.032,
            -59.105, 249.508, 48.778,
            -57.764, 250.021, 52.032,
            -57.833, 249.991, 52.032,
            -58.570, 248.772, 48.778,
            -59.105, 249.508, 48.778,
            -58.570, 248.772, 48.778,
            -62.296, 248.289, 47.447,
            -59.105, 249.508, 48.778,
            -58.570, 248.772, 48.778,
            -60.323, 245.869, 47.447,
            -62.296, 248.289, 47.447,
            -60.323, 245.869, 47.447,
            -65.469, 247.076, 48.823,
            -62.296, 248.289, 47.447,
            -60.323, 245.869, 47.447,
            -62.067, 242.983, 48.823,
            -65.469, 247.076, 48.823,
            -62.067, 242.983, 48.823,
            -66.766, 246.580, 52.095,
            -65.469, 247.076, 48.823,
            -62.067, 242.983, 48.823,
            -62.780, 241.803, 52.095,
            -66.766, 246.580, 52.095,
            -66.766, 246.580, 52.095,
            -66.039, 253.618, 55.349,
            -67.415, 253.656, 52.095,
            -66.766, 246.580, 52.095,
            -65.425, 247.092, 55.349,
            -66.039, 253.618, 55.349,
            -65.425, 247.092, 55.349,
            -62.764, 253.527, 56.679,
            -66.039, 253.618, 55.349,
            -65.425, 247.092, 55.349,
            -62.234, 248.312, 56.679,
            -62.764, 253.527, 56.679,
            -62.234, 248.312, 56.679,
            -59.507, 253.438, 55.304,
            -62.764, 253.527, 56.679,
            -62.234, 248.312, 56.679,
            -59.061, 249.525, 55.304,
            -59.507, 253.438, 55.304,
            -59.061, 249.525, 55.304,
            -58.175, 253.401, 52.032,
            -59.507, 253.438, 55.304,
            -59.061, 249.525, 55.304,
            -57.764, 250.021, 52.032,
            -58.175, 253.401, 52.032,
            -57.764, 250.021, 52.032,
            -59.552, 253.439, 48.778,
            -58.175, 253.401, 52.032,
            -57.764, 250.021, 52.032,
            -59.105, 249.508, 48.778,
            -59.552, 253.439, 48.778,
            -59.105, 249.508, 48.778,
            -62.827, 253.529, 47.447,
            -59.552, 253.439, 48.778,
            -59.105, 249.508, 48.778,
            -62.296, 248.289, 47.447,
            -62.827, 253.529, 47.447,
            -62.296, 248.289, 47.447,
            -66.084, 253.619, 48.823,
            -62.827, 253.529, 47.447,
            -62.296, 248.289, 47.447,
            -65.469, 247.076, 48.823,
            -66.084, 253.619, 48.823,
            -65.469, 247.076, 48.823,
            -67.415, 253.656, 52.095,
            -66.084, 253.619, 48.823,
            -65.469, 247.076, 48.823,
            -66.766, 246.580, 52.095,
            -67.415, 253.656, 52.095,
            -67.415, 253.656, 52.095,
            -66.036, 356.943, 55.349,
            -67.411, 356.943, 52.095,
            -67.415, 253.656, 52.095,
            -66.039, 253.618, 55.349,
            -66.036, 356.943, 55.349,
            -66.039, 253.618, 55.349,
            -62.764, 356.943, 56.679,
            -66.036, 356.943, 55.349,
            -66.039, 253.618, 55.349,
            -62.764, 253.527, 56.679,
            -62.764, 356.943, 56.679,
            -62.764, 253.527, 56.679,
            -59.510, 356.943, 55.304,
            -62.764, 356.943, 56.679,
            -62.764, 253.527, 56.679,
            -59.507, 253.438, 55.304,
            -59.510, 356.943, 55.304,
            -59.507, 253.438, 55.304,
            -58.179, 356.943, 52.032,
            -59.510, 356.943, 55.304,
            -59.507, 253.438, 55.304,
            -58.175, 253.401, 52.032,
            -58.179, 356.943, 52.032,
            -58.175, 253.401, 52.032,
            -59.555, 356.943, 48.778,
            -58.179, 356.943, 52.032,
            -58.175, 253.401, 52.032,
            -59.552, 253.439, 48.778,
            -59.555, 356.943, 48.778,
            -59.552, 253.439, 48.778,
            -62.827, 356.943, 47.447,
            -59.555, 356.943, 48.778,
            -59.552, 253.439, 48.778,
            -62.827, 253.529, 47.447,
            -62.827, 356.943, 47.447,
            -62.827, 253.529, 47.447,
            -66.081, 356.943, 48.823,
            -62.827, 356.943, 47.447,
            -62.827, 253.529, 47.447,
            -66.084, 253.619, 48.823,
            -66.081, 356.943, 48.823,
            -66.084, 253.619, 48.823,
            -67.411, 356.943, 52.095,
            -66.081, 356.943, 48.823,
            -66.084, 253.619, 48.823,
            -67.415, 253.656, 52.095,
               -67.411, 356.943, 52.095
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, -0.008, -0.012,
            -0.690, -0.070, 0.720,
            -0.993, -0.120, -0.001,
            -1.000, -0.008, -0.012,
            -0.715, 0.016, 0.699,
            -0.690, -0.070, 0.720,
            -0.715, 0.016, 0.699,
            0.022, 0.020, 1.000,
            -0.690, -0.070, 0.720,
            -0.715, 0.016, 0.699,
            -0.005, 0.031, 1.000,
            0.022, 0.020, 1.000,
            -0.005, 0.031, 1.000,
            0.715, 0.087, 0.693,
            0.022, 0.020, 1.000,
            -0.005, 0.031, 1.000,
            0.709, 0.027, 0.704,
            0.715, 0.087, 0.693,
            0.709, 0.027, 0.704,
            0.995, 0.101, -0.006,
            0.715, 0.087, 0.693,
            0.709, 0.027, 0.704,
            1.000, 0.007, -0.009,
            0.995, 0.101, -0.006,
            1.000, 0.007, -0.009,
            0.712, 0.062, -0.699,
            0.995, 0.101, -0.006,
            1.000, 0.007, -0.009,
            0.701, -0.017, -0.713,
            0.712, 0.062, -0.699,
            0.701, -0.017, -0.713,
            0.026, -0.010, -1.000,
            0.712, 0.062, -0.699,
            0.701, -0.017, -0.713,
            -0.002, -0.031, -1.000,
            0.026, -0.010, -1.000,
            -0.002, -0.031, -1.000,
            -0.686, -0.086, -0.722,
            0.026, -0.010, -1.000,
            -0.002, -0.031, -1.000,
            -0.702, -0.028, -0.712,
            -0.686, -0.086, -0.722,
            -0.702, -0.028, -0.712,
            -0.993, -0.120, -0.001,
            -0.686, -0.086, -0.722,
            -0.702, -0.028, -0.712,
            -1.000, -0.008, -0.012,
            -0.993, -0.120, -0.001,
            -0.993, -0.120, -0.001,
            -0.580, -0.310, 0.754,
            -0.896, -0.443, 0.007,
            -0.993, -0.120, -0.001,
            -0.690, -0.070, 0.720,
            -0.580, -0.310, 0.754,
            -0.690, -0.070, 0.720,
            0.064, 0.034, 0.997,
            -0.580, -0.310, 0.754,
            -0.690, -0.070, 0.720,
            0.022, 0.020, 1.000,
            0.064, 0.034, 0.997,
            0.022, 0.020, 1.000,
            0.648, 0.346, 0.678,
            0.064, 0.034, 0.997,
            0.022, 0.020, 1.000,
            0.715, 0.087, 0.693,
            0.648, 0.346, 0.678,
            0.715, 0.087, 0.693,
            0.884, 0.468, -0.008,
            0.648, 0.346, 0.678,
            0.715, 0.087, 0.693,
            0.995, 0.101, -0.006,
            0.884, 0.468, -0.008,
            0.995, 0.101, -0.006,
            0.641, 0.338, -0.689,
            0.884, 0.468, -0.008,
            0.995, 0.101, -0.006,
            0.712, 0.062, -0.699,
            0.641, 0.338, -0.689,
            0.712, 0.062, -0.699,
            0.053, 0.027, -0.998,
            0.641, 0.338, -0.689,
            0.712, 0.062, -0.699,
            0.026, -0.010, -1.000,
            0.053, 0.027, -0.998,
            0.026, -0.010, -1.000,
            -0.596, -0.304, -0.743,
            0.053, 0.027, -0.998,
            0.026, -0.010, -1.000,
            -0.686, -0.086, -0.722,
            -0.596, -0.304, -0.743,
            -0.686, -0.086, -0.722,
            -0.896, -0.443, 0.007,
            -0.596, -0.304, -0.743,
            -0.686, -0.086, -0.722,
            -0.993, -0.120, -0.001,
            -0.896, -0.443, 0.007,
            -0.896, -0.443, 0.007,
            -0.397, -0.540, 0.742,
            -0.616, -0.788, 0.005,
            -0.896, -0.443, 0.007,
            -0.580, -0.310, 0.754,
            -0.397, -0.540, 0.742,
            -0.580, -0.310, 0.754,
            0.035, 0.046, 0.998,
            -0.397, -0.540, 0.742,
            -0.580, -0.310, 0.754,
            0.064, 0.034, 0.997,
            0.035, 0.046, 0.998,
            0.064, 0.034, 0.997,
            0.406, 0.609, 0.681,
            0.035, 0.046, 0.998,
            0.064, 0.034, 0.997,
            0.648, 0.346, 0.678,
            0.406, 0.609, 0.681,
            0.648, 0.346, 0.678,
            0.546, 0.838, -0.008,
            0.406, 0.609, 0.681,
            0.648, 0.346, 0.678,
            0.884, 0.468, -0.008,
            0.546, 0.838, -0.008,
            0.884, 0.468, -0.008,
            0.395, 0.604, -0.692,
            0.546, 0.838, -0.008,
            0.884, 0.468, -0.008,
            0.641, 0.338, -0.689,
            0.395, 0.604, -0.692,
            0.641, 0.338, -0.689,
            0.026, 0.034, -0.999,
            0.395, 0.604, -0.692,
            0.641, 0.338, -0.689,
            0.053, 0.027, -0.998,
            0.026, 0.034, -0.999,
            0.053, 0.027, -0.998,
            -0.391, -0.558, -0.732,
            0.026, 0.034, -0.999,
            0.053, 0.027, -0.998,
            -0.596, -0.304, -0.743,
            -0.391, -0.558, -0.732,
            -0.596, -0.304, -0.743,
            -0.616, -0.788, 0.005,
            -0.391, -0.558, -0.732,
            -0.596, -0.304, -0.743,
            -0.896, -0.443, 0.007,
            -0.616, -0.788, 0.005,
            -0.616, -0.788, 0.005,
            -0.130, -0.668, 0.732,
            -0.228, -0.974, -0.012,
            -0.616, -0.788, 0.005,
            -0.397, -0.540, 0.742,
            -0.130, -0.668, 0.732,
            -0.397, -0.540, 0.742,
            0.048, 0.038, 0.998,
            -0.130, -0.668, 0.732,
            -0.397, -0.540, 0.742,
            0.035, 0.046, 0.998,
            0.048, 0.038, 0.998,
            0.035, 0.046, 0.998,
            0.172, 0.709, 0.684,
            0.048, 0.038, 0.998,
            0.035, 0.046, 0.998,
            0.406, 0.609, 0.681,
            0.172, 0.709, 0.684,
            0.406, 0.609, 0.681,
            0.192, 0.981, -0.011,
            0.172, 0.709, 0.684,
            0.406, 0.609, 0.681,
            0.546, 0.838, -0.008,
            0.192, 0.981, -0.011,
            0.546, 0.838, -0.008,
            0.109, 0.710, -0.696,
            0.192, 0.981, -0.011,
            0.546, 0.838, -0.008,
            0.395, 0.604, -0.692,
            0.109, 0.710, -0.696,
            0.395, 0.604, -0.692,
            -0.031, 0.048, -0.998,
            0.109, 0.710, -0.696,
            0.395, 0.604, -0.692,
            0.026, 0.034, -0.999,
            -0.031, 0.048, -0.998,
            0.026, 0.034, -0.999,
            -0.166, -0.654, -0.738,
            -0.031, 0.048, -0.998,
            0.026, 0.034, -0.999,
            -0.391, -0.558, -0.732,
            -0.166, -0.654, -0.738,
            -0.391, -0.558, -0.732,
            -0.228, -0.974, -0.012,
            -0.166, -0.654, -0.738,
            -0.391, -0.558, -0.732,
            -0.616, -0.788, 0.005,
            -0.228, -0.974, -0.012,
            -0.228, -0.974, -0.012,
            0.039, -0.714, 0.699,
            -0.022, -1.000, -0.008,
            -0.228, -0.974, -0.012,
            -0.130, -0.668, 0.732,
            0.039, -0.714, 0.699,
            -0.130, -0.668, 0.732,
            0.077, -0.010, 0.997,
            0.039, -0.714, 0.699,
            -0.130, -0.668, 0.732,
            0.048, 0.038, 0.998,
            0.077, -0.010, 0.997,
            0.048, 0.038, 0.998,
            0.069, 0.700, 0.711,
            0.077, -0.010, 0.997,
            0.048, 0.038, 0.998,
            0.172, 0.709, 0.684,
            0.069, 0.700, 0.711,
            0.172, 0.709, 0.684,
            0.021, 1.000, 0.008,
            0.069, 0.700, 0.711,
            0.172, 0.709, 0.684,
            0.192, 0.981, -0.011,
            0.021, 1.000, 0.008,
            0.192, 0.981, -0.011,
            -0.039, 0.714, -0.699,
            0.021, 1.000, 0.008,
            0.192, 0.981, -0.011,
            0.109, 0.710, -0.696,
            -0.039, 0.714, -0.699,
            0.109, 0.710, -0.696,
            -0.077, 0.010, -0.997,
            -0.039, 0.714, -0.699,
            0.109, 0.710, -0.696,
            -0.031, 0.048, -0.998,
            -0.077, 0.010, -0.997,
            -0.031, 0.048, -0.998,
            -0.070, -0.700, -0.711,
            -0.077, 0.010, -0.997,
            -0.031, 0.048, -0.998,
            -0.166, -0.654, -0.738,
            -0.070, -0.700, -0.711,
            -0.166, -0.654, -0.738,
            -0.022, -1.000, -0.008,
            -0.070, -0.700, -0.711,
            -0.166, -0.654, -0.738,
            -0.228, -0.974, -0.012,
            -0.022, -1.000, -0.008,
            -0.022, -1.000, -0.008,
            0.039, -0.714, 0.699,
            -0.021, -1.000, -0.008,
            -0.022, -1.000, -0.008,
            0.039, -0.714, 0.699,
            0.039, -0.714, 0.699,
            0.039, -0.714, 0.699,
            0.077, -0.010, 0.997,
            0.039, -0.714, 0.699,
            0.039, -0.714, 0.699,
            0.077, -0.010, 0.997,
            0.077, -0.010, 0.997,
            0.077, -0.010, 0.997,
            0.070, 0.700, 0.711,
            0.077, -0.010, 0.997,
            0.077, -0.010, 0.997,
            0.069, 0.700, 0.711,
            0.070, 0.700, 0.711,
            0.069, 0.700, 0.711,
            0.022, 1.000, 0.008,
            0.070, 0.700, 0.711,
            0.069, 0.700, 0.711,
            0.021, 1.000, 0.008,
            0.022, 1.000, 0.008,
            0.021, 1.000, 0.008,
            -0.039, 0.714, -0.699,
            0.022, 1.000, 0.008,
            0.021, 1.000, 0.008,
            -0.039, 0.714, -0.699,
            -0.039, 0.714, -0.699,
            -0.039, 0.714, -0.699,
            -0.077, 0.010, -0.997,
            -0.039, 0.714, -0.699,
            -0.039, 0.714, -0.699,
            -0.077, 0.010, -0.997,
            -0.077, 0.010, -0.997,
            -0.077, 0.010, -0.997,
            -0.069, -0.700, -0.711,
            -0.077, 0.010, -0.997,
            -0.077, 0.010, -0.997,
            -0.070, -0.700, -0.711,
            -0.069, -0.700, -0.711,
            -0.070, -0.700, -0.711,
            -0.021, -1.000, -0.008,
            -0.069, -0.700, -0.711,
            -0.070, -0.700, -0.711,
            -0.022, -1.000, -0.008,
            -0.021, -1.000, -0.008,
            -0.021, -1.000, -0.008,
            -0.098, -0.711, 0.697,
            -0.173, -0.985, 0.011,
            -0.021, -1.000, -0.008,
            0.039, -0.714, 0.699,
            -0.098, -0.711, 0.697,
            0.039, -0.714, 0.699,
            0.029, -0.047, 0.998,
            -0.098, -0.711, 0.697,
            0.039, -0.714, 0.699,
            0.077, -0.010, 0.997,
            0.029, -0.047, 0.998,
            0.077, -0.010, 0.997,
            0.163, 0.652, 0.740,
            0.029, -0.047, 0.998,
            0.077, -0.010, 0.997,
            0.070, 0.700, 0.711,
            0.163, 0.652, 0.740,
            0.070, 0.700, 0.711,
            0.251, 0.968, 0.007,
            0.163, 0.652, 0.740,
            0.070, 0.700, 0.711,
            0.022, 1.000, 0.008,
            0.251, 0.968, 0.007,
            0.022, 1.000, 0.008,
            0.127, 0.667, -0.734,
            0.251, 0.968, 0.007,
            0.022, 1.000, 0.008,
            -0.039, 0.714, -0.699,
            0.127, 0.667, -0.734,
            -0.039, 0.714, -0.699,
            -0.048, -0.032, -0.998,
            0.127, 0.667, -0.734,
            -0.039, 0.714, -0.699,
            -0.077, 0.010, -0.997,
            -0.048, -0.032, -0.998,
            -0.077, 0.010, -0.997,
            -0.158, -0.710, -0.687,
            -0.048, -0.032, -0.998,
            -0.077, 0.010, -0.997,
            -0.069, -0.700, -0.711,
            -0.158, -0.710, -0.687,
            -0.069, -0.700, -0.711,
            -0.173, -0.985, 0.011,
            -0.158, -0.710, -0.687,
            -0.069, -0.700, -0.711,
            -0.021, -1.000, -0.008,
            -0.173, -0.985, 0.011,
            -0.173, -0.985, 0.011,
            -0.410, -0.597, 0.689,
            -0.564, -0.826, 0.009,
            -0.173, -0.985, 0.011,
            -0.098, -0.711, 0.697,
            -0.410, -0.597, 0.689,
            -0.098, -0.711, 0.697,
            -0.036, -0.048, 0.998,
            -0.410, -0.597, 0.689,
            -0.098, -0.711, 0.697,
            0.029, -0.047, 0.998,
            -0.036, -0.048, 0.998,
            0.029, -0.047, 0.998,
            0.413, 0.523, 0.745,
            -0.036, -0.048, 0.998,
            0.029, -0.047, 0.998,
            0.163, 0.652, 0.740,
            0.413, 0.523, 0.745,
            0.163, 0.652, 0.740,
            0.951, -0.228, -0.211,
            0.413, 0.523, 0.745,
            0.163, 0.652, 0.740,
            0.251, 0.968, 0.007,
            0.951, -0.228, -0.211,
            0.251, 0.968, 0.007,
            0.425, 0.505, -0.751,
            0.951, -0.228, -0.211,
            0.251, 0.968, 0.007,
            0.127, 0.667, -0.734,
            0.425, 0.505, -0.751,
            0.127, 0.667, -0.734,
            -0.040, -0.052, -0.998,
            0.425, 0.505, -0.751,
            0.127, 0.667, -0.734,
            -0.048, -0.032, -0.998,
            -0.040, -0.052, -0.998,
            -0.048, -0.032, -0.998,
            -0.422, -0.601, -0.679,
            -0.040, -0.052, -0.998,
            -0.048, -0.032, -0.998,
            -0.158, -0.710, -0.687,
            -0.422, -0.601, -0.679,
            -0.158, -0.710, -0.687,
            -0.564, -0.826, 0.009,
            -0.422, -0.601, -0.679,
            -0.158, -0.710, -0.687,
            -0.173, -0.985, 0.011,
            -0.564, -0.826, 0.009,
            -0.564, -0.826, 0.009,
            -0.670, -0.280, 0.688,
            -0.924, -0.382, 0.007,
            -0.564, -0.826, 0.009,
            -0.410, -0.597, 0.689,
            -0.670, -0.280, 0.688,
            -0.410, -0.597, 0.689,
            -0.056, -0.026, 0.998,
            -0.670, -0.280, 0.688,
            -0.410, -0.597, 0.689,
            -0.036, -0.048, 0.998,
            -0.056, -0.026, 0.998,
            -0.036, -0.048, 0.998,
            0.623, 0.246, 0.742,
            -0.056, -0.026, 0.998,
            -0.036, -0.048, 0.998,
            0.413, 0.523, 0.745,
            0.623, 0.246, 0.742,
            0.413, 0.523, 0.745,
            0.928, -0.369, -0.052,
            0.623, 0.246, 0.742,
            0.413, 0.523, 0.745,
            0.951, -0.228, -0.211,
            0.928, -0.369, -0.052,
            0.951, -0.228, -0.211,
            0.616, 0.236, -0.751,
            0.928, -0.369, -0.052,
            0.951, -0.228, -0.211,
            0.425, 0.505, -0.751,
            0.616, 0.236, -0.751,
            0.425, 0.505, -0.751,
            -0.068, -0.030, -0.997,
            0.616, 0.236, -0.751,
            0.425, 0.505, -0.751,
            -0.040, -0.052, -0.998,
            -0.068, -0.030, -0.997,
            -0.040, -0.052, -0.998,
            -0.679, -0.282, -0.678,
            -0.068, -0.030, -0.997,
            -0.040, -0.052, -0.998,
            -0.422, -0.601, -0.679,
            -0.679, -0.282, -0.678,
            -0.422, -0.601, -0.679,
            -0.924, -0.382, 0.007,
            -0.679, -0.282, -0.678,
            -0.422, -0.601, -0.679,
            -0.564, -0.826, 0.009,
            -0.924, -0.382, 0.007,
            -0.924, -0.382, 0.007,
            -0.707, -0.033, 0.706,
            -0.999, -0.045, 0.006,
            -0.924, -0.382, 0.007,
            -0.670, -0.280, 0.688,
            -0.707, -0.033, 0.706,
            -0.670, -0.280, 0.688,
            -0.005, -0.001, 1.000,
            -0.707, -0.033, 0.706,
            -0.670, -0.280, 0.688,
            -0.056, -0.026, 0.998,
            -0.005, -0.001, 1.000,
            -0.056, -0.026, 0.998,
            0.704, 0.039, 0.709,
            -0.005, -0.001, 1.000,
            -0.056, -0.026, 0.998,
            0.623, 0.246, 0.742,
            0.704, 0.039, 0.709,
            0.623, 0.246, 0.742,
            0.998, 0.061, -0.006,
            0.704, 0.039, 0.709,
            0.623, 0.246, 0.742,
            0.928, -0.369, -0.052,
            0.998, 0.061, -0.006,
            0.928, -0.369, -0.052,
            0.694, 0.040, -0.719,
            0.998, 0.061, -0.006,
            0.928, -0.369, -0.052,
            0.616, 0.236, -0.751,
            0.694, 0.040, -0.719,
            0.616, 0.236, -0.751,
            -0.020, -0.001, -1.000,
            0.694, 0.040, -0.719,
            0.616, 0.236, -0.751,
            -0.068, -0.030, -0.997,
            -0.020, -0.001, -1.000,
            -0.068, -0.030, -0.997,
            -0.717, -0.034, -0.696,
            -0.020, -0.001, -1.000,
            -0.068, -0.030, -0.997,
            -0.679, -0.282, -0.678,
            -0.717, -0.034, -0.696,
            -0.679, -0.282, -0.678,
            -0.999, -0.045, 0.006,
            -0.717, -0.034, -0.696,
            -0.679, -0.282, -0.678,
            -0.924, -0.382, 0.007,
            -0.999, -0.045, 0.006,
            -0.999, -0.045, 0.006,
            -0.702, 0.000, 0.712,
            -1.000, 0.000, 0.007,
            -0.999, -0.045, 0.006,
            -0.707, -0.033, 0.706,
            -0.702, 0.000, 0.712,
            -0.707, -0.033, 0.706,
            0.007, 0.000, 1.000,
            -0.702, 0.000, 0.712,
            -0.707, -0.033, 0.706,
            -0.005, -0.001, 1.000,
            0.007, 0.000, 1.000,
            -0.005, -0.001, 1.000,
            0.712, 0.000, 0.702,
            0.007, 0.000, 1.000,
            -0.005, -0.001, 1.000,
            0.704, 0.039, 0.709,
            0.712, 0.000, 0.702,
            0.704, 0.039, 0.709,
            1.000, 0.000, -0.007,
            0.712, 0.000, 0.702,
            0.704, 0.039, 0.709,
            0.998, 0.061, -0.006,
            1.000, 0.000, -0.007,
            0.998, 0.061, -0.006,
            0.702, 0.000, -0.712,
            1.000, 0.000, -0.007,
            0.998, 0.061, -0.006,
            0.694, 0.040, -0.719,
            0.702, 0.000, -0.712,
            0.694, 0.040, -0.719,
            -0.007, 0.000, -1.000,
            0.702, 0.000, -0.712,
            0.694, 0.040, -0.719,
            -0.020, -0.001, -1.000,
            -0.007, 0.000, -1.000,
            -0.020, -0.001, -1.000,
            -0.712, 0.000, -0.702,
            -0.007, 0.000, -1.000,
            -0.020, -0.001, -1.000,
            -0.717, -0.034, -0.696,
            -0.712, 0.000, -0.702,
            -0.717, -0.034, -0.696,
            -1.000, 0.000, 0.007,
            -0.712, 0.000, -0.702,
            -0.717, -0.034, -0.696,
            -0.999, -0.045, 0.006,
               -1.000, 0.000, 0.007
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
