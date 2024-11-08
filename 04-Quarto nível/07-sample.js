async function buscarEspecie() {
    const resposta = await fetch("https://swapi.dev/api/species/1/");
    const especie = await resposta.json();

    const lifespan = especie.average_lifespan ? String(especie.average_lifespan) : "Desconhecido";

    console.log(lifespan.toUpperCase());
}

buscarEspecie();