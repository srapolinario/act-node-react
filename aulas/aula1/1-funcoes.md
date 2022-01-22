# Funções

Matematicamente função é uma regra que relaciona um conjunto de
valores denominado domínio, ao um outro conjunto de valores denominado contradomínio ou ainda imagem.

```math
f(x) = 2 * x, D(f) = {x \epsilon \mathbb{R} }, Im(f) = {x \epsilon \mathbb{R}}
```

Dizemos que a função _f_ recebe x dentro do domínio dos Reais e retorna _f(x)_ com a imagem dentro do contradomínio dos Reais pela regra _2 \* x_

Computacionalmente uma função estabelece um conjunto de regras para uma entrada, gerando uma saída.
Em javascript a mesma função acima pode ser declarada da seguinte forma:

```javascript
function f(x) {
    return 2 * x;
}

f(2); //returns 4
```

Da mesma forma em typescript a mesma função pode ser declarada da seguinte forma:

```typescript
function f(x: number): number {
    return 2 * x;
}

f(2); // returns 4
```

_NOTA_: Typescript é considerado um superset para ECMAscript
(javascript). De modo que o código gerado em typescript precisa
de ser compilado (convertido) para javascript. A vantagem que
em typescript é possível inferir o tipo, dando a vantagem para
o desenvolvedor em realizar o tratamento de erros caso se
aplique.

## Arrow function

```javascript
const f = (x) => {
    return 2 * x;
};

f(2); //returns 4
```

## Boas práticas

A função acima seria melhor escrita da seguinte forma. Considerando tratamento de erros:

```javascript
function double(x) {
    if (isNaN(x)) {
        throw new Error(`A variável ${x} não é um número.`);
    }
    return 2 * x;
}

double(4); // 8
double(false); // Error: A variável a não é um número.
```

e em typescript:

```typescript
function double(x: number): number {
    if (isNaN(x)) {
        throw new Error(`A variável ${x} não é um número.`);
    }
    return 2 * x;
}

double(4); // 8
double("a"); /* Esta linha provoca erro na tela do desenvolvedor: O argumento
do tipo 'string' não é atribuível ao parâmetro do tipo
'number'. */
```

_NOTA_ experimente passar outros tipos de variáveis para a função acima. Você vai notar que ela não resolve todos os problemas.

O tratamento de erros para o desenvolvedor Fullstack é essencial
pois garante a confiabilidade e a veracidade das informações recebidas.

## Operadores aritméticos

| Operador | Nome                                                | Propósito                                                                                    | Exemplo                                                                   |
| :------: | --------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|    +     | Adição                                              | Adiciona um número a outro.                                                                  | 6 + 9                                                                     |
|    -     | Subtração                                           | Subtrai o número da direita do número da esquerda.                                           | 20 - 15                                                                   |
|    \*    | Multiplicação                                       | Multiplica um número pelo outro.                                                             | 3 \* 7                                                                    |
|    /     | Divisão                                             | Divide o número da esquerda pelo número da direita.                                          | 10 / 5                                                                    |
|    %     | Restante (_Remainder_ - as vezes chamado de modulo) | Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita. | 8 % 3 (retorna 2; como três cabe duas vezes em 8, deixando 2 como resto.) |

## Operadores de atribuição

| Operator | Name                        | Propósito                                                                                                   | Exemplo         | Atalho para        |
| :------: | --------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------- | ------------------ |
|    +=    | Atribuição de adição        | Adiciona o valor à direita ao valor da variável à esquerda e, em seguida, retorna o novo valor da variável. | x = 3; x += 4;  | x = 3; x = x + 4;  |
|    -=    | Atribuição de subtração     | Subtrai o valor à direita do valor da variável à esquerda e retorna o novo valor da variável.               | x = 6; x -= 3;  | x = 6; x = x - 3;  |
|   \*=    | Atribuição de multiplicação | Multiplica o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável.          | x = 2; x \*= 3; | x = 2; x = x \* 3; |
|    /=    | Atribuição de divisão       | Divide o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável.              | x = 10; x /= 5; | x = 10; x = x / 5; |

## Operadores de comparação

| Operator | Name                  | Purpose                                                                                      |   Example   |
| :------: | --------------------- | -------------------------------------------------------------------------------------------- | :---------: |
|   ===    | Igualdade estrita     | Verifica se o valor da esquerda e o da direita são idênticos entre si. Inclusive no tipo     |  5 === '5'  |
|    ==    | Igualdade             | Verifica se o valor da esquerda e o da direita são idênticos entre si.                       | 5 == 4 + 3  |
|   !==    | Não-igualdade-estrita | Verifica se o valor da esquerda e o da direita não são idênticos entre si. Inclusive no tipo | 5 !== 2 + 3 |
|    !=    | Não-igualdade         | Verifica se o valor da esquerda e o da direita não são idênticos entre si.                   |  5 != '5'   |
|    <     | Menor que             | Verifica se o valor da esquerda é menor que o valor da direita.                              |   10 < 6    |
|    >     | Maior que             | Verifica se o valor da esquerda é maior que o valor da direita.                              |   10 > 20   |
|    <=    | Menor ou igual que    | Verifica se o valor da esquerda é menor que ou igual ao valor da direita.                    |   3 <= 2    |
|    >=    | Maior ou igual que    | Verifica se o valor da esquerda é maior que ou igual ao valor da direita.                    |   5 >= 4    |

_Nota_: Todos as comparações acima retornam falso

## Operadores lógicos

|     Operador     |     Utilização     | Descrição                                                                                                                                                                                                                                      |
| :--------------: | :----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AND lógico (&&)  |  `expr1 && expr2`  | (E lógico) - Retorna expr1 caso possa ser convertido para falso; senão, retorna expr2. Assim, quando utilizado com valores booleanos, && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.             |
| OU lógico (\|\|) | `expr1 \|\| expr2` | (OU lógico) - Retorna expr1 caso possa ser convertido para verdadeiro; senão, retorna expr2. Assim, quando utilizado com valores booleanos, retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso. |
|  NOT lógico (!)  |      `!expr`       | (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.                                                                                                                          |

_VER MAIS_: [Veja lista completa de operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
