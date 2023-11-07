//codigo carro
let xCarro = [1050,944,1050,700,1100,850];
let yCarro = [60,145,225,310,390,475];
let velocidadeCarros = [6,4,6.6,4,4.5,6];
let comprimentoCarro = 60
let alturaCarro = 65

// carro
  function mostraCarro(){
  for(let i =  0; i < imagemCarros.length;i ++){
  image(imagemCarros[i], xCarro[i], yCarro[i], 60, 65); 
  }  
}

function movimentaCarro(){
   for(let i = 0; i < imagemCarros.length;i ++){
    xCarro[i] -=  velocidadeCarros[i];
   } 
 
}
 function posiçãoInicial(){
   for(let i = 0; i < imagemCarros.length;i ++){
   if (passouTela(xCarro[i])){
     xCarro[i] = 900;     
   }
  }
 }
 function passouTela(xCarro){
   return xCarro < - 120;
 }
  