function create_geometry_33(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            68.938, -39.617, -39.308,
            65.445, -39.617, -47.740,
            57.013, -39.617, -39.308,
            65.445, -39.617, -47.740,
            57.013, -39.617, -51.233,
            57.013, -39.617, -39.308,
            57.013, -39.617, -51.233,
            48.582, -39.617, -47.740,
            57.013, -39.617, -39.308,
            48.582, -39.617, -47.740,
            45.089, -39.617, -39.308,
            57.013, -39.617, -39.308,
            45.089, -39.617, -39.308,
            48.582, -39.617, -30.876,
            57.013, -39.617, -39.308,
            48.582, -39.617, -30.876,
            57.013, -39.617, -27.384,
            57.013, -39.617, -39.308,
            57.013, -39.617, -27.384,
            65.445, -39.617, -30.876,
            57.013, -39.617, -39.308,
            65.445, -39.617, -30.876,
            68.938, -39.617, -39.308,
            57.013, -39.617, -39.308,
            68.938, -262.619, -39.810,
            65.445, -265.084, -47.873,
            68.938, -39.617, -39.308,
            65.445, -265.084, -47.873,
            65.445, -39.617, -47.740,
            68.938, -39.617, -39.308,
            65.445, -265.084, -47.873,
            57.013, -266.105, -51.213,
            65.445, -39.617, -47.740,
            57.013, -266.105, -51.213,
            57.013, -39.617, -51.233,
            65.445, -39.617, -47.740,
            57.013, -266.105, -51.213,
            48.582, -265.084, -47.873,
            57.013, -39.617, -51.233,
            48.582, -265.084, -47.873,
            48.582, -39.617, -47.740,
            57.013, -39.617, -51.233,
            48.582, -265.084, -47.873,
            45.089, -262.619, -39.810,
            48.582, -39.617, -47.740,
            45.089, -262.619, -39.810,
            45.089, -39.617, -39.308,
            48.582, -39.617, -47.740,
            45.089, -262.619, -39.810,
            48.582, -260.154, -31.747,
            45.089, -39.617, -39.308,
            48.582, -260.154, -31.747,
            48.582, -39.617, -30.876,
            45.089, -39.617, -39.308,
            48.582, -260.154, -31.747,
            57.013, -259.132, -28.407,
            48.582, -39.617, -30.876,
            57.013, -259.132, -28.407,
            57.013, -39.617, -27.384,
            48.582, -39.617, -30.876,
            57.013, -259.132, -28.407,
            65.445, -260.154, -31.747,
            57.013, -39.617, -27.384,
            65.445, -260.154, -31.747,
            65.445, -39.617, -30.876,
            57.013, -39.617, -27.384,
            65.445, -260.154, -31.747,
            68.938, -262.619, -39.810,
            65.445, -39.617, -30.876,
            68.938, -262.619, -39.810,
            68.938, -39.617, -39.308,
            65.445, -39.617, -30.876,
            68.938, -287.102, -26.406,
            65.445, -289.142, -34.587,
            68.938, -262.619, -39.810,
            65.445, -289.142, -34.587,
            65.445, -265.084, -47.873,
            68.938, -262.619, -39.810,
            65.445, -289.142, -34.587,
            57.013, -289.987, -37.976,
            65.445, -265.084, -47.873,
            57.013, -289.987, -37.976,
            57.013, -266.105, -51.213,
            65.445, -265.084, -47.873,
            57.013, -289.987, -37.976,
            48.582, -289.142, -34.587,
            57.013, -266.105, -51.213,
            48.582, -289.142, -34.587,
            48.582, -265.084, -47.873,
            57.013, -266.105, -51.213,
            48.582, -289.142, -34.587,
            45.089, -287.102, -26.406,
            48.582, -265.084, -47.873,
            45.089, -287.102, -26.406,
            45.089, -262.619, -39.810,
            48.582, -265.084, -47.873,
            45.089, -287.102, -26.406,
            48.582, -285.063, -18.224,
            45.089, -262.619, -39.810,
            48.582, -285.063, -18.224,
            48.582, -260.154, -31.747,
            45.089, -262.619, -39.810,
            48.582, -285.063, -18.224,
            57.013, -284.218, -14.835,
            48.582, -260.154, -31.747,
            57.013, -284.218, -14.835,
            57.013, -259.132, -28.407,
            48.582, -260.154, -31.747,
            57.013, -284.218, -14.835,
            65.445, -285.063, -18.224,
            57.013, -259.132, -28.407,
            65.445, -285.063, -18.224,
            65.445, -260.154, -31.747,
            57.013, -259.132, -28.407,
            65.445, -285.063, -18.224,
            68.938, -287.102, -26.406,
            65.445, -260.154, -31.747,
            68.938, -287.102, -26.406,
            68.938, -262.619, -39.810,
            65.445, -260.154, -31.747,
            62.253, -360.833, -26.706,
            58.760, -360.833, -35.138,
            68.938, -287.102, -26.406,
            58.760, -360.833, -35.138,
            65.445, -289.142, -34.587,
            68.938, -287.102, -26.406,
            58.760, -360.833, -35.138,
            50.328, -360.833, -38.630,
            65.445, -289.142, -34.587,
            50.328, -360.833, -38.630,
            57.013, -289.987, -37.976,
            65.445, -289.142, -34.587,
            50.328, -360.833, -38.630,
            41.896, -360.833, -35.138,
            57.013, -289.987, -37.976,
            41.896, -360.833, -35.138,
            48.582, -289.142, -34.587,
            57.013, -289.987, -37.976,
            41.896, -360.833, -35.138,
            38.404, -360.833, -26.706,
            48.582, -289.142, -34.587,
            38.404, -360.833, -26.706,
            45.089, -287.102, -26.406,
            48.582, -289.142, -34.587,
            38.404, -360.833, -26.706,
            41.896, -360.833, -18.274,
            45.089, -287.102, -26.406,
            41.896, -360.833, -18.274,
            48.582, -285.063, -18.224,
            45.089, -287.102, -26.406,
            41.896, -360.833, -18.274,
            50.328, -360.833, -14.782,
            48.582, -285.063, -18.224,
            50.328, -360.833, -14.782,
            57.013, -284.218, -14.835,
            48.582, -285.063, -18.224,
            50.328, -360.833, -14.782,
            58.760, -360.833, -18.274,
            57.013, -284.218, -14.835,
            58.760, -360.833, -18.274,
            65.445, -285.063, -18.224,
            57.013, -284.218, -14.835,
            58.760, -360.833, -18.274,
            62.253, -360.833, -26.706,
            65.445, -285.063, -18.224,
            62.253, -360.833, -26.706,
            68.938, -287.102, -26.406,
            65.445, -285.063, -18.224,
            58.760, -360.833, -35.138,
            62.253, -360.833, -26.706,
            50.328, -360.833, -26.706,
            50.328, -360.833, -38.630,
            58.760, -360.833, -35.138,
            50.328, -360.833, -26.706,
            41.896, -360.833, -35.138,
            50.328, -360.833, -38.630,
            50.328, -360.833, -26.706,
            38.404, -360.833, -26.706,
            41.896, -360.833, -35.138,
            50.328, -360.833, -26.706,
            41.896, -360.833, -18.274,
            38.404, -360.833, -26.706,
            50.328, -360.833, -26.706,
            50.328, -360.833, -14.782,
            41.896, -360.833, -18.274,
            50.328, -360.833, -26.706,
            58.760, -360.833, -18.274,
            50.328, -360.833, -14.782,
            50.328, -360.833, -26.706,
            62.253, -360.833, -26.706,
            58.760, -360.833, -18.274,
               50.328, -360.833, -26.706
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.998, 0.013, 0.060,
            0.677, 0.183, 0.712,
            1.000, 0.000, -0.000,
            0.677, 0.183, 0.712,
            0.707, -0.000, 0.707,
            1.000, 0.000, -0.000,
            0.677, 0.183, 0.712,
            0.000, 0.252, 0.968,
            0.707, -0.000, 0.707,
            0.000, 0.252, 0.968,
            0.000, -0.000, 1.000,
            0.707, -0.000, 0.707,
            0.000, 0.252, 0.968,
            -0.677, 0.183, 0.712,
            0.000, -0.000, 1.000,
            -0.677, 0.183, 0.712,
            -0.707, -0.001, 0.707,
            0.000, -0.000, 1.000,
            -0.677, 0.183, 0.712,
            -0.998, 0.012, 0.060,
            -0.707, -0.001, 0.707,
            -0.998, 0.012, 0.060,
            -1.000, 0.000, -0.001,
            -0.707, -0.001, 0.707,
            -0.998, 0.012, 0.060,
            -0.738, -0.164, -0.654,
            -1.000, 0.000, -0.001,
            -0.738, -0.164, -0.654,
            -0.706, 0.003, -0.708,
            -1.000, 0.000, -0.001,
            -0.738, -0.164, -0.654,
            -0.000, -0.240, -0.971,
            -0.706, 0.003, -0.708,
            -0.000, -0.240, -0.971,
            -0.000, 0.004, -1.000,
            -0.706, 0.003, -0.708,
            -0.000, -0.240, -0.971,
            0.738, -0.164, -0.654,
            -0.000, 0.004, -1.000,
            0.738, -0.164, -0.654,
            0.706, 0.002, -0.708,
            -0.000, 0.004, -1.000,
            0.738, -0.164, -0.654,
            0.998, 0.013, 0.060,
            0.706, 0.002, -0.708,
            0.998, 0.013, 0.060,
            1.000, 0.000, -0.000,
            0.706, 0.002, -0.708,
            0.997, 0.030, -0.069,
            0.744, 0.200, 0.637,
            0.998, 0.013, 0.060,
            0.744, 0.200, 0.637,
            0.677, 0.183, 0.712,
            0.998, 0.013, 0.060,
            0.744, 0.200, 0.637,
            0.013, 0.247, 0.969,
            0.677, 0.183, 0.712,
            0.013, 0.247, 0.969,
            0.000, 0.252, 0.968,
            0.677, 0.183, 0.712,
            0.013, 0.247, 0.969,
            -0.734, 0.132, 0.666,
            0.000, 0.252, 0.968,
            -0.734, 0.132, 0.666,
            -0.677, 0.183, 0.712,
            0.000, 0.252, 0.968,
            -0.734, 0.132, 0.666,
            -0.997, -0.060, -0.049,
            -0.677, 0.183, 0.712,
            -0.997, -0.060, -0.049,
            -0.998, 0.012, 0.060,
            -0.677, 0.183, 0.712,
            -0.997, -0.060, -0.049,
            -0.672, -0.209, -0.710,
            -0.998, 0.012, 0.060,
            -0.672, -0.209, -0.710,
            -0.738, -0.164, -0.654,
            -0.998, 0.012, 0.060,
            -0.672, -0.209, -0.710,
            0.010, -0.245, -0.970,
            -0.738, -0.164, -0.654,
            0.010, -0.245, -0.970,
            -0.000, -0.240, -0.971,
            -0.738, -0.164, -0.654,
            0.010, -0.245, -0.970,
            0.684, -0.152, -0.714,
            -0.000, -0.240, -0.971,
            0.684, -0.152, -0.714,
            0.738, -0.164, -0.654,
            -0.000, -0.240, -0.971,
            0.684, -0.152, -0.714,
            0.997, 0.030, -0.069,
            0.738, -0.164, -0.654,
            0.997, 0.030, -0.069,
            0.998, 0.013, 0.060,
            0.738, -0.164, -0.654,
            0.996, 0.089, -0.000,
            0.694, 0.059, 0.718,
            0.997, 0.030, -0.069,
            0.694, 0.059, 0.718,
            0.744, 0.200, 0.637,
            0.997, 0.030, -0.069,
            0.694, 0.059, 0.718,
            -0.023, -0.011, 1.000,
            0.744, 0.200, 0.637,
            -0.023, -0.011, 1.000,
            0.013, 0.247, 0.969,
            0.744, 0.200, 0.637,
            -0.023, -0.011, 1.000,
            -0.715, -0.073, 0.695,
            0.013, 0.247, 0.969,
            -0.715, -0.073, 0.695,
            -0.734, 0.132, 0.666,
            0.013, 0.247, 0.969,
            -0.715, -0.073, 0.695,
            -0.996, -0.092, 0.002,
            -0.734, 0.132, 0.666,
            -0.996, -0.092, 0.002,
            -0.997, -0.060, -0.049,
            -0.734, 0.132, 0.666,
            -0.996, -0.092, 0.002,
            -0.716, -0.063, -0.695,
            -0.997, -0.060, -0.049,
            -0.716, -0.063, -0.695,
            -0.672, -0.209, -0.710,
            -0.997, -0.060, -0.049,
            -0.716, -0.063, -0.695,
            -0.021, -0.002, -1.000,
            -0.672, -0.209, -0.710,
            -0.021, -0.002, -1.000,
            0.010, -0.245, -0.970,
            -0.672, -0.209, -0.710,
            -0.021, -0.002, -1.000,
            0.694, 0.061, -0.717,
            0.010, -0.245, -0.970,
            0.694, 0.061, -0.717,
            0.684, -0.152, -0.714,
            0.010, -0.245, -0.970,
            0.694, 0.061, -0.717,
            0.996, 0.089, -0.000,
            0.684, -0.152, -0.714,
            0.996, 0.089, -0.000,
            0.997, 0.030, -0.069,
            0.684, -0.152, -0.714,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
               0.000, 1.000, 0.000
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
