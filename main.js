function preload() {
    
}

function setup() {
    
    canvas = createCanvas(640, 480);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    
    image(video, 0, 0, 640, 480);
    tint(tintColor);
    fill("red");
    stroke("grey");
    circle(50, 50, 80)
    circle(50, 430, 80)
    circle(590, 50, 80)
    circle(590, 430, 80)
    fill("green");
    stroke("grey");
    rect(90, 40, 460, 20)
    rect(90, 420, 460, 20)
    rect(40, 90, 20, 300)
    rect(580, 90, 20, 300)
}

function takeSnapshot() {

    save("Bia Batatinha.png")
}

function filterTint() {
    
    tintColor = document.getElementById("colorName").value;
}