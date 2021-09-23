let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let direction = "right";

function criarcaixa(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarsnake(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context,fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function comida(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 37 && direction != "down") direction = "up";
    if(event.keyCode == 37 && direction != "left") direction = "right";
    if(event.keyCode == 37 && direction != "up") direction = "down";
}

function iniciar(){

    for(i=1; i<snake.length; i++){
        if(snake[0].x == snake[1].x && snake[0].y == snake[1].y){
            clearInterval(jogo);
            alert("Game Over  :(");
        }

    }

    if(snake[0].x > 15*box && direction == "right")snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left")snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down")snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up")snake[0].y = 16 * box;

    criarcaixa();
    criarsnake();
    comida();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX +=box;
    if(direction == "left") snakeX +=box;
    if(direction == "up") snakeY +=box;
    if(direction == "down") snakeY +=box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;

    }

    
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

}

let jogo = setInterval(iniciar, 100);
