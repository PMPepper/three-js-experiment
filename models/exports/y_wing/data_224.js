function create_geometry_224(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -10.649, -337.937, 123.131,
            -10.649, -338.537, 125.679,
            -10.649, -344.642, 122.897,
            -10.649, -338.537, 125.679,
            -10.649, -340.066, 127.804,
            -10.649, -344.642, 122.897,
            -10.649, -340.066, 127.804,
            -10.649, -342.293, 129.181,
            -10.649, -344.642, 122.897,
            -10.649, -342.293, 129.181,
            -10.649, -344.876, 129.602,
            -10.649, -344.642, 122.897,
            -10.649, -344.876, 129.602,
            -10.649, -347.425, 129.002,
            -10.649, -344.642, 122.897,
            -10.649, -347.425, 129.002,
            -10.649, -349.549, 127.473,
            -10.649, -344.642, 122.897,
            -10.649, -349.549, 127.473,
            -10.649, -350.927, 125.247,
            -10.649, -344.642, 122.897,
            -10.649, -350.927, 125.247,
            -10.649, -351.348, 122.663,
            -10.649, -344.642, 122.897,
            -10.649, -351.348, 122.663,
            -10.649, -350.747, 120.115,
            -10.649, -344.642, 122.897,
            -10.649, -350.747, 120.115,
            -10.649, -349.218, 117.990,
            -10.649, -344.642, 122.897,
            -10.649, -349.218, 117.990,
            -10.649, -346.992, 116.613,
            -10.649, -344.642, 122.897,
            -10.649, -346.992, 116.613,
            -10.649, -344.408, 116.192,
            -10.649, -344.642, 122.897,
            -10.649, -344.408, 116.192,
            -10.649, -341.860, 116.792,
            -10.649, -344.642, 122.897,
            -10.649, -341.860, 116.792,
            -10.649, -339.736, 118.321,
            -10.649, -344.642, 122.897,
            -10.649, -339.736, 118.321,
            -10.649, -338.358, 120.547,
            -10.649, -344.642, 122.897,
            -10.649, -338.358, 120.547,
            -10.649, -337.937, 123.131,
            -10.649, -344.642, 122.897,
            -12.786, -337.937, 123.131,
            -12.786, -338.537, 125.679,
            -10.649, -337.937, 123.131,
            -12.786, -338.537, 125.679,
            -10.649, -338.537, 125.679,
            -10.649, -337.937, 123.131,
            -12.786, -338.537, 125.679,
            -12.786, -340.066, 127.804,
            -10.649, -338.537, 125.679,
            -12.786, -340.066, 127.804,
            -10.649, -340.066, 127.804,
            -10.649, -338.537, 125.679,
            -12.786, -340.066, 127.804,
            -12.786, -342.293, 129.181,
            -10.649, -340.066, 127.804,
            -12.786, -342.293, 129.181,
            -10.649, -342.293, 129.181,
            -10.649, -340.066, 127.804,
            -12.786, -342.293, 129.181,
            -12.786, -344.876, 129.602,
            -10.649, -342.293, 129.181,
            -12.786, -344.876, 129.602,
            -10.649, -344.876, 129.602,
            -10.649, -342.293, 129.181,
            -12.786, -344.876, 129.602,
            -12.786, -347.425, 129.002,
            -10.649, -344.876, 129.602,
            -12.786, -347.425, 129.002,
            -10.649, -347.425, 129.002,
            -10.649, -344.876, 129.602,
            -12.786, -347.425, 129.002,
            -12.786, -349.549, 127.473,
            -10.649, -347.425, 129.002,
            -12.786, -349.549, 127.473,
            -10.649, -349.549, 127.473,
            -10.649, -347.425, 129.002,
            -12.786, -349.549, 127.473,
            -12.786, -350.927, 125.247,
            -10.649, -349.549, 127.473,
            -12.786, -350.927, 125.247,
            -10.649, -350.927, 125.247,
            -10.649, -349.549, 127.473,
            -12.786, -350.927, 125.247,
            -12.786, -351.348, 122.663,
            -10.649, -350.927, 125.247,
            -12.786, -351.348, 122.663,
            -10.649, -351.348, 122.663,
            -10.649, -350.927, 125.247,
            -12.786, -351.348, 122.663,
            -12.786, -350.747, 120.115,
            -10.649, -351.348, 122.663,
            -12.786, -350.747, 120.115,
            -10.649, -350.747, 120.115,
            -10.649, -351.348, 122.663,
            -12.786, -350.747, 120.115,
            -12.786, -349.218, 117.990,
            -10.649, -350.747, 120.115,
            -12.786, -349.218, 117.990,
            -10.649, -349.218, 117.990,
            -10.649, -350.747, 120.115,
            -12.786, -349.218, 117.990,
            -12.786, -346.992, 116.613,
            -10.649, -349.218, 117.990,
            -12.786, -346.992, 116.613,
            -10.649, -346.992, 116.613,
            -10.649, -349.218, 117.990,
            -12.786, -346.992, 116.613,
            -12.786, -344.408, 116.192,
            -10.649, -346.992, 116.613,
            -12.786, -344.408, 116.192,
            -10.649, -344.408, 116.192,
            -10.649, -346.992, 116.613,
            -12.786, -344.408, 116.192,
            -12.786, -341.860, 116.792,
            -10.649, -344.408, 116.192,
            -12.786, -341.860, 116.792,
            -10.649, -341.860, 116.792,
            -10.649, -344.408, 116.192,
            -12.786, -341.860, 116.792,
            -12.786, -339.736, 118.321,
            -10.649, -341.860, 116.792,
            -12.786, -339.736, 118.321,
            -10.649, -339.736, 118.321,
            -10.649, -341.860, 116.792,
            -12.786, -339.736, 118.321,
            -12.786, -338.358, 120.547,
            -10.649, -339.736, 118.321,
            -12.786, -338.358, 120.547,
            -10.649, -338.358, 120.547,
            -10.649, -339.736, 118.321,
            -12.786, -338.358, 120.547,
            -12.786, -337.937, 123.131,
            -10.649, -338.358, 120.547,
            -12.786, -337.937, 123.131,
            -10.649, -337.937, 123.131,
            -10.649, -338.358, 120.547,
            -14.923, -339.278, 123.084,
            -14.923, -339.758, 125.123,
            -12.786, -337.937, 123.131,
            -14.923, -339.758, 125.123,
            -12.786, -338.537, 125.679,
            -12.786, -337.937, 123.131,
            -14.923, -339.758, 125.123,
            -14.923, -340.982, 126.822,
            -12.786, -338.537, 125.679,
            -14.923, -340.982, 126.822,
            -12.786, -340.066, 127.804,
            -12.786, -338.537, 125.679,
            -14.923, -340.982, 126.822,
            -14.923, -342.763, 127.925,
            -12.786, -340.066, 127.804,
            -14.923, -342.763, 127.925,
            -12.786, -342.293, 129.181,
            -12.786, -340.066, 127.804,
            -14.923, -342.763, 127.925,
            -14.923, -344.830, 128.261,
            -12.786, -342.293, 129.181,
            -14.923, -344.830, 128.261,
            -12.786, -344.876, 129.602,
            -12.786, -342.293, 129.181,
            -14.923, -344.830, 128.261,
            -14.923, -346.868, 127.781,
            -12.786, -344.876, 129.602,
            -14.923, -346.868, 127.781,
            -12.786, -347.425, 129.002,
            -12.786, -344.876, 129.602,
            -14.923, -346.868, 127.781,
            -14.923, -348.568, 126.558,
            -12.786, -347.425, 129.002,
            -14.923, -348.568, 126.558,
            -12.786, -349.549, 127.473,
            -12.786, -347.425, 129.002,
            -14.923, -348.568, 126.558,
            -14.923, -349.670, 124.777,
            -12.786, -349.549, 127.473,
            -14.923, -349.670, 124.777,
            -12.786, -350.927, 125.247,
            -12.786, -349.549, 127.473,
            -14.923, -349.670, 124.777,
            -14.923, -350.007, 122.710,
            -12.786, -350.927, 125.247,
            -14.923, -350.007, 122.710,
            -12.786, -351.348, 122.663,
            -12.786, -350.927, 125.247,
            -14.923, -350.007, 122.710,
            -14.923, -349.526, 120.671,
            -12.786, -351.348, 122.663,
            -14.923, -349.526, 120.671,
            -12.786, -350.747, 120.115,
            -12.786, -351.348, 122.663,
            -14.923, -349.526, 120.671,
            -14.923, -348.303, 118.972,
            -12.786, -350.747, 120.115,
            -14.923, -348.303, 118.972,
            -12.786, -349.218, 117.990,
            -12.786, -350.747, 120.115,
            -14.923, -348.303, 118.972,
            -14.923, -346.522, 117.869,
            -12.786, -349.218, 117.990,
            -14.923, -346.522, 117.869,
            -12.786, -346.992, 116.613,
            -12.786, -349.218, 117.990,
            -14.923, -346.522, 117.869,
            -14.923, -344.455, 117.533,
            -12.786, -346.992, 116.613,
            -14.923, -344.455, 117.533,
            -12.786, -344.408, 116.192,
            -12.786, -346.992, 116.613,
            -14.923, -344.455, 117.533,
            -14.923, -342.416, 118.013,
            -12.786, -344.408, 116.192,
            -14.923, -342.416, 118.013,
            -12.786, -341.860, 116.792,
            -12.786, -344.408, 116.192,
            -14.923, -342.416, 118.013,
            -14.923, -340.717, 119.236,
            -12.786, -341.860, 116.792,
            -14.923, -340.717, 119.236,
            -12.786, -339.736, 118.321,
            -12.786, -341.860, 116.792,
            -14.923, -340.717, 119.236,
            -14.923, -339.615, 121.017,
            -12.786, -339.736, 118.321,
            -14.923, -339.615, 121.017,
            -12.786, -338.358, 120.547,
            -12.786, -339.736, 118.321,
            -14.923, -339.615, 121.017,
            -14.923, -339.278, 123.084,
            -12.786, -338.358, 120.547,
            -14.923, -339.278, 123.084,
            -12.786, -337.937, 123.131,
            -12.786, -338.358, 120.547,
            -15.104, -341.018, 123.024,
            -15.104, -341.342, 124.401,
            -14.923, -339.278, 123.084,
            -15.104, -341.342, 124.401,
            -14.923, -339.758, 125.123,
            -14.923, -339.278, 123.084,
            -15.104, -341.342, 124.401,
            -15.104, -342.169, 125.549,
            -14.923, -339.758, 125.123,
            -15.104, -342.169, 125.549,
            -14.923, -340.982, 126.822,
            -14.923, -339.758, 125.123,
            -15.104, -342.169, 125.549,
            -15.104, -343.372, 126.294,
            -14.923, -340.982, 126.822,
            -15.104, -343.372, 126.294,
            -14.923, -342.763, 127.925,
            -14.923, -340.982, 126.822,
            -15.104, -343.372, 126.294,
            -15.104, -344.769, 126.521,
            -14.923, -342.763, 127.925,
            -15.104, -344.769, 126.521,
            -14.923, -344.830, 128.261,
            -14.923, -342.763, 127.925,
            -15.104, -344.769, 126.521,
            -15.104, -346.146, 126.197,
            -14.923, -344.830, 128.261,
            -15.104, -346.146, 126.197,
            -14.923, -346.868, 127.781,
            -14.923, -344.830, 128.261,
            -15.104, -346.146, 126.197,
            -15.104, -347.295, 125.370,
            -14.923, -346.868, 127.781,
            -15.104, -347.295, 125.370,
            -14.923, -348.568, 126.558,
            -14.923, -346.868, 127.781,
            -15.104, -347.295, 125.370,
            -15.104, -348.039, 124.167,
            -14.923, -348.568, 126.558,
            -15.104, -348.039, 124.167,
            -14.923, -349.670, 124.777,
            -14.923, -348.568, 126.558,
            -15.104, -348.039, 124.167,
            -15.104, -348.267, 122.770,
            -14.923, -349.670, 124.777,
            -15.104, -348.267, 122.770,
            -14.923, -350.007, 122.710,
            -14.923, -349.670, 124.777,
            -15.104, -348.267, 122.770,
            -15.104, -347.942, 121.393,
            -14.923, -350.007, 122.710,
            -15.104, -347.942, 121.393,
            -14.923, -349.526, 120.671,
            -14.923, -350.007, 122.710,
            -15.104, -347.942, 121.393,
            -15.104, -347.116, 120.245,
            -14.923, -349.526, 120.671,
            -15.104, -347.116, 120.245,
            -14.923, -348.303, 118.972,
            -14.923, -349.526, 120.671,
            -15.104, -347.116, 120.245,
            -15.104, -345.913, 119.500,
            -14.923, -348.303, 118.972,
            -15.104, -345.913, 119.500,
            -14.923, -346.522, 117.869,
            -14.923, -348.303, 118.972,
            -15.104, -345.913, 119.500,
            -15.104, -344.516, 119.273,
            -14.923, -346.522, 117.869,
            -15.104, -344.516, 119.273,
            -14.923, -344.455, 117.533,
            -14.923, -346.522, 117.869,
            -15.104, -344.516, 119.273,
            -15.104, -343.138, 119.597,
            -14.923, -344.455, 117.533,
            -15.104, -343.138, 119.597,
            -14.923, -342.416, 118.013,
            -14.923, -344.455, 117.533,
            -15.104, -343.138, 119.597,
            -15.104, -341.990, 120.424,
            -14.923, -342.416, 118.013,
            -15.104, -341.990, 120.424,
            -14.923, -340.717, 119.236,
            -14.923, -342.416, 118.013,
            -15.104, -341.990, 120.424,
            -15.104, -341.245, 121.627,
            -14.923, -340.717, 119.236,
            -15.104, -341.245, 121.627,
            -14.923, -339.615, 121.017,
            -14.923, -340.717, 119.236,
            -15.104, -341.245, 121.627,
            -15.104, -341.018, 123.024,
            -14.923, -339.615, 121.017,
            -15.104, -341.018, 123.024,
            -14.923, -339.278, 123.084,
            -14.923, -339.615, 121.017,
            -14.471, -341.018, 123.024,
            -14.471, -341.342, 124.401,
            -15.104, -341.018, 123.024,
            -14.471, -341.342, 124.401,
            -15.104, -341.342, 124.401,
            -15.104, -341.018, 123.024,
            -14.471, -341.342, 124.401,
            -14.471, -342.169, 125.549,
            -15.104, -341.342, 124.401,
            -14.471, -342.169, 125.549,
            -15.104, -342.169, 125.549,
            -15.104, -341.342, 124.401,
            -14.471, -342.169, 125.549,
            -14.471, -343.372, 126.294,
            -15.104, -342.169, 125.549,
            -14.471, -343.372, 126.294,
            -15.104, -343.372, 126.294,
            -15.104, -342.169, 125.549,
            -14.471, -343.372, 126.294,
            -14.471, -344.769, 126.521,
            -15.104, -343.372, 126.294,
            -14.471, -344.769, 126.521,
            -15.104, -344.769, 126.521,
            -15.104, -343.372, 126.294,
            -14.471, -344.769, 126.521,
            -14.471, -346.146, 126.197,
            -15.104, -344.769, 126.521,
            -14.471, -346.146, 126.197,
            -15.104, -346.146, 126.197,
            -15.104, -344.769, 126.521,
            -14.471, -346.146, 126.197,
            -14.471, -347.295, 125.370,
            -15.104, -346.146, 126.197,
            -14.471, -347.295, 125.370,
            -15.104, -347.295, 125.370,
            -15.104, -346.146, 126.197,
            -14.471, -347.295, 125.370,
            -14.471, -348.039, 124.167,
            -15.104, -347.295, 125.370,
            -14.471, -348.039, 124.167,
            -15.104, -348.039, 124.167,
            -15.104, -347.295, 125.370,
            -14.471, -348.039, 124.167,
            -14.471, -348.267, 122.770,
            -15.104, -348.039, 124.167,
            -14.471, -348.267, 122.770,
            -15.104, -348.267, 122.770,
            -15.104, -348.039, 124.167,
            -14.471, -348.267, 122.770,
            -14.471, -347.942, 121.393,
            -15.104, -348.267, 122.770,
            -14.471, -347.942, 121.393,
            -15.104, -347.942, 121.393,
            -15.104, -348.267, 122.770,
            -14.471, -347.942, 121.393,
            -14.471, -347.116, 120.245,
            -15.104, -347.942, 121.393,
            -14.471, -347.116, 120.245,
            -15.104, -347.116, 120.245,
            -15.104, -347.942, 121.393,
            -14.471, -347.116, 120.245,
            -14.471, -345.913, 119.500,
            -15.104, -347.116, 120.245,
            -14.471, -345.913, 119.500,
            -15.104, -345.913, 119.500,
            -15.104, -347.116, 120.245,
            -14.471, -345.913, 119.500,
            -14.471, -344.516, 119.273,
            -15.104, -345.913, 119.500,
            -14.471, -344.516, 119.273,
            -15.104, -344.516, 119.273,
            -15.104, -345.913, 119.500,
            -14.471, -344.516, 119.273,
            -14.471, -343.138, 119.597,
            -15.104, -344.516, 119.273,
            -14.471, -343.138, 119.597,
            -15.104, -343.138, 119.597,
            -15.104, -344.516, 119.273,
            -14.471, -343.138, 119.597,
            -14.471, -341.990, 120.424,
            -15.104, -343.138, 119.597,
            -14.471, -341.990, 120.424,
            -15.104, -341.990, 120.424,
            -15.104, -343.138, 119.597,
            -14.471, -341.990, 120.424,
            -14.471, -341.245, 121.627,
            -15.104, -341.990, 120.424,
            -14.471, -341.245, 121.627,
            -15.104, -341.245, 121.627,
            -15.104, -341.990, 120.424,
            -14.471, -341.245, 121.627,
            -14.471, -341.018, 123.024,
            -15.104, -341.245, 121.627,
            -14.471, -341.018, 123.024,
            -15.104, -341.018, 123.024,
            -15.104, -341.245, 121.627,
            -14.471, -341.342, 124.401,
            -14.471, -341.018, 123.024,
            -14.471, -344.642, 122.897,
            -14.471, -342.169, 125.549,
            -14.471, -341.342, 124.401,
            -14.471, -344.642, 122.897,
            -14.471, -343.372, 126.294,
            -14.471, -342.169, 125.549,
            -14.471, -344.642, 122.897,
            -14.471, -344.769, 126.521,
            -14.471, -343.372, 126.294,
            -14.471, -344.642, 122.897,
            -14.471, -346.146, 126.197,
            -14.471, -344.769, 126.521,
            -14.471, -344.642, 122.897,
            -14.471, -347.295, 125.370,
            -14.471, -346.146, 126.197,
            -14.471, -344.642, 122.897,
            -14.471, -348.039, 124.167,
            -14.471, -347.295, 125.370,
            -14.471, -344.642, 122.897,
            -14.471, -348.267, 122.770,
            -14.471, -348.039, 124.167,
            -14.471, -344.642, 122.897,
            -14.471, -347.942, 121.393,
            -14.471, -348.267, 122.770,
            -14.471, -344.642, 122.897,
            -14.471, -347.116, 120.245,
            -14.471, -347.942, 121.393,
            -14.471, -344.642, 122.897,
            -14.471, -345.913, 119.500,
            -14.471, -347.116, 120.245,
            -14.471, -344.642, 122.897,
            -14.471, -344.516, 119.273,
            -14.471, -345.913, 119.500,
            -14.471, -344.642, 122.897,
            -14.471, -343.138, 119.597,
            -14.471, -344.516, 119.273,
            -14.471, -344.642, 122.897,
            -14.471, -341.990, 120.424,
            -14.471, -343.138, 119.597,
            -14.471, -344.642, 122.897,
            -14.471, -341.245, 121.627,
            -14.471, -341.990, 120.424,
            -14.471, -344.642, 122.897,
            -14.471, -341.018, 123.024,
            -14.471, -341.245, 121.627,
               -14.471, -344.642, 122.897
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
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
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
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
            0.268, 0.963, 0.034,
            0.268, 0.902, -0.337,
            0.000, 0.999, 0.035,
            0.268, 0.902, -0.337,
            0.000, 0.937, -0.350,
            0.000, 0.999, 0.035,
            0.268, 0.902, -0.337,
            0.268, 0.705, -0.657,
            0.000, 0.937, -0.350,
            0.268, 0.705, -0.657,
            0.000, 0.731, -0.682,
            0.000, 0.937, -0.350,
            0.268, 0.705, -0.657,
            0.268, 0.400, -0.877,
            0.000, 0.731, -0.682,
            0.268, 0.400, -0.877,
            0.000, 0.415, -0.910,
            0.000, 0.731, -0.682,
            0.268, 0.400, -0.877,
            0.268, 0.034, -0.963,
            0.000, 0.415, -0.910,
            0.268, 0.034, -0.963,
            0.000, 0.035, -0.999,
            0.000, 0.415, -0.910,
            0.268, 0.034, -0.963,
            0.268, -0.337, -0.902,
            0.000, 0.035, -0.999,
            0.268, -0.337, -0.902,
            0.000, -0.350, -0.937,
            0.000, 0.035, -0.999,
            0.268, -0.337, -0.902,
            0.268, -0.657, -0.705,
            0.000, -0.350, -0.937,
            0.268, -0.657, -0.705,
            0.000, -0.682, -0.731,
            0.000, -0.350, -0.937,
            0.268, -0.657, -0.705,
            0.268, -0.877, -0.400,
            0.000, -0.682, -0.731,
            0.268, -0.877, -0.400,
            0.000, -0.910, -0.415,
            0.000, -0.682, -0.731,
            0.268, -0.877, -0.400,
            0.268, -0.963, -0.034,
            0.000, -0.910, -0.415,
            0.268, -0.963, -0.034,
            0.000, -0.999, -0.035,
            0.000, -0.910, -0.415,
            0.268, -0.963, -0.034,
            0.268, -0.902, 0.337,
            0.000, -0.999, -0.035,
            0.268, -0.902, 0.337,
            0.000, -0.937, 0.350,
            0.000, -0.999, -0.035,
            0.268, -0.902, 0.337,
            0.268, -0.705, 0.657,
            0.000, -0.937, 0.350,
            0.268, -0.705, 0.657,
            0.000, -0.731, 0.682,
            0.000, -0.937, 0.350,
            0.268, -0.705, 0.657,
            0.268, -0.400, 0.877,
            0.000, -0.731, 0.682,
            0.268, -0.400, 0.877,
            0.000, -0.415, 0.910,
            0.000, -0.731, 0.682,
            0.268, -0.400, 0.877,
            0.268, -0.034, 0.963,
            0.000, -0.415, 0.910,
            0.268, -0.034, 0.963,
            0.000, -0.035, 0.999,
            0.000, -0.415, 0.910,
            0.268, -0.034, 0.963,
            0.268, 0.337, 0.902,
            0.000, -0.035, 0.999,
            0.268, 0.337, 0.902,
            0.000, 0.350, 0.937,
            0.000, -0.035, 0.999,
            0.268, 0.337, 0.902,
            0.268, 0.657, 0.705,
            0.000, 0.350, 0.937,
            0.268, 0.657, 0.705,
            0.000, 0.682, 0.731,
            0.000, 0.350, 0.937,
            0.268, 0.657, 0.705,
            0.268, 0.877, 0.400,
            0.000, 0.682, 0.731,
            0.268, 0.877, 0.400,
            0.000, 0.910, 0.415,
            0.000, 0.682, 0.731,
            0.268, 0.877, 0.400,
            0.268, 0.963, 0.034,
            0.000, 0.910, 0.415,
            0.268, 0.963, 0.034,
            0.000, 0.999, 0.035,
            0.000, 0.910, 0.415,
            0.825, 0.565, 0.020,
            0.825, 0.530, -0.198,
            0.268, 0.963, 0.034,
            0.825, 0.530, -0.198,
            0.268, 0.902, -0.337,
            0.268, 0.963, 0.034,
            0.825, 0.530, -0.198,
            0.825, 0.414, -0.386,
            0.268, 0.902, -0.337,
            0.825, 0.414, -0.386,
            0.268, 0.705, -0.657,
            0.268, 0.902, -0.337,
            0.825, 0.414, -0.386,
            0.825, 0.235, -0.515,
            0.268, 0.705, -0.657,
            0.825, 0.235, -0.515,
            0.268, 0.400, -0.877,
            0.268, 0.705, -0.657,
            0.825, 0.235, -0.515,
            0.825, 0.020, -0.565,
            0.268, 0.400, -0.877,
            0.825, 0.020, -0.565,
            0.268, 0.034, -0.963,
            0.268, 0.400, -0.877,
            0.825, 0.020, -0.565,
            0.825, -0.198, -0.530,
            0.268, 0.034, -0.963,
            0.825, -0.198, -0.530,
            0.268, -0.337, -0.902,
            0.268, 0.034, -0.963,
            0.825, -0.198, -0.530,
            0.825, -0.386, -0.414,
            0.268, -0.337, -0.902,
            0.825, -0.386, -0.414,
            0.268, -0.657, -0.705,
            0.268, -0.337, -0.902,
            0.825, -0.386, -0.414,
            0.825, -0.515, -0.235,
            0.268, -0.657, -0.705,
            0.825, -0.515, -0.235,
            0.268, -0.877, -0.400,
            0.268, -0.657, -0.705,
            0.825, -0.515, -0.235,
            0.825, -0.565, -0.020,
            0.268, -0.877, -0.400,
            0.825, -0.565, -0.020,
            0.268, -0.963, -0.034,
            0.268, -0.877, -0.400,
            0.825, -0.565, -0.020,
            0.825, -0.530, 0.198,
            0.268, -0.963, -0.034,
            0.825, -0.530, 0.198,
            0.268, -0.902, 0.337,
            0.268, -0.963, -0.034,
            0.825, -0.530, 0.198,
            0.825, -0.414, 0.386,
            0.268, -0.902, 0.337,
            0.825, -0.414, 0.386,
            0.268, -0.705, 0.657,
            0.268, -0.902, 0.337,
            0.825, -0.414, 0.386,
            0.825, -0.235, 0.515,
            0.268, -0.705, 0.657,
            0.825, -0.235, 0.515,
            0.268, -0.400, 0.877,
            0.268, -0.705, 0.657,
            0.825, -0.235, 0.515,
            0.825, -0.020, 0.565,
            0.268, -0.400, 0.877,
            0.825, -0.020, 0.565,
            0.268, -0.034, 0.963,
            0.268, -0.400, 0.877,
            0.825, -0.020, 0.565,
            0.825, 0.198, 0.530,
            0.268, -0.034, 0.963,
            0.825, 0.198, 0.530,
            0.268, 0.337, 0.902,
            0.268, -0.034, 0.963,
            0.825, 0.198, 0.530,
            0.825, 0.386, 0.414,
            0.268, 0.337, 0.902,
            0.825, 0.386, 0.414,
            0.268, 0.657, 0.705,
            0.268, 0.337, 0.902,
            0.825, 0.386, 0.414,
            0.825, 0.515, 0.235,
            0.268, 0.657, 0.705,
            0.825, 0.515, 0.235,
            0.268, 0.877, 0.400,
            0.268, 0.657, 0.705,
            0.825, 0.515, 0.235,
            0.825, 0.565, 0.020,
            0.268, 0.877, 0.400,
            0.825, 0.565, 0.020,
            0.268, 0.963, 0.034,
            0.268, 0.877, 0.400,
            0.791, -0.611, -0.021,
            0.791, -0.573, 0.214,
            0.825, 0.565, 0.020,
            0.791, -0.573, 0.214,
            0.825, 0.530, -0.198,
            0.825, 0.565, 0.020,
            0.791, -0.573, 0.214,
            0.791, -0.447, 0.417,
            0.825, 0.530, -0.198,
            0.791, -0.447, 0.417,
            0.825, 0.414, -0.386,
            0.825, 0.530, -0.198,
            0.791, -0.447, 0.417,
            0.791, -0.254, 0.557,
            0.825, 0.414, -0.386,
            0.791, -0.254, 0.557,
            0.825, 0.235, -0.515,
            0.825, 0.414, -0.386,
            0.791, -0.254, 0.557,
            0.791, -0.021, 0.611,
            0.825, 0.235, -0.515,
            0.791, -0.021, 0.611,
            0.825, 0.020, -0.565,
            0.825, 0.235, -0.515,
            0.791, -0.021, 0.611,
            0.791, 0.214, 0.573,
            0.825, 0.020, -0.565,
            0.791, 0.214, 0.573,
            0.825, -0.198, -0.530,
            0.825, 0.020, -0.565,
            0.791, 0.214, 0.573,
            0.791, 0.417, 0.447,
            0.825, -0.198, -0.530,
            0.791, 0.417, 0.447,
            0.825, -0.386, -0.414,
            0.825, -0.198, -0.530,
            0.791, 0.417, 0.447,
            0.791, 0.557, 0.254,
            0.825, -0.386, -0.414,
            0.791, 0.557, 0.254,
            0.825, -0.515, -0.235,
            0.825, -0.386, -0.414,
            0.791, 0.557, 0.254,
            0.791, 0.611, 0.021,
            0.825, -0.515, -0.235,
            0.791, 0.611, 0.021,
            0.825, -0.565, -0.020,
            0.825, -0.515, -0.235,
            0.791, 0.611, 0.021,
            0.791, 0.573, -0.214,
            0.825, -0.565, -0.020,
            0.791, 0.573, -0.214,
            0.825, -0.530, 0.198,
            0.825, -0.565, -0.020,
            0.791, 0.573, -0.214,
            0.791, 0.447, -0.417,
            0.825, -0.530, 0.198,
            0.791, 0.447, -0.417,
            0.825, -0.414, 0.386,
            0.825, -0.530, 0.198,
            0.791, 0.447, -0.417,
            0.791, 0.254, -0.557,
            0.825, -0.414, 0.386,
            0.791, 0.254, -0.557,
            0.825, -0.235, 0.515,
            0.825, -0.414, 0.386,
            0.791, 0.254, -0.557,
            0.791, 0.021, -0.611,
            0.825, -0.235, 0.515,
            0.791, 0.021, -0.611,
            0.825, -0.020, 0.565,
            0.825, -0.235, 0.515,
            0.791, 0.021, -0.611,
            0.791, -0.214, -0.573,
            0.825, -0.020, 0.565,
            0.791, -0.214, -0.573,
            0.825, 0.198, 0.530,
            0.825, -0.020, 0.565,
            0.791, -0.214, -0.573,
            0.791, -0.417, -0.447,
            0.825, 0.198, 0.530,
            0.791, -0.417, -0.447,
            0.825, 0.386, 0.414,
            0.825, 0.198, 0.530,
            0.791, -0.417, -0.447,
            0.791, -0.557, -0.254,
            0.825, 0.386, 0.414,
            0.791, -0.557, -0.254,
            0.825, 0.515, 0.235,
            0.825, 0.386, 0.414,
            0.791, -0.557, -0.254,
            0.791, -0.611, -0.021,
            0.825, 0.515, 0.235,
            0.791, -0.611, -0.021,
            0.825, 0.565, 0.020,
            0.825, 0.515, 0.235,
            0.000, -0.999, -0.035,
            0.000, -0.937, 0.350,
            0.791, -0.611, -0.021,
            0.000, -0.937, 0.350,
            0.791, -0.573, 0.214,
            0.791, -0.611, -0.021,
            0.000, -0.937, 0.350,
            0.000, -0.731, 0.682,
            0.791, -0.573, 0.214,
            0.000, -0.731, 0.682,
            0.791, -0.447, 0.417,
            0.791, -0.573, 0.214,
            0.000, -0.731, 0.682,
            -0.000, -0.415, 0.910,
            0.791, -0.447, 0.417,
            -0.000, -0.415, 0.910,
            0.791, -0.254, 0.557,
            0.791, -0.447, 0.417,
            -0.000, -0.415, 0.910,
            -0.000, -0.035, 0.999,
            0.791, -0.254, 0.557,
            -0.000, -0.035, 0.999,
            0.791, -0.021, 0.611,
            0.791, -0.254, 0.557,
            -0.000, -0.035, 0.999,
            0.000, 0.350, 0.937,
            0.791, -0.021, 0.611,
            0.000, 0.350, 0.937,
            0.791, 0.214, 0.573,
            0.791, -0.021, 0.611,
            0.000, 0.350, 0.937,
            0.000, 0.682, 0.731,
            0.791, 0.214, 0.573,
            0.000, 0.682, 0.731,
            0.791, 0.417, 0.447,
            0.791, 0.214, 0.573,
            0.000, 0.682, 0.731,
            0.000, 0.910, 0.415,
            0.791, 0.417, 0.447,
            0.000, 0.910, 0.415,
            0.791, 0.557, 0.254,
            0.791, 0.417, 0.447,
            0.000, 0.910, 0.415,
            0.000, 0.999, 0.035,
            0.791, 0.557, 0.254,
            0.000, 0.999, 0.035,
            0.791, 0.611, 0.021,
            0.791, 0.557, 0.254,
            0.000, 0.999, 0.035,
            0.000, 0.937, -0.350,
            0.791, 0.611, 0.021,
            0.000, 0.937, -0.350,
            0.791, 0.573, -0.214,
            0.791, 0.611, 0.021,
            0.000, 0.937, -0.350,
            0.000, 0.731, -0.682,
            0.791, 0.573, -0.214,
            0.000, 0.731, -0.682,
            0.791, 0.447, -0.417,
            0.791, 0.573, -0.214,
            0.000, 0.731, -0.682,
            0.000, 0.415, -0.910,
            0.791, 0.447, -0.417,
            0.000, 0.415, -0.910,
            0.791, 0.254, -0.557,
            0.791, 0.447, -0.417,
            0.000, 0.415, -0.910,
            0.000, 0.035, -0.999,
            0.791, 0.254, -0.557,
            0.000, 0.035, -0.999,
            0.791, 0.021, -0.611,
            0.791, 0.254, -0.557,
            0.000, 0.035, -0.999,
            0.000, -0.350, -0.937,
            0.791, 0.021, -0.611,
            0.000, -0.350, -0.937,
            0.791, -0.214, -0.573,
            0.791, 0.021, -0.611,
            0.000, -0.350, -0.937,
            0.000, -0.682, -0.731,
            0.791, -0.214, -0.573,
            0.000, -0.682, -0.731,
            0.791, -0.417, -0.447,
            0.791, -0.214, -0.573,
            0.000, -0.682, -0.731,
            0.000, -0.910, -0.415,
            0.791, -0.417, -0.447,
            0.000, -0.910, -0.415,
            0.791, -0.557, -0.254,
            0.791, -0.417, -0.447,
            0.000, -0.910, -0.415,
            0.000, -0.999, -0.035,
            0.791, -0.557, -0.254,
            0.000, -0.999, -0.035,
            0.791, -0.611, -0.021,
            0.791, -0.557, -0.254,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
               1.000, -0.000, -0.000
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
