
import prompt from  "prompt-sync"; 
import { Demonio } from "./demonio";
import { Fada } from "./fada";
import { Humano } from "./humano";
import { Personagem } from "./Personagem";

let avatar: Personagem;

let personagens = [
  new Humano('Ban', "Humano", "Espada"),
  new Fada('King', 'fada', 'Martelo'),
  new Demonio('Meliodas', 'Demonio', 'Espada')
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

  else if(option == 9){
    break;
  }
}
console.log('voce morreu HAHAHAHA')