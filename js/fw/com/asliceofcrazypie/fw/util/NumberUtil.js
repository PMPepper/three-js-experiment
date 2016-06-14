//#import com.asliceofcrazypie.fw.Core

ACPF.registerClass( 'NumberUtil', 'com.asliceofcrazypie.fw.util',
function(){var Core = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.Core');
	this.limit = function( value, min, max )
	{
		return value < min ? min : value > max ? max : value;
	}
	
	this.tryParse = function( str )
	{
		var num = parseFloat( str );
		
		return num == num ? num : str ;
	}
}
);