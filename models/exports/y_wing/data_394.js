function create_geometry_394(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -93.239, -50.927, 53.443,
            -92.227, 22.357, 55.911,
            -93.251, 22.358, 53.443,
            -93.239, -50.927, 53.443,
            -92.219, -50.927, 55.911,
            -92.227, 22.357, 55.911,
            -92.219, -50.927, 55.911,
            -89.756, 22.354, 56.934,
            -92.227, 22.357, 55.911,
            -92.219, -50.927, 55.911,
            -89.767, -51.192, 56.934,
            -89.756, 22.354, 56.934,
            -89.767, -51.192, 56.934,
            -87.286, 22.352, 55.911,
            -89.756, 22.354, 56.934,
            -89.767, -51.192, 56.934,
            -87.298, -51.192, 55.911,
            -87.286, 22.352, 55.911,
            -87.298, -51.192, 55.911,
            -86.261, 22.350, 53.443,
            -87.286, 22.352, 55.911,
            -87.298, -51.192, 55.911,
            -86.270, -51.192, 53.443,
            -86.261, 22.350, 53.443,
            -86.270, -51.192, 53.443,
            -87.286, 22.352, 50.976,
            -86.261, 22.350, 53.443,
            -86.270, -51.192, 53.443,
            -87.444, -51.192, 50.976,
            -87.286, 22.352, 50.976,
            -87.444, -51.192, 50.976,
            -89.756, 22.354, 49.953,
            -87.286, 22.352, 50.976,
            -87.444, -51.192, 50.976,
            -89.750, -50.927, 49.953,
            -89.756, 22.354, 49.953,
            -89.750, -50.927, 49.953,
            -92.227, 22.357, 50.976,
            -89.756, 22.354, 49.953,
            -89.750, -50.927, 49.953,
            -92.216, -50.927, 50.976,
            -92.227, 22.357, 50.976,
            -92.216, -50.927, 50.976,
            -93.251, 22.358, 53.443,
            -92.227, 22.357, 50.976,
            -92.216, -50.927, 50.976,
            -93.239, -50.927, 53.443,
            -93.251, 22.358, 53.443,
            -93.251, 22.358, 53.443,
            -91.764, 26.994, 55.911,
            -92.773, 27.215, 53.443,
            -93.251, 22.358, 53.443,
            -92.227, 22.357, 55.911,
            -91.764, 26.994, 55.911,
            -92.227, 22.357, 55.911,
            -89.331, 26.460, 56.934,
            -91.764, 26.994, 55.911,
            -92.227, 22.357, 55.911,
            -89.756, 22.354, 56.934,
            -89.331, 26.460, 56.934,
            -89.756, 22.354, 56.934,
            -86.899, 25.926, 55.911,
            -89.331, 26.460, 56.934,
            -89.756, 22.354, 56.934,
            -87.286, 22.352, 55.911,
            -86.899, 25.926, 55.911,
            -87.286, 22.352, 55.911,
            -85.890, 25.704, 53.443,
            -86.899, 25.926, 55.911,
            -87.286, 22.352, 55.911,
            -86.261, 22.350, 53.443,
            -85.890, 25.704, 53.443,
            -86.261, 22.350, 53.443,
            -86.899, 25.926, 50.976,
            -85.890, 25.704, 53.443,
            -86.261, 22.350, 53.443,
            -87.286, 22.352, 50.976,
            -86.899, 25.926, 50.976,
            -87.286, 22.352, 50.976,
            -89.331, 26.460, 49.953,
            -86.899, 25.926, 50.976,
            -87.286, 22.352, 50.976,
            -89.756, 22.354, 49.953,
            -89.331, 26.460, 49.953,
            -89.756, 22.354, 49.953,
            -91.764, 26.994, 50.976,
            -89.331, 26.460, 49.953,
            -89.756, 22.354, 49.953,
            -92.227, 22.357, 50.976,
            -91.764, 26.994, 50.976,
            -92.227, 22.357, 50.976,
            -92.773, 27.215, 53.443,
            -91.764, 26.994, 50.976,
            -92.227, 22.357, 50.976,
            -93.251, 22.358, 53.443,
            -92.773, 27.215, 53.443,
            -92.773, 27.215, 53.443,
            -89.482, 32.799, 55.911,
            -90.374, 33.331, 53.443,
            -92.773, 27.215, 53.443,
            -91.764, 26.994, 55.911,
            -89.482, 32.799, 55.911,
            -91.764, 26.994, 55.911,
            -87.331, 31.516, 56.934,
            -89.482, 32.799, 55.911,
            -91.764, 26.994, 55.911,
            -89.331, 26.460, 56.934,
            -87.331, 31.516, 56.934,
            -89.331, 26.460, 56.934,
            -85.179, 30.233, 55.911,
            -87.331, 31.516, 56.934,
            -89.331, 26.460, 56.934,
            -86.899, 25.926, 55.911,
            -85.179, 30.233, 55.911,
            -86.899, 25.926, 55.911,
            -84.287, 29.701, 53.443,
            -85.179, 30.233, 55.911,
            -86.899, 25.926, 55.911,
            -85.890, 25.704, 53.443,
            -84.287, 29.701, 53.443,
            -85.890, 25.704, 53.443,
            -85.179, 30.233, 50.976,
            -84.287, 29.701, 53.443,
            -85.890, 25.704, 53.443,
            -86.899, 25.926, 50.976,
            -85.179, 30.233, 50.976,
            -86.899, 25.926, 50.976,
            -87.331, 31.516, 49.953,
            -85.179, 30.233, 50.976,
            -86.899, 25.926, 50.976,
            -89.331, 26.460, 49.953,
            -87.331, 31.516, 49.953,
            -89.331, 26.460, 49.953,
            -89.482, 32.799, 50.976,
            -87.331, 31.516, 49.953,
            -89.331, 26.460, 49.953,
            -91.764, 26.994, 50.976,
            -89.482, 32.799, 50.976,
            -91.764, 26.994, 50.976,
            -90.374, 33.331, 53.443,
            -89.482, 32.799, 50.976,
            -91.764, 26.994, 50.976,
            -92.773, 27.215, 53.443,
            -90.374, 33.331, 53.443,
            -90.374, 33.331, 53.443,
            -84.101, 38.825, 55.906,
            -84.702, 39.673, 53.436,
            -90.374, 33.331, 53.443,
            -89.482, 32.799, 55.911,
            -84.101, 38.825, 55.906,
            -89.482, 32.799, 55.911,
            -82.660, 36.785, 56.935,
            -84.101, 38.825, 55.906,
            -89.482, 32.799, 55.911,
            -87.331, 31.516, 56.934,
            -82.660, 36.785, 56.935,
            -87.331, 31.516, 56.934,
            -81.223, 34.747, 55.917,
            -82.660, 36.785, 56.935,
            -87.331, 31.516, 56.934,
            -85.179, 30.233, 55.911,
            -81.223, 34.747, 55.917,
            -85.179, 30.233, 55.911,
            -80.631, 33.903, 53.451,
            -81.223, 34.747, 55.917,
            -85.179, 30.233, 55.911,
            -84.287, 29.701, 53.443,
            -80.631, 33.903, 53.451,
            -84.287, 29.701, 53.443,
            -81.232, 34.751, 50.980,
            -80.631, 33.903, 53.451,
            -84.287, 29.701, 53.443,
            -85.179, 30.233, 50.976,
            -81.232, 34.751, 50.980,
            -85.179, 30.233, 50.976,
            -82.673, 36.791, 49.952,
            -81.232, 34.751, 50.980,
            -85.179, 30.233, 50.976,
            -87.331, 31.516, 49.953,
            -82.673, 36.791, 49.952,
            -87.331, 31.516, 49.953,
            -84.110, 38.829, 50.970,
            -82.673, 36.791, 49.952,
            -87.331, 31.516, 49.953,
            -89.482, 32.799, 50.976,
            -84.110, 38.829, 50.970,
            -89.482, 32.799, 50.976,
            -84.702, 39.673, 53.436,
            -84.110, 38.829, 50.970,
            -89.482, 32.799, 50.976,
            -90.374, 33.331, 53.443,
            -84.702, 39.673, 53.436,
            -84.702, 39.673, 53.436,
            -66.534, 50.463, 54.459,
            -67.244, 51.220, 51.997,
            -84.702, 39.673, 53.436,
            -84.101, 38.825, 55.906,
            -66.534, 50.463, 54.459,
            -84.101, 38.825, 55.906,
            -65.183, 48.400, 55.487,
            -66.534, 50.463, 54.459,
            -84.101, 38.825, 55.906,
            -82.660, 36.785, 56.935,
            -65.183, 48.400, 55.487,
            -82.660, 36.785, 56.935,
            -63.983, 46.239, 54.476,
            -65.183, 48.400, 55.487,
            -82.660, 36.785, 56.935,
            -81.223, 34.747, 55.917,
            -63.983, 46.239, 54.476,
            -81.223, 34.747, 55.917,
            -63.636, 45.244, 52.021,
            -63.983, 46.239, 54.476,
            -81.223, 34.747, 55.917,
            -80.631, 33.903, 53.451,
            -63.636, 45.244, 52.021,
            -80.631, 33.903, 53.451,
            -64.346, 46.000, 49.558,
            -63.636, 45.244, 52.021,
            -80.631, 33.903, 53.451,
            -81.232, 34.751, 50.980,
            -64.346, 46.000, 49.558,
            -81.232, 34.751, 50.980,
            -65.697, 48.063, 48.531,
            -64.346, 46.000, 49.558,
            -81.232, 34.751, 50.980,
            -82.673, 36.791, 49.952,
            -65.697, 48.063, 48.531,
            -82.673, 36.791, 49.952,
            -66.897, 50.225, 49.542,
            -65.697, 48.063, 48.531,
            -82.673, 36.791, 49.952,
            -84.110, 38.829, 50.970,
            -66.897, 50.225, 49.542,
            -84.110, 38.829, 50.970,
            -67.244, 51.220, 51.997,
            -66.897, 50.225, 49.542,
            -84.110, 38.829, 50.970,
            -84.702, 39.673, 53.436,
            -67.244, 51.220, 51.997,
            -67.244, 51.220, 51.997,
            -37.043, 67.886, 51.477,
            -37.793, 68.619, 49.020,
            -67.244, 51.220, 51.997,
            -66.534, 50.463, 54.459,
            -37.043, 67.886, 51.477,
            -66.534, 50.463, 54.459,
            -35.675, 65.834, 52.503,
            -37.043, 67.886, 51.477,
            -66.534, 50.463, 54.459,
            -65.183, 48.400, 55.487,
            -35.675, 65.834, 52.503,
            -65.183, 48.400, 55.487,
            -34.492, 63.662, 51.494,
            -35.675, 65.834, 52.503,
            -65.183, 48.400, 55.487,
            -63.983, 46.239, 54.476,
            -34.492, 63.662, 51.494,
            -63.983, 46.239, 54.476,
            -34.184, 62.643, 49.044,
            -34.492, 63.662, 51.494,
            -63.983, 46.239, 54.476,
            -63.636, 45.244, 52.021,
            -34.184, 62.643, 49.044,
            -63.636, 45.244, 52.021,
            -34.934, 63.376, 46.587,
            -34.184, 62.643, 49.044,
            -63.636, 45.244, 52.021,
            -64.346, 46.000, 49.558,
            -34.934, 63.376, 46.587,
            -64.346, 46.000, 49.558,
            -36.302, 65.428, 45.561,
            -34.934, 63.376, 46.587,
            -64.346, 46.000, 49.558,
            -65.697, 48.063, 48.531,
            -36.302, 65.428, 45.561,
            -65.697, 48.063, 48.531,
            -37.486, 67.600, 46.570,
            -36.302, 65.428, 45.561,
            -65.697, 48.063, 48.531,
            -66.897, 50.225, 49.542,
            -37.486, 67.600, 46.570,
            -66.897, 50.225, 49.542,
            -37.793, 68.619, 49.020,
            -37.486, 67.600, 46.570,
            -66.897, 50.225, 49.542,
            -67.244, 51.220, 51.997,
            -37.793, 68.619, 49.020,
            -37.793, 68.619, 49.020,
            -12.365, 84.632, 48.975,
            -13.079, 85.393, 46.515,
            -37.793, 68.619, 49.020,
            -37.043, 67.886, 51.477,
            -12.365, 84.632, 48.975,
            -37.043, 67.886, 51.477,
            -10.882, 82.637, 49.987,
            -12.365, 84.632, 48.975,
            -37.043, 67.886, 51.477,
            -35.675, 65.834, 52.503,
            -10.882, 82.637, 49.987,
            -35.675, 65.834, 52.503,
            -9.496, 80.575, 48.956,
            -10.882, 82.637, 49.987,
            -35.675, 65.834, 52.503,
            -34.492, 63.662, 51.494,
            -9.496, 80.575, 48.956,
            -34.492, 63.662, 51.494,
            -9.020, 79.655, 46.488,
            -9.496, 80.575, 48.956,
            -34.492, 63.662, 51.494,
            -34.184, 62.643, 49.044,
            -9.020, 79.655, 46.488,
            -34.184, 62.643, 49.044,
            -9.734, 80.416, 44.028,
            -9.020, 79.655, 46.488,
            -34.184, 62.643, 49.044,
            -34.934, 63.376, 46.587,
            -9.734, 80.416, 44.028,
            -34.934, 63.376, 46.587,
            -11.218, 82.411, 43.016,
            -9.734, 80.416, 44.028,
            -34.934, 63.376, 46.587,
            -36.302, 65.428, 45.561,
            -11.218, 82.411, 43.016,
            -36.302, 65.428, 45.561,
            -12.603, 84.473, 44.047,
            -11.218, 82.411, 43.016,
            -36.302, 65.428, 45.561,
            -37.486, 67.600, 46.570,
            -12.603, 84.473, 44.047,
            -37.486, 67.600, 46.570,
            -13.079, 85.393, 46.515,
            -12.603, 84.473, 44.047,
            -37.486, 67.600, 46.570,
            -37.793, 68.619, 49.020,
            -13.079, 85.393, 46.515,
            -13.079, 85.393, 46.515,
            -6.896, 90.056, 47.971,
            -8.082, 90.368, 45.597,
            -13.079, 85.393, 46.515,
            -12.365, 84.632, 48.975,
            -6.896, 90.056, 47.971,
            -12.365, 84.632, 48.975,
            -4.793, 88.640, 48.866,
            -6.896, 90.056, 47.971,
            -12.365, 84.632, 48.975,
            -10.882, 82.637, 49.987,
            -4.793, 88.640, 48.866,
            -10.882, 82.637, 49.987,
            -3.003, 86.948, 47.756,
            -4.793, 88.640, 48.866,
            -10.882, 82.637, 49.987,
            -9.496, 80.575, 48.956,
            -3.003, 86.948, 47.756,
            -9.496, 80.575, 48.956,
            -2.575, 85.972, 45.294,
            -3.003, 86.948, 47.756,
            -9.496, 80.575, 48.956,
            -9.020, 79.655, 46.488,
            -2.575, 85.972, 45.294,
            -9.020, 79.655, 46.488,
            -3.760, 86.284, 42.920,
            -2.575, 85.972, 45.294,
            -9.020, 79.655, 46.488,
            -9.734, 80.416, 44.028,
            -3.760, 86.284, 42.920,
            -9.734, 80.416, 44.028,
            -5.864, 87.700, 42.025,
            -3.760, 86.284, 42.920,
            -9.734, 80.416, 44.028,
            -11.218, 82.411, 43.016,
            -5.864, 87.700, 42.025,
            -11.218, 82.411, 43.016,
            -7.653, 89.392, 43.135,
            -5.864, 87.700, 42.025,
            -11.218, 82.411, 43.016,
            -12.603, 84.473, 44.047,
            -7.653, 89.392, 43.135,
            -12.603, 84.473, 44.047,
            -8.082, 90.368, 45.597,
            -7.653, 89.392, 43.135,
            -8.082, 90.368, 45.597,
            -13.079, 85.393, 46.515,
            -12.603, 84.473, 44.047,
            -8.082, 90.368, 45.597,
            -3.901, 95.467, 46.445,
            -5.342, 95.350, 44.183,
            -8.082, 90.368, 45.597,
            -6.896, 90.056, 47.971,
            -3.901, 95.467, 46.445,
            -6.896, 90.056, 47.971,
            -1.370, 94.803, 47.153,
            -3.901, 95.467, 46.445,
            -6.896, 90.056, 47.971,
            -4.793, 88.640, 48.866,
            -1.370, 94.803, 47.153,
            -4.793, 88.640, 48.866,
            0.768, 93.746, 45.890,
            -1.370, 94.803, 47.153,
            -4.793, 88.640, 48.866,
            -3.003, 86.948, 47.756,
            0.768, 93.746, 45.890,
            -3.003, 86.948, 47.756,
            1.264, 92.915, 43.399,
            0.768, 93.746, 45.890,
            -3.003, 86.948, 47.756,
            -2.575, 85.972, 45.294,
            1.264, 92.915, 43.399,
            -2.575, 85.972, 45.294,
            -0.177, 92.798, 41.137,
            1.264, 92.915, 43.399,
            -2.575, 85.972, 45.294,
            -3.760, 86.284, 42.920,
            -0.177, 92.798, 41.137,
            -3.760, 86.284, 42.920,
            -2.708, 93.462, 40.429,
            -0.177, 92.798, 41.137,
            -3.760, 86.284, 42.920,
            -5.864, 87.700, 42.025,
            -2.708, 93.462, 40.429,
            -5.864, 87.700, 42.025,
            -4.847, 94.519, 41.692,
            -2.708, 93.462, 40.429,
            -5.864, 87.700, 42.025,
            -7.653, 89.392, 43.135,
            -4.847, 94.519, 41.692,
            -7.653, 89.392, 43.135,
            -5.342, 95.350, 44.183,
            -4.847, 94.519, 41.692,
            -5.342, 95.350, 44.183,
            -8.082, 90.368, 45.597,
            -7.653, 89.392, 43.135,
            -5.342, 95.350, 44.183,
            -2.994, 101.393, 45.163,
            -4.438, 101.179, 42.910,
            -5.342, 95.350, 44.183,
            -3.901, 95.467, 46.445,
            -2.994, 101.393, 45.163,
            -3.901, 95.467, 46.445,
            -0.378, 101.444, 45.751,
            -2.994, 101.393, 45.163,
            -3.901, 95.467, 46.445,
            -1.370, 94.803, 47.153,
            -0.378, 101.444, 45.751,
            -1.370, 94.803, 47.153,
            1.877, 101.302, 44.326,
            -0.378, 101.444, 45.751,
            -1.370, 94.803, 47.153,
            0.768, 93.746, 45.890,
            1.877, 101.302, 44.326,
            0.768, 93.746, 45.890,
            2.453, 101.050, 41.726,
            1.877, 101.302, 44.326,
            0.768, 93.746, 45.890,
            1.264, 92.915, 43.399,
            2.453, 101.050, 41.726,
            1.264, 92.915, 43.399,
            1.008, 100.836, 39.472,
            2.453, 101.050, 41.726,
            1.264, 92.915, 43.399,
            -0.177, 92.798, 41.137,
            1.008, 100.836, 39.472,
            -0.177, 92.798, 41.137,
            -1.607, 100.784, 38.884,
            1.008, 100.836, 39.472,
            -0.177, 92.798, 41.137,
            -2.708, 93.462, 40.429,
            -1.607, 100.784, 38.884,
            -2.708, 93.462, 40.429,
            -3.863, 100.926, 40.309,
            -1.607, 100.784, 38.884,
            -2.708, 93.462, 40.429,
            -4.847, 94.519, 41.692,
            -3.863, 100.926, 40.309,
            -4.847, 94.519, 41.692,
            -4.438, 101.179, 42.910,
            -3.863, 100.926, 40.309,
            -4.438, 101.179, 42.910,
            -5.342, 95.350, 44.183,
            -4.847, 94.519, 41.692,
            -4.438, 101.179, 42.910,
            -3.839, 169.969, 37.628,
            -5.273, 169.854, 35.378,
            -4.438, 101.179, 42.910,
            -2.994, 101.393, 45.163,
            -3.839, 169.969, 37.628,
            -2.994, 101.393, 45.163,
            -1.232, 169.998, 38.209,
            -3.839, 169.969, 37.628,
            -2.994, 101.393, 45.163,
            -0.378, 101.444, 45.751,
            -1.232, 169.998, 38.209,
            -0.378, 101.444, 45.751,
            1.021, 169.925, 36.777,
            -1.232, 169.998, 38.209,
            -0.378, 101.444, 45.751,
            1.877, 101.302, 44.326,
            1.021, 169.925, 36.777,
            1.877, 101.302, 44.326,
            1.602, 169.793, 34.173,
            1.021, 169.925, 36.777,
            1.877, 101.302, 44.326,
            2.453, 101.050, 41.726,
            1.602, 169.793, 34.173,
            2.453, 101.050, 41.726,
            0.168, 169.678, 31.922,
            1.602, 169.793, 34.173,
            2.453, 101.050, 41.726,
            1.008, 100.836, 39.472,
            0.168, 169.678, 31.922,
            1.008, 100.836, 39.472,
            -2.439, 169.649, 31.342,
            0.168, 169.678, 31.922,
            1.008, 100.836, 39.472,
            -1.607, 100.784, 38.884,
            -2.439, 169.649, 31.342,
            -1.607, 100.784, 38.884,
            -4.692, 169.721, 32.774,
            -2.439, 169.649, 31.342,
            -1.607, 100.784, 38.884,
            -3.863, 100.926, 40.309,
            -4.692, 169.721, 32.774,
            -3.863, 100.926, 40.309,
            -5.273, 169.854, 35.378,
            -4.692, 169.721, 32.774,
            -5.273, 169.854, 35.378,
            -4.438, 101.179, 42.910,
               -3.863, 100.926, 40.309
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.924, -0.000, 0.382,
            -0.712, 0.036, 0.701,
            -0.922, 0.045, 0.383,
            -0.924, -0.000, 0.382,
            -0.699, -0.000, 0.715,
            -0.712, 0.036, 0.701,
            -0.699, -0.000, 0.715,
            -0.013, 0.001, 1.000,
            -0.712, 0.036, 0.701,
            -0.699, -0.000, 0.715,
            0.012, -0.000, 1.000,
            -0.013, 0.001, 1.000,
            0.012, -0.000, 1.000,
            0.699, -0.038, 0.714,
            -0.013, 0.001, 1.000,
            0.012, -0.000, 1.000,
            0.706, -0.000, 0.708,
            0.699, -0.038, 0.714,
            0.706, -0.000, 0.708,
            0.998, -0.056, -0.000,
            0.699, -0.038, 0.714,
            0.706, -0.000, 0.708,
            1.000, -0.001, -0.024,
            0.998, -0.056, -0.000,
            1.000, -0.001, -0.024,
            0.699, -0.038, -0.714,
            0.998, -0.056, -0.000,
            1.000, -0.001, -0.024,
            0.706, -0.001, -0.708,
            0.699, -0.038, -0.714,
            0.706, -0.001, -0.708,
            -0.012, 0.001, -1.000,
            0.699, -0.038, -0.714,
            0.706, -0.001, -0.708,
            0.026, -0.000, -1.000,
            -0.012, 0.001, -1.000,
            0.026, -0.000, -1.000,
            -0.712, 0.035, -0.701,
            -0.012, 0.001, -1.000,
            0.026, -0.000, -1.000,
            -0.707, -0.000, -0.707,
            -0.712, 0.035, -0.701,
            -0.707, -0.000, -0.707,
            -0.924, -0.000, -0.383,
            -0.712, 0.035, -0.701,
            -0.707, -0.000, -0.707,
            -0.924, -0.000, -0.383,
            -0.924, -0.000, -0.383,
            -0.922, 0.045, 0.383,
            -0.701, 0.169, 0.693,
            -0.897, 0.215, 0.386,
            -0.922, 0.045, 0.383,
            -0.712, 0.036, 0.701,
            -0.701, 0.169, 0.693,
            -0.712, 0.036, 0.701,
            -0.032, 0.008, 0.999,
            -0.701, 0.169, 0.693,
            -0.712, 0.036, 0.701,
            -0.013, 0.001, 1.000,
            -0.032, 0.008, 0.999,
            -0.013, 0.001, 1.000,
            0.667, -0.166, 0.726,
            -0.032, 0.008, 0.999,
            -0.013, 0.001, 1.000,
            0.699, -0.038, 0.714,
            0.667, -0.166, 0.726,
            0.699, -0.038, 0.714,
            0.970, -0.244, -0.001,
            0.667, -0.166, 0.726,
            0.699, -0.038, 0.714,
            0.998, -0.056, -0.000,
            0.970, -0.244, -0.001,
            0.998, -0.056, -0.000,
            0.667, -0.166, -0.726,
            0.970, -0.244, -0.001,
            0.998, -0.056, -0.000,
            0.699, -0.038, -0.714,
            0.667, -0.166, -0.726,
            0.699, -0.038, -0.714,
            -0.032, 0.008, -0.999,
            0.667, -0.166, -0.726,
            0.699, -0.038, -0.714,
            -0.012, 0.001, -1.000,
            -0.032, 0.008, -0.999,
            -0.012, 0.001, -1.000,
            -0.701, 0.169, -0.693,
            -0.032, 0.008, -0.999,
            -0.012, 0.001, -1.000,
            -0.712, 0.035, -0.701,
            -0.701, 0.169, -0.693,
            -0.712, 0.035, -0.701,
            -0.919, 0.092, -0.384,
            -0.701, 0.169, -0.693,
            -0.712, 0.035, -0.701,
            -0.920, 0.091, -0.382,
            -0.920, 0.091, -0.382,
            -0.897, 0.215, 0.386,
            -0.617, 0.379, 0.690,
            -0.785, 0.483, 0.388,
            -0.897, 0.215, 0.386,
            -0.701, 0.169, 0.693,
            -0.617, 0.379, 0.690,
            -0.701, 0.169, 0.693,
            -0.035, 0.022, 0.999,
            -0.617, 0.379, 0.690,
            -0.701, 0.169, 0.693,
            -0.032, 0.008, 0.999,
            -0.035, 0.022, 0.999,
            -0.032, 0.008, 0.999,
            0.582, -0.356, 0.732,
            -0.035, 0.022, 0.999,
            -0.032, 0.008, 0.999,
            0.667, -0.166, 0.726,
            0.582, -0.356, 0.732,
            0.667, -0.166, 0.726,
            0.853, -0.522, -0.000,
            0.582, -0.356, 0.732,
            0.667, -0.166, 0.726,
            0.970, -0.244, -0.001,
            0.853, -0.522, -0.000,
            0.970, -0.244, -0.001,
            0.581, -0.356, -0.732,
            0.853, -0.522, -0.000,
            0.970, -0.244, -0.001,
            0.667, -0.166, -0.726,
            0.581, -0.356, -0.732,
            0.667, -0.166, -0.726,
            -0.035, 0.022, -0.999,
            0.581, -0.356, -0.732,
            0.667, -0.166, -0.726,
            -0.032, 0.008, -0.999,
            -0.035, 0.022, -0.999,
            -0.032, 0.008, -0.999,
            -0.617, 0.380, -0.690,
            -0.035, 0.022, -0.999,
            -0.032, 0.008, -0.999,
            -0.701, 0.169, -0.693,
            -0.617, 0.380, -0.690,
            -0.701, 0.169, -0.693,
            -0.860, 0.338, -0.384,
            -0.617, 0.380, -0.690,
            -0.701, 0.169, -0.693,
            -0.860, 0.337, -0.382,
            -0.860, 0.337, -0.382,
            -0.785, 0.483, 0.388,
            -0.450, 0.556, 0.699,
            -0.589, 0.710, 0.387,
            -0.785, 0.483, 0.388,
            -0.617, 0.379, 0.690,
            -0.450, 0.556, 0.699,
            -0.617, 0.379, 0.690,
            0.005, 0.043, 0.999,
            -0.450, 0.556, 0.699,
            -0.617, 0.379, 0.690,
            -0.035, 0.022, 0.999,
            0.005, 0.043, 0.999,
            -0.035, 0.022, 0.999,
            0.471, -0.499, 0.728,
            0.005, 0.043, 0.999,
            -0.035, 0.022, 0.999,
            0.582, -0.356, 0.732,
            0.471, -0.499, 0.728,
            0.582, -0.356, 0.732,
            0.663, -0.748, 0.008,
            0.471, -0.499, 0.728,
            0.582, -0.356, 0.732,
            0.853, -0.522, -0.000,
            0.663, -0.748, 0.008,
            0.853, -0.522, -0.000,
            0.438, -0.536, -0.722,
            0.663, -0.748, 0.008,
            0.853, -0.522, -0.000,
            0.581, -0.356, -0.732,
            0.438, -0.536, -0.722,
            0.581, -0.356, -0.732,
            -0.051, 0.001, -0.999,
            0.438, -0.536, -0.722,
            0.581, -0.356, -0.732,
            -0.035, 0.022, -0.999,
            -0.051, 0.001, -0.999,
            -0.035, 0.022, -0.999,
            -0.493, 0.533, -0.688,
            -0.051, 0.001, -0.999,
            -0.035, 0.022, -0.999,
            -0.617, 0.380, -0.690,
            -0.493, 0.533, -0.688,
            -0.617, 0.380, -0.690,
            -0.692, 0.616, -0.377,
            -0.493, 0.533, -0.688,
            -0.617, 0.380, -0.690,
            -0.689, 0.616, -0.382,
            -0.689, 0.616, -0.382,
            -0.589, 0.710, 0.387,
            -0.330, 0.631, 0.702,
            -0.465, 0.799, 0.380,
            -0.589, 0.710, 0.387,
            -0.450, 0.556, 0.699,
            -0.330, 0.631, 0.702,
            -0.450, 0.556, 0.699,
            0.061, 0.048, 0.997,
            -0.330, 0.631, 0.702,
            -0.450, 0.556, 0.699,
            0.005, 0.043, 0.999,
            0.061, 0.048, 0.997,
            0.005, 0.043, 0.999,
            0.420, -0.565, 0.711,
            0.061, 0.048, 0.997,
            0.005, 0.043, 0.999,
            0.471, -0.499, 0.728,
            0.420, -0.565, 0.711,
            0.471, -0.499, 0.728,
            0.532, -0.847, 0.004,
            0.420, -0.565, 0.711,
            0.471, -0.499, 0.728,
            0.663, -0.748, 0.008,
            0.532, -0.847, 0.004,
            0.663, -0.748, 0.008,
            0.329, -0.627, -0.706,
            0.532, -0.847, 0.004,
            0.663, -0.748, 0.008,
            0.438, -0.536, -0.722,
            0.329, -0.627, -0.706,
            0.438, -0.536, -0.722,
            -0.069, -0.038, -0.997,
            0.329, -0.627, -0.706,
            0.438, -0.536, -0.722,
            -0.051, 0.001, -0.999,
            -0.069, -0.038, -0.997,
            -0.051, 0.001, -0.999,
            -0.423, 0.572, -0.702,
            -0.069, -0.038, -0.997,
            -0.051, 0.001, -0.999,
            -0.493, 0.533, -0.688,
            -0.423, 0.572, -0.702,
            -0.493, 0.533, -0.688,
            -0.532, 0.756, -0.382,
            -0.423, 0.572, -0.702,
            -0.493, 0.533, -0.688,
            -0.531, 0.755, -0.386,
            -0.531, 0.755, -0.386,
            -0.465, 0.799, 0.380,
            -0.326, 0.627, 0.707,
            -0.467, 0.798, 0.381,
            -0.465, 0.799, 0.380,
            -0.330, 0.631, 0.702,
            -0.326, 0.627, 0.707,
            -0.330, 0.631, 0.702,
            0.075, 0.041, 0.996,
            -0.326, 0.627, 0.707,
            -0.330, 0.631, 0.702,
            0.061, 0.048, 0.997,
            0.075, 0.041, 0.996,
            0.061, 0.048, 0.997,
            0.431, -0.568, 0.702,
            0.075, 0.041, 0.996,
            0.061, 0.048, 0.997,
            0.420, -0.565, 0.711,
            0.431, -0.568, 0.702,
            0.420, -0.565, 0.711,
            0.535, -0.845, 0.001,
            0.431, -0.568, 0.702,
            0.420, -0.565, 0.711,
            0.532, -0.847, 0.004,
            0.535, -0.845, 0.001,
            0.532, -0.847, 0.004,
            0.330, -0.633, -0.700,
            0.535, -0.845, 0.001,
            0.532, -0.847, 0.004,
            0.329, -0.627, -0.706,
            0.330, -0.633, -0.700,
            0.329, -0.627, -0.706,
            -0.067, -0.053, -0.996,
            0.330, -0.633, -0.700,
            0.329, -0.627, -0.706,
            -0.069, -0.038, -0.997,
            -0.067, -0.053, -0.996,
            -0.069, -0.038, -0.997,
            -0.427, 0.561, -0.709,
            -0.067, -0.053, -0.996,
            -0.069, -0.038, -0.997,
            -0.423, 0.572, -0.702,
            -0.427, 0.561, -0.709,
            -0.423, 0.572, -0.702,
            -0.498, 0.777, -0.386,
            -0.427, 0.561, -0.709,
            -0.423, 0.572, -0.702,
            -0.498, 0.777, -0.385,
            -0.498, 0.777, -0.385,
            -0.467, 0.798, 0.381,
            -0.374, 0.579, 0.724,
            -0.556, 0.735, 0.389,
            -0.467, 0.798, 0.381,
            -0.326, 0.627, 0.707,
            -0.374, 0.579, 0.724,
            -0.326, 0.627, 0.707,
            0.104, 0.044, 0.994,
            -0.374, 0.579, 0.724,
            -0.326, 0.627, 0.707,
            0.075, 0.041, 0.996,
            0.104, 0.044, 0.994,
            0.075, 0.041, 0.996,
            0.512, -0.510, 0.691,
            0.104, 0.044, 0.994,
            0.075, 0.041, 0.996,
            0.431, -0.568, 0.702,
            0.512, -0.510, 0.691,
            0.431, -0.568, 0.702,
            0.632, -0.775, -0.001,
            0.512, -0.510, 0.691,
            0.431, -0.568, 0.702,
            0.535, -0.845, 0.001,
            0.632, -0.775, -0.001,
            0.535, -0.845, 0.001,
            0.395, -0.599, -0.697,
            0.632, -0.775, -0.001,
            0.535, -0.845, 0.001,
            0.330, -0.633, -0.700,
            0.395, -0.599, -0.697,
            0.330, -0.633, -0.700,
            -0.075, -0.077, -0.994,
            0.395, -0.599, -0.697,
            0.330, -0.633, -0.700,
            -0.067, -0.053, -0.996,
            -0.075, -0.077, -0.994,
            -0.067, -0.053, -0.996,
            -0.347, 0.367, -0.863,
            -0.075, -0.077, -0.994,
            -0.067, -0.053, -0.996,
            -0.427, 0.561, -0.709,
            -0.347, 0.367, -0.863,
            -0.427, 0.561, -0.709,
            -0.545, 0.746, -0.383,
            -0.347, 0.367, -0.863,
            -0.427, 0.561, -0.709,
            -0.546, 0.747, -0.379,
            -0.546, 0.747, -0.379,
            -0.556, 0.735, 0.389,
            -0.430, 0.503, 0.749,
            -0.674, 0.610, 0.417,
            -0.556, 0.735, 0.389,
            -0.374, 0.579, 0.724,
            -0.430, 0.503, 0.749,
            -0.374, 0.579, 0.724,
            0.173, 0.100, 0.980,
            -0.430, 0.503, 0.749,
            -0.374, 0.579, 0.724,
            0.104, 0.044, 0.994,
            0.173, 0.100, 0.980,
            0.104, 0.044, 0.994,
            0.666, -0.353, 0.657,
            0.173, 0.100, 0.980,
            0.104, 0.044, 0.994,
            0.512, -0.510, 0.691,
            0.666, -0.353, 0.657,
            0.512, -0.510, 0.691,
            0.791, -0.611, -0.028,
            0.666, -0.353, 0.657,
            0.512, -0.510, 0.691,
            0.632, -0.775, -0.001,
            0.791, -0.611, -0.028,
            0.632, -0.775, -0.001,
            0.475, -0.528, -0.704,
            0.791, -0.611, -0.028,
            0.632, -0.775, -0.001,
            0.395, -0.599, -0.697,
            0.475, -0.528, -0.704,
            0.395, -0.599, -0.697,
            -0.121, -0.141, -0.983,
            0.475, -0.528, -0.704,
            0.395, -0.599, -0.697,
            -0.075, -0.077, -0.994,
            -0.121, -0.141, -0.983,
            -0.075, -0.077, -0.994,
            -0.486, 0.277, -0.829,
            -0.121, -0.141, -0.983,
            -0.075, -0.077, -0.994,
            -0.347, 0.367, -0.863,
            -0.486, 0.277, -0.829,
            -0.347, 0.367, -0.863,
            -0.689, 0.625, -0.368,
            -0.486, 0.277, -0.829,
            0.689, -0.625, 0.366,
            0.689, -0.625, 0.366,
            -0.347, 0.367, -0.863,
            -0.674, 0.610, 0.417,
            -0.502, 0.362, 0.786,
            -0.787, 0.388, 0.480,
            -0.674, 0.610, 0.417,
            -0.430, 0.503, 0.749,
            -0.502, 0.362, 0.786,
            -0.430, 0.503, 0.749,
            0.219, 0.159, 0.963,
            -0.502, 0.362, 0.786,
            -0.430, 0.503, 0.749,
            0.173, 0.100, 0.980,
            0.219, 0.159, 0.963,
            0.173, 0.100, 0.980,
            0.801, -0.129, 0.585,
            0.219, 0.159, 0.963,
            0.173, 0.100, 0.980,
            0.666, -0.353, 0.657,
            0.801, -0.129, 0.585,
            0.666, -0.353, 0.657,
            0.933, -0.342, -0.115,
            0.801, -0.129, 0.585,
            0.666, -0.353, 0.657,
            0.791, -0.611, -0.028,
            0.933, -0.342, -0.115,
            0.791, -0.611, -0.028,
            0.551, -0.366, -0.750,
            0.933, -0.342, -0.115,
            0.791, -0.611, -0.028,
            0.475, -0.528, -0.704,
            0.551, -0.366, -0.750,
            0.475, -0.528, -0.704,
            -0.141, -0.187, -0.972,
            0.551, -0.366, -0.750,
            0.475, -0.528, -0.704,
            -0.121, -0.141, -0.983,
            -0.141, -0.187, -0.972,
            -0.121, -0.141, -0.983,
            -0.600, 0.101, -0.794,
            -0.141, -0.187, -0.972,
            -0.121, -0.141, -0.983,
            -0.486, 0.277, -0.829,
            -0.600, 0.101, -0.794,
            -0.486, 0.277, -0.829,
            -0.869, 0.391, -0.303,
            -0.600, 0.101, -0.794,
            0.868, -0.391, 0.306,
            0.868, -0.391, 0.306,
            -0.486, 0.277, -0.829,
            -0.787, 0.388, 0.480,
            -0.564, 0.173, 0.807,
            -0.839, 0.143, 0.524,
            -0.787, 0.388, 0.480,
            -0.502, 0.362, 0.786,
            -0.564, 0.173, 0.807,
            -0.502, 0.362, 0.786,
            0.193, 0.142, 0.971,
            -0.564, 0.173, 0.807,
            -0.502, 0.362, 0.786,
            0.219, 0.159, 0.963,
            0.193, 0.142, 0.971,
            0.219, 0.159, 0.963,
            0.830, 0.031, 0.557,
            0.193, 0.142, 0.971,
            0.219, 0.159, 0.963,
            0.801, -0.129, 0.585,
            0.830, 0.031, 0.557,
            0.801, -0.129, 0.585,
            0.981, -0.091, -0.173,
            0.830, 0.031, 0.557,
            0.801, -0.129, 0.585,
            0.933, -0.342, -0.115,
            0.981, -0.091, -0.173,
            0.933, -0.342, -0.115,
            0.579, -0.163, -0.799,
            0.981, -0.091, -0.173,
            0.933, -0.342, -0.115,
            0.551, -0.366, -0.750,
            0.579, -0.163, -0.799,
            0.551, -0.366, -0.750,
            -0.152, -0.146, -0.978,
            0.579, -0.163, -0.799,
            0.551, -0.366, -0.750,
            -0.141, -0.187, -0.972,
            -0.152, -0.146, -0.978,
            -0.141, -0.187, -0.972,
            -0.520, -0.039, -0.853,
            -0.152, -0.146, -0.978,
            -0.141, -0.187, -0.972,
            -0.600, 0.101, -0.794,
            -0.520, -0.039, -0.853,
            -0.600, 0.101, -0.794,
            -0.969, 0.100, -0.224,
            -0.520, -0.039, -0.853,
            0.969, -0.101, 0.226,
            0.969, -0.101, 0.226,
            -0.600, 0.101, -0.794,
            -0.839, 0.143, 0.524,
            -0.583, 0.082, 0.809,
            -0.843, 0.048, 0.535,
            -0.839, 0.143, 0.524,
            -0.564, 0.173, 0.807,
            -0.583, 0.082, 0.809,
            -0.564, 0.173, 0.807,
            0.172, 0.110, 0.979,
            -0.583, 0.082, 0.809,
            -0.564, 0.173, 0.807,
            0.193, 0.142, 0.971,
            0.172, 0.110, 0.979,
            0.193, 0.142, 0.971,
            0.824, 0.072, 0.562,
            0.172, 0.110, 0.979,
            0.193, 0.142, 0.971,
            0.830, 0.031, 0.557,
            0.824, 0.072, 0.562,
            0.830, 0.031, 0.557,
            0.982, -0.008, -0.187,
            0.824, 0.072, 0.562,
            0.830, 0.031, 0.557,
            0.981, -0.091, -0.173,
            0.982, -0.008, -0.187,
            0.981, -0.091, -0.173,
            0.565, -0.083, -0.821,
            0.982, -0.008, -0.187,
            0.981, -0.091, -0.173,
            0.579, -0.163, -0.799,
            0.565, -0.083, -0.821,
            0.579, -0.163, -0.799,
            -0.173, -0.109, -0.979,
            0.565, -0.083, -0.821,
            0.579, -0.163, -0.799,
            -0.152, -0.146, -0.978,
            -0.173, -0.109, -0.979,
            -0.152, -0.146, -0.978,
            -0.812, -0.073, -0.579,
            -0.173, -0.109, -0.979,
            -0.152, -0.146, -0.978,
            -0.520, -0.039, -0.853,
            -0.812, -0.073, -0.579,
            -0.520, -0.039, -0.853,
            -0.976, -0.035, -0.216,
            -0.812, -0.073, -0.579,
            0.976, 0.035, 0.213,
            0.976, 0.035, 0.213,
               -0.520, -0.039, -0.853
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