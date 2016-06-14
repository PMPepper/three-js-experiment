//#import com.asliceofcrazypie.fw.data.DataStore

ACPF.registerClass( 'RemoteDataStore', 'com.asliceofcrazypie.fw.data',
function( base ){var DataStore = ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.data.DataStore');
	var Self = this.constructor = function( dataStoreName, genericSuccessHandler, genericErrorHandler, config ){
		base.constructor.call( this, dataStoreName, genericSuccessHandler, genericErrorHandler, config );
		
		this._addReadOnly( 'persistent', true );
		this._addReadOnly( 'remote', true );
		
		//TODO implement
		this._trigger( 'init', false, null, this )
	}
	
	/**
	 * Gets a value from the datastore
	 * successCallback will be function that takes the following arguments: value, property, this
	 * errorCallback will be function that takes the following arguments: error, property, this
	 */
	this.get = function( property, successCallback, errorCallback )
	{
		
	}
	
	/**
	 * sets a value in the datastore
	 * successCallback will be function that takes the following arguments: value, property, this
	 * errorCallback will be function that takes the following arguments: error, property, this
	 */
	this.set = function( property, value, successCallback, errorCallback )
	{
		
	}
	
	/**
	 * removes an item from the datastore
	 * successCallback will be function that takes the following arguments: property, this
	 * errorCallback will be function that takes the following arguments: error, property, this
	 */
	this.remove = function( property, successCallback, errorCallback )
	{
		
	}
	
	/**
	 * Returns an array of all keys in the datastore
	 * successCallback will be function that takes the following arguments: properties, this
	 * errorCallback will be function that takes the following arguments: error, this
	 */
	this.getAll = function( successCallback, errorCallback )
	{
		
	}
	
	/**
	 * Deletes everything in the datastore
	 * successCallback will be function that takes the following arguments: this
	 * errorCallback will be function that takes the following arguments: error, this
	 */
	this.clear = function( successCallback, errorCallback )
	{
		
	}
	
	var globalConfig = null;
	
	Self.setConfig = function( config ){
		globalConfig = config
	}
	
	Self.hasConfig = function(){
		return !! globalConfig;
	}
}, ACPF.getClassByQualifiedName( 'com.asliceofcrazypie.fw.data.DataStore' )
);