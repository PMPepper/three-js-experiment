function create_geometry_56(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -57.733, 108.956, 44.087,
            -49.587, 108.956, 42.362,
            -49.587, 159.582, 42.362,
            -57.733, 108.956, 44.087,
            -49.587, 159.582, 42.362,
            -57.733, 159.582, 44.087,
            -57.733, 108.956, 44.087,
            -60.220, 108.956, 41.174,
            -57.733, 106.799, 41.174,
            -57.733, 108.956, 44.087,
            -57.733, 106.799, 41.174,
            -49.587, 106.799, 39.449,
            -57.733, 108.956, 44.087,
            -49.587, 106.799, 39.449,
            -49.587, 108.956, 42.362,
            -49.587, 108.956, 42.362,
            -49.587, 106.799, 39.449,
            -47.758, 108.956, 39.474,
            -49.587, 108.956, 42.362,
            -47.758, 108.956, 39.474,
            -47.758, 159.582, 39.474,
            -49.587, 108.956, 42.362,
            -47.758, 159.582, 39.474,
            -49.587, 159.582, 42.362,
            -49.587, 159.582, 42.362,
            -47.758, 159.582, 39.474,
            -49.587, 161.739, 39.449,
            -49.587, 159.582, 42.362,
            -49.587, 161.739, 39.449,
            -57.733, 161.739, 41.174,
            -49.587, 159.582, 42.362,
            -57.733, 161.739, 41.174,
            -57.733, 159.582, 44.087,
            -57.733, 159.582, 44.087,
            -57.733, 161.739, 41.174,
            -60.220, 159.582, 41.174,
            -57.733, 159.582, 44.087,
            -60.220, 159.582, 41.174,
            -60.220, 108.956, 41.174,
            -57.733, 159.582, 44.087,
            -60.220, 108.956, 41.174,
            -57.733, 108.956, 44.087,
            -60.220, 108.956, 41.174,
            -60.374, 108.956, 31.257,
            -57.887, 106.799, 31.257,
            -60.220, 108.956, 41.174,
            -57.887, 106.799, 31.257,
            -57.733, 106.799, 41.174,
            -57.733, 106.799, 41.174,
            -57.887, 106.799, 31.257,
            -49.741, 106.799, 31.257,
            -57.733, 106.799, 41.174,
            -49.741, 106.799, 31.257,
            -49.587, 106.799, 39.449,
            -49.587, 106.799, 39.449,
            -49.741, 106.799, 31.257,
            -47.912, 108.956, 31.283,
            -49.587, 106.799, 39.449,
            -47.912, 108.956, 31.283,
            -47.758, 108.956, 39.474,
            -47.758, 108.956, 39.474,
            -47.912, 108.956, 31.283,
            -47.912, 159.582, 31.283,
            -47.758, 108.956, 39.474,
            -47.912, 159.582, 31.283,
            -47.758, 159.582, 39.474,
            -47.758, 159.582, 39.474,
            -47.912, 159.582, 31.283,
            -49.741, 161.739, 31.257,
            -47.758, 159.582, 39.474,
            -49.741, 161.739, 31.257,
            -49.587, 161.739, 39.449,
            -49.587, 161.739, 39.449,
            -49.741, 161.739, 31.257,
            -57.887, 161.739, 31.257,
            -49.587, 161.739, 39.449,
            -57.887, 161.739, 31.257,
            -57.733, 161.739, 41.174,
            -57.733, 161.739, 41.174,
            -57.887, 161.739, 31.257,
            -60.374, 159.582, 31.257,
            -57.733, 161.739, 41.174,
            -60.374, 159.582, 31.257,
            -60.220, 159.582, 41.174,
            -60.220, 159.582, 41.174,
            -60.374, 159.582, 31.257,
            -60.374, 108.956, 31.257,
            -60.220, 159.582, 41.174,
            -60.374, 108.956, 31.257,
               -60.220, 108.956, 41.174
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.207, -0.000, 0.978,
            0.207, -0.000, 0.978,
            0.207, -0.000, 0.978,
            0.207, -0.000, 0.978,
            0.207, -0.000, 0.978,
            0.207, -0.000, 0.978,
            -0.572, -0.659, 0.488,
            -0.572, -0.659, 0.488,
            -0.572, -0.659, 0.488,
            0.125, -0.797, 0.591,
            0.125, -0.797, 0.591,
            0.125, -0.797, 0.591,
            0.125, -0.797, 0.591,
            0.125, -0.797, 0.591,
            0.125, -0.797, 0.591,
            0.685, -0.586, 0.434,
            0.685, -0.586, 0.434,
            0.685, -0.586, 0.434,
            0.845, -0.000, 0.535,
            0.845, -0.000, 0.535,
            0.845, -0.000, 0.535,
            0.845, -0.000, 0.535,
            0.845, -0.000, 0.535,
            0.845, -0.000, 0.535,
            0.685, 0.586, 0.434,
            0.685, 0.586, 0.434,
            0.685, 0.586, 0.434,
            0.125, 0.797, 0.591,
            0.125, 0.797, 0.591,
            0.125, 0.797, 0.591,
            0.125, 0.797, 0.591,
            0.125, 0.797, 0.591,
            0.125, 0.797, 0.591,
            -0.572, 0.659, 0.488,
            -0.572, 0.659, 0.488,
            -0.572, 0.659, 0.488,
            -0.761, 0.000, 0.649,
            -0.761, 0.000, 0.649,
            -0.761, 0.000, 0.649,
            -0.761, 0.000, 0.649,
            -0.761, 0.000, 0.649,
            -0.761, 0.000, 0.649,
            -0.655, -0.755, 0.010,
            -0.655, -0.755, 0.010,
            -0.655, -0.755, 0.010,
            -0.655, -0.755, 0.010,
            -0.655, -0.755, 0.010,
            -0.655, -0.755, 0.010,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.763, -0.646, -0.014,
            0.763, -0.646, -0.014,
            0.763, -0.646, -0.014,
            0.763, -0.646, -0.014,
            0.763, -0.646, -0.014,
            0.763, -0.646, -0.014,
            1.000, -0.000, -0.019,
            1.000, -0.000, -0.019,
            1.000, -0.000, -0.019,
            1.000, -0.000, -0.019,
            1.000, -0.000, -0.019,
            1.000, -0.000, -0.019,
            0.763, 0.646, -0.014,
            0.763, 0.646, -0.014,
            0.763, 0.646, -0.014,
            0.763, 0.646, -0.014,
            0.763, 0.646, -0.014,
            0.763, 0.646, -0.014,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.655, 0.755, 0.010,
            -0.655, 0.755, 0.010,
            -0.655, 0.755, 0.010,
            -0.655, 0.755, 0.010,
            -0.655, 0.755, 0.010,
            -0.655, 0.755, 0.010,
            -1.000, 0.000, 0.016,
            -1.000, 0.000, 0.016,
            -1.000, 0.000, 0.016,
            -1.000, 0.000, 0.016,
            -1.000, 0.000, 0.016,
               -1.000, 0.000, 0.016
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
