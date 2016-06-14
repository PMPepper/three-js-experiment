function create_geometry_205(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            422.694, 830.240, -105.809,
            422.694, 94.242, -105.809,
            433.146, 94.242, -95.357,
            433.146, 94.242, -95.357,
            433.146, 830.240, -95.357,
            422.694, 830.240, -105.809,
            425.829, 830.240, -108.945,
            436.281, 830.240, -98.493,
            436.281, 94.242, -98.493,
            436.281, 94.242, -98.493,
            425.829, 94.242, -108.945,
            425.829, 830.240, -108.945,
            436.281, 830.240, -98.493,
            433.146, 830.240, -95.357,
            433.146, 94.242, -95.357,
            433.146, 94.242, -95.357,
            436.281, 94.242, -98.493,
            436.281, 830.240, -98.493,
            425.829, 830.240, -108.945,
            422.694, 830.240, -105.809,
            433.146, 830.240, -95.357,
            433.146, 830.240, -95.357,
            436.281, 830.240, -98.493,
            425.829, 830.240, -108.945,
            425.829, 94.242, -108.945,
            422.694, 94.242, -105.809,
            422.694, 830.240, -105.809,
            422.694, 830.240, -105.809,
            425.829, 830.240, -108.945,
            425.829, 94.242, -108.945,
            436.281, 94.242, -98.493,
            433.146, 94.242, -95.357,
            422.694, 94.242, -105.809,
            422.694, 94.242, -105.809,
            425.829, 94.242, -108.945,
            436.281, 94.242, -98.493,
            435.467, 94.242, -104.944,
            435.467, 830.240, -104.944,
            432.281, 830.240, -108.131,
            432.281, 830.240, -108.131,
            432.281, 94.242, -108.131,
            435.467, 94.242, -104.944,
            435.467, 830.240, -104.944,
            433.782, 830.240, -100.359,
            433.782, 94.242, -100.359,
            433.782, 94.242, -100.359,
            435.467, 94.242, -104.944,
            435.467, 830.240, -104.944,
            432.281, 830.240, -108.131,
            427.695, 830.240, -106.445,
            433.782, 830.240, -100.359,
            433.782, 830.240, -100.359,
            435.467, 830.240, -104.944,
            432.281, 830.240, -108.131,
            432.281, 94.242, -108.131,
            427.695, 94.242, -106.445,
            427.695, 830.240, -106.445,
            432.281, 94.242, -108.131,
            432.281, 830.240, -108.131,
            427.695, 830.240, -106.445,
            435.467, 94.242, -104.944,
            433.782, 94.242, -100.359,
            427.695, 94.242, -106.445,
            427.695, 94.242, -106.445,
            432.281, 94.242, -108.131,
               435.467, 94.242, -104.944
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            -0.939, 0.000, -0.345,
            -0.939, 0.000, -0.345,
            -0.939, -0.000, -0.345,
            -0.939, -0.000, -0.345,
            -0.939, -0.000, -0.345,
            -0.939, -0.000, -0.345,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.345, -0.000, 0.939,
            0.345, -0.000, 0.939,
            0.345, -0.000, 0.939,
            -0.345, 0.000, -0.939,
            -0.345, 0.000, -0.939,
            -0.345, 0.000, -0.939,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.000, 0.999,
               1.000, 1.000,
               1.000, 0.001,
               1.000, 0.001,
               0.000, 0.000,
               0.000, 0.999,
               1.000, 0.999,
               1.000, 0.000,
               0.000, 0.001,
               0.000, 0.001,
               0.000, 1.000,
               1.000, 0.999,
               1.000, 0.527,
               1.000, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.527,
               1.000, 0.527,
               0.999, 0.527,
               0.999, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.527,
               0.999, 0.527,
               1.000, 0.527,
               1.000, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.527,
               1.000, 0.527,
               0.999, 0.527,
               0.999, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.527,
               0.999, 0.527,
               0.000, 0.348,
               1.000, 0.348,
               1.000, 0.652,
               1.000, 0.652,
               0.000, 0.652,
               0.000, 0.348,
               1.000, 1.000,
               1.000, 0.473,
               0.000, 0.473,
               0.000, 0.473,
               0.000, 1.000,
               1.000, 1.000,
               0.652, 1.000,
               0.791, 0.473,
               0.209, 0.473,
               0.209, 0.473,
               0.348, 1.000,
               0.652, 1.000,
               1.000, 1.000,
               1.000, 0.473,
               0.000, 0.473,
               1.000, 1.000,
               0.000, 1.000,
               0.000, 0.473,
               0.652, 1.000,
               0.791, 0.473,
               0.209, 0.473,
               0.209, 0.473,
               0.348, 1.000,
               0.652, 1.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_YW_CAB_T.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
