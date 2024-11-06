async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}/`;
    const resposta = await fetch(url);
    
    if (!resposta.ok) {
        console.error(`Erro ao buscar personagem: ${resposta.statusText}`);
        return;
    }

    const personagem = await resposta.json();
    console.log(personagem.name);
}

const lukeId = 1;
buscarPersonagem(lukeId);