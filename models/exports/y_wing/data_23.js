function create_geometry_23(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -49.351, -243.160, -39.597,
            -54.326, -242.754, -39.597,
            -53.660, -242.754, -42.084,
            -49.351, -243.160, -39.597,
            -53.660, -242.754, -42.084,
            -51.839, -242.754, -43.905,
            -49.351, -243.160, -39.597,
            -51.839, -242.754, -43.905,
            -49.351, -242.754, -44.572,
            -49.351, -243.160, -39.597,
            -49.351, -242.754, -44.572,
            -46.864, -242.754, -43.905,
            -49.351, -243.160, -39.597,
            -46.864, -242.754, -43.905,
            -45.043, -242.754, -42.084,
            -49.351, -243.160, -39.597,
            -45.043, -242.754, -42.084,
            -44.376, -242.754, -39.597,
            -49.351, -243.160, -39.597,
            -44.376, -242.754, -39.597,
            -45.043, -242.754, -37.109,
            -49.351, -243.160, -39.597,
            -45.043, -242.754, -37.109,
            -46.864, -242.754, -35.288,
            -49.351, -243.160, -39.597,
            -46.864, -242.754, -35.288,
            -49.351, -242.754, -34.622,
            -49.351, -243.160, -39.597,
            -49.351, -242.754, -34.622,
            -51.839, -242.754, -35.288,
            -49.351, -243.160, -39.597,
            -51.839, -242.754, -35.288,
            -53.660, -242.754, -37.109,
            -49.351, -243.160, -39.597,
            -53.660, -242.754, -37.109,
            -54.326, -242.754, -39.597,
            -54.326, -242.754, -39.597,
            -59.066, -241.556, -39.597,
            -57.765, -241.556, -44.454,
            -54.326, -242.754, -39.597,
            -57.765, -241.556, -44.454,
            -53.660, -242.754, -42.084,
            -53.660, -242.754, -42.084,
            -57.765, -241.556, -44.454,
            -54.209, -241.556, -48.010,
            -53.660, -242.754, -42.084,
            -54.209, -241.556, -48.010,
            -51.839, -242.754, -43.905,
            -51.839, -242.754, -43.905,
            -54.209, -241.556, -48.010,
            -49.351, -241.556, -49.312,
            -51.839, -242.754, -43.905,
            -49.351, -241.556, -49.312,
            -49.351, -242.754, -44.572,
            -49.351, -242.754, -44.572,
            -49.351, -241.556, -49.312,
            -44.493, -241.556, -48.010,
            -49.351, -242.754, -44.572,
            -44.493, -241.556, -48.010,
            -46.864, -242.754, -43.905,
            -46.864, -242.754, -43.905,
            -44.493, -241.556, -48.010,
            -40.937, -241.556, -44.454,
            -46.864, -242.754, -43.905,
            -40.937, -241.556, -44.454,
            -45.043, -242.754, -42.084,
            -45.043, -242.754, -42.084,
            -40.937, -241.556, -44.454,
            -39.636, -241.556, -39.597,
            -45.043, -242.754, -42.084,
            -39.636, -241.556, -39.597,
            -44.376, -242.754, -39.597,
            -44.376, -242.754, -39.597,
            -39.636, -241.556, -39.597,
            -40.937, -241.556, -34.739,
            -44.376, -242.754, -39.597,
            -40.937, -241.556, -34.739,
            -45.043, -242.754, -37.109,
            -45.043, -242.754, -37.109,
            -40.937, -241.556, -34.739,
            -44.493, -241.556, -31.183,
            -45.043, -242.754, -37.109,
            -44.493, -241.556, -31.183,
            -46.864, -242.754, -35.288,
            -46.864, -242.754, -35.288,
            -44.493, -241.556, -31.183,
            -49.351, -241.556, -29.882,
            -46.864, -242.754, -35.288,
            -49.351, -241.556, -29.882,
            -49.351, -242.754, -34.622,
            -49.351, -242.754, -34.622,
            -49.351, -241.556, -29.882,
            -54.209, -241.556, -31.183,
            -49.351, -242.754, -34.622,
            -54.209, -241.556, -31.183,
            -51.839, -242.754, -35.288,
            -51.839, -242.754, -35.288,
            -54.209, -241.556, -31.183,
            -57.765, -241.556, -34.739,
            -51.839, -242.754, -35.288,
            -57.765, -241.556, -34.739,
            -53.660, -242.754, -37.109,
            -53.660, -242.754, -37.109,
            -57.765, -241.556, -34.739,
            -59.066, -241.556, -39.597,
            -53.660, -242.754, -37.109,
            -59.066, -241.556, -39.597,
            -54.326, -242.754, -39.597,
            -59.066, -241.556, -39.597,
            -63.348, -239.623, -39.597,
            -61.473, -239.623, -46.595,
            -59.066, -241.556, -39.597,
            -61.473, -239.623, -46.595,
            -57.765, -241.556, -44.454,
            -57.765, -241.556, -44.454,
            -61.473, -239.623, -46.595,
            -56.350, -239.623, -51.719,
            -57.765, -241.556, -44.454,
            -56.350, -239.623, -51.719,
            -54.209, -241.556, -48.010,
            -54.209, -241.556, -48.010,
            -56.350, -239.623, -51.719,
            -49.351, -239.623, -53.594,
            -54.209, -241.556, -48.010,
            -49.351, -239.623, -53.594,
            -49.351, -241.556, -49.312,
            -49.351, -241.556, -49.312,
            -49.351, -239.623, -53.594,
            -42.353, -239.623, -51.719,
            -49.351, -241.556, -49.312,
            -42.353, -239.623, -51.719,
            -44.493, -241.556, -48.010,
            -44.493, -241.556, -48.010,
            -42.353, -239.623, -51.719,
            -37.229, -239.623, -46.595,
            -44.493, -241.556, -48.010,
            -37.229, -239.623, -46.595,
            -40.937, -241.556, -44.454,
            -40.937, -241.556, -44.454,
            -37.229, -239.623, -46.595,
            -35.354, -239.623, -39.597,
            -40.937, -241.556, -44.454,
            -35.354, -239.623, -39.597,
            -39.636, -241.556, -39.597,
            -39.636, -241.556, -39.597,
            -35.354, -239.623, -39.597,
            -37.229, -239.623, -32.598,
            -39.636, -241.556, -39.597,
            -37.229, -239.623, -32.598,
            -40.937, -241.556, -34.739,
            -40.937, -241.556, -34.739,
            -37.229, -239.623, -32.598,
            -42.353, -239.623, -27.475,
            -40.937, -241.556, -34.739,
            -42.353, -239.623, -27.475,
            -44.493, -241.556, -31.183,
            -54.209, -241.556, -31.183,
            -56.350, -239.623, -27.475,
            -61.473, -239.623, -32.598,
            -54.209, -241.556, -31.183,
            -61.473, -239.623, -32.598,
            -57.765, -241.556, -34.739,
            -57.765, -241.556, -34.739,
            -61.473, -239.623, -32.598,
            -63.348, -239.623, -39.597,
            -57.765, -241.556, -34.739,
            -63.348, -239.623, -39.597,
            -59.066, -241.556, -39.597,
            -63.348, -239.623, -39.597,
            -66.970, -237.045, -39.597,
            -64.609, -237.045, -48.406,
            -63.348, -239.623, -39.597,
            -64.609, -237.045, -48.406,
            -61.473, -239.623, -46.595,
            -61.473, -239.623, -46.595,
            -64.609, -237.045, -48.406,
            -58.160, -237.045, -54.855,
            -61.473, -239.623, -46.595,
            -58.160, -237.045, -54.855,
            -56.350, -239.623, -51.719,
            -56.350, -239.623, -51.719,
            -58.160, -237.045, -54.855,
            -49.351, -237.045, -57.215,
            -56.350, -239.623, -51.719,
            -49.351, -237.045, -57.215,
            -49.351, -239.623, -53.594,
            -49.351, -239.623, -53.594,
            -49.351, -237.045, -57.215,
            -40.542, -237.045, -54.855,
            -49.351, -239.623, -53.594,
            -40.542, -237.045, -54.855,
            -42.353, -239.623, -51.719,
            -42.353, -239.623, -51.719,
            -40.542, -237.045, -54.855,
            -34.093, -237.045, -48.406,
            -42.353, -239.623, -51.719,
            -34.093, -237.045, -48.406,
            -37.229, -239.623, -46.595,
            -37.229, -239.623, -46.595,
            -34.093, -237.045, -48.406,
            -31.733, -237.045, -39.597,
            -37.229, -239.623, -46.595,
            -31.733, -237.045, -39.597,
            -35.354, -239.623, -39.597,
            -35.354, -239.623, -39.597,
            -31.733, -237.045, -39.597,
            -34.093, -237.045, -30.788,
            -35.354, -239.623, -39.597,
            -34.093, -237.045, -30.788,
            -37.229, -239.623, -32.598,
            -37.229, -239.623, -32.598,
            -34.093, -237.045, -30.788,
            -40.542, -237.045, -24.339,
            -37.229, -239.623, -32.598,
            -40.542, -237.045, -24.339,
            -42.353, -239.623, -27.475,
            -56.350, -239.623, -27.475,
            -58.160, -237.045, -24.339,
            -64.609, -237.045, -30.788,
            -56.350, -239.623, -27.475,
            -64.609, -237.045, -30.788,
            -61.473, -239.623, -32.598,
            -61.473, -239.623, -32.598,
            -64.609, -237.045, -30.788,
            -66.970, -237.045, -39.597,
            -61.473, -239.623, -32.598,
            -66.970, -237.045, -39.597,
            -63.348, -239.623, -39.597,
            -66.970, -237.045, -39.597,
            -66.970, -205.944, -39.597,
            -64.609, -205.944, -48.406,
            -66.970, -237.045, -39.597,
            -64.609, -205.944, -48.406,
            -64.609, -237.045, -48.406,
            -64.609, -237.045, -48.406,
            -64.609, -205.944, -48.406,
            -58.160, -205.944, -54.855,
            -64.609, -237.045, -48.406,
            -58.160, -205.944, -54.855,
            -58.160, -237.045, -54.855,
            -58.160, -237.045, -54.855,
            -58.160, -205.944, -54.855,
            -49.351, -205.944, -57.215,
            -58.160, -237.045, -54.855,
            -49.351, -205.944, -57.215,
            -49.351, -237.045, -57.215,
            -49.351, -237.045, -57.215,
            -49.351, -205.944, -57.215,
            -40.542, -205.944, -54.855,
            -49.351, -237.045, -57.215,
            -40.542, -205.944, -54.855,
            -40.542, -237.045, -54.855,
            -40.542, -237.045, -54.855,
            -40.542, -205.944, -54.855,
            -34.093, -205.944, -48.406,
            -40.542, -237.045, -54.855,
            -34.093, -205.944, -48.406,
            -34.093, -237.045, -48.406,
            -34.093, -237.045, -48.406,
            -34.093, -205.944, -48.406,
            -31.733, -205.944, -39.597,
            -34.093, -237.045, -48.406,
            -31.733, -205.944, -39.597,
            -31.733, -237.045, -39.597,
            -31.733, -237.045, -39.597,
            -31.733, -205.944, -39.597,
            -34.093, -205.944, -30.788,
            -31.733, -237.045, -39.597,
            -34.093, -205.944, -30.788,
            -34.093, -237.045, -30.788,
            -34.093, -237.045, -30.788,
            -34.093, -205.944, -30.788,
            -40.542, -205.944, -24.339,
            -34.093, -237.045, -30.788,
            -40.542, -205.944, -24.339,
            -40.542, -237.045, -24.339,
            -58.160, -237.045, -24.339,
            -58.160, -205.944, -24.339,
            -64.609, -205.944, -30.788,
            -58.160, -237.045, -24.339,
            -64.609, -205.944, -30.788,
            -64.609, -237.045, -30.788,
            -64.609, -237.045, -30.788,
            -64.609, -205.944, -30.788,
            -66.970, -205.944, -39.597,
            -64.609, -237.045, -30.788,
            -66.970, -205.944, -39.597,
            -66.970, -237.045, -39.597,
            -66.970, -205.944, -39.597,
            -63.348, -203.366, -39.597,
            -61.473, -203.366, -46.595,
            -66.970, -205.944, -39.597,
            -61.473, -203.366, -46.595,
            -64.609, -205.944, -48.406,
            -64.609, -205.944, -48.406,
            -61.473, -203.366, -46.595,
            -56.350, -203.366, -51.719,
            -64.609, -205.944, -48.406,
            -56.350, -203.366, -51.719,
            -58.160, -205.944, -54.855,
            -58.160, -205.944, -54.855,
            -56.350, -203.366, -51.719,
            -49.351, -203.366, -53.594,
            -58.160, -205.944, -54.855,
            -49.351, -203.366, -53.594,
            -49.351, -205.944, -57.215,
            -49.351, -205.944, -57.215,
            -49.351, -203.366, -53.594,
            -42.353, -203.366, -51.719,
            -49.351, -205.944, -57.215,
            -42.353, -203.366, -51.719,
            -40.542, -205.944, -54.855,
            -40.542, -205.944, -54.855,
            -42.353, -203.366, -51.719,
            -37.229, -203.366, -46.595,
            -40.542, -205.944, -54.855,
            -37.229, -203.366, -46.595,
            -34.093, -205.944, -48.406,
            -34.093, -205.944, -48.406,
            -37.229, -203.366, -46.595,
            -35.354, -203.366, -39.597,
            -34.093, -205.944, -48.406,
            -35.354, -203.366, -39.597,
            -31.733, -205.944, -39.597,
            -31.733, -205.944, -39.597,
            -35.354, -203.366, -39.597,
            -37.229, -203.366, -32.598,
            -31.733, -205.944, -39.597,
            -37.229, -203.366, -32.598,
            -34.093, -205.944, -30.788,
            -34.093, -205.944, -30.788,
            -37.229, -203.366, -32.598,
            -42.353, -203.366, -27.475,
            -34.093, -205.944, -30.788,
            -42.353, -203.366, -27.475,
            -40.542, -205.944, -24.339,
            -58.160, -205.944, -24.339,
            -56.350, -203.366, -27.475,
            -61.473, -203.366, -32.598,
            -58.160, -205.944, -24.339,
            -61.473, -203.366, -32.598,
            -64.609, -205.944, -30.788,
            -64.609, -205.944, -30.788,
            -61.473, -203.366, -32.598,
            -63.348, -203.366, -39.597,
            -64.609, -205.944, -30.788,
            -63.348, -203.366, -39.597,
            -66.970, -205.944, -39.597,
            -63.348, -203.366, -39.597,
            -59.066, -201.433, -39.597,
            -57.765, -201.433, -44.454,
            -63.348, -203.366, -39.597,
            -57.765, -201.433, -44.454,
            -61.473, -203.366, -46.595,
            -61.473, -203.366, -46.595,
            -57.765, -201.433, -44.454,
            -54.209, -201.433, -48.010,
            -61.473, -203.366, -46.595,
            -54.209, -201.433, -48.010,
            -56.350, -203.366, -51.719,
            -56.350, -203.366, -51.719,
            -54.209, -201.433, -48.010,
            -49.351, -201.433, -49.312,
            -56.350, -203.366, -51.719,
            -49.351, -201.433, -49.312,
            -49.351, -203.366, -53.594,
            -49.351, -203.366, -53.594,
            -49.351, -201.433, -49.312,
            -44.493, -201.433, -48.010,
            -49.351, -203.366, -53.594,
            -44.493, -201.433, -48.010,
            -42.353, -203.366, -51.719,
            -42.353, -203.366, -51.719,
            -44.493, -201.433, -48.010,
            -40.937, -201.433, -44.454,
            -42.353, -203.366, -51.719,
            -40.937, -201.433, -44.454,
            -37.229, -203.366, -46.595,
            -37.229, -203.366, -46.595,
            -40.937, -201.433, -44.454,
            -39.636, -201.433, -39.597,
            -37.229, -203.366, -46.595,
            -39.636, -201.433, -39.597,
            -35.354, -203.366, -39.597,
            -35.354, -203.366, -39.597,
            -39.636, -201.433, -39.597,
            -40.937, -201.433, -34.739,
            -35.354, -203.366, -39.597,
            -40.937, -201.433, -34.739,
            -37.229, -203.366, -32.598,
            -37.229, -203.366, -32.598,
            -40.937, -201.433, -34.739,
            -44.493, -201.433, -31.183,
            -37.229, -203.366, -32.598,
            -44.493, -201.433, -31.183,
            -42.353, -203.366, -27.475,
            -56.350, -203.366, -27.475,
            -54.209, -201.433, -31.183,
            -57.765, -201.433, -34.739,
            -56.350, -203.366, -27.475,
            -57.765, -201.433, -34.739,
            -61.473, -203.366, -32.598,
            -61.473, -203.366, -32.598,
            -57.765, -201.433, -34.739,
            -59.066, -201.433, -39.597,
            -61.473, -203.366, -32.598,
            -59.066, -201.433, -39.597,
            -63.348, -203.366, -39.597,
            -59.066, -201.433, -39.597,
            -54.326, -200.235, -39.597,
            -53.660, -200.235, -42.084,
            -59.066, -201.433, -39.597,
            -53.660, -200.235, -42.084,
            -57.765, -201.433, -44.454,
            -57.765, -201.433, -44.454,
            -53.660, -200.235, -42.084,
            -51.839, -200.235, -43.905,
            -57.765, -201.433, -44.454,
            -51.839, -200.235, -43.905,
            -54.209, -201.433, -48.010,
            -54.209, -201.433, -48.010,
            -51.839, -200.235, -43.905,
            -49.351, -200.235, -44.572,
            -54.209, -201.433, -48.010,
            -49.351, -200.235, -44.572,
            -49.351, -201.433, -49.312,
            -49.351, -201.433, -49.312,
            -49.351, -200.235, -44.572,
            -46.864, -200.235, -43.905,
            -49.351, -201.433, -49.312,
            -46.864, -200.235, -43.905,
            -44.493, -201.433, -48.010,
            -44.493, -201.433, -48.010,
            -46.864, -200.235, -43.905,
            -45.043, -200.235, -42.084,
            -44.493, -201.433, -48.010,
            -45.043, -200.235, -42.084,
            -40.937, -201.433, -44.454,
            -40.937, -201.433, -44.454,
            -45.043, -200.235, -42.084,
            -44.376, -200.235, -39.597,
            -40.937, -201.433, -44.454,
            -44.376, -200.235, -39.597,
            -39.636, -201.433, -39.597,
            -39.636, -201.433, -39.597,
            -44.376, -200.235, -39.597,
            -45.043, -200.235, -37.109,
            -39.636, -201.433, -39.597,
            -45.043, -200.235, -37.109,
            -40.937, -201.433, -34.739,
            -40.937, -201.433, -34.739,
            -45.043, -200.235, -37.109,
            -46.864, -200.235, -35.288,
            -40.937, -201.433, -34.739,
            -46.864, -200.235, -35.288,
            -44.493, -201.433, -31.183,
            -44.493, -201.433, -31.183,
            -46.864, -200.235, -35.288,
            -49.351, -200.235, -34.622,
            -44.493, -201.433, -31.183,
            -49.351, -200.235, -34.622,
            -49.351, -201.433, -29.882,
            -49.351, -201.433, -29.882,
            -49.351, -200.235, -34.622,
            -51.839, -200.235, -35.288,
            -49.351, -201.433, -29.882,
            -51.839, -200.235, -35.288,
            -54.209, -201.433, -31.183,
            -54.209, -201.433, -31.183,
            -51.839, -200.235, -35.288,
            -53.660, -200.235, -37.109,
            -54.209, -201.433, -31.183,
            -53.660, -200.235, -37.109,
            -57.765, -201.433, -34.739,
            -57.765, -201.433, -34.739,
            -53.660, -200.235, -37.109,
            -54.326, -200.235, -39.597,
            -57.765, -201.433, -34.739,
            -54.326, -200.235, -39.597,
            -59.066, -201.433, -39.597,
            -54.326, -200.235, -39.597,
            -49.351, -199.830, -39.597,
            -53.660, -200.235, -42.084,
            -53.660, -200.235, -42.084,
            -49.351, -199.830, -39.597,
            -51.839, -200.235, -43.905,
            -51.839, -200.235, -43.905,
            -49.351, -199.830, -39.597,
            -49.351, -200.235, -44.572,
            -49.351, -200.235, -44.572,
            -49.351, -199.830, -39.597,
            -46.864, -200.235, -43.905,
            -46.864, -200.235, -43.905,
            -49.351, -199.830, -39.597,
            -45.043, -200.235, -42.084,
            -45.043, -200.235, -42.084,
            -49.351, -199.830, -39.597,
            -44.376, -200.235, -39.597,
            -44.376, -200.235, -39.597,
            -49.351, -199.830, -39.597,
            -45.043, -200.235, -37.109,
            -45.043, -200.235, -37.109,
            -49.351, -199.830, -39.597,
            -46.864, -200.235, -35.288,
            -46.864, -200.235, -35.288,
            -49.351, -199.830, -39.597,
            -49.351, -200.235, -34.622,
            -49.351, -200.235, -34.622,
            -49.351, -199.830, -39.597,
            -51.839, -200.235, -35.288,
            -51.839, -200.235, -35.288,
            -49.351, -199.830, -39.597,
            -53.660, -200.235, -37.109,
            -53.660, -200.235, -37.109,
            -49.351, -199.830, -39.597,
               -54.326, -200.235, -39.597
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, -0.000,
            -0.177, -0.984, 0.000,
            -0.153, -0.984, -0.089,
            0.000, -1.000, -0.000,
            -0.153, -0.984, -0.089,
            -0.089, -0.984, -0.153,
            0.000, -1.000, -0.000,
            -0.089, -0.984, -0.153,
            -0.000, -0.984, -0.177,
            0.000, -1.000, -0.000,
            -0.000, -0.984, -0.177,
            0.089, -0.984, -0.153,
            0.000, -1.000, -0.000,
            0.089, -0.984, -0.153,
            0.153, -0.984, -0.089,
            0.000, -1.000, -0.000,
            0.153, -0.984, -0.089,
            0.177, -0.984, -0.000,
            0.000, -1.000, -0.000,
            0.177, -0.984, -0.000,
            0.153, -0.984, 0.089,
            0.000, -1.000, -0.000,
            0.153, -0.984, 0.089,
            0.089, -0.984, 0.153,
            0.000, -1.000, -0.000,
            0.089, -0.984, 0.153,
            0.000, -0.984, 0.177,
            0.000, -1.000, -0.000,
            0.000, -0.984, 0.177,
            -0.089, -0.984, 0.153,
            0.000, -1.000, -0.000,
            -0.089, -0.984, 0.153,
            -0.153, -0.984, 0.089,
            0.000, -1.000, -0.000,
            -0.153, -0.984, 0.089,
            -0.177, -0.984, 0.000,
            -0.177, -0.984, 0.000,
            -0.342, -0.940, -0.000,
            -0.297, -0.940, -0.171,
            -0.177, -0.984, 0.000,
            -0.297, -0.940, -0.171,
            -0.153, -0.984, -0.089,
            -0.153, -0.984, -0.089,
            -0.297, -0.940, -0.171,
            -0.171, -0.940, -0.297,
            -0.153, -0.984, -0.089,
            -0.171, -0.940, -0.297,
            -0.089, -0.984, -0.153,
            -0.089, -0.984, -0.153,
            -0.171, -0.940, -0.297,
            -0.000, -0.940, -0.342,
            -0.089, -0.984, -0.153,
            -0.000, -0.940, -0.342,
            -0.000, -0.984, -0.177,
            -0.000, -0.984, -0.177,
            -0.000, -0.940, -0.342,
            0.171, -0.940, -0.297,
            -0.000, -0.984, -0.177,
            0.171, -0.940, -0.297,
            0.089, -0.984, -0.153,
            0.089, -0.984, -0.153,
            0.171, -0.940, -0.297,
            0.297, -0.940, -0.171,
            0.089, -0.984, -0.153,
            0.297, -0.940, -0.171,
            0.153, -0.984, -0.089,
            0.153, -0.984, -0.089,
            0.297, -0.940, -0.171,
            0.342, -0.940, 0.000,
            0.153, -0.984, -0.089,
            0.342, -0.940, 0.000,
            0.177, -0.984, -0.000,
            0.177, -0.984, -0.000,
            0.342, -0.940, 0.000,
            0.297, -0.940, 0.171,
            0.177, -0.984, -0.000,
            0.297, -0.940, 0.171,
            0.153, -0.984, 0.089,
            0.153, -0.984, 0.089,
            0.297, -0.940, 0.171,
            0.196, -0.949, 0.249,
            0.153, -0.984, 0.089,
            0.196, -0.949, 0.249,
            0.089, -0.984, 0.153,
            0.089, -0.984, 0.153,
            0.196, -0.949, 0.249,
            0.000, -0.970, 0.245,
            0.089, -0.984, 0.153,
            0.000, -0.970, 0.245,
            0.000, -0.984, 0.177,
            0.000, -0.984, 0.177,
            0.000, -0.970, 0.245,
            -0.196, -0.949, 0.249,
            0.000, -0.984, 0.177,
            -0.196, -0.949, 0.249,
            -0.089, -0.984, 0.153,
            -0.089, -0.984, 0.153,
            -0.196, -0.949, 0.249,
            -0.297, -0.940, 0.171,
            -0.089, -0.984, 0.153,
            -0.297, -0.940, 0.171,
            -0.153, -0.984, 0.089,
            -0.153, -0.984, 0.089,
            -0.297, -0.940, 0.171,
            -0.342, -0.940, -0.000,
            -0.153, -0.984, 0.089,
            -0.342, -0.940, -0.000,
            -0.177, -0.984, 0.000,
            -0.342, -0.940, -0.000,
            -0.510, -0.860, 0.000,
            -0.442, -0.860, -0.255,
            -0.342, -0.940, -0.000,
            -0.442, -0.860, -0.255,
            -0.297, -0.940, -0.171,
            -0.297, -0.940, -0.171,
            -0.442, -0.860, -0.255,
            -0.255, -0.860, -0.442,
            -0.297, -0.940, -0.171,
            -0.255, -0.860, -0.442,
            -0.171, -0.940, -0.297,
            -0.171, -0.940, -0.297,
            -0.255, -0.860, -0.442,
            -0.000, -0.860, -0.510,
            -0.171, -0.940, -0.297,
            -0.000, -0.860, -0.510,
            -0.000, -0.940, -0.342,
            -0.000, -0.940, -0.342,
            -0.000, -0.860, -0.510,
            0.255, -0.860, -0.442,
            -0.000, -0.940, -0.342,
            0.255, -0.860, -0.442,
            0.171, -0.940, -0.297,
            0.171, -0.940, -0.297,
            0.255, -0.860, -0.442,
            0.442, -0.860, -0.255,
            0.171, -0.940, -0.297,
            0.442, -0.860, -0.255,
            0.297, -0.940, -0.171,
            0.297, -0.940, -0.171,
            0.442, -0.860, -0.255,
            0.510, -0.860, 0.000,
            0.297, -0.940, -0.171,
            0.510, -0.860, 0.000,
            0.342, -0.940, 0.000,
            0.342, -0.940, 0.000,
            0.510, -0.860, 0.000,
            0.442, -0.860, 0.255,
            0.342, -0.940, 0.000,
            0.442, -0.860, 0.255,
            0.297, -0.940, 0.171,
            0.297, -0.940, 0.171,
            0.442, -0.860, 0.255,
            0.370, -0.852, 0.370,
            0.297, -0.940, 0.171,
            0.370, -0.852, 0.370,
            0.196, -0.949, 0.249,
            -0.196, -0.949, 0.249,
            -0.370, -0.852, 0.370,
            -0.442, -0.860, 0.255,
            -0.196, -0.949, 0.249,
            -0.442, -0.860, 0.255,
            -0.297, -0.940, 0.171,
            -0.297, -0.940, 0.171,
            -0.442, -0.860, 0.255,
            -0.510, -0.860, 0.000,
            -0.297, -0.940, 0.171,
            -0.510, -0.860, 0.000,
            -0.342, -0.940, -0.000,
            -0.510, -0.860, 0.000,
            -0.580, -0.815, 0.000,
            -0.502, -0.815, -0.290,
            -0.510, -0.860, 0.000,
            -0.502, -0.815, -0.290,
            -0.442, -0.860, -0.255,
            -0.442, -0.860, -0.255,
            -0.502, -0.815, -0.290,
            -0.290, -0.815, -0.502,
            -0.442, -0.860, -0.255,
            -0.290, -0.815, -0.502,
            -0.255, -0.860, -0.442,
            -0.255, -0.860, -0.442,
            -0.290, -0.815, -0.502,
            0.000, -0.815, -0.580,
            -0.255, -0.860, -0.442,
            0.000, -0.815, -0.580,
            -0.000, -0.860, -0.510,
            -0.000, -0.860, -0.510,
            0.000, -0.815, -0.580,
            0.290, -0.815, -0.502,
            -0.000, -0.860, -0.510,
            0.290, -0.815, -0.502,
            0.255, -0.860, -0.442,
            0.255, -0.860, -0.442,
            0.290, -0.815, -0.502,
            0.502, -0.815, -0.290,
            0.255, -0.860, -0.442,
            0.502, -0.815, -0.290,
            0.442, -0.860, -0.255,
            0.442, -0.860, -0.255,
            0.502, -0.815, -0.290,
            0.580, -0.815, 0.000,
            0.442, -0.860, -0.255,
            0.580, -0.815, 0.000,
            0.510, -0.860, 0.000,
            0.510, -0.860, 0.000,
            0.580, -0.815, 0.000,
            0.502, -0.815, 0.290,
            0.510, -0.860, 0.000,
            0.502, -0.815, 0.290,
            0.442, -0.860, 0.255,
            0.442, -0.860, 0.255,
            0.502, -0.815, 0.290,
            0.419, -0.805, 0.419,
            0.442, -0.860, 0.255,
            0.419, -0.805, 0.419,
            0.370, -0.852, 0.370,
            -0.370, -0.852, 0.370,
            -0.419, -0.805, 0.419,
            -0.502, -0.815, 0.290,
            -0.370, -0.852, 0.370,
            -0.502, -0.815, 0.290,
            -0.442, -0.860, 0.255,
            -0.442, -0.860, 0.255,
            -0.502, -0.815, 0.290,
            -0.580, -0.815, 0.000,
            -0.442, -0.860, 0.255,
            -0.580, -0.815, 0.000,
            -0.510, -0.860, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, -0.000, -0.000,
            -0.866, 0.000, -0.500,
            -1.000, 0.000, -0.000,
            -0.866, 0.000, -0.500,
            -0.866, 0.000, -0.500,
            -0.866, 0.000, -0.500,
            -0.866, 0.000, -0.500,
            -0.500, 0.000, -0.866,
            -0.866, 0.000, -0.500,
            -0.500, 0.000, -0.866,
            -0.500, 0.000, -0.866,
            -0.500, 0.000, -0.866,
            -0.500, 0.000, -0.866,
            -0.000, -0.000, -1.000,
            -0.500, 0.000, -0.866,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.500, 0.000, -0.866,
            -0.000, -0.000, -1.000,
            0.500, 0.000, -0.866,
            0.500, 0.000, -0.866,
            0.500, 0.000, -0.866,
            0.500, 0.000, -0.866,
            0.866, 0.000, -0.500,
            0.500, 0.000, -0.866,
            0.866, 0.000, -0.500,
            0.866, 0.000, -0.500,
            0.866, 0.000, -0.500,
            0.866, 0.000, -0.500,
            1.000, 0.000, -0.000,
            0.866, 0.000, -0.500,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            0.866, 0.000, 0.500,
            1.000, 0.000, 0.000,
            0.866, 0.000, 0.500,
            0.866, -0.000, 0.500,
            0.866, -0.000, 0.500,
            0.866, 0.000, 0.500,
            0.707, -0.000, 0.707,
            0.866, -0.000, 0.500,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.866, 0.000, 0.500,
            -0.707, 0.000, 0.707,
            -0.866, 0.000, 0.500,
            -0.866, 0.000, 0.500,
            -0.866, 0.000, 0.500,
            -0.866, 0.000, 0.500,
            -1.000, -0.000, -0.000,
            -0.866, 0.000, 0.500,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, -0.000,
            -0.580, 0.815, -0.000,
            -0.510, 0.860, 0.000,
            -0.442, 0.860, -0.255,
            -0.580, 0.815, -0.000,
            -0.442, 0.860, -0.255,
            -0.502, 0.815, -0.290,
            -0.502, 0.815, -0.290,
            -0.442, 0.860, -0.255,
            -0.255, 0.860, -0.442,
            -0.502, 0.815, -0.290,
            -0.255, 0.860, -0.442,
            -0.290, 0.815, -0.502,
            -0.290, 0.815, -0.502,
            -0.255, 0.860, -0.442,
            0.000, 0.860, -0.510,
            -0.290, 0.815, -0.502,
            0.000, 0.860, -0.510,
            0.000, 0.815, -0.580,
            0.000, 0.815, -0.580,
            0.000, 0.860, -0.510,
            0.255, 0.860, -0.442,
            0.000, 0.815, -0.580,
            0.255, 0.860, -0.442,
            0.290, 0.815, -0.502,
            0.290, 0.815, -0.502,
            0.255, 0.860, -0.442,
            0.442, 0.860, -0.255,
            0.290, 0.815, -0.502,
            0.442, 0.860, -0.255,
            0.502, 0.815, -0.290,
            0.502, 0.815, -0.290,
            0.442, 0.860, -0.255,
            0.510, 0.860, -0.000,
            0.502, 0.815, -0.290,
            0.510, 0.860, -0.000,
            0.580, 0.815, -0.000,
            0.580, 0.815, -0.000,
            0.510, 0.860, -0.000,
            0.442, 0.860, 0.255,
            0.580, 0.815, -0.000,
            0.442, 0.860, 0.255,
            0.502, 0.815, 0.290,
            0.502, 0.815, 0.290,
            0.442, 0.860, 0.255,
            0.370, 0.852, 0.370,
            0.502, 0.815, 0.290,
            0.370, 0.852, 0.370,
            0.419, 0.805, 0.419,
            -0.419, 0.805, 0.419,
            -0.370, 0.852, 0.370,
            -0.442, 0.860, 0.255,
            -0.419, 0.805, 0.419,
            -0.442, 0.860, 0.255,
            -0.502, 0.815, 0.290,
            -0.502, 0.815, 0.290,
            -0.442, 0.860, 0.255,
            -0.510, 0.860, 0.000,
            -0.502, 0.815, 0.290,
            -0.510, 0.860, 0.000,
            -0.580, 0.815, -0.000,
            -0.510, 0.860, 0.000,
            -0.342, 0.940, 0.000,
            -0.297, 0.940, -0.171,
            -0.510, 0.860, 0.000,
            -0.297, 0.940, -0.171,
            -0.442, 0.860, -0.255,
            -0.442, 0.860, -0.255,
            -0.297, 0.940, -0.171,
            -0.171, 0.940, -0.297,
            -0.442, 0.860, -0.255,
            -0.171, 0.940, -0.297,
            -0.255, 0.860, -0.442,
            -0.255, 0.860, -0.442,
            -0.171, 0.940, -0.297,
            0.000, 0.940, -0.342,
            -0.255, 0.860, -0.442,
            0.000, 0.940, -0.342,
            0.000, 0.860, -0.510,
            0.000, 0.860, -0.510,
            0.000, 0.940, -0.342,
            0.171, 0.940, -0.297,
            0.000, 0.860, -0.510,
            0.171, 0.940, -0.297,
            0.255, 0.860, -0.442,
            0.255, 0.860, -0.442,
            0.171, 0.940, -0.297,
            0.297, 0.940, -0.171,
            0.255, 0.860, -0.442,
            0.297, 0.940, -0.171,
            0.442, 0.860, -0.255,
            0.442, 0.860, -0.255,
            0.297, 0.940, -0.171,
            0.342, 0.940, -0.000,
            0.442, 0.860, -0.255,
            0.342, 0.940, -0.000,
            0.510, 0.860, -0.000,
            0.510, 0.860, -0.000,
            0.342, 0.940, -0.000,
            0.297, 0.940, 0.171,
            0.510, 0.860, -0.000,
            0.297, 0.940, 0.171,
            0.442, 0.860, 0.255,
            0.442, 0.860, 0.255,
            0.297, 0.940, 0.171,
            0.196, 0.949, 0.249,
            0.442, 0.860, 0.255,
            0.196, 0.949, 0.249,
            0.370, 0.852, 0.370,
            -0.370, 0.852, 0.370,
            -0.196, 0.949, 0.249,
            -0.297, 0.940, 0.171,
            -0.370, 0.852, 0.370,
            -0.297, 0.940, 0.171,
            -0.442, 0.860, 0.255,
            -0.442, 0.860, 0.255,
            -0.297, 0.940, 0.171,
            -0.342, 0.940, 0.000,
            -0.442, 0.860, 0.255,
            -0.342, 0.940, 0.000,
            -0.510, 0.860, 0.000,
            -0.342, 0.940, 0.000,
            -0.177, 0.984, -0.000,
            -0.153, 0.984, -0.089,
            -0.342, 0.940, 0.000,
            -0.153, 0.984, -0.089,
            -0.297, 0.940, -0.171,
            -0.297, 0.940, -0.171,
            -0.153, 0.984, -0.089,
            -0.089, 0.984, -0.153,
            -0.297, 0.940, -0.171,
            -0.089, 0.984, -0.153,
            -0.171, 0.940, -0.297,
            -0.171, 0.940, -0.297,
            -0.089, 0.984, -0.153,
            0.000, 0.984, -0.177,
            -0.171, 0.940, -0.297,
            0.000, 0.984, -0.177,
            0.000, 0.940, -0.342,
            0.000, 0.940, -0.342,
            0.000, 0.984, -0.177,
            0.089, 0.984, -0.153,
            0.000, 0.940, -0.342,
            0.089, 0.984, -0.153,
            0.171, 0.940, -0.297,
            0.171, 0.940, -0.297,
            0.089, 0.984, -0.153,
            0.153, 0.984, -0.089,
            0.171, 0.940, -0.297,
            0.153, 0.984, -0.089,
            0.297, 0.940, -0.171,
            0.297, 0.940, -0.171,
            0.153, 0.984, -0.089,
            0.177, 0.984, -0.000,
            0.297, 0.940, -0.171,
            0.177, 0.984, -0.000,
            0.342, 0.940, -0.000,
            0.342, 0.940, -0.000,
            0.177, 0.984, -0.000,
            0.153, 0.984, 0.089,
            0.342, 0.940, -0.000,
            0.153, 0.984, 0.089,
            0.297, 0.940, 0.171,
            0.297, 0.940, 0.171,
            0.153, 0.984, 0.089,
            0.089, 0.984, 0.153,
            0.297, 0.940, 0.171,
            0.089, 0.984, 0.153,
            0.196, 0.949, 0.249,
            0.196, 0.949, 0.249,
            0.089, 0.984, 0.153,
            -0.000, 0.984, 0.177,
            0.196, 0.949, 0.249,
            -0.000, 0.984, 0.177,
            -0.000, 0.970, 0.245,
            -0.000, 0.970, 0.245,
            -0.000, 0.984, 0.177,
            -0.089, 0.984, 0.153,
            -0.000, 0.970, 0.245,
            -0.089, 0.984, 0.153,
            -0.196, 0.949, 0.249,
            -0.196, 0.949, 0.249,
            -0.089, 0.984, 0.153,
            -0.153, 0.984, 0.089,
            -0.196, 0.949, 0.249,
            -0.153, 0.984, 0.089,
            -0.297, 0.940, 0.171,
            -0.297, 0.940, 0.171,
            -0.153, 0.984, 0.089,
            -0.177, 0.984, -0.000,
            -0.297, 0.940, 0.171,
            -0.177, 0.984, -0.000,
            -0.342, 0.940, 0.000,
            -0.177, 0.984, -0.000,
            0.000, 1.000, -0.000,
            -0.153, 0.984, -0.089,
            -0.153, 0.984, -0.089,
            0.000, 1.000, -0.000,
            -0.089, 0.984, -0.153,
            -0.089, 0.984, -0.153,
            0.000, 1.000, -0.000,
            0.000, 0.984, -0.177,
            0.000, 0.984, -0.177,
            0.000, 1.000, -0.000,
            0.089, 0.984, -0.153,
            0.089, 0.984, -0.153,
            0.000, 1.000, -0.000,
            0.153, 0.984, -0.089,
            0.153, 0.984, -0.089,
            0.000, 1.000, -0.000,
            0.177, 0.984, -0.000,
            0.177, 0.984, -0.000,
            0.000, 1.000, -0.000,
            0.153, 0.984, 0.089,
            0.153, 0.984, 0.089,
            0.000, 1.000, -0.000,
            0.089, 0.984, 0.153,
            0.089, 0.984, 0.153,
            0.000, 1.000, -0.000,
            -0.000, 0.984, 0.177,
            -0.000, 0.984, 0.177,
            0.000, 1.000, -0.000,
            -0.089, 0.984, 0.153,
            -0.089, 0.984, 0.153,
            0.000, 1.000, -0.000,
            -0.153, 0.984, 0.089,
            -0.153, 0.984, 0.089,
            0.000, 1.000, -0.000,
               -0.177, 0.984, -0.000
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
