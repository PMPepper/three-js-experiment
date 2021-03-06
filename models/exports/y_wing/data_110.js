function create_geometry_110(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -432.234, 828.604, 41.552,
            -432.234, 830.614, 41.552,
            -442.752, 830.614, 31.033,
            -442.752, 830.614, 31.033,
            -442.752, 828.604, 31.033,
            -432.234, 828.604, 41.552,
            -422.972, 832.817, 32.290,
            -433.491, 832.817, 21.772,
            -442.752, 830.614, 31.033,
            -442.752, 830.614, 31.033,
            -432.234, 830.614, 41.552,
            -422.972, 832.817, 32.290,
            -433.881, 828.330, 22.161,
            -423.362, 828.330, 32.680,
            -432.234, 828.604, 41.552,
            -432.234, 828.604, 41.552,
            -442.752, 828.604, 31.033,
            -433.881, 828.330, 22.161,
            -423.379, 862.323, 10.428,
            -432.595, 860.122, 19.644,
            -431.100, 860.122, 21.140,
            -423.379, 862.323, 10.428,
            -431.100, 860.122, 21.140,
            -421.884, 862.323, 11.923,
            -432.595, 860.122, 19.644,
            -432.943, 852.105, 19.992,
            -431.448, 852.105, 21.487,
            -432.595, 860.122, 19.644,
            -431.448, 852.105, 21.487,
            -431.100, 860.122, 21.140,
            -432.943, 852.105, 19.992,
            -437.496, 838.282, 24.545,
            -436.001, 838.282, 26.040,
            -432.943, 852.105, 19.992,
            -436.001, 838.282, 26.040,
            -431.448, 852.105, 21.487,
            -437.496, 838.282, 24.545,
            -444.662, 831.850, 31.711,
            -443.167, 831.850, 33.206,
            -437.496, 838.282, 24.545,
            -443.167, 831.850, 33.206,
            -436.001, 838.282, 26.040,
            -444.662, 831.850, 31.711,
            -444.629, 826.311, 31.678,
            -443.134, 826.311, 33.173,
            -444.662, 831.850, 31.711,
            -443.134, 826.311, 33.173,
            -443.167, 831.850, 33.206,
            -444.629, 826.311, 31.678,
            -434.529, 823.335, 21.578,
            -433.034, 823.335, 23.073,
            -444.629, 826.311, 31.678,
            -433.034, 823.335, 23.073,
            -443.134, 826.311, 33.173,
            -428.708, 851.835, 15.757,
            -432.595, 860.122, 19.644,
            -423.379, 862.323, 10.428,
            -428.708, 851.835, 15.757,
            -432.943, 852.105, 19.992,
            -432.595, 860.122, 19.644,
            -432.706, 837.667, 19.755,
            -432.943, 852.105, 19.992,
            -428.708, 851.835, 15.757,
            -432.706, 837.667, 19.755,
            -437.496, 838.282, 24.545,
            -432.943, 852.105, 19.992,
            -444.629, 826.311, 31.678,
            -432.706, 837.667, 19.755,
            -434.529, 823.335, 21.578,
            -444.629, 826.311, 31.678,
            -437.496, 838.282, 24.545,
            -432.706, 837.667, 19.755,
            -444.629, 826.311, 31.678,
            -444.662, 831.850, 31.711,
            -437.496, 838.282, 24.545,
            -427.212, 851.835, 17.252,
            -421.884, 862.323, 11.923,
            -431.100, 860.122, 21.140,
            -427.212, 851.835, 17.252,
            -431.100, 860.122, 21.140,
            -431.448, 852.105, 21.487,
            -431.211, 837.667, 21.250,
            -427.212, 851.835, 17.252,
            -431.448, 852.105, 21.487,
            -431.211, 837.667, 21.250,
            -431.448, 852.105, 21.487,
            -436.001, 838.282, 26.040,
            -443.134, 826.311, 33.173,
            -433.034, 823.335, 23.073,
            -431.211, 837.667, 21.250,
            -443.134, 826.311, 33.173,
            -431.211, 837.667, 21.250,
            -436.001, 838.282, 26.040,
            -443.134, 826.311, 33.173,
            -436.001, 838.282, 26.040,
            -443.167, 831.850, 33.206,
            -413.058, 862.323, 20.750,
            -422.274, 860.122, 29.966,
            -420.779, 860.122, 31.461,
            -413.058, 862.323, 20.750,
            -420.779, 860.122, 31.461,
            -411.562, 862.323, 22.245,
            -422.274, 860.122, 29.966,
            -422.621, 852.105, 30.314,
            -421.126, 852.105, 31.809,
            -422.274, 860.122, 29.966,
            -421.126, 852.105, 31.809,
            -420.779, 860.122, 31.461,
            -422.621, 852.105, 30.314,
            -427.174, 838.282, 34.867,
            -425.679, 838.282, 36.362,
            -422.621, 852.105, 30.314,
            -425.679, 838.282, 36.362,
            -421.126, 852.105, 31.809,
            -427.174, 838.282, 34.867,
            -434.340, 831.850, 42.033,
            -432.845, 831.850, 43.528,
            -427.174, 838.282, 34.867,
            -432.845, 831.850, 43.528,
            -425.679, 838.282, 36.362,
            -434.340, 831.850, 42.033,
            -434.307, 826.311, 42.000,
            -432.812, 826.311, 43.495,
            -434.340, 831.850, 42.033,
            -432.812, 826.311, 43.495,
            -432.845, 831.850, 43.528,
            -434.307, 826.311, 42.000,
            -424.207, 823.335, 31.899,
            -422.712, 823.335, 33.395,
            -434.307, 826.311, 42.000,
            -422.712, 823.335, 33.395,
            -432.812, 826.311, 43.495,
            -418.386, 851.835, 26.078,
            -422.274, 860.122, 29.966,
            -413.058, 862.323, 20.750,
            -418.386, 851.835, 26.078,
            -422.621, 852.105, 30.314,
            -422.274, 860.122, 29.966,
            -422.384, 837.667, 30.076,
            -422.621, 852.105, 30.314,
            -418.386, 851.835, 26.078,
            -422.384, 837.667, 30.076,
            -427.174, 838.282, 34.867,
            -422.621, 852.105, 30.314,
            -434.307, 826.311, 42.000,
            -422.384, 837.667, 30.076,
            -424.207, 823.335, 31.899,
            -434.307, 826.311, 42.000,
            -427.174, 838.282, 34.867,
            -422.384, 837.667, 30.076,
            -434.307, 826.311, 42.000,
            -434.340, 831.850, 42.033,
            -427.174, 838.282, 34.867,
            -416.891, 851.835, 27.573,
            -411.562, 862.323, 22.245,
            -420.779, 860.122, 31.461,
            -416.891, 851.835, 27.573,
            -420.779, 860.122, 31.461,
            -421.126, 852.105, 31.809,
            -420.889, 837.667, 31.572,
            -416.891, 851.835, 27.573,
            -421.126, 852.105, 31.809,
            -420.889, 837.667, 31.572,
            -421.126, 852.105, 31.809,
            -425.679, 838.282, 36.362,
            -432.812, 826.311, 43.495,
            -422.712, 823.335, 33.395,
            -420.889, 837.667, 31.572,
            -432.812, 826.311, 43.495,
            -420.889, 837.667, 31.572,
            -425.679, 838.282, 36.362,
            -432.812, 826.311, 43.495,
            -425.679, 838.282, 36.362,
            -432.845, 831.850, 43.528,
            -416.380, 866.971, 10.854,
            -416.788, 867.025, 11.261,
            -412.302, 867.025, 15.747,
            -416.380, 866.971, 10.854,
            -412.302, 867.025, 15.747,
            -411.895, 866.971, 15.339,
            -416.788, 867.025, 11.261,
            -417.196, 867.067, 11.670,
            -412.711, 867.067, 16.156,
            -416.788, 867.025, 11.261,
            -412.711, 867.067, 16.156,
            -412.302, 867.025, 15.747,
            -417.196, 867.067, 11.670,
            -417.607, 867.087, 12.081,
            -413.122, 867.087, 16.567,
            -417.196, 867.067, 11.670,
            -413.122, 867.087, 16.567,
            -412.711, 867.067, 16.156,
            -417.607, 867.087, 12.081,
            -418.022, 867.071, 12.496,
            -413.537, 867.071, 16.982,
            -417.607, 867.087, 12.081,
            -413.537, 867.071, 16.982,
            -413.122, 867.087, 16.567,
            -418.022, 867.071, 12.496,
            -418.442, 867.010, 12.916,
            -413.956, 867.010, 17.401,
            -418.022, 867.071, 12.496,
            -413.956, 867.010, 17.401,
            -413.537, 867.071, 16.982,
            -418.442, 867.010, 12.916,
            -418.867, 866.892, 13.341,
            -414.382, 866.892, 17.827,
            -418.442, 867.010, 12.916,
            -414.382, 866.892, 17.827,
            -413.956, 867.010, 17.401,
            -418.867, 866.892, 13.341,
            -419.300, 866.705, 13.774,
            -414.815, 866.705, 18.259,
            -418.867, 866.892, 13.341,
            -414.815, 866.705, 18.259,
            -414.382, 866.892, 17.827,
            -419.300, 866.705, 13.774,
            -422.675, 862.305, 17.149,
            -418.189, 862.305, 21.634,
            -419.300, 866.705, 13.774,
            -418.189, 862.305, 21.634,
            -414.815, 866.705, 18.259,
            -422.675, 862.305, 17.149,
            -425.774, 857.571, 20.248,
            -421.288, 857.571, 24.733,
            -422.675, 862.305, 17.149,
            -421.288, 857.571, 24.733,
            -418.189, 862.305, 21.634,
            -425.774, 857.571, 20.248,
            -428.881, 851.445, 23.354,
            -424.395, 851.445, 27.840,
            -425.774, 857.571, 20.248,
            -424.395, 851.445, 27.840,
            -421.288, 857.571, 24.733,
            -428.881, 851.445, 23.354,
            -431.430, 843.921, 25.904,
            -426.945, 843.921, 30.390,
            -428.881, 851.445, 23.354,
            -426.945, 843.921, 30.390,
            -424.395, 851.445, 27.840,
            -431.430, 843.921, 25.904,
            -433.595, 834.268, 28.069,
            -429.109, 834.268, 32.554,
            -431.430, 843.921, 25.904,
            -429.109, 834.268, 32.554,
            -426.945, 843.921, 30.390,
            -433.595, 834.268, 28.069,
            -437.102, 830.621, 31.576,
            -432.616, 830.621, 36.061,
            -433.595, 834.268, 28.069,
            -432.616, 830.621, 36.061,
            -429.109, 834.268, 32.554,
            -437.102, 830.621, 31.576,
            -437.061, 822.911, 31.535,
            -432.576, 822.911, 36.021,
            -437.102, 830.621, 31.576,
            -432.576, 822.911, 36.021,
            -432.616, 830.621, 36.061,
            -437.061, 822.911, 31.535,
            -431.096, 820.503, 25.569,
            -426.610, 820.503, 30.055,
            -437.061, 822.911, 31.535,
            -426.610, 820.503, 30.055,
            -432.576, 822.911, 36.021,
            -422.649, 857.731, 17.123,
            -416.788, 867.025, 11.261,
            -416.380, 866.971, 10.854,
            -422.649, 857.731, 17.123,
            -417.196, 867.067, 11.670,
            -416.788, 867.025, 11.261,
            -422.649, 857.731, 17.123,
            -417.607, 867.087, 12.081,
            -417.196, 867.067, 11.670,
            -422.649, 857.731, 17.123,
            -418.022, 867.071, 12.496,
            -417.607, 867.087, 12.081,
            -422.649, 857.731, 17.123,
            -418.442, 867.010, 12.916,
            -418.022, 867.071, 12.496,
            -422.649, 857.731, 17.123,
            -418.867, 866.892, 13.341,
            -418.442, 867.010, 12.916,
            -422.649, 857.731, 17.123,
            -419.300, 866.705, 13.774,
            -418.867, 866.892, 13.341,
            -422.649, 857.731, 17.123,
            -422.675, 862.305, 17.149,
            -419.300, 866.705, 13.774,
            -422.649, 857.731, 17.123,
            -425.774, 857.571, 20.248,
            -422.675, 862.305, 17.149,
            -427.013, 846.781, 21.487,
            -425.774, 857.571, 20.248,
            -422.649, 857.731, 17.123,
            -427.013, 846.781, 21.487,
            -428.881, 851.445, 23.354,
            -425.774, 857.571, 20.248,
            -427.013, 846.781, 21.487,
            -431.430, 843.921, 25.904,
            -428.881, 851.445, 23.354,
            -429.969, 833.045, 24.443,
            -431.430, 843.921, 25.904,
            -427.013, 846.781, 21.487,
            -429.969, 833.045, 24.443,
            -433.595, 834.268, 28.069,
            -431.430, 843.921, 25.904,
            -429.969, 833.045, 24.443,
            -437.102, 830.621, 31.576,
            -433.595, 834.268, 28.069,
            -431.096, 820.503, 25.569,
            -437.102, 830.621, 31.576,
            -429.969, 833.045, 24.443,
            -431.096, 820.503, 25.569,
            -437.061, 822.911, 31.535,
            -437.102, 830.621, 31.576,
            -418.164, 857.731, 21.609,
            -411.895, 866.971, 15.339,
            -412.302, 867.025, 15.747,
            -418.164, 857.731, 21.609,
            -412.302, 867.025, 15.747,
            -412.711, 867.067, 16.156,
            -418.164, 857.731, 21.609,
            -412.711, 867.067, 16.156,
            -413.122, 867.087, 16.567,
            -418.164, 857.731, 21.609,
            -413.122, 867.087, 16.567,
            -413.537, 867.071, 16.982,
            -418.164, 857.731, 21.609,
            -413.537, 867.071, 16.982,
            -413.956, 867.010, 17.401,
            -418.164, 857.731, 21.609,
            -413.956, 867.010, 17.401,
            -414.382, 866.892, 17.827,
            -418.164, 857.731, 21.609,
            -414.382, 866.892, 17.827,
            -414.815, 866.705, 18.259,
            -418.164, 857.731, 21.609,
            -414.815, 866.705, 18.259,
            -418.189, 862.305, 21.634,
            -418.164, 857.731, 21.609,
            -418.189, 862.305, 21.634,
            -421.288, 857.571, 24.733,
            -422.528, 846.781, 25.973,
            -418.164, 857.731, 21.609,
            -421.288, 857.571, 24.733,
            -422.528, 846.781, 25.973,
            -421.288, 857.571, 24.733,
            -424.395, 851.445, 27.840,
            -422.528, 846.781, 25.973,
            -424.395, 851.445, 27.840,
            -426.945, 843.921, 30.390,
            -425.484, 833.045, 28.929,
            -422.528, 846.781, 25.973,
            -426.945, 843.921, 30.390,
            -425.484, 833.045, 28.929,
            -426.945, 843.921, 30.390,
            -429.109, 834.268, 32.554,
            -425.484, 833.045, 28.929,
            -429.109, 834.268, 32.554,
            -432.616, 830.621, 36.061,
            -426.610, 820.503, 30.055,
            -425.484, 833.045, 28.929,
            -432.616, 830.621, 36.061,
            -426.610, 820.503, 30.055,
            -432.616, 830.621, 36.061,
               -432.576, 822.911, 36.021
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
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
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
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
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
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
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
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
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
            0.066, 0.996, -0.066,
            0.058, 0.997, -0.058,
            0.058, 0.997, -0.058,
            0.066, 0.996, -0.066,
            0.058, 0.997, -0.058,
            0.066, 0.996, -0.066,
            0.058, 0.997, -0.058,
            0.037, 0.999, -0.037,
            0.037, 0.999, -0.037,
            0.058, 0.997, -0.058,
            0.037, 0.999, -0.037,
            0.058, 0.997, -0.058,
            0.037, 0.999, -0.037,
            0.003, 1.000, -0.003,
            0.003, 1.000, -0.003,
            0.037, 0.999, -0.037,
            0.003, 1.000, -0.003,
            0.037, 0.999, -0.037,
            0.003, 1.000, -0.003,
            -0.045, 0.998, 0.045,
            -0.045, 0.998, 0.045,
            0.003, 1.000, -0.003,
            -0.045, 0.998, 0.045,
            0.003, 1.000, -0.003,
            -0.045, 0.998, 0.045,
            -0.105, 0.989, 0.105,
            -0.105, 0.989, 0.105,
            -0.045, 0.998, 0.045,
            -0.105, 0.989, 0.105,
            -0.045, 0.998, 0.045,
            -0.105, 0.989, 0.105,
            -0.172, 0.970, 0.172,
            -0.172, 0.970, 0.172,
            -0.105, 0.989, 0.105,
            -0.172, 0.970, 0.172,
            -0.105, 0.989, 0.105,
            -0.172, 0.970, 0.172,
            -0.207, 0.956, 0.207,
            -0.207, 0.956, 0.207,
            -0.172, 0.970, 0.172,
            -0.207, 0.956, 0.207,
            -0.172, 0.970, 0.172,
            -0.479, 0.735, 0.479,
            -0.499, 0.708, 0.499,
            -0.499, 0.708, 0.499,
            -0.479, 0.735, 0.479,
            -0.499, 0.708, 0.499,
            -0.479, 0.735, 0.479,
            -0.499, 0.708, 0.499,
            -0.548, 0.632, 0.548,
            -0.548, 0.632, 0.548,
            -0.499, 0.708, 0.499,
            -0.548, 0.632, 0.548,
            -0.499, 0.708, 0.499,
            -0.548, 0.632, 0.548,
            -0.608, 0.509, 0.608,
            -0.608, 0.509, 0.608,
            -0.548, 0.632, 0.548,
            -0.608, 0.509, 0.608,
            -0.548, 0.632, 0.548,
            -0.608, 0.509, 0.608,
            -0.657, 0.368, 0.657,
            -0.657, 0.368, 0.657,
            -0.608, 0.509, 0.608,
            -0.657, 0.368, 0.657,
            -0.608, 0.509, 0.608,
            -0.657, 0.368, 0.657,
            -0.575, 0.583, 0.575,
            -0.575, 0.583, 0.575,
            -0.657, 0.368, 0.657,
            -0.575, 0.583, 0.575,
            -0.657, 0.368, 0.657,
            -0.575, 0.583, 0.575,
            -0.632, 0.448, 0.632,
            -0.632, 0.448, 0.632,
            -0.575, 0.583, 0.575,
            -0.632, 0.448, 0.632,
            -0.575, 0.583, 0.575,
            -0.632, 0.448, 0.632,
            -0.707, -0.007, 0.707,
            -0.707, -0.007, 0.707,
            -0.632, 0.448, 0.632,
            -0.707, -0.007, 0.707,
            -0.632, 0.448, 0.632,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
            -0.194, -0.962, 0.194,
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
            -0.707, -0.000, -0.707,
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
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
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
            0.707, -0.000, 0.707,
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
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
               0.707, -0.000, 0.707
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
