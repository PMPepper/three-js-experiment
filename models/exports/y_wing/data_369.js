function create_geometry_369(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -55.126, -247.717, 29.388,
            -55.126, -255.014, 29.197,
            -55.126, -254.313, 36.618,
            -55.126, -247.717, 29.388,
            -55.126, -254.313, 36.618,
            -55.126, -247.016, 36.809,
            -55.126, -255.014, 29.197,
            -42.353, -255.014, 29.197,
            -42.353, -254.313, 36.618,
            -55.126, -255.014, 29.197,
            -42.353, -254.313, 36.618,
            -55.126, -254.313, 36.618,
            -42.353, -255.014, 29.197,
            -42.353, -247.717, 29.388,
            -42.353, -247.016, 36.809,
            -42.353, -255.014, 29.197,
            -42.353, -247.016, 36.809,
            -42.353, -254.313, 36.618,
            -42.353, -247.717, 29.388,
            -55.126, -247.717, 29.388,
            -55.126, -247.016, 36.809,
            -42.353, -247.717, 29.388,
            -55.126, -247.016, 36.809,
            -42.353, -247.016, 36.809,
            -36.878, -227.044, 29.929,
            -36.878, -234.341, 29.738,
            -36.878, -234.583, 37.604,
            -36.878, -227.044, 29.929,
            -36.878, -234.583, 37.604,
            -36.878, -227.286, 37.795,
            -36.878, -234.341, 29.738,
            -20.456, -234.341, 29.738,
            -20.456, -234.583, 37.604,
            -36.878, -234.341, 29.738,
            -20.456, -234.583, 37.604,
            -36.878, -234.583, 37.604,
            -20.456, -234.341, 29.738,
            -20.456, -227.044, 29.929,
            -20.456, -227.286, 37.795,
            -20.456, -234.341, 29.738,
            -20.456, -227.286, 37.795,
            -20.456, -234.583, 37.604,
            -20.456, -227.044, 29.929,
            -36.878, -227.044, 29.929,
            -36.878, -227.286, 37.795,
            -20.456, -227.044, 29.929,
            -36.878, -227.286, 37.795,
            -20.456, -227.286, 37.795,
            -15.563, -227.670, 29.913,
            -15.563, -246.519, 29.420,
            -15.563, -246.658, 34.704,
            -15.563, -227.670, 29.913,
            -15.563, -246.658, 34.704,
            -15.563, -227.809, 35.197,
            -15.563, -246.519, 29.420,
            6.333, -246.519, 29.420,
            6.333, -246.658, 34.704,
            -15.563, -246.519, 29.420,
            6.333, -246.658, 34.704,
            -15.563, -246.658, 34.704,
            6.333, -246.519, 29.420,
            6.333, -227.670, 29.913,
            6.333, -227.809, 35.197,
            6.333, -246.519, 29.420,
            6.333, -227.809, 35.197,
            6.333, -246.658, 34.704,
            6.333, -227.670, 29.913,
            -15.563, -227.670, 29.913,
            -15.563, -227.809, 35.197,
            6.333, -227.670, 29.913,
            -15.563, -227.809, 35.197,
            6.333, -227.809, 35.197,
            9.348, -245.285, 29.452,
            9.348, -255.014, 29.197,
            9.348, -255.152, 34.481,
            9.348, -245.285, 29.452,
            9.348, -255.152, 34.481,
            9.348, -245.424, 34.736,
            9.348, -255.014, 29.197,
            28.203, -255.014, 29.197,
            28.203, -255.152, 34.481,
            9.348, -255.014, 29.197,
            28.203, -255.152, 34.481,
            9.348, -255.152, 34.481,
            28.203, -255.014, 29.197,
            28.203, -245.285, 29.452,
            28.203, -245.424, 34.736,
            28.203, -255.014, 29.197,
            28.203, -245.424, 34.736,
            28.203, -255.152, 34.481,
            28.203, -245.285, 29.452,
            9.348, -245.285, 29.452,
            9.348, -245.424, 34.736,
            28.203, -245.285, 29.452,
            9.348, -245.424, 34.736,
            28.203, -245.424, 34.736,
            20.905, -227.652, 29.914,
            20.905, -241.637, 29.547,
            20.905, -241.775, 34.832,
            20.905, -227.652, 29.914,
            20.905, -241.775, 34.832,
            20.905, -227.791, 35.198,
            20.905, -241.637, 29.547,
            28.203, -241.637, 29.547,
            28.203, -241.775, 34.832,
            20.905, -241.637, 29.547,
            28.203, -241.775, 34.832,
            20.905, -241.775, 34.832,
            28.203, -241.637, 29.547,
            28.203, -227.652, 29.914,
            28.203, -227.791, 35.198,
            28.203, -241.637, 29.547,
            28.203, -227.791, 35.198,
            28.203, -241.775, 34.832,
            28.203, -227.652, 29.914,
            20.905, -227.652, 29.914,
            20.905, -227.791, 35.198,
            28.203, -227.652, 29.914,
            20.905, -227.791, 35.198,
            28.203, -227.791, 35.198,
            -54.517, -227.652, 29.914,
            -54.517, -236.165, 29.691,
            -54.517, -236.303, 34.975,
            -54.517, -227.652, 29.914,
            -54.517, -236.303, 34.975,
            -54.517, -227.791, 35.198,
            -54.517, -236.165, 29.691,
            -44.785, -236.165, 29.691,
            -44.785, -236.303, 34.975,
            -54.517, -236.165, 29.691,
            -44.785, -236.303, 34.975,
            -54.517, -236.303, 34.975,
            -44.785, -236.165, 29.691,
            -44.785, -227.652, 29.914,
            -44.785, -227.791, 35.198,
            -44.785, -236.165, 29.691,
            -44.785, -227.791, 35.198,
            -44.785, -236.303, 34.975,
            -44.785, -227.652, 29.914,
            -54.517, -227.652, 29.914,
            -54.517, -227.791, 35.198,
            -44.785, -227.652, 29.914,
            -54.517, -227.791, 35.198,
            -44.785, -227.791, 35.198,
            -36.878, -250.150, 29.325,
            -36.878, -252.582, 29.261,
            -36.878, -252.720, 34.545,
            -36.878, -250.150, 29.325,
            -36.878, -252.720, 34.545,
            -36.878, -250.288, 34.609,
            -36.878, -252.582, 29.261,
            3.874, -252.582, 29.261,
            3.874, -252.720, 34.545,
            -36.878, -252.582, 29.261,
            3.874, -252.720, 34.545,
            -36.878, -252.720, 34.545,
            3.874, -252.582, 29.261,
            3.874, -250.150, 29.324,
            3.874, -250.288, 34.609,
            3.874, -252.582, 29.261,
            3.874, -250.288, 34.609,
            3.874, -252.720, 34.545,
            3.874, -250.150, 29.324,
            -36.878, -250.150, 29.325,
            -36.878, -250.288, 34.609,
            3.874, -250.150, 29.324,
            -36.878, -250.288, 34.609,
            3.874, -250.288, 34.609,
            -42.353, -254.313, 36.618,
            -42.353, -247.016, 36.809,
            -55.126, -247.016, 36.809,
            -55.126, -254.313, 36.618,
            -42.353, -254.313, 36.618,
            -55.126, -247.016, 36.809,
            -20.456, -234.583, 37.604,
            -20.456, -227.286, 37.795,
            -36.878, -227.286, 37.795,
            -36.878, -234.583, 37.604,
            -20.456, -234.583, 37.604,
            -36.878, -227.286, 37.795,
            6.333, -246.658, 34.704,
            6.333, -227.809, 35.197,
            -15.563, -227.809, 35.197,
            -15.563, -246.658, 34.704,
            6.333, -246.658, 34.704,
            -15.563, -227.809, 35.197,
            28.203, -255.152, 34.481,
            28.203, -245.424, 34.736,
            9.348, -245.424, 34.736,
            9.348, -255.152, 34.481,
            28.203, -255.152, 34.481,
            9.348, -245.424, 34.736,
            28.203, -241.775, 34.832,
            28.203, -227.791, 35.198,
            20.905, -227.791, 35.198,
            28.203, -241.775, 34.832,
            20.905, -227.791, 35.198,
            20.905, -241.775, 34.832,
            -44.785, -236.303, 34.975,
            -44.785, -227.791, 35.198,
            -54.517, -227.791, 35.198,
            -54.517, -236.303, 34.975,
            -44.785, -236.303, 34.975,
            -54.517, -227.791, 35.198,
            3.874, -252.720, 34.545,
            3.874, -250.288, 34.609,
            -36.878, -250.288, 34.609,
            -36.878, -252.720, 34.545,
            3.874, -252.720, 34.545,
               -36.878, -250.288, 34.609
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            0.000, -0.996, 0.094,
            0.000, -0.996, 0.094,
            0.000, -0.996, 0.094,
            0.000, -0.996, 0.094,
            0.000, -0.996, 0.094,
            0.000, -0.996, 0.094,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            -0.000, 0.996, -0.094,
            -0.000, 0.996, -0.094,
            -0.000, 0.996, -0.094,
            -0.000, 0.996, -0.094,
            -0.000, 0.996, -0.094,
            -0.000, 0.996, -0.094,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, -0.031,
            0.000, -1.000, -0.031,
            0.000, -1.000, -0.031,
            0.000, -1.000, -0.031,
            0.000, -1.000, -0.031,
            -0.000, -1.000, -0.031,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.000, 1.000, 0.031,
            -0.000, 1.000, 0.031,
            -0.000, 1.000, 0.031,
            -0.000, 1.000, 0.031,
            -0.000, 1.000, 0.031,
            0.000, 1.000, 0.031,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, -0.000,
            -0.000, -1.000, -0.026,
            0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, -0.000,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -1.000, -0.026,
            0.000, -1.000, -0.026,
            0.000, -1.000, -0.026,
            0.000, -1.000, -0.026,
            0.000, -1.000, -0.026,
            0.000, -1.000, -0.026,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            -0.000, 1.000, 0.026,
            -0.000, 1.000, 0.026,
            -0.000, 1.000, 0.026,
            -0.000, 1.000, 0.026,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            -0.000, -1.000, -0.026,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, 1.000, 0.026,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
            0.000, -0.026, 1.000,
               0.000, -0.026, 1.000
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
