function create_geometry_381(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            71.945, 280.950, 49.408,
            72.422, 282.730, 62.978,
            72.422, 282.730, 49.408,
            71.945, 280.950, 49.408,
            71.945, 280.950, 62.978,
            72.422, 282.730, 62.978,
            71.945, 280.950, 62.978,
            73.491, 282.112, 62.978,
            72.422, 282.730, 62.978,
            71.945, 280.950, 62.978,
            73.180, 280.950, 62.978,
            73.491, 282.112, 62.978,
            73.180, 280.950, 62.978,
            73.491, 282.112, 49.408,
            73.491, 282.112, 62.978,
            73.180, 280.950, 62.978,
            73.180, 280.950, 49.408,
            73.491, 282.112, 49.408,
            73.180, 280.950, 49.408,
            72.422, 282.730, 49.408,
            73.491, 282.112, 49.408,
            73.180, 280.950, 49.408,
            71.945, 280.950, 49.408,
            72.422, 282.730, 49.408,
            72.422, 282.730, 49.408,
            73.725, 284.033, 62.978,
            73.725, 284.033, 49.408,
            72.422, 282.730, 49.408,
            72.422, 282.730, 62.978,
            73.725, 284.033, 62.978,
            72.422, 282.730, 62.978,
            74.342, 282.963, 62.978,
            73.725, 284.033, 62.978,
            72.422, 282.730, 62.978,
            73.491, 282.112, 62.978,
            74.342, 282.963, 62.978,
            73.491, 282.112, 62.978,
            74.342, 282.963, 49.408,
            74.342, 282.963, 62.978,
            73.491, 282.112, 62.978,
            73.491, 282.112, 49.408,
            74.342, 282.963, 49.408,
            73.491, 282.112, 49.408,
            73.725, 284.033, 49.408,
            74.342, 282.963, 49.408,
            73.491, 282.112, 49.408,
            72.422, 282.730, 49.408,
            73.725, 284.033, 49.408,
            73.725, 284.033, 49.408,
            75.505, 284.510, 62.978,
            75.505, 284.510, 49.408,
            73.725, 284.033, 49.408,
            73.725, 284.033, 62.978,
            75.505, 284.510, 62.978,
            73.725, 284.033, 62.978,
            75.505, 283.275, 62.978,
            75.505, 284.510, 62.978,
            73.725, 284.033, 62.978,
            74.342, 282.963, 62.978,
            75.505, 283.275, 62.978,
            74.342, 282.963, 62.978,
            75.505, 283.275, 49.408,
            75.505, 283.275, 62.978,
            74.342, 282.963, 62.978,
            74.342, 282.963, 49.408,
            75.505, 283.275, 49.408,
            74.342, 282.963, 49.408,
            75.505, 284.510, 49.408,
            75.505, 283.275, 49.408,
            74.342, 282.963, 49.408,
            73.725, 284.033, 49.408,
            75.505, 284.510, 49.408,
            75.505, 284.510, 49.408,
            77.285, 284.033, 62.978,
            77.285, 284.033, 49.408,
            75.505, 284.510, 49.408,
            75.505, 284.510, 62.978,
            77.285, 284.033, 62.978,
            75.505, 284.510, 62.978,
            76.668, 282.963, 62.978,
            77.285, 284.033, 62.978,
            75.505, 284.510, 62.978,
            75.505, 283.275, 62.978,
            76.668, 282.963, 62.978,
            75.505, 283.275, 62.978,
            76.668, 282.963, 49.408,
            76.668, 282.963, 62.978,
            75.505, 283.275, 62.978,
            75.505, 283.275, 49.408,
            76.668, 282.963, 49.408,
            75.505, 283.275, 49.408,
            77.285, 284.033, 49.408,
            76.668, 282.963, 49.408,
            75.505, 283.275, 49.408,
            75.505, 284.510, 49.408,
            77.285, 284.033, 49.408,
            77.285, 284.033, 49.408,
            78.588, 282.730, 62.978,
            78.588, 282.730, 49.408,
            77.285, 284.033, 49.408,
            77.285, 284.033, 62.978,
            78.588, 282.730, 62.978,
            77.285, 284.033, 62.978,
            77.519, 282.112, 62.978,
            78.588, 282.730, 62.978,
            77.285, 284.033, 62.978,
            76.668, 282.963, 62.978,
            77.519, 282.112, 62.978,
            76.668, 282.963, 62.978,
            77.519, 282.112, 49.408,
            77.519, 282.112, 62.978,
            76.668, 282.963, 62.978,
            76.668, 282.963, 49.408,
            77.519, 282.112, 49.408,
            76.668, 282.963, 49.408,
            78.588, 282.730, 49.408,
            77.519, 282.112, 49.408,
            76.668, 282.963, 49.408,
            77.285, 284.033, 49.408,
            78.588, 282.730, 49.408,
            78.588, 282.730, 49.408,
            79.065, 280.950, 62.978,
            79.065, 280.950, 49.408,
            78.588, 282.730, 49.408,
            78.588, 282.730, 62.978,
            79.065, 280.950, 62.978,
            78.588, 282.730, 62.978,
            77.830, 280.950, 62.978,
            79.065, 280.950, 62.978,
            78.588, 282.730, 62.978,
            77.519, 282.112, 62.978,
            77.830, 280.950, 62.978,
            77.519, 282.112, 62.978,
            77.830, 280.950, 49.408,
            77.830, 280.950, 62.978,
            77.519, 282.112, 62.978,
            77.519, 282.112, 49.408,
            77.830, 280.950, 49.408,
            77.519, 282.112, 49.408,
            79.065, 280.950, 49.408,
            77.830, 280.950, 49.408,
            77.519, 282.112, 49.408,
            78.588, 282.730, 49.408,
            79.065, 280.950, 49.408,
            79.065, 280.950, 49.408,
            78.588, 279.170, 62.978,
            78.588, 279.170, 49.408,
            79.065, 280.950, 49.408,
            79.065, 280.950, 62.978,
            78.588, 279.170, 62.978,
            79.065, 280.950, 62.978,
            77.519, 279.787, 62.978,
            78.588, 279.170, 62.978,
            79.065, 280.950, 62.978,
            77.830, 280.950, 62.978,
            77.519, 279.787, 62.978,
            77.830, 280.950, 62.978,
            77.519, 279.787, 49.408,
            77.519, 279.787, 62.978,
            77.830, 280.950, 62.978,
            77.830, 280.950, 49.408,
            77.519, 279.787, 49.408,
            77.830, 280.950, 49.408,
            78.588, 279.170, 49.408,
            77.519, 279.787, 49.408,
            77.830, 280.950, 49.408,
            79.065, 280.950, 49.408,
            78.588, 279.170, 49.408,
            78.588, 279.170, 49.408,
            77.285, 277.867, 62.978,
            77.285, 277.867, 49.408,
            78.588, 279.170, 49.408,
            78.588, 279.170, 62.978,
            77.285, 277.867, 62.978,
            78.588, 279.170, 62.978,
            76.668, 278.936, 62.978,
            77.285, 277.867, 62.978,
            78.588, 279.170, 62.978,
            77.519, 279.787, 62.978,
            76.668, 278.936, 62.978,
            77.519, 279.787, 62.978,
            76.668, 278.936, 49.408,
            76.668, 278.936, 62.978,
            77.519, 279.787, 62.978,
            77.519, 279.787, 49.408,
            76.668, 278.936, 49.408,
            77.519, 279.787, 49.408,
            77.285, 277.867, 49.408,
            76.668, 278.936, 49.408,
            77.519, 279.787, 49.408,
            78.588, 279.170, 49.408,
            77.285, 277.867, 49.408,
            77.285, 277.867, 49.408,
            75.505, 277.390, 62.978,
            75.505, 277.390, 49.408,
            77.285, 277.867, 49.408,
            77.285, 277.867, 62.978,
            75.505, 277.390, 62.978,
            77.285, 277.867, 62.978,
            75.505, 278.625, 62.978,
            75.505, 277.390, 62.978,
            77.285, 277.867, 62.978,
            76.668, 278.936, 62.978,
            75.505, 278.625, 62.978,
            76.668, 278.936, 62.978,
            75.505, 278.625, 49.408,
            75.505, 278.625, 62.978,
            76.668, 278.936, 62.978,
            76.668, 278.936, 49.408,
            75.505, 278.625, 49.408,
            76.668, 278.936, 49.408,
            75.505, 277.390, 49.408,
            75.505, 278.625, 49.408,
            76.668, 278.936, 49.408,
            77.285, 277.867, 49.408,
            75.505, 277.390, 49.408,
            75.505, 277.390, 49.408,
            73.725, 277.867, 62.978,
            73.725, 277.867, 49.408,
            75.505, 277.390, 49.408,
            75.505, 277.390, 62.978,
            73.725, 277.867, 62.978,
            75.505, 277.390, 62.978,
            74.342, 278.936, 62.978,
            73.725, 277.867, 62.978,
            75.505, 277.390, 62.978,
            75.505, 278.625, 62.978,
            74.342, 278.936, 62.978,
            75.505, 278.625, 62.978,
            74.342, 278.936, 49.408,
            74.342, 278.936, 62.978,
            75.505, 278.625, 62.978,
            75.505, 278.625, 49.408,
            74.342, 278.936, 49.408,
            75.505, 278.625, 49.408,
            73.725, 277.867, 49.408,
            74.342, 278.936, 49.408,
            75.505, 278.625, 49.408,
            75.505, 277.390, 49.408,
            73.725, 277.867, 49.408,
            73.725, 277.867, 49.408,
            72.422, 279.170, 62.978,
            72.422, 279.170, 49.408,
            73.725, 277.867, 49.408,
            73.725, 277.867, 62.978,
            72.422, 279.170, 62.978,
            73.725, 277.867, 62.978,
            73.491, 279.787, 62.978,
            72.422, 279.170, 62.978,
            73.725, 277.867, 62.978,
            74.342, 278.936, 62.978,
            73.491, 279.787, 62.978,
            74.342, 278.936, 62.978,
            73.491, 279.787, 49.408,
            73.491, 279.787, 62.978,
            74.342, 278.936, 62.978,
            74.342, 278.936, 49.408,
            73.491, 279.787, 49.408,
            74.342, 278.936, 49.408,
            72.422, 279.170, 49.408,
            73.491, 279.787, 49.408,
            74.342, 278.936, 49.408,
            73.725, 277.867, 49.408,
            72.422, 279.170, 49.408,
            72.422, 279.170, 49.408,
            71.945, 280.950, 62.978,
            71.945, 280.950, 49.408,
            72.422, 279.170, 49.408,
            72.422, 279.170, 62.978,
            71.945, 280.950, 62.978,
            72.422, 279.170, 62.978,
            73.180, 280.950, 62.978,
            71.945, 280.950, 62.978,
            72.422, 279.170, 62.978,
            73.491, 279.787, 62.978,
            73.180, 280.950, 62.978,
            73.491, 279.787, 62.978,
            73.180, 280.950, 49.408,
            73.180, 280.950, 62.978,
            73.491, 279.787, 62.978,
            73.491, 279.787, 49.408,
            73.180, 280.950, 49.408,
            73.491, 279.787, 49.408,
            71.945, 280.950, 49.408,
            73.180, 280.950, 49.408,
            73.491, 279.787, 49.408,
            72.422, 279.170, 49.408,
               71.945, 280.950, 49.408
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            1.000, 0.000, -0.000,
            0.866, -0.500, -0.000,
            0.866, -0.500, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, -0.500, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.866, 0.500, 0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -0.500, 0.866, 0.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.866, -0.500, -0.000,
            0.500, -0.866, -0.000,
            0.500, -0.866, -0.000,
            0.866, -0.500, -0.000,
            0.866, -0.500, -0.000,
            0.500, -0.866, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.500, 0.866, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.500, -0.866, -0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.500, -0.866, -0.000,
            0.500, -0.866, -0.000,
            -0.000, -1.000, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 1.000, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.500, 0.866, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -1.000, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.500, -0.866, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.500, 0.866, -0.000,
            0.866, 0.500, -0.000,
            0.866, 0.500, -0.000,
            0.500, 0.866, -0.000,
            0.500, 0.866, 0.000,
            0.866, 0.500, -0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.500, -0.866, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.866, -0.500, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.866, 0.500, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, 0.500, -0.000,
            0.866, 0.500, -0.000,
            1.000, 0.000, -0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            1.000, 0.000, -0.000,
            0.866, -0.500, -0.000,
            0.866, -0.500, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, -0.500, -0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.866, -0.500, -0.000,
            0.500, -0.866, -0.000,
            0.500, -0.866, 0.000,
            0.866, -0.500, -0.000,
            0.866, -0.500, -0.000,
            0.500, -0.866, -0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.866, 0.500, 0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -0.500, 0.866, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.500, -0.866, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, -0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.500, 0.866, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.500, -0.866, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 1.000, -0.000,
            0.500, 0.866, -0.000,
            0.500, 0.866, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            0.500, 0.866, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.500, -0.866, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.866, -0.500, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.500, 0.866, -0.000,
            0.866, 0.500, -0.000,
            0.866, 0.500, -0.000,
            0.500, 0.866, -0.000,
            0.500, 0.866, -0.000,
            0.866, 0.500, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.866, 0.500, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, 0.500, -0.000,
            0.866, 0.500, -0.000,
            1.000, 0.000, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
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
