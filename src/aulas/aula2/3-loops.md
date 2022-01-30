# Loops

## for

sintaxe:

```javascript
for (var i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

```javascript
//Objeto
var obj = { a: 1, b: 2, c: 3 };

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

## while

sintaxe:

```javascript
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```
