'use strict';

export default class Generator {
    generate(qtd, min, max) {
        let result = [];
        let i = 0;
        for (;i<qtd;i++){
            result.push(Math.floor((Math.random() * max) + min));
        }    
        return result;
    }
}