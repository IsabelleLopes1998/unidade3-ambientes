async function buscarPlaneta() {
    try {
        const resposta = await fetch("https://swapi.dev/api/planets/1/");

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar planeta: ${resposta.statusText}`);
        }

        const planeta = await resposta.json();
        console.log(planeta.name);

        exibirNomePlaneta(planeta.name);

    } catch (erro) {
        console.error('Erro:', erro);
    }
}

buscarPlaneta();
