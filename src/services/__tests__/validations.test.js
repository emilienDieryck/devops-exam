const { isEmpty, eigtCaracter } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - eightCaracter", () => {
    test("should return false if the lenght <8 ", () => {
        const result = eigtCaracter("test");
        expect(result).toBe(false);
    });
    test("should return true if the game Caracter = 8 ", () => {
        const result = eigtCaracter("gameCara");
        expect(result).toBe(true);
    });
    test("should return true if the game Caracter > 8", () => {
        const result = eigtCaracter("test9àéekks");
        expect(result).toBe(true);
    });

});

// TODO: Create tests suite for validation function
