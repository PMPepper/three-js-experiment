/**
 * ...
 * @author P M Pepper
 */

function initEditBox( box ) {
    var $panel = $('#edit'),
        degToRad = Math.PI / 180,
        radToDeg = 180 / Math.PI,
        px = $panel.find( '#edit_pos_x' ),
        py = $panel.find( '#edit_pos_y' ),
        pz = $panel.find( '#edit_pos_z' ),
        sx = $panel.find( '#edit_size_x' ),
        sy = $panel.find( '#edit_size_y' ),
        sz = $panel.find( '#edit_size_z' ),
        rx = $panel.find( '#edit_rot_x' ),
        ry = $panel.find( '#edit_rot_y' ),
        rz = $panel.find( '#edit_rot_z' ),
        rxn = $panel.find( '#edit_rot_x_n' ),
        ryn = $panel.find( '#edit_rot_y_n' ),
        rzn = $panel.find( '#edit_rot_z_n' );
    
    //
    px.val( box.position.x );
    py.val( box.position.y );
    pz.val( box.position.z );
    sx.val( box.scale.x );
    sy.val( box.scale.y );
    sz.val( box.scale.z );
    rx.val( box.rotation.x * radToDeg );
    ry.val( box.rotation.y * radToDeg );
    rz.val( box.rotation.z * radToDeg );
    rxn.val( box.rotation.x * radToDeg );
    ryn.val( box.rotation.y * radToDeg );
    rzn.val( box.rotation.z * radToDeg );
    
    function num( num ){
        if( num != num ){
            return 0;
        }
        
        return num;
    }
    
    px.on( 'input change', function(){
        box.position.x = num( px.val() );
    });
    py.on( 'input change', function(){
        box.position.y = num( py.val() );
    });
    pz.on( 'input change', function(){
        box.position.z = num( pz.val() );
    });
    
    sx.on( 'input change', function(){
        sx.val() ? box.scale.x = num( sx.val() ) : null;
    });
    sy.on( 'input change', function(){
        sx.val() ? box.scale.y = num( sy.val() ) : null;
    });
    sz.on( 'input change', function(){
        sx.val() ? box.scale.z = num( sz.val() ) : null;
    });
    
    
    rx.on( 'input change', function(){
        box.rotation.x = num( rx.val() ) * degToRad;
    });
    ry.on( 'input change', function(){
        box.rotation.y = num( ry.val() ) * degToRad;
    });
    rz.on( 'input change', function(){
        box.rotation.z = num( rz.val() ) * degToRad;
    });
    
    rxn.on( 'input change', function(){
        box.rotation.x = num( rx.val() ) * degToRad;
    });
    ryn.on( 'input change', function(){
        box.rotation.y = num( ry.val() ) * degToRad;
    });
    rzn.on( 'input change', function(){
        box.rotation.z = num( rz.val() ) * degToRad;
    });
    
};