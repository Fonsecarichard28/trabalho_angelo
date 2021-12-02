import { Personagem } from "./Personagem";


export class Humano extends Personagem{
    private _lealdade: number;
    private _familia: number;

     constructor(nome: string, classe: string, arma : string ){
    super(nome, classe , arma);
    this._lealdade = 100;
    this._familia = 100;
    }
}