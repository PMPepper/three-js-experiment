function create_geometry_226(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -12.707, -364.454, 110.939,
            -7.648, -364.454, 110.939,
            -7.648, -368.203, 120.580,
            -12.707, -368.203, 120.580,
            -12.707, -364.454, 110.939,
            -7.648, -368.203, 120.580,
            -12.707, -361.328, 110.272,
            -7.648, -361.328, 110.272,
            -7.648, -364.454, 110.939,
            -12.707, -364.454, 110.939,
            -12.707, -361.328, 110.272,
            -7.648, -364.454, 110.939,
            -12.707, -349.229, 114.728,
            -7.648, -349.229, 114.728,
            -7.648, -361.328, 110.272,
            -12.707, -361.328, 110.272,
            -12.707, -349.229, 114.728,
            -7.648, -361.328, 110.272,
            -12.707, -344.061, 122.199,
            -7.648, -344.061, 122.199,
            -7.648, -349.229, 114.728,
            -12.707, -349.229, 114.728,
            -12.707, -344.061, 122.199,
            -7.648, -349.229, 114.728,
            -12.707, -345.963, 123.373,
            -7.648, -345.963, 123.373,
            -7.648, -344.061, 122.199,
            -12.707, -344.061, 122.199,
            -12.707, -345.963, 123.373,
            -7.648, -344.061, 122.199,
            -12.707, -350.539, 116.699,
            -7.648, -350.539, 116.699,
            -7.648, -345.963, 123.373,
            -12.707, -345.963, 123.373,
            -12.707, -350.539, 116.699,
            -7.648, -345.963, 123.373,
            -12.707, -360.950, 112.767,
            -7.648, -360.950, 112.767,
            -7.648, -350.539, 116.699,
            -12.707, -350.539, 116.699,
            -12.707, -360.950, 112.767,
            -7.648, -350.539, 116.699,
            -12.707, -363.295, 113.306,
            -7.648, -363.295, 113.306,
            -7.648, -360.950, 112.767,
            -12.707, -360.950, 112.767,
            -12.707, -363.295, 113.306,
            -7.648, -360.950, 112.767,
            -12.707, -365.890, 120.971,
            -7.648, -365.890, 120.971,
            -7.648, -363.295, 113.306,
            -12.707, -363.295, 113.306,
            -12.707, -365.890, 120.971,
            -7.648, -363.295, 113.306,
            -12.707, -368.203, 120.580,
            -7.648, -368.203, 120.580,
            -7.648, -365.890, 120.971,
            -12.707, -365.890, 120.971,
            -12.707, -368.203, 120.580,
            -7.648, -365.890, 120.971,
            -7.648, -368.203, 120.580,
            -7.648, -364.454, 110.939,
            -7.648, -365.890, 120.971,
            -7.648, -365.890, 120.971,
            -7.648, -364.454, 110.939,
            -7.648, -363.295, 113.306,
            -7.648, -364.454, 110.939,
            -7.648, -361.328, 110.272,
            -7.648, -363.295, 113.306,
            -7.648, -363.295, 113.306,
            -7.648, -361.328, 110.272,
            -7.648, -360.950, 112.767,
            -7.648, -361.328, 110.272,
            -7.648, -349.229, 114.728,
            -7.648, -360.950, 112.767,
            -7.648, -360.950, 112.767,
            -7.648, -349.229, 114.728,
            -7.648, -350.539, 116.699,
            -7.648, -349.229, 114.728,
            -7.648, -344.061, 122.199,
            -7.648, -350.539, 116.699,
            -7.648, -350.539, 116.699,
            -7.648, -344.061, 122.199,
            -7.648, -345.963, 123.373,
            -12.707, -364.454, 110.939,
            -12.707, -368.203, 120.580,
            -12.707, -365.890, 120.971,
            -12.707, -364.454, 110.939,
            -12.707, -365.890, 120.971,
            -12.707, -363.295, 113.306,
            -12.707, -361.328, 110.272,
            -12.707, -364.454, 110.939,
            -12.707, -363.295, 113.306,
            -12.707, -361.328, 110.272,
            -12.707, -363.295, 113.306,
            -12.707, -360.950, 112.767,
            -12.707, -349.229, 114.728,
            -12.707, -361.328, 110.272,
            -12.707, -360.950, 112.767,
            -12.707, -349.229, 114.728,
            -12.707, -360.950, 112.767,
            -12.707, -350.539, 116.699,
            -12.707, -344.061, 122.199,
            -12.707, -349.229, 114.728,
            -12.707, -350.539, 116.699,
            -12.707, -344.061, 122.199,
            -12.707, -350.539, 116.699,
               -12.707, -345.963, 123.373
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.955, 0.297,
            0.000, -0.955, 0.297,
            0.000, -0.955, 0.297,
            0.000, -0.955, 0.297,
            0.000, -0.955, 0.297,
            0.000, -0.955, 0.297,
            0.000, -0.276, 0.961,
            0.000, -0.276, 0.961,
            0.000, -0.276, 0.961,
            0.000, -0.276, 0.961,
            0.000, -0.276, 0.961,
            0.000, -0.276, 0.961,
            0.000, 0.279, 0.960,
            0.000, 0.279, 0.960,
            0.000, 0.279, 0.960,
            0.000, 0.279, 0.960,
            0.000, 0.279, 0.960,
            0.000, 0.279, 0.960,
            0.000, 0.781, 0.625,
            0.000, 0.781, 0.625,
            0.000, 0.781, 0.625,
            0.000, 0.781, 0.625,
            0.000, 0.781, 0.625,
            0.000, 0.781, 0.625,
            0.000, 0.583, -0.812,
            0.000, 0.583, -0.812,
            0.000, 0.583, -0.812,
            0.000, 0.583, -0.812,
            0.000, 0.583, -0.812,
            0.000, 0.583, -0.812,
            0.000, -0.783, -0.622,
            0.000, -0.783, -0.622,
            0.000, -0.783, -0.622,
            0.000, -0.783, -0.622,
            0.000, -0.783, -0.622,
            0.000, -0.783, -0.622,
            0.000, -0.287, -0.958,
            0.000, -0.287, -0.958,
            0.000, -0.287, -0.958,
            0.000, -0.287, -0.958,
            0.000, -0.287, -0.958,
            0.000, -0.287, -0.958,
            -0.000, 0.291, -0.957,
            -0.000, 0.291, -0.957,
            -0.000, 0.291, -0.957,
            0.000, 0.291, -0.957,
            -0.000, 0.291, -0.957,
            -0.000, 0.291, -0.957,
            -0.000, 0.967, -0.254,
            0.000, 0.967, -0.254,
            -0.000, 0.967, -0.254,
            -0.000, 0.967, -0.254,
            -0.000, 0.967, -0.254,
            -0.000, 0.967, -0.254,
            0.000, -0.097, -0.995,
            0.000, -0.097, -0.995,
            0.000, -0.097, -0.995,
            0.000, -0.097, -0.995,
            0.000, -0.097, -0.995,
            0.000, -0.097, -0.995,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
               1.000, 0.000, 0.000
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
