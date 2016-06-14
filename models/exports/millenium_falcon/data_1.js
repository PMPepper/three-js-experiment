function create_geometry_1(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -8.455, -2.758, 0.047,
            -8.609, -2.758, 0.047,
            -8.609, -2.758, -0.122,
            -8.455, -2.758, 0.047,
            -8.609, -2.758, -0.122,
            -8.455, -2.758, -0.122,
            -7.223, -2.758, 0.047,
            -7.392, -2.758, 0.047,
            -7.392, -2.758, -0.122,
            -7.223, -2.758, 0.047,
            -7.392, -2.758, -0.122,
            -7.223, -2.758, -0.122,
            -8.286, -2.758, 0.232,
            -8.424, -2.758, 0.232,
            -8.424, -2.758, -0.122,
            -8.286, -2.758, 0.232,
            -8.424, -2.758, -0.122,
            -8.286, -2.758, -0.122,
            -7.423, -2.758, 0.232,
            -7.546, -2.758, 0.232,
            -7.546, -2.758, -0.122,
            -7.423, -2.758, 0.232,
            -7.546, -2.758, -0.122,
            -7.423, -2.758, -0.122,
            -8.575, -2.735, -1.135,
            -8.575, -2.735, 0.206,
            -8.787, -2.735, -0.826,
            -8.575, -2.735, -1.135,
            -8.266, -2.735, -1.347,
            -8.575, -2.735, 0.206,
            -8.266, -2.735, -1.347,
            -8.266, -2.735, 0.410,
            -8.575, -2.735, 0.206,
            -7.687, -2.735, 0.150,
            -7.687, -2.735, -0.702,
            -8.152, -2.735, 0.150,
            -7.687, -2.735, -0.702,
            -8.152, -2.735, -0.702,
            -8.152, -2.735, 0.150,
            -8.266, -2.735, -1.347,
            -7.904, -2.735, -1.416,
            -8.266, -2.735, 0.410,
            -7.904, -2.735, -1.416,
            -7.904, -2.735, 0.471,
            -8.266, -2.735, 0.410,
            -7.904, -2.735, -1.416,
            -7.535, -2.735, -1.347,
            -7.904, -2.735, 0.471,
            -7.535, -2.735, -1.347,
            -7.527, -2.735, 0.410,
            -7.904, -2.735, 0.471,
            -7.535, -2.735, -1.347,
            -7.219, -2.735, -1.143,
            -7.527, -2.735, 0.410,
            -7.219, -2.735, -1.143,
            -7.226, -2.735, 0.198,
            -7.527, -2.735, 0.410,
            -7.219, -2.735, -1.143,
            -7.007, -2.735, -0.119,
            -7.226, -2.735, 0.198,
            -7.219, -2.735, -1.143,
            -7.015, -2.735, -0.834,
            -7.007, -2.735, -0.119,
            -7.015, -2.735, -0.834,
            -6.938, -2.735, -0.472,
            -7.007, -2.735, -0.119,
            -8.575, -2.735, 0.206,
            -8.787, -2.735, -0.111,
            -8.787, -2.735, -0.826,
            -8.787, -2.735, -0.111,
            -8.863, -2.735, -0.472,
               -8.787, -2.735, -0.826
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               7.375, 0.572,
               7.437, 0.572,
               7.437, 0.502,
               7.375, 0.572,
               7.437, 0.502,
               7.375, 0.502,
               6.882, 0.572,
               6.950, 0.572,
               6.950, 0.502,
               6.882, 0.572,
               6.950, 0.502,
               6.882, 0.502,
               7.307, 0.647,
               7.363, 0.647,
               7.363, 0.502,
               7.307, 0.647,
               7.363, 0.502,
               7.307, 0.502,
               6.962, 0.647,
               7.012, 0.647,
               7.012, 0.502,
               6.962, 0.647,
               7.012, 0.502,
               6.962, 0.502,
               7.423, 0.089,
               7.423, 0.636,
               7.508, 0.215,
               7.423, 0.089,
               7.300, 0.003,
               7.423, 0.636,
               7.300, 0.003,
               7.300, 0.720,
               7.423, 0.636,
               7.068, 0.613,
               7.068, 0.266,
               7.254, 0.613,
               7.068, 0.266,
               7.254, 0.266,
               7.254, 0.613,
               7.300, 0.003,
               7.155, -0.026,
               7.300, 0.720,
               7.155, -0.026,
               7.155, 0.744,
               7.300, 0.720,
               7.155, -0.026,
               7.007, 0.003,
               7.155, 0.744,
               7.007, 0.003,
               7.004, 0.720,
               7.155, 0.744,
               7.007, 0.003,
               6.881, 0.086,
               7.004, 0.720,
               6.881, 0.086,
               6.884, 0.633,
               7.004, 0.720,
               6.881, 0.086,
               6.796, 0.504,
               6.884, 0.633,
               6.881, 0.086,
               6.799, 0.212,
               6.796, 0.504,
               6.799, 0.212,
               6.768, 0.359,
               6.796, 0.504,
               7.423, 0.636,
               7.508, 0.507,
               7.508, 0.215,
               7.508, 0.507,
               7.538, 0.359,
               7.508, 0.215
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_CABINBAC.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
