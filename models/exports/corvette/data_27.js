function create_geometry_27(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.349, 0.693, -1.270,
            -3.591, -0.645, -0.355,
            -0.360, -7.023, -1.267,
            -0.360, -7.023, -1.267,
            -3.591, -0.645, -0.355,
            -2.855, -5.891, -0.557,
            -2.855, -5.891, -0.557,
            -3.591, -0.645, -0.355,
            -3.582, -4.668, -0.362,
            -0.386, 0.693, -1.409,
            -3.628, -0.645, -0.494,
            -0.397, -7.023, -1.406,
            -0.397, -7.023, -1.406,
            -3.628, -0.645, -0.494,
            -2.892, -5.891, -0.696,
            -2.892, -5.891, -0.696,
            -3.628, -0.645, -0.494,
            -3.619, -4.668, -0.501,
            -0.366, 0.693, 1.113,
            -3.631, -0.645, 0.284,
            -0.377, -7.023, 1.110,
            -0.377, -7.023, 1.110,
            -3.631, -0.645, 0.284,
            -3.386, -5.429, 0.348,
            -0.328, 0.693, 0.974,
            -3.593, -0.645, 0.145,
            -0.340, -7.023, 0.971,
            -0.340, -7.023, 0.971,
            -3.593, -0.645, 0.145,
            -2.855, -5.891, 0.338,
            -2.855, -5.891, 0.338,
            -3.593, -0.645, 0.145,
            -3.582, -4.668, 0.143,
            0.389, 0.693, 1.016,
            3.631, -0.645, 0.101,
            0.400, -7.023, 1.013,
            0.400, -7.023, 1.013,
            3.631, -0.645, 0.101,
            2.895, -5.891, 0.303,
            2.895, -5.891, 0.303,
            3.631, -0.645, 0.101,
            3.622, -4.668, 0.108,
            0.426, 0.693, 1.155,
            3.668, -0.645, 0.240,
            0.438, -7.023, 1.152,
            0.438, -7.023, 1.152,
            3.668, -0.645, 0.240,
            3.424, -5.429, 0.307,
            0.406, 0.693, -1.367,
            3.671, -0.645, -0.538,
            0.417, -7.023, -1.364,
            0.417, -7.023, -1.364,
            3.671, -0.645, -0.538,
            2.932, -5.891, -0.731,
            2.932, -5.891, -0.731,
            3.671, -0.645, -0.538,
            3.659, -4.668, -0.536,
            0.369, 0.693, -1.228,
            3.634, -0.645, -0.399,
            0.380, -7.023, -1.225,
            0.380, -7.023, -1.225,
            3.634, -0.645, -0.399,
               3.388, -5.430, -0.462
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.272, -0.000, 0.962,
            0.271, 0.000, 0.963,
            0.273, 0.001, 0.962,
            0.273, 0.001, 0.962,
            0.271, 0.000, 0.963,
            0.271, 0.001, 0.962,
            0.271, 0.001, 0.962,
            0.271, 0.000, 0.963,
            0.257, -0.001, 0.966,
            0.272, -0.000, 0.962,
            0.271, 0.000, 0.963,
            0.273, 0.001, 0.962,
            0.273, 0.001, 0.962,
            0.271, 0.000, 0.963,
            0.271, 0.001, 0.962,
            0.271, 0.001, 0.962,
            0.271, 0.000, 0.963,
            0.257, -0.001, 0.966,
            -0.246, -0.000, 0.969,
            -0.246, 0.000, 0.969,
            -0.246, 0.000, 0.969,
            -0.246, 0.000, 0.969,
            -0.246, 0.000, 0.969,
            -0.245, 0.000, 0.969,
            -0.246, -0.000, 0.969,
            -0.247, 0.000, 0.969,
            -0.244, 0.001, 0.970,
            -0.244, 0.001, 0.970,
            -0.247, 0.000, 0.969,
            -0.246, 0.001, 0.969,
            -0.246, 0.001, 0.969,
            -0.247, 0.000, 0.969,
            -0.261, -0.001, 0.965,
            -0.272, -0.000, -0.962,
            -0.271, 0.000, -0.963,
            -0.273, 0.001, -0.962,
            -0.273, 0.001, -0.962,
            -0.271, 0.000, -0.963,
            -0.271, 0.001, -0.962,
            -0.271, 0.001, -0.962,
            -0.271, 0.000, -0.963,
            -0.257, -0.001, -0.966,
            -0.272, -0.000, -0.962,
            -0.272, 0.000, -0.962,
            -0.272, 0.000, -0.962,
            -0.272, 0.000, -0.962,
            -0.272, 0.000, -0.962,
            -0.272, 0.000, -0.962,
            0.246, -0.000, -0.969,
            0.247, 0.000, -0.969,
            0.244, 0.001, -0.970,
            0.244, 0.001, -0.970,
            0.247, 0.000, -0.969,
            0.246, 0.001, -0.969,
            0.246, 0.001, -0.969,
            0.247, 0.000, -0.969,
            0.261, -0.001, -0.965,
            0.246, -0.000, -0.969,
            0.246, 0.000, -0.969,
            0.246, 0.000, -0.969,
            0.246, 0.000, -0.969,
            0.246, 0.000, -0.969,
               0.246, 0.000, -0.969
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.449, 1.000,
               0.005, 0.827,
               0.448, 0.000,
               0.448, 0.000,
               0.005, 0.827,
               0.106, 0.147,
               0.106, 0.147,
               0.005, 0.827,
               0.007, 0.305,
               0.444, 1.000,
               0.000, 0.827,
               0.443, 0.000,
               0.443, 0.000,
               0.000, 0.827,
               0.101, 0.147,
               0.101, 0.147,
               0.000, 0.827,
               0.002, 0.305,
               0.447, 1.000,
               0.000, 0.827,
               0.446, 0.000,
               0.446, 0.000,
               0.000, 0.827,
               0.034, 0.206,
               0.452, 1.000,
               0.005, 0.827,
               0.451, 0.000,
               0.451, 0.000,
               0.005, 0.827,
               0.106, 0.147,
               0.106, 0.147,
               0.005, 0.827,
               0.007, 0.305,
               0.551, 1.000,
               0.995, 0.827,
               0.552, 0.000,
               0.552, 0.000,
               0.995, 0.827,
               0.894, 0.147,
               0.894, 0.147,
               0.995, 0.827,
               0.993, 0.305,
               0.556, 1.000,
               1.000, 0.827,
               0.557, 0.000,
               0.557, 0.000,
               1.000, 0.827,
               0.966, 0.206,
               0.553, 1.000,
               1.000, 0.827,
               0.554, 0.000,
               0.554, 0.000,
               1.000, 0.827,
               0.899, 0.147,
               0.899, 0.147,
               1.000, 0.827,
               0.998, 0.305,
               0.548, 1.000,
               0.995, 0.827,
               0.549, 0.000,
               0.549, 0.000,
               0.995, 0.827,
               0.961, 0.206
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_BODYTUBA.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
