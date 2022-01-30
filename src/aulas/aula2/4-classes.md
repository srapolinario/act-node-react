# Classes

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações
da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não
introduz um novo modelo de herança de orientação a objetos em JavaScript.
Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos
e lidar com herança.

Não sofre hoisting

## sintaxe

```javascript
class ClassName extends String {
  constructor(params) {
    this.params = params;
  }
  method() {
    return this.params;
  }
  static otherMethod(otherParams) {
    return otherParams;
  }
}

const name = new ClassName({ name: "Teste", lastName: "Completo" });
```

```typescript
interface IClassName {
  method: () => Params;
  otherMethod: (otherParam: Params) => Params;
}

type Params = {
  name: string;
  lastName: string;
};

class ClassName extends String implements IClassName {
  params: Params;
  constructor(params) {
    this.params = params;
  }
  method(): Params {
    return this.params;
  }
  static otherMethod(otherParams: Params): Params {
    return otherParams;
  }
}
const name = new ClassName({ name: "Teste", lastName: "Completo" });
```

_Nota_: Métodos estáticos não precisam de inicializar uma nova instancia da classes
