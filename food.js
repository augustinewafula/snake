import { onSnake, expandSnake } from "./snake.js";

let food = {x: 10, y: 2};
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);      
        food = {x: 20, y: 4};  
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}