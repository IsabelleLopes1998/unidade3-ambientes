async function buscarPlanetaRecursivo(id) {
    const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);

    if (!resposta.ok) {
        console.log(`Planeta com ID ${id} não encontrado ou fim da lista.`);
        return;
    }

    const planeta = await resposta.json();
    console.log(planeta.name);

    buscarPlanetaRecursivo(id + 1);
}

buscarPlanetaRecursivo(1);