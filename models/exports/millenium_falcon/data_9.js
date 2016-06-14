function create_geometry_9(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -7.444, -5.103, -0.377,
            -7.405, -5.114, -0.375,
            -6.945, -3.529, -0.282,
            -7.444, -5.103, -0.377,
            -6.945, -3.529, -0.282,
            -6.991, -3.520, -0.288,
            -8.878, -3.535, -0.276,
            -8.396, -5.114, -0.375,
            -8.371, -5.103, -0.377,
            -8.878, -3.535, -0.276,
            -8.371, -5.103, -0.377,
               -8.816, -3.520, -0.288
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.074, -0.037, 0.997,
            -0.073, -0.037, 0.997,
            -0.123, -0.021, 0.992,
            -0.074, -0.037, 0.997,
            -0.123, -0.021, 0.992,
            -0.124, -0.020, 0.992,
            0.191, -0.001, 0.982,
            0.107, -0.030, 0.994,
            0.109, -0.029, 0.994,
            0.191, -0.001, 0.982,
            0.109, -0.029, 0.994,
               0.192, -0.001, 0.981
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xBDC0CD,
            shininess: 39.397,
            ambient: 0x000000,
            side: THREE.FrontSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
