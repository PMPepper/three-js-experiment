function create_geometry_70(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -3.606, 6.390, 0.018,
            -3.606, 6.343, -0.344,
            -3.606, 6.210, -0.095,
            -3.606, 6.343, -0.344,
            -3.606, 6.137, -0.390,
            -3.606, 6.210, -0.095,
            -3.606, 6.343, -0.344,
            -3.606, 6.250, -0.568,
            -3.606, 6.137, -0.390,
            -3.606, 6.250, -0.568,
            -3.606, 5.979, -0.650,
            -3.606, 6.137, -0.390,
            -3.606, 6.250, -0.568,
            -3.606, 6.109, -0.766,
            -3.606, 5.979, -0.650,
            -3.606, 6.109, -0.766,
            -3.606, 5.928, -0.928,
            -3.606, 5.979, -0.650,
            -3.606, 5.928, -0.928,
            -3.606, 5.738, -0.835,
            -3.606, 5.979, -0.650,
            -3.606, 5.928, -0.928,
            -3.606, 5.716, -1.045,
            -3.606, 5.738, -0.835,
            -3.606, 5.716, -1.045,
            -3.606, 5.453, -0.941,
            -3.606, 5.738, -0.835,
            -3.606, 5.716, -1.045,
            -3.606, 5.362, -1.133,
            -3.606, 5.453, -0.941,
            -3.606, 5.362, -1.133,
            -3.606, 5.049, -0.918,
            -3.606, 5.453, -0.941,
            -3.606, 5.362, -1.133,
            -3.606, 5.001, -1.085,
            -3.606, 5.049, -0.918,
            -3.606, 5.001, -1.085,
            -3.606, 4.776, -0.993,
            -3.606, 5.049, -0.918,
            -3.606, 4.776, -0.993,
            -3.606, 4.694, -0.722,
            -3.606, 5.049, -0.918,
            -3.606, 4.776, -0.993,
            -3.606, 4.578, -0.852,
            -3.606, 4.694, -0.722,
            -3.606, 4.578, -0.852,
            -3.606, 4.416, -0.671,
            -3.606, 4.694, -0.722,
            -3.606, 4.416, -0.671,
            -3.606, 4.460, -0.392,
            -3.606, 4.694, -0.722,
            -3.606, 4.416, -0.671,
            -3.606, 4.299, -0.458,
            -3.606, 4.460, -0.392,
            -3.606, 4.299, -0.458,
            -3.606, 4.211, -0.105,
            -3.606, 4.460, -0.392,
            -3.606, 4.211, -0.105,
            -3.606, 4.392, 0.008,
            -3.606, 4.460, -0.392,
            -3.606, 4.211, -0.105,
            -3.606, 4.259, 0.257,
            -3.606, 4.392, 0.008,
            -3.606, 4.259, 0.257,
            -3.606, 4.504, 0.397,
            -3.606, 4.392, 0.008,
            -3.606, 4.259, 0.257,
            -3.606, 4.352, 0.481,
            -3.606, 4.504, 0.397,
            -3.606, 4.352, 0.481,
            -3.606, 4.492, 0.679,
            -3.606, 4.504, 0.397,
            -3.606, 4.492, 0.679,
            -3.606, 4.774, 0.699,
            -3.606, 4.504, 0.397,
            -3.606, 4.492, 0.679,
            -3.606, 4.673, 0.841,
            -3.606, 4.774, 0.699,
            -3.606, 4.673, 0.841,
            -3.606, 4.886, 0.958,
            -3.606, 4.774, 0.699,
            -3.606, 4.886, 0.958,
            -3.606, 5.148, 0.854,
            -3.606, 4.774, 0.699,
            -3.606, 4.886, 0.958,
            -3.606, 5.119, 1.026,
            -3.606, 5.148, 0.854,
            -3.606, 5.119, 1.026,
            -3.606, 5.484, 1.032,
            -3.606, 5.148, 0.854,
            -3.606, 5.484, 1.032,
            -3.606, 5.553, 0.831,
            -3.606, 5.148, 0.854,
            -3.606, 5.484, 1.032,
            -3.606, 5.825, 0.906,
            -3.606, 5.553, 0.831,
            -3.606, 5.825, 0.906,
            -3.606, 5.907, 0.635,
            -3.606, 5.553, 0.831,
            -3.606, 5.825, 0.906,
            -3.606, 6.114, 0.684,
            -3.606, 5.907, 0.635,
            -3.606, 6.114, 0.684,
            -3.606, 6.142, 0.305,
            -3.606, 5.907, 0.635,
            -3.606, 6.114, 0.684,
            -3.606, 6.303, 0.371,
            -3.606, 6.142, 0.305,
            -3.606, 6.303, 0.371,
            -3.606, 6.390, 0.018,
            -3.606, 6.142, 0.305,
            -3.606, 6.390, 0.018,
            -3.606, 6.210, -0.095,
            -3.606, 6.142, 0.305,
            3.694, 4.218, -0.104,
            3.694, 4.293, -0.461,
            3.694, 4.392, -0.095,
            3.694, 4.293, -0.461,
            3.694, 4.504, -0.484,
            3.694, 4.392, -0.095,
            3.694, 4.293, -0.461,
            3.694, 4.492, -0.766,
            3.694, 4.504, -0.484,
            3.694, 4.492, -0.766,
            3.694, 4.774, -0.786,
            3.694, 4.504, -0.484,
            3.694, 4.492, -0.766,
            3.694, 4.673, -0.928,
            3.694, 4.774, -0.786,
            3.694, 4.673, -0.928,
            3.694, 4.886, -1.045,
            3.694, 4.774, -0.786,
            3.694, 4.886, -1.045,
            3.694, 5.148, -0.941,
            3.694, 4.774, -0.786,
            3.694, 4.886, -1.045,
            3.694, 5.119, -1.113,
            3.694, 5.148, -0.941,
            3.694, 5.119, -1.113,
            3.694, 5.484, -1.119,
            3.694, 5.148, -0.941,
            3.694, 5.484, -1.119,
            3.694, 5.553, -0.918,
            3.694, 5.148, -0.941,
            3.694, 5.484, -1.119,
            3.694, 5.825, -0.993,
            3.694, 5.553, -0.918,
            3.694, 5.825, -0.993,
            3.694, 5.824, -0.781,
            3.694, 5.553, -0.918,
            3.694, 5.825, -0.993,
            3.694, 6.023, -0.852,
            3.694, 5.824, -0.781,
            3.694, 6.023, -0.852,
            3.694, 6.043, -0.570,
            3.694, 5.824, -0.781,
            3.694, 6.023, -0.852,
            3.694, 6.256, -0.571,
            3.694, 6.043, -0.570,
            3.694, 6.256, -0.571,
            3.694, 6.170, -0.294,
            3.694, 6.043, -0.570,
            3.694, 6.256, -0.571,
            3.694, 6.370, -0.225,
            3.694, 6.170, -0.294,
            3.694, 6.370, -0.225,
            3.694, 6.210, 0.008,
            3.694, 6.170, -0.294,
            3.694, 6.370, -0.225,
            3.694, 6.376, 0.139,
            3.694, 6.210, 0.008,
            3.694, 6.376, 0.139,
            3.694, 6.097, 0.397,
            3.694, 6.210, 0.008,
            3.694, 6.376, 0.139,
            3.694, 6.250, 0.481,
            3.694, 6.097, 0.397,
            3.694, 6.250, 0.481,
            3.694, 6.109, 0.679,
            3.694, 6.097, 0.397,
            3.694, 6.109, 0.679,
            3.694, 5.827, 0.699,
            3.694, 6.097, 0.397,
            3.694, 6.109, 0.679,
            3.694, 5.928, 0.841,
            3.694, 5.827, 0.699,
            3.694, 5.928, 0.841,
            3.694, 5.716, 0.958,
            3.694, 5.827, 0.699,
            3.694, 5.716, 0.958,
            3.694, 5.453, 0.854,
            3.694, 5.827, 0.699,
            3.694, 5.716, 0.958,
            3.694, 5.482, 1.026,
            3.694, 5.453, 0.854,
            3.694, 5.482, 1.026,
            3.694, 5.240, 1.039,
            3.694, 5.453, 0.854,
            3.694, 5.240, 1.039,
            3.694, 5.149, 0.848,
            3.694, 5.453, 0.854,
            3.694, 5.240, 1.039,
            3.694, 5.001, 0.998,
            3.694, 5.149, 0.848,
            3.694, 5.001, 0.998,
            3.694, 4.860, 0.753,
            3.694, 5.149, 0.848,
            3.694, 5.001, 0.998,
            3.694, 4.776, 0.906,
            3.694, 4.860, 0.753,
            3.694, 4.776, 0.906,
            3.694, 4.578, 0.765,
            3.694, 4.860, 0.753,
            3.694, 4.578, 0.765,
            3.694, 4.558, 0.483,
            3.694, 4.860, 0.753,
            3.694, 4.578, 0.765,
            3.694, 4.416, 0.584,
            3.694, 4.558, 0.483,
            3.694, 4.416, 0.584,
            3.694, 4.252, 0.259,
            3.694, 4.558, 0.483,
            3.694, 4.252, 0.259,
            3.694, 4.432, 0.207,
            3.694, 4.558, 0.483,
            3.694, 4.252, 0.259,
            3.694, 4.392, -0.095,
            3.694, 4.432, 0.207,
            3.694, 4.252, 0.259,
            3.694, 4.218, -0.104,
               3.694, 4.392, -0.095
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, -0.003, -0.000,
            -1.000, -0.003, 0.001,
            -1.000, -0.003, 0.000,
            -1.000, -0.003, 0.001,
            -1.000, -0.003, 0.001,
            -1.000, -0.003, 0.000,
            -1.000, -0.003, 0.001,
            -1.000, -0.003, 0.002,
            -1.000, -0.003, 0.001,
            -1.000, -0.003, 0.002,
            -1.000, -0.002, 0.002,
            -1.000, -0.003, 0.001,
            -1.000, -0.003, 0.002,
            -1.000, -0.002, 0.002,
            -1.000, -0.002, 0.002,
            -1.000, -0.002, 0.002,
            -1.000, -0.002, 0.003,
            -1.000, -0.002, 0.002,
            -1.000, -0.002, 0.003,
            -1.000, -0.002, 0.003,
            -1.000, -0.002, 0.002,
            -1.000, -0.002, 0.003,
            -1.000, -0.001, 0.003,
            -1.000, -0.002, 0.003,
            -1.000, -0.001, 0.003,
            -1.000, -0.001, 0.003,
            -1.000, -0.002, 0.003,
            -1.000, -0.001, 0.003,
            -1.000, -0.000, 0.003,
            -1.000, -0.001, 0.003,
            -1.000, -0.000, 0.003,
            -1.000, 0.001, 0.003,
            -1.000, -0.001, 0.003,
            -1.000, -0.000, 0.003,
            -1.000, 0.001, 0.003,
            -1.000, 0.001, 0.003,
            -1.000, 0.001, 0.003,
            -1.000, 0.002, 0.003,
            -1.000, 0.001, 0.003,
            -1.000, 0.002, 0.003,
            -1.000, 0.002, 0.002,
            -1.000, 0.001, 0.003,
            -1.000, 0.002, 0.003,
            -1.000, 0.002, 0.002,
            -1.000, 0.002, 0.002,
            -1.000, 0.002, 0.002,
            -1.000, 0.003, 0.002,
            -1.000, 0.002, 0.002,
            -1.000, 0.003, 0.002,
            -1.000, 0.003, 0.001,
            -1.000, 0.002, 0.002,
            -1.000, 0.003, 0.002,
            -1.000, 0.003, 0.001,
            -1.000, 0.003, 0.001,
            -1.000, 0.003, 0.001,
            -1.000, 0.003, 0.000,
            -1.000, 0.003, 0.001,
            -1.000, 0.003, 0.000,
            -1.000, 0.003, -0.000,
            -1.000, 0.003, 0.001,
            -1.000, 0.003, 0.000,
            -1.000, 0.003, -0.001,
            -1.000, 0.003, -0.000,
            -1.000, 0.003, -0.001,
            -1.000, 0.003, -0.002,
            -1.000, 0.003, -0.000,
            -1.000, 0.003, -0.001,
            -1.000, 0.003, -0.002,
            -1.000, 0.003, -0.002,
            -1.000, 0.003, -0.002,
            -1.000, 0.002, -0.002,
            -1.000, 0.003, -0.002,
            -1.000, 0.002, -0.002,
            -1.000, 0.002, -0.003,
            -1.000, 0.003, -0.002,
            -1.000, 0.002, -0.002,
            -1.000, 0.002, -0.003,
            -1.000, 0.002, -0.003,
            -1.000, 0.002, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, 0.002, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, 0.002, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, -0.000, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, -0.000, -0.003,
            -1.000, -0.001, -0.003,
            -1.000, 0.001, -0.003,
            -1.000, -0.000, -0.003,
            -1.000, -0.002, -0.003,
            -1.000, -0.001, -0.003,
            -1.000, -0.002, -0.003,
            -1.000, -0.002, -0.002,
            -1.000, -0.001, -0.003,
            -1.000, -0.002, -0.003,
            -1.000, -0.002, -0.002,
            -1.000, -0.002, -0.002,
            -1.000, -0.002, -0.002,
            -1.000, -0.003, -0.001,
            -1.000, -0.002, -0.002,
            -1.000, -0.002, -0.002,
            -1.000, -0.003, -0.001,
            -1.000, -0.003, -0.001,
            -1.000, -0.003, -0.001,
            -1.000, -0.003, -0.000,
            -1.000, -0.003, -0.001,
            -1.000, -0.003, -0.000,
            -1.000, -0.003, 0.000,
            -1.000, -0.003, -0.001,
            1.000, 0.003, 0.000,
            1.000, 0.003, 0.001,
            1.000, 0.003, 0.000,
            1.000, 0.003, 0.001,
            1.000, 0.003, 0.002,
            1.000, 0.003, 0.000,
            1.000, 0.003, 0.001,
            1.000, 0.002, 0.002,
            1.000, 0.003, 0.002,
            1.000, 0.002, 0.002,
            1.000, 0.002, 0.003,
            1.000, 0.003, 0.002,
            1.000, 0.002, 0.002,
            1.000, 0.002, 0.003,
            1.000, 0.002, 0.003,
            1.000, 0.002, 0.003,
            1.000, 0.001, 0.003,
            1.000, 0.002, 0.003,
            1.000, 0.001, 0.003,
            1.000, 0.001, 0.003,
            1.000, 0.002, 0.003,
            1.000, 0.001, 0.003,
            1.000, 0.001, 0.003,
            1.000, 0.001, 0.003,
            1.000, 0.001, 0.003,
            1.000, -0.000, 0.003,
            1.000, 0.001, 0.003,
            1.000, -0.000, 0.003,
            1.000, -0.001, 0.003,
            1.000, 0.001, 0.003,
            1.000, -0.000, 0.003,
            1.000, -0.002, 0.003,
            1.000, -0.001, 0.003,
            1.000, -0.002, 0.003,
            1.000, -0.002, 0.003,
            1.000, -0.001, 0.003,
            1.000, -0.002, 0.003,
            1.000, -0.002, 0.002,
            1.000, -0.002, 0.003,
            1.000, -0.002, 0.002,
            1.000, -0.003, 0.002,
            1.000, -0.002, 0.003,
            1.000, -0.002, 0.002,
            1.000, -0.003, 0.002,
            1.000, -0.003, 0.002,
            1.000, -0.003, 0.002,
            1.000, -0.003, 0.001,
            1.000, -0.003, 0.002,
            1.000, -0.003, 0.002,
            1.000, -0.003, 0.001,
            1.000, -0.003, 0.001,
            1.000, -0.003, 0.001,
            1.000, -0.003, -0.000,
            1.000, -0.003, 0.001,
            1.000, -0.003, 0.001,
            1.000, -0.003, -0.001,
            1.000, -0.003, -0.000,
            1.000, -0.003, -0.001,
            1.000, -0.003, -0.002,
            1.000, -0.003, -0.000,
            1.000, -0.003, -0.001,
            1.000, -0.003, -0.002,
            1.000, -0.003, -0.002,
            1.000, -0.003, -0.002,
            1.000, -0.002, -0.002,
            1.000, -0.003, -0.002,
            1.000, -0.002, -0.002,
            1.000, -0.002, -0.003,
            1.000, -0.003, -0.002,
            1.000, -0.002, -0.002,
            1.000, -0.002, -0.003,
            1.000, -0.002, -0.003,
            1.000, -0.002, -0.003,
            1.000, -0.001, -0.003,
            1.000, -0.002, -0.003,
            1.000, -0.001, -0.003,
            1.000, -0.001, -0.003,
            1.000, -0.002, -0.003,
            1.000, -0.001, -0.003,
            1.000, -0.001, -0.003,
            1.000, -0.001, -0.003,
            1.000, -0.001, -0.003,
            1.000, 0.000, -0.003,
            1.000, -0.001, -0.003,
            1.000, 0.000, -0.003,
            1.000, 0.001, -0.003,
            1.000, -0.001, -0.003,
            1.000, 0.000, -0.003,
            1.000, 0.001, -0.003,
            1.000, 0.001, -0.003,
            1.000, 0.001, -0.003,
            1.000, 0.002, -0.003,
            1.000, 0.001, -0.003,
            1.000, 0.001, -0.003,
            1.000, 0.002, -0.003,
            1.000, 0.002, -0.003,
            1.000, 0.002, -0.003,
            1.000, 0.002, -0.002,
            1.000, 0.002, -0.003,
            1.000, 0.002, -0.002,
            1.000, 0.003, -0.002,
            1.000, 0.002, -0.003,
            1.000, 0.002, -0.002,
            1.000, 0.003, -0.002,
            1.000, 0.003, -0.002,
            1.000, 0.003, -0.002,
            1.000, 0.003, -0.001,
            1.000, 0.003, -0.002,
            1.000, 0.003, -0.001,
            1.000, 0.003, -0.001,
            1.000, 0.003, -0.002,
            1.000, 0.003, -0.001,
            1.000, 0.003, 0.000,
            1.000, 0.003, -0.001,
            1.000, 0.003, -0.001,
            1.000, 0.003, 0.000,
               1.000, 0.003, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               1.003, 0.528,
               0.981, 0.361,
               0.920, 0.476,
               0.981, 0.361,
               0.886, 0.340,
               0.920, 0.476,
               0.981, 0.361,
               0.938, 0.258,
               0.886, 0.340,
               0.938, 0.258,
               0.813, 0.220,
               0.886, 0.340,
               0.938, 0.258,
               0.873, 0.166,
               0.813, 0.220,
               0.873, 0.166,
               0.790, 0.092,
               0.813, 0.220,
               0.790, 0.092,
               0.702, 0.134,
               0.813, 0.220,
               0.790, 0.092,
               0.692, 0.037,
               0.702, 0.134,
               0.692, 0.037,
               0.570, 0.086,
               0.702, 0.134,
               0.692, 0.037,
               0.528, -0.003,
               0.570, 0.086,
               0.528, -0.003,
               0.384, 0.096,
               0.570, 0.086,
               0.528, -0.003,
               0.361, 0.019,
               0.384, 0.096,
               0.361, 0.019,
               0.258, 0.062,
               0.384, 0.096,
               0.258, 0.062,
               0.220, 0.187,
               0.384, 0.096,
               0.258, 0.062,
               0.166, 0.127,
               0.220, 0.187,
               0.166, 0.127,
               0.092, 0.210,
               0.220, 0.187,
               0.092, 0.210,
               0.112, 0.339,
               0.220, 0.187,
               0.092, 0.210,
               0.037, 0.308,
               0.112, 0.339,
               0.037, 0.308,
               -0.003, 0.472,
               0.112, 0.339,
               -0.003, 0.472,
               0.080, 0.524,
               0.112, 0.339,
               -0.003, 0.472,
               0.019, 0.639,
               0.080, 0.524,
               0.019, 0.639,
               0.132, 0.703,
               0.080, 0.524,
               0.019, 0.639,
               0.062, 0.742,
               0.132, 0.703,
               0.062, 0.742,
               0.127, 0.834,
               0.132, 0.703,
               0.127, 0.834,
               0.257, 0.843,
               0.132, 0.703,
               0.127, 0.834,
               0.210, 0.908,
               0.257, 0.843,
               0.210, 0.908,
               0.308, 0.963,
               0.257, 0.843,
               0.308, 0.963,
               0.430, 0.914,
               0.257, 0.843,
               0.308, 0.963,
               0.416, 0.994,
               0.430, 0.914,
               0.416, 0.994,
               0.584, 0.997,
               0.430, 0.914,
               0.584, 0.997,
               0.616, 0.904,
               0.430, 0.914,
               0.584, 0.997,
               0.742, 0.938,
               0.616, 0.904,
               0.742, 0.938,
               0.780, 0.813,
               0.616, 0.904,
               0.742, 0.938,
               0.876, 0.836,
               0.780, 0.813,
               0.876, 0.836,
               0.888, 0.661,
               0.780, 0.813,
               0.876, 0.836,
               0.963, 0.692,
               0.888, 0.661,
               0.963, 0.692,
               1.003, 0.528,
               0.888, 0.661,
               1.003, 0.528,
               0.920, 0.476,
               0.888, 0.661,
               0.000, 0.472,
               0.034, 0.307,
               0.080, 0.476,
               0.034, 0.307,
               0.132, 0.297,
               0.080, 0.476,
               0.034, 0.307,
               0.127, 0.166,
               0.132, 0.297,
               0.127, 0.166,
               0.257, 0.157,
               0.132, 0.297,
               0.127, 0.166,
               0.210, 0.092,
               0.257, 0.157,
               0.210, 0.092,
               0.308, 0.037,
               0.257, 0.157,
               0.308, 0.037,
               0.430, 0.086,
               0.257, 0.157,
               0.308, 0.037,
               0.416, 0.006,
               0.430, 0.086,
               0.416, 0.006,
               0.584, 0.003,
               0.430, 0.086,
               0.584, 0.003,
               0.616, 0.096,
               0.430, 0.086,
               0.584, 0.003,
               0.742, 0.062,
               0.616, 0.096,
               0.742, 0.062,
               0.742, 0.159,
               0.616, 0.096,
               0.742, 0.062,
               0.834, 0.127,
               0.742, 0.159,
               0.834, 0.127,
               0.843, 0.257,
               0.742, 0.159,
               0.834, 0.127,
               0.941, 0.256,
               0.843, 0.257,
               0.941, 0.256,
               0.901, 0.384,
               0.843, 0.257,
               0.941, 0.256,
               0.994, 0.416,
               0.901, 0.384,
               0.994, 0.416,
               0.920, 0.524,
               0.901, 0.384,
               0.994, 0.416,
               0.997, 0.584,
               0.920, 0.524,
               0.997, 0.584,
               0.868, 0.703,
               0.920, 0.524,
               0.997, 0.584,
               0.938, 0.742,
               0.868, 0.703,
               0.938, 0.742,
               0.873, 0.834,
               0.868, 0.703,
               0.873, 0.834,
               0.743, 0.843,
               0.868, 0.703,
               0.873, 0.834,
               0.790, 0.908,
               0.743, 0.843,
               0.790, 0.908,
               0.692, 0.963,
               0.743, 0.843,
               0.692, 0.963,
               0.570, 0.914,
               0.743, 0.843,
               0.692, 0.963,
               0.584, 0.994,
               0.570, 0.914,
               0.584, 0.994,
               0.472, 1.000,
               0.570, 0.914,
               0.472, 1.000,
               0.430, 0.912,
               0.570, 0.914,
               0.472, 1.000,
               0.361, 0.981,
               0.430, 0.912,
               0.361, 0.981,
               0.297, 0.868,
               0.430, 0.912,
               0.361, 0.981,
               0.258, 0.938,
               0.297, 0.868,
               0.258, 0.938,
               0.166, 0.873,
               0.297, 0.868,
               0.166, 0.873,
               0.157, 0.743,
               0.297, 0.868,
               0.166, 0.873,
               0.092, 0.790,
               0.157, 0.743,
               0.092, 0.790,
               0.016, 0.639,
               0.157, 0.743,
               0.016, 0.639,
               0.099, 0.616,
               0.157, 0.743,
               0.016, 0.639,
               0.080, 0.476,
               0.099, 0.616,
               0.016, 0.639,
               0.000, 0.472,
               0.080, 0.476
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_BODYTUBE.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
