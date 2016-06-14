function create_geometry_295(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -93.325, -82.088, 12.215,
            -88.558, -82.088, 9.731,
            -93.325, -45.962, 12.215,
            -88.558, -82.088, 9.731,
            -88.558, -45.962, 9.731,
            -93.325, -45.962, 12.215,
            -95.178, -82.088, -1.072,
            -99.556, -82.088, 2.047,
            -95.178, -45.962, -1.072,
            -99.556, -82.088, 2.047,
            -99.556, -45.962, 2.047,
            -95.178, -45.962, -1.072,
            -99.556, -82.088, 2.047,
            -101.264, -82.088, 3.627,
            -99.556, -45.962, 2.047,
            -101.264, -82.088, 3.627,
            -101.264, -45.962, 3.627,
            -99.556, -45.962, 2.047,
            -101.264, -82.088, 3.627,
            -102.238, -82.088, 5.739,
            -101.264, -45.962, 3.627,
            -102.238, -82.088, 5.739,
            -102.238, -45.962, 5.739,
            -101.264, -45.962, 3.627,
            -102.238, -82.088, 5.739,
            -102.330, -82.088, 8.064,
            -102.238, -45.962, 5.739,
            -102.330, -82.088, 8.064,
            -102.330, -45.962, 8.064,
            -102.238, -45.962, 5.739,
            -102.330, -82.088, 8.064,
            -101.525, -82.088, 10.247,
            -102.330, -45.962, 8.064,
            -101.525, -82.088, 10.247,
            -101.525, -45.962, 10.247,
            -102.330, -45.962, 8.064,
            -101.525, -82.088, 10.247,
            -99.945, -82.088, 11.955,
            -101.525, -45.962, 10.247,
            -99.945, -82.088, 11.955,
            -99.945, -45.962, 11.955,
            -101.525, -45.962, 10.247,
            -99.945, -82.088, 11.955,
            -97.833, -82.088, 12.929,
            -99.945, -45.962, 11.955,
            -97.833, -82.088, 12.929,
            -97.833, -45.962, 12.929,
            -99.945, -45.962, 11.955,
            -97.833, -82.088, 12.929,
            -95.508, -82.088, 13.020,
            -97.833, -45.962, 12.929,
            -95.508, -82.088, 13.020,
            -95.508, -45.962, 13.020,
            -97.833, -45.962, 12.929,
            -95.508, -82.088, 13.020,
            -93.325, -82.088, 12.215,
            -95.508, -45.962, 13.020,
            -93.325, -82.088, 12.215,
            -93.325, -45.962, 12.215,
            -95.508, -45.962, 13.020,
            -88.558, -82.088, 9.731,
            -93.325, -82.088, 12.215,
            -96.441, -85.730, 7.131,
            -99.556, -82.088, 2.047,
            -95.178, -82.088, -1.072,
            -96.441, -85.730, 7.131,
            -101.264, -82.088, 3.627,
            -99.556, -82.088, 2.047,
            -96.441, -85.730, 7.131,
            -102.238, -82.088, 5.739,
            -101.264, -82.088, 3.627,
            -96.441, -85.730, 7.131,
            -102.330, -82.088, 8.064,
            -102.238, -82.088, 5.739,
            -96.441, -85.730, 7.131,
            -101.525, -82.088, 10.247,
            -102.330, -82.088, 8.064,
            -96.441, -85.730, 7.131,
            -99.945, -82.088, 11.955,
            -101.525, -82.088, 10.247,
            -96.441, -85.730, 7.131,
            -97.833, -82.088, 12.929,
            -99.945, -82.088, 11.955,
            -96.441, -85.730, 7.131,
            -95.508, -82.088, 13.020,
            -97.833, -82.088, 12.929,
            -96.441, -85.730, 7.131,
            -93.325, -82.088, 12.215,
            -95.508, -82.088, 13.020,
               -96.441, -85.730, 7.131
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.631, -0.000, 0.776,
            0.580, -0.000, 0.814,
            0.631, -0.000, 0.776,
            0.580, -0.000, 0.814,
            0.580, -0.000, 0.814,
            0.631, -0.000, 0.776,
            -0.462, -0.000, -0.887,
            -0.405, -0.000, -0.914,
            -0.462, 0.000, -0.887,
            -0.405, -0.000, -0.914,
            -0.405, 0.000, -0.914,
            -0.462, 0.000, -0.887,
            -0.405, -0.000, -0.914,
            -0.156, 0.000, -0.988,
            -0.405, 0.000, -0.914,
            -0.156, 0.000, -0.988,
            -0.156, 0.000, -0.988,
            -0.405, 0.000, -0.914,
            -0.156, 0.000, -0.988,
            0.233, 0.000, -0.972,
            -0.156, 0.000, -0.988,
            0.233, 0.000, -0.972,
            0.233, 0.000, -0.972,
            -0.156, 0.000, -0.988,
            0.233, 0.000, -0.972,
            0.588, 0.000, -0.809,
            0.233, 0.000, -0.972,
            0.588, 0.000, -0.809,
            0.588, 0.000, -0.809,
            0.233, 0.000, -0.972,
            0.588, 0.000, -0.809,
            0.853, 0.000, -0.522,
            0.588, 0.000, -0.809,
            0.853, 0.000, -0.522,
            0.853, 0.000, -0.522,
            0.588, 0.000, -0.809,
            0.853, 0.000, -0.522,
            0.988, 0.000, -0.156,
            0.853, 0.000, -0.522,
            0.988, 0.000, -0.156,
            0.988, 0.000, -0.156,
            0.853, 0.000, -0.522,
            0.988, 0.000, -0.156,
            0.972, 0.000, 0.233,
            0.988, 0.000, -0.156,
            0.972, 0.000, 0.233,
            0.972, 0.000, 0.233,
            0.988, 0.000, -0.156,
            0.972, 0.000, 0.233,
            0.809, 0.000, 0.588,
            0.972, 0.000, 0.233,
            0.809, 0.000, 0.588,
            0.809, 0.000, 0.588,
            0.972, 0.000, 0.233,
            0.809, 0.000, 0.588,
            0.631, -0.000, 0.776,
            0.809, 0.000, 0.588,
            0.631, -0.000, 0.776,
            0.631, -0.000, 0.776,
            0.809, 0.000, 0.588,
            0.303, 0.853, 0.425,
            0.329, 0.851, 0.408,
            0.233, 0.962, -0.143,
            -0.214, 0.851, -0.479,
            -0.241, 0.853, -0.463,
            0.233, 0.962, -0.143,
            -0.082, 0.853, -0.515,
            -0.214, 0.851, -0.479,
            0.233, 0.962, -0.143,
            0.122, 0.853, -0.507,
            -0.082, 0.853, -0.515,
            0.233, 0.962, -0.143,
            0.306, 0.853, -0.422,
            0.122, 0.853, -0.507,
            0.233, 0.962, -0.143,
            0.444, 0.853, -0.272,
            0.306, 0.853, -0.422,
            0.233, 0.962, -0.143,
            0.515, 0.853, -0.082,
            0.444, 0.853, -0.272,
            0.233, 0.962, -0.143,
            0.507, 0.853, 0.122,
            0.515, 0.853, -0.082,
            0.233, 0.962, -0.143,
            0.422, 0.853, 0.306,
            0.507, 0.853, 0.122,
            0.233, 0.962, -0.143,
            0.329, 0.851, 0.408,
            0.422, 0.853, 0.306,
               0.233, 0.962, -0.143
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