function create_geometry_198(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            7.848, -375.982, 124.831,
            7.848, -376.076, 117.374,
            8.479, -377.026, 125.846,
            7.848, -376.076, 117.374,
            8.479, -377.145, 116.478,
            8.479, -377.026, 125.846,
            7.848, -376.076, 117.374,
            7.848, -368.937, 116.204,
            8.479, -377.145, 116.478,
            7.848, -368.937, 116.204,
            8.479, -369.673, 115.253,
            8.479, -377.145, 116.478,
            7.848, -368.937, 116.204,
            7.848, -365.083, 107.466,
            8.479, -369.673, 115.253,
            7.848, -365.083, 107.466,
            8.479, -365.651, 106.134,
            8.479, -369.673, 115.253,
            7.848, -365.083, 107.466,
            7.848, -344.581, 114.925,
            8.479, -365.651, 106.134,
            7.848, -344.581, 114.925,
            8.479, -343.924, 114.039,
            8.479, -365.651, 106.134,
            7.848, -344.581, 114.925,
            7.848, -343.969, 115.744,
            8.479, -343.924, 114.039,
            7.848, -343.969, 115.744,
            8.479, -343.116, 115.119,
            8.479, -343.924, 114.039,
            7.848, -343.969, 115.744,
            7.848, -343.389, 116.553,
            8.479, -343.116, 115.119,
            7.848, -343.389, 116.553,
            8.479, -342.516, 115.957,
            8.479, -343.116, 115.119,
            7.848, -343.389, 116.553,
            7.848, -342.873, 117.345,
            8.479, -342.516, 115.957,
            7.848, -342.873, 117.345,
            8.479, -341.965, 116.803,
            8.479, -342.516, 115.957,
            7.848, -342.873, 117.345,
            7.848, -342.455, 118.111,
            8.479, -341.965, 116.803,
            7.848, -342.455, 118.111,
            8.479, -341.496, 117.660,
            8.479, -341.965, 116.803,
            7.848, -342.455, 118.111,
            7.848, -342.165, 118.840,
            8.479, -341.496, 117.660,
            7.848, -342.165, 118.840,
            8.479, -341.145, 118.546,
            8.479, -341.496, 117.660,
            7.848, -342.165, 118.840,
            7.848, -342.037, 119.526,
            8.479, -341.145, 118.546,
            7.848, -342.037, 119.526,
            8.479, -340.969, 119.482,
            8.479, -341.145, 118.546,
            7.848, -342.037, 119.526,
            7.848, -342.102, 120.158,
            8.479, -340.969, 119.482,
            7.848, -342.102, 120.158,
            8.479, -341.066, 120.415,
            8.479, -340.969, 119.482,
            7.848, -342.102, 120.158,
            7.848, -342.365, 120.809,
            8.479, -341.066, 120.415,
            7.848, -342.365, 120.809,
            8.479, -341.412, 121.272,
            8.479, -341.066, 120.415,
            7.848, -342.365, 120.809,
            7.848, -342.789, 121.547,
            8.479, -341.412, 121.272,
            7.848, -342.789, 121.547,
            8.479, -341.894, 122.111,
            8.479, -341.412, 121.272,
            7.848, -342.789, 121.547,
            7.848, -343.348, 122.359,
            8.479, -341.894, 122.111,
            7.848, -343.348, 122.359,
            8.479, -342.492, 122.980,
            8.479, -341.894, 122.111,
            7.848, -343.348, 122.359,
            7.848, -344.014, 123.228,
            8.479, -342.492, 122.980,
            7.848, -344.014, 123.228,
            8.479, -343.185, 123.885,
            8.479, -342.492, 122.980,
            7.848, -344.014, 123.228,
            7.848, -344.761, 124.142,
            8.479, -343.185, 123.885,
            7.848, -344.761, 124.142,
            8.479, -343.949, 124.819,
            8.479, -343.185, 123.885,
            7.848, -344.761, 124.142,
            7.848, -345.562, 125.084,
            8.479, -343.949, 124.819,
            7.848, -345.562, 125.084,
            8.479, -344.759, 125.772,
            8.479, -343.949, 124.819,
            7.848, -345.562, 125.084,
            7.848, -346.389, 126.041,
            8.479, -344.759, 125.772,
            7.848, -346.389, 126.041,
            8.479, -345.923, 127.119,
            8.479, -344.759, 125.772,
            7.848, -346.389, 126.041,
            7.848, -375.982, 124.831,
            8.479, -345.923, 127.119,
            7.848, -375.982, 124.831,
            8.479, -377.026, 125.846,
            8.479, -345.923, 127.119,
            8.479, -377.026, 125.846,
            8.479, -377.145, 116.478,
            11.637, -377.026, 125.846,
            8.479, -377.145, 116.478,
            11.637, -377.145, 116.478,
            11.637, -377.026, 125.846,
            8.479, -377.145, 116.478,
            8.479, -369.673, 115.253,
            11.637, -377.145, 116.478,
            8.479, -369.673, 115.253,
            11.637, -369.673, 115.253,
            11.637, -377.145, 116.478,
            8.479, -369.673, 115.253,
            8.479, -365.651, 106.134,
            11.637, -369.673, 115.253,
            8.479, -365.651, 106.134,
            11.637, -365.651, 106.134,
            11.637, -369.673, 115.253,
            8.479, -365.651, 106.134,
            8.479, -343.924, 114.039,
            11.637, -365.651, 106.134,
            8.479, -343.924, 114.039,
            11.637, -343.924, 114.039,
            11.637, -365.651, 106.134,
            8.479, -343.924, 114.039,
            8.479, -343.116, 115.119,
            11.637, -343.924, 114.039,
            8.479, -343.116, 115.119,
            11.637, -343.116, 115.119,
            11.637, -343.924, 114.039,
            8.479, -343.116, 115.119,
            8.479, -342.516, 115.957,
            11.637, -343.116, 115.119,
            8.479, -342.516, 115.957,
            11.637, -342.516, 115.957,
            11.637, -343.116, 115.119,
            8.479, -342.516, 115.957,
            8.479, -341.965, 116.803,
            11.637, -342.516, 115.957,
            8.479, -341.965, 116.803,
            11.637, -341.965, 116.803,
            11.637, -342.516, 115.957,
            8.479, -341.965, 116.803,
            8.479, -341.496, 117.660,
            11.637, -341.965, 116.803,
            8.479, -341.496, 117.660,
            11.637, -341.496, 117.660,
            11.637, -341.965, 116.803,
            8.479, -341.496, 117.660,
            8.479, -341.145, 118.546,
            11.637, -341.496, 117.660,
            8.479, -341.145, 118.546,
            11.637, -341.145, 118.546,
            11.637, -341.496, 117.660,
            8.479, -341.145, 118.546,
            8.479, -340.969, 119.482,
            11.637, -341.145, 118.546,
            8.479, -340.969, 119.482,
            11.637, -340.969, 119.482,
            11.637, -341.145, 118.546,
            8.479, -340.969, 119.482,
            8.479, -341.066, 120.415,
            11.637, -340.969, 119.482,
            8.479, -341.066, 120.415,
            11.637, -341.066, 120.415,
            11.637, -340.969, 119.482,
            8.479, -341.066, 120.415,
            8.479, -341.412, 121.272,
            11.637, -341.066, 120.415,
            8.479, -341.412, 121.272,
            11.637, -341.412, 121.272,
            11.637, -341.066, 120.415,
            8.479, -341.412, 121.272,
            8.479, -341.894, 122.111,
            11.637, -341.412, 121.272,
            8.479, -341.894, 122.111,
            11.637, -341.894, 122.111,
            11.637, -341.412, 121.272,
            8.479, -341.894, 122.111,
            8.479, -342.492, 122.980,
            11.637, -341.894, 122.111,
            8.479, -342.492, 122.980,
            11.637, -342.492, 122.980,
            11.637, -341.894, 122.111,
            8.479, -342.492, 122.980,
            8.479, -343.185, 123.885,
            11.637, -342.492, 122.980,
            8.479, -343.185, 123.885,
            11.637, -343.185, 123.885,
            11.637, -342.492, 122.980,
            8.479, -343.185, 123.885,
            8.479, -343.949, 124.819,
            11.637, -343.185, 123.885,
            8.479, -343.949, 124.819,
            11.637, -343.949, 124.819,
            11.637, -343.185, 123.885,
            8.479, -343.949, 124.819,
            8.479, -344.759, 125.772,
            11.637, -343.949, 124.819,
            8.479, -344.759, 125.772,
            11.637, -344.759, 125.772,
            11.637, -343.949, 124.819,
            8.479, -344.759, 125.772,
            8.479, -345.923, 127.119,
            11.637, -344.759, 125.772,
            8.479, -345.923, 127.119,
            11.637, -345.923, 127.119,
            11.637, -344.759, 125.772,
            8.479, -345.923, 127.119,
            8.479, -377.026, 125.846,
            11.637, -345.923, 127.119,
            8.479, -377.026, 125.846,
            11.637, -377.026, 125.846,
            11.637, -345.923, 127.119,
            11.637, -377.026, 125.846,
            11.637, -377.145, 116.478,
            12.268, -375.982, 124.831,
            11.637, -377.145, 116.478,
            12.268, -376.076, 117.374,
            12.268, -375.982, 124.831,
            11.637, -377.145, 116.478,
            11.637, -369.673, 115.253,
            12.268, -376.076, 117.374,
            11.637, -369.673, 115.253,
            12.268, -368.937, 116.204,
            12.268, -376.076, 117.374,
            11.637, -369.673, 115.253,
            11.637, -365.651, 106.134,
            12.268, -368.937, 116.204,
            11.637, -365.651, 106.134,
            12.268, -365.083, 107.466,
            12.268, -368.937, 116.204,
            11.637, -365.651, 106.134,
            11.637, -343.924, 114.039,
            12.268, -365.083, 107.466,
            11.637, -343.924, 114.039,
            12.268, -344.581, 114.925,
            12.268, -365.083, 107.466,
            11.637, -343.924, 114.039,
            11.637, -343.116, 115.119,
            12.268, -344.581, 114.925,
            11.637, -343.116, 115.119,
            12.268, -343.969, 115.744,
            12.268, -344.581, 114.925,
            11.637, -343.116, 115.119,
            11.637, -342.516, 115.957,
            12.268, -343.969, 115.744,
            11.637, -342.516, 115.957,
            12.268, -343.389, 116.553,
            12.268, -343.969, 115.744,
            11.637, -342.516, 115.957,
            11.637, -341.965, 116.803,
            12.268, -343.389, 116.553,
            11.637, -341.965, 116.803,
            12.268, -342.873, 117.345,
            12.268, -343.389, 116.553,
            11.637, -341.965, 116.803,
            11.637, -341.496, 117.660,
            12.268, -342.873, 117.345,
            11.637, -341.496, 117.660,
            12.268, -342.455, 118.111,
            12.268, -342.873, 117.345,
            11.637, -341.496, 117.660,
            11.637, -341.145, 118.546,
            12.268, -342.455, 118.111,
            11.637, -341.145, 118.546,
            12.268, -342.165, 118.840,
            12.268, -342.455, 118.111,
            11.637, -341.145, 118.546,
            11.637, -340.969, 119.482,
            12.268, -342.165, 118.840,
            11.637, -340.969, 119.482,
            12.268, -342.037, 119.526,
            12.268, -342.165, 118.840,
            11.637, -340.969, 119.482,
            11.637, -341.066, 120.415,
            12.268, -342.037, 119.526,
            11.637, -341.066, 120.415,
            12.268, -342.102, 120.158,
            12.268, -342.037, 119.526,
            11.637, -341.066, 120.415,
            11.637, -341.412, 121.272,
            12.268, -342.102, 120.158,
            11.637, -341.412, 121.272,
            12.268, -342.365, 120.809,
            12.268, -342.102, 120.158,
            11.637, -341.412, 121.272,
            11.637, -341.894, 122.111,
            12.268, -342.365, 120.809,
            11.637, -341.894, 122.111,
            12.268, -342.789, 121.547,
            12.268, -342.365, 120.809,
            11.637, -341.894, 122.111,
            11.637, -342.492, 122.980,
            12.268, -342.789, 121.547,
            11.637, -342.492, 122.980,
            12.268, -343.348, 122.359,
            12.268, -342.789, 121.547,
            11.637, -342.492, 122.980,
            11.637, -343.185, 123.885,
            12.268, -343.348, 122.359,
            11.637, -343.185, 123.885,
            12.268, -344.014, 123.228,
            12.268, -343.348, 122.359,
            11.637, -343.185, 123.885,
            11.637, -343.949, 124.819,
            12.268, -344.014, 123.228,
            11.637, -343.949, 124.819,
            12.268, -344.761, 124.142,
            12.268, -344.014, 123.228,
            11.637, -343.949, 124.819,
            11.637, -344.759, 125.772,
            12.268, -344.761, 124.142,
            11.637, -344.759, 125.772,
            12.268, -345.562, 125.084,
            12.268, -344.761, 124.142,
            11.637, -344.759, 125.772,
            11.637, -345.923, 127.119,
            12.268, -345.562, 125.084,
            11.637, -345.923, 127.119,
            12.268, -346.389, 126.041,
            12.268, -345.562, 125.084,
            11.637, -345.923, 127.119,
            11.637, -377.026, 125.846,
            12.268, -346.389, 126.041,
            11.637, -377.026, 125.846,
            12.268, -375.982, 124.831,
            12.268, -346.389, 126.041,
            12.268, -346.389, 126.041,
            12.268, -375.982, 124.831,
            12.268, -376.076, 117.374,
            12.268, -346.389, 126.041,
            12.268, -376.076, 117.374,
            12.268, -368.937, 116.204,
            12.268, -346.389, 126.041,
            12.268, -368.937, 116.204,
            12.268, -365.083, 107.466,
            12.268, -346.389, 126.041,
            12.268, -365.083, 107.466,
            12.268, -344.581, 114.925,
            12.268, -345.562, 125.084,
            12.268, -346.389, 126.041,
            12.268, -344.581, 114.925,
            12.268, -344.761, 124.142,
            12.268, -345.562, 125.084,
            12.268, -344.581, 114.925,
            12.268, -344.761, 124.142,
            12.268, -344.581, 114.925,
            12.268, -343.969, 115.744,
            12.268, -344.014, 123.228,
            12.268, -344.761, 124.142,
            12.268, -343.969, 115.744,
            12.268, -344.014, 123.228,
            12.268, -343.969, 115.744,
            12.268, -343.389, 116.553,
            12.268, -343.348, 122.359,
            12.268, -344.014, 123.228,
            12.268, -343.389, 116.553,
            12.268, -343.348, 122.359,
            12.268, -343.389, 116.553,
            12.268, -342.873, 117.345,
            12.268, -342.789, 121.547,
            12.268, -343.348, 122.359,
            12.268, -342.873, 117.345,
            12.268, -342.789, 121.547,
            12.268, -342.873, 117.345,
            12.268, -342.455, 118.111,
            12.268, -342.365, 120.809,
            12.268, -342.789, 121.547,
            12.268, -342.455, 118.111,
            12.268, -342.365, 120.809,
            12.268, -342.455, 118.111,
            12.268, -342.165, 118.840,
            12.268, -342.102, 120.158,
            12.268, -342.365, 120.809,
            12.268, -342.165, 118.840,
            12.268, -342.102, 120.158,
            12.268, -342.165, 118.840,
            12.268, -342.037, 119.526,
            7.848, -346.389, 126.041,
            7.848, -376.076, 117.374,
            7.848, -375.982, 124.831,
            7.848, -346.389, 126.041,
            7.848, -368.937, 116.204,
            7.848, -376.076, 117.374,
            7.848, -346.389, 126.041,
            7.848, -365.083, 107.466,
            7.848, -368.937, 116.204,
            7.848, -346.389, 126.041,
            7.848, -344.581, 114.925,
            7.848, -365.083, 107.466,
            7.848, -345.562, 125.084,
            7.848, -344.581, 114.925,
            7.848, -346.389, 126.041,
            7.848, -344.761, 124.142,
            7.848, -344.581, 114.925,
            7.848, -345.562, 125.084,
            7.848, -344.761, 124.142,
            7.848, -343.969, 115.744,
            7.848, -344.581, 114.925,
            7.848, -344.014, 123.228,
            7.848, -343.969, 115.744,
            7.848, -344.761, 124.142,
            7.848, -344.014, 123.228,
            7.848, -343.389, 116.553,
            7.848, -343.969, 115.744,
            7.848, -343.348, 122.359,
            7.848, -343.389, 116.553,
            7.848, -344.014, 123.228,
            7.848, -343.348, 122.359,
            7.848, -342.873, 117.345,
            7.848, -343.389, 116.553,
            7.848, -342.789, 121.547,
            7.848, -342.873, 117.345,
            7.848, -343.348, 122.359,
            7.848, -342.789, 121.547,
            7.848, -342.455, 118.111,
            7.848, -342.873, 117.345,
            7.848, -342.365, 120.809,
            7.848, -342.455, 118.111,
            7.848, -342.789, 121.547,
            7.848, -342.365, 120.809,
            7.848, -342.165, 118.840,
            7.848, -342.455, 118.111,
            7.848, -342.102, 120.158,
            7.848, -342.165, 118.840,
            7.848, -342.365, 120.809,
            7.848, -342.102, 120.158,
            7.848, -342.037, 119.526,
               7.848, -342.165, 118.840
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.858, -0.513, 0.006,
            -0.858, -0.513, 0.007,
            -0.858, -0.513, 0.006,
            -0.858, -0.513, 0.007,
            -0.858, -0.513, 0.007,
            -0.858, -0.513, 0.006,
            -0.858, -0.083, -0.506,
            -0.858, -0.083, -0.506,
            -0.858, -0.083, -0.506,
            -0.858, -0.083, -0.506,
            -0.858, -0.083, -0.506,
            -0.858, -0.083, -0.506,
            -0.858, -0.469, -0.207,
            -0.858, -0.469, -0.207,
            -0.858, -0.469, -0.207,
            -0.858, -0.469, -0.207,
            -0.858, -0.469, -0.207,
            -0.858, -0.469, -0.207,
            -0.858, 0.175, -0.482,
            -0.858, 0.175, -0.482,
            -0.858, 0.175, -0.482,
            -0.858, 0.175, -0.482,
            -0.858, 0.175, -0.482,
            -0.858, 0.175, -0.482,
            -0.858, 0.411, -0.307,
            -0.858, 0.414, -0.303,
            -0.858, 0.411, -0.307,
            -0.858, 0.414, -0.303,
            -0.859, 0.414, -0.303,
            -0.858, 0.411, -0.307,
            -0.858, 0.414, -0.303,
            -0.859, 0.423, -0.289,
            -0.859, 0.414, -0.303,
            -0.859, 0.423, -0.289,
            -0.859, 0.423, -0.289,
            -0.859, 0.414, -0.303,
            -0.859, 0.423, -0.289,
            -0.859, 0.440, -0.263,
            -0.859, 0.423, -0.289,
            -0.859, 0.440, -0.263,
            -0.859, 0.440, -0.263,
            -0.859, 0.423, -0.289,
            -0.859, 0.440, -0.263,
            -0.859, 0.464, -0.218,
            -0.859, 0.440, -0.263,
            -0.859, 0.464, -0.218,
            -0.859, 0.464, -0.218,
            -0.859, 0.440, -0.263,
            -0.859, 0.464, -0.218,
            -0.860, 0.491, -0.142,
            -0.859, 0.464, -0.218,
            -0.860, 0.491, -0.142,
            -0.860, 0.491, -0.142,
            -0.859, 0.464, -0.218,
            -0.860, 0.491, -0.142,
            -0.861, 0.508, -0.021,
            -0.860, 0.491, -0.142,
            -0.861, 0.508, -0.021,
            -0.861, 0.508, -0.021,
            -0.860, 0.491, -0.142,
            -0.861, 0.508, -0.021,
            -0.861, 0.494, 0.123,
            -0.861, 0.508, -0.021,
            -0.861, 0.494, 0.123,
            -0.861, 0.494, 0.123,
            -0.861, 0.508, -0.021,
            -0.861, 0.494, 0.123,
            -0.859, 0.460, 0.224,
            -0.861, 0.494, 0.123,
            -0.859, 0.460, 0.224,
            -0.859, 0.460, 0.224,
            -0.861, 0.494, 0.123,
            -0.859, 0.460, 0.224,
            -0.859, 0.434, 0.273,
            -0.859, 0.460, 0.224,
            -0.859, 0.434, 0.273,
            -0.859, 0.434, 0.273,
            -0.859, 0.460, 0.224,
            -0.859, 0.434, 0.273,
            -0.859, 0.415, 0.301,
            -0.859, 0.434, 0.273,
            -0.859, 0.415, 0.301,
            -0.859, 0.415, 0.301,
            -0.859, 0.434, 0.273,
            -0.859, 0.415, 0.301,
            -0.859, 0.402, 0.318,
            -0.859, 0.415, 0.301,
            -0.859, 0.402, 0.318,
            -0.859, 0.402, 0.318,
            -0.859, 0.415, 0.301,
            -0.859, 0.402, 0.318,
            -0.858, 0.394, 0.328,
            -0.859, 0.402, 0.318,
            -0.858, 0.394, 0.328,
            -0.858, 0.394, 0.328,
            -0.859, 0.402, 0.318,
            -0.858, 0.394, 0.328,
            -0.858, 0.389, 0.334,
            -0.858, 0.394, 0.328,
            -0.858, 0.389, 0.334,
            -0.858, 0.389, 0.334,
            -0.858, 0.394, 0.328,
            -0.858, 0.389, 0.334,
            -0.858, 0.388, 0.335,
            -0.858, 0.389, 0.334,
            -0.858, 0.388, 0.335,
            -0.858, 0.388, 0.335,
            -0.858, 0.389, 0.334,
            -0.858, -0.021, 0.512,
            -0.858, -0.021, 0.512,
            -0.858, -0.021, 0.512,
            -0.858, -0.021, 0.512,
            -0.858, -0.021, 0.512,
            -0.858, -0.021, 0.512,
            0.000, -1.000, 0.013,
            0.000, -1.000, 0.013,
            0.000, -1.000, 0.013,
            0.000, -1.000, 0.013,
            0.000, -1.000, 0.013,
            0.000, -1.000, 0.013,
            0.000, -0.162, -0.987,
            0.000, -0.162, -0.987,
            0.000, -0.162, -0.987,
            0.000, -0.162, -0.987,
            0.000, -0.162, -0.987,
            0.000, -0.162, -0.987,
            0.000, -0.915, -0.404,
            0.000, -0.915, -0.404,
            0.000, -0.915, -0.404,
            0.000, -0.915, -0.404,
            0.000, -0.915, -0.404,
            0.000, -0.915, -0.404,
            0.000, 0.342, -0.940,
            0.000, 0.342, -0.940,
            0.000, 0.342, -0.940,
            0.000, 0.342, -0.940,
            0.000, 0.342, -0.940,
            0.000, 0.342, -0.940,
            0.000, 0.801, -0.599,
            -0.000, 0.807, -0.591,
            -0.000, 0.801, -0.599,
            -0.000, 0.807, -0.591,
            -0.000, 0.807, -0.591,
            -0.000, 0.801, -0.599,
            -0.000, 0.807, -0.591,
            -0.000, 0.826, -0.564,
            -0.000, 0.807, -0.591,
            -0.000, 0.826, -0.564,
            0.000, 0.826, -0.564,
            -0.000, 0.807, -0.591,
            -0.000, 0.826, -0.564,
            0.000, 0.858, -0.513,
            0.000, 0.826, -0.564,
            0.000, 0.858, -0.513,
            0.000, 0.858, -0.513,
            0.000, 0.826, -0.564,
            0.000, 0.858, -0.513,
            0.000, 0.905, -0.425,
            0.000, 0.858, -0.513,
            0.000, 0.905, -0.425,
            0.000, 0.905, -0.425,
            0.000, 0.858, -0.513,
            0.000, 0.905, -0.425,
            0.000, 0.961, -0.278,
            0.000, 0.905, -0.425,
            0.000, 0.961, -0.278,
            0.000, 0.961, -0.278,
            0.000, 0.905, -0.425,
            0.000, 0.961, -0.278,
            0.000, 0.999, -0.041,
            0.000, 0.961, -0.278,
            0.000, 0.999, -0.041,
            0.000, 0.999, -0.041,
            0.000, 0.961, -0.278,
            0.000, 0.999, -0.041,
            0.000, 0.970, 0.241,
            0.000, 0.999, -0.041,
            0.000, 0.970, 0.241,
            0.000, 0.970, 0.241,
            0.000, 0.999, -0.041,
            0.000, 0.970, 0.241,
            0.000, 0.899, 0.437,
            0.000, 0.970, 0.241,
            0.000, 0.899, 0.437,
            0.000, 0.899, 0.437,
            0.000, 0.970, 0.241,
            0.000, 0.899, 0.437,
            0.000, 0.846, 0.533,
            0.000, 0.899, 0.437,
            0.000, 0.846, 0.533,
            0.000, 0.846, 0.533,
            0.000, 0.899, 0.437,
            0.000, 0.846, 0.533,
            0.000, 0.809, 0.588,
            0.000, 0.846, 0.533,
            0.000, 0.809, 0.588,
            0.000, 0.809, 0.588,
            0.000, 0.846, 0.533,
            0.000, 0.809, 0.588,
            0.000, 0.784, 0.621,
            0.000, 0.809, 0.588,
            0.000, 0.784, 0.621,
            0.000, 0.784, 0.621,
            0.000, 0.809, 0.588,
            0.000, 0.784, 0.621,
            0.000, 0.768, 0.640,
            0.000, 0.784, 0.621,
            0.000, 0.768, 0.640,
            0.000, 0.768, 0.640,
            0.000, 0.784, 0.621,
            0.000, 0.768, 0.640,
            0.000, 0.759, 0.651,
            0.000, 0.768, 0.640,
            0.000, 0.759, 0.651,
            0.000, 0.759, 0.651,
            0.000, 0.768, 0.640,
            0.000, 0.759, 0.651,
            0.000, 0.756, 0.654,
            0.000, 0.759, 0.651,
            0.000, 0.756, 0.654,
            0.000, 0.756, 0.654,
            0.000, 0.759, 0.651,
            0.000, -0.041, 0.999,
            0.000, -0.041, 0.999,
            0.000, -0.041, 0.999,
            0.000, -0.041, 0.999,
            0.000, -0.041, 0.999,
            0.000, -0.041, 0.999,
            0.858, -0.513, 0.007,
            0.858, -0.513, 0.006,
            0.858, -0.513, 0.007,
            0.858, -0.513, 0.006,
            0.858, -0.513, 0.006,
            0.858, -0.513, 0.007,
            0.858, -0.083, -0.506,
            0.858, -0.083, -0.506,
            0.858, -0.083, -0.506,
            0.858, -0.083, -0.506,
            0.858, -0.083, -0.506,
            0.858, -0.083, -0.506,
            0.858, -0.469, -0.207,
            0.858, -0.469, -0.207,
            0.858, -0.469, -0.207,
            0.858, -0.469, -0.207,
            0.858, -0.469, -0.207,
            0.858, -0.469, -0.207,
            0.858, 0.175, -0.482,
            0.858, 0.175, -0.482,
            0.858, 0.175, -0.482,
            0.858, 0.175, -0.482,
            0.858, 0.175, -0.482,
            0.858, 0.175, -0.482,
            0.858, 0.411, -0.307,
            0.858, 0.414, -0.303,
            0.858, 0.411, -0.307,
            0.858, 0.414, -0.303,
            0.859, 0.414, -0.303,
            0.858, 0.411, -0.307,
            0.858, 0.414, -0.303,
            0.859, 0.423, -0.289,
            0.859, 0.414, -0.303,
            0.859, 0.423, -0.289,
            0.859, 0.423, -0.289,
            0.859, 0.414, -0.303,
            0.859, 0.423, -0.289,
            0.859, 0.440, -0.263,
            0.859, 0.423, -0.289,
            0.859, 0.440, -0.263,
            0.859, 0.440, -0.263,
            0.859, 0.423, -0.289,
            0.859, 0.440, -0.263,
            0.859, 0.464, -0.218,
            0.859, 0.440, -0.263,
            0.859, 0.464, -0.218,
            0.859, 0.464, -0.218,
            0.859, 0.440, -0.263,
            0.859, 0.464, -0.218,
            0.860, 0.491, -0.142,
            0.859, 0.464, -0.218,
            0.860, 0.491, -0.142,
            0.860, 0.491, -0.142,
            0.859, 0.464, -0.218,
            0.860, 0.491, -0.142,
            0.861, 0.508, -0.021,
            0.860, 0.491, -0.142,
            0.861, 0.508, -0.021,
            0.861, 0.508, -0.021,
            0.860, 0.491, -0.142,
            0.861, 0.508, -0.021,
            0.861, 0.494, 0.123,
            0.861, 0.508, -0.021,
            0.861, 0.494, 0.123,
            0.861, 0.494, 0.123,
            0.861, 0.508, -0.021,
            0.861, 0.494, 0.123,
            0.859, 0.460, 0.224,
            0.861, 0.494, 0.123,
            0.859, 0.460, 0.224,
            0.859, 0.460, 0.224,
            0.861, 0.494, 0.123,
            0.859, 0.460, 0.224,
            0.859, 0.434, 0.273,
            0.859, 0.460, 0.224,
            0.859, 0.434, 0.273,
            0.859, 0.434, 0.273,
            0.859, 0.460, 0.224,
            0.859, 0.434, 0.273,
            0.859, 0.415, 0.301,
            0.859, 0.434, 0.273,
            0.859, 0.415, 0.301,
            0.859, 0.415, 0.301,
            0.859, 0.434, 0.273,
            0.859, 0.415, 0.301,
            0.859, 0.402, 0.318,
            0.859, 0.415, 0.301,
            0.859, 0.402, 0.318,
            0.859, 0.402, 0.318,
            0.859, 0.415, 0.301,
            0.859, 0.402, 0.318,
            0.858, 0.394, 0.328,
            0.859, 0.402, 0.318,
            0.858, 0.394, 0.328,
            0.858, 0.394, 0.328,
            0.859, 0.402, 0.318,
            0.858, 0.394, 0.328,
            0.858, 0.389, 0.334,
            0.858, 0.394, 0.328,
            0.858, 0.389, 0.334,
            0.858, 0.389, 0.334,
            0.858, 0.394, 0.328,
            0.858, 0.389, 0.334,
            0.858, 0.388, 0.335,
            0.858, 0.389, 0.334,
            0.858, 0.388, 0.335,
            0.859, 0.388, 0.335,
            0.858, 0.389, 0.334,
            0.858, -0.021, 0.512,
            0.858, -0.021, 0.512,
            0.858, -0.021, 0.512,
            0.858, -0.021, 0.512,
            0.858, -0.021, 0.512,
            0.858, -0.021, 0.512,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
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
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
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
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
               -1.000, 0.000, 0.000
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
