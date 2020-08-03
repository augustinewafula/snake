let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch (e.key) {
        case "ArrowUp":
            up();    
            break;
        case "ArrowDown":   
            down();      
            break;
        case "ArrowLeft": 
            left()         
            break;
        case "ArrowRight":      
            right()    
            break;
    
        default:
            break;
    }

});

document.addEventListener('swiped-left', function(e) {
    left();
});

document.addEventListener('swiped-right', function(e) {
    right();
});

document.addEventListener('swiped-up', function(e) {
    up();
});

document.addEventListener('swiped-down', function(e) {
    down();
});

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

function up() {
    if (lastInputDirection.y == 0) {
        inputDirection = {x: 0, y: -1};
    }    
}

function down() {
    if (lastInputDirection.y == 0) {
        inputDirection = {x: 0, y: 1};
    }
}

function left() {
    if (lastInputDirection.x == 0) {
        inputDirection = {x: -1, y: 0};
    } 
}

function right() {
    if (lastInputDirection.x == 0) {
        inputDirection = {x: 1, y: 0};
    } 
}