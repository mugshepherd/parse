const {parse} = require('../src/main');

describe('GIVEN a function parse', () => {
    describe('when invoked', () => {
        const myDate = new Date(Date.now()).toISOString();
        const timeInput = 'now()+3s-5d'
        it('will return a date object returned as a string', () => {
            expect(parse(timeInput)).toEqual(myDate);
        });
        // it ('will create and return a new day object if passed now()', () => {
        //     const iso8601Format = /^\d{4}(\-\d{2}){2}T\d{2}(:\d{2}){2}\.\d{2-3}Z$/
        //     const myTimeInput = 'now()'
        //     expect(parse(myTimeInput)).toEqual(
        //         expect.stringMatching(iso8601Format),
        //     )
        // })
    })
});
