var SpeechRecognition = window.webkitSpeechRecognition;

var recogntion = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recogntion.start();

}

recogntion.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if (Content == "take my selfie") {
        speak();
    }

}


function speak() {

    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot()
    }, 5000)
}


camera = document.getElementById("camera");

Webcam.set({

    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90

});

function take_snapshot() {

    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "selfie_image" src= ' + data_uri + '>'
    });

    save();

}

function save() {

    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();

}