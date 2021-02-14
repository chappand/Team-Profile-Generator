const Employee = require('../Lib/Employee');
const Engineer = require('../Lib/Engineer.js');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create a new object with Name, Id, Email, and Github when called with the 'new' keyword", () => {
            const obj = new Engineer("Andrew", "1111", "x@x.com", "Andrew11");
            function getRole() {
                return "Employee";
            };

            expect(Engineer.name !== null).toEqual(true);
            expect(Engineer.id !== null).toEqual(true);
            expect(Engineer.email !== null).toEqual(true);
            expect(Engineer.github !== null).toEqual(true);
            expect(getRole()).toEqual("Engineer");
        });
    });
});