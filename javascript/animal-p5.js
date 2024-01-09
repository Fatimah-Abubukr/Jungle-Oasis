// global variables for images of different animals
let jungleImage, lionImage, pandaImage, tigerImage, chimpanzeeImage, elephantImage, penguinImage;

// preloading this function to load images before the setup - the images will pass through when each canvas is re-drawn in every animal page
function preload() {
  // preloading the jungle image
  jungleImage = loadImage('images/jungle.png');
  // preloading the lions image
  lionImage = loadImage('images/lions.jpg');
  // preloading the panda image
  pandaImage = loadImage('images/panda.webp');
  // preloading the tigers image
  tigerImage = loadImage('images/tigers.avif');
  // preloading the chimpanzee image
  chimpanzeeImage = loadImage('images/chimpanzee.avif');
  // preloading the elephant image
  elephantImage = loadImage('images/elephant.jpg');
  // preloading the penguin image
  penguinImage = loadImage('images/penguin.jpg');
}

// setup function to initialize the canvas
function setup() {
    createCanvas(700, 400);

}
// the function to render the canvas
function draw() {
    // setting the background colour
    background('#306030')
    // getting the animal image source from the hidden field
    let animalImageSrc = document.getElementById('animal-image-hiddenField').value;
    // setting the dimensions of the images
    let imgWidth = 400;
    let imgHeight = 250;
    let imageX = width  - imgWidth / 2;
    let imageY = height - imgHeight / 2;

    // Calculate dynamic movement using a sine wave - moving the image side to side (along the page)
    let x = sin(frameCount * 0.01) * 100 + width / 8;
    let y = height / 4;

    // Displaying the appropriate animal image based on the source
    if(animalImageSrc.includes('jungle'))
    {
        // Draw the jungle image with dynamic movement
        image(jungleImage, x, y,imageX, imageY);
    }
    else if (animalImageSrc.includes('lion'))
    {
        // Draw the lion image with dynamic movement
        image(lionImage, x, y,imageX, imageY);
    }
    else if (animalImageSrc.includes('panda'))
    {
        // Draw the panda image with dynamic movement
        image(pandaImage, x, y,imageX, imageY);
    }
    else if (animalImageSrc.includes('tiger'))
    {
        // Draw the tiger image with dynamic movement
        image(tigerImage, x, y,imageX, imageY);
    }
    else if (animalImageSrc.includes('chimpanzee'))
    {
        // Draw the chimpanzee image with dynamic movement
        image(chimpanzeeImage, x, y,imageX, imageY);
    }
    else if (animalImageSrc.includes('elephant'))
    {
        // Draw the elephant image with dynamic movement
        image(elephantImage, x, y,imageX, imageY);
    }
    else if (animalImageSrc.includes('penguin'))
    {
        // Draw the penguin image with dynamic movement
        image(penguinImage, x, y, imageX, imageY);
    }
}