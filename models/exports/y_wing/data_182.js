function create_geometry_182(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            442.752, 830.614, 31.033,
            432.234, 830.614, 41.551,
            432.234, 828.603, 41.551,
            432.234, 828.603, 41.551,
            442.752, 828.604, 31.033,
            442.752, 830.614, 31.033,
            442.752, 830.614, 31.033,
            433.491, 832.817, 21.771,
            422.972, 832.817, 32.290,
            422.972, 832.817, 32.290,
            432.234, 830.614, 41.551,
            442.752, 830.614, 31.033,
            432.234, 828.603, 41.551,
            423.362, 828.330, 32.680,
            433.881, 828.330, 22.161,
            433.881, 828.330, 22.161,
            442.752, 828.604, 31.033,
            432.234, 828.603, 41.551,
            431.100, 860.122, 21.139,
            432.595, 860.122, 19.644,
            423.379, 862.323, 10.428,
            421.884, 862.323, 11.923,
            431.100, 860.122, 21.139,
            423.379, 862.323, 10.428,
            431.448, 852.105, 21.487,
            432.943, 852.105, 19.992,
            432.595, 860.122, 19.644,
            431.100, 860.122, 21.139,
            431.448, 852.105, 21.487,
            432.595, 860.122, 19.644,
            436.001, 838.282, 26.040,
            437.496, 838.282, 24.545,
            432.943, 852.105, 19.992,
            431.448, 852.105, 21.487,
            436.001, 838.282, 26.040,
            432.943, 852.105, 19.992,
            443.167, 831.850, 33.206,
            444.662, 831.850, 31.711,
            437.496, 838.282, 24.545,
            436.001, 838.282, 26.040,
            443.167, 831.850, 33.206,
            437.496, 838.282, 24.545,
            443.134, 826.311, 33.173,
            444.629, 826.311, 31.677,
            444.662, 831.850, 31.711,
            443.167, 831.850, 33.206,
            443.134, 826.311, 33.173,
            444.662, 831.850, 31.711,
            433.033, 823.335, 23.072,
            434.529, 823.335, 21.577,
            444.629, 826.311, 31.677,
            443.134, 826.311, 33.173,
            433.033, 823.335, 23.072,
            444.629, 826.311, 31.677,
            423.379, 862.323, 10.428,
            432.595, 860.122, 19.644,
            428.707, 851.835, 15.756,
            432.595, 860.122, 19.644,
            432.943, 852.105, 19.992,
            428.707, 851.835, 15.756,
            428.707, 851.835, 15.756,
            432.943, 852.105, 19.992,
            432.706, 837.667, 19.754,
            432.943, 852.105, 19.992,
            437.496, 838.282, 24.545,
            432.706, 837.667, 19.754,
            434.529, 823.335, 21.577,
            432.706, 837.667, 19.754,
            444.629, 826.311, 31.677,
            432.706, 837.667, 19.754,
            437.496, 838.282, 24.545,
            444.629, 826.311, 31.677,
            437.496, 838.282, 24.545,
            444.662, 831.850, 31.711,
            444.629, 826.311, 31.677,
            431.100, 860.122, 21.139,
            421.884, 862.323, 11.923,
            427.212, 851.835, 17.251,
            431.448, 852.105, 21.487,
            431.100, 860.122, 21.139,
            427.212, 851.835, 17.251,
            431.448, 852.105, 21.487,
            427.212, 851.835, 17.251,
            431.210, 837.667, 21.249,
            436.001, 838.282, 26.040,
            431.448, 852.105, 21.487,
            431.210, 837.667, 21.249,
            431.210, 837.667, 21.249,
            433.033, 823.335, 23.072,
            443.134, 826.311, 33.173,
            436.001, 838.282, 26.040,
            431.210, 837.667, 21.249,
            443.134, 826.311, 33.173,
            443.167, 831.850, 33.206,
            436.001, 838.282, 26.040,
            443.134, 826.311, 33.173,
            420.778, 860.122, 31.461,
            422.273, 860.122, 29.966,
            413.057, 862.323, 20.750,
            411.562, 862.323, 22.245,
            420.778, 860.122, 31.461,
            413.057, 862.323, 20.750,
            421.126, 852.105, 31.808,
            422.621, 852.105, 30.313,
            422.273, 860.122, 29.966,
            420.778, 860.122, 31.461,
            421.126, 852.105, 31.808,
            422.273, 860.122, 29.966,
            425.679, 838.282, 36.362,
            427.174, 838.282, 34.866,
            422.621, 852.105, 30.313,
            421.126, 852.105, 31.808,
            425.679, 838.282, 36.362,
            422.621, 852.105, 30.313,
            432.845, 831.850, 43.527,
            434.340, 831.850, 42.032,
            427.174, 838.282, 34.866,
            425.679, 838.282, 36.362,
            432.845, 831.850, 43.527,
            427.174, 838.282, 34.866,
            432.812, 826.311, 43.494,
            434.307, 826.311, 41.999,
            434.340, 831.850, 42.032,
            432.845, 831.850, 43.527,
            432.812, 826.311, 43.494,
            434.340, 831.850, 42.032,
            422.712, 823.335, 33.394,
            424.207, 823.335, 31.899,
            434.307, 826.311, 41.999,
            432.812, 826.311, 43.494,
            422.712, 823.335, 33.394,
            434.307, 826.311, 41.999,
            413.057, 862.323, 20.750,
            422.273, 860.122, 29.966,
            418.386, 851.835, 26.078,
            422.273, 860.122, 29.966,
            422.621, 852.105, 30.313,
            418.386, 851.835, 26.078,
            418.386, 851.835, 26.078,
            422.621, 852.105, 30.313,
            422.384, 837.667, 30.076,
            422.621, 852.105, 30.313,
            427.174, 838.282, 34.866,
            422.384, 837.667, 30.076,
            424.207, 823.335, 31.899,
            422.384, 837.667, 30.076,
            434.307, 826.311, 41.999,
            422.384, 837.667, 30.076,
            427.174, 838.282, 34.866,
            434.307, 826.311, 41.999,
            427.174, 838.282, 34.866,
            434.340, 831.850, 42.032,
            434.307, 826.311, 41.999,
            420.778, 860.122, 31.461,
            411.562, 862.323, 22.245,
            416.891, 851.835, 27.573,
            421.126, 852.105, 31.808,
            420.778, 860.122, 31.461,
            416.891, 851.835, 27.573,
            421.126, 852.105, 31.808,
            416.891, 851.835, 27.573,
            420.889, 837.667, 31.571,
            425.679, 838.282, 36.362,
            421.126, 852.105, 31.808,
            420.889, 837.667, 31.571,
            420.889, 837.667, 31.571,
            422.712, 823.335, 33.394,
            432.812, 826.311, 43.494,
            425.679, 838.282, 36.362,
            420.889, 837.667, 31.571,
            432.812, 826.311, 43.494,
            432.845, 831.850, 43.527,
            425.679, 838.282, 36.362,
            432.812, 826.311, 43.494,
            412.302, 867.025, 15.746,
            416.787, 867.025, 11.261,
            416.380, 866.971, 10.853,
            411.894, 866.971, 15.339,
            412.302, 867.025, 15.746,
            416.380, 866.971, 10.853,
            412.711, 867.067, 16.155,
            417.196, 867.067, 11.670,
            416.787, 867.025, 11.261,
            412.302, 867.025, 15.746,
            412.711, 867.067, 16.155,
            416.787, 867.025, 11.261,
            413.122, 867.086, 16.566,
            417.607, 867.086, 12.081,
            417.196, 867.067, 11.670,
            412.711, 867.067, 16.155,
            413.122, 867.086, 16.566,
            417.196, 867.067, 11.670,
            413.537, 867.071, 16.981,
            418.022, 867.071, 12.496,
            417.607, 867.086, 12.081,
            413.122, 867.086, 16.566,
            413.537, 867.071, 16.981,
            417.607, 867.086, 12.081,
            413.956, 867.010, 17.401,
            418.442, 867.010, 12.915,
            418.022, 867.071, 12.496,
            413.537, 867.071, 16.981,
            413.956, 867.010, 17.401,
            418.022, 867.071, 12.496,
            414.382, 866.892, 17.826,
            418.867, 866.892, 13.341,
            418.442, 867.010, 12.915,
            413.956, 867.010, 17.401,
            414.382, 866.892, 17.826,
            418.442, 867.010, 12.915,
            414.815, 866.705, 18.259,
            419.300, 866.705, 13.774,
            418.867, 866.892, 13.341,
            414.382, 866.892, 17.826,
            414.815, 866.705, 18.259,
            418.867, 866.892, 13.341,
            418.189, 862.305, 21.634,
            422.674, 862.305, 17.148,
            419.300, 866.705, 13.774,
            414.815, 866.705, 18.259,
            418.189, 862.305, 21.634,
            419.300, 866.705, 13.774,
            421.288, 857.571, 24.733,
            425.774, 857.571, 20.247,
            422.674, 862.305, 17.148,
            418.189, 862.305, 21.634,
            421.288, 857.571, 24.733,
            422.674, 862.305, 17.148,
            424.395, 851.445, 27.839,
            428.880, 851.445, 23.354,
            425.774, 857.571, 20.247,
            421.288, 857.571, 24.733,
            424.395, 851.445, 27.839,
            425.774, 857.571, 20.247,
            426.945, 843.921, 30.389,
            431.430, 843.921, 25.904,
            428.880, 851.445, 23.354,
            424.395, 851.445, 27.839,
            426.945, 843.921, 30.389,
            428.880, 851.445, 23.354,
            429.109, 834.268, 32.554,
            433.595, 834.268, 28.068,
            431.430, 843.921, 25.904,
            426.945, 843.921, 30.389,
            429.109, 834.268, 32.554,
            431.430, 843.921, 25.904,
            432.616, 830.621, 36.061,
            437.102, 830.621, 31.575,
            433.595, 834.268, 28.068,
            429.109, 834.268, 32.554,
            432.616, 830.621, 36.061,
            433.595, 834.268, 28.068,
            432.576, 822.910, 36.020,
            437.061, 822.910, 31.535,
            437.102, 830.621, 31.575,
            432.616, 830.621, 36.061,
            432.576, 822.910, 36.020,
            437.102, 830.621, 31.575,
            426.610, 820.503, 30.054,
            431.095, 820.503, 25.569,
            437.061, 822.910, 31.535,
            432.576, 822.910, 36.020,
            426.610, 820.503, 30.054,
            437.061, 822.910, 31.535,
            416.380, 866.971, 10.853,
            416.787, 867.025, 11.261,
            422.649, 857.731, 17.123,
            416.787, 867.025, 11.261,
            417.196, 867.067, 11.670,
            422.649, 857.731, 17.123,
            417.196, 867.067, 11.670,
            417.607, 867.086, 12.081,
            422.649, 857.731, 17.123,
            417.607, 867.086, 12.081,
            418.022, 867.071, 12.496,
            422.649, 857.731, 17.123,
            418.022, 867.071, 12.496,
            418.442, 867.010, 12.915,
            422.649, 857.731, 17.123,
            418.442, 867.010, 12.915,
            418.867, 866.892, 13.341,
            422.649, 857.731, 17.123,
            418.867, 866.892, 13.341,
            419.300, 866.705, 13.774,
            422.649, 857.731, 17.123,
            419.300, 866.705, 13.774,
            422.674, 862.305, 17.148,
            422.649, 857.731, 17.123,
            422.674, 862.305, 17.148,
            425.774, 857.571, 20.247,
            422.649, 857.731, 17.123,
            422.649, 857.731, 17.123,
            425.774, 857.571, 20.247,
            427.013, 846.781, 21.487,
            425.774, 857.571, 20.247,
            428.880, 851.445, 23.354,
            427.013, 846.781, 21.487,
            428.880, 851.445, 23.354,
            431.430, 843.921, 25.904,
            427.013, 846.781, 21.487,
            427.013, 846.781, 21.487,
            431.430, 843.921, 25.904,
            429.969, 833.045, 24.443,
            431.430, 843.921, 25.904,
            433.595, 834.268, 28.068,
            429.969, 833.045, 24.443,
            433.595, 834.268, 28.068,
            437.102, 830.621, 31.575,
            429.969, 833.045, 24.443,
            429.969, 833.045, 24.443,
            437.102, 830.621, 31.575,
            431.095, 820.503, 25.569,
            437.102, 830.621, 31.575,
            437.061, 822.910, 31.535,
            431.095, 820.503, 25.569,
            412.302, 867.025, 15.746,
            411.894, 866.971, 15.339,
            418.164, 857.731, 21.608,
            412.711, 867.067, 16.155,
            412.302, 867.025, 15.746,
            418.164, 857.731, 21.608,
            413.122, 867.086, 16.566,
            412.711, 867.067, 16.155,
            418.164, 857.731, 21.608,
            413.537, 867.071, 16.981,
            413.122, 867.086, 16.566,
            418.164, 857.731, 21.608,
            413.956, 867.010, 17.401,
            413.537, 867.071, 16.981,
            418.164, 857.731, 21.608,
            414.382, 866.892, 17.826,
            413.956, 867.010, 17.401,
            418.164, 857.731, 21.608,
            414.815, 866.705, 18.259,
            414.382, 866.892, 17.826,
            418.164, 857.731, 21.608,
            418.189, 862.305, 21.634,
            414.815, 866.705, 18.259,
            418.164, 857.731, 21.608,
            421.288, 857.571, 24.733,
            418.189, 862.305, 21.634,
            418.164, 857.731, 21.608,
            421.288, 857.571, 24.733,
            418.164, 857.731, 21.608,
            422.528, 846.781, 25.972,
            424.395, 851.445, 27.839,
            421.288, 857.571, 24.733,
            422.528, 846.781, 25.972,
            426.945, 843.921, 30.389,
            424.395, 851.445, 27.839,
            422.528, 846.781, 25.972,
            426.945, 843.921, 30.389,
            422.528, 846.781, 25.972,
            425.484, 833.045, 28.928,
            429.109, 834.268, 32.554,
            426.945, 843.921, 30.389,
            425.484, 833.045, 28.928,
            432.616, 830.621, 36.061,
            429.109, 834.268, 32.554,
            425.484, 833.045, 28.928,
            432.616, 830.621, 36.061,
            425.484, 833.045, 28.928,
            426.610, 820.503, 30.054,
            432.576, 822.910, 36.020,
            432.616, 830.621, 36.061,
               426.610, 820.503, 30.054
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.117, 0.986, -0.117,
            -0.117, 0.986, -0.117,
            -0.117, 0.986, -0.117,
            -0.117, 0.986, -0.117,
            -0.117, 0.986, -0.117,
            -0.117, 0.986, -0.117,
            -0.015, -1.000, -0.015,
            -0.015, -1.000, -0.015,
            -0.015, -1.000, -0.015,
            -0.015, -1.000, -0.015,
            -0.015, -1.000, -0.015,
            -0.015, -1.000, -0.015,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.118, 0.986, -0.118,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.706, 0.061, -0.706,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.641, 0.422, -0.641,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.379, 0.844, -0.379,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.707, -0.008, -0.707,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
            -0.144, -0.979, -0.144,
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
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
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
            0.707, -0.000, -0.707,
            0.058, 0.997, 0.058,
            0.058, 0.997, 0.058,
            0.066, 0.996, 0.066,
            0.066, 0.996, 0.066,
            0.058, 0.997, 0.058,
            0.066, 0.996, 0.066,
            0.037, 0.999, 0.037,
            0.037, 0.999, 0.037,
            0.058, 0.997, 0.058,
            0.058, 0.997, 0.058,
            0.037, 0.999, 0.037,
            0.058, 0.997, 0.058,
            0.003, 1.000, 0.003,
            0.003, 1.000, 0.003,
            0.037, 0.999, 0.037,
            0.037, 0.999, 0.037,
            0.003, 1.000, 0.003,
            0.037, 0.999, 0.037,
            -0.045, 0.998, -0.045,
            -0.045, 0.998, -0.045,
            0.003, 1.000, 0.003,
            0.003, 1.000, 0.003,
            -0.045, 0.998, -0.045,
            0.003, 1.000, 0.003,
            -0.105, 0.989, -0.105,
            -0.105, 0.989, -0.105,
            -0.045, 0.998, -0.045,
            -0.045, 0.998, -0.045,
            -0.105, 0.989, -0.105,
            -0.045, 0.998, -0.045,
            -0.172, 0.970, -0.172,
            -0.172, 0.970, -0.172,
            -0.105, 0.989, -0.105,
            -0.105, 0.989, -0.105,
            -0.172, 0.970, -0.172,
            -0.105, 0.989, -0.105,
            -0.207, 0.956, -0.207,
            -0.207, 0.956, -0.207,
            -0.172, 0.970, -0.172,
            -0.172, 0.970, -0.172,
            -0.207, 0.956, -0.207,
            -0.172, 0.970, -0.172,
            -0.499, 0.708, -0.499,
            -0.499, 0.708, -0.499,
            -0.479, 0.735, -0.479,
            -0.479, 0.735, -0.479,
            -0.499, 0.708, -0.499,
            -0.479, 0.735, -0.479,
            -0.548, 0.632, -0.548,
            -0.548, 0.632, -0.548,
            -0.499, 0.708, -0.499,
            -0.499, 0.708, -0.499,
            -0.548, 0.632, -0.548,
            -0.499, 0.708, -0.499,
            -0.608, 0.509, -0.608,
            -0.608, 0.509, -0.608,
            -0.548, 0.632, -0.548,
            -0.548, 0.632, -0.548,
            -0.608, 0.509, -0.608,
            -0.548, 0.632, -0.548,
            -0.657, 0.368, -0.657,
            -0.657, 0.368, -0.657,
            -0.608, 0.509, -0.608,
            -0.608, 0.509, -0.608,
            -0.657, 0.368, -0.657,
            -0.608, 0.509, -0.608,
            -0.575, 0.583, -0.575,
            -0.575, 0.583, -0.575,
            -0.657, 0.368, -0.657,
            -0.657, 0.368, -0.657,
            -0.575, 0.583, -0.575,
            -0.657, 0.368, -0.657,
            -0.632, 0.448, -0.632,
            -0.632, 0.448, -0.632,
            -0.575, 0.583, -0.575,
            -0.575, 0.583, -0.575,
            -0.632, 0.448, -0.632,
            -0.575, 0.583, -0.575,
            -0.707, -0.007, -0.707,
            -0.707, -0.007, -0.707,
            -0.632, 0.448, -0.632,
            -0.632, 0.448, -0.632,
            -0.707, -0.007, -0.707,
            -0.632, 0.448, -0.632,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
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
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
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
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
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
            -0.707, -0.000, 0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
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
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
               0.707, 0.000, -0.707
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
