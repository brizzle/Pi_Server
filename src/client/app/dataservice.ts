/// <reference path="../../Scripts/typings/tsd.d.ts" />

import sqlite3 = require('sqlite3');
import sqlService = require('./sqlite.service');
import fileService = require('./file.service');

// dataservice.js
export class DataService {
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
        
        //https://codeforgeek.com/2014/07/node-sqlite-tutorial/
        
        var sql = new sqlService.SqliteService('./CarInsurance.sqlite');
        var query: string = 'SELECT * FROM Car WHERE Id = ' + id;
        var t = sql.Read(query, (err: Error, data) => {
            if (err) {
                console.log('ERROR', err.name);
                return;
            }
            callback(null, data);
        });
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
        var sql = new sqlService.SqliteService('./CarInsurance.sqlite');
        var query: string = 'SELECT * FROM Car';
        var t = sql.Read(query, (err: Error, data) => {
            if (err) {
                console.log('ERROR', err.name);
            } else {
                callback(null, data);
            }
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
     * @param {DeleteCallback} callback - The callback function.
     * 
     * #### Notes
     * Deletes the data from the data source by finding the unique identifier.
     * 
     * #### Example
     * ```typescript
     * Delete(theId, theCallbackFunction)
     * ```
     */
    Delete(id: number, callback: Function): void {
        var sql = new sqlService.SqliteService('./CarInsurance.sqlite');
        var query: string = 'DELETE FROM Car WHERE Id = ' + id;
        var t = sql.Run(query, (err: Error, data) => {
            if (err) {
                console.log('ERROR', err.name);
            } else {
                callback(null, data);
            }
        });
    }
}