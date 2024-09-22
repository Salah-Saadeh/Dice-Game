document.querySelector(".shuffleButton").addEventListener("click", function(){
    var randomNum1 = Math.ceil((Math.random() * 6));
    document.getElementsByClassName("img1")[0].setAttribute("src" , "./images/dice"+randomNum1+".png");

    var randomNum2 = Math.ceil((Math.random() * 6));
    document.getElementsByClassName("img2")[0].setAttribute("src" , "./images/dice"+randomNum2+".png");

    if (randomNum1 > randomNum2){
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }else if (randomNum2 > randomNum1) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }else{
        document.querySelector("h1").textContent = "Draw!";
}
}
)
