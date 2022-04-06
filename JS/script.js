var i = 0;
var images = [];
var slideTime = 3000;

images[0] = 'https://unsplash.com/photos/bgiGfsJazpk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NjV8fHdvbWVufGVufDB8MHx8fDE2NDkxMzM3Mzc&force=true&w=1920';
images[1] = 'https://unsplash.com/photos/_KaMTEmJnxY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fHN1bW1lcnxlbnwwfDB8fHwxNjQ5MTQ2MDY2&force=true&w=1920';
images[2] = 'https://unsplash.com/photos/Nkr_eOKG3IU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ5MTU1OTk4&force=true&w=1920';

function changePic(){
    var wall = document.getElementById("wall-back");
    wall.style.backgroundImage = "url("+ images[i%3]+")";
    wall.style.animation = "smooth 0.5s ease infinte";
    i++;
    setTimeout(changePic,slideTime);
}

window.addEventListener("load", changePic, false);

var texts = [], heads = [], buttons=[];
texts[0] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
texts[1] = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text";
texts[2] = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the ";


heads[0] = "ENJOY BLISS THIS SUMMER";
heads[1] = "BATHE IN PACIFIC WATERS";
heads[2] = "DIVE DEEP INTO THE BEAUTY";

buttons[0] = "BOOK NOW";
buttons[1] = "BOOK GUIDE";
buttons[2] = "SCUBA DIVE";

i = 0;
var delay = 3000;
function transitions_card(){
    var hd = document.getElementById("heading");
    var txt = document.getElementById("txt");
    var btn = document.getElementById("rotatecard");

    hd.innerHTML = heads[i%3];
    txt.innerHTML = texts[i%3];
    btn.innerHTML = buttons[i%3];

    i++;

    setTimeout(transitions_card, delay);
}


window.addEventListener("load", transitions_card,false);






