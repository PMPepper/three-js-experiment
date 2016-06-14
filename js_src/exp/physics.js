function initPhysics(){
    var meanDt, meanDt2, frame = 0;
    
    var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    var overlappingPairCache = new Ammo.btDbvtBroadphase();
    var solver = new Ammo.btSequentialImpulseConstraintSolver();
    var dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
    
    //gravity..
    dynamicsWorld.setGravity(new Ammo.btVector3(0, 0, 0));
    
    var bodies = [];
    
    var boxShape = new Ammo.btBoxShape(new Ammo.btVector3(0.5, 0.5, 0.5));
    
    function makeBox() {
        var startTransform = new Ammo.btTransform();
        startTransform.setIdentity();
        var mass = 1;
        var localInertia = new Ammo.btVector3(0, 0, 0);
        boxShape.calculateLocalInertia(mass, localInertia);

        var myMotionState = new Ammo.btDefaultMotionState(startTransform);
        var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, myMotionState, boxShape, localInertia);
        var body = new Ammo.btRigidBody(rbInfo);

        dynamicsWorld.addRigidBody(body);
        bodies.push(body);
        
        return body;
    }
    
    function positionBody( body, x, y, z ){
        var origin = body.getWorldTransform().getOrigin();
        origin.setX( x );
        origin.setY( y );
        origin.setZ( z );
        body.activate();
        body.setSleepingThresholds(0, 0);
        
        //debugger;
    }
    
    var box1 = makeBox();
    var box2 = makeBox();
    
    positionBody( box1, 2, 0.1, -4.5 );
    positionBody( box2, 0, 0, -4.5 );
    
    
    var v0 = new Ammo.btVector3(0,0,0);
    var force = new Ammo.btVector3(10, 0, 0);
    
    box2.applyForce( force, v0 );
    
    var transform = new Ammo.btTransform(); // taking this out of readBulletObject reduces the leaking
    
    function readBulletObject(body, object) {
        body.getMotionState().getWorldTransform(transform);
        var origin = transform.getOrigin();
        object[0] = origin.x();
        object[1] = origin.y();
        object[2] = origin.z();
        var rotation = transform.getRotation();
        object[3] = rotation.x();
        object[4] = rotation.y();
        object[5] = rotation.z();
        object[6] = rotation.w();
    }
    
    
    function simulate( dt ){//dt = milliseconds?
        
        //set default value
        dt = dt || 1;
        
        //run simulation
        dynamicsWorld.stepSimulation(dt, 2);
        
        //calculate framerate
        var alpha;
        if (meanDt > 0) {
            alpha = Math.min(0.1, dt/1000);
        } else {
            alpha = 0.1; // first run
        }
        
        meanDt = alpha*dt + (1-alpha)*meanDt;

        var alpha2 = 1/frame++;
        meanDt2 = alpha2*dt + (1-alpha2)*meanDt2;

        
        var data = { objects: [], currFPS: Math.round(1000/meanDt), allFPS: Math.round(1000/meanDt2) };

        // Read bullet data into JS objects
        for (var i = 0; i < bodies.length; i++) {
            var object = [];
            readBulletObject(bodies[i], object);
            data.objects[i] = object;
            
            //bodies[i].activate();
        }
        
        return data;
    }
    
    return simulate;
}