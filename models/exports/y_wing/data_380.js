function create_geometry_380(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            88.483, 283.115, 48.648,
            89.069, 285.305, 62.218,
            89.069, 285.305, 48.648,
            88.483, 283.115, 48.648,
            88.483, 283.115, 62.218,
            89.069, 285.305, 62.218,
            88.483, 283.115, 62.218,
            90.384, 284.545, 62.218,
            89.069, 285.305, 62.218,
            88.483, 283.115, 62.218,
            90.001, 283.115, 62.218,
            90.384, 284.545, 62.218,
            90.001, 283.115, 62.218,
            90.384, 284.545, 48.648,
            90.384, 284.545, 62.218,
            90.001, 283.115, 62.218,
            90.001, 283.115, 48.648,
            90.384, 284.545, 48.648,
            90.001, 283.115, 48.648,
            89.069, 285.305, 48.648,
            90.384, 284.545, 48.648,
            90.001, 283.115, 48.648,
            88.483, 283.115, 48.648,
            89.069, 285.305, 48.648,
            89.069, 285.305, 48.648,
            90.672, 286.907, 62.218,
            90.672, 286.907, 48.648,
            89.069, 285.305, 48.648,
            89.069, 285.305, 62.218,
            90.672, 286.907, 62.218,
            89.069, 285.305, 62.218,
            91.431, 285.592, 62.218,
            90.672, 286.907, 62.218,
            89.069, 285.305, 62.218,
            90.384, 284.545, 62.218,
            91.431, 285.592, 62.218,
            90.384, 284.545, 62.218,
            91.431, 285.592, 48.648,
            91.431, 285.592, 62.218,
            90.384, 284.545, 62.218,
            90.384, 284.545, 48.648,
            91.431, 285.592, 48.648,
            90.384, 284.545, 48.648,
            90.672, 286.907, 48.648,
            91.431, 285.592, 48.648,
            90.384, 284.545, 48.648,
            89.069, 285.305, 48.648,
            90.672, 286.907, 48.648,
            90.672, 286.907, 48.648,
            92.861, 287.494, 62.218,
            92.861, 287.494, 48.648,
            90.672, 286.907, 48.648,
            90.672, 286.907, 62.218,
            92.861, 287.494, 62.218,
            90.672, 286.907, 62.218,
            92.861, 285.975, 62.218,
            92.861, 287.494, 62.218,
            90.672, 286.907, 62.218,
            91.431, 285.592, 62.218,
            92.861, 285.975, 62.218,
            91.431, 285.592, 62.218,
            92.861, 285.975, 48.648,
            92.861, 285.975, 62.218,
            91.431, 285.592, 62.218,
            91.431, 285.592, 48.648,
            92.861, 285.975, 48.648,
            91.431, 285.592, 48.648,
            92.861, 287.494, 48.648,
            92.861, 285.975, 48.648,
            91.431, 285.592, 48.648,
            90.672, 286.907, 48.648,
            92.861, 287.494, 48.648,
            92.861, 287.494, 48.648,
            95.050, 286.907, 62.218,
            95.050, 286.907, 48.648,
            92.861, 287.494, 48.648,
            92.861, 287.494, 62.218,
            95.050, 286.907, 62.218,
            92.861, 287.494, 62.218,
            94.291, 285.592, 62.218,
            95.050, 286.907, 62.218,
            92.861, 287.494, 62.218,
            92.861, 285.975, 62.218,
            94.291, 285.592, 62.218,
            92.861, 285.975, 62.218,
            94.291, 285.592, 48.648,
            94.291, 285.592, 62.218,
            92.861, 285.975, 62.218,
            92.861, 285.975, 48.648,
            94.291, 285.592, 48.648,
            92.861, 285.975, 48.648,
            95.050, 286.907, 48.648,
            94.291, 285.592, 48.648,
            92.861, 285.975, 48.648,
            92.861, 287.494, 48.648,
            95.050, 286.907, 48.648,
            95.050, 286.907, 48.648,
            96.653, 285.305, 62.218,
            96.653, 285.305, 48.648,
            95.050, 286.907, 48.648,
            95.050, 286.907, 62.218,
            96.653, 285.305, 62.218,
            95.050, 286.907, 62.218,
            95.338, 284.545, 62.218,
            96.653, 285.305, 62.218,
            95.050, 286.907, 62.218,
            94.291, 285.592, 62.218,
            95.338, 284.545, 62.218,
            94.291, 285.592, 62.218,
            95.338, 284.545, 48.648,
            95.338, 284.545, 62.218,
            94.291, 285.592, 62.218,
            94.291, 285.592, 48.648,
            95.338, 284.545, 48.648,
            94.291, 285.592, 48.648,
            96.653, 285.305, 48.648,
            95.338, 284.545, 48.648,
            94.291, 285.592, 48.648,
            95.050, 286.907, 48.648,
            96.653, 285.305, 48.648,
            96.653, 285.305, 48.648,
            97.240, 283.115, 62.218,
            97.240, 283.115, 48.648,
            96.653, 285.305, 48.648,
            96.653, 285.305, 62.218,
            97.240, 283.115, 62.218,
            96.653, 285.305, 62.218,
            95.721, 283.115, 62.218,
            97.240, 283.115, 62.218,
            96.653, 285.305, 62.218,
            95.338, 284.545, 62.218,
            95.721, 283.115, 62.218,
            95.338, 284.545, 62.218,
            95.721, 283.115, 48.648,
            95.721, 283.115, 62.218,
            95.338, 284.545, 62.218,
            95.338, 284.545, 48.648,
            95.721, 283.115, 48.648,
            95.338, 284.545, 48.648,
            97.240, 283.115, 48.648,
            95.721, 283.115, 48.648,
            95.338, 284.545, 48.648,
            96.653, 285.305, 48.648,
            97.240, 283.115, 48.648,
            97.240, 283.115, 48.648,
            96.653, 280.926, 62.218,
            96.653, 280.926, 48.648,
            97.240, 283.115, 48.648,
            97.240, 283.115, 62.218,
            96.653, 280.926, 62.218,
            97.240, 283.115, 62.218,
            95.338, 281.685, 62.218,
            96.653, 280.926, 62.218,
            97.240, 283.115, 62.218,
            95.721, 283.115, 62.218,
            95.338, 281.685, 62.218,
            95.721, 283.115, 62.218,
            95.338, 281.685, 48.648,
            95.338, 281.685, 62.218,
            95.721, 283.115, 62.218,
            95.721, 283.115, 48.648,
            95.338, 281.685, 48.648,
            95.721, 283.115, 48.648,
            96.653, 280.926, 48.648,
            95.338, 281.685, 48.648,
            95.721, 283.115, 48.648,
            97.240, 283.115, 48.648,
            96.653, 280.926, 48.648,
            96.653, 280.926, 48.648,
            95.050, 279.323, 62.218,
            95.050, 279.323, 48.648,
            96.653, 280.926, 48.648,
            96.653, 280.926, 62.218,
            95.050, 279.323, 62.218,
            96.653, 280.926, 62.218,
            94.291, 280.638, 62.218,
            95.050, 279.323, 62.218,
            96.653, 280.926, 62.218,
            95.338, 281.685, 62.218,
            94.291, 280.638, 62.218,
            95.338, 281.685, 62.218,
            94.291, 280.638, 48.648,
            94.291, 280.638, 62.218,
            95.338, 281.685, 62.218,
            95.338, 281.685, 48.648,
            94.291, 280.638, 48.648,
            95.338, 281.685, 48.648,
            95.050, 279.323, 48.648,
            94.291, 280.638, 48.648,
            95.338, 281.685, 48.648,
            96.653, 280.926, 48.648,
            95.050, 279.323, 48.648,
            95.050, 279.323, 48.648,
            92.861, 278.737, 62.218,
            92.861, 278.737, 48.648,
            95.050, 279.323, 48.648,
            95.050, 279.323, 62.218,
            92.861, 278.737, 62.218,
            95.050, 279.323, 62.218,
            92.861, 280.255, 62.218,
            92.861, 278.737, 62.218,
            95.050, 279.323, 62.218,
            94.291, 280.638, 62.218,
            92.861, 280.255, 62.218,
            94.291, 280.638, 62.218,
            92.861, 280.255, 48.648,
            92.861, 280.255, 62.218,
            94.291, 280.638, 62.218,
            94.291, 280.638, 48.648,
            92.861, 280.255, 48.648,
            94.291, 280.638, 48.648,
            92.861, 278.737, 48.648,
            92.861, 280.255, 48.648,
            94.291, 280.638, 48.648,
            95.050, 279.323, 48.648,
            92.861, 278.737, 48.648,
            92.861, 278.737, 48.648,
            90.672, 279.323, 62.218,
            90.672, 279.323, 48.648,
            92.861, 278.737, 48.648,
            92.861, 278.737, 62.218,
            90.672, 279.323, 62.218,
            92.861, 278.737, 62.218,
            91.431, 280.638, 62.218,
            90.672, 279.323, 62.218,
            92.861, 278.737, 62.218,
            92.861, 280.255, 62.218,
            91.431, 280.638, 62.218,
            92.861, 280.255, 62.218,
            91.431, 280.638, 48.648,
            91.431, 280.638, 62.218,
            92.861, 280.255, 62.218,
            92.861, 280.255, 48.648,
            91.431, 280.638, 48.648,
            92.861, 280.255, 48.648,
            90.672, 279.323, 48.648,
            91.431, 280.638, 48.648,
            92.861, 280.255, 48.648,
            92.861, 278.737, 48.648,
            90.672, 279.323, 48.648,
            90.672, 279.323, 48.648,
            89.069, 280.926, 62.218,
            89.069, 280.926, 48.648,
            90.672, 279.323, 48.648,
            90.672, 279.323, 62.218,
            89.069, 280.926, 62.218,
            90.672, 279.323, 62.218,
            90.384, 281.685, 62.218,
            89.069, 280.926, 62.218,
            90.672, 279.323, 62.218,
            91.431, 280.638, 62.218,
            90.384, 281.685, 62.218,
            91.431, 280.638, 62.218,
            90.384, 281.685, 48.648,
            90.384, 281.685, 62.218,
            91.431, 280.638, 62.218,
            91.431, 280.638, 48.648,
            90.384, 281.685, 48.648,
            91.431, 280.638, 48.648,
            89.069, 280.926, 48.648,
            90.384, 281.685, 48.648,
            91.431, 280.638, 48.648,
            90.672, 279.323, 48.648,
            89.069, 280.926, 48.648,
            89.069, 280.926, 48.648,
            88.483, 283.115, 62.218,
            88.483, 283.115, 48.648,
            89.069, 280.926, 48.648,
            89.069, 280.926, 62.218,
            88.483, 283.115, 62.218,
            89.069, 280.926, 62.218,
            90.001, 283.115, 62.218,
            88.483, 283.115, 62.218,
            89.069, 280.926, 62.218,
            90.384, 281.685, 62.218,
            90.001, 283.115, 62.218,
            90.384, 281.685, 62.218,
            90.001, 283.115, 48.648,
            90.001, 283.115, 62.218,
            90.384, 281.685, 62.218,
            90.384, 281.685, 48.648,
            90.001, 283.115, 48.648,
            90.384, 281.685, 48.648,
            88.483, 283.115, 48.648,
            90.001, 283.115, 48.648,
            90.384, 281.685, 48.648,
            89.069, 280.926, 48.648,
               88.483, 283.115, 48.648
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, 0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.866, -0.500, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.866, 0.500, 0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, 0.000,
            -0.500, 0.866, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.866, -0.500, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, 0.000,
            0.500, -0.866, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.500, 0.866, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.500, 0.866, 0.000,
            -0.500, 0.866, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.500, -0.866, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            -0.000, -1.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 1.000, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.500, 0.866, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, -1.000, -0.000,
            -0.500, -0.866, -0.000,
            -0.500, -0.866, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.500, -0.866, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.500, 0.866, 0.000,
            0.866, 0.500, 0.000,
            0.866, 0.500, -0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.866, 0.500, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.500, -0.866, -0.000,
            -0.866, -0.500, -0.000,
            -0.866, -0.500, 0.000,
            -0.500, -0.866, -0.000,
            -0.500, -0.866, -0.000,
            -0.866, -0.500, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.866, 0.500, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, 0.500, -0.000,
            0.866, 0.500, 0.000,
            1.000, 0.000, -0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, -0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            1.000, 0.000, -0.000,
            0.866, -0.500, -0.000,
            0.866, -0.500, 0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            0.866, -0.500, -0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            -0.866, 0.500, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, 0.500, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.866, -0.500, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            0.866, -0.500, 0.000,
            0.866, -0.500, -0.000,
            0.500, -0.866, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.866, 0.500, -0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.866, 0.500, -0.000,
            -0.866, 0.500, 0.000,
            -0.500, 0.866, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.500, -0.866, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.500, -0.866, 0.000,
            0.500, -0.866, 0.000,
            -0.000, -1.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.500, 0.866, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            -0.500, 0.866, -0.000,
            -0.500, 0.866, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, -1.000, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.500, -0.866, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.000, 1.000, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, -0.000,
            0.500, 0.866, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.500, -0.866, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -0.500, -0.866, 0.000,
            -0.500, -0.866, 0.000,
            -0.866, -0.500, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.500, 0.866, 0.000,
            0.866, 0.500, 0.000,
            0.866, 0.500, 0.000,
            0.500, 0.866, 0.000,
            0.500, 0.866, 0.000,
            0.866, 0.500, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.866, -0.500, 0.000,
            -0.866, -0.500, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.866, 0.500, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            0.866, 0.500, 0.000,
            0.866, 0.500, 0.000,
            1.000, 0.000, 0.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
               0.000, 0.000, -1.000
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
