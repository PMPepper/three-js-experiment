function create_geometry_35(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -8.281, -5.099, -0.159,
            -8.291, -5.099, -0.140,
            -8.656, -3.551, 0.167,
            -8.281, -5.099, -0.159,
            -8.656, -3.551, 0.167,
            -8.639, -3.551, 0.152,
            -8.639, -3.551, 0.152,
            -8.656, -3.551, 0.167,
            -8.641, -3.551, 0.184,
            -8.639, -3.551, 0.152,
            -8.641, -3.551, 0.184,
            -8.624, -3.551, 0.169,
            -8.624, -3.551, 0.169,
            -8.641, -3.551, 0.184,
            -8.287, -5.099, -0.134,
            -8.624, -3.551, 0.169,
            -8.287, -5.099, -0.134,
            -8.266, -5.099, -0.141,
            -8.266, -5.099, -0.141,
            -8.287, -5.099, -0.134,
            -8.291, -5.099, -0.140,
            -8.266, -5.099, -0.141,
            -8.291, -5.099, -0.140,
            -8.281, -5.099, -0.159,
            -8.287, -5.099, -0.134,
            -8.641, -3.551, 0.184,
            -8.656, -3.551, 0.167,
            -8.287, -5.099, -0.134,
            -8.656, -3.551, 0.167,
            -8.291, -5.099, -0.140,
            -8.335, -4.891, -0.091,
            -8.340, -4.891, -0.099,
            -8.329, -4.891, -0.117,
            -8.335, -4.891, -0.091,
            -8.329, -4.891, -0.117,
            -8.314, -4.891, -0.100,
            -8.372, -4.737, -0.056,
            -8.380, -4.737, -0.067,
            -8.369, -4.721, -0.086,
            -8.372, -4.737, -0.056,
            -8.369, -4.721, -0.086,
            -8.349, -4.721, -0.064,
            -8.396, -4.621, -0.036,
            -8.403, -4.621, -0.045,
            -8.391, -4.621, -0.063,
            -8.396, -4.621, -0.036,
            -8.391, -4.621, -0.063,
            -8.376, -4.621, -0.046,
            -8.479, -4.259, 0.009,
            -8.489, -4.275, 0.023,
            -8.477, -4.275, 0.039,
            -8.479, -4.259, 0.009,
            -8.477, -4.275, 0.039,
            -8.460, -4.259, 0.032,
            -8.511, -4.121, 0.071,
            -8.524, -4.121, 0.053,
            -8.504, -4.128, 0.032,
            -8.511, -4.121, 0.071,
            -8.504, -4.128, 0.032,
            -8.488, -4.128, 0.055,
            -8.576, -3.843, 0.093,
            -8.591, -3.851, 0.106,
            -8.574, -3.851, 0.129,
            -8.576, -3.843, 0.093,
            -8.574, -3.851, 0.129,
            -8.558, -3.843, 0.117,
            -8.369, -4.721, -0.086,
            -8.329, -4.891, -0.117,
            -8.340, -4.891, -0.099,
            -8.369, -4.721, -0.086,
            -8.340, -4.891, -0.099,
            -8.380, -4.737, -0.067,
            -8.391, -4.621, -0.063,
            -8.403, -4.621, -0.045,
            -8.489, -4.275, 0.023,
            -8.391, -4.621, -0.063,
            -8.489, -4.275, 0.023,
            -8.479, -4.259, 0.009,
            -8.504, -4.128, 0.032,
            -8.524, -4.121, 0.053,
            -8.591, -3.851, 0.106,
            -8.504, -4.128, 0.032,
            -8.591, -3.851, 0.106,
            -8.576, -3.843, 0.093,
            -8.349, -4.721, -0.064,
            -8.372, -4.737, -0.056,
            -8.335, -4.891, -0.091,
            -8.349, -4.721, -0.064,
            -8.335, -4.891, -0.091,
            -8.314, -4.891, -0.100,
            -8.376, -4.621, -0.046,
            -8.460, -4.259, 0.032,
            -8.477, -4.275, 0.039,
            -8.376, -4.621, -0.046,
            -8.477, -4.275, 0.039,
            -8.396, -4.621, -0.036,
            -8.488, -4.128, 0.055,
            -8.558, -3.843, 0.117,
            -8.574, -3.851, 0.129,
            -8.488, -4.128, 0.055,
            -8.574, -3.851, 0.129,
            -8.511, -4.121, 0.071,
            -8.380, -4.737, -0.067,
            -8.340, -4.891, -0.099,
            -8.335, -4.891, -0.091,
            -8.380, -4.737, -0.067,
            -8.335, -4.891, -0.091,
            -8.372, -4.737, -0.056,
            -8.403, -4.621, -0.045,
            -8.396, -4.621, -0.036,
            -8.477, -4.275, 0.039,
            -8.403, -4.621, -0.045,
            -8.477, -4.275, 0.039,
            -8.489, -4.275, 0.023,
            -8.524, -4.121, 0.053,
            -8.511, -4.121, 0.071,
            -8.574, -3.851, 0.129,
            -8.524, -4.121, 0.053,
            -8.574, -3.851, 0.129,
            -8.591, -3.851, 0.106,
            -7.145, -3.551, 0.167,
            -7.511, -5.099, -0.140,
            -7.520, -5.099, -0.159,
            -7.145, -3.551, 0.167,
            -7.520, -5.099, -0.159,
            -7.163, -3.551, 0.152,
            -7.160, -3.551, 0.184,
            -7.145, -3.551, 0.167,
            -7.163, -3.551, 0.152,
            -7.160, -3.551, 0.184,
            -7.163, -3.551, 0.152,
            -7.178, -3.551, 0.169,
            -7.514, -5.099, -0.134,
            -7.160, -3.551, 0.184,
            -7.178, -3.551, 0.169,
            -7.514, -5.099, -0.134,
            -7.178, -3.551, 0.169,
            -7.536, -5.099, -0.141,
            -7.511, -5.099, -0.140,
            -7.514, -5.099, -0.134,
            -7.536, -5.099, -0.141,
            -7.511, -5.099, -0.140,
            -7.536, -5.099, -0.141,
            -7.520, -5.099, -0.159,
            -7.145, -3.551, 0.167,
            -7.160, -3.551, 0.184,
            -7.514, -5.099, -0.134,
            -7.145, -3.551, 0.167,
            -7.514, -5.099, -0.134,
            -7.511, -5.099, -0.140,
            -7.472, -4.891, -0.117,
            -7.462, -4.891, -0.099,
            -7.467, -4.891, -0.091,
            -7.472, -4.891, -0.117,
            -7.467, -4.891, -0.091,
            -7.487, -4.891, -0.100,
            -7.432, -4.721, -0.086,
            -7.421, -4.737, -0.067,
            -7.429, -4.737, -0.056,
            -7.432, -4.721, -0.086,
            -7.429, -4.737, -0.056,
            -7.452, -4.721, -0.064,
            -7.410, -4.621, -0.063,
            -7.398, -4.621, -0.045,
            -7.405, -4.621, -0.036,
            -7.410, -4.621, -0.063,
            -7.405, -4.621, -0.036,
            -7.425, -4.621, -0.046,
            -7.324, -4.275, 0.039,
            -7.312, -4.275, 0.023,
            -7.322, -4.259, 0.009,
            -7.324, -4.275, 0.039,
            -7.322, -4.259, 0.009,
            -7.341, -4.259, 0.032,
            -7.297, -4.128, 0.032,
            -7.277, -4.121, 0.053,
            -7.291, -4.121, 0.071,
            -7.297, -4.128, 0.032,
            -7.291, -4.121, 0.071,
            -7.313, -4.128, 0.055,
            -7.227, -3.851, 0.129,
            -7.210, -3.851, 0.106,
            -7.225, -3.843, 0.093,
            -7.227, -3.851, 0.129,
            -7.225, -3.843, 0.093,
            -7.243, -3.843, 0.117,
            -7.462, -4.891, -0.099,
            -7.472, -4.891, -0.117,
            -7.432, -4.721, -0.086,
            -7.462, -4.891, -0.099,
            -7.432, -4.721, -0.086,
            -7.421, -4.737, -0.067,
            -7.312, -4.275, 0.023,
            -7.398, -4.621, -0.045,
            -7.410, -4.621, -0.063,
            -7.312, -4.275, 0.023,
            -7.410, -4.621, -0.063,
            -7.322, -4.259, 0.009,
            -7.210, -3.851, 0.106,
            -7.277, -4.121, 0.053,
            -7.297, -4.128, 0.032,
            -7.210, -3.851, 0.106,
            -7.297, -4.128, 0.032,
            -7.225, -3.843, 0.093,
            -7.467, -4.891, -0.091,
            -7.429, -4.737, -0.056,
            -7.452, -4.721, -0.064,
            -7.467, -4.891, -0.091,
            -7.452, -4.721, -0.064,
            -7.487, -4.891, -0.100,
            -7.324, -4.275, 0.039,
            -7.341, -4.259, 0.032,
            -7.425, -4.621, -0.046,
            -7.324, -4.275, 0.039,
            -7.425, -4.621, -0.046,
            -7.405, -4.621, -0.036,
            -7.227, -3.851, 0.129,
            -7.243, -3.843, 0.117,
            -7.313, -4.128, 0.055,
            -7.227, -3.851, 0.129,
            -7.313, -4.128, 0.055,
            -7.291, -4.121, 0.071,
            -7.467, -4.891, -0.091,
            -7.462, -4.891, -0.099,
            -7.421, -4.737, -0.067,
            -7.467, -4.891, -0.091,
            -7.421, -4.737, -0.067,
            -7.429, -4.737, -0.056,
            -7.324, -4.275, 0.039,
            -7.405, -4.621, -0.036,
            -7.398, -4.621, -0.045,
            -7.324, -4.275, 0.039,
            -7.398, -4.621, -0.045,
            -7.312, -4.275, 0.023,
            -7.227, -3.851, 0.129,
            -7.291, -4.121, 0.071,
            -7.277, -4.121, 0.053,
            -7.227, -3.851, 0.129,
            -7.277, -4.121, 0.053,
            -7.210, -3.851, 0.106,
            -7.037, -3.484, -0.676,
            -8.768, -3.484, -0.676,
            -8.480, -4.513, -0.623,
            -7.037, -3.484, -0.676,
            -8.480, -4.513, -0.623,
            -7.344, -4.513, -0.623,
            -7.816, -5.124, -0.918,
            -7.907, -5.123, -0.926,
            -7.904, -4.057, -1.297,
            -7.816, -5.124, -0.918,
            -7.904, -4.057, -1.297,
            -7.794, -4.057, -1.287,
            -7.794, -3.782, -1.373,
            -7.903, -3.782, -1.383,
            -7.903, -3.520, -1.384,
            -7.794, -3.782, -1.373,
            -7.903, -3.520, -1.384,
            -7.727, -3.520, -1.366,
            -7.794, -4.057, -1.287,
            -7.794, -3.782, -1.373,
            -7.727, -3.520, -1.366,
            -7.816, -5.124, -0.918,
            -7.794, -4.057, -1.287,
            -7.727, -3.520, -1.366,
            -7.903, -3.520, -1.384,
            -7.903, -3.782, -1.383,
            -8.004, -3.782, -1.373,
            -8.004, -4.057, -1.288,
            -7.904, -4.057, -1.297,
            -7.907, -5.123, -0.926,
            -8.004, -4.057, -1.288,
            -7.907, -5.123, -0.926,
            -7.998, -5.124, -0.918,
            -8.004, -4.057, -1.288,
            -7.998, -5.124, -0.918,
            -8.088, -3.520, -1.366,
            -8.004, -3.782, -1.373,
            -8.004, -4.057, -1.288,
            -8.088, -3.520, -1.366,
            -7.903, -3.520, -1.384,
            -8.004, -3.782, -1.373,
            -8.088, -3.520, -1.366,
            -7.794, -3.782, -1.372,
            -7.903, -3.782, -1.383,
            -8.004, -3.782, -1.373,
            -8.004, -4.057, -1.288,
            -7.904, -4.057, -1.297,
            -7.794, -4.057, -1.287,
            -7.251, -3.519, -1.110,
            -7.136, -3.520, -0.975,
            -7.521, -5.124, -0.723,
            -7.251, -3.519, -1.110,
            -7.521, -5.124, -0.723,
            -7.576, -5.124, -0.789,
            -7.393, -3.520, -1.230,
            -7.251, -3.519, -1.110,
            -7.576, -5.124, -0.789,
            -7.393, -3.520, -1.230,
            -7.576, -5.124, -0.789,
            -7.649, -5.124, -0.849,
            -7.549, -3.520, -1.312,
            -7.393, -3.520, -1.230,
            -7.649, -5.124, -0.849,
            -7.549, -3.520, -1.312,
            -7.649, -5.124, -0.849,
            -7.729, -5.124, -0.892,
            -7.727, -3.520, -1.366,
            -7.549, -3.520, -1.312,
            -7.729, -5.124, -0.892,
            -7.727, -3.520, -1.366,
            -7.729, -5.124, -0.892,
            -7.816, -5.124, -0.918,
            -8.258, -3.520, -1.315,
            -8.088, -3.520, -1.366,
            -7.998, -5.124, -0.918,
            -8.258, -3.520, -1.315,
            -7.998, -5.124, -0.918,
            -8.085, -5.124, -0.892,
            -8.422, -3.520, -1.229,
            -8.258, -3.520, -1.315,
            -8.085, -5.124, -0.892,
            -8.422, -3.520, -1.229,
            -8.085, -5.124, -0.892,
            -8.165, -5.124, -0.849,
            -8.560, -3.520, -1.118,
            -8.422, -3.520, -1.229,
            -8.165, -5.124, -0.849,
            -8.560, -3.520, -1.118,
            -8.165, -5.124, -0.849,
            -8.233, -5.124, -0.794,
            -8.678, -3.520, -0.975,
            -8.560, -3.520, -1.118,
            -8.233, -5.124, -0.794,
            -8.678, -3.520, -0.975,
            -8.233, -5.124, -0.794,
            -8.294, -5.124, -0.722,
            -8.764, -3.520, -0.817,
            -8.678, -3.520, -0.975,
            -8.294, -5.124, -0.722,
            -8.764, -3.520, -0.817,
            -8.294, -5.124, -0.722,
            -8.336, -5.124, -0.643,
            -8.363, -5.124, -0.557,
            -8.816, -3.520, -0.646,
            -8.764, -3.520, -0.817,
            -8.363, -5.124, -0.557,
            -8.764, -3.520, -0.817,
            -8.336, -5.124, -0.643,
            -8.816, -3.520, -0.646,
            -8.363, -5.124, -0.557,
            -8.371, -5.124, -0.471,
            -8.816, -3.520, -0.646,
            -8.371, -5.124, -0.471,
            -8.834, -3.520, -0.471,
            -8.834, -3.520, -0.471,
            -8.371, -5.124, -0.471,
            -8.365, -5.119, -0.377,
            -8.834, -3.520, -0.471,
            -8.365, -5.119, -0.377,
            -8.816, -3.520, -0.288,
            -7.452, -5.124, -0.557,
            -7.478, -5.124, -0.643,
            -7.051, -3.520, -0.817,
            -7.452, -5.124, -0.557,
            -7.051, -3.520, -0.817,
            -6.998, -3.520, -0.646,
            -7.443, -5.123, -0.471,
            -7.452, -5.124, -0.557,
            -6.998, -3.520, -0.646,
            -7.443, -5.123, -0.471,
            -6.998, -3.520, -0.646,
            -6.982, -3.520, -0.463,
            -7.449, -5.119, -0.377,
            -7.443, -5.123, -0.471,
            -6.982, -3.520, -0.463,
            -7.449, -5.119, -0.377,
            -6.982, -3.520, -0.463,
            -6.991, -3.520, -0.288,
            -7.161, -2.588, -0.168,
            -7.546, -2.588, -0.168,
            -7.546, -2.758, -0.168,
            -7.161, -2.588, -0.168,
            -7.546, -2.758, -0.168,
            -7.161, -2.758, -0.168,
            -8.286, -2.588, -0.168,
            -8.655, -2.588, -0.168,
            -8.655, -2.758, -0.168,
            -8.286, -2.588, -0.168,
            -8.655, -2.758, -0.168,
               -8.286, -2.758, -0.168
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.882, -0.118, -0.456,
            -0.884, -0.119, -0.453,
            -0.659, -0.001, -0.752,
            -0.882, -0.118, -0.456,
            -0.659, -0.001, -0.752,
            -0.656, -0.000, -0.755,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.654, -0.006, 0.756,
            0.656, -0.005, 0.755,
            0.331, -0.112, 0.937,
            0.654, -0.006, 0.756,
            0.331, -0.112, 0.937,
            0.328, -0.112, 0.938,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.815, -0.292, 0.501,
            -0.721, -0.294, 0.627,
            -0.722, -0.294, 0.627,
            -0.815, -0.292, 0.501,
            -0.722, -0.294, 0.627,
            -0.816, -0.292, 0.500,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.456, -0.812, -0.366,
            0.485, -0.799, -0.356,
            0.446, -0.816, -0.368,
            0.456, -0.812, -0.366,
            0.446, -0.816, -0.368,
            0.430, -0.822, -0.373,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.509, 0.743, 0.435,
            -0.525, 0.734, 0.432,
            -0.508, 0.743, 0.436,
            -0.509, 0.743, 0.435,
            -0.508, 0.743, 0.436,
            -0.496, 0.750, 0.438,
            -0.212, -0.965, 0.155,
            -0.208, -0.966, 0.156,
            -0.213, -0.965, 0.155,
            -0.212, -0.965, 0.155,
            -0.213, -0.965, 0.155,
            -0.217, -0.964, 0.154,
            -0.288, 0.933, 0.215,
            -0.294, 0.931, 0.215,
            -0.285, 0.934, 0.215,
            -0.288, 0.933, 0.215,
            -0.285, 0.934, 0.215,
            -0.279, 0.936, 0.215,
            -0.832, -0.104, -0.545,
            -0.859, -0.112, -0.500,
            -0.856, -0.112, -0.504,
            -0.832, -0.104, -0.545,
            -0.856, -0.112, -0.504,
            -0.829, -0.103, -0.550,
            -0.821, -0.093, -0.563,
            -0.823, -0.094, -0.560,
            -0.773, -0.062, -0.631,
            -0.821, -0.093, -0.563,
            -0.773, -0.062, -0.631,
            -0.771, -0.061, -0.633,
            -0.736, -0.047, -0.675,
            -0.741, -0.050, -0.670,
            -0.677, -0.013, -0.736,
            -0.736, -0.047, -0.675,
            -0.677, -0.013, -0.736,
            -0.674, -0.011, -0.739,
            0.401, -0.111, 0.909,
            0.403, -0.111, 0.908,
            0.378, -0.114, 0.919,
            0.401, -0.111, 0.909,
            0.378, -0.114, 0.919,
            0.376, -0.115, 0.920,
            0.438, -0.090, 0.895,
            0.443, -0.088, 0.892,
            0.443, -0.088, 0.892,
            0.438, -0.090, 0.895,
            0.443, -0.088, 0.892,
            0.438, -0.090, 0.895,
            0.573, -0.040, 0.819,
            0.608, -0.023, 0.794,
            0.606, -0.024, 0.795,
            0.573, -0.040, 0.819,
            0.606, -0.024, 0.795,
            0.570, -0.042, 0.820,
            -0.766, -0.314, 0.561,
            -0.780, -0.315, 0.541,
            -0.779, -0.315, 0.542,
            -0.766, -0.314, 0.561,
            -0.779, -0.315, 0.542,
            -0.765, -0.314, 0.562,
            -0.759, -0.301, 0.578,
            -0.760, -0.301, 0.577,
            -0.736, -0.303, 0.605,
            -0.759, -0.301, 0.578,
            -0.736, -0.303, 0.605,
            -0.736, -0.303, 0.606,
            -0.763, -0.303, 0.571,
            -0.763, -0.303, 0.571,
            -0.770, -0.302, 0.563,
            -0.763, -0.303, 0.571,
            -0.770, -0.302, 0.563,
            -0.770, -0.302, 0.562,
            0.659, -0.001, -0.752,
            0.884, -0.119, -0.453,
            0.882, -0.118, -0.456,
            0.659, -0.001, -0.752,
            0.882, -0.118, -0.456,
            0.656, -0.000, -0.755,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.331, -0.112, 0.937,
            -0.656, -0.005, 0.755,
            -0.654, -0.006, 0.756,
            -0.331, -0.112, 0.937,
            -0.654, -0.006, 0.756,
            -0.329, -0.112, 0.938,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.722, -0.294, 0.627,
            0.721, -0.294, 0.627,
            0.815, -0.292, 0.501,
            0.722, -0.294, 0.627,
            0.815, -0.292, 0.501,
            0.816, -0.292, 0.500,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.446, -0.816, -0.368,
            -0.485, -0.799, -0.356,
            -0.456, -0.812, -0.366,
            -0.446, -0.816, -0.368,
            -0.456, -0.812, -0.366,
            -0.430, -0.822, -0.373,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.508, 0.743, 0.436,
            0.525, 0.734, 0.432,
            0.509, 0.743, 0.435,
            0.508, 0.743, 0.436,
            0.509, 0.743, 0.435,
            0.496, 0.750, 0.438,
            0.213, -0.965, 0.155,
            0.208, -0.966, 0.156,
            0.212, -0.965, 0.155,
            0.213, -0.965, 0.155,
            0.212, -0.965, 0.155,
            0.217, -0.964, 0.154,
            0.285, 0.934, 0.215,
            0.294, 0.931, 0.215,
            0.288, 0.933, 0.215,
            0.285, 0.934, 0.215,
            0.288, 0.933, 0.215,
            0.279, 0.936, 0.215,
            0.856, -0.112, -0.504,
            0.859, -0.112, -0.500,
            0.832, -0.104, -0.545,
            0.856, -0.112, -0.504,
            0.832, -0.104, -0.545,
            0.829, -0.103, -0.550,
            0.773, -0.062, -0.631,
            0.823, -0.094, -0.560,
            0.821, -0.093, -0.563,
            0.773, -0.062, -0.631,
            0.821, -0.093, -0.563,
            0.771, -0.061, -0.633,
            0.677, -0.013, -0.736,
            0.741, -0.050, -0.670,
            0.736, -0.047, -0.675,
            0.677, -0.013, -0.736,
            0.736, -0.047, -0.675,
            0.674, -0.011, -0.739,
            -0.378, -0.114, 0.919,
            -0.403, -0.111, 0.908,
            -0.401, -0.111, 0.909,
            -0.378, -0.114, 0.919,
            -0.401, -0.111, 0.909,
            -0.376, -0.115, 0.920,
            -0.443, -0.088, 0.892,
            -0.443, -0.088, 0.892,
            -0.438, -0.090, 0.895,
            -0.443, -0.088, 0.892,
            -0.438, -0.090, 0.895,
            -0.438, -0.090, 0.895,
            -0.606, -0.024, 0.795,
            -0.608, -0.023, 0.794,
            -0.573, -0.040, 0.819,
            -0.606, -0.024, 0.795,
            -0.573, -0.040, 0.819,
            -0.570, -0.042, 0.820,
            0.779, -0.315, 0.542,
            0.780, -0.315, 0.541,
            0.766, -0.314, 0.561,
            0.779, -0.315, 0.542,
            0.766, -0.314, 0.561,
            0.765, -0.314, 0.562,
            0.736, -0.303, 0.605,
            0.760, -0.301, 0.577,
            0.759, -0.301, 0.578,
            0.736, -0.303, 0.605,
            0.759, -0.301, 0.578,
            0.736, -0.303, 0.606,
            0.770, -0.302, 0.563,
            0.763, -0.303, 0.571,
            0.763, -0.303, 0.571,
            0.770, -0.302, 0.563,
            0.763, -0.303, 0.571,
            0.770, -0.302, 0.562,
            0.000, 0.052, 0.999,
            0.000, 0.052, 0.999,
            0.000, 0.052, 0.999,
            0.000, 0.052, 0.999,
            0.000, 0.052, 0.999,
            0.000, 0.052, 0.999,
            0.199, -0.301, -0.933,
            0.084, -0.328, -0.941,
            0.085, -0.328, -0.941,
            0.199, -0.301, -0.933,
            0.085, -0.328, -0.941,
            0.672, -0.253, -0.696,
            0.550, -0.123, -0.826,
            0.090, -0.004, -0.996,
            0.095, -0.001, -0.995,
            0.550, -0.123, -0.826,
            0.095, -0.001, -0.995,
            0.275, -0.158, -0.948,
            0.672, -0.253, -0.696,
            0.550, -0.123, -0.826,
            0.275, -0.158, -0.948,
            0.199, -0.301, -0.933,
            0.672, -0.253, -0.696,
            0.275, -0.158, -0.948,
            -0.094, -0.005, -0.996,
            -0.097, -0.004, -0.995,
            -0.486, -0.134, -0.864,
            -0.584, -0.268, -0.766,
            -0.091, -0.327, -0.941,
            -0.084, -0.327, -0.941,
            -0.584, -0.268, -0.766,
            -0.084, -0.327, -0.941,
            -0.198, -0.301, -0.933,
            -0.584, -0.268, -0.766,
            -0.198, -0.301, -0.933,
            -0.269, -0.165, -0.949,
            -0.486, -0.134, -0.864,
            -0.584, -0.268, -0.766,
            -0.269, -0.165, -0.949,
            -0.094, -0.005, -0.996,
            -0.486, -0.134, -0.864,
            -0.269, -0.165, -0.949,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            0.679, -0.274, -0.681,
            0.733, -0.274, -0.622,
            0.740, -0.273, -0.615,
            0.679, -0.274, -0.681,
            0.740, -0.273, -0.615,
            0.679, -0.275, -0.681,
            0.538, -0.275, -0.797,
            0.679, -0.274, -0.681,
            0.679, -0.275, -0.681,
            0.538, -0.275, -0.797,
            0.679, -0.275, -0.681,
            0.533, -0.275, -0.800,
            0.366, -0.274, -0.889,
            0.538, -0.275, -0.797,
            0.533, -0.275, -0.800,
            0.366, -0.274, -0.889,
            0.533, -0.275, -0.800,
            0.364, -0.275, -0.890,
            0.275, -0.158, -0.948,
            0.366, -0.274, -0.889,
            0.364, -0.275, -0.890,
            0.275, -0.158, -0.948,
            0.364, -0.275, -0.890,
            0.199, -0.301, -0.933,
            -0.363, -0.274, -0.890,
            -0.269, -0.165, -0.949,
            -0.198, -0.301, -0.933,
            -0.363, -0.274, -0.890,
            -0.198, -0.301, -0.933,
            -0.364, -0.275, -0.890,
            -0.529, -0.275, -0.803,
            -0.363, -0.274, -0.890,
            -0.364, -0.275, -0.890,
            -0.529, -0.275, -0.803,
            -0.364, -0.275, -0.890,
            -0.530, -0.275, -0.802,
            -0.676, -0.276, -0.683,
            -0.529, -0.275, -0.803,
            -0.530, -0.275, -0.802,
            -0.676, -0.276, -0.683,
            -0.530, -0.275, -0.802,
            -0.674, -0.275, -0.685,
            -0.796, -0.276, -0.538,
            -0.676, -0.276, -0.683,
            -0.674, -0.275, -0.685,
            -0.796, -0.276, -0.538,
            -0.674, -0.275, -0.685,
            -0.795, -0.276, -0.540,
            -0.886, -0.276, -0.371,
            -0.796, -0.276, -0.538,
            -0.795, -0.276, -0.540,
            -0.886, -0.276, -0.371,
            -0.795, -0.276, -0.540,
            -0.886, -0.276, -0.372,
            -0.942, -0.277, -0.190,
            -0.942, -0.277, -0.189,
            -0.886, -0.276, -0.371,
            -0.942, -0.277, -0.190,
            -0.886, -0.276, -0.371,
            -0.886, -0.276, -0.372,
            -0.942, -0.277, -0.189,
            -0.942, -0.277, -0.190,
            -0.961, -0.277, -0.011,
            -0.942, -0.277, -0.189,
            -0.961, -0.277, -0.011,
            -0.961, -0.277, -0.002,
            -0.961, -0.277, -0.002,
            -0.961, -0.277, -0.011,
            -0.958, -0.276, 0.078,
            -0.961, -0.277, -0.002,
            -0.958, -0.276, 0.078,
            -0.957, -0.275, 0.092,
            0.942, -0.277, -0.188,
            0.919, -0.275, -0.281,
            0.919, -0.276, -0.282,
            0.942, -0.277, -0.188,
            0.919, -0.276, -0.282,
            0.943, -0.277, -0.185,
            0.961, -0.277, -0.012,
            0.942, -0.277, -0.188,
            0.943, -0.277, -0.185,
            0.961, -0.277, -0.012,
            0.943, -0.277, -0.185,
            0.961, -0.277, -0.016,
            0.958, -0.277, 0.070,
            0.961, -0.277, -0.012,
            0.961, -0.277, -0.016,
            0.958, -0.277, 0.070,
            0.961, -0.277, -0.016,
            0.959, -0.278, 0.054,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
               0.000, 0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x6C6C6C,
            shininess: 39.397,
            ambient: 0x000000,
            side: THREE.FrontSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
