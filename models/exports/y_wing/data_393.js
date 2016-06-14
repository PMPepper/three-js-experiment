function create_geometry_393(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -99.398, -56.298, 62.457,
            -99.398, -50.726, 62.457,
            -109.056, -50.726, 62.457,
            -109.056, -50.726, 62.457,
            -109.056, -56.298, 62.457,
            -99.398, -56.298, 62.457,
            -99.398, -56.298, 56.885,
            -99.398, -50.726, 56.885,
            -99.398, -50.726, 62.457,
            -99.398, -50.726, 62.457,
            -99.398, -56.298, 62.457,
            -99.398, -56.298, 56.885,
            -99.398, -50.726, 56.885,
            -109.056, -50.726, 56.885,
            -109.056, -50.726, 62.457,
            -109.056, -50.726, 62.457,
            -99.398, -50.726, 62.457,
            -99.398, -50.726, 56.885,
            -109.056, -50.726, 56.885,
            -109.056, -56.298, 56.885,
            -109.056, -56.298, 62.457,
            -109.056, -56.298, 62.457,
            -109.056, -50.726, 62.457,
            -109.056, -50.726, 56.885,
            -109.056, -56.298, 56.885,
            -99.398, -56.298, 56.885,
            -99.398, -56.298, 62.457,
            -99.398, -56.298, 62.457,
            -109.056, -56.298, 62.457,
               -109.056, -56.298, 56.885
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
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
            -1.000, 0.000, 0.000,
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