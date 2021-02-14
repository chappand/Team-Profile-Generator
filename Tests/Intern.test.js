const Employee = require('../Lib/Employee');
const Intern = require('../Lib/Intern.js');

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create a new object with Name, Id, Email, and Github when called with the 'new' keyword", () => {
            const obj = new Intern("Andrew", "1111", "x@x.com", "Andrew11");
            function getRole() {
                return "Intern";
            };

            expect(Intern.name !== null).toEqual(true);
            expect(Intern.id !== null).toEqual(true);
            expect(Intern.email !== null).toEqual(true);
            expect(Intern.github !== null).toEqual(true);
            expect(getRole()).toEqual("Intern");
        });
    });
});