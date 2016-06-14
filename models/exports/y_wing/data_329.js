function create_geometry_329(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -54.318, -362.220, 32.491,
            -48.405, -362.220, 32.491,
            -48.405, -266.914, 37.128,
            -54.318, -362.220, 32.491,
            -48.405, -266.914, 37.128,
            -54.318, -266.914, 37.128,
            -54.318, -362.220, 32.491,
            -54.856, -362.220, 31.954,
            -54.318, -362.758, 31.954,
            -54.318, -362.220, 32.491,
            -54.318, -362.758, 31.954,
            -48.405, -362.758, 31.954,
            -54.318, -362.220, 32.491,
            -48.405, -362.758, 31.954,
            -48.405, -362.220, 32.491,
            -48.405, -362.220, 32.491,
            -48.405, -362.758, 31.954,
            -47.867, -362.220, 31.954,
            -48.405, -362.220, 32.491,
            -47.867, -362.220, 31.954,
            -47.867, -266.914, 36.591,
            -48.405, -362.220, 32.491,
            -47.867, -266.914, 36.591,
            -48.405, -266.914, 37.128,
            -48.405, -266.914, 37.128,
            -47.867, -266.914, 36.591,
            -48.405, -266.376, 36.591,
            -48.405, -266.914, 37.128,
            -48.405, -266.376, 36.591,
            -54.318, -266.376, 36.591,
            -48.405, -266.914, 37.128,
            -54.318, -266.376, 36.591,
            -54.318, -266.914, 37.128,
            -54.318, -266.914, 37.128,
            -54.318, -266.376, 36.591,
            -54.856, -266.914, 36.591,
            -54.318, -266.914, 37.128,
            -54.856, -266.914, 36.591,
            -54.856, -362.220, 31.954,
            -54.318, -266.914, 37.128,
            -54.856, -362.220, 31.954,
            -54.318, -362.220, 32.491,
            -47.867, -362.220, 31.954,
            -47.867, -362.220, 2.387,
            -47.867, -255.852, 2.387,
            -47.867, -362.220, 31.954,
            -47.867, -255.852, 2.387,
            -47.867, -266.914, 36.591,
            -47.867, -266.914, 36.591,
            -47.867, -255.852, 2.387,
            -48.405, -255.314, 2.387,
            -47.867, -266.914, 36.591,
            -48.405, -255.314, 2.387,
            -48.405, -266.376, 36.591,
            -48.405, -266.376, 36.591,
            -48.405, -255.314, 2.387,
            -54.318, -255.314, 2.387,
            -48.405, -266.376, 36.591,
            -54.318, -255.314, 2.387,
            -54.318, -266.376, 36.591,
            -54.318, -266.376, 36.591,
            -54.318, -255.314, 2.387,
            -54.856, -255.852, 2.387,
            -54.318, -266.376, 36.591,
            -54.856, -255.852, 2.387,
            -54.856, -266.914, 36.591,
            -54.856, -266.914, 36.591,
            -54.856, -255.852, 2.387,
            -54.856, -362.220, 2.387,
            -54.856, -266.914, 36.591,
            -54.856, -362.220, 2.387,
            -54.856, -362.220, 31.954,
            -47.867, -255.852, 2.387,
            -48.405, -255.852, 1.850,
            -48.405, -255.314, 2.387,
            -48.405, -255.314, 2.387,
            -48.405, -255.852, 1.850,
            -54.318, -255.852, 1.850,
            -48.405, -255.314, 2.387,
            -54.318, -255.852, 1.850,
            -54.318, -255.314, 2.387,
            -54.318, -255.314, 2.387,
            -54.318, -255.852, 1.850,
               -54.856, -255.852, 2.387
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -0.049, 0.999,
            -0.000, -0.049, 0.999,
            -0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            -0.577, -0.577, 0.577,
            -0.577, -0.577, 0.577,
            -0.577, -0.577, 0.577,
            -0.000, -0.707, 0.707,
            -0.000, -0.707, 0.707,
            -0.000, -0.707, 0.707,
            -0.000, -0.707, 0.707,
            -0.000, -0.707, 0.707,
            -0.000, -0.707, 0.707,
            0.577, -0.577, 0.577,
            0.577, -0.577, 0.577,
            0.577, -0.577, 0.577,
            0.707, -0.034, 0.707,
            0.707, -0.034, 0.707,
            0.707, -0.034, 0.707,
            0.707, -0.034, 0.707,
            0.707, -0.034, 0.707,
            0.707, -0.034, 0.707,
            0.577, 0.577, 0.577,
            0.577, 0.577, 0.577,
            0.577, 0.577, 0.577,
            -0.000, 0.707, 0.707,
            -0.000, 0.707, 0.707,
            -0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            -0.000, 0.707, 0.707,
            -0.577, 0.577, 0.577,
            -0.577, 0.577, 0.577,
            -0.577, 0.577, 0.577,
            -0.707, -0.034, 0.707,
            -0.707, -0.034, 0.707,
            -0.707, -0.034, 0.707,
            -0.707, -0.034, 0.707,
            -0.707, -0.034, 0.707,
            -0.707, -0.034, 0.707,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            0.689, 0.689, 0.223,
            0.689, 0.689, 0.223,
            0.689, 0.689, 0.223,
            0.689, 0.689, 0.223,
            0.689, 0.689, 0.223,
            0.689, 0.689, 0.223,
            0.000, 0.951, 0.308,
            0.000, 0.951, 0.308,
            -0.000, 0.951, 0.308,
            -0.000, 0.951, 0.308,
            -0.000, 0.951, 0.308,
            -0.000, 0.951, 0.308,
            -0.689, 0.689, 0.223,
            -0.689, 0.689, 0.223,
            -0.689, 0.689, 0.223,
            -0.689, 0.689, 0.223,
            -0.689, 0.689, 0.223,
            -0.689, 0.689, 0.223,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.577, 0.577, -0.577,
            0.577, 0.577, -0.577,
            0.577, 0.577, -0.577,
            0.000, 0.707, -0.707,
            0.000, 0.707, -0.707,
            0.000, 0.707, -0.707,
            0.000, 0.707, -0.707,
            0.000, 0.707, -0.707,
            0.000, 0.707, -0.707,
            -0.577, 0.577, -0.577,
            -0.577, 0.577, -0.577,
               -0.577, 0.577, -0.577
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
