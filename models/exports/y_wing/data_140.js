function create_geometry_140(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -354.236, 165.674, 58.735,
            -364.184, 114.024, 59.186,
            -354.236, 114.024, 58.735,
            -354.236, 165.674, 58.735,
            -364.184, 165.674, 59.186,
            -364.184, 114.024, 59.186,
            -364.184, 165.674, 59.186,
            -374.131, 114.024, 58.735,
            -364.184, 114.024, 59.186,
            -364.184, 165.674, 59.186,
            -374.131, 165.674, 58.735,
            -374.131, 114.024, 58.735,
            -354.236, 165.674, 58.735,
            -349.133, 165.674, 43.157,
            -364.184, 165.674, 59.186,
            -354.236, 165.674, 58.735,
            -349.133, 165.674, 58.036,
            -349.133, 165.674, 43.157,
            -349.133, 165.674, 58.036,
            -354.236, 165.674, 58.735,
            -354.236, 114.024, 58.735,
            -364.184, 165.674, 59.186,
            -349.133, 165.674, 43.157,
            -374.131, 165.674, 58.735,
            -349.133, 165.674, 43.157,
            -379.235, 165.674, 58.036,
            -374.131, 165.674, 58.735,
            -349.133, 165.674, 43.157,
            -379.235, 165.674, 43.157,
            -379.235, 165.674, 58.036,
            -354.236, 114.024, 58.735,
            -349.133, 114.024, 58.036,
            -349.133, 165.674, 58.036,
            -374.131, 165.674, 58.735,
            -379.235, 114.024, 58.036,
            -374.131, 114.024, 58.735,
            -379.235, 165.674, 58.036,
            -379.235, 114.024, 58.036,
            -374.131, 165.674, 58.735,
            -349.133, 114.024, 43.157,
            -349.133, 114.024, 58.036,
            -354.236, 114.024, 58.735,
            -349.133, 114.024, 43.157,
            -354.236, 114.024, 58.735,
            -364.184, 114.024, 59.186,
            -349.133, 114.024, 43.157,
            -364.184, 114.024, 59.186,
            -374.131, 114.024, 58.735,
            -349.133, 114.024, 43.157,
            -374.131, 114.024, 58.735,
            -379.235, 114.024, 58.036,
            -379.235, 114.024, 43.157,
            -349.133, 114.024, 43.157,
            -379.235, 114.024, 58.036,
            -349.133, 165.674, 43.157,
            -349.133, 165.674, 58.036,
            -349.133, 114.024, 58.036,
            -349.133, 114.024, 58.036,
            -349.133, 114.024, 43.157,
            -349.133, 165.674, 43.157,
            -379.235, 114.024, 43.157,
            -379.235, 165.674, 43.157,
            -349.133, 165.674, 43.157,
            -349.133, 165.674, 43.157,
            -349.133, 114.024, 43.157,
            -379.235, 114.024, 43.157,
            -379.235, 165.674, 58.036,
            -379.235, 114.024, 43.157,
            -379.235, 114.024, 58.036,
            -379.235, 114.024, 43.157,
            -379.235, 165.674, 58.036,
               -379.235, 165.674, 43.157
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.091, 0.000, 0.996,
            -0.000, 0.000, 1.000,
            0.091, -0.000, 0.996,
            0.091, 0.000, 0.996,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.091, 0.000, 0.996,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.091, -0.000, 0.996,
            -0.091, 0.000, 0.996,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.136, -0.000, 0.991,
            0.091, 0.000, 0.996,
            0.091, -0.000, 0.996,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.091, -0.000, 0.996,
            0.136, -0.000, 0.991,
            0.136, -0.000, 0.991,
            -0.091, -0.000, 0.996,
            -0.136, 0.000, 0.991,
            -0.091, 0.000, 0.996,
            -0.136, -0.000, 0.991,
            -0.136, 0.000, 0.991,
            -0.091, -0.000, 0.996,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
               -1.000, 0.000, -0.000
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
