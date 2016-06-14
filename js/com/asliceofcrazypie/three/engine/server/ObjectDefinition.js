//#import com.asliceofcrazypie.fw.Base
//#import com.asliceofcrazypie.three.engine.server.Geom

ACPF.registerClass( 'ObjectDefinition', 'com.asliceofcrazypie.three.engine.server',
function( base ){var Base = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base');var Geom = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.engine.server.Geom');
    //sharef across methods
    var quat = new Ammo.btQuaternion(),
        originVector = new Ammo.btVector3(0,0,0),
        originTransform = new Ammo.btTransform();
    
    originTransform.setIdentity();
    
    var Self = this.constructor = function( name, definition, dynamicsWorld ){
        base.constructor.call( this );
        
        this._name = name;
        this._mass = +( definition.mass || 1 );
        this._hullDesc = null;
        this._shieldShape = null;
        
        if( definition.collision ){
            this._initHull( definition.collision.hull, this._mass );
            this._initShield( definition.collision.shield );
            this._initRotationalInteria( dynamicsWorld );
        }
    }
    
    this._initRotationalInteria = function( dynamicsWorld ){
        var body = this.getBody( 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ),
            angularVelocity,
            vx,
            vy,
            vz,
            testForce = 1,
            testPeriod = 1;//seconds
        
        dynamicsWorld.addRigidBody(body);
        
        //now exert force on the body
        //-x axis
        var force = new Ammo.btVector3( testForce, 0, 0 );
        body.applyTorque( force );
        
        //update the world
        dynamicsWorld.stepSimulation(testPeriod*1000, 2);
        
        angularVelocity = body.getAngularVelocity();
        vx = angularVelocity.x();
        
        //TODO should this be 'applyTorqueImpulse'?
        
        //reset position and anglular velocity
        body.setAngularVelocity( originVector );
        body.setCenterOfMassTransform( originTransform );
        
        force.setValue( 0, testForce, 0 );
        body.applyTorque( force );
        
        //update the world
        dynamicsWorld.stepSimulation(testPeriod*1000, 2);
        angularVelocity = body.getAngularVelocity();
        vy = angularVelocity.y();
        
        //reset position and anglular velocity
        body.setAngularVelocity( originVector );
        body.setCenterOfMassTransform( originTransform );
        
        force.setValue( 0, 0, testForce );
        body.applyTorque( force );
        
        //update the world
        dynamicsWorld.stepSimulation(testPeriod*1000, 2);
        angularVelocity = body.getAngularVelocity();
        vz = angularVelocity.z();
        
        console.log( this._name+': '+vx+', '+vy+', '+vz );
        
        //store the computed values
        this.inertiaX = (testForce*testPeriod)/vx;
        this.inertiaY = (testForce*testPeriod)/vy;
        this.inertiaZ = (testForce*testPeriod)/vz;
        
        console.log( this._name+': '+this.inertiaX+', '+this.inertiaY+', '+this.inertiaZ );
        
        //now remove the body from the world
        dynamicsWorld.removeRigidBody(body);
        
    }
    
    //returns a complete body for this object
    this.getBody = function( px, py, pz, rx, ry, rz, rw, lvx, lvy, lvz, rvx, rvy, rvz ){
        
        var desc = this._hullDesc;
        
        //update desciption to include desired position
        desc.position.x = px;
        desc.position.y = py;
        desc.position.z = pz;
        
        desc.rotation.x = rx;
        desc.rotation.y = ry;
        desc.rotation.z = rz;
        desc.rotation.w = rw;
        
        //create the body
        body = Geom.getBody( desc );
        
        //turn off sleeping
        body.activate();
        body.setSleepingThresholds(0, 0);
        body.setDamping( 0, 0 );
        
        //set initial linear velocity
        body.setLinearVelocity( new Ammo.btVector3( lvx, lvy, lvz ) );
        
        //set initial angular velocity
        body.setAngularVelocity( new Ammo.btVector3( rvx, rvy, rvz ) );
        
        return body;
        
        /*
        var startTransform = new Ammo.btTransform();
        startTransform.setIdentity();

        var myMotionState = new Ammo.btDefaultMotionState(startTransform);
        
        var rbInfo = new Ammo.btRigidBodyConstructionInfo(this._mass, myMotionState, this._hullShape);
        var body = new Ammo.btRigidBody(rbInfo);
        
        //set init position & rotation
        quat.setX( rx );
        quat.setY( ry );
        quat.setZ( rz );
        quat.setW( rw );
        
        var origin = body.getWorldTransform().getOrigin();
        origin.setX( px );
        origin.setY( py );
        origin.setZ( pz );
        body.getWorldTransform().setRotation( quat );
        
        //wake up and prevent body from sleeping
        body.activate();
        body.setSleepingThresholds(0, 0);
        body.setDamping( 0, 0 );
        
        //set linear velocity
        body.setLinearVelocity( new Ammo.btVector3( lvx, lvy, lvz ) );
        body.setAngularVelocity( new Ammo.btVector3( rvx, rvy, rvz ) );
        */
        return body;
    }
    
    this._initHull = function( hull, mass ){
        
        var part,
            partDesc;
        
        var desc = this._hullDesc = { mass:this._mass, children:[], position:{x:0, y:0, z:0 }, rotation:{x:0, y:0 ,z:0 } };
            
        for( var componentName in hull ){
            part = hull[componentName];
            
            partDesc = {};
            desc.children.push( partDesc );
                
            partDesc.type = part[0];
            partDesc.width = part[4];//x
            partDesc.height = part[5]//y
            partDesc.depth = part[6]//z
            partDesc.position_offset = {x:part[1], y:part[2], z:part[3]}
            partDesc.rotation = {x:part[7], y:part[8], z:part[9], w:part[10]};
        }
        
        /*var collisionObject,
            component,
            compoundShape = new Ammo.btCompoundShape();
        
        for( var componentName in hull ){
            component = hull[componentName];
            
            collisionObject = null;
            
            switch( component[0] ){
                case 'box':
                    collisionObject = this._makeBox( compoundShape, component );
                    break;
                case 'cylinder':
                    collisionObject = this._makeCylinder( compoundShape, component );
                    break;
                case 'sphere':
                    collisionObject = this._makeSphere( compoundShape, component );
                    break;
                default:
                    console.log( 'Unknown component type: '+component[0] );
            }
            
            //TODO actually build the shape
            var transform = new Ammo.btTransform();
            transform.setIdentity();
            transform.setOrigin( new Ammo.btVector3( 0, 0, 0 ) );
            var localInertia = new Ammo.btVector3( 0, 0, 0 );//what exactly is this?
            compoundShape.calculateLocalInertia( mass, localInertia );
            
            this._hullShape = compoundShape;
        }*/
    }
    
    this._initShield = function( shield ){
        //TODO implement
    }
    
    /*
    this._makeBox = function( compoundShape, definition ){
        var px = definition[1], 
            py = definition[2], 
            pz = definition[3], 
            sx = definition[4], 
            sy = definition[5], 
            sz = definition[6], 
            rx = definition[7], 
            ry = definition[8], 
            rz = definition[9];
            rw = definition[10];
        
        var shape = new Ammo.btBoxShape(new Ammo.btVector3( sx / 2, sy / 2, sz / 2 ));
        var transform = setShapeTransform( px, py, pz, rx, ry, rz, rw );
        
        //add to compound shape
        compoundShape.addChildShape( transform, shape );
    }
    
    this._makeCylinder = function( compoundShape, definition ){
        var px = definition[1], 
            py = definition[2], 
            pz = definition[3], 
            sx = definition[4], 
            sy = definition[5], 
            sz = definition[6], 
            rx = definition[7], 
            ry = definition[8], 
            rz = definition[9];
            rw = definition[10];
        
        //TODO not sure if this deals with 'squashed' cylinders (e.g. sx != sz)
        
        var shape = new Ammo.btCylinderShape( new Ammo.btVector3(sx,sy/2,sz));
        var transform = setShapeTransform( px, py, pz, rx, ry, rz, rw );
        
        //add to compound shape
        compoundShape.addChildShape( transform, shape );
    }
    
    this._makeSphere = function( compoundShape, definition ){
        
    }*/
    
    /*
    function setShapeTransform( px, py, pz, rx, ry, rz, rw ){
        var transform = new Ammo.btTransform();
        
        //set transform
        //-position
        transform.setIdentity();
        transform.setOrigin( 
            new Ammo.btVector3( px, py, pz ) 
        );
        
        //-rotation
        quat.setX( rx );
        quat.setY( ry );
        quat.setZ( rz );
        quat.setW( rw );
        
        transform.setRotation( quat );
        
        return transform;
    }*/
    
    this.getName = function(){
        return this._name;
    }
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base' )
);