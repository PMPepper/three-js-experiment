function create_geometry_388(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -4.688, -40.884, 17.104,
            41.343, -40.884, 43.679,
            46.653, -40.884, 30.860,
            -4.688, -40.884, 17.104,
            32.896, -40.884, 54.687,
            41.343, -40.884, 43.679,
            -4.688, -40.884, 17.104,
            21.888, -40.884, 63.134,
            32.896, -40.884, 54.687,
            -4.688, -40.884, 17.104,
            9.069, -40.884, 68.444,
            21.888, -40.884, 63.134,
            -4.688, -40.884, 17.104,
            -4.688, -40.884, 70.255,
            9.069, -40.884, 68.444,
            -4.688, -40.884, 17.104,
            -18.445, -40.884, 68.444,
            -4.688, -40.884, 70.255,
            -4.688, -40.884, 17.104,
            -31.264, -40.884, 63.134,
            -18.445, -40.884, 68.444,
            -4.688, -40.884, 17.104,
            -42.272, -40.884, 54.687,
            -31.264, -40.884, 63.134,
            -4.688, -40.884, 17.104,
            -50.719, -40.884, 43.679,
            -42.272, -40.884, 54.687,
            -4.688, -40.884, 17.104,
            -56.028, -40.884, 30.860,
            -50.719, -40.884, 43.679,
            46.653, -40.884, 30.860,
            41.343, -52.316, 43.679,
            46.653, -52.316, 30.860,
            46.653, -40.884, 30.860,
            41.343, -40.884, 43.679,
            41.343, -52.316, 43.679,
            41.343, -40.884, 43.679,
            32.896, -52.316, 54.687,
            41.343, -52.316, 43.679,
            41.343, -40.884, 43.679,
            32.896, -40.884, 54.687,
            32.896, -52.316, 54.687,
            32.896, -40.884, 54.687,
            21.888, -52.316, 63.134,
            32.896, -52.316, 54.687,
            32.896, -40.884, 54.687,
            21.888, -40.884, 63.134,
            21.888, -52.316, 63.134,
            21.888, -40.884, 63.134,
            9.069, -52.316, 68.444,
            21.888, -52.316, 63.134,
            21.888, -40.884, 63.134,
            9.069, -40.884, 68.444,
            9.069, -52.316, 68.444,
            9.069, -40.884, 68.444,
            -4.688, -52.316, 70.255,
            9.069, -52.316, 68.444,
            9.069, -40.884, 68.444,
            -4.688, -40.884, 70.255,
            -4.688, -52.316, 70.255,
            -4.688, -40.884, 70.255,
            -18.445, -52.316, 68.444,
            -4.688, -52.316, 70.255,
            -4.688, -40.884, 70.255,
            -18.445, -40.884, 68.444,
            -18.445, -52.316, 68.444,
            -18.445, -40.884, 68.444,
            -31.264, -52.316, 63.134,
            -18.445, -52.316, 68.444,
            -18.445, -40.884, 68.444,
            -31.264, -40.884, 63.134,
            -31.264, -52.316, 63.134,
            -31.264, -40.884, 63.134,
            -42.272, -52.316, 54.687,
            -31.264, -52.316, 63.134,
            -31.264, -40.884, 63.134,
            -42.272, -40.884, 54.687,
            -42.272, -52.316, 54.687,
            -42.272, -40.884, 54.687,
            -50.719, -52.316, 43.679,
            -42.272, -52.316, 54.687,
            -42.272, -40.884, 54.687,
            -50.719, -40.884, 43.679,
            -50.719, -52.316, 43.679,
            -50.719, -40.884, 43.679,
            -56.028, -52.316, 30.860,
            -50.719, -52.316, 43.679,
            -50.719, -40.884, 43.679,
            -56.028, -40.884, 30.860,
            -56.028, -52.316, 30.860,
            -4.688, -52.316, 17.104,
            46.653, -52.316, 30.860,
            41.343, -52.316, 43.679,
            -4.688, -52.316, 17.104,
            41.343, -52.316, 43.679,
            32.896, -52.316, 54.687,
            -4.688, -52.316, 17.104,
            32.896, -52.316, 54.687,
            21.888, -52.316, 63.134,
            -4.688, -52.316, 17.104,
            21.888, -52.316, 63.134,
            9.069, -52.316, 68.444,
            -4.688, -52.316, 17.104,
            9.069, -52.316, 68.444,
            -4.688, -52.316, 70.255,
            -4.688, -52.316, 17.104,
            -4.688, -52.316, 70.255,
            -18.445, -52.316, 68.444,
            -4.688, -52.316, 17.104,
            -18.445, -52.316, 68.444,
            -31.264, -52.316, 63.134,
            -4.688, -52.316, 17.104,
            -31.264, -52.316, 63.134,
            -42.272, -52.316, 54.687,
            -4.688, -52.316, 17.104,
            -42.272, -52.316, 54.687,
            -50.719, -52.316, 43.679,
            -4.688, -52.316, 17.104,
            -50.719, -52.316, 43.679,
               -56.028, -52.316, 30.860
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.924, -0.000, 0.383,
            0.866, -0.000, 0.500,
            0.924, 0.000, 0.383,
            0.924, -0.000, 0.383,
            0.866, -0.000, 0.500,
            0.866, -0.000, 0.500,
            0.866, -0.000, 0.500,
            0.707, 0.000, 0.707,
            0.866, -0.000, 0.500,
            0.866, -0.000, 0.500,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.500, -0.000, 0.866,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.500, -0.000, 0.866,
            0.500, -0.000, 0.866,
            0.500, -0.000, 0.866,
            0.259, -0.000, 0.966,
            0.500, -0.000, 0.866,
            0.500, -0.000, 0.866,
            0.259, -0.000, 0.966,
            0.259, -0.000, 0.966,
            0.259, -0.000, 0.966,
            0.000, -0.000, 1.000,
            0.259, -0.000, 0.966,
            0.259, -0.000, 0.966,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.259, 0.000, 0.966,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.259, 0.000, 0.966,
            -0.259, 0.000, 0.966,
            -0.259, 0.000, 0.966,
            -0.500, 0.000, 0.866,
            -0.259, 0.000, 0.966,
            -0.259, 0.000, 0.966,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            -0.707, -0.000, 0.707,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.866, -0.000, 0.500,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.924, -0.000, 0.383,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.924, 0.000, 0.383,
            -0.924, -0.000, 0.383,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
               -0.000, -1.000, 0.000
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
