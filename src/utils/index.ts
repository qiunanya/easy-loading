/**
 * @description tool lib
 * 
 * @author qiuny
 */


/**
 * @description deepClone
 * 
 * @param { any } _O 
 * @returns any
 */
export const deepClone = (_O: any): any => {
    if (_O === null || typeof _O !== 'object') {
        return _O;
    }

    if (Array.isArray(_O)) {
        return _O.map(item => deepClone(item))
    }

    const tempObjet: any = {}

    for (const key in _O) {
        if (Object.prototype.hasOwnProperty.call(_O, key)) {
            tempObjet[key] = deepClone(_O[key])
        }
    }
    return tempObjet;
}