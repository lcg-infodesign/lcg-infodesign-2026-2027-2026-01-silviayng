let xArc = 250;
let yArc = 350;
let wArc = 200;
let hArc= 200;

let xRect = 205;
let yRect = 135;
let wRect = 40;
let hRect = 40;

let xNuvola = 100;
let yNuvola = 40;
let dNuvola = 100;

let Coda = 350;


function setup() {
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);

  createCanvas(500, 700);
  angleMode(DEGREES);
}

function draw() {
  background(107, 200, 255);
  
  //coordinate mouse
  textSize(16);
  text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 20, 30);
     
  //nuvole
  for (let i = 1; i <= 4; i++) {
  let x = (xNuvola + 500 + i * 500) % (width + 300) - 180;
  let y = yNuvola + i * 70;

  push();
  fill(255, 255, 255);
  strokeWeight(0);

  circle(x, y, dNuvola);
  circle(x-30, y+30, dNuvola);
  circle(x+25, y+40, dNuvola);
  circle(x+50, y+20, dNuvola);
  circle(x+100, y+30, dNuvola);
  pop();
  }

  //fenicottero
  push();

  //corpo
  fill(245, 127, 177);
  strokeWeight(0);
  arc(xArc, yArc, wArc, hArc, 180, 360);
  
  fill(245, 127, 177);
  strokeWeight(0);
  arc(xArc-95, yArc, wArc-130, hArc-130, 0, 180);

  rectMode(CENTER);
  rect(xRect-74, yRect+119, wRect-18, hRect+158, 0);

  fill(0, 0, 0);
  strokeWeight(0);
  triangle(220, 350, 280, 350, 250, 380);

  //coda
  fill(245, 127, 177);
  strokeWeight(0);
  triangle(Coda, Coda, Coda+30, Coda+30, Coda, Coda+30);

  //testa
  fill(245, 127, 177);
  strokeWeight(0);
  arc(xArc-70, yArc-195, wArc-80, hArc-80, 180, 360);
  
  //occhio che segue il mouse
  fill(0, 0, 0);
  strokeWeight(0);
  
  let dx = mouseX - 160; //quanti pixel il mouse è spostato rispetto alla coordinata x dell'occhio
  let dy = mouseY - 135;
  let distanza = sqrt(dx*dx + dy*dy); //distanza tra occhio e mouse calcolata con teorema di pitagora perchè è l'ipotenusa tra due coordinate

  let sposta = min(distanza, 10); //distanza massima dall'origine impostata a massimo 10px
  let xOcchio = 160;
  let yOcchio = 135;

  if (distanza > 0) {  //nuova posizione dell'occhio quando la distanza con il mouse è maggiore di 0
    xOcchio = 160 + dx / distanza * sposta;
    yOcchio = 135 + dy / distanza * sposta;
  }

  circle(xOcchio, yOcchio, 10);

  //becco
  fill(237, 236, 235);
  strokeWeight(0);
  rect(xRect, yRect, wRect, hRect, 0);
  
  push();
  fill(237, 236, 235);
  rotate(45);
  strokeWeight(0);
  rect(269, -49, 57, 57, 0);
  pop();

  fill(0, 0, 0);
  strokeWeight(0);
  triangle(265, 238, 265, 155, 224, 195);

  //pavimento
  fill(35, 141, 194);
  rect(250, 750, 500, 500);

  //gambe
  fill(237, 236, 235);
  rect(xRect+45, yRect+335, wRect-30, hRect+200, 0);

  fill(0, 0, 0);
  strokeWeight(0);
  triangle(210, 630, 250, 630, 250, 590);

  fill(237, 236, 235);
  rect(xRect+25, yRect+305, wRect+135, hRect-30, 0);

  fill(0, 0, 0, 0);
  strokeWeight(10);
  stroke(237, 236, 235);
  triangle(330, 440, 250, 370, 250, 440);
  
  fill(0, 0, 0);
  strokeWeight(0);
  triangle(220, 350, 280, 350, 250, 380);

  fill(0, 0, 0);
  strokeWeight(0);
  triangle(142, 445, 142, 500, 112, 472);

  pop();

  //movimento nuvole
  xNuvola += 1;


}

