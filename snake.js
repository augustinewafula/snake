import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 1;
const snakeBody = [
    {x: 11, y: 11}
]

export function update() {
    const inputDirection = getInputDirection();
    for (let index = snakeBody.length - 2; index >= 0; index--) {
        snakeBody[index + 1] = { ...snakeBody[index] };
        
    }  
    
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);

    });
}