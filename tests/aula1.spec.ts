import ex1 from "../aulas/aula1/ex1";
import ex2 from "../aulas/aula1/ex2";
import ex3 from "../aulas/aula1/ex3";

describe("Aula 1 - Conhecendo variáveis e seus tipos", () => {
    it("Variável do tipo string", () => {
        console.log("Variável declarada", ex1);
        expect(typeof ex1).toBe("string");
        expect(ex1.length).toBeGreaterThan(3);
    });
    it("Variável do tipo boolean", () => {
        console.log("Variável declarada", ex2);
        expect(typeof ex2).toBe("boolean");
        expect(ex2).toBeFalsy();
    });
    it("Variável do tipo number", () => {
        console.log("Variável declarada", ex3);
        expect(typeof ex3).toBe("number");
        expect(Number.isInteger(ex3)).toBeTruthy();
    });
});
