function create_geometry_322(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -177.199, -74.177, -2.956,
            -177.199, -73.553, -3.579,
            -177.822, -74.177, -3.579,
            -177.199, -74.177, -2.956,
            -177.822, -74.177, -3.579,
            -177.199, -74.800, -3.579,
            -177.199, -74.177, -2.956,
            -177.199, -74.800, -3.579,
            -176.575, -74.177, -3.579,
            -177.199, -74.177, -2.956,
            -176.575, -74.177, -3.579,
            -177.199, -73.553, -3.579,
            -177.199, -74.177, -4.203,
            -177.822, -74.177, -3.579,
            -177.199, -73.553, -3.579,
            -177.199, -74.177, -4.203,
            -177.199, -74.800, -3.579,
            -177.822, -74.177, -3.579,
            -177.199, -74.177, -4.203,
            -176.575, -74.177, -3.579,
            -177.199, -74.800, -3.579,
            -177.199, -74.177, -4.203,
            -177.199, -73.553, -3.579,
               -176.575, -74.177, -3.579
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 1.000, 0.000,
               1.000, 0.000, 0.000
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
