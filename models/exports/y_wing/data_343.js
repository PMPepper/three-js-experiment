function create_geometry_343(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            267.997, 241.088, -24.082,
            267.997, 183.146, -24.082,
            196.131, 183.146, -24.082,
            196.131, 183.146, -24.082,
            196.131, 241.088, -24.082,
            267.997, 241.088, -24.082,
            267.997, 241.088, 0.699,
            196.131, 241.088, 0.699,
            196.131, 183.146, 0.699,
            196.131, 183.146, 0.699,
            267.997, 183.146, 0.699,
            267.997, 241.088, 0.699,
            196.131, 241.088, 0.699,
            196.131, 241.088, -24.082,
            196.131, 183.146, -24.082,
            196.131, 183.146, -24.082,
            196.131, 183.146, 0.699,
            196.131, 241.088, 0.699,
            267.997, 241.088, 0.699,
            267.997, 241.088, -24.082,
            196.131, 241.088, -24.082,
            196.131, 241.088, -24.082,
            196.131, 241.088, 0.699,
            267.997, 241.088, 0.699,
            267.997, 183.146, 0.699,
            267.997, 183.146, -24.082,
            267.997, 241.088, -24.082,
            267.997, 241.088, -24.082,
            267.997, 241.088, 0.699,
            267.997, 183.146, 0.699,
            196.131, 183.146, 0.699,
            196.131, 183.146, -24.082,
            267.997, 183.146, -24.082,
            267.997, 183.146, -24.082,
            267.997, 183.146, 0.699,
               196.131, 183.146, 0.699
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
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
               0.000, -1.000, -0.000
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