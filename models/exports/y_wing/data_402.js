function create_geometry_402(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -334.857, 262.865, 6.302,
            -334.857, 269.252, 9.990,
            -334.857, 270.240, 6.302,
            -334.857, 262.865, 6.302,
            -334.857, 266.552, 12.690,
            -334.857, 269.252, 9.990,
            -334.857, 262.865, 6.302,
            -334.857, 262.865, 13.678,
            -334.857, 266.552, 12.690,
            -334.857, 262.865, 6.302,
            -334.857, 259.177, 12.690,
            -334.857, 262.865, 13.678,
            -334.857, 262.865, 6.302,
            -334.857, 256.477, 9.990,
            -334.857, 259.177, 12.690,
            -334.857, 262.865, 6.302,
            -334.857, 255.489, 6.302,
            -334.857, 256.477, 9.990,
            -334.857, 262.865, 6.302,
            -334.857, 256.477, 2.615,
            -334.857, 255.489, 6.302,
            -334.857, 262.865, 6.302,
            -334.857, 259.177, -0.085,
            -334.857, 256.477, 2.615,
            -334.857, 262.865, 6.302,
            -334.857, 262.865, -1.073,
            -334.857, 259.177, -0.085,
            -334.857, 262.865, 6.302,
            -334.857, 266.552, -0.085,
            -334.857, 262.865, -1.073,
            -334.857, 262.865, 6.302,
            -334.857, 269.252, 2.615,
            -334.857, 266.552, -0.085,
            -334.857, 262.865, 6.302,
            -334.857, 270.240, 6.302,
            -334.857, 269.252, 2.615,
            -334.857, 270.240, 6.302,
            346.947, 269.252, 9.990,
            346.947, 270.240, 6.302,
            -334.857, 270.240, 6.302,
            -334.857, 269.252, 9.990,
            346.947, 269.252, 9.990,
            -334.857, 269.252, 9.990,
            346.947, 266.552, 12.689,
            346.947, 269.252, 9.990,
            -334.857, 269.252, 9.990,
            -334.857, 266.552, 12.690,
            346.947, 266.552, 12.689,
            -334.857, 266.552, 12.690,
            346.947, 262.865, 13.678,
            346.947, 266.552, 12.689,
            -334.857, 266.552, 12.690,
            -334.857, 262.865, 13.678,
            346.947, 262.865, 13.678,
            -334.857, 262.865, 13.678,
            346.947, 259.177, 12.689,
            346.947, 262.865, 13.678,
            -334.857, 262.865, 13.678,
            -334.857, 259.177, 12.690,
            346.947, 259.177, 12.689,
            -334.857, 259.177, 12.690,
            346.947, 256.477, 9.990,
            346.947, 259.177, 12.689,
            -334.857, 259.177, 12.690,
            -334.857, 256.477, 9.990,
            346.947, 256.477, 9.990,
            -334.857, 256.477, 9.990,
            346.947, 255.489, 6.302,
            346.947, 256.477, 9.990,
            -334.857, 256.477, 9.990,
            -334.857, 255.489, 6.302,
            346.947, 255.489, 6.302,
            -334.857, 255.489, 6.302,
            346.947, 256.477, 2.614,
            346.947, 255.489, 6.302,
            -334.857, 255.489, 6.302,
            -334.857, 256.477, 2.615,
            346.947, 256.477, 2.614,
            -334.857, 256.477, 2.615,
            346.947, 259.177, -0.085,
            346.947, 256.477, 2.614,
            -334.857, 256.477, 2.615,
            -334.857, 259.177, -0.085,
            346.947, 259.177, -0.085,
            -334.857, 259.177, -0.085,
            346.947, 262.865, -1.073,
            346.947, 259.177, -0.085,
            -334.857, 259.177, -0.085,
            -334.857, 262.865, -1.073,
            346.947, 262.865, -1.073,
            -334.857, 262.865, -1.073,
            346.947, 266.552, -0.085,
            346.947, 262.865, -1.073,
            -334.857, 262.865, -1.073,
            -334.857, 266.552, -0.085,
            346.947, 266.552, -0.085,
            -334.857, 266.552, -0.085,
            346.947, 269.252, 2.614,
            346.947, 266.552, -0.085,
            -334.857, 266.552, -0.085,
            -334.857, 269.252, 2.615,
            346.947, 269.252, 2.614,
            -334.857, 269.252, 2.615,
            346.947, 270.240, 6.302,
            346.947, 269.252, 2.614,
            -334.857, 269.252, 2.615,
            -334.857, 270.240, 6.302,
            346.947, 270.240, 6.302,
            346.947, 262.865, 6.302,
            346.947, 270.240, 6.302,
            346.947, 269.252, 9.990,
            346.947, 262.865, 6.302,
            346.947, 269.252, 9.990,
            346.947, 266.552, 12.689,
            346.947, 262.865, 6.302,
            346.947, 266.552, 12.689,
            346.947, 262.865, 13.678,
            346.947, 262.865, 6.302,
            346.947, 262.865, 13.678,
            346.947, 259.177, 12.689,
            346.947, 262.865, 6.302,
            346.947, 259.177, 12.689,
            346.947, 256.477, 9.990,
            346.947, 262.865, 6.302,
            346.947, 256.477, 9.990,
            346.947, 255.489, 6.302,
            346.947, 262.865, 6.302,
            346.947, 255.489, 6.302,
            346.947, 256.477, 2.614,
            346.947, 262.865, 6.302,
            346.947, 256.477, 2.614,
            346.947, 259.177, -0.085,
            346.947, 262.865, 6.302,
            346.947, 259.177, -0.085,
            346.947, 262.865, -1.073,
            346.947, 262.865, 6.302,
            346.947, 262.865, -1.073,
            346.947, 266.552, -0.085,
            346.947, 262.865, 6.302,
            346.947, 266.552, -0.085,
            346.947, 269.252, 2.614,
            346.947, 262.865, 6.302,
            346.947, 269.252, 2.614,
               346.947, 270.240, 6.302
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.866, 0.500,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 0.866, 0.500,
            0.000, 0.866, 0.500,
            0.000, 0.866, 0.500,
            0.000, 0.500, 0.866,
            0.000, 0.866, 0.500,
            0.000, 0.866, 0.500,
            0.000, 0.500, 0.866,
            0.000, 0.500, 0.866,
            0.000, 0.500, 0.866,
            0.000, 0.000, 1.000,
            0.000, 0.500, 0.866,
            0.000, 0.500, 0.866,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.500, 0.866,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.500, 0.866,
            0.000, -0.500, 0.866,
            0.000, -0.500, 0.866,
            0.000, -0.866, 0.500,
            0.000, -0.500, 0.866,
            0.000, -0.500, 0.866,
            0.000, -0.866, 0.500,
            0.000, -0.866, 0.500,
            0.000, -0.866, 0.500,
            -0.000, -1.000, -0.000,
            0.000, -0.866, 0.500,
            0.000, -0.866, 0.500,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -0.866, -0.500,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -0.866, -0.500,
            -0.000, -0.866, -0.500,
            -0.000, -0.866, -0.500,
            -0.000, -0.500, -0.866,
            -0.000, -0.866, -0.500,
            -0.000, -0.866, -0.500,
            -0.000, -0.500, -0.866,
            -0.000, -0.500, -0.866,
            -0.000, -0.500, -0.866,
            -0.000, 0.000, -1.000,
            -0.000, -0.500, -0.866,
            -0.000, -0.500, -0.866,
            -0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.500, -0.866,
            -0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.500, -0.866,
            -0.000, 0.500, -0.866,
            -0.000, 0.500, -0.866,
            -0.000, 0.866, -0.500,
            -0.000, 0.500, -0.866,
            -0.000, 0.500, -0.866,
            -0.000, 0.866, -0.500,
            -0.000, 0.866, -0.500,
            -0.000, 0.866, -0.500,
            0.000, 1.000, -0.000,
            -0.000, 0.866, -0.500,
            -0.000, 0.866, -0.500,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, 0.000
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
