import { ContaBancaria } from "./contaBancaria";

export class ContaNormal extends ContaBancaria {

        constructor(correntista: string, saldo: number) {
                super(correntista, saldo);

        }

        public valorDisponivel(): string {
                return ` saldo conta normal ${this._saldo}`;
        }

        public saque(valor : number): void {
                console.log(`Seu saldo é de ${this._saldo}`)
                if(valor > this._saldo){
                        return;
                }
                 this._saldo = this._saldo - valor;
                 console.log(`${this._saldo.toFixed(2)}`)
        }


}