function create_geometry_75(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            75.945, -131.119, 26.986,
            76.731, -130.018, 26.986,
            75.934, -129.856, 26.986,
            75.945, -131.119, 26.986,
            77.317, -130.476, 26.986,
            76.731, -130.018, 26.986,
            75.945, -131.119, 26.986,
            77.536, -131.105, 26.986,
            77.317, -130.476, 26.986,
            75.945, -131.119, 26.986,
            77.328, -131.738, 26.986,
            77.536, -131.105, 26.986,
            75.945, -131.119, 26.986,
            76.750, -132.206, 26.986,
            77.328, -131.738, 26.986,
            75.945, -131.119, 26.986,
            75.956, -132.382, 26.986,
            76.750, -132.206, 26.986,
            75.945, -131.119, 26.986,
            75.159, -132.220, 26.986,
            75.956, -132.382, 26.986,
            75.945, -131.119, 26.986,
            74.572, -131.762, 26.986,
            75.159, -132.220, 26.986,
            75.945, -131.119, 26.986,
            74.354, -131.133, 26.986,
            74.572, -131.762, 26.986,
            75.945, -131.119, 26.986,
            74.561, -130.500, 26.986,
            74.354, -131.133, 26.986,
            75.945, -131.119, 26.986,
            75.140, -130.032, 26.986,
            74.561, -130.500, 26.986,
            75.945, -131.119, 26.986,
            75.934, -129.856, 26.986,
            75.140, -130.032, 26.986,
            75.934, -129.856, 26.986,
            76.731, -130.018, -2.168,
            75.934, -129.856, -2.168,
            75.934, -129.856, 26.986,
            76.731, -130.018, 26.986,
            76.731, -130.018, -2.168,
            76.731, -130.018, 26.986,
            77.317, -130.476, -2.168,
            76.731, -130.018, -2.168,
            76.731, -130.018, 26.986,
            77.317, -130.476, 26.986,
            77.317, -130.476, -2.168,
            77.317, -130.476, 26.986,
            77.536, -131.105, -2.168,
            77.317, -130.476, -2.168,
            77.317, -130.476, 26.986,
            77.536, -131.105, 26.986,
            77.536, -131.105, -2.168,
            77.536, -131.105, 26.986,
            77.328, -131.738, -2.168,
            77.536, -131.105, -2.168,
            77.536, -131.105, 26.986,
            77.328, -131.738, 26.986,
            77.328, -131.738, -2.168,
            77.328, -131.738, 26.986,
            76.750, -132.206, -2.168,
            77.328, -131.738, -2.168,
            77.328, -131.738, 26.986,
            76.750, -132.206, 26.986,
            76.750, -132.206, -2.168,
            76.750, -132.206, 26.986,
            75.956, -132.382, -2.168,
            76.750, -132.206, -2.168,
            76.750, -132.206, 26.986,
            75.956, -132.382, 26.986,
            75.956, -132.382, -2.168,
            75.956, -132.382, 26.986,
            75.159, -132.220, -2.168,
            75.956, -132.382, -2.168,
            75.956, -132.382, 26.986,
            75.159, -132.220, 26.986,
            75.159, -132.220, -2.168,
            75.159, -132.220, 26.986,
            74.572, -131.762, -2.168,
            75.159, -132.220, -2.168,
            75.159, -132.220, 26.986,
            74.572, -131.762, 26.986,
            74.572, -131.762, -2.168,
            74.572, -131.762, 26.986,
            74.354, -131.133, -2.168,
            74.572, -131.762, -2.168,
            74.572, -131.762, 26.986,
            74.354, -131.133, 26.986,
            74.354, -131.133, -2.168,
            74.354, -131.133, 26.986,
            74.561, -130.500, -2.168,
            74.354, -131.133, -2.168,
            74.354, -131.133, 26.986,
            74.561, -130.500, 26.986,
            74.561, -130.500, -2.168,
            74.561, -130.500, 26.986,
            75.140, -130.032, -2.168,
            74.561, -130.500, -2.168,
            74.561, -130.500, 26.986,
            75.140, -130.032, 26.986,
            75.140, -130.032, -2.168,
            75.140, -130.032, 26.986,
            75.934, -129.856, -2.168,
            75.140, -130.032, -2.168,
            75.140, -130.032, 26.986,
            75.934, -129.856, 26.986,
            75.934, -129.856, -2.168,
            75.945, -131.119, -2.168,
            75.934, -129.856, -2.168,
            76.731, -130.018, -2.168,
            75.945, -131.119, -2.168,
            76.731, -130.018, -2.168,
            77.317, -130.476, -2.168,
            75.945, -131.119, -2.168,
            77.317, -130.476, -2.168,
            77.536, -131.105, -2.168,
            75.945, -131.119, -2.168,
            77.536, -131.105, -2.168,
            77.328, -131.738, -2.168,
            75.945, -131.119, -2.168,
            77.328, -131.738, -2.168,
            76.750, -132.206, -2.168,
            75.945, -131.119, -2.168,
            76.750, -132.206, -2.168,
            75.956, -132.382, -2.168,
            75.945, -131.119, -2.168,
            75.956, -132.382, -2.168,
            75.159, -132.220, -2.168,
            75.945, -131.119, -2.168,
            75.159, -132.220, -2.168,
            74.572, -131.762, -2.168,
            75.945, -131.119, -2.168,
            74.572, -131.762, -2.168,
            74.354, -131.133, -2.168,
            75.945, -131.119, -2.168,
            74.354, -131.133, -2.168,
            74.561, -130.500, -2.168,
            75.945, -131.119, -2.168,
            74.561, -130.500, -2.168,
            75.140, -130.032, -2.168,
            75.945, -131.119, -2.168,
            75.140, -130.032, -2.168,
               75.934, -129.856, -2.168
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            -0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.009, 1.000, 0.000,
            0.418, 0.908, -0.000,
            -0.009, 1.000, 0.000,
            -0.009, 1.000, 0.000,
            0.418, 0.908, -0.000,
            0.418, 0.908, -0.000,
            0.418, 0.908, -0.000,
            0.813, 0.582, -0.000,
            0.418, 0.908, -0.000,
            0.418, 0.908, -0.000,
            0.813, 0.582, -0.000,
            0.813, 0.582, -0.000,
            0.813, 0.582, -0.000,
            1.000, 0.009, -0.000,
            0.813, 0.582, -0.000,
            0.813, 0.582, -0.000,
            1.000, 0.009, -0.000,
            1.000, 0.009, -0.000,
            1.000, 0.009, -0.000,
            0.823, -0.568, -0.000,
            1.000, 0.009, -0.000,
            1.000, 0.009, -0.000,
            0.823, -0.568, 0.000,
            0.823, -0.568, -0.000,
            0.823, -0.568, 0.000,
            0.434, -0.901, 0.000,
            0.823, -0.568, -0.000,
            0.823, -0.568, 0.000,
            0.434, -0.901, 0.000,
            0.434, -0.901, 0.000,
            0.434, -0.901, 0.000,
            0.009, -1.000, 0.000,
            0.434, -0.901, 0.000,
            0.434, -0.901, 0.000,
            0.009, -1.000, -0.000,
            0.009, -1.000, 0.000,
            0.009, -1.000, -0.000,
            -0.418, -0.908, 0.000,
            0.009, -1.000, 0.000,
            0.009, -1.000, -0.000,
            -0.418, -0.908, 0.000,
            -0.418, -0.908, 0.000,
            -0.418, -0.908, 0.000,
            -0.813, -0.582, 0.000,
            -0.418, -0.908, 0.000,
            -0.418, -0.908, 0.000,
            -0.813, -0.582, 0.000,
            -0.813, -0.582, 0.000,
            -0.813, -0.582, 0.000,
            -1.000, -0.009, 0.000,
            -0.813, -0.582, 0.000,
            -0.813, -0.582, 0.000,
            -1.000, -0.009, 0.000,
            -1.000, -0.009, 0.000,
            -1.000, -0.009, 0.000,
            -0.823, 0.568, 0.000,
            -1.000, -0.009, 0.000,
            -1.000, -0.009, 0.000,
            -0.823, 0.568, 0.000,
            -0.823, 0.568, 0.000,
            -0.823, 0.568, 0.000,
            -0.434, 0.901, 0.000,
            -0.823, 0.568, 0.000,
            -0.823, 0.568, 0.000,
            -0.434, 0.901, 0.000,
            -0.434, 0.901, 0.000,
            -0.434, 0.901, 0.000,
            -0.009, 1.000, 0.000,
            -0.434, 0.901, 0.000,
            -0.434, 0.901, 0.000,
            -0.009, 1.000, 0.000,
            -0.009, 1.000, 0.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, 0.000, -1.000,
               -0.000, -0.000, -1.000
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
