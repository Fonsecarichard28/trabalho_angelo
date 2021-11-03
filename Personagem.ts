//Nome, energia ,vida, ataque , defesa.
//classe

export class Personagem{

  public get level(): number {
    return this._level;
  }

  public set level(value: number) {
    this._level = value;
  }

  public get durabilidade(): number {
    return this._durabilidade;
  }

  public set durabilidade(value: number) {
    this._durabilidade = value;
  }


  public get arma(): string {
    return this._arma;
  }
 

  public get defesa(): number {
    return this._defesa;
  }
  public set defesa(value: number) {
    this._defesa = value;
  }


  public get ataque(): number {
    return this._ataque;
  }
  public set ataque(value: number) {
    this._ataque = value;
  }


  public get vida(): number {
    return this._vida;
  }
  public set vida(value: number) {
    this._vida = value;
  }


  public get energia(): number {
    return this._energia;
  }
  public set energia(value: number) {
    this._energia = value;
  }

  public get classe(): string {
    return this._classe;
  }
 
  public get nome(): string {
    return this._nome;
  }
 
  constructor(
      private _nome: string,
      private _classe: string,
      private _energia: number,
      private _vida: number,
      private _ataque: number,
      private _defesa: number,
      private _arma: string,
      private _durabilidade: number,
      private _level: number,

      ){

        
  }

  // TODA VEZ QUE PÉNSAR EM LER DADOS NA CLASSE USE PARAMETRO
  // TODA VEZ QUE PENSAR EM IMPRIMIR DADOS NA CLASSE USE RETORNO

  public showStatus(): string{
    return (`Seu nome é ${this.nome} \n` +
    `Ataque atual do personagem: ${this.ataque}\n` + 
    `Defesa atual do personagem: ${this.defesa}\n` + 
    `Vida atual do ${this.nome}: ${this.vida}\n`+
    `Energia atual do ${this.nome}: ${this.energia}\n` + 
    `${this.nome} sua arma é  ${this.arma}\n` + 
    `Durabilidade atual da sua ${this.arma}: ${this.durabilidade}\n` +
    `Sua Classe é ${this.classe}\n` +
    `Level Atual ${this.level}\n`)
  }

 
  private random(number:number, lastNumber:number): number{
   return number + Math.round(Math.random()*lastNumber);
  }

  public treinarAtaque(): string{
  this.ataque += this.random(1,5)
  this.energia -= this.random(1,5) 
  this.level += 1;

 if (this.energia < 50){
    console.log(`${this.nome} melhor você tomar uma poção`)
  }
  return ('--------- Ataque treinado com sucesso -------\n' +
  `Ataque atual do personagem: ${this.ataque}\n` +
  `Energia atual do personagem: ${this.energia}\n`)
  }

  defender(): string{
    
  this.defesa += this.random(1,5)
  this.energia -= this.random(1,5) 
  this.level += 1;
  

  if(this.energia < 0){
    console.log('Voce Morreu')
  }
  else{
    if(this.defesa > 100){
      this.defesa = 0;
    }
  }

  return ('--------- Armadura Limpa -------\n' +
  `Defesa atual do personagem: ${this.defesa}\n` +
  `Energia atual do personagem: ${this.energia}\n`);

  }

  public poção(): string{
    this.vida += 10;

  return ('--------- Vida Renovada -------\n' +
  `Vida atual do ${this.nome}: ${this.vida}\n`)

  }

  public cansaço(horas: number): string {
    this.energia += horas * 1
    if(this.defesa > 100){
       this.defesa = 0;
    }
  
  return ('--------- Preguiça vai embora -------\n' + 
  `Energia atual do ${this.nome}: ${this.energia}`)
  }

  public melhorarArma(){
    this.durabilidade += 10
      if(this.durabilidade > 100){
        this.durabilidade = 0;
      }

      return ('--------- Arma restaurada -------\n' +
      `${this.nome} sua ${this.arma} foi restaurada\n` +
      `Durabilidade atual da sua ${this.arma}: ${this.durabilidade}\n`)
  }

  public batalha(): void{
      
  let ataqueMonstro = this.random(50,150);;
  if(ataqueMonstro > this.defesa){
    this.vida -= this.random(1,5);
    this.energia -= this.random(1,5);
    this.durabilidade -= this.random(1,5);
    this.level += 2;
    console.log('voce foi atacado')
    this.showStatus()



 }
 else{
  this.level += 2;
  this.energia -= this.random(1,5);
  console.log('ESQUIVOU')

  this.showStatus()
 }
  }




  public batalhaChefe(): string {
    let levelMonstro = this.random(80,150);
    if(this.level < levelMonstro )
    this.energia -= 20

    return ('Melhor correr\n'+
    `Voce perdeu energia de tanto correr, energia atual: ${this.energia}\n` +
    'Melhor não tentar novamente\n');

  }

  public menu(): string{
    return (
      '' +
      '----------- Treinamentos do personagem -----------\n' +
    '||| 1 - Treinar Ataque |||\n' +
    '||| 2 - Treinar Defesa |||\n'+
    '\n' +
    '\n' +

    '----------- Atributos do personagem -----------\n'+
    '||| 3 - Mostrar Atributos Principais |||\n'+
    '\n' +
    '\n' +


    '----------- Recuperação do personagem -----------\n'+
    '||| 4 - Tomar poção de vida |||\n'+
    '||| 5 - Recuperar energia |||\n'+
    '||| 6 - Afiar arma |||\n'+
    '\n' +
    '\n' +

    '----------- Batalhas -----------\n'+
    '||| 7 - Batalha contra monstro mais fraco |||\n'+
    '||| 8 - Batalha contra monstro mais forte |||\n'+
    '||| 9-  Sair |||');
  }

  public isDead(): boolean{ 
    if(this.energia < 0 || this.vida < 0 || this.durabilidade < 0){
      return true;
    } else{
      return false;
    }
  }
}
