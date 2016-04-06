/// <reference path="../../Scripts/typings/tsd.d.ts" />

import sqlite3 = require('sqlite3');

// musicians.dataservice.js
export class SqliteService {
    'use strict';
    
    private databaseName: string = null;
    private db: sqlite3.Database = null;
    
    /**
     * Creates a new instance of SqliteService.
     * 
     * @param {string} databaseName - The database name.
     * 
     * #### Notes
     * 
     * #### Example
     * ```typescript
     * new SqliteService(theDatabaseName)
     * ```
     */
    constructor(databaseName: string) {
        this.databaseName = databaseName;
    }
    
    /**
     * Executes the read only queries.
     * 
     * @param {string} query - The query to be executed.
     * @param {ReadCallback} callback - The callback function.
     * 
     * #### Notes
     * Executes the "all" function of the sqlite class.
     * 
     * #### Example
     * ```typescript
     * Read(theQuery, theCallbackFunction)
     * ```
     */
    Read(query: string, callback: Function): void {
        
        this.db = new sqlite3.Database(this.databaseName);
        
        this.db.serialize(() => {
            this.db.all(query, (err: Error, rows: Array<any>) => {
                if (err) {
                    console.log('ERROR: ', err);
                } else {
                    console.log('Records found: ', rows.length);
                    callback(null, rows);
                }
            })
        });
        
        this.db.close();
    }
    
    /**
     * Executes the add, update, and delete queries.
     * 
     * @param {string} query - The query to be executed.
     * @param {ReadCallback} callback - The callback function.
     * 
     * #### Notes
     * Executes the "run" function of the sqlite class.
     * 
     * #### Example
     * ```typescript
     * Read(theQuery, theCallbackFunction)
     * ```
     */
    Run(query: string, callback: Function): void {
        
        this.db = new sqlite3.Database(this.databaseName);
        
        this.db.serialize(() => {
            this.db.run(query, (err: Error, rows: Array<any>) => {
                if (err) {
                    console.log('ERROR: ', err);
                } else {
                    console.log('Record: ', rows);
                    callback(null, rows);
                }
            })
        });
        
        this.db.close();
    }
}