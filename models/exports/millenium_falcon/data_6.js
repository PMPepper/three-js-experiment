function create_geometry_6(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -1.172, -6.641, -1.358,
            1.918, -6.641, -1.358,
            1.938, -6.635, -1.330,
            -1.172, -6.641, -1.358,
            1.938, -6.635, -1.330,
            -1.192, -6.635, -1.330,
            -1.135, -6.454, -1.639,
            -0.805, -6.140, -2.102,
            1.552, -6.140, -2.102,
            -1.135, -6.454, -1.639,
            1.552, -6.140, -2.102,
            1.881, -6.454, -1.639,
            -1.135, -6.454, -1.639,
            1.881, -6.454, -1.639,
            1.918, -6.641, -1.358,
            -1.135, -6.454, -1.639,
            1.918, -6.641, -1.358,
            -1.172, -6.641, -1.358,
            -0.814, -6.112, -2.108,
            0.784, -4.102, -2.275,
            1.561, -6.112, -2.108,
            -0.814, -6.112, -2.108,
            -0.031, -4.102, -2.275,
            0.784, -4.102, -2.275,
            0.784, -4.102, -2.275,
            0.791, -2.920, -2.378,
            1.561, -6.112, -2.108,
            0.791, -2.920, -2.378,
            1.786, 1.185, -2.714,
            1.561, -6.112, -2.108,
            0.791, -2.920, -2.378,
            -0.035, -2.920, -2.378,
            1.786, 1.185, -2.714,
            -0.035, -2.920, -2.378,
            -1.020, 1.185, -2.714,
            1.786, 1.185, -2.714,
            -0.035, -2.920, -2.378,
            -0.814, -6.112, -2.108,
            -1.020, 1.185, -2.714,
            -0.035, -2.920, -2.378,
            -0.031, -4.102, -2.275,
            -0.814, -6.112, -2.108,
            1.786, 1.185, -2.714,
            1.999, 1.525, -2.327,
            1.897, -6.433, -1.634,
            1.786, 1.185, -2.714,
            1.897, -6.433, -1.634,
            1.561, -6.112, -2.108,
            1.999, 1.525, -2.327,
            2.050, 1.633, -1.931,
            1.938, -6.635, -1.330,
            1.999, 1.525, -2.327,
            1.938, -6.635, -1.330,
            1.897, -6.433, -1.634,
            -1.151, -6.433, -1.634,
            -1.231, 1.525, -2.327,
            -1.020, 1.185, -2.714,
            -1.151, -6.433, -1.634,
            -1.020, 1.185, -2.714,
            -0.814, -6.112, -2.108,
            -1.231, 1.525, -2.327,
            -1.151, -6.433, -1.634,
            -1.192, -6.635, -1.330,
            -1.231, 1.525, -2.327,
            -1.192, -6.635, -1.330,
            -1.283, 1.633, -1.931,
            -1.192, -6.635, -1.330,
            -0.106, -4.154, -1.366,
            -1.283, 1.633, -1.931,
            1.938, -6.635, -1.330,
            2.050, 1.633, -1.931,
            0.858, -4.154, -1.366,
            -1.192, -6.635, -1.330,
            -0.800, -6.666, -1.339,
            -0.633, -6.666, -1.339,
            -1.192, -6.635, -1.330,
            -0.633, -6.666, -1.339,
            -0.095, -6.662, -1.314,
            -1.192, -6.635, -1.330,
            -0.095, -6.662, -1.314,
            -0.106, -4.154, -1.366,
            0.841, -6.662, -1.314,
            1.378, -6.666, -1.339,
            1.546, -6.666, -1.339,
            0.841, -6.662, -1.314,
            1.546, -6.666, -1.339,
            1.938, -6.635, -1.330,
            0.841, -6.662, -1.314,
            1.938, -6.635, -1.330,
            0.858, -4.154, -1.366,
            0.714, -4.111, -1.066,
            0.701, -6.501, -1.017,
            0.841, -6.662, -1.314,
            0.714, -4.111, -1.066,
            0.841, -6.662, -1.314,
            0.858, -4.154, -1.366,
            -0.106, -4.154, -1.366,
            -0.095, -6.662, -1.314,
            0.045, -6.501, -1.017,
            -0.106, -4.154, -1.366,
            0.045, -6.501, -1.017,
            0.038, -4.111, -1.066,
            0.045, -6.501, -1.017,
            0.701, -6.501, -1.017,
            0.714, -4.111, -1.066,
            0.045, -6.501, -1.017,
            0.714, -4.111, -1.066,
               0.038, -4.111, -1.066
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.979, 0.203,
            0.000, -0.979, 0.203,
            0.000, -0.979, 0.203,
            0.000, -0.979, 0.203,
            0.000, -0.979, 0.203,
            0.000, -0.979, 0.203,
            0.000, -0.828, -0.561,
            0.000, -0.828, -0.561,
            -0.000, -0.828, -0.561,
            0.000, -0.828, -0.561,
            0.000, -0.828, -0.561,
            -0.000, -0.828, -0.561,
            0.000, -0.833, -0.553,
            -0.000, -0.833, -0.553,
            0.000, -0.833, -0.553,
            0.000, -0.833, -0.553,
            -0.000, -0.833, -0.553,
            0.000, -0.833, -0.553,
            0.000, -0.083, -0.997,
            0.000, -0.083, -0.997,
            -0.000, -0.083, -0.997,
            0.000, -0.083, -0.997,
            0.000, -0.083, -0.997,
            -0.000, -0.083, -0.997,
            -0.009, -0.086, -0.996,
            -0.009, -0.086, -0.996,
            -0.009, -0.086, -0.996,
            0.006, -0.083, -0.997,
            0.006, -0.083, -0.997,
            0.006, -0.083, -0.997,
            -0.000, -0.082, -0.997,
            0.000, -0.082, -0.997,
            0.000, -0.082, -0.997,
            0.000, -0.082, -0.997,
            -0.000, -0.082, -0.997,
            -0.000, -0.082, -0.997,
            -0.006, -0.083, -0.997,
            -0.006, -0.083, -0.997,
            -0.006, -0.083, -0.997,
            0.009, -0.087, -0.996,
            0.009, -0.087, -0.996,
            0.009, -0.087, -0.996,
            0.893, -0.050, -0.447,
            0.893, -0.050, -0.447,
            0.893, -0.050, -0.447,
            0.788, -0.075, -0.611,
            0.788, -0.075, -0.611,
            0.788, -0.075, -0.611,
            0.992, -0.022, -0.123,
            0.992, -0.022, -0.123,
            0.992, -0.022, -0.123,
            0.989, -0.025, -0.148,
            0.989, -0.025, -0.148,
            0.989, -0.025, -0.148,
            -0.893, -0.048, -0.447,
            -0.893, -0.048, -0.447,
            -0.893, -0.048, -0.447,
            -0.788, -0.073, -0.611,
            -0.788, -0.073, -0.611,
            -0.788, -0.073, -0.611,
            -0.989, -0.023, -0.148,
            -0.989, -0.023, -0.148,
            -0.989, -0.023, -0.148,
            -0.992, -0.020, -0.123,
            -0.992, -0.020, -0.123,
            -0.992, -0.020, -0.123,
            -0.128, 0.070, 0.989,
            -0.128, 0.070, 0.989,
            -0.128, 0.070, 0.989,
            0.128, 0.070, 0.989,
            0.128, 0.070, 0.989,
            0.128, 0.070, 0.989,
            0.000, -0.294, 0.956,
            0.000, -0.294, 0.956,
            0.000, -0.294, 0.956,
            -0.028, -0.721, 0.692,
            -0.028, -0.721, 0.692,
            -0.028, -0.721, 0.692,
            -0.014, 0.021, 1.000,
            -0.014, 0.021, 1.000,
            -0.014, 0.021, 1.000,
            0.000, -0.990, 0.138,
            0.000, -0.990, 0.138,
            0.000, -0.990, 0.138,
            0.026, -0.584, 0.811,
            0.026, -0.584, 0.811,
            0.026, -0.584, 0.811,
            0.014, 0.021, 1.000,
            0.014, 0.021, 1.000,
            0.014, 0.021, 1.000,
            0.906, 0.004, 0.424,
            0.906, 0.004, 0.424,
            0.906, 0.004, 0.424,
            0.901, 0.003, 0.434,
            0.901, 0.003, 0.434,
            0.901, 0.003, 0.434,
            -0.905, 0.005, 0.424,
            -0.905, 0.005, 0.424,
            -0.905, 0.005, 0.424,
            -0.901, 0.007, 0.433,
            -0.901, 0.007, 0.433,
            -0.901, 0.007, 0.433,
            -0.000, 0.020, 1.000,
            0.000, 0.020, 1.000,
            0.000, 0.020, 1.000,
            0.000, 0.020, 1.000,
            0.000, 0.020, 1.000,
               -0.000, 0.020, 1.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xCCCCD3,
            shininess: 39.397,
            ambient: 0x000000,
            side: THREE.FrontSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}