function create_geometry_308(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            93.835, -72.692, 11.761,
            93.817, -72.275, 11.343,
            93.418, -72.710, 11.343,
            93.835, -72.692, 11.761,
            93.418, -72.710, 11.343,
            93.854, -73.109, 11.343,
            93.835, -72.692, 11.761,
            93.854, -73.109, 11.343,
            94.252, -72.674, 11.343,
            93.835, -72.692, 11.761,
            94.252, -72.674, 11.343,
            93.817, -72.275, 11.343,
            93.835, -72.692, 10.926,
            93.418, -72.710, 11.343,
            93.817, -72.275, 11.343,
            93.835, -72.692, 10.926,
            93.854, -73.109, 11.343,
            93.418, -72.710, 11.343,
            93.835, -72.692, 10.926,
            94.252, -72.674, 11.343,
            93.854, -73.109, 11.343,
            93.835, -72.692, 10.926,
            93.817, -72.275, 11.343,
               94.252, -72.674, 11.343
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
