//ator
  let yAtor = 550
  let xAtor = 75
  let colisão = false;
  let meusPontos = 0;
function MostraAtor(){
  image(imagemAtor,xAtor,yAtor,40,40 )
  
}
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){ 
      
     yAtor -= 3
   }  
  if(keyIsDown(DOWN_ARROW)){ 
  if(podeMover()){  
     yAtor +=3}
   }  
}
//colisão com carros
function verificaColisão(){
    for(let i = 0; i < imagemCarros.length; i ++){colisão = collideRectCircle(xCarro[i],yCarro[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
  if(colisão){
  voltaAtor();
  if(pontosMaiorZero){
  meusPontos -= 1;
  }
    
      }
   }  
}
function voltaAtor(){
  yAtor = 550;
}
function pontuação(){
  textSize(40)
  fill(color(255,69,0))
  text(meusPontos, width /  6,37)

}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1
    voltaAtor();
    }
}
function pontosMaiorZero(){
    return meusPontos > 0;
}
function podeMover(){
    return yAtor < 550;
  
}








