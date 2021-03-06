function create_geometry_326(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            113.812, 280.753, -28.070,
            40.049, 280.753, -27.942,
            54.548, 280.753, 44.657,
            54.548, 169.611, 44.657,
            40.049, 169.611, -27.942,
            113.812, 169.611, -28.070,
            54.548, 169.611, 44.657,
            54.548, 280.753, 44.657,
            40.049, 280.753, -27.942,
            40.049, 280.753, -27.942,
            40.049, 169.611, -27.942,
            54.548, 169.611, 44.657,
            95.884, 179.471, 20.788,
            95.884, 272.689, -28.070,
            95.884, 272.689, 20.788,
            95.884, 272.689, -28.070,
            95.884, 179.471, 20.788,
            95.884, 179.471, -28.070,
            95.884, 179.471, 20.788,
            113.812, 179.471, -28.070,
            95.884, 179.471, -28.070,
            95.884, 179.471, 20.788,
            95.884, 272.689, 20.788,
            113.812, 272.689, 20.788,
            95.884, 272.689, -28.070,
            113.812, 272.689, 20.788,
            95.884, 272.689, 20.788,
            113.812, 272.689, -28.070,
            113.812, 272.689, 20.788,
            95.884, 272.689, -28.070,
            113.812, 272.689, 20.788,
            113.812, 179.471, 20.788,
            95.884, 179.471, 20.788,
            113.812, 179.471, -28.070,
            95.884, 179.471, 20.788,
            113.812, 179.471, 20.788,
            105.096, 280.753, 42.532,
            113.812, 280.753, -28.070,
            54.548, 280.753, 44.657,
            105.096, 280.753, 42.532,
            113.812, 280.753, 33.506,
            113.812, 280.753, -28.070,
            113.812, 272.689, -28.070,
            113.812, 280.753, -28.070,
            113.812, 280.753, 33.506,
            113.812, 169.611, -28.070,
            105.096, 169.611, 42.532,
            54.548, 169.611, 44.657,
            54.548, 280.753, 44.657,
            54.548, 169.611, 44.657,
            105.096, 169.611, 42.532,
            105.096, 169.611, 42.532,
            113.812, 169.611, -28.070,
            113.812, 169.611, 33.506,
            113.812, 179.471, -28.070,
            113.812, 169.611, 33.506,
            113.812, 169.611, -28.070,
            105.096, 169.611, 42.532,
            105.096, 280.753, 42.532,
            54.548, 280.753, 44.657,
            113.812, 272.689, 20.788,
            113.812, 272.689, -28.070,
            113.812, 280.753, 33.506,
            113.812, 179.471, 20.788,
            113.812, 272.689, 20.788,
            113.812, 280.753, 33.506,
            113.812, 179.471, 20.788,
            113.812, 169.611, 33.506,
            113.812, 179.471, -28.070,
            113.812, 169.611, 33.506,
            113.812, 179.471, 20.788,
            113.812, 280.753, 33.506,
            113.812, 169.611, 33.506,
            105.096, 280.753, 42.532,
            105.096, 169.611, 42.532,
            105.096, 280.753, 42.532,
            113.812, 169.611, 33.506,
               113.812, 280.753, 33.506
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.981, 0.000, -0.196,
            -0.981, 0.000, -0.196,
            -0.981, 0.000, -0.196,
            -0.981, 0.000, -0.196,
            -0.981, 0.000, -0.196,
            -0.981, 0.000, -0.196,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.042, -0.000, -0.999,
            0.042, -0.000, -0.999,
            0.042, -0.000, -0.999,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            0.042, -0.000, -0.999,
            0.042, -0.000, -0.999,
            0.042, -0.000, -0.999,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            0.719, -0.000, -0.695,
            0.719, -0.000, -0.695,
            0.719, -0.000, -0.695,
            0.719, -0.000, -0.695,
            0.719, -0.000, -0.695,
               0.719, -0.000, -0.695
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
