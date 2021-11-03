
import prompt from  "prompt-sync"; 
import { Personagem } from "./Personagem";

let avatar: Personagem;

let personagens = [

  new Personagem("Meliodas","Demonio", 100, 200, 100,100,'Adaga',100,1),
  new Personagem("Ban","Humano", 5, 5, 5,5,'Adaga',5,1),
  new Personagem("Escanor","Humano", 20, 20, 20,20,'Adaga',20,1),
  new Personagem("Merlin","Humano", 15, 15, 15,15,'Adaga',15,1),
  new Personagem("Elisabeth","Humano", 25, 25, 25,25,'Adaga',25,1),
  new Personagem("King","Fada", 30, 30, 30,30,'Adaga',30,1),
  new Personagem("Diane","Gigante", 40, 40, 40,40,'Adaga',40,1),

];



function choosePersonagem(){
  return personagens.map((Personagem) => Personagem.nome)
}

let teclado = prompt();
let option: number = 0;
console.log(choosePersonagem())

let numero = +teclado("Escolha  um personagem:");
avatar = personagens[numero];
console.log(`\n`)
console.log(`Você selecionou o ${avatar.nome} \n`)



while(option != 9 ||   avatar.isDead()){
  
  console.log( avatar.menu());

  option = +teclado("Escolha  uma opção: ");
  
  

  if(option == 1){
    console.log(avatar.treinarAtaque());
}

  else if(option == 2){
    console.log(avatar.defender());
  }

  else if(option == 3){
    console.log(avatar.showStatus());
   }

   else if(option == 4){
    console.log(avatar.poção());
}

   else if(option == 5){
     let horas: number = +teclado('Digite o numero de horas')
    console.log(avatar.cansaço(horas));
}

  else if(option == 6){
    console.log(avatar.melhorarArma());
  }

  else if(option == 7){
    avatar.batalha();
}

  else if(option == 8){
    avatar.batalhaChefe();
  }

}

console.log('voce morreu HAHAHAHA')