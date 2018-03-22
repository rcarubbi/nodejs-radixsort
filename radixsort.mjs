'use strict';

const extractAgeDigit = (pos, number) => {
    return ~~(number/Math.pow(10,pos))- ~~(number/Math.pow(10,pos+1))*10;
}

export default class RadixSort {

    sort(array, digits) {
        const arrayLength = array.length;
 
        let buckets = [];
        let i = 0;
        for(;i<digits;i++) {
            buckets = [[], [], [], [], [], [], [], [], [],[]];
            let item = 0;
            for(;item<arrayLength;item++) {
                buckets[extractAgeDigit(i, array[item])].push(array[item]);
            }    
            array = [].concat.apply([], buckets);            
        }

        return array;
    }
}