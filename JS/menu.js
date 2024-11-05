const activeMenu = document.getElementById("activeMobile");
const menu = document.getElementById("navMobile");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

function ativarMenu(){
    menu.classList.toggle('none');
    line1.classList.toggle('x1');
    line2.classList.toggle('x2');
    line3.classList.toggle('x3');
}




    