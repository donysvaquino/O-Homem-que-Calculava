const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');

function nota1(){ 
    star2.src = "./IMG/starWhite.png";
    star3.src = "./IMG/starWhite.png";
    star4.src = "./IMG/starWhite.png";
    star5.src = "./IMG/starWhite.png";
    star1.src = "./IMG/starYellow.png";
}

function nota2(){ 
    star3.src = "./IMG/starWhite.png";
    star4.src = "./IMG/starWhite.png";
    star5.src = "./IMG/starWhite.png";
    star2.src = "./IMG/starYellow.png";
    star1.src = "./IMG/starYellow.png";
}

function nota3(){ 
    star5.src = "./IMG/starWhite.png";
    star4.src = "./IMG/starWhite.png";
    star3.src = "./IMG/starYellow.png";
    star2.src = "./IMG/starYellow.png";
    star1.src = "./IMG/starYellow.png";
}

function nota4(){ 
    star5.src = "./IMG/starWhite.png";
    star4.src = "./IMG/starYellow.png";
    star3.src = "./IMG/starYellow.png";
    star2.src = "./IMG/starYellow.png";
    star1.src = "./IMG/starYellow.png";
}

function nota5(){ 
    star5.src = "./IMG/starYellow.png";
    star4.src = "./IMG/starYellow.png";
    star3.src = "./IMG/starYellow.png";
    star2.src = "./IMG/starYellow.png";
    star1.src = "./IMG/starYellow.png";
}

function sobe1(){
    star1.style.transform="translateY(-5px)"
}

function sobe2(){
    star1.style.transform="translateY(-5px)"
    star2.style.transform="translateY(-5px)"
}

function sobe3(){
    star1.style.transform="translateY(-5px)"
    star2.style.transform="translateY(-5px)"
    star3.style.transform="translateY(-5px)"
}

function sobe4(){
    star1.style.transform="translateY(-5px)"
    star2.style.transform="translateY(-5px)"
    star3.style.transform="translateY(-5px)"
    star4.style.transform="translateY(-5px)"
}

function sobe5(){
    star1.style.transform="translateY(-5px)"
    star2.style.transform="translateY(-5px)"
    star3.style.transform="translateY(-5px)"
    star4.style.transform="translateY(-5px)"
    star5.style.transform="translateY(-5px)"
}

function desce1(){
    star1.style.transform="translateY(0)"
}

function desce2(){
    star1.style.transform="translateY(0)"
    star2.style.transform="translateY(0)"
}

function desce3(){
    star1.style.transform="translateY(0)"
    star2.style.transform="translateY(0)"
    star3.style.transform="translateY(0)"
}

function desce4(){
    star1.style.transform="translateY(0)"
    star2.style.transform="translateY(0)"
    star3.style.transform="translateY(0)"
    star4.style.transform="translateY(0)"
}

function desce5(){
    star1.style.transform="translateY(0)"
    star2.style.transform="translateY(0)"
    star3.style.transform="translateY(0)"
    star4.style.transform="translateY(0)"
    star5.style.transform="translateY(0)"
}

