var numbers = []
var firstNumber = 1
var nextNumber = 1
var lastNumber 
var timer = 0
var timerInterval
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var miliSeconds = document.getElementById("mili-seconds")

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function initArr(arrayLength){
    lastNumber = arrayLength
    for (var index = 1; index <= arrayLength; index++) {
        numbers.push(index)
    }
}

function buildGame(){
    var sqrt = Math.sqrt(numbers.length)
    var rowIndex = 0;
    for(var i=0; i < numbers.length; i++){
        if(i % sqrt === 0){
            document.querySelector(".getNumber").innerHTML +=
            `<tr class=row${rowIndex}></tr>`
            rowIndex++;
        }
    }
    for(var i=0; i < numbers.length; i++){
        if(i % sqrt === 0){
        rowIndex--;
        }
        document.querySelector(`.row${rowIndex}`).innerHTML +=
            `<td><button class='numbButton${numbers[i]}' onclick="numClik(${numbers[i]})"}'>${numbers[i]}</button></td>`
    }
}

function numClik(e){
    //console.log(lastNumber, firstNumber ,e, lastNumber == e);
    if(e === 1){
        runTimer();
    }
    if(lastNumber == e && e === firstNumber + 1){
        console.log("lastNumber");
        clearInterval(timerInterval);
        document.querySelector(".showNext").innerText = `DONE!`
        document.getElementById("you-win").innerHTML = `YOU WIN!`
        document.querySelector(`.numbButton${e}`).style.background = "#D9D9D9"
    }
    else if(nextNumber === e){
        document.querySelector(`.numbButton${e}`).style.background = "#D9D9D9"
        nextNumber ++
        document.querySelector(".showNext").innerText = `${nextNumber}`
        firstNumber = e
        
    }
}

function runTimer() {
  timerInterval = setInterval(function () {
    timer += 1 / 60;
    let msVal = Math.floor((timer - Math.floor(timer)) * 100);
    let secondsVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minutesVal = Math.floor(timer / 60);
    document.getElementById("minutes").innerText =
    minutesVal < 10 ? "0" + minutesVal : minutesVal;
    document.getElementById("seconds").innerText =
    secondsVal < 10 ? "0" + secondsVal : secondsVal;
    document.getElementById("mili-seconds").innerText =
    msVal < 10 ? "0" + msVal : msVal;
  }, 1000 / 60);
}

function chooseLevel(level){
    if(numbers.length > 0){
        numbers = []
        document.querySelector(".getNumber").innerHTML = `<div></div>`
        document.getElementById("you-win").innerHTML = ''
        clearInterval(timerInterval);
        document.querySelector(".showNext").innerText = "1"
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        document.getElementById("mili-seconds").innerText = "00";
        firstNumber = 1
    }
    initArr(level)
    console.log(numbers);
    shuffleArray(numbers)
    console.log(numbers);
    buildGame()
}

function newGame(){
    timer = 0;
    clearInterval(timerInterval);
    document.querySelector(".showNext").innerText = "1"
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("mili-seconds").innerText = "00";
    document.getElementById("you-win").innerHTML = ''
    document.querySelector(".getNumber").innerText =''
    firstNumber = 1
    nextNumber = 1
    buildGame()
}



