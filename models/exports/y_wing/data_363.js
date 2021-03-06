function create_geometry_363(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -34.075, -362.220, 32.491,
            -28.161, -362.220, 32.491,
            -28.161, -266.914, 37.128,
            -34.075, -362.220, 32.491,
            -28.161, -266.914, 37.128,
            -34.075, -266.914, 37.128,
            -34.075, -362.220, 32.491,
            -34.612, -362.220, 31.954,
            -34.075, -362.758, 31.954,
            -34.075, -362.220, 32.491,
            -34.075, -362.758, 31.954,
            -28.161, -362.758, 31.954,
            -34.075, -362.220, 32.491,
            -28.161, -362.758, 31.954,
            -28.161, -362.220, 32.491,
            -28.161, -362.220, 32.491,
            -28.161, -362.758, 31.954,
            -27.624, -362.220, 31.954,
            -28.161, -362.220, 32.491,
            -27.624, -362.220, 31.954,
            -27.624, -266.914, 36.591,
            -28.161, -362.220, 32.491,
            -27.624, -266.914, 36.591,
            -28.161, -266.914, 37.128,
            -28.161, -266.914, 37.128,
            -27.624, -266.914, 36.591,
            -28.161, -266.376, 36.591,
            -28.161, -266.914, 37.128,
            -28.161, -266.376, 36.591,
            -34.075, -266.376, 36.591,
            -28.161, -266.914, 37.128,
            -34.075, -266.376, 36.591,
            -34.075, -266.914, 37.128,
            -34.075, -266.914, 37.128,
            -34.075, -266.376, 36.591,
            -34.612, -266.914, 36.591,
            -34.075, -266.914, 37.128,
            -34.612, -266.914, 36.591,
            -34.612, -362.220, 31.954,
            -34.075, -266.914, 37.128,
            -34.612, -362.220, 31.954,
            -34.075, -362.220, 32.491,
            -27.624, -362.220, 31.954,
            -27.624, -362.220, 2.387,
            -27.624, -255.852, 2.387,
            -27.624, -362.220, 31.954,
            -27.624, -255.852, 2.387,
            -27.624, -266.914, 36.591,
            -27.624, -266.914, 36.591,
            -27.624, -255.852, 2.387,
            -28.161, -255.314, 2.387,
            -27.624, -266.914, 36.591,
            -28.161, -255.314, 2.387,
            -28.161, -266.376, 36.591,
            -28.161, -266.376, 36.591,
            -28.161, -255.314, 2.387,
            -34.075, -255.314, 2.387,
            -28.161, -266.376, 36.591,
            -34.075, -255.314, 2.387,
            -34.075, -266.376, 36.591,
            -34.075, -266.376, 36.591,
            -34.075, -255.314, 2.387,
            -34.612, -255.852, 2.387,
            -34.075, -266.376, 36.591,
            -34.612, -255.852, 2.387,
            -34.612, -266.914, 36.591,
            -34.612, -266.914, 36.591,
            -34.612, -255.852, 2.387,
            -34.612, -362.220, 2.387,
            -34.612, -266.914, 36.591,
            -34.612, -362.220, 2.387,
            -34.612, -362.220, 31.954,
            -27.624, -255.852, 2.387,
            -28.161, -255.852, 1.850,
            -28.161, -255.314, 2.387,
            -28.161, -255.314, 2.387,
            -28.161, -255.852, 1.850,
            -34.075, -255.852, 1.850,
            -28.161, -255.314, 2.387,
            -34.075, -255.852, 1.850,
            -34.075, -255.314, 2.387,
            -34.075, -255.314, 2.387,
            -34.075, -255.852, 1.850,
               -34.612, -255.852, 2.387
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            0.000, -0.049, 0.999,
            -0.577, -0.577, 0.577,
            -0.577, -0.577, 0.577,
            -0.577, -0.577, 0.577,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
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
            0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
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
            -0.000, 0.951, 0.308,
            -0.000, 0.951, 0.308,
            -0.000, 0.951, 0.308,
            0.000, 0.951, 0.308,
            0.000, 0.951, 0.308,
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
