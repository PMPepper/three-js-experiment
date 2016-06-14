function create_geometry_300(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            96.919, -50.807, 32.027,
            92.515, -86.932, 35.108,
            96.919, -86.932, 32.027,
            96.919, -50.807, 32.027,
            92.515, -50.807, 35.108,
            92.515, -86.932, 35.108,
            85.989, -50.807, 24.248,
            90.778, -86.932, 21.806,
            85.989, -86.932, 24.248,
            85.989, -50.807, 24.248,
            90.778, -50.807, 21.806,
            90.778, -86.932, 21.806,
            90.778, -50.807, 21.806,
            92.967, -86.932, 21.019,
            90.778, -86.932, 21.806,
            90.778, -50.807, 21.806,
            92.967, -50.807, 21.019,
            92.967, -86.932, 21.019,
            92.967, -50.807, 21.019,
            95.291, -86.932, 21.131,
            92.967, -86.932, 21.019,
            92.967, -50.807, 21.019,
            95.291, -50.807, 21.131,
            95.291, -86.932, 21.131,
            95.291, -50.807, 21.131,
            97.395, -86.932, 22.123,
            95.291, -86.932, 21.131,
            95.291, -50.807, 21.131,
            97.395, -50.807, 22.123,
            97.395, -86.932, 22.123,
            97.395, -50.807, 22.123,
            98.959, -86.932, 23.845,
            97.395, -86.932, 22.123,
            97.395, -50.807, 22.123,
            98.959, -50.807, 23.845,
            98.959, -86.932, 23.845,
            98.959, -50.807, 23.845,
            99.746, -86.932, 26.035,
            98.959, -86.932, 23.845,
            98.959, -50.807, 23.845,
            99.746, -50.807, 26.035,
            99.746, -86.932, 26.035,
            99.746, -50.807, 26.035,
            99.634, -86.932, 28.359,
            99.746, -86.932, 26.035,
            99.746, -50.807, 26.035,
            99.634, -50.807, 28.359,
            99.634, -86.932, 28.359,
            99.634, -50.807, 28.359,
            98.642, -86.932, 30.463,
            99.634, -86.932, 28.359,
            99.634, -50.807, 28.359,
            98.642, -50.807, 30.463,
            98.642, -86.932, 30.463,
            98.642, -50.807, 30.463,
            96.919, -86.932, 32.027,
            98.642, -86.932, 30.463,
            98.642, -50.807, 30.463,
            96.919, -50.807, 32.027,
            96.919, -86.932, 32.027,
            93.849, -90.574, 26.916,
            96.919, -86.932, 32.027,
            92.515, -86.932, 35.108,
            93.849, -90.574, 26.916,
            85.989, -86.932, 24.248,
            90.778, -86.932, 21.806,
            93.849, -90.574, 26.916,
            90.778, -86.932, 21.806,
            92.967, -86.932, 21.019,
            93.849, -90.574, 26.916,
            92.967, -86.932, 21.019,
            95.291, -86.932, 21.131,
            93.849, -90.574, 26.916,
            95.291, -86.932, 21.131,
            97.395, -86.932, 22.123,
            93.849, -90.574, 26.916,
            97.395, -86.932, 22.123,
            98.959, -86.932, 23.845,
            93.849, -90.574, 26.916,
            98.959, -86.932, 23.845,
            99.746, -86.932, 26.035,
            93.849, -90.574, 26.916,
            99.746, -86.932, 26.035,
            99.634, -86.932, 28.359,
            93.849, -90.574, 26.916,
            99.634, -86.932, 28.359,
            98.642, -86.932, 30.463,
            93.849, -90.574, 26.916,
            98.642, -86.932, 30.463,
               96.919, -86.932, 32.027
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.624, -0.000, 0.781,
            0.573, -0.000, 0.819,
            0.624, -0.000, 0.781,
            0.624, -0.000, 0.781,
            0.573, -0.000, 0.819,
            0.573, -0.000, 0.819,
            -0.454, 0.000, -0.891,
            -0.397, 0.000, -0.918,
            -0.454, 0.000, -0.891,
            -0.454, 0.000, -0.891,
            -0.397, 0.000, -0.918,
            -0.397, 0.000, -0.918,
            -0.397, 0.000, -0.918,
            -0.148, 0.000, -0.989,
            -0.397, 0.000, -0.918,
            -0.397, 0.000, -0.918,
            -0.148, 0.000, -0.989,
            -0.148, 0.000, -0.989,
            -0.148, 0.000, -0.989,
            0.242, -0.000, -0.970,
            -0.148, 0.000, -0.989,
            -0.148, 0.000, -0.989,
            0.242, 0.000, -0.970,
            0.242, -0.000, -0.970,
            0.242, 0.000, -0.970,
            0.595, -0.000, -0.804,
            0.242, -0.000, -0.970,
            0.242, 0.000, -0.970,
            0.595, -0.000, -0.804,
            0.595, -0.000, -0.804,
            0.595, -0.000, -0.804,
            0.857, -0.000, -0.515,
            0.595, -0.000, -0.804,
            0.595, -0.000, -0.804,
            0.857, -0.000, -0.515,
            0.857, -0.000, -0.515,
            0.857, -0.000, -0.515,
            0.989, -0.000, -0.148,
            0.857, -0.000, -0.515,
            0.857, -0.000, -0.515,
            0.989, -0.000, -0.148,
            0.989, -0.000, -0.148,
            0.989, -0.000, -0.148,
            0.970, -0.000, 0.242,
            0.989, -0.000, -0.148,
            0.989, -0.000, -0.148,
            0.970, -0.000, 0.242,
            0.970, -0.000, 0.242,
            0.970, -0.000, 0.242,
            0.804, -0.000, 0.595,
            0.970, -0.000, 0.242,
            0.970, -0.000, 0.242,
            0.804, -0.000, 0.595,
            0.804, -0.000, 0.595,
            0.804, -0.000, 0.595,
            0.624, -0.000, 0.781,
            0.804, -0.000, 0.595,
            0.804, -0.000, 0.595,
            0.624, -0.000, 0.781,
            0.624, -0.000, 0.781,
            0.234, -0.962, -0.141,
            0.325, -0.851, 0.411,
            0.299, -0.853, 0.428,
            0.234, -0.962, -0.141,
            -0.237, -0.853, -0.465,
            -0.210, -0.851, -0.480,
            0.234, -0.962, -0.141,
            -0.210, -0.851, -0.480,
            -0.077, -0.853, -0.516,
            0.234, -0.962, -0.141,
            -0.077, -0.853, -0.516,
            0.126, -0.853, -0.506,
            0.234, -0.962, -0.141,
            0.126, -0.853, -0.506,
            0.310, -0.853, -0.419,
            0.234, -0.962, -0.141,
            0.310, -0.853, -0.419,
            0.447, -0.853, -0.268,
            0.234, -0.962, -0.141,
            0.447, -0.853, -0.268,
            0.516, -0.853, -0.077,
            0.234, -0.962, -0.141,
            0.516, -0.853, -0.077,
            0.506, -0.853, 0.126,
            0.234, -0.962, -0.141,
            0.506, -0.853, 0.126,
            0.419, -0.853, 0.310,
            0.234, -0.962, -0.141,
            0.419, -0.853, 0.310,
               0.325, -0.851, 0.411
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
