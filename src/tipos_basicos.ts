let estaChovendo: boolean = false;
estaChovendo = true;

let idade: number = 27;
let altura: number = 1.82;

const nacionalidade: string = "Brasileiro";
const colegas: string[] = ["Maria", "Joao", "Lucas", "Sara"];

const tecnologias: Array<string> = ["html", "css", "js"];
const notas: ReadonlyArray<number> = [14, 54, 63];

const lista: [nome: string, idade: number, estaEstudando: boolean] = [
  "Artur",
  27,
  true,
];

let idadeDaSara: number | string;
idadeDaSara = 19;
idadeDaSara = "19 anos";

// any - geralemnte utilizado ao fazer uma integracao com o backend e nao se sabe o tipo de dado que ira receber
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = "string";
