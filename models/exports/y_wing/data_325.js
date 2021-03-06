function create_geometry_325(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -84.279, 23.153, 39.498,
            82.248, 23.153, 37.773,
            82.169, 64.800, 37.773,
            -84.279, 23.153, 39.498,
            82.169, 64.800, 37.773,
            -84.279, 64.800, 39.498,
            -84.279, 23.153, 39.498,
            -86.280, 23.153, 36.585,
            -84.279, 20.240, 36.585,
            -84.279, 23.153, 39.498,
            -84.279, 20.240, 36.585,
            82.248, 20.240, 34.860,
            -84.279, 23.153, 39.498,
            82.248, 20.240, 34.860,
            82.248, 23.153, 37.773,
            82.248, 23.153, 37.773,
            82.248, 20.240, 34.860,
            84.248, 23.153, 34.860,
            82.248, 23.153, 37.773,
            84.248, 23.153, 34.860,
            84.351, 64.800, 34.860,
            82.248, 23.153, 37.773,
            84.351, 64.800, 34.860,
            82.169, 64.800, 37.773,
            82.169, 64.800, 37.773,
            84.351, 64.800, 34.860,
            82.169, 67.713, 34.860,
            82.169, 64.800, 37.773,
            82.169, 67.713, 34.860,
            -84.279, 67.713, 36.585,
            82.169, 64.800, 37.773,
            -84.279, 67.713, 36.585,
            -84.279, 64.800, 39.498,
            -84.279, 64.800, 39.498,
            -84.279, 67.713, 36.585,
            -86.280, 64.800, 36.585,
            -84.279, 64.800, 39.498,
            -86.280, 64.800, 36.585,
            -86.280, 23.153, 36.585,
            -84.279, 64.800, 39.498,
            -86.280, 23.153, 36.585,
            -84.279, 23.153, 39.498,
            -86.280, 23.153, 36.585,
            -86.280, 23.153, 27.981,
            -84.279, 20.240, 27.981,
            -86.280, 23.153, 36.585,
            -84.279, 20.240, 27.981,
            -84.279, 20.240, 36.585,
            -84.279, 20.240, 36.585,
            -84.279, 20.240, 27.981,
            82.248, 20.240, 27.981,
            -84.279, 20.240, 36.585,
            82.248, 20.240, 27.981,
            82.248, 20.240, 34.860,
            82.248, 20.240, 34.860,
            82.248, 20.240, 27.981,
            84.249, 23.153, 27.981,
            82.248, 20.240, 34.860,
            84.249, 23.153, 27.981,
            84.248, 23.153, 34.860,
            84.248, 23.153, 34.860,
            84.249, 23.153, 27.981,
            84.351, 64.800, 27.981,
            84.248, 23.153, 34.860,
            84.351, 64.800, 27.981,
            84.351, 64.800, 34.860,
            84.351, 64.800, 34.860,
            84.351, 64.800, 27.981,
            82.169, 67.713, 27.981,
            84.351, 64.800, 34.860,
            82.169, 67.713, 27.981,
            82.169, 67.713, 34.860,
            82.169, 67.713, 34.860,
            82.169, 67.713, 27.981,
            -84.279, 67.713, 27.981,
            82.169, 67.713, 34.860,
            -84.279, 67.713, 27.981,
            -84.279, 67.713, 36.585,
            -84.279, 67.713, 36.585,
            -84.279, 67.713, 27.981,
            -86.280, 64.800, 27.981,
            -84.279, 67.713, 36.585,
            -86.280, 64.800, 27.981,
            -86.280, 64.800, 36.585,
            -86.280, 64.800, 36.585,
            -86.280, 64.800, 27.981,
            -86.280, 23.153, 27.981,
            -86.280, 64.800, 36.585,
            -86.280, 23.153, 27.981,
               -86.280, 23.153, 36.585
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.010, 0.000, 1.000,
            0.010, 0.000, 1.000,
            0.010, 0.000, 1.000,
            0.010, -0.000, 1.000,
            0.010, -0.000, 1.000,
            0.010, -0.000, 1.000,
            -0.717, -0.493, 0.493,
            -0.717, -0.493, 0.493,
            -0.717, -0.493, 0.493,
            0.007, -0.707, 0.707,
            0.007, -0.707, 0.707,
            0.007, -0.707, 0.707,
            0.007, -0.707, 0.707,
            0.007, -0.707, 0.707,
            0.007, -0.707, 0.707,
            0.717, -0.493, 0.493,
            0.717, -0.493, 0.493,
            0.717, -0.493, 0.493,
            0.824, -0.002, 0.566,
            0.824, -0.002, 0.566,
            0.824, -0.002, 0.566,
            0.800, 0.002, 0.600,
            0.800, 0.002, 0.600,
            0.800, 0.002, 0.600,
            0.686, 0.514, 0.514,
            0.686, 0.514, 0.514,
            0.686, 0.514, 0.514,
            0.007, 0.707, 0.707,
            0.007, 0.707, 0.707,
            0.007, 0.707, 0.707,
            0.007, 0.707, 0.707,
            0.007, 0.707, 0.707,
            0.007, 0.707, 0.707,
            -0.717, 0.493, 0.493,
            -0.717, 0.493, 0.493,
            -0.717, 0.493, 0.493,
            -0.824, 0.000, 0.566,
            -0.824, 0.000, 0.566,
            -0.824, 0.000, 0.566,
            -0.824, 0.000, 0.566,
            -0.824, 0.000, 0.566,
            -0.824, 0.000, 0.566,
            -0.824, -0.566, -0.000,
            -0.824, -0.566, 0.000,
            -0.824, -0.566, 0.000,
            -0.824, -0.566, 0.000,
            -0.824, -0.566, 0.000,
            -0.824, -0.566, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.824, -0.566, 0.000,
            0.824, -0.566, 0.000,
            0.824, -0.566, 0.000,
            0.824, -0.566, 0.000,
            0.824, -0.566, 0.000,
            0.824, -0.566, 0.000,
            1.000, -0.002, 0.000,
            1.000, -0.002, 0.000,
            1.000, -0.002, 0.000,
            1.000, -0.002, 0.000,
            1.000, -0.002, 0.000,
            1.000, -0.002, 0.000,
            0.800, 0.600, 0.000,
            0.800, 0.600, -0.000,
            0.800, 0.600, 0.000,
            0.800, 0.600, 0.000,
            0.800, 0.600, -0.000,
            0.800, 0.600, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            -0.824, 0.566, 0.000,
            -0.824, 0.566, 0.000,
            -0.824, 0.566, 0.000,
            -0.824, 0.566, -0.000,
            -0.824, 0.566, -0.000,
            -0.824, 0.566, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
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
