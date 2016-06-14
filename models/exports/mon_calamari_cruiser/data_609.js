function create_geometry_609(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            78.165, 72.080, 19.227,
            78.146, 71.663, 18.809,
            77.748, 72.098, 18.809,
            78.165, 72.080, 19.227,
            77.748, 72.098, 18.809,
            78.183, 72.497, 18.809,
            78.165, 72.080, 19.227,
            78.183, 72.497, 18.809,
            78.581, 72.061, 18.809,
            78.165, 72.080, 19.227,
            78.581, 72.061, 18.809,
            78.146, 71.663, 18.809,
            78.165, 72.080, 18.392,
            77.748, 72.098, 18.809,
            78.146, 71.663, 18.809,
            78.165, 72.080, 18.392,
            78.183, 72.497, 18.809,
            77.748, 72.098, 18.809,
            78.165, 72.080, 18.392,
            78.581, 72.061, 18.809,
            78.183, 72.497, 18.809,
            78.165, 72.080, 18.392,
            78.146, 71.663, 18.809,
               78.581, 72.061, 18.809
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -0.000, -1.000,
            0.044, 0.999, 0.000,
            0.999, -0.044, -0.000,
            -0.000, -0.000, -1.000,
            0.999, -0.044, -0.000,
            -0.044, -0.999, 0.000,
            -0.000, -0.000, -1.000,
            -0.044, -0.999, 0.000,
            -0.999, 0.044, 0.000,
            -0.000, -0.000, -1.000,
            -0.999, 0.044, 0.000,
            0.044, 0.999, 0.000,
            -0.000, -0.000, 1.000,
            0.999, -0.044, -0.000,
            0.044, 0.999, 0.000,
            -0.000, -0.000, 1.000,
            -0.044, -0.999, 0.000,
            0.999, -0.044, -0.000,
            -0.000, -0.000, 1.000,
            -0.999, 0.044, 0.000,
            -0.044, -0.999, 0.000,
            -0.000, -0.000, 1.000,
            0.044, 0.999, 0.000,
               -0.999, 0.044, 0.000
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
