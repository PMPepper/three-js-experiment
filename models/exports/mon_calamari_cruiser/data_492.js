function create_geometry_492(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            124.969, -65.620, 18.765,
            124.951, -65.203, 18.347,
            124.552, -65.638, 18.347,
            124.969, -65.620, 18.765,
            124.552, -65.638, 18.347,
            124.988, -66.037, 18.347,
            124.969, -65.620, 18.765,
            124.988, -66.037, 18.347,
            125.386, -65.602, 18.347,
            124.969, -65.620, 18.765,
            125.386, -65.602, 18.347,
            124.951, -65.203, 18.347,
            124.969, -65.620, 17.930,
            124.552, -65.638, 18.347,
            124.951, -65.203, 18.347,
            124.969, -65.620, 17.930,
            124.988, -66.037, 18.347,
            124.552, -65.638, 18.347,
            124.969, -65.620, 17.930,
            125.386, -65.602, 18.347,
            124.988, -66.037, 18.347,
            124.969, -65.620, 17.930,
            124.951, -65.203, 18.347,
               125.386, -65.602, 18.347
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
