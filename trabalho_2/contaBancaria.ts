import { Agencia } from "./agencia";
import { ContaNormal } from "./contaNormal";

export abstract class ContaBancaria {
        public _correntista: string;
        public _saldo: number;
        public toString = () : string => {
                return (
                        `Correntista da conta ${this._correntista}\n` +
                        '\n' +
                        '\n' +

                        '');
            }


        constructor(correntista: string, saldo: number) {
                this._correntista = correntista;
                this._saldo = saldo;
        }


        public abstract valorDisponivel(): void;

        public abstract saque(valor : number): void;



}