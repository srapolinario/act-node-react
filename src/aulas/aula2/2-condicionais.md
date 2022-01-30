# Condicionais

Frequentemente é preciso fazer checagens para poder tomar decisões
Para isso as linguagens de programação disponibilizam os chamados condicionais
Eles servem para fazer verificações lógicas.

## if

sintaxe:

```javascript
if (condition1) {
  // código se condição 1 é verdadeira...
} else if (condition2) {
  // código se condição 2 é verdadeira...
} else {
  // código se todas as condições anteriores são verdadeiras
}
```

## switch

sintaxe:

```javascript
switch (expression) {
  case choice1:
    // run this code...
    break;
  case choice2:
    //run this code instead...
    break;
  case choice3:
  case choice4:
    // run this other code...
    break;

  // include as many cases as you like

  default:
  // actually, just run this code...
}
```

## operador ternário

sintaxe:

```javascript
condition ? exprIfTrue : exprIfFalse;
```
