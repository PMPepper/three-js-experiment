//#require libs.jquery-current;
//#require vendor.screenfull;
//#require vendor.three-r68;
//#require vendor.jszip;
//#require vendor.jszip-utils;
///#require vendor.three-loaders.MTLLoader;
///#require vendor.three-loaders.OBJLoader;
//#require com.asliceofcrazypie.fw.input.Controls;
///#require exp.physics;
//#require exp.editBox;
//#require com.asliceofcrazypie.three.Game;

global = window;//assign global variable - needed to make things node/worker compatible

(function() {
	ACPF.initClasses();
    
	var GameClass = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.three.Game' );
	
	var gameConfig = { 
		debug:true,
		assetsPath:'assets/',
		assets:[
			//{type:'zip', path:'a_wing/data.zip', id:'models.a_wing'},
			//{type:'zip', path:'x_wing/data.zip', id:'models.x_wing'},
			{type:'zip', path:'y_wing/data.zip', id:'models.y_wing'},
			{type:'zip', path:'cube/data.zip', id:'models.cube'},
			{type:'zip', path:'cylinder/data.zip', id:'models.cylinder'},
			//{type:'zip', path:'corvette/data.zip', id:'models.corvette'},
			//{type:'zip', path:'isd/data.zip', id:'models.isd'},
			//{type:'zip', path:'millenium_falcon/data.zip', id:'models.millenium_falcon'},
			//{type:'zip', path:'mon_calamari_cruiser/data.zip', id:'models.mon_calamari_cruiser'},
			//{type:'zip', path:'nebulon_b/data.zip', id:'models.nebulon_b'},
            
            
            /*{type:'image', path:'spritesheets/terrain.png', id:'terrain.img'},
			{type:'xml', path:'spritesheets/terrain.xml', id:'terrain.data'},
			{type:'image', path:'spritesheets/items.png', id:'items.img'},
			{type:'xml', path:'spritesheets/items.xml', id:'items.data'},
			*/
			//{type:'image', path:'images/crosshair.png'},
			//{type:'image', path:'images/blank.png'},
			
			//{type:'json', path:'animations/player.json', id:'animations-player'}
			//,{type:'ini', path:'data1.ini', id:'ini'}
			//,{type:'json', path:'data1.json', id:'json'}
			/*{type:'image', path:{pattern:'img%.png', start:0, end:2, id:'img%'}},
			{type:'xmls', base:'xml/', paths:[{pattern:'%/img.xml', start:0, end:2, id:'xml%'}]},
			{type:'image', path:'images/structure_castle.png', id:'castle'},
			
			{type:'txt', path:'data.txt', id:'txt'},*/
		]
	};
	
	var game = new GameClass( document.getElementById( 'gameHolder' ), gameConfig );
	
	
})();