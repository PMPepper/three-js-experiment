function create_geometry_42(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            102.508, -29.661, 47.735,
            112.849, -29.661, 47.735,
            112.849, -12.170, 47.735,
            102.508, -29.661, 47.735,
            112.849, -12.170, 47.735,
            102.508, -12.170, 47.735,
            102.508, -29.661, 47.735,
            102.178, -29.661, 47.022,
            102.508, -29.991, 47.022,
            102.508, -29.661, 47.735,
            102.508, -29.991, 47.022,
            112.849, -29.991, 47.022,
            102.508, -29.661, 47.735,
            112.849, -29.991, 47.022,
            112.849, -29.661, 47.735,
            112.849, -29.661, 47.735,
            112.849, -29.991, 47.022,
            113.179, -29.661, 47.022,
            112.849, -29.661, 47.735,
            113.179, -29.661, 47.022,
            113.179, -12.170, 47.022,
            112.849, -29.661, 47.735,
            113.179, -12.170, 47.022,
            112.849, -12.170, 47.735,
            112.849, -12.170, 47.735,
            113.179, -12.170, 47.022,
            112.849, -11.840, 47.022,
            112.849, -12.170, 47.735,
            112.849, -11.840, 47.022,
            102.508, -11.840, 47.022,
            112.849, -12.170, 47.735,
            102.508, -11.840, 47.022,
            102.508, -12.170, 47.735,
            102.508, -12.170, 47.735,
            102.508, -11.840, 47.022,
            102.178, -12.170, 47.022,
            102.508, -12.170, 47.735,
            102.178, -12.170, 47.022,
            102.178, -29.661, 47.022,
            102.508, -12.170, 47.735,
            102.178, -29.661, 47.022,
            102.508, -29.661, 47.735,
            102.178, -29.661, 47.022,
            102.178, -29.661, 42.509,
            102.508, -29.991, 42.509,
            102.178, -29.661, 47.022,
            102.508, -29.991, 42.509,
            102.508, -29.991, 47.022,
            102.508, -29.991, 47.022,
            102.508, -29.991, 42.509,
            112.849, -29.991, 42.509,
            102.508, -29.991, 47.022,
            112.849, -29.991, 42.509,
            112.849, -29.991, 47.022,
            112.849, -29.991, 47.022,
            112.849, -29.991, 42.509,
            113.179, -29.661, 42.509,
            112.849, -29.991, 47.022,
            113.179, -29.661, 42.509,
            113.179, -29.661, 47.022,
            113.179, -29.661, 47.022,
            113.179, -29.661, 42.509,
            113.179, -12.170, 42.509,
            113.179, -29.661, 47.022,
            113.179, -12.170, 42.509,
            113.179, -12.170, 47.022,
            113.179, -12.170, 47.022,
            113.179, -12.170, 42.509,
            112.849, -11.840, 42.509,
            113.179, -12.170, 47.022,
            112.849, -11.840, 42.509,
            112.849, -11.840, 47.022,
            112.849, -11.840, 47.022,
            112.849, -11.840, 42.509,
            102.508, -11.840, 42.509,
            112.849, -11.840, 47.022,
            102.508, -11.840, 42.509,
            102.508, -11.840, 47.022,
            102.508, -11.840, 47.022,
            102.508, -11.840, 42.509,
            102.178, -12.170, 42.509,
            102.508, -11.840, 47.022,
            102.178, -12.170, 42.509,
            102.178, -12.170, 47.022,
            102.178, -12.170, 47.022,
            102.178, -12.170, 42.509,
            102.178, -29.661, 42.509,
            102.178, -12.170, 47.022,
            102.178, -29.661, 42.509,
               102.178, -29.661, 47.022
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.672, -0.672, 0.311,
            -0.672, -0.672, 0.311,
            -0.672, -0.672, 0.311,
            -0.000, -0.907, 0.420,
            -0.000, -0.907, 0.420,
            -0.000, -0.907, 0.420,
            -0.000, -0.907, 0.420,
            -0.000, -0.907, 0.420,
            -0.000, -0.907, 0.420,
            0.672, -0.672, 0.311,
            0.672, -0.672, 0.311,
            0.672, -0.672, 0.311,
            0.907, 0.000, 0.420,
            0.907, -0.000, 0.420,
            0.907, 0.000, 0.420,
            0.907, -0.000, 0.420,
            0.907, 0.000, 0.420,
            0.907, 0.000, 0.420,
            0.672, 0.672, 0.311,
            0.672, 0.672, 0.311,
            0.672, 0.672, 0.311,
            0.000, 0.907, 0.420,
            0.000, 0.907, 0.420,
            0.000, 0.907, 0.420,
            0.000, 0.907, 0.420,
            0.000, 0.907, 0.420,
            0.000, 0.907, 0.420,
            -0.672, 0.672, 0.311,
            -0.672, 0.672, 0.311,
            -0.672, 0.672, 0.311,
            -0.907, 0.000, 0.420,
            -0.907, 0.000, 0.420,
            -0.907, 0.000, 0.420,
            -0.907, 0.000, 0.420,
            -0.907, 0.000, 0.420,
            -0.907, 0.000, 0.420,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
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
