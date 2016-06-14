function create_geometry_436(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            28.125, -180.404, 45.264,
            35.173, -180.404, 45.264,
            35.173, -144.451, 45.264,
            28.125, -180.404, 45.264,
            35.173, -144.451, 45.264,
            28.125, -144.451, 45.264,
            28.125, -180.404, 45.264,
            28.125, -181.704, 43.379,
            35.173, -181.704, 43.379,
            28.125, -180.404, 45.264,
            35.173, -181.704, 43.379,
            35.173, -180.404, 45.264,
            35.173, -180.404, 45.264,
            35.173, -181.704, 43.379,
            36.473, -180.404, 43.379,
            35.173, -180.404, 45.264,
            36.473, -180.404, 43.379,
            36.473, -144.451, 43.379,
            35.173, -180.404, 45.264,
            36.473, -144.451, 43.379,
            35.173, -144.451, 45.264,
            35.173, -144.451, 45.264,
            36.473, -144.451, 43.379,
            35.173, -143.151, 43.379,
            35.173, -144.451, 45.264,
            35.173, -143.151, 43.379,
            28.125, -143.151, 43.379,
            35.173, -144.451, 45.264,
            28.125, -143.151, 43.379,
            28.125, -144.451, 45.264,
            28.125, -181.704, 43.379,
            28.125, -181.704, 29.382,
            35.173, -181.704, 29.382,
            28.125, -181.704, 43.379,
            35.173, -181.704, 29.382,
            35.173, -181.704, 43.379,
            35.173, -181.704, 43.379,
            35.173, -181.704, 29.382,
            36.473, -180.404, 29.382,
            35.173, -181.704, 43.379,
            36.473, -180.404, 29.382,
            36.473, -180.404, 43.379,
            36.473, -180.404, 43.379,
            36.473, -180.404, 29.382,
            36.473, -144.451, 29.382,
            36.473, -180.404, 43.379,
            36.473, -144.451, 29.382,
            36.473, -144.451, 43.379,
            36.473, -144.451, 43.379,
            36.473, -144.451, 29.382,
            35.173, -143.151, 29.382,
            36.473, -144.451, 43.379,
            35.173, -143.151, 29.382,
            35.173, -143.151, 43.379,
            35.173, -143.151, 43.379,
            35.173, -143.151, 29.382,
            28.125, -143.151, 29.382,
            35.173, -143.151, 43.379,
            28.125, -143.151, 29.382,
               28.125, -143.151, 43.379
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.823, 0.568,
            0.000, -0.823, 0.568,
            0.000, -0.823, 0.568,
            0.000, -0.823, 0.568,
            0.000, -0.823, 0.568,
            0.000, -0.823, 0.568,
            0.636, -0.636, 0.438,
            0.636, -0.636, 0.438,
            0.636, -0.636, 0.438,
            0.823, -0.000, 0.568,
            0.823, -0.000, 0.568,
            0.823, -0.000, 0.568,
            0.823, -0.000, 0.568,
            0.823, -0.000, 0.568,
            0.823, -0.000, 0.568,
            0.636, 0.636, 0.438,
            0.636, 0.636, 0.438,
            0.636, 0.636, 0.438,
            0.000, 0.823, 0.568,
            0.000, 0.823, 0.568,
            -0.000, 0.823, 0.568,
            0.000, 0.823, 0.568,
            0.000, 0.823, 0.568,
            0.000, 0.823, 0.568,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.707, -0.707, -0.000,
            0.707, -0.707, -0.000,
            0.707, -0.707, -0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
               -0.000, 1.000, 0.000
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