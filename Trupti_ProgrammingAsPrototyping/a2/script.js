let image1;
let image2;
let image3;
let font1;
let font2;
let font3;
let slider1;
let slider2;
let slider3;
let slider4;
let inp1;
let inp2;
let radio;
let imageSelect;
let p1;
let p2;
let p3;
let p4;
let p5;
let p6;
let p7;
let p8;
let p9;
let im1;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent('column-two');

  let p6 = createP('Enter Top Text');
  p6.parent('column-one')
  inp1 = createInput('Top Text');
  let p3 = createP('Enter Bottom Text')
  inp2 = createInput('Bottom Text');
  inp1.parent('column-one');
  inp1.class('boxes');
  p3.parent('column-one');
  inp2.parent('column-one');
  inp2.class('boxes');

  let p7 = createP('R Colour of Font');
  p7.parent('column-one');
  slider1 = createSlider(0, 255, 100);
  slider1.parent('column-one');
  slider1.class('slider')

  let p1 = createP('G Colour of Font');
  p1.parent('column-one');
  slider2 = createSlider(0, 255, 40);
  slider2.parent('column-one');
  
  let p8 = createP('B Colour of Font');
  p8.parent('column-one');
  slider3 = createSlider(0, 255, 50);
  slider3.parent('column-one');
  

  let p4 = createP('Choose Font')
  p4.parent('column-one');
  radio = createRadio();
  radio.parent('column-one');
  radio.option("Din Condensed");
  radio.option("Din Bold");
  radio.changed(changeFont);
  radio.class('radio');

  let p2 = createP('Text Size')
  slider4 = createSlider(0, 50, 25);
  p2.parent('column-one');
  slider4.parent('column-one');
  slider2.class('slider');
  slider3.class('slider');
  slider4.class('slider');


  let p5 = createP('Select Image');
  p5.parent('column-one');

  sel = createSelect();

  sel.option('Jethalal', 'Documents/SRISHTI/3rd YEAR/Cycle 1 Programming/Trupti_ProgrammingAsPrototyping/a2/images/Imagememe.jpeg');
  sel.option('Blinking man', 'Documents/SRISHTI/3rd YEAR/Cycle 1 Programming/Trupti_ProgrammingAsPrototyping/a2/images/Imagememe2.jpeg');
  sel.option('Kanye', "Documents/SRISHTI/3rd YEAR/Cycle 1 Programming/Trupti_ProgrammingAsPrototyping/a2/images/Imagememe3.jpeg");
  sel.changed(imageUpdate);
  let m1 = sel.value();
  im1 = loadImage(m1);
  let p9 = createP('Save Meme');
  sel.parent('column-one');
  sel.class('custom-select');
  p9.parent('column-one');
  let btn = createButton('Save Image');
  btn.mousePressed(saveimg)
  btn.parent('column-one');
  btn.class('buttons');
  btn.id('button1');

  p1.class('text');
  p2.class('text');
  p3.class('text');
  p4.class('text');
  p5.class('text');
  p6.class('text');
  p7.class('text');
  p8.class('text');
  p9.class('text');
  function imageUpdate() {
    let m1 = sel.value();
    im1 = loadImage(m1);
  }
  function saveimg() {
    saveCanvas(cnv, 'Meme', 'jpg')
  }
}

function changeFont() {
  let selectedFont = radio.value();
  textFont(selectedFont);
}

function draw() {
  background(220)
  let textval1 = slider1.value();
  let textval2 = slider2.value();
  let textval3 = slider3.value();
  let val1 = inp1.value();
  let val2 = inp2.value();
  let texts = slider4.value();
  let val = radio.value();

  fill(textval1, textval2, textval3);
  textAlign(CENTER);
  text(val1, width / 2, 35);
  textSize(texts);
  text(val2, width / 2, 385);
  textSize(texts);
  image(im1, 0, 50, 400, 300);
}