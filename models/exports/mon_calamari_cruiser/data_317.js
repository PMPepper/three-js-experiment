function create_geometry_317(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            21.542, -92.182, 2.748,
            21.524, -91.766, 2.330,
            21.125, -92.201, 2.330,
            21.542, -92.182, 2.748,
            21.125, -92.201, 2.330,
            21.560, -92.599, 2.330,
            21.542, -92.182, 2.748,
            21.560, -92.599, 2.330,
            21.959, -92.164, 2.330,
            21.542, -92.182, 2.748,
            21.959, -92.164, 2.330,
            21.524, -91.766, 2.330,
            21.542, -92.182, 1.913,
            21.125, -92.201, 2.330,
            21.524, -91.766, 2.330,
            21.542, -92.182, 1.913,
            21.560, -92.599, 2.330,
            21.125, -92.201, 2.330,
            21.542, -92.182, 1.913,
            21.959, -92.164, 2.330,
            21.560, -92.599, 2.330,
            21.542, -92.182, 1.913,
            21.524, -91.766, 2.330,
               21.959, -92.164, 2.330
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
