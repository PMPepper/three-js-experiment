function create_geometry_23(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -2.821, -5.658, -0.728,
            -0.024, -6.913, -1.402,
            -2.821, -5.658, 0.408,
            -2.821, -5.658, 0.408,
            -0.024, -6.913, -1.402,
            -0.024, -6.913, 1.082,
            -0.024, -6.913, -1.402,
            2.821, -5.658, -0.728,
            -0.024, -6.913, 1.082,
            -0.024, -6.913, 1.082,
            2.821, -5.658, -0.728,
            2.821, -5.658, 0.431,
            -2.484, -0.357, 0.500,
            -0.024, 0.684, -1.402,
            -2.484, -0.357, -0.728,
            -0.024, 0.684, 1.082,
            -0.024, 0.684, -1.402,
            -2.484, -0.357, 0.500,
            -0.024, 0.684, 1.082,
            2.437, -0.311, -0.728,
            -0.024, 0.684, -1.402,
            2.437, -0.311, 0.500,
            2.437, -0.311, -0.728,
               -0.024, 0.684, 1.082
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.409, -0.912, 0.000,
            -0.409, -0.912, 0.000,
            -0.409, -0.912, 0.000,
            -0.409, -0.912, 0.000,
            -0.409, -0.912, 0.000,
            -0.409, -0.912, 0.000,
            0.404, -0.915, 0.000,
            0.404, -0.915, 0.000,
            0.404, -0.915, 0.000,
            0.404, -0.915, 0.000,
            0.404, -0.915, 0.000,
            0.404, -0.915, 0.000,
            -0.389, 0.921, -0.000,
            -0.389, 0.921, -0.000,
            -0.389, 0.921, 0.000,
            -0.389, 0.921, -0.000,
            -0.389, 0.921, -0.000,
            -0.389, 0.921, -0.000,
            0.375, 0.927, -0.000,
            0.375, 0.927, -0.000,
            0.375, 0.927, -0.000,
            0.375, 0.927, 0.000,
            0.375, 0.927, -0.000,
               0.375, 0.927, -0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.165,
               0.496, 0.000,
               0.000, 0.165,
               0.000, 0.165,
               0.496, 0.000,
               0.496, 0.000,
               0.496, 0.000,
               1.000, 0.165,
               0.496, 0.000,
               0.496, 0.000,
               1.000, 0.165,
               1.000, 0.165,
               0.060, 0.863,
               0.496, 1.000,
               0.060, 0.863,
               0.496, 1.000,
               0.496, 1.000,
               0.060, 0.863,
               0.496, 1.000,
               0.932, 0.869,
               0.496, 1.000,
               0.932, 0.869,
               0.932, 0.869,
               0.496, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_MAINBOD-.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}