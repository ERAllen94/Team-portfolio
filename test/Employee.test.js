const Employee = require('../lib/Employee')

test('create employee object', () => {
    const employee = new Employee('John', 42, 'john@john.com')

    expect(employee.getName()).toBe('john');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Employee');
})