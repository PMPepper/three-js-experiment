function create_geometry_45(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -1.558, -14.544, 0.715,
            1.531, -14.544, 0.366,
            -1.452, -14.544, 0.366,
            1.637, -14.544, 0.715,
            1.531, -14.544, 0.366,
               -1.558, -14.544, 0.715
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
               -0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 1.000,
               0.967, 0.000,
               0.033, 0.000,
               1.000, 1.000,
               0.967, 0.000,
               0.000, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_WINDOW.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
