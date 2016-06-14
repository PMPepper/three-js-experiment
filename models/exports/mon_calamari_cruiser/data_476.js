function create_geometry_476(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            100.267, 79.127, 4.977,
            100.249, 78.710, 4.560,
            99.850, 79.145, 4.560,
            100.267, 79.127, 4.977,
            99.850, 79.145, 4.560,
            100.285, 79.544, 4.560,
            100.267, 79.127, 4.977,
            100.285, 79.544, 4.560,
            100.684, 79.109, 4.560,
            100.267, 79.127, 4.977,
            100.684, 79.109, 4.560,
            100.249, 78.710, 4.560,
            100.267, 79.127, 4.142,
            99.850, 79.145, 4.560,
            100.249, 78.710, 4.560,
            100.267, 79.127, 4.142,
            100.285, 79.544, 4.560,
            99.850, 79.145, 4.560,
            100.267, 79.127, 4.142,
            100.684, 79.109, 4.560,
            100.285, 79.544, 4.560,
            100.267, 79.127, 4.142,
            100.249, 78.710, 4.560,
               100.684, 79.109, 4.560
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.044, 0.999, 0.000,
            0.999, -0.044, -0.000,
            0.000, 0.000, -1.000,
            0.999, -0.044, -0.000,
            -0.044, -0.999, 0.000,
            0.000, 0.000, -1.000,
            -0.044, -0.999, 0.000,
            -0.999, 0.044, -0.000,
            0.000, 0.000, -1.000,
            -0.999, 0.044, -0.000,
            0.044, 0.999, 0.000,
            0.000, 0.000, 1.000,
            0.999, -0.044, -0.000,
            0.044, 0.999, 0.000,
            0.000, 0.000, 1.000,
            -0.044, -0.999, 0.000,
            0.999, -0.044, -0.000,
            0.000, 0.000, 1.000,
            -0.999, 0.044, -0.000,
            -0.044, -0.999, 0.000,
            0.000, 0.000, 1.000,
            0.044, 0.999, 0.000,
               -0.999, 0.044, -0.000
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
