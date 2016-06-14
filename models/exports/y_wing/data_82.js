function create_geometry_82(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -346.714, 284.801, 60.249,
            -346.714, 301.874, 60.249,
            -351.702, 301.874, 61.355,
            -351.702, 301.874, 61.355,
            -351.702, 284.801, 61.355,
            -346.714, 284.801, 60.249,
            -348.479, 284.801, 52.286,
            -348.479, 301.874, 52.286,
            -346.714, 301.874, 60.249,
            -346.714, 301.874, 60.249,
            -346.714, 284.801, 60.249,
            -348.479, 284.801, 52.286,
            -348.479, 301.874, 52.286,
            -353.467, 301.874, 53.392,
            -351.702, 301.874, 61.355,
            -351.702, 301.874, 61.355,
            -346.714, 301.874, 60.249,
            -348.479, 301.874, 52.286,
            -353.467, 301.874, 53.392,
            -353.467, 284.801, 53.392,
            -351.702, 284.801, 61.355,
            -351.702, 284.801, 61.355,
            -351.702, 301.874, 61.355,
            -353.467, 301.874, 53.392,
            -353.467, 284.801, 53.392,
            -348.479, 284.801, 52.286,
            -346.714, 284.801, 60.249,
            -346.714, 284.801, 60.249,
            -351.702, 284.801, 61.355,
            -353.467, 284.801, 53.392,
            -329.453, 304.440, 53.107,
            -339.067, 282.080, 55.700,
            -329.453, 282.080, 53.107,
            -329.453, 304.440, 53.107,
            -339.067, 304.440, 55.700,
            -339.067, 282.080, 55.700,
            -339.067, 304.440, 55.700,
            -348.876, 282.080, 57.413,
            -339.067, 282.080, 55.700,
            -339.067, 304.440, 55.700,
            -348.876, 304.440, 57.413,
            -348.876, 282.080, 57.413,
            -329.453, 304.440, 53.107,
            -327.842, 304.440, 36.793,
            -339.067, 304.440, 55.700,
            -329.453, 304.440, 53.107,
            -324.622, 304.440, 51.320,
            -327.842, 304.440, 36.793,
            -324.622, 304.440, 51.320,
            -329.453, 304.440, 53.107,
            -329.453, 282.080, 53.107,
            -339.067, 304.440, 55.700,
            -327.842, 304.440, 36.793,
            -348.876, 304.440, 57.413,
            -327.842, 304.440, 36.793,
            -354.010, 304.440, 57.836,
            -348.876, 304.440, 57.413,
            -327.842, 304.440, 36.793,
            -357.230, 304.440, 43.309,
            -354.010, 304.440, 57.836,
            -329.453, 282.080, 53.107,
            -324.622, 282.080, 51.320,
            -324.622, 304.440, 51.320,
            -348.876, 304.440, 57.413,
            -354.010, 282.080, 57.836,
            -348.876, 282.080, 57.413,
            -354.010, 304.440, 57.836,
            -354.010, 282.080, 57.836,
            -348.876, 304.440, 57.413,
            -327.842, 282.080, 36.793,
            -324.622, 282.080, 51.320,
            -329.453, 282.080, 53.107,
            -327.842, 282.080, 36.793,
            -329.453, 282.080, 53.107,
            -339.067, 282.080, 55.700,
            -327.842, 282.080, 36.793,
            -339.067, 282.080, 55.700,
            -348.876, 282.080, 57.413,
            -327.842, 282.080, 36.793,
            -348.876, 282.080, 57.413,
            -354.010, 282.080, 57.836,
            -357.230, 282.080, 43.309,
            -327.842, 282.080, 36.793,
            -354.010, 282.080, 57.836,
            -327.842, 304.440, 36.793,
            -324.622, 304.440, 51.320,
            -324.622, 282.080, 51.320,
            -324.622, 282.080, 51.320,
            -327.842, 282.080, 36.793,
            -327.842, 304.440, 36.793,
            -357.230, 282.080, 43.309,
            -357.230, 304.440, 43.309,
            -327.842, 304.440, 36.793,
            -327.842, 304.440, 36.793,
            -327.842, 282.080, 36.793,
            -357.230, 282.080, 43.309,
            -354.010, 304.440, 57.836,
            -357.230, 282.080, 43.309,
            -354.010, 282.080, 57.836,
            -357.230, 282.080, 43.309,
            -354.010, 304.440, 57.836,
            -357.230, 304.440, 43.309,
            -325.346, 284.966, 55.242,
            -325.346, 302.082, 55.242,
            -330.374, 302.082, 56.357,
            -330.374, 302.082, 56.357,
            -330.374, 284.966, 56.357,
            -325.346, 284.966, 55.242,
            -326.919, 284.966, 48.144,
            -326.919, 302.082, 48.144,
            -325.346, 302.082, 55.242,
            -325.346, 302.082, 55.242,
            -325.346, 284.966, 55.242,
            -326.919, 284.966, 48.144,
            -326.919, 302.082, 48.144,
            -331.947, 302.082, 49.259,
            -330.374, 302.082, 56.357,
            -330.374, 302.082, 56.357,
            -325.346, 302.082, 55.242,
            -326.919, 302.082, 48.144,
            -331.947, 302.082, 49.259,
            -331.947, 284.966, 49.259,
            -330.374, 284.966, 56.357,
            -330.374, 284.966, 56.357,
            -330.374, 302.082, 56.357,
            -331.947, 302.082, 49.259,
            -331.947, 284.966, 49.259,
            -326.919, 284.966, 48.144,
            -325.346, 284.966, 55.242,
            -325.346, 284.966, 55.242,
            -330.374, 284.966, 56.357,
               -331.947, 284.966, 49.259
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.304, 0.000, 0.953,
            0.216, 0.000, 0.976,
            0.304, 0.000, 0.953,
            0.304, 0.000, 0.953,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.127, 0.000, 0.992,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.127, 0.000, 0.992,
            0.127, 0.000, 0.992,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.347, 0.000, 0.938,
            0.304, 0.000, 0.953,
            0.304, 0.000, 0.953,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.304, 0.000, 0.953,
            0.347, 0.000, 0.938,
            0.347, 0.000, 0.938,
            0.127, 0.000, 0.992,
            0.082, 0.000, 0.997,
            0.127, 0.000, 0.992,
            0.082, 0.000, 0.997,
            0.082, 0.000, 0.997,
            0.127, 0.000, 0.992,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            -0.216, -0.000, -0.976,
            -0.216, 0.000, -0.976,
            -0.216, -0.000, -0.976,
            -0.216, -0.000, -0.976,
            -0.216, -0.000, -0.976,
            -0.216, -0.000, -0.976,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.216, 0.000, 0.976,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.976, 0.000, -0.216,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
            -0.976, 0.000, 0.216,
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
