function create_geometry_21(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -632.858, 6264.669, -6503.188,
            -652.342, 6273.236, -6533.639,
            -640.651, 6278.377, -6551.910,
            -640.651, 6278.377, -6551.910,
            -652.342, 6273.236, -6533.639,
            -1248.537, 6278.377, -6551.910,
            -652.342, 6273.236, -6533.639,
            -1236.847, 6273.237, -6533.639,
            -1248.537, 6278.377, -6551.910,
            -1248.537, 6278.377, -6551.910,
            -1236.847, 6273.237, -6533.639,
            -1268.021, 6269.808, -6521.458,
            -1236.847, 6273.237, -6533.639,
            -1256.331, 6264.669, -6503.188,
            -1268.021, 6269.808, -6521.458,
            -1268.021, 6269.808, -6521.458,
            -1256.331, 6264.669, -6503.188,
            -1268.021, 6172.744, -6176.459,
            -1256.331, 6264.669, -6503.188,
            -1256.330, 6177.887, -6194.729,
            -1268.021, 6172.744, -6176.459,
            -1268.021, 6172.744, -6176.459,
            -1256.330, 6177.887, -6194.729,
            -1248.537, 6164.179, -6146.008,
            -1256.330, 6177.887, -6194.729,
            -1236.847, 6169.319, -6164.278,
            -1248.537, 6164.179, -6146.008,
            -1248.537, 6164.179, -6146.008,
            -1236.847, 6169.319, -6164.278,
            -640.651, 6164.179, -6146.008,
            -1236.847, 6169.319, -6164.278,
            -652.342, 6169.319, -6164.278,
            -640.651, 6164.179, -6146.008,
            -640.651, 6164.179, -6146.008,
            -652.342, 6169.319, -6164.278,
            -621.168, 6172.746, -6176.459,
            -652.342, 6169.319, -6164.278,
            -632.858, 6177.887, -6194.729,
            -621.168, 6172.746, -6176.459,
            -621.168, 6172.746, -6176.459,
            -632.858, 6177.887, -6194.729,
            -621.168, 6269.810, -6521.458,
            -632.858, 6177.887, -6194.729,
            -632.858, 6264.669, -6503.188,
            -621.168, 6269.810, -6521.458,
            -621.168, 6269.810, -6521.458,
            -632.858, 6264.669, -6503.188,
            -640.651, 6278.377, -6551.910,
            -621.168, 6342.762, -6190.645,
            -640.651, 6334.195, -6160.193,
            -640.651, 6164.179, -6146.008,
            -621.168, 6342.762, -6190.645,
            -640.651, 6164.179, -6146.008,
            -621.168, 6172.746, -6176.459,
            -621.168, 6269.810, -6521.458,
            -640.651, 6448.393, -6566.096,
            -621.168, 6439.826, -6535.644,
            -640.651, 6278.377, -6551.910,
            -640.651, 6448.393, -6566.096,
            -621.168, 6269.810, -6521.458,
            -621.168, 6269.810, -6521.458,
            -621.168, 6439.826, -6535.644,
            -621.168, 6342.762, -6190.645,
            -621.168, 6269.810, -6521.458,
            -621.168, 6342.762, -6190.645,
            -621.168, 6172.746, -6176.459,
            -1268.021, 6342.763, -6190.645,
            -1248.537, 6164.179, -6146.008,
            -1248.537, 6334.195, -6160.194,
            -1268.021, 6342.763, -6190.645,
            -1268.021, 6172.744, -6176.459,
            -1248.537, 6164.179, -6146.008,
            -1268.021, 6439.826, -6535.644,
            -1268.021, 6269.808, -6521.458,
            -1268.021, 6172.744, -6176.459,
            -1268.021, 6439.826, -6535.644,
            -1268.021, 6172.744, -6176.459,
            -1268.021, 6342.763, -6190.645,
            -1248.537, 6448.393, -6566.096,
            -1268.021, 6269.808, -6521.458,
            -1268.021, 6439.826, -6535.644,
            -1268.021, 6269.808, -6521.458,
            -1248.537, 6448.393, -6566.096,
            -1248.537, 6278.377, -6551.910,
            -640.651, 6278.377, -6551.910,
            -1248.537, 6278.377, -6551.910,
            -1248.537, 6448.393, -6566.096,
            -1248.537, 6448.393, -6566.096,
            -640.651, 6448.393, -6566.096,
            -640.651, 6278.377, -6551.910,
            -640.651, 6164.179, -6146.008,
            -640.651, 6334.195, -6160.193,
            -1248.537, 6164.179, -6146.008,
            -640.651, 6334.195, -6160.193,
            -1248.537, 6334.195, -6160.194,
               -1248.537, 6164.179, -6146.008
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.844, 0.000, 0.536,
            0.844, 0.000, 0.536,
            0.844, 0.000, 0.536,
            0.844, 0.000, 0.536,
            0.844, 0.000, 0.536,
            0.844, 0.000, 0.536,
            0.844, -0.000, -0.536,
            0.844, -0.000, -0.536,
            0.844, -0.000, -0.536,
            0.844, -0.000, -0.536,
            0.844, -0.000, -0.536,
            0.844, -0.000, -0.536,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            -0.844, 0.000, 0.536,
            -0.844, 0.000, 0.536,
            -0.844, 0.000, 0.536,
            -0.844, 0.000, 0.536,
            -0.844, 0.000, 0.536,
            -0.844, 0.000, 0.536,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
            -0.000, 0.000, 1.000,
               -0.000, 0.000, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               1.000, 0.083,
               1.000, 0.000,
               0.969, 0.999,
               0.969, 0.999,
               1.000, 0.000,
               0.031, 0.999,
               1.000, 0.000,
               1.000, 0.000,
               0.031, 0.999,
               0.031, 0.999,
               1.000, 0.000,
               0.000, 0.999,
               1.000, 0.000,
               1.000, 0.083,
               0.000, 0.999,
               0.000, 0.999,
               1.000, 0.083,
               0.999, 0.925,
               1.000, 0.083,
               1.000, 0.917,
               0.999, 0.925,
               0.999, 0.925,
               1.000, 0.917,
               0.969, 0.999,
               1.000, 0.917,
               1.000, 1.000,
               0.969, 0.999,
               0.969, 0.999,
               1.000, 1.000,
               0.031, 0.999,
               1.000, 1.000,
               1.000, 1.000,
               0.031, 0.999,
               0.031, 0.999,
               1.000, 1.000,
               0.001, 0.925,
               1.000, 1.000,
               1.000, 0.917,
               0.001, 0.925,
               0.001, 0.925,
               1.000, 0.917,
               0.001, 0.075,
               1.000, 0.917,
               1.000, 0.083,
               0.001, 0.075,
               0.001, 0.075,
               1.000, 0.083,
               0.969, 0.999,
               0.142, 0.925,
               0.031, 0.858,
               0.031, 0.999,
               0.142, 0.925,
               0.031, 0.999,
               0.001, 0.925,
               0.001, 0.075,
               0.969, 0.858,
               0.142, 0.075,
               0.969, 0.999,
               0.969, 0.858,
               0.001, 0.075,
               0.001, 0.075,
               0.142, 0.075,
               0.142, 0.925,
               0.001, 0.075,
               0.142, 0.925,
               0.001, 0.925,
               0.858, 0.925,
               0.969, 0.999,
               0.969, 0.858,
               0.858, 0.925,
               0.999, 0.925,
               0.969, 0.999,
               0.000, 0.858,
               0.000, 0.999,
               0.999, 0.925,
               0.000, 0.858,
               0.999, 0.925,
               0.858, 0.925,
               0.031, 0.858,
               0.000, 0.999,
               0.000, 0.858,
               0.000, 0.999,
               0.031, 0.858,
               0.031, 0.999,
               0.969, 0.999,
               0.031, 0.999,
               0.031, 0.858,
               0.031, 0.858,
               0.969, 0.858,
               0.969, 0.999,
               0.031, 0.999,
               0.031, 0.858,
               0.969, 0.999,
               0.031, 0.858,
               0.969, 0.858,
               0.969, 0.999
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_ROST03.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -652.342, 6169.319, -6164.278,
            -632.866, 6347.903, -6208.916,
            -632.858, 6177.887, -6194.729,
            -652.342, 6169.319, -6164.278,
            -652.349, 6339.335, -6178.464,
            -632.866, 6347.903, -6208.916,
            -652.349, 6442.803, -6546.228,
            -632.858, 6264.669, -6503.188,
            -632.866, 6434.236, -6515.776,
            -652.342, 6273.236, -6533.639,
            -632.858, 6264.669, -6503.188,
            -652.349, 6442.803, -6546.228,
            -1236.855, 6339.335, -6178.464,
            -652.342, 6169.319, -6164.278,
            -1236.847, 6169.319, -6164.278,
            -1236.855, 6339.335, -6178.464,
            -652.349, 6339.335, -6178.464,
            -652.342, 6169.319, -6164.278,
            -1256.330, 6177.887, -6194.729,
            -1236.855, 6339.335, -6178.464,
            -1236.847, 6169.319, -6164.278,
            -1256.330, 6177.887, -6194.729,
            -1256.338, 6347.903, -6208.916,
            -1236.855, 6339.335, -6178.464,
            -1256.338, 6434.236, -6515.776,
            -1236.847, 6273.237, -6533.639,
            -1236.855, 6442.803, -6546.228,
            -1236.847, 6273.237, -6533.639,
            -1256.338, 6434.236, -6515.776,
            -1256.331, 6264.669, -6503.188,
            -652.349, 6442.803, -6546.228,
            -1236.855, 6442.803, -6546.228,
            -1236.847, 6273.237, -6533.639,
            -1236.847, 6273.237, -6533.639,
            -652.342, 6273.236, -6533.639,
            -652.349, 6442.803, -6546.228,
            -1256.338, 6347.903, -6208.916,
            -1256.330, 6177.887, -6194.729,
            -1256.331, 6264.669, -6503.188,
            -1256.338, 6347.903, -6208.916,
            -1256.331, 6264.669, -6503.188,
            -1256.338, 6434.236, -6515.776,
            -632.858, 6177.887, -6194.729,
            -632.866, 6347.903, -6208.916,
            -632.866, 6434.236, -6515.776,
            -632.858, 6177.887, -6194.729,
            -632.866, 6434.236, -6515.776,
               -632.858, 6264.669, -6503.188
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.003, 0.536,
            -0.844, -0.005, 0.536,
            -0.844, -0.003, 0.537,
            -0.844, -0.005, 0.536,
            -0.844, -0.005, 0.536,
            -0.844, -0.003, 0.536,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.844, 0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, -0.003, 0.537,
            0.844, -0.005, 0.536,
            0.844, -0.003, 0.536,
            0.844, -0.005, 0.536,
            0.844, -0.003, 0.537,
            0.844, -0.005, 0.536,
            0.000, -0.006, 1.000,
            0.000, -0.006, 1.000,
            0.000, -0.010, 1.000,
            0.000, -0.010, 1.000,
            0.000, -0.010, 1.000,
            0.000, -0.006, 1.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, 0.000,
            1.000, 0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
            -1.000, -0.000, -0.000,
               -1.000, -0.000, -0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0x2205FF,
            shininess: 1.072,
            ambient: 0x191919,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -1236.848, 7474.546, -6630.745,
            -1236.855, 6442.803, -6546.228,
            -652.349, 6442.803, -6546.228,
            -652.342, 7474.546, -6630.746,
            -1236.848, 7474.546, -6630.745,
               -652.349, 6442.803, -6546.228
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.002, 1.000,
            0.000, -0.006, 1.000,
            0.000, -0.006, 1.000,
            0.000, -0.002, 1.000,
            0.000, -0.002, 1.000,
               0.000, -0.006, 1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.049, 0.053,
               0.951, 0.858,
               0.049, 0.858,
               0.951, 0.053,
               0.049, 0.053,
               0.049, 0.858
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_HANGARBU.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -1236.847, 7371.527, -6264.580,
            -1236.855, 6339.335, -6178.464,
            -1256.338, 6347.903, -6208.916,
            -1256.338, 6347.903, -6208.916,
            -1256.331, 7380.095, -6295.031,
            -1236.847, 7371.527, -6264.580,
            -632.859, 7380.095, -6295.031,
            -632.866, 6347.903, -6208.916,
            -652.342, 7371.527, -6264.579,
            -652.342, 7371.527, -6264.579,
            -632.866, 6347.903, -6208.916,
            -652.349, 6339.335, -6178.464,
            -1236.847, 7371.527, -6264.580,
            -1256.331, 7380.095, -6295.031,
            -632.859, 7380.095, -6295.031,
            -632.859, 7380.095, -6295.031,
            -652.342, 7371.527, -6264.579,
            -1236.847, 7371.527, -6264.580,
            -1236.848, 7474.546, -6630.745,
            -1256.338, 6434.236, -6515.776,
            -1236.855, 6442.803, -6546.228,
            -1256.338, 6434.236, -6515.776,
            -1236.848, 7474.546, -6630.745,
            -1256.331, 7466.428, -6601.891,
            -632.859, 7466.428, -6601.891,
            -652.342, 7474.546, -6630.746,
            -632.866, 6434.236, -6515.776,
            -652.342, 7474.546, -6630.746,
            -652.349, 6442.803, -6546.228,
            -632.866, 6434.236, -6515.776,
            -1236.848, 7474.546, -6630.745,
            -632.859, 7466.428, -6601.891,
            -1256.331, 7466.428, -6601.891,
            -632.859, 7466.428, -6601.891,
            -1236.848, 7474.546, -6630.745,
               -652.342, 7474.546, -6630.746
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.844, -0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, 0.000, -0.536,
            0.844, -0.000, -0.536,
            0.844, -0.000, -0.536,
            -0.844, 0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, 0.000, -0.536,
            -0.844, 0.000, -0.536,
            -0.844, -0.000, -0.536,
            -0.844, -0.000, -0.536,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.831, -0.000, 0.557,
            0.844, -0.003, 0.537,
            0.844, -0.003, 0.536,
            0.844, -0.003, 0.537,
            0.831, -0.000, 0.557,
            0.830, -0.000, 0.557,
            -0.830, 0.000, 0.557,
            -0.831, -0.000, 0.557,
            -0.844, -0.003, 0.537,
            -0.831, -0.000, 0.557,
            -0.844, -0.003, 0.536,
            -0.844, -0.003, 0.537,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
               0.000, -1.000, 0.000
            ])
         }
         };

         material = new THREE.MeshPhongMaterial({
            color: 0xFCFF00,
            shininess: 1.072,
            ambient: 0x191919,
            side: THREE.FrontSide,
            specular: 0xE5E5E5
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -1256.331, 7380.095, -6295.031,
            -632.859, 7466.428, -6601.891,
            -632.859, 7380.095, -6295.031,
            -632.859, 7466.428, -6601.891,
            -1256.331, 7380.095, -6295.031,
            -1256.331, 7466.428, -6601.891,
            -1256.331, 7380.095, -6295.031,
            -1256.338, 6347.903, -6208.916,
            -1256.338, 6434.236, -6515.776,
            -1256.331, 7380.095, -6295.031,
            -1256.338, 6434.236, -6515.776,
            -1256.331, 7466.428, -6601.891,
            -632.859, 7380.095, -6295.031,
            -632.859, 7466.428, -6601.891,
            -632.866, 6434.236, -6515.776,
            -632.859, 7380.095, -6295.031,
            -632.866, 6434.236, -6515.776,
               -632.866, 6347.903, -6208.916
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, 0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            1.000, -0.000, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, -0.000,
            -1.000, 0.000, -0.000,
               -1.000, 0.000, -0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               1.000, 0.880,
               0.000, 0.124,
               0.000, 0.880,
               0.000, 0.124,
               1.000, 0.880,
               1.000, 0.124,
               1.000, 0.880,
               0.001, 0.917,
               0.001, 0.087,
               1.000, 0.880,
               0.001, 0.087,
               1.000, 0.124,
               0.000, 0.880,
               0.000, 0.124,
               0.001, 0.087,
               0.000, 0.880,
               0.001, 0.087,
               0.001, 0.917
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_BODYHULL.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -1236.847, 7371.527, -6264.580,
            -652.349, 6339.335, -6178.464,
            -1236.855, 6339.335, -6178.464,
            -652.342, 7371.527, -6264.579,
            -652.349, 6339.335, -6178.464,
               -1236.847, 7371.527, -6264.580
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
            0.000, -0.000, -1.000,
               0.000, -0.000, -1.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.049, 0.955,
               0.951, 0.858,
               0.049, 0.858,
               0.951, 0.955,
               0.951, 0.858,
               0.049, 0.955
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_BODYHULL.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
