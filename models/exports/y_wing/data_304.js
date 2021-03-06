function create_geometry_304(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            127.812, -50.561, -18.141,
            122.449, -50.188, 17.984,
            127.812, -50.561, 17.984,
            127.812, -50.561, -18.141,
            122.449, -50.188, -18.141,
            122.449, -50.188, 17.984,
            122.449, -62.858, -18.141,
            127.812, -62.486, 17.984,
            122.449, -62.858, 17.984,
            122.449, -62.858, -18.141,
            127.812, -62.486, -18.141,
            127.812, -62.486, 17.984,
            127.812, -62.486, -18.141,
            130.094, -62.032, 17.984,
            127.812, -62.486, 17.984,
            127.812, -62.486, -18.141,
            130.094, -62.032, -18.141,
            130.094, -62.032, 17.984,
            130.094, -62.032, -18.141,
            132.028, -60.739, 17.984,
            130.094, -62.032, 17.984,
            130.094, -62.032, -18.141,
            132.028, -60.739, -18.141,
            132.028, -60.739, 17.984,
            132.028, -60.739, -18.141,
            133.321, -58.805, 17.984,
            132.028, -60.739, 17.984,
            132.028, -60.739, -18.141,
            133.321, -58.805, -18.141,
            133.321, -58.805, 17.984,
            133.321, -58.805, -18.141,
            133.774, -56.523, 17.984,
            133.321, -58.805, 17.984,
            133.321, -58.805, -18.141,
            133.774, -56.523, -18.141,
            133.774, -56.523, 17.984,
            133.774, -56.523, -18.141,
            133.321, -54.242, 17.984,
            133.774, -56.523, 17.984,
            133.774, -56.523, -18.141,
            133.321, -54.242, -18.141,
            133.321, -54.242, 17.984,
            133.321, -54.242, -18.141,
            132.028, -52.307, 17.984,
            133.321, -54.242, 17.984,
            133.321, -54.242, -18.141,
            132.028, -52.307, -18.141,
            132.028, -52.307, 17.984,
            132.028, -52.307, -18.141,
            130.094, -51.015, 17.984,
            132.028, -52.307, 17.984,
            132.028, -52.307, -18.141,
            130.094, -51.015, -18.141,
            130.094, -51.015, 17.984,
            130.094, -51.015, -18.141,
            127.812, -50.561, 17.984,
            130.094, -51.015, 17.984,
            130.094, -51.015, -18.141,
            127.812, -50.561, -18.141,
            127.812, -50.561, 17.984,
            127.812, -56.523, 21.626,
            127.812, -50.561, 17.984,
            122.449, -50.188, 17.984,
            127.812, -56.523, 21.626,
            122.449, -62.858, 17.984,
            127.812, -62.486, 17.984,
            127.812, -56.523, 21.626,
            127.812, -62.486, 17.984,
            130.094, -62.032, 17.984,
            127.812, -56.523, 21.626,
            130.094, -62.032, 17.984,
            132.028, -60.739, 17.984,
            127.812, -56.523, 21.626,
            132.028, -60.739, 17.984,
            133.321, -58.805, 17.984,
            127.812, -56.523, 21.626,
            133.321, -58.805, 17.984,
            133.774, -56.523, 17.984,
            127.812, -56.523, 21.626,
            133.774, -56.523, 17.984,
            133.321, -54.242, 17.984,
            127.812, -56.523, 21.626,
            133.321, -54.242, 17.984,
            132.028, -52.307, 17.984,
            127.812, -56.523, 21.626,
            132.028, -52.307, 17.984,
            130.094, -51.015, 17.984,
            127.812, -56.523, 21.626,
            130.094, -51.015, 17.984,
               127.812, -50.561, 17.984
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.132, 0.991, 0.000,
            0.069, 0.998, 0.000,
            0.132, 0.991, 0.000,
            0.132, 0.991, 0.000,
            0.069, 0.998, 0.000,
            0.069, 0.998, 0.000,
            0.069, -0.998, 0.000,
            0.132, -0.991, 0.000,
            0.069, -0.998, 0.000,
            0.069, -0.998, 0.000,
            0.132, -0.991, 0.000,
            0.132, -0.991, 0.000,
            0.132, -0.991, 0.000,
            0.383, -0.924, 0.000,
            0.132, -0.991, 0.000,
            0.132, -0.991, 0.000,
            0.383, -0.924, 0.000,
            0.383, -0.924, 0.000,
            0.383, -0.924, 0.000,
            0.707, -0.707, 0.000,
            0.383, -0.924, 0.000,
            0.383, -0.924, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.924, -0.383, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.924, -0.383, 0.000,
            0.924, -0.383, 0.000,
            0.924, -0.383, 0.000,
            1.000, 0.000, 0.000,
            0.924, -0.383, 0.000,
            0.924, -0.383, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.924, 0.383, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.924, 0.383, 0.000,
            0.924, 0.383, 0.000,
            0.924, 0.383, 0.000,
            0.707, 0.707, 0.000,
            0.924, 0.383, 0.000,
            0.924, 0.383, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.383, 0.924, -0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.383, 0.924, 0.000,
            0.383, 0.924, -0.000,
            0.383, 0.924, 0.000,
            0.132, 0.991, 0.000,
            0.383, 0.924, -0.000,
            0.383, 0.924, 0.000,
            0.132, 0.991, 0.000,
            0.132, 0.991, 0.000,
            0.273, 0.000, 0.962,
            0.067, 0.520, 0.851,
            0.036, 0.521, 0.853,
            0.273, 0.000, 0.962,
            0.036, -0.521, 0.853,
            0.067, -0.520, 0.851,
            0.273, 0.000, 0.962,
            0.067, -0.520, 0.851,
            0.199, -0.482, 0.853,
            0.273, 0.000, 0.962,
            0.199, -0.482, 0.853,
            0.369, -0.369, 0.853,
            0.273, 0.000, 0.962,
            0.369, -0.369, 0.853,
            0.482, -0.199, 0.853,
            0.273, 0.000, 0.962,
            0.482, -0.199, 0.853,
            0.521, 0.000, 0.853,
            0.273, 0.000, 0.962,
            0.521, 0.000, 0.853,
            0.482, 0.199, 0.853,
            0.273, 0.000, 0.962,
            0.482, 0.199, 0.853,
            0.369, 0.369, 0.853,
            0.273, 0.000, 0.962,
            0.369, 0.369, 0.853,
            0.199, 0.482, 0.853,
            0.273, 0.000, 0.962,
            0.199, 0.482, 0.853,
               0.067, 0.520, 0.851
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
