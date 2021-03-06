function create_geometry_489(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            17.497, 93.399, 2.748,
            17.479, 92.982, 2.330,
            17.080, 93.417, 2.330,
            17.497, 93.399, 2.748,
            17.080, 93.417, 2.330,
            17.515, 93.816, 2.330,
            17.497, 93.399, 2.748,
            17.515, 93.816, 2.330,
            17.914, 93.381, 2.330,
            17.497, 93.399, 2.748,
            17.914, 93.381, 2.330,
            17.479, 92.982, 2.330,
            17.497, 93.399, 1.913,
            17.080, 93.417, 2.330,
            17.479, 92.982, 2.330,
            17.497, 93.399, 1.913,
            17.515, 93.816, 2.330,
            17.080, 93.417, 2.330,
            17.497, 93.399, 1.913,
            17.914, 93.381, 2.330,
            17.515, 93.816, 2.330,
            17.497, 93.399, 1.913,
            17.479, 92.982, 2.330,
               17.914, 93.381, 2.330
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.044, 0.999, -0.000,
            0.999, -0.044, 0.000,
            0.000, 0.000, -1.000,
            0.999, -0.044, 0.000,
            -0.044, -0.999, 0.000,
            0.000, 0.000, -1.000,
            -0.044, -0.999, 0.000,
            -0.999, 0.044, -0.000,
            0.000, 0.000, -1.000,
            -0.999, 0.044, -0.000,
            0.044, 0.999, -0.000,
            0.000, 0.000, 1.000,
            0.999, -0.044, 0.000,
            0.044, 0.999, -0.000,
            0.000, 0.000, 1.000,
            -0.044, -0.999, 0.000,
            0.999, -0.044, 0.000,
            0.000, 0.000, 1.000,
            -0.999, 0.044, -0.000,
            -0.044, -0.999, 0.000,
            0.000, 0.000, 1.000,
            0.044, 0.999, -0.000,
               -0.999, 0.044, -0.000
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
