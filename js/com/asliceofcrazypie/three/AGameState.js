//#import com.asliceofcrazypie.fw.states.State
//#import com.asliceofcrazypie.fw.widgets.Widget
//#import com.asliceofcrazypie.fw.html.DOM
//#import com.asliceofcrazypie.fw.html.CSS

ACPF.registerClass( 'AGameState', 'com.asliceofcrazypie.three',
function( base )
{var State = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.states.State');var Widget = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.widgets.Widget');var DOM = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.html.DOM');var CSS = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.html.CSS');
	
	var Game;
	
	var Self = this.constructor = function( element ){
		base.constructor.call( this, element );
		
		Game = ACPF.getClassByQualifiedName( "com.asliceofcrazypie.three.Game" );
		
		var stateName = this.constructor.className.substr( 0, this.constructor.className.length-5 ).toLowerCase();
		
		this._addReadOnly( 'stateName', stateName );
        
		this._addReadOnly( 'element', element || Game.getTemplate( stateName ) );
		
		Widget.initWidgets( this.element );//init any widgets in this template
		
		var childStateHolder = this.element.find( '.holder' );
		childStateHolder = childStateHolder.length == 0 ? this.element : childStateHolder ;
		
		this._addReadOnly( 'childStateHolder', childStateHolder );
		
		if( this.element )
		{
			this.element.addClass( Self.className );
		}
		
		this._isTransitioning = false;
		this._history = [];
		
		this._domListeners = [];
	}
	
	this.activated = function(){
		var listeners = this._domListeners, listener;
		
		for( var i = listeners.length-1; i > -1; --i )
		{
			listener = listeners[i];
			
			listener.element.on( listener.event, listener.handler );
		}
		
		base.activated.call( this );
	}
	
	this.deactivated = function(){
		var listeners = this._domListeners, listener;
		
		for( var i = listeners.length-1; i > -1; --i )
		{
			listener = listeners[i];
			
			listener.element.off( listener.event, listener.handler );
		}
		
		base.deactivated.call( this );
	}
	
	//input handling
	this.on = function( event, handler, element )
	{
		element = $( element || this.element );
		
		var listener = { event:event, handler:handler, element:element };
		
		this._domListeners.push( listener );
		Object.freeze( listener );
		
		if( this._isActive )
		{
			element.on( event, handler );
		}
		
		return listener;
	}
	
	this.off = function( listener )
	{
		var listeners = this._domListeners;
		var index = listeners.indexOf( listener );
		
		if( index > -1 )
		{
			this._domListeners.splice( index, 1 );//remove from list of registered listeners
		}
		
		listener.element.off( listener.event, listener.handler );
	}
	
	//transitioning
	this.back = function(){
		if( this._isTransitioning )
		{
			return false;
		}
		
		if( this._history.length > 1 )
		{
			//Not 100% convinced about this
			//-use last transition...
			var transition = this._history.pop()[2];
			
			//to go back to previous screen
			var args = this._history.pop();
			args[2] = transition;
			args[3] = true;//force 'back'
			
			this.transitionTo.apply( this, args );
		}
	}
	
	this.clearHistory = function( includeThis){
		this._history.length = !!includeThis ? 0 : 1;
	}
	
	this.transitionTo = function( state, args, style, back )
	{
		if( this._isTransitioning )
		{
			return false;
		}
		this._isTransitioning = true;
		this.dispatchEvent( { type:'startchildchangetransition', back:back } );
		
		this._history.push( toArray( arguments ) );
		
		if( state )
		{
			if( !args )
			{
				args = [];
			}
			
			var stateObj = new state( args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9] );
		}
		var self = this;
		
		var transitionComplete = function(){
			var oldState = self.activeChild();
			self._isTransitioning = false;
			
			//actually apply the change
			if( stateObj )
			{
				self.switchActiveChild( stateObj );
				DOM.setBlockInput( stateObj.element, false, 'transition' );
			}
			else
			{
				if( oldState )
				{
					self.removeChild( oldState );
					oldState.dispose();
				}
			}
			
			if( oldState != null )
			{
				//unblock new state
				DOM.setBlockInput( oldState.element, false, 'transition' );
			}
			
			
		}//end transition complete
		
		if( stateObj )
		{
			this.childStateHolder.append( stateObj.element );
			DOM.setBlockInput( stateObj.element, true, 'transition' );//block input
		}
		
		//block input of current state
		if( this.activeChild() != null )
		{
			DOM.setBlockInput( this.activeChild().element, true, 'transition' );
		}
		
		if( typeof( style ) == 'undefined' || style == 'slideHorizontal' )
		{
			this._transitionSlideHorizontal( stateObj, back, transitionComplete );
		}
		else if( style == 'fade' )
		{
			this._transitionFade( stateObj, back, transitionComplete );
		}
		else if( style == 'crossfade' )
		{
			this._transitionCrossfade( stateObj, back, transitionComplete );
		}
		else if( style instanceof Function )
		{
			style( stateObj, back, transitionComplete, this );
		}
		else
		{
			throw new Error( 'unknown transition style "'+style+'"' );
		}
	}
	
	this._transitionSlideHorizontal = function( stateObj, back, transitionComplete )
	{
		var active = this.activeChild();
		
		if( !active && !stateObj )
		{
			transitionComplete();
			return;
		}
		
		var transitionString = '0.4s '+CSS.getPropName( 'transform' )+' ease';
		
		//init positions
		if( stateObj )
		{
			stateObj.element.css( 'transform', 'translate('+( back ? '-' : '' )+'100%,0)' );
		}
		
		if( active )
		{
			active.element.css( 'transform', 'translate(0,0)' );
		}
		
		window.requestAnimationFrame( 
			function(){
				window.requestAnimationFrame(function(){
					if( stateObj )
					{
						stateObj.element.css( 'transition', transitionString ).css( 'transform', 'translate(0,0)' );
					}
					
					if( active )
					{
						active.element.css( 'transition', transitionString ).css( 'transform', 'translate( '+( back ? '' : '-' )+'100%,0)' );
					}
				});
		} )
		
		var listenToElement = stateObj ? stateObj : active;
		
		listenToElement.element.on( 'transitionend', function(e){
			e.stopPropagation();
			
			transitionComplete();
			
			//clear event listener
			listenToElement.element.off( 'transitionend', arguments.callee );
		});
	}
	
	this._transitionFade = function( stateObj, back, transitionComplete )
	{
		var active = this.activeChild();
		
		if( !active && !stateObj )
		{
			transitionComplete();
			return;
		}
		
		var transitionString = '0.4s opacity ease';
		
		//init positions
		if( stateObj )
		{
			stateObj.element.css( 'opacity', '0' );
		}
		
		window.requestAnimationFrame( 
			function(){
				window.requestAnimationFrame(function(){
					if( stateObj )//fade in
					{
						stateObj.element.css( 'transition', transitionString ).css( 'opacity', '1' );
					}
					else//if nothing to fade in, fade out current
					{
						active.element.css( 'transition', transitionString ).css( 'opacity', '0' );
					}
				});
		} );
		
		var listenToElement = stateObj ? stateObj : active;
		
		listenToElement.element.on( 'transitionend', function(e){
			e.stopPropagation();
			
			transitionComplete();
			
			//clear event listener
			listenToElement.element.off( 'transitionend', arguments.callee );
		});
	}
	this._transitionCrossfade = function( stateObj, back, transitionComplete )
	{
		var active = this.activeChild();//currently active state
		
		if( !active && !stateObj )
		{
			transitionComplete();
			return;
		}
		
		var transitionString = '0.4s opacity ease';
		
		//init positions
		if( stateObj )
		{
			stateObj.element.css( 'opacity', 0 );
		}
		
		window.requestAnimationFrame( 
			function(){
				window.requestAnimationFrame(function(){
					if( stateObj && active )
					{
						active.element.css( 'transition', transitionString ).css( 'opacity', 0 );
						stateObj.element.css( 'transition', transitionString )
					}
					else if( stateObj )//fade in, nothing to fade out
					{
						stateObj.element.css( 'transition', transitionString ).css( 'opacity', 1 );
					}
					else//if nothing to fade in, fade out current
					{
						active.element.css( 'transition', transitionString ).css( 'opacity', 0 );
					}
				});
		} );
		
		var listenToElement = stateObj && active ? active : ( stateObj ? stateObj : active );
		
		listenToElement.element.on( 'transitionend', function(e){
			if( !e.originalEvent || !e.originalEvent.propertyName || e.originalEvent.propertyName == 'opacity' )//only listen to opacity transitions
			{
				e.stopPropagation();
				
				if( stateObj && active )
				{
					stateObj.element.on( 'transitionend', function( e ){
						if( !e.originalEvent || !e.originalEvent.propertyName || e.originalEvent.propertyName == 'opacity' )//only listen to opacity transitions
						{
							e.stopPropagation();
							transitionComplete();
							stateObj.element.off( 'transitionend', arguments.callee );
						}
					});
					
					stateObj.element.css( 'opacity', 1 );
				}
				else
				{
					transitionComplete();
				}
				
				//clear event listener
				listenToElement.element.off( 'transitionend', arguments.callee );
			}
		});
	}
	
	this._changeContainer = function( from, to )
	{
		this.element.detach();
		
		if( to && to.childStateHolder )
		{
			to.childStateHolder.append( this.element );
		}
	}
	
	this.dispose = function()
	{
		if( !this.__isDisposed )
		{
			//TODO dispose of widgets
			
			if( this.element )
			{
				this.element.remove();
			}
			
			var listeners = this._domListeners, listener;
			
			for( var i = listeners.length-1; i > -1; --i )
			{
				listener = listeners[i];
				
				listener.element.off( listener.event, listener.handler );
			}
			
			listeners.length = 0;
			this._domListeners = null;
			
			base.dispose.call( this );
		}
	}
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.states.State' )
);