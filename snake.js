export const SNAKE_SPEED = 1;
const snakeBody = [
    {x: 11, y: 11},
    {x: 12, y: 11},
    {x: 13, y: 11},
    {x: 14, y: 11},
    {x: 15, y: 11},
]

export function update() {
    for (let index = snakeBody.length - 2; index >= 0; index--) {
        snakeBody[index + 1] = { ...snakeBody[index] };
        
    }  
    
    snakeBody[0].x += 0;
    snakeBody[0].y += 1;
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