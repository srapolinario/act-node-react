/*
 * Declarando funções
 * Um triângulo é formado por três lados cada lado com uma medida.
 * Só irá existir um triângulo se, somente se, os seus lados obedeceram
 * à seguinte regra: um de seus lados deve ser maior que o valor absoluto (módulo)
 * da diferença dos outros dois lados e menor que a soma dos outros dois lados.
 *
 * Faça a declaração da função.
 * Troque "{}" pelo nome dado a função
 */

function isTriangle(a:number, b:number, c:number):boolean {
  const triangleA = Math.abs(b - c) < a && a < c + b;
  const TriAngleB = Math.abs(a - b) < c && c < b + a;
  const TriangleC = Math.abs(a - c) < b && b < c + a;

  return triangleA && TriAngleB && TriangleC;
}
export default isTriangle;
