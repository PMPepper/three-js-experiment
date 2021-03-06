function create_geometry_31(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.464, 5.802, 2.645,
            -0.633, 5.503, 2.645,
            -0.047, 5.987, 2.645,
            -0.633, 5.503, 2.645,
            -0.648, 5.160, 2.645,
            -0.047, 5.987, 2.645,
            -0.648, 5.160, 2.645,
            -0.393, 4.782, 2.645,
            -0.047, 5.987, 2.645,
            -0.310, 5.167, 2.620,
            -0.459, 5.046, 2.620,
            -0.484, 5.382, 2.620,
            -0.484, 5.382, 2.620,
            -0.459, 5.046, 2.620,
            -0.633, 5.261, 2.620,
            -0.632, 5.436, 2.653,
            -0.008, 5.942, 2.653,
            -0.176, 4.873, 2.653,
            -0.404, 5.864, -2.645,
            0.028, 6.013, -2.645,
            0.436, 4.827, -2.645,
            0.028, 6.013, -2.645,
            0.454, 5.849, -2.645,
            0.436, 4.827, -2.645,
            0.454, 5.849, -2.645,
            0.638, 5.560, -2.645,
            0.436, 4.827, -2.645,
            0.638, 5.560, -2.645,
            0.671, 5.219, -2.645,
            0.436, 4.827, -2.645,
            0.004, 4.679, -2.645,
            -0.422, 4.842, -2.645,
            0.436, 4.827, -2.645,
            -0.422, 4.842, -2.645,
            -0.606, 5.132, -2.645,
            0.436, 4.827, -2.645,
            -0.606, 5.132, -2.645,
            -0.639, 5.473, -2.645,
            0.436, 4.827, -2.645,
            -0.639, 5.473, -2.645,
            -0.404, 5.864, -2.645,
            0.436, 4.827, -2.645,
            0.276, 4.719, -2.688,
            0.116, 4.662, -2.688,
            0.082, 6.029, -2.688,
            0.082, 6.029, -2.688,
            0.116, 4.662, -2.688,
            -0.087, 6.038, -2.688,
            -0.087, 6.038, -2.688,
            -0.053, 4.671, -2.688,
            -0.247, 5.980, -2.688,
            0.536, 5.788, -2.688,
            -0.269, 4.707, -2.688,
            0.421, 5.913, -2.688,
            -0.269, 4.707, -2.688,
            -0.511, 4.913, -2.688,
            0.421, 5.913, -2.688,
            0.421, 5.913, -2.688,
            -0.511, 4.913, -2.688,
            0.267, 5.984, -2.688,
            0.650, 5.097, -2.688,
            0.483, 4.827, -2.688,
            -0.421, 5.875, -2.688,
            -0.421, 5.875, -2.688,
            0.483, 4.827, -2.688,
            -0.546, 5.760, -2.688,
            -0.546, 5.760, -2.688,
            0.483, 4.827, -2.688,
            -0.617, 5.606, -2.688,
            0.648, 5.615, -2.688,
            0.717, 5.305, -2.688,
            -0.662, 5.421, -2.688,
            -0.662, 5.421, -2.688,
            0.717, 5.305, -2.688,
            -0.671, 5.252, -2.688,
            -0.671, 5.252, -2.688,
            0.717, 5.305, -2.688,
            -0.613, 5.092, -2.688,
            -0.360, 5.711, -2.620,
            -0.204, 5.598, -2.620,
            -0.197, 5.935, -2.620,
            -0.197, 5.935, -2.620,
            -0.204, 5.598, -2.620,
            -0.042, 5.822, -2.620,
            0.333, 5.207, -2.620,
            0.489, 5.095, -2.620,
            0.496, 5.431, -2.620,
            0.496, 5.431, -2.620,
            0.489, 5.095, -2.620,
            0.651, 5.318, -2.620,
            0.641, 5.493, -2.653,
            -0.009, 5.965, -2.653,
            0.215, 4.907, -2.653,
            0.215, 4.907, -2.653,
            -0.009, 5.965, -2.653,
            -0.434, 5.379, -2.653,
            -0.393, 4.782, 2.645,
            0.046, 4.656, 2.645,
            -0.047, 5.987, 2.645,
            0.046, 4.656, 2.645,
            0.463, 4.842, 2.645,
            -0.047, 5.987, 2.645,
            0.463, 4.842, 2.645,
            0.632, 5.140, 2.645,
            -0.047, 5.987, 2.645,
            0.632, 5.140, 2.645,
            0.647, 5.483, 2.645,
            -0.047, 5.987, 2.645,
            0.647, 5.483, 2.645,
            0.392, 5.861, 2.645,
            -0.047, 5.987, 2.645,
            -0.227, 4.682, 2.688,
            0.086, 4.629, 2.688,
            -0.102, 6.000, 2.688,
            -0.102, 6.000, 2.688,
            0.086, 4.629, 2.688,
            0.066, 6.018, 2.688,
            0.066, 6.018, 2.688,
            0.086, 4.629, 2.688,
            0.229, 5.969, 2.688,
            -0.543, 5.736, 2.688,
            0.318, 4.699, 2.688,
            -0.435, 5.867, 2.688,
            0.318, 4.699, 2.688,
            0.549, 4.917, 2.688,
            -0.435, 5.867, 2.688,
            -0.435, 5.867, 2.688,
            0.549, 4.917, 2.688,
            -0.284, 5.945, 2.688,
            -0.620, 5.040, 2.688,
            -0.439, 4.779, 2.688,
            0.408, 5.873, 2.688,
            0.408, 5.873, 2.688,
            -0.439, 4.779, 2.688,
            0.539, 5.765, 2.688,
            0.539, 5.765, 2.688,
            -0.439, 4.779, 2.688,
            0.618, 5.614, 2.688,
            -0.645, 5.557, 2.688,
            -0.695, 5.395, 2.688,
            0.673, 5.432, 2.688,
            0.673, 5.432, 2.688,
            -0.695, 5.395, 2.688,
            0.691, 5.264, 2.688,
            -0.695, 5.395, 2.688,
            -0.676, 5.226, 2.688,
            0.691, 5.264, 2.688,
            0.691, 5.264, 2.688,
            -0.676, 5.226, 2.688,
            0.641, 5.101, 2.688,
            0.356, 5.706, 2.620,
            0.206, 5.585, 2.620,
            0.182, 5.921, 2.620,
            0.182, 5.921, 2.620,
            0.206, 5.585, 2.620,
            0.032, 5.800, 2.620,
            -0.176, 4.873, 2.653,
            -0.008, 5.942, 2.653,
            0.448, 5.379, 2.653,
            0.116, 4.662, -2.688,
            -0.053, 4.671, -2.688,
               -0.087, 6.038, -2.688
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xB27E75,
            shininess: 39.397,
            ambient: 0x000000,
            side: THREE.FrontSide,
            specular: 0xFFFFFF
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
