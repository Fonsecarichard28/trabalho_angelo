import { Personagem } from "./Personagem";


export class Fada extends Personagem{
    private _amor: number;
    private _caridade: number;

     constructor(nome: string, classe: string, arma : string ){
    super(nome, classe , arma);
    this._amor = 50;
    this._caridade = 120;
    }
}