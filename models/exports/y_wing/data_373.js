function create_geometry_373(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            52.929, -119.641, 28.052,
            46.477, -121.370, 53.418,
            52.929, -119.641, 53.418,
            52.929, -119.641, 28.052,
            46.477, -121.370, 28.052,
            46.477, -121.370, 53.418,
            46.477, -121.370, 28.052,
            41.753, -126.093, 53.418,
            46.477, -121.370, 53.418,
            46.477, -121.370, 28.052,
            41.753, -126.093, 28.052,
            41.753, -126.093, 53.418,
            41.753, -126.093, 28.052,
            40.024, -132.545, 53.418,
            41.753, -126.093, 53.418,
            41.753, -126.093, 28.052,
            40.024, -132.545, 28.052,
            40.024, -132.545, 53.418,
            40.024, -132.545, 28.052,
            41.753, -138.997, 53.418,
            40.024, -132.545, 53.418,
            40.024, -132.545, 28.052,
            41.753, -138.997, 28.052,
            41.753, -138.997, 53.418,
            41.753, -138.997, 28.052,
            46.477, -143.720, 53.418,
            41.753, -138.997, 53.418,
            41.753, -138.997, 28.052,
            46.477, -143.720, 28.052,
            46.477, -143.720, 53.418,
            46.477, -143.720, 28.052,
            52.929, -145.449, 53.418,
            46.477, -143.720, 53.418,
            46.477, -143.720, 28.052,
            52.929, -145.449, 28.052,
            52.929, -145.449, 53.418,
            52.929, -145.449, 28.052,
            59.381, -143.720, 53.418,
            52.929, -145.449, 53.418,
            52.929, -145.449, 28.052,
            59.381, -143.720, 28.052,
            59.381, -143.720, 53.418,
            59.381, -143.720, 28.052,
            64.104, -138.997, 53.418,
            59.381, -143.720, 53.418,
            59.381, -143.720, 28.052,
            64.104, -138.997, 28.052,
            64.104, -138.997, 53.418,
            64.104, -138.997, 28.052,
            65.833, -132.545, 53.418,
            64.104, -138.997, 53.418,
            64.104, -138.997, 28.052,
            65.833, -132.545, 28.052,
            65.833, -132.545, 53.418,
            65.833, -132.545, 28.052,
            64.104, -126.093, 53.418,
            65.833, -132.545, 53.418,
            65.833, -132.545, 28.052,
            64.104, -126.093, 28.052,
            64.104, -126.093, 53.418,
            64.104, -126.093, 28.052,
            59.381, -121.370, 53.418,
            64.104, -126.093, 53.418,
            64.104, -126.093, 28.052,
            59.381, -121.370, 28.052,
            59.381, -121.370, 53.418,
            59.381, -121.370, 28.052,
            52.929, -119.641, 53.418,
            59.381, -121.370, 53.418,
            59.381, -121.370, 28.052,
            52.929, -119.641, 28.052,
            52.929, -119.641, 53.418,
            52.929, -132.545, 53.418,
            52.929, -119.641, 53.418,
            46.477, -121.370, 53.418,
            52.929, -132.545, 53.418,
            46.477, -121.370, 53.418,
            41.753, -126.093, 53.418,
            52.929, -132.545, 53.418,
            41.753, -126.093, 53.418,
            40.024, -132.545, 53.418,
            52.929, -132.545, 53.418,
            40.024, -132.545, 53.418,
            41.753, -138.997, 53.418,
            52.929, -132.545, 53.418,
            41.753, -138.997, 53.418,
            46.477, -143.720, 53.418,
            52.929, -132.545, 53.418,
            46.477, -143.720, 53.418,
            52.929, -145.449, 53.418,
            52.929, -132.545, 53.418,
            52.929, -145.449, 53.418,
            59.381, -143.720, 53.418,
            52.929, -132.545, 53.418,
            59.381, -143.720, 53.418,
            64.104, -138.997, 53.418,
            52.929, -132.545, 53.418,
            64.104, -138.997, 53.418,
            65.833, -132.545, 53.418,
            52.929, -132.545, 53.418,
            65.833, -132.545, 53.418,
            64.104, -126.093, 53.418,
            52.929, -132.545, 53.418,
            64.104, -126.093, 53.418,
            59.381, -121.370, 53.418,
            52.929, -132.545, 53.418,
            59.381, -121.370, 53.418,
               52.929, -119.641, 53.418
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 1.000, -0.000,
            -0.500, 0.866, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.866, 0.500, -0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, -0.000,
            -0.866, 0.500, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.500, -0.000,
            -0.866, 0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.500, -0.866, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.000, -1.000, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.500, -0.866, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.866, -0.500, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.866, -0.500, -0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, -0.000,
            1.000, 0.000, -0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, 0.500, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, 0.500, 0.000,
            0.866, 0.500, -0.000,
            0.866, 0.500, 0.000,
            0.500, 0.866, 0.000,
            0.866, 0.500, -0.000,
            0.866, 0.500, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.000, 1.000, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
               0.000, 0.000, 1.000
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
