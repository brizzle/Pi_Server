/// <reference path="../../Scripts/typings/tsd.d.ts" />
"use strict";
var http = require('http');
var express = require('express');
var routes = require('./routes');
var Server = (function () {
    function Server() {
        /*
         * Used in Angular
         */
        // static $inject = [];
        this.header = { 'Content-Type': 'text/plain' };
        this.port = 1337;
        this.ipAddress = '127.0.0.1';
        this.routes = new routes.Routes();
        //this.Activate();
        console.log('Server starting..');
        //this.server = http.createServer(this.OnRequest);
        //this.server.listen(this.port, this.ipAddress);
        /*
        http.createServer((req: http.ServerRequest, res: http.ServerResponse) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello World\n');
        }).listen(1337);
        //}).listen(1337, '127.0.0.1');
        */
        var app = express();
        //var routes = require('./routes')(app);
        //app.GetRoutes();
        this.routes.GetRoutes(app);
        //require('./routes')(app);
        /*
        app.get('/', (req: express.Request, res: express.Response) => {
            res.send('Hello Seattle\n');
        });
        
        app.get('/test/', (req: express.Request, res: express.Response) => {
            res.send('Hello TEST Seattle\n');
        });
        */
        app.listen(this.port, this.ipAddress);
        console.log('Server running at http://' + this.ipAddress + '/...');
        console.log('Listening on port ' + this.port + '...');
    }
    Server.prototype.Activate = function () {
        this.CreateServer();
    };
    Server.prototype.OnRequest = function (request, response) {
        response.writeHead(200, this.header);
        response.end('Hello TypeScript & node.js');
    };
    Server.prototype.CreateServer = function () {
        console.log('Server starting..');
        this.server = http.createServer(this.OnRequest);
        this.server.listen(this.port, this.ipAddress);
        console.log('Server running at http://' + this.ipAddress + '/');
    };
    return Server;
}());
exports.Server = Server;
var myServer = new Server();
