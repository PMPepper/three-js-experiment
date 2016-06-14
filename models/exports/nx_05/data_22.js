function create_geometry_22(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -53.051, 111.156, 3.420,
            -54.926, 112.771, 3.420,
            -54.926, 112.771, 5.420,
            -53.051, 111.156, 3.420,
            -54.926, 112.771, 5.420,
            -53.051, 111.156, 5.420,
            -54.926, 112.771, 3.420,
            -56.565, 114.166, 3.420,
            -56.565, 114.166, 5.420,
            -54.926, 112.771, 3.420,
            -56.565, 114.166, 5.420,
            -54.926, 112.771, 5.420,
            -56.565, 114.166, 3.420,
            -58.220, 115.541, 3.420,
            -58.220, 115.541, 5.420,
            -56.565, 114.166, 3.420,
            -58.220, 115.541, 5.420,
            -56.565, 114.166, 5.420,
            -58.220, 115.541, 3.420,
            -59.892, 116.897, 3.420,
            -59.892, 116.897, 5.420,
            -58.220, 115.541, 3.420,
            -59.892, 116.897, 5.420,
            -58.220, 115.541, 5.420,
            -59.892, 116.897, 3.420,
            -61.578, 118.233, 3.420,
            -61.578, 118.233, 5.420,
            -59.892, 116.897, 3.420,
            -61.578, 118.233, 5.420,
            -59.892, 116.897, 5.420,
            -61.578, 118.233, 3.420,
            -63.281, 119.549, 3.420,
            -63.281, 119.549, 5.420,
            -61.578, 118.233, 3.420,
            -63.281, 119.549, 5.420,
            -61.578, 118.233, 5.420,
            -63.281, 119.549, 3.420,
            -64.999, 120.846, 3.420,
            -64.999, 120.846, 5.420,
            -63.281, 119.549, 3.420,
            -64.999, 120.846, 5.420,
            -63.281, 119.549, 5.420,
            -64.999, 120.846, 3.420,
            -66.732, 122.122, 3.420,
            -66.732, 122.122, 5.420,
            -64.999, 120.846, 3.420,
            -66.732, 122.122, 5.420,
            -64.999, 120.846, 5.420,
            -66.732, 122.122, 3.420,
            -68.561, 123.452, 3.420,
            -68.561, 123.452, 5.420,
            -66.732, 122.122, 3.420,
            -68.561, 123.452, 5.420,
            -66.732, 122.122, 5.420,
            -68.561, 123.452, 3.420,
            -68.788, 123.568, 3.420,
            -68.788, 123.568, 5.420,
            -68.561, 123.452, 3.420,
            -68.788, 123.568, 5.420,
            -68.561, 123.452, 5.420,
            -68.788, 123.568, 3.420,
            -69.026, 123.607, 3.420,
            -69.026, 123.607, 5.420,
            -68.788, 123.568, 3.420,
            -69.026, 123.607, 5.420,
            -68.788, 123.568, 5.420,
            -69.026, 123.607, 3.420,
            -69.259, 123.576, 3.420,
            -69.259, 123.576, 5.420,
            -69.026, 123.607, 3.420,
            -69.259, 123.576, 5.420,
            -69.026, 123.607, 5.420,
            -69.259, 123.576, 3.420,
            -69.473, 123.480, 3.420,
            -69.473, 123.480, 5.420,
            -69.259, 123.576, 3.420,
            -69.473, 123.480, 5.420,
            -69.259, 123.576, 5.420,
            -69.473, 123.480, 3.420,
            -69.652, 123.327, 3.420,
            -69.652, 123.327, 5.420,
            -69.473, 123.480, 3.420,
            -69.652, 123.327, 5.420,
            -69.473, 123.480, 5.420,
            -69.652, 123.327, 3.420,
            -69.781, 123.124, 3.420,
            -69.781, 123.124, 5.420,
            -69.652, 123.327, 3.420,
            -69.781, 123.124, 5.420,
            -69.652, 123.327, 5.420,
            -69.781, 123.124, 3.420,
            -69.845, 122.877, 3.420,
            -69.845, 122.877, 5.420,
            -69.781, 123.124, 3.420,
            -69.845, 122.877, 5.420,
            -69.781, 123.124, 5.420,
            -69.845, 122.877, 3.420,
            -71.235, 109.063, 3.420,
            -71.235, 109.063, 5.420,
            -69.845, 122.877, 3.420,
            -71.235, 109.063, 5.420,
            -69.845, 122.877, 5.420,
            -71.235, 109.063, 3.420,
            -71.180, 107.951, 3.420,
            -71.180, 107.951, 5.420,
            -71.235, 109.063, 3.420,
            -71.180, 107.951, 5.420,
            -71.235, 109.063, 5.420,
            -71.180, 107.951, 3.420,
            -70.820, 106.957, 3.420,
            -70.820, 106.957, 5.420,
            -71.180, 107.951, 3.420,
            -70.820, 106.957, 5.420,
            -71.180, 107.951, 5.420,
            -70.820, 106.957, 3.420,
            -70.207, 106.124, 3.420,
            -70.207, 106.124, 5.420,
            -70.820, 106.957, 3.420,
            -70.207, 106.124, 5.420,
            -70.820, 106.957, 5.420,
            -70.207, 106.124, 3.420,
            -69.395, 105.493, 3.420,
            -69.395, 105.493, 5.420,
            -70.207, 106.124, 3.420,
            -69.395, 105.493, 5.420,
            -70.207, 106.124, 5.420,
            -69.395, 105.493, 3.420,
            -68.437, 105.106, 3.420,
            -68.437, 105.106, 5.420,
            -69.395, 105.493, 3.420,
            -68.437, 105.106, 5.420,
            -69.395, 105.493, 5.420,
            -68.437, 105.106, 3.420,
            -67.385, 105.002, 3.420,
            -67.385, 105.002, 5.420,
            -68.437, 105.106, 3.420,
            -67.385, 105.002, 5.420,
            -68.437, 105.106, 5.420,
            -67.385, 105.002, 3.420,
            -66.293, 105.225, 3.420,
            -66.293, 105.225, 5.420,
            -67.385, 105.002, 3.420,
            -66.293, 105.225, 5.420,
            -67.385, 105.002, 5.420,
            -66.293, 105.225, 3.420,
            -53.265, 109.984, 3.420,
            -53.265, 109.984, 5.420,
            -66.293, 105.225, 3.420,
            -53.265, 109.984, 5.420,
            -66.293, 105.225, 5.420,
            -53.265, 109.984, 3.420,
            -53.076, 110.088, 3.420,
            -53.076, 110.088, 5.420,
            -53.265, 109.984, 3.420,
            -53.076, 110.088, 5.420,
            -53.265, 109.984, 5.420,
            -53.076, 110.088, 3.420,
            -52.937, 110.235, 3.420,
            -52.937, 110.235, 5.420,
            -53.076, 110.088, 3.420,
            -52.937, 110.235, 5.420,
            -53.076, 110.088, 5.420,
            -52.937, 110.235, 3.420,
            -52.848, 110.413, 3.420,
            -52.848, 110.413, 5.420,
            -52.937, 110.235, 3.420,
            -52.848, 110.413, 5.420,
            -52.937, 110.235, 5.420,
            -52.848, 110.413, 3.420,
            -52.812, 110.608, 3.420,
            -52.812, 110.608, 5.420,
            -52.848, 110.413, 3.420,
            -52.812, 110.608, 5.420,
            -52.848, 110.413, 5.420,
            -52.812, 110.608, 3.420,
            -52.833, 110.805, 3.420,
            -52.833, 110.805, 5.420,
            -52.812, 110.608, 3.420,
            -52.833, 110.805, 5.420,
            -52.812, 110.608, 5.420,
            -52.833, 110.805, 3.420,
            -52.911, 110.993, 3.420,
            -52.911, 110.993, 5.420,
            -52.833, 110.805, 3.420,
            -52.911, 110.993, 5.420,
            -52.833, 110.805, 5.420,
            -52.911, 110.993, 3.420,
            -53.051, 111.156, 3.420,
            -53.051, 111.156, 5.420,
            -52.911, 110.993, 3.420,
            -53.051, 111.156, 5.420,
            -52.911, 110.993, 5.420,
            -68.561, 123.452, 3.420,
            -69.026, 123.607, 3.420,
            -68.788, 123.568, 3.420,
            -68.561, 123.452, 3.420,
            -69.259, 123.576, 3.420,
            -69.026, 123.607, 3.420,
            -68.561, 123.452, 3.420,
            -69.473, 123.480, 3.420,
            -69.259, 123.576, 3.420,
            -68.561, 123.452, 3.420,
            -69.652, 123.327, 3.420,
            -69.473, 123.480, 3.420,
            -68.561, 123.452, 3.420,
            -69.781, 123.124, 3.420,
            -69.652, 123.327, 3.420,
            -68.561, 123.452, 3.420,
            -69.845, 122.877, 3.420,
            -69.781, 123.124, 3.420,
            -68.561, 123.452, 3.420,
            -71.235, 109.063, 3.420,
            -69.845, 122.877, 3.420,
            -66.732, 122.122, 3.420,
            -71.235, 109.063, 3.420,
            -68.561, 123.452, 3.420,
            -64.999, 120.846, 3.420,
            -71.235, 109.063, 3.420,
            -66.732, 122.122, 3.420,
            -63.281, 119.549, 3.420,
            -71.235, 109.063, 3.420,
            -64.999, 120.846, 3.420,
            -61.578, 118.233, 3.420,
            -71.235, 109.063, 3.420,
            -63.281, 119.549, 3.420,
            -59.892, 116.897, 3.420,
            -71.235, 109.063, 3.420,
            -61.578, 118.233, 3.420,
            -58.220, 115.541, 3.420,
            -71.235, 109.063, 3.420,
            -59.892, 116.897, 3.420,
            -58.220, 115.541, 3.420,
            -71.180, 107.951, 3.420,
            -71.235, 109.063, 3.420,
            -58.220, 115.541, 3.420,
            -70.820, 106.957, 3.420,
            -71.180, 107.951, 3.420,
            -58.220, 115.541, 3.420,
            -70.207, 106.124, 3.420,
            -70.820, 106.957, 3.420,
            -58.220, 115.541, 3.420,
            -69.395, 105.493, 3.420,
            -70.207, 106.124, 3.420,
            -58.220, 115.541, 3.420,
            -68.437, 105.106, 3.420,
            -69.395, 105.493, 3.420,
            -58.220, 115.541, 3.420,
            -67.385, 105.002, 3.420,
            -68.437, 105.106, 3.420,
            -58.220, 115.541, 3.420,
            -66.293, 105.225, 3.420,
            -67.385, 105.002, 3.420,
            -58.220, 115.541, 3.420,
            -53.265, 109.984, 3.420,
            -66.293, 105.225, 3.420,
            -56.565, 114.166, 3.420,
            -53.265, 109.984, 3.420,
            -58.220, 115.541, 3.420,
            -54.926, 112.771, 3.420,
            -53.265, 109.984, 3.420,
            -56.565, 114.166, 3.420,
            -53.051, 111.156, 3.420,
            -53.265, 109.984, 3.420,
            -54.926, 112.771, 3.420,
            -52.911, 110.993, 3.420,
            -53.265, 109.984, 3.420,
            -53.051, 111.156, 3.420,
            -52.911, 110.993, 3.420,
            -53.076, 110.088, 3.420,
            -53.265, 109.984, 3.420,
            -52.833, 110.805, 3.420,
            -53.076, 110.088, 3.420,
            -52.911, 110.993, 3.420,
            -52.812, 110.608, 3.420,
            -53.076, 110.088, 3.420,
            -52.833, 110.805, 3.420,
            -52.812, 110.608, 3.420,
            -52.937, 110.235, 3.420,
            -53.076, 110.088, 3.420,
            -52.812, 110.608, 3.420,
            -52.848, 110.413, 3.420,
            -52.937, 110.235, 3.420,
            -68.561, 123.452, 5.420,
            -68.788, 123.568, 5.420,
            -69.026, 123.607, 5.420,
            -68.561, 123.452, 5.420,
            -69.026, 123.607, 5.420,
            -69.259, 123.576, 5.420,
            -68.561, 123.452, 5.420,
            -69.259, 123.576, 5.420,
            -69.473, 123.480, 5.420,
            -68.561, 123.452, 5.420,
            -69.473, 123.480, 5.420,
            -69.652, 123.327, 5.420,
            -68.561, 123.452, 5.420,
            -69.652, 123.327, 5.420,
            -69.781, 123.124, 5.420,
            -68.561, 123.452, 5.420,
            -69.781, 123.124, 5.420,
            -69.845, 122.877, 5.420,
            -68.561, 123.452, 5.420,
            -69.845, 122.877, 5.420,
            -71.235, 109.063, 5.420,
            -66.732, 122.122, 5.420,
            -68.561, 123.452, 5.420,
            -71.235, 109.063, 5.420,
            -64.999, 120.846, 5.420,
            -66.732, 122.122, 5.420,
            -71.235, 109.063, 5.420,
            -63.281, 119.549, 5.420,
            -64.999, 120.846, 5.420,
            -71.235, 109.063, 5.420,
            -61.578, 118.233, 5.420,
            -63.281, 119.549, 5.420,
            -71.235, 109.063, 5.420,
            -59.892, 116.897, 5.420,
            -61.578, 118.233, 5.420,
            -71.235, 109.063, 5.420,
            -58.220, 115.541, 5.420,
            -59.892, 116.897, 5.420,
            -71.235, 109.063, 5.420,
            -58.220, 115.541, 5.420,
            -71.235, 109.063, 5.420,
            -71.180, 107.951, 5.420,
            -58.220, 115.541, 5.420,
            -71.180, 107.951, 5.420,
            -70.820, 106.957, 5.420,
            -58.220, 115.541, 5.420,
            -70.820, 106.957, 5.420,
            -70.207, 106.124, 5.420,
            -58.220, 115.541, 5.420,
            -70.207, 106.124, 5.420,
            -69.395, 105.493, 5.420,
            -58.220, 115.541, 5.420,
            -69.395, 105.493, 5.420,
            -68.437, 105.106, 5.420,
            -58.220, 115.541, 5.420,
            -68.437, 105.106, 5.420,
            -67.385, 105.002, 5.420,
            -58.220, 115.541, 5.420,
            -67.385, 105.002, 5.420,
            -66.293, 105.225, 5.420,
            -58.220, 115.541, 5.420,
            -66.293, 105.225, 5.420,
            -53.265, 109.984, 5.420,
            -56.565, 114.166, 5.420,
            -58.220, 115.541, 5.420,
            -53.265, 109.984, 5.420,
            -54.926, 112.771, 5.420,
            -56.565, 114.166, 5.420,
            -53.265, 109.984, 5.420,
            -53.051, 111.156, 5.420,
            -54.926, 112.771, 5.420,
            -53.265, 109.984, 5.420,
            -52.911, 110.993, 5.420,
            -53.051, 111.156, 5.420,
            -53.265, 109.984, 5.420,
            -52.911, 110.993, 5.420,
            -53.265, 109.984, 5.420,
            -53.076, 110.088, 5.420,
            -52.833, 110.805, 5.420,
            -52.911, 110.993, 5.420,
            -53.076, 110.088, 5.420,
            -52.812, 110.608, 5.420,
            -52.833, 110.805, 5.420,
            -53.076, 110.088, 5.420,
            -52.812, 110.608, 5.420,
            -53.076, 110.088, 5.420,
            -52.937, 110.235, 5.420,
            -52.812, 110.608, 5.420,
            -52.937, 110.235, 5.420,
               -52.848, 110.413, 5.420
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.709, 0.706, 0.000,
            0.650, 0.760, 0.000,
            0.650, 0.760, 0.000,
            0.709, 0.706, 0.000,
            0.650, 0.760, 0.000,
            0.709, 0.706, 0.000,
            0.650, 0.760, 0.000,
            0.644, 0.765, 0.000,
            0.644, 0.765, 0.000,
            0.650, 0.760, 0.000,
            0.644, 0.765, 0.000,
            0.650, 0.760, 0.000,
            0.644, 0.765, 0.000,
            0.635, 0.773, 0.000,
            0.635, 0.773, 0.000,
            0.644, 0.765, 0.000,
            0.635, 0.773, 0.000,
            0.644, 0.765, 0.000,
            0.635, 0.773, 0.000,
            0.625, 0.780, 0.000,
            0.625, 0.780, 0.000,
            0.635, 0.773, 0.000,
            0.625, 0.780, 0.000,
            0.635, 0.773, 0.000,
            0.625, 0.780, 0.000,
            0.616, 0.788, 0.000,
            0.616, 0.788, 0.000,
            0.625, 0.780, 0.000,
            0.616, 0.788, 0.000,
            0.625, 0.780, 0.000,
            0.616, 0.788, 0.000,
            0.607, 0.795, 0.000,
            0.607, 0.795, 0.000,
            0.616, 0.788, 0.000,
            0.607, 0.795, 0.000,
            0.616, 0.788, 0.000,
            0.607, 0.795, 0.000,
            0.598, 0.802, 0.000,
            0.598, 0.802, 0.000,
            0.607, 0.795, 0.000,
            0.598, 0.802, 0.000,
            0.607, 0.795, 0.000,
            0.598, 0.802, 0.000,
            0.591, 0.807, 0.000,
            0.591, 0.807, 0.000,
            0.598, 0.802, 0.000,
            0.591, 0.807, 0.000,
            0.598, 0.802, 0.000,
            0.591, 0.807, 0.000,
            0.524, 0.852, 0.000,
            0.524, 0.852, 0.000,
            0.591, 0.807, 0.000,
            0.524, 0.852, 0.000,
            0.591, 0.807, 0.000,
            0.524, 0.852, 0.000,
            0.313, 0.950, 0.000,
            0.313, 0.950, 0.000,
            0.524, 0.852, 0.000,
            0.313, 0.950, 0.000,
            0.524, 0.852, 0.000,
            0.313, 0.950, 0.000,
            0.013, 1.000, 0.000,
            0.013, 1.000, 0.000,
            0.313, 0.950, 0.000,
            0.013, 1.000, 0.000,
            0.313, 0.950, 0.000,
            0.013, 1.000, 0.000,
            -0.275, 0.962, 0.000,
            -0.275, 0.962, 0.000,
            0.013, 1.000, 0.000,
            -0.275, 0.962, 0.000,
            0.013, 1.000, 0.000,
            -0.275, 0.962, 0.000,
            -0.534, 0.845, 0.000,
            -0.534, 0.845, 0.000,
            -0.275, 0.962, 0.000,
            -0.534, 0.845, 0.000,
            -0.275, 0.962, 0.000,
            -0.534, 0.845, 0.000,
            -0.755, 0.656, 0.000,
            -0.755, 0.656, 0.000,
            -0.534, 0.845, 0.000,
            -0.755, 0.656, 0.000,
            -0.534, 0.845, 0.000,
            -0.755, 0.656, 0.000,
            -0.917, 0.399, 0.000,
            -0.917, 0.399, 0.000,
            -0.755, 0.656, 0.000,
            -0.917, 0.399, 0.000,
            -0.755, 0.656, 0.000,
            -0.917, 0.399, 0.000,
            -0.984, 0.177, 0.000,
            -0.984, 0.177, 0.000,
            -0.917, 0.399, 0.000,
            -0.984, 0.177, 0.000,
            -0.917, 0.399, 0.000,
            -0.984, 0.177, 0.000,
            -1.000, 0.026, 0.000,
            -1.000, 0.026, 0.000,
            -0.984, 0.177, 0.000,
            -1.000, 0.026, 0.000,
            -0.984, 0.177, 0.000,
            -1.000, 0.026, 0.000,
            -0.980, -0.197, 0.000,
            -0.980, -0.197, 0.000,
            -1.000, 0.026, 0.000,
            -0.980, -0.197, 0.000,
            -1.000, 0.026, 0.000,
            -0.980, -0.197, 0.000,
            -0.882, -0.472, 0.000,
            -0.882, -0.472, 0.000,
            -0.980, -0.197, 0.000,
            -0.882, -0.472, 0.000,
            -0.980, -0.197, 0.000,
            -0.882, -0.472, 0.000,
            -0.716, -0.698, 0.000,
            -0.716, -0.698, 0.000,
            -0.882, -0.472, 0.000,
            -0.716, -0.698, 0.000,
            -0.882, -0.472, 0.000,
            -0.716, -0.698, 0.000,
            -0.499, -0.867, 0.000,
            -0.499, -0.867, 0.000,
            -0.716, -0.698, 0.000,
            -0.499, -0.867, 0.000,
            -0.716, -0.698, 0.000,
            -0.499, -0.867, 0.000,
            -0.239, -0.971, 0.000,
            -0.239, -0.971, 0.000,
            -0.499, -0.867, 0.000,
            -0.239, -0.971, 0.000,
            -0.499, -0.867, 0.000,
            -0.239, -0.971, 0.000,
            0.052, -0.999, 0.000,
            0.052, -0.999, 0.000,
            -0.239, -0.971, 0.000,
            0.052, -0.999, 0.000,
            -0.239, -0.971, 0.000,
            0.052, -0.999, 0.000,
            0.272, -0.962, 0.000,
            0.272, -0.962, 0.000,
            0.052, -0.999, 0.000,
            0.272, -0.962, 0.000,
            0.052, -0.999, 0.000,
            0.272, -0.962, 0.000,
            0.414, -0.910, 0.000,
            0.414, -0.910, 0.000,
            0.272, -0.962, 0.000,
            0.414, -0.910, 0.000,
            0.272, -0.962, 0.000,
            0.414, -0.910, 0.000,
            0.611, -0.791, 0.000,
            0.611, -0.791, 0.000,
            0.414, -0.910, 0.000,
            0.611, -0.791, 0.000,
            0.414, -0.910, 0.000,
            0.611, -0.791, 0.000,
            0.819, -0.574, 0.000,
            0.819, -0.574, 0.000,
            0.611, -0.791, 0.000,
            0.819, -0.574, 0.000,
            0.611, -0.791, 0.000,
            0.819, -0.574, 0.000,
            0.949, -0.316, 0.000,
            0.949, -0.316, 0.000,
            0.819, -0.574, 0.000,
            0.949, -0.316, 0.000,
            0.819, -0.574, 0.000,
            0.949, -0.316, 0.000,
            0.999, -0.039, 0.000,
            0.999, -0.039, 0.000,
            0.949, -0.316, 0.000,
            0.999, -0.039, 0.000,
            0.949, -0.316, 0.000,
            0.999, -0.039, 0.000,
            0.969, 0.248, 0.000,
            0.969, 0.248, 0.000,
            0.999, -0.039, 0.000,
            0.969, 0.248, 0.000,
            0.999, -0.039, 0.000,
            0.969, 0.248, 0.000,
            0.851, 0.525, 0.000,
            0.851, 0.525, 0.000,
            0.969, 0.248, 0.000,
            0.851, 0.525, 0.000,
            0.969, 0.248, 0.000,
            0.851, 0.525, 0.000,
            0.709, 0.706, 0.000,
            0.709, 0.706, 0.000,
            0.851, 0.525, 0.000,
            0.709, 0.706, 0.000,
            0.851, 0.525, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
               0.000, 0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xB89939,
            shininess: 4.595,
            ambient: 0xB89939,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
