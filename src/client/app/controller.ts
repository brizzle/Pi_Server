/// <reference path="../../Scripts/typings/tsd.d.ts" />

import express = require('express');
import ds = require('./dataservice');

export interface User {
    firstName: string;
    lastName: string;
    department: string;
}

// controller.js
export class Controller {
    
    private user: User = null;
    private dataService: ds.DataService = null;
    
    /**
     * Creates a new instance of Controller.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * new Controller()
     * ```
     */
    constructor() {
        this.dataService = new ds.DataService();
        
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
        
        this.dataService.GetAll((err: Error, data) => {
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
     * @param {express.Response} response - The response.
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
     * @param {express.Request} request - The request.
     * @param {express.Response} response - The response.
     * @param {number} id - The unique identifier.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * Get(theRequest, theResponse, theId)
     * ```
     */
    Get(request: express.Request, response: express.Response): void {
        this.dataService.Get(parseInt(request.params['id']), (err: Error, data) => {
            if (err) {
                console.log('ERROR: ', err.message);
                response.status(404);
                this.OnComplete(response, err.message);
                return;
            }
            this.OnComplete(response, data);
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
    Delete(request: express.Request, response: express.Response, id: number): void {
        this.dataService.Delete(id, (err: Error, data) => {
            if (err) {
                console.log('ERROR: ', err.message);
                response.status(404);
                this.OnComplete(response, err.message);
            } else {
                this.OnComplete(response, data);
            }
        });
    }
}