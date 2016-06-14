function create_geometry_17(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            730.024, 3630.336, -5454.098,
            730.024, 4004.250, -5484.361,
            1843.219, 4004.250, -5484.361,
            1843.219, 4004.250, -5484.361,
            1843.219, 3630.336, -5454.098,
            730.024, 3630.336, -5454.098,
            730.024, 3617.595, -5409.060,
            1843.219, 3617.595, -5409.060,
            1843.219, 3991.508, -5439.323,
            1843.219, 3991.508, -5439.323,
            730.024, 3991.508, -5439.323,
            730.024, 3617.595, -5409.060,
            730.024, 3630.336, -5454.098,
            1843.219, 3630.336, -5454.098,
            1843.219, 3617.595, -5409.060,
            1843.219, 3617.595, -5409.060,
            730.024, 3617.595, -5409.060,
            730.024, 3630.336, -5454.098,
            1843.219, 3630.336, -5454.098,
            1843.219, 4004.250, -5484.361,
            1843.219, 3991.508, -5439.323,
            1843.219, 3991.508, -5439.323,
            1843.219, 3617.595, -5409.060,
            1843.219, 3630.336, -5454.098,
            1843.219, 4004.250, -5484.361,
            730.024, 4004.250, -5484.361,
            730.024, 3991.508, -5439.323,
            730.024, 3991.508, -5439.323,
            1843.219, 3991.508, -5439.323,
            1843.219, 4004.250, -5484.361,
            730.024, 4004.250, -5484.361,
            730.024, 3630.336, -5454.098,
            730.024, 3617.595, -5409.060,
            730.024, 3617.595, -5409.060,
            730.024, 3991.508, -5439.323,
               730.024, 4004.250, -5484.361
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
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
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               1.000, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               1.000, 0.000,
               1.000, 1.000,
               0.000, 1.000,
               0.000, 1.000,
               0.000, 1.000,
               0.000, 1.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 0.000,
               0.000, 1.000,
               0.000, 1.000,
               1.000, 1.000,
               1.000, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 1.000,
               0.000, 1.000,
               0.000, 1.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 0.000,
               0.000, 1.000,
               0.000, 1.000,
               0.000, 1.000,
               0.000, 0.000,
               0.000, 0.000,
               1.000, 0.000,
               1.000, 1.000,
               1.000, 1.000,
               0.000, 1.000,
               0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_ROST02.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}