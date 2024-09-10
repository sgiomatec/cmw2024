
//Variables para compartir
let sergio =0;
let video;
let img1;
let canvas;

//creación del sketch
const s = ( sketch ) => {

  
  sketch.setup = () => {
    canvas=sketch.createCanvas(800, 600);
   // canvas.mouseClicked(sketch.miFuncion);
   // video = sketch.createCapture(sketch.VIDEO);
   // video.size(200, 200);
   // video.hide();
  };

  sketch.draw = () => {
    sketch.background(203);
    sketch.text(sergio,10,10);
    //sketch.image(video, 300,0);

    
  };

  sketch.miFuncion =() =>{

    console.log("clic");
    //sketch.image(img1,0,0);
  }

  sketch.cambiar =(s) =>{
    sergio =s;
  }

  sketch.cargar = (imagen) =>{
   
   //img1=sketch.loadImage(imagen);

  }
};

//Crear una variable para referencia el canvas
let myp5 = new p5(s,document.getElementById('p5'));