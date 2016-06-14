//#import com.asliceofcrazypie.fw.geom.Vector2
//#import com.asliceofcrazypie.fw.html.DOM

ACPF.registerClass( 'Metrics', 'com.asliceofcrazypie.fw.html',
function(){var Vector2 = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.geom.Vector2');var DOM = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.html.DOM');
	this.getViewport = function( $ ){
		var scrollX = window.pageXOffset || document.body.scrollLeft;
		var scrollY  = window.pageYOffset || document.body.scrollTop;
		var $window = $(window);

		return { x:scrollX, y:scrollY, width:$window.width(), height:$window.height() };
	}

	this.windowToPage = function( x, y, outputVector ){
		var lastArg = arguments[arguments.length-1];
		outputVector = ( lastArg instanceof Vector2 ) && lastArg != x ? lastArg : new Vector2();
		
		if( typeof( x ) == 'object' || ( x instanceof Vector2 ) ){
			y = x.y;
			x = x.x;
		}
		
		var scrollX = window.pageXOffset || document.body.scrollLeft;
		var scrollY  = window.pageYOffset || document.body.scrollTop;
		
		outputVector.x = x + scrollX;
		outputVector.y = y + scrollY;
		
		return outputVector;
	}

	this.pageToWindow = function( x, y, outputVector ){
		var lastArg = arguments[arguments.length-1];
		outputVector = ( lastArg instanceof Vector2 ) && lastArg != x ? lastArg : new Vector2();
		
		if( typeof( x ) == 'object' || ( x instanceof Vector2 ) ){
			y = x.y;
			x = x.x;
		}

		var scroll = DOM.getPageScroll();

		outputVector.x = x - scroll.x;
		outputVector.y = y - scroll.y;

		return outputVector;
	}

	this.elementToPage = function( element, x, y, outputVector )
	{
		var lastArg = arguments[arguments.length-1];
		outputVector = ( lastArg instanceof Vector2 ) && lastArg != x ? lastArg : new Vector2();
		
		if( typeof( x ) == 'object' || ( x instanceof Vector2 ) ){
			y = x.y;
			x = x.x;
		}
		
		var position = $(element).offset();
		
		outputVector.x = x + position.left;
		outputVector.y = y + position.top;
		
		return outputVector;
	}

	this.pageToElement = function( element, x, y, outputVector )
	{
		var lastArg = arguments[arguments.length-1];
		outputVector = ( lastArg instanceof Vector2 ) && lastArg != x ? lastArg : new Vector2();
		
		if( typeof( x ) == 'object' || ( x instanceof Vector2 ) ){
			y = x.y;
			x = x.x;
		}
		
		var position = $(element).offset();
		
		outputVector.x = x - position.left;
		outputVector.y = y - position.top;
		
		return outputVector;
	}

	
}
);