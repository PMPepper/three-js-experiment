function create_geometry_309(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            27.742, 58.898, -82.696,
            -28.066, 58.898, -82.696,
            -28.066, 85.319, -82.696,
            27.742, 58.898, -82.696,
            -28.066, 85.319, -82.696,
            27.742, 85.319, -82.696,
            27.742, 85.319, -82.696,
            -28.066, 85.319, -82.696,
            -46.204, 138.006, -89.181,
            27.742, 85.319, -82.696,
            -46.204, 138.006, -89.181,
            45.880, 138.006, -89.181,
            45.880, 138.006, -89.181,
            -46.204, 138.006, -89.181,
            -46.204, 215.620, -89.181,
            45.880, 138.006, -89.181,
            -46.204, 215.620, -89.181,
            45.880, 215.620, -89.181,
            27.742, 58.898, -82.696,
            29.292, 58.898, -79.703,
            27.742, 57.347, -79.703,
            27.742, 58.898, -82.696,
            27.742, 57.347, -79.703,
            -28.066, 57.347, -79.703,
            27.742, 58.898, -82.696,
            -28.066, 57.347, -79.703,
            -28.066, 58.898, -82.696,
            -28.066, 58.898, -82.696,
            -28.066, 57.347, -79.703,
            -29.616, 58.898, -79.703,
            -28.066, 58.898, -82.696,
            -29.616, 58.898, -79.703,
            -29.616, 85.319, -79.703,
            -28.066, 58.898, -82.696,
            -29.616, 85.319, -79.703,
            -28.066, 85.319, -82.696,
            -28.066, 85.319, -82.696,
            -29.616, 85.319, -79.703,
            -48.762, 138.006, -86.189,
            -28.066, 85.319, -82.696,
            -48.762, 138.006, -86.189,
            -46.204, 138.006, -89.181,
            -46.204, 138.006, -89.181,
            -48.762, 138.006, -86.189,
            -48.762, 215.620, -86.189,
            -46.204, 138.006, -89.181,
            -48.762, 215.620, -86.189,
            -46.204, 215.620, -89.181,
            -46.204, 215.620, -89.181,
            -48.762, 215.620, -86.189,
            -46.204, 218.178, -86.189,
            -46.204, 215.620, -89.181,
            -46.204, 218.178, -86.189,
            45.880, 218.178, -86.189,
            -46.204, 215.620, -89.181,
            45.880, 218.178, -86.189,
            45.880, 215.620, -89.181,
            45.880, 215.620, -89.181,
            45.880, 218.178, -86.189,
            48.438, 215.620, -86.189,
            45.880, 215.620, -89.181,
            48.438, 215.620, -86.189,
            48.438, 138.006, -86.189,
            45.880, 215.620, -89.181,
            48.438, 138.006, -86.189,
            45.880, 138.006, -89.181,
            45.880, 138.006, -89.181,
            48.438, 138.006, -86.189,
            29.292, 85.319, -79.703,
            45.880, 138.006, -89.181,
            29.292, 85.319, -79.703,
            27.742, 85.319, -82.696,
            27.742, 85.319, -82.696,
            29.292, 85.319, -79.703,
            29.292, 58.898, -79.703,
            27.742, 85.319, -82.696,
            29.292, 58.898, -79.703,
            27.742, 58.898, -82.696,
            29.292, 58.898, -79.703,
            32.238, 58.898, -48.373,
            30.533, 57.347, -48.373,
            29.292, 58.898, -79.703,
            30.533, 57.347, -48.373,
            27.742, 57.347, -79.703,
            27.742, 57.347, -79.703,
            30.533, 57.347, -48.373,
            -30.857, 57.347, -48.373,
            27.742, 57.347, -79.703,
            -30.857, 57.347, -48.373,
            -28.066, 57.347, -79.703,
            -28.066, 57.347, -79.703,
            -30.857, 57.347, -48.373,
            -32.562, 58.898, -48.373,
            -28.066, 57.347, -79.703,
            -32.562, 58.898, -48.373,
            -29.616, 58.898, -79.703,
            -29.616, 58.898, -79.703,
            -32.562, 58.898, -48.373,
            -32.562, 85.319, -48.373,
            -29.616, 58.898, -79.703,
            -32.562, 85.319, -48.373,
            -29.616, 85.319, -79.703,
            -29.616, 85.319, -79.703,
            -32.562, 85.319, -48.373,
            -53.622, 138.006, -48.373,
            -29.616, 85.319, -79.703,
            -53.622, 138.006, -48.373,
            -48.762, 138.006, -86.189,
            -48.762, 138.006, -86.189,
            -53.622, 138.006, -48.373,
            -53.622, 215.620, -48.373,
            -48.762, 138.006, -86.189,
            -53.622, 215.620, -48.373,
            -48.762, 215.620, -86.189,
            -48.762, 215.620, -86.189,
            -53.622, 215.620, -48.373,
            -50.808, 218.178, -48.373,
            -48.762, 215.620, -86.189,
            -50.808, 218.178, -48.373,
            -46.204, 218.178, -86.189,
            -46.204, 218.178, -86.189,
            -50.808, 218.178, -48.373,
            50.484, 218.178, -48.373,
            -46.204, 218.178, -86.189,
            50.484, 218.178, -48.373,
            45.880, 218.178, -86.189,
            45.880, 218.178, -86.189,
            50.484, 218.178, -48.373,
            53.298, 215.620, -48.373,
            45.880, 218.178, -86.189,
            53.298, 215.620, -48.373,
            48.438, 215.620, -86.189,
            48.438, 215.620, -86.189,
            53.298, 215.620, -48.373,
            53.298, 138.006, -48.373,
            48.438, 215.620, -86.189,
            53.298, 138.006, -48.373,
            48.438, 138.006, -86.189,
            48.438, 138.006, -86.189,
            53.298, 138.006, -48.373,
            32.238, 85.319, -48.373,
            48.438, 138.006, -86.189,
            32.238, 85.319, -48.373,
            29.292, 85.319, -79.703,
            29.292, 85.319, -79.703,
            32.238, 85.319, -48.373,
            32.238, 58.898, -48.373,
            29.292, 85.319, -79.703,
            32.238, 58.898, -48.373,
               29.292, 58.898, -79.703
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.122, -0.993,
            -0.000, -0.122, -0.993,
            -0.000, -0.122, -0.993,
            -0.000, -0.122, -0.993,
            -0.000, -0.122, -0.993,
            -0.000, -0.122, -0.993,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            0.664, -0.664, -0.344,
            0.664, -0.664, -0.344,
            0.664, -0.664, -0.344,
            -0.000, -0.888, -0.460,
            -0.000, -0.888, -0.460,
            -0.000, -0.888, -0.460,
            -0.000, -0.888, -0.460,
            -0.000, -0.888, -0.460,
            -0.000, -0.888, -0.460,
            -0.664, -0.664, -0.344,
            -0.664, -0.664, -0.344,
            -0.664, -0.664, -0.344,
            -0.888, 0.000, -0.460,
            -0.888, 0.000, -0.460,
            -0.888, 0.000, -0.460,
            -0.888, 0.000, -0.460,
            -0.888, 0.000, -0.460,
            -0.888, 0.000, -0.460,
            -0.830, -0.355, -0.430,
            -0.830, -0.355, -0.430,
            -0.830, -0.355, -0.430,
            -0.719, -0.323, -0.615,
            -0.719, -0.323, -0.615,
            -0.719, -0.323, -0.615,
            -0.760, 0.000, -0.650,
            -0.760, 0.000, -0.650,
            -0.760, 0.000, -0.650,
            -0.760, 0.000, -0.650,
            -0.760, 0.000, -0.650,
            -0.760, 0.000, -0.650,
            -0.605, 0.605, -0.517,
            -0.605, 0.605, -0.517,
            -0.605, 0.605, -0.517,
            -0.000, 0.760, -0.650,
            -0.000, 0.760, -0.650,
            -0.000, 0.760, -0.650,
            -0.000, 0.760, -0.650,
            -0.000, 0.760, -0.650,
            -0.000, 0.760, -0.650,
            0.605, 0.605, -0.517,
            0.605, 0.605, -0.517,
            0.605, 0.605, -0.517,
            0.760, -0.000, -0.650,
            0.760, -0.000, -0.650,
            0.760, -0.000, -0.650,
            0.760, -0.000, -0.650,
            0.760, -0.000, -0.650,
            0.760, -0.000, -0.650,
            0.716, -0.336, -0.612,
            0.716, -0.336, -0.612,
            0.716, -0.336, -0.612,
            0.835, -0.341, -0.432,
            0.835, -0.341, -0.432,
            0.835, -0.341, -0.432,
            0.888, -0.000, -0.460,
            0.888, -0.000, -0.460,
            0.888, -0.000, -0.460,
            0.888, -0.000, -0.460,
            0.888, -0.000, -0.460,
            0.888, -0.000, -0.460,
            0.671, -0.738, -0.063,
            0.671, -0.738, -0.063,
            0.671, -0.738, -0.063,
            0.706, -0.706, -0.063,
            0.706, -0.706, -0.063,
            0.706, -0.706, -0.063,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.671, -0.739, -0.060,
            -0.671, -0.739, -0.060,
            -0.671, -0.739, -0.060,
            -0.706, -0.706, -0.066,
            -0.706, -0.706, -0.066,
            -0.706, -0.706, -0.066,
            -0.996, 0.000, -0.094,
            -0.996, 0.000, -0.094,
            -0.996, 0.000, -0.094,
            -0.996, 0.000, -0.094,
            -0.996, 0.000, -0.094,
            -0.996, 0.000, -0.094,
            -0.925, -0.370, -0.087,
            -0.925, -0.370, -0.087,
            -0.925, -0.370, -0.087,
            -0.928, -0.352, -0.119,
            -0.928, -0.352, -0.119,
            -0.928, -0.352, -0.119,
            -0.992, 0.000, -0.127,
            -0.992, 0.000, -0.127,
            -0.992, 0.000, -0.127,
            -0.992, 0.000, -0.127,
            -0.992, 0.000, -0.127,
            -0.992, 0.000, -0.127,
            -0.670, 0.737, -0.086,
            -0.670, 0.737, -0.086,
            -0.670, 0.737, -0.086,
            -0.704, 0.705, -0.086,
            -0.704, 0.705, -0.086,
            -0.704, 0.705, -0.086,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.670, 0.737, -0.082,
            0.670, 0.737, -0.082,
            0.670, 0.737, -0.082,
            0.704, 0.704, -0.091,
            0.704, 0.704, -0.091,
            0.704, 0.704, -0.091,
            0.992, -0.000, -0.127,
            0.992, -0.000, -0.127,
            0.992, -0.000, -0.127,
            0.992, -0.000, -0.127,
            0.992, -0.000, -0.127,
            0.992, -0.000, -0.127,
            0.922, -0.369, -0.118,
            0.922, -0.369, -0.118,
            0.922, -0.369, -0.118,
            0.933, -0.350, -0.088,
            0.933, -0.350, -0.088,
            0.933, -0.350, -0.088,
            0.996, -0.000, -0.094,
            0.996, -0.000, -0.094,
            0.996, -0.000, -0.094,
            0.996, -0.000, -0.094,
            0.996, -0.000, -0.094,
               0.996, -0.000, -0.094
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