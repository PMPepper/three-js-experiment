function create_geometry_513(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            56.751, -117.302, 4.158,
            56.733, -116.885, 3.741,
            56.334, -117.321, 3.741,
            56.751, -117.302, 4.158,
            56.334, -117.321, 3.741,
            56.769, -117.719, 3.741,
            56.751, -117.302, 4.158,
            56.769, -117.719, 3.741,
            57.168, -117.284, 3.741,
            56.751, -117.302, 4.158,
            57.168, -117.284, 3.741,
            56.733, -116.885, 3.741,
            56.751, -117.302, 3.324,
            56.334, -117.321, 3.741,
            56.733, -116.885, 3.741,
            56.751, -117.302, 3.324,
            56.769, -117.719, 3.741,
            56.334, -117.321, 3.741,
            56.751, -117.302, 3.324,
            57.168, -117.284, 3.741,
            56.769, -117.719, 3.741,
            56.751, -117.302, 3.324,
            56.733, -116.885, 3.741,
               57.168, -117.284, 3.741
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
