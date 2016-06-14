function create_geometry_491(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -42.698, 126.972, -2.102,
            -42.698, 126.580, -2.494,
            -43.090, 126.972, -2.494,
            -42.698, 126.972, -2.102,
            -43.090, 126.972, -2.494,
            -42.698, 127.364, -2.494,
            -42.698, 126.972, -2.102,
            -42.698, 127.364, -2.494,
            -42.306, 126.972, -2.494,
            -42.698, 126.972, -2.102,
            -42.306, 126.972, -2.494,
            -42.698, 126.580, -2.494,
            -42.698, 126.972, -2.886,
            -43.090, 126.972, -2.494,
            -42.698, 126.580, -2.494,
            -42.698, 126.972, -2.886,
            -42.698, 127.364, -2.494,
            -43.090, 126.972, -2.494,
            -42.698, 126.972, -2.886,
            -42.306, 126.972, -2.494,
            -42.698, 127.364, -2.494,
            -42.698, 126.972, -2.886,
            -42.698, 126.580, -2.494,
               -42.306, 126.972, -2.494
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 1.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 1.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xD2F0F8,
            shininess: 2.000,
            ambient: 0xD2F0F8,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
