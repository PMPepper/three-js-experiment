function create_geometry_53(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -63.738, -255.597, -24.847,
            -82.860, -243.275, -24.847,
            -82.860, -119.087, -24.847,
            -82.860, -119.087, -24.847,
            -63.738, -111.490, -24.847,
            -63.738, -255.597, -24.847,
            -63.738, -255.597, -20.749,
            -63.738, -111.490, -20.749,
            -82.860, -119.087, -20.749,
            -82.860, -119.087, -20.749,
            -82.860, -243.275, -20.749,
            -63.738, -255.597, -20.749,
            -63.738, -111.490, -24.847,
            -82.860, -119.087, -24.847,
            -82.860, -119.087, -20.749,
            -82.860, -119.087, -20.749,
            -63.738, -111.490, -20.749,
            -63.738, -111.490, -24.847,
            -82.860, -119.087, -24.847,
            -82.860, -243.275, -24.847,
            -82.860, -243.275, -20.749,
            -82.860, -243.275, -20.749,
            -82.860, -119.087, -20.749,
            -82.860, -119.087, -24.847,
            -82.860, -243.275, -24.847,
            -63.738, -255.597, -24.847,
            -63.738, -255.597, -20.749,
            -63.738, -255.597, -20.749,
            -82.860, -243.275, -20.749,
            -82.860, -243.275, -24.847,
            -63.738, -255.597, 6.678,
            -82.860, -243.275, 6.678,
            -82.860, -119.087, 6.678,
            -82.860, -119.087, 6.678,
            -63.738, -111.490, 6.678,
            -63.738, -255.597, 6.678,
            -63.738, -255.597, 10.775,
            -63.738, -111.490, 10.775,
            -82.860, -119.087, 10.775,
            -82.860, -119.087, 10.775,
            -82.860, -243.275, 10.775,
            -63.738, -255.597, 10.775,
            -63.738, -111.490, 6.678,
            -82.860, -119.087, 6.678,
            -82.860, -119.087, 10.775,
            -82.860, -119.087, 10.775,
            -63.738, -111.490, 10.775,
            -63.738, -111.490, 6.678,
            -82.860, -119.087, 6.678,
            -82.860, -243.275, 6.678,
            -82.860, -243.275, 10.775,
            -82.860, -243.275, 10.775,
            -82.860, -119.087, 10.775,
            -82.860, -119.087, 6.678,
            -82.860, -243.275, 6.678,
            -63.738, -255.597, 6.678,
            -63.738, -255.597, 10.775,
            -63.738, -255.597, 10.775,
            -82.860, -243.275, 10.775,
               -82.860, -243.275, 6.678
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -0.369, 0.929, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
            -0.542, -0.841, 0.000,
               -0.542, -0.841, 0.000
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
