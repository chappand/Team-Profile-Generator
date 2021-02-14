const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        function getRole() {
            return "Manager";
        };

        getName();

        getId();

        getEmail();

        getRole();
        
    };
};

module.exports = Manager;