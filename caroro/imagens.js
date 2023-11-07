//variaveis cenario
  let estradaImagem
  let imagemAtor
  let imagemCarro1
  let imagemCarro2
  let imagemCarro3
  //sons do jogo
  let somDaTrilha;
  let somDaColisão;
  let somDoPonto;
  function preload(){
  estradaImagem= loadImage("imagens/estrada.png")
  imagemCarro  = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemAtor   = loadImage("imagens/ator-1.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
} 
  // somDaTrilha = loadSound ("sons/trilha.mp3");
   ///somDaColisão =loadSound ("sons/colidiu.mp3");
  // somDoPonto =loadSound ("sons/pontos.wav");