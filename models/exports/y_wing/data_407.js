function create_geometry_407(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            35.953, -394.287, -67.613,
            35.953, -54.015, -67.628,
            35.953, -54.015, -34.219,
            35.953, -54.015, -34.219,
            35.953, -394.287, -34.204,
            35.953, -394.287, -67.613,
            -34.587, -54.015, -67.628,
            -34.587, -394.287, -67.613,
            -34.587, -394.287, -34.204,
            -34.587, -394.287, -34.204,
            -34.587, -54.015, -34.219,
            -34.587, -54.015, -67.628,
            -34.587, -394.287, -67.613,
            -34.587, -54.015, -67.628,
            -24.943, -119.382, -67.625,
            35.953, -394.287, -67.613,
            -34.587, -394.287, -67.613,
            -24.943, -309.634, -67.617,
            -34.587, -394.287, -67.613,
            -24.943, -119.382, -67.625,
            -24.943, -309.634, -67.617,
            26.308, -309.634, -67.617,
            35.953, -394.287, -67.613,
            -24.943, -309.634, -67.617,
            -24.943, -119.382, -67.625,
            -34.587, -54.015, -67.628,
            35.953, -54.015, -67.628,
            35.953, -54.015, -67.628,
            35.953, -394.287, -67.613,
            26.308, -309.634, -67.617,
            35.953, -54.015, -67.628,
            26.308, -309.634, -67.617,
            26.308, -119.382, -67.625,
            26.308, -119.382, -67.625,
            -24.943, -119.382, -67.625,
            35.953, -54.015, -67.628,
            35.953, -394.287, -34.204,
            35.953, -54.015, -34.219,
            26.308, -309.634, -62.125,
            35.953, -54.015, -34.219,
            -34.587, -54.015, -34.219,
            26.308, -119.382, -62.133,
            26.308, -119.382, -62.133,
            26.308, -309.634, -62.125,
            35.953, -54.015, -34.219,
            26.308, -309.634, -62.125,
            -24.943, -309.634, -62.125,
            35.953, -394.287, -34.204,
            35.953, -394.287, -34.204,
            -24.943, -309.634, -62.125,
            -34.587, -394.287, -34.204,
            -24.943, -119.382, -62.133,
            26.308, -119.382, -62.133,
            -34.587, -54.015, -34.219,
            -34.587, -54.015, -34.219,
            -34.587, -394.287, -34.204,
            -24.943, -119.382, -62.133,
            -34.587, -394.287, -34.204,
            -24.943, -309.634, -62.125,
            -24.943, -119.382, -62.133,
            26.308, -119.382, -62.133,
            26.308, -119.382, -67.625,
            26.308, -309.634, -67.617,
            26.308, -119.382, -67.625,
            26.308, -119.382, -62.133,
            -24.943, -119.382, -67.625,
            26.308, -309.634, -67.617,
            26.308, -309.634, -62.125,
            26.308, -119.382, -62.133,
            26.308, -309.634, -67.617,
            -24.943, -309.634, -62.125,
            26.308, -309.634, -62.125,
            -24.943, -119.382, -67.625,
            26.308, -119.382, -62.133,
            -24.943, -119.382, -62.133,
            -24.943, -309.634, -62.125,
            -24.943, -309.634, -67.617,
            -24.943, -119.382, -67.625,
            -24.943, -309.634, -67.617,
            -24.943, -309.634, -62.125,
            26.308, -309.634, -67.617,
            -24.943, -119.382, -62.133,
            -24.943, -309.634, -62.125,
               -24.943, -119.382, -67.625
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            -0.198, 0.287, 0.937,
            -0.248, -0.349, 0.904,
            -0.719, 0.143, 0.680,
            -0.248, -0.349, 0.904,
            0.248, -0.349, 0.904,
            -0.710, -0.185, 0.679,
            -0.710, -0.185, 0.679,
            -0.719, 0.143, 0.680,
            -0.248, -0.349, 0.904,
            -0.719, 0.143, 0.680,
            0.719, 0.143, 0.680,
            -0.198, 0.287, 0.937,
            -0.198, 0.287, 0.937,
            0.719, 0.143, 0.680,
            0.198, 0.287, 0.937,
            0.710, -0.185, 0.679,
            -0.710, -0.185, 0.679,
            0.248, -0.349, 0.904,
            0.248, -0.349, 0.904,
            0.198, 0.287, 0.937,
            0.710, -0.185, 0.679,
            0.198, 0.287, 0.937,
            0.719, 0.143, 0.680,
            0.710, -0.185, 0.679,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
               1.000, -0.000, 0.000
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
