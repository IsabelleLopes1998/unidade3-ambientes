const objetoPessoa = { nome: "Maria", idade: 28 };

function verificarMaiorIdade(pessoa) {
    const maiorIdade =18;
    return pessoa.idade >= maiorIdade;
}

console.log(verificarMaiorIdade(objetoPessoa));
