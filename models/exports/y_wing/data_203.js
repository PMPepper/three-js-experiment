function create_geometry_203(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            431.754, 830.614, -115.096,
            442.273, 830.614, -104.578,
            442.273, 828.604, -104.578,
            442.273, 828.604, -104.578,
            431.754, 828.604, -115.096,
            431.754, 830.614, -115.096,
            431.754, 830.614, -115.096,
            422.493, 832.817, -105.835,
            433.011, 832.817, -95.316,
            433.011, 832.817, -95.316,
            442.273, 830.614, -104.578,
            431.754, 830.614, -115.096,
            442.273, 828.604, -104.578,
            433.401, 828.330, -95.706,
            422.883, 828.330, -106.225,
            422.883, 828.330, -106.225,
            431.754, 828.604, -115.096,
            442.273, 828.604, -104.578,
            421.861, 860.122, -103.444,
            420.366, 860.122, -104.939,
            411.149, 862.323, -95.723,
            412.645, 862.323, -94.228,
            421.861, 860.122, -103.444,
            411.149, 862.323, -95.723,
            422.208, 852.105, -103.792,
            420.713, 852.105, -105.287,
            420.366, 860.122, -104.939,
            421.861, 860.122, -103.444,
            422.208, 852.105, -103.792,
            420.366, 860.122, -104.939,
            426.762, 838.282, -108.345,
            425.266, 838.282, -109.840,
            420.713, 852.105, -105.287,
            422.208, 852.105, -103.792,
            426.762, 838.282, -108.345,
            420.713, 852.105, -105.287,
            433.927, 831.850, -115.511,
            432.432, 831.850, -117.006,
            425.266, 838.282, -109.840,
            426.762, 838.282, -108.345,
            433.927, 831.850, -115.511,
            425.266, 838.282, -109.840,
            433.894, 826.311, -115.478,
            432.399, 826.311, -116.973,
            432.432, 831.850, -117.006,
            433.927, 831.850, -115.511,
            433.894, 826.311, -115.478,
            432.432, 831.850, -117.006,
            423.794, 823.335, -105.377,
            422.299, 823.335, -106.873,
            432.399, 826.311, -116.973,
            433.894, 826.311, -115.478,
            423.794, 823.335, -105.377,
            432.399, 826.311, -116.973,
            411.149, 862.323, -95.723,
            420.366, 860.122, -104.939,
            416.478, 851.835, -101.052,
            420.366, 860.122, -104.939,
            420.713, 852.105, -105.287,
            416.478, 851.835, -101.052,
            416.478, 851.835, -101.052,
            420.713, 852.105, -105.287,
            420.476, 837.667, -105.050,
            420.713, 852.105, -105.287,
            425.266, 838.282, -109.840,
            420.476, 837.667, -105.050,
            422.299, 823.335, -106.873,
            420.476, 837.667, -105.050,
            432.399, 826.311, -116.973,
            420.476, 837.667, -105.050,
            425.266, 838.282, -109.840,
            432.399, 826.311, -116.973,
            425.266, 838.282, -109.840,
            432.432, 831.850, -117.006,
            432.399, 826.311, -116.973,
            421.861, 860.122, -103.444,
            412.645, 862.323, -94.228,
            417.973, 851.835, -99.556,
            422.208, 852.105, -103.792,
            421.861, 860.122, -103.444,
            417.973, 851.835, -99.556,
            422.208, 852.105, -103.792,
            417.973, 851.835, -99.556,
            421.971, 837.667, -103.555,
            426.762, 838.282, -108.345,
            422.208, 852.105, -103.792,
            421.971, 837.667, -103.555,
            421.971, 837.667, -103.555,
            423.794, 823.335, -105.377,
            433.894, 826.311, -115.478,
            426.762, 838.282, -108.345,
            421.971, 837.667, -103.555,
            433.894, 826.311, -115.478,
            433.927, 831.850, -115.511,
            426.762, 838.282, -108.345,
            433.894, 826.311, -115.478,
            432.182, 860.122, -93.122,
            430.687, 860.122, -94.618,
            421.471, 862.323, -85.402,
            422.966, 862.323, -83.906,
            432.182, 860.122, -93.122,
            421.471, 862.323, -85.402,
            432.530, 852.105, -93.470,
            431.035, 852.105, -94.965,
            430.687, 860.122, -94.618,
            432.182, 860.122, -93.122,
            432.530, 852.105, -93.470,
            430.687, 860.122, -94.618,
            437.083, 838.282, -98.023,
            435.588, 838.282, -99.518,
            431.035, 852.105, -94.965,
            432.530, 852.105, -93.470,
            437.083, 838.282, -98.023,
            431.035, 852.105, -94.965,
            444.249, 831.850, -105.189,
            442.754, 831.850, -106.684,
            435.588, 838.282, -99.518,
            437.083, 838.282, -98.023,
            444.249, 831.850, -105.189,
            435.588, 838.282, -99.518,
            444.216, 826.311, -105.156,
            442.721, 826.311, -106.651,
            442.754, 831.850, -106.684,
            444.249, 831.850, -105.189,
            444.216, 826.311, -105.156,
            442.754, 831.850, -106.684,
            434.116, 823.335, -95.056,
            432.621, 823.335, -96.551,
            442.721, 826.311, -106.651,
            444.216, 826.311, -105.156,
            434.116, 823.335, -95.056,
            442.721, 826.311, -106.651,
            421.471, 862.323, -85.402,
            430.687, 860.122, -94.618,
            426.800, 851.835, -90.730,
            430.687, 860.122, -94.618,
            431.035, 852.105, -94.965,
            426.800, 851.835, -90.730,
            426.800, 851.835, -90.730,
            431.035, 852.105, -94.965,
            430.798, 837.667, -94.728,
            431.035, 852.105, -94.965,
            435.588, 838.282, -99.518,
            430.798, 837.667, -94.728,
            432.621, 823.335, -96.551,
            430.798, 837.667, -94.728,
            442.721, 826.311, -106.651,
            430.798, 837.667, -94.728,
            435.588, 838.282, -99.518,
            442.721, 826.311, -106.651,
            435.588, 838.282, -99.518,
            442.754, 831.850, -106.684,
            442.721, 826.311, -106.651,
            432.182, 860.122, -93.122,
            422.966, 862.323, -83.906,
            428.295, 851.835, -89.235,
            432.530, 852.105, -93.470,
            432.182, 860.122, -93.122,
            428.295, 851.835, -89.235,
            432.530, 852.105, -93.470,
            428.295, 851.835, -89.235,
            432.293, 837.667, -93.233,
            437.083, 838.282, -98.023,
            432.530, 852.105, -93.470,
            432.293, 837.667, -93.233,
            432.293, 837.667, -93.233,
            434.116, 823.335, -95.056,
            444.216, 826.311, -105.156,
            437.083, 838.282, -98.023,
            432.293, 837.667, -93.233,
            444.216, 826.311, -105.156,
            444.249, 831.850, -105.189,
            437.083, 838.282, -98.023,
            444.216, 826.311, -105.156,
            416.468, 867.025, -84.646,
            411.983, 867.025, -89.132,
            411.575, 866.971, -88.724,
            416.061, 866.971, -84.239,
            416.468, 867.025, -84.646,
            411.575, 866.971, -88.724,
            416.877, 867.067, -85.055,
            412.391, 867.067, -89.540,
            411.983, 867.025, -89.132,
            416.468, 867.025, -84.646,
            416.877, 867.067, -85.055,
            411.983, 867.025, -89.132,
            417.288, 867.086, -85.466,
            412.803, 867.086, -89.951,
            412.391, 867.067, -89.540,
            416.877, 867.067, -85.055,
            417.288, 867.086, -85.466,
            412.391, 867.067, -89.540,
            417.703, 867.071, -85.881,
            413.217, 867.071, -90.366,
            412.803, 867.086, -89.951,
            417.288, 867.086, -85.466,
            417.703, 867.071, -85.881,
            412.803, 867.086, -89.951,
            418.122, 867.010, -86.300,
            413.637, 867.010, -90.786,
            413.217, 867.071, -90.366,
            417.703, 867.071, -85.881,
            418.122, 867.010, -86.300,
            413.217, 867.071, -90.366,
            418.548, 866.892, -86.726,
            414.063, 866.892, -91.211,
            413.637, 867.010, -90.786,
            418.122, 867.010, -86.300,
            418.548, 866.892, -86.726,
            413.637, 867.010, -90.786,
            418.981, 866.705, -87.159,
            414.495, 866.705, -91.644,
            414.063, 866.892, -91.211,
            418.548, 866.892, -86.726,
            418.981, 866.705, -87.159,
            414.063, 866.892, -91.211,
            422.355, 862.305, -90.533,
            417.870, 862.305, -95.019,
            414.495, 866.705, -91.644,
            418.981, 866.705, -87.159,
            422.355, 862.305, -90.533,
            414.495, 866.705, -91.644,
            425.454, 857.571, -93.632,
            420.969, 857.571, -98.118,
            417.870, 862.305, -95.019,
            422.355, 862.305, -90.533,
            425.454, 857.571, -93.632,
            417.870, 862.305, -95.019,
            428.561, 851.445, -96.739,
            424.076, 851.445, -101.224,
            420.969, 857.571, -98.118,
            425.454, 857.571, -93.632,
            428.561, 851.445, -96.739,
            420.969, 857.571, -98.118,
            431.111, 843.921, -99.289,
            426.625, 843.921, -103.774,
            424.076, 851.445, -101.224,
            428.561, 851.445, -96.739,
            431.111, 843.921, -99.289,
            424.076, 851.445, -101.224,
            433.275, 834.268, -101.453,
            428.790, 834.268, -105.939,
            426.625, 843.921, -103.774,
            431.111, 843.921, -99.289,
            433.275, 834.268, -101.453,
            426.625, 843.921, -103.774,
            436.782, 830.621, -104.960,
            432.297, 830.621, -109.446,
            428.790, 834.268, -105.939,
            433.275, 834.268, -101.453,
            436.782, 830.621, -104.960,
            428.790, 834.268, -105.939,
            436.742, 822.910, -104.920,
            432.256, 822.910, -109.405,
            432.297, 830.621, -109.446,
            436.782, 830.621, -104.960,
            436.742, 822.910, -104.920,
            432.297, 830.621, -109.446,
            430.776, 820.503, -98.954,
            426.291, 820.503, -103.440,
            432.256, 822.910, -109.405,
            436.742, 822.910, -104.920,
            430.776, 820.503, -98.954,
            432.256, 822.910, -109.405,
            411.575, 866.971, -88.724,
            411.983, 867.025, -89.132,
            417.844, 857.731, -94.993,
            411.983, 867.025, -89.132,
            412.391, 867.067, -89.540,
            417.844, 857.731, -94.993,
            412.391, 867.067, -89.540,
            412.803, 867.086, -89.951,
            417.844, 857.731, -94.993,
            412.803, 867.086, -89.951,
            413.217, 867.071, -90.366,
            417.844, 857.731, -94.993,
            413.217, 867.071, -90.366,
            413.637, 867.010, -90.786,
            417.844, 857.731, -94.993,
            413.637, 867.010, -90.786,
            414.063, 866.892, -91.211,
            417.844, 857.731, -94.993,
            414.063, 866.892, -91.211,
            414.495, 866.705, -91.644,
            417.844, 857.731, -94.993,
            414.495, 866.705, -91.644,
            417.870, 862.305, -95.019,
            417.844, 857.731, -94.993,
            417.870, 862.305, -95.019,
            420.969, 857.571, -98.118,
            417.844, 857.731, -94.993,
            417.844, 857.731, -94.993,
            420.969, 857.571, -98.118,
            422.208, 846.781, -99.357,
            420.969, 857.571, -98.118,
            424.076, 851.445, -101.224,
            422.208, 846.781, -99.357,
            424.076, 851.445, -101.224,
            426.625, 843.921, -103.774,
            422.208, 846.781, -99.357,
            422.208, 846.781, -99.357,
            426.625, 843.921, -103.774,
            425.165, 833.045, -102.313,
            426.625, 843.921, -103.774,
            428.790, 834.268, -105.939,
            425.165, 833.045, -102.313,
            428.790, 834.268, -105.939,
            432.297, 830.621, -109.446,
            425.165, 833.045, -102.313,
            425.165, 833.045, -102.313,
            432.297, 830.621, -109.446,
            426.291, 820.503, -103.440,
            432.297, 830.621, -109.446,
            432.256, 822.910, -109.405,
            426.291, 820.503, -103.440,
            416.468, 867.025, -84.646,
            416.061, 866.971, -84.239,
            422.330, 857.731, -90.508,
            416.877, 867.067, -85.055,
            416.468, 867.025, -84.646,
            422.330, 857.731, -90.508,
            417.288, 867.086, -85.466,
            416.877, 867.067, -85.055,
            422.330, 857.731, -90.508,
            417.703, 867.071, -85.881,
            417.288, 867.086, -85.466,
            422.330, 857.731, -90.508,
            418.122, 867.010, -86.300,
            417.703, 867.071, -85.881,
            422.330, 857.731, -90.508,
            418.548, 866.892, -86.726,
            418.122, 867.010, -86.300,
            422.330, 857.731, -90.508,
            418.981, 866.705, -87.159,
            418.548, 866.892, -86.726,
            422.330, 857.731, -90.508,
            422.355, 862.305, -90.533,
            418.981, 866.705, -87.159,
            422.330, 857.731, -90.508,
            425.454, 857.571, -93.632,
            422.355, 862.305, -90.533,
            422.330, 857.731, -90.508,
            425.454, 857.571, -93.632,
            422.330, 857.731, -90.508,
            426.694, 846.781, -94.872,
            428.561, 851.445, -96.739,
            425.454, 857.571, -93.632,
            426.694, 846.781, -94.872,
            431.111, 843.921, -99.289,
            428.561, 851.445, -96.739,
            426.694, 846.781, -94.872,
            431.111, 843.921, -99.289,
            426.694, 846.781, -94.872,
            429.650, 833.045, -97.828,
            433.275, 834.268, -101.453,
            431.111, 843.921, -99.289,
            429.650, 833.045, -97.828,
            436.782, 830.621, -104.960,
            433.275, 834.268, -101.453,
            429.650, 833.045, -97.828,
            436.782, 830.621, -104.960,
            429.650, 833.045, -97.828,
            430.776, 820.503, -98.954,
            436.742, 822.910, -104.920,
            436.782, 830.621, -104.960,
               430.776, 820.503, -98.954
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.117, 0.986, 0.117,
            -0.117, 0.986, 0.117,
            -0.117, 0.986, 0.117,
            -0.117, 0.986, 0.117,
            -0.117, 0.986, 0.117,
            -0.117, 0.986, 0.117,
            -0.015, -1.000, 0.015,
            -0.015, -1.000, 0.015,
            -0.015, -1.000, 0.015,
            -0.015, -1.000, 0.015,
            -0.015, -1.000, 0.015,
            -0.015, -1.000, 0.015,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.118, 0.986, 0.118,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.706, 0.061, 0.706,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.641, 0.422, 0.641,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.379, 0.844, 0.379,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.707, -0.008, 0.707,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            -0.144, -0.979, 0.144,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            0.058, 0.997, -0.058,
            0.058, 0.997, -0.058,
            0.066, 0.996, -0.066,
            0.066, 0.996, -0.066,
            0.058, 0.997, -0.058,
            0.066, 0.996, -0.066,
            0.037, 0.999, -0.037,
            0.037, 0.999, -0.037,
            0.058, 0.997, -0.058,
            0.058, 0.997, -0.058,
            0.037, 0.999, -0.037,
            0.058, 0.997, -0.058,
            0.003, 1.000, -0.003,
            0.003, 1.000, -0.003,
            0.037, 0.999, -0.037,
            0.037, 0.999, -0.037,
            0.003, 1.000, -0.003,
            0.037, 0.999, -0.037,
            -0.045, 0.998, 0.045,
            -0.045, 0.998, 0.045,
            0.003, 1.000, -0.003,
            0.003, 1.000, -0.003,
            -0.045, 0.998, 0.045,
            0.003, 1.000, -0.003,
            -0.105, 0.989, 0.105,
            -0.105, 0.989, 0.105,
            -0.045, 0.998, 0.045,
            -0.045, 0.998, 0.045,
            -0.105, 0.989, 0.105,
            -0.045, 0.998, 0.045,
            -0.172, 0.970, 0.172,
            -0.172, 0.970, 0.172,
            -0.105, 0.989, 0.105,
            -0.105, 0.989, 0.105,
            -0.172, 0.970, 0.172,
            -0.105, 0.989, 0.105,
            -0.207, 0.956, 0.207,
            -0.207, 0.956, 0.207,
            -0.172, 0.970, 0.172,
            -0.172, 0.970, 0.172,
            -0.207, 0.956, 0.207,
            -0.172, 0.970, 0.172,
            -0.499, 0.708, 0.499,
            -0.499, 0.708, 0.499,
            -0.479, 0.735, 0.479,
            -0.479, 0.735, 0.479,
            -0.499, 0.708, 0.499,
            -0.479, 0.735, 0.479,
            -0.548, 0.632, 0.548,
            -0.548, 0.632, 0.548,
            -0.499, 0.708, 0.499,
            -0.499, 0.708, 0.499,
            -0.548, 0.632, 0.548,
            -0.499, 0.708, 0.499,
            -0.608, 0.509, 0.608,
            -0.608, 0.509, 0.608,
            -0.548, 0.632, 0.548,
            -0.548, 0.632, 0.548,
            -0.608, 0.509, 0.608,
            -0.548, 0.632, 0.548,
            -0.657, 0.368, 0.657,
            -0.657, 0.368, 0.657,
            -0.608, 0.509, 0.608,
            -0.608, 0.509, 0.608,
            -0.657, 0.368, 0.657,
            -0.608, 0.509, 0.608,
            -0.575, 0.583, 0.575,
            -0.575, 0.583, 0.575,
            -0.657, 0.368, 0.657,
            -0.657, 0.368, 0.657,
            -0.575, 0.583, 0.575,
            -0.657, 0.368, 0.657,
            -0.632, 0.448, 0.632,
            -0.632, 0.448, 0.632,
            -0.575, 0.583, 0.575,
            -0.575, 0.583, 0.575,
            -0.632, 0.448, 0.632,
            -0.575, 0.583, 0.575,
            -0.707, -0.007, 0.707,
            -0.707, -0.007, 0.707,
            -0.632, 0.448, 0.632,
            -0.632, 0.448, 0.632,
            -0.707, -0.007, 0.707,
            -0.632, 0.448, 0.632,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
               -0.707, 0.000, -0.707
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
