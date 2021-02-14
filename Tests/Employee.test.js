const Employee = require('../Lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create a new object with Name, Id, and Email when called with the 'new' keyword", () => {
            const obj = new Employee("Andrew", 1111, "x@x.com");
            function getRole() {
                return "Employee";
            };

            expect(Employee.name !== null).toEqual(true);
            expect(Employee.id !== null).toEqual(true);
            expect(Employee.email !== null).toEqual(true);
            expect(getRole()).toEqual("Employee");
        });
    });

    describe("name", () => {
        it("New Employee should have the same name that is passed in", () => {
            const emp = new Employee("Andrew", 1111, "x@x.com");

            expect(Employee.name).toEqual("Andrew");
        });
    });
});
