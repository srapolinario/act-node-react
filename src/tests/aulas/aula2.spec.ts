/* eslint-disable @typescript-eslint/ban-ts-comment */
import isTestAvailable from "../helpers/isTestAvailable";

import ex1 from "../../aulas/aula2/ex1";
import ex2 from "../../aulas/aula2/ex2";
import ex3 from "../../aulas/aula2/ex3";
import ex4 from "../../aulas/aula2/ex4";
import ex5 from "../../aulas/aula2/ex5";

const itIf = (condition) => (condition ? it : it.skip);

const exIf1 = isTestAvailable(ex1);
const exIf2 = isTestAvailable(ex2);
const exIf3 = isTestAvailable(ex3);
const exIf4 = isTestAvailable(ex4);
const exIf5 = isTestAvailable(ex5);

describe("Aula 2 - Trabalhando com funções e condicionais", () => {
  itIf(exIf1)("Ex1 - Função verificando se array tem palavra 'teste'", () => {
    // @ts-ignore
    const sut: (testIn: string[]) => boolean = ex1;
    const data = [
      ["none"],
      ["none", "test", "Teste"],
      ["TESTE", "TESTe", "teste"],
      [
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
      ],
      ["a", "b", "c", "teste"],
    ];

    expect(sut(data[0])).toBe(false);
    expect(sut(data[1])).toBe(false);
    expect(sut(data[2])).toBe(true);
    expect(sut(data[3])).toBe(false);
    expect(sut(data[4])).toBe(true);
  });
  itIf(exIf2)("Ex2 - Função Bola mágica", () => {
    type TestIn = {
      name?: string;
      question: string;
    };
    type TestOut = {
      greeting: string;
      name?: string;
      question: string;
      randomNumber: number;
      answer: string;
    };
    const answers = [
      "Com certeza.",
      "Está decidido então.",
      "Sem dúvida.",
      "Sim, definitivamente.",
      "Você pode confiar nisso.",
      "Da forma que vejo, sim.",
      "Muito provavelmente.",
      "Me parece bom.",
      "Sim.",
      "Parece apontar para sim.",
      "Resposta nebulosa, tente novamente.",
      "Pergunte novamente depois.",
      "Melhor não te dizer agora.",
      "Não posso prever agora.",
      "Se concentre e pergunte novamente.",
      "Não conte com isso.",
      "Minha resposta é não.",
      "Minhas fontes dizem não.",
      "Me parece que não é uma boa.",
      "Muito duvidoso.",
    ];

    const questions = [
      "Hoje é dia de festa?",
      "Vou receber um aumento?",
      "Já é hora de comer?",
      "Está na hora de viajar?",
      "Devo ir no dentista anualmente?",
    ];

    // @ts-ignore
    const sut: (testIn: TestIn) => TestOut = ex2;
    const randomNumber = Math.floor(Math.random() * 5);
    const sutAnswer = [
      sut({ question: questions[0] }),
      sut({ question: questions[1] }),
      sut({ name: "Fulano", question: questions[2] }),
      sut({ name: "Ciclano", question: questions[3] }),
      sut({ name: "", question: questions[4] }),
    ];

    expect(sutAnswer[randomNumber].greeting).toBe(
      `Olá${
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        sutAnswer[randomNumber].name ? `, ${sutAnswer[randomNumber].name}` : ""
      }!`,
    );
    expect(sutAnswer[randomNumber].question).toBe(questions[randomNumber]);
    expect(sutAnswer[randomNumber].randomNumber).toBeDefined();
    expect(sutAnswer[randomNumber].answer).toBe(
      answers[sutAnswer[randomNumber].randomNumber],
    );
  });
  itIf(exIf3)("Ex3 - Função maiores palavras", () => {
    const sut = ex3;
    const incomeValues = [
      ["aba", "aa", "ad", "vcd", "aba"],
      ["aa"],
      ["abc", "eeee", "abcd", "dcd"],
      ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"],
      [
        "young",
        "yooooooung",
        "hot",
        "or",
        "not",
        "come",
        "on",
        "fire",
        "water",
        "watermelon",
      ],
    ];
    const outcomeValues = [
      ["aba", "vcd", "aba"],
      ["aa"],
      ["eeee", "abcd"],
      ["zzzzzz", "abcdef", "aaaaaa"],
      ["yooooooung", "watermelon"],
    ];

    incomeValues.forEach((incomeValue, index) => {
      expect(sut(incomeValue)).toBe(outcomeValues[index]);
    });
  });
  itIf(exIf4)("Ex4 - Função Whale talk", () => {
    const sut = ex4;
    const incomeValues = [
      "Hello word",
      "Na química nada é destruído tudo é transformado",
      "Ser ou não ser eis a questão",
    ];
    const outcomeValues = ["EEOO", "AUUIAAAEEUUOUUOAOAO", "EEOUUOEEEEIAUUEEO"];
    const weirdIncomeValues = ["kdjblskdjbflk", ""];
    incomeValues.forEach((incomeValue, index) => {
      expect(sut(incomeValue)).toBe(outcomeValues[index]);
    });
    weirdIncomeValues.forEach((incomeValue) => {
      expect(sut(incomeValue)).toBeDefined();
    });
  });
  itIf(exIf5)("Ex5 - Classe estatísticas de times", () => {
    const sut = ex5;

    const insertValues = () => {
      sut.addGame("Lion's", 3, 2);
      sut.addGame("King's", 5, 7);
      sut.addGame("Dinosaur's", 6, 3);
      sut.addPlayer("Peter", "Brow", 24);
      sut.addPlayer("Julian", "White", 26);
      sut.addPlayer("John", "King", 27);
    };
    expect(insertValues()).not.toThrow();
    expect(sut.games.length).toBe(3);
    expect(sut.players.length).toBe(3);
    expect(() => {
      sut.games = [];
    }).toThrow();
  });
});
