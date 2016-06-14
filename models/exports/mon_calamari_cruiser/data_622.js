function create_geometry_622(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            121.329, 59.819, 27.318,
            121.310, 59.402, 26.901,
            120.912, 59.837, 26.901,
            121.329, 59.819, 27.318,
            120.912, 59.837, 26.901,
            121.347, 60.235, 26.901,
            121.329, 59.819, 27.318,
            121.347, 60.235, 26.901,
            121.746, 59.800, 26.901,
            121.329, 59.819, 27.318,
            121.746, 59.800, 26.901,
            121.310, 59.402, 26.901,
            121.329, 59.819, 26.483,
            120.912, 59.837, 26.901,
            121.310, 59.402, 26.901,
            121.329, 59.819, 26.483,
            121.347, 60.235, 26.901,
            120.912, 59.837, 26.901,
            121.329, 59.819, 26.483,
            121.746, 59.800, 26.901,
            121.347, 60.235, 26.901,
            121.329, 59.819, 26.483,
            121.310, 59.402, 26.901,
               121.746, 59.800, 26.901
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 0.000, -1.000,
            0.044, 0.999, 0.000,
            0.999, -0.044, -0.000,
            -0.000, 0.000, -1.000,
            0.999, -0.044, -0.000,
            -0.044, -0.999, 0.000,
            -0.000, 0.000, -1.000,
            -0.044, -0.999, 0.000,
            -0.999, 0.044, 0.000,
            -0.000, 0.000, -1.000,
            -0.999, 0.044, 0.000,
            0.044, 0.999, 0.000,
            -0.000, 0.000, 1.000,
            0.999, -0.044, -0.000,
            0.044, 0.999, 0.000,
            -0.000, 0.000, 1.000,
            -0.044, -0.999, 0.000,
            0.999, -0.044, -0.000,
            -0.000, 0.000, 1.000,
            -0.999, 0.044, 0.000,
            -0.044, -0.999, 0.000,
            -0.000, 0.000, 1.000,
            0.044, 0.999, 0.000,
               -0.999, 0.044, 0.000
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
