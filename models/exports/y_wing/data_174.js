function create_geometry_174(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            32.221, -784.641, -9.555,
            52.250, -784.641, -9.555,
            54.854, -730.312, -7.533,
            32.221, -784.641, -9.555,
            54.854, -730.312, -7.533,
            29.617, -730.312, -7.533,
            32.221, -784.641, -9.555,
            30.218, -784.641, -12.199,
            32.221, -786.643, -12.199,
            32.221, -784.641, -9.555,
            32.221, -786.643, -12.199,
            52.250, -786.643, -12.199,
            32.221, -784.641, -9.555,
            52.250, -786.643, -12.199,
            52.250, -784.641, -9.555,
            52.250, -784.641, -9.555,
            52.250, -786.643, -12.199,
            54.253, -784.641, -12.199,
            52.250, -784.641, -9.555,
            54.253, -784.641, -12.199,
            57.378, -730.312, -10.811,
            52.250, -784.641, -9.555,
            57.378, -730.312, -10.811,
            54.854, -730.312, -7.533,
            54.854, -730.312, -7.533,
            57.378, -730.312, -10.811,
            54.854, -728.309, -10.811,
            54.854, -730.312, -7.533,
            54.854, -728.309, -10.811,
            29.617, -728.309, -10.811,
            54.854, -730.312, -7.533,
            29.617, -728.309, -10.811,
            29.617, -730.312, -7.533,
            29.617, -730.312, -7.533,
            29.617, -728.309, -10.811,
            27.094, -730.312, -10.811,
            29.617, -730.312, -7.533,
            27.094, -730.312, -10.811,
            30.218, -784.641, -12.199,
            29.617, -730.312, -7.533,
            30.218, -784.641, -12.199,
            32.221, -784.641, -9.555,
            30.218, -784.641, -12.199,
            30.218, -784.641, -23.766,
            32.221, -786.643, -23.766,
            30.218, -784.641, -12.199,
            32.221, -786.643, -23.766,
            32.221, -786.643, -12.199,
            32.221, -786.643, -12.199,
            32.221, -786.643, -23.766,
            52.250, -786.643, -23.766,
            32.221, -786.643, -12.199,
            52.250, -786.643, -23.766,
            52.250, -786.643, -12.199,
            52.250, -786.643, -12.199,
            52.250, -786.643, -23.766,
            54.253, -784.641, -23.766,
            52.250, -786.643, -12.199,
            54.253, -784.641, -23.766,
            54.253, -784.641, -12.199,
            54.253, -784.641, -12.199,
            54.253, -784.641, -23.766,
            57.378, -730.312, -25.154,
            54.253, -784.641, -12.199,
            57.378, -730.312, -25.154,
            57.378, -730.312, -10.811,
            57.378, -730.312, -10.811,
            57.378, -730.312, -25.154,
            54.854, -728.309, -25.154,
            57.378, -730.312, -10.811,
            54.854, -728.309, -25.154,
            54.854, -728.309, -10.811,
            54.854, -728.309, -10.811,
            54.854, -728.309, -25.154,
            29.617, -728.309, -25.154,
            54.854, -728.309, -10.811,
            29.617, -728.309, -25.154,
            29.617, -728.309, -10.811,
            29.617, -728.309, -10.811,
            29.617, -728.309, -25.154,
            27.094, -730.312, -25.154,
            29.617, -728.309, -10.811,
            27.094, -730.312, -25.154,
            27.094, -730.312, -10.811,
            27.094, -730.312, -10.811,
            27.094, -730.312, -25.154,
            30.218, -784.641, -23.766,
            27.094, -730.312, -10.811,
            30.218, -784.641, -23.766,
            30.218, -784.641, -12.199,
            30.218, -784.641, -23.766,
            32.221, -784.641, -26.410,
            32.221, -786.643, -23.766,
            32.221, -786.643, -23.766,
            32.221, -784.641, -26.410,
            52.250, -784.641, -26.410,
            32.221, -786.643, -23.766,
            52.250, -784.641, -26.410,
            52.250, -786.643, -23.766,
            52.250, -786.643, -23.766,
            52.250, -784.641, -26.410,
            54.253, -784.641, -23.766,
            54.253, -784.641, -23.766,
            52.250, -784.641, -26.410,
            54.854, -730.312, -28.432,
            54.253, -784.641, -23.766,
            54.854, -730.312, -28.432,
            57.378, -730.312, -25.154,
            57.378, -730.312, -25.154,
            54.854, -730.312, -28.432,
            54.854, -728.309, -25.154,
            54.854, -728.309, -25.154,
            54.854, -730.312, -28.432,
            29.617, -730.312, -28.432,
            54.854, -728.309, -25.154,
            29.617, -730.312, -28.432,
            29.617, -728.309, -25.154,
            29.617, -728.309, -25.154,
            29.617, -730.312, -28.432,
            27.094, -730.312, -25.154,
            27.094, -730.312, -25.154,
            29.617, -730.312, -28.432,
            32.221, -784.641, -26.410,
            27.094, -730.312, -25.154,
            32.221, -784.641, -26.410,
            30.218, -784.641, -23.766,
            29.617, -730.312, -28.432,
            54.854, -730.312, -28.432,
            52.250, -784.641, -26.410,
            29.617, -730.312, -28.432,
            52.250, -784.641, -26.410,
               32.221, -784.641, -26.410
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            -0.623, -0.623, 0.472,
            -0.623, -0.623, 0.472,
            -0.623, -0.623, 0.472,
            0.000, -0.797, 0.604,
            0.000, -0.797, 0.604,
            0.000, -0.797, 0.604,
            0.000, -0.797, 0.604,
            0.000, -0.797, 0.604,
            0.000, -0.797, 0.604,
            0.623, -0.623, 0.472,
            0.623, -0.623, 0.472,
            0.623, -0.623, 0.472,
            0.796, -0.061, 0.603,
            0.796, -0.061, 0.603,
            0.796, -0.061, 0.603,
            0.791, -0.061, 0.609,
            0.791, -0.061, 0.609,
            0.791, -0.061, 0.609,
            0.561, 0.707, 0.432,
            0.561, 0.707, 0.432,
            0.561, 0.707, 0.432,
            0.000, 0.853, 0.521,
            0.000, 0.853, 0.521,
            -0.000, 0.853, 0.521,
            0.000, 0.853, 0.521,
            0.000, 0.853, 0.521,
            0.000, 0.853, 0.521,
            -0.561, 0.707, 0.432,
            -0.561, 0.707, 0.432,
            -0.561, 0.707, 0.432,
            -0.791, -0.061, 0.609,
            -0.791, -0.061, 0.609,
            -0.791, -0.061, 0.609,
            -0.796, -0.061, 0.603,
            -0.796, -0.061, 0.603,
            -0.796, -0.061, 0.603,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, -0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, 0.000,
            -0.707, -0.707, -0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            0.000, -1.000, 0.000,
            -0.000, -1.000, -0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, -0.000,
            0.707, -0.707, -0.000,
            0.707, -0.707, -0.000,
            0.998, -0.057, -0.000,
            0.998, -0.057, -0.000,
            0.998, -0.057, -0.000,
            0.998, -0.057, 0.000,
            0.998, -0.057, 0.000,
            0.998, -0.057, 0.000,
            0.622, 0.783, 0.000,
            0.622, 0.783, -0.000,
            0.622, 0.783, 0.000,
            0.622, 0.783, 0.000,
            0.622, 0.783, -0.000,
            0.622, 0.783, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            -0.000, 1.000, 0.000,
            -0.622, 0.783, -0.000,
            -0.622, 0.783, -0.000,
            -0.622, 0.783, -0.000,
            -0.622, 0.783, 0.000,
            -0.622, 0.783, 0.000,
            -0.622, 0.783, 0.000,
            -0.998, -0.057, 0.000,
            -0.998, -0.057, 0.000,
            -0.998, -0.057, 0.000,
            -0.998, -0.057, -0.000,
            -0.998, -0.057, -0.000,
            -0.998, -0.057, -0.000,
            -0.623, -0.623, -0.472,
            -0.623, -0.623, -0.472,
            -0.623, -0.623, -0.472,
            0.000, -0.797, -0.604,
            0.000, -0.797, -0.604,
            -0.000, -0.797, -0.604,
            0.000, -0.797, -0.604,
            0.000, -0.797, -0.604,
            -0.000, -0.797, -0.604,
            0.623, -0.623, -0.472,
            0.623, -0.623, -0.472,
            0.623, -0.623, -0.472,
            0.796, -0.061, -0.603,
            0.796, -0.061, -0.603,
            0.796, -0.061, -0.603,
            0.791, -0.061, -0.609,
            0.791, -0.061, -0.609,
            0.791, -0.061, -0.609,
            0.561, 0.707, -0.432,
            0.561, 0.707, -0.432,
            0.561, 0.707, -0.432,
            -0.000, 0.853, -0.521,
            -0.000, 0.853, -0.521,
            -0.000, 0.853, -0.521,
            -0.000, 0.853, -0.521,
            -0.000, 0.853, -0.521,
            -0.000, 0.853, -0.521,
            -0.561, 0.707, -0.432,
            -0.561, 0.707, -0.432,
            -0.561, 0.707, -0.432,
            -0.791, -0.061, -0.609,
            -0.791, -0.061, -0.609,
            -0.791, -0.061, -0.609,
            -0.796, -0.061, -0.603,
            -0.796, -0.061, -0.603,
            -0.796, -0.061, -0.603,
            -0.000, -0.037, -0.999,
            -0.000, -0.037, -0.999,
            -0.000, -0.037, -0.999,
            0.000, -0.037, -0.999,
            -0.000, -0.037, -0.999,
               0.000, -0.037, -0.999
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