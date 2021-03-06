function create_geometry_295(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            36.607, -66.898, 16.434,
            36.594, -66.606, 16.142,
            36.315, -66.911, 16.142,
            36.607, -66.898, 16.434,
            36.315, -66.911, 16.142,
            36.620, -67.189, 16.142,
            36.607, -66.898, 16.434,
            36.620, -67.189, 16.142,
            36.898, -66.885, 16.142,
            36.607, -66.898, 16.434,
            36.898, -66.885, 16.142,
            36.594, -66.606, 16.142,
            36.607, -66.898, 15.850,
            36.315, -66.911, 16.142,
            36.594, -66.606, 16.142,
            36.607, -66.898, 15.850,
            36.620, -67.189, 16.142,
            36.315, -66.911, 16.142,
            36.607, -66.898, 15.850,
            36.898, -66.885, 16.142,
            36.620, -67.189, 16.142,
            36.607, -66.898, 15.850,
            36.594, -66.606, 16.142,
               36.898, -66.885, 16.142
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            -0.044, 0.999, -0.000,
            -0.999, -0.044, 0.000,
            0.000, 0.000, 1.000,
            -0.999, -0.044, 0.000,
            0.044, -0.999, -0.000,
            0.000, 0.000, 1.000,
            0.044, -0.999, -0.000,
            0.999, 0.044, 0.000,
            0.000, 0.000, 1.000,
            0.999, 0.044, 0.000,
            -0.044, 0.999, -0.000,
            0.000, 0.000, -1.000,
            -0.999, -0.044, 0.000,
            -0.044, 0.999, -0.000,
            0.000, 0.000, -1.000,
            0.044, -0.999, -0.000,
            -0.999, -0.044, 0.000,
            0.000, 0.000, -1.000,
            0.999, 0.044, 0.000,
            0.044, -0.999, -0.000,
            0.000, 0.000, -1.000,
            -0.044, 0.999, -0.000,
               0.999, 0.044, 0.000
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
