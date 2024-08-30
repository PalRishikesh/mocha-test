import {expect} from "chai"
import Calculator from "../src/calculator.js"

const baseUrl = "https://jsonplaceholder.typicode.com"
describe.skip('Simple test Suite',()=>{

    it('Simple add test cases',()=>{
        // Arrange 
        const calc = new Calculator();
        // Action
        const result = calc.add(1,3);
        // Assert
        expect(result).to.equal(4)
    })

    it('Simple divide test cases',()=>{
        // Arrange 
        const calc = new Calculator();
        // Action
        const result = calc.divide(10,5);
        // Assert
        expect(result).to.equal(2)
    })

    it('Simple divide test cases by zero',()=>{
        // Arrange 
        const calc = new Calculator();
        // Action
        // const result = calc.divide(10,0);
        // Assert
        // expect(result).to.throw('Can not divide by Zero')
        expect(()=>{
            calc.divide(10,0)
        }).to.throw('Can not divide by Zero')
    })

    it('Calling Get API for user',async()=>{
        // Arrange 
        const calc = new Calculator();
        // Action
        const result =await calc.getPlaceholderUser();
        // Assert
        expect(result.status).to.equal(200)
        expect(result.data.id).to.be.a('number');
        expect(result.data).to.be.an('object')
        expect(result.data).to.not.be.empty
    })



    
})