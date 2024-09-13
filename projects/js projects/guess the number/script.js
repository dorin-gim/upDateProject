var randomNumb = (Math.ceil(Math.random()*10));
var counter = 5;
var turns = 0;
var guessNum = "";

console.log(randomNumb);
document.getElementById("turns").innerHTML = `${turns} TURNS`
document.getElementById("guess").innerHTML = "?"
document.getElementById("answer").innerHTML = ""

        function addChar(char){
            document.getElementById("guess").innerHTML = char;
            guessNum = char;
        }
        function startGame(){
            guessNum = ""
            counter = 5
            turns = 0
            randomNumb = (Math.ceil(Math.random()*10));
            console.log(randomNumb);
            document.getElementById("turns").innerHTML = `${turns} TURNS`
            document.getElementById("guess").innerHTML = "?"
            document.getElementById("answer").innerHTML = ""
            document.getElementById("checkBtn").disabled = false;
            document.getElementById("checkBtn").style.background = "#248F86";
            document.getElementById("checkBtn").style.color = "white";
        }
        function check(){
            console.log(guessNum);
            turns++;
            document.getElementById("turns").innerHTML = `${turns} TURNS` 

            if (counter > 1){
                if (guessNum > randomNumb){
                counter--;

                document.getElementById("answer").innerHTML = `<p>${guessNum} is too big!</p>`
                }
                else if (guessNum < randomNumb) {
                counter--;
                document.getElementById("answer").innerHTML = `<p>${guessNum} is too small!</p>`;
                
                }
                else{document.getElementById("answer").innerHTML = `<p> Exactly! you won the game the number is ${guessNum}</p>`;
                document.getElementById("checkBtn").disabled = true;
                document.getElementById("checkBtn").style.background = "#D9D9D9";
                document.getElementById("checkBtn").style.color = "#B5BBBD";
                }}

            else{
                document.getElementById("answer").innerHTML = `<p>You lost the game. The number was ${randomNumb} </p> `;
                document.getElementById("checkBtn").disabled = true;
                document.getElementById("checkBtn").style.background = "#D9D9D9";
                document.getElementById("checkBtn").style.color = "#B5BBBD";
                
            }
        };



        