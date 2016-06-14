function create_geometry_328(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -52.191, 418.320, 22.453,
            -105.509, 418.320, -31.910,
            -52.191, 418.320, -31.910,
            -52.191, 418.320, 22.453,
            -105.509, 418.320, 22.453,
               -105.509, 418.320, -31.910
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
               -0.000, -1.000, -0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x969696,
            shininess: 2.000,
            ambient: 0x969696,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}