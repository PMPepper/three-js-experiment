function create_geometry_45(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            51.254, -480.724, 42.982,
            42.339, -569.919, 37.512,
            25.900, -569.104, 62.399,
            51.254, -480.724, 42.982,
            25.900, -569.104, 62.399,
            27.152, -484.569, 80.150,
            -24.680, -483.957, 79.836,
            -50.624, -481.694, 41.642,
            -41.677, -568.875, 36.539,
            -23.768, -570.091, 62.062,
            -24.680, -483.957, 79.836,
               -41.677, -568.875, 36.539
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.836, 0.104, 0.539,
            0.827, 0.097, 0.554,
            0.830, 0.099, 0.549,
            0.836, 0.104, 0.539,
            0.830, 0.099, 0.549,
            0.838, 0.105, 0.535,
            0.823, -0.099, -0.560,
            0.825, -0.098, -0.557,
            0.818, -0.103, -0.566,
            0.815, -0.106, -0.570,
            0.823, -0.099, -0.560,
               0.818, -0.103, -0.566
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x2C374A,
            shininess: 50.000,
            ambient: 0x030303,
            transparent: true,
            opacity: 0.400,
            side: THREE.DoubleSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
