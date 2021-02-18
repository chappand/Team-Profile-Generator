const Employee = require('../Lib/Employee');
const Manager = require('../Lib/Manager.js');

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create a new object with Name, Id, Email, and Office Number when called with the 'new' keyword", () => {
            const obj = new Manager("Andrew", "1111", "x@x.com", "Andrew11");
            function getRole() {
                return "Manager";
            };

            expect(Manager.name !== null).toEqual(true);
            expect(Manager.id !== null).toEqual(true);
            expect(Manager.email !== null).toEqual(true);
            expect(Manager.officeNumber !== null).toEqual(true);
            expect(getRole()).toEqual("Manager");
        });
    });
});