function create_geometry_516(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -85.174, -122.503, -7.183,
            -85.192, -122.086, -7.600,
            -85.590, -122.521, -7.600,
            -85.174, -122.503, -7.183,
            -85.590, -122.521, -7.600,
            -85.155, -122.920, -7.600,
            -85.174, -122.503, -7.183,
            -85.155, -122.920, -7.600,
            -84.757, -122.485, -7.600,
            -85.174, -122.503, -7.183,
            -84.757, -122.485, -7.600,
            -85.192, -122.086, -7.600,
            -85.174, -122.503, -8.017,
            -85.590, -122.521, -7.600,
            -85.192, -122.086, -7.600,
            -85.174, -122.503, -8.017,
            -85.155, -122.920, -7.600,
            -85.590, -122.521, -7.600,
            -85.174, -122.503, -8.017,
            -84.757, -122.485, -7.600,
            -85.155, -122.920, -7.600,
            -85.174, -122.503, -8.017,
            -85.192, -122.086, -7.600,
               -84.757, -122.485, -7.600
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            -0.044, 0.999, 0.000,
            -0.999, -0.044, 0.000,
            0.000, 0.000, 1.000,
            -0.999, -0.044, 0.000,
            0.044, -0.999, 0.000,
            0.000, 0.000, 1.000,
            0.044, -0.999, 0.000,
            0.999, 0.044, 0.000,
            0.000, 0.000, 1.000,
            0.999, 0.044, 0.000,
            -0.044, 0.999, 0.000,
            0.000, 0.000, -1.000,
            -0.999, -0.044, 0.000,
            -0.044, 0.999, 0.000,
            0.000, 0.000, -1.000,
            0.044, -0.999, 0.000,
            -0.999, -0.044, 0.000,
            0.000, 0.000, -1.000,
            0.999, 0.044, 0.000,
            0.044, -0.999, 0.000,
            0.000, 0.000, -1.000,
            -0.044, 0.999, 0.000,
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
