
import prompt from "prompt-sync";
import { Agencia } from "./agencia";
import { ContaBancaria } from "./contaBancaria";
import { ContaEspecial } from "./contaEspecial";
import { ContaNormal } from "./contaNormal";


let avatar = new Agencia;

let contas = [

    new ContaNormal('',200),
    new ContaNormal('',5000),
    new ContaNormal('',300),
    new ContaNormal('',6000),




];




let teclado = prompt();
let option: number = 0;





while (option != 9) {

    console.log(avatar.menu());

    option = +teclado("Escolha  uma opção: ");


    if (option == 1) {
        avatar.adicionarContaBancaria(new ContaEspecial('Richard', 100, 200));
        avatar.adicionarContaBancaria(new ContaNormal('BASTIAO',200));

    }

    else if (option == 2) {
        console.log(avatar.listarContas());
        avatar.excluirContaBancaria(avatar.contas[0]);
        console.log(avatar.listarContas());

    }

    else if (option == 3) {
        console.log(avatar.listarContas());
    }

    else if(option == 4){
       
        avatar.escolherConta()
        let numero = +teclado("Escolha  um personagem:");
        avatar.contas[numero];




    }


   

}











