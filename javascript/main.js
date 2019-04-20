//separando os elementos

let images = document.querySelectorAll("img");

let header = document.querySelector("h1");

let atualizar = document.querySelector("button");

let primeiraVez = window.performance.navigation.type;

//obtendo o número dos dados

let player1 = Math.floor(Math.random()*6 + 1);

let player2 = Math.floor(Math.random()*6 + 1);


//mudando a imagem

images[0].setAttribute("src","images/dice" + player1.toString() + ".png");

images[1].setAttribute("src","images/dice" + player2.toString() + ".png");

//mudando o header

if(primeiraVez != 0){
    if(player1 > player2)
        header.innerHTML = "<img src='images/red-flag.png'> Player 1 Wins!";

    else if( player1 == player2)
        header.textContent = "Draw!";
    else
        header.innerHTML = "Player 2 Wins! <img src='images/red-flag.png'> ";
    }
else{
    atualizar.textContent = "Play!";
}    
// atualizando a página
function atualiza(){
    location.reload();
}

atualizar.addEventListener("click",atualiza);
    