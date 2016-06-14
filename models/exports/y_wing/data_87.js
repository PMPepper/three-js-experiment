function create_geometry_87(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -418.511, -43.015, -90.236,
            -416.049, -21.802, -102.892,
            -430.557, -21.802, -88.384,
            -418.511, -43.015, -90.236,
            -430.557, -21.802, -88.384,
            -429.486, -43.605, -81.906,
            -416.049, -21.802, -102.892,
            -419.833, -25.061, -106.676,
            -434.341, -25.061, -92.168,
            -416.049, -21.802, -102.892,
            -434.341, -25.061, -92.168,
            -430.557, -21.802, -88.384,
            -419.833, -25.061, -106.676,
            -419.624, -28.227, -106.467,
            -434.132, -28.227, -91.959,
            -419.833, -25.061, -106.676,
            -434.132, -28.227, -91.959,
            -434.341, -25.061, -92.168,
            -419.624, -28.227, -106.467,
            -418.099, -38.801, -104.942,
            -432.607, -38.801, -90.433,
            -419.624, -28.227, -106.467,
            -432.607, -38.801, -90.433,
            -434.132, -28.227, -91.959,
            -418.099, -38.801, -104.942,
            -416.391, -47.974, -103.234,
            -430.899, -47.974, -88.726,
            -418.099, -38.801, -104.942,
            -430.899, -47.974, -88.726,
            -432.607, -38.801, -90.433,
            -416.391, -47.974, -103.234,
            -414.350, -57.039, -101.194,
            -428.859, -57.039, -86.685,
            -416.391, -47.974, -103.234,
            -428.859, -57.039, -86.685,
            -430.899, -47.974, -88.726,
            -414.350, -57.039, -101.194,
            -413.256, -62.578, -99.279,
            -426.944, -62.578, -85.591,
            -414.350, -57.039, -101.194,
            -426.944, -62.578, -85.591,
            -428.859, -57.039, -86.685,
            -413.256, -62.578, -99.279,
            -408.883, -65.395, -94.506,
            -422.171, -65.395, -81.218,
            -413.256, -62.578, -99.279,
            -422.171, -65.395, -81.218,
            -426.944, -62.578, -85.591,
            -413.256, -62.578, -99.279,
            -416.049, -21.802, -102.892,
            -409.317, -43.375, -100.918,
            -414.350, -57.039, -101.194,
            -416.049, -21.802, -102.892,
            -413.256, -62.578, -99.279,
            -416.391, -47.974, -103.234,
            -416.049, -21.802, -102.892,
            -414.350, -57.039, -101.194,
            -418.099, -38.801, -104.942,
            -416.049, -21.802, -102.892,
            -416.391, -47.974, -103.234,
            -419.624, -28.227, -106.467,
            -416.049, -21.802, -102.892,
            -418.099, -38.801, -104.942,
            -419.624, -28.227, -106.467,
            -419.833, -25.061, -106.676,
            -416.049, -21.802, -102.892,
            -426.944, -62.578, -85.591,
            -429.486, -43.605, -81.906,
            -430.557, -21.802, -88.384,
            -428.859, -57.039, -86.685,
            -426.944, -62.578, -85.591,
            -430.557, -21.802, -88.384,
            -430.899, -47.974, -88.726,
            -428.859, -57.039, -86.685,
            -430.557, -21.802, -88.384,
            -432.607, -38.801, -90.433,
            -430.899, -47.974, -88.726,
            -430.557, -21.802, -88.384,
            -434.132, -28.227, -91.959,
            -432.607, -38.801, -90.433,
            -430.557, -21.802, -88.384,
            -434.132, -28.227, -91.959,
            -430.557, -21.802, -88.384,
            -434.341, -25.061, -92.168,
            -416.049, -21.802, -102.892,
            -418.511, -43.015, -90.236,
            -409.317, -43.375, -100.918,
            -418.511, -43.015, -90.236,
            -422.171, -65.395, -81.218,
            -408.883, -65.395, -94.506,
            -413.256, -62.578, -99.279,
            -409.317, -43.375, -100.918,
            -408.883, -65.395, -94.506,
            -409.317, -43.375, -100.918,
            -418.511, -43.015, -90.236,
            -408.883, -65.395, -94.506,
            -418.511, -43.015, -90.236,
            -429.486, -43.605, -81.906,
            -422.171, -65.395, -81.218,
            -429.486, -43.605, -81.906,
            -426.944, -62.578, -85.591,
               -422.171, -65.395, -81.218
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.617, 0.286, 0.733,
            0.670, 0.322, 0.670,
            0.639, 0.301, 0.707,
            0.617, 0.286, 0.733,
            0.639, 0.301, 0.707,
            0.575, 0.259, 0.776,
            -0.368, 0.854, -0.368,
            -0.368, 0.854, -0.368,
            -0.368, 0.854, -0.368,
            -0.368, 0.854, -0.368,
            -0.368, 0.854, -0.368,
            -0.368, 0.854, -0.368,
            -0.704, -0.093, -0.704,
            -0.704, -0.093, -0.704,
            -0.704, -0.093, -0.704,
            -0.704, -0.093, -0.704,
            -0.704, -0.093, -0.704,
            -0.704, -0.093, -0.704,
            -0.693, -0.200, -0.693,
            -0.693, -0.200, -0.693,
            -0.693, -0.200, -0.693,
            -0.693, -0.200, -0.693,
            -0.693, -0.200, -0.693,
            -0.693, -0.200, -0.693,
            -0.684, -0.255, -0.684,
            -0.684, -0.255, -0.684,
            -0.684, -0.255, -0.684,
            -0.684, -0.255, -0.684,
            -0.684, -0.255, -0.684,
            -0.684, -0.255, -0.684,
            -0.674, -0.303, -0.674,
            -0.674, -0.303, -0.674,
            -0.674, -0.303, -0.674,
            -0.674, -0.303, -0.674,
            -0.674, -0.303, -0.674,
            -0.674, -0.303, -0.674,
            -0.660, -0.359, -0.660,
            -0.660, -0.359, -0.660,
            -0.660, -0.359, -0.660,
            -0.660, -0.359, -0.660,
            -0.660, -0.359, -0.660,
            -0.660, -0.359, -0.660,
            -0.282, -0.917, -0.282,
            -0.282, -0.917, -0.282,
            -0.282, -0.917, -0.282,
            -0.282, -0.917, -0.282,
            -0.282, -0.917, -0.282,
            -0.282, -0.917, -0.282,
            0.530, -0.039, -0.847,
            0.622, -0.015, -0.783,
            0.012, -0.087, -0.996,
            0.882, 0.020, -0.470,
            0.622, -0.015, -0.783,
            0.530, -0.039, -0.847,
            0.707, 0.000, -0.707,
            0.622, -0.015, -0.783,
            0.882, 0.020, -0.470,
            0.707, 0.000, -0.707,
            0.622, -0.015, -0.783,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.622, -0.015, -0.783,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.622, -0.015, -0.783,
            -0.887, -0.047, 0.460,
            -0.981, -0.099, -0.169,
            -0.794, -0.017, 0.608,
            -0.470, 0.020, 0.882,
            -0.887, -0.047, 0.460,
            -0.794, -0.017, 0.608,
            -0.707, 0.000, 0.707,
            -0.470, 0.020, 0.882,
            -0.794, -0.017, 0.608,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.794, -0.017, 0.608,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.794, -0.017, 0.608,
            -0.707, 0.000, 0.707,
            -0.794, -0.017, 0.608,
            -0.707, 0.000, 0.707,
            0.731, 0.285, 0.620,
            0.731, 0.285, 0.620,
            0.731, 0.285, 0.620,
            0.697, 0.167, 0.697,
            0.697, 0.167, 0.697,
            0.697, 0.167, 0.697,
            0.662, -0.198, -0.723,
            0.662, -0.198, -0.723,
            0.662, -0.198, -0.723,
            0.746, 0.200, 0.635,
            0.746, 0.200, 0.635,
            0.746, 0.200, 0.635,
            0.582, 0.220, 0.783,
            0.582, 0.220, 0.783,
            0.582, 0.220, 0.783,
            -0.727, -0.224, 0.649,
            -0.727, -0.224, 0.649,
               -0.727, -0.224, 0.649
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