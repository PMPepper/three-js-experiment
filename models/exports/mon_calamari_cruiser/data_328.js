function create_geometry_328(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -66.751, -130.295, 3.936,
            -66.751, -129.903, 3.544,
            -67.144, -130.295, 3.544,
            -66.751, -130.295, 3.936,
            -67.144, -130.295, 3.544,
            -66.751, -130.687, 3.544,
            -66.751, -130.295, 3.936,
            -66.751, -130.687, 3.544,
            -66.359, -130.295, 3.544,
            -66.751, -130.295, 3.936,
            -66.359, -130.295, 3.544,
            -66.751, -129.903, 3.544,
            -66.751, -130.295, 3.152,
            -67.144, -130.295, 3.544,
            -66.751, -129.903, 3.544,
            -66.751, -130.295, 3.152,
            -66.751, -130.687, 3.544,
            -67.144, -130.295, 3.544,
            -66.751, -130.295, 3.152,
            -66.359, -130.295, 3.544,
            -66.751, -130.687, 3.544,
            -66.751, -130.295, 3.152,
            -66.751, -129.903, 3.544,
               -66.359, -130.295, 3.544
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 1.000, 0.000,
               1.000, 0.000, 0.000
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
