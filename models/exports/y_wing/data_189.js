function create_geometry_189(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.987, -404.124, 119.957,
            12.545, -404.246, 123.433,
            10.903, -404.354, 126.522,
            12.907, -404.100, 119.270,
            12.987, -404.124, 119.957,
            10.903, -404.354, 126.522,
            12.682, -404.078, 118.640,
            12.907, -404.100, 119.270,
            10.903, -404.354, 126.522,
            12.328, -404.059, 118.084,
            12.682, -404.078, 118.640,
            10.903, -404.354, 126.522,
            11.863, -404.043, 117.619,
            12.328, -404.059, 118.084,
            10.903, -404.354, 126.522,
            11.306, -404.030, 117.265,
            11.863, -404.043, 117.619,
            10.903, -404.354, 126.522,
            10.675, -404.022, 117.040,
            11.306, -404.030, 117.265,
            10.903, -404.354, 126.522,
            9.988, -404.020, 116.961,
            10.675, -404.022, 117.040,
            10.903, -404.354, 126.522,
            9.301, -404.022, 117.040,
            9.988, -404.020, 116.961,
            10.903, -404.354, 126.522,
            8.670, -404.030, 117.265,
            9.301, -404.022, 117.040,
            10.903, -404.354, 126.522,
            8.114, -404.043, 117.619,
            8.670, -404.030, 117.265,
            10.903, -404.354, 126.522,
            7.649, -404.059, 118.084,
            8.114, -404.043, 117.619,
            10.903, -404.354, 126.522,
            7.295, -404.078, 118.640,
            7.649, -404.059, 118.084,
            10.903, -404.354, 126.522,
            7.069, -404.100, 119.270,
            7.295, -404.078, 118.640,
            10.903, -404.354, 126.522,
            6.990, -404.124, 119.957,
            7.069, -404.100, 119.270,
            10.903, -404.354, 126.522,
            7.449, -404.243, 123.348,
            6.990, -404.124, 119.957,
            10.903, -404.354, 126.522,
            9.074, -404.354, 126.522,
            7.449, -404.243, 123.348,
            10.903, -404.354, 126.522,
            9.074, -404.354, 126.522,
            10.903, -404.354, 126.522,
            10.878, -404.361, 126.731,
            9.098, -404.361, 126.731,
            9.074, -404.354, 126.522,
            10.878, -404.361, 126.731,
            9.098, -404.361, 126.731,
            10.878, -404.361, 126.731,
            10.810, -404.368, 126.923,
            9.167, -404.368, 126.923,
            9.098, -404.361, 126.731,
            10.810, -404.368, 126.923,
            9.275, -404.374, 127.093,
            9.167, -404.368, 126.923,
            10.810, -404.368, 126.923,
            9.275, -404.374, 127.093,
            10.810, -404.368, 126.923,
            10.702, -404.374, 127.093,
            9.275, -404.374, 127.093,
            10.702, -404.374, 127.093,
            10.560, -404.378, 127.234,
            9.417, -404.378, 127.234,
            9.275, -404.374, 127.093,
            10.560, -404.378, 127.234,
            9.587, -404.382, 127.342,
            9.417, -404.378, 127.234,
            10.560, -404.378, 127.234,
            9.779, -404.385, 127.411,
            9.587, -404.382, 127.342,
            10.560, -404.378, 127.234,
            9.988, -404.385, 127.435,
            9.779, -404.385, 127.411,
            10.560, -404.378, 127.234,
            10.198, -404.385, 127.411,
            9.988, -404.385, 127.435,
            10.560, -404.378, 127.234,
            10.390, -404.382, 127.342,
            10.198, -404.385, 127.411,
            10.560, -404.378, 127.234,
            12.987, -402.606, 120.010,
            12.545, -402.728, 123.486,
            12.545, -404.246, 123.433,
            12.545, -404.246, 123.433,
            12.987, -404.124, 119.957,
            12.987, -402.606, 120.010,
            12.545, -402.728, 123.486,
            10.903, -402.836, 126.575,
            10.903, -404.354, 126.522,
            10.903, -404.354, 126.522,
            12.545, -404.246, 123.433,
            12.545, -402.728, 123.486,
            12.907, -402.583, 119.323,
            12.987, -402.606, 120.010,
            12.987, -404.124, 119.957,
            12.987, -404.124, 119.957,
            12.907, -404.100, 119.270,
            12.907, -402.583, 119.323,
            12.682, -402.560, 118.693,
            12.907, -402.583, 119.323,
            12.907, -404.100, 119.270,
            12.907, -404.100, 119.270,
            12.682, -404.078, 118.640,
            12.682, -402.560, 118.693,
            12.328, -402.541, 118.137,
            12.682, -402.560, 118.693,
            12.682, -404.078, 118.640,
            12.682, -404.078, 118.640,
            12.328, -404.059, 118.084,
            12.328, -402.541, 118.137,
            11.863, -402.525, 117.672,
            12.328, -402.541, 118.137,
            12.328, -404.059, 118.084,
            12.328, -404.059, 118.084,
            11.863, -404.043, 117.619,
            11.863, -402.525, 117.672,
            11.306, -402.512, 117.318,
            11.863, -402.525, 117.672,
            11.863, -404.043, 117.619,
            11.863, -404.043, 117.619,
            11.306, -404.030, 117.265,
            11.306, -402.512, 117.318,
            10.675, -402.505, 117.093,
            11.306, -402.512, 117.318,
            11.306, -404.030, 117.265,
            11.306, -404.030, 117.265,
            10.675, -404.022, 117.040,
            10.675, -402.505, 117.093,
            9.988, -402.502, 117.014,
            10.675, -402.505, 117.093,
            10.675, -404.022, 117.040,
            10.675, -404.022, 117.040,
            9.988, -404.020, 116.961,
            9.988, -402.502, 117.014,
            9.301, -402.505, 117.093,
            9.988, -402.502, 117.014,
            9.988, -404.020, 116.961,
            9.988, -404.020, 116.961,
            9.301, -404.022, 117.040,
            9.301, -402.505, 117.093,
            8.670, -402.512, 117.318,
            9.301, -402.505, 117.093,
            9.301, -404.022, 117.040,
            9.301, -404.022, 117.040,
            8.670, -404.030, 117.265,
            8.670, -402.512, 117.318,
            8.114, -402.525, 117.672,
            8.670, -402.512, 117.318,
            8.670, -404.030, 117.265,
            8.670, -404.030, 117.265,
            8.114, -404.043, 117.619,
            8.114, -402.525, 117.672,
            7.649, -402.541, 118.137,
            8.114, -402.525, 117.672,
            8.114, -404.043, 117.619,
            8.114, -404.043, 117.619,
            7.649, -404.059, 118.084,
            7.649, -402.541, 118.137,
            7.295, -402.560, 118.693,
            7.649, -402.541, 118.137,
            7.649, -404.059, 118.084,
            7.649, -404.059, 118.084,
            7.295, -404.078, 118.640,
            7.295, -402.560, 118.693,
            7.069, -402.583, 119.323,
            7.295, -402.560, 118.693,
            7.295, -404.078, 118.640,
            7.295, -404.078, 118.640,
            7.069, -404.100, 119.270,
            7.069, -402.583, 119.323,
            6.990, -402.606, 120.010,
            7.069, -402.583, 119.323,
            7.069, -404.100, 119.270,
            7.069, -404.100, 119.270,
            6.990, -404.124, 119.957,
            6.990, -402.606, 120.010,
            7.449, -402.725, 123.401,
            6.990, -402.606, 120.010,
            6.990, -404.124, 119.957,
            6.990, -404.124, 119.957,
            7.449, -404.243, 123.348,
            7.449, -402.725, 123.401,
            9.074, -402.836, 126.575,
            7.449, -402.725, 123.401,
            7.449, -404.243, 123.348,
            7.449, -404.243, 123.348,
            9.074, -404.354, 126.522,
            9.074, -402.836, 126.575,
            10.903, -402.836, 126.575,
            10.878, -402.843, 126.784,
            10.878, -404.361, 126.731,
            10.878, -404.361, 126.731,
            10.903, -404.354, 126.522,
            10.903, -402.836, 126.575,
            9.098, -402.843, 126.784,
            9.074, -402.836, 126.575,
            9.074, -404.354, 126.522,
            9.074, -404.354, 126.522,
            9.098, -404.361, 126.731,
            9.098, -402.843, 126.784,
            10.878, -402.843, 126.784,
            10.810, -402.850, 126.976,
            10.810, -404.368, 126.923,
            10.810, -404.368, 126.923,
            10.878, -404.361, 126.731,
            10.878, -402.843, 126.784,
            9.167, -402.850, 126.976,
            9.098, -402.843, 126.784,
            9.098, -404.361, 126.731,
            9.098, -404.361, 126.731,
            9.167, -404.368, 126.923,
            9.167, -402.850, 126.976,
            9.275, -402.856, 127.146,
            9.167, -402.850, 126.976,
            9.167, -404.368, 126.923,
            9.167, -404.368, 126.923,
            9.275, -404.374, 127.093,
            9.275, -402.856, 127.146,
            10.810, -402.850, 126.976,
            10.702, -402.856, 127.146,
            10.702, -404.374, 127.093,
            10.702, -404.374, 127.093,
            10.810, -404.368, 126.923,
            10.810, -402.850, 126.976,
            10.702, -402.856, 127.146,
            10.560, -402.861, 127.288,
            10.560, -404.378, 127.234,
            10.560, -404.378, 127.234,
            10.702, -404.374, 127.093,
            10.702, -402.856, 127.146,
            9.417, -402.861, 127.288,
            9.275, -402.856, 127.146,
            9.275, -404.374, 127.093,
            9.275, -404.374, 127.093,
            9.417, -404.378, 127.234,
            9.417, -402.861, 127.288,
            9.587, -402.864, 127.395,
            9.417, -402.861, 127.288,
            9.417, -404.378, 127.234,
            9.417, -404.378, 127.234,
            9.587, -404.382, 127.342,
            9.587, -402.864, 127.395,
            9.779, -402.867, 127.464,
            9.587, -402.864, 127.395,
            9.587, -404.382, 127.342,
            9.587, -404.382, 127.342,
            9.779, -404.385, 127.411,
            9.779, -402.867, 127.464,
            9.988, -402.868, 127.488,
            9.779, -402.867, 127.464,
            9.779, -404.385, 127.411,
            9.779, -404.385, 127.411,
            9.988, -404.385, 127.435,
            9.988, -402.868, 127.488,
            10.198, -402.867, 127.464,
            9.988, -402.868, 127.488,
            9.988, -404.385, 127.435,
            9.988, -404.385, 127.435,
            10.198, -404.385, 127.411,
            10.198, -402.867, 127.464,
            10.390, -402.864, 127.395,
            10.198, -402.867, 127.464,
            10.198, -404.385, 127.411,
            10.198, -404.385, 127.411,
            10.390, -404.382, 127.342,
            10.390, -402.864, 127.395,
            10.560, -402.861, 127.288,
            10.390, -402.864, 127.395,
            10.390, -404.382, 127.342,
            10.390, -404.382, 127.342,
            10.560, -404.378, 127.234,
               10.560, -402.861, 127.288
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            -0.000, -0.999, -0.036,
            -0.000, -0.999, -0.035,
            0.000, -0.999, -0.035,
            0.000, -0.999, -0.034,
            -0.000, -0.999, -0.036,
            0.000, -0.999, -0.035,
            -0.001, -0.999, -0.038,
            0.000, -0.999, -0.034,
            0.000, -0.999, -0.035,
            0.002, -0.999, -0.032,
            -0.001, -0.999, -0.038,
            0.000, -0.999, -0.035,
            0.992, -0.004, 0.126,
            0.992, -0.004, 0.126,
            0.992, -0.004, 0.126,
            0.992, -0.004, 0.126,
            0.992, -0.004, 0.126,
            0.992, -0.004, 0.126,
            0.883, -0.016, 0.469,
            0.883, -0.016, 0.469,
            0.883, -0.016, 0.469,
            0.883, -0.016, 0.469,
            0.883, -0.016, 0.469,
            0.883, -0.016, 0.469,
            0.993, 0.004, -0.115,
            0.993, 0.004, -0.115,
            0.993, 0.004, -0.115,
            0.993, 0.004, -0.115,
            0.993, 0.004, -0.115,
            0.993, 0.004, -0.115,
            0.942, 0.012, -0.337,
            0.942, 0.012, -0.337,
            0.942, 0.012, -0.337,
            0.942, 0.012, -0.337,
            0.942, 0.012, -0.337,
            0.942, 0.012, -0.337,
            0.844, 0.019, -0.536,
            0.844, 0.019, -0.536,
            0.844, 0.019, -0.536,
            0.844, 0.019, -0.536,
            0.844, 0.019, -0.536,
            0.844, 0.019, -0.536,
            0.707, 0.025, -0.707,
            0.707, 0.025, -0.707,
            0.707, 0.025, -0.707,
            0.707, 0.025, -0.707,
            0.707, 0.025, -0.707,
            0.707, 0.025, -0.707,
            0.537, 0.029, -0.843,
            0.537, 0.029, -0.843,
            0.537, 0.029, -0.843,
            0.537, 0.029, -0.843,
            0.537, 0.029, -0.843,
            0.537, 0.029, -0.843,
            0.337, 0.033, -0.941,
            0.337, 0.033, -0.941,
            0.337, 0.033, -0.941,
            0.337, 0.033, -0.941,
            0.337, 0.033, -0.941,
            0.337, 0.033, -0.941,
            0.115, 0.035, -0.993,
            0.115, 0.035, -0.993,
            0.115, 0.035, -0.993,
            0.115, 0.035, -0.993,
            0.115, 0.035, -0.993,
            0.115, 0.035, -0.993,
            -0.115, 0.035, -0.993,
            -0.115, 0.035, -0.993,
            -0.115, 0.035, -0.993,
            -0.115, 0.035, -0.993,
            -0.115, 0.035, -0.993,
            -0.115, 0.035, -0.993,
            -0.337, 0.033, -0.941,
            -0.337, 0.033, -0.941,
            -0.337, 0.033, -0.941,
            -0.337, 0.033, -0.941,
            -0.337, 0.033, -0.941,
            -0.337, 0.033, -0.941,
            -0.537, 0.029, -0.843,
            -0.537, 0.029, -0.843,
            -0.537, 0.029, -0.843,
            -0.537, 0.029, -0.843,
            -0.537, 0.029, -0.843,
            -0.537, 0.029, -0.843,
            -0.707, 0.025, -0.707,
            -0.707, 0.025, -0.707,
            -0.707, 0.025, -0.707,
            -0.707, 0.025, -0.707,
            -0.707, 0.025, -0.707,
            -0.707, 0.025, -0.707,
            -0.844, 0.019, -0.536,
            -0.844, 0.019, -0.536,
            -0.844, 0.019, -0.536,
            -0.844, 0.019, -0.536,
            -0.844, 0.019, -0.536,
            -0.844, 0.019, -0.536,
            -0.942, 0.012, -0.337,
            -0.942, 0.012, -0.337,
            -0.942, 0.012, -0.337,
            -0.942, 0.012, -0.337,
            -0.942, 0.012, -0.337,
            -0.942, 0.012, -0.337,
            -0.993, 0.004, -0.115,
            -0.993, 0.004, -0.115,
            -0.993, 0.004, -0.115,
            -0.993, 0.004, -0.115,
            -0.993, 0.004, -0.115,
            -0.993, 0.004, -0.115,
            -0.991, -0.005, 0.134,
            -0.991, -0.005, 0.134,
            -0.991, -0.005, 0.134,
            -0.991, -0.005, 0.134,
            -0.991, -0.005, 0.134,
            -0.991, -0.005, 0.134,
            -0.890, -0.016, 0.455,
            -0.890, -0.016, 0.455,
            -0.890, -0.016, 0.455,
            -0.890, -0.016, 0.455,
            -0.890, -0.016, 0.455,
            -0.890, -0.016, 0.455,
            0.993, -0.004, 0.115,
            0.993, -0.004, 0.115,
            0.993, -0.004, 0.115,
            0.993, -0.004, 0.115,
            0.993, -0.004, 0.115,
            0.993, -0.004, 0.115,
            -0.993, -0.004, 0.115,
            -0.993, -0.004, 0.115,
            -0.993, -0.004, 0.115,
            -0.993, -0.004, 0.115,
            -0.993, -0.004, 0.115,
            -0.993, -0.004, 0.115,
            0.942, -0.012, 0.337,
            0.942, -0.012, 0.337,
            0.942, -0.012, 0.337,
            0.942, -0.012, 0.337,
            0.942, -0.012, 0.337,
            0.942, -0.012, 0.337,
            -0.942, -0.012, 0.337,
            -0.942, -0.012, 0.337,
            -0.942, -0.012, 0.337,
            -0.942, -0.012, 0.337,
            -0.942, -0.012, 0.337,
            -0.942, -0.012, 0.337,
            -0.844, -0.019, 0.536,
            -0.844, -0.019, 0.536,
            -0.844, -0.019, 0.536,
            -0.844, -0.019, 0.536,
            -0.844, -0.019, 0.536,
            -0.844, -0.019, 0.536,
            0.844, -0.019, 0.536,
            0.844, -0.019, 0.536,
            0.844, -0.019, 0.536,
            0.844, -0.019, 0.536,
            0.844, -0.019, 0.536,
            0.844, -0.019, 0.536,
            0.707, -0.025, 0.707,
            0.707, -0.025, 0.707,
            0.707, -0.025, 0.707,
            0.707, -0.025, 0.707,
            0.707, -0.025, 0.707,
            0.707, -0.025, 0.707,
            -0.707, -0.025, 0.707,
            -0.707, -0.025, 0.707,
            -0.707, -0.025, 0.707,
            -0.707, -0.025, 0.707,
            -0.707, -0.025, 0.707,
            -0.707, -0.025, 0.707,
            -0.537, -0.029, 0.843,
            -0.537, -0.029, 0.843,
            -0.537, -0.029, 0.843,
            -0.537, -0.029, 0.843,
            -0.537, -0.029, 0.843,
            -0.537, -0.029, 0.843,
            -0.337, -0.033, 0.941,
            -0.337, -0.033, 0.941,
            -0.337, -0.033, 0.941,
            -0.337, -0.033, 0.941,
            -0.337, -0.033, 0.941,
            -0.337, -0.033, 0.941,
            -0.115, -0.035, 0.993,
            -0.115, -0.035, 0.993,
            -0.115, -0.035, 0.993,
            -0.115, -0.035, 0.993,
            -0.115, -0.035, 0.993,
            -0.115, -0.035, 0.993,
            0.115, -0.035, 0.993,
            0.115, -0.035, 0.993,
            0.115, -0.035, 0.993,
            0.115, -0.035, 0.993,
            0.115, -0.035, 0.993,
            0.115, -0.035, 0.993,
            0.337, -0.033, 0.941,
            0.337, -0.033, 0.941,
            0.337, -0.033, 0.941,
            0.337, -0.033, 0.941,
            0.337, -0.033, 0.941,
            0.337, -0.033, 0.941,
            0.537, -0.029, 0.843,
            0.537, -0.029, 0.843,
            0.537, -0.029, 0.843,
            0.537, -0.029, 0.843,
            0.537, -0.029, 0.843,
               0.537, -0.029, 0.843
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