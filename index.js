var server = require ("./server");
var router = require ("./router");
var rh = require ("./requestHandlers");

var handle = {}
handle["/"] = rh.iniciar;
handle["/iniciar"] = rh.iniciar;
handle["/subir"] = rh.subir;

server.iniciar(router.route, handle);