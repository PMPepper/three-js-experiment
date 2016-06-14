//#import com.asliceofcrazypie.fw.Base

ACPF.registerClass( 'SpriteDefinition', 'com.asliceofcrazypie.fw.graphics',
function( base ){var Base = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base');
	var Self = this.constructor = function( id, width, height, image, centerX, centerY, offsetX, offsetY ){
		base.constructor.call( this );
		
		this._addReadOnly( 'id', id );
		this._addReadOnly( 'width', width );
		this._addReadOnly( 'height', height );
		this._addReadOnly( 'image', image );
		this._addReadOnly( 'centerX', centerX );
		this._addReadOnly( 'centerY', centerY );
		this._addReadOnly( 'offsetX', offsetX );
		this._addReadOnly( 'offsetY', offsetY );
	}
	
	Self.createCanvasDefinition = function( width, height ){
		return new Self( 'canvas', width, height, $('<canvas width="'+width+'" height="'+height+'" style="width:'+width+'px;height:'+height+'px;" />')[0], 0, 0, 0, 0 );
	}
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Base' )
);