function create_geometry_616(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            66.698, 65.804, 19.685,
            66.680, 65.387, 19.267,
            66.281, 65.822, 19.267,
            66.698, 65.804, 19.685,
            66.281, 65.822, 19.267,
            66.716, 66.220, 19.267,
            66.698, 65.804, 19.685,
            66.716, 66.220, 19.267,
            67.115, 65.785, 19.267,
            66.698, 65.804, 19.685,
            67.115, 65.785, 19.267,
            66.680, 65.387, 19.267,
            66.698, 65.804, 18.850,
            66.281, 65.822, 19.267,
            66.680, 65.387, 19.267,
            66.698, 65.804, 18.850,
            66.716, 66.220, 19.267,
            66.281, 65.822, 19.267,
            66.698, 65.804, 18.850,
            67.115, 65.785, 19.267,
            66.716, 66.220, 19.267,
            66.698, 65.804, 18.850,
            66.680, 65.387, 19.267,
               67.115, 65.785, 19.267
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