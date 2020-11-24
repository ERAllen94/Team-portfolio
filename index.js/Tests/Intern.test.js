const Intern = require('../lib/Intern')

test('create intern object', () => {
    const employee = new Intern('John', 42, 'john@john.com', 'DixieState')

    expect(employee.getName()).toBe('john');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Intern');
    expect(employee.getSchool()).toEqual(expect.any(String));
})