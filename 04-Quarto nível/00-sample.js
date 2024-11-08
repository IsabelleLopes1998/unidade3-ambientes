const NOT_FOUND_STATUS = 404;

async function buscarPersonagem() {
    const mensagemDiv = document.getElementById("mensagem");
    if (!mensagemDiv) {
        console.error("Elemento com id 'mensagem' não encontrado.");
        return;
    }
    mensagemDiv.innerHTML = "";

    const idElement = document.getElementById("personagemId");
    if (!idElement) {
        console.error("Elemento com id 'personagemId' não encontrado.");
        mostrarErro("Erro interno: campo de ID não encontrado.", "danger");
        return;
    }

    const id = idElement.value;

    if (!id || isNaN(id) || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);

        if (!resposta.ok) {
            if (resposta.status === NOT_FOUND_STATUS) {
                throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
            } else {
                throw new Error(`Erro desconhecido: ${resposta.statusText}`);
            }
        }

        const personagem = await resposta.json();
        mostrarResultado(personagem);

    } catch (erro) {
        console.error("Erro ao buscar o personagem:", erro);
        mostrarErro(erro.message || "Erro ao buscar personagem.", "danger");
    }
}

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function mostrarResultado(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    
    const altura = personagem.height ? `${personagem.height} cm` : "Não disponível";
    const peso = personagem.mass ? `${personagem.mass} kg` : "Não disponível";
    
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
        <strong>Altura:</strong> ${altura}<br>
        <strong>Peso:</strong> ${peso}
      </div>`;
}
