function create_geometry_0(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -7.585, -2.773, 0.332,
            -8.239, -2.773, 0.332,
            -8.239, -2.773, 0.178,
            -7.585, -2.773, 0.332,
            -8.239, -2.773, 0.178,
            -7.585, -2.773, 0.178,
            -7.161, -2.758, -0.168,
            -7.546, -2.758, -0.168,
            -7.546, -2.758, -0.368,
            -7.161, -2.758, -0.168,
            -7.546, -2.758, -0.368,
            -7.161, -2.758, -0.368,
            -8.286, -2.758, -0.168,
            -8.655, -2.758, -0.168,
            -8.655, -2.758, -0.368,
            -8.286, -2.758, -0.168,
            -8.655, -2.758, -0.368,
               -8.286, -2.758, -0.368
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
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
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               8.916, 0.358,
               9.254, 0.358,
               9.254, 0.188,
               8.916, 0.358,
               9.254, 0.188,
               8.916, 0.188,
               8.698, -0.192,
               8.896, -0.192,
               8.896, -0.412,
               8.698, -0.192,
               8.896, -0.412,
               8.698, -0.412,
               9.278, -0.192,
               9.468, -0.192,
               9.468, -0.412,
               9.278, -0.192,
               9.468, -0.412,
               9.278, -0.412
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
