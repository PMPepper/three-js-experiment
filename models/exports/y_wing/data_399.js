function create_geometry_399(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            84.273, -106.566, -40.792,
            127.151, -70.421, -40.792,
            84.516, -107.624, -39.552,
            127.151, -70.421, -40.792,
            127.966, -70.997, -39.552,
            84.516, -107.624, -39.552,
            127.586, 5.227, -40.792,
            85.189, 22.968, -40.792,
            128.408, 5.995, -39.552,
            85.189, 22.968, -40.792,
            85.318, 24.025, -39.552,
            128.408, 5.995, -39.552,
            85.189, 22.968, -40.792,
            -85.290, 22.968, -40.792,
            85.318, 24.025, -39.552,
            -85.290, 22.968, -40.792,
            -85.401, 24.025, -39.552,
            85.318, 24.025, -39.552,
            -85.290, 22.968, -40.792,
            -127.182, 8.007, -40.792,
            -85.401, 24.025, -39.552,
            -127.182, 8.007, -40.792,
            -127.999, 8.812, -39.552,
            -85.401, 24.025, -39.552,
            -127.182, -70.373, -40.792,
            -85.556, -106.638, -40.792,
            -127.999, -70.935, -39.552,
            -85.556, -106.638, -40.792,
            -85.806, -107.695, -39.552,
            -127.999, -70.935, -39.552,
            -85.556, -106.638, -40.792,
            84.273, -106.566, -40.792,
            -85.806, -107.695, -39.552,
            84.273, -106.566, -40.792,
            84.516, -107.624, -39.552,
            -85.806, -107.695, -39.552,
            84.516, -107.624, -39.552,
            127.966, -70.997, -39.552,
            84.516, -107.624, -23.654,
            127.966, -70.997, -39.552,
            127.966, -70.997, -23.654,
            84.516, -107.624, -23.654,
            128.408, 5.995, -39.552,
            85.318, 24.025, -39.552,
            128.408, 5.995, -23.654,
            85.318, 24.025, -39.552,
            85.318, 24.025, -23.654,
            128.408, 5.995, -23.654,
            85.318, 24.025, -39.552,
            -85.401, 24.025, -39.552,
            85.318, 24.025, -23.654,
            -85.401, 24.025, -39.552,
            -85.401, 24.025, -23.654,
            85.318, 24.025, -23.654,
            -85.401, 24.025, -39.552,
            -127.999, 8.812, -39.552,
            -85.401, 24.025, -23.654,
            -127.999, 8.812, -39.552,
            -127.999, 8.812, -23.654,
            -85.401, 24.025, -23.654,
            -127.999, -70.935, -39.552,
            -85.806, -107.695, -39.552,
            -127.999, -70.935, -23.654,
            -85.806, -107.695, -39.552,
            -85.806, -107.695, -23.654,
            -127.999, -70.935, -23.654,
            -85.806, -107.695, -39.552,
            84.516, -107.624, -39.552,
            -85.806, -107.695, -23.654,
            84.516, -107.624, -39.552,
            84.516, -107.624, -23.654,
            -85.806, -107.695, -23.654,
            84.516, -107.624, -23.654,
            127.966, -70.997, -23.654,
            84.273, -106.566, -22.054,
            127.966, -70.997, -23.654,
            127.151, -70.421, -22.054,
            84.273, -106.566, -22.054,
            128.408, 5.995, -23.654,
            85.318, 24.025, -23.654,
            127.586, 5.227, -22.054,
            85.318, 24.025, -23.654,
            85.189, 22.968, -22.054,
            127.586, 5.227, -22.054,
            85.318, 24.025, -23.654,
            -85.401, 24.025, -23.654,
            85.189, 22.968, -22.054,
            -85.401, 24.025, -23.654,
            -85.290, 22.968, -22.054,
            85.189, 22.968, -22.054,
            -85.401, 24.025, -23.654,
            -127.999, 8.812, -23.654,
            -85.290, 22.968, -22.054,
            -127.999, 8.812, -23.654,
            -127.182, 8.007, -22.054,
            -85.290, 22.968, -22.054,
            -127.999, -70.935, -23.654,
            -85.806, -107.695, -23.654,
            -127.182, -70.373, -22.054,
            -85.806, -107.695, -23.654,
            -85.556, -106.638, -22.054,
            -127.182, -70.373, -22.054,
            -85.806, -107.695, -23.654,
            84.516, -107.624, -23.654,
            -85.556, -106.638, -22.054,
            84.516, -107.624, -23.654,
            84.273, -106.566, -22.054,
            -85.556, -106.638, -22.054,
            127.560, 0.725, -40.792,
            127.586, 5.227, -40.792,
            128.408, 5.995, -39.552,
            127.586, 5.227, -40.792,
            127.560, 0.725, -40.792,
            85.189, 22.968, -40.792,
            127.151, -70.421, -40.792,
            127.239, -55.165, -40.792,
            127.966, -70.997, -39.552,
            128.408, 5.995, -39.552,
            128.378, 0.725, -39.552,
            127.560, 0.725, -40.792,
            127.306, -43.466, -40.792,
            127.493, -10.973, -40.792,
            128.311, -10.973, -39.552,
            128.311, -10.973, -39.552,
            128.124, -43.466, -39.552,
            127.306, -43.466, -40.792,
            128.057, -55.165, -39.552,
            127.966, -70.997, -39.552,
            127.239, -55.165, -40.792,
            127.966, -70.997, -39.552,
            128.057, -55.165, -39.552,
            127.966, -70.997, -23.654,
            -127.182, 8.007, -40.792,
            -127.182, 0.725, -40.792,
            -127.999, 8.812, -39.552,
            -127.182, 0.725, -40.792,
            -127.182, 8.007, -40.792,
            -85.290, 22.968, -40.792,
            -127.182, -55.165, -40.792,
            -127.182, -70.373, -40.792,
            -127.999, -70.935, -39.552,
            -127.999, 0.725, -39.552,
            -127.999, 8.812, -39.552,
            -127.182, 0.725, -40.792,
            -127.999, 8.812, -39.552,
            -127.999, 0.725, -39.552,
            -127.999, 8.812, -23.654,
            -127.999, -43.466, -39.552,
            -127.999, -10.973, -39.552,
            -127.182, -10.973, -40.792,
            -127.999, -43.466, -39.552,
            -127.182, -10.973, -40.792,
            -127.182, -43.466, -40.792,
            -127.999, -70.935, -39.552,
            -127.999, -55.165, -39.552,
            -127.182, -55.165, -40.792,
            128.378, 0.725, -23.654,
            128.378, 0.725, -39.552,
            128.408, 5.995, -39.552,
            128.378, 0.725, -23.654,
            128.408, 5.995, -39.552,
            128.408, 5.995, -23.654,
            128.124, -43.466, -30.903,
            128.124, -43.466, -39.552,
            128.311, -10.973, -39.552,
            128.124, -43.466, -30.903,
            128.311, -10.973, -39.552,
            128.311, -10.973, -23.654,
            128.311, -10.973, -23.654,
            128.124, -43.466, -23.654,
            128.124, -43.466, -30.903,
            128.057, -55.165, -23.654,
            127.966, -70.997, -23.654,
            128.057, -55.165, -39.552,
            127.966, -70.997, -23.654,
            128.057, -55.165, -23.654,
            127.151, -70.421, -22.054,
            -127.999, -43.466, -39.552,
            -127.999, -10.973, -23.654,
            -127.999, -10.973, -39.552,
            -127.999, -43.466, -39.552,
            -127.999, -43.466, -23.654,
            -127.999, -10.973, -23.654,
            -127.999, -55.165, -38.314,
            -127.999, -55.165, -39.552,
            -127.999, -70.935, -39.552,
            -127.999, -55.165, -38.314,
            -127.999, -70.935, -39.552,
            -127.999, -70.935, -23.654,
            -127.999, 0.725, -23.654,
            -127.999, 8.812, -23.654,
            -127.999, 0.725, -39.552,
            -127.999, 8.812, -23.654,
            -127.999, 0.725, -23.654,
            -127.182, 8.007, -22.054,
            -127.999, -70.935, -23.654,
            -127.999, -55.165, -23.654,
            -127.999, -55.165, -38.314,
            128.378, 0.725, -23.654,
            128.408, 5.995, -23.654,
            127.586, 5.227, -22.054,
            127.560, 0.725, -22.054,
            127.586, 5.227, -22.054,
            85.189, 22.968, -22.054,
            127.586, 5.227, -22.054,
            127.560, 0.725, -22.054,
            128.378, 0.725, -23.654,
            128.124, -43.466, -23.654,
            128.311, -10.973, -23.654,
            127.493, -10.973, -22.054,
            127.493, -10.973, -22.054,
            127.306, -43.466, -22.054,
            128.124, -43.466, -23.654,
            127.239, -55.165, -22.054,
            127.151, -70.421, -22.054,
            128.057, -55.165, -23.654,
            -127.999, -43.466, -23.654,
            -127.182, -10.973, -22.054,
            -127.999, -10.973, -23.654,
            -127.182, -43.466, -22.054,
            -127.182, -10.973, -22.054,
            -127.999, -43.466, -23.654,
            -127.999, -55.165, -23.654,
            -127.999, -70.935, -23.654,
            -127.182, -70.373, -22.054,
            -127.182, 0.725, -22.054,
            -127.182, 8.007, -22.054,
            -127.999, 0.725, -23.654,
            -127.182, 8.007, -22.054,
            -127.182, 0.725, -22.054,
            -85.290, 22.968, -22.054,
            -127.182, -70.373, -22.054,
            -127.182, -55.165, -22.054,
            -127.999, -55.165, -23.654,
            25.256, -10.973, -22.054,
            -127.182, -10.973, -22.054,
            -127.182, -43.466, -22.054,
            -59.207, -43.466, -22.054,
            25.256, -10.973, -22.054,
            -127.182, -43.466, -22.054,
            -120.356, -55.165, -22.054,
            -127.182, -70.373, -22.054,
            -85.556, -106.638, -22.054,
            -120.356, -55.165, -22.054,
            -127.182, -55.165, -22.054,
            -127.182, -70.373, -22.054,
            -120.356, -55.165, -22.054,
            -85.556, -106.638, -22.054,
            84.273, -106.566, -22.054,
            -85.290, 22.968, -22.054,
            -127.182, 0.725, -22.054,
            85.189, 22.968, -22.054,
            84.273, -106.566, -22.054,
            43.014, -55.165, -22.054,
            -120.356, -55.165, -22.054,
            96.064, -43.466, -22.054,
            127.493, -10.973, -22.054,
            25.256, -10.973, -22.054,
            96.064, -43.466, -22.054,
            25.256, -10.973, -22.054,
            -59.207, -43.466, -22.054,
            43.014, -55.165, -22.054,
            84.273, -106.566, -22.054,
            127.151, -70.421, -22.054,
            127.151, -70.421, -22.054,
            127.239, -55.165, -22.054,
            43.014, -55.165, -22.054,
            -127.182, 0.725, -22.054,
            127.560, 0.725, -22.054,
            85.189, 22.968, -22.054,
            127.306, -43.466, -22.054,
            127.493, -10.973, -22.054,
            96.064, -43.466, -22.054,
            -85.290, 22.968, -40.792,
            127.560, 0.725, -40.792,
            -127.182, 0.725, -40.792,
            -127.182, -10.973, -40.792,
            -105.149, -10.973, -40.792,
            -127.182, -43.466, -40.792,
            -127.182, -70.373, -40.792,
            -127.182, -55.165, -40.792,
            -85.556, -106.638, -40.792,
            -85.556, -106.638, -40.792,
            -127.182, -55.165, -40.792,
            84.273, -106.566, -40.792,
            127.560, 0.725, -40.792,
            -85.290, 22.968, -40.792,
            85.189, 22.968, -40.792,
            84.273, -106.566, -40.792,
            -127.182, -55.165, -40.792,
            127.151, -70.421, -40.792,
            111.194, -43.466, -40.792,
            -127.182, -43.466, -40.792,
            -105.149, -10.973, -40.792,
            127.306, -43.466, -40.792,
            -105.149, -10.973, -40.792,
            127.493, -10.973, -40.792,
            111.194, -43.466, -40.792,
            -105.149, -10.973, -40.792,
            127.306, -43.466, -40.792,
            -127.182, -55.165, -40.792,
            127.239, -55.165, -40.792,
            127.151, -70.421, -40.792,
            128.378, 0.725, -23.654,
            127.560, 0.725, -40.792,
            128.378, 0.725, -39.552,
            127.306, -43.466, -40.792,
            128.124, -43.466, -39.552,
            128.124, -43.466, -30.903,
            -127.182, -43.466, -40.792,
            -127.999, -43.466, -23.654,
            -127.999, -43.466, -39.552,
            -127.999, -55.165, -38.314,
            -127.182, -55.165, -40.792,
            -127.999, -55.165, -39.552,
            -127.999, -55.165, -23.654,
            -127.182, -55.165, -22.054,
            -120.356, -55.165, -22.054,
            -127.182, 0.725, -22.054,
            127.560, 0.725, -40.792,
            128.378, 0.725, -23.654,
            25.256, -10.973, -22.054,
            -127.999, -10.973, -23.654,
            -127.182, -10.973, -22.054,
            -59.207, -43.466, -22.054,
            127.306, -43.466, -40.792,
            128.124, -43.466, -30.903,
            -127.999, -55.165, -38.314,
            -127.999, -55.165, -23.654,
            43.014, -55.165, -22.054,
            -120.356, -55.165, -22.054,
            43.014, -55.165, -22.054,
            -127.999, -55.165, -23.654,
            -127.182, 0.725, -22.054,
            128.378, 0.725, -23.654,
            127.560, 0.725, -22.054,
            127.493, -10.973, -22.054,
            -127.182, -10.973, -40.792,
            -127.999, -10.973, -39.552,
            127.493, -10.973, -22.054,
            -127.999, -10.973, -39.552,
            -127.999, -10.973, -23.654,
            25.256, -10.973, -22.054,
            127.493, -10.973, -22.054,
            -127.999, -10.973, -23.654,
            -59.207, -43.466, -22.054,
            128.124, -43.466, -30.903,
            96.064, -43.466, -22.054,
            96.064, -43.466, -22.054,
            128.124, -43.466, -30.903,
            128.124, -43.466, -23.654,
            43.014, -55.165, -22.054,
            -127.182, -55.165, -40.792,
            -127.999, -55.165, -38.314,
            127.306, -43.466, -22.054,
            96.064, -43.466, -22.054,
            128.124, -43.466, -23.654,
            -127.182, 0.725, -40.792,
            127.560, 0.725, -40.792,
            -127.999, 0.725, -39.552,
            128.311, -10.973, -23.654,
            -105.149, -10.973, -40.792,
            127.493, -10.973, -22.054,
            127.493, -10.973, -22.054,
            -105.149, -10.973, -40.792,
            -127.182, -10.973, -40.792,
            128.311, -10.973, -39.552,
            -105.149, -10.973, -40.792,
            128.311, -10.973, -23.654,
            128.057, -55.165, -39.552,
            -127.182, -55.165, -40.792,
            128.057, -55.165, -23.654,
            128.057, -55.165, -23.654,
            -127.182, -55.165, -40.792,
            127.239, -55.165, -22.054,
            -127.182, -55.165, -40.792,
            43.014, -55.165, -22.054,
            127.239, -55.165, -22.054,
            127.239, -55.165, -40.792,
            -127.182, -55.165, -40.792,
            128.057, -55.165, -39.552,
            -127.999, -43.466, -23.654,
            -127.182, -43.466, -40.792,
            -127.182, -43.466, -22.054,
            -127.182, -43.466, -22.054,
            -127.182, -43.466, -40.792,
            -59.207, -43.466, -22.054,
            -59.207, -43.466, -22.054,
            -127.182, -43.466, -40.792,
            111.194, -43.466, -40.792,
            -127.999, 0.725, -39.552,
            127.560, 0.725, -40.792,
            -127.999, 0.725, -23.654,
            -127.999, 0.725, -23.654,
            127.560, 0.725, -40.792,
            -127.182, 0.725, -22.054,
            127.493, -10.973, -40.792,
            -105.149, -10.973, -40.792,
            128.311, -10.973, -39.552,
            111.194, -43.466, -40.792,
            127.306, -43.466, -40.792,
               -59.207, -43.466, -22.054
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.509, -0.603, -0.614,
            0.509, -0.603, -0.614,
            0.509, -0.603, -0.614,
            0.509, -0.603, -0.614,
            0.509, -0.603, -0.614,
            0.509, -0.603, -0.614,
            0.297, 0.711, -0.637,
            0.297, 0.711, -0.637,
            0.297, 0.711, -0.637,
            0.297, 0.711, -0.637,
            0.297, 0.711, -0.637,
            0.297, 0.711, -0.637,
            0.000, 0.761, -0.649,
            0.000, 0.761, -0.649,
            0.000, 0.761, -0.649,
            0.000, 0.761, -0.649,
            0.000, 0.761, -0.649,
            0.000, 0.761, -0.649,
            -0.258, 0.724, -0.640,
            -0.258, 0.724, -0.640,
            -0.258, 0.724, -0.640,
            -0.258, 0.724, -0.640,
            -0.258, 0.724, -0.640,
            -0.258, 0.724, -0.640,
            -0.519, -0.596, -0.613,
            -0.519, -0.596, -0.613,
            -0.519, -0.596, -0.613,
            -0.519, -0.596, -0.613,
            -0.519, -0.596, -0.613,
            -0.519, -0.596, -0.613,
            0.000, -0.761, -0.649,
            0.000, -0.761, -0.649,
            0.000, -0.761, -0.649,
            0.000, -0.761, -0.649,
            0.000, -0.761, -0.649,
            0.000, -0.761, -0.649,
            0.645, -0.765, 0.000,
            0.645, -0.765, 0.000,
            0.645, -0.765, 0.000,
            0.645, -0.765, 0.000,
            0.645, -0.765, 0.000,
            0.645, -0.765, 0.000,
            0.386, 0.922, 0.000,
            0.386, 0.922, 0.000,
            0.386, 0.922, 0.000,
            0.386, 0.922, 0.000,
            0.386, 0.922, 0.000,
            0.386, 0.922, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.336, 0.942, -0.000,
            -0.336, 0.942, -0.000,
            -0.336, 0.942, -0.000,
            -0.336, 0.942, -0.000,
            -0.336, 0.942, -0.000,
            -0.336, 0.942, -0.000,
            -0.657, -0.754, -0.000,
            -0.657, -0.754, -0.000,
            -0.657, -0.754, -0.000,
            -0.657, -0.754, -0.000,
            -0.657, -0.754, 0.000,
            -0.657, -0.754, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.552, -0.655, 0.517,
            0.552, -0.655, 0.517,
            0.552, -0.655, 0.517,
            0.552, -0.655, 0.517,
            0.552, -0.655, 0.517,
            0.552, -0.655, 0.517,
            0.325, 0.777, 0.540,
            0.325, 0.777, 0.540,
            0.325, 0.777, 0.540,
            0.325, 0.777, 0.540,
            0.325, 0.777, 0.540,
            0.325, 0.777, 0.540,
            0.000, 0.834, 0.551,
            0.000, 0.834, 0.551,
            0.000, 0.834, 0.551,
            0.000, 0.834, 0.551,
            0.000, 0.834, 0.551,
            0.000, 0.834, 0.551,
            -0.283, 0.791, 0.543,
            -0.283, 0.791, 0.543,
            -0.283, 0.791, 0.543,
            -0.283, 0.791, 0.543,
            -0.283, 0.791, 0.543,
            -0.283, 0.791, 0.543,
            -0.563, -0.646, 0.515,
            -0.563, -0.646, 0.515,
            -0.563, -0.646, 0.515,
            -0.563, -0.646, 0.515,
            -0.563, -0.646, 0.515,
            -0.563, -0.646, 0.515,
            0.000, -0.834, 0.551,
            0.000, -0.834, 0.551,
            0.000, -0.834, 0.551,
            0.000, -0.834, 0.551,
            0.000, -0.834, 0.551,
            0.000, -0.834, 0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            0.835, -0.005, -0.551,
            1.000, -0.006, 0.000,
            1.000, -0.006, -0.000,
            1.000, -0.006, -0.000,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.835, -0.000, -0.551,
            -0.835, -0.000, -0.551,
            -0.835, -0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, -0.000, -0.551,
            -0.835, 0.000, -0.551,
            -0.835, -0.000, -0.551,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, -0.000,
            1.000, -0.006, -0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, -0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, 0.000,
            1.000, -0.006, -0.000,
            1.000, -0.006, -0.000,
            1.000, -0.006, -0.000,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            0.890, -0.005, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, -0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, -0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            -0.890, 0.000, 0.455,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.890, -0.000, 0.455,
            -0.890, -0.000, 0.455,
            -0.890, -0.000, 0.455,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
               -0.000, -1.000, -0.000
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
