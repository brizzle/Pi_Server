/// <reference path="../../Scripts/typings/tsd.d.ts" />

// musicians.dataservice.js
export class MusiciansDataService {
    
    constructor() {
    }
    
    /**
     * Gets the data.
     * @param {number} id - The unique identifier.
     * @return {object}
     */
    Get(id: number): Object {
        return [{
            'id': 1,
            'name': 'Max',
            'band': 'Maximum Pain',
            'instrument': 'guitar'
        }];
    }
    
    /**
     * Gets all the data.
     */
    GetAll(): Array<Object> {
        return [{
            'id': 1,
            'name': 'Max',
            'band': 'Maximum Pain',
            'instrument': 'guitar'
        },
        {
            'id': 2,
            'name': 'Jax',
            'band': 'Maximum Pain',
            'instrument': 'drums'
        }];
    }
        
    Add(dto: Object): number {
        return 1;
    }
    
    Update(dto: Object) {
        
    }
    
    Delete(id: number): number {
        return id;
    }
}