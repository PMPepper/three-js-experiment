function create_geometry_503(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            198.861, -71.649, 10.982,
            198.843, -71.232, 10.564,
            198.444, -71.667, 10.564,
            198.861, -71.649, 10.982,
            198.444, -71.667, 10.564,
            198.879, -72.066, 10.564,
            198.861, -71.649, 10.982,
            198.879, -72.066, 10.564,
            199.278, -71.631, 10.564,
            198.861, -71.649, 10.982,
            199.278, -71.631, 10.564,
            198.843, -71.232, 10.564,
            198.861, -71.649, 10.147,
            198.444, -71.667, 10.564,
            198.843, -71.232, 10.564,
            198.861, -71.649, 10.147,
            198.879, -72.066, 10.564,
            198.444, -71.667, 10.564,
            198.861, -71.649, 10.147,
            199.278, -71.631, 10.564,
            198.879, -72.066, 10.564,
            198.861, -71.649, 10.147,
            198.843, -71.232, 10.564,
               199.278, -71.631, 10.564
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
