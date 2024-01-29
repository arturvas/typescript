function calculaArea(base: number, altura: number): number {
  return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura;

// nao utilzamos a palavra return, logo o retorno sera vazio(void)
function somar(...numeros: number[]): void {
  console.log(numeros);
}

function teste(): string | number {
  if (10 > 5) {
    return "chama na gaita 10 é maior que 5";
  } else {
    return 5;
  }
}

const resultadoDoTeste = teste();

console.log(resultadoDoTeste);
