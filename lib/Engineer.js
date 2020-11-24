const Employee = require('../lib/Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
     super(name, id ,email);   
   this.git = git;
    }
    getGit(){
        return this.git;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;