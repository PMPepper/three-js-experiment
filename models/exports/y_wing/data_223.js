function create_geometry_223(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -9.695, -344.642, 122.897,
            -9.695, -338.537, 125.679,
            -9.695, -337.937, 123.131,
            -9.695, -344.642, 122.897,
            -9.695, -340.067, 127.804,
            -9.695, -338.537, 125.679,
            -9.695, -344.642, 122.897,
            -9.695, -342.293, 129.181,
            -9.695, -340.067, 127.804,
            -9.695, -344.642, 122.897,
            -9.695, -344.876, 129.602,
            -9.695, -342.293, 129.181,
            -9.695, -344.642, 122.897,
            -9.695, -347.425, 129.002,
            -9.695, -344.876, 129.602,
            -9.695, -344.642, 122.897,
            -9.695, -349.549, 127.473,
            -9.695, -347.425, 129.002,
            -9.695, -344.642, 122.897,
            -9.695, -350.927, 125.247,
            -9.695, -349.549, 127.473,
            -9.695, -344.642, 122.897,
            -9.695, -351.348, 122.663,
            -9.695, -350.927, 125.247,
            -9.695, -344.642, 122.897,
            -9.695, -350.747, 120.115,
            -9.695, -351.348, 122.663,
            -9.695, -344.642, 122.897,
            -9.695, -349.218, 117.990,
            -9.695, -350.747, 120.115,
            -9.695, -344.642, 122.897,
            -9.695, -346.992, 116.613,
            -9.695, -349.218, 117.990,
            -9.695, -344.642, 122.897,
            -9.695, -344.408, 116.192,
            -9.695, -346.992, 116.613,
            -9.695, -344.642, 122.897,
            -9.695, -341.860, 116.792,
            -9.695, -344.408, 116.192,
            -9.695, -344.642, 122.897,
            -9.695, -339.735, 118.321,
            -9.695, -341.860, 116.792,
            -9.695, -344.642, 122.897,
            -9.695, -338.358, 120.547,
            -9.695, -339.735, 118.321,
            -9.695, -344.642, 122.897,
            -9.695, -337.937, 123.131,
            -9.695, -338.358, 120.547,
            -9.695, -337.937, 123.131,
            -7.558, -338.537, 125.679,
            -7.558, -337.937, 123.131,
            -9.695, -337.937, 123.131,
            -9.695, -338.537, 125.679,
            -7.558, -338.537, 125.679,
            -9.695, -338.537, 125.679,
            -7.558, -340.067, 127.804,
            -7.558, -338.537, 125.679,
            -9.695, -338.537, 125.679,
            -9.695, -340.067, 127.804,
            -7.558, -340.067, 127.804,
            -9.695, -340.067, 127.804,
            -7.558, -342.293, 129.181,
            -7.558, -340.067, 127.804,
            -9.695, -340.067, 127.804,
            -9.695, -342.293, 129.181,
            -7.558, -342.293, 129.181,
            -9.695, -342.293, 129.181,
            -7.558, -344.876, 129.602,
            -7.558, -342.293, 129.181,
            -9.695, -342.293, 129.181,
            -9.695, -344.876, 129.602,
            -7.558, -344.876, 129.602,
            -9.695, -344.876, 129.602,
            -7.558, -347.425, 129.002,
            -7.558, -344.876, 129.602,
            -9.695, -344.876, 129.602,
            -9.695, -347.425, 129.002,
            -7.558, -347.425, 129.002,
            -9.695, -347.425, 129.002,
            -7.558, -349.549, 127.473,
            -7.558, -347.425, 129.002,
            -9.695, -347.425, 129.002,
            -9.695, -349.549, 127.473,
            -7.558, -349.549, 127.473,
            -9.695, -349.549, 127.473,
            -7.558, -350.927, 125.247,
            -7.558, -349.549, 127.473,
            -9.695, -349.549, 127.473,
            -9.695, -350.927, 125.247,
            -7.558, -350.927, 125.247,
            -9.695, -350.927, 125.247,
            -7.558, -351.348, 122.663,
            -7.558, -350.927, 125.247,
            -9.695, -350.927, 125.247,
            -9.695, -351.348, 122.663,
            -7.558, -351.348, 122.663,
            -9.695, -351.348, 122.663,
            -7.558, -350.747, 120.115,
            -7.558, -351.348, 122.663,
            -9.695, -351.348, 122.663,
            -9.695, -350.747, 120.115,
            -7.558, -350.747, 120.115,
            -9.695, -350.747, 120.115,
            -7.558, -349.218, 117.990,
            -7.558, -350.747, 120.115,
            -9.695, -350.747, 120.115,
            -9.695, -349.218, 117.990,
            -7.558, -349.218, 117.990,
            -9.695, -349.218, 117.990,
            -7.558, -346.992, 116.613,
            -7.558, -349.218, 117.990,
            -9.695, -349.218, 117.990,
            -9.695, -346.992, 116.613,
            -7.558, -346.992, 116.613,
            -9.695, -346.992, 116.613,
            -7.558, -344.408, 116.192,
            -7.558, -346.992, 116.613,
            -9.695, -346.992, 116.613,
            -9.695, -344.408, 116.192,
            -7.558, -344.408, 116.192,
            -9.695, -344.408, 116.192,
            -7.558, -341.860, 116.792,
            -7.558, -344.408, 116.192,
            -9.695, -344.408, 116.192,
            -9.695, -341.860, 116.792,
            -7.558, -341.860, 116.792,
            -9.695, -341.860, 116.792,
            -7.558, -339.735, 118.321,
            -7.558, -341.860, 116.792,
            -9.695, -341.860, 116.792,
            -9.695, -339.735, 118.321,
            -7.558, -339.735, 118.321,
            -9.695, -339.735, 118.321,
            -7.558, -338.358, 120.547,
            -7.558, -339.735, 118.321,
            -9.695, -339.735, 118.321,
            -9.695, -338.358, 120.547,
            -7.558, -338.358, 120.547,
            -9.695, -338.358, 120.547,
            -7.558, -337.937, 123.131,
            -7.558, -338.358, 120.547,
            -9.695, -338.358, 120.547,
            -9.695, -337.937, 123.131,
            -7.558, -337.937, 123.131,
            -7.558, -337.937, 123.131,
            -5.421, -339.758, 125.123,
            -5.421, -339.278, 123.084,
            -7.558, -337.937, 123.131,
            -7.558, -338.537, 125.679,
            -5.421, -339.758, 125.123,
            -7.558, -338.537, 125.679,
            -5.421, -340.982, 126.823,
            -5.421, -339.758, 125.123,
            -7.558, -338.537, 125.679,
            -7.558, -340.067, 127.804,
            -5.421, -340.982, 126.823,
            -7.558, -340.067, 127.804,
            -5.421, -342.763, 127.925,
            -5.421, -340.982, 126.823,
            -7.558, -340.067, 127.804,
            -7.558, -342.293, 129.181,
            -5.421, -342.763, 127.925,
            -7.558, -342.293, 129.181,
            -5.421, -344.830, 128.261,
            -5.421, -342.763, 127.925,
            -7.558, -342.293, 129.181,
            -7.558, -344.876, 129.602,
            -5.421, -344.830, 128.261,
            -7.558, -344.876, 129.602,
            -5.421, -346.868, 127.781,
            -5.421, -344.830, 128.261,
            -7.558, -344.876, 129.602,
            -7.558, -347.425, 129.002,
            -5.421, -346.868, 127.781,
            -7.558, -347.425, 129.002,
            -5.421, -348.568, 126.558,
            -5.421, -346.868, 127.781,
            -7.558, -347.425, 129.002,
            -7.558, -349.549, 127.473,
            -5.421, -348.568, 126.558,
            -7.558, -349.549, 127.473,
            -5.421, -349.670, 124.777,
            -5.421, -348.568, 126.558,
            -7.558, -349.549, 127.473,
            -7.558, -350.927, 125.247,
            -5.421, -349.670, 124.777,
            -7.558, -350.927, 125.247,
            -5.421, -350.006, 122.710,
            -5.421, -349.670, 124.777,
            -7.558, -350.927, 125.247,
            -7.558, -351.348, 122.663,
            -5.421, -350.006, 122.710,
            -7.558, -351.348, 122.663,
            -5.421, -349.526, 120.671,
            -5.421, -350.006, 122.710,
            -7.558, -351.348, 122.663,
            -7.558, -350.747, 120.115,
            -5.421, -349.526, 120.671,
            -7.558, -350.747, 120.115,
            -5.421, -348.303, 118.972,
            -5.421, -349.526, 120.671,
            -7.558, -350.747, 120.115,
            -7.558, -349.218, 117.990,
            -5.421, -348.303, 118.972,
            -7.558, -349.218, 117.990,
            -5.421, -346.522, 117.869,
            -5.421, -348.303, 118.972,
            -7.558, -349.218, 117.990,
            -7.558, -346.992, 116.613,
            -5.421, -346.522, 117.869,
            -7.558, -346.992, 116.613,
            -5.421, -344.455, 117.533,
            -5.421, -346.522, 117.869,
            -7.558, -346.992, 116.613,
            -7.558, -344.408, 116.192,
            -5.421, -344.455, 117.533,
            -7.558, -344.408, 116.192,
            -5.421, -342.416, 118.013,
            -5.421, -344.455, 117.533,
            -7.558, -344.408, 116.192,
            -7.558, -341.860, 116.792,
            -5.421, -342.416, 118.013,
            -7.558, -341.860, 116.792,
            -5.421, -340.717, 119.236,
            -5.421, -342.416, 118.013,
            -7.558, -341.860, 116.792,
            -7.558, -339.735, 118.321,
            -5.421, -340.717, 119.236,
            -7.558, -339.735, 118.321,
            -5.421, -339.615, 121.017,
            -5.421, -340.717, 119.236,
            -7.558, -339.735, 118.321,
            -7.558, -338.358, 120.547,
            -5.421, -339.615, 121.017,
            -7.558, -338.358, 120.547,
            -5.421, -339.278, 123.084,
            -5.421, -339.615, 121.017,
            -7.558, -338.358, 120.547,
            -7.558, -337.937, 123.131,
            -5.421, -339.278, 123.084,
            -5.421, -339.278, 123.084,
            -5.241, -341.342, 124.401,
            -5.241, -341.018, 123.024,
            -5.421, -339.278, 123.084,
            -5.421, -339.758, 125.123,
            -5.241, -341.342, 124.401,
            -5.421, -339.758, 125.123,
            -5.241, -342.169, 125.549,
            -5.241, -341.342, 124.401,
            -5.421, -339.758, 125.123,
            -5.421, -340.982, 126.823,
            -5.241, -342.169, 125.549,
            -5.421, -340.982, 126.823,
            -5.241, -343.372, 126.294,
            -5.241, -342.169, 125.549,
            -5.421, -340.982, 126.823,
            -5.421, -342.763, 127.925,
            -5.241, -343.372, 126.294,
            -5.421, -342.763, 127.925,
            -5.241, -344.769, 126.521,
            -5.241, -343.372, 126.294,
            -5.421, -342.763, 127.925,
            -5.421, -344.830, 128.261,
            -5.241, -344.769, 126.521,
            -5.421, -344.830, 128.261,
            -5.241, -346.146, 126.197,
            -5.241, -344.769, 126.521,
            -5.421, -344.830, 128.261,
            -5.421, -346.868, 127.781,
            -5.241, -346.146, 126.197,
            -5.421, -346.868, 127.781,
            -5.241, -347.295, 125.370,
            -5.241, -346.146, 126.197,
            -5.421, -346.868, 127.781,
            -5.421, -348.568, 126.558,
            -5.241, -347.295, 125.370,
            -5.421, -348.568, 126.558,
            -5.241, -348.039, 124.167,
            -5.241, -347.295, 125.370,
            -5.421, -348.568, 126.558,
            -5.421, -349.670, 124.777,
            -5.241, -348.039, 124.167,
            -5.421, -349.670, 124.777,
            -5.241, -348.267, 122.770,
            -5.241, -348.039, 124.167,
            -5.421, -349.670, 124.777,
            -5.421, -350.006, 122.710,
            -5.241, -348.267, 122.770,
            -5.421, -350.006, 122.710,
            -5.241, -347.942, 121.393,
            -5.241, -348.267, 122.770,
            -5.421, -350.006, 122.710,
            -5.421, -349.526, 120.671,
            -5.241, -347.942, 121.393,
            -5.421, -349.526, 120.671,
            -5.241, -347.116, 120.245,
            -5.241, -347.942, 121.393,
            -5.421, -349.526, 120.671,
            -5.421, -348.303, 118.972,
            -5.241, -347.116, 120.245,
            -5.421, -348.303, 118.972,
            -5.241, -345.912, 119.500,
            -5.241, -347.116, 120.245,
            -5.421, -348.303, 118.972,
            -5.421, -346.522, 117.869,
            -5.241, -345.912, 119.500,
            -5.421, -346.522, 117.869,
            -5.241, -344.516, 119.273,
            -5.241, -345.912, 119.500,
            -5.421, -346.522, 117.869,
            -5.421, -344.455, 117.533,
            -5.241, -344.516, 119.273,
            -5.421, -344.455, 117.533,
            -5.241, -343.138, 119.597,
            -5.241, -344.516, 119.273,
            -5.421, -344.455, 117.533,
            -5.421, -342.416, 118.013,
            -5.241, -343.138, 119.597,
            -5.421, -342.416, 118.013,
            -5.241, -341.990, 120.424,
            -5.241, -343.138, 119.597,
            -5.421, -342.416, 118.013,
            -5.421, -340.717, 119.236,
            -5.241, -341.990, 120.424,
            -5.421, -340.717, 119.236,
            -5.241, -341.245, 121.627,
            -5.241, -341.990, 120.424,
            -5.421, -340.717, 119.236,
            -5.421, -339.615, 121.017,
            -5.241, -341.245, 121.627,
            -5.421, -339.615, 121.017,
            -5.241, -341.018, 123.024,
            -5.241, -341.245, 121.627,
            -5.421, -339.615, 121.017,
            -5.421, -339.278, 123.084,
            -5.241, -341.018, 123.024,
            -5.241, -341.018, 123.024,
            -5.873, -341.342, 124.401,
            -5.873, -341.018, 123.024,
            -5.241, -341.018, 123.024,
            -5.241, -341.342, 124.401,
            -5.873, -341.342, 124.401,
            -5.241, -341.342, 124.401,
            -5.873, -342.169, 125.549,
            -5.873, -341.342, 124.401,
            -5.241, -341.342, 124.401,
            -5.241, -342.169, 125.549,
            -5.873, -342.169, 125.549,
            -5.241, -342.169, 125.549,
            -5.873, -343.372, 126.294,
            -5.873, -342.169, 125.549,
            -5.241, -342.169, 125.549,
            -5.241, -343.372, 126.294,
            -5.873, -343.372, 126.294,
            -5.241, -343.372, 126.294,
            -5.873, -344.769, 126.521,
            -5.873, -343.372, 126.294,
            -5.241, -343.372, 126.294,
            -5.241, -344.769, 126.521,
            -5.873, -344.769, 126.521,
            -5.241, -344.769, 126.521,
            -5.873, -346.146, 126.197,
            -5.873, -344.769, 126.521,
            -5.241, -344.769, 126.521,
            -5.241, -346.146, 126.197,
            -5.873, -346.146, 126.197,
            -5.241, -346.146, 126.197,
            -5.873, -347.295, 125.370,
            -5.873, -346.146, 126.197,
            -5.241, -346.146, 126.197,
            -5.241, -347.295, 125.370,
            -5.873, -347.295, 125.370,
            -5.241, -347.295, 125.370,
            -5.873, -348.039, 124.167,
            -5.873, -347.295, 125.370,
            -5.241, -347.295, 125.370,
            -5.241, -348.039, 124.167,
            -5.873, -348.039, 124.167,
            -5.241, -348.039, 124.167,
            -5.873, -348.267, 122.770,
            -5.873, -348.039, 124.167,
            -5.241, -348.039, 124.167,
            -5.241, -348.267, 122.770,
            -5.873, -348.267, 122.770,
            -5.241, -348.267, 122.770,
            -5.873, -347.942, 121.393,
            -5.873, -348.267, 122.770,
            -5.241, -348.267, 122.770,
            -5.241, -347.942, 121.393,
            -5.873, -347.942, 121.393,
            -5.241, -347.942, 121.393,
            -5.873, -347.116, 120.245,
            -5.873, -347.942, 121.393,
            -5.241, -347.942, 121.393,
            -5.241, -347.116, 120.245,
            -5.873, -347.116, 120.245,
            -5.241, -347.116, 120.245,
            -5.873, -345.912, 119.500,
            -5.873, -347.116, 120.245,
            -5.241, -347.116, 120.245,
            -5.241, -345.912, 119.500,
            -5.873, -345.912, 119.500,
            -5.241, -345.912, 119.500,
            -5.873, -344.516, 119.273,
            -5.873, -345.912, 119.500,
            -5.241, -345.912, 119.500,
            -5.241, -344.516, 119.273,
            -5.873, -344.516, 119.273,
            -5.241, -344.516, 119.273,
            -5.873, -343.138, 119.597,
            -5.873, -344.516, 119.273,
            -5.241, -344.516, 119.273,
            -5.241, -343.138, 119.597,
            -5.873, -343.138, 119.597,
            -5.241, -343.138, 119.597,
            -5.873, -341.990, 120.424,
            -5.873, -343.138, 119.597,
            -5.241, -343.138, 119.597,
            -5.241, -341.990, 120.424,
            -5.873, -341.990, 120.424,
            -5.241, -341.990, 120.424,
            -5.873, -341.245, 121.627,
            -5.873, -341.990, 120.424,
            -5.241, -341.990, 120.424,
            -5.241, -341.245, 121.627,
            -5.873, -341.245, 121.627,
            -5.241, -341.245, 121.627,
            -5.873, -341.018, 123.024,
            -5.873, -341.245, 121.627,
            -5.241, -341.245, 121.627,
            -5.241, -341.018, 123.024,
            -5.873, -341.018, 123.024,
            -5.873, -344.642, 122.897,
            -5.873, -341.018, 123.024,
            -5.873, -341.342, 124.401,
            -5.873, -344.642, 122.897,
            -5.873, -341.342, 124.401,
            -5.873, -342.169, 125.549,
            -5.873, -344.642, 122.897,
            -5.873, -342.169, 125.549,
            -5.873, -343.372, 126.294,
            -5.873, -344.642, 122.897,
            -5.873, -343.372, 126.294,
            -5.873, -344.769, 126.521,
            -5.873, -344.642, 122.897,
            -5.873, -344.769, 126.521,
            -5.873, -346.146, 126.197,
            -5.873, -344.642, 122.897,
            -5.873, -346.146, 126.197,
            -5.873, -347.295, 125.370,
            -5.873, -344.642, 122.897,
            -5.873, -347.295, 125.370,
            -5.873, -348.039, 124.167,
            -5.873, -344.642, 122.897,
            -5.873, -348.039, 124.167,
            -5.873, -348.267, 122.770,
            -5.873, -344.642, 122.897,
            -5.873, -348.267, 122.770,
            -5.873, -347.942, 121.393,
            -5.873, -344.642, 122.897,
            -5.873, -347.942, 121.393,
            -5.873, -347.116, 120.245,
            -5.873, -344.642, 122.897,
            -5.873, -347.116, 120.245,
            -5.873, -345.912, 119.500,
            -5.873, -344.642, 122.897,
            -5.873, -345.912, 119.500,
            -5.873, -344.516, 119.273,
            -5.873, -344.642, 122.897,
            -5.873, -344.516, 119.273,
            -5.873, -343.138, 119.597,
            -5.873, -344.642, 122.897,
            -5.873, -343.138, 119.597,
            -5.873, -341.990, 120.424,
            -5.873, -344.642, 122.897,
            -5.873, -341.990, 120.424,
            -5.873, -341.245, 121.627,
            -5.873, -344.642, 122.897,
            -5.873, -341.245, 121.627,
               -5.873, -341.018, 123.024
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            0.000, 0.999, 0.035,
            0.268, 0.877, 0.400,
            0.268, 0.963, 0.034,
            0.000, 0.999, 0.035,
            0.000, 0.910, 0.415,
            0.268, 0.877, 0.400,
            0.000, 0.910, 0.415,
            0.268, 0.657, 0.705,
            0.268, 0.877, 0.400,
            0.000, 0.910, 0.415,
            0.000, 0.682, 0.731,
            0.268, 0.657, 0.705,
            0.000, 0.682, 0.731,
            0.268, 0.337, 0.902,
            0.268, 0.657, 0.705,
            0.000, 0.682, 0.731,
            0.000, 0.350, 0.937,
            0.268, 0.337, 0.902,
            0.000, 0.350, 0.937,
            0.268, -0.034, 0.963,
            0.268, 0.337, 0.902,
            0.000, 0.350, 0.937,
            0.000, -0.035, 0.999,
            0.268, -0.034, 0.963,
            0.000, -0.035, 0.999,
            0.268, -0.400, 0.877,
            0.268, -0.034, 0.963,
            0.000, -0.035, 0.999,
            0.000, -0.415, 0.910,
            0.268, -0.400, 0.877,
            0.000, -0.415, 0.910,
            0.268, -0.705, 0.657,
            0.268, -0.400, 0.877,
            0.000, -0.415, 0.910,
            0.000, -0.731, 0.682,
            0.268, -0.705, 0.657,
            0.000, -0.731, 0.682,
            0.268, -0.902, 0.337,
            0.268, -0.705, 0.657,
            0.000, -0.731, 0.682,
            0.000, -0.937, 0.350,
            0.268, -0.902, 0.337,
            0.000, -0.937, 0.350,
            0.268, -0.963, -0.034,
            0.268, -0.902, 0.337,
            0.000, -0.937, 0.350,
            0.000, -0.999, -0.035,
            0.268, -0.963, -0.034,
            0.000, -0.999, -0.035,
            0.268, -0.877, -0.400,
            0.268, -0.963, -0.034,
            0.000, -0.999, -0.035,
            0.000, -0.910, -0.415,
            0.268, -0.877, -0.400,
            0.000, -0.910, -0.415,
            0.268, -0.657, -0.705,
            0.268, -0.877, -0.400,
            0.000, -0.910, -0.415,
            0.000, -0.682, -0.731,
            0.268, -0.657, -0.705,
            0.000, -0.682, -0.731,
            0.268, -0.337, -0.902,
            0.268, -0.657, -0.705,
            0.000, -0.682, -0.731,
            0.000, -0.350, -0.937,
            0.268, -0.337, -0.902,
            0.000, -0.350, -0.937,
            0.268, 0.034, -0.963,
            0.268, -0.337, -0.902,
            0.000, -0.350, -0.937,
            0.000, 0.035, -0.999,
            0.268, 0.034, -0.963,
            0.000, 0.035, -0.999,
            0.268, 0.400, -0.877,
            0.268, 0.034, -0.963,
            0.000, 0.035, -0.999,
            0.000, 0.415, -0.910,
            0.268, 0.400, -0.877,
            0.000, 0.415, -0.910,
            0.268, 0.705, -0.657,
            0.268, 0.400, -0.877,
            0.000, 0.415, -0.910,
            0.000, 0.731, -0.682,
            0.268, 0.705, -0.657,
            0.000, 0.731, -0.682,
            0.268, 0.902, -0.337,
            0.268, 0.705, -0.657,
            0.000, 0.731, -0.682,
            0.000, 0.937, -0.350,
            0.268, 0.902, -0.337,
            0.000, 0.937, -0.350,
            0.268, 0.963, 0.034,
            0.268, 0.902, -0.337,
            0.000, 0.937, -0.350,
            0.000, 0.999, 0.035,
            0.268, 0.963, 0.034,
            0.268, 0.963, 0.034,
            0.825, 0.515, 0.235,
            0.825, 0.565, 0.020,
            0.268, 0.963, 0.034,
            0.268, 0.877, 0.400,
            0.825, 0.515, 0.235,
            0.268, 0.877, 0.400,
            0.825, 0.386, 0.414,
            0.825, 0.515, 0.235,
            0.268, 0.877, 0.400,
            0.268, 0.657, 0.705,
            0.825, 0.386, 0.414,
            0.268, 0.657, 0.705,
            0.825, 0.198, 0.530,
            0.825, 0.386, 0.414,
            0.268, 0.657, 0.705,
            0.268, 0.337, 0.902,
            0.825, 0.198, 0.530,
            0.268, 0.337, 0.902,
            0.825, -0.020, 0.565,
            0.825, 0.198, 0.530,
            0.268, 0.337, 0.902,
            0.268, -0.034, 0.963,
            0.825, -0.020, 0.565,
            0.268, -0.034, 0.963,
            0.825, -0.235, 0.515,
            0.825, -0.020, 0.565,
            0.268, -0.034, 0.963,
            0.268, -0.400, 0.877,
            0.825, -0.235, 0.515,
            0.268, -0.400, 0.877,
            0.825, -0.414, 0.386,
            0.825, -0.235, 0.515,
            0.268, -0.400, 0.877,
            0.268, -0.705, 0.657,
            0.825, -0.414, 0.386,
            0.268, -0.705, 0.657,
            0.825, -0.530, 0.198,
            0.825, -0.414, 0.386,
            0.268, -0.705, 0.657,
            0.268, -0.902, 0.337,
            0.825, -0.530, 0.198,
            0.268, -0.902, 0.337,
            0.825, -0.565, -0.020,
            0.825, -0.530, 0.198,
            0.268, -0.902, 0.337,
            0.268, -0.963, -0.034,
            0.825, -0.565, -0.020,
            0.268, -0.963, -0.034,
            0.825, -0.515, -0.235,
            0.825, -0.565, -0.020,
            0.268, -0.963, -0.034,
            0.268, -0.877, -0.400,
            0.825, -0.515, -0.235,
            0.268, -0.877, -0.400,
            0.825, -0.386, -0.414,
            0.825, -0.515, -0.235,
            0.268, -0.877, -0.400,
            0.268, -0.657, -0.705,
            0.825, -0.386, -0.414,
            0.268, -0.657, -0.705,
            0.825, -0.198, -0.530,
            0.825, -0.386, -0.414,
            0.268, -0.657, -0.705,
            0.268, -0.337, -0.902,
            0.825, -0.198, -0.530,
            0.268, -0.337, -0.902,
            0.825, 0.020, -0.565,
            0.825, -0.198, -0.530,
            0.268, -0.337, -0.902,
            0.268, 0.034, -0.963,
            0.825, 0.020, -0.565,
            0.268, 0.034, -0.963,
            0.825, 0.235, -0.515,
            0.825, 0.020, -0.565,
            0.268, 0.034, -0.963,
            0.268, 0.400, -0.877,
            0.825, 0.235, -0.515,
            0.268, 0.400, -0.877,
            0.825, 0.414, -0.386,
            0.825, 0.235, -0.515,
            0.268, 0.400, -0.877,
            0.268, 0.705, -0.657,
            0.825, 0.414, -0.386,
            0.268, 0.705, -0.657,
            0.825, 0.530, -0.198,
            0.825, 0.414, -0.386,
            0.268, 0.705, -0.657,
            0.268, 0.902, -0.337,
            0.825, 0.530, -0.198,
            0.268, 0.902, -0.337,
            0.825, 0.565, 0.020,
            0.825, 0.530, -0.198,
            0.268, 0.902, -0.337,
            0.268, 0.963, 0.034,
            0.825, 0.565, 0.020,
            0.825, 0.565, 0.020,
            0.791, -0.557, -0.254,
            0.791, -0.611, -0.021,
            0.825, 0.565, 0.020,
            0.825, 0.515, 0.235,
            0.791, -0.557, -0.254,
            0.825, 0.515, 0.235,
            0.791, -0.417, -0.447,
            0.791, -0.557, -0.254,
            0.825, 0.515, 0.235,
            0.825, 0.386, 0.414,
            0.791, -0.417, -0.447,
            0.825, 0.386, 0.414,
            0.791, -0.214, -0.573,
            0.791, -0.417, -0.447,
            0.825, 0.386, 0.414,
            0.825, 0.198, 0.530,
            0.791, -0.214, -0.573,
            0.825, 0.198, 0.530,
            0.791, 0.021, -0.611,
            0.791, -0.214, -0.573,
            0.825, 0.198, 0.530,
            0.825, -0.020, 0.565,
            0.791, 0.021, -0.611,
            0.825, -0.020, 0.565,
            0.791, 0.254, -0.557,
            0.791, 0.021, -0.611,
            0.825, -0.020, 0.565,
            0.825, -0.235, 0.515,
            0.791, 0.254, -0.557,
            0.825, -0.235, 0.515,
            0.791, 0.447, -0.417,
            0.791, 0.254, -0.557,
            0.825, -0.235, 0.515,
            0.825, -0.414, 0.386,
            0.791, 0.447, -0.417,
            0.825, -0.414, 0.386,
            0.791, 0.573, -0.214,
            0.791, 0.447, -0.417,
            0.825, -0.414, 0.386,
            0.825, -0.530, 0.198,
            0.791, 0.573, -0.214,
            0.825, -0.530, 0.198,
            0.791, 0.611, 0.021,
            0.791, 0.573, -0.214,
            0.825, -0.530, 0.198,
            0.825, -0.565, -0.020,
            0.791, 0.611, 0.021,
            0.825, -0.565, -0.020,
            0.791, 0.557, 0.254,
            0.791, 0.611, 0.021,
            0.825, -0.565, -0.020,
            0.825, -0.515, -0.235,
            0.791, 0.557, 0.254,
            0.825, -0.515, -0.235,
            0.791, 0.417, 0.447,
            0.791, 0.557, 0.254,
            0.825, -0.515, -0.235,
            0.825, -0.386, -0.414,
            0.791, 0.417, 0.447,
            0.825, -0.386, -0.414,
            0.791, 0.214, 0.573,
            0.791, 0.417, 0.447,
            0.825, -0.386, -0.414,
            0.825, -0.198, -0.530,
            0.791, 0.214, 0.573,
            0.825, -0.198, -0.530,
            0.791, -0.021, 0.611,
            0.791, 0.214, 0.573,
            0.825, -0.198, -0.530,
            0.825, 0.020, -0.565,
            0.791, -0.021, 0.611,
            0.825, 0.020, -0.565,
            0.791, -0.254, 0.557,
            0.791, -0.021, 0.611,
            0.825, 0.020, -0.565,
            0.825, 0.235, -0.515,
            0.791, -0.254, 0.557,
            0.825, 0.235, -0.515,
            0.791, -0.447, 0.417,
            0.791, -0.254, 0.557,
            0.825, 0.235, -0.515,
            0.825, 0.414, -0.386,
            0.791, -0.447, 0.417,
            0.825, 0.414, -0.386,
            0.791, -0.573, 0.214,
            0.791, -0.447, 0.417,
            0.825, 0.414, -0.386,
            0.825, 0.530, -0.198,
            0.791, -0.573, 0.214,
            0.825, 0.530, -0.198,
            0.791, -0.611, -0.021,
            0.791, -0.573, 0.214,
            0.825, 0.530, -0.198,
            0.825, 0.565, 0.020,
            0.791, -0.611, -0.021,
            0.791, -0.611, -0.021,
            0.000, -0.910, -0.415,
            0.000, -0.999, -0.035,
            0.791, -0.611, -0.021,
            0.791, -0.557, -0.254,
            0.000, -0.910, -0.415,
            0.791, -0.557, -0.254,
            0.000, -0.682, -0.731,
            0.000, -0.910, -0.415,
            0.791, -0.557, -0.254,
            0.791, -0.417, -0.447,
            0.000, -0.682, -0.731,
            0.791, -0.417, -0.447,
            0.000, -0.350, -0.937,
            0.000, -0.682, -0.731,
            0.791, -0.417, -0.447,
            0.791, -0.214, -0.573,
            0.000, -0.350, -0.937,
            0.791, -0.214, -0.573,
            0.000, 0.035, -0.999,
            0.000, -0.350, -0.937,
            0.791, -0.214, -0.573,
            0.791, 0.021, -0.611,
            0.000, 0.035, -0.999,
            0.791, 0.021, -0.611,
            0.000, 0.415, -0.910,
            0.000, 0.035, -0.999,
            0.791, 0.021, -0.611,
            0.791, 0.254, -0.557,
            0.000, 0.415, -0.910,
            0.791, 0.254, -0.557,
            0.000, 0.731, -0.682,
            0.000, 0.415, -0.910,
            0.791, 0.254, -0.557,
            0.791, 0.447, -0.417,
            0.000, 0.731, -0.682,
            0.791, 0.447, -0.417,
            0.000, 0.937, -0.350,
            0.000, 0.731, -0.682,
            0.791, 0.447, -0.417,
            0.791, 0.573, -0.214,
            0.000, 0.937, -0.350,
            0.791, 0.573, -0.214,
            0.000, 0.999, 0.035,
            0.000, 0.937, -0.350,
            0.791, 0.573, -0.214,
            0.791, 0.611, 0.021,
            0.000, 0.999, 0.035,
            0.791, 0.611, 0.021,
            0.000, 0.910, 0.415,
            0.000, 0.999, 0.035,
            0.791, 0.611, 0.021,
            0.791, 0.557, 0.254,
            0.000, 0.910, 0.415,
            0.791, 0.557, 0.254,
            0.000, 0.682, 0.731,
            0.000, 0.910, 0.415,
            0.791, 0.557, 0.254,
            0.791, 0.417, 0.447,
            0.000, 0.682, 0.731,
            0.791, 0.417, 0.447,
            0.000, 0.350, 0.937,
            0.000, 0.682, 0.731,
            0.791, 0.417, 0.447,
            0.791, 0.214, 0.573,
            0.000, 0.350, 0.937,
            0.791, 0.214, 0.573,
            0.000, -0.035, 0.999,
            0.000, 0.350, 0.937,
            0.791, 0.214, 0.573,
            0.791, -0.021, 0.611,
            0.000, -0.035, 0.999,
            0.791, -0.021, 0.611,
            0.000, -0.415, 0.910,
            0.000, -0.035, 0.999,
            0.791, -0.021, 0.611,
            0.791, -0.254, 0.557,
            0.000, -0.415, 0.910,
            0.791, -0.254, 0.557,
            0.000, -0.731, 0.682,
            0.000, -0.415, 0.910,
            0.791, -0.254, 0.557,
            0.791, -0.447, 0.417,
            0.000, -0.731, 0.682,
            0.791, -0.447, 0.417,
            0.000, -0.937, 0.350,
            0.000, -0.731, 0.682,
            0.791, -0.447, 0.417,
            0.791, -0.573, 0.214,
            0.000, -0.937, 0.350,
            0.791, -0.573, 0.214,
            0.000, -0.999, -0.035,
            0.000, -0.937, 0.350,
            0.791, -0.573, 0.214,
            0.791, -0.611, -0.021,
            0.000, -0.999, -0.035,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
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
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
               1.000, 0.000, -0.000
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
