/// <reference path="../../Scripts/typings/tsd.d.ts" />

import fs = require('fs');

// musicians.dataservice.js
export class MusiciansDataService {
    'use strict';
    
    constructor() {
    }
    
    /**
     * Gets the data.
     * @param {number} id - The unique identifier.
     * @param {GetCallback} callback - The callback to return.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * Get(theId, theCallbackFunction)
     * ```
     */
    Get(id: number, callback: Function): void {
        callback(null, [{
            'id': 1,
            'name': 'Max',
            'band': 'Maximum Pain',
            'instrument': 'guitar'
        }]);
    }
    
    /**
     * Gets all the data.
     * @param {GetAllCallback} callback - The callback to return.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * GetAll(theCallbackFunction)
     * ```
     */
    GetAll(callback: Function): void {
        return this.ReadJSONFile('./data.json', (err, json: JSON) => {
            if(err) {
                callback(err);
            }
            callback(null, json);
        });
    }
    
    /**
     * Adds the data.
     * 
     * @param {Object} dto - The data transfer object.
     * 
     * #### Notes
     * Adds the data to the data source.
     * 
     * #### Example
     * ```typescript
     * Add(theDto)
     * ```
     */ 
    Add(dto: Object): void {
    }
    
    /**
     * Updates the data.
     * 
     * @param {Object} dto - The data transfer object.
     * 
     * #### Notes
     * Updates the data to the data source.
     * 
     * #### Example
     * ```typescript
     * Update(theDto)
     * ```
     */
    Update(dto: Object): void {
    }
    
    /**
     * Deletes the data.
     * 
     * @param {number} id - The unique identifier.
     * 
     * #### Notes
     * Deletes the data from the data source by finding the unique identifier.
     * 
     * #### Example
     * ```typescript
     * Delete(theId)
     * ```
     */
    Delete(id: number): void {
    }
    
    /**
     * Reads the JSON file.
     * 
     * @param {string} filename - The filename.
     * @param {ReadJSONFileCallback} callback - The callback function.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * ReadJSONFile(theFilename, theCallbackFunction)
     * ```
     */
    ReadJSONFile(filename: string, callback: Function) {
        fs.readFile(filename, (err, data: Buffer) => {
            if(err) {
                callback(err);
                return;
            }
            try {
                callback(null, data.toString());
            } catch(exception) {
                callback(exception);
            }
        });
    }
}