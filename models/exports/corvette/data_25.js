function create_geometry_25(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -3.444, -4.548, -0.519,
            -2.821, -5.658, -0.728,
            -3.444, -4.548, 0.245,
            -3.444, -4.548, 0.245,
            -2.821, -5.658, -0.728,
            -2.821, -5.658, 0.408,
            2.821, -5.658, -0.728,
            3.489, -4.548, -0.519,
            2.821, -5.658, 0.431,
            2.821, -5.658, 0.431,
            3.489, -4.548, -0.519,
            3.489, -4.548, 0.245,
            -3.444, -4.548, -0.519,
            -3.444, -0.761, 0.245,
            -3.444, -0.761, -0.519,
            -3.444, -4.548, 0.245,
            -3.444, -0.761, 0.245,
            -3.444, -4.548, -0.519,
            3.489, -0.715, -0.519,
            3.489, -0.715, 0.245,
            3.489, -4.548, -0.519,
            3.489, -4.548, -0.519,
            3.489, -0.715, 0.245,
            3.489, -4.548, 0.245,
            -3.444, -0.761, 0.245,
            -2.484, -0.357, -0.728,
            -3.444, -0.761, -0.519,
            -2.484, -0.357, 0.500,
            -2.484, -0.357, -0.728,
            -3.444, -0.761, 0.245,
            2.437, -0.311, 0.500,
            3.489, -0.715, -0.519,
            2.437, -0.311, -0.728,
            3.489, -0.715, 0.245,
            3.489, -0.715, -0.519,
            2.437, -0.311, 0.500,
            -3.444, -4.548, -0.519,
            -2.821, -5.658, -0.728,
            -3.444, -4.548, 0.245,
            -3.444, -4.548, 0.245,
            -2.821, -5.658, -0.728,
            -2.821, -5.658, 0.408,
            2.821, -5.658, -0.728,
            3.489, -4.548, -0.519,
            2.821, -5.658, 0.431,
            2.821, -5.658, 0.431,
            3.489, -4.548, -0.519,
            3.489, -4.548, 0.245,
            -3.444, -4.548, -0.519,
            -3.444, -0.761, 0.245,
            -3.444, -0.761, -0.519,
            -3.444, -4.548, 0.245,
            -3.444, -0.761, 0.245,
            -3.444, -4.548, -0.519,
            3.489, -0.715, -0.519,
            3.489, -0.715, 0.245,
            3.489, -4.548, -0.519,
            3.489, -4.548, -0.519,
            3.489, -0.715, 0.245,
            3.489, -4.548, 0.245,
            -3.444, -0.761, 0.245,
            -2.484, -0.357, -0.728,
            -3.444, -0.761, -0.519,
            -2.484, -0.357, 0.500,
            -2.484, -0.357, -0.728,
            -3.444, -0.761, 0.245,
            2.437, -0.311, 0.500,
            3.489, -0.715, -0.519,
            2.437, -0.311, -0.728,
            3.489, -0.715, 0.245,
            3.489, -0.715, -0.519,
               2.437, -0.311, 0.500
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            -0.872, -0.490, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            0.857, -0.516, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            -0.388, 0.922, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
            0.359, 0.933, 0.000,
               0.359, 0.933, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.208,
               0.090, 0.000,
               0.000, 0.208,
               0.000, 0.208,
               0.090, 0.000,
               0.090, 0.000,
               0.904, 0.000,
               1.000, 0.208,
               0.904, 0.000,
               0.904, 0.000,
               1.000, 0.208,
               1.000, 0.208,
               0.000, 0.208,
               0.000, 0.916,
               0.000, 0.916,
               0.000, 0.208,
               0.000, 0.916,
               0.000, 0.208,
               0.000, 0.924,
               0.717, 0.924,
               0.000, 0.208,
               0.000, 0.208,
               0.000, 0.924,
               0.000, 0.208,
               0.000, 0.916,
               0.138, 0.991,
               0.000, 0.916,
               0.138, 0.991,
               0.138, 0.991,
               0.000, 0.916,
               0.848, 1.000,
               1.000, 0.924,
               0.848, 1.000,
               1.000, 0.924,
               1.000, 0.924,
               0.848, 1.000,
               0.000, 0.208,
               0.090, 0.000,
               0.000, 0.208,
               0.000, 0.208,
               0.090, 0.000,
               0.090, 0.000,
               0.904, 0.000,
               1.000, 0.208,
               0.904, 0.000,
               0.904, 0.000,
               1.000, 0.208,
               1.000, 0.208,
               0.000, 0.208,
               0.000, 0.916,
               0.000, 0.916,
               0.000, 0.208,
               0.000, 0.916,
               0.000, 0.208,
               0.000, 0.924,
               0.717, 0.924,
               0.000, 0.208,
               0.000, 0.208,
               0.000, 0.924,
               0.000, 0.208,
               0.000, 0.916,
               0.138, 0.991,
               0.000, 0.916,
               0.138, 0.991,
               0.138, 0.991,
               0.000, 0.916,
               0.848, 1.000,
               1.000, 0.924,
               0.848, 1.000,
               1.000, 0.924,
               1.000, 0.924,
               0.848, 1.000
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
