function create_geometry_347(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -159.953, 91.807, -18.342,
            -245.954, 91.807, -14.972,
            -246.032, 176.255, -17.965,
            -246.032, 176.255, -17.965,
            -160.031, 176.255, -21.335,
            -159.953, 91.807, -18.342,
            -159.740, 95.004, -10.240,
            -159.590, 168.595, -4.485,
            -245.591, 168.595, -1.115,
            -245.591, 168.595, -1.115,
            -245.741, 95.004, -6.870,
            -159.740, 95.004, -10.240,
            -159.953, 91.807, -18.342,
            -160.031, 176.255, -21.335,
            -159.590, 168.595, -4.485,
            -159.590, 168.595, -4.485,
            -159.740, 95.004, -10.240,
            -159.953, 91.807, -18.342,
            -160.031, 176.255, -21.335,
            -246.032, 176.255, -17.965,
            -245.591, 168.595, -1.115,
            -245.591, 168.595, -1.115,
            -159.590, 168.595, -4.485,
            -160.031, 176.255, -21.335,
            -246.032, 176.255, -17.965,
            -245.954, 91.807, -14.972,
            -245.741, 95.004, -6.870,
            -245.741, 95.004, -6.870,
            -245.591, 168.595, -1.115,
            -246.032, 176.255, -17.965,
            -245.954, 91.807, -14.972,
            -159.953, 91.807, -18.342,
            -159.740, 95.004, -10.240,
            -159.740, 95.004, -10.240,
            -245.741, 95.004, -6.870,
               -245.954, 91.807, -14.972
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.039, -0.035, -0.999,
            -0.039, -0.035, -0.999,
            -0.039, -0.035, -0.999,
            -0.039, -0.035, -0.999,
            -0.039, -0.035, -0.999,
            -0.039, -0.035, -0.999,
            0.039, -0.078, 0.996,
            0.039, -0.078, 0.996,
            0.039, -0.078, 0.996,
            0.039, -0.078, 0.996,
            0.039, -0.078, 0.996,
            0.039, -0.078, 0.996,
            1.000, -0.000, -0.026,
            1.000, 0.000, -0.026,
            1.000, -0.000, -0.026,
            1.000, -0.000, -0.026,
            1.000, -0.000, -0.026,
            1.000, -0.000, -0.026,
            0.016, 0.910, 0.413,
            0.016, 0.910, 0.413,
            0.016, 0.910, 0.413,
            0.016, 0.910, 0.413,
            0.016, 0.910, 0.413,
            0.016, 0.910, 0.413,
            -1.000, 0.000, 0.026,
            -1.000, -0.000, 0.026,
            -1.000, -0.000, 0.026,
            -1.000, -0.000, 0.026,
            -1.000, 0.000, 0.026,
            -1.000, 0.000, 0.026,
            0.014, -0.930, 0.367,
            0.014, -0.930, 0.367,
            0.014, -0.930, 0.367,
            0.014, -0.930, 0.367,
            0.014, -0.930, 0.367,
               0.014, -0.930, 0.367
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