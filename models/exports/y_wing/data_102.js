function create_geometry_102(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -442.273, 828.604, -104.577,
            -442.273, 830.614, -104.577,
            -431.754, 830.614, -115.096,
            -431.754, 830.614, -115.096,
            -431.754, 828.604, -115.096,
            -442.273, 828.604, -104.577,
            -433.011, 832.817, -95.316,
            -422.493, 832.817, -105.834,
            -431.754, 830.614, -115.096,
            -431.754, 830.614, -115.096,
            -442.273, 830.614, -104.577,
            -433.011, 832.817, -95.316,
            -422.883, 828.330, -106.224,
            -433.401, 828.330, -95.706,
            -442.273, 828.604, -104.577,
            -442.273, 828.604, -104.577,
            -431.754, 828.604, -115.096,
            -422.883, 828.330, -106.224,
            -411.150, 862.323, -95.723,
            -420.366, 860.122, -104.939,
            -421.861, 860.122, -103.444,
            -411.150, 862.323, -95.723,
            -421.861, 860.122, -103.444,
            -412.645, 862.323, -94.228,
            -420.366, 860.122, -104.939,
            -420.713, 852.105, -105.287,
            -422.208, 852.105, -103.791,
            -420.366, 860.122, -104.939,
            -422.208, 852.105, -103.791,
            -421.861, 860.122, -103.444,
            -420.713, 852.105, -105.287,
            -425.266, 838.282, -109.840,
            -426.761, 838.282, -108.345,
            -420.713, 852.105, -105.287,
            -426.761, 838.282, -108.345,
            -422.208, 852.105, -103.791,
            -425.266, 838.282, -109.840,
            -432.432, 831.850, -117.005,
            -433.927, 831.850, -115.510,
            -425.266, 838.282, -109.840,
            -433.927, 831.850, -115.510,
            -426.761, 838.282, -108.345,
            -432.432, 831.850, -117.005,
            -432.399, 826.311, -116.972,
            -433.894, 826.311, -115.477,
            -432.432, 831.850, -117.005,
            -433.894, 826.311, -115.477,
            -433.927, 831.850, -115.510,
            -432.399, 826.311, -116.972,
            -422.299, 823.335, -106.872,
            -423.794, 823.335, -105.377,
            -432.399, 826.311, -116.972,
            -423.794, 823.335, -105.377,
            -433.894, 826.311, -115.477,
            -416.478, 851.835, -101.051,
            -420.366, 860.122, -104.939,
            -411.150, 862.323, -95.723,
            -416.478, 851.835, -101.051,
            -420.713, 852.105, -105.287,
            -420.366, 860.122, -104.939,
            -420.476, 837.667, -105.049,
            -420.713, 852.105, -105.287,
            -416.478, 851.835, -101.051,
            -420.476, 837.667, -105.049,
            -425.266, 838.282, -109.840,
            -420.713, 852.105, -105.287,
            -432.399, 826.311, -116.972,
            -420.476, 837.667, -105.049,
            -422.299, 823.335, -106.872,
            -432.399, 826.311, -116.972,
            -425.266, 838.282, -109.840,
            -420.476, 837.667, -105.049,
            -432.399, 826.311, -116.972,
            -432.432, 831.850, -117.005,
            -425.266, 838.282, -109.840,
            -417.973, 851.835, -99.556,
            -412.645, 862.323, -94.228,
            -421.861, 860.122, -103.444,
            -417.973, 851.835, -99.556,
            -421.861, 860.122, -103.444,
            -422.208, 852.105, -103.791,
            -421.971, 837.667, -103.554,
            -417.973, 851.835, -99.556,
            -422.208, 852.105, -103.791,
            -421.971, 837.667, -103.554,
            -422.208, 852.105, -103.791,
            -426.761, 838.282, -108.345,
            -433.894, 826.311, -115.477,
            -423.794, 823.335, -105.377,
            -421.971, 837.667, -103.554,
            -433.894, 826.311, -115.477,
            -421.971, 837.667, -103.554,
            -426.761, 838.282, -108.345,
            -433.894, 826.311, -115.477,
            -426.761, 838.282, -108.345,
            -433.927, 831.850, -115.510,
            -421.471, 862.323, -85.401,
            -430.687, 860.122, -94.617,
            -432.182, 860.122, -93.122,
            -421.471, 862.323, -85.401,
            -432.182, 860.122, -93.122,
            -422.966, 862.323, -83.906,
            -430.687, 860.122, -94.617,
            -431.035, 852.105, -94.965,
            -432.530, 852.105, -93.470,
            -430.687, 860.122, -94.617,
            -432.530, 852.105, -93.470,
            -432.182, 860.122, -93.122,
            -431.035, 852.105, -94.965,
            -435.588, 838.282, -99.518,
            -437.083, 838.282, -98.023,
            -431.035, 852.105, -94.965,
            -437.083, 838.282, -98.023,
            -432.530, 852.105, -93.470,
            -435.588, 838.282, -99.518,
            -442.754, 831.850, -106.684,
            -444.249, 831.850, -105.189,
            -435.588, 838.282, -99.518,
            -444.249, 831.850, -105.189,
            -437.083, 838.282, -98.023,
            -442.754, 831.850, -106.684,
            -442.721, 826.311, -106.651,
            -444.216, 826.311, -105.155,
            -442.754, 831.850, -106.684,
            -444.216, 826.311, -105.155,
            -444.249, 831.850, -105.189,
            -442.721, 826.311, -106.651,
            -432.621, 823.335, -96.550,
            -434.116, 823.335, -95.055,
            -442.721, 826.311, -106.651,
            -434.116, 823.335, -95.055,
            -444.216, 826.311, -105.155,
            -426.799, 851.835, -90.729,
            -430.687, 860.122, -94.617,
            -421.471, 862.323, -85.401,
            -426.799, 851.835, -90.729,
            -431.035, 852.105, -94.965,
            -430.687, 860.122, -94.617,
            -430.798, 837.667, -94.727,
            -431.035, 852.105, -94.965,
            -426.799, 851.835, -90.729,
            -430.798, 837.667, -94.727,
            -435.588, 838.282, -99.518,
            -431.035, 852.105, -94.965,
            -442.721, 826.311, -106.651,
            -430.798, 837.667, -94.727,
            -432.621, 823.335, -96.550,
            -442.721, 826.311, -106.651,
            -435.588, 838.282, -99.518,
            -430.798, 837.667, -94.727,
            -442.721, 826.311, -106.651,
            -442.754, 831.850, -106.684,
            -435.588, 838.282, -99.518,
            -428.295, 851.835, -89.234,
            -422.966, 862.323, -83.906,
            -432.182, 860.122, -93.122,
            -428.295, 851.835, -89.234,
            -432.182, 860.122, -93.122,
            -432.530, 852.105, -93.470,
            -432.293, 837.667, -93.232,
            -428.295, 851.835, -89.234,
            -432.530, 852.105, -93.470,
            -432.293, 837.667, -93.232,
            -432.530, 852.105, -93.470,
            -437.083, 838.282, -98.023,
            -444.216, 826.311, -105.155,
            -434.116, 823.335, -95.055,
            -432.293, 837.667, -93.232,
            -444.216, 826.311, -105.155,
            -432.293, 837.667, -93.232,
            -437.083, 838.282, -98.023,
            -444.216, 826.311, -105.155,
            -437.083, 838.282, -98.023,
            -444.249, 831.850, -105.189,
            -411.575, 866.972, -88.724,
            -411.983, 867.025, -89.131,
            -416.468, 867.025, -84.646,
            -411.575, 866.972, -88.724,
            -416.468, 867.025, -84.646,
            -416.061, 866.971, -84.238,
            -411.983, 867.025, -89.131,
            -412.391, 867.067, -89.540,
            -416.877, 867.067, -85.054,
            -411.983, 867.025, -89.131,
            -416.877, 867.067, -85.054,
            -416.468, 867.025, -84.646,
            -412.391, 867.067, -89.540,
            -412.803, 867.087, -89.951,
            -417.288, 867.086, -85.466,
            -412.391, 867.067, -89.540,
            -417.288, 867.086, -85.466,
            -416.877, 867.067, -85.054,
            -412.803, 867.087, -89.951,
            -413.217, 867.071, -90.366,
            -417.703, 867.071, -85.880,
            -412.803, 867.087, -89.951,
            -417.703, 867.071, -85.880,
            -417.288, 867.086, -85.466,
            -413.217, 867.071, -90.366,
            -413.637, 867.010, -90.785,
            -418.122, 867.010, -86.300,
            -413.217, 867.071, -90.366,
            -418.122, 867.010, -86.300,
            -417.703, 867.071, -85.880,
            -413.637, 867.010, -90.785,
            -414.062, 866.892, -91.211,
            -418.548, 866.892, -86.725,
            -413.637, 867.010, -90.785,
            -418.548, 866.892, -86.725,
            -418.122, 867.010, -86.300,
            -414.062, 866.892, -91.211,
            -414.495, 866.705, -91.644,
            -418.981, 866.705, -87.158,
            -414.062, 866.892, -91.211,
            -418.981, 866.705, -87.158,
            -418.548, 866.892, -86.725,
            -414.495, 866.705, -91.644,
            -417.870, 862.305, -95.018,
            -422.355, 862.305, -90.533,
            -414.495, 866.705, -91.644,
            -422.355, 862.305, -90.533,
            -418.981, 866.705, -87.158,
            -417.870, 862.305, -95.018,
            -420.969, 857.571, -98.117,
            -425.454, 857.571, -93.632,
            -417.870, 862.305, -95.018,
            -425.454, 857.571, -93.632,
            -422.355, 862.305, -90.533,
            -420.969, 857.571, -98.117,
            -424.076, 851.445, -101.224,
            -428.561, 851.445, -96.739,
            -420.969, 857.571, -98.117,
            -428.561, 851.445, -96.739,
            -425.454, 857.571, -93.632,
            -424.076, 851.445, -101.224,
            -426.625, 843.921, -103.774,
            -431.111, 843.921, -99.288,
            -424.076, 851.445, -101.224,
            -431.111, 843.921, -99.288,
            -428.561, 851.445, -96.739,
            -426.625, 843.921, -103.774,
            -428.790, 834.268, -105.938,
            -433.275, 834.268, -101.453,
            -426.625, 843.921, -103.774,
            -433.275, 834.268, -101.453,
            -431.111, 843.921, -99.288,
            -428.790, 834.268, -105.938,
            -432.297, 830.621, -109.445,
            -436.782, 830.621, -104.960,
            -428.790, 834.268, -105.938,
            -436.782, 830.621, -104.960,
            -433.275, 834.268, -101.453,
            -432.297, 830.621, -109.445,
            -432.256, 822.910, -109.405,
            -436.742, 822.910, -104.919,
            -432.297, 830.621, -109.445,
            -436.742, 822.910, -104.919,
            -436.782, 830.621, -104.960,
            -432.256, 822.910, -109.405,
            -426.291, 820.503, -103.439,
            -430.776, 820.503, -98.954,
            -432.256, 822.910, -109.405,
            -430.776, 820.503, -98.954,
            -436.742, 822.910, -104.919,
            -417.844, 857.731, -94.993,
            -411.983, 867.025, -89.131,
            -411.575, 866.972, -88.724,
            -417.844, 857.731, -94.993,
            -412.391, 867.067, -89.540,
            -411.983, 867.025, -89.131,
            -417.844, 857.731, -94.993,
            -412.803, 867.087, -89.951,
            -412.391, 867.067, -89.540,
            -417.844, 857.731, -94.993,
            -413.217, 867.071, -90.366,
            -412.803, 867.087, -89.951,
            -417.844, 857.731, -94.993,
            -413.637, 867.010, -90.785,
            -413.217, 867.071, -90.366,
            -417.844, 857.731, -94.993,
            -414.062, 866.892, -91.211,
            -413.637, 867.010, -90.785,
            -417.844, 857.731, -94.993,
            -414.495, 866.705, -91.644,
            -414.062, 866.892, -91.211,
            -417.844, 857.731, -94.993,
            -417.870, 862.305, -95.018,
            -414.495, 866.705, -91.644,
            -417.844, 857.731, -94.993,
            -420.969, 857.571, -98.117,
            -417.870, 862.305, -95.018,
            -422.208, 846.781, -99.357,
            -420.969, 857.571, -98.117,
            -417.844, 857.731, -94.993,
            -422.208, 846.781, -99.357,
            -424.076, 851.445, -101.224,
            -420.969, 857.571, -98.117,
            -422.208, 846.781, -99.357,
            -426.625, 843.921, -103.774,
            -424.076, 851.445, -101.224,
            -425.164, 833.045, -102.313,
            -426.625, 843.921, -103.774,
            -422.208, 846.781, -99.357,
            -425.164, 833.045, -102.313,
            -428.790, 834.268, -105.938,
            -426.625, 843.921, -103.774,
            -425.164, 833.045, -102.313,
            -432.297, 830.621, -109.445,
            -428.790, 834.268, -105.938,
            -426.291, 820.503, -103.439,
            -432.297, 830.621, -109.445,
            -425.164, 833.045, -102.313,
            -426.291, 820.503, -103.439,
            -432.256, 822.910, -109.405,
            -432.297, 830.621, -109.445,
            -422.330, 857.731, -90.507,
            -416.061, 866.971, -84.238,
            -416.468, 867.025, -84.646,
            -422.330, 857.731, -90.507,
            -416.468, 867.025, -84.646,
            -416.877, 867.067, -85.054,
            -422.330, 857.731, -90.507,
            -416.877, 867.067, -85.054,
            -417.288, 867.086, -85.466,
            -422.330, 857.731, -90.507,
            -417.288, 867.086, -85.466,
            -417.703, 867.071, -85.880,
            -422.330, 857.731, -90.507,
            -417.703, 867.071, -85.880,
            -418.122, 867.010, -86.300,
            -422.330, 857.731, -90.507,
            -418.122, 867.010, -86.300,
            -418.548, 866.892, -86.725,
            -422.330, 857.731, -90.507,
            -418.548, 866.892, -86.725,
            -418.981, 866.705, -87.158,
            -422.330, 857.731, -90.507,
            -418.981, 866.705, -87.158,
            -422.355, 862.305, -90.533,
            -422.330, 857.731, -90.507,
            -422.355, 862.305, -90.533,
            -425.454, 857.571, -93.632,
            -426.694, 846.781, -94.871,
            -422.330, 857.731, -90.507,
            -425.454, 857.571, -93.632,
            -426.694, 846.781, -94.871,
            -425.454, 857.571, -93.632,
            -428.561, 851.445, -96.739,
            -426.694, 846.781, -94.871,
            -428.561, 851.445, -96.739,
            -431.111, 843.921, -99.288,
            -429.650, 833.045, -97.827,
            -426.694, 846.781, -94.871,
            -431.111, 843.921, -99.288,
            -429.650, 833.045, -97.827,
            -431.111, 843.921, -99.288,
            -433.275, 834.268, -101.453,
            -429.650, 833.045, -97.827,
            -433.275, 834.268, -101.453,
            -436.782, 830.621, -104.960,
            -430.776, 820.503, -98.954,
            -429.650, 833.045, -97.827,
            -436.782, 830.621, -104.960,
            -430.776, 820.503, -98.954,
            -436.782, 830.621, -104.960,
               -436.742, 822.910, -104.919
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
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
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
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
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
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
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
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
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            0.066, 0.996, 0.066,
            0.058, 0.997, 0.059,
            0.058, 0.997, 0.059,
            0.066, 0.996, 0.066,
            0.058, 0.997, 0.059,
            0.066, 0.996, 0.066,
            0.058, 0.997, 0.059,
            0.037, 0.999, 0.037,
            0.037, 0.999, 0.037,
            0.058, 0.997, 0.059,
            0.037, 0.999, 0.037,
            0.058, 0.997, 0.059,
            0.037, 0.999, 0.037,
            0.003, 1.000, 0.003,
            0.003, 1.000, 0.003,
            0.037, 0.999, 0.037,
            0.003, 1.000, 0.003,
            0.037, 0.999, 0.037,
            0.003, 1.000, 0.003,
            -0.045, 0.998, -0.045,
            -0.045, 0.998, -0.045,
            0.003, 1.000, 0.003,
            -0.045, 0.998, -0.045,
            0.003, 1.000, 0.003,
            -0.045, 0.998, -0.045,
            -0.105, 0.989, -0.104,
            -0.104, 0.989, -0.104,
            -0.045, 0.998, -0.045,
            -0.104, 0.989, -0.104,
            -0.045, 0.998, -0.045,
            -0.105, 0.989, -0.104,
            -0.172, 0.970, -0.172,
            -0.172, 0.970, -0.172,
            -0.105, 0.989, -0.104,
            -0.172, 0.970, -0.172,
            -0.104, 0.989, -0.104,
            -0.172, 0.970, -0.172,
            -0.207, 0.956, -0.207,
            -0.207, 0.956, -0.207,
            -0.172, 0.970, -0.172,
            -0.207, 0.956, -0.207,
            -0.172, 0.970, -0.172,
            -0.479, 0.735, -0.479,
            -0.499, 0.708, -0.499,
            -0.499, 0.708, -0.499,
            -0.479, 0.735, -0.479,
            -0.499, 0.708, -0.499,
            -0.479, 0.735, -0.479,
            -0.499, 0.708, -0.499,
            -0.548, 0.632, -0.548,
            -0.548, 0.632, -0.548,
            -0.499, 0.708, -0.499,
            -0.548, 0.632, -0.548,
            -0.499, 0.708, -0.499,
            -0.548, 0.632, -0.548,
            -0.608, 0.509, -0.608,
            -0.608, 0.509, -0.608,
            -0.548, 0.632, -0.548,
            -0.608, 0.509, -0.608,
            -0.548, 0.632, -0.548,
            -0.608, 0.509, -0.608,
            -0.657, 0.368, -0.657,
            -0.657, 0.368, -0.657,
            -0.608, 0.509, -0.608,
            -0.657, 0.368, -0.657,
            -0.608, 0.509, -0.608,
            -0.657, 0.368, -0.657,
            -0.575, 0.583, -0.575,
            -0.575, 0.583, -0.575,
            -0.657, 0.368, -0.657,
            -0.575, 0.583, -0.575,
            -0.657, 0.368, -0.657,
            -0.575, 0.583, -0.575,
            -0.632, 0.448, -0.632,
            -0.632, 0.448, -0.632,
            -0.575, 0.583, -0.575,
            -0.632, 0.448, -0.632,
            -0.575, 0.583, -0.575,
            -0.632, 0.448, -0.632,
            -0.707, -0.007, -0.707,
            -0.707, -0.007, -0.707,
            -0.632, 0.448, -0.632,
            -0.707, -0.007, -0.707,
            -0.632, 0.448, -0.632,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            -0.194, -0.962, -0.194,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
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
            0.707, -0.000, -0.707,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
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
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
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
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
               -0.707, 0.000, 0.707
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