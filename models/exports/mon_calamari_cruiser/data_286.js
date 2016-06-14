function create_geometry_286(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            36.054, -64.597, 30.938,
            36.054, -64.306, 30.646,
            35.762, -64.597, 30.646,
            36.054, -64.597, 30.938,
            35.762, -64.597, 30.646,
            36.054, -64.889, 30.646,
            36.054, -64.597, 30.938,
            36.054, -64.889, 30.646,
            36.346, -64.597, 30.646,
            36.054, -64.597, 30.938,
            36.346, -64.597, 30.646,
            36.054, -64.306, 30.646,
            36.054, -64.597, 30.354,
            35.762, -64.597, 30.646,
            36.054, -64.306, 30.646,
            36.054, -64.597, 30.354,
            36.054, -64.889, 30.646,
            35.762, -64.597, 30.646,
            36.054, -64.597, 30.354,
            36.346, -64.597, 30.646,
            36.054, -64.889, 30.646,
            36.054, -64.597, 30.354,
            36.054, -64.306, 30.646,
               36.346, -64.597, 30.646
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