function create_geometry_504(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            206.556, -71.244, 10.982,
            206.538, -70.827, 10.564,
            206.139, -71.262, 10.564,
            206.556, -71.244, 10.982,
            206.139, -71.262, 10.564,
            206.574, -71.660, 10.564,
            206.556, -71.244, 10.982,
            206.574, -71.660, 10.564,
            206.973, -71.225, 10.564,
            206.556, -71.244, 10.982,
            206.973, -71.225, 10.564,
            206.538, -70.827, 10.564,
            206.556, -71.244, 10.147,
            206.139, -71.262, 10.564,
            206.538, -70.827, 10.564,
            206.556, -71.244, 10.147,
            206.574, -71.660, 10.564,
            206.139, -71.262, 10.564,
            206.556, -71.244, 10.147,
            206.973, -71.225, 10.564,
            206.574, -71.660, 10.564,
            206.556, -71.244, 10.147,
            206.538, -70.827, 10.564,
               206.973, -71.225, 10.564
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            -0.044, 0.999, 0.000,
            -0.999, -0.044, -0.000,
            0.000, 0.000, 1.000,
            -0.999, -0.044, -0.000,
            0.044, -0.999, 0.000,
            0.000, 0.000, 1.000,
            0.044, -0.999, 0.000,
            0.999, 0.044, -0.000,
            0.000, 0.000, 1.000,
            0.999, 0.044, -0.000,
            -0.044, 0.999, 0.000,
            0.000, 0.000, -1.000,
            -0.999, -0.044, -0.000,
            -0.044, 0.999, 0.000,
            0.000, 0.000, -1.000,
            0.044, -0.999, 0.000,
            -0.999, -0.044, -0.000,
            0.000, 0.000, -1.000,
            0.999, 0.044, -0.000,
            0.044, -0.999, 0.000,
            0.000, 0.000, -1.000,
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
