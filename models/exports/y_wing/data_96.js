function create_geometry_96(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -295.232, 94.242, 22.292,
            -305.684, 94.242, 32.744,
            -305.684, 830.240, 32.744,
            -305.684, 830.240, 32.744,
            -295.232, 830.240, 22.292,
            -295.232, 94.242, 22.292,
            -302.548, 830.240, 35.879,
            -292.096, 830.240, 25.428,
            -292.096, 94.242, 25.428,
            -292.096, 94.242, 25.428,
            -302.548, 94.242, 35.879,
            -302.548, 830.240, 35.879,
            -292.096, 830.240, 25.428,
            -295.232, 830.240, 22.292,
            -295.232, 94.242, 22.292,
            -295.232, 94.242, 22.292,
            -292.096, 94.242, 25.428,
            -292.096, 830.240, 25.428,
            -302.548, 830.240, 35.879,
            -305.684, 830.240, 32.744,
            -295.232, 830.240, 22.292,
            -295.232, 830.240, 22.292,
            -292.096, 830.240, 25.428,
            -302.548, 830.240, 35.879,
            -305.684, 830.240, 32.744,
            -305.684, 94.242, 32.744,
            -302.548, 94.242, 35.879,
            -305.684, 830.240, 32.744,
            -302.548, 830.240, 35.879,
            -302.548, 94.242, 35.879,
            -292.096, 94.242, 25.428,
            -295.232, 94.242, 22.292,
            -305.684, 94.242, 32.744,
            -305.684, 94.242, 32.744,
            -302.548, 94.242, 35.879,
            -292.096, 94.242, 25.428,
            -296.097, 830.240, 35.066,
            -292.910, 830.240, 31.879,
            -292.910, 94.242, 31.879,
            -292.910, 94.242, 31.879,
            -296.097, 94.242, 35.066,
            -296.097, 830.240, 35.066,
            -292.910, 830.240, 31.879,
            -294.596, 830.240, 27.294,
            -294.596, 94.242, 27.294,
            -294.596, 94.242, 27.294,
            -292.910, 94.242, 31.879,
            -292.910, 830.240, 31.879,
            -296.097, 830.240, 35.066,
            -300.682, 830.240, 33.380,
            -294.596, 830.240, 27.294,
            -294.596, 830.240, 27.294,
            -292.910, 830.240, 31.879,
            -296.097, 830.240, 35.066,
            -300.682, 830.240, 33.380,
            -300.682, 94.242, 33.380,
            -296.097, 94.242, 35.066,
            -300.682, 830.240, 33.380,
            -296.097, 830.240, 35.066,
            -296.097, 94.242, 35.066,
            -292.910, 94.242, 31.879,
            -294.596, 94.242, 27.294,
            -300.682, 94.242, 33.380,
            -300.682, 94.242, 33.380,
            -296.097, 94.242, 35.066,
               -292.910, 94.242, 31.879
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, 0.000, -0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            -0.707, -0.000, 0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, 0.000, -0.707,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.939, -0.000, 0.345,
            -0.939, -0.000, 0.345,
            -0.939, -0.000, 0.345,
            -0.939, -0.000, 0.345,
            -0.939, -0.000, 0.345,
            -0.939, -0.000, 0.345,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.345, -0.000, 0.939,
            -0.345, -0.000, 0.939,
            -0.345, -0.000, 0.939,
            0.345, 0.000, -0.939,
            0.345, 0.000, -0.939,
            0.345, 0.000, -0.939,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               1.000, 0.001,
               1.000, 1.000,
               0.000, 0.999,
               0.000, 0.999,
               0.000, 0.000,
               1.000, 0.001,
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
               0.000, 0.000,
               1.000, 0.000,
               1.000, 0.527,
               0.000, 0.000,
               0.000, 0.527,
               1.000, 0.527,
               0.999, 0.527,
               0.999, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.527,
               0.999, 0.527,
               1.000, 0.652,
               1.000, 0.348,
               0.000, 0.348,
               0.000, 0.348,
               0.000, 0.652,
               1.000, 0.652,
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
               0.000, 0.473,
               1.000, 0.473,
               1.000, 1.000,
               0.000, 0.473,
               0.000, 1.000,
               1.000, 1.000,
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