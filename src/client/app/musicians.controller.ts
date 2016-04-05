/// <reference path="../../Scripts/typings/tsd.d.ts" />

import express = require('express');
import dataService = require('./musicians.dataservice');

export interface User {
    firstName: string;
    lastName: string;
    department: string;
}

// musicians.controller.js
export class MusiciansController {
    
    private user: User = null;
    private musiciansDataService: dataService.MusiciansDataService = null;
    
    constructor() {
        this.musiciansDataService = new dataService.MusiciansDataService();
        
        this.user = {firstName: 'brock', lastName: 'billings', department: 'IT App Dev'}
        
        // TODO: Need to set Base URL...
    }
    
    /*
     * Gets all the musicians.
     */
    GetAll(request: express.Request, response: express.Response) {
        //request.authenticatedUser = this.user;
        
        //console.log('Authenticated User... ', request.authenticatedUser, '\n');
        
        console.log('The local address ', request.connection.localAddress, ' was accessed on port ', request.connection.localPort, '...\n');
        console.log('Response Status Code... ', response.statusCode, '\n');
        
        var data = this.musiciansDataService.GetAll();
        
        response
            .status(response.statusCode)
            .json(data);
    }
        
    Get(request: express.Request, response: express.Response, id: number) {
        
        var data = this.musiciansDataService.Get(id);
        
        response
            .status(response.statusCode)
            .json(data);
    }
        
    Add() {
            
    }
        
    Update() {
            
    }
        
    Delete(id: number) {
            
    }
}