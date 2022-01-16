import ex1 from "../aulas/aula1/ex1";

describe("Aula 1 - Conhecendo variáveis e seus tipos", () => {
    it("Variável do tipo string", () => {
        expect(typeof ex1).toBe("string");
        expect(ex1.length).toBeGreaterThan(3);
    });
});
