class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        function getName() {
            return name;
        };
        function getId() {
            return id;
        };
        function getEmail() {
            return email;
        };
        function getRole() {
            return "Employee";
        };
        getName();

        getId();

        getEmail();

        getRole();
    };
};



module.exports = Employee;