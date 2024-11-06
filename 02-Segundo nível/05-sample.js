function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    let salarioComBonus;
    if (cargo === "gerente") {
        const bonusGerente = 1000;
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === "supervisor") {
        const bonusSupervisor = 500;
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        const bonusbase = 200;
        salarioComBonus = salarioBase + bonusbase;
    }
    const descontoSalario = 300;
    const salarioComDesconto = salarioComBonus - descontoSalario;
    let salarioFinal;
    const salarioMaximo = 5000;
    const salarioMedio = 3000;
    const descontoSalarioMaximo = 0.27;
    const descontoSalarioMedio = 0.18;
    const descontoSalarioBase = 0.11;
    if (salarioComDesconto > salarioMaximo) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * descontoSalarioMaximo);
    } else if (salarioComDesconto > salarioMedio) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * descontoSalarioMedio);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * descontoSalarioBase );
    }
    return salarioFinal;
}
const horasTrabalhadas = 160;
const valorDaHoraTrabalhada = 25;
const salario = calcularSalarioFuncionario(horasTrabalhadas, valorDaHoraTrabalhada, "gerente");
console.log(`O salário final é: ${salario}`);
