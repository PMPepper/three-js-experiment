function create_geometry_33(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            15.748, 21.781, -17.765,
            -15.748, 21.781, -17.765,
            11.811, -36.797, -28.114,
            11.811, -36.797, -28.114,
            -15.748, 21.781, -17.765,
               -11.811, -36.797, -28.114
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.174, 0.985,
            0.000, -0.174, 0.985,
            0.000, -0.174, 0.985,
            0.000, -0.174, 0.985,
            0.000, -0.174, 0.985,
               0.000, -0.174, 0.985
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x151723,
            shininess: 7.464,
            ambient: 0x000000,
            transparent: true,
            opacity: 0.250,
            side: THREE.FrontSide,
            specular: 0xA3956D
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
