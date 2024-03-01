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

/**
 * @description getMixColor
 * @param { Boolean } isMix 
 * @returns { Array }
 */
export const getMixColor = (isMix: boolean): { stopColors: string[], animateStopColor: string[] } => {
    let stopColors = ['#1c8cff', '#1584d6', '#0c6ebf']
    let animateStopColor = ['#1c8cff; #3eaee9; #1c8cff', '#1584d6; #3eaee9; #1584d6', '#0c6ebf; #3eaee9; #0c6ebf']

    if (isMix) {
        stopColors = ['#0802A3', '#feb47b', '#ff7e5f']
        animateStopColor = ['#0802A3; #FF4B91; #FFCD4B', '#feb47b; #a0ecff; #feb47b', '#ff7e5f; #82d8ff; #ff7e5f']
    }

    return {
        stopColors,
        animateStopColor
    }
}

/**
 * @description getTimestamp
 * @param { String } prifix 
 * @returns { String }
 */
export const getTimestamp = (prifix:string):string => {
    const D = new Date()
    return `${prifix}_${D.getTime()}`
}

/**
 * @description getUUID
 * @param { String } prifix 
 * @returns { String }
 */
export const getUUID = (prifix?: string): string => {
    const temp_url = URL.createObjectURL(new Blob([]))
    const uuid = temp_url.toString()
    URL.revokeObjectURL(temp_url)
    return prifix+'_'+uuid.substring(uuid.lastIndexOf("/") + 1)
}