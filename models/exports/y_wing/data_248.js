function create_geometry_248(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            285.625, 830.614, -104.098,
            296.144, 830.614, -114.617,
            296.144, 828.603, -114.617,
            296.144, 828.603, -114.617,
            285.625, 828.603, -104.098,
            285.625, 830.614, -104.098,
            285.625, 830.614, -104.098,
            294.887, 832.817, -94.837,
            305.405, 832.817, -105.355,
            305.405, 832.817, -105.355,
            296.144, 830.614, -114.617,
            285.625, 830.614, -104.098,
            296.144, 828.603, -114.617,
            305.015, 828.330, -105.745,
            294.497, 828.330, -95.227,
            294.497, 828.330, -95.227,
            285.625, 828.603, -104.098,
            296.144, 828.603, -114.617,
            297.277, 860.122, -94.205,
            295.782, 860.122, -92.710,
            304.998, 862.323, -83.494,
            306.494, 862.323, -84.989,
            297.277, 860.122, -94.205,
            304.998, 862.323, -83.494,
            296.930, 852.105, -94.552,
            295.435, 852.105, -93.057,
            295.782, 860.122, -92.710,
            297.277, 860.122, -94.205,
            296.930, 852.105, -94.552,
            295.782, 860.122, -92.710,
            292.377, 838.282, -99.106,
            290.881, 838.282, -97.610,
            295.435, 852.105, -93.057,
            296.930, 852.105, -94.552,
            292.377, 838.282, -99.106,
            295.435, 852.105, -93.057,
            285.211, 831.850, -106.271,
            283.716, 831.850, -104.776,
            290.881, 838.282, -97.610,
            292.377, 838.282, -99.106,
            285.211, 831.850, -106.271,
            290.881, 838.282, -97.610,
            285.244, 826.311, -106.238,
            283.749, 826.311, -104.743,
            283.716, 831.850, -104.776,
            285.211, 831.850, -106.271,
            285.244, 826.311, -106.238,
            283.716, 831.850, -104.776,
            295.344, 823.335, -96.138,
            293.849, 823.335, -94.643,
            283.749, 826.311, -104.743,
            285.244, 826.311, -106.238,
            295.344, 823.335, -96.138,
            283.749, 826.311, -104.743,
            304.998, 862.323, -83.494,
            295.782, 860.122, -92.710,
            299.670, 851.835, -88.822,
            295.782, 860.122, -92.710,
            295.435, 852.105, -93.057,
            299.670, 851.835, -88.822,
            299.670, 851.835, -88.822,
            295.435, 852.105, -93.057,
            295.672, 837.667, -92.820,
            295.435, 852.105, -93.057,
            290.881, 838.282, -97.610,
            295.672, 837.667, -92.820,
            293.849, 823.335, -94.643,
            295.672, 837.667, -92.820,
            283.749, 826.311, -104.743,
            295.672, 837.667, -92.820,
            290.881, 838.282, -97.610,
            283.749, 826.311, -104.743,
            290.881, 838.282, -97.610,
            283.716, 831.850, -104.776,
            283.749, 826.311, -104.743,
            297.277, 860.122, -94.205,
            306.494, 862.323, -84.989,
            301.165, 851.835, -90.317,
            296.930, 852.105, -94.552,
            297.277, 860.122, -94.205,
            301.165, 851.835, -90.317,
            296.930, 852.105, -94.552,
            301.165, 851.835, -90.317,
            297.167, 837.667, -94.315,
            292.377, 838.282, -99.106,
            296.930, 852.105, -94.552,
            297.167, 837.667, -94.315,
            297.167, 837.667, -94.315,
            295.344, 823.335, -96.138,
            285.244, 826.311, -106.238,
            292.377, 838.282, -99.106,
            297.167, 837.667, -94.315,
            285.244, 826.311, -106.238,
            285.211, 831.850, -106.271,
            292.377, 838.282, -99.106,
            285.244, 826.311, -106.238,
            307.599, 860.122, -104.527,
            306.104, 860.122, -103.031,
            315.320, 862.323, -93.815,
            316.815, 862.323, -95.310,
            307.599, 860.122, -104.527,
            315.320, 862.323, -93.815,
            307.252, 852.104, -104.874,
            305.756, 852.104, -103.379,
            306.104, 860.122, -103.031,
            307.599, 860.122, -104.527,
            307.252, 852.104, -104.874,
            306.104, 860.122, -103.031,
            302.698, 838.282, -109.427,
            301.203, 838.282, -107.932,
            305.756, 852.104, -103.379,
            307.252, 852.104, -104.874,
            302.698, 838.282, -109.427,
            305.756, 852.104, -103.379,
            295.533, 831.850, -116.593,
            294.037, 831.850, -115.098,
            301.203, 838.282, -107.932,
            302.698, 838.282, -109.427,
            295.533, 831.850, -116.593,
            301.203, 838.282, -107.932,
            295.566, 826.311, -116.560,
            294.071, 826.311, -115.065,
            294.037, 831.850, -115.098,
            295.533, 831.850, -116.593,
            295.566, 826.311, -116.560,
            294.037, 831.850, -115.098,
            305.666, 823.335, -106.460,
            304.171, 823.335, -104.965,
            294.071, 826.311, -115.065,
            295.566, 826.311, -116.560,
            305.666, 823.335, -106.460,
            294.071, 826.311, -115.065,
            315.320, 862.323, -93.815,
            306.104, 860.122, -103.031,
            309.992, 851.835, -99.144,
            306.104, 860.122, -103.031,
            305.756, 852.104, -103.379,
            309.992, 851.835, -99.144,
            309.992, 851.835, -99.144,
            305.756, 852.104, -103.379,
            305.994, 837.667, -103.142,
            305.756, 852.104, -103.379,
            301.203, 838.282, -107.932,
            305.994, 837.667, -103.142,
            304.171, 823.335, -104.965,
            305.994, 837.667, -103.142,
            294.071, 826.311, -115.065,
            305.994, 837.667, -103.142,
            301.203, 838.282, -107.932,
            294.071, 826.311, -115.065,
            301.203, 838.282, -107.932,
            294.037, 831.850, -115.098,
            294.071, 826.311, -115.065,
            307.599, 860.122, -104.527,
            316.815, 862.323, -95.310,
            311.487, 851.835, -100.639,
            307.252, 852.104, -104.874,
            307.599, 860.122, -104.527,
            311.487, 851.835, -100.639,
            307.252, 852.104, -104.874,
            311.487, 851.835, -100.639,
            307.489, 837.667, -104.637,
            302.698, 838.282, -109.427,
            307.252, 852.104, -104.874,
            307.489, 837.667, -104.637,
            307.489, 837.667, -104.637,
            305.666, 823.335, -106.460,
            295.566, 826.311, -116.560,
            302.698, 838.282, -109.427,
            307.489, 837.667, -104.637,
            295.566, 826.311, -116.560,
            295.533, 831.850, -116.593,
            302.698, 838.282, -109.427,
            295.566, 826.311, -116.560,
            316.076, 867.025, -88.812,
            311.590, 867.025, -84.327,
            311.998, 866.971, -83.919,
            316.483, 866.971, -88.405,
            316.076, 867.025, -88.812,
            311.998, 866.971, -83.919,
            315.667, 867.067, -89.221,
            311.181, 867.067, -84.735,
            311.590, 867.025, -84.327,
            316.076, 867.025, -88.812,
            315.667, 867.067, -89.221,
            311.590, 867.025, -84.327,
            315.256, 867.086, -89.632,
            310.770, 867.086, -85.147,
            311.181, 867.067, -84.735,
            315.667, 867.067, -89.221,
            315.256, 867.086, -89.632,
            311.181, 867.067, -84.735,
            314.841, 867.071, -90.047,
            310.355, 867.071, -85.561,
            310.770, 867.086, -85.147,
            315.256, 867.086, -89.632,
            314.841, 867.071, -90.047,
            310.770, 867.086, -85.147,
            314.421, 867.010, -90.466,
            309.936, 867.010, -85.981,
            310.355, 867.071, -85.561,
            314.841, 867.071, -90.047,
            314.421, 867.010, -90.466,
            310.355, 867.071, -85.561,
            313.996, 866.892, -90.892,
            309.510, 866.892, -86.407,
            309.936, 867.010, -85.981,
            314.421, 867.010, -90.466,
            313.996, 866.892, -90.892,
            309.936, 867.010, -85.981,
            313.563, 866.705, -91.325,
            309.078, 866.705, -86.839,
            309.510, 866.892, -86.407,
            313.996, 866.892, -90.892,
            313.563, 866.705, -91.325,
            309.510, 866.892, -86.407,
            310.188, 862.304, -94.699,
            305.703, 862.304, -90.214,
            309.078, 866.705, -86.839,
            313.563, 866.705, -91.325,
            310.188, 862.304, -94.699,
            309.078, 866.705, -86.839,
            307.089, 857.571, -97.798,
            302.604, 857.571, -93.313,
            305.703, 862.304, -90.214,
            310.188, 862.304, -94.699,
            307.089, 857.571, -97.798,
            305.703, 862.304, -90.214,
            303.983, 851.445, -100.905,
            299.497, 851.445, -96.420,
            302.604, 857.571, -93.313,
            307.089, 857.571, -97.798,
            303.983, 851.445, -100.905,
            302.604, 857.571, -93.313,
            301.433, 843.921, -103.455,
            296.947, 843.921, -98.969,
            299.497, 851.445, -96.420,
            303.983, 851.445, -100.905,
            301.433, 843.921, -103.455,
            299.497, 851.445, -96.420,
            299.268, 834.268, -105.619,
            294.783, 834.268, -101.134,
            296.947, 843.921, -98.969,
            301.433, 843.921, -103.455,
            299.268, 834.268, -105.619,
            296.947, 843.921, -98.969,
            295.761, 830.621, -109.126,
            291.276, 830.621, -104.641,
            294.783, 834.268, -101.134,
            299.268, 834.268, -105.619,
            295.761, 830.621, -109.126,
            294.783, 834.268, -101.134,
            295.802, 822.910, -109.086,
            291.316, 822.910, -104.601,
            291.276, 830.621, -104.641,
            295.761, 830.621, -109.126,
            295.802, 822.910, -109.086,
            291.276, 830.621, -104.641,
            301.767, 820.503, -103.120,
            297.282, 820.503, -98.635,
            291.316, 822.910, -104.601,
            295.802, 822.910, -109.086,
            301.767, 820.503, -103.120,
            291.316, 822.910, -104.601,
            311.998, 866.971, -83.919,
            311.590, 867.025, -84.327,
            305.728, 857.731, -90.188,
            311.590, 867.025, -84.327,
            311.181, 867.067, -84.735,
            305.728, 857.731, -90.188,
            311.181, 867.067, -84.735,
            310.770, 867.086, -85.147,
            305.728, 857.731, -90.188,
            310.770, 867.086, -85.147,
            310.355, 867.071, -85.561,
            305.728, 857.731, -90.188,
            310.355, 867.071, -85.561,
            309.936, 867.010, -85.981,
            305.728, 857.731, -90.188,
            309.936, 867.010, -85.981,
            309.510, 866.892, -86.407,
            305.728, 857.731, -90.188,
            309.510, 866.892, -86.407,
            309.078, 866.705, -86.839,
            305.728, 857.731, -90.188,
            309.078, 866.705, -86.839,
            305.703, 862.304, -90.214,
            305.728, 857.731, -90.188,
            305.703, 862.304, -90.214,
            302.604, 857.571, -93.313,
            305.728, 857.731, -90.188,
            305.728, 857.731, -90.188,
            302.604, 857.571, -93.313,
            301.364, 846.781, -94.552,
            302.604, 857.571, -93.313,
            299.497, 851.445, -96.420,
            301.364, 846.781, -94.552,
            299.497, 851.445, -96.420,
            296.947, 843.921, -98.969,
            301.364, 846.781, -94.552,
            301.364, 846.781, -94.552,
            296.947, 843.921, -98.969,
            298.408, 833.045, -97.509,
            296.947, 843.921, -98.969,
            294.783, 834.268, -101.134,
            298.408, 833.045, -97.509,
            294.783, 834.268, -101.134,
            291.276, 830.621, -104.641,
            298.408, 833.045, -97.509,
            298.408, 833.045, -97.509,
            291.276, 830.621, -104.641,
            297.282, 820.503, -98.635,
            291.276, 830.621, -104.641,
            291.316, 822.910, -104.601,
            297.282, 820.503, -98.635,
            316.076, 867.025, -88.812,
            316.483, 866.971, -88.405,
            310.214, 857.731, -94.674,
            315.667, 867.067, -89.221,
            316.076, 867.025, -88.812,
            310.214, 857.731, -94.674,
            315.256, 867.086, -89.632,
            315.667, 867.067, -89.221,
            310.214, 857.731, -94.674,
            314.841, 867.071, -90.047,
            315.256, 867.086, -89.632,
            310.214, 857.731, -94.674,
            314.421, 867.010, -90.466,
            314.841, 867.071, -90.047,
            310.214, 857.731, -94.674,
            313.996, 866.892, -90.892,
            314.421, 867.010, -90.466,
            310.214, 857.731, -94.674,
            313.563, 866.705, -91.325,
            313.996, 866.892, -90.892,
            310.214, 857.731, -94.674,
            310.188, 862.304, -94.699,
            313.563, 866.705, -91.325,
            310.214, 857.731, -94.674,
            307.089, 857.571, -97.798,
            310.188, 862.304, -94.699,
            310.214, 857.731, -94.674,
            307.089, 857.571, -97.798,
            310.214, 857.731, -94.674,
            305.850, 846.781, -99.038,
            303.983, 851.445, -100.905,
            307.089, 857.571, -97.798,
            305.850, 846.781, -99.038,
            301.433, 843.921, -103.455,
            303.983, 851.445, -100.905,
            305.850, 846.781, -99.038,
            301.433, 843.921, -103.455,
            305.850, 846.781, -99.038,
            302.894, 833.045, -101.994,
            299.268, 834.268, -105.619,
            301.433, 843.921, -103.455,
            302.894, 833.045, -101.994,
            295.761, 830.621, -109.126,
            299.268, 834.268, -105.619,
            302.894, 833.045, -101.994,
            295.761, 830.621, -109.126,
            302.894, 833.045, -101.994,
            301.767, 820.503, -103.120,
            295.802, 822.910, -109.086,
            295.761, 830.621, -109.126,
               301.767, 820.503, -103.120
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.117, 0.986, 0.117,
            0.117, 0.986, 0.117,
            0.117, 0.986, 0.117,
            0.117, 0.986, 0.117,
            0.117, 0.986, 0.117,
            0.117, 0.986, 0.117,
            0.015, -1.000, 0.015,
            0.015, -1.000, 0.015,
            0.015, -1.000, 0.015,
            0.015, -1.000, 0.015,
            0.015, -1.000, 0.015,
            0.015, -1.000, 0.015,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.118, 0.986, 0.118,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.706, 0.061, 0.706,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.641, 0.422, 0.641,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.379, 0.844, 0.379,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.707, -0.008, 0.707,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.144, -0.979, 0.144,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.058, 0.997, -0.058,
            -0.058, 0.997, -0.058,
            -0.066, 0.996, -0.066,
            -0.066, 0.996, -0.066,
            -0.058, 0.997, -0.058,
            -0.066, 0.996, -0.066,
            -0.037, 0.999, -0.037,
            -0.037, 0.999, -0.037,
            -0.058, 0.997, -0.058,
            -0.058, 0.997, -0.058,
            -0.037, 0.999, -0.037,
            -0.058, 0.997, -0.058,
            -0.003, 1.000, -0.003,
            -0.003, 1.000, -0.003,
            -0.037, 0.999, -0.037,
            -0.037, 0.999, -0.037,
            -0.003, 1.000, -0.003,
            -0.037, 0.999, -0.037,
            0.045, 0.998, 0.045,
            0.045, 0.998, 0.045,
            -0.003, 1.000, -0.003,
            -0.003, 1.000, -0.003,
            0.045, 0.998, 0.045,
            -0.003, 1.000, -0.003,
            0.105, 0.989, 0.105,
            0.105, 0.989, 0.105,
            0.045, 0.998, 0.045,
            0.045, 0.998, 0.045,
            0.105, 0.989, 0.105,
            0.045, 0.998, 0.045,
            0.172, 0.970, 0.172,
            0.172, 0.970, 0.172,
            0.105, 0.989, 0.105,
            0.105, 0.989, 0.105,
            0.172, 0.970, 0.172,
            0.105, 0.989, 0.105,
            0.207, 0.956, 0.207,
            0.207, 0.956, 0.207,
            0.172, 0.970, 0.172,
            0.172, 0.970, 0.172,
            0.207, 0.956, 0.207,
            0.172, 0.970, 0.172,
            0.499, 0.708, 0.499,
            0.499, 0.708, 0.499,
            0.479, 0.735, 0.479,
            0.479, 0.735, 0.479,
            0.499, 0.708, 0.499,
            0.479, 0.735, 0.479,
            0.548, 0.632, 0.548,
            0.548, 0.632, 0.548,
            0.499, 0.708, 0.499,
            0.499, 0.708, 0.499,
            0.548, 0.632, 0.548,
            0.499, 0.708, 0.499,
            0.608, 0.509, 0.608,
            0.608, 0.509, 0.608,
            0.548, 0.632, 0.548,
            0.548, 0.632, 0.548,
            0.608, 0.509, 0.608,
            0.548, 0.632, 0.548,
            0.657, 0.368, 0.657,
            0.657, 0.368, 0.657,
            0.608, 0.509, 0.608,
            0.608, 0.509, 0.608,
            0.657, 0.368, 0.657,
            0.608, 0.509, 0.608,
            0.575, 0.583, 0.575,
            0.575, 0.583, 0.575,
            0.657, 0.368, 0.657,
            0.657, 0.368, 0.657,
            0.575, 0.583, 0.575,
            0.657, 0.368, 0.657,
            0.632, 0.448, 0.632,
            0.632, 0.448, 0.632,
            0.575, 0.583, 0.575,
            0.575, 0.583, 0.575,
            0.632, 0.448, 0.632,
            0.575, 0.583, 0.575,
            0.707, -0.007, 0.707,
            0.707, -0.007, 0.707,
            0.632, 0.448, 0.632,
            0.632, 0.448, 0.632,
            0.707, -0.007, 0.707,
            0.632, 0.448, 0.632,
            0.194, -0.962, 0.194,
            0.194, -0.962, 0.194,
            0.194, -0.962, 0.194,
            0.194, -0.962, 0.194,
            0.194, -0.962, 0.194,
            0.194, -0.962, 0.194,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
               -0.707, -0.000, 0.707
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
