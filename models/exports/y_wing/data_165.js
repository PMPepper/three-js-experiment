function create_geometry_165(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -14.119, -493.911, 83.012,
            -12.711, -494.327, 83.515,
            -12.595, -493.911, 83.012,
            -14.119, -493.911, 83.012,
            -13.041, -494.679, 83.942,
            -12.711, -494.327, 83.515,
            -14.119, -493.911, 83.012,
            -13.536, -494.915, 84.226,
            -13.041, -494.679, 83.942,
            -14.119, -493.911, 83.012,
            -14.119, -494.997, 84.326,
            -13.536, -494.915, 84.226,
            -14.119, -493.911, 83.012,
            -14.702, -494.915, 84.226,
            -14.119, -494.997, 84.326,
            -14.119, -493.911, 83.012,
            -15.197, -494.679, 83.942,
            -14.702, -494.915, 84.226,
            -14.119, -493.911, 83.012,
            -15.527, -494.327, 83.515,
            -15.197, -494.679, 83.942,
            -14.119, -493.911, 83.012,
            -15.643, -493.911, 83.012,
            -15.527, -494.327, 83.515,
            -14.119, -493.911, 83.012,
            -15.527, -493.495, 82.510,
            -15.643, -493.911, 83.012,
            -14.119, -493.911, 83.012,
            -15.197, -491.283, 81.741,
            -15.527, -493.495, 82.510,
            -14.119, -493.911, 83.012,
            -14.702, -491.048, 81.456,
            -15.197, -491.283, 81.741,
            -14.119, -493.911, 83.012,
            -14.119, -490.965, 81.356,
            -14.702, -491.048, 81.456,
            -14.119, -493.911, 83.012,
            -13.536, -491.048, 81.456,
            -14.119, -490.965, 81.356,
            -14.119, -493.911, 83.012,
            -13.041, -491.283, 81.741,
            -13.536, -491.048, 81.456,
            -14.119, -493.911, 83.012,
            -12.711, -493.495, 82.510,
            -13.041, -491.283, 81.741,
            -14.119, -493.911, 83.012,
            -12.595, -493.911, 83.012,
            -12.711, -493.495, 82.510,
            -12.595, -493.911, 83.012,
            -13.543, -507.317, 78.667,
            -13.492, -506.856, 78.513,
            -12.595, -493.911, 83.012,
            -12.711, -494.327, 83.515,
            -13.543, -507.317, 78.667,
            -12.711, -494.327, 83.515,
            -13.690, -507.708, 78.798,
            -13.543, -507.317, 78.667,
            -12.711, -494.327, 83.515,
            -13.041, -494.679, 83.942,
            -13.690, -507.708, 78.798,
            -13.041, -494.679, 83.942,
            -13.910, -507.969, 78.885,
            -13.690, -507.708, 78.798,
            -13.041, -494.679, 83.942,
            -13.536, -494.915, 84.226,
            -13.910, -507.969, 78.885,
            -13.536, -494.915, 84.226,
            -14.169, -508.061, 78.916,
            -13.910, -507.969, 78.885,
            -13.536, -494.915, 84.226,
            -14.119, -494.997, 84.326,
            -14.169, -508.061, 78.916,
            -14.119, -494.997, 84.326,
            -14.428, -507.969, 78.885,
            -14.169, -508.061, 78.916,
            -14.119, -494.997, 84.326,
            -14.702, -494.915, 84.226,
            -14.428, -507.969, 78.885,
            -14.702, -494.915, 84.226,
            -14.648, -507.708, 78.798,
            -14.428, -507.969, 78.885,
            -14.702, -494.915, 84.226,
            -15.197, -494.679, 83.942,
            -14.648, -507.708, 78.798,
            -15.197, -494.679, 83.942,
            -14.795, -507.317, 78.667,
            -14.648, -507.708, 78.798,
            -15.197, -494.679, 83.942,
            -15.527, -494.327, 83.515,
            -14.795, -507.317, 78.667,
            -15.527, -494.327, 83.515,
            -14.846, -506.856, 78.513,
            -14.795, -507.317, 78.667,
            -15.527, -494.327, 83.515,
            -15.643, -493.911, 83.012,
            -14.846, -506.856, 78.513,
            -15.643, -493.911, 83.012,
            -14.795, -506.395, 78.359,
            -14.846, -506.856, 78.513,
            -15.643, -493.911, 83.012,
            -15.527, -493.495, 82.510,
            -14.795, -506.395, 78.359,
            -15.527, -493.495, 82.510,
            -14.648, -506.004, 78.228,
            -14.795, -506.395, 78.359,
            -15.527, -493.495, 82.510,
            -15.197, -491.283, 81.741,
            -14.648, -506.004, 78.228,
            -13.041, -491.283, 81.741,
            -12.711, -493.495, 82.510,
            -13.543, -506.395, 78.359,
            -12.711, -493.495, 82.510,
            -13.492, -506.856, 78.513,
            -13.543, -506.395, 78.359,
            -12.711, -493.495, 82.510,
            -12.595, -493.911, 83.012,
               -13.492, -506.856, 78.513
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 0.652, 0.758,
            0.000, 0.771, 0.637,
            0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            -0.000, 0.771, 0.637,
            0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            0.000, 0.771, 0.637,
            -0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            -0.000, 0.771, 0.637,
            0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            -0.000, 0.771, 0.637,
            -0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            0.000, 0.771, 0.637,
            -0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            -0.000, 0.771, 0.637,
            0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            0.000, 0.771, 0.637,
            -0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            -0.133, 0.548, 0.826,
            0.000, 0.771, 0.637,
            -0.000, 0.652, 0.758,
            0.142, 0.478, 0.867,
            -0.133, 0.548, 0.826,
            -0.000, 0.652, 0.758,
            0.148, 0.495, 0.856,
            0.142, 0.478, 0.867,
            -0.000, 0.652, 0.758,
            -0.000, 0.490, 0.872,
            0.148, 0.495, 0.856,
            -0.000, 0.652, 0.758,
            -0.148, 0.495, 0.856,
            -0.000, 0.490, 0.872,
            -0.000, 0.652, 0.758,
            -0.142, 0.478, 0.867,
            -0.148, 0.495, 0.856,
            -0.000, 0.652, 0.758,
            0.133, 0.548, 0.826,
            -0.142, 0.478, 0.867,
            -0.000, 0.652, 0.758,
            0.000, 0.771, 0.637,
            0.133, 0.548, 0.826,
            0.996, -0.039, -0.084,
            0.928, -0.182, 0.326,
            0.998, -0.067, -0.006,
            0.996, -0.039, -0.084,
            0.949, -0.161, 0.272,
            0.928, -0.182, 0.326,
            0.949, -0.161, 0.272,
            0.717, -0.287, 0.635,
            0.928, -0.182, 0.326,
            0.949, -0.161, 0.272,
            0.754, -0.273, 0.598,
            0.717, -0.287, 0.635,
            0.754, -0.273, 0.598,
            0.380, -0.361, 0.852,
            0.717, -0.287, 0.635,
            0.754, -0.273, 0.598,
            0.421, -0.353, 0.835,
            0.380, -0.361, 0.852,
            0.421, -0.353, 0.835,
            -0.001, -0.383, 0.924,
            0.380, -0.361, 0.852,
            0.421, -0.353, 0.835,
            0.000, -0.383, 0.924,
            -0.001, -0.383, 0.924,
            0.000, -0.383, 0.924,
            -0.379, -0.356, 0.854,
            -0.001, -0.383, 0.924,
            0.000, -0.383, 0.924,
            -0.421, -0.352, 0.836,
            -0.379, -0.356, 0.854,
            -0.421, -0.352, 0.836,
            -0.713, -0.281, 0.642,
            -0.379, -0.356, 0.854,
            -0.421, -0.352, 0.836,
            -0.753, -0.270, 0.600,
            -0.713, -0.281, 0.642,
            -0.753, -0.270, 0.600,
            -0.924, -0.176, 0.340,
            -0.713, -0.281, 0.642,
            -0.753, -0.270, 0.600,
            -0.948, -0.157, 0.276,
            -0.924, -0.176, 0.340,
            -0.948, -0.157, 0.276,
            -0.998, -0.062, 0.009,
            -0.924, -0.176, 0.340,
            -0.948, -0.157, 0.276,
            -0.996, -0.034, -0.079,
            -0.998, -0.062, 0.009,
            -0.996, -0.034, -0.079,
            -0.947, 0.050, -0.318,
            -0.998, -0.062, 0.009,
            -0.996, -0.034, -0.079,
            -0.961, 0.030, -0.276,
            -0.947, 0.050, -0.318,
            -0.961, 0.030, -0.276,
            -0.834, 0.125, -0.537,
            -0.947, 0.050, -0.318,
            -0.961, 0.030, -0.276,
            -0.952, 0.037, -0.303,
            -0.834, 0.125, -0.537,
            0.952, 0.036, -0.304,
            0.961, 0.027, -0.276,
            0.965, 0.022, -0.261,
            0.961, 0.027, -0.276,
            0.998, -0.067, -0.006,
            0.965, 0.022, -0.261,
            0.961, 0.027, -0.276,
            0.996, -0.039, -0.084,
               0.998, -0.067, -0.006
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