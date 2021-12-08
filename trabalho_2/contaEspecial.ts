import { ContaBancaria } from "./contaBancaria";

export class ContaEspecial extends ContaBancaria {
        private _limite: number;
        private _gastos: number;

        constructor(correntista: string, saldo: number, limite: number) {
                super(correntista, saldo);
                this._limite = limite;
                this._gastos = this._limite + this._saldo;

        }


        public valorDisponivel(): string {
                return `Saldo conta especial ${this._gastos}`;
        }

        public saque(valor : number): void {

                console.log(`Seu saldo é de ${this._gastos}`)
                if(valor > this._gastos){
                        return;
                }
                this._gastos = this._gastos - valor;
                 console.log(`${this._gastos.toFixed(2)}`)
        }


}