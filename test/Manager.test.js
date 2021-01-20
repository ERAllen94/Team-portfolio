const Manager = require('../lib/Manager')

test('create engineer object', () => {
    const employee = new Manager('John', 42, 'john@john.com', '928 450 6514')

    expect(employee.getName()).toBe('John');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Manager');
    expect(employee.getOfficeNumber()).toEqual(expect.any(String));
})