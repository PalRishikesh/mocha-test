const { default: axios } = require("axios");


class Calculator{
    add(a,b){
        return a +b;
    }

    divide(a,b){
        if(b==0){
            throw new Error('Can not divide by Zero');
        }
        return a/b;
    }

    async getPlaceholderUser(){
        return await axios.get('https://jsonplaceholder.typicode.com/users/1')
    }
}

module.exports  = Calculator;
