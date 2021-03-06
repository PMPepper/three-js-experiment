function create_geometry_501(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            172.299, -70.478, 13.244,
            172.281, -70.061, 12.827,
            171.882, -70.496, 12.827,
            172.299, -70.478, 13.244,
            171.882, -70.496, 12.827,
            172.317, -70.894, 12.827,
            172.299, -70.478, 13.244,
            172.317, -70.894, 12.827,
            172.716, -70.459, 12.827,
            172.299, -70.478, 13.244,
            172.716, -70.459, 12.827,
            172.281, -70.061, 12.827,
            172.299, -70.478, 12.409,
            171.882, -70.496, 12.827,
            172.281, -70.061, 12.827,
            172.299, -70.478, 12.409,
            172.317, -70.894, 12.827,
            171.882, -70.496, 12.827,
            172.299, -70.478, 12.409,
            172.716, -70.459, 12.827,
            172.317, -70.894, 12.827,
            172.299, -70.478, 12.409,
            172.281, -70.061, 12.827,
               172.716, -70.459, 12.827
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
