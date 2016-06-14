function create_geometry_321(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -299.816, 382.345, -108.698,
            -295.311, 371.635, -104.830,
            -299.816, 371.635, -108.698,
            -299.816, 382.345, -108.698,
            -295.311, 382.345, -104.830,
            -295.311, 371.635, -104.830,
            -295.311, 382.345, -104.830,
            -291.443, 371.635, -100.324,
            -295.311, 371.635, -104.830,
            -295.311, 382.345, -104.830,
            -291.443, 382.345, -100.324,
            -291.443, 371.635, -100.324,
            -299.816, 382.345, -108.698,
            -311.577, 382.345, -103.627,
            -295.311, 382.345, -104.830,
            -299.816, 382.345, -108.698,
            -302.458, 382.345, -110.352,
            -311.577, 382.345, -103.627,
            -302.458, 382.345, -110.352,
            -299.816, 382.345, -108.698,
            -299.816, 371.635, -108.698,
            -295.311, 382.345, -104.830,
            -311.577, 382.345, -103.627,
            -291.443, 382.345, -100.324,
            -311.577, 382.345, -103.627,
            -289.788, 382.345, -97.683,
            -291.443, 382.345, -100.324,
            -311.577, 382.345, -103.627,
            -296.668, 382.345, -88.578,
            -289.788, 382.345, -97.683,
            -299.816, 371.635, -108.698,
            -302.458, 371.635, -110.352,
            -302.458, 382.345, -110.352,
            -291.443, 382.345, -100.324,
            -289.788, 371.635, -97.683,
            -291.443, 371.635, -100.324,
            -289.788, 382.345, -97.683,
            -289.788, 371.635, -97.683,
            -291.443, 382.345, -100.324,
            -311.577, 371.635, -103.627,
            -302.458, 371.635, -110.352,
            -299.816, 371.635, -108.698,
            -311.577, 371.635, -103.627,
            -299.816, 371.635, -108.698,
            -295.311, 371.635, -104.830,
            -311.577, 371.635, -103.627,
            -295.311, 371.635, -104.830,
            -291.443, 371.635, -100.324,
            -311.577, 371.635, -103.627,
            -291.443, 371.635, -100.324,
            -289.788, 371.635, -97.683,
            -296.668, 371.635, -88.578,
            -311.577, 371.635, -103.627,
            -289.788, 371.635, -97.683,
            -311.577, 382.345, -103.627,
            -302.458, 382.345, -110.352,
            -302.458, 371.635, -110.352,
            -302.458, 371.635, -110.352,
            -311.577, 371.635, -103.627,
            -311.577, 382.345, -103.627,
            -296.668, 371.635, -88.578,
            -296.668, 382.345, -88.578,
            -311.577, 382.345, -103.627,
            -311.577, 382.345, -103.627,
            -311.577, 371.635, -103.627,
            -296.668, 371.635, -88.578,
            -289.788, 382.345, -97.683,
            -296.668, 371.635, -88.578,
            -289.788, 371.635, -97.683,
            -296.668, 371.635, -88.578,
            -289.788, 382.345, -97.683,
               -296.668, 382.345, -88.578
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.593, 0.000, -0.805,
            0.707, 0.000, -0.707,
            0.593, -0.000, -0.805,
            0.593, 0.000, -0.805,
            0.707, -0.000, -0.707,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.805, -0.000, -0.593,
            0.707, 0.000, -0.707,
            0.707, -0.000, -0.707,
            0.805, -0.000, -0.593,
            0.805, -0.000, -0.593,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.531, -0.000, -0.848,
            0.593, 0.000, -0.805,
            0.593, -0.000, -0.805,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.593, -0.000, -0.805,
            0.531, -0.000, -0.848,
            0.531, -0.000, -0.848,
            0.805, -0.000, -0.593,
            0.848, -0.000, -0.531,
            0.805, -0.000, -0.593,
            0.848, 0.000, -0.531,
            0.848, -0.000, -0.531,
            0.805, -0.000, -0.593,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.594, -0.000, -0.805,
            -0.594, 0.000, -0.805,
            -0.594, -0.000, -0.805,
            -0.594, -0.000, -0.805,
            -0.594, -0.000, -0.805,
            -0.594, -0.000, -0.805,
            -0.710, -0.000, 0.704,
            -0.710, 0.000, 0.704,
            -0.710, -0.000, 0.704,
            -0.710, -0.000, 0.704,
            -0.710, -0.000, 0.704,
            -0.710, -0.000, 0.704,
            0.798, 0.000, 0.603,
            0.798, 0.000, 0.603,
            0.798, 0.000, 0.603,
            0.798, 0.000, 0.603,
            0.798, 0.000, 0.603,
               0.798, 0.000, 0.603
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
