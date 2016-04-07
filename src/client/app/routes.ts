/// <reference path="../../Scripts/typings/tsd.d.ts" />

import express = require('express');
import controller = require('./controller');

export class Routes {
    
        private controller: controller.Controller = null;
        
        constructor() {
            this.controller = new controller.Controller();
        }
        
        GetRoutes(app) {
            app.get('/controllers', (request: express.Request, response: express.Response) => { this.controller.GetAll(request, response) } );
            app.get('/controllers/:id', (request: express.Request, response: express.Response) => { this.controller.Get(request, response) } );
            //app.post('/controllers', this.controller.Add());
            //app.put('/controllers/:id', this.controller.Update());
            //app.delete('/controllers/:id', (request: express.Request, response: express.Response, id: number) => { this.controller.Delete(request, response, id) });
        }
}