function create_geometry_406(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -89.172, -356.508, 19.446,
            -87.404, -213.609, 23.741,
            -89.187, -213.691, 19.446,
            -89.172, -356.508, 19.446,
            -87.392, -356.509, 23.741,
            -87.404, -213.609, 23.741,
            -87.392, -356.509, 23.741,
            -83.103, -213.412, 25.521,
            -87.404, -213.609, 23.741,
            -87.392, -356.509, 23.741,
            -83.098, -356.512, 25.521,
            -83.103, -213.412, 25.521,
            -83.098, -356.512, 25.521,
            -78.803, -213.215, 23.741,
            -83.103, -213.412, 25.521,
            -83.098, -356.512, 25.521,
            -78.803, -356.515, 23.741,
            -78.803, -213.215, 23.741,
            -78.803, -356.515, 23.741,
            -77.020, -213.133, 19.446,
            -78.803, -213.215, 23.741,
            -78.803, -356.515, 23.741,
            -77.023, -356.516, 19.446,
            -77.020, -213.133, 19.446,
            -77.023, -356.516, 19.446,
            -78.803, -213.215, 15.152,
            -77.020, -213.133, 19.446,
            -77.023, -356.516, 19.446,
            -78.804, -356.515, 15.152,
            -78.803, -213.215, 15.152,
            -78.804, -356.515, 15.152,
            -83.103, -213.412, 13.372,
            -78.803, -213.215, 15.152,
            -78.804, -356.515, 15.152,
            -83.098, -356.512, 13.372,
            -83.103, -213.412, 13.372,
            -83.098, -356.512, 13.372,
            -87.404, -213.609, 15.152,
            -83.103, -213.412, 13.372,
            -83.098, -356.512, 13.372,
            -87.392, -356.509, 15.152,
            -87.404, -213.609, 15.152,
            -87.392, -356.509, 15.152,
            -89.187, -213.691, 19.446,
            -87.404, -213.609, 15.152,
            -87.392, -356.509, 15.152,
            -89.172, -356.508, 19.446,
            -89.187, -213.691, 19.446,
            -89.187, -213.691, 19.446,
            -86.483, -206.786, 23.741,
            -88.149, -205.882, 19.446,
            -89.187, -213.691, 19.446,
            -87.404, -213.609, 23.741,
            -86.483, -206.786, 23.741,
            -87.404, -213.609, 23.741,
            -82.465, -208.967, 25.521,
            -86.483, -206.786, 23.741,
            -87.404, -213.609, 23.741,
            -83.103, -213.412, 25.521,
            -82.465, -208.967, 25.521,
            -83.103, -213.412, 25.521,
            -78.447, -211.148, 23.741,
            -82.465, -208.967, 25.521,
            -83.103, -213.412, 25.521,
            -78.803, -213.215, 23.741,
            -78.447, -211.148, 23.741,
            -78.803, -213.215, 23.741,
            -76.782, -212.052, 19.446,
            -78.447, -211.148, 23.741,
            -78.803, -213.215, 23.741,
            -77.020, -213.133, 19.446,
            -76.782, -212.052, 19.446,
            -77.020, -213.133, 19.446,
            -78.447, -211.148, 15.152,
            -76.782, -212.052, 19.446,
            -77.020, -213.133, 19.446,
            -78.803, -213.215, 15.152,
            -78.447, -211.148, 15.152,
            -78.803, -213.215, 15.152,
            -82.465, -208.967, 13.372,
            -78.447, -211.148, 15.152,
            -78.803, -213.215, 15.152,
            -83.103, -213.412, 13.372,
            -82.465, -208.967, 13.372,
            -83.103, -213.412, 13.372,
            -86.483, -206.786, 15.152,
            -82.465, -208.967, 13.372,
            -83.103, -213.412, 13.372,
            -87.404, -213.609, 15.152,
            -86.483, -206.786, 15.152,
            -87.404, -213.609, 15.152,
            -88.149, -205.882, 19.446,
            -86.483, -206.786, 15.152,
            -87.404, -213.609, 15.152,
            -89.187, -213.691, 19.446,
            -88.149, -205.882, 19.446,
            -88.149, -205.882, 19.446,
            -81.881, -202.803, 23.741,
            -82.659, -201.158, 19.446,
            -88.149, -205.882, 19.446,
            -86.483, -206.786, 23.741,
            -81.881, -202.803, 23.741,
            -86.483, -206.786, 23.741,
            -80.004, -206.773, 25.521,
            -81.881, -202.803, 23.741,
            -86.483, -206.786, 23.741,
            -82.465, -208.967, 25.521,
            -80.004, -206.773, 25.521,
            -82.465, -208.967, 25.521,
            -78.127, -210.742, 23.741,
            -80.004, -206.773, 25.521,
            -82.465, -208.967, 25.521,
            -78.447, -211.148, 23.741,
            -78.127, -210.742, 23.741,
            -78.447, -211.148, 23.741,
            -77.349, -212.387, 19.446,
            -78.127, -210.742, 23.741,
            -78.447, -211.148, 23.741,
            -76.782, -212.052, 19.446,
            -77.349, -212.387, 19.446,
            -76.782, -212.052, 19.446,
            -78.127, -210.742, 15.152,
            -77.349, -212.387, 19.446,
            -76.782, -212.052, 19.446,
            -78.447, -211.148, 15.152,
            -78.127, -210.742, 15.152,
            -78.447, -211.148, 15.152,
            -80.004, -206.773, 13.372,
            -78.127, -210.742, 15.152,
            -78.447, -211.148, 15.152,
            -82.465, -208.967, 13.372,
            -80.004, -206.773, 13.372,
            -82.465, -208.967, 13.372,
            -81.881, -202.803, 15.152,
            -80.004, -206.773, 13.372,
            -82.465, -208.967, 13.372,
            -86.483, -206.786, 15.152,
            -81.881, -202.803, 15.152,
            -86.483, -206.786, 15.152,
            -82.659, -201.158, 19.446,
            -81.881, -202.803, 15.152,
            -86.483, -206.786, 15.152,
            -88.149, -205.882, 19.446,
            -82.659, -201.158, 19.446,
            -82.659, -201.158, 19.446,
            -77.164, -201.391, 23.741,
            -77.385, -199.603, 19.446,
            -82.659, -201.158, 19.446,
            -81.881, -202.803, 23.741,
            -77.164, -201.391, 23.741,
            -81.881, -202.803, 23.741,
            -76.631, -205.704, 25.521,
            -77.164, -201.391, 23.741,
            -81.881, -202.803, 23.741,
            -80.004, -206.773, 25.521,
            -76.631, -205.704, 25.521,
            -80.004, -206.773, 25.521,
            -76.098, -210.016, 23.741,
            -76.631, -205.704, 25.521,
            -80.004, -206.773, 25.521,
            -78.127, -210.742, 23.741,
            -76.098, -210.016, 23.741,
            -78.127, -210.742, 23.741,
            -75.877, -211.804, 19.446,
            -76.098, -210.016, 23.741,
            -78.127, -210.742, 23.741,
            -77.349, -212.387, 19.446,
            -75.877, -211.804, 19.446,
            -77.349, -212.387, 19.446,
            -76.098, -210.016, 15.152,
            -75.877, -211.804, 19.446,
            -77.349, -212.387, 19.446,
            -78.127, -210.742, 15.152,
            -76.098, -210.016, 15.152,
            -78.127, -210.742, 15.152,
            -76.631, -205.704, 13.372,
            -76.098, -210.016, 15.152,
            -78.127, -210.742, 15.152,
            -80.004, -206.773, 13.372,
            -76.631, -205.704, 13.372,
            -80.004, -206.773, 13.372,
            -77.164, -201.391, 15.152,
            -76.631, -205.704, 13.372,
            -80.004, -206.773, 13.372,
            -81.881, -202.803, 15.152,
            -77.164, -201.391, 15.152,
            -81.881, -202.803, 15.152,
            -77.385, -199.603, 19.446,
            -77.164, -201.391, 15.152,
            -81.881, -202.803, 15.152,
            -82.659, -201.158, 19.446,
            -77.385, -199.603, 19.446,
            -77.385, -199.603, 19.446,
            -58.861, -201.409, 23.741,
            -58.861, -199.629, 19.446,
            -77.385, -199.603, 19.446,
            -77.164, -201.391, 23.741,
            -58.861, -201.409, 23.741,
            -77.164, -201.391, 23.741,
            -58.860, -205.704, 25.521,
            -58.861, -201.409, 23.741,
            -77.164, -201.391, 23.741,
            -76.631, -205.704, 25.521,
            -58.860, -205.704, 25.521,
            -76.631, -205.704, 25.521,
            -58.860, -209.998, 23.741,
            -58.860, -205.704, 25.521,
            -76.631, -205.704, 25.521,
            -76.098, -210.016, 23.741,
            -58.860, -209.998, 23.741,
            -76.098, -210.016, 23.741,
            -58.860, -211.778, 19.446,
            -58.860, -209.998, 23.741,
            -76.098, -210.016, 23.741,
            -75.877, -211.804, 19.446,
            -58.860, -211.778, 19.446,
            -75.877, -211.804, 19.446,
            -58.860, -209.998, 15.152,
            -58.860, -211.778, 19.446,
            -75.877, -211.804, 19.446,
            -76.098, -210.016, 15.152,
            -58.860, -209.998, 15.152,
            -76.098, -210.016, 15.152,
            -58.860, -205.704, 13.372,
            -58.860, -209.998, 15.152,
            -76.098, -210.016, 15.152,
            -76.631, -205.704, 13.372,
            -58.860, -205.704, 13.372,
            -76.631, -205.704, 13.372,
            -58.861, -201.409, 15.152,
            -58.860, -205.704, 13.372,
            -76.631, -205.704, 13.372,
            -77.164, -201.391, 15.152,
            -58.861, -201.409, 15.152,
            -77.164, -201.391, 15.152,
            -58.861, -199.629, 19.446,
            -58.861, -201.409, 15.152,
            -77.164, -201.391, 15.152,
            -77.385, -199.603, 19.446,
               -58.861, -199.629, 19.446
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.924, -0.000, 0.383,
            -0.714, 0.048, 0.698,
            -0.922, 0.060, 0.382,
            -0.924, -0.000, 0.383,
            -0.707, -0.000, 0.707,
            -0.714, 0.048, 0.698,
            -0.707, -0.000, 0.707,
            -0.018, 0.003, 1.000,
            -0.714, 0.048, 0.698,
            -0.707, -0.000, 0.707,
            0.000, -0.000, 1.000,
            -0.018, 0.003, 1.000,
            0.000, -0.000, 1.000,
            0.694, -0.061, 0.717,
            -0.018, 0.003, 1.000,
            0.000, -0.000, 1.000,
            0.707, -0.000, 0.707,
            0.694, -0.061, 0.717,
            0.707, -0.000, 0.707,
            0.994, -0.109, -0.004,
            0.694, -0.061, 0.717,
            0.707, -0.000, 0.707,
            1.000, -0.000, -0.000,
            0.994, -0.109, -0.004,
            1.000, -0.000, -0.000,
            0.694, -0.058, -0.717,
            0.994, -0.109, -0.004,
            1.000, -0.000, -0.000,
            0.707, 0.000, -0.707,
            0.694, -0.058, -0.717,
            0.707, 0.000, -0.707,
            -0.017, 0.003, -1.000,
            0.694, -0.058, -0.717,
            0.707, 0.000, -0.707,
            0.000, -0.000, -1.000,
            -0.017, 0.003, -1.000,
            0.000, -0.000, -1.000,
            -0.714, 0.048, -0.698,
            -0.017, 0.003, -1.000,
            0.000, -0.000, -1.000,
            -0.707, -0.000, -0.707,
            -0.714, 0.048, -0.698,
            -0.707, -0.000, -0.707,
            -0.924, -0.000, -0.383,
            -0.714, 0.048, -0.698,
            -0.707, -0.000, -0.707,
            -0.924, -0.000, -0.383,
            -0.924, -0.000, -0.383,
            -0.922, 0.060, 0.382,
            -0.644, 0.348, 0.681,
            -0.805, 0.435, 0.403,
            -0.922, 0.060, 0.382,
            -0.714, 0.048, 0.698,
            -0.644, 0.348, 0.681,
            -0.714, 0.048, 0.698,
            -0.070, 0.037, 0.997,
            -0.644, 0.348, 0.681,
            -0.714, 0.048, 0.698,
            -0.018, 0.003, 1.000,
            -0.070, 0.037, 0.997,
            -0.018, 0.003, 1.000,
            0.615, -0.263, 0.743,
            -0.070, 0.037, 0.997,
            -0.018, 0.003, 1.000,
            0.694, -0.061, 0.717,
            0.615, -0.263, 0.743,
            0.694, -0.061, 0.717,
            0.755, 0.655, 0.008,
            0.615, -0.263, 0.743,
            0.694, -0.061, 0.717,
            0.994, -0.109, -0.004,
            0.755, 0.655, 0.008,
            0.994, -0.109, -0.004,
            0.604, -0.280, -0.747,
            0.755, 0.655, 0.008,
            0.994, -0.109, -0.004,
            0.694, -0.058, -0.717,
            0.604, -0.280, -0.747,
            0.694, -0.058, -0.717,
            -0.071, 0.039, -0.997,
            0.604, -0.280, -0.747,
            0.694, -0.058, -0.717,
            -0.017, 0.003, -1.000,
            -0.071, 0.039, -0.997,
            -0.017, 0.003, -1.000,
            -0.644, 0.349, -0.681,
            -0.071, 0.039, -0.997,
            -0.017, 0.003, -1.000,
            -0.714, 0.048, -0.698,
            -0.644, 0.349, -0.681,
            -0.714, 0.048, -0.698,
            -0.916, 0.124, -0.381,
            -0.644, 0.349, -0.681,
            -0.714, 0.048, -0.698,
            -0.917, 0.122, -0.379,
            -0.917, 0.122, -0.379,
            -0.805, 0.435, 0.403,
            -0.350, 0.636, 0.687,
            -0.439, 0.810, 0.389,
            -0.805, 0.435, 0.403,
            -0.644, 0.348, 0.681,
            -0.350, 0.636, 0.687,
            -0.644, 0.348, 0.681,
            -0.026, 0.041, 0.999,
            -0.350, 0.636, 0.687,
            -0.644, 0.348, 0.681,
            -0.070, 0.037, 0.997,
            -0.026, 0.041, 0.999,
            -0.070, 0.037, 0.997,
            0.382, -0.541, 0.749,
            -0.026, 0.041, 0.999,
            -0.070, 0.037, 0.997,
            0.615, -0.263, 0.743,
            0.382, -0.541, 0.749,
            0.615, -0.263, 0.743,
            -0.776, -0.610, 0.160,
            0.382, -0.541, 0.749,
            0.615, -0.263, 0.743,
            0.755, 0.655, 0.008,
            -0.776, -0.610, 0.160,
            0.755, 0.655, 0.008,
            0.393, -0.533, -0.750,
            -0.776, -0.610, 0.160,
            0.755, 0.655, 0.008,
            0.604, -0.280, -0.747,
            0.393, -0.533, -0.750,
            0.604, -0.280, -0.747,
            -0.028, 0.045, -0.999,
            0.393, -0.533, -0.750,
            0.604, -0.280, -0.747,
            -0.071, 0.039, -0.997,
            -0.028, 0.045, -0.999,
            -0.071, 0.039, -0.997,
            -0.350, 0.636, -0.687,
            -0.028, 0.045, -0.999,
            -0.071, 0.039, -0.997,
            -0.644, 0.349, -0.681,
            -0.350, 0.636, -0.687,
            -0.644, 0.349, -0.681,
            -0.606, 0.700, -0.378,
            -0.350, 0.636, -0.687,
            -0.644, 0.349, -0.681,
            -0.603, 0.701, -0.381,
            -0.603, 0.701, -0.381,
            -0.439, 0.810, 0.389,
            -0.104, 0.713, 0.693,
            -0.131, 0.913, 0.387,
            -0.439, 0.810, 0.389,
            -0.350, 0.636, 0.687,
            -0.104, 0.713, 0.693,
            -0.350, 0.636, 0.687,
            -0.006, 0.036, 0.999,
            -0.104, 0.713, 0.693,
            -0.350, 0.636, 0.687,
            -0.026, 0.041, 0.999,
            -0.006, 0.036, 0.999,
            -0.026, 0.041, 0.999,
            0.115, -0.671, 0.732,
            -0.006, 0.036, 0.999,
            -0.026, 0.041, 0.999,
            0.382, -0.541, 0.749,
            0.115, -0.671, 0.732,
            0.382, -0.541, 0.749,
            0.189, -0.982, 0.003,
            0.115, -0.671, 0.732,
            0.382, -0.541, 0.749,
            -0.776, -0.610, 0.160,
            0.189, -0.982, 0.003,
            -0.776, -0.610, 0.160,
            0.119, -0.670, -0.732,
            0.189, -0.982, 0.003,
            -0.776, -0.610, 0.160,
            0.393, -0.533, -0.750,
            0.119, -0.670, -0.732,
            0.393, -0.533, -0.750,
            -0.006, 0.038, -0.999,
            0.119, -0.670, -0.732,
            0.393, -0.533, -0.750,
            -0.028, 0.045, -0.999,
            -0.006, 0.038, -0.999,
            -0.028, 0.045, -0.999,
            -0.105, 0.713, -0.693,
            -0.006, 0.038, -0.999,
            -0.028, 0.045, -0.999,
            -0.350, 0.636, -0.687,
            -0.105, 0.713, -0.693,
            -0.350, 0.636, -0.687,
            -0.265, 0.885, -0.382,
            -0.105, 0.713, -0.693,
            -0.350, 0.636, -0.687,
            -0.261, 0.885, -0.386,
            -0.261, 0.885, -0.386,
            -0.131, 0.913, 0.387,
            0.001, 0.707, 0.707,
            0.001, 0.924, 0.383,
            -0.131, 0.913, 0.387,
            -0.104, 0.713, 0.693,
            0.001, 0.707, 0.707,
            -0.104, 0.713, 0.693,
            0.000, -0.000, 1.000,
            0.001, 0.707, 0.707,
            -0.104, 0.713, 0.693,
            -0.006, 0.036, 0.999,
            0.000, -0.000, 1.000,
            -0.006, 0.036, 0.999,
            0.001, -0.707, 0.707,
            0.000, -0.000, 1.000,
            -0.006, 0.036, 0.999,
            0.115, -0.671, 0.732,
            0.001, -0.707, 0.707,
            0.115, -0.671, 0.732,
            0.001, -1.000, 0.000,
            0.001, -0.707, 0.707,
            0.115, -0.671, 0.732,
            0.189, -0.982, 0.003,
            0.001, -1.000, 0.000,
            0.189, -0.982, 0.003,
            0.001, -0.707, -0.707,
            0.001, -1.000, 0.000,
            0.189, -0.982, 0.003,
            0.119, -0.670, -0.732,
            0.001, -0.707, -0.707,
            0.119, -0.670, -0.732,
            0.000, 0.000, -1.000,
            0.001, -0.707, -0.707,
            0.119, -0.670, -0.732,
            -0.006, 0.038, -0.999,
            0.000, 0.000, -1.000,
            -0.006, 0.038, -0.999,
            0.001, 0.707, -0.707,
            0.000, 0.000, -1.000,
            -0.006, 0.038, -0.999,
            -0.105, 0.713, -0.693,
            0.001, 0.707, -0.707,
            -0.105, 0.713, -0.693,
            0.001, 0.924, -0.383,
            0.001, 0.707, -0.707,
            -0.105, 0.713, -0.693,
            0.001, 0.923, -0.384,
               0.001, 0.923, -0.384
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
