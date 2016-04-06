/// <reference path="../../Scripts/typings/tsd.d.ts" />

import http = require('http');
import express = require('express');
import routes = require('./routes');
import path = require('path');

export class Server {
        
        /*
         * Used in Angular
         */
        // static $inject = [];
        
    private header: Object = {'Content-Type': 'text/plain'};
    private port: number = 1337;
    private ipAddress: string = 'localhost';
    private server: http.Server;
    private routes: routes.Routes = new routes.Routes();
        
    constructor() {
        this.Activate();
            //this.server = http.createServer(this.OnRequest);
		    //this.server.listen(this.port, this.ipAddress);
            
            /*
            http.createServer((req: http.ServerRequest, res: http.ServerResponse) => {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Hello World\n');
            }).listen(1337);
            //}).listen(1337, '127.0.0.1');
            */
    }
        
    Activate() {
        this.CreateServer();
    }
        
    OnRequest(request: http.ServerRequest, response: http.ServerResponse): void {
        response.writeHead(200, this.header);
		response.end('Hello TypeScript & node.js');
	}
        
    CreateServer(): void {
        console.log('Server starting...');
        //var appDir = path.dirname(require.main.filename);
        //console.log('App Directory... ', appDir);
        //console.log('Dir... ', __dirname);
            
        var app = express();
        this.routes.GetRoutes(app);
            
        app.listen(this.port, this.ipAddress);
        
		console.log('Server running at http://' + this.ipAddress + '/...');
        console.log('Listening on port ' + this.port + '...');
    }
}
    
var piServer = new Server();