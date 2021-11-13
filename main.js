Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });

    camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML = '<img id="captured_image"  src="'+data_uri+'"/>';
    });
}

    console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q-KgLOrCt/model.json',modelLoaded);
    
    function modelLoaded() {
        console.log('Model Loaded!');
    }


function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is " + prediction_1;
    speak_data_1 = "the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
            document.getElementById('result_guesture_name').innerHTML = results[0].label;
            document.getElementById('result_guesture_name2').innerHTML = results[1].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            speak();
            if(results[0].label == "a")
            {
                document.getElementById("update_hand").innerHTML = "&#9754";
            }
            if(results[0].label == "b")
            {
                document.getElementById("update_hand").innerHTML = "&#9755;";
            }
            if(results[0].label == "c")
            {
                document.getElementById("update_hand").innerHTML = "&#9756;";
            }
            if(results[0].label == "d")
            {
                document.getElementById("update_hand").innerHTML = "&#9757;";
            }
            if(results[0].label == "e")
            {
                document.getElementById("update_hand").innerHTML = "&#9758;";
            }
            if(results[0].label == "f")
            {
                document.getElementById("update_hand").innerHTML = "&#9759;";
            }

            if(results[0].label == "a2")
            {
                document.getElementById("update_hand").innerHTML = "&#9754";
            }
            if(results[0].label == "b2")
            {
                document.getElementById("update_hand").innerHTML = "&#9755;";
            }
            if(results[0].label == "c2")
            {
                document.getElementById("update_hand").innerHTML = "&#9756;";
            }
            if(results[0].label == "d2")
            {
                document.getElementById("update_hand").innerHTML = "&#9757;";
            }
            if(results[0].label == "e2")
            {
                document.getElementById("update_hand").innerHTML = "&#9758;";
            }
            if(results[0].label == "f2")
            {
                document.getElementById("update_hand").innerHTML = "&#9759;";
            }

            
    }
}