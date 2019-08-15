const { Client: { plugin } } = require('klasa');

module.exports = {
	DashboardClient: require('./lib/Client'),
	Client: require('./lib/Client'),
	Server: require('./lib/http/Server'),
	KlasaIncomingMessage: require('./lib/http/KlasaIncomingMessage'),
	KlasaServerResponse: require('./lib/http/KlasaServerResponse'),
	KlasaIncomingMessage2: require('./lib/http/KlasaIncomingMessage2'),
	KlasaServerResponse2: require('./lib/http/KlasaServerResponse2'),
	Middleware: require('./lib/structures/Middleware'),
	MiddlewareStore: require('./lib/structures/MiddlewareStore'),
	Route: require('./lib/structures/Route'),
	RouteStore: require('./lib/structures/RouteStore'),
	constants: require('./lib/util/constants'),
	util: require('./lib/util/Util'),
	Util: require('./lib/util/Util'),
	[plugin]: require('./lib/Client')[plugin]
};

/**
 * @external KlasaClient
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/KlasaClient}
 */
/**
 * @external Piece
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Piece}
 */
/**
 * @external Store
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Store}
 */
/**
 * @external KlasaClientOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaClientOptions}
 */
/**
 * @external KlasaGuildJSON
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaGuildJSON}
 */
/**
 * @external KlasaUserJSON
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaUserJSON}
 */
/**
 * @external PieceOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/PieceOptions}
 */
/**
 * @external HTTPServer
 * @see {@link https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_server}
 */
/**
 * @external SecureContextOptions
 * @see {@link https://nodejs.org/dist/latest-v10.x/docs/api/tls.html#tls_tls_createsecurecontext_options}
 */
/**
 * @external IncomingMessage
 * @see {@link https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_incomingmessage}
 */
/**
 * @external ServerResponse
 * @see {@link https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_serverresponse}
 */
/**
 * @external Socket
 * @see {@link https://nodejs.org/dist/latest-v10.x/docs/api/net.html#net_class_net_socket}
 */
