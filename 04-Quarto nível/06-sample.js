async function buscarNave(id) {
    const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
    
    if (!resposta.ok) {
        console.error(`Erro: Nave com ID ${id} não encontrada. Status: ${resposta.status}`);
        return;
    }

    const nave = await resposta.json();
    console.log(nave.name);
}

buscarNave(10);