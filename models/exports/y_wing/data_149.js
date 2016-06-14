function create_geometry_149(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -358.263, 371.798, 55.214,
            -364.184, 85.655, 55.664,
            -358.263, 85.655, 55.214,
            -358.263, 371.798, 55.214,
            -364.184, 371.798, 55.664,
            -364.184, 85.655, 55.664,
            -364.184, 371.798, 55.664,
            -370.105, 85.655, 55.214,
            -364.184, 85.655, 55.664,
            -364.184, 371.798, 55.664,
            -370.105, 371.798, 55.214,
            -370.105, 85.655, 55.214,
            -358.263, 371.798, 55.214,
            -355.225, 371.798, 39.635,
            -364.184, 371.798, 55.664,
            -358.263, 371.798, 55.214,
            -355.225, 371.798, 54.515,
            -355.225, 371.798, 39.635,
            -355.225, 371.798, 54.515,
            -358.263, 371.798, 55.214,
            -358.263, 85.655, 55.214,
            -364.184, 371.798, 55.664,
            -355.225, 371.798, 39.635,
            -370.105, 371.798, 55.214,
            -355.225, 371.798, 39.635,
            -373.143, 371.798, 54.515,
            -370.105, 371.798, 55.214,
            -355.225, 371.798, 39.635,
            -373.143, 371.798, 39.635,
            -373.143, 371.798, 54.515,
            -358.263, 85.655, 55.214,
            -355.225, 85.655, 54.515,
            -355.225, 371.798, 54.515,
            -370.105, 371.798, 55.214,
            -373.143, 85.655, 54.515,
            -370.105, 85.655, 55.214,
            -373.143, 371.798, 54.515,
            -373.143, 85.655, 54.515,
            -370.105, 371.798, 55.214,
            -355.225, 85.655, 39.635,
            -355.225, 85.655, 54.515,
            -358.263, 85.655, 55.214,
            -355.225, 85.655, 39.635,
            -358.263, 85.655, 55.214,
            -364.184, 85.655, 55.664,
            -355.225, 85.655, 39.635,
            -364.184, 85.655, 55.664,
            -370.105, 85.655, 55.214,
            -355.225, 85.655, 39.635,
            -370.105, 85.655, 55.214,
            -373.143, 85.655, 54.515,
            -373.143, 85.655, 39.635,
            -355.225, 85.655, 39.635,
            -373.143, 85.655, 54.515,
            -355.225, 371.798, 39.635,
            -355.225, 371.798, 54.515,
            -355.225, 85.655, 54.515,
            -355.225, 85.655, 54.515,
            -355.225, 85.655, 39.635,
            -355.225, 371.798, 39.635,
            -373.143, 85.655, 39.635,
            -373.143, 371.798, 39.635,
            -355.225, 371.798, 39.635,
            -355.225, 371.798, 39.635,
            -355.225, 85.655, 39.635,
            -373.143, 85.655, 39.635,
            -373.143, 371.798, 54.515,
            -373.143, 85.655, 39.635,
            -373.143, 85.655, 54.515,
            -373.143, 85.655, 39.635,
            -373.143, 371.798, 54.515,
               -373.143, 371.798, 39.635
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.150, 0.000, 0.989,
            0.000, 0.000, 1.000,
            0.150, 0.000, 0.989,
            0.150, 0.000, 0.989,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.150, 0.000, 0.989,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.150, 0.000, 0.989,
            -0.150, 0.000, 0.989,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.224, 0.000, 0.975,
            0.150, 0.000, 0.989,
            0.150, 0.000, 0.989,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.150, 0.000, 0.989,
            0.224, 0.000, 0.975,
            0.224, 0.000, 0.975,
            -0.150, 0.000, 0.989,
            -0.224, 0.000, 0.975,
            -0.150, 0.000, 0.989,
            -0.224, 0.000, 0.975,
            -0.224, 0.000, 0.975,
            -0.150, 0.000, 0.989,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, -0.000, -1.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
               -1.000, -0.000, 0.000
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