module.exports = {
	port : 8000,
	locales : ['en'],
	authenticationServer : 'localhost:3000',
	appBase : '',
	client : {
		auth_server : 'authenticationServer',
		socket_server : 'data.socket.server.host',
		socket_port : 'data.socket.server.port',
		socket_timeout : 'data.socket.server.timeout',
		log : 'log.client',
		loggly : 'log.loggly',
		appBase : 'appBase'
	},
	paths : {
		views : {
			web : 'content/web/views',
			mobile : 'content/mobile/views',
			shared : 'content/shared/views',
			custom : {
				web : 'content/web/views/custom',
				mobile : 'content/mobile/views/custom',
				shared : 'content/shared/views/custom'
			}
		},
		static : {
			web : 'content/web/public',
			mobile : 'content/mobile/public',
			shared : 'content/shared/public'
		},
		locales : 'content/locales',
		providers : 'config/providers',
		routes : 'config/routes'
	},
	data : {
		providers : ['contactProvider.js'],
		socket : {
			server : {
				host : 'http://localhost',
				port :  3002,
				flashPolicyPort : 10843,
				matchOriginProtocol : false,
				timeout : 10000
			}
		},
		REST : {
			server : {
				port :  8001
			}
		}
	},
	log : {
		loggly : {
			subdomain : 'cai', // loggly user account subdomain
			inputToken : '1a21ae55-17e2-47d7-9000-3d7c4e317e20' // loggly input key
		},
		server : { // server-side logging parameters
			levels : ['error', 'warn', 'info', 'debug'], // available log levels
			transports : { // supported logging transports
				console : {
					level : 'info', // maximum level of logged messages
					colorize : true, // color levels
					enabled : true // this switch can be used to easily toggle use of a given transport
				},
				file : {
					level : 'warn',
					enabled : true,
					filepath : '',
					filename : 'error.app.log',
					maxFiles : 10,
					maxsize : 5242880
				},
				loggly : {
					level : 'warn',
					enabled : false
				}
			}
		},
		client : { // client-side logging parameters
			levels : ['error', 'warn', 'info', 'debug'], // available log levels
			transports : {	// supported logging transports
				console : {
					level : 'debug', // maximum level of logged messages
					enabled : true // this switch can be used to easily toggle use of a given transport
				},
				loggly : {
					level : 'debug',
					enabled : false
				}
			}
		}
	},
	db : {
		servers : {
			mobileconnect : {
				host : 'localhost',
				port : 27017,
				options : {
					server : { // mongodb - server options
						// auto_reconnect - to reconnect automatically, default:false
						// poolSize - specify the number of connections in the pool default:5
						poolSize : 10
						// socketOptions - a collection of pr socket settings
						// socketOptions: {
						// timeout - set seconds before connection times out default:0
						// noDelay - Disables the Nagle algorithm default:true
						// keepAlive - Set if keepAlive is used default:0 , which means no keepAlive, set higher than 0 for keepAlive
						// encoding - �ascii�|�utf8�|�base64� default:null
						// }
					},
					db : { // mongodb - db options
						// w - {Number/String, > -1 || �majority� || tag name} the write concern for the operation
						//    where < 1 is no acknowlegement of write and w >= 1, w = �majority� or tag acknowledges the write
						// wtimeout - {Number, 0} set the timeout for waiting for write concern to finish (combines with w option)
						// fsync - (Boolean, default:false) write waits for fsync before returning
						// journal - (Boolean, default:false) write waits for journal sync before returning
						journal : true
						// native_parser - if true, use native BSON parser
						// strict - sets strict mode , if true then existing collections can�t be �recreated� etc.
						// pk - custom primary key factory to generate _id values (see Custom primary keys).
						// forceServerObjectId - generation of objectid is delegated to the mongodb server instead of the driver. default is false
						// retryMiliSeconds - specify the number of milliseconds between connection attempts default:5000
						// numberOfRetries - specify the number of retries for connection attempts default:3
						// reaper - enable/disable reaper (true/false) default:false
						// reaperInterval - specify the number of milliseconds between each reaper attempt default:10000
						// reaperTimeout - specify the number of milliseconds for timing out callbacks that don�t return default:30000
						// raw - driver expects Buffer raw bson document, default:false
						// logger - object specifying error(), debug() and log() functions
					}
				}
			}
		},
		databases : {
			testing : {
				server : 'mobileconnect'
			}
		},
		collections : {
			contact: {
			    database: 'testing'
			}
		}
	}
};
