const addFunction = require('./addFunction');

test('Adds 2 + 2 to equal 4',() => {
    expect(addFunction.add(2, 2)).toBe(4);
});