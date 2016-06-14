function create_geometry_372(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -55.344, -151.853, 21.600,
            -57.073, -88.891, 28.052,
            -55.344, -88.891, 21.600,
            -55.344, -151.853, 21.600,
            -57.073, -151.853, 28.052,
            -57.073, -88.891, 28.052,
            -57.073, -151.853, 28.052,
            -55.344, -88.891, 34.504,
            -57.073, -88.891, 28.052,
            -57.073, -151.853, 28.052,
            -55.344, -151.853, 34.504,
            -55.344, -88.891, 34.504,
            -55.344, -151.853, 34.504,
            -50.621, -88.891, 39.227,
            -55.344, -88.891, 34.504,
            -55.344, -151.853, 34.504,
            -50.621, -151.853, 39.227,
            -50.621, -88.891, 39.227,
            -50.621, -151.853, 39.227,
            -44.169, -88.891, 40.956,
            -50.621, -88.891, 39.227,
            -50.621, -151.853, 39.227,
            -44.169, -151.853, 40.956,
            -44.169, -88.891, 40.956,
            -44.169, -151.853, 40.956,
            -37.717, -88.891, 39.227,
            -44.169, -88.891, 40.956,
            -44.169, -151.853, 40.956,
            -37.717, -151.853, 39.227,
            -37.717, -88.891, 39.227,
            -37.717, -151.853, 39.227,
            -32.994, -88.891, 34.504,
            -37.717, -88.891, 39.227,
            -37.717, -151.853, 39.227,
            -32.994, -151.853, 34.504,
            -32.994, -88.891, 34.504,
            -32.994, -151.853, 34.504,
            -31.265, -88.891, 28.052,
            -32.994, -88.891, 34.504,
            -32.994, -151.853, 34.504,
            -31.265, -151.853, 28.052,
            -31.265, -88.891, 28.052,
            -31.265, -151.853, 28.052,
            -32.994, -88.891, 21.600,
            -31.265, -88.891, 28.052,
            -31.265, -151.853, 28.052,
            -32.994, -151.853, 21.600,
               -32.994, -88.891, 21.600
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.966, -0.000, -0.259,
            -1.000, -0.000, 0.000,
            -0.966, -0.000, -0.259,
            -0.966, -0.000, -0.259,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -0.866, 0.000, 0.500,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -0.866, -0.000, 0.500,
            -0.866, 0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.500, 0.000, 0.866,
            -0.866, 0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            0.000, 0.000, 1.000,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.500, 0.000, 0.866,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.500, 0.000, 0.866,
            0.500, 0.000, 0.866,
            0.500, 0.000, 0.866,
            0.866, 0.000, 0.500,
            0.500, 0.000, 0.866,
            0.500, 0.000, 0.866,
            0.866, 0.000, 0.500,
            0.866, 0.000, 0.500,
            0.866, 0.000, 0.500,
            1.000, 0.000, -0.000,
            0.866, 0.000, 0.500,
            0.866, 0.000, 0.500,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.966, 0.000, -0.259,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.966, 0.000, -0.259,
               0.966, 0.000, -0.259
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
