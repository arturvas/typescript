type aluno = {
  nome: string;
  cursos?: string[];
  idade: number;
};

const alunos: aluno[] = [
  {
    nome: "Artur",
    cursos: ["Fullstack Python", "IA"],
    idade: 27,
  },
  {
    nome: "Sara",
    cursos: ["Medicina"],
    idade: 19,
  },
];

alunos.push({
  nome: "Irineu",
  cursos: ["VoceNaoSabeNemEu"],
  idade: 99,
});

const novoAluno: aluno = {
  nome: "João",
  idade: 24,
};

function exibeAluno(aluno: aluno) {
  console.log(aluno.nome);
}
