function create_geometry_259(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            20.665, -751.832, -17.982,
            20.665, -743.432, -14.503,
            20.665, -742.740, -17.982,
            20.665, -751.832, -17.982,
            20.665, -745.403, -11.554,
            20.665, -743.432, -14.503,
            20.665, -751.832, -17.982,
            20.665, -748.353, -9.583,
            20.665, -745.403, -11.554,
            20.665, -751.832, -17.982,
            20.665, -751.832, -8.891,
            20.665, -748.353, -9.583,
            20.665, -751.832, -17.982,
            20.665, -755.311, -9.583,
            20.665, -751.832, -8.891,
            20.665, -751.832, -17.982,
            20.665, -758.261, -11.554,
            20.665, -755.311, -9.583,
            20.665, -751.832, -17.982,
            20.665, -760.232, -14.503,
            20.665, -758.261, -11.554,
            20.665, -751.832, -17.982,
            20.665, -760.924, -17.982,
            20.665, -760.232, -14.503,
            20.665, -751.832, -17.982,
            20.665, -760.232, -21.462,
            20.665, -760.924, -17.982,
            20.665, -751.832, -17.982,
            20.665, -758.261, -24.411,
            20.665, -760.232, -21.462,
            20.665, -751.832, -17.982,
            20.665, -755.311, -26.382,
            20.665, -758.261, -24.411,
            20.665, -751.832, -17.982,
            20.665, -751.832, -27.074,
            20.665, -755.311, -26.382,
            20.665, -751.832, -17.982,
            20.665, -748.353, -26.382,
            20.665, -751.832, -27.074,
            20.665, -751.832, -17.982,
            20.665, -745.403, -24.411,
            20.665, -748.353, -26.382,
            20.665, -751.832, -17.982,
            20.665, -743.432, -21.462,
            20.665, -745.403, -24.411,
            20.665, -751.832, -17.982,
            20.665, -742.740, -17.982,
            20.665, -743.432, -21.462,
            20.665, -742.740, -17.982,
            66.105, -743.432, -14.503,
            66.105, -742.740, -17.983,
            20.665, -742.740, -17.982,
            20.665, -743.432, -14.503,
            66.105, -743.432, -14.503,
            20.665, -743.432, -14.503,
            66.105, -745.403, -11.554,
            66.105, -743.432, -14.503,
            20.665, -743.432, -14.503,
            20.665, -745.403, -11.554,
            66.105, -745.403, -11.554,
            20.665, -745.403, -11.554,
            66.105, -748.353, -9.583,
            66.105, -745.403, -11.554,
            20.665, -745.403, -11.554,
            20.665, -748.353, -9.583,
            66.105, -748.353, -9.583,
            20.665, -748.353, -9.583,
            66.105, -751.832, -8.891,
            66.105, -748.353, -9.583,
            20.665, -748.353, -9.583,
            20.665, -751.832, -8.891,
            66.105, -751.832, -8.891,
            20.665, -751.832, -8.891,
            66.105, -755.311, -9.583,
            66.105, -751.832, -8.891,
            20.665, -751.832, -8.891,
            20.665, -755.311, -9.583,
            66.105, -755.311, -9.583,
            20.665, -755.311, -9.583,
            66.105, -758.261, -11.554,
            66.105, -755.311, -9.583,
            20.665, -755.311, -9.583,
            20.665, -758.261, -11.554,
            66.105, -758.261, -11.554,
            20.665, -758.261, -11.554,
            66.105, -760.232, -14.503,
            66.105, -758.261, -11.554,
            20.665, -758.261, -11.554,
            20.665, -760.232, -14.503,
            66.105, -760.232, -14.503,
            20.665, -760.232, -14.503,
            66.105, -760.924, -17.983,
            66.105, -760.232, -14.503,
            20.665, -760.232, -14.503,
            20.665, -760.924, -17.982,
            66.105, -760.924, -17.983,
            20.665, -760.924, -17.982,
            66.105, -760.232, -21.462,
            66.105, -760.924, -17.983,
            20.665, -760.924, -17.982,
            20.665, -760.232, -21.462,
            66.105, -760.232, -21.462,
            20.665, -760.232, -21.462,
            66.105, -758.261, -24.411,
            66.105, -760.232, -21.462,
            20.665, -760.232, -21.462,
            20.665, -758.261, -24.411,
            66.105, -758.261, -24.411,
            20.665, -758.261, -24.411,
            66.105, -755.311, -26.382,
            66.105, -758.261, -24.411,
            20.665, -758.261, -24.411,
            20.665, -755.311, -26.382,
            66.105, -755.311, -26.382,
            20.665, -755.311, -26.382,
            66.105, -751.832, -27.074,
            66.105, -755.311, -26.382,
            20.665, -755.311, -26.382,
            20.665, -751.832, -27.074,
            66.105, -751.832, -27.074,
            20.665, -751.832, -27.074,
            66.105, -748.353, -26.382,
            66.105, -751.832, -27.074,
            20.665, -751.832, -27.074,
            20.665, -748.353, -26.382,
            66.105, -748.353, -26.382,
            20.665, -748.353, -26.382,
            66.105, -745.403, -24.411,
            66.105, -748.353, -26.382,
            20.665, -748.353, -26.382,
            20.665, -745.403, -24.411,
            66.105, -745.403, -24.411,
            20.665, -745.403, -24.411,
            66.105, -743.432, -21.462,
            66.105, -745.403, -24.411,
            20.665, -745.403, -24.411,
            20.665, -743.432, -21.462,
            66.105, -743.432, -21.462,
            20.665, -743.432, -21.462,
            66.105, -742.740, -17.983,
            66.105, -743.432, -21.462,
            20.665, -743.432, -21.462,
            20.665, -742.740, -17.982,
            66.105, -742.740, -17.983,
            66.105, -751.832, -17.983,
            66.105, -742.740, -17.983,
            66.105, -743.432, -14.503,
            66.105, -751.832, -17.983,
            66.105, -743.432, -14.503,
            66.105, -745.403, -11.554,
            66.105, -751.832, -17.983,
            66.105, -745.403, -11.554,
            66.105, -748.353, -9.583,
            66.105, -751.832, -17.983,
            66.105, -748.353, -9.583,
            66.105, -751.832, -8.891,
            66.105, -751.832, -17.983,
            66.105, -751.832, -8.891,
            66.105, -755.311, -9.583,
            66.105, -751.832, -17.983,
            66.105, -755.311, -9.583,
            66.105, -758.261, -11.554,
            66.105, -751.832, -17.983,
            66.105, -758.261, -11.554,
            66.105, -760.232, -14.503,
            66.105, -751.832, -17.983,
            66.105, -760.232, -14.503,
            66.105, -760.924, -17.983,
            66.105, -751.832, -17.983,
            66.105, -760.924, -17.983,
            66.105, -760.232, -21.462,
            66.105, -751.832, -17.983,
            66.105, -760.232, -21.462,
            66.105, -758.261, -24.411,
            66.105, -751.832, -17.983,
            66.105, -758.261, -24.411,
            66.105, -755.311, -26.382,
            66.105, -751.832, -17.983,
            66.105, -755.311, -26.382,
            66.105, -751.832, -27.074,
            66.105, -751.832, -17.983,
            66.105, -751.832, -27.074,
            66.105, -748.353, -26.382,
            66.105, -751.832, -17.983,
            66.105, -748.353, -26.382,
            66.105, -745.403, -24.411,
            66.105, -751.832, -17.983,
            66.105, -745.403, -24.411,
            66.105, -743.432, -21.462,
            66.105, -751.832, -17.983,
            66.105, -743.432, -21.462,
               66.105, -742.740, -17.983
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 0.924, 0.383,
            0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            0.000, 0.924, 0.383,
            0.000, 0.924, 0.383,
            0.000, 0.924, 0.383,
            0.000, 0.707, 0.707,
            0.000, 0.924, 0.383,
            0.000, 0.924, 0.383,
            0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            0.000, 0.383, 0.924,
            0.000, 0.707, 0.707,
            0.000, 0.707, 0.707,
            0.000, 0.383, 0.924,
            0.000, 0.383, 0.924,
            0.000, 0.383, 0.924,
            0.000, -0.000, 1.000,
            0.000, 0.383, 0.924,
            0.000, 0.383, 0.924,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.383, 0.924,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.383, 0.924,
            0.000, -0.383, 0.924,
            0.000, -0.383, 0.924,
            0.000, -0.707, 0.707,
            0.000, -0.383, 0.924,
            0.000, -0.383, 0.924,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
            0.000, -0.924, 0.383,
            0.000, -0.707, 0.707,
            0.000, -0.707, 0.707,
            0.000, -0.924, 0.383,
            0.000, -0.924, 0.383,
            0.000, -0.924, 0.383,
            -0.000, -1.000, -0.000,
            0.000, -0.924, 0.383,
            0.000, -0.924, 0.383,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -0.000, -0.924, -0.383,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -0.000, -0.924, -0.383,
            -0.000, -0.924, -0.383,
            -0.000, -0.924, -0.383,
            -0.000, -0.707, -0.707,
            -0.000, -0.924, -0.383,
            -0.000, -0.924, -0.383,
            -0.000, -0.707, -0.707,
            -0.000, -0.707, -0.707,
            -0.000, -0.707, -0.707,
            -0.000, -0.383, -0.924,
            -0.000, -0.707, -0.707,
            -0.000, -0.707, -0.707,
            -0.000, -0.383, -0.924,
            -0.000, -0.383, -0.924,
            -0.000, -0.383, -0.924,
            -0.000, -0.000, -1.000,
            -0.000, -0.383, -0.924,
            -0.000, -0.383, -0.924,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.383, -0.924,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, 0.383, -0.924,
            -0.000, 0.383, -0.924,
            -0.000, 0.383, -0.924,
            -0.000, 0.707, -0.707,
            -0.000, 0.383, -0.924,
            -0.000, 0.383, -0.924,
            -0.000, 0.707, -0.707,
            -0.000, 0.707, -0.707,
            -0.000, 0.707, -0.707,
            -0.000, 0.924, -0.383,
            -0.000, 0.707, -0.707,
            -0.000, 0.707, -0.707,
            -0.000, 0.924, -0.383,
            -0.000, 0.924, -0.383,
            -0.000, 0.924, -0.383,
            0.000, 1.000, -0.000,
            -0.000, 0.924, -0.383,
            -0.000, 0.924, -0.383,
            -0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, -0.000,
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
