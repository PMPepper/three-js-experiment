function create_geometry_447(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            20.645, 333.144, 65.413,
            20.645, 383.697, 65.413,
            -20.672, 383.697, 65.413,
            -20.672, 383.697, 65.413,
            -20.672, 333.144, 65.413,
            20.645, 333.144, 65.413,
            20.645, 383.697, 65.413,
            108.511, 422.146, 36.323,
            108.511, 322.496, 36.323,
            108.511, 322.496, 36.323,
            20.645, 333.144, 65.413,
            20.645, 383.697, 65.413,
            108.511, 422.146, 36.323,
            -108.537, 422.146, 36.323,
            -20.672, 383.697, 65.413,
            -20.672, 383.697, 65.413,
            20.645, 383.697, 65.413,
            108.511, 422.146, 36.323,
            -20.672, 333.144, 65.413,
            -108.537, 322.496, 36.323,
            -108.537, 422.146, 36.323,
            -108.537, 422.146, 36.323,
            -20.672, 383.697, 65.413,
            -20.672, 333.144, 65.413,
            20.645, 333.144, 65.413,
            108.511, 322.496, 36.323,
            -108.537, 322.496, 36.323,
            20.645, 333.144, 65.413,
            -20.672, 333.144, 65.413,
               -108.537, 322.496, 36.323
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.314, -0.000, -0.949,
            -0.314, -0.000, -0.949,
            -0.314, -0.000, -0.949,
            -0.314, -0.000, -0.949,
            -0.314, 0.000, -0.949,
            -0.314, 0.000, -0.949,
            -0.000, 0.603, 0.797,
            -0.000, 0.603, 0.797,
            -0.000, 0.603, 0.797,
            -0.000, 0.603, 0.797,
            0.000, 0.603, 0.797,
            0.000, 0.603, 0.797,
            0.314, -0.000, -0.949,
            0.314, -0.000, -0.949,
            0.314, -0.000, -0.949,
            0.314, -0.000, -0.949,
            0.314, -0.000, -0.949,
            0.314, -0.000, -0.949,
            0.000, 0.939, -0.344,
            0.000, 0.939, -0.344,
            0.000, 0.939, -0.344,
            0.000, -0.939, 0.344,
            0.000, -0.939, 0.344,
               0.000, -0.939, 0.344
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
