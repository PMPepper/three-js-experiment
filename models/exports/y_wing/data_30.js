function create_geometry_30(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            61.306, -242.754, -42.084,
            61.973, -242.754, -39.597,
            56.998, -243.160, -39.597,
            59.485, -242.754, -43.905,
            61.306, -242.754, -42.084,
            56.998, -243.160, -39.597,
            56.998, -242.754, -44.572,
            59.485, -242.754, -43.905,
            56.998, -243.160, -39.597,
            54.510, -242.754, -43.905,
            56.998, -242.754, -44.572,
            56.998, -243.160, -39.597,
            52.689, -242.754, -42.084,
            54.510, -242.754, -43.905,
            56.998, -243.160, -39.597,
            52.023, -242.754, -39.597,
            52.689, -242.754, -42.084,
            56.998, -243.160, -39.597,
            52.689, -242.754, -37.109,
            52.023, -242.754, -39.597,
            56.998, -243.160, -39.597,
            54.510, -242.754, -35.288,
            52.689, -242.754, -37.109,
            56.998, -243.160, -39.597,
            56.998, -242.754, -34.622,
            54.510, -242.754, -35.288,
            56.998, -243.160, -39.597,
            59.485, -242.754, -35.288,
            56.998, -242.754, -34.622,
            56.998, -243.160, -39.597,
            61.306, -242.754, -37.109,
            59.485, -242.754, -35.288,
            56.998, -243.160, -39.597,
            61.973, -242.754, -39.597,
            61.306, -242.754, -37.109,
            56.998, -243.160, -39.597,
            65.411, -241.557, -44.454,
            66.713, -241.557, -39.597,
            61.973, -242.754, -39.597,
            61.306, -242.754, -42.084,
            65.411, -241.557, -44.454,
            61.973, -242.754, -39.597,
            61.855, -241.557, -48.010,
            65.411, -241.557, -44.454,
            61.306, -242.754, -42.084,
            59.485, -242.754, -43.905,
            61.855, -241.557, -48.010,
            61.306, -242.754, -42.084,
            56.998, -241.556, -49.312,
            61.855, -241.557, -48.010,
            59.485, -242.754, -43.905,
            56.998, -242.754, -44.572,
            56.998, -241.556, -49.312,
            59.485, -242.754, -43.905,
            52.140, -241.557, -48.010,
            56.998, -241.556, -49.312,
            56.998, -242.754, -44.572,
            54.510, -242.754, -43.905,
            52.140, -241.557, -48.010,
            56.998, -242.754, -44.572,
            48.584, -241.557, -44.454,
            52.140, -241.557, -48.010,
            54.510, -242.754, -43.905,
            52.689, -242.754, -42.084,
            48.584, -241.557, -44.454,
            54.510, -242.754, -43.905,
            47.282, -241.557, -39.597,
            48.584, -241.557, -44.454,
            52.689, -242.754, -42.084,
            52.023, -242.754, -39.597,
            47.282, -241.557, -39.597,
            52.689, -242.754, -42.084,
            48.584, -241.557, -34.739,
            47.282, -241.557, -39.597,
            52.023, -242.754, -39.597,
            52.689, -242.754, -37.109,
            48.584, -241.557, -34.739,
            52.023, -242.754, -39.597,
            52.140, -241.557, -31.183,
            48.584, -241.557, -34.739,
            52.689, -242.754, -37.109,
            54.510, -242.754, -35.288,
            52.140, -241.557, -31.183,
            52.689, -242.754, -37.109,
            56.998, -241.556, -29.882,
            52.140, -241.557, -31.183,
            54.510, -242.754, -35.288,
            56.998, -242.754, -34.622,
            56.998, -241.556, -29.882,
            54.510, -242.754, -35.288,
            61.855, -241.557, -31.183,
            56.998, -241.556, -29.882,
            56.998, -242.754, -34.622,
            59.485, -242.754, -35.288,
            61.855, -241.557, -31.183,
            56.998, -242.754, -34.622,
            65.411, -241.557, -34.739,
            61.855, -241.557, -31.183,
            59.485, -242.754, -35.288,
            61.306, -242.754, -37.109,
            65.411, -241.557, -34.739,
            59.485, -242.754, -35.288,
            66.713, -241.557, -39.597,
            65.411, -241.557, -34.739,
            61.306, -242.754, -37.109,
            61.973, -242.754, -39.597,
            66.713, -241.557, -39.597,
            61.306, -242.754, -37.109,
            69.120, -239.623, -46.595,
            70.995, -239.623, -39.597,
            66.713, -241.557, -39.597,
            65.411, -241.557, -44.454,
            69.120, -239.623, -46.595,
            66.713, -241.557, -39.597,
            63.996, -239.623, -51.719,
            69.120, -239.623, -46.595,
            65.411, -241.557, -44.454,
            61.855, -241.557, -48.010,
            63.996, -239.623, -51.719,
            65.411, -241.557, -44.454,
            56.998, -239.623, -53.594,
            63.996, -239.623, -51.719,
            61.855, -241.557, -48.010,
            56.998, -241.556, -49.312,
            56.998, -239.623, -53.594,
            61.855, -241.557, -48.010,
            49.999, -239.623, -51.719,
            56.998, -239.623, -53.594,
            56.998, -241.556, -49.312,
            52.140, -241.557, -48.010,
            49.999, -239.623, -51.719,
            56.998, -241.556, -49.312,
            44.876, -239.623, -46.595,
            49.999, -239.623, -51.719,
            52.140, -241.557, -48.010,
            48.584, -241.557, -44.454,
            44.876, -239.623, -46.595,
            52.140, -241.557, -48.010,
            43.001, -239.623, -39.597,
            44.876, -239.623, -46.595,
            48.584, -241.557, -44.454,
            47.282, -241.557, -39.597,
            43.001, -239.623, -39.597,
            48.584, -241.557, -44.454,
            44.876, -239.623, -32.598,
            43.001, -239.623, -39.597,
            47.282, -241.557, -39.597,
            48.584, -241.557, -34.739,
            44.876, -239.623, -32.598,
            47.282, -241.557, -39.597,
            49.999, -239.623, -27.475,
            44.876, -239.623, -32.598,
            48.584, -241.557, -34.739,
            52.140, -241.557, -31.183,
            49.999, -239.623, -27.475,
            48.584, -241.557, -34.739,
            69.120, -239.623, -32.598,
            63.996, -239.623, -27.475,
            61.855, -241.557, -31.183,
            65.411, -241.557, -34.739,
            69.120, -239.623, -32.598,
            61.855, -241.557, -31.183,
            70.995, -239.623, -39.597,
            69.120, -239.623, -32.598,
            65.411, -241.557, -34.739,
            66.713, -241.557, -39.597,
            70.995, -239.623, -39.597,
            65.411, -241.557, -34.739,
            72.256, -237.045, -48.406,
            74.616, -237.045, -39.597,
            70.995, -239.623, -39.597,
            69.120, -239.623, -46.595,
            72.256, -237.045, -48.406,
            70.995, -239.623, -39.597,
            65.807, -237.045, -54.855,
            72.256, -237.045, -48.406,
            69.120, -239.623, -46.595,
            63.996, -239.623, -51.719,
            65.807, -237.045, -54.855,
            69.120, -239.623, -46.595,
            56.998, -237.045, -57.215,
            65.807, -237.045, -54.855,
            63.996, -239.623, -51.719,
            56.998, -239.623, -53.594,
            56.998, -237.045, -57.215,
            63.996, -239.623, -51.719,
            48.188, -237.045, -54.855,
            56.998, -237.045, -57.215,
            56.998, -239.623, -53.594,
            49.999, -239.623, -51.719,
            48.188, -237.045, -54.855,
            56.998, -239.623, -53.594,
            41.740, -237.045, -48.406,
            48.188, -237.045, -54.855,
            49.999, -239.623, -51.719,
            44.876, -239.623, -46.595,
            41.740, -237.045, -48.406,
            49.999, -239.623, -51.719,
            39.379, -237.045, -39.597,
            41.740, -237.045, -48.406,
            44.876, -239.623, -46.595,
            43.001, -239.623, -39.597,
            39.379, -237.045, -39.597,
            44.876, -239.623, -46.595,
            41.740, -237.045, -30.788,
            39.379, -237.045, -39.597,
            43.001, -239.623, -39.597,
            44.876, -239.623, -32.598,
            41.740, -237.045, -30.788,
            43.001, -239.623, -39.597,
            48.188, -237.045, -24.339,
            41.740, -237.045, -30.788,
            44.876, -239.623, -32.598,
            49.999, -239.623, -27.475,
            48.188, -237.045, -24.339,
            44.876, -239.623, -32.598,
            72.256, -237.045, -30.788,
            65.807, -237.045, -24.339,
            63.996, -239.623, -27.475,
            69.120, -239.623, -32.598,
            72.256, -237.045, -30.788,
            63.996, -239.623, -27.475,
            74.616, -237.045, -39.597,
            72.256, -237.045, -30.788,
            69.120, -239.623, -32.598,
            70.995, -239.623, -39.597,
            74.616, -237.045, -39.597,
            69.120, -239.623, -32.598,
            72.256, -205.944, -48.406,
            74.616, -205.944, -39.597,
            74.616, -237.045, -39.597,
            72.256, -237.045, -48.406,
            72.256, -205.944, -48.406,
            74.616, -237.045, -39.597,
            65.807, -205.944, -54.855,
            72.256, -205.944, -48.406,
            72.256, -237.045, -48.406,
            65.807, -237.045, -54.855,
            65.807, -205.944, -54.855,
            72.256, -237.045, -48.406,
            56.998, -205.944, -57.215,
            65.807, -205.944, -54.855,
            65.807, -237.045, -54.855,
            56.998, -237.045, -57.215,
            56.998, -205.944, -57.215,
            65.807, -237.045, -54.855,
            48.188, -205.944, -54.855,
            56.998, -205.944, -57.215,
            56.998, -237.045, -57.215,
            48.188, -237.045, -54.855,
            48.188, -205.944, -54.855,
            56.998, -237.045, -57.215,
            41.740, -205.944, -48.406,
            48.188, -205.944, -54.855,
            48.188, -237.045, -54.855,
            41.740, -237.045, -48.406,
            41.740, -205.944, -48.406,
            48.188, -237.045, -54.855,
            39.379, -205.944, -39.597,
            41.740, -205.944, -48.406,
            41.740, -237.045, -48.406,
            39.379, -237.045, -39.597,
            39.379, -205.944, -39.597,
            41.740, -237.045, -48.406,
            41.740, -205.944, -30.788,
            39.379, -205.944, -39.597,
            39.379, -237.045, -39.597,
            41.740, -237.045, -30.788,
            41.740, -205.944, -30.788,
            39.379, -237.045, -39.597,
            48.188, -205.944, -24.339,
            41.740, -205.944, -30.788,
            41.740, -237.045, -30.788,
            48.188, -237.045, -24.339,
            48.188, -205.944, -24.339,
            41.740, -237.045, -30.788,
            72.256, -205.944, -30.788,
            65.807, -205.944, -24.339,
            65.807, -237.045, -24.339,
            72.256, -237.045, -30.788,
            72.256, -205.944, -30.788,
            65.807, -237.045, -24.339,
            74.616, -205.944, -39.597,
            72.256, -205.944, -30.788,
            72.256, -237.045, -30.788,
            74.616, -237.045, -39.597,
            74.616, -205.944, -39.597,
            72.256, -237.045, -30.788,
            69.119, -203.366, -46.595,
            70.995, -203.366, -39.597,
            74.616, -205.944, -39.597,
            72.256, -205.944, -48.406,
            69.119, -203.366, -46.595,
            74.616, -205.944, -39.597,
            63.996, -203.366, -51.719,
            69.119, -203.366, -46.595,
            72.256, -205.944, -48.406,
            65.807, -205.944, -54.855,
            63.996, -203.366, -51.719,
            72.256, -205.944, -48.406,
            56.998, -203.366, -53.594,
            63.996, -203.366, -51.719,
            65.807, -205.944, -54.855,
            56.998, -205.944, -57.215,
            56.998, -203.366, -53.594,
            65.807, -205.944, -54.855,
            49.999, -203.366, -51.719,
            56.998, -203.366, -53.594,
            56.998, -205.944, -57.215,
            48.188, -205.944, -54.855,
            49.999, -203.366, -51.719,
            56.998, -205.944, -57.215,
            44.876, -203.366, -46.595,
            49.999, -203.366, -51.719,
            48.188, -205.944, -54.855,
            41.740, -205.944, -48.406,
            44.876, -203.366, -46.595,
            48.188, -205.944, -54.855,
            43.001, -203.366, -39.597,
            44.876, -203.366, -46.595,
            41.740, -205.944, -48.406,
            39.379, -205.944, -39.597,
            43.001, -203.366, -39.597,
            41.740, -205.944, -48.406,
            44.876, -203.366, -32.598,
            43.001, -203.366, -39.597,
            39.379, -205.944, -39.597,
            41.740, -205.944, -30.788,
            44.876, -203.366, -32.598,
            39.379, -205.944, -39.597,
            49.999, -203.366, -27.475,
            44.876, -203.366, -32.598,
            41.740, -205.944, -30.788,
            48.188, -205.944, -24.339,
            49.999, -203.366, -27.475,
            41.740, -205.944, -30.788,
            69.120, -203.366, -32.598,
            63.996, -203.366, -27.475,
            65.807, -205.944, -24.339,
            72.256, -205.944, -30.788,
            69.120, -203.366, -32.598,
            65.807, -205.944, -24.339,
            70.995, -203.366, -39.597,
            69.120, -203.366, -32.598,
            72.256, -205.944, -30.788,
            74.616, -205.944, -39.597,
            70.995, -203.366, -39.597,
            72.256, -205.944, -30.788,
            65.411, -201.433, -44.454,
            66.713, -201.433, -39.597,
            70.995, -203.366, -39.597,
            69.119, -203.366, -46.595,
            65.411, -201.433, -44.454,
            70.995, -203.366, -39.597,
            61.855, -201.433, -48.010,
            65.411, -201.433, -44.454,
            69.119, -203.366, -46.595,
            63.996, -203.366, -51.719,
            61.855, -201.433, -48.010,
            69.119, -203.366, -46.595,
            56.998, -201.433, -49.312,
            61.855, -201.433, -48.010,
            63.996, -203.366, -51.719,
            56.998, -203.366, -53.594,
            56.998, -201.433, -49.312,
            63.996, -203.366, -51.719,
            52.140, -201.433, -48.010,
            56.998, -201.433, -49.312,
            56.998, -203.366, -53.594,
            49.999, -203.366, -51.719,
            52.140, -201.433, -48.010,
            56.998, -203.366, -53.594,
            48.584, -201.433, -44.454,
            52.140, -201.433, -48.010,
            49.999, -203.366, -51.719,
            44.876, -203.366, -46.595,
            48.584, -201.433, -44.454,
            49.999, -203.366, -51.719,
            47.282, -201.433, -39.597,
            48.584, -201.433, -44.454,
            44.876, -203.366, -46.595,
            43.001, -203.366, -39.597,
            47.282, -201.433, -39.597,
            44.876, -203.366, -46.595,
            48.584, -201.433, -34.739,
            47.282, -201.433, -39.597,
            43.001, -203.366, -39.597,
            44.876, -203.366, -32.598,
            48.584, -201.433, -34.739,
            43.001, -203.366, -39.597,
            52.140, -201.433, -31.183,
            48.584, -201.433, -34.739,
            44.876, -203.366, -32.598,
            49.999, -203.366, -27.475,
            52.140, -201.433, -31.183,
            44.876, -203.366, -32.598,
            65.411, -201.433, -34.739,
            61.855, -201.433, -31.183,
            63.996, -203.366, -27.475,
            69.120, -203.366, -32.598,
            65.411, -201.433, -34.739,
            63.996, -203.366, -27.475,
            66.713, -201.433, -39.597,
            65.411, -201.433, -34.739,
            69.120, -203.366, -32.598,
            70.995, -203.366, -39.597,
            66.713, -201.433, -39.597,
            69.120, -203.366, -32.598,
            61.306, -200.235, -42.084,
            61.973, -200.235, -39.597,
            66.713, -201.433, -39.597,
            65.411, -201.433, -44.454,
            61.306, -200.235, -42.084,
            66.713, -201.433, -39.597,
            59.485, -200.235, -43.905,
            61.306, -200.235, -42.084,
            65.411, -201.433, -44.454,
            61.855, -201.433, -48.010,
            59.485, -200.235, -43.905,
            65.411, -201.433, -44.454,
            56.998, -200.235, -44.572,
            59.485, -200.235, -43.905,
            61.855, -201.433, -48.010,
            56.998, -201.433, -49.312,
            56.998, -200.235, -44.572,
            61.855, -201.433, -48.010,
            54.510, -200.235, -43.905,
            56.998, -200.235, -44.572,
            56.998, -201.433, -49.312,
            52.140, -201.433, -48.010,
            54.510, -200.235, -43.905,
            56.998, -201.433, -49.312,
            52.689, -200.235, -42.084,
            54.510, -200.235, -43.905,
            52.140, -201.433, -48.010,
            48.584, -201.433, -44.454,
            52.689, -200.235, -42.084,
            52.140, -201.433, -48.010,
            52.023, -200.235, -39.597,
            52.689, -200.235, -42.084,
            48.584, -201.433, -44.454,
            47.282, -201.433, -39.597,
            52.023, -200.235, -39.597,
            48.584, -201.433, -44.454,
            52.689, -200.235, -37.109,
            52.023, -200.235, -39.597,
            47.282, -201.433, -39.597,
            48.584, -201.433, -34.739,
            52.689, -200.235, -37.109,
            47.282, -201.433, -39.597,
            54.510, -200.235, -35.288,
            52.689, -200.235, -37.109,
            48.584, -201.433, -34.739,
            52.140, -201.433, -31.183,
            54.510, -200.235, -35.288,
            48.584, -201.433, -34.739,
            56.998, -200.235, -34.622,
            54.510, -200.235, -35.288,
            52.140, -201.433, -31.183,
            56.998, -201.433, -29.882,
            56.998, -200.235, -34.622,
            52.140, -201.433, -31.183,
            59.485, -200.235, -35.288,
            56.998, -200.235, -34.622,
            56.998, -201.433, -29.882,
            61.855, -201.433, -31.183,
            59.485, -200.235, -35.288,
            56.998, -201.433, -29.882,
            61.306, -200.235, -37.109,
            59.485, -200.235, -35.288,
            61.855, -201.433, -31.183,
            65.411, -201.433, -34.739,
            61.306, -200.235, -37.109,
            61.855, -201.433, -31.183,
            61.973, -200.235, -39.597,
            61.306, -200.235, -37.109,
            65.411, -201.433, -34.739,
            66.713, -201.433, -39.597,
            61.973, -200.235, -39.597,
            65.411, -201.433, -34.739,
            61.306, -200.235, -42.084,
            56.998, -199.830, -39.597,
            61.973, -200.235, -39.597,
            59.485, -200.235, -43.905,
            56.998, -199.830, -39.597,
            61.306, -200.235, -42.084,
            56.998, -200.235, -44.572,
            56.998, -199.830, -39.597,
            59.485, -200.235, -43.905,
            54.510, -200.235, -43.905,
            56.998, -199.830, -39.597,
            56.998, -200.235, -44.572,
            52.689, -200.235, -42.084,
            56.998, -199.830, -39.597,
            54.510, -200.235, -43.905,
            52.023, -200.235, -39.597,
            56.998, -199.830, -39.597,
            52.689, -200.235, -42.084,
            52.689, -200.235, -37.109,
            56.998, -199.830, -39.597,
            52.023, -200.235, -39.597,
            54.510, -200.235, -35.288,
            56.998, -199.830, -39.597,
            52.689, -200.235, -37.109,
            56.998, -200.235, -34.622,
            56.998, -199.830, -39.597,
            54.510, -200.235, -35.288,
            59.485, -200.235, -35.288,
            56.998, -199.830, -39.597,
            56.998, -200.235, -34.622,
            61.306, -200.235, -37.109,
            56.998, -199.830, -39.597,
            59.485, -200.235, -35.288,
            61.973, -200.235, -39.597,
            56.998, -199.830, -39.597,
               61.306, -200.235, -37.109
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.153, 0.984, 0.089,
            0.177, 0.984, -0.000,
            0.000, 1.000, -0.000,
            0.089, 0.984, 0.153,
            0.153, 0.984, 0.089,
            0.000, 1.000, -0.000,
            0.000, 0.984, 0.177,
            0.089, 0.984, 0.153,
            0.000, 1.000, -0.000,
            -0.089, 0.984, 0.153,
            0.000, 0.984, 0.177,
            0.000, 1.000, -0.000,
            -0.153, 0.984, 0.089,
            -0.089, 0.984, 0.153,
            0.000, 1.000, -0.000,
            -0.177, 0.984, -0.000,
            -0.153, 0.984, 0.089,
            0.000, 1.000, -0.000,
            -0.153, 0.984, -0.089,
            -0.177, 0.984, -0.000,
            0.000, 1.000, -0.000,
            -0.089, 0.984, -0.153,
            -0.153, 0.984, -0.089,
            0.000, 1.000, -0.000,
            -0.000, 0.984, -0.177,
            -0.089, 0.984, -0.153,
            0.000, 1.000, -0.000,
            0.089, 0.984, -0.153,
            -0.000, 0.984, -0.177,
            0.000, 1.000, -0.000,
            0.153, 0.984, -0.089,
            0.089, 0.984, -0.153,
            0.000, 1.000, -0.000,
            0.177, 0.984, -0.000,
            0.153, 0.984, -0.089,
            0.000, 1.000, -0.000,
            0.297, 0.940, 0.171,
            0.342, 0.940, -0.000,
            0.177, 0.984, -0.000,
            0.153, 0.984, 0.089,
            0.297, 0.940, 0.171,
            0.177, 0.984, -0.000,
            0.171, 0.940, 0.297,
            0.297, 0.940, 0.171,
            0.153, 0.984, 0.089,
            0.089, 0.984, 0.153,
            0.171, 0.940, 0.297,
            0.153, 0.984, 0.089,
            0.000, 0.940, 0.342,
            0.171, 0.940, 0.297,
            0.089, 0.984, 0.153,
            0.000, 0.984, 0.177,
            0.000, 0.940, 0.342,
            0.089, 0.984, 0.153,
            -0.171, 0.940, 0.297,
            0.000, 0.940, 0.342,
            0.000, 0.984, 0.177,
            -0.089, 0.984, 0.153,
            -0.171, 0.940, 0.297,
            0.000, 0.984, 0.177,
            -0.297, 0.940, 0.171,
            -0.171, 0.940, 0.297,
            -0.089, 0.984, 0.153,
            -0.153, 0.984, 0.089,
            -0.297, 0.940, 0.171,
            -0.089, 0.984, 0.153,
            -0.342, 0.940, 0.000,
            -0.297, 0.940, 0.171,
            -0.153, 0.984, 0.089,
            -0.177, 0.984, -0.000,
            -0.342, 0.940, 0.000,
            -0.153, 0.984, 0.089,
            -0.297, 0.940, -0.171,
            -0.342, 0.940, 0.000,
            -0.177, 0.984, -0.000,
            -0.153, 0.984, -0.089,
            -0.297, 0.940, -0.171,
            -0.177, 0.984, -0.000,
            -0.196, 0.949, -0.249,
            -0.297, 0.940, -0.171,
            -0.153, 0.984, -0.089,
            -0.089, 0.984, -0.153,
            -0.196, 0.949, -0.249,
            -0.153, 0.984, -0.089,
            -0.000, 0.970, -0.245,
            -0.196, 0.949, -0.249,
            -0.089, 0.984, -0.153,
            -0.000, 0.984, -0.177,
            -0.000, 0.970, -0.245,
            -0.089, 0.984, -0.153,
            0.196, 0.949, -0.249,
            -0.000, 0.970, -0.245,
            -0.000, 0.984, -0.177,
            0.089, 0.984, -0.153,
            0.196, 0.949, -0.249,
            -0.000, 0.984, -0.177,
            0.297, 0.940, -0.171,
            0.196, 0.949, -0.249,
            0.089, 0.984, -0.153,
            0.153, 0.984, -0.089,
            0.297, 0.940, -0.171,
            0.089, 0.984, -0.153,
            0.342, 0.940, -0.000,
            0.297, 0.940, -0.171,
            0.153, 0.984, -0.089,
            0.177, 0.984, -0.000,
            0.342, 0.940, -0.000,
            0.153, 0.984, -0.089,
            0.442, 0.860, 0.255,
            0.510, 0.860, -0.000,
            0.342, 0.940, -0.000,
            0.297, 0.940, 0.171,
            0.442, 0.860, 0.255,
            0.342, 0.940, -0.000,
            0.255, 0.860, 0.442,
            0.442, 0.860, 0.255,
            0.297, 0.940, 0.171,
            0.171, 0.940, 0.297,
            0.255, 0.860, 0.442,
            0.297, 0.940, 0.171,
            0.000, 0.860, 0.510,
            0.255, 0.860, 0.442,
            0.171, 0.940, 0.297,
            0.000, 0.940, 0.342,
            0.000, 0.860, 0.510,
            0.171, 0.940, 0.297,
            -0.255, 0.860, 0.442,
            0.000, 0.860, 0.510,
            0.000, 0.940, 0.342,
            -0.171, 0.940, 0.297,
            -0.255, 0.860, 0.442,
            0.000, 0.940, 0.342,
            -0.442, 0.860, 0.255,
            -0.255, 0.860, 0.442,
            -0.171, 0.940, 0.297,
            -0.297, 0.940, 0.171,
            -0.442, 0.860, 0.255,
            -0.171, 0.940, 0.297,
            -0.510, 0.860, 0.000,
            -0.442, 0.860, 0.255,
            -0.297, 0.940, 0.171,
            -0.342, 0.940, 0.000,
            -0.510, 0.860, 0.000,
            -0.297, 0.940, 0.171,
            -0.442, 0.860, -0.255,
            -0.510, 0.860, 0.000,
            -0.342, 0.940, 0.000,
            -0.297, 0.940, -0.171,
            -0.442, 0.860, -0.255,
            -0.342, 0.940, 0.000,
            -0.370, 0.852, -0.370,
            -0.442, 0.860, -0.255,
            -0.297, 0.940, -0.171,
            -0.196, 0.949, -0.249,
            -0.370, 0.852, -0.370,
            -0.297, 0.940, -0.171,
            0.442, 0.860, -0.255,
            0.370, 0.852, -0.370,
            0.196, 0.949, -0.249,
            0.297, 0.940, -0.171,
            0.442, 0.860, -0.255,
            0.196, 0.949, -0.249,
            0.510, 0.860, -0.000,
            0.442, 0.860, -0.255,
            0.297, 0.940, -0.171,
            0.342, 0.940, -0.000,
            0.510, 0.860, -0.000,
            0.297, 0.940, -0.171,
            0.502, 0.815, 0.290,
            0.580, 0.815, -0.000,
            0.510, 0.860, -0.000,
            0.442, 0.860, 0.255,
            0.502, 0.815, 0.290,
            0.510, 0.860, -0.000,
            0.290, 0.815, 0.502,
            0.502, 0.815, 0.290,
            0.442, 0.860, 0.255,
            0.255, 0.860, 0.442,
            0.290, 0.815, 0.502,
            0.442, 0.860, 0.255,
            0.000, 0.815, 0.580,
            0.290, 0.815, 0.502,
            0.255, 0.860, 0.442,
            0.000, 0.860, 0.510,
            0.000, 0.815, 0.580,
            0.255, 0.860, 0.442,
            -0.290, 0.815, 0.502,
            0.000, 0.815, 0.580,
            0.000, 0.860, 0.510,
            -0.255, 0.860, 0.442,
            -0.290, 0.815, 0.502,
            0.000, 0.860, 0.510,
            -0.502, 0.815, 0.290,
            -0.290, 0.815, 0.502,
            -0.255, 0.860, 0.442,
            -0.442, 0.860, 0.255,
            -0.502, 0.815, 0.290,
            -0.255, 0.860, 0.442,
            -0.580, 0.815, 0.000,
            -0.502, 0.815, 0.290,
            -0.442, 0.860, 0.255,
            -0.510, 0.860, 0.000,
            -0.580, 0.815, 0.000,
            -0.442, 0.860, 0.255,
            -0.502, 0.815, -0.290,
            -0.580, 0.815, 0.000,
            -0.510, 0.860, 0.000,
            -0.442, 0.860, -0.255,
            -0.502, 0.815, -0.290,
            -0.510, 0.860, 0.000,
            -0.419, 0.805, -0.419,
            -0.502, 0.815, -0.290,
            -0.442, 0.860, -0.255,
            -0.370, 0.852, -0.370,
            -0.419, 0.805, -0.419,
            -0.442, 0.860, -0.255,
            0.502, 0.815, -0.290,
            0.419, 0.805, -0.419,
            0.370, 0.852, -0.370,
            0.442, 0.860, -0.255,
            0.502, 0.815, -0.290,
            0.370, 0.852, -0.370,
            0.580, 0.815, -0.000,
            0.502, 0.815, -0.290,
            0.442, 0.860, -0.255,
            0.510, 0.860, -0.000,
            0.580, 0.815, -0.000,
            0.442, 0.860, -0.255,
            0.866, -0.000, 0.500,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            0.866, -0.000, 0.500,
            0.866, -0.000, 0.500,
            1.000, -0.000, -0.000,
            0.500, -0.000, 0.866,
            0.866, -0.000, 0.500,
            0.866, -0.000, 0.500,
            0.500, -0.000, 0.866,
            0.500, -0.000, 0.866,
            0.866, -0.000, 0.500,
            0.000, -0.000, 1.000,
            0.500, -0.000, 0.866,
            0.500, -0.000, 0.866,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.500, -0.000, 0.866,
            -0.500, -0.000, 0.866,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.500, -0.000, 0.866,
            -0.500, -0.000, 0.866,
            0.000, -0.000, 1.000,
            -0.866, -0.000, 0.500,
            -0.500, -0.000, 0.866,
            -0.500, -0.000, 0.866,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.500, -0.000, 0.866,
            -1.000, -0.000, 0.000,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, -0.500,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -0.866, -0.000, -0.500,
            -0.866, -0.000, -0.500,
            -1.000, -0.000, 0.000,
            -0.707, -0.000, -0.707,
            -0.866, -0.000, -0.500,
            -0.866, -0.000, -0.500,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.866, -0.000, -0.500,
            0.866, 0.000, -0.500,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.866, 0.000, -0.500,
            0.866, 0.000, -0.500,
            0.707, 0.000, -0.707,
            1.000, 0.000, 0.000,
            0.866, 0.000, -0.500,
            0.866, 0.000, -0.500,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            0.866, 0.000, -0.500,
            0.442, -0.860, 0.255,
            0.510, -0.860, -0.000,
            0.580, -0.815, 0.000,
            0.502, -0.815, 0.290,
            0.442, -0.860, 0.255,
            0.580, -0.815, 0.000,
            0.255, -0.860, 0.442,
            0.442, -0.860, 0.255,
            0.502, -0.815, 0.290,
            0.290, -0.815, 0.502,
            0.255, -0.860, 0.442,
            0.502, -0.815, 0.290,
            -0.000, -0.860, 0.510,
            0.255, -0.860, 0.442,
            0.290, -0.815, 0.502,
            -0.000, -0.815, 0.580,
            -0.000, -0.860, 0.510,
            0.290, -0.815, 0.502,
            -0.255, -0.860, 0.442,
            -0.000, -0.860, 0.510,
            -0.000, -0.815, 0.580,
            -0.290, -0.815, 0.502,
            -0.255, -0.860, 0.442,
            -0.000, -0.815, 0.580,
            -0.442, -0.860, 0.255,
            -0.255, -0.860, 0.442,
            -0.290, -0.815, 0.502,
            -0.502, -0.815, 0.290,
            -0.442, -0.860, 0.255,
            -0.290, -0.815, 0.502,
            -0.510, -0.860, -0.000,
            -0.442, -0.860, 0.255,
            -0.502, -0.815, 0.290,
            -0.580, -0.815, -0.000,
            -0.510, -0.860, -0.000,
            -0.502, -0.815, 0.290,
            -0.442, -0.860, -0.255,
            -0.510, -0.860, -0.000,
            -0.580, -0.815, -0.000,
            -0.502, -0.815, -0.290,
            -0.442, -0.860, -0.255,
            -0.580, -0.815, -0.000,
            -0.370, -0.852, -0.370,
            -0.442, -0.860, -0.255,
            -0.502, -0.815, -0.290,
            -0.419, -0.805, -0.419,
            -0.370, -0.852, -0.370,
            -0.502, -0.815, -0.290,
            0.442, -0.860, -0.255,
            0.370, -0.852, -0.370,
            0.419, -0.805, -0.419,
            0.502, -0.815, -0.290,
            0.442, -0.860, -0.255,
            0.419, -0.805, -0.419,
            0.510, -0.860, -0.000,
            0.442, -0.860, -0.255,
            0.502, -0.815, -0.290,
            0.580, -0.815, 0.000,
            0.510, -0.860, -0.000,
            0.502, -0.815, -0.290,
            0.297, -0.940, 0.171,
            0.342, -0.940, 0.000,
            0.510, -0.860, -0.000,
            0.442, -0.860, 0.255,
            0.297, -0.940, 0.171,
            0.510, -0.860, -0.000,
            0.171, -0.940, 0.297,
            0.297, -0.940, 0.171,
            0.442, -0.860, 0.255,
            0.255, -0.860, 0.442,
            0.171, -0.940, 0.297,
            0.442, -0.860, 0.255,
            -0.000, -0.940, 0.342,
            0.171, -0.940, 0.297,
            0.255, -0.860, 0.442,
            -0.000, -0.860, 0.510,
            -0.000, -0.940, 0.342,
            0.255, -0.860, 0.442,
            -0.171, -0.940, 0.297,
            -0.000, -0.940, 0.342,
            -0.000, -0.860, 0.510,
            -0.255, -0.860, 0.442,
            -0.171, -0.940, 0.297,
            -0.000, -0.860, 0.510,
            -0.297, -0.940, 0.171,
            -0.171, -0.940, 0.297,
            -0.255, -0.860, 0.442,
            -0.442, -0.860, 0.255,
            -0.297, -0.940, 0.171,
            -0.255, -0.860, 0.442,
            -0.342, -0.940, 0.000,
            -0.297, -0.940, 0.171,
            -0.442, -0.860, 0.255,
            -0.510, -0.860, -0.000,
            -0.342, -0.940, 0.000,
            -0.442, -0.860, 0.255,
            -0.297, -0.940, -0.171,
            -0.342, -0.940, 0.000,
            -0.510, -0.860, -0.000,
            -0.442, -0.860, -0.255,
            -0.297, -0.940, -0.171,
            -0.510, -0.860, -0.000,
            -0.196, -0.949, -0.249,
            -0.297, -0.940, -0.171,
            -0.442, -0.860, -0.255,
            -0.370, -0.852, -0.370,
            -0.196, -0.949, -0.249,
            -0.442, -0.860, -0.255,
            0.297, -0.940, -0.171,
            0.196, -0.949, -0.249,
            0.370, -0.852, -0.370,
            0.442, -0.860, -0.255,
            0.297, -0.940, -0.171,
            0.370, -0.852, -0.370,
            0.342, -0.940, 0.000,
            0.297, -0.940, -0.171,
            0.442, -0.860, -0.255,
            0.510, -0.860, -0.000,
            0.342, -0.940, 0.000,
            0.442, -0.860, -0.255,
            0.153, -0.984, 0.089,
            0.177, -0.984, 0.000,
            0.342, -0.940, 0.000,
            0.297, -0.940, 0.171,
            0.153, -0.984, 0.089,
            0.342, -0.940, 0.000,
            0.089, -0.984, 0.153,
            0.153, -0.984, 0.089,
            0.297, -0.940, 0.171,
            0.171, -0.940, 0.297,
            0.089, -0.984, 0.153,
            0.297, -0.940, 0.171,
            -0.000, -0.984, 0.177,
            0.089, -0.984, 0.153,
            0.171, -0.940, 0.297,
            -0.000, -0.940, 0.342,
            -0.000, -0.984, 0.177,
            0.171, -0.940, 0.297,
            -0.089, -0.984, 0.153,
            -0.000, -0.984, 0.177,
            -0.000, -0.940, 0.342,
            -0.171, -0.940, 0.297,
            -0.089, -0.984, 0.153,
            -0.000, -0.940, 0.342,
            -0.153, -0.984, 0.089,
            -0.089, -0.984, 0.153,
            -0.171, -0.940, 0.297,
            -0.297, -0.940, 0.171,
            -0.153, -0.984, 0.089,
            -0.171, -0.940, 0.297,
            -0.177, -0.984, -0.000,
            -0.153, -0.984, 0.089,
            -0.297, -0.940, 0.171,
            -0.342, -0.940, 0.000,
            -0.177, -0.984, -0.000,
            -0.297, -0.940, 0.171,
            -0.153, -0.984, -0.089,
            -0.177, -0.984, -0.000,
            -0.342, -0.940, 0.000,
            -0.297, -0.940, -0.171,
            -0.153, -0.984, -0.089,
            -0.342, -0.940, 0.000,
            -0.089, -0.984, -0.153,
            -0.153, -0.984, -0.089,
            -0.297, -0.940, -0.171,
            -0.196, -0.949, -0.249,
            -0.089, -0.984, -0.153,
            -0.297, -0.940, -0.171,
            -0.000, -0.984, -0.177,
            -0.089, -0.984, -0.153,
            -0.196, -0.949, -0.249,
            -0.000, -0.970, -0.245,
            -0.000, -0.984, -0.177,
            -0.196, -0.949, -0.249,
            0.089, -0.984, -0.153,
            -0.000, -0.984, -0.177,
            -0.000, -0.970, -0.245,
            0.196, -0.949, -0.249,
            0.089, -0.984, -0.153,
            -0.000, -0.970, -0.245,
            0.153, -0.984, -0.089,
            0.089, -0.984, -0.153,
            0.196, -0.949, -0.249,
            0.297, -0.940, -0.171,
            0.153, -0.984, -0.089,
            0.196, -0.949, -0.249,
            0.177, -0.984, 0.000,
            0.153, -0.984, -0.089,
            0.297, -0.940, -0.171,
            0.342, -0.940, 0.000,
            0.177, -0.984, 0.000,
            0.297, -0.940, -0.171,
            0.153, -0.984, 0.089,
            -0.000, -1.000, 0.000,
            0.177, -0.984, 0.000,
            0.089, -0.984, 0.153,
            -0.000, -1.000, 0.000,
            0.153, -0.984, 0.089,
            -0.000, -0.984, 0.177,
            -0.000, -1.000, 0.000,
            0.089, -0.984, 0.153,
            -0.089, -0.984, 0.153,
            -0.000, -1.000, 0.000,
            -0.000, -0.984, 0.177,
            -0.153, -0.984, 0.089,
            -0.000, -1.000, 0.000,
            -0.089, -0.984, 0.153,
            -0.177, -0.984, -0.000,
            -0.000, -1.000, 0.000,
            -0.153, -0.984, 0.089,
            -0.153, -0.984, -0.089,
            -0.000, -1.000, 0.000,
            -0.177, -0.984, -0.000,
            -0.089, -0.984, -0.153,
            -0.000, -1.000, 0.000,
            -0.153, -0.984, -0.089,
            -0.000, -0.984, -0.177,
            -0.000, -1.000, 0.000,
            -0.089, -0.984, -0.153,
            0.089, -0.984, -0.153,
            -0.000, -1.000, 0.000,
            -0.000, -0.984, -0.177,
            0.153, -0.984, -0.089,
            -0.000, -1.000, 0.000,
            0.089, -0.984, -0.153,
            0.177, -0.984, 0.000,
            -0.000, -1.000, 0.000,
               0.153, -0.984, -0.089
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
