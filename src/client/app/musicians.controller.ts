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
        
        //this.user = {firstName: 'brock', lastName: 'billings', department: 'IT App Dev'}
        
        // TODO: Need to set Base URL...
    }
    
    /**
     * Gets data.
     * 
     * @param {Express.Request} request - The request.
     * @param {Express.Response} response - The response.
     * 
     * #### Notes
     * This gets all the data.
     * 
     * #### Example
     * ```typescript
     * GetAll(theRequest, theResponse)
     * ```
     */
    GetAll(request: express.Request, response: express.Response): void {
        //request.authenticatedUser = this.user;
        
        //console.log('Authenticated User... ', request.authenticatedUser, '\n');
        
        //console.log('The local address ', request.connection.localAddress, ' was accessed on port ', request.connection.localPort, '...\n');
        
        this.musiciansDataService.GetAll((err: Error, data) => {
            if (err) {
                console.log('ERROR: ', err.message);
                response.status(404);
                this.OnComplete(response, err.message);
            } else {
                this.OnComplete(response, data);
            }
        });
    }
    
    /**
     * When retrieving data has completed.
     * 
     * @param {Express.Response} response - The response.
     * @param {object} data - The data.
     * 
     * #### Notes
     * This method is for when the data has been completely returned.
     * 
     * #### Example
     * ```typescript
     * OnComplete(theResponse, theData)
     * ```
     */
    OnComplete(response: express.Response, data) {
        response
            .status(response.statusCode)
            .send(data);
    }
    
    /**
     * Gets data based on the unique identifier.
     * 
     * @param {Express.Request} request - The request.
     * @param {Express.Response} response - The response.
     * @param {number} id - The unique identifier.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * Get(theRequest, theResponse, theId)
     * ```
     */
    Get(request: express.Request, response: express.Response, id: number): void {
        this.musiciansDataService.Get(id, (err: Error, data) => {
            if (err) {
                console.log('ERROR: ', err.message);
                response.status(404);
                this.OnComplete(response, err.message);
            } else {
                this.OnComplete(response, data);
            }
        });
    }
    
    /**
     * Adds data.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * Add()
     * ```
     */ 
    Add(): void {
    }
    
    /**
     * Updates data.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * Update()
     * ```
     */
    Update(): void {         
    }
    
    /**
     * Deletes data.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * Delete(theId)
     * ```
     */ 
    Delete(id: number): void {
    }
}