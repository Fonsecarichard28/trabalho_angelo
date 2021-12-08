
import prompt from "prompt-sync";
import { Agencia } from "./agencia";
import { ContaBancaria } from "./contaBancaria";
import { ContaEspecial } from "./contaEspecial";
import { ContaNormal } from "./contaNormal";


let agencia = new Agencia;


let teclado = prompt();
let option: number = 0;



while (option != 9) {

    console.log(agencia.menu());

    option = +teclado("Escolha  uma opção: ");


    if (option == 1) {
        agencia.adicionarContaBancaria(new ContaEspecial('Richard', 100, 200,));
        agencia.adicionarContaBancaria(new ContaNormal('BASTIAO',200));

    }

    else if (option == 2) {
        agencia.excluirContaBancaria(agencia.contas[0]);
        console.log('Conta Excluida com sucesso')

    }

    else if (option == 3) {
        console.log(agencia.listarContas());
    }




    else if (option == 4) {
        let numero = option = +teclado("Digite o numero para escolher a conta ");
    
        console.log(agencia.contas[numero].valorDisponivel())

    }


else if(option == 5){
    let numero = option = +teclado("Digite o numero para escolher a conta ");

    let saque = option = +teclado("digite o valor para sacar ");

    console.log(agencia.contas[numero].saque(saque))
}



}











