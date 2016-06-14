function create_geometry_345(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -130.500, 204.962, -17.530,
            -177.384, 204.913, -19.832,
            -177.384, 237.748, -21.024,
            -177.384, 237.748, -21.024,
            -130.500, 237.797, -18.722,
            -130.500, 204.962, -17.530,
            -130.500, 206.380, -9.363,
            -130.500, 235.172, -2.042,
            -177.384, 235.123, -4.344,
            -177.384, 235.123, -4.344,
            -177.384, 206.331, -11.665,
            -130.500, 206.380, -9.363,
            -130.500, 204.962, -17.530,
            -130.500, 237.797, -18.722,
            -130.500, 235.172, -2.042,
            -130.500, 235.172, -2.042,
            -130.500, 206.380, -9.363,
            -130.500, 204.962, -17.530,
            -130.500, 237.797, -18.722,
            -177.384, 237.748, -21.024,
            -177.384, 235.123, -4.344,
            -177.384, 235.123, -4.344,
            -130.500, 235.172, -2.042,
            -130.500, 237.797, -18.722,
            -177.384, 237.748, -21.024,
            -177.384, 204.913, -19.832,
            -177.384, 206.331, -11.665,
            -177.384, 206.331, -11.665,
            -177.384, 235.123, -4.344,
            -177.384, 237.748, -21.024,
            -177.384, 204.913, -19.832,
            -130.500, 204.962, -17.530,
            -130.500, 206.380, -9.363,
            -130.500, 206.380, -9.363,
            -177.384, 206.331, -11.665,
               -177.384, 204.913, -19.832
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.049, -0.036, -0.998,
            0.049, -0.036, -0.998,
            0.049, -0.036, -0.998,
            0.049, -0.036, -0.998,
            0.049, -0.036, -0.998,
            0.049, -0.036, -0.998,
            -0.047, -0.246, 0.968,
            -0.047, -0.246, 0.968,
            -0.047, -0.246, 0.968,
            -0.047, -0.246, 0.968,
            -0.047, -0.246, 0.968,
            -0.047, -0.246, 0.968,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            -0.009, 0.988, 0.155,
            -0.009, 0.988, 0.155,
            -0.009, 0.988, 0.155,
            -0.009, 0.988, 0.155,
            -0.009, 0.988, 0.155,
            -0.009, 0.988, 0.155,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -0.007, -0.985, 0.171,
            -0.007, -0.985, 0.171,
            -0.007, -0.985, 0.171,
            -0.007, -0.985, 0.171,
            -0.007, -0.985, 0.171,
               -0.007, -0.985, 0.171
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
