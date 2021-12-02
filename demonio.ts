import { Personagem } from "./Personagem";


export class Demonio extends Personagem{
    private _maldade: number;
    private _escuridao: number;

     constructor(nome: string, classe: string, arma : string ){
    super(nome, classe , arma);
    this._maldade = 200;
    this._escuridao = 1000;
    }
}