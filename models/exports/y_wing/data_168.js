function create_geometry_168(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -17.220, -473.637, 83.991,
            -15.159, -472.910, 87.001,
            -16.326, -464.778, 88.000,
            -16.326, -464.778, 88.000,
            -17.220, -462.766, 85.326,
            -17.220, -473.637, 83.991,
            -11.071, -473.637, 83.991,
            -11.071, -462.766, 85.326,
            -11.965, -464.778, 88.000,
            -11.965, -464.778, 88.000,
            -13.131, -472.910, 87.001,
            -11.071, -473.637, 83.991,
            -17.220, -462.766, 85.326,
            -16.326, -464.778, 88.000,
            -11.965, -464.778, 88.000,
            -11.965, -464.778, 88.000,
            -11.071, -462.766, 85.326,
            -17.220, -462.766, 85.326,
            -16.326, -464.778, 88.000,
            -15.159, -472.910, 87.001,
            -13.131, -472.910, 87.001,
            -13.131, -472.910, 87.001,
            -11.965, -464.778, 88.000,
            -16.326, -464.778, 88.000,
            -15.159, -472.910, 87.001,
            -17.220, -473.637, 83.991,
            -11.071, -473.637, 83.991,
            -11.071, -473.637, 83.991,
            -13.131, -472.910, 87.001,
               -15.159, -472.910, 87.001
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.841, -0.151, 0.520,
            -0.790, -0.185, 0.585,
            -0.935, -0.063, 0.348,
            -0.935, -0.063, 0.348,
            -0.956, -0.036, 0.293,
            -0.841, -0.151, 0.520,
            0.841, -0.151, 0.520,
            0.956, -0.036, 0.293,
            0.935, -0.063, 0.348,
            0.935, -0.063, 0.348,
            0.790, -0.185, 0.585,
            0.841, -0.151, 0.520,
            0.000, 0.799, 0.601,
            0.000, 0.799, 0.601,
            0.000, 0.799, 0.601,
            0.000, 0.799, 0.601,
            0.000, 0.799, 0.601,
            0.000, 0.799, 0.601,
            0.000, -0.122, 0.993,
            0.000, -0.122, 0.993,
            0.000, -0.122, 0.993,
            0.000, -0.122, 0.993,
            0.000, -0.122, 0.993,
            0.000, -0.122, 0.993,
            0.000, -0.972, 0.235,
            0.000, -0.972, 0.235,
            0.000, -0.972, 0.235,
            0.000, -0.972, 0.235,
            0.000, -0.972, 0.235,
               0.000, -0.972, 0.235
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
