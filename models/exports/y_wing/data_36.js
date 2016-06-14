function create_geometry_36(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            297.821, -21.802, 15.319,
            312.329, -21.802, 29.827,
            309.866, -43.015, 17.171,
            298.891, -43.605, 8.841,
            297.821, -21.802, 15.319,
            309.866, -43.015, 17.171,
            294.037, -25.061, 19.103,
            308.545, -25.061, 33.611,
            312.329, -21.802, 29.827,
            297.821, -21.802, 15.319,
            294.037, -25.061, 19.103,
            312.329, -21.802, 29.827,
            294.246, -28.227, 18.893,
            308.754, -28.227, 33.402,
            308.545, -25.061, 33.611,
            294.037, -25.061, 19.103,
            294.246, -28.227, 18.893,
            308.545, -25.061, 33.611,
            295.771, -38.801, 17.368,
            310.279, -38.801, 31.877,
            308.754, -28.227, 33.402,
            294.246, -28.227, 18.893,
            295.771, -38.801, 17.368,
            308.754, -28.227, 33.402,
            297.479, -47.974, 15.661,
            311.987, -47.974, 30.169,
            310.279, -38.801, 31.877,
            295.771, -38.801, 17.368,
            297.479, -47.974, 15.661,
            310.279, -38.801, 31.877,
            299.519, -57.039, 13.620,
            314.027, -57.039, 28.128,
            311.987, -47.974, 30.169,
            297.479, -47.974, 15.661,
            299.519, -57.039, 13.620,
            311.987, -47.974, 30.169,
            301.434, -62.578, 12.526,
            315.121, -62.578, 26.213,
            314.027, -57.039, 28.128,
            299.519, -57.039, 13.620,
            301.434, -62.578, 12.526,
            314.027, -57.039, 28.128,
            306.207, -65.395, 8.153,
            319.495, -65.395, 21.441,
            315.121, -62.578, 26.213,
            301.434, -62.578, 12.526,
            306.207, -65.395, 8.153,
            315.121, -62.578, 26.213,
            319.061, -43.375, 27.853,
            312.329, -21.802, 29.827,
            315.121, -62.578, 26.213,
            315.121, -62.578, 26.213,
            312.329, -21.802, 29.827,
            314.027, -57.039, 28.128,
            314.027, -57.039, 28.128,
            312.329, -21.802, 29.827,
            311.987, -47.974, 30.169,
            311.987, -47.974, 30.169,
            312.329, -21.802, 29.827,
            310.279, -38.801, 31.877,
            310.279, -38.801, 31.877,
            312.329, -21.802, 29.827,
            308.754, -28.227, 33.402,
            312.329, -21.802, 29.827,
            308.545, -25.061, 33.611,
            308.754, -28.227, 33.402,
            297.821, -21.802, 15.319,
            298.891, -43.605, 8.841,
            301.434, -62.578, 12.526,
            297.821, -21.802, 15.319,
            301.434, -62.578, 12.526,
            299.519, -57.039, 13.620,
            297.821, -21.802, 15.319,
            299.519, -57.039, 13.620,
            297.479, -47.974, 15.661,
            297.821, -21.802, 15.319,
            297.479, -47.974, 15.661,
            295.771, -38.801, 17.368,
            297.821, -21.802, 15.319,
            295.771, -38.801, 17.368,
            294.246, -28.227, 18.893,
            294.037, -25.061, 19.103,
            297.821, -21.802, 15.319,
            294.246, -28.227, 18.893,
            319.061, -43.375, 27.853,
            309.866, -43.015, 17.171,
            312.329, -21.802, 29.827,
            319.495, -65.395, 21.441,
            306.207, -65.395, 8.153,
            309.866, -43.015, 17.171,
            319.495, -65.395, 21.441,
            319.061, -43.375, 27.853,
            315.121, -62.578, 26.213,
            319.495, -65.395, 21.441,
            309.866, -43.015, 17.171,
            319.061, -43.375, 27.853,
            306.207, -65.395, 8.153,
            298.891, -43.605, 8.841,
            309.866, -43.015, 17.171,
            306.207, -65.395, 8.153,
            301.434, -62.578, 12.526,
               298.891, -43.605, 8.841
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.632, 0.334, 0.699,
            -0.661, 0.355, 0.661,
            -0.610, 0.320, 0.725,
            -0.568, 0.292, 0.769,
            -0.632, 0.334, 0.699,
            -0.610, 0.320, 0.725,
            0.389, 0.835, -0.389,
            0.389, 0.835, -0.389,
            0.389, 0.835, -0.389,
            0.389, 0.835, -0.389,
            0.389, 0.835, -0.389,
            0.389, 0.835, -0.389,
            0.701, -0.128, -0.701,
            0.701, -0.128, -0.701,
            0.701, -0.128, -0.701,
            0.701, -0.128, -0.701,
            0.701, -0.128, -0.701,
            0.701, -0.128, -0.701,
            0.687, -0.234, -0.687,
            0.687, -0.234, -0.687,
            0.687, -0.234, -0.687,
            0.687, -0.234, -0.687,
            0.687, -0.234, -0.687,
            0.687, -0.234, -0.687,
            0.677, -0.288, -0.677,
            0.677, -0.288, -0.677,
            0.677, -0.288, -0.677,
            0.677, -0.288, -0.677,
            0.677, -0.288, -0.677,
            0.677, -0.288, -0.677,
            0.666, -0.336, -0.666,
            0.666, -0.336, -0.666,
            0.666, -0.336, -0.666,
            0.666, -0.336, -0.666,
            0.666, -0.336, -0.666,
            0.666, -0.336, -0.666,
            0.651, -0.391, -0.651,
            0.651, -0.391, -0.651,
            0.651, -0.391, -0.651,
            0.651, -0.391, -0.651,
            0.651, -0.391, -0.651,
            0.651, -0.391, -0.651,
            0.260, -0.930, -0.260,
            0.260, -0.930, -0.260,
            0.260, -0.930, -0.260,
            0.260, -0.930, -0.260,
            0.260, -0.930, -0.260,
            0.260, -0.930, -0.260,
            -0.014, -0.112, -0.994,
            -0.623, -0.019, -0.782,
            -0.531, -0.047, -0.846,
            -0.531, -0.047, -0.846,
            -0.623, -0.019, -0.782,
            -0.882, 0.030, -0.471,
            -0.882, 0.030, -0.471,
            -0.623, -0.019, -0.782,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.623, -0.019, -0.782,
            -0.707, -0.000, -0.707,
            -0.707, -0.000, -0.707,
            -0.623, -0.019, -0.782,
            -0.707, 0.000, -0.707,
            -0.623, -0.019, -0.782,
            -0.707, 0.000, -0.707,
            -0.707, 0.000, -0.707,
            0.794, -0.021, 0.608,
            0.978, -0.127, -0.167,
            0.885, -0.058, 0.461,
            0.794, -0.021, 0.608,
            0.885, -0.058, 0.461,
            0.471, 0.030, 0.882,
            0.794, -0.021, 0.608,
            0.471, 0.030, 0.882,
            0.707, 0.000, 0.707,
            0.794, -0.021, 0.608,
            0.707, 0.000, 0.707,
            0.707, 0.000, 0.707,
            0.794, -0.021, 0.608,
            0.707, 0.000, 0.707,
            0.707, -0.000, 0.707,
            0.707, 0.000, 0.707,
            0.794, -0.021, 0.608,
            0.707, -0.000, 0.707,
            -0.724, 0.318, 0.612,
            -0.724, 0.318, 0.612,
            -0.724, 0.318, 0.612,
            -0.693, 0.201, 0.693,
            -0.693, 0.201, 0.693,
            -0.693, 0.201, 0.693,
            -0.667, -0.199, -0.718,
            -0.667, -0.199, -0.718,
            -0.667, -0.199, -0.718,
            -0.741, 0.234, 0.630,
            -0.741, 0.234, 0.630,
            -0.741, 0.234, 0.630,
            -0.576, 0.254, 0.777,
            -0.576, 0.254, 0.777,
            -0.576, 0.254, 0.777,
            0.721, -0.225, 0.655,
            0.721, -0.225, 0.655,
               0.721, -0.225, 0.655
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
