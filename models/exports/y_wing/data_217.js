function create_geometry_217(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -11.530, -353.220, 127.698,
            -11.342, -352.869, 128.307,
            -11.530, -349.152, 124.915,
            -11.342, -352.869, 128.307,
            -11.342, -348.618, 125.372,
            -11.530, -349.152, 124.915,
            -11.342, -352.869, 128.307,
            -10.827, -352.611, 128.752,
            -11.342, -348.618, 125.372,
            -10.827, -352.611, 128.752,
            -10.827, -348.226, 125.706,
            -11.342, -348.618, 125.372,
            -10.827, -352.611, 128.752,
            -10.124, -352.517, 128.915,
            -10.827, -348.226, 125.706,
            -10.124, -352.517, 128.915,
            -10.124, -348.083, 125.828,
            -10.827, -348.226, 125.706,
            -10.124, -352.517, 128.915,
            -9.421, -352.611, 128.752,
            -10.124, -348.083, 125.828,
            -9.421, -352.611, 128.752,
            -9.421, -348.226, 125.706,
            -10.124, -348.083, 125.828,
            -9.421, -352.611, 128.752,
            -8.907, -352.869, 128.307,
            -9.421, -348.226, 125.706,
            -8.907, -352.869, 128.307,
            -8.907, -348.618, 125.372,
            -9.421, -348.226, 125.706,
            -8.907, -352.869, 128.307,
            -8.718, -353.220, 127.698,
            -8.907, -348.618, 125.372,
            -8.718, -353.220, 127.698,
            -8.718, -349.152, 124.915,
            -8.907, -348.618, 125.372,
            -8.718, -353.220, 127.698,
            -8.651, -354.626, 125.263,
            -8.718, -349.152, 124.915,
            -8.651, -354.626, 125.263,
            -8.651, -351.290, 123.089,
            -8.718, -349.152, 124.915,
            -11.597, -354.626, 125.263,
            -11.530, -353.220, 127.698,
            -11.597, -351.290, 123.089,
            -11.530, -353.220, 127.698,
            -11.530, -349.152, 124.915,
            -11.597, -351.290, 123.089,
            -11.530, -357.660, 129.109,
            -11.342, -357.532, 129.800,
            -11.530, -353.220, 127.698,
            -11.342, -357.532, 129.800,
            -11.342, -352.869, 128.307,
            -11.530, -353.220, 127.698,
            -11.342, -357.532, 129.800,
            -10.827, -357.438, 130.306,
            -11.342, -352.869, 128.307,
            -10.827, -357.438, 130.306,
            -10.827, -352.611, 128.752,
            -11.342, -352.869, 128.307,
            -10.827, -357.438, 130.306,
            -10.124, -357.404, 130.491,
            -10.827, -352.611, 128.752,
            -10.124, -357.404, 130.491,
            -10.124, -352.517, 128.915,
            -10.827, -352.611, 128.752,
            -10.124, -357.404, 130.491,
            -9.421, -357.438, 130.306,
            -10.124, -352.517, 128.915,
            -9.421, -357.438, 130.306,
            -9.421, -352.611, 128.752,
            -10.124, -352.517, 128.915,
            -9.421, -357.438, 130.306,
            -8.907, -357.532, 129.800,
            -9.421, -352.611, 128.752,
            -8.907, -357.532, 129.800,
            -8.907, -352.869, 128.307,
            -9.421, -352.611, 128.752,
            -8.907, -357.532, 129.800,
            -8.718, -357.660, 129.109,
            -8.907, -352.869, 128.307,
            -8.718, -357.660, 129.109,
            -8.718, -353.220, 127.698,
            -8.907, -352.869, 128.307,
            -8.718, -357.660, 129.109,
            -8.651, -358.172, 126.345,
            -8.718, -353.220, 127.698,
            -8.651, -358.172, 126.345,
            -8.651, -354.626, 125.263,
            -8.718, -353.220, 127.698,
            -11.597, -358.172, 126.345,
            -11.530, -357.660, 129.109,
            -11.597, -354.626, 125.263,
            -11.530, -357.660, 129.109,
            -11.530, -353.220, 127.698,
            -11.597, -354.626, 125.263,
            -11.530, -361.399, 129.095,
            -11.342, -361.423, 129.798,
            -11.530, -357.660, 129.109,
            -11.342, -361.423, 129.798,
            -11.342, -357.532, 129.800,
            -11.530, -357.660, 129.109,
            -11.342, -361.423, 129.798,
            -10.827, -361.441, 130.312,
            -11.342, -357.532, 129.800,
            -10.827, -361.441, 130.312,
            -10.827, -357.438, 130.306,
            -11.342, -357.532, 129.800,
            -10.827, -361.441, 130.312,
            -10.124, -361.448, 130.500,
            -10.827, -357.438, 130.306,
            -10.124, -361.448, 130.500,
            -10.124, -357.404, 130.491,
            -10.827, -357.438, 130.306,
            -10.124, -361.448, 130.500,
            -9.421, -361.441, 130.312,
            -10.124, -357.404, 130.491,
            -9.421, -361.441, 130.312,
            -9.421, -357.438, 130.306,
            -10.124, -357.404, 130.491,
            -9.421, -361.441, 130.312,
            -8.907, -361.423, 129.798,
            -9.421, -357.438, 130.306,
            -8.907, -361.423, 129.798,
            -8.907, -357.532, 129.800,
            -9.421, -357.438, 130.306,
            -8.907, -361.423, 129.798,
            -8.718, -361.399, 129.095,
            -8.907, -357.532, 129.800,
            -8.718, -361.399, 129.095,
            -8.718, -357.660, 129.109,
            -8.907, -357.532, 129.800,
            -8.718, -361.399, 129.095,
            -8.651, -361.301, 126.286,
            -8.718, -357.660, 129.109,
            -8.651, -361.301, 126.286,
            -8.651, -358.172, 126.345,
            -8.718, -357.660, 129.109,
            -11.597, -361.301, 126.286,
            -11.530, -361.399, 129.095,
            -11.597, -358.172, 126.345,
            -11.530, -361.399, 129.095,
            -11.530, -357.660, 129.109,
            -11.597, -358.172, 126.345,
            -11.342, -361.423, 129.798,
            -11.530, -361.399, 129.095,
            -10.124, -361.399, 129.095,
            -10.827, -361.441, 130.312,
            -11.342, -361.423, 129.798,
            -10.124, -361.399, 129.095,
            -10.124, -361.448, 130.500,
            -10.827, -361.441, 130.312,
            -10.124, -361.399, 129.095,
            -9.421, -361.441, 130.312,
            -10.124, -361.448, 130.500,
            -10.124, -361.399, 129.095,
            -8.907, -361.423, 129.798,
            -9.421, -361.441, 130.312,
            -10.124, -361.399, 129.095,
            -8.718, -361.399, 129.095,
            -8.907, -361.423, 129.798,
            -10.124, -361.399, 129.095,
            -8.651, -361.301, 126.286,
            -8.718, -361.399, 129.095,
            -10.124, -361.399, 129.095,
            -9.274, -361.279, 125.664,
            -8.651, -361.301, 126.286,
            -10.124, -361.399, 129.095,
            -10.124, -361.271, 125.436,
            -9.274, -361.279, 125.664,
            -10.124, -361.399, 129.095,
            -10.975, -361.279, 125.664,
            -10.124, -361.271, 125.436,
            -10.124, -361.399, 129.095,
            -11.597, -361.301, 126.286,
            -10.975, -361.279, 125.664,
            -10.124, -361.399, 129.095,
            -11.530, -361.399, 129.095,
            -11.597, -361.301, 126.286,
               -10.124, -361.399, 129.095
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.988, -0.067, -0.138,
            -0.855, -0.228, -0.466,
            -0.986, -0.095, -0.137,
            -0.855, -0.228, -0.466,
            -0.840, -0.309, -0.446,
            -0.986, -0.095, -0.137,
            -0.855, -0.228, -0.466,
            -0.489, -0.387, -0.782,
            -0.840, -0.309, -0.446,
            -0.489, -0.387, -0.782,
            -0.471, -0.504, -0.724,
            -0.840, -0.309, -0.446,
            -0.489, -0.387, -0.782,
            0.000, -0.445, -0.896,
            -0.471, -0.504, -0.724,
            0.000, -0.445, -0.896,
            0.000, -0.571, -0.821,
            -0.471, -0.504, -0.724,
            0.000, -0.445, -0.896,
            0.489, -0.387, -0.782,
            0.000, -0.571, -0.821,
            0.489, -0.387, -0.782,
            0.471, -0.503, -0.725,
            0.000, -0.571, -0.821,
            0.489, -0.387, -0.782,
            0.855, -0.228, -0.466,
            0.471, -0.503, -0.725,
            0.855, -0.228, -0.466,
            0.839, -0.308, -0.448,
            0.471, -0.503, -0.725,
            0.855, -0.228, -0.466,
            0.988, -0.067, -0.138,
            0.839, -0.308, -0.448,
            0.988, -0.067, -0.138,
            0.986, -0.094, -0.138,
            0.839, -0.308, -0.448,
            0.988, -0.067, -0.138,
            1.000, -0.010, -0.022,
            0.986, -0.094, -0.138,
            1.000, -0.010, -0.022,
            1.000, -0.014, -0.021,
            0.986, -0.094, -0.138,
            -1.000, -0.010, -0.022,
            -0.988, -0.067, -0.138,
            -1.000, -0.014, -0.020,
            -0.988, -0.067, -0.138,
            -0.986, -0.095, -0.137,
            -1.000, -0.014, -0.020,
            -0.988, -0.023, -0.152,
            -0.855, -0.080, -0.513,
            -0.988, -0.067, -0.138,
            -0.855, -0.080, -0.513,
            -0.855, -0.228, -0.466,
            -0.988, -0.067, -0.138,
            -0.855, -0.080, -0.513,
            -0.489, -0.136, -0.862,
            -0.855, -0.228, -0.466,
            -0.489, -0.136, -0.862,
            -0.489, -0.387, -0.782,
            -0.855, -0.228, -0.466,
            -0.489, -0.136, -0.862,
            0.000, -0.157, -0.988,
            -0.489, -0.387, -0.782,
            0.000, -0.157, -0.988,
            0.000, -0.445, -0.896,
            -0.489, -0.387, -0.782,
            0.000, -0.157, -0.988,
            0.489, -0.136, -0.861,
            0.000, -0.445, -0.896,
            0.489, -0.136, -0.861,
            0.489, -0.387, -0.782,
            0.000, -0.445, -0.896,
            0.489, -0.136, -0.861,
            0.855, -0.080, -0.513,
            0.489, -0.387, -0.782,
            0.855, -0.080, -0.513,
            0.855, -0.228, -0.466,
            0.489, -0.387, -0.782,
            0.855, -0.080, -0.513,
            0.988, -0.023, -0.152,
            0.855, -0.228, -0.466,
            0.988, -0.023, -0.152,
            0.988, -0.067, -0.138,
            0.855, -0.228, -0.466,
            0.988, -0.023, -0.152,
            1.000, -0.003, -0.024,
            0.988, -0.067, -0.138,
            1.000, -0.003, -0.024,
            1.000, -0.010, -0.022,
            0.988, -0.067, -0.138,
            -1.000, -0.003, -0.024,
            -0.988, -0.023, -0.152,
            -1.000, -0.010, -0.022,
            -0.988, -0.023, -0.152,
            -0.988, -0.067, -0.138,
            -1.000, -0.010, -0.022,
            -0.989, 0.001, -0.145,
            -0.863, 0.001, -0.505,
            -0.988, -0.023, -0.152,
            -0.863, 0.001, -0.505,
            -0.855, -0.080, -0.513,
            -0.988, -0.023, -0.152,
            -0.863, 0.001, -0.505,
            -0.497, -0.001, -0.868,
            -0.855, -0.080, -0.513,
            -0.497, -0.001, -0.868,
            -0.489, -0.136, -0.862,
            -0.855, -0.080, -0.513,
            -0.497, -0.001, -0.868,
            0.000, -0.002, -1.000,
            -0.489, -0.136, -0.862,
            0.000, -0.002, -1.000,
            0.000, -0.157, -0.988,
            -0.489, -0.136, -0.862,
            0.000, -0.002, -1.000,
            0.497, -0.002, -0.868,
            0.000, -0.157, -0.988,
            0.497, -0.002, -0.868,
            0.489, -0.136, -0.861,
            0.000, -0.157, -0.988,
            0.497, -0.002, -0.868,
            0.863, -0.000, -0.505,
            0.489, -0.136, -0.861,
            0.863, -0.000, -0.505,
            0.855, -0.080, -0.513,
            0.489, -0.136, -0.861,
            0.863, -0.000, -0.505,
            0.989, 0.000, -0.145,
            0.855, -0.080, -0.513,
            0.989, 0.000, -0.145,
            0.988, -0.023, -0.152,
            0.855, -0.080, -0.513,
            0.989, 0.000, -0.145,
            1.000, 0.000, -0.024,
            0.988, -0.023, -0.152,
            1.000, 0.000, -0.024,
            1.000, -0.003, -0.024,
            0.988, -0.023, -0.152,
            -1.000, 0.000, -0.024,
            -0.989, 0.001, -0.145,
            -1.000, -0.003, -0.024,
            -0.989, 0.001, -0.145,
            -0.988, -0.023, -0.152,
            -1.000, -0.003, -0.024,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            -0.000, 0.999, 0.035,
            0.000, 0.999, 0.035,
               -0.000, 0.999, 0.035
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
