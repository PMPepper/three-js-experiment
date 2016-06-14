function create_geometry_39(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -309.867, -43.015, 17.172,
            -312.329, -21.802, 29.827,
            -297.821, -21.802, 15.319,
            -309.867, -43.015, 17.172,
            -297.821, -21.802, 15.319,
            -298.892, -43.605, 8.842,
            -312.329, -21.802, 29.827,
            -308.545, -25.061, 33.611,
            -294.037, -25.061, 19.103,
            -312.329, -21.802, 29.827,
            -294.037, -25.061, 19.103,
            -297.821, -21.802, 15.319,
            -308.545, -25.061, 33.611,
            -308.754, -28.227, 33.402,
            -294.246, -28.227, 18.894,
            -308.545, -25.061, 33.611,
            -294.246, -28.227, 18.894,
            -294.037, -25.061, 19.103,
            -308.754, -28.227, 33.402,
            -310.279, -38.801, 31.877,
            -295.771, -38.801, 17.369,
            -308.754, -28.227, 33.402,
            -295.771, -38.801, 17.369,
            -294.246, -28.227, 18.894,
            -310.279, -38.801, 31.877,
            -311.987, -47.974, 30.169,
            -297.479, -47.974, 15.661,
            -310.279, -38.801, 31.877,
            -297.479, -47.974, 15.661,
            -295.771, -38.801, 17.369,
            -311.987, -47.974, 30.169,
            -314.028, -57.039, 28.129,
            -299.519, -57.039, 13.621,
            -311.987, -47.974, 30.169,
            -299.519, -57.039, 13.621,
            -297.479, -47.974, 15.661,
            -314.028, -57.039, 28.129,
            -315.121, -62.578, 26.214,
            -301.434, -62.578, 12.527,
            -314.028, -57.039, 28.129,
            -301.434, -62.578, 12.527,
            -299.519, -57.039, 13.621,
            -315.121, -62.578, 26.214,
            -319.495, -65.395, 21.442,
            -306.207, -65.395, 8.153,
            -315.121, -62.578, 26.214,
            -306.207, -65.395, 8.153,
            -301.434, -62.578, 12.527,
            -315.121, -62.578, 26.214,
            -312.329, -21.802, 29.827,
            -319.061, -43.375, 27.854,
            -314.028, -57.039, 28.129,
            -312.329, -21.802, 29.827,
            -315.121, -62.578, 26.214,
            -311.987, -47.974, 30.169,
            -312.329, -21.802, 29.827,
            -314.028, -57.039, 28.129,
            -310.279, -38.801, 31.877,
            -312.329, -21.802, 29.827,
            -311.987, -47.974, 30.169,
            -308.754, -28.227, 33.402,
            -312.329, -21.802, 29.827,
            -310.279, -38.801, 31.877,
            -308.754, -28.227, 33.402,
            -308.545, -25.061, 33.611,
            -312.329, -21.802, 29.827,
            -301.434, -62.578, 12.527,
            -298.892, -43.605, 8.842,
            -297.821, -21.802, 15.319,
            -299.519, -57.039, 13.621,
            -301.434, -62.578, 12.527,
            -297.821, -21.802, 15.319,
            -297.479, -47.974, 15.661,
            -299.519, -57.039, 13.621,
            -297.821, -21.802, 15.319,
            -295.771, -38.801, 17.369,
            -297.479, -47.974, 15.661,
            -297.821, -21.802, 15.319,
            -294.246, -28.227, 18.894,
            -295.771, -38.801, 17.369,
            -297.821, -21.802, 15.319,
            -294.246, -28.227, 18.894,
            -297.821, -21.802, 15.319,
            -294.037, -25.061, 19.103,
            -312.329, -21.802, 29.827,
            -309.867, -43.015, 17.172,
            -319.061, -43.375, 27.854,
            -309.867, -43.015, 17.172,
            -306.207, -65.395, 8.153,
            -319.495, -65.395, 21.442,
            -315.121, -62.578, 26.214,
            -319.061, -43.375, 27.854,
            -319.495, -65.395, 21.442,
            -319.061, -43.375, 27.854,
            -309.867, -43.015, 17.172,
            -319.495, -65.395, 21.442,
            -309.867, -43.015, 17.172,
            -298.892, -43.605, 8.842,
            -306.207, -65.395, 8.153,
            -298.892, -43.605, 8.842,
            -301.434, -62.578, 12.527,
               -306.207, -65.395, 8.153
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.617, 0.286, -0.733,
            -0.670, 0.322, -0.670,
            -0.639, 0.301, -0.707,
            -0.617, 0.286, -0.733,
            -0.639, 0.301, -0.707,
            -0.575, 0.259, -0.776,
            0.368, 0.854, 0.368,
            0.368, 0.854, 0.368,
            0.368, 0.854, 0.368,
            0.368, 0.854, 0.368,
            0.368, 0.854, 0.368,
            0.368, 0.854, 0.368,
            0.704, -0.093, 0.704,
            0.704, -0.093, 0.704,
            0.704, -0.093, 0.704,
            0.704, -0.093, 0.704,
            0.704, -0.093, 0.704,
            0.704, -0.093, 0.704,
            0.693, -0.200, 0.693,
            0.693, -0.200, 0.693,
            0.693, -0.200, 0.693,
            0.693, -0.200, 0.693,
            0.693, -0.200, 0.693,
            0.693, -0.200, 0.693,
            0.684, -0.255, 0.684,
            0.684, -0.255, 0.684,
            0.684, -0.255, 0.684,
            0.684, -0.255, 0.684,
            0.684, -0.255, 0.684,
            0.684, -0.255, 0.684,
            0.674, -0.303, 0.674,
            0.674, -0.303, 0.674,
            0.674, -0.303, 0.674,
            0.674, -0.303, 0.674,
            0.674, -0.303, 0.674,
            0.674, -0.303, 0.674,
            0.660, -0.359, 0.660,
            0.660, -0.359, 0.660,
            0.660, -0.359, 0.660,
            0.660, -0.359, 0.660,
            0.660, -0.359, 0.660,
            0.660, -0.359, 0.660,
            0.282, -0.917, 0.282,
            0.282, -0.917, 0.282,
            0.282, -0.917, 0.282,
            0.282, -0.917, 0.282,
            0.282, -0.917, 0.282,
            0.282, -0.917, 0.282,
            -0.530, -0.039, 0.847,
            -0.622, -0.015, 0.783,
            -0.012, -0.087, 0.996,
            -0.882, 0.020, 0.470,
            -0.622, -0.015, 0.783,
            -0.530, -0.039, 0.847,
            -0.707, 0.000, 0.707,
            -0.622, -0.015, 0.783,
            -0.882, 0.020, 0.470,
            -0.707, 0.000, 0.707,
            -0.622, -0.015, 0.783,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.622, -0.015, 0.783,
            -0.707, 0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.622, -0.015, 0.783,
            0.887, -0.047, -0.460,
            0.981, -0.099, 0.169,
            0.794, -0.017, -0.608,
            0.470, 0.020, -0.882,
            0.887, -0.047, -0.460,
            0.794, -0.017, -0.608,
            0.707, 0.000, -0.707,
            0.470, 0.020, -0.882,
            0.794, -0.017, -0.608,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.794, -0.017, -0.608,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.794, -0.017, -0.608,
            0.707, -0.000, -0.707,
            0.794, -0.017, -0.608,
            0.707, -0.000, -0.707,
            -0.731, 0.285, -0.620,
            -0.731, 0.285, -0.620,
            -0.731, 0.285, -0.620,
            -0.697, 0.167, -0.697,
            -0.697, 0.167, -0.697,
            -0.697, 0.167, -0.697,
            -0.662, -0.198, 0.723,
            -0.662, -0.198, 0.723,
            -0.662, -0.198, 0.723,
            -0.746, 0.200, -0.635,
            -0.746, 0.200, -0.635,
            -0.746, 0.200, -0.635,
            -0.582, 0.220, -0.783,
            -0.582, 0.220, -0.783,
            -0.582, 0.220, -0.783,
            0.727, -0.224, -0.649,
            0.727, -0.224, -0.649,
               0.727, -0.224, -0.649
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