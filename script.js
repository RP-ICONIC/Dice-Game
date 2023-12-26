var num1 = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", num1 + ".png");

var num2 = Math.floor(Math.random()*6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", num2 + ".png");

if(num1 > num2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
    document.getElementsByClassName("p1")[0].innerHTML = "Player 1🤑";
    document.getElementsByClassName("p2")[0].innerHTML = "Player 2🥴";
    
}

else if(num2 > num1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
    document.getElementsByClassName("p2")[0].innerHTML = "Player 2🤑";
    document.getElementsByClassName("p1")[0].innerHTML = "Player 1🥴";
}

else
{
    document.querySelector("h1").innerHTML = "!!Match Drawn!!";
    document.getElementsByClassName("p2")[0].innerHTML = "Player 2☹️";
    document.getElementsByClassName("p1")[0].innerHTML = "Player 1☹️";
}
