const Engineer = require('../lib/Engineer')

Test('create engineer object', () => {
    const employee = new Engineer('John', 42, 'john@john.com', 'github.com/john')

    expect(employee.getName()).toBe('john');
    expect(emploee.getId()). toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Engineer');
    expect(employee.getGit()).toEqual(expect.any(String));

})