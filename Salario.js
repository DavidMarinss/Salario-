var nome // Variável para armazenar o nome do usuário.
var salario = 0 // variável que armazena o salário digitado pelo usuário para os cálculos.
var salarioReajustado = 0 // variável que é atribuida a minha fução "CalculoAumento" para mostrar na tela o resultado.
var porcentagemDeAumento = 0 // Variável que mostra  o aumento de porcentagem  do salário na tela.
var continuar = 1 // variável é utilizada dentro de "While" para o usuário executar novo cálculo ou encerrar o programa.

while (continuar== 1){
DadosColaborador() // função que chama nome e salário digitado pelo usuário.
DefinirPorcentagem(salario) // função que chama  os cálculos que define porcentagem de aumento do usuário de acordo com salário digitado.
salarioReajustado = CalculoAumento(salario,porcentagemDeAumento) // função que chama cálculo que mostra quanto de aumento em reais o usuário teve.
console.log(nome +  " - "  +   " R$"+ salario +  " - " + porcentagemDeAumento+ "% - R$"  + salarioReajustado) // Console que mostra todos os dados.
continuar = ExecutarNovamente()
}
// Pedindo os dados do usuário.
function DadosColaborador() {
    console.log("Nome Colaborador :",nome = prompt("Qual seu nome ?"))
    console.log("Salário do colaborador :R$",salario = parseFloat(prompt("Qual seu salário?")))
}
// Função que define se o colaborador deseja fazer novo calculo de salário.
function ExecutarNovamente(){
    return prompt ("Deseja calcular novamente ? 1 -sim / 2 -não")
}

// Tabela de porcentagem de aumento.
function DefinirPorcentagem(salarioParametro){

    if (salarioParametro <= 1500){
        porcentagemDeAumento = 20
    }else if(salarioParametro <= 2000){
        porcentagemDeAumento = 15
    }else if(salarioParametro <= 3000){
        porcentagemDeAumento = 10
    }else{
        porcentagemDeAumento= 5
    }
    
}

//Cálculo aumento do salário.
function CalculoAumento (salarioParametro,aumentoParametro){
    return salarioParametro + (salarioParametro *(aumentoParametro/100))
    }


