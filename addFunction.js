const addFunction = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: 'Test'}
        user['lastName'] = 'Driven';
        return user;
    }
};

module.exports = addFunction;