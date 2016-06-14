function create_geometry_273(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -191.540, -58.451, 13.594,
            -191.540, -57.717, 12.860,
            -192.274, -58.451, 12.860,
            -191.540, -58.451, 13.594,
            -192.274, -58.451, 12.860,
            -191.540, -59.185, 12.860,
            -191.540, -58.451, 13.594,
            -191.540, -59.185, 12.860,
            -190.806, -58.451, 12.860,
            -191.540, -58.451, 13.594,
            -190.806, -58.451, 12.860,
            -191.540, -57.717, 12.860,
            -191.540, -58.451, 12.126,
            -192.274, -58.451, 12.860,
            -191.540, -57.717, 12.860,
            -191.540, -58.451, 12.126,
            -191.540, -59.185, 12.860,
            -192.274, -58.451, 12.860,
            -191.540, -58.451, 12.126,
            -190.806, -58.451, 12.860,
            -191.540, -59.185, 12.860,
            -191.540, -58.451, 12.126,
            -191.540, -57.717, 12.860,
               -190.806, -58.451, 12.860
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
