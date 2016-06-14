//#import com.asliceofcrazypie.fw.Core
//#import com.asliceofcrazypie.fw.states.State
//#import com.asliceofcrazypie.fw.ReadOnly
//#import com.asliceofcrazypie.fw.widgets.UIWidget
//#import com.asliceofcrazypie.fw.data.DataStore
//#import com.asliceofcrazypie.fw.geom.Rectangle
//#import com.asliceofcrazypie.fw.html.Metrics
//#import com.asliceofcrazypie.fw.html.CSS
//#import com.asliceofcrazypie.fw.html.DOM
//#import com.asliceofcrazypie.fw.util.StringUtil
///#import com.asliceofcrazypie.three.Settings
//#import com.asliceofcrazypie.fw.input.Controls
//#import com.asliceofcrazypie.three.AGameState
//#import com.asliceofcrazypie.three.states.InitState
//#import com.asliceofcrazypie.fw.widgets.Widget
//#import com.asliceofcrazypie.fw.widgets.ProgressWidget

ACPF.registerClass( 'Game', 'com.asliceofcrazypie.three',
function( base ){var Core = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Core');var State = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.states.State');var ReadOnly = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.ReadOnly');var UIWidget = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.widgets.UIWidget');var DataStore = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.data.DataStore');var Rectangle = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.geom.Rectangle');var Metrics = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.html.Metrics');var CSS = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.html.CSS');var DOM = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.html.DOM');var StringUtil = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.util.StringUtil');var Controls = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.input.Controls');var AGameState = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.AGameState');var InitState = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.states.InitState');var Widget = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.widgets.Widget');var ProgressWidget = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.widgets.ProgressWidget');
	var instance = null;
	
	var Self = this.constructor = function( element, config ){
		element = $(element);
		
		instance = this;
		
		window.Game = this;//DEV CODE!!
		
		//init templates
		element.find( '.templates' ).children().each( function(){
			registerTemplate( this );
		}).end().remove();
		
		base.constructor.call( this, element );
		
		this._addReadOnly( 'config', new ReadOnly( config, true ) );
		this._addReadOnly( 'debug', config.debug );
		
		if( !this.debug )
		{
			element.on( 'contextmenu', function(e){ e.preventDefault(); } );
		}
		
		this._start = this._now = (new Date()).getTime();
		
		this.__onPaintFrame = onPaintFrame.bind( this )
		
		window.requestAnimationFrame( this.__onPaintFrame );
		
		this._controls = {};
		
		this._initControls();
		
		this.transitionTo( InitState, [] );
	}
	
	Self.instance = function(){
		return instance;
	}
	
	this.update = function( activeState, frameTime ){
		base.update.call( this, activeState, frameTime );
	}
	
	this._initControls = function(){
		//init controls
		var controlsDefinition = {
            modes:{ 
                mouseAndKeyboard:{
                    devices:['mouse','keyboard'],
                    inputs:{
                        pitchUp:{input:'keyboard:up|keyboard:w',options:{}},
                        pitchDown:{input:'keyboard:down|keyboard:s',options:{}},
                        yawLeft:{input:'keyboard:left|keyboard:a',options:{}},
                        yawRight:{input:'keyboard:right|keyboard:d',options:{}},
                        rollCW:{input:'keyboard:x',options:{}},
                        rollCCW:{input:'keyboard:z',options:{}},
                        throttleUp:{input:'keyboard:shift',options:{}},
                        throttleDown:{input:'keyboard:ctrl',options:{}},
                    }
                },
                gamepad:{
                    devices:[/^gamepad[0-9]+$/],
                    inputs:{
                        pitch:{input:'rightY_raw',options:{changed:0.1, deadzone:0.5}},
                        yaw:{input:'rightX_raw',options:{changed:0.1}},
                        roll:{input:'leftX_raw',options:{changed:0.1}},
                        throttle:{input:'leftY_raw',options:{changed:0.1}},
                    }
                }/*,
                touch:{
                    //TODO really need to think about this one...
                }*/
            },
            defaultMode:'gamepad'
        };
		
		var controls = new Controls(controlsDefinition);
		
		this._controls['default'] = controls;
	}
	
	this.getControlScheme = function( name ){
		return this._controls[name];
	}
	
	//private vars + functions
	var templates = {};
	
	function registerTemplate( element )
	{
		element = $(element);
		
		templates[element[0].className] = element.detach();
	}
	
	Self.getTemplate = function( name )
	{
		if( templates[name] )
		{
			return templates[name].clone();
		}
		
		return null;
	}
	
	function onPaintFrame(){
		if( !this.__isDisposed )
		{
			var now = (new Date()).getTime();
			
			var frameTime = ( now - this._now ) / 1000;
			this._now = now;
			
			this.update( null, frameTime );
			
			window.requestAnimationFrame( this.__onPaintFrame );
		}
	}
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.AGameState' )
);