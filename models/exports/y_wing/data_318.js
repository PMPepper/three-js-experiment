function create_geometry_318(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -34.057, 351.795, 65.407,
            -69.521, 351.795, 65.407,
            -69.521, 330.906, 65.407,
            -69.521, 330.906, 65.407,
            -34.057, 330.906, 65.407,
            -34.057, 351.795, 65.407,
            -69.521, 351.795, 65.407,
            -116.162, 361.636, 36.318,
            -116.162, 320.257, 36.318,
            -116.162, 320.257, 36.318,
            -69.521, 330.906, 65.407,
            -69.521, 351.795, 65.407,
            -34.057, 351.795, 65.407,
            -27.037, 361.636, 36.318,
            -116.162, 361.636, 36.318,
            -116.162, 361.636, 36.318,
            -69.521, 351.795, 65.407,
            -34.057, 351.795, 65.407,
            -27.037, 361.636, 36.318,
            -27.037, 320.257, 36.318,
            -34.057, 330.906, 65.407,
            -27.037, 361.636, 36.318,
            -34.057, 351.795, 65.407,
            -34.057, 330.906, 65.407,
            -69.521, 330.906, 65.407,
            -116.162, 320.257, 36.318,
            -27.037, 320.257, 36.318,
            -27.037, 320.257, 36.318,
            -34.057, 330.906, 65.407,
               -69.521, 330.906, 65.407
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.529, -0.000, -0.848,
            0.529, -0.000, -0.848,
            0.529, -0.000, -0.848,
            0.529, -0.000, -0.848,
            0.529, -0.000, -0.848,
            0.529, -0.000, -0.848,
            -0.000, 0.947, -0.320,
            -0.000, 0.947, -0.320,
            -0.000, 0.947, -0.320,
            -0.000, 0.947, -0.320,
            -0.000, 0.947, -0.320,
            -0.000, 0.947, -0.320,
            0.972, -0.000, 0.235,
            0.972, -0.000, 0.235,
            0.972, -0.000, 0.235,
            -0.972, -0.000, -0.235,
            -0.972, -0.000, -0.235,
            -0.972, -0.000, -0.235,
            0.000, -0.939, -0.344,
            0.000, -0.939, -0.344,
            0.000, -0.939, -0.344,
            0.000, -0.939, -0.344,
            0.000, -0.939, -0.344,
               0.000, -0.939, -0.344
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
