function create_geometry_172(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -51.918, -784.641, -9.555,
            -31.889, -784.641, -9.555,
            -29.285, -730.312, -7.533,
            -51.918, -784.641, -9.555,
            -29.285, -730.312, -7.533,
            -54.522, -730.312, -7.533,
            -51.918, -784.641, -9.555,
            -53.921, -784.641, -12.199,
            -51.918, -786.643, -12.199,
            -51.918, -784.641, -9.555,
            -51.918, -786.643, -12.199,
            -31.889, -786.643, -12.199,
            -51.918, -784.641, -9.555,
            -31.889, -786.643, -12.199,
            -31.889, -784.641, -9.555,
            -31.889, -784.641, -9.555,
            -31.889, -786.643, -12.199,
            -29.886, -784.641, -12.199,
            -31.889, -784.641, -9.555,
            -29.886, -784.641, -12.199,
            -26.761, -730.312, -10.811,
            -31.889, -784.641, -9.555,
            -26.761, -730.312, -10.811,
            -29.285, -730.312, -7.533,
            -29.285, -730.312, -7.533,
            -26.761, -730.312, -10.811,
            -29.285, -728.309, -10.811,
            -29.285, -730.312, -7.533,
            -29.285, -728.309, -10.811,
            -54.522, -728.309, -10.811,
            -29.285, -730.312, -7.533,
            -54.522, -728.309, -10.811,
            -54.522, -730.312, -7.533,
            -54.522, -730.312, -7.533,
            -54.522, -728.309, -10.811,
            -57.045, -730.312, -10.811,
            -54.522, -730.312, -7.533,
            -57.045, -730.312, -10.811,
            -53.921, -784.641, -12.199,
            -54.522, -730.312, -7.533,
            -53.921, -784.641, -12.199,
            -51.918, -784.641, -9.555,
            -53.921, -784.641, -12.199,
            -53.921, -784.641, -23.766,
            -51.918, -786.643, -23.766,
            -53.921, -784.641, -12.199,
            -51.918, -786.643, -23.766,
            -51.918, -786.643, -12.199,
            -51.918, -786.643, -12.199,
            -51.918, -786.643, -23.766,
            -31.889, -786.643, -23.766,
            -51.918, -786.643, -12.199,
            -31.889, -786.643, -23.766,
            -31.889, -786.643, -12.199,
            -31.889, -786.643, -12.199,
            -31.889, -786.643, -23.766,
            -29.886, -784.641, -23.766,
            -31.889, -786.643, -12.199,
            -29.886, -784.641, -23.766,
            -29.886, -784.641, -12.199,
            -29.886, -784.641, -12.199,
            -29.886, -784.641, -23.766,
            -26.761, -730.312, -25.154,
            -29.886, -784.641, -12.199,
            -26.761, -730.312, -25.154,
            -26.761, -730.312, -10.811,
            -26.761, -730.312, -10.811,
            -26.761, -730.312, -25.154,
            -29.285, -728.309, -25.154,
            -26.761, -730.312, -10.811,
            -29.285, -728.309, -25.154,
            -29.285, -728.309, -10.811,
            -29.285, -728.309, -10.811,
            -29.285, -728.309, -25.154,
            -54.522, -728.309, -25.154,
            -29.285, -728.309, -10.811,
            -54.522, -728.309, -25.154,
            -54.522, -728.309, -10.811,
            -54.522, -728.309, -10.811,
            -54.522, -728.309, -25.154,
            -57.045, -730.312, -25.154,
            -54.522, -728.309, -10.811,
            -57.045, -730.312, -25.154,
            -57.045, -730.312, -10.811,
            -57.045, -730.312, -10.811,
            -57.045, -730.312, -25.154,
            -53.921, -784.641, -23.766,
            -57.045, -730.312, -10.811,
            -53.921, -784.641, -23.766,
            -53.921, -784.641, -12.199,
            -53.921, -784.641, -23.766,
            -51.918, -784.641, -26.410,
            -51.918, -786.643, -23.766,
            -51.918, -786.643, -23.766,
            -51.918, -784.641, -26.410,
            -31.889, -784.641, -26.410,
            -51.918, -786.643, -23.766,
            -31.889, -784.641, -26.410,
            -31.889, -786.643, -23.766,
            -31.889, -786.643, -23.766,
            -31.889, -784.641, -26.410,
            -29.886, -784.641, -23.766,
            -29.886, -784.641, -23.766,
            -31.889, -784.641, -26.410,
            -29.285, -730.312, -28.432,
            -29.886, -784.641, -23.766,
            -29.285, -730.312, -28.432,
            -26.761, -730.312, -25.154,
            -26.761, -730.312, -25.154,
            -29.285, -730.312, -28.432,
            -29.285, -728.309, -25.154,
            -29.285, -728.309, -25.154,
            -29.285, -730.312, -28.432,
            -54.522, -730.312, -28.432,
            -29.285, -728.309, -25.154,
            -54.522, -730.312, -28.432,
            -54.522, -728.309, -25.154,
            -54.522, -728.309, -25.154,
            -54.522, -730.312, -28.432,
            -57.045, -730.312, -25.154,
            -57.045, -730.312, -25.154,
            -54.522, -730.312, -28.432,
            -51.918, -784.641, -26.410,
            -57.045, -730.312, -25.154,
            -51.918, -784.641, -26.410,
            -53.921, -784.641, -23.766,
            -54.522, -730.312, -28.432,
            -29.285, -730.312, -28.432,
            -31.889, -784.641, -26.410,
            -54.522, -730.312, -28.432,
            -31.889, -784.641, -26.410,
               -51.918, -784.641, -26.410
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            -0.000, -0.037, 0.999,
            -0.000, -0.037, 0.999,
            -0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            0.000, -0.037, 0.999,
            -0.623, -0.623, 0.472,
            -0.623, -0.623, 0.472,
            -0.623, -0.623, 0.472,
            0.000, -0.797, 0.604,
            0.000, -0.797, 0.604,
            0.000, -0.797, 0.604,
            -0.000, -0.797, 0.604,
            -0.000, -0.797, 0.604,
            -0.000, -0.797, 0.604,
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
            -0.000, 0.853, 0.521,
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
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.707, -0.707, 0.000,
            0.998, -0.057, 0.000,
            0.998, -0.057, 0.000,
            0.998, -0.057, 0.000,
            0.998, -0.057, 0.000,
            0.998, -0.057, 0.000,
            0.998, -0.057, 0.000,
            0.622, 0.783, 0.000,
            0.622, 0.783, -0.000,
            0.622, 0.783, 0.000,
            0.622, 0.783, -0.000,
            0.622, 0.783, -0.000,
            0.622, 0.783, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, -0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            0.000, 1.000, 0.000,
            -0.000, 1.000, 0.000,
            -0.622, 0.783, 0.000,
            -0.622, 0.783, 0.000,
            -0.622, 0.783, 0.000,
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
            0.000, 0.853, -0.521,
            0.000, 0.853, -0.521,
            0.000, 0.853, -0.521,
            0.000, 0.853, -0.521,
            0.000, 0.853, -0.521,
            0.000, 0.853, -0.521,
            -0.561, 0.707, -0.432,
            -0.561, 0.707, -0.432,
            -0.561, 0.707, -0.432,
            -0.791, -0.061, -0.609,
            -0.791, -0.061, -0.609,
            -0.791, -0.061, -0.609,
            -0.796, -0.061, -0.603,
            -0.796, -0.061, -0.603,
            -0.796, -0.061, -0.603,
            0.000, -0.037, -0.999,
            -0.000, -0.037, -0.999,
            0.000, -0.037, -0.999,
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
