let numSquares = 6;
let colors = [];
let pickedColor;
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let squares = document.querySelectorAll(".square");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode button event listeners
    setupModeButtons();
    //add click listeners to each square
    setupSquares();
    reset();
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add click listeners
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function reset(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].classList.remove("hidden");
        } else{
            squares[i].classList.add("hidden");
        }
    }
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    h1.style.backgroundColor="steelblue";
}


resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(numColors){
    //make an array
    let arr = [];
    //add num random colors to array
    for(let i=0; i<numColors; i++){
        //get random color and push
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    const numRGB=3;
    let color ="";
    for(let i=0;i<numRGB;i++){
        color+=Math.floor(Math.random()*256)+", ";
    }
    //chop off the last comma and space for the last number
    return "rgb(" + color.substring(0,color.length-2) +")";
}