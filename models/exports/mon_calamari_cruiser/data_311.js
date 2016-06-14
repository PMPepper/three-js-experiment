function create_geometry_311(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            51.163, -95.872, 2.748,
            51.145, -95.455, 2.330,
            50.746, -95.890, 2.330,
            51.163, -95.872, 2.748,
            50.746, -95.890, 2.330,
            51.182, -96.289, 2.330,
            51.163, -95.872, 2.748,
            51.182, -96.289, 2.330,
            51.580, -95.854, 2.330,
            51.163, -95.872, 2.748,
            51.580, -95.854, 2.330,
            51.145, -95.455, 2.330,
            51.163, -95.872, 1.913,
            50.746, -95.890, 2.330,
            51.145, -95.455, 2.330,
            51.163, -95.872, 1.913,
            51.182, -96.289, 2.330,
            50.746, -95.890, 2.330,
            51.163, -95.872, 1.913,
            51.580, -95.854, 2.330,
            51.182, -96.289, 2.330,
            51.163, -95.872, 1.913,
            51.145, -95.455, 2.330,
               51.580, -95.854, 2.330
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            -0.044, 0.999, -0.000,
            -0.999, -0.044, 0.000,
            0.000, 0.000, 1.000,
            -0.999, -0.044, 0.000,
            0.044, -0.999, -0.000,
            0.000, 0.000, 1.000,
            0.044, -0.999, -0.000,
            0.999, 0.044, 0.000,
            0.000, 0.000, 1.000,
            0.999, 0.044, 0.000,
            -0.044, 0.999, -0.000,
            0.000, 0.000, -1.000,
            -0.999, -0.044, 0.000,
            -0.044, 0.999, -0.000,
            0.000, 0.000, -1.000,
            0.044, -0.999, -0.000,
            -0.999, -0.044, 0.000,
            0.000, 0.000, -1.000,
            0.999, 0.044, 0.000,
            0.044, -0.999, -0.000,
            0.000, 0.000, -1.000,
            -0.044, 0.999, -0.000,
               0.999, 0.044, 0.000
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
