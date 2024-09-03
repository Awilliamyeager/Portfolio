//alert("hello");

function clickButton() {
  var randomNumber = Math.floor(Math.random() * 20) + 1;

  switch (randomNumber) {
    case 1:
        document.getElementById("text").style.top = "50%";   
      document.getElementById("text").style.fontSize = "30px";  
      document.getElementById("text").innerHTML =("It is certain");
      break;
    case 2:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("It is decidedly so");
      break;
    case 3:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Without a doubt");
      break;
    case 4:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Yes definitely");
      break;
    case 5:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("You may rely on it");
      break;
    case 6:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("As I see it, yes");
      break;
    case 7:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Most likely");
      break;
    case 8:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Outlook good");
      break;
    case 9:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Yes");
      break;
    case 10:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Signs point to yes");
      break;
    case 11:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Reply hazy, try again");
      break;
    case 12:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Better not tell you now");
      break;
    case 13:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Cannot predict now");
      break;
    case 14:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Concentrate and ask again");
      break;
    case 15:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Don’t count on it");
      break;
    case 16:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("My reply is no");
      break;
    case 17:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("My sources say no");
      break;
    case 18:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Outlook not so good");
      break;
    case 19:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Very doubtful");
      break;
    case 20:
        document.getElementById("text").style.top = "50%";   
        document.getElementById("text").style.fontSize = "30px"; 
      document.getElementById("text").innerHTML =("Oops all berries");
      break;

    default:
      document.getElementById("text").innerHTML =("out of bounds");
  }

}
$("button").click(function () {
  clickButton();
});
