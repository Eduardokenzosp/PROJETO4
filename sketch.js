let palavra;
let som
let imagem

function setup() {
  createCanvas(600,435);
  palavra = diogo();
  som.loop();
}
function preload() {
  imagem = loadImage("uganda.webp")
  som = loadSound("jackpot.mp3")
}

function draw() {
  batata()
  diogo()
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX, 0 , width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer)
  text(inicio,200,200)
}
  function batata(){
    background("darkgreen");
    image(imagem,00,0,600,435);
  fill("lightyellow")
  textSize(50);
    textAlign(CENTER,CENTER);
  }
  
  function diogo(){
     let palavras = ["ZONIZ","URIÇO","URIÇO PETISTA","NUCLUS"];
    fill("purple")
    return random(palavras);
  }
  

  
