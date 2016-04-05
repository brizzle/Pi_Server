/// <reference path="../../Scripts/typings/tsd.d.ts" />

import express = require('express');
import musiciansController = require('./musicians.controller');

export class Routes {
        
        private musicians: string = './controllers/musicians';
        private musiciansController: musiciansController.MusiciansController = null;
        
        constructor() {
            this.musiciansController = new musiciansController.MusiciansController();
        }
        
        GetRoutes(app) {
            app.get('/musicians', (request, response) => { this.musiciansController.GetAll(request, response) } );
            app.get('/musicians/:id', (request, response) => { this.musiciansController.Get(request, response, 1) } );
            //app.post('/musicians', this.musiciansController.Add());
            //app.put('/musicians/:id', this.musiciansController.Update());
            //app.delete('/musicians/:id', this.musiciansController.Delete(1));
        }
}