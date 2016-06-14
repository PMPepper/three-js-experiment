function create_geometry_323(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -40.716, 90.169, 50.415,
            -20.394, 90.169, 48.690,
            -9.678, 141.883, 48.690,
            -40.716, 90.169, 50.415,
            -9.678, 141.883, 48.690,
            -40.716, 141.883, 50.415,
            -40.716, 90.169, 50.415,
            -43.629, 90.169, 47.502,
            -40.716, 87.256, 47.502,
            -40.716, 90.169, 50.415,
            -40.716, 87.256, 47.502,
            -20.394, 87.256, 45.777,
            -40.716, 90.169, 50.415,
            -20.394, 87.256, 45.777,
            -20.394, 90.169, 48.690,
            -20.394, 90.169, 48.690,
            -20.394, 87.256, 45.777,
            -17.481, 90.169, 45.777,
            -20.394, 90.169, 48.690,
            -17.481, 90.169, 45.777,
            -6.765, 141.883, 45.777,
            -20.394, 90.169, 48.690,
            -6.765, 141.883, 45.777,
            -9.678, 141.883, 48.690,
            -9.678, 141.883, 48.690,
            -6.765, 141.883, 45.777,
            -9.678, 144.796, 45.777,
            -9.678, 141.883, 48.690,
            -9.678, 144.796, 45.777,
            -40.716, 144.796, 47.502,
            -9.678, 141.883, 48.690,
            -40.716, 144.796, 47.502,
            -40.716, 141.883, 50.415,
            -40.716, 141.883, 50.415,
            -40.716, 144.796, 47.502,
            -43.629, 141.883, 47.502,
            -40.716, 141.883, 50.415,
            -43.629, 141.883, 47.502,
            -43.629, 90.169, 47.502,
            -40.716, 141.883, 50.415,
            -43.629, 90.169, 47.502,
            -40.716, 90.169, 50.415,
            -43.629, 90.169, 47.502,
            -43.629, 90.169, 27.981,
            -40.716, 87.256, 27.981,
            -43.629, 90.169, 47.502,
            -40.716, 87.256, 27.981,
            -40.716, 87.256, 47.502,
            -40.716, 87.256, 47.502,
            -40.716, 87.256, 27.981,
            -20.394, 87.256, 27.981,
            -40.716, 87.256, 47.502,
            -20.394, 87.256, 27.981,
            -20.394, 87.256, 45.777,
            -20.394, 87.256, 45.777,
            -20.394, 87.256, 27.981,
            -17.481, 90.169, 27.981,
            -20.394, 87.256, 45.777,
            -17.481, 90.169, 27.981,
            -17.481, 90.169, 45.777,
            -17.481, 90.169, 45.777,
            -17.481, 90.169, 27.981,
            -6.765, 141.883, 27.981,
            -17.481, 90.169, 45.777,
            -6.765, 141.883, 27.981,
            -6.765, 141.883, 45.777,
            -6.765, 141.883, 45.777,
            -6.765, 141.883, 27.981,
            -9.678, 144.796, 27.981,
            -6.765, 141.883, 45.777,
            -9.678, 144.796, 27.981,
            -9.678, 144.796, 45.777,
            -9.678, 144.796, 45.777,
            -9.678, 144.796, 27.981,
            -40.716, 144.796, 27.981,
            -9.678, 144.796, 45.777,
            -40.716, 144.796, 27.981,
            -40.716, 144.796, 47.502,
            -40.716, 144.796, 47.502,
            -40.716, 144.796, 27.981,
            -43.629, 141.883, 27.981,
            -40.716, 144.796, 47.502,
            -43.629, 141.883, 27.981,
            -43.629, 141.883, 47.502,
            -43.629, 141.883, 47.502,
            -43.629, 141.883, 27.981,
            -43.629, 90.169, 27.981,
            -43.629, 141.883, 47.502,
            -43.629, 90.169, 27.981,
               -43.629, 90.169, 47.502
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.085, -0.018, 0.996,
            0.085, -0.018, 0.996,
            0.085, -0.018, 0.996,
            0.055, -0.000, 0.998,
            0.055, -0.000, 0.998,
            0.055, -0.000, 0.998,
            -0.577, -0.577, 0.577,
            -0.577, -0.577, 0.577,
            -0.577, -0.577, 0.577,
            0.060, -0.706, 0.706,
            0.060, -0.706, 0.706,
            0.060, -0.706, 0.706,
            0.060, -0.706, 0.706,
            0.060, -0.706, 0.706,
            0.060, -0.706, 0.706,
            0.577, -0.577, 0.577,
            0.577, -0.577, 0.577,
            0.577, -0.577, 0.577,
            0.700, -0.145, 0.700,
            0.700, -0.145, 0.700,
            0.700, -0.145, 0.700,
            0.700, -0.145, 0.700,
            0.700, -0.145, 0.700,
            0.700, -0.145, 0.700,
            0.577, 0.577, 0.577,
            0.577, 0.577, 0.577,
            0.577, 0.577, 0.577,
            0.039, 0.707, 0.707,
            0.039, 0.707, 0.707,
            0.039, 0.707, 0.707,
            0.039, 0.707, 0.707,
            0.039, 0.707, 0.707,
            0.039, 0.707, 0.707,
            -0.577, 0.577, 0.577,
            -0.577, 0.577, 0.577,
            -0.577, 0.577, 0.577,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, 0.000, 0.707,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.979, -0.203, 0.000,
            0.979, -0.203, 0.000,
            0.979, -0.203, 0.000,
            0.979, -0.203, 0.000,
            0.979, -0.203, 0.000,
            0.979, -0.203, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, 0.000,
            0.707, 0.707, -0.000,
            0.707, 0.707, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -0.707, 0.707, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
               -1.000, 0.000, 0.000
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
