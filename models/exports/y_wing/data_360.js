function create_geometry_360(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -59.070, -125.860, 45.174,
            -59.070, -132.690, 45.174,
            -59.070, -132.690, 50.460,
            -59.070, -125.860, 45.174,
            -59.070, -132.690, 50.460,
            -59.070, -125.860, 50.460,
            -59.070, -132.690, 45.174,
            -22.192, -132.690, 45.174,
            -22.192, -132.690, 50.460,
            -59.070, -132.690, 45.174,
            -22.192, -132.690, 50.460,
            -59.070, -132.690, 50.460,
            -22.192, -132.690, 45.174,
            -22.192, -125.860, 45.174,
            -22.192, -125.860, 50.460,
            -22.192, -132.690, 45.174,
            -22.192, -125.860, 50.460,
            -22.192, -132.690, 50.460,
            -22.192, -125.860, 45.174,
            -59.070, -125.860, 45.174,
            -59.070, -125.860, 50.460,
            -22.192, -125.860, 45.174,
            -59.070, -125.860, 50.460,
            -22.192, -125.860, 50.460,
            -16.728, -115.617, 45.174,
            -16.728, -132.007, 45.174,
            -16.728, -132.007, 50.460,
            -16.728, -115.617, 45.174,
            -16.728, -132.007, 50.460,
            -16.728, -115.617, 50.460,
            -16.728, -132.007, 45.174,
            -1.021, -132.007, 45.174,
            -1.021, -132.007, 50.460,
            -16.728, -132.007, 45.174,
            -1.021, -132.007, 50.460,
            -16.728, -132.007, 50.460,
            -1.021, -132.007, 45.174,
            -1.021, -115.617, 45.174,
            -1.021, -115.617, 50.460,
            -1.021, -132.007, 45.174,
            -1.021, -115.617, 50.460,
            -1.021, -132.007, 50.460,
            -1.021, -115.617, 45.174,
            -16.728, -115.617, 45.174,
            -16.728, -115.617, 50.460,
            -1.021, -115.617, 45.174,
            -16.728, -115.617, 50.460,
            -1.021, -115.617, 50.460,
            -57.704, -112.202, 45.174,
            -57.704, -119.714, 45.174,
            -57.704, -119.714, 50.460,
            -57.704, -112.202, 45.174,
            -57.704, -119.714, 50.460,
            -57.704, -112.202, 50.460,
            -57.704, -119.714, 45.174,
            -48.143, -119.714, 45.174,
            -48.143, -119.714, 50.460,
            -57.704, -119.714, 45.174,
            -48.143, -119.714, 50.460,
            -57.704, -119.714, 50.460,
            -48.143, -119.714, 45.174,
            -48.143, -112.202, 45.174,
            -48.143, -112.202, 50.460,
            -48.143, -119.714, 45.174,
            -48.143, -112.202, 50.460,
            -48.143, -119.714, 50.460,
            -48.143, -112.202, 45.174,
            -57.704, -112.202, 45.174,
            -57.704, -112.202, 50.460,
            -48.143, -112.202, 45.174,
            -57.704, -112.202, 50.460,
            -48.143, -112.202, 50.460,
            -43.362, -107.398, 24.400,
            -43.362, -119.714, 45.174,
            -43.362, -119.714, 50.460,
            -43.362, -107.398, 24.400,
            -43.362, -119.714, 50.460,
            -43.362, -107.398, 50.460,
            -43.362, -119.714, 45.174,
            -26.289, -119.714, 45.174,
            -26.289, -119.714, 50.460,
            -43.362, -119.714, 45.174,
            -26.289, -119.714, 50.460,
            -43.362, -119.714, 50.460,
            -26.289, -119.714, 45.174,
            -26.289, -107.398, 24.400,
            -26.289, -107.398, 50.460,
            -26.289, -119.714, 45.174,
            -26.289, -107.398, 50.460,
            -26.289, -119.714, 50.460,
            -26.289, -107.398, 24.400,
            -43.362, -107.398, 24.400,
            -43.362, -107.398, 50.460,
            -26.289, -107.398, 24.400,
            -43.362, -107.398, 50.460,
            -26.289, -107.398, 50.460,
            5.809, -106.713, 24.400,
            5.809, -119.714, 45.174,
            5.809, -119.714, 50.460,
            5.809, -106.713, 24.400,
            5.809, -119.714, 50.460,
            5.809, -106.713, 50.460,
            5.809, -119.714, 45.174,
            18.101, -119.714, 45.174,
            18.101, -119.714, 50.460,
            5.809, -119.714, 45.174,
            18.101, -119.714, 50.460,
            5.809, -119.714, 50.460,
            18.101, -119.714, 45.174,
            18.101, -106.713, 24.400,
            18.101, -106.713, 50.460,
            18.101, -119.714, 45.174,
            18.101, -106.713, 50.460,
            18.101, -119.714, 50.460,
            18.101, -106.713, 24.400,
            5.809, -106.713, 24.400,
            5.809, -106.713, 50.460,
            18.101, -106.713, 24.400,
            5.809, -106.713, 50.460,
            18.101, -106.713, 50.460,
            6.491, -122.446, 45.174,
            6.491, -131.324, 45.174,
            6.491, -131.324, 50.460,
            6.491, -122.446, 45.174,
            6.491, -131.324, 50.460,
            6.491, -122.446, 50.460,
            6.491, -131.324, 45.174,
            24.248, -131.324, 45.174,
            24.248, -131.324, 50.460,
            6.491, -131.324, 45.174,
            24.248, -131.324, 50.460,
            6.491, -131.324, 50.460,
            24.248, -131.324, 45.174,
            24.248, -122.446, 45.174,
            24.248, -122.446, 50.460,
            24.248, -131.324, 45.174,
            24.248, -122.446, 50.460,
            24.248, -131.324, 50.460,
            24.248, -122.446, 45.174,
            6.491, -122.446, 45.174,
            6.491, -122.446, 50.460,
            24.248, -122.446, 45.174,
            6.491, -122.446, 50.460,
            24.248, -122.446, 50.460,
            28.345, -113.568, 45.174,
            28.345, -130.641, 45.174,
            28.345, -130.641, 50.460,
            28.345, -113.568, 45.174,
            28.345, -130.641, 50.460,
            28.345, -113.568, 50.460,
            28.345, -130.641, 45.174,
            54.296, -130.641, 45.174,
            54.296, -130.641, 50.460,
            28.345, -130.641, 45.174,
            54.296, -130.641, 50.460,
            28.345, -130.641, 50.460,
            54.296, -130.641, 45.174,
            54.296, -113.568, 45.174,
            54.296, -113.568, 50.460,
            54.296, -130.641, 45.174,
            54.296, -113.568, 50.460,
            54.296, -130.641, 50.460,
            54.296, -113.568, 45.174,
            28.345, -113.568, 45.174,
            28.345, -113.568, 50.460,
            54.296, -113.568, 45.174,
            28.345, -113.568, 50.460,
            54.296, -113.568, 50.460,
            -22.192, -132.690, 50.460,
            -22.192, -125.860, 50.460,
            -59.070, -125.860, 50.460,
            -59.070, -132.690, 50.460,
            -22.192, -132.690, 50.460,
            -59.070, -125.860, 50.460,
            -1.021, -132.007, 50.460,
            -1.021, -115.617, 50.460,
            -16.728, -115.617, 50.460,
            -1.021, -132.007, 50.460,
            -16.728, -115.617, 50.460,
            -16.728, -132.007, 50.460,
            -48.143, -119.714, 50.460,
            -48.143, -112.202, 50.460,
            -57.704, -112.202, 50.460,
            -57.704, -119.714, 50.460,
            -48.143, -119.714, 50.460,
            -57.704, -112.202, 50.460,
            -26.289, -119.714, 50.460,
            -26.289, -107.398, 50.460,
            -43.362, -107.398, 50.460,
            -43.362, -119.714, 50.460,
            -26.289, -119.714, 50.460,
            -43.362, -107.398, 50.460,
            18.101, -119.714, 50.460,
            18.101, -106.713, 50.460,
            5.809, -106.713, 50.460,
            5.809, -119.714, 50.460,
            18.101, -119.714, 50.460,
            5.809, -106.713, 50.460,
            24.248, -131.324, 50.460,
            24.248, -122.446, 50.460,
            6.491, -122.446, 50.460,
            6.491, -131.324, 50.460,
            24.248, -131.324, 50.460,
            6.491, -122.446, 50.460,
            54.296, -130.641, 50.460,
            54.296, -113.568, 50.460,
            28.345, -113.568, 50.460,
            28.345, -130.641, 50.460,
            54.296, -130.641, 50.460,
               28.345, -113.568, 50.460
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
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
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
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
               0.000, 0.000, 1.000
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
