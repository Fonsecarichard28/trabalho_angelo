import { ContaBancaria } from "./contaBancaria";
import { ContaEspecial } from "./contaEspecial";
import { ContaNormal } from "./contaNormal";


export class Agencia {

    private _codigo: number;


    public contas: ContaBancaria[] = [



    ];


    constructor() {

        this._codigo = 100;
    }


    public menu(): string {
        return (
            '' +
            '----------- Ilustrativo opções agencia -----------\n' +
            '||| 1 - Adicionar conta Bancaria |||\n' +
            '||| 2 - Excluir Conta Bancaria |||\n' +
            '||| 3 - Listar contas bancarias |||\n' +
            '||| 4 - Valor  disponivel nas contas |||\n' +

            '\n' +
            '\n' +
            '');
    }


    

    public adicionarContaBancaria(contaBancaria : ContaBancaria): void {
        this.contas.push(contaBancaria)
        console.log(contaBancaria)



    }

    

    public excluirContaBancaria(key:ContaBancaria): void {
        const index = this.contas.indexOf(key, 0);
        if (index > -1) {
            this.contas.splice(index, 1);
        }

    }


    public listarContas(): string {
        return `${this.contas}`;
    }

}

