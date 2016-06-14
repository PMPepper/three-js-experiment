function create_geometry_413(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            64.337, 358.233, 51.881,
            63.840, 111.783, 53.738,
            64.337, 111.783, 51.881,
            64.337, 358.233, 51.881,
            63.840, 358.233, 53.738,
            63.840, 111.783, 53.738,
            63.840, 358.233, 53.738,
            62.481, 111.783, 55.097,
            63.840, 111.783, 53.738,
            63.840, 358.233, 53.738,
            62.481, 358.233, 55.097,
            62.481, 111.783, 55.097,
            62.481, 358.233, 55.097,
            60.624, 111.783, 55.594,
            62.481, 111.783, 55.097,
            62.481, 358.233, 55.097,
            60.624, 358.233, 55.594,
            60.624, 111.783, 55.594,
            60.624, 358.233, 55.594,
            58.768, 111.783, 55.097,
            60.624, 111.783, 55.594,
            60.624, 358.233, 55.594,
            58.768, 358.233, 55.097,
            58.768, 111.783, 55.097,
            58.768, 358.233, 55.097,
            57.409, 111.783, 53.738,
            58.768, 111.783, 55.097,
            58.768, 358.233, 55.097,
            57.409, 358.233, 53.738,
            57.409, 111.783, 53.738,
            57.409, 358.233, 53.738,
            56.911, 111.783, 51.881,
            57.409, 111.783, 53.738,
            57.409, 358.233, 53.738,
            56.911, 358.233, 51.881,
            56.911, 111.783, 51.881,
            56.911, 358.233, 51.881,
            57.409, 111.783, 50.025,
            56.911, 111.783, 51.881,
            56.911, 358.233, 51.881,
            57.409, 358.233, 50.024,
            57.409, 111.783, 50.025,
            57.409, 358.233, 50.024,
            58.768, 111.783, 48.665,
            57.409, 111.783, 50.025,
            57.409, 358.233, 50.024,
            58.768, 358.233, 48.665,
            58.768, 111.783, 48.665,
            58.768, 358.233, 48.665,
            60.624, 111.783, 48.168,
            58.768, 111.783, 48.665,
            58.768, 358.233, 48.665,
            60.624, 358.233, 48.168,
            60.624, 111.783, 48.168,
            60.624, 358.233, 48.168,
            62.481, 111.783, 48.665,
            60.624, 111.783, 48.168,
            60.624, 358.233, 48.168,
            62.481, 358.233, 48.665,
            62.481, 111.783, 48.665,
            62.481, 358.233, 48.665,
            63.840, 111.783, 50.025,
            62.481, 111.783, 48.665,
            62.481, 358.233, 48.665,
            63.840, 358.233, 50.024,
            63.840, 111.783, 50.025,
            63.840, 358.233, 50.024,
            64.337, 111.783, 51.881,
            63.840, 111.783, 50.025,
            63.840, 358.233, 50.024,
            64.337, 358.233, 51.881,
               64.337, 111.783, 51.881
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, 0.000, 0.000,
            0.866, 0.000, 0.500,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.866, 0.000, 0.500,
            0.866, 0.000, 0.500,
            0.866, 0.000, 0.500,
            0.500, 0.000, 0.866,
            0.866, 0.000, 0.500,
            0.866, 0.000, 0.500,
            0.500, 0.000, 0.866,
            0.500, 0.000, 0.866,
            0.500, 0.000, 0.866,
            -0.000, 0.000, 1.000,
            0.500, 0.000, 0.866,
            0.500, 0.000, 0.866,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.500, 0.000, 0.866,
            -0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            -0.866, -0.000, 0.500,
            -0.500, 0.000, 0.866,
            -0.500, 0.000, 0.866,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -1.000, -0.000, 0.000,
            -0.866, -0.000, 0.500,
            -0.866, -0.000, 0.500,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, -0.000,
            -0.866, -0.000, -0.500,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, -0.000,
            -0.866, -0.000, -0.500,
            -0.866, -0.000, -0.500,
            -0.866, -0.000, -0.500,
            -0.500, -0.000, -0.866,
            -0.866, -0.000, -0.500,
            -0.866, -0.000, -0.500,
            -0.500, -0.000, -0.866,
            -0.500, -0.000, -0.866,
            -0.500, -0.000, -0.866,
            0.000, -0.000, -1.000,
            -0.500, -0.000, -0.866,
            -0.500, -0.000, -0.866,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.500, -0.000, -0.866,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.500, -0.000, -0.866,
            0.500, -0.000, -0.866,
            0.500, -0.000, -0.866,
            0.866, -0.000, -0.500,
            0.500, -0.000, -0.866,
            0.500, -0.000, -0.866,
            0.866, -0.000, -0.500,
            0.866, -0.000, -0.500,
            0.866, -0.000, -0.500,
            1.000, 0.000, 0.000,
            0.866, -0.000, -0.500,
            0.866, -0.000, -0.500,
            1.000, 0.000, 0.000,
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
