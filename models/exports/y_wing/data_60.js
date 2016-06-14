function create_geometry_60(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -84.642, 121.860, 27.896,
            -87.820, 121.442, 44.362,
            -84.642, 121.860, 44.361,
            -84.642, 121.860, 27.896,
            -87.820, 121.442, 27.896,
            -87.820, 121.442, 44.362,
            -87.820, 121.442, 27.896,
            -90.781, 120.215, 44.362,
            -87.820, 121.442, 44.362,
            -87.820, 121.442, 27.896,
            -90.781, 120.215, 27.896,
            -90.781, 120.215, 44.362,
            -90.781, 120.215, 27.896,
            -93.324, 118.264, 44.362,
            -90.781, 120.215, 44.362,
            -90.781, 120.215, 27.896,
            -93.324, 118.264, 27.896,
            -93.324, 118.264, 44.362,
            -93.324, 118.264, 27.896,
            -95.275, 115.721, 44.362,
            -93.324, 118.264, 44.362,
            -93.324, 118.264, 27.896,
            -95.275, 115.721, 27.896,
            -95.275, 115.721, 44.362,
            -95.275, 115.721, 27.896,
            -96.501, 112.760, 44.362,
            -95.275, 115.721, 44.362,
            -95.275, 115.721, 27.896,
            -96.501, 112.760, 27.896,
            -96.501, 112.760, 44.362,
            -96.501, 112.760, 27.896,
            -96.920, 109.583, 44.362,
            -96.501, 112.760, 44.362,
            -96.501, 112.760, 27.896,
            -96.920, 109.583, 27.896,
            -96.920, 109.583, 44.362,
            -96.920, 109.583, 27.896,
            -96.501, 106.405, 44.362,
            -96.920, 109.583, 44.362,
            -96.920, 109.583, 27.896,
            -96.501, 106.405, 27.896,
            -96.501, 106.405, 44.362,
            -96.501, 106.405, 27.896,
            -95.275, 103.444, 44.362,
            -96.501, 106.405, 44.362,
            -96.501, 106.405, 27.896,
            -95.275, 103.444, 27.896,
            -95.275, 103.444, 44.362,
            -95.275, 103.444, 27.896,
            -93.324, 100.901, 44.362,
            -95.275, 103.444, 44.362,
            -95.275, 103.444, 27.896,
            -93.324, 100.901, 27.896,
            -93.324, 100.901, 44.362,
            -93.324, 100.901, 27.896,
            -90.781, 98.950, 44.362,
            -93.324, 100.901, 44.362,
            -93.324, 100.901, 27.896,
            -90.781, 98.950, 27.896,
            -90.781, 98.950, 44.362,
            -90.781, 98.950, 27.896,
            -87.820, 97.724, 44.362,
            -90.781, 98.950, 44.362,
            -90.781, 98.950, 27.896,
            -87.820, 97.724, 27.896,
            -87.820, 97.724, 44.362,
            -87.820, 97.724, 27.896,
            -84.642, 97.305, 44.361,
            -87.820, 97.724, 44.362,
            -87.820, 97.724, 27.896,
            -84.642, 97.305, 27.896,
            -84.642, 97.305, 44.361,
            -84.642, 97.305, 27.896,
            -81.465, 97.724, 44.361,
            -84.642, 97.305, 44.361,
            -84.642, 97.305, 27.896,
            -81.465, 97.724, 27.896,
            -81.465, 97.724, 44.361,
            -81.465, 97.724, 27.896,
            -78.504, 98.950, 44.362,
            -81.465, 97.724, 44.361,
            -81.465, 97.724, 27.896,
            -78.504, 98.950, 27.896,
            -78.504, 98.950, 44.362,
            -78.504, 98.950, 27.896,
            -75.961, 100.901, 44.362,
            -78.504, 98.950, 44.362,
            -78.504, 98.950, 27.896,
            -75.961, 100.901, 27.896,
            -75.961, 100.901, 44.362,
            -75.961, 100.901, 27.896,
            -74.010, 103.444, 44.362,
            -75.961, 100.901, 44.362,
            -75.961, 100.901, 27.896,
            -74.010, 103.444, 27.896,
            -74.010, 103.444, 44.362,
            -74.010, 103.444, 27.896,
            -72.783, 106.405, 44.362,
            -74.010, 103.444, 44.362,
            -74.010, 103.444, 27.896,
            -72.783, 106.405, 27.896,
            -72.783, 106.405, 44.362,
            -72.783, 106.405, 27.896,
            -72.365, 109.583, 44.362,
            -72.783, 106.405, 44.362,
            -72.783, 106.405, 27.896,
            -72.365, 109.583, 27.896,
            -72.365, 109.583, 44.362,
            -72.365, 109.583, 27.896,
            -72.783, 112.760, 44.362,
            -72.365, 109.583, 44.362,
            -72.365, 109.583, 27.896,
            -72.783, 112.760, 27.896,
            -72.783, 112.760, 44.362,
            -72.783, 112.760, 27.896,
            -74.010, 115.721, 44.362,
            -72.783, 112.760, 44.362,
            -72.783, 112.760, 27.896,
            -74.010, 115.721, 27.896,
            -74.010, 115.721, 44.362,
            -74.010, 115.721, 27.896,
            -75.961, 118.264, 44.362,
            -74.010, 115.721, 44.362,
            -74.010, 115.721, 27.896,
            -75.961, 118.264, 27.896,
            -75.961, 118.264, 44.362,
            -75.961, 118.264, 27.896,
            -78.504, 120.215, 44.362,
            -75.961, 118.264, 44.362,
            -75.961, 118.264, 27.896,
            -78.504, 120.215, 27.896,
            -78.504, 120.215, 44.362,
            -78.504, 120.215, 27.896,
            -81.465, 121.442, 44.361,
            -78.504, 120.215, 44.362,
            -78.504, 120.215, 27.896,
            -81.465, 121.442, 27.896,
            -81.465, 121.442, 44.361,
            -81.465, 121.442, 27.896,
            -84.642, 121.860, 44.361,
            -81.465, 121.442, 44.361,
            -81.465, 121.442, 27.896,
            -84.642, 121.860, 27.896,
            -84.642, 121.860, 44.361,
            -84.642, 109.583, 44.361,
            -84.642, 121.860, 44.361,
            -87.820, 121.442, 44.362,
            -84.642, 109.583, 44.361,
            -87.820, 121.442, 44.362,
            -90.781, 120.215, 44.362,
            -84.642, 109.583, 44.361,
            -90.781, 120.215, 44.362,
            -93.324, 118.264, 44.362,
            -84.642, 109.583, 44.361,
            -93.324, 118.264, 44.362,
            -95.275, 115.721, 44.362,
            -84.642, 109.583, 44.361,
            -95.275, 115.721, 44.362,
            -96.501, 112.760, 44.362,
            -84.642, 109.583, 44.361,
            -96.501, 112.760, 44.362,
            -96.920, 109.583, 44.362,
            -84.642, 109.583, 44.361,
            -96.920, 109.583, 44.362,
            -96.501, 106.405, 44.362,
            -84.642, 109.583, 44.361,
            -96.501, 106.405, 44.362,
            -95.275, 103.444, 44.362,
            -84.642, 109.583, 44.361,
            -95.275, 103.444, 44.362,
            -93.324, 100.901, 44.362,
            -84.642, 109.583, 44.361,
            -93.324, 100.901, 44.362,
            -90.781, 98.950, 44.362,
            -84.642, 109.583, 44.361,
            -90.781, 98.950, 44.362,
            -87.820, 97.724, 44.362,
            -84.642, 109.583, 44.361,
            -87.820, 97.724, 44.362,
            -84.642, 97.305, 44.361,
            -84.642, 109.583, 44.361,
            -84.642, 97.305, 44.361,
            -81.465, 97.724, 44.361,
            -84.642, 109.583, 44.361,
            -81.465, 97.724, 44.361,
            -78.504, 98.950, 44.362,
            -84.642, 109.583, 44.361,
            -78.504, 98.950, 44.362,
            -75.961, 100.901, 44.362,
            -84.642, 109.583, 44.361,
            -75.961, 100.901, 44.362,
            -74.010, 103.444, 44.362,
            -84.642, 109.583, 44.361,
            -74.010, 103.444, 44.362,
            -72.783, 106.405, 44.362,
            -84.642, 109.583, 44.361,
            -72.783, 106.405, 44.362,
            -72.365, 109.583, 44.362,
            -84.642, 109.583, 44.361,
            -72.365, 109.583, 44.362,
            -72.783, 112.760, 44.362,
            -84.642, 109.583, 44.361,
            -72.783, 112.760, 44.362,
            -74.010, 115.721, 44.362,
            -84.642, 109.583, 44.361,
            -74.010, 115.721, 44.362,
            -75.961, 118.264, 44.362,
            -84.642, 109.583, 44.361,
            -75.961, 118.264, 44.362,
            -78.504, 120.215, 44.362,
            -84.642, 109.583, 44.361,
            -78.504, 120.215, 44.362,
            -81.465, 121.442, 44.361,
            -84.642, 109.583, 44.361,
            -81.465, 121.442, 44.361,
               -84.642, 121.860, 44.361
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 1.000, 0.000,
            -0.259, 0.966, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.259, 0.966, 0.000,
            -0.259, 0.966, 0.000,
            -0.259, 0.966, 0.000,
            -0.500, 0.866, 0.000,
            -0.259, 0.966, 0.000,
            -0.259, 0.966, 0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, -0.000,
            -0.707, 0.707, -0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, -0.000,
            -0.707, 0.707, -0.000,
            -0.707, 0.707, -0.000,
            -0.707, 0.707, -0.000,
            -0.866, 0.500, -0.000,
            -0.707, 0.707, -0.000,
            -0.707, 0.707, -0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, -0.000,
            -0.866, 0.500, 0.000,
            -0.966, 0.259, 0.000,
            -0.866, 0.500, -0.000,
            -0.866, 0.500, 0.000,
            -0.966, 0.259, -0.000,
            -0.966, 0.259, 0.000,
            -0.966, 0.259, -0.000,
            -1.000, -0.000, -0.000,
            -0.966, 0.259, 0.000,
            -0.966, 0.259, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -0.966, -0.259, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -0.966, -0.259, 0.000,
            -0.966, -0.259, -0.000,
            -0.966, -0.259, 0.000,
            -0.866, -0.500, 0.000,
            -0.966, -0.259, -0.000,
            -0.966, -0.259, 0.000,
            -0.866, -0.500, -0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, -0.000,
            -0.707, -0.707, -0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, -0.000,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, -0.000,
            -0.500, -0.866, -0.000,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, -0.000,
            -0.500, -0.866, -0.000,
            -0.500, -0.866, -0.000,
            -0.500, -0.866, -0.000,
            -0.259, -0.966, -0.000,
            -0.500, -0.866, -0.000,
            -0.500, -0.866, -0.000,
            -0.259, -0.966, -0.000,
            -0.259, -0.966, -0.000,
            -0.259, -0.966, -0.000,
            0.000, -1.000, -0.000,
            -0.259, -0.966, -0.000,
            -0.259, -0.966, -0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            0.259, -0.966, 0.000,
            0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            0.259, -0.966, 0.000,
            0.259, -0.966, 0.000,
            0.259, -0.966, 0.000,
            0.500, -0.866, 0.000,
            0.259, -0.966, 0.000,
            0.259, -0.966, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.707, -0.707, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.866, -0.500, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, 0.000,
            0.966, -0.259, 0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, 0.000,
            0.966, -0.259, 0.000,
            0.966, -0.259, 0.000,
            0.966, -0.259, 0.000,
            1.000, -0.000, -0.000,
            0.966, -0.259, 0.000,
            0.966, -0.259, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            0.966, 0.259, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            0.966, 0.259, 0.000,
            0.966, 0.259, 0.000,
            0.966, 0.259, 0.000,
            0.866, 0.500, 0.000,
            0.966, 0.259, 0.000,
            0.966, 0.259, 0.000,
            0.866, 0.500, 0.000,
            0.866, 0.500, 0.000,
            0.866, 0.500, 0.000,
            0.707, 0.707, 0.000,
            0.866, 0.500, 0.000,
            0.866, 0.500, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.500, 0.866, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.259, 0.966, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.259, 0.966, 0.000,
            0.259, 0.966, 0.000,
            0.259, 0.966, 0.000,
            0.000, 1.000, 0.000,
            0.259, 0.966, 0.000,
            0.259, 0.966, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
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
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
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
