function create_geometry_212(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            370.963, 328.440, -130.183,
            370.963, 141.799, -130.183,
            364.977, 328.440, -130.500,
            370.963, 141.799, -130.183,
            364.977, 141.799, -130.500,
            364.977, 328.440, -130.500,
            370.963, 141.799, -130.183,
            370.641, 141.799, -126.922,
            364.977, 141.799, -130.500,
            370.641, 141.799, -126.922,
            364.545, 141.799, -127.302,
            364.977, 141.799, -130.500,
            370.641, 141.799, -126.922,
            370.642, 328.440, -126.922,
            364.545, 141.799, -127.302,
            370.642, 328.440, -126.922,
            364.545, 328.440, -127.302,
            364.545, 141.799, -127.302,
            370.642, 328.440, -126.922,
            370.963, 328.440, -130.183,
            364.545, 328.440, -127.302,
            370.963, 328.440, -130.183,
            364.977, 328.440, -130.500,
            364.545, 328.440, -127.302,
            376.824, 328.440, -129.416,
            376.824, 141.799, -129.416,
            370.963, 328.440, -130.183,
            376.824, 141.799, -129.416,
            370.963, 141.799, -130.183,
            370.963, 328.440, -130.183,
            376.824, 141.799, -129.416,
            376.296, 141.799, -126.183,
            370.963, 141.799, -130.183,
            376.296, 141.799, -126.183,
            370.641, 141.799, -126.922,
            370.963, 141.799, -130.183,
            376.296, 141.799, -126.183,
            376.296, 328.440, -126.183,
            370.641, 141.799, -126.922,
            376.296, 328.440, -126.183,
            370.642, 328.440, -126.922,
            370.641, 141.799, -126.922,
            376.296, 328.440, -126.183,
            376.824, 328.440, -129.416,
            370.642, 328.440, -126.922,
            376.824, 328.440, -129.416,
            370.963, 328.440, -130.183,
            370.642, 328.440, -126.922,
            382.624, 328.440, -128.279,
            382.624, 141.799, -128.279,
            376.824, 328.440, -129.416,
            382.624, 141.799, -128.279,
            376.824, 141.799, -129.416,
            376.824, 328.440, -129.416,
            382.624, 141.799, -128.279,
            381.892, 141.799, -125.086,
            376.824, 141.799, -129.416,
            381.892, 141.799, -125.086,
            376.296, 141.799, -126.183,
            376.824, 141.799, -129.416,
            381.892, 141.799, -125.086,
            381.892, 328.440, -125.086,
            376.296, 141.799, -126.183,
            381.892, 328.440, -125.086,
            376.296, 328.440, -126.183,
            376.296, 141.799, -126.183,
            381.892, 328.440, -125.086,
            382.624, 328.440, -128.279,
            376.296, 328.440, -126.183,
            382.624, 328.440, -128.279,
            376.824, 328.440, -129.416,
            376.296, 328.440, -126.183,
            388.340, 328.440, -126.777,
            388.340, 141.799, -126.777,
            382.624, 328.440, -128.279,
            388.340, 141.799, -126.777,
            382.624, 141.799, -128.279,
            382.624, 328.440, -128.279,
            388.340, 141.799, -126.777,
            387.407, 141.799, -123.636,
            382.624, 141.799, -128.279,
            387.407, 141.799, -123.636,
            381.892, 141.799, -125.086,
            382.624, 141.799, -128.279,
            387.407, 141.799, -123.636,
            387.407, 328.440, -123.636,
            381.892, 141.799, -125.086,
            387.407, 328.440, -123.636,
            381.892, 328.440, -125.086,
            381.892, 141.799, -125.086,
            387.407, 328.440, -123.636,
            388.340, 328.440, -126.777,
            381.892, 328.440, -125.086,
            388.340, 328.440, -126.777,
            382.624, 328.440, -128.279,
            381.892, 328.440, -125.086,
            393.949, 328.440, -124.914,
            393.949, 141.799, -124.914,
            388.340, 328.440, -126.777,
            393.949, 141.799, -124.914,
            388.340, 141.799, -126.777,
            388.340, 328.440, -126.777,
            393.949, 141.799, -124.914,
            392.819, 141.799, -121.839,
            388.340, 141.799, -126.777,
            392.819, 141.799, -121.839,
            387.407, 141.799, -123.636,
            388.340, 141.799, -126.777,
            392.819, 141.799, -121.839,
            392.819, 328.440, -121.839,
            387.407, 141.799, -123.636,
            392.819, 328.440, -121.839,
            387.407, 328.440, -123.636,
            387.407, 141.799, -123.636,
            392.819, 328.440, -121.839,
            393.949, 328.440, -124.914,
            387.407, 328.440, -123.636,
            393.949, 328.440, -124.914,
            388.340, 328.440, -126.777,
            387.407, 328.440, -123.636,
            399.429, 328.440, -122.700,
            399.429, 141.799, -122.700,
            393.949, 328.440, -124.914,
            399.429, 141.799, -122.700,
            393.949, 141.799, -124.914,
            393.949, 328.440, -124.914,
            399.429, 141.799, -122.700,
            398.106, 141.799, -119.703,
            393.949, 141.799, -124.914,
            398.106, 141.799, -119.703,
            392.819, 141.799, -121.839,
            393.949, 141.799, -124.914,
            398.106, 141.799, -119.703,
            398.106, 328.440, -119.703,
            392.819, 141.799, -121.839,
            398.106, 328.440, -119.703,
            392.819, 328.440, -121.839,
            392.819, 141.799, -121.839,
            398.106, 328.440, -119.703,
            399.429, 328.440, -122.700,
            392.819, 328.440, -121.839,
            399.429, 328.440, -122.700,
            393.949, 328.440, -124.914,
            392.819, 328.440, -121.839,
            404.758, 328.440, -120.143,
            404.758, 141.799, -120.143,
            399.429, 328.440, -122.700,
            404.758, 141.799, -120.143,
            399.429, 141.799, -122.700,
            399.429, 328.440, -122.700,
            404.758, 141.799, -120.143,
            403.247, 141.799, -117.236,
            399.429, 141.799, -122.700,
            403.247, 141.799, -117.236,
            398.106, 141.799, -119.703,
            399.429, 141.799, -122.700,
            403.247, 141.799, -117.236,
            403.247, 328.440, -117.236,
            398.106, 141.799, -119.703,
            403.247, 328.440, -117.236,
            398.106, 328.440, -119.703,
            398.106, 141.799, -119.703,
            403.247, 328.440, -117.236,
            404.758, 328.440, -120.143,
            398.106, 328.440, -119.703,
            404.758, 328.440, -120.143,
            399.429, 328.440, -122.700,
            398.106, 328.440, -119.703,
            409.914, 328.440, -117.253,
            409.914, 141.799, -117.253,
            404.758, 328.440, -120.143,
            409.914, 141.799, -117.253,
            404.758, 141.799, -120.143,
            404.758, 328.440, -120.143,
            409.914, 141.799, -117.253,
            408.222, 141.799, -114.448,
            404.758, 141.799, -120.143,
            408.222, 141.799, -114.448,
            403.247, 141.799, -117.236,
            404.758, 141.799, -120.143,
            408.222, 141.799, -114.448,
            408.222, 328.440, -114.448,
            403.247, 141.799, -117.236,
            408.222, 328.440, -114.448,
            403.247, 328.440, -117.236,
            403.247, 141.799, -117.236,
            408.222, 328.440, -114.448,
            409.914, 328.440, -117.253,
            403.247, 328.440, -117.236,
            409.914, 328.440, -117.253,
            404.758, 328.440, -120.143,
            403.247, 328.440, -117.236,
            414.876, 328.440, -114.042,
            414.876, 141.799, -114.042,
            409.914, 328.440, -117.253,
            414.876, 141.799, -114.042,
            409.914, 141.799, -117.253,
            409.914, 328.440, -117.253,
            414.876, 141.799, -114.042,
            413.009, 141.799, -111.349,
            409.914, 141.799, -117.253,
            413.009, 141.799, -111.349,
            408.222, 141.799, -114.448,
            409.914, 141.799, -117.253,
            413.009, 141.799, -111.349,
            413.009, 328.440, -111.349,
            408.222, 141.799, -114.448,
            413.009, 328.440, -111.349,
            408.222, 328.440, -114.448,
            408.222, 141.799, -114.448,
            413.009, 328.440, -111.349,
            414.876, 328.440, -114.042,
            408.222, 328.440, -114.448,
            414.876, 328.440, -114.042,
            409.914, 328.440, -117.253,
            408.222, 328.440, -114.448,
            419.624, 328.440, -110.523,
            419.624, 141.799, -110.523,
            414.876, 328.440, -114.042,
            419.624, 141.799, -110.523,
            414.876, 141.799, -114.042,
            414.876, 328.440, -114.042,
            419.624, 141.799, -110.523,
            417.590, 141.799, -107.954,
            414.876, 141.799, -114.042,
            417.590, 141.799, -107.954,
            413.009, 141.799, -111.349,
            414.876, 141.799, -114.042,
            417.590, 141.799, -107.954,
            417.590, 328.440, -107.954,
            413.009, 141.799, -111.349,
            417.590, 328.440, -107.954,
            413.009, 328.440, -111.349,
            413.009, 141.799, -111.349,
            417.590, 328.440, -107.954,
            419.624, 328.440, -110.523,
            413.009, 328.440, -111.349,
            419.624, 328.440, -110.523,
            414.876, 328.440, -114.042,
            413.009, 328.440, -111.349,
            424.139, 328.440, -106.709,
            424.139, 141.799, -106.709,
            419.624, 328.440, -110.523,
            424.139, 141.799, -106.709,
            419.624, 141.799, -110.523,
            419.624, 328.440, -110.523,
            424.139, 141.799, -106.709,
            421.947, 141.799, -104.274,
            419.624, 141.799, -110.523,
            421.947, 141.799, -104.274,
            417.590, 141.799, -107.954,
            419.624, 141.799, -110.523,
            421.947, 141.799, -104.274,
            421.947, 328.440, -104.274,
            417.590, 141.799, -107.954,
            421.947, 328.440, -104.274,
            417.590, 328.440, -107.954,
            417.590, 141.799, -107.954,
            421.947, 328.440, -104.274,
            424.139, 328.440, -106.709,
            417.590, 328.440, -107.954,
            424.139, 328.440, -106.709,
            419.624, 328.440, -110.523,
            417.590, 328.440, -107.954,
            364.977, 328.440, -130.500,
            364.977, 141.799, -130.500,
            364.764, 235.120, -128.952,
            364.977, 141.799, -130.500,
            364.545, 141.799, -127.302,
            364.764, 235.120, -128.952,
            364.545, 141.799, -127.302,
            364.545, 328.440, -127.302,
            364.764, 235.120, -128.952,
            364.545, 328.440, -127.302,
            364.977, 328.440, -130.500,
            364.764, 235.120, -128.952,
            424.139, 141.799, -106.709,
            424.139, 328.440, -106.709,
            423.043, 235.120, -105.492,
            421.947, 141.799, -104.274,
            424.139, 141.799, -106.709,
            423.043, 235.120, -105.492,
            421.947, 328.440, -104.274,
            421.947, 141.799, -104.274,
            423.043, 235.120, -105.492,
            424.139, 328.440, -106.709,
            421.947, 328.440, -104.274,
               423.043, 235.120, -105.492
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.022, 0.000, 1.000,
            0.022, 0.000, 1.000,
            -0.017, 0.000, 1.000,
            0.022, 0.000, 1.000,
            -0.017, 0.000, 1.000,
            -0.017, 0.000, 1.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.026, -0.000, -1.000,
            -0.026, -0.000, -1.000,
            0.008, -0.000, -1.000,
            -0.026, -0.000, -1.000,
            0.008, -0.000, -1.000,
            0.008, -0.000, -1.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.092, 0.000, 0.996,
            0.092, 0.000, 0.996,
            0.022, 0.000, 1.000,
            0.092, 0.000, 0.996,
            0.022, 0.000, 1.000,
            0.022, 0.000, 1.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.092, 0.000, -0.996,
            -0.092, -0.000, -0.996,
            -0.026, -0.000, -1.000,
            -0.092, -0.000, -0.996,
            -0.026, -0.000, -1.000,
            -0.026, -0.000, -1.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, -0.000,
            0.155, 0.000, 0.988,
            0.155, 0.000, 0.988,
            0.092, 0.000, 0.996,
            0.155, 0.000, 0.988,
            0.092, 0.000, 0.996,
            0.092, 0.000, 0.996,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.155, -0.000, -0.988,
            -0.155, 0.000, -0.988,
            -0.092, 0.000, -0.996,
            -0.155, 0.000, -0.988,
            -0.092, -0.000, -0.996,
            -0.092, 0.000, -0.996,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.217, 0.000, 0.976,
            0.217, 0.000, 0.976,
            0.155, 0.000, 0.988,
            0.217, 0.000, 0.976,
            0.155, 0.000, 0.988,
            0.155, 0.000, 0.988,
            -0.000, 1.000, 0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.217, -0.000, -0.976,
            -0.217, -0.000, -0.976,
            -0.155, -0.000, -0.988,
            -0.217, -0.000, -0.976,
            -0.155, 0.000, -0.988,
            -0.155, -0.000, -0.988,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.279, 0.000, 0.960,
            0.279, 0.000, 0.960,
            0.217, 0.000, 0.976,
            0.279, 0.000, 0.960,
            0.217, 0.000, 0.976,
            0.217, 0.000, 0.976,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            -0.279, -0.000, -0.960,
            -0.279, -0.000, -0.960,
            -0.217, -0.000, -0.976,
            -0.279, -0.000, -0.960,
            -0.217, -0.000, -0.976,
            -0.217, -0.000, -0.976,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.339, 0.000, 0.941,
            0.339, 0.000, 0.941,
            0.279, 0.000, 0.960,
            0.339, 0.000, 0.941,
            0.279, 0.000, 0.960,
            0.279, 0.000, 0.960,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.339, -0.000, -0.941,
            -0.339, -0.000, -0.941,
            -0.279, -0.000, -0.960,
            -0.339, -0.000, -0.941,
            -0.279, -0.000, -0.960,
            -0.279, -0.000, -0.960,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.398, 0.000, 0.917,
            0.398, -0.000, 0.917,
            0.339, 0.000, 0.941,
            0.398, -0.000, 0.917,
            0.339, 0.000, 0.941,
            0.339, 0.000, 0.941,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.398, -0.000, -0.917,
            -0.398, -0.000, -0.917,
            -0.339, -0.000, -0.941,
            -0.398, -0.000, -0.917,
            -0.339, -0.000, -0.941,
            -0.339, -0.000, -0.941,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.455, 0.000, 0.890,
            0.455, 0.000, 0.890,
            0.398, 0.000, 0.917,
            0.455, 0.000, 0.890,
            0.398, -0.000, 0.917,
            0.398, 0.000, 0.917,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.455, -0.000, -0.890,
            -0.455, -0.000, -0.890,
            -0.398, -0.000, -0.917,
            -0.455, -0.000, -0.890,
            -0.398, -0.000, -0.917,
            -0.398, -0.000, -0.917,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.511, 0.000, 0.860,
            0.511, 0.000, 0.860,
            0.455, 0.000, 0.890,
            0.511, 0.000, 0.860,
            0.455, 0.000, 0.890,
            0.455, 0.000, 0.890,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, -0.000,
            -0.511, -0.000, -0.860,
            -0.511, -0.000, -0.860,
            -0.455, -0.000, -0.890,
            -0.511, -0.000, -0.860,
            -0.455, -0.000, -0.890,
            -0.455, -0.000, -0.890,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            -0.000, -1.000, 0.000,
            -0.000, -1.000, 0.000,
            0.564, -0.000, 0.825,
            0.564, 0.000, 0.825,
            0.511, 0.000, 0.860,
            0.564, 0.000, 0.825,
            0.511, 0.000, 0.860,
            0.511, 0.000, 0.860,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.564, -0.000, -0.825,
            -0.564, -0.000, -0.825,
            -0.511, -0.000, -0.860,
            -0.564, -0.000, -0.825,
            -0.511, -0.000, -0.860,
            -0.511, -0.000, -0.860,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.590, -0.000, 0.807,
            0.590, 0.000, 0.807,
            0.564, -0.000, 0.825,
            0.590, 0.000, 0.807,
            0.564, 0.000, 0.825,
            0.564, -0.000, 0.825,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.590, -0.000, -0.807,
            -0.590, -0.000, -0.807,
            -0.564, -0.000, -0.825,
            -0.590, -0.000, -0.807,
            -0.564, -0.000, -0.825,
            -0.564, -0.000, -0.825,
            -0.000, -1.000, -0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.998, -0.000, 0.064,
            -0.998, 0.000, 0.064,
            -0.998, 0.000, 0.064,
            -0.998, 0.000, 0.064,
            -0.998, 0.000, 0.064,
            -0.998, 0.000, 0.064,
            -0.998, 0.000, 0.064,
            -0.998, -0.000, 0.064,
            -0.998, 0.000, 0.064,
            -0.998, -0.000, 0.064,
            -0.998, -0.000, 0.064,
            -0.998, 0.000, 0.064,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
            0.788, -0.000, -0.616,
               0.788, -0.000, -0.616
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
