function create_geometry_15(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -7.247, 4.633, 0.021,
            -7.889, 4.841, -0.071,
            -8.119, 5.063, -0.162,
            -7.247, 4.633, 0.021,
            -8.119, 5.063, -0.162,
            -8.158, 5.254, -0.283,
            -7.247, 4.633, 0.021,
            -8.158, 5.254, -0.283,
            -8.158, 5.254, -0.333,
            -7.247, 4.633, 0.021,
            -8.158, 5.254, -0.333,
            -8.158, 5.254, -1.333,
            -7.247, 4.633, 0.021,
            -8.158, 5.254, -1.333,
            -8.158, 5.254, -1.383,
            -7.247, 4.633, 0.021,
            -8.158, 5.254, -1.383,
            -8.119, 5.063, -1.504,
            -7.247, 4.633, 0.021,
            -8.119, 5.063, -1.504,
            -7.889, 4.841, -1.595,
            -7.247, 4.633, 0.021,
            -7.889, 4.841, -1.595,
            -7.247, 4.633, -1.688,
            -7.247, 4.633, 0.021,
            -7.247, 4.633, -1.688,
            -6.834, 4.551, -1.786,
            -7.247, 4.633, 0.021,
            -6.834, 4.551, -1.786,
            -6.834, 4.551, 0.120,
            -5.421, 0.718, -1.802,
            -5.327, 0.718, -1.829,
            -5.327, -0.932, -1.699,
            -5.421, 0.718, -1.802,
            -5.327, -0.932, -1.699,
            -5.768, -0.566, -1.639,
            -5.421, 0.718, -1.802,
            -5.768, -0.566, -1.639,
            -6.077, -0.132, -1.620,
            -5.421, 0.718, -1.802,
            -6.077, -0.132, -1.620,
            -6.027, -0.032, -1.638,
            -5.421, 0.718, -1.802,
            -6.027, -0.032, -1.638,
            -6.027, 0.467, -1.681,
            -5.421, 0.718, -1.802,
            -6.027, 0.467, -1.681,
            -6.010, 0.718, -1.701,
            -6.010, 0.718, -1.891,
            -5.421, 0.718, -1.992,
            -5.421, 0.718, -1.802,
            -6.010, 0.718, -1.891,
            -5.421, 0.718, -1.802,
            -6.010, 0.718, -1.701,
            -6.077, -0.132, -1.620,
            -5.768, -0.566, -1.639,
            -5.768, -0.566, -1.819,
            -6.077, -0.132, -1.620,
            -5.768, -0.566, -1.819,
            -6.077, -0.132, -1.805,
            -6.077, -0.132, -1.809,
            -6.027, -0.032, -1.827,
            -6.027, -0.032, -1.638,
            -6.077, -0.132, -1.809,
            -6.027, -0.032, -1.638,
            -6.077, -0.132, -1.620,
            -6.027, 0.467, -1.681,
            -6.027, -0.032, -1.638,
            -6.027, -0.032, -1.826,
            -6.027, 0.467, -1.681,
            -6.027, -0.032, -1.826,
            -6.027, 0.467, -1.871,
            -5.327, 0.718, -2.005,
            -5.327, -0.691, -1.885,
            -5.327, -0.932, -1.856,
            -5.327, 0.718, -2.005,
            -5.327, -0.932, -1.856,
            -5.327, -0.932, -1.699,
            -5.327, 0.718, -2.005,
            -5.327, -0.932, -1.699,
            -5.327, 0.718, -1.829,
            -5.327, -0.932, -1.699,
            -5.327, -0.932, -1.856,
            -5.488, -0.799, -1.846,
            -5.327, -0.932, -1.699,
            -5.488, -0.799, -1.846,
            -5.768, -0.566, -1.821,
            -5.327, -0.932, -1.699,
            -5.768, -0.566, -1.821,
            -5.768, -0.566, -1.639,
            -6.027, 0.467, -1.871,
            -6.010, 0.718, -1.891,
            -6.010, 0.718, -1.701,
            -6.027, 0.467, -1.871,
            -6.010, 0.718, -1.701,
            -6.027, 0.467, -1.681,
            -7.247, 1.602, -1.688,
            -7.869, 1.394, -1.595,
            -8.119, 1.212, -1.504,
            -7.247, 1.602, -1.688,
            -8.119, 1.212, -1.504,
            -8.178, 1.021, -1.383,
            -6.834, 1.684, -1.786,
            -7.247, 1.602, -1.688,
            -8.178, 1.021, -1.383,
            -6.834, 1.684, -1.786,
            -8.178, 1.021, -1.383,
            -8.178, 1.021, -1.333,
            -6.834, 1.684, -1.786,
            -8.178, 1.021, -1.333,
            -8.178, 1.021, -0.333,
            -6.834, 1.684, -1.786,
            -8.178, 1.021, -0.333,
            -8.178, 1.021, -0.283,
            -6.834, 1.684, -1.786,
            -8.178, 1.021, -0.283,
            -8.119, 1.212, -0.162,
            -6.834, 1.684, -1.786,
            -8.119, 1.212, -0.162,
            -7.869, 1.394, -0.071,
            -6.834, 1.684, -1.786,
            -7.869, 1.394, -0.071,
            -7.247, 1.602, 0.021,
            -6.834, 1.684, -1.786,
            -7.247, 1.602, 0.021,
            -6.834, 1.684, 0.120,
            -8.165, 0.970, -1.333,
            -7.884, 1.079, -1.283,
            -7.884, 1.079, -0.433,
            -8.165, 0.970, -1.333,
            -7.884, 1.079, -0.433,
            -8.166, 0.973, -0.333,
            -8.178, 1.021, -1.333,
            -8.165, 0.970, -1.333,
            -8.166, 0.973, -0.333,
            -8.178, 1.021, -1.333,
            -8.166, 0.973, -0.333,
            -8.178, 1.021, -0.333,
            -7.864, 5.196, -0.433,
            -7.864, 5.196, -1.283,
            -8.151, 5.284, -1.333,
            -7.864, 5.196, -0.433,
            -8.151, 5.284, -1.333,
            -8.150, 5.288, -0.333,
            -8.151, 5.284, -1.333,
            -8.158, 5.254, -1.333,
            -8.158, 5.254, -0.333,
            -8.151, 5.284, -1.333,
            -8.158, 5.254, -0.333,
            -8.150, 5.288, -0.333,
            7.992, 4.633, -1.688,
            8.714, 4.881, -1.595,
            8.885, 5.083, -1.504,
            7.992, 4.633, -1.688,
            8.885, 5.083, -1.504,
            8.904, 5.214, -1.383,
            7.580, 4.551, -1.786,
            7.992, 4.633, -1.688,
            8.904, 5.214, -1.383,
            7.580, 4.551, -1.786,
            8.904, 5.214, -1.383,
            8.904, 5.214, -1.333,
            7.580, 4.551, -1.786,
            8.904, 5.214, -1.333,
            8.904, 5.214, -0.333,
            7.580, 4.551, -1.786,
            8.904, 5.214, -0.333,
            8.904, 5.214, -0.283,
            7.580, 4.551, -1.786,
            8.904, 5.214, -0.283,
            8.885, 5.083, -0.162,
            7.580, 4.551, -1.786,
            8.885, 5.083, -0.162,
            8.714, 4.881, -0.071,
            7.580, 4.551, -1.786,
            8.714, 4.881, -0.071,
            7.992, 4.633, 0.021,
            7.580, 4.551, -1.786,
            7.992, 4.633, 0.021,
            7.580, 4.551, 0.120,
            8.894, 5.251, -1.333,
            8.609, 5.156, -1.283,
            8.609, 5.156, -0.433,
            8.894, 5.251, -1.333,
            8.609, 5.156, -0.433,
            8.895, 5.248, -0.333,
            8.904, 5.214, -0.333,
            8.904, 5.214, -1.333,
            8.894, 5.251, -1.333,
            8.904, 5.214, -0.333,
            8.894, 5.251, -1.333,
            8.895, 5.248, -0.333,
            7.580, 1.684, 0.120,
            8.212, 1.542, 0.021,
            8.694, 1.374, -0.071,
            7.580, 1.684, 0.120,
            8.694, 1.374, -0.071,
            8.885, 1.172, -0.162,
            7.580, 1.684, 0.120,
            8.885, 1.172, -0.162,
            8.904, 1.061, -0.283,
            7.580, 1.684, 0.120,
            8.904, 1.061, -0.283,
            8.904, 1.061, -0.333,
            7.580, 1.684, 0.120,
            8.904, 1.061, -0.333,
            8.904, 1.061, -1.333,
            7.580, 1.684, 0.120,
            8.904, 1.061, -1.333,
            8.904, 1.061, -1.383,
            7.580, 1.684, 0.120,
            8.904, 1.061, -1.383,
            8.885, 1.172, -1.504,
            7.580, 1.684, 0.120,
            8.885, 1.172, -1.504,
            8.694, 1.374, -1.595,
            7.580, 1.684, 0.120,
            8.694, 1.374, -1.595,
            8.212, 1.542, -1.688,
            7.580, 1.684, 0.120,
            8.212, 1.542, -1.688,
            7.580, 1.684, -1.786,
            7.580, 1.684, 0.120,
            7.580, 1.684, -1.786,
            7.068, 1.786, -1.891,
            7.580, 1.684, 0.120,
            7.068, 1.786, -1.891,
            7.068, 1.786, 0.225,
            8.609, 1.079, -1.283,
            8.892, 1.027, -1.333,
            8.890, 1.026, -0.333,
            8.609, 1.079, -1.283,
            8.890, 1.026, -0.333,
            8.609, 1.079, -0.433,
            8.890, 1.026, -0.333,
            8.892, 1.027, -1.333,
            8.904, 1.061, -1.333,
            8.890, 1.026, -0.333,
            8.904, 1.061, -1.333,
            8.904, 1.061, -0.333,
            -5.638, 9.128, -0.433,
            -5.638, 9.128, -1.283,
            -6.198, 8.510, -1.283,
            -5.638, 9.128, -0.433,
            -6.198, 8.510, -1.283,
            -6.198, 8.510, -0.433,
            -6.198, 8.510, -0.433,
            -6.198, 8.510, -1.283,
            -6.695, 7.840, -1.283,
            -6.198, 8.510, -0.433,
            -6.695, 7.840, -1.283,
            -6.695, 7.840, -0.433,
            -6.695, 7.840, -0.433,
            -6.695, 7.840, -1.283,
            -7.124, 7.124, -1.283,
            -6.695, 7.840, -0.433,
            -7.124, 7.124, -1.283,
            -7.124, 7.124, -0.433,
            -7.124, 7.124, -0.433,
            -7.124, 7.124, -1.283,
            -7.480, 6.370, -1.283,
            -7.124, 7.124, -0.433,
            -7.480, 6.370, -1.283,
            -7.480, 6.370, -0.433,
            -7.480, 6.370, -0.433,
            -7.480, 6.370, -1.283,
            -7.761, 5.585, -1.283,
            -7.480, 6.370, -0.433,
            -7.761, 5.585, -1.283,
            -7.761, 5.585, -0.433,
            -7.761, 5.585, -0.433,
            -7.761, 5.585, -1.283,
            -7.864, 5.196, -1.283,
            -7.761, 5.585, -0.433,
            -7.864, 5.196, -1.283,
            -7.864, 5.196, -0.433,
            -7.884, 1.079, -0.433,
            -7.884, 1.079, -1.283,
            -7.761, 0.650, -1.283,
            -7.884, 1.079, -0.433,
            -7.761, 0.650, -1.283,
            -7.761, 0.650, -0.433,
            -7.761, 0.650, -0.433,
            -7.761, 0.650, -1.283,
            -7.480, -0.135, -1.283,
            -7.761, 0.650, -0.433,
            -7.480, -0.135, -1.283,
            -7.480, -0.135, -0.433,
            -7.480, -0.135, -0.433,
            -7.480, -0.135, -1.283,
            -7.124, -0.889, -1.283,
            -7.480, -0.135, -0.433,
            -7.124, -0.889, -1.283,
            -7.124, -0.889, -0.433,
            -7.124, -0.889, -0.433,
            -7.124, -0.889, -1.283,
            -6.695, -1.605, -1.283,
            -7.124, -0.889, -0.433,
            -6.695, -1.605, -1.283,
            -6.695, -1.605, -0.433,
            7.440, -1.605, -0.433,
            7.440, -1.605, -1.283,
            7.869, -0.889, -1.283,
            7.440, -1.605, -0.433,
            7.869, -0.889, -1.283,
            7.869, -0.889, -0.433,
            7.869, -0.889, -0.433,
            7.869, -0.889, -1.283,
            8.226, -0.135, -1.283,
            7.869, -0.889, -0.433,
            8.226, -0.135, -1.283,
            8.226, -0.135, -0.433,
            8.226, -0.135, -0.433,
            8.226, -0.135, -1.283,
            8.507, 0.650, -1.283,
            8.226, -0.135, -0.433,
            8.507, 0.650, -1.283,
            8.507, 0.650, -0.433,
            8.507, 0.650, -0.433,
            8.507, 0.650, -1.283,
            8.609, 1.079, -1.283,
            8.507, 0.650, -0.433,
            8.609, 1.079, -1.283,
            8.609, 1.079, -0.433,
            8.609, 5.156, -0.433,
            8.609, 5.156, -1.283,
            8.507, 5.585, -1.283,
            8.609, 5.156, -0.433,
            8.507, 5.585, -1.283,
            8.507, 5.585, -0.433,
            8.507, 5.585, -0.433,
            8.507, 5.585, -1.283,
            8.226, 6.370, -1.283,
            8.507, 5.585, -0.433,
            8.226, 6.370, -1.283,
            8.226, 6.370, -0.433,
            8.226, 6.370, -0.433,
            8.226, 6.370, -1.283,
            7.869, 7.124, -1.283,
            8.226, 6.370, -0.433,
            7.869, 7.124, -1.283,
            7.869, 7.124, -0.433,
            7.869, 7.124, -0.433,
            7.869, 7.124, -1.283,
            7.440, 7.840, -1.283,
            7.869, 7.124, -0.433,
            7.440, 7.840, -1.283,
            7.440, 7.840, -0.433,
            7.440, 7.840, -0.433,
            7.440, 7.840, -1.283,
            6.943, 8.510, -1.283,
            7.440, 7.840, -0.433,
            6.943, 8.510, -1.283,
            6.943, 8.510, -0.433,
            6.943, 8.510, -0.433,
            6.943, 8.510, -1.283,
            6.383, 9.128, -1.283,
            6.943, 8.510, -0.433,
            6.383, 9.128, -1.283,
               6.383, 9.128, -0.433
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.336, -0.940, -0.062,
            0.015, -0.366, -0.930,
            -0.080, -0.525, -0.847,
            -0.336, -0.940, -0.062,
            -0.080, -0.525, -0.847,
            -0.478, -0.835, -0.272,
            -0.336, -0.940, -0.062,
            -0.478, -0.835, -0.272,
            -0.563, -0.826, 0.000,
            -0.336, -0.940, -0.062,
            -0.563, -0.826, 0.000,
            -0.563, -0.826, 0.000,
            -0.336, -0.940, -0.062,
            -0.563, -0.826, 0.000,
            -0.791, -0.549, 0.270,
            -0.336, -0.940, -0.062,
            -0.791, -0.549, 0.270,
            -0.767, -0.580, 0.275,
            -0.336, -0.940, -0.062,
            -0.767, -0.580, 0.275,
            -0.511, -0.855, 0.093,
            -0.336, -0.940, -0.062,
            -0.511, -0.855, 0.093,
            -0.246, -0.969, 0.000,
            -0.336, -0.940, -0.062,
            -0.246, -0.969, 0.000,
            -0.195, -0.981, 0.000,
            -0.336, -0.940, -0.062,
            -0.195, -0.981, 0.000,
            -0.195, -0.981, 0.000,
            -0.226, -0.076, -0.971,
            -0.283, -0.076, -0.956,
            -0.199, -0.072, -0.977,
            -0.226, -0.076, -0.971,
            -0.199, -0.072, -0.977,
            -0.186, -0.074, -0.980,
            -0.226, -0.076, -0.971,
            -0.186, -0.074, -0.980,
            -0.167, -0.081, -0.983,
            -0.226, -0.076, -0.971,
            -0.167, -0.081, -0.983,
            -0.138, -0.103, -0.985,
            -0.226, -0.076, -0.971,
            -0.138, -0.103, -0.985,
            -0.164, -0.078, -0.983,
            -0.226, -0.076, -0.971,
            -0.164, -0.078, -0.983,
            -0.168, -0.068, -0.983,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            0.814, 0.581, 0.000,
            0.737, 0.676, 0.000,
            0.814, 0.581, 0.000,
            0.814, 0.581, 0.000,
            0.814, 0.581, 0.000,
            0.814, 0.581, 0.000,
            0.894, -0.447, 0.000,
            0.894, -0.447, 0.000,
            0.969, -0.247, 0.000,
            0.894, -0.447, 0.000,
            0.969, -0.247, 0.000,
            0.894, -0.447, 0.000,
            0.999, -0.032, 0.000,
            0.969, -0.247, 0.000,
            1.000, -0.000, 0.000,
            0.999, -0.032, 0.000,
            1.000, -0.000, 0.000,
            0.999, -0.036, -0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.639, 0.769, 0.000,
            0.639, 0.769, 0.000,
            0.639, 0.769, 0.000,
            0.639, 0.769, 0.000,
            0.639, 0.769, 0.000,
            0.639, 0.769, 0.000,
            0.639, 0.769, 0.000,
            0.639, 0.769, 0.000,
            0.737, 0.676, 0.000,
            0.999, -0.036, -0.000,
            0.998, -0.068, -0.000,
            0.998, -0.068, -0.000,
            0.999, -0.036, -0.000,
            0.998, -0.068, -0.000,
            0.999, -0.032, 0.000,
            0.170, 0.229, 0.958,
            -0.031, 0.481, 0.876,
            -0.066, 0.543, 0.837,
            0.170, 0.229, 0.958,
            -0.066, 0.543, 0.837,
            -0.363, 0.884, 0.293,
            -0.367, 0.922, 0.120,
            0.170, 0.229, 0.958,
            -0.363, 0.884, 0.293,
            -0.367, 0.922, 0.120,
            -0.363, 0.884, 0.293,
            -0.443, 0.897, 0.000,
            -0.367, 0.922, 0.120,
            -0.443, 0.897, 0.000,
            -0.443, 0.897, 0.000,
            -0.367, 0.922, 0.120,
            -0.443, 0.897, 0.000,
            -0.674, 0.673, -0.306,
            -0.367, 0.922, 0.120,
            -0.674, 0.673, -0.306,
            -0.668, 0.664, -0.335,
            -0.367, 0.922, 0.120,
            -0.668, 0.664, -0.335,
            -0.452, 0.883, -0.123,
            -0.367, 0.922, 0.120,
            -0.452, 0.883, -0.123,
            -0.256, 0.967, -0.015,
            -0.367, 0.922, 0.120,
            -0.256, 0.967, -0.015,
            -0.195, 0.981, 0.000,
            0.360, -0.933, 0.001,
            0.363, -0.932, 0.000,
            0.355, -0.935, 0.003,
            0.360, -0.933, 0.001,
            0.355, -0.935, 0.003,
            0.353, -0.935, 0.003,
            -0.970, -0.243, -0.000,
            -0.970, -0.243, -0.000,
            -0.970, -0.243, -0.000,
            -0.970, -0.243, -0.000,
            -0.970, -0.243, -0.000,
            -0.970, -0.243, 0.000,
            0.303, 0.953, -0.003,
            0.295, 0.955, 0.000,
            0.297, 0.955, -0.001,
            0.303, 0.953, -0.003,
            0.297, 0.955, -0.001,
            0.305, 0.952, -0.003,
            -0.970, 0.243, 0.000,
            -0.970, 0.243, 0.000,
            -0.970, 0.243, 0.000,
            -0.970, 0.243, 0.000,
            -0.970, 0.243, 0.000,
            -0.970, 0.243, 0.000,
            -0.162, -0.243, 0.956,
            0.034, -0.435, 0.900,
            0.172, -0.645, 0.745,
            -0.162, -0.243, 0.956,
            0.172, -0.645, 0.745,
            0.382, -0.882, 0.278,
            0.371, -0.921, 0.124,
            -0.162, -0.243, 0.956,
            0.382, -0.882, 0.278,
            0.371, -0.921, 0.124,
            0.382, -0.882, 0.278,
            0.448, -0.894, 0.000,
            0.371, -0.921, 0.124,
            0.448, -0.894, 0.000,
            0.448, -0.894, 0.000,
            0.371, -0.921, 0.124,
            0.448, -0.894, 0.000,
            0.686, -0.656, -0.315,
            0.371, -0.921, 0.124,
            0.686, -0.656, -0.315,
            0.707, -0.602, -0.371,
            0.371, -0.921, 0.124,
            0.707, -0.602, -0.371,
            0.545, -0.814, -0.204,
            0.371, -0.921, 0.124,
            0.545, -0.814, -0.204,
            0.261, -0.965, -0.016,
            0.371, -0.921, 0.124,
            0.261, -0.965, -0.016,
            0.195, -0.981, 0.000,
            -0.315, 0.949, 0.001,
            -0.317, 0.948, 0.000,
            -0.309, 0.951, 0.003,
            -0.315, 0.949, 0.001,
            -0.309, 0.951, 0.003,
            -0.307, 0.952, 0.003,
            0.970, 0.243, -0.000,
            0.970, 0.243, 0.000,
            0.970, 0.243, -0.000,
            0.970, 0.243, -0.000,
            0.970, 0.243, -0.000,
            0.970, 0.243, -0.000,
            0.274, 0.961, -0.042,
            -0.086, 0.280, -0.956,
            -0.058, 0.363, -0.930,
            0.274, 0.961, -0.042,
            -0.058, 0.363, -0.930,
            0.114, 0.687, -0.718,
            0.274, 0.961, -0.042,
            0.114, 0.687, -0.718,
            0.352, 0.904, -0.241,
            0.274, 0.961, -0.042,
            0.352, 0.904, -0.241,
            0.426, 0.905, 0.000,
            0.274, 0.961, -0.042,
            0.426, 0.905, 0.000,
            0.426, 0.905, 0.000,
            0.274, 0.961, -0.042,
            0.426, 0.905, 0.000,
            0.660, 0.690, 0.295,
            0.274, 0.961, -0.042,
            0.660, 0.690, 0.295,
            0.681, 0.646, 0.344,
            0.274, 0.961, -0.042,
            0.681, 0.646, 0.344,
            0.522, 0.832, 0.189,
            0.274, 0.961, -0.042,
            0.522, 0.832, 0.189,
            0.277, 0.961, 0.021,
            0.274, 0.961, -0.042,
            0.277, 0.961, 0.021,
            0.206, 0.979, 0.000,
            0.274, 0.961, -0.042,
            0.206, 0.979, 0.000,
            0.195, 0.981, 0.000,
            0.274, 0.961, -0.042,
            0.195, 0.981, 0.000,
            0.195, 0.981, 0.000,
            -0.182, -0.983, -0.001,
            -0.181, -0.983, -0.001,
            -0.185, -0.983, -0.000,
            -0.182, -0.983, -0.001,
            -0.185, -0.983, -0.000,
            -0.186, -0.983, 0.000,
            0.930, -0.367, 0.000,
            0.945, -0.326, 0.002,
            0.945, -0.327, 0.002,
            0.930, -0.367, 0.000,
            0.945, -0.327, 0.002,
            0.930, -0.368, 0.000,
            -0.741, 0.672, 0.000,
            -0.741, 0.672, 0.000,
            -0.773, 0.634, 0.000,
            -0.741, 0.672, 0.000,
            -0.773, 0.634, 0.000,
            -0.773, 0.634, 0.000,
            -0.773, 0.634, 0.000,
            -0.773, 0.634, 0.000,
            -0.831, 0.556, 0.000,
            -0.773, 0.634, 0.000,
            -0.831, 0.556, 0.000,
            -0.831, 0.556, 0.000,
            -0.831, 0.556, 0.000,
            -0.831, 0.556, 0.000,
            -0.882, 0.471, 0.000,
            -0.831, 0.556, 0.000,
            -0.882, 0.471, 0.000,
            -0.882, 0.471, 0.000,
            -0.882, 0.471, 0.000,
            -0.882, 0.471, 0.000,
            -0.924, 0.383, 0.000,
            -0.882, 0.471, 0.000,
            -0.924, 0.383, 0.000,
            -0.924, 0.383, 0.000,
            -0.924, 0.383, 0.000,
            -0.924, 0.383, 0.000,
            -0.955, 0.296, 0.000,
            -0.924, 0.383, 0.000,
            -0.955, 0.296, 0.000,
            -0.955, 0.296, 0.000,
            -0.955, 0.296, 0.000,
            -0.955, 0.296, 0.000,
            -0.967, 0.255, 0.000,
            -0.955, 0.296, 0.000,
            -0.967, 0.255, 0.000,
            -0.967, 0.255, 0.000,
            -0.961, -0.275, 0.000,
            -0.961, -0.275, 0.000,
            -0.952, -0.306, 0.000,
            -0.961, -0.275, 0.000,
            -0.952, -0.306, 0.000,
            -0.952, -0.306, 0.000,
            -0.952, -0.306, 0.000,
            -0.952, -0.306, 0.000,
            -0.924, -0.383, 0.000,
            -0.952, -0.306, 0.000,
            -0.924, -0.383, 0.000,
            -0.924, -0.383, 0.000,
            -0.924, -0.383, 0.000,
            -0.924, -0.383, 0.000,
            -0.882, -0.471, 0.000,
            -0.924, -0.383, 0.000,
            -0.882, -0.471, 0.000,
            -0.882, -0.471, 0.000,
            -0.882, -0.471, 0.000,
            -0.882, -0.471, 0.000,
            -0.858, -0.514, 0.000,
            -0.882, -0.471, 0.000,
            -0.858, -0.514, 0.000,
            -0.858, -0.514, 0.000,
            0.858, -0.514, 0.000,
            0.858, -0.514, 0.000,
            0.882, -0.471, 0.000,
            0.858, -0.514, 0.000,
            0.882, -0.471, 0.000,
            0.882, -0.471, 0.000,
            0.882, -0.471, 0.000,
            0.882, -0.471, 0.000,
            0.924, -0.383, 0.000,
            0.882, -0.471, 0.000,
            0.924, -0.383, 0.000,
            0.924, -0.383, 0.000,
            0.924, -0.383, 0.000,
            0.924, -0.383, 0.000,
            0.958, -0.285, 0.000,
            0.924, -0.383, 0.000,
            0.958, -0.285, 0.000,
            0.958, -0.285, 0.000,
            0.958, -0.285, 0.000,
            0.958, -0.285, 0.000,
            0.973, -0.233, 0.000,
            0.958, -0.285, 0.000,
            0.973, -0.233, 0.000,
            0.973, -0.233, 0.000,
            0.973, 0.233, 0.000,
            0.973, 0.233, 0.000,
            0.958, 0.285, 0.000,
            0.973, 0.233, 0.000,
            0.958, 0.285, 0.000,
            0.958, 0.285, 0.000,
            0.958, 0.285, 0.000,
            0.958, 0.285, 0.000,
            0.924, 0.383, 0.000,
            0.958, 0.285, 0.000,
            0.924, 0.383, 0.000,
            0.924, 0.383, 0.000,
            0.924, 0.383, 0.000,
            0.924, 0.383, 0.000,
            0.882, 0.471, 0.000,
            0.924, 0.383, 0.000,
            0.882, 0.471, 0.000,
            0.882, 0.471, 0.000,
            0.882, 0.471, 0.000,
            0.882, 0.471, 0.000,
            0.831, 0.556, 0.000,
            0.882, 0.471, 0.000,
            0.831, 0.556, 0.000,
            0.831, 0.556, 0.000,
            0.831, 0.556, 0.000,
            0.831, 0.556, 0.000,
            0.773, 0.634, 0.000,
            0.831, 0.556, 0.000,
            0.773, 0.634, 0.000,
            0.773, 0.634, 0.000,
            0.773, 0.634, 0.000,
            0.773, 0.634, 0.000,
            0.741, 0.672, 0.000,
            0.773, 0.634, 0.000,
            0.741, 0.672, 0.000,
               0.741, 0.672, 0.000
            ])
         },
         uv: {
            itemSize: 2,
            array: new Float32Array([
               0.314, 0.907,
               0.300, 0.863,
               0.284, 0.820,
               0.314, 0.907,
               0.284, 0.820,
               0.271, 0.762,
               0.314, 0.907,
               0.271, 0.762,
               0.271, 0.738,
               0.314, 0.907,
               0.271, 0.738,
               0.271, 0.262,
               0.314, 0.907,
               0.271, 0.262,
               0.271, 0.238,
               0.314, 0.907,
               0.271, 0.238,
               0.284, 0.180,
               0.314, 0.907,
               0.284, 0.180,
               0.300, 0.137,
               0.314, 0.907,
               0.300, 0.137,
               0.314, 0.093,
               0.314, 0.907,
               0.314, 0.093,
               0.320, 0.046,
               0.314, 0.907,
               0.320, 0.046,
               0.320, 0.954,
               0.587, 0.038,
               0.587, 0.025,
               0.702, 0.087,
               0.587, 0.038,
               0.702, 0.087,
               0.676, 0.116,
               0.587, 0.038,
               0.676, 0.116,
               0.646, 0.125,
               0.587, 0.038,
               0.646, 0.125,
               0.639, 0.116,
               0.587, 0.038,
               0.639, 0.116,
               0.604, 0.096,
               0.587, 0.038,
               0.604, 0.096,
               0.587, 0.086,
               0.000, -0.004,
               0.000, -0.052,
               0.139, 0.038,
               0.000, -0.004,
               0.139, 0.038,
               0.000, 0.086,
               0.646, 0.125,
               0.676, 0.116,
               0.676, 0.030,
               0.646, 0.125,
               0.676, 0.030,
               0.646, 0.037,
               0.646, 0.035,
               0.639, 0.026,
               0.639, 0.116,
               0.646, 0.035,
               0.639, 0.116,
               0.646, 0.125,
               0.604, 0.096,
               0.639, 0.116,
               0.639, 0.027,
               0.604, 0.096,
               0.639, 0.027,
               0.604, 0.005,
               0.587, -0.059,
               0.685, -0.001,
               0.702, 0.012,
               0.587, -0.059,
               0.702, 0.012,
               0.702, 0.087,
               0.587, -0.059,
               0.702, 0.087,
               0.587, 0.025,
               0.702, 0.087,
               0.702, 0.012,
               0.692, 0.017,
               0.702, 0.087,
               0.692, 0.017,
               0.676, 0.029,
               0.702, 0.087,
               0.676, 0.029,
               0.676, 0.116,
               0.604, 0.005,
               0.587, -0.004,
               0.587, 0.086,
               0.604, 0.005,
               0.587, 0.086,
               0.604, 0.096,
               0.525, 0.093,
               0.540, 0.137,
               0.552, 0.180,
               0.525, 0.093,
               0.552, 0.180,
               0.566, 0.238,
               0.519, 0.046,
               0.525, 0.093,
               0.566, 0.238,
               0.519, 0.046,
               0.566, 0.238,
               0.566, 0.262,
               0.519, 0.046,
               0.566, 0.262,
               0.566, 0.738,
               0.519, 0.046,
               0.566, 0.738,
               0.566, 0.762,
               0.519, 0.046,
               0.566, 0.762,
               0.552, 0.820,
               0.519, 0.046,
               0.552, 0.820,
               0.540, 0.863,
               0.519, 0.046,
               0.540, 0.863,
               0.525, 0.907,
               0.519, 0.046,
               0.525, 0.907,
               0.519, 0.954,
               0.569, 0.262,
               0.561, 0.286,
               0.561, 0.691,
               0.569, 0.262,
               0.561, 0.691,
               0.569, 0.738,
               0.566, 0.262,
               0.569, 0.262,
               0.569, 0.738,
               0.566, 0.262,
               0.569, 0.738,
               0.566, 0.738,
               0.275, 0.691,
               0.275, 0.286,
               0.269, 0.262,
               0.275, 0.691,
               0.269, 0.262,
               0.268, 0.738,
               0.269, 0.262,
               0.271, 0.262,
               0.271, 0.738,
               0.269, 0.262,
               0.271, 0.738,
               0.268, 0.738,
               0.314, 0.093,
               0.297, 0.137,
               0.283, 0.180,
               0.314, 0.093,
               0.283, 0.180,
               0.274, 0.238,
               0.320, 0.046,
               0.314, 0.093,
               0.274, 0.238,
               0.320, 0.046,
               0.274, 0.238,
               0.274, 0.262,
               0.320, 0.046,
               0.274, 0.262,
               0.274, 0.738,
               0.320, 0.046,
               0.274, 0.738,
               0.274, 0.762,
               0.320, 0.046,
               0.274, 0.762,
               0.283, 0.820,
               0.320, 0.046,
               0.283, 0.820,
               0.297, 0.863,
               0.320, 0.046,
               0.297, 0.863,
               0.314, 0.907,
               0.320, 0.046,
               0.314, 0.907,
               0.320, 0.954,
               0.271, 0.262,
               0.278, 0.286,
               0.278, 0.691,
               0.271, 0.262,
               0.278, 0.691,
               0.271, 0.738,
               0.274, 0.738,
               0.274, 0.262,
               0.271, 0.262,
               0.274, 0.738,
               0.271, 0.262,
               0.271, 0.738,
               0.519, 0.954,
               0.529, 0.907,
               0.541, 0.863,
               0.519, 0.954,
               0.541, 0.863,
               0.555, 0.820,
               0.519, 0.954,
               0.555, 0.820,
               0.563, 0.762,
               0.519, 0.954,
               0.563, 0.762,
               0.563, 0.738,
               0.519, 0.954,
               0.563, 0.738,
               0.563, 0.262,
               0.519, 0.954,
               0.563, 0.262,
               0.563, 0.238,
               0.519, 0.954,
               0.563, 0.238,
               0.555, 0.180,
               0.519, 0.954,
               0.555, 0.180,
               0.541, 0.137,
               0.519, 0.954,
               0.541, 0.137,
               0.529, 0.093,
               0.519, 0.954,
               0.529, 0.093,
               0.519, 0.046,
               0.519, 0.954,
               0.519, 0.046,
               0.512, -0.004,
               0.519, 0.954,
               0.512, -0.004,
               0.512, 1.004,
               0.561, 0.286,
               0.565, 0.262,
               0.565, 0.738,
               0.561, 0.286,
               0.565, 0.738,
               0.561, 0.691,
               0.565, 0.738,
               0.565, 0.262,
               0.563, 0.262,
               0.565, 0.738,
               0.563, 0.262,
               0.563, 0.738,
               0.001, 0.691,
               0.001, 0.286,
               0.044, 0.286,
               0.001, 0.691,
               0.044, 0.286,
               0.044, 0.691,
               0.044, 0.691,
               0.044, 0.286,
               0.091, 0.286,
               0.044, 0.691,
               0.091, 0.286,
               0.091, 0.691,
               0.091, 0.691,
               0.091, 0.286,
               0.141, 0.286,
               0.091, 0.691,
               0.141, 0.286,
               0.141, 0.691,
               0.141, 0.691,
               0.141, 0.286,
               0.193, 0.286,
               0.141, 0.691,
               0.193, 0.286,
               0.193, 0.691,
               0.193, 0.691,
               0.193, 0.286,
               0.248, 0.286,
               0.193, 0.691,
               0.248, 0.286,
               0.248, 0.691,
               0.248, 0.691,
               0.248, 0.286,
               0.275, 0.286,
               0.248, 0.691,
               0.275, 0.286,
               0.275, 0.691,
               0.561, 0.691,
               0.561, 0.286,
               0.591, 0.286,
               0.561, 0.691,
               0.591, 0.286,
               0.591, 0.691,
               0.591, 0.691,
               0.591, 0.286,
               0.646, 0.286,
               0.591, 0.691,
               0.646, 0.286,
               0.646, 0.691,
               0.646, 0.691,
               0.646, 0.286,
               0.699, 0.286,
               0.646, 0.691,
               0.699, 0.286,
               0.699, 0.691,
               0.699, 0.691,
               0.699, 0.286,
               0.748, 0.286,
               0.699, 0.691,
               0.748, 0.286,
               0.748, 0.691,
               0.748, 0.691,
               0.748, 0.286,
               0.699, 0.286,
               0.748, 0.691,
               0.699, 0.286,
               0.699, 0.691,
               0.699, 0.691,
               0.699, 0.286,
               0.646, 0.286,
               0.699, 0.691,
               0.646, 0.286,
               0.646, 0.691,
               0.646, 0.691,
               0.646, 0.286,
               0.591, 0.286,
               0.646, 0.691,
               0.591, 0.286,
               0.591, 0.691,
               0.591, 0.691,
               0.591, 0.286,
               0.561, 0.286,
               0.591, 0.691,
               0.561, 0.286,
               0.561, 0.691,
               0.278, 0.691,
               0.278, 0.286,
               0.248, 0.286,
               0.278, 0.691,
               0.248, 0.286,
               0.248, 0.691,
               0.248, 0.691,
               0.248, 0.286,
               0.193, 0.286,
               0.248, 0.691,
               0.193, 0.286,
               0.193, 0.691,
               0.193, 0.691,
               0.193, 0.286,
               0.141, 0.286,
               0.193, 0.691,
               0.141, 0.286,
               0.141, 0.691,
               0.141, 0.691,
               0.141, 0.286,
               0.091, 0.286,
               0.141, 0.691,
               0.091, 0.286,
               0.091, 0.691,
               0.091, 0.691,
               0.091, 0.286,
               0.044, 0.286,
               0.091, 0.691,
               0.044, 0.286,
               0.044, 0.691,
               0.044, 0.691,
               0.044, 0.286,
               0.001, 0.286,
               0.044, 0.691,
               0.001, 0.286,
               0.001, 0.691
            ])
         }
         };

         material = new THREE.MeshBasicMaterial({
            side: THREE.FrontSide,
            map: THREE.ImageUtils.loadTexture('data_MAN-SIDE.jpg')
            });
         mesh = new THREE.Mesh(geometry, material);
         scene.add(mesh);

}
