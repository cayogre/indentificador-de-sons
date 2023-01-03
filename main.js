function sons_de_videogame(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    pele = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XrGzTpaJ1/model.json', modelReady);
}
function modelReady() {
    console.log('viagem');
    pele.classify(gotResults);
}
function gotResults(error,results) {
    if (error == true){
        console.log(error)
    }else{
        console.log(results)
         var nome = results[0].label;
         var confidencial = results[0].confidence*100;
         document.getElementById('whey_protein').innerHTML = nome;
         document.getElementById('precisao').innerHTML = confidencial;
         img1 = document.getElementById('alien1');
         img2 = document.getElementById('alien2');
         img3 = document.getElementById('alien3');
         img4 = document.getElementById('alien4');
         if (nome == 'falas'){
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
         }else if (nome == 'batidas na mesa'){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
         }else if (nome == 'batidas de panela'){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png'; 
         }else {
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif'; 
         }
    }
}