// Função principal que solicita as informações do colaborador
function solicitarInformacoes() {
    const nome = prompt("Digite o nome do colaborador:");
    const salario = parseFloat(prompt("Digite o salário do colaborador:"));

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um valor válido para o salário.");
        return;
    }

    calcularAumento(nome, salario);
}

// Função que calcula o aumento do salário
function calcularAumento(nome, salario) {
    let porcentagemAumento = 0;

    if (salario <= 1500) {
        porcentagemAumento = 0.20;
    } else if (salario <= 2000) {
        porcentagemAumento = 0.15;
    } else if (salario <= 3000) {
        porcentagemAumento = 0.10;
    } else {
        porcentagemAumento = 0.05;
    }

    const salarioReajustado = salario * (1 + porcentagemAumento);
    exibirResultado(nome, salario, porcentagemAumento, salarioReajustado);
}

// Função que exibe o resultado do cálculo
function exibirResultado(nome, salario, porcentagemAumento, salarioReajustado) {
    const percentual = (porcentagemAumento * 100).toFixed(0);
    alert(`Colaborador: ${nome}
Salário atual: R$${salario.toFixed(2)}
Aumento: ${percentual}%
Salário reajustado: R$${salarioReajustado.toFixed(2)}`);

    perguntarNovoCalculo();
}

// Função que pergunta se o usuário deseja calcular novamente
function perguntarNovoCalculo() {
    const resposta = prompt("Deseja calcular novamente? (Sim/Não)").toLowerCase();

    if (resposta === "sim") {
        solicitarInformacoes();
    } else if (resposta === "não" || resposta === "nao") {
        alert("Encerrando o programa.");
    } else {
        alert("Resposta inválida. Encerrando o programa.");
    }
}

// Chamada inicial da função principal
solicitarInformacoes();