const pigLatin = require('./piglatin.js');

describe('matche',() => {

    test('check piglatin', () => {
        expect(pigLatin.translate('hello')).toEqual('ellohay')
    });

    test('check piglatin', () => {
        expect(pigLatin.translate('hello world')).toEqual('ellohay orldway')
    });

    
});
