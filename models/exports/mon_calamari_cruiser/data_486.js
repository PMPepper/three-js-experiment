function create_geometry_486(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            63.255, 97.089, 2.748,
            63.237, 96.672, 2.330,
            62.838, 97.107, 2.330,
            63.255, 97.089, 2.748,
            62.838, 97.107, 2.330,
            63.273, 97.505, 2.330,
            63.255, 97.089, 2.748,
            63.273, 97.505, 2.330,
            63.672, 97.070, 2.330,
            63.255, 97.089, 2.748,
            63.672, 97.070, 2.330,
            63.237, 96.672, 2.330,
            63.255, 97.089, 1.913,
            62.838, 97.107, 2.330,
            63.237, 96.672, 2.330,
            63.255, 97.089, 1.913,
            63.273, 97.505, 2.330,
            62.838, 97.107, 2.330,
            63.255, 97.089, 1.913,
            63.672, 97.070, 2.330,
            63.273, 97.505, 2.330,
            63.255, 97.089, 1.913,
            63.237, 96.672, 2.330,
               63.672, 97.070, 2.330
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -0.000, -1.000,
            0.044, 0.999, 0.000,
            0.999, -0.044, 0.000,
            -0.000, -0.000, -1.000,
            0.999, -0.044, 0.000,
            -0.044, -0.999, 0.000,
            -0.000, -0.000, -1.000,
            -0.044, -0.999, 0.000,
            -0.999, 0.044, 0.000,
            -0.000, -0.000, -1.000,
            -0.999, 0.044, 0.000,
            0.044, 0.999, 0.000,
            -0.000, -0.000, 1.000,
            0.999, -0.044, 0.000,
            0.044, 0.999, 0.000,
            -0.000, -0.000, 1.000,
            -0.044, -0.999, 0.000,
            0.999, -0.044, 0.000,
            -0.000, -0.000, 1.000,
            -0.999, 0.044, 0.000,
            -0.044, -0.999, 0.000,
            -0.000, -0.000, 1.000,
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
