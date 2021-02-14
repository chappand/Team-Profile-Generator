const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github;
        
        function getRole() {
            return "Engineer";
        };

        function getGithub() {
            return github;
        }

        getName();

        getId();

        getEmail();

        getRole();

        getGithub();
        
    };
};

module.exports = Engineer;