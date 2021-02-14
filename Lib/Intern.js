const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;
        
        function getRole() {
            return "Intern";
        };

        function getSchool() {
            return school;
        }

        getName();

        getId();

        getEmail();

        getRole();

        getSchool();
        
    };
};

module.exports = Intern;