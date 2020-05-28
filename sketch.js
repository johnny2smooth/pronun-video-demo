// Add some header info
// Got this from YouTube

// Video
let video;
let classifier;
let videoClassifier;
let label = 'waiting...';

//Images
let spanishA;
let spanishE;
let spanishI;
let spanishO;
let spanishU;



// STEP 1: Load the model!

function preload() {
  let options = {probabilityThreshold: 0.95};
  
  classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/fKOEqIHf7/model.json', options);
  
spanishA = loadImage('/images/A-Shadow-Blue.png');
spanishE = loadImage('/images/E-Shadow-Orange.png');
spanishI = loadImage('/images/I-Shadow-Egg.png');
spanishO = loadImage('/images/O-Shadow-Green.png');
spanishU = loadImage('/images/U-Shadow-Purple.png');
}

function setup() {
  createCanvas(640, 480);
  
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify!

function classifyAudio() {
  classifier.classify(gotResults);
}


function draw() {
  background(0);
  
  translate(video.width, 0);
  scale(-1, 1);
  
    // Draw the video
  image(video, 0, 0);
    // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textAlign(CENTER, CENTER);

  let alphabet = ' ';
  if (label == 'Silence') {
    alphabet = ' '
  } else if (label == 'Spanish A') {
    alphabet = image(spanishA, 0, 0, spanishA.width/2, spanishA.height/2)
  } else if (label == 'Spanish E') {
    alphabet = image(spanishE, 0, 0, spanishE.width/2, spanishE.height/2)
  } else if (label == 'Spanish I') {
    alphabet = image(spanishI, 50, 0, spanishI.width*0.5, spanishI.height*0.5)
  } else if (label == 'Spanish O') {
    alphabet = image(spanishO, 0, 0, spanishO.width/2, spanishO.height/2)
  } else if (label == 'Spanish U') {
    alphabet = image(spanishU, 0, 0, spanishU.width/2, spanishU.height/2)
  }
  
  textSize(100);
  fill(255);
  //text(alphabet, width/2, height/2)

}


// STEP 3: Get the classification!

function gotResults(error, results) {
  if(error){
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}
