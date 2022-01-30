# Variáveis

## Quanto ao escopo e declaração

Pode ser usado:

```javascript
let
const
var
```

### let

Tipicamente usa-se **let** em escopos locais para declarar variáveis que podem sofrer mudanças.
Possuem escopo de bloco.

_NOTA_: Escopo é o contexto de execução.

_NOTA 2_: Um bloco pode ser entendido como o que está
compreendido dentro de `{ }` podendo ser uma função ou não.

### const

Tipicamente usa-se **const** em escopos globais para declarar
variáveis que não irão sofrer mudanças, ou em escopos locais
para leitura.
Possuem escopo de bloco.

_sintaxe_: const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]]];

_VER MAIS_: [Referência const no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)

### var

As declarações de variáveis utilizando **var** são de escopo global e sofrem _hoisting_.

_NOTA_: Hoisting pode ser entendido como as declarações de variáveis são processadas antes de qualquer execução do código.

_sintaxe_:

```javascript
var varName1 [= value1 [, varName2 [, varName3 ... [, varNameN]]]];
```

_EXEMPLO_: A declaração abaixo resultará em erro pois é atribuído um valor y não declarado ainda para um valor x.

```javascript
var x = y,
  y = "A";
```

A declaração abaixo não resultará em erro.

```javascript
x = y;
var y = "A";
var x;
```

_VER MAIS_: [Referência var no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var)

### Case sensitive

Nomes no javascript são case sensitive. Isso significa que
"teste" é diferente de "Teste" que por sua vez é diferente
de "TeSTe".

## Quanto ao tipo (primitivos)

As descrições abaixo foram tiradas diretamente do MDN a fim de
evitar enganos.

### string

Em qualquer linguagem de programação, uma string é uma
sequência de caracteres usados para representar texto

Em JavaScript, uma String é um dos valores primitivos e o
objeto String é um wrapper em cima do tipo primitivo string.

_VER MAIS_: [Objeto String no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

### boolean

Um booleano, em ciência da computação, é um tipo de dado lógico
que pode ter apenas um de dois valores possíveis: verdadeiro ou
falso. Por exemplo, em JavaScript, condicionais booleanas são
usadas para decidir quais trechos do código serão executados ou
repetidas.

### undefined

O valor global undefined representa um valor indefinido. Trata-se de um dos tipos primitivos do JavaScript.

### null

O valor null é um literal em JavaScript que representa um valor nulo ou "vazio" (p/ex: que aponta para um objeto inexistente). É um dos valores primitivos do JavaScript.

Diferenças entre null e undefined

```javascript
typeof null; // object (bug no ECMAScript, deveria ser null - http://2ality.com/2013/10/typeof-null.html)
typeof undefined; // undefined
null === undefined; // falso
null == undefined; // verdadeiro
```

## Quanto ao tipo "Objetos" (não primitivos)

Existem ainda outros objetos que não são considerados tipos primitivos pois são uma composição destes, ou ainda, objetos auxiliares para a linguagem.

_VER MAIS_: [Infinity e demais objetos no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

## Array

O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

Exemplo de uso e sintaxe:

```javascript
var frutas = ["Maçã", "Banana"];
```

_VER MAIS_: [Para ver os métodos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

_NOTA_: Métodos será explicado em funções e classes
