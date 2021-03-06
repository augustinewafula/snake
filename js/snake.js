import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 6;
const snakeBody = [
    {x: 11, y: 11}
]
let newSegments = 0;
export let score = 0;

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

export function increaseScore(amount) {
    score += amount;    
    document.getElementById("score").innerHTML = score;
}

export function onSnake(position, {ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPosition(segment, position);
    });
    
}

export function getSnakeHead() {
    return snakeBody[0];
    
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true});
    
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