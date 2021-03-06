function create_geometry_46(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            12.160, -493.911, 83.012,
            12.276, -494.327, 83.515,
            13.684, -493.911, 83.012,
            12.276, -494.327, 83.515,
            12.607, -494.679, 83.942,
            13.684, -493.911, 83.012,
            12.607, -494.679, 83.942,
            13.101, -494.915, 84.227,
            13.684, -493.911, 83.012,
            13.101, -494.915, 84.227,
            13.684, -494.997, 84.327,
            13.684, -493.911, 83.012,
            13.684, -494.997, 84.327,
            14.268, -494.915, 84.227,
            13.684, -493.911, 83.012,
            14.268, -494.915, 84.227,
            14.762, -494.679, 83.942,
            13.684, -493.911, 83.012,
            14.762, -494.679, 83.942,
            15.093, -494.327, 83.515,
            13.684, -493.911, 83.012,
            15.093, -494.327, 83.515,
            15.209, -493.911, 83.012,
            13.684, -493.911, 83.012,
            15.209, -493.911, 83.012,
            15.093, -493.495, 82.510,
            13.684, -493.911, 83.012,
            15.093, -493.495, 82.510,
            14.762, -491.283, 81.741,
            13.684, -493.911, 83.012,
            14.762, -491.283, 81.741,
            14.268, -491.048, 81.456,
            13.684, -493.911, 83.012,
            14.268, -491.048, 81.456,
            13.684, -490.965, 81.356,
            13.684, -493.911, 83.012,
            13.684, -490.965, 81.356,
            13.101, -491.048, 81.456,
            13.684, -493.911, 83.012,
            13.101, -491.048, 81.456,
            12.607, -491.283, 81.741,
            13.684, -493.911, 83.012,
            12.607, -491.283, 81.741,
            12.276, -493.495, 82.510,
            13.684, -493.911, 83.012,
            12.276, -493.495, 82.510,
            12.160, -493.911, 83.012,
            13.684, -493.911, 83.012,
            13.057, -506.856, 78.513,
            13.108, -507.317, 78.667,
            12.160, -493.911, 83.012,
            13.108, -507.317, 78.667,
            12.276, -494.327, 83.515,
            12.160, -493.911, 83.012,
            13.108, -507.317, 78.667,
            13.255, -507.708, 78.798,
            12.276, -494.327, 83.515,
            13.255, -507.708, 78.798,
            12.607, -494.679, 83.942,
            12.276, -494.327, 83.515,
            13.255, -507.708, 78.798,
            13.475, -507.969, 78.885,
            12.607, -494.679, 83.942,
            13.475, -507.969, 78.885,
            13.101, -494.915, 84.227,
            12.607, -494.679, 83.942,
            13.475, -507.969, 78.885,
            13.734, -508.061, 78.916,
            13.101, -494.915, 84.227,
            13.734, -508.061, 78.916,
            13.684, -494.997, 84.327,
            13.101, -494.915, 84.227,
            13.734, -508.061, 78.916,
            13.994, -507.969, 78.886,
            13.684, -494.997, 84.327,
            13.994, -507.969, 78.886,
            14.268, -494.915, 84.227,
            13.684, -494.997, 84.327,
            13.994, -507.969, 78.886,
            14.213, -507.708, 78.798,
            14.268, -494.915, 84.227,
            14.213, -507.708, 78.798,
            14.762, -494.679, 83.942,
            14.268, -494.915, 84.227,
            14.213, -507.708, 78.798,
            14.360, -507.317, 78.667,
            14.762, -494.679, 83.942,
            14.360, -507.317, 78.667,
            15.093, -494.327, 83.515,
            14.762, -494.679, 83.942,
            14.360, -507.317, 78.667,
            14.412, -506.856, 78.513,
            15.093, -494.327, 83.515,
            14.412, -506.856, 78.513,
            15.209, -493.911, 83.012,
            15.093, -494.327, 83.515,
            14.412, -506.856, 78.513,
            14.360, -506.395, 78.359,
            15.209, -493.911, 83.012,
            14.360, -506.395, 78.359,
            15.093, -493.495, 82.510,
            15.209, -493.911, 83.012,
            14.360, -506.395, 78.359,
            14.213, -506.004, 78.228,
            15.093, -493.495, 82.510,
            14.213, -506.004, 78.228,
            14.762, -491.283, 81.741,
            15.093, -493.495, 82.510,
            13.108, -506.395, 78.359,
            12.276, -493.495, 82.510,
            12.607, -491.283, 81.741,
            13.108, -506.395, 78.359,
            13.057, -506.856, 78.513,
            12.276, -493.495, 82.510,
            13.057, -506.856, 78.513,
            12.160, -493.911, 83.012,
               12.276, -493.495, 82.510
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -0.771, -0.637,
            -0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            -0.000, -0.771, -0.637,
            0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            0.000, -0.771, -0.637,
            -0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            -0.000, -0.771, -0.637,
            -0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            -0.000, -0.771, -0.637,
            0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            0.000, -0.771, -0.637,
            -0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            -0.000, -0.771, -0.637,
            -0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            -0.000, -0.771, -0.637,
            0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            0.000, -0.771, -0.637,
            0.133, -0.548, -0.826,
            -0.000, -0.652, -0.758,
            0.133, -0.548, -0.826,
            -0.142, -0.478, -0.867,
            -0.000, -0.652, -0.758,
            -0.142, -0.478, -0.867,
            -0.148, -0.495, -0.856,
            -0.000, -0.652, -0.758,
            -0.148, -0.495, -0.856,
            0.000, -0.490, -0.872,
            -0.000, -0.652, -0.758,
            0.000, -0.490, -0.872,
            0.148, -0.495, -0.856,
            -0.000, -0.652, -0.758,
            0.148, -0.495, -0.856,
            0.142, -0.478, -0.867,
            -0.000, -0.652, -0.758,
            0.142, -0.478, -0.867,
            -0.133, -0.548, -0.826,
            -0.000, -0.652, -0.758,
            -0.133, -0.548, -0.826,
            -0.000, -0.771, -0.637,
            -0.000, -0.652, -0.758,
            -0.998, 0.067, 0.006,
            -0.928, 0.182, -0.326,
            -0.996, 0.039, 0.084,
            -0.928, 0.182, -0.326,
            -0.949, 0.161, -0.272,
            -0.996, 0.039, 0.084,
            -0.928, 0.182, -0.326,
            -0.717, 0.287, -0.635,
            -0.949, 0.161, -0.272,
            -0.717, 0.287, -0.635,
            -0.754, 0.273, -0.598,
            -0.949, 0.161, -0.272,
            -0.717, 0.287, -0.635,
            -0.380, 0.361, -0.852,
            -0.754, 0.273, -0.598,
            -0.380, 0.361, -0.852,
            -0.421, 0.353, -0.835,
            -0.754, 0.273, -0.598,
            -0.380, 0.361, -0.852,
            0.001, 0.383, -0.924,
            -0.421, 0.353, -0.835,
            0.001, 0.383, -0.924,
            -0.000, 0.383, -0.924,
            -0.421, 0.353, -0.835,
            0.001, 0.383, -0.924,
            0.379, 0.356, -0.854,
            -0.000, 0.383, -0.924,
            0.379, 0.356, -0.854,
            0.421, 0.352, -0.836,
            -0.000, 0.383, -0.924,
            0.379, 0.356, -0.854,
            0.713, 0.281, -0.642,
            0.421, 0.352, -0.836,
            0.713, 0.281, -0.642,
            0.753, 0.270, -0.600,
            0.421, 0.352, -0.836,
            0.713, 0.281, -0.642,
            0.924, 0.176, -0.340,
            0.753, 0.270, -0.600,
            0.924, 0.176, -0.340,
            0.948, 0.157, -0.276,
            0.753, 0.270, -0.600,
            0.924, 0.176, -0.340,
            0.998, 0.062, -0.009,
            0.948, 0.157, -0.276,
            0.998, 0.062, -0.009,
            0.996, 0.034, 0.079,
            0.948, 0.157, -0.276,
            0.998, 0.062, -0.009,
            0.947, -0.050, 0.318,
            0.996, 0.034, 0.079,
            0.947, -0.050, 0.318,
            0.961, -0.030, 0.276,
            0.996, 0.034, 0.079,
            0.947, -0.050, 0.318,
            0.834, -0.125, 0.537,
            0.961, -0.030, 0.276,
            0.834, -0.125, 0.537,
            0.952, -0.037, 0.303,
            0.961, -0.030, 0.276,
            -0.965, -0.022, 0.261,
            -0.961, -0.027, 0.276,
            -0.952, -0.036, 0.304,
            -0.965, -0.022, 0.261,
            -0.998, 0.067, 0.006,
            -0.961, -0.027, 0.276,
            -0.998, 0.067, 0.006,
            -0.996, 0.039, 0.084,
               -0.961, -0.027, 0.276
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
