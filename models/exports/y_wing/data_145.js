function create_geometry_145(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -457.190, 171.752, 6.748,
            -457.190, 180.410, 6.748,
            -458.809, 180.410, 2.737,
            -458.809, 180.410, 2.737,
            -458.809, 171.752, 2.737,
            -457.190, 171.752, 6.748,
            -458.809, 171.752, 2.737,
            -458.809, 180.410, 2.737,
            -461.464, 180.410, -6.176,
            -461.464, 180.410, -6.176,
            -461.464, 171.752, -6.176,
            -458.809, 171.752, 2.737,
            -461.464, 171.752, -6.176,
            -461.464, 180.410, -6.176,
            -463.393, 180.410, -15.586,
            -463.393, 180.410, -15.586,
            -463.393, 171.752, -15.586,
            -461.464, 171.752, -6.176,
            -463.393, 171.752, -54.912,
            -463.393, 180.410, -54.912,
            -461.464, 180.410, -64.322,
            -461.464, 180.410, -64.322,
            -461.464, 171.752, -64.322,
            -463.393, 171.752, -54.912,
            -461.464, 171.752, -64.322,
            -461.464, 180.410, -64.322,
            -458.809, 180.410, -73.234,
            -458.809, 180.410, -73.234,
            -458.809, 171.752, -73.234,
            -461.464, 171.752, -64.322,
            -458.809, 171.752, -73.234,
            -458.809, 180.410, -73.234,
            -456.600, 171.752, -78.707,
            -456.600, 180.410, -78.707,
            -456.600, 171.752, -78.707,
            -458.809, 180.410, -73.234,
            -457.190, 171.752, 6.748,
            -445.276, 168.721, 6.748,
            -445.276, 183.441, 6.748,
            -445.276, 183.441, 6.748,
            -457.190, 180.410, 6.748,
            -457.190, 171.752, 6.748,
            -463.393, 180.410, -54.912,
            -445.276, 183.441, -78.707,
            -461.464, 180.410, -64.322,
            -445.276, 168.721, -78.707,
            -463.393, 171.752, -54.912,
            -461.464, 171.752, -64.322,
            -461.464, 180.410, -64.322,
            -445.276, 183.441, -78.707,
            -458.809, 180.410, -73.234,
            -445.276, 168.721, -78.707,
            -461.464, 171.752, -64.322,
            -458.809, 171.752, -73.234,
            -445.276, 168.721, -78.707,
            -456.600, 171.752, -78.707,
            -445.276, 183.441, -78.707,
            -456.600, 171.752, -78.707,
            -445.276, 168.721, -78.707,
            -458.809, 171.752, -73.234,
            -456.600, 180.410, -78.707,
            -445.276, 183.441, -78.707,
            -456.600, 171.752, -78.707,
            -456.600, 180.410, -78.707,
            -458.809, 180.410, -73.234,
            -445.276, 183.441, -78.707,
            -463.393, 180.410, -15.586,
            -463.987, 180.410, -20.529,
            -463.393, 171.752, -15.586,
            -463.987, 171.752, -20.529,
            -463.393, 171.752, -15.586,
            -463.987, 180.410, -20.529,
            -463.565, 180.410, -53.478,
            -463.393, 180.410, -54.912,
            -463.393, 171.752, -54.912,
            -463.393, 180.410, -54.912,
            -463.565, 180.410, -53.478,
            -445.276, 183.441, -78.707,
            -463.393, 171.752, -54.912,
            -463.565, 171.752, -53.478,
            -463.565, 180.410, -53.478,
            -463.565, 171.752, -53.478,
            -463.393, 171.752, -54.912,
            -445.276, 168.721, -78.707,
            -445.276, 183.441, -78.707,
            -445.276, 183.441, -53.478,
            -445.276, 168.721, -78.707,
            -445.276, 183.441, -20.529,
            -445.276, 183.441, 6.748,
            -445.276, 168.721, 6.748,
            -445.276, 183.441, 6.748,
            -445.276, 183.441, -20.529,
            -457.190, 180.410, 6.748,
            -445.276, 168.721, -53.478,
            -445.276, 168.721, -78.707,
            -445.276, 183.441, -53.478,
            -445.276, 168.721, 6.748,
            -445.276, 168.721, -20.529,
            -445.276, 183.441, -20.529,
            -457.190, 180.410, 6.748,
            -445.276, 183.441, -20.529,
            -458.809, 180.410, 2.737,
            -458.809, 180.410, 2.737,
            -445.276, 183.441, -20.529,
            -461.464, 180.410, -6.176,
            -461.464, 180.410, -6.176,
            -445.276, 183.441, -20.529,
            -463.393, 180.410, -15.586,
            -463.987, 180.410, -20.529,
            -463.393, 180.410, -15.586,
            -445.276, 183.441, -20.529,
            -463.393, 171.752, -15.586,
            -463.987, 171.752, -20.529,
            -461.464, 171.752, -6.176,
            -445.276, 183.441, -53.478,
            -445.276, 183.441, -78.707,
            -463.565, 180.410, -53.478,
            -461.464, 171.752, -6.176,
            -463.987, 171.752, -20.529,
            -458.809, 171.752, 2.737,
            -445.276, 168.721, -78.707,
            -445.276, 168.721, -53.478,
            -463.565, 171.752, -53.478,
            -445.276, 168.721, -20.529,
            -445.276, 168.721, 6.748,
            -457.190, 171.752, 6.748,
            -445.276, 168.721, -20.529,
            -457.190, 171.752, 6.748,
            -458.809, 171.752, 2.737,
            -445.276, 168.721, -20.529,
            -458.809, 171.752, 2.737,
            -463.987, 171.752, -20.529,
            -445.276, 183.441, -53.478,
            -463.565, 180.410, -53.478,
            -445.276, 168.721, -53.478,
            -445.276, 183.441, -20.529,
            -445.276, 168.721, -20.529,
            -463.987, 180.410, -20.529,
            -463.565, 171.752, -53.478,
            -445.276, 168.721, -53.478,
            -463.565, 180.410, -53.478,
            -445.276, 168.721, -20.529,
            -463.987, 171.752, -20.529,
               -463.987, 180.410, -20.529
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.927, 0.000, 0.374,
            -0.927, 0.000, 0.374,
            -0.944, 0.000, 0.330,
            -0.944, 0.000, 0.330,
            -0.944, 0.000, 0.330,
            -0.927, 0.000, 0.374,
            -0.944, 0.000, 0.330,
            -0.944, 0.000, 0.330,
            -0.970, 0.000, 0.243,
            -0.970, 0.000, 0.243,
            -0.970, 0.000, 0.243,
            -0.944, 0.000, 0.330,
            -0.970, 0.000, 0.243,
            -0.970, 0.000, 0.243,
            -0.987, -0.000, 0.160,
            -0.987, -0.000, 0.160,
            -0.987, -0.000, 0.160,
            -0.970, 0.000, 0.243,
            -0.987, 0.000, -0.160,
            -0.987, 0.000, -0.160,
            -0.970, 0.000, -0.243,
            -0.970, 0.000, -0.243,
            -0.970, -0.000, -0.243,
            -0.987, 0.000, -0.160,
            -0.970, -0.000, -0.243,
            -0.970, 0.000, -0.243,
            -0.944, 0.000, -0.330,
            -0.944, 0.000, -0.330,
            -0.944, -0.000, -0.330,
            -0.970, -0.000, -0.243,
            -0.944, -0.000, -0.330,
            -0.944, 0.000, -0.330,
            -0.927, 0.000, -0.374,
            -0.927, 0.000, -0.374,
            -0.927, 0.000, -0.374,
            -0.944, 0.000, -0.330,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.199, 0.980, -0.027,
            -0.212, 0.976, -0.047,
            -0.227, 0.973, -0.051,
            -0.212, -0.976, -0.047,
            -0.199, -0.980, -0.027,
            -0.227, -0.973, -0.051,
            -0.227, 0.973, -0.051,
            -0.212, 0.976, -0.047,
            -0.249, 0.965, -0.082,
            -0.212, -0.976, -0.047,
            -0.227, -0.973, -0.051,
            -0.249, -0.965, -0.082,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.257, -0.961, -0.104,
            -0.212, -0.976, -0.047,
            -0.249, -0.965, -0.082,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.257, 0.961, -0.104,
            -0.249, 0.965, -0.082,
            -0.212, 0.976, -0.047,
            -0.987, -0.000, 0.160,
            -0.993, -0.000, 0.119,
            -0.987, -0.000, 0.160,
            -0.993, 0.000, 0.119,
            -0.987, -0.000, 0.160,
            -0.993, -0.000, 0.119,
            -0.993, 0.000, -0.119,
            -0.987, 0.000, -0.160,
            -0.987, 0.000, -0.160,
            -0.199, 0.980, -0.027,
            -0.175, 0.985, -0.008,
            -0.212, 0.976, -0.047,
            -0.987, 0.000, -0.160,
            -0.993, -0.000, -0.119,
            -0.993, 0.000, -0.119,
            -0.175, -0.985, -0.008,
            -0.199, -0.980, -0.027,
            -0.212, -0.976, -0.047,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.247, 0.969, 0.000,
            -0.178, 0.984, 0.025,
            -0.199, 0.980, 0.022,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.199, 0.980, 0.022,
            -0.178, 0.984, 0.025,
            -0.135, 0.990, 0.050,
            -0.135, 0.990, 0.050,
            -0.178, 0.984, 0.025,
            -0.150, 0.988, 0.040,
            -0.150, 0.988, 0.040,
            -0.178, 0.984, 0.025,
            -0.158, 0.987, 0.026,
            -0.160, 0.987, 0.019,
            -0.158, 0.987, 0.026,
            -0.178, 0.984, 0.025,
            0.000, -1.000, -0.000,
            -0.149, -0.988, 0.033,
            -0.000, -1.000, 0.000,
            -0.163, 0.987, 0.000,
            -0.212, 0.976, -0.047,
            -0.175, 0.985, -0.008,
            -0.000, -1.000, 0.000,
            -0.149, -0.988, 0.033,
            -0.135, -0.990, 0.047,
            -0.212, -0.976, -0.047,
            -0.163, -0.987, 0.000,
            -0.175, -0.985, -0.008,
            -0.181, -0.983, 0.027,
            -0.247, -0.969, 0.000,
            -0.199, -0.980, 0.022,
            -0.181, -0.983, 0.027,
            -0.199, -0.980, 0.022,
            -0.135, -0.990, 0.047,
            -0.181, -0.983, 0.027,
            -0.135, -0.990, 0.047,
            -0.149, -0.988, 0.033,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
               0.000, -0.000, -1.000
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
