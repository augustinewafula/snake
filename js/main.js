import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, score } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
let highScore = getHighScore();
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
    if (gameOver) {
        if (score > highScore) {
            setHightScore(score);
        }
        if (confirm("You lost. Your score is "+ score +" Press OK to restart.")) {
            location.reload();           
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}

function getHighScore(){
    if (typeof(Storage) !== "undefined") {
        var highScore = localStorage.getItem("highScore");
        if (!highScore) {
            highScore = 0;
        } 
    } else{
        highScore = 0;
    }
    document.getElementById("high-score").innerHTML = highScore;
    return highScore;
}

function setHightScore(value) {
    highScore = value;
    if (typeof(Storage) !== "undefined") { 
        localStorage.setItem("highScore", value);
    }
}