function create_geometry_385(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            42.952, 113.435, 44.528,
            114.453, 113.435, 44.528,
            114.453, 162.846, 44.528,
            42.952, 113.435, 44.528,
            114.453, 162.846, 44.528,
            42.952, 162.846, 44.528,
            114.453, 113.435, 44.528,
            116.197, 113.435, 42.784,
            116.197, 162.846, 42.784,
            114.453, 113.435, 44.528,
            116.197, 162.846, 42.784,
            114.453, 162.846, 44.528,
            114.453, 162.846, 44.528,
            116.197, 162.846, 42.784,
            114.453, 164.590, 42.784,
            114.453, 162.846, 44.528,
            114.453, 164.590, 42.784,
            42.952, 164.590, 42.784,
            114.453, 162.846, 44.528,
            42.952, 164.590, 42.784,
            42.952, 162.846, 44.528,
            42.952, 162.846, 44.528,
            42.952, 164.590, 42.784,
            41.209, 162.846, 42.784,
            42.952, 162.846, 44.528,
            41.209, 162.846, 42.784,
            41.209, 113.435, 42.784,
            42.952, 162.846, 44.528,
            41.209, 113.435, 42.784,
            42.952, 113.435, 44.528,
            116.197, 113.435, 42.784,
            116.197, 113.435, 22.439,
            116.197, 162.846, 22.439,
            116.197, 113.435, 42.784,
            116.197, 162.846, 22.439,
            116.197, 162.846, 42.784,
            116.197, 162.846, 42.784,
            116.197, 162.846, 22.439,
            114.453, 164.590, 22.439,
            116.197, 162.846, 42.784,
            114.453, 164.590, 22.439,
            114.453, 164.590, 42.784,
            114.453, 164.590, 42.784,
            114.453, 164.590, 22.439,
            42.952, 164.590, 22.439,
            114.453, 164.590, 42.784,
            42.952, 164.590, 22.439,
            42.952, 164.590, 42.784,
            42.952, 164.590, 42.784,
            42.952, 164.590, 22.439,
            41.209, 162.846, 22.439,
            42.952, 164.590, 42.784,
            41.209, 162.846, 22.439,
            41.209, 162.846, 42.784,
            41.209, 162.846, 42.784,
            41.209, 162.846, 22.439,
            41.209, 113.435, 22.439,
            41.209, 162.846, 42.784,
            41.209, 113.435, 22.439,
               41.209, 113.435, 42.784
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, -0.000, 0.707,
            0.577, 0.577, 0.577,
            0.577, 0.577, 0.577,
            0.577, 0.577, 0.577,
            -0.000, 0.707, 0.707,
            -0.000, 0.707, 0.707,
            -0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            -0.577, 0.577, 0.577,
            -0.577, 0.577, 0.577,
            -0.577, 0.577, 0.577,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xBFBFC1,
            shininess: 2.297,
            ambient: 0x0B0101,
            side: THREE.FrontSide,
            specular: 0xD2D2D2
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
