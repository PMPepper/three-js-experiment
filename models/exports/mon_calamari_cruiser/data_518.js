function create_geometry_518(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -94.351, -116.749, -13.240,
            -94.361, -116.517, -13.472,
            -94.583, -116.759, -13.472,
            -94.351, -116.749, -13.240,
            -94.583, -116.759, -13.472,
            -94.341, -116.981, -13.472,
            -94.351, -116.749, -13.240,
            -94.341, -116.981, -13.472,
            -94.119, -116.739, -13.472,
            -94.351, -116.749, -13.240,
            -94.119, -116.739, -13.472,
            -94.361, -116.517, -13.472,
            -94.351, -116.749, -13.703,
            -94.583, -116.759, -13.472,
            -94.361, -116.517, -13.472,
            -94.351, -116.749, -13.703,
            -94.341, -116.981, -13.472,
            -94.583, -116.759, -13.472,
            -94.351, -116.749, -13.703,
            -94.119, -116.739, -13.472,
            -94.341, -116.981, -13.472,
            -94.351, -116.749, -13.703,
            -94.361, -116.517, -13.472,
               -94.119, -116.739, -13.472
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 0.000, 1.000,
            -0.044, 0.999, 0.000,
            -0.999, -0.044, -0.000,
            -0.000, 0.000, 1.000,
            -0.999, -0.044, -0.000,
            0.044, -0.999, 0.000,
            -0.000, 0.000, 1.000,
            0.044, -0.999, 0.000,
            0.999, 0.044, -0.000,
            -0.000, 0.000, 1.000,
            0.999, 0.044, -0.000,
            -0.044, 0.999, 0.000,
            -0.000, 0.000, -1.000,
            -0.999, -0.044, -0.000,
            -0.044, 0.999, 0.000,
            -0.000, 0.000, -1.000,
            0.044, -0.999, 0.000,
            -0.999, -0.044, -0.000,
            -0.000, 0.000, -1.000,
            0.999, 0.044, -0.000,
            0.044, -0.999, 0.000,
            -0.000, 0.000, -1.000,
            -0.044, 0.999, 0.000,
               0.999, 0.044, -0.000
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