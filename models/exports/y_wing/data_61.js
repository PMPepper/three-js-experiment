function create_geometry_61(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -87.600, 114.804, 33.788,
            -89.641, 114.536, 50.253,
            -87.600, 114.804, 50.253,
            -87.600, 114.804, 33.788,
            -89.641, 114.536, 33.788,
            -89.641, 114.536, 50.253,
            -89.641, 114.536, 33.788,
            -91.544, 113.748, 50.253,
            -89.641, 114.536, 50.253,
            -89.641, 114.536, 33.788,
            -91.544, 113.748, 33.788,
            -91.544, 113.748, 50.253,
            -91.544, 113.748, 33.788,
            -93.178, 112.494, 50.253,
            -91.544, 113.748, 50.253,
            -91.544, 113.748, 33.788,
            -93.178, 112.494, 33.788,
            -93.178, 112.494, 50.253,
            -93.178, 112.494, 33.788,
            -94.431, 110.860, 50.253,
            -93.178, 112.494, 50.253,
            -93.178, 112.494, 33.788,
            -94.431, 110.860, 33.788,
            -94.431, 110.860, 50.253,
            -94.431, 110.860, 33.788,
            -95.219, 108.958, 50.253,
            -94.431, 110.860, 50.253,
            -94.431, 110.860, 33.788,
            -95.219, 108.958, 33.788,
            -95.219, 108.958, 50.253,
            -95.219, 108.958, 33.788,
            -95.488, 106.916, 50.253,
            -95.219, 108.958, 50.253,
            -95.219, 108.958, 33.788,
            -95.488, 106.916, 33.788,
            -95.488, 106.916, 50.253,
            -95.488, 106.916, 33.788,
            -95.219, 104.875, 50.253,
            -95.488, 106.916, 50.253,
            -95.488, 106.916, 33.788,
            -95.219, 104.875, 33.788,
            -95.219, 104.875, 50.253,
            -95.219, 104.875, 33.788,
            -94.431, 102.972, 50.253,
            -95.219, 104.875, 50.253,
            -95.219, 104.875, 33.788,
            -94.431, 102.972, 33.788,
            -94.431, 102.972, 50.253,
            -94.431, 102.972, 33.788,
            -93.178, 101.339, 50.253,
            -94.431, 102.972, 50.253,
            -94.431, 102.972, 33.788,
            -93.178, 101.339, 33.788,
            -93.178, 101.339, 50.253,
            -93.178, 101.339, 33.788,
            -91.544, 100.085, 50.253,
            -93.178, 101.339, 50.253,
            -93.178, 101.339, 33.788,
            -91.544, 100.085, 33.788,
            -91.544, 100.085, 50.253,
            -91.544, 100.085, 33.788,
            -89.641, 99.297, 50.253,
            -91.544, 100.085, 50.253,
            -91.544, 100.085, 33.788,
            -89.641, 99.297, 33.788,
            -89.641, 99.297, 50.253,
            -89.641, 99.297, 33.788,
            -87.600, 99.028, 50.253,
            -89.641, 99.297, 50.253,
            -89.641, 99.297, 33.788,
            -87.600, 99.028, 33.788,
            -87.600, 99.028, 50.253,
            -87.600, 99.028, 33.788,
            -85.558, 99.297, 50.253,
            -87.600, 99.028, 50.253,
            -87.600, 99.028, 33.788,
            -85.558, 99.297, 33.788,
            -85.558, 99.297, 50.253,
            -85.558, 99.297, 33.788,
            -83.656, 100.085, 50.253,
            -85.558, 99.297, 50.253,
            -85.558, 99.297, 33.788,
            -83.656, 100.085, 33.788,
            -83.656, 100.085, 50.253,
            -83.656, 100.085, 33.788,
            -82.022, 101.339, 50.253,
            -83.656, 100.085, 50.253,
            -83.656, 100.085, 33.788,
            -82.022, 101.339, 33.788,
            -82.022, 101.339, 50.253,
            -82.022, 101.339, 33.788,
            -80.769, 102.972, 50.253,
            -82.022, 101.339, 50.253,
            -82.022, 101.339, 33.788,
            -80.769, 102.972, 33.788,
            -80.769, 102.972, 50.253,
            -80.769, 102.972, 33.788,
            -79.981, 104.875, 50.253,
            -80.769, 102.972, 50.253,
            -80.769, 102.972, 33.788,
            -79.981, 104.875, 33.788,
            -79.981, 104.875, 50.253,
            -79.981, 104.875, 33.788,
            -79.712, 106.916, 50.253,
            -79.981, 104.875, 50.253,
            -79.981, 104.875, 33.788,
            -79.712, 106.916, 33.788,
            -79.712, 106.916, 50.253,
            -79.712, 106.916, 33.788,
            -79.981, 108.958, 50.253,
            -79.712, 106.916, 50.253,
            -79.712, 106.916, 33.788,
            -79.981, 108.958, 33.788,
            -79.981, 108.958, 50.253,
            -79.981, 108.958, 33.788,
            -80.769, 110.860, 50.253,
            -79.981, 108.958, 50.253,
            -79.981, 108.958, 33.788,
            -80.769, 110.860, 33.788,
            -80.769, 110.860, 50.253,
            -80.769, 110.860, 33.788,
            -82.022, 112.494, 50.253,
            -80.769, 110.860, 50.253,
            -80.769, 110.860, 33.788,
            -82.022, 112.494, 33.788,
            -82.022, 112.494, 50.253,
            -82.022, 112.494, 33.788,
            -83.656, 113.748, 50.253,
            -82.022, 112.494, 50.253,
            -82.022, 112.494, 33.788,
            -83.656, 113.748, 33.788,
            -83.656, 113.748, 50.253,
            -83.656, 113.748, 33.788,
            -85.558, 114.536, 50.253,
            -83.656, 113.748, 50.253,
            -83.656, 113.748, 33.788,
            -85.558, 114.536, 33.788,
            -85.558, 114.536, 50.253,
            -85.558, 114.536, 33.788,
            -87.600, 114.804, 50.253,
            -85.558, 114.536, 50.253,
            -85.558, 114.536, 33.788,
            -87.600, 114.804, 33.788,
            -87.600, 114.804, 50.253,
            -87.600, 106.916, 50.253,
            -87.600, 114.804, 50.253,
            -89.641, 114.536, 50.253,
            -87.600, 106.916, 50.253,
            -89.641, 114.536, 50.253,
            -91.544, 113.748, 50.253,
            -87.600, 106.916, 50.253,
            -91.544, 113.748, 50.253,
            -93.178, 112.494, 50.253,
            -87.600, 106.916, 50.253,
            -93.178, 112.494, 50.253,
            -94.431, 110.860, 50.253,
            -87.600, 106.916, 50.253,
            -94.431, 110.860, 50.253,
            -95.219, 108.958, 50.253,
            -87.600, 106.916, 50.253,
            -95.219, 108.958, 50.253,
            -95.488, 106.916, 50.253,
            -87.600, 106.916, 50.253,
            -95.488, 106.916, 50.253,
            -95.219, 104.875, 50.253,
            -87.600, 106.916, 50.253,
            -95.219, 104.875, 50.253,
            -94.431, 102.972, 50.253,
            -87.600, 106.916, 50.253,
            -94.431, 102.972, 50.253,
            -93.178, 101.339, 50.253,
            -87.600, 106.916, 50.253,
            -93.178, 101.339, 50.253,
            -91.544, 100.085, 50.253,
            -87.600, 106.916, 50.253,
            -91.544, 100.085, 50.253,
            -89.641, 99.297, 50.253,
            -87.600, 106.916, 50.253,
            -89.641, 99.297, 50.253,
            -87.600, 99.028, 50.253,
            -87.600, 106.916, 50.253,
            -87.600, 99.028, 50.253,
            -85.558, 99.297, 50.253,
            -87.600, 106.916, 50.253,
            -85.558, 99.297, 50.253,
            -83.656, 100.085, 50.253,
            -87.600, 106.916, 50.253,
            -83.656, 100.085, 50.253,
            -82.022, 101.339, 50.253,
            -87.600, 106.916, 50.253,
            -82.022, 101.339, 50.253,
            -80.769, 102.972, 50.253,
            -87.600, 106.916, 50.253,
            -80.769, 102.972, 50.253,
            -79.981, 104.875, 50.253,
            -87.600, 106.916, 50.253,
            -79.981, 104.875, 50.253,
            -79.712, 106.916, 50.253,
            -87.600, 106.916, 50.253,
            -79.712, 106.916, 50.253,
            -79.981, 108.958, 50.253,
            -87.600, 106.916, 50.253,
            -79.981, 108.958, 50.253,
            -80.769, 110.860, 50.253,
            -87.600, 106.916, 50.253,
            -80.769, 110.860, 50.253,
            -82.022, 112.494, 50.253,
            -87.600, 106.916, 50.253,
            -82.022, 112.494, 50.253,
            -83.656, 113.748, 50.253,
            -87.600, 106.916, 50.253,
            -83.656, 113.748, 50.253,
            -85.558, 114.536, 50.253,
            -87.600, 106.916, 50.253,
            -85.558, 114.536, 50.253,
               -87.600, 114.804, 50.253
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 1.000, -0.000,
            -0.259, 0.966, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.259, 0.966, -0.000,
            -0.259, 0.966, -0.000,
            -0.259, 0.966, -0.000,
            -0.500, 0.866, -0.000,
            -0.259, 0.966, -0.000,
            -0.259, 0.966, -0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.707, 0.707, -0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, -0.000,
            -0.707, 0.707, 0.000,
            -0.866, 0.500, 0.000,
            -0.707, 0.707, -0.000,
            -0.707, 0.707, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -0.966, 0.259, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -0.966, 0.259, 0.000,
            -0.966, 0.259, 0.000,
            -0.966, 0.259, 0.000,
            -1.000, 0.000, 0.000,
            -0.966, 0.259, 0.000,
            -0.966, 0.259, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.966, -0.259, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.966, -0.259, 0.000,
            -0.966, -0.259, 0.000,
            -0.966, -0.259, 0.000,
            -0.866, -0.500, 0.000,
            -0.966, -0.259, 0.000,
            -0.966, -0.259, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.707, -0.707, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.500, -0.866, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.259, -0.966, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.259, -0.966, 0.000,
            -0.259, -0.966, 0.000,
            -0.259, -0.966, 0.000,
            0.000, -1.000, 0.000,
            -0.259, -0.966, 0.000,
            -0.259, -0.966, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.259, -0.966, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
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
            1.000, 0.000, 0.000,
            0.966, -0.259, 0.000,
            0.966, -0.259, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.966, 0.259, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
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
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
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