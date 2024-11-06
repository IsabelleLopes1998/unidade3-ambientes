class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const idadeDoGestor = 40;
const informacoesGestor = new Gestor("Lucas", idadeDoGestor);
console.log(informacoesGestor);
