function create_geometry_428(scene)
{
      var mesh;
      var material;
      var geometry;
         geometry = new THREE.BufferGeometry();
         geometry.attributes = {
         position: {
            itemSize: 3,
            array: new Float32Array([
            -24.389, -476.132, 83.257,
            -23.998, -476.227, 84.185,
            -18.313, -333.181, 97.027,
            -23.998, -476.227, 84.185,
            -17.927, -333.278, 97.955,
            -18.313, -333.181, 97.027,
            -23.998, -476.227, 84.185,
            -23.054, -476.260, 84.570,
            -17.927, -333.278, 97.955,
            -23.054, -476.260, 84.570,
            -16.994, -333.318, 98.340,
            -17.927, -333.278, 97.955,
            -23.054, -476.260, 84.570,
            -22.110, -476.213, 84.186,
            -16.994, -333.318, 98.340,
            -22.110, -476.213, 84.186,
            -16.061, -333.277, 97.955,
            -16.994, -333.318, 98.340,
            -22.110, -476.213, 84.186,
            -21.719, -476.113, 83.259,
            -16.061, -333.277, 97.955,
            -21.719, -476.113, 83.259,
            -15.674, -333.179, 97.027,
            -16.061, -333.277, 97.955,
            -21.719, -476.113, 83.259,
            -22.110, -476.018, 82.331,
            -15.674, -333.179, 97.027,
            -22.110, -476.018, 82.331,
            -16.061, -333.082, 96.100,
            -15.674, -333.179, 97.027,
            -22.110, -476.018, 82.331,
            -23.054, -475.985, 81.945,
            -16.061, -333.082, 96.100,
            -23.054, -475.985, 81.945,
            -16.994, -333.042, 95.715,
            -16.061, -333.082, 96.100,
            -23.054, -475.985, 81.945,
            -23.998, -476.032, 82.329,
            -16.994, -333.042, 95.715,
            -23.998, -476.032, 82.329,
            -17.927, -333.083, 96.100,
            -16.994, -333.042, 95.715,
            -23.998, -476.032, 82.329,
            -24.389, -476.132, 83.257,
            -17.927, -333.083, 96.100,
            -24.389, -476.132, 83.257,
            -18.313, -333.181, 97.027,
            -17.927, -333.083, 96.100,
            -23.903, -477.771, 83.084,
            -23.568, -477.652, 84.035,
            -24.389, -476.132, 83.257,
            -23.568, -477.652, 84.035,
            -23.998, -476.227, 84.185,
            -24.389, -476.132, 83.257,
            -23.568, -477.652, 84.035,
            -22.761, -477.169, 84.474,
            -23.998, -476.227, 84.185,
            -22.761, -477.169, 84.474,
            -23.054, -476.260, 84.570,
            -23.998, -476.227, 84.185,
            -22.761, -477.169, 84.474,
            -21.954, -476.606, 84.145,
            -23.054, -476.260, 84.570,
            -21.954, -476.606, 84.145,
            -22.110, -476.213, 84.186,
            -23.054, -476.260, 84.570,
            -21.954, -476.606, 84.145,
            -21.619, -476.291, 83.240,
            -22.110, -476.213, 84.186,
            -21.619, -476.291, 83.240,
            -21.719, -476.113, 83.259,
            -22.110, -476.213, 84.186,
            -21.619, -476.291, 83.240,
            -21.954, -476.411, 82.289,
            -21.719, -476.113, 83.259,
            -21.954, -476.411, 82.289,
            -22.110, -476.018, 82.331,
            -21.719, -476.113, 83.259,
            -21.954, -476.411, 82.289,
            -22.761, -476.893, 81.850,
            -22.110, -476.018, 82.331,
            -22.761, -476.893, 81.850,
            -23.054, -475.985, 81.945,
            -22.110, -476.018, 82.331,
            -22.761, -476.893, 81.850,
            -23.568, -477.457, 82.179,
            -23.054, -475.985, 81.945,
            -23.568, -477.457, 82.179,
            -23.998, -476.032, 82.329,
            -23.054, -475.985, 81.945,
            -23.568, -477.457, 82.179,
            -23.903, -477.771, 83.084,
            -23.998, -476.032, 82.329,
            -23.903, -477.771, 83.084,
            -24.389, -476.132, 83.257,
            -23.998, -476.032, 82.329,
            -22.684, -478.912, 82.964,
            -22.485, -478.666, 83.928,
            -23.903, -477.771, 83.084,
            -22.485, -478.666, 83.928,
            -23.568, -477.652, 84.035,
            -23.903, -477.771, 83.084,
            -22.485, -478.666, 83.928,
            -22.004, -477.878, 84.400,
            -23.568, -477.652, 84.035,
            -22.004, -477.878, 84.400,
            -22.761, -477.169, 84.474,
            -23.568, -477.652, 84.035,
            -22.004, -477.878, 84.400,
            -21.524, -477.009, 84.102,
            -22.761, -477.169, 84.474,
            -21.524, -477.009, 84.102,
            -21.954, -476.606, 84.145,
            -22.761, -477.169, 84.474,
            -21.524, -477.009, 84.102,
            -21.325, -476.568, 83.211,
            -21.954, -476.606, 84.145,
            -21.325, -476.568, 83.211,
            -21.619, -476.291, 83.240,
            -21.954, -476.606, 84.145,
            -21.325, -476.568, 83.211,
            -21.524, -476.814, 82.247,
            -21.619, -476.291, 83.240,
            -21.524, -476.814, 82.247,
            -21.954, -476.411, 82.289,
            -21.619, -476.291, 83.240,
            -21.524, -476.814, 82.247,
            -22.004, -477.602, 81.775,
            -21.954, -476.411, 82.289,
            -22.004, -477.602, 81.775,
            -22.761, -476.893, 81.850,
            -21.954, -476.411, 82.289,
            -22.004, -477.602, 81.775,
            -22.485, -478.471, 82.073,
            -22.761, -476.893, 81.850,
            -22.485, -478.471, 82.073,
            -23.568, -477.457, 82.179,
            -22.761, -476.893, 81.850,
            -22.485, -478.471, 82.073,
            -22.684, -478.912, 82.964,
            -23.568, -477.457, 82.179,
            -22.684, -478.912, 82.964,
            -23.903, -477.771, 83.084,
            -23.568, -477.457, 82.179,
            -20.969, -479.346, 82.919,
            -20.968, -479.055, 83.887,
            -22.684, -478.912, 82.964,
            -20.968, -479.055, 83.887,
            -22.485, -478.666, 83.928,
            -22.684, -478.912, 82.964,
            -20.968, -479.055, 83.887,
            -20.966, -478.160, 84.370,
            -22.485, -478.666, 83.928,
            -20.966, -478.160, 84.370,
            -22.004, -477.878, 84.400,
            -22.485, -478.666, 83.928,
            -20.966, -478.160, 84.370,
            -20.964, -477.183, 84.084,
            -22.004, -477.878, 84.400,
            -20.964, -477.183, 84.084,
            -21.524, -477.009, 84.102,
            -22.004, -477.878, 84.400,
            -20.964, -477.183, 84.084,
            -20.963, -476.698, 83.197,
            -21.524, -477.009, 84.102,
            -20.963, -476.698, 83.197,
            -21.325, -476.568, 83.211,
            -21.524, -477.009, 84.102,
            -20.963, -476.698, 83.197,
            -20.964, -476.988, 82.229,
            -21.325, -476.568, 83.211,
            -20.964, -476.988, 82.229,
            -21.524, -476.814, 82.247,
            -21.325, -476.568, 83.211,
            -20.964, -476.988, 82.229,
            -20.966, -477.884, 81.746,
            -21.524, -476.814, 82.247,
            -20.966, -477.884, 81.746,
            -22.004, -477.602, 81.775,
            -21.524, -476.814, 82.247,
            -20.966, -477.884, 81.746,
            -20.968, -478.860, 82.032,
            -22.004, -477.602, 81.775,
            -20.968, -478.860, 82.032,
            -22.485, -478.471, 82.073,
            -22.004, -477.602, 81.775,
            -20.968, -478.860, 82.032,
            -20.969, -479.346, 82.919,
            -22.485, -478.471, 82.073,
            -20.969, -479.346, 82.919,
            -22.684, -478.912, 82.964,
            -22.485, -478.471, 82.073,
            -11.395, -479.607, 82.891,
            -11.395, -479.260, 84.063,
            -20.969, -479.346, 82.919,
            -11.395, -479.260, 84.063,
            -20.968, -479.055, 83.887,
            -20.969, -479.346, 82.919,
            -11.395, -479.260, 84.063,
            -11.395, -478.186, 84.646,
            -20.968, -479.055, 83.887,
            -11.395, -478.186, 84.646,
            -20.966, -478.160, 84.370,
            -20.968, -479.055, 83.887,
            -11.395, -478.186, 84.646,
            -11.395, -477.015, 84.299,
            -20.966, -478.160, 84.370,
            -11.395, -477.015, 84.299,
            -20.964, -477.183, 84.084,
            -20.966, -478.160, 84.370,
            -11.395, -477.015, 84.299,
            -11.396, -476.431, 83.225,
            -20.964, -477.183, 84.084,
            -11.396, -476.431, 83.225,
            -20.963, -476.698, 83.197,
            -20.964, -477.183, 84.084,
            -11.396, -476.431, 83.225,
            -11.395, -476.779, 82.054,
            -20.963, -476.698, 83.197,
            -11.395, -476.779, 82.054,
            -20.964, -476.988, 82.229,
            -20.963, -476.698, 83.197,
            -11.395, -476.779, 82.054,
            -11.395, -477.852, 81.470,
            -20.964, -476.988, 82.229,
            -11.395, -477.852, 81.470,
            -20.966, -477.884, 81.746,
            -20.964, -476.988, 82.229,
            -11.395, -477.852, 81.470,
            -11.395, -479.024, 81.818,
            -20.966, -477.884, 81.746,
            -11.395, -479.024, 81.818,
            -20.968, -478.860, 82.032,
            -20.966, -477.884, 81.746,
            -11.395, -479.024, 81.818,
            -11.395, -479.607, 82.891,
            -20.968, -478.860, 82.032,
            -11.395, -479.607, 82.891,
            -20.969, -479.346, 82.919,
            -20.968, -478.860, 82.032,
            11.715, -479.607, 82.891,
            11.715, -479.260, 84.063,
            -11.395, -479.607, 82.891,
            11.715, -479.260, 84.063,
            -11.395, -479.260, 84.063,
            -11.395, -479.607, 82.891,
            11.715, -479.260, 84.063,
            11.715, -478.186, 84.646,
            -11.395, -479.260, 84.063,
            11.715, -478.186, 84.646,
            -11.395, -478.186, 84.646,
            -11.395, -479.260, 84.063,
            11.715, -478.186, 84.646,
            11.714, -477.015, 84.299,
            -11.395, -478.186, 84.646,
            11.714, -477.015, 84.299,
            -11.395, -477.015, 84.299,
            -11.395, -478.186, 84.646,
            11.714, -477.015, 84.299,
            11.714, -476.431, 83.225,
            -11.395, -477.015, 84.299,
            11.714, -476.431, 83.225,
            -11.396, -476.431, 83.225,
            -11.395, -477.015, 84.299,
            11.714, -476.431, 83.225,
            11.714, -476.779, 82.054,
            -11.396, -476.431, 83.225,
            11.714, -476.779, 82.054,
            -11.395, -476.779, 82.054,
            -11.396, -476.431, 83.225,
            11.714, -476.779, 82.054,
            11.715, -477.852, 81.470,
            -11.395, -476.779, 82.054,
            11.715, -477.852, 81.470,
            -11.395, -477.852, 81.470,
            -11.395, -476.779, 82.054,
            11.715, -477.852, 81.470,
            11.715, -479.024, 81.818,
            -11.395, -477.852, 81.470,
            11.715, -479.024, 81.818,
            -11.395, -479.024, 81.818,
            -11.395, -477.852, 81.470,
            11.715, -479.024, 81.818,
            11.715, -479.607, 82.891,
            -11.395, -479.024, 81.818,
            11.715, -479.607, 82.891,
            -11.395, -479.607, 82.891,
            -11.395, -479.024, 81.818,
            23.033, -479.352, 82.918,
            23.031, -479.060, 83.887,
            11.715, -479.607, 82.891,
            23.031, -479.060, 83.887,
            11.715, -479.260, 84.063,
            11.715, -479.607, 82.891,
            23.031, -479.060, 83.887,
            23.024, -478.162, 84.370,
            11.715, -479.260, 84.063,
            23.024, -478.162, 84.370,
            11.715, -478.186, 84.646,
            11.715, -479.260, 84.063,
            23.024, -478.162, 84.370,
            23.018, -477.184, 84.084,
            11.715, -478.186, 84.646,
            23.018, -477.184, 84.084,
            11.714, -477.015, 84.299,
            11.715, -478.186, 84.646,
            23.018, -477.184, 84.084,
            23.016, -476.697, 83.197,
            11.714, -477.015, 84.299,
            23.016, -476.697, 83.197,
            11.714, -476.431, 83.225,
            11.714, -477.015, 84.299,
            23.016, -476.697, 83.197,
            23.018, -476.989, 82.228,
            11.714, -476.431, 83.225,
            23.018, -476.989, 82.228,
            11.714, -476.779, 82.054,
            11.714, -476.431, 83.225,
            23.018, -476.989, 82.228,
            23.024, -477.887, 81.745,
            11.714, -476.779, 82.054,
            23.024, -477.887, 81.745,
            11.715, -477.852, 81.470,
            11.714, -476.779, 82.054,
            23.024, -477.887, 81.745,
            23.031, -478.865, 82.031,
            11.715, -477.852, 81.470,
            23.031, -478.865, 82.031,
            11.715, -479.024, 81.818,
            11.715, -477.852, 81.470,
            23.031, -478.865, 82.031,
            23.033, -479.352, 82.918,
            11.715, -479.024, 81.818,
            23.033, -479.352, 82.918,
            11.715, -479.607, 82.891,
            11.715, -479.024, 81.818,
            24.839, -478.823, 82.974,
            24.608, -478.593, 83.936,
            23.033, -479.352, 82.918,
            24.608, -478.593, 83.936,
            23.031, -479.060, 83.887,
            23.033, -479.352, 82.918,
            24.608, -478.593, 83.936,
            24.052, -477.843, 84.404,
            23.031, -479.060, 83.887,
            24.052, -477.843, 84.404,
            23.024, -478.162, 84.370,
            23.031, -479.060, 83.887,
            24.052, -477.843, 84.404,
            23.496, -477.012, 84.102,
            23.024, -478.162, 84.370,
            23.496, -477.012, 84.102,
            23.018, -477.184, 84.084,
            23.024, -478.162, 84.370,
            23.496, -477.012, 84.102,
            23.265, -476.587, 83.209,
            23.018, -477.184, 84.084,
            23.265, -476.587, 83.209,
            23.016, -476.697, 83.197,
            23.018, -477.184, 84.084,
            23.265, -476.587, 83.209,
            23.496, -476.817, 82.247,
            23.016, -476.697, 83.197,
            23.496, -476.817, 82.247,
            23.018, -476.989, 82.228,
            23.016, -476.697, 83.197,
            23.496, -476.817, 82.247,
            24.052, -477.567, 81.779,
            23.018, -476.989, 82.228,
            24.052, -477.567, 81.779,
            23.024, -477.887, 81.745,
            23.018, -476.989, 82.228,
            24.052, -477.567, 81.779,
            24.608, -478.398, 82.080,
            23.024, -477.887, 81.745,
            24.608, -478.398, 82.080,
            23.031, -478.865, 82.031,
            23.024, -477.887, 81.745,
            24.608, -478.398, 82.080,
            24.839, -478.823, 82.974,
            23.031, -478.865, 82.031,
            24.839, -478.823, 82.974,
            23.033, -479.352, 82.918,
            23.031, -478.865, 82.031,
            25.884, -477.599, 83.102,
            25.532, -477.514, 84.049,
            24.839, -478.823, 82.974,
            25.532, -477.514, 84.049,
            24.608, -478.593, 83.936,
            24.839, -478.823, 82.974,
            25.532, -477.514, 84.049,
            24.683, -477.116, 84.480,
            24.608, -478.593, 83.936,
            24.683, -477.116, 84.480,
            24.052, -477.843, 84.404,
            24.608, -478.593, 83.936,
            24.683, -477.116, 84.480,
            23.834, -476.637, 84.141,
            24.052, -477.843, 84.404,
            23.834, -476.637, 84.141,
            23.496, -477.012, 84.102,
            24.052, -477.843, 84.404,
            23.834, -476.637, 84.141,
            23.482, -476.358, 83.233,
            23.496, -477.012, 84.102,
            23.482, -476.358, 83.233,
            23.265, -476.587, 83.209,
            23.496, -477.012, 84.102,
            23.482, -476.358, 83.233,
            23.834, -476.443, 82.286,
            23.265, -476.587, 83.209,
            23.834, -476.443, 82.286,
            23.496, -476.817, 82.247,
            23.265, -476.587, 83.209,
            23.834, -476.443, 82.286,
            24.683, -476.840, 81.855,
            23.496, -476.817, 82.247,
            24.683, -476.840, 81.855,
            24.052, -477.567, 81.779,
            23.496, -476.817, 82.247,
            24.683, -476.840, 81.855,
            25.532, -477.319, 82.194,
            24.052, -477.567, 81.779,
            25.532, -477.319, 82.194,
            24.608, -478.398, 82.080,
            24.052, -477.567, 81.779,
            25.532, -477.319, 82.194,
            25.884, -477.599, 83.102,
            24.608, -478.398, 82.080,
            25.884, -477.599, 83.102,
            24.839, -478.823, 82.974,
            24.608, -478.398, 82.080,
            26.229, -476.196, 83.250,
            25.839, -476.291, 84.178,
            25.884, -477.599, 83.102,
            25.839, -476.291, 84.178,
            25.532, -477.514, 84.049,
            25.884, -477.599, 83.102,
            25.839, -476.291, 84.178,
            24.898, -476.325, 84.563,
            25.532, -477.514, 84.049,
            24.898, -476.325, 84.563,
            24.683, -477.116, 84.480,
            25.532, -477.514, 84.049,
            24.898, -476.325, 84.563,
            23.957, -476.279, 84.179,
            24.683, -477.116, 84.480,
            23.957, -476.279, 84.179,
            23.834, -476.637, 84.141,
            24.683, -477.116, 84.480,
            23.957, -476.279, 84.179,
            23.567, -476.179, 83.252,
            23.834, -476.637, 84.141,
            23.567, -476.179, 83.252,
            23.482, -476.358, 83.233,
            23.834, -476.637, 84.141,
            23.567, -476.179, 83.252,
            23.957, -476.084, 82.324,
            23.482, -476.358, 83.233,
            23.957, -476.084, 82.324,
            23.834, -476.443, 82.286,
            23.482, -476.358, 83.233,
            23.957, -476.084, 82.324,
            24.898, -476.050, 81.938,
            23.834, -476.443, 82.286,
            24.898, -476.050, 81.938,
            24.683, -476.840, 81.855,
            23.834, -476.443, 82.286,
            24.898, -476.050, 81.938,
            25.839, -476.096, 82.322,
            24.683, -476.840, 81.855,
            25.839, -476.096, 82.322,
            25.532, -477.319, 82.194,
            24.683, -476.840, 81.855,
            25.839, -476.096, 82.322,
            26.229, -476.196, 83.250,
            25.532, -477.319, 82.194,
            26.229, -476.196, 83.250,
            25.884, -477.599, 83.102,
            25.532, -477.319, 82.194,
            18.827, -333.811, 97.025,
            18.440, -333.908, 97.953,
            26.229, -476.196, 83.250,
            18.440, -333.908, 97.953,
            25.839, -476.291, 84.178,
            26.229, -476.196, 83.250,
            18.440, -333.908, 97.953,
            17.508, -333.947, 98.338,
            25.839, -476.291, 84.178,
            17.508, -333.947, 98.338,
            24.898, -476.325, 84.563,
            25.839, -476.291, 84.178,
            17.508, -333.947, 98.338,
            16.575, -333.905, 97.953,
            24.898, -476.325, 84.563,
            16.575, -333.905, 97.953,
            23.957, -476.279, 84.179,
            24.898, -476.325, 84.563,
            16.575, -333.905, 97.953,
            16.188, -333.806, 97.026,
            23.957, -476.279, 84.179,
            16.188, -333.806, 97.026,
            23.567, -476.179, 83.252,
            23.957, -476.279, 84.179,
            16.188, -333.806, 97.026,
            16.575, -333.710, 96.098,
            23.567, -476.179, 83.252,
            16.575, -333.710, 96.098,
            23.957, -476.084, 82.324,
            23.567, -476.179, 83.252,
            16.575, -333.710, 96.098,
            17.508, -333.671, 95.713,
            23.957, -476.084, 82.324,
            17.508, -333.671, 95.713,
            24.898, -476.050, 81.938,
            23.957, -476.084, 82.324,
            17.508, -333.671, 95.713,
            18.440, -333.713, 96.098,
            24.898, -476.050, 81.938,
            18.440, -333.713, 96.098,
            25.839, -476.096, 82.322,
            24.898, -476.050, 81.938,
            18.440, -333.713, 96.098,
            18.827, -333.811, 97.025,
            25.839, -476.096, 82.322,
            18.827, -333.811, 97.025,
            26.229, -476.196, 83.250,
               25.839, -476.096, 82.322
            ])
         },
         normal: {
            itemSize: 3,
            array: new Float32Array([
            0.993, -0.117, -0.014,
            0.718, -0.016, -0.695,
            0.999, 0.042, 0.007,
            0.718, -0.016, -0.695,
            0.702, 0.110, -0.703,
            0.999, 0.042, 0.007,
            0.718, -0.016, -0.695,
            0.044, 0.099, -0.994,
            0.702, 0.110, -0.703,
            0.044, 0.099, -0.994,
            -0.010, 0.113, -0.994,
            0.702, 0.110, -0.703,
            0.044, 0.099, -0.994,
            -0.666, 0.198, -0.719,
            -0.010, 0.113, -0.994,
            -0.666, 0.198, -0.719,
            -0.713, 0.049, -0.699,
            -0.010, 0.113, -0.994,
            -0.666, 0.198, -0.719,
            -0.971, 0.235, 0.036,
            -0.713, 0.049, -0.699,
            -0.971, 0.235, 0.036,
            -0.999, -0.042, -0.002,
            -0.713, 0.049, -0.699,
            -0.971, 0.235, 0.036,
            -0.669, 0.029, 0.743,
            -0.999, -0.042, -0.002,
            -0.669, 0.029, 0.743,
            -0.711, -0.109, 0.695,
            -0.999, -0.042, -0.002,
            -0.669, 0.029, 0.743,
            0.041, -0.118, 0.992,
            -0.711, -0.109, 0.695,
            0.041, -0.118, 0.992,
            -0.010, -0.114, 0.993,
            -0.711, -0.109, 0.695,
            0.041, -0.118, 0.992,
            0.719, -0.164, 0.675,
            -0.010, -0.114, 0.993,
            0.719, -0.164, 0.675,
            0.701, -0.051, 0.712,
            -0.010, -0.114, 0.993,
            0.719, -0.164, 0.675,
            0.993, -0.117, -0.014,
            0.701, -0.051, 0.712,
            0.993, -0.117, -0.014,
            0.999, 0.042, 0.007,
            0.701, -0.051, 0.712,
            0.851, -0.523, -0.056,
            0.621, -0.309, -0.720,
            0.993, -0.117, -0.014,
            0.621, -0.309, -0.720,
            0.718, -0.016, -0.695,
            0.993, -0.117, -0.014,
            0.621, -0.309, -0.720,
            0.053, 0.074, -0.996,
            0.718, -0.016, -0.695,
            0.053, 0.074, -0.996,
            0.044, 0.099, -0.994,
            0.718, -0.016, -0.695,
            0.053, 0.074, -0.996,
            -0.559, 0.449, -0.697,
            0.044, 0.099, -0.994,
            -0.559, 0.449, -0.697,
            -0.666, 0.198, -0.719,
            0.044, 0.099, -0.994,
            -0.559, 0.449, -0.697,
            -0.793, 0.605, 0.073,
            -0.666, 0.198, -0.719,
            -0.793, 0.605, 0.073,
            -0.971, 0.235, 0.036,
            -0.666, 0.198, -0.719,
            -0.793, 0.605, 0.073,
            -0.555, 0.302, 0.775,
            -0.971, 0.235, 0.036,
            -0.555, 0.302, 0.775,
            -0.669, 0.029, 0.743,
            -0.971, 0.235, 0.036,
            -0.555, 0.302, 0.775,
            0.050, -0.133, 0.990,
            -0.669, 0.029, 0.743,
            0.050, -0.133, 0.990,
            0.041, -0.118, 0.992,
            -0.669, 0.029, 0.743,
            0.050, -0.133, 0.990,
            0.620, -0.453, 0.640,
            0.041, -0.118, 0.992,
            0.620, -0.453, 0.640,
            0.719, -0.164, 0.675,
            0.041, -0.118, 0.992,
            0.620, -0.453, 0.640,
            0.851, -0.523, -0.056,
            0.719, -0.164, 0.675,
            0.851, -0.523, -0.056,
            0.993, -0.117, -0.014,
            0.719, -0.164, 0.675,
            0.483, -0.871, -0.091,
            0.352, -0.563, -0.748,
            0.851, -0.523, -0.056,
            0.352, -0.563, -0.748,
            0.621, -0.309, -0.720,
            0.851, -0.523, -0.056,
            0.352, -0.563, -0.748,
            0.026, 0.054, -0.998,
            0.621, -0.309, -0.720,
            0.026, 0.054, -0.998,
            0.053, 0.074, -0.996,
            0.621, -0.309, -0.720,
            0.026, 0.054, -0.998,
            -0.341, 0.653, -0.677,
            0.053, 0.074, -0.996,
            -0.341, 0.653, -0.677,
            -0.559, 0.449, -0.697,
            0.053, 0.074, -0.996,
            -0.341, 0.653, -0.677,
            -0.522, 0.849, 0.085,
            -0.559, 0.449, -0.697,
            -0.522, 0.849, 0.085,
            -0.793, 0.605, 0.073,
            -0.559, 0.449, -0.697,
            -0.522, 0.849, 0.085,
            -0.337, 0.499, 0.798,
            -0.793, 0.605, 0.073,
            -0.337, 0.499, 0.798,
            -0.555, 0.302, 0.775,
            -0.793, 0.605, 0.073,
            -0.337, 0.499, 0.798,
            0.027, -0.156, 0.987,
            -0.555, 0.302, 0.775,
            0.027, -0.156, 0.987,
            0.050, -0.133, 0.990,
            -0.555, 0.302, 0.775,
            0.027, -0.156, 0.987,
            0.351, -0.707, 0.615,
            0.050, -0.133, 0.990,
            0.351, -0.707, 0.615,
            0.620, -0.453, 0.640,
            0.050, -0.133, 0.990,
            0.351, -0.707, 0.615,
            0.483, -0.871, -0.091,
            0.620, -0.453, 0.640,
            0.483, -0.871, -0.091,
            0.851, -0.523, -0.056,
            0.620, -0.453, 0.640,
            0.135, -0.985, -0.103,
            0.105, -0.638, -0.763,
            0.483, -0.871, -0.091,
            0.105, -0.638, -0.763,
            0.352, -0.563, -0.748,
            0.483, -0.871, -0.091,
            0.105, -0.638, -0.763,
            0.022, 0.074, -0.997,
            0.352, -0.563, -0.748,
            0.022, 0.074, -0.997,
            0.026, 0.054, -0.998,
            0.352, -0.563, -0.748,
            0.022, 0.074, -0.997,
            -0.088, 0.753, -0.653,
            0.026, 0.054, -0.998,
            -0.088, 0.753, -0.653,
            -0.341, 0.653, -0.677,
            0.026, 0.054, -0.998,
            -0.088, 0.753, -0.653,
            -0.162, 0.982, 0.099,
            -0.341, 0.653, -0.677,
            -0.162, 0.982, 0.099,
            -0.522, 0.849, 0.085,
            -0.341, 0.653, -0.677,
            -0.162, 0.982, 0.099,
            -0.092, 0.600, 0.795,
            -0.522, 0.849, 0.085,
            -0.092, 0.600, 0.795,
            -0.337, 0.499, 0.798,
            -0.522, 0.849, 0.085,
            -0.092, 0.600, 0.795,
            0.022, -0.137, 0.990,
            -0.337, 0.499, 0.798,
            0.022, -0.137, 0.990,
            0.027, -0.156, 0.987,
            -0.337, 0.499, 0.798,
            0.022, -0.137, 0.990,
            0.106, -0.783, 0.613,
            0.027, -0.156, 0.987,
            0.106, -0.783, 0.613,
            0.351, -0.707, 0.615,
            0.027, -0.156, 0.987,
            0.106, -0.783, 0.613,
            0.135, -0.985, -0.103,
            0.351, -0.707, 0.615,
            0.135, -0.985, -0.103,
            0.483, -0.871, -0.091,
            0.351, -0.707, 0.615,
            0.014, -0.994, -0.105,
            0.014, -0.629, -0.777,
            0.135, -0.985, -0.103,
            0.014, -0.629, -0.777,
            0.105, -0.638, -0.763,
            0.135, -0.985, -0.103,
            0.014, -0.629, -0.777,
            0.014, 0.105, -0.994,
            0.105, -0.638, -0.763,
            0.014, 0.105, -0.994,
            0.022, 0.074, -0.997,
            0.105, -0.638, -0.763,
            0.014, 0.105, -0.994,
            0.014, 0.777, -0.629,
            0.022, 0.074, -0.997,
            0.014, 0.777, -0.629,
            -0.088, 0.753, -0.653,
            0.022, 0.074, -0.997,
            0.014, 0.777, -0.629,
            0.014, 0.994, 0.104,
            -0.088, 0.753, -0.653,
            0.014, 0.994, 0.104,
            -0.162, 0.982, 0.099,
            -0.088, 0.753, -0.653,
            0.014, 0.994, 0.104,
            0.014, 0.629, 0.777,
            -0.162, 0.982, 0.099,
            0.014, 0.629, 0.777,
            -0.092, 0.600, 0.795,
            -0.162, 0.982, 0.099,
            0.014, 0.629, 0.777,
            0.014, -0.104, 0.994,
            -0.092, 0.600, 0.795,
            0.014, -0.104, 0.994,
            0.022, -0.137, 0.990,
            -0.092, 0.600, 0.795,
            0.014, -0.104, 0.994,
            0.014, -0.777, 0.629,
            0.022, -0.137, 0.990,
            0.014, -0.777, 0.629,
            0.106, -0.783, 0.613,
            0.022, -0.137, 0.990,
            0.014, -0.777, 0.629,
            0.014, -0.994, -0.105,
            0.106, -0.783, 0.613,
            0.014, -0.994, -0.105,
            0.135, -0.985, -0.103,
            0.106, -0.783, 0.613,
            -0.011, -0.994, -0.105,
            -0.012, -0.629, -0.777,
            0.014, -0.994, -0.105,
            -0.012, -0.629, -0.777,
            0.014, -0.629, -0.777,
            0.014, -0.994, -0.105,
            -0.012, -0.629, -0.777,
            -0.012, 0.105, -0.994,
            0.014, -0.629, -0.777,
            -0.012, 0.105, -0.994,
            0.014, 0.105, -0.994,
            0.014, -0.629, -0.777,
            -0.012, 0.105, -0.994,
            -0.012, 0.777, -0.629,
            0.014, 0.105, -0.994,
            -0.012, 0.777, -0.629,
            0.014, 0.777, -0.629,
            0.014, 0.105, -0.994,
            -0.012, 0.777, -0.629,
            -0.012, 0.994, 0.105,
            0.014, 0.777, -0.629,
            -0.012, 0.994, 0.105,
            0.014, 0.994, 0.104,
            0.014, 0.777, -0.629,
            -0.012, 0.994, 0.105,
            -0.012, 0.629, 0.777,
            0.014, 0.994, 0.104,
            -0.012, 0.629, 0.777,
            0.014, 0.629, 0.777,
            0.014, 0.994, 0.104,
            -0.012, 0.629, 0.777,
            -0.012, -0.104, 0.994,
            0.014, 0.629, 0.777,
            -0.012, -0.104, 0.994,
            0.014, -0.104, 0.994,
            0.014, 0.629, 0.777,
            -0.012, -0.104, 0.994,
            -0.012, -0.777, 0.629,
            0.014, -0.104, 0.994,
            -0.012, -0.777, 0.629,
            0.014, -0.777, 0.629,
            0.014, -0.104, 0.994,
            -0.012, -0.777, 0.629,
            -0.011, -0.994, -0.105,
            0.014, -0.777, 0.629,
            -0.011, -0.994, -0.105,
            0.014, -0.994, -0.105,
            0.014, -0.777, 0.629,
            -0.150, -0.983, -0.104,
            -0.117, -0.638, -0.761,
            -0.011, -0.994, -0.105,
            -0.117, -0.638, -0.761,
            -0.012, -0.629, -0.777,
            -0.011, -0.994, -0.105,
            -0.117, -0.638, -0.761,
            -0.022, 0.067, -0.997,
            -0.012, -0.629, -0.777,
            -0.022, 0.067, -0.997,
            -0.012, 0.105, -0.994,
            -0.012, -0.629, -0.777,
            -0.022, 0.067, -0.997,
            0.110, 0.746, -0.656,
            -0.012, 0.105, -0.994,
            0.110, 0.746, -0.656,
            -0.012, 0.777, -0.629,
            -0.012, 0.105, -0.994,
            0.110, 0.746, -0.656,
            0.200, 0.974, 0.110,
            -0.012, 0.777, -0.629,
            0.200, 0.974, 0.110,
            -0.012, 0.994, 0.105,
            -0.012, 0.777, -0.629,
            0.200, 0.974, 0.110,
            0.104, 0.595, 0.797,
            -0.012, 0.994, 0.105,
            0.104, 0.595, 0.797,
            -0.012, 0.629, 0.777,
            -0.012, 0.994, 0.105,
            0.104, 0.595, 0.797,
            -0.022, -0.139, 0.990,
            -0.012, 0.629, 0.777,
            -0.022, -0.139, 0.990,
            -0.012, -0.104, 0.994,
            -0.012, 0.629, 0.777,
            -0.022, -0.139, 0.990,
            -0.116, -0.783, 0.611,
            -0.012, -0.104, 0.994,
            -0.116, -0.783, 0.611,
            -0.012, -0.777, 0.629,
            -0.012, -0.104, 0.994,
            -0.116, -0.783, 0.611,
            -0.150, -0.983, -0.104,
            -0.012, -0.777, 0.629,
            -0.150, -0.983, -0.104,
            -0.011, -0.994, -0.105,
            -0.012, -0.777, 0.629,
            -0.547, -0.832, -0.088,
            -0.397, -0.538, -0.743,
            -0.150, -0.983, -0.104,
            -0.397, -0.538, -0.743,
            -0.117, -0.638, -0.761,
            -0.150, -0.983, -0.104,
            -0.397, -0.538, -0.743,
            -0.033, 0.048, -0.998,
            -0.117, -0.638, -0.761,
            -0.033, 0.048, -0.998,
            -0.022, 0.067, -0.997,
            -0.117, -0.638, -0.761,
            -0.033, 0.048, -0.998,
            0.369, 0.630, -0.683,
            -0.022, 0.067, -0.997,
            0.369, 0.630, -0.683,
            0.110, 0.746, -0.656,
            -0.022, 0.067, -0.997,
            0.369, 0.630, -0.683,
            0.575, 0.813, 0.090,
            0.110, 0.746, -0.656,
            0.575, 0.813, 0.090,
            0.200, 0.974, 0.110,
            0.110, 0.746, -0.656,
            0.575, 0.813, 0.090,
            0.376, 0.470, 0.798,
            0.200, 0.974, 0.110,
            0.376, 0.470, 0.798,
            0.104, 0.595, 0.797,
            0.200, 0.974, 0.110,
            0.376, 0.470, 0.798,
            -0.033, -0.159, 0.987,
            0.104, 0.595, 0.797,
            -0.033, -0.159, 0.987,
            -0.022, -0.139, 0.990,
            0.104, 0.595, 0.797,
            -0.033, -0.159, 0.987,
            -0.399, -0.680, 0.615,
            -0.022, -0.139, 0.990,
            -0.399, -0.680, 0.615,
            -0.116, -0.783, 0.611,
            -0.022, -0.139, 0.990,
            -0.399, -0.680, 0.615,
            -0.547, -0.832, -0.088,
            -0.116, -0.783, 0.611,
            -0.547, -0.832, -0.088,
            -0.150, -0.983, -0.104,
            -0.116, -0.783, 0.611,
            -0.890, -0.453, -0.047,
            -0.647, -0.259, -0.717,
            -0.547, -0.832, -0.088,
            -0.647, -0.259, -0.717,
            -0.397, -0.538, -0.743,
            -0.547, -0.832, -0.088,
            -0.647, -0.259, -0.717,
            -0.046, 0.081, -0.996,
            -0.397, -0.538, -0.743,
            -0.046, 0.081, -0.996,
            -0.033, 0.048, -0.998,
            -0.397, -0.538, -0.743,
            -0.046, 0.081, -0.996,
            0.583, 0.419, -0.696,
            -0.033, 0.048, -0.998,
            0.583, 0.419, -0.696,
            0.369, 0.630, -0.683,
            -0.033, 0.048, -0.998,
            0.583, 0.419, -0.696,
            0.829, 0.558, 0.049,
            0.369, 0.630, -0.683,
            0.829, 0.558, 0.049,
            0.575, 0.813, 0.090,
            0.369, 0.630, -0.683,
            0.829, 0.558, 0.049,
            0.584, 0.261, 0.768,
            0.575, 0.813, 0.090,
            0.584, 0.261, 0.768,
            0.376, 0.470, 0.798,
            0.575, 0.813, 0.090,
            0.584, 0.261, 0.768,
            -0.049, -0.129, 0.990,
            0.376, 0.470, 0.798,
            -0.049, -0.129, 0.990,
            -0.033, -0.159, 0.987,
            0.376, 0.470, 0.798,
            -0.049, -0.129, 0.990,
            -0.647, -0.402, 0.648,
            -0.033, -0.159, 0.987,
            -0.647, -0.402, 0.648,
            -0.399, -0.680, 0.615,
            -0.033, -0.159, 0.987,
            -0.647, -0.402, 0.648,
            -0.890, -0.453, -0.047,
            -0.399, -0.680, 0.615,
            -0.890, -0.453, -0.047,
            -0.547, -0.832, -0.088,
            -0.399, -0.680, 0.615,
            -0.996, -0.091, -0.010,
            -0.719, 0.006, -0.695,
            -0.890, -0.453, -0.047,
            -0.719, 0.006, -0.695,
            -0.647, -0.259, -0.717,
            -0.890, -0.453, -0.047,
            -0.719, 0.006, -0.695,
            -0.037, 0.102, -0.994,
            -0.647, -0.259, -0.717,
            -0.037, 0.102, -0.994,
            -0.046, 0.081, -0.996,
            -0.647, -0.259, -0.717,
            -0.037, 0.102, -0.994,
            0.673, 0.171, -0.720,
            -0.046, 0.081, -0.996,
            0.673, 0.171, -0.720,
            0.583, 0.419, -0.696,
            -0.046, 0.081, -0.996,
            0.673, 0.171, -0.720,
            0.980, 0.199, 0.011,
            0.583, 0.419, -0.696,
            0.980, 0.199, 0.011,
            0.829, 0.558, 0.049,
            0.583, 0.419, -0.696,
            0.980, 0.199, 0.011,
            0.673, 0.018, 0.739,
            0.829, 0.558, 0.049,
            0.673, 0.018, 0.739,
            0.584, 0.261, 0.768,
            0.829, 0.558, 0.049,
            0.673, 0.018, 0.739,
            -0.040, -0.115, 0.993,
            0.584, 0.261, 0.768,
            -0.040, -0.115, 0.993,
            -0.049, -0.129, 0.990,
            0.584, 0.261, 0.768,
            -0.040, -0.115, 0.993,
            -0.720, -0.145, 0.679,
            -0.049, -0.129, 0.990,
            -0.720, -0.145, 0.679,
            -0.647, -0.402, 0.648,
            -0.049, -0.129, 0.990,
            -0.720, -0.145, 0.679,
            -0.996, -0.091, -0.010,
            -0.647, -0.402, 0.648,
            -0.996, -0.091, -0.010,
            -0.890, -0.453, -0.047,
            -0.647, -0.402, 0.648,
            -0.999, 0.051, 0.007,
            -0.701, 0.116, -0.704,
            -0.996, -0.091, -0.010,
            -0.701, 0.116, -0.704,
            -0.719, 0.006, -0.695,
            -0.996, -0.091, -0.010,
            -0.701, 0.116, -0.704,
            0.013, 0.112, -0.994,
            -0.719, 0.006, -0.695,
            0.013, 0.112, -0.994,
            -0.037, 0.102, -0.994,
            -0.719, 0.006, -0.695,
            0.013, 0.112, -0.994,
            0.714, 0.042, -0.699,
            -0.037, 0.102, -0.994,
            0.714, 0.042, -0.699,
            0.673, 0.171, -0.720,
            -0.037, 0.102, -0.994,
            0.714, 0.042, -0.699,
            0.999, -0.051, -0.003,
            0.673, 0.171, -0.720,
            0.999, -0.051, -0.003,
            0.980, 0.199, 0.011,
            0.673, 0.171, -0.720,
            0.999, -0.051, -0.003,
            0.712, -0.116, 0.693,
            0.980, 0.199, 0.011,
            0.712, -0.116, 0.693,
            0.673, 0.018, 0.739,
            0.980, 0.199, 0.011,
            0.712, -0.116, 0.693,
            0.013, -0.113, 0.993,
            0.673, 0.018, 0.739,
            0.013, -0.113, 0.993,
            -0.040, -0.115, 0.993,
            0.673, 0.018, 0.739,
            0.013, -0.113, 0.993,
            -0.699, -0.045, 0.714,
            -0.040, -0.115, 0.993,
            -0.699, -0.045, 0.714,
            -0.720, -0.145, 0.679,
            -0.040, -0.115, 0.993,
            -0.699, -0.045, 0.714,
            -0.999, 0.051, 0.007,
            -0.720, -0.145, 0.679,
            -0.999, 0.051, 0.007,
            -0.996, -0.091, -0.010,
               -0.720, -0.145, 0.679
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
