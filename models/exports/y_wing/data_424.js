function create_geometry_424(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -377.159, 111.977,
            -1.449, -377.386, 114.013,
            0.000, -377.195, 114.016,
            -0.000, -377.159, 111.977,
            -1.449, -377.350, 111.974,
            -1.449, -377.386, 114.013,
            -1.449, -377.350, 111.974,
            -2.800, -377.945, 114.003,
            -1.449, -377.386, 114.013,
            -1.449, -377.350, 111.974,
            -2.800, -377.910, 111.964,
            -2.800, -377.945, 114.003,
            -2.800, -377.910, 111.964,
            -3.960, -378.835, 113.987,
            -2.800, -377.945, 114.003,
            -2.800, -377.910, 111.964,
            -3.960, -378.799, 111.949,
            -3.960, -378.835, 113.987,
            -3.960, -378.799, 111.949,
            -4.850, -379.995, 113.967,
            -3.960, -378.835, 113.987,
            -3.960, -378.799, 111.949,
            -4.850, -379.959, 111.928,
            -4.850, -379.995, 113.967,
            -4.850, -379.959, 111.928,
            -5.409, -381.345, 113.944,
            -4.850, -379.995, 113.967,
            -4.850, -379.959, 111.928,
            -5.409, -381.310, 111.905,
            -5.409, -381.345, 113.944,
            -5.409, -381.310, 111.905,
            -5.600, -382.794, 113.918,
            -5.409, -381.345, 113.944,
            -5.409, -381.310, 111.905,
            -5.600, -382.759, 111.880,
            -5.600, -382.794, 113.918,
            -5.600, -382.759, 111.880,
            -5.409, -384.244, 113.893,
            -5.600, -382.794, 113.918,
            -5.600, -382.759, 111.880,
            -5.409, -384.208, 111.854,
            -5.409, -384.244, 113.893,
            -5.409, -384.208, 111.854,
            -4.850, -385.594, 113.869,
            -5.409, -384.244, 113.893,
            -5.409, -384.208, 111.854,
            -4.850, -385.559, 111.831,
            -4.850, -385.594, 113.869,
            -4.850, -385.559, 111.831,
            -3.960, -386.754, 113.849,
            -4.850, -385.594, 113.869,
            -4.850, -385.559, 111.831,
            -3.960, -386.718, 111.811,
            -3.960, -386.754, 113.849,
            -3.960, -386.718, 111.811,
            -2.800, -387.644, 113.834,
            -3.960, -386.754, 113.849,
            -3.960, -386.718, 111.811,
            -2.800, -387.608, 111.795,
            -2.800, -387.644, 113.834,
            -2.800, -387.608, 111.795,
            -1.449, -388.203, 113.824,
            -2.800, -387.644, 113.834,
            -2.800, -387.608, 111.795,
            -1.449, -388.167, 111.785,
            -1.449, -388.203, 113.824,
            -1.449, -388.167, 111.785,
            -0.000, -388.394, 113.821,
            -1.449, -388.203, 113.824,
            -1.449, -388.167, 111.785,
            -0.000, -388.358, 111.782,
            -0.000, -388.394, 113.821,
            -0.000, -388.358, 111.782,
            1.449, -388.203, 113.824,
            -0.000, -388.394, 113.821,
            -0.000, -388.358, 111.782,
            1.449, -388.167, 111.785,
            1.449, -388.203, 113.824,
            1.449, -388.167, 111.785,
            2.800, -387.644, 113.834,
            1.449, -388.203, 113.824,
            1.449, -388.167, 111.785,
            2.800, -387.608, 111.795,
            2.800, -387.644, 113.834,
            2.800, -387.608, 111.795,
            3.960, -386.754, 113.849,
            2.800, -387.644, 113.834,
            2.800, -387.608, 111.795,
            3.960, -386.718, 111.810,
            3.960, -386.754, 113.849,
            3.960, -386.718, 111.810,
            4.850, -385.594, 113.869,
            3.960, -386.754, 113.849,
            3.960, -386.718, 111.810,
            4.850, -385.559, 111.831,
            4.850, -385.594, 113.869,
            4.850, -385.559, 111.831,
            5.409, -384.244, 113.893,
            4.850, -385.594, 113.869,
            4.850, -385.559, 111.831,
            5.409, -384.208, 111.854,
            5.409, -384.244, 113.893,
            5.409, -384.208, 111.854,
            5.600, -382.794, 113.918,
            5.409, -384.244, 113.893,
            5.409, -384.208, 111.854,
            5.600, -382.759, 111.880,
            5.600, -382.794, 113.918,
            5.600, -382.759, 111.880,
            5.409, -381.345, 113.944,
            5.600, -382.794, 113.918,
            5.600, -382.759, 111.880,
            5.409, -381.310, 111.905,
            5.409, -381.345, 113.944,
            5.409, -381.310, 111.905,
            4.850, -379.995, 113.967,
            5.409, -381.345, 113.944,
            5.409, -381.310, 111.905,
            4.850, -379.959, 111.928,
            4.850, -379.995, 113.967,
            4.850, -379.959, 111.928,
            3.960, -378.835, 113.987,
            4.850, -379.995, 113.967,
            4.850, -379.959, 111.928,
            3.960, -378.799, 111.949,
            3.960, -378.835, 113.987,
            3.960, -378.799, 111.949,
            2.800, -377.945, 114.003,
            3.960, -378.835, 113.987,
            3.960, -378.799, 111.949,
            2.800, -377.910, 111.964,
            2.800, -377.945, 114.003,
            2.800, -377.910, 111.964,
            1.449, -377.386, 114.013,
            2.800, -377.945, 114.003,
            2.800, -377.910, 111.964,
            1.449, -377.350, 111.974,
            1.449, -377.386, 114.013,
            1.449, -377.350, 111.974,
            0.000, -377.195, 114.016,
            1.449, -377.386, 114.013,
            1.449, -377.350, 111.974,
            -0.000, -377.159, 111.977,
               0.000, -377.195, 114.016
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, 1.000, 0.017,
            -0.259, 0.966, 0.017,
            -0.000, 1.000, 0.017,
            -0.000, 1.000, 0.017,
            -0.259, 0.966, 0.017,
            -0.259, 0.966, 0.017,
            -0.259, 0.966, 0.017,
            -0.500, 0.866, 0.015,
            -0.259, 0.966, 0.017,
            -0.259, 0.966, 0.017,
            -0.500, 0.866, 0.015,
            -0.500, 0.866, 0.015,
            -0.500, 0.866, 0.015,
            -0.707, 0.707, 0.012,
            -0.500, 0.866, 0.015,
            -0.500, 0.866, 0.015,
            -0.707, 0.707, 0.012,
            -0.707, 0.707, 0.012,
            -0.707, 0.707, 0.012,
            -0.866, 0.500, 0.009,
            -0.707, 0.707, 0.012,
            -0.707, 0.707, 0.012,
            -0.866, 0.500, 0.009,
            -0.866, 0.500, 0.009,
            -0.866, 0.500, 0.009,
            -0.966, 0.259, 0.005,
            -0.866, 0.500, 0.009,
            -0.866, 0.500, 0.009,
            -0.966, 0.259, 0.005,
            -0.966, 0.259, 0.005,
            -0.966, 0.259, 0.005,
            -1.000, 0.000, 0.000,
            -0.966, 0.259, 0.005,
            -0.966, 0.259, 0.005,
            -1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -0.966, -0.259, -0.005,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, -0.000,
            -0.966, -0.259, -0.005,
            -0.966, -0.259, -0.005,
            -0.966, -0.259, -0.005,
            -0.866, -0.500, -0.009,
            -0.966, -0.259, -0.005,
            -0.966, -0.259, -0.005,
            -0.866, -0.500, -0.009,
            -0.866, -0.500, -0.009,
            -0.866, -0.500, -0.009,
            -0.707, -0.707, -0.012,
            -0.866, -0.500, -0.009,
            -0.866, -0.500, -0.009,
            -0.707, -0.707, -0.012,
            -0.707, -0.707, -0.012,
            -0.707, -0.707, -0.012,
            -0.500, -0.866, -0.015,
            -0.707, -0.707, -0.012,
            -0.707, -0.707, -0.012,
            -0.500, -0.866, -0.015,
            -0.500, -0.866, -0.015,
            -0.500, -0.866, -0.015,
            -0.259, -0.966, -0.017,
            -0.500, -0.866, -0.015,
            -0.500, -0.866, -0.015,
            -0.259, -0.966, -0.017,
            -0.259, -0.966, -0.017,
            -0.259, -0.966, -0.017,
            -0.000, -1.000, -0.017,
            -0.259, -0.966, -0.017,
            -0.259, -0.966, -0.017,
            -0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            0.259, -0.966, -0.017,
            -0.000, -1.000, -0.017,
            -0.000, -1.000, -0.017,
            0.259, -0.966, -0.017,
            0.259, -0.966, -0.017,
            0.259, -0.966, -0.017,
            0.500, -0.866, -0.015,
            0.259, -0.966, -0.017,
            0.259, -0.966, -0.017,
            0.500, -0.866, -0.015,
            0.500, -0.866, -0.015,
            0.500, -0.866, -0.015,
            0.707, -0.707, -0.012,
            0.500, -0.866, -0.015,
            0.500, -0.866, -0.015,
            0.707, -0.707, -0.012,
            0.707, -0.707, -0.012,
            0.707, -0.707, -0.012,
            0.866, -0.500, -0.009,
            0.707, -0.707, -0.012,
            0.707, -0.707, -0.012,
            0.866, -0.500, -0.009,
            0.866, -0.500, -0.009,
            0.866, -0.500, -0.009,
            0.966, -0.259, -0.005,
            0.866, -0.500, -0.009,
            0.866, -0.500, -0.009,
            0.966, -0.259, -0.005,
            0.966, -0.259, -0.005,
            0.966, -0.259, -0.005,
            1.000, 0.000, -0.000,
            0.966, -0.259, -0.005,
            0.966, -0.259, -0.005,
            1.000, -0.000, 0.000,
            1.000, 0.000, -0.000,
            1.000, -0.000, 0.000,
            0.966, 0.259, 0.005,
            1.000, 0.000, -0.000,
            1.000, -0.000, 0.000,
            0.966, 0.259, 0.005,
            0.966, 0.259, 0.005,
            0.966, 0.259, 0.005,
            0.866, 0.500, 0.009,
            0.966, 0.259, 0.005,
            0.966, 0.259, 0.005,
            0.866, 0.500, 0.009,
            0.866, 0.500, 0.009,
            0.866, 0.500, 0.009,
            0.707, 0.707, 0.012,
            0.866, 0.500, 0.009,
            0.866, 0.500, 0.009,
            0.707, 0.707, 0.012,
            0.707, 0.707, 0.012,
            0.707, 0.707, 0.012,
            0.500, 0.866, 0.015,
            0.707, 0.707, 0.012,
            0.707, 0.707, 0.012,
            0.500, 0.866, 0.015,
            0.500, 0.866, 0.015,
            0.500, 0.866, 0.015,
            0.259, 0.966, 0.017,
            0.500, 0.866, 0.015,
            0.500, 0.866, 0.015,
            0.259, 0.966, 0.017,
            0.259, 0.966, 0.017,
            0.259, 0.966, 0.017,
            -0.000, 1.000, 0.017,
            0.259, 0.966, 0.017,
            0.259, 0.966, 0.017,
            -0.000, 1.000, 0.017,
               -0.000, 1.000, 0.017
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x212123,
            shininess: 2.297,
            ambient: 0x0B0101,
            side: THREE.FrontSide,
            specular: 0xD2D2D2
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
