function create_geometry_478(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            88.652, 79.127, 4.977,
            88.633, 78.710, 4.559,
            88.235, 79.145, 4.559,
            88.652, 79.127, 4.977,
            88.235, 79.145, 4.559,
            88.670, 79.544, 4.559,
            88.652, 79.127, 4.977,
            88.670, 79.544, 4.559,
            89.068, 79.109, 4.559,
            88.652, 79.127, 4.977,
            89.068, 79.109, 4.559,
            88.633, 78.710, 4.559,
            88.652, 79.127, 4.142,
            88.235, 79.145, 4.559,
            88.633, 78.710, 4.559,
            88.652, 79.127, 4.142,
            88.670, 79.544, 4.559,
            88.235, 79.145, 4.559,
            88.652, 79.127, 4.142,
            89.068, 79.109, 4.559,
            88.670, 79.544, 4.559,
            88.652, 79.127, 4.142,
            88.633, 78.710, 4.559,
               89.068, 79.109, 4.559
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
