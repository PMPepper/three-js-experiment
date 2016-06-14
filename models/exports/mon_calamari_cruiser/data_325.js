function create_geometry_325(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -84.797, -124.019, -5.427,
            -84.797, -123.396, -6.051,
            -85.421, -124.019, -6.051,
            -84.797, -124.019, -5.427,
            -85.421, -124.019, -6.051,
            -84.797, -124.643, -6.051,
            -84.797, -124.019, -5.427,
            -84.797, -124.643, -6.051,
            -84.174, -124.019, -6.051,
            -84.797, -124.019, -5.427,
            -84.174, -124.019, -6.051,
            -84.797, -123.396, -6.051,
            -84.797, -124.019, -6.674,
            -85.421, -124.019, -6.051,
            -84.797, -123.396, -6.051,
            -84.797, -124.019, -6.674,
            -84.797, -124.643, -6.051,
            -85.421, -124.019, -6.051,
            -84.797, -124.019, -6.674,
            -84.174, -124.019, -6.051,
            -84.797, -124.643, -6.051,
            -84.797, -124.019, -6.674,
            -84.797, -123.396, -6.051,
               -84.174, -124.019, -6.051
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 1.000, 0.000,
               1.000, 0.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xD2F0F8,
            shininess: 2.000,
            ambient: 0xD2F0F8,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}