function create_geometry_296(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            35.510, -66.043, 17.212,
            35.498, -65.752, 16.921,
            35.219, -66.056, 16.921,
            35.510, -66.043, 17.212,
            35.219, -66.056, 16.921,
            35.523, -66.335, 16.921,
            35.510, -66.043, 17.212,
            35.523, -66.335, 16.921,
            35.802, -66.031, 16.921,
            35.510, -66.043, 17.212,
            35.802, -66.031, 16.921,
            35.498, -65.752, 16.921,
            35.510, -66.043, 16.629,
            35.219, -66.056, 16.921,
            35.498, -65.752, 16.921,
            35.510, -66.043, 16.629,
            35.523, -66.335, 16.921,
            35.219, -66.056, 16.921,
            35.510, -66.043, 16.629,
            35.802, -66.031, 16.921,
            35.523, -66.335, 16.921,
            35.510, -66.043, 16.629,
            35.498, -65.752, 16.921,
               35.802, -66.031, 16.921
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