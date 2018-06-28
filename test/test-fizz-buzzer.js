const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

    it('Should return "fizzBuzz" if divisible by 3 & 5', function(){
        const normalCases = [
            {num: 15, expected: 'fizz-buzz'},
            {num: 30, expected: 'fizz-buzz'},
            {num: 45, expected: 'fizz-buzz'}
        ];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('Should return "buzz" if divisible by 5', function(){
        const normalCases = [
            {num: 5, expected: 'buzz'},
            {num: 20, expected: 'buzz'},
            {num: 35, expected: 'buzz'}
        ];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('Should return "fizz" if divisible by 3', function(){
        const normalCases = [
            {num: 3, expected: 'fizz'},
            {num: 12, expected: 'fizz'},
            {num: 33, expected: 'fizz'}
        ];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('Should cause an error if not a number',function(){
        const badInputs = ['a',false,'2'];
        badInputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input);
            }).to.throw(Error);
        })
    });
});