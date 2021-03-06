function create_geometry_419(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -14.885, -379.667, 119.122,
            -14.885, -379.728, 122.647,
            14.728, -379.728, 122.647,
            14.728, -379.728, 122.647,
            14.728, -379.667, 119.122,
            -14.885, -379.667, 119.122,
            -14.885, -386.213, 119.008,
            14.728, -386.213, 119.008,
            14.728, -386.274, 122.533,
            14.728, -386.274, 122.533,
            -14.885, -386.274, 122.533,
            -14.885, -386.213, 119.008,
            -14.885, -379.667, 119.122,
            14.728, -379.667, 119.122,
            14.728, -386.213, 119.008,
            14.728, -386.213, 119.008,
            -14.885, -386.213, 119.008,
            -14.885, -379.667, 119.122,
            14.728, -379.667, 119.122,
            14.728, -379.728, 122.647,
            14.728, -386.274, 122.533,
            14.728, -386.274, 122.533,
            14.728, -386.213, 119.008,
            14.728, -379.667, 119.122,
            14.728, -379.728, 122.647,
            -14.885, -379.728, 122.647,
            -14.885, -386.274, 122.533,
            -14.885, -386.274, 122.533,
            14.728, -386.274, 122.533,
            14.728, -379.728, 122.647,
            -14.885, -379.728, 122.647,
            -14.885, -379.667, 119.122,
            -14.885, -386.213, 119.008,
            -14.885, -386.213, 119.008,
            -14.885, -386.274, 122.533,
               -14.885, -379.728, 122.647
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 1.000, 0.017,
            0.000, 1.000, 0.017,
            0.000, 1.000, 0.017,
            0.000, 1.000, 0.017,
            0.000, 1.000, 0.017,
            0.000, 1.000, 0.017,
            -0.000, -1.000, -0.017,
            0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            -0.000, 0.017, -1.000,
            -0.000, 0.017, -1.000,
            -0.000, 0.017, -1.000,
            -0.000, 0.017, -1.000,
            0.000, 0.017, -1.000,
            -0.000, 0.017, -1.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            0.000, -0.017, 1.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
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
