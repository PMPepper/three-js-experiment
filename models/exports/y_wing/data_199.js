function create_geometry_199(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            7.529, -368.248, 120.579,
            7.529, -364.498, 110.937,
            12.587, -364.498, 110.937,
            7.529, -368.248, 120.579,
            12.587, -364.498, 110.937,
            12.587, -368.248, 120.579,
            7.529, -364.498, 110.937,
            7.529, -361.373, 110.271,
            12.587, -361.373, 110.271,
            7.529, -364.498, 110.937,
            12.587, -361.373, 110.271,
            12.587, -364.498, 110.937,
            7.529, -361.373, 110.271,
            7.529, -349.274, 114.726,
            12.587, -349.274, 114.726,
            7.529, -361.373, 110.271,
            12.587, -349.274, 114.726,
            12.587, -361.373, 110.271,
            7.529, -349.274, 114.726,
            7.529, -344.105, 122.197,
            12.587, -344.105, 122.197,
            7.529, -349.274, 114.726,
            12.587, -344.105, 122.197,
            12.587, -349.274, 114.726,
            7.529, -344.105, 122.197,
            7.529, -346.008, 123.372,
            12.587, -346.008, 123.372,
            7.529, -344.105, 122.197,
            12.587, -346.008, 123.372,
            12.587, -344.105, 122.197,
            7.529, -346.008, 123.372,
            7.529, -350.584, 116.697,
            12.587, -350.584, 116.697,
            7.529, -346.008, 123.372,
            12.587, -350.584, 116.697,
            12.587, -346.008, 123.372,
            7.529, -350.584, 116.697,
            7.529, -360.994, 112.766,
            12.587, -360.994, 112.766,
            7.529, -350.584, 116.697,
            12.587, -360.994, 112.766,
            12.587, -350.584, 116.697,
            7.529, -360.994, 112.766,
            7.529, -363.340, 113.304,
            12.587, -363.340, 113.304,
            7.529, -360.994, 112.766,
            12.587, -363.340, 113.304,
            12.587, -360.994, 112.766,
            7.529, -363.340, 113.304,
            7.529, -365.934, 120.970,
            12.587, -365.934, 120.970,
            7.529, -363.340, 113.304,
            12.587, -365.934, 120.970,
            12.587, -363.340, 113.304,
            7.529, -365.934, 120.970,
            7.529, -368.248, 120.579,
            12.587, -368.248, 120.579,
            7.529, -365.934, 120.970,
            12.587, -368.248, 120.579,
            12.587, -365.934, 120.970,
            7.529, -365.934, 120.970,
            7.529, -364.498, 110.937,
            7.529, -368.248, 120.579,
            7.529, -363.340, 113.304,
            7.529, -364.498, 110.937,
            7.529, -365.934, 120.970,
            7.529, -363.340, 113.304,
            7.529, -361.373, 110.271,
            7.529, -364.498, 110.937,
            7.529, -360.994, 112.766,
            7.529, -361.373, 110.271,
            7.529, -363.340, 113.304,
            7.529, -360.994, 112.766,
            7.529, -349.274, 114.726,
            7.529, -361.373, 110.271,
            7.529, -350.584, 116.697,
            7.529, -349.274, 114.726,
            7.529, -360.994, 112.766,
            7.529, -350.584, 116.697,
            7.529, -344.105, 122.197,
            7.529, -349.274, 114.726,
            7.529, -346.008, 123.372,
            7.529, -344.105, 122.197,
            7.529, -350.584, 116.697,
            12.587, -365.934, 120.970,
            12.587, -368.248, 120.579,
            12.587, -364.498, 110.937,
            12.587, -363.340, 113.304,
            12.587, -365.934, 120.970,
            12.587, -364.498, 110.937,
            12.587, -363.340, 113.304,
            12.587, -364.498, 110.937,
            12.587, -361.373, 110.271,
            12.587, -360.994, 112.766,
            12.587, -363.340, 113.304,
            12.587, -361.373, 110.271,
            12.587, -360.994, 112.766,
            12.587, -361.373, 110.271,
            12.587, -349.274, 114.726,
            12.587, -350.584, 116.697,
            12.587, -360.994, 112.766,
            12.587, -349.274, 114.726,
            12.587, -350.584, 116.697,
            12.587, -349.274, 114.726,
            12.587, -344.105, 122.197,
            12.587, -346.008, 123.372,
            12.587, -350.584, 116.697,
               12.587, -344.105, 122.197
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.932, -0.362,
            0.000, -0.932, -0.362,
            0.000, -0.932, -0.362,
            0.000, -0.932, -0.362,
            0.000, -0.932, -0.362,
            0.000, -0.932, -0.362,
            0.000, -0.209, -0.978,
            0.000, -0.209, -0.978,
            0.000, -0.209, -0.978,
            0.000, -0.209, -0.978,
            0.000, -0.209, -0.978,
            0.000, -0.209, -0.978,
            -0.000, 0.346, -0.938,
            -0.000, 0.346, -0.938,
            -0.000, 0.346, -0.938,
            -0.000, 0.346, -0.938,
            -0.000, 0.346, -0.938,
            0.000, 0.346, -0.938,
            -0.000, 0.822, -0.569,
            0.000, 0.822, -0.569,
            -0.000, 0.822, -0.569,
            -0.000, 0.822, -0.569,
            -0.000, 0.822, -0.569,
            -0.000, 0.822, -0.569,
            0.000, 0.525, 0.851,
            0.000, 0.525, 0.851,
            0.000, 0.525, 0.851,
            0.000, 0.525, 0.851,
            0.000, 0.525, 0.851,
            0.000, 0.525, 0.851,
            0.000, -0.825, 0.565,
            0.000, -0.825, 0.565,
            0.000, -0.825, 0.565,
            0.000, -0.825, 0.565,
            0.000, -0.825, 0.565,
            0.000, -0.825, 0.565,
            0.000, -0.353, 0.936,
            0.000, -0.353, 0.936,
            0.000, -0.353, 0.936,
            0.000, -0.353, 0.936,
            0.000, -0.353, 0.936,
            0.000, -0.353, 0.936,
            0.000, 0.224, 0.975,
            0.000, 0.224, 0.975,
            0.000, 0.224, 0.975,
            0.000, 0.224, 0.975,
            0.000, 0.224, 0.975,
            0.000, 0.224, 0.975,
            0.000, 0.947, 0.321,
            0.000, 0.947, 0.321,
            0.000, 0.947, 0.321,
            0.000, 0.947, 0.321,
            0.000, 0.947, 0.321,
            0.000, 0.947, 0.321,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
            0.000, -0.167, 0.986,
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
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
               1.000, -0.000, -0.000
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
