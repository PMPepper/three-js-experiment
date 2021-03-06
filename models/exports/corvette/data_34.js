function create_geometry_34(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.374, -7.867, -1.773,
            0.460, -11.192, -1.392,
            -0.374, -11.192, -1.392,
            0.460, -7.867, -1.773,
            0.460, -11.192, -1.392,
            -0.374, -7.867, -1.773,
            -0.338, 0.960, 1.419,
            -0.338, -0.242, 1.964,
            0.398, 0.952, 1.412,
            0.398, 0.952, 1.412,
            -0.338, -0.242, 1.964,
            0.398, -0.242, 1.964,
            -0.338, -0.242, 1.964,
            -0.338, -6.483, 1.964,
            0.398, -0.242, 1.964,
            0.398, -0.242, 1.964,
            -0.338, -6.483, 1.964,
            0.398, -6.483, 1.964,
            0.418, -0.242, -1.776,
            0.418, -6.483, -1.776,
            -0.318, -0.242, -1.776,
            -0.318, -0.242, -1.776,
            0.418, -6.483, -1.776,
            -0.318, -6.483, -1.776,
            0.564, -11.946, 1.329,
            -0.488, -9.348, 1.767,
            -0.488, -11.946, 1.329,
            0.564, -9.348, 1.767,
            -0.488, -9.348, 1.767,
            0.564, -11.946, 1.329,
            -0.476, -7.875, 1.896,
            0.540, -9.352, 1.735,
            0.540, -7.870, 1.884,
            -0.476, -9.352, 1.735,
            0.540, -9.352, 1.735,
               -0.476, -7.875, 1.896
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.114, -0.993,
            0.000, -0.114, -0.993,
            0.000, -0.114, -0.993,
            0.000, -0.114, -0.993,
            0.000, -0.114, -0.993,
            0.000, -0.114, -0.993,
            0.013, 0.413, 0.911,
            0.004, 0.417, 0.909,
            0.009, 0.415, 0.910,
            0.009, 0.415, 0.910,
            0.004, 0.417, 0.909,
            -0.000, 0.420, 0.908,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.008, -0.103, 0.995,
            0.005, -0.105, 0.994,
            0.013, -0.100, 0.995,
            0.000, -0.109, 0.994,
            0.005, -0.105, 0.994,
               0.008, -0.103, 0.995
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.109, 0.316,
               0.901, 0.058,
               0.109, 0.058,
               0.901, 0.316,
               0.901, 0.058,
               0.109, 0.316,
               0.143, 0.999,
               0.143, 0.906,
               0.842, 0.998,
               0.842, 0.998,
               0.143, 0.906,
               0.842, 0.906,
               0.143, 0.906,
               0.143, 0.423,
               0.842, 0.906,
               0.842, 0.906,
               0.143, 0.423,
               0.842, 0.423,
               0.861, 0.906,
               0.861, 0.423,
               0.162, 0.906,
               0.162, 0.906,
               0.861, 0.423,
               0.162, 0.423,
               1.000, 0.000,
               0.000, 0.201,
               0.000, 0.000,
               1.000, 0.201,
               0.000, 0.201,
               1.000, 0.000,
               0.012, 0.315,
               0.977, 0.201,
               0.977, 0.315,
               0.012, 0.201,
               0.977, 0.201,
               0.012, 0.315
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_SPINETOP.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
