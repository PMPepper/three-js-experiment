function create_geometry_376(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            19.250, 434.913, -6.271,
            22.244, 434.913, -28.766,
            22.244, 439.900, -28.766,
            19.250, 434.913, -6.271,
            22.244, 439.900, -28.766,
            19.250, 439.900, -6.271,
            22.244, 434.913, -28.766,
            16.213, 434.913, -28.766,
            16.213, 439.900, -28.766,
            22.244, 434.913, -28.766,
            16.213, 439.900, -28.766,
            22.244, 439.900, -28.766,
            16.213, 434.913, -28.766,
            15.887, 434.913, -24.739,
            15.887, 439.900, -24.739,
            16.213, 434.913, -28.766,
            15.887, 439.900, -24.739,
            16.213, 439.900, -28.766,
            15.887, 434.913, -24.739,
            13.736, 434.913, -24.739,
            13.736, 439.900, -24.739,
            15.887, 434.913, -24.739,
            13.736, 439.900, -24.739,
            15.887, 439.900, -24.739,
            13.736, 434.913, -24.739,
            13.418, 434.913, -28.766,
            13.418, 439.900, -28.766,
            13.736, 434.913, -24.739,
            13.418, 439.900, -28.766,
            13.736, 439.900, -24.739,
            13.418, 434.913, -28.766,
            7.456, 434.913, -28.766,
            7.456, 439.900, -28.766,
            13.418, 434.913, -28.766,
            7.456, 439.900, -28.766,
            13.418, 439.900, -28.766,
            7.456, 434.913, -28.766,
            10.832, 434.913, -6.271,
            10.832, 439.900, -6.271,
            7.456, 434.913, -28.766,
            10.832, 439.900, -6.271,
            7.456, 439.900, -28.766,
            10.832, 434.913, -6.271,
            19.250, 434.913, -6.271,
            19.250, 439.900, -6.271,
            10.832, 434.913, -6.271,
            19.250, 439.900, -6.271,
            10.832, 439.900, -6.271,
            15.921, 434.913, -20.747,
            14.798, 434.913, -11.266,
            14.798, 439.900, -11.266,
            15.921, 434.913, -20.747,
            14.798, 439.900, -11.266,
            15.921, 439.900, -20.747,
            14.798, 434.913, -11.266,
            13.902, 434.913, -20.747,
            13.902, 439.900, -20.747,
            14.798, 434.913, -11.266,
            13.902, 439.900, -20.747,
            14.798, 439.900, -11.266,
            13.902, 434.913, -20.747,
            15.921, 434.913, -20.747,
            15.921, 439.900, -20.747,
            13.902, 434.913, -20.747,
            15.921, 439.900, -20.747,
            13.902, 439.900, -20.747,
            6.449, 434.913, -6.271,
            6.449, 434.913, -28.766,
            6.449, 439.900, -28.766,
            6.449, 434.913, -6.271,
            6.449, 439.900, -28.766,
            6.449, 439.900, -6.271,
            6.449, 434.913, -28.766,
            -2.958, 434.913, -28.766,
            -2.958, 439.900, -28.766,
            6.449, 434.913, -28.766,
            -2.958, 439.900, -28.766,
            6.449, 439.900, -28.766,
            -2.958, 434.913, -28.766,
            -2.958, 434.913, -24.253,
            -2.958, 439.900, -24.253,
            -2.958, 434.913, -28.766,
            -2.958, 439.900, -24.253,
            -2.958, 439.900, -28.766,
            -2.958, 434.913, -24.253,
            0.583, 434.913, -24.253,
            0.583, 439.900, -24.253,
            -2.958, 434.913, -24.253,
            0.583, 439.900, -24.253,
            -2.958, 439.900, -24.253,
            0.583, 434.913, -24.253,
            0.583, 434.913, -6.271,
            0.583, 439.900, -6.271,
            0.583, 434.913, -24.253,
            0.583, 439.900, -6.271,
            0.583, 439.900, -24.253,
            0.583, 434.913, -6.271,
            6.449, 434.913, -6.271,
            6.449, 439.900, -6.271,
            0.583, 434.913, -6.271,
            6.449, 439.900, -6.271,
            0.583, 439.900, -6.271,
            -14.804, 434.913, -6.271,
            -13.459, 434.913, -16.775,
            -13.459, 439.900, -16.775,
            -14.804, 434.913, -6.271,
            -13.459, 439.900, -16.775,
            -14.804, 439.900, -6.271,
            -13.459, 434.913, -16.775,
            -12.631, 434.913, -11.048,
            -12.631, 439.900, -11.048,
            -13.459, 434.913, -16.775,
            -12.631, 439.900, -11.048,
            -13.459, 439.900, -16.775,
            -12.631, 434.913, -11.048,
            -11.940, 434.913, -6.271,
            -11.940, 439.900, -6.271,
            -12.631, 434.913, -11.048,
            -11.940, 439.900, -6.271,
            -12.631, 439.900, -11.048,
            -11.940, 434.913, -6.271,
            -4.381, 434.913, -6.271,
            -4.381, 439.900, -6.271,
            -11.940, 434.913, -6.271,
            -4.381, 439.900, -6.271,
            -11.940, 439.900, -6.271,
            -4.381, 434.913, -6.271,
            -4.381, 434.913, -28.766,
            -4.381, 439.900, -28.766,
            -4.381, 434.913, -6.271,
            -4.381, 439.900, -28.766,
            -4.381, 439.900, -6.271,
            -4.381, 434.913, -28.766,
            -9.484, 434.913, -28.766,
            -9.484, 439.900, -28.766,
            -4.381, 434.913, -28.766,
            -9.484, 439.900, -28.766,
            -4.381, 439.900, -28.766,
            -9.484, 434.913, -28.766,
            -9.501, 434.913, -13.927,
            -9.501, 439.900, -13.927,
            -9.484, 434.913, -28.766,
            -9.501, 439.900, -13.927,
            -9.484, 439.900, -28.766,
            -9.501, 434.913, -13.927,
            -11.636, 434.913, -28.766,
            -11.636, 439.900, -28.766,
            -9.501, 434.913, -13.927,
            -11.636, 439.900, -28.766,
            -9.501, 439.900, -13.927,
            -11.636, 434.913, -28.766,
            -15.281, 434.913, -28.766,
            -15.281, 439.900, -28.766,
            -11.636, 434.913, -28.766,
            -15.281, 439.900, -28.766,
            -11.636, 439.900, -28.766,
            -15.281, 434.913, -28.766,
            -17.312, 434.913, -13.580,
            -17.312, 439.900, -13.580,
            -15.281, 434.913, -28.766,
            -17.312, 439.900, -13.580,
            -15.281, 439.900, -28.766,
            -17.312, 434.913, -13.580,
            -17.329, 434.913, -28.766,
            -17.329, 439.900, -28.766,
            -17.312, 434.913, -13.580,
            -17.329, 439.900, -28.766,
            -17.312, 439.900, -13.580,
            -17.329, 434.913, -28.766,
            -22.432, 434.913, -28.766,
            -22.432, 439.900, -28.766,
            -17.329, 434.913, -28.766,
            -22.432, 439.900, -28.766,
            -17.329, 439.900, -28.766,
            -22.432, 434.913, -28.766,
            -22.432, 434.913, -6.271,
            -22.432, 439.900, -6.271,
            -22.432, 434.913, -28.766,
            -22.432, 439.900, -6.271,
            -22.432, 439.900, -28.766,
            -22.432, 434.913, -6.271,
            -14.804, 434.913, -6.271,
            -14.804, 439.900, -6.271,
            -22.432, 434.913, -6.271,
            -14.804, 439.900, -6.271,
            -22.432, 439.900, -6.271,
            19.250, 434.913, -6.271,
            14.798, 434.913, -11.266,
            15.921, 434.913, -20.747,
            15.921, 434.913, -20.747,
            22.244, 434.913, -28.766,
            19.250, 434.913, -6.271,
            10.832, 434.913, -6.271,
            14.798, 434.913, -11.266,
            19.250, 434.913, -6.271,
            7.456, 434.913, -28.766,
            14.798, 434.913, -11.266,
            10.832, 434.913, -6.271,
            7.456, 434.913, -28.766,
            13.902, 434.913, -20.747,
            14.798, 434.913, -11.266,
            13.418, 434.913, -28.766,
            13.902, 434.913, -20.747,
            7.456, 434.913, -28.766,
            13.736, 434.913, -24.739,
            13.902, 434.913, -20.747,
            13.418, 434.913, -28.766,
            15.921, 434.913, -20.747,
            16.213, 434.913, -28.766,
            22.244, 434.913, -28.766,
            15.921, 434.913, -20.747,
            15.887, 434.913, -24.739,
            16.213, 434.913, -28.766,
            15.887, 434.913, -24.739,
            13.902, 434.913, -20.747,
            13.736, 434.913, -24.739,
            15.921, 434.913, -20.747,
            13.902, 434.913, -20.747,
            15.887, 434.913, -24.739,
            0.583, 434.913, -24.253,
            6.449, 434.913, -6.271,
            0.583, 434.913, -6.271,
            0.583, 434.913, -24.253,
            6.449, 434.913, -28.766,
            6.449, 434.913, -6.271,
            0.583, 434.913, -24.253,
            -2.958, 434.913, -28.766,
            6.449, 434.913, -28.766,
            0.583, 434.913, -24.253,
            -2.958, 434.913, -24.253,
            -2.958, 434.913, -28.766,
            -17.329, 434.913, -28.766,
            -22.432, 434.913, -6.271,
            -22.432, 434.913, -28.766,
            -17.312, 434.913, -13.580,
            -22.432, 434.913, -6.271,
            -17.329, 434.913, -28.766,
            -17.312, 434.913, -13.580,
            -14.804, 434.913, -6.271,
            -22.432, 434.913, -6.271,
            -17.312, 434.913, -13.580,
            -13.459, 434.913, -16.775,
            -14.804, 434.913, -6.271,
            -15.281, 434.913, -28.766,
            -13.459, 434.913, -16.775,
            -17.312, 434.913, -13.580,
            -11.636, 434.913, -28.766,
            -13.459, 434.913, -16.775,
            -15.281, 434.913, -28.766,
            -9.501, 434.913, -13.927,
            -13.459, 434.913, -16.775,
            -11.636, 434.913, -28.766,
            -9.501, 434.913, -13.927,
            -12.631, 434.913, -11.048,
            -13.459, 434.913, -16.775,
            -4.381, 434.913, -6.271,
            -9.484, 434.913, -28.766,
            -4.381, 434.913, -28.766,
            -4.381, 434.913, -6.271,
            -9.501, 434.913, -13.927,
            -9.484, 434.913, -28.766,
            -11.940, 434.913, -6.271,
            -9.501, 434.913, -13.927,
            -4.381, 434.913, -6.271,
            -12.631, 434.913, -11.048,
            -9.501, 434.913, -13.927,
            -11.940, 434.913, -6.271,
            19.250, 439.900, -6.271,
            15.921, 439.900, -20.747,
            14.798, 439.900, -11.266,
            15.921, 439.900, -20.747,
            19.250, 439.900, -6.271,
            22.244, 439.900, -28.766,
            10.832, 439.900, -6.271,
            19.250, 439.900, -6.271,
            14.798, 439.900, -11.266,
            7.456, 439.900, -28.766,
            10.832, 439.900, -6.271,
            14.798, 439.900, -11.266,
            7.456, 439.900, -28.766,
            14.798, 439.900, -11.266,
            13.902, 439.900, -20.747,
            13.418, 439.900, -28.766,
            7.456, 439.900, -28.766,
            13.902, 439.900, -20.747,
            13.736, 439.900, -24.739,
            13.418, 439.900, -28.766,
            13.902, 439.900, -20.747,
            15.921, 439.900, -20.747,
            22.244, 439.900, -28.766,
            16.213, 439.900, -28.766,
            15.921, 439.900, -20.747,
            16.213, 439.900, -28.766,
            15.887, 439.900, -24.739,
            15.887, 439.900, -24.739,
            13.736, 439.900, -24.739,
            13.902, 439.900, -20.747,
            15.921, 439.900, -20.747,
            15.887, 439.900, -24.739,
            13.902, 439.900, -20.747,
            0.583, 439.900, -24.253,
            0.583, 439.900, -6.271,
            6.449, 439.900, -6.271,
            0.583, 439.900, -24.253,
            6.449, 439.900, -6.271,
            6.449, 439.900, -28.766,
            0.583, 439.900, -24.253,
            6.449, 439.900, -28.766,
            -2.958, 439.900, -28.766,
            0.583, 439.900, -24.253,
            -2.958, 439.900, -28.766,
            -2.958, 439.900, -24.253,
            -17.329, 439.900, -28.766,
            -22.432, 439.900, -28.766,
            -22.432, 439.900, -6.271,
            -17.312, 439.900, -13.580,
            -17.329, 439.900, -28.766,
            -22.432, 439.900, -6.271,
            -17.312, 439.900, -13.580,
            -22.432, 439.900, -6.271,
            -14.804, 439.900, -6.271,
            -17.312, 439.900, -13.580,
            -14.804, 439.900, -6.271,
            -13.459, 439.900, -16.775,
            -15.281, 439.900, -28.766,
            -17.312, 439.900, -13.580,
            -13.459, 439.900, -16.775,
            -11.636, 439.900, -28.766,
            -15.281, 439.900, -28.766,
            -13.459, 439.900, -16.775,
            -9.501, 439.900, -13.927,
            -11.636, 439.900, -28.766,
            -13.459, 439.900, -16.775,
            -9.501, 439.900, -13.927,
            -13.459, 439.900, -16.775,
            -12.631, 439.900, -11.048,
            -4.381, 439.900, -6.271,
            -4.381, 439.900, -28.766,
            -9.484, 439.900, -28.766,
            -4.381, 439.900, -6.271,
            -9.484, 439.900, -28.766,
            -9.501, 439.900, -13.927,
            -11.940, 439.900, -6.271,
            -4.381, 439.900, -6.271,
            -9.501, 439.900, -13.927,
            -12.631, 439.900, -11.048,
            -11.940, 439.900, -6.271,
               -9.501, 439.900, -13.927
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.991, 0.000, 0.132,
            0.991, 0.000, 0.132,
            0.991, 0.000, 0.132,
            0.991, 0.000, 0.132,
            0.991, 0.000, 0.132,
            0.991, 0.000, 0.132,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.997, 0.000, -0.081,
            -0.997, 0.000, -0.081,
            -0.997, 0.000, -0.081,
            -0.997, 0.000, -0.081,
            -0.997, 0.000, -0.081,
            -0.997, 0.000, -0.081,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.997, -0.000, -0.079,
            0.997, -0.000, -0.079,
            0.997, -0.000, -0.079,
            0.997, -0.000, -0.079,
            0.997, -0.000, -0.079,
            0.997, -0.000, -0.079,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.989, -0.000, 0.148,
            -0.989, -0.000, 0.148,
            -0.989, -0.000, 0.148,
            -0.989, -0.000, 0.148,
            -0.989, -0.000, 0.148,
            -0.989, -0.000, 0.148,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -0.993, -0.000, -0.118,
            -0.993, -0.000, -0.118,
            -0.993, -0.000, -0.118,
            -0.993, -0.000, -0.118,
            -0.993, -0.000, -0.118,
            -0.993, 0.000, -0.118,
            0.996, 0.000, -0.094,
            0.996, -0.000, -0.094,
            0.996, 0.000, -0.094,
            0.996, 0.000, -0.094,
            0.996, 0.000, -0.094,
            0.996, 0.000, -0.094,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -0.000, -0.000, -1.000,
            -1.000, -0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            -1.000, -0.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.992, -0.000, 0.127,
            0.992, -0.000, 0.127,
            0.992, -0.000, 0.127,
            0.992, -0.000, 0.127,
            0.992, -0.000, 0.127,
            0.992, 0.000, 0.127,
            -0.990, 0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, 0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, 0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, -0.000, 0.143,
            -0.990, -0.000, 0.143,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, -0.000, 1.000,
            0.000, 0.000, 1.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            1.000, 0.000, -0.000,
            -0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -0.000, 0.000, -1.000,
            -1.000, -0.000, -0.001,
            -1.000, 0.000, -0.001,
            -1.000, -0.000, -0.001,
            -1.000, -0.000, -0.001,
            -1.000, -0.000, -0.001,
            -1.000, -0.000, -0.001,
            0.990, 0.000, -0.142,
            0.990, 0.000, -0.142,
            0.990, 0.000, -0.142,
            0.990, 0.000, -0.142,
            0.990, 0.000, -0.142,
            0.990, 0.000, -0.142,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -0.991, 0.000, -0.133,
            -0.991, 0.000, -0.133,
            -0.991, 0.000, -0.133,
            -0.991, 0.000, -0.133,
            -0.991, 0.000, -0.133,
            -0.991, 0.000, -0.133,
            1.000, 0.000, -0.001,
            1.000, 0.000, -0.001,
            1.000, 0.000, -0.001,
            1.000, 0.000, -0.001,
            1.000, 0.000, -0.001,
            1.000, 0.000, -0.001,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            0.000, 0.000, -1.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            -1.000, 0.000, 0.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
            0.000, 0.000, 1.000,
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
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
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
            0.000, -1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
               0.000, 1.000, -0.000
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
