var album = ["waterbottles.jpg",
"bowl.jpg",
"iPhone 13.jpg",
"controller.jpg",
"headphones.png"];
var mobilenetscore = 0;
var googlelensscore = 0;
var trueorfalse = "false";

function water_bottle_div() {
    document.getElementById("main_image_div").src = album[0];
    document.getElementById("main_div").style.display = "initial";
document.getElementById("result").style.display = "none";
   googlelensscore = googlelensscore + 1;
   mobilenetscore = mobilenetscore + 1;
   document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
   document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "water bottle";
    document.getElementById("google_lens_guess").innerHTML = "water bottle.";
}
function bowl_div(){
    document.getElementById("main_image_div").src = album[1];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "bowl";
    document.getElementById("google_lens_guess").innerHTML = "pan.";
}
function iPhone_div(){
    document.getElementById("main_image_div").src = album[2];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "Phone";
    document.getElementById("google_lens_guess").innerHTML = "iPhone";
}
function controller_div(){
    document.getElementById("main_image_div").src = album[3];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";
    googlelensscore = googlelensscore - 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";

        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "PS5 controller";
    document.getElementById("google_lens_guess").innerHTML = "TV controoler";
}
function headphones_div(){
    document.getElementById("main_image_div").src = album[4];
    document.getElementById("main_div").style.display = "initial";
    document.getElementById("result").style.display = "none";

    googlelensscore = googlelensscore + 1;
    mobilenetscore = mobilenetscore + 1;
    document.getElementById("mobilenet_score").innerHTML = mobilenetscore;
    document.getElementById("google_lens_score").innerHTML = googlelensscore;
    if(mobilenetscore + googlelensscore == 10){
        googlelensscore = 0;
        mobilenetscore = 0;
        document.getElementById("result").style.display = "initial";
        console.log("Scores Reset");
    }
    document.getElementById("mobilenet_guess").innerHTML = "earphones";
    document.getElementById("google_lens_guess").innerHTML = "headset";
}
