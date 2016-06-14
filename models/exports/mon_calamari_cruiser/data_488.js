function create_geometry_488(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            75.346, 97.089, 2.748,
            75.328, 96.672, 2.330,
            74.929, 97.107, 2.330,
            75.346, 97.089, 2.748,
            74.929, 97.107, 2.330,
            75.364, 97.505, 2.330,
            75.346, 97.089, 2.748,
            75.364, 97.505, 2.330,
            75.763, 97.070, 2.330,
            75.346, 97.089, 2.748,
            75.763, 97.070, 2.330,
            75.328, 96.672, 2.330,
            75.346, 97.089, 1.913,
            74.929, 97.107, 2.330,
            75.328, 96.672, 2.330,
            75.346, 97.089, 1.913,
            75.364, 97.505, 2.330,
            74.929, 97.107, 2.330,
            75.346, 97.089, 1.913,
            75.763, 97.070, 2.330,
            75.364, 97.505, 2.330,
            75.346, 97.089, 1.913,
            75.328, 96.672, 2.330,
               75.763, 97.070, 2.330
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
