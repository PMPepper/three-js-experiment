function create_geometry_290(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -334.857, 262.865, -54.896,
            -334.857, 269.252, -51.208,
            -334.857, 270.240, -54.896,
            -334.857, 262.865, -54.896,
            -334.857, 266.552, -48.509,
            -334.857, 269.252, -51.208,
            -334.857, 262.865, -54.896,
            -334.857, 262.865, -47.520,
            -334.857, 266.552, -48.509,
            -334.857, 262.865, -54.896,
            -334.857, 259.177, -48.509,
            -334.857, 262.865, -47.520,
            -334.857, 262.865, -54.896,
            -334.857, 256.477, -51.208,
            -334.857, 259.177, -48.509,
            -334.857, 262.865, -54.896,
            -334.857, 255.489, -54.896,
            -334.857, 256.477, -51.208,
            -334.857, 262.865, -54.896,
            -334.857, 256.477, -58.584,
            -334.857, 255.489, -54.896,
            -334.857, 262.865, -54.896,
            -334.857, 259.177, -61.283,
            -334.857, 256.477, -58.584,
            -334.857, 262.865, -54.896,
            -334.857, 262.865, -62.271,
            -334.857, 259.177, -61.283,
            -334.857, 262.865, -54.896,
            -334.857, 266.552, -61.283,
            -334.857, 262.865, -62.271,
            -334.857, 262.865, -54.896,
            -334.857, 269.252, -58.584,
            -334.857, 266.552, -61.283,
            -334.857, 262.865, -54.896,
            -334.857, 270.240, -54.896,
            -334.857, 269.252, -58.584,
            -334.857, 270.240, -54.896,
            346.947, 269.252, -51.208,
            346.947, 270.240, -54.896,
            -334.857, 270.240, -54.896,
            -334.857, 269.252, -51.208,
            346.947, 269.252, -51.208,
            -334.857, 269.252, -51.208,
            346.947, 266.552, -48.509,
            346.947, 269.252, -51.208,
            -334.857, 269.252, -51.208,
            -334.857, 266.552, -48.509,
            346.947, 266.552, -48.509,
            -334.857, 266.552, -48.509,
            346.947, 262.865, -47.521,
            346.947, 266.552, -48.509,
            -334.857, 266.552, -48.509,
            -334.857, 262.865, -47.520,
            346.947, 262.865, -47.521,
            -334.857, 262.865, -47.520,
            346.947, 259.177, -48.509,
            346.947, 262.865, -47.521,
            -334.857, 262.865, -47.520,
            -334.857, 259.177, -48.509,
            346.947, 259.177, -48.509,
            -334.857, 259.177, -48.509,
            346.947, 256.477, -51.208,
            346.947, 259.177, -48.509,
            -334.857, 259.177, -48.509,
            -334.857, 256.477, -51.208,
            346.947, 256.477, -51.208,
            -334.857, 256.477, -51.208,
            346.947, 255.489, -54.896,
            346.947, 256.477, -51.208,
            -334.857, 256.477, -51.208,
            -334.857, 255.489, -54.896,
            346.947, 255.489, -54.896,
            -334.857, 255.489, -54.896,
            346.947, 256.477, -58.584,
            346.947, 255.489, -54.896,
            -334.857, 255.489, -54.896,
            -334.857, 256.477, -58.584,
            346.947, 256.477, -58.584,
            -334.857, 256.477, -58.584,
            346.947, 259.177, -61.283,
            346.947, 256.477, -58.584,
            -334.857, 256.477, -58.584,
            -334.857, 259.177, -61.283,
            346.947, 259.177, -61.283,
            -334.857, 259.177, -61.283,
            346.947, 262.865, -62.271,
            346.947, 259.177, -61.283,
            -334.857, 259.177, -61.283,
            -334.857, 262.865, -62.271,
            346.947, 262.865, -62.271,
            -334.857, 262.865, -62.271,
            346.947, 266.552, -61.283,
            346.947, 262.865, -62.271,
            -334.857, 262.865, -62.271,
            -334.857, 266.552, -61.283,
            346.947, 266.552, -61.283,
            -334.857, 266.552, -61.283,
            346.947, 269.252, -58.584,
            346.947, 266.552, -61.283,
            -334.857, 266.552, -61.283,
            -334.857, 269.252, -58.584,
            346.947, 269.252, -58.584,
            -334.857, 269.252, -58.584,
            346.947, 270.240, -54.896,
            346.947, 269.252, -58.584,
            -334.857, 269.252, -58.584,
            -334.857, 270.240, -54.896,
            346.947, 270.240, -54.896,
            346.947, 262.865, -54.896,
            346.947, 270.240, -54.896,
            346.947, 269.252, -51.208,
            346.947, 262.865, -54.896,
            346.947, 269.252, -51.208,
            346.947, 266.552, -48.509,
            346.947, 262.865, -54.896,
            346.947, 266.552, -48.509,
            346.947, 262.865, -47.521,
            346.947, 262.865, -54.896,
            346.947, 262.865, -47.521,
            346.947, 259.177, -48.509,
            346.947, 262.865, -54.896,
            346.947, 259.177, -48.509,
            346.947, 256.477, -51.208,
            346.947, 262.865, -54.896,
            346.947, 256.477, -51.208,
            346.947, 255.489, -54.896,
            346.947, 262.865, -54.896,
            346.947, 255.489, -54.896,
            346.947, 256.477, -58.584,
            346.947, 262.865, -54.896,
            346.947, 256.477, -58.584,
            346.947, 259.177, -61.283,
            346.947, 262.865, -54.896,
            346.947, 259.177, -61.283,
            346.947, 262.865, -62.271,
            346.947, 262.865, -54.896,
            346.947, 262.865, -62.271,
            346.947, 266.552, -61.283,
            346.947, 262.865, -54.896,
            346.947, 266.552, -61.283,
            346.947, 269.252, -58.584,
            346.947, 262.865, -54.896,
            346.947, 269.252, -58.584,
               346.947, 270.240, -54.896
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
            0.000, 1.000, -0.000,
            0.000, 0.866, 0.500,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 0.866, 0.500,
            0.000, 0.866, 0.500,
            0.000, 0.866, 0.500,
            0.000, 0.500, 0.866,
            0.000, 0.866, 0.500,
            0.000, 0.866, 0.500,
            0.000, 0.500, 0.866,
            0.000, 0.500, 0.866,
            0.000, 0.500, 0.866,
            0.000, -0.000, 1.000,
            0.000, 0.500, 0.866,
            0.000, 0.500, 0.866,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.500, 0.866,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.500, 0.866,
            0.000, -0.500, 0.866,
            0.000, -0.500, 0.866,
            0.000, -0.866, 0.500,
            0.000, -0.500, 0.866,
            0.000, -0.500, 0.866,
            0.000, -0.866, 0.500,
            0.000, -0.866, 0.500,
            0.000, -0.866, 0.500,
            -0.000, -1.000, 0.000,
            0.000, -0.866, 0.500,
            0.000, -0.866, 0.500,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -0.866, -0.500,
            -0.000, -1.000, 0.000,
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
            0.000, 0.866, -0.500,
            -0.000, 0.866, -0.500,
            0.000, 0.866, -0.500,
            0.000, 1.000, 0.000,
            -0.000, 0.866, -0.500,
            0.000, 0.866, -0.500,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
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
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
               1.000, 0.000, -0.000
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