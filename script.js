
var d1 = Math.floor(Math.random()*6) + 1;
document.querySelector("#dicee1").setAttribute("src", "./images/dice" + d1 + ".png");

var d2 = Math.floor(Math.random()*6) + 1;
document.querySelector("#dicee2").setAttribute("src", "./images/dice" + d2 + ".png");


if (d2 > d1){
    document.querySelector(".header").innerHTML = "Player2 wins!🚩";
}else if (d2 < d1){
    document.querySelector(".header").innerHTML = "🚩Player1 wins!";
}else{
    document.querySelector(".header").innerHTML = "Draw";
}
"Refresh Me"
"🚩Player1 wins!"
"Player2 wins!🚩"
"Draw"