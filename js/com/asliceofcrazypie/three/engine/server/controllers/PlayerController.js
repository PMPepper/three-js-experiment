/**
 * Controller class for human controlled objects
 * @author P M Pepper
 */
//#import com.asliceofcrazypie.three.engine.server.controllers.Controller
//#import com.asliceofcrazypie.three.engine.server.Geom

ACPF.registerClass( 'PlayerController', 'com.asliceofcrazypie.three.engine.server.controllers',
function (base){var Controller = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.controllers.Controller');var Geom = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.Geom');
    var Self = this.constructor = function( model, body, definition ){
		base.constructor.call( this, model, body, definition );
        
        this._input = null;
    }
    
    var transform = new Ammo.btTransform();
    var forceVector = new Ammo.btVector3(0,0,0);
    var rotationVector = forceVector;
    
    var tempFrame = 0;
    
    this.update = function( frameTime ){
        //TODO
        var input = this._input,
            definition = this._definition;
        
        var body = this._body;
        if( input ){
            var pitchMod = 1;
            var yawMod = 1;
            var rollMod = 1;
            var velocityMod = 200;
            
            //acceleration
            forceVector.setValue( 0, 0, input.throttle*velocityMod );
            
            Geom.rotateVector( forceVector, body.getWorldTransform().getRotation(), forceVector );
            
            body.applyForce( forceVector);
            
            //Latest code, based on calculated body interia values
            var angularVelocity = body.getAngularVelocity();
            
            //need to reverse rotation on angularVelocity to get value relative to body
            Geom.rotateVector( angularVelocity, body.getWorldTransform().getRotation(), angularVelocity, true );
            
            //desired values
            var targetX = -input.pitch*pitchMod,
                targetY = -input.yaw*yawMod,
                targetZ = -input.roll*rollMod;
            
            var diffX = targetX - angularVelocity.x(),
                diffY = targetY - angularVelocity.y(),
                diffZ = targetZ - angularVelocity.z();
            
            var mod = 1/100;
                //console.log( input.pitch+', '+input.yaw+', '+input.roll );
                //console.log( definition.inertiaX+', '+definition.inertiaY+', '+definition.inertiaZ );
                //console.log( '' );
            var xMod = mod * definition.inertiaX,
                yMod = mod * definition.inertiaY,
                zMod = mod * definition.inertiaZ;
            
            //now calculate the force required to match the desired value
            var force = new Ammo.btVector3(
                ( diffX * xMod ) / frameTime,//
                ( diffY * yMod ) / frameTime,//
                ( diffZ * zMod ) / frameTime//
            );
            ///*
            console.log( definition.inertiaX+', '+definition.inertiaY+', '+definition.inertiaZ );
            console.log( angularVelocity.x()+', '+angularVelocity.y()+', '+angularVelocity.z() );
            console.log( targetX+', '+targetY+', '+targetZ );
            console.log( force.x()+', '+force.y()+', '+force.z() );
            //*/
            Geom.rotateVector( force, body.getWorldTransform().getRotation(), force );
            
            body.applyTorque( force );
            console.log(frameTime);
            
            if( tempFrame++ == 1 )
            {
                debugger;
            }
            //*/
            
            /*
            //Old, basic rotation code
            //rotation
            //TODO treat this more as 'desired rotation speed' & apply up to a maximum force
            rotationVector.setValue( -input.pitch*pitchMod, -input.yaw*yawMod, -input.roll*rollMod );
            
            Geom.rotateVector( rotationVector, body.getWorldTransform().getRotation(), rotationVector );
            
            body.applyTorque( rotationVector );
            //*///End basic rotation code
            
            /*
            //Start new rotation code - this is totally broken
            var angularVelocity = body.getAngularVelocity();
            
            //this is what I want the values to be..
            rotationVector.setValue( -input.pitch*pitchMod, -input.yaw*yawMod, -input.roll*rollMod );
            
            //this.... isn't quite right...
            var forceModX = 100;
            var forceModY = 100;
            var forceModZ = 100;
            
            var diffX = forceModX * ( rotationVector.x() - angularVelocity.x() ),
                diffY = forceModY * ( rotationVector.y() - angularVelocity.y() ),
                diffZ = forceModZ * ( rotationVector.z() - angularVelocity.z() );
            
            var mPitch = 100;
            var mYaw = 100;
            var mRoll = 100;
            
            var force = new Ammo.btVector3(
                diffX < -mPitch ? -mPitch : diffX > mPitch ? mPitch : diffX,
                diffY < -mYaw ? -mYaw : diffY > mYaw ? mYaw : diffY,
                diffZ < -mRoll ? -mRoll : diffZ > mRoll ? mRoll : diffZ
            );
            
            Geom.rotateVector( force, body.getWorldTransform().getRotation(), force );
            
            body.applyTorque( force );
            */
            
            //trace(angularVelocity)
            //trace(diff)
            
            
            //trace( localRotationVector );
            
            //End new rotation code
            
            /*
            //dev code
            var q1 = new THREE.Quaternion();
            q1 = q1.setFromEuler( new THREE.Euler( 1, 2, 3 ) );
            
            var q2 = new THREE.Quaternion( body.getWorldTransform().getRotation().x(), body.getWorldTransform().getRotation().y(), body.getWorldTransform().getRotation().z(), body.getWorldTransform().getRotation().w() );
            
            var local = q1.clone().multiply( q2 );
            var global = local.clone().multiply( q2.clone().inverse() );//global = q2
            
            //trace( q1 );
            //trace( q2 );
            //trace( local );
            //trace( global );
            //console.log( '' );
            */
        }
    }
    
    this.updateInput = function( input ){
        //TODO
        this._input = input;
    }
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.controllers.Controller' )
);