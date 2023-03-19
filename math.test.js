//const math = require('./math.js');
const math = require('./math.js');

//describe('math', () => {
//
//    test('1 + 1 = 2', () => {
//        expect(math.add(1, 1)).toEqual(2);
//    });
//
//});

describe('match', () => {

    test('log in with correct password', () => {
        expect(math.checkPassword('shawn@psych.com', 'tearsforfears')).toEqual("welcome shawn");
    });

    test('log in with incorrect password', () => {
        expect(math.checkPassword('shawn@psych.com', 'tears')).toEqual("unauthorized");
    });
});