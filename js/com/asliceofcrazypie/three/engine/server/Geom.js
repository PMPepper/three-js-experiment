//Provides some basic geometry functions that appear to be missing from Ammo.js

ACPF.registerClass( 'Geom', 'com.asliceofcrazypie.three.engine.server',
function(){
    var tQuat1 = new THREE.Quaternion();
    var tQuat2 = new THREE.Quaternion();
    var tEul1 = new THREE.Euler();
    var tEul2 = new THREE.Euler();
    var tVect31 = new THREE.Vector3();
    var tVect32 = new THREE.Vector3();
    var tVect33 = new THREE.Vector3();
    var tMatrix41 = new THREE.Matrix4();
    var tMatrix42 = new THREE.Matrix4();
    
    this.rotateVector = function( vector, quaternion, output, reverse ){
        output = output ? output : new Ammo.btVector3();
        
        //copy values into THREE objects
        tVect31.x = vector.x();
        tVect31.y = vector.y();
        tVect31.z = vector.z();
        
        tQuat1.x = quaternion.x();
        tQuat1.y = quaternion.y();
        tQuat1.z = quaternion.z();
        tQuat1.w = quaternion.w();
        
        if( reverse ){
            //reverse values of quaterion here
            tMatrix41.identity().makeRotationFromQuaternion(tQuat1);
            
            //get inverse matrix
            tMatrix42.getInverse( tMatrix41 ).decompose( tVect32, tQuat1, tVect33 );
            
        }
        
        //calculate rotation
        tVect31.applyQuaternion( tQuat1 );
        
        //apply new values to output
        output.setValue( tVect31.x, tVect31.y, tVect31.z );
        
        return output;
    }
    
    //I think this is nonsense
    /*this.invertVector = function( vector, output ){
        output = output ? output : new Ammo.btVector3();
        //create rotation matrix
        tMatrix41.identity().makeRotationFromEuler( tEul1.set( vector.x(), vector.y(), vector.z() ) );
        
        //get inverse matrix
        tMatrix42.getInverse( tMatrix41 ).decompose( tVect31, tQuat1, tVect32 );
        
        //convert rotation from quaternion to euler
        tEul1.setFromQuaternion( tQuat1 )
        debugger;
        //apply values to output
        output.setValue( tEul1.x, tEul1.y, tEul1.z );
        
        return output;
    }*/
    
    /*
    //I think this is nonsense..?
    this.globalToLocalRotation = function( globalRotation, globalAngle, output ){
        output = output ? output : new Ammo.btVector3();
        
        tEul1.x = globalRotation.x();
        tEul1.y = globalRotation.y();
        tEul1.z = globalRotation.z();
        tQuat1.setFromEuler( tEul1 );
        
        tEul2.x = globalAngle.x();
        tEul2.y = globalAngle.y();
        tEul2.z = globalAngle.z();
        tQuat2.setFromEuler( tEul2 );
        
        tQuat1.multiply( tQuat2.inverse() );
        
        tEul1.setFromQuaternion( tQuat2 );
        
        output.setX( tEul1.x );
        output.setY( tEul1.y );
        output.setZ( tEul1.z );
        
        return output;
    }*/
    
    
    var _vec3_1 = new Ammo.btVector3();
    var _vec3_2 = new Ammo.btVector3();
    var _transform = new Ammo.btTransform();
    var _quat = new Ammo.btQuaternion();
    
    
    this.getBody = function( description ) {
        
        var i,
            localInertia, shape, motionState, rbInfo, body;

        shape = createShape( description );
        
        // If there are children then this is a compound shape
        if ( description.children ) {
            var compound_shape = new Ammo.btCompoundShape(), _child;
            
            if( shape ){
                compound_shape.addChildShape( _transform, shape );
            }
            
            for ( i = 0; i < description.children.length; i++ ) {
                _child = description.children[i];
                
                var trans = new Ammo.btTransform();
                trans.setIdentity();
                
                _vec3_1.setX(_child.position_offset.x);
                _vec3_1.setY(_child.position_offset.y);
                _vec3_1.setZ(_child.position_offset.z);
                trans.setOrigin(_vec3_1); 
                
                _quat.setX(_child.rotation.x);
                _quat.setY(_child.rotation.y);
                _quat.setZ(_child.rotation.z);
                _quat.setW(_child.rotation.w);
                trans.setRotation(_quat); 
                
                shape = createShape( description.children[i] );
                compound_shape.addChildShape( trans, shape );
                Ammo.destroy(trans);
            }
            
            shape = compound_shape;
        }
        _vec3_1.setX(0);
        _vec3_1.setY(0);
        _vec3_1.setZ(0);
        shape.calculateLocalInertia( description.mass, _vec3_1 );
        
        _transform.setIdentity();
        
        _vec3_2.setX(description.position.x);
        _vec3_2.setY(description.position.y);
        _vec3_2.setZ(description.position.z);
        _transform.setOrigin(_vec3_2);
        
        _quat.setX(description.rotation.x);
        _quat.setY(description.rotation.y);
        _quat.setZ(description.rotation.z);
        _quat.setW(description.rotation.w);
        _transform.setRotation(_quat);
        
        motionState = new Ammo.btDefaultMotionState( _transform ); // #TODO: btDefaultMotionState supports center of mass offset as second argument - implement
        rbInfo = new Ammo.btRigidBodyConstructionInfo( description.mass, motionState, shape, _vec3_1 );
        
        if ( description.materialId !== undefined ) {
            //rbInfo.set_m_friction( _materials[ description.materialId ].friction );
            //rbInfo.set_m_restitution( _materials[ description.materialId ].restitution );
        }
        
        body = new Ammo.btRigidBody( rbInfo );
        Ammo.destroy(rbInfo);
        
        if ( typeof description.collision_flags !== 'undefined' ) {
            body.setCollisionFlags( description.collision_flags );
        }
        
        return body;
    }
    
    function createShape( description ) {
        var shape;
        
        switch ( description.type ) {
            case 'plane':
                
                break;
            
            case 'box':
                _vec3_1.setX(description.width / 2);
                _vec3_1.setY(description.height / 2);
                _vec3_1.setZ(description.depth / 2);
                shape = new Ammo.btBoxShape(_vec3_1);
                break;
            
            case 'sphere':
                shape = new Ammo.btSphereShape( description.radius );
                break;
            
            case 'cylinder':
                _vec3_1.setX(description.width / 2);
                _vec3_1.setY(description.height / 2);
                _vec3_1.setZ(description.depth / 2);
                shape = new Ammo.btCylinderShape(_vec3_1);
                break;
            
            case 'capsule':
                
                break;
            
            case 'cone':
                
                break;
            
            case 'concave':
                
                break;
            
            case 'convex':
                
                break;

            case 'heightfield':

                break;
            
            default:
                // Not recognized
                return;
                break;
        }
        
        return shape;
    };
    
    
}
);