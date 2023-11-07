//funcoes 
function setup() {
  createCanvas(700, 600);
  //somDaTrilha.loop(loadSound);
}

function draw() {
  background(estradaImagem)
  MostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  posiçãoInicial();
  verificaColisão();
  pontuação();
  marcaPontos();
  podeMover();
}