function create_geometry_69(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -257.391, 154.778, -13.363,
            -257.107, 154.778, -12.305,
            -255.275, 154.778, -13.363,
            -257.107, 154.778, -12.305,
            -256.333, 154.778, -11.531,
            -255.275, 154.778, -13.363,
            -256.333, 154.778, -11.531,
            -255.275, 154.778, -11.247,
            -255.275, 154.778, -13.363,
            -255.275, 154.778, -11.247,
            -254.216, 154.778, -11.531,
            -255.275, 154.778, -13.363,
            -254.216, 154.778, -11.531,
            -253.442, 154.778, -12.305,
            -255.275, 154.778, -13.363,
            -253.442, 154.778, -12.305,
            -253.158, 154.778, -13.363,
            -255.275, 154.778, -13.363,
            -253.158, 154.778, -13.363,
            -253.442, 154.778, -14.421,
            -255.275, 154.778, -13.363,
            -253.442, 154.778, -14.421,
            -254.216, 154.778, -15.196,
            -255.275, 154.778, -13.363,
            -254.216, 154.778, -15.196,
            -255.274, 154.778, -15.480,
            -255.275, 154.778, -13.363,
            -255.274, 154.778, -15.480,
            -256.333, 154.778, -15.196,
            -255.275, 154.778, -13.363,
            -256.333, 154.778, -15.196,
            -257.107, 154.778, -14.421,
            -255.275, 154.778, -13.363,
            -257.107, 154.778, -14.421,
            -257.391, 154.778, -13.363,
            -255.275, 154.778, -13.363,
            -257.391, 105.923, -13.363,
            -257.107, 105.923, -12.305,
            -257.391, 154.778, -13.363,
            -257.107, 105.923, -12.305,
            -257.107, 154.778, -12.305,
            -257.391, 154.778, -13.363,
            -257.107, 105.923, -12.305,
            -256.333, 105.923, -11.531,
            -257.107, 154.778, -12.305,
            -256.333, 105.923, -11.531,
            -256.333, 154.778, -11.531,
            -257.107, 154.778, -12.305,
            -256.333, 105.923, -11.531,
            -255.274, 105.923, -11.247,
            -256.333, 154.778, -11.531,
            -255.274, 105.923, -11.247,
            -255.275, 154.778, -11.247,
            -256.333, 154.778, -11.531,
            -255.274, 105.923, -11.247,
            -254.216, 105.923, -11.531,
            -255.275, 154.778, -11.247,
            -254.216, 105.923, -11.531,
            -254.216, 154.778, -11.531,
            -255.275, 154.778, -11.247,
            -254.216, 105.923, -11.531,
            -253.442, 105.923, -12.305,
            -254.216, 154.778, -11.531,
            -253.442, 105.923, -12.305,
            -253.442, 154.778, -12.305,
            -254.216, 154.778, -11.531,
            -253.442, 105.923, -12.305,
            -253.158, 105.923, -13.363,
            -253.442, 154.778, -12.305,
            -253.158, 105.923, -13.363,
            -253.158, 154.778, -13.363,
            -253.442, 154.778, -12.305,
            -253.158, 105.923, -13.363,
            -253.442, 105.923, -14.421,
            -253.158, 154.778, -13.363,
            -253.442, 105.923, -14.421,
            -253.442, 154.778, -14.421,
            -253.158, 154.778, -13.363,
            -253.442, 105.923, -14.421,
            -254.216, 105.923, -15.196,
            -253.442, 154.778, -14.421,
            -254.216, 105.923, -15.196,
            -254.216, 154.778, -15.196,
            -253.442, 154.778, -14.421,
            -254.216, 105.923, -15.196,
            -255.274, 105.923, -15.480,
            -254.216, 154.778, -15.196,
            -255.274, 105.923, -15.480,
            -255.274, 154.778, -15.480,
            -254.216, 154.778, -15.196,
            -255.274, 105.923, -15.480,
            -256.333, 105.923, -15.196,
            -255.274, 154.778, -15.480,
            -256.333, 105.923, -15.196,
            -256.333, 154.778, -15.196,
            -255.274, 154.778, -15.480,
            -256.333, 105.923, -15.196,
            -257.107, 105.923, -14.421,
            -256.333, 154.778, -15.196,
            -257.107, 105.923, -14.421,
            -257.107, 154.778, -14.421,
            -256.333, 154.778, -15.196,
            -257.107, 105.923, -14.421,
            -257.391, 105.923, -13.363,
            -257.107, 154.778, -14.421,
            -257.391, 105.923, -13.363,
            -257.391, 154.778, -13.363,
            -257.107, 154.778, -14.421,
            -257.107, 105.923, -12.305,
            -257.391, 105.923, -13.363,
            -255.274, 105.923, -13.363,
            -256.333, 105.923, -11.531,
            -257.107, 105.923, -12.305,
            -255.274, 105.923, -13.363,
            -255.274, 105.923, -11.247,
            -256.333, 105.923, -11.531,
            -255.274, 105.923, -13.363,
            -254.216, 105.923, -11.531,
            -255.274, 105.923, -11.247,
            -255.274, 105.923, -13.363,
            -253.442, 105.923, -12.305,
            -254.216, 105.923, -11.531,
            -255.274, 105.923, -13.363,
            -253.158, 105.923, -13.363,
            -253.442, 105.923, -12.305,
            -255.274, 105.923, -13.363,
            -253.442, 105.923, -14.421,
            -253.158, 105.923, -13.363,
            -255.274, 105.923, -13.363,
            -254.216, 105.923, -15.196,
            -253.442, 105.923, -14.421,
            -255.274, 105.923, -13.363,
            -255.274, 105.923, -15.480,
            -254.216, 105.923, -15.196,
            -255.274, 105.923, -13.363,
            -256.333, 105.923, -15.196,
            -255.274, 105.923, -15.480,
            -255.274, 105.923, -13.363,
            -257.107, 105.923, -14.421,
            -256.333, 105.923, -15.196,
            -255.274, 105.923, -13.363,
            -257.391, 105.923, -13.363,
            -257.107, 105.923, -14.421,
               -255.274, 105.923, -13.363
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.000, -0.500,
            -1.000, 0.000, 0.000,
            -0.866, 0.000, -0.500,
            -0.866, 0.000, -0.500,
            -1.000, 0.000, 0.000,
            -0.866, 0.000, -0.500,
            -0.500, 0.000, -0.866,
            -0.866, 0.000, -0.500,
            -0.500, 0.000, -0.866,
            -0.500, 0.000, -0.866,
            -0.866, 0.000, -0.500,
            -0.500, 0.000, -0.866,
            0.000, 0.000, -1.000,
            -0.500, 0.000, -0.866,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.500, 0.000, -0.866,
            0.000, 0.000, -1.000,
            0.500, -0.000, -0.866,
            -0.000, 0.000, -1.000,
            0.500, -0.000, -0.866,
            0.500, -0.000, -0.866,
            -0.000, 0.000, -1.000,
            0.500, -0.000, -0.866,
            0.866, -0.000, -0.500,
            0.500, -0.000, -0.866,
            0.866, -0.000, -0.500,
            0.866, -0.000, -0.500,
            0.500, -0.000, -0.866,
            0.866, -0.000, -0.500,
            1.000, -0.000, 0.000,
            0.866, -0.000, -0.500,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            0.866, -0.000, -0.500,
            1.000, -0.000, 0.000,
            0.866, -0.000, 0.500,
            1.000, -0.000, -0.000,
            0.866, -0.000, 0.500,
            0.866, -0.000, 0.500,
            1.000, -0.000, -0.000,
            0.866, -0.000, 0.500,
            0.500, -0.000, 0.866,
            0.866, -0.000, 0.500,
            0.500, -0.000, 0.866,
            0.500, -0.000, 0.866,
            0.866, -0.000, 0.500,
            0.500, -0.000, 0.866,
            0.000, -0.000, 1.000,
            0.500, -0.000, 0.866,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.500, -0.000, 0.866,
            0.000, -0.000, 1.000,
            -0.500, 0.000, 0.866,
            0.000, -0.000, 1.000,
            -0.500, 0.000, 0.866,
            -0.500, -0.000, 0.866,
            0.000, -0.000, 1.000,
            -0.500, 0.000, 0.866,
            -0.866, 0.000, 0.500,
            -0.500, -0.000, 0.866,
            -0.866, 0.000, 0.500,
            -0.866, -0.000, 0.500,
            -0.500, -0.000, 0.866,
            -0.866, 0.000, 0.500,
            -1.000, 0.000, 0.000,
            -0.866, -0.000, 0.500,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, -0.000, 0.500,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
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
