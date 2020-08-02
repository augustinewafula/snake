import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [
    {x: 11, y: 11}
]
let newSegments = 0;

export function update() {
    addSegments();

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

export function expandSnake(amount) {
    newSegments += amount;    
}

export function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPosition(segment, position);
    });
    
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
    
}

function addSegments() {
    for (let index = 0; index < newSegments; index++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
        
    }

    newSegments = 0;
    
}