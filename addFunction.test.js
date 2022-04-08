const addFunction = require('./addFunction');

test('Adds 2 + 2 to equal 4',() => {
    expect(addFunction.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to Not equal 3',() => {
    expect(addFunction.add(2, 2)).not.toBe(3);
});

//Null
test('to be null',() => {
    expect(addFunction.isNull()).toBeNull(); 
});

//falsy 
test('to be falsy',() => {
    expect(addFunction.checkValue()).toBeFalsy();
    expect(addFunction.checkValue(undefined)).toBeFalsy();
    expect(addFunction.checkValue(0)).toBeFalsy(); 
});

test('user should be Driven Test',() => {
    expect(addFunction.createUser()).toEqual({
        firstName: 'Test',
        lastName: 'Driven'
    }); 
});