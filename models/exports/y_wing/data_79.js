function create_geometry_79(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            300.898, 301.545, -101.823,
            298.419, 301.545, -107.372,
            298.419, 296.259, -107.372,
            300.898, 301.545, -101.823,
            298.419, 296.259, -107.372,
            300.898, 296.259, -101.823,
            298.419, 301.545, -107.372,
            298.863, 301.545, -108.464,
            298.863, 296.259, -108.464,
            298.419, 301.545, -107.372,
            298.863, 296.259, -108.464,
            298.419, 296.259, -107.372,
            298.863, 301.545, -108.464,
            299.372, 301.545, -109.492,
            299.372, 296.259, -109.492,
            298.863, 301.545, -108.464,
            299.372, 296.259, -109.492,
            298.863, 296.259, -108.464,
            299.372, 301.545, -109.492,
            300.010, 301.545, -110.395,
            300.010, 296.259, -110.395,
            299.372, 301.545, -109.492,
            300.010, 296.259, -110.395,
            299.372, 296.259, -109.492,
            300.010, 301.545, -110.395,
            300.842, 301.545, -111.107,
            300.842, 296.259, -111.107,
            300.010, 301.545, -110.395,
            300.842, 296.259, -111.107,
            300.010, 296.259, -110.395,
            300.842, 301.545, -111.107,
            301.932, 301.545, -111.566,
            301.932, 296.259, -111.566,
            300.842, 301.545, -111.107,
            301.932, 296.259, -111.566,
            300.842, 296.259, -111.107,
            301.932, 301.545, -111.566,
            303.345, 301.545, -111.708,
            303.345, 296.259, -111.708,
            301.932, 301.545, -111.566,
            303.345, 296.259, -111.708,
            301.932, 296.259, -111.566,
            303.345, 301.545, -111.708,
            305.146, 301.545, -111.470,
            305.146, 296.259, -111.470,
            303.345, 301.545, -111.708,
            305.146, 296.259, -111.470,
            303.345, 296.259, -111.708,
            305.146, 301.545, -111.470,
            310.332, 301.545, -114.724,
            310.332, 296.259, -114.724,
            305.146, 301.545, -111.470,
            310.332, 296.259, -114.724,
            305.146, 296.259, -111.470,
            310.332, 301.545, -114.724,
            315.125, 301.545, -117.436,
            315.125, 296.259, -117.436,
            310.332, 301.545, -114.724,
            315.125, 296.259, -117.436,
            310.332, 296.259, -114.724,
            315.125, 301.545, -117.436,
            319.590, 301.545, -119.695,
            319.590, 296.259, -119.695,
            315.125, 301.545, -117.436,
            319.590, 296.259, -119.695,
            315.125, 296.259, -117.436,
            319.590, 301.545, -119.695,
            323.794, 301.545, -121.592,
            323.794, 296.259, -121.592,
            319.590, 301.545, -119.695,
            323.794, 296.259, -121.592,
            319.590, 296.259, -119.695,
            323.794, 301.545, -121.592,
            327.802, 301.545, -123.218,
            327.802, 296.259, -123.218,
            323.794, 301.545, -121.592,
            327.802, 296.259, -123.218,
            323.794, 296.259, -121.592,
            327.802, 301.545, -123.218,
            331.679, 301.545, -124.664,
            331.679, 296.259, -124.664,
            327.802, 301.545, -123.218,
            331.679, 296.259, -124.664,
            327.802, 296.259, -123.218,
            331.679, 301.545, -124.664,
            335.491, 301.545, -126.018,
            335.491, 296.259, -126.018,
            331.679, 301.545, -124.664,
            335.491, 296.259, -126.018,
            331.679, 296.259, -124.664,
            335.491, 301.545, -126.018,
            338.224, 301.545, -123.977,
            338.224, 296.259, -123.977,
            335.491, 301.545, -126.018,
            338.224, 296.259, -123.977,
            335.491, 296.259, -126.018,
            335.491, 301.545, -126.018,
            322.086, 301.545, -117.451,
            338.224, 301.545, -123.977,
            331.679, 301.545, -124.664,
            322.086, 301.545, -117.451,
            335.491, 301.545, -126.018,
            327.802, 301.545, -123.218,
            322.086, 301.545, -117.451,
            331.679, 301.545, -124.664,
            323.794, 301.545, -121.592,
            322.086, 301.545, -117.451,
            327.802, 301.545, -123.218,
            319.590, 301.545, -119.695,
            322.086, 301.545, -117.451,
            323.794, 301.545, -121.592,
            322.086, 301.545, -117.451,
            298.419, 301.545, -107.372,
            300.898, 301.545, -101.823,
            322.086, 301.545, -117.451,
            298.863, 301.545, -108.464,
            298.419, 301.545, -107.372,
            315.125, 301.545, -117.436,
            322.086, 301.545, -117.451,
            319.590, 301.545, -119.695,
            310.332, 301.545, -114.724,
            322.086, 301.545, -117.451,
            315.125, 301.545, -117.436,
            305.146, 301.545, -111.470,
            322.086, 301.545, -117.451,
            310.332, 301.545, -114.724,
            305.146, 301.545, -111.470,
            298.863, 301.545, -108.464,
            322.086, 301.545, -117.451,
            303.345, 301.545, -111.708,
            298.863, 301.545, -108.464,
            305.146, 301.545, -111.470,
            303.345, 301.545, -111.708,
            299.372, 301.545, -109.492,
            298.863, 301.545, -108.464,
            301.932, 301.545, -111.566,
            299.372, 301.545, -109.492,
            303.345, 301.545, -111.708,
            301.932, 301.545, -111.566,
            300.010, 301.545, -110.395,
            299.372, 301.545, -109.492,
            300.842, 301.545, -111.107,
            300.010, 301.545, -110.395,
            301.932, 301.545, -111.566,
            335.491, 296.259, -126.018,
            338.224, 296.259, -123.977,
            322.086, 296.259, -117.451,
            331.679, 296.259, -124.664,
            335.491, 296.259, -126.018,
            322.086, 296.259, -117.451,
            327.802, 296.259, -123.218,
            331.679, 296.259, -124.664,
            322.086, 296.259, -117.451,
            323.794, 296.259, -121.592,
            327.802, 296.259, -123.218,
            322.086, 296.259, -117.451,
            319.590, 296.259, -119.695,
            323.794, 296.259, -121.592,
            322.086, 296.259, -117.451,
            322.086, 296.259, -117.451,
            300.898, 296.259, -101.823,
            298.419, 296.259, -107.372,
            322.086, 296.259, -117.451,
            298.419, 296.259, -107.372,
            298.863, 296.259, -108.464,
            315.125, 296.259, -117.436,
            319.590, 296.259, -119.695,
            322.086, 296.259, -117.451,
            310.332, 296.259, -114.724,
            315.125, 296.259, -117.436,
            322.086, 296.259, -117.451,
            305.146, 296.259, -111.470,
            310.332, 296.259, -114.724,
            322.086, 296.259, -117.451,
            305.146, 296.259, -111.470,
            322.086, 296.259, -117.451,
            298.863, 296.259, -108.464,
            303.345, 296.259, -111.708,
            305.146, 296.259, -111.470,
            298.863, 296.259, -108.464,
            303.345, 296.259, -111.708,
            298.863, 296.259, -108.464,
            299.372, 296.259, -109.492,
            301.932, 296.259, -111.566,
            303.345, 296.259, -111.708,
            299.372, 296.259, -109.492,
            301.932, 296.259, -111.566,
            299.372, 296.259, -109.492,
            300.010, 296.259, -110.395,
            300.842, 296.259, -111.107,
            301.932, 296.259, -111.566,
               300.010, 296.259, -110.395
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.913, 0.000, 0.408,
            -0.913, 0.000, 0.408,
            -0.913, 0.000, 0.408,
            -0.913, 0.000, 0.408,
            -0.913, 0.000, 0.408,
            -0.913, 0.000, 0.408,
            -0.926, 0.000, -0.377,
            -0.912, 0.000, -0.410,
            -0.912, 0.000, -0.410,
            -0.926, 0.000, -0.377,
            -0.912, 0.000, -0.410,
            -0.926, 0.000, -0.377,
            -0.912, 0.000, -0.410,
            -0.859, 0.000, -0.512,
            -0.859, 0.000, -0.512,
            -0.912, 0.000, -0.410,
            -0.859, 0.000, -0.512,
            -0.912, 0.000, -0.410,
            -0.859, 0.000, -0.512,
            -0.739, 0.000, -0.674,
            -0.739, 0.000, -0.674,
            -0.859, 0.000, -0.512,
            -0.739, 0.000, -0.674,
            -0.859, 0.000, -0.512,
            -0.739, 0.000, -0.674,
            -0.525, 0.000, -0.851,
            -0.525, 0.000, -0.851,
            -0.739, 0.000, -0.674,
            -0.525, 0.000, -0.851,
            -0.739, 0.000, -0.674,
            -0.525, 0.000, -0.851,
            -0.247, 0.000, -0.969,
            -0.247, 0.000, -0.969,
            -0.525, 0.000, -0.851,
            -0.247, 0.000, -0.969,
            -0.525, 0.000, -0.851,
            -0.247, 0.000, -0.969,
            0.015, 0.000, -1.000,
            0.015, 0.000, -1.000,
            -0.247, 0.000, -0.969,
            0.015, 0.000, -1.000,
            -0.247, 0.000, -0.969,
            0.015, 0.000, -1.000,
            0.131, 0.000, -0.991,
            0.131, 0.000, -0.991,
            0.015, 0.000, -1.000,
            0.131, 0.000, -0.991,
            0.015, 0.000, -1.000,
            -0.532, 0.000, -0.847,
            -0.512, 0.000, -0.859,
            -0.512, 0.000, -0.859,
            -0.532, 0.000, -0.847,
            -0.512, 0.000, -0.859,
            -0.532, 0.000, -0.847,
            -0.512, 0.000, -0.859,
            -0.472, 0.000, -0.882,
            -0.472, 0.000, -0.882,
            -0.512, 0.000, -0.859,
            -0.472, 0.000, -0.882,
            -0.512, 0.000, -0.859,
            -0.472, 0.000, -0.882,
            -0.432, 0.000, -0.902,
            -0.432, 0.000, -0.902,
            -0.472, 0.000, -0.882,
            -0.432, 0.000, -0.902,
            -0.472, 0.000, -0.882,
            -0.432, 0.000, -0.902,
            -0.394, 0.000, -0.919,
            -0.394, 0.000, -0.919,
            -0.432, 0.000, -0.902,
            -0.394, 0.000, -0.919,
            -0.432, 0.000, -0.902,
            -0.394, 0.000, -0.919,
            -0.363, 0.000, -0.932,
            -0.363, 0.000, -0.932,
            -0.394, 0.000, -0.919,
            -0.363, 0.000, -0.932,
            -0.394, 0.000, -0.919,
            -0.363, 0.000, -0.932,
            -0.342, 0.000, -0.940,
            -0.342, 0.000, -0.940,
            -0.363, 0.000, -0.932,
            -0.342, 0.000, -0.940,
            -0.363, 0.000, -0.932,
            -0.342, 0.000, -0.940,
            -0.335, 0.000, -0.942,
            -0.335, 0.000, -0.942,
            -0.342, 0.000, -0.940,
            -0.335, 0.000, -0.942,
            -0.342, 0.000, -0.940,
            0.598, -0.000, -0.801,
            0.598, -0.000, -0.801,
            0.598, -0.000, -0.801,
            0.598, -0.000, -0.801,
            0.598, -0.000, -0.801,
            0.598, 0.000, -0.801,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
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
