var canvasA = 1000;
var canvasB = 700;
var axiom = "+F";
var sentence = axiom;
var rules = [];
var slider;
var len = 150;
var angle = 0.43;
var shrink = 0.5;
rules[0] = {
    a: "F",
    b: "FF + [+F - F - F] - [-F + F + F]"

}


function generate() {
    var nextSentence = "";
    for (var i = 0; i <= sentence.length; i++) {
        var current = sentence.charAt(i);
        var done = false;
        for (var j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                nextSentence += rules[j].b;
                done = true;
                break;
            }

        }
        if (done === false) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}

function setup() {
    createCanvas(canvasA, canvasB);
    background(51);
    createP(sentence);
    var button = createButton("generate");
    button.mousePressed(generate);
    slider = createSlider(0, 300, 150, 10);
    turtle();
}

function draw() {

}

function turtle() {
    resetMatrix();
    translate(width / 2, height);
    background(51);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        if (current == "F") {
            stroke(random(0, 255), random(0, 255), random(0, 255));
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == "+") {
            rotate(angle);
        } else if (current == "-") {
            rotate(-angle);
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            pop();
        }
    }

    len = len * shrink;
}
