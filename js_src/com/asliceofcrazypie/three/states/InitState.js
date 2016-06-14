//#import com.asliceofcrazypie.fw.comms.AssetsLoader
//#import com.asliceofcrazypie.three.AGameState
//#import com.asliceofcrazypie.three.states.EngineState
///#import com.asliceofcrazypie.three.states.ErrorState
///#import com.asliceofcrazypie.three.Settings

//#class com.asliceofcrazypie.three.states.InitState extends com.asliceofcrazypie.three.AGameState
function( base )
{
	this.constructor = function(){
		base.constructor.call( this );
		
        var $progressWidget = this.element.find( '.ProgressWidget' );
		this._progressWidget = $progressWidget.widget();
	}
	
	this.activated = function()
	{
		base.activated.call( this );
		
		//start loading assets
		var assetsToLoad = this.root.config.assets;
		var assetsPath = this.root.config.assetsPath;
		var root = this.root;
		var self = this;
		
		root.assets = new AssetsLoader( assetsToLoad, assetsPath );
		
		var assetsProgressListener = root.assets.addEventListener( AssetsLoader.PROGRESS, function( event ){
			if( event.failed > 0 )
			{
				//stop, go to error state
				self.container.transitionTo( ErrorState, [], 'crossfade' );
				root.assets.removeEventListener( AssetsLoader.PROGRESS, arguments.callee );
			}
			else
			{
				//update progress
				self._progressWidget.setProgress( event.complete, event.total );
			}
		});
		
		var assetsCompleteListener = root.assets.addEventListener( AssetsLoader.COMPLETE, function( event ){
			if( event.failed == 0 )
			{
				self._onLoadComplete();
			}
			assetsProgressListener.remove();
			assetsCompleteListener.remove();
		})
		
	}
	
	this._onLoadComplete = function(){
		var self = this;
		var root = this.root;
		var config = root.config;
        var assets = root.assets;
        var allModels = root.models = {};
		var sheetId;
		
		//parse the loaded data
        //-models
        var models = assets.getAssets( /^models\.[^\.]+/ );
        var model;
        
        for( var id in models ){
            model = models[id];
            
            //first, get the images
            var images = model.file(/\.(jpg|jpeg)$/);
            var imageObjs = {};
            
            images.forEach(function( file ){
                imageObjs[file.name] = makeImageFromArrayBuffer( file.asArrayBuffer() );
            })
            
            var funcText = model.file( 'data.js' ).asText();//todo shift this into worker
            
            var func = new Function( "imagesObject", funcText );
            
            //image in images and generate model constructor
            allModels[id.split( '.' ).slice( 1 ).join( '.' )] = processConfig( func( imageObjs ) );
            
            //convert euler angles into quaternion
            
            console.log( 'created craft' );
        }
        
		//now pause briedly, then move on...
		setTimeout( function(){
            console.log( 'Go to engine state' );
			self.container.transitionTo( EngineState, [], 'crossfade' );
		},500 );
	}
    
    var quat = new THREE.Quaternion(),
        euler = new THREE.Euler();
    
    function processConfig( create ){
        var config = create.config,
            rotation = create.config.rotation;
        
        //yet more processing when a model if first created
        var func = function(){
            var obj = create();
            
            //this is an ugly bodge to fix weird issues with imported models having materials with the wrong side set
            setSide( obj, THREE.DoubleSide );
            
            return obj;
        };
        
        func.config = config;
        
        return func;
    }
    
    function setSide( obj, side ){
        obj.traverse( function( node ) {
            if( node.material ) {
                node.material.side = side;
            }
        });
    }
    
    
    
    function processConfigComponent( component ){
        quat.setFromEuler( euler.set( component[7], component[8], component[9] ) );
        
        component[7] = quat.x;
        component[8] = quat.y;
        component[9] = quat.z;
        component[10] = quat.w;
    }
    
    function arrayBufferToBase64( arrayBuffer ){
        var binary = ''
        var bytes = new Uint8Array( arrayBuffer )
        var len = bytes.byteLength;
        
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] )
        }
        return window.btoa( binary );
    }
    
    function getDataUrlFromBase64( base64 ){
        return 'data:image/jpeg;base64,'+base64;
    }
    
    function makeImageFromBase64( base64 ){
        var image = new Image();
        image.src = getDataUrlFromBase64( base64 );
        
        return image;
    }
    
    function makeImageFromArrayBuffer( arrayBuffer ){
        return makeImageFromBase64( arrayBufferToBase64( arrayBuffer ) );
    }
}