/* eslint-disable @typescript-eslint/ban-ts-comment */
import isTestAvailable from "../helpers/isTestAvailable";

import ex1 from "../../aulas/aula1/ex1";
import ex2 from "../../aulas/aula1/ex2";
import ex3 from "../../aulas/aula1/ex3";
import ex4 from "../../aulas/aula1/ex4";
import ex5 from "../../aulas/aula1/ex5";
import ex6 from "../../aulas/aula1/ex6";
import ex7 from "../../aulas/aula1/ex7";
import ex8 from "../../aulas/aula1/ex8";

const VERIFICAR_ERROS = false;
const itIf = (condition) => (condition ? it : it.skip);

const exIf1 = isTestAvailable(ex1);
const exIf2 = isTestAvailable(ex2);
const exIf3 = isTestAvailable(ex3);
const exIf4 = isTestAvailable(ex4);
const exIf5 = isTestAvailable(ex5);
const exIf6 = isTestAvailable(ex6);
const exIf7 = isTestAvailable(ex7);
const exIf8 = isTestAvailable(ex8);

describe("Aula 1 - Conhecendo variáveis e seus tipos", () => {
  itIf(exIf1)("Ex1 -Variável do tipo string", () => {
    // @ts-ignore
    const sut: string = ex1;
    expect(typeof sut).toBe("string");
    expect(sut.length).toBeGreaterThan(3);
  });
  itIf(exIf2)("Ex2 - Variável do tipo boolean", () => {
    expect(typeof ex2).toBe("boolean");
    expect(ex2).toBeFalsy();
  });
  itIf(exIf3)("Ex3 - Variável do tipo number", () => {
    expect(typeof ex3).toBe("number");
    expect(Number.isInteger(ex3)).toBeTruthy();
  });
  itIf(exIf4)("Ex4 - Variável do tipo undefined", () => {
    expect(typeof ex4).toBe("undefined");
  });
  itIf(exIf5)("Ex5 - Variável do tipo null", () => {
    expect(ex5 === null).toBeTruthy();
  });
  itIf(exIf6)("Ex6 - Função soma", () => {
    // @ts-ignore
    const sut: (num1: unknown, num2: unknown) => number = ex6;
    expect(sut(1, 1)).toBe(2);
    expect(sut(1000, 1)).toBe(1001);
    expect(sut("1", 1)).toBe(2);
    if (VERIFICAR_ERROS) {
      expect(sut([1], 1)).toThrow();
      expect(sut(false, 1)).toThrow();
      expect(sut(undefined, 1)).toThrow();
      expect(sut(null, 1)).toThrow();
      expect(sut({}, 1)).toThrow();
    }
  });
  itIf(exIf7)("Ex7 - Função primeiro número maior que segundo", () => {
    // @ts-ignore
    const sut: (num1: number, num2: number) => boolean = ex7;
    expect(sut(1, 2)).toBe(false);
    expect(sut(1, 1)).toBe(false);
    expect(sut(2, 1)).toBe(true);
  });
  itIf(exIf8)("Ex8 - Função verificar triangulo", () => {
    const generateRandomPositiveIntegerNumber = (
      min: number,
      max: number,
    ): number => Math.floor(Math.random() * (max - min + 1)) + min;

    const trianguloA = generateRandomPositiveIntegerNumber(1, 100);
    const trianguloB = generateRandomPositiveIntegerNumber(1, 100);
    const trianguloC = generateRandomPositiveIntegerNumber(
      Math.abs(trianguloB - trianguloA),
      trianguloB + trianguloA,
    );

    const triangulo: number[] = [
      generateRandomPositiveIntegerNumber(1, 100),
      generateRandomPositiveIntegerNumber(1, 100),
      generateRandomPositiveIntegerNumber(1, 100),
    ];

    function validate(a: number, b: number, c: number) {
      return (
        Math.abs(a - b) < c
        && c < a + b
        && Math.abs(a - c) < b
        && b < a + c
        && Math.abs(b - c) < a
        && a < b + c
      );
    }

    // @ts-ignore
    const sut: (num1: number, num2: number, num3: number) => boolean = ex8;
    expect(sut(trianguloA, trianguloB, trianguloC)).toBe(
      validate(trianguloA, trianguloB, trianguloC),
    );
    expect(sut(triangulo[0], triangulo[1], triangulo[2])).toBe(
      validate(triangulo[0], triangulo[1], triangulo[2]),
    );
    expect(sut(5, 10, 9)).toBe(true);
  });
});
