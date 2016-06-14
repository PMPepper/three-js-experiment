function create_geometry_592(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            60.691, 70.416, 16.333,
            60.673, 69.999, 15.916,
            60.274, 70.434, 15.916,
            60.691, 70.416, 16.333,
            60.274, 70.434, 15.916,
            60.709, 70.833, 15.916,
            60.691, 70.416, 16.333,
            60.709, 70.833, 15.916,
            61.108, 70.398, 15.916,
            60.691, 70.416, 16.333,
            61.108, 70.398, 15.916,
            60.673, 69.999, 15.916,
            60.691, 70.416, 15.498,
            60.274, 70.434, 15.916,
            60.673, 69.999, 15.916,
            60.691, 70.416, 15.498,
            60.709, 70.833, 15.916,
            60.274, 70.434, 15.916,
            60.691, 70.416, 15.498,
            61.108, 70.398, 15.916,
            60.709, 70.833, 15.916,
            60.691, 70.416, 15.498,
            60.673, 69.999, 15.916,
               61.108, 70.398, 15.916
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.044, 0.999, 0.000,
            0.999, -0.044, 0.000,
            0.000, 0.000, -1.000,
            0.999, -0.044, 0.000,
            -0.044, -0.999, 0.000,
            0.000, 0.000, -1.000,
            -0.044, -0.999, 0.000,
            -0.999, 0.044, -0.000,
            0.000, 0.000, -1.000,
            -0.999, 0.044, -0.000,
            0.044, 0.999, 0.000,
            0.000, 0.000, 1.000,
            0.999, -0.044, 0.000,
            0.044, 0.999, 0.000,
            0.000, 0.000, 1.000,
            -0.044, -0.999, 0.000,
            0.999, -0.044, 0.000,
            0.000, 0.000, 1.000,
            -0.999, 0.044, -0.000,
            -0.044, -0.999, 0.000,
            0.000, 0.000, 1.000,
            0.044, 0.999, 0.000,
               -0.999, 0.044, -0.000
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