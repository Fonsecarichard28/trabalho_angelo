import { ContaBancaria } from "./contaBancaria";

export class ContaEspecial extends ContaBancaria {
        private _limite: number;

        constructor(correntista: string, saldo: number, limite: number) {
                super(correntista, saldo);
                this._limite = limite;

        }


        public valorDisponivel(): string {
                return `Saldo conta especial ${this._saldo + this._limite}`;
        }

        public saque(valor : number): void {
                return;
        }


}