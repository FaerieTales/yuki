var canvas = document.getElementById('soragameid');
var context = canvas.getContext('2d');

var grid = 16;
var count = 0;
  
var sora = {
  x: 160,
  y: 160,
  
 
  dx: grid,
  dy: 0,
  
  
  cells: [],
  
  
  maxCells: 4
};
var paopu = {
  x: 320,
  y: 320
};


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop);

  
  if (++count < 7) {
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);


  sora.x += sora.dx;
  sora.y += sora.dy;

 
  if (sora.x < 0) {
    sora.x = canvas.width - grid;
  }
  else if (sora.x >= canvas.width) {
    sora.x = 0;
  }
  

  if (sora.y < 0) {
    sora.y = canvas.height - grid;
  }
  else if (sora.y >= canvas.height) {
    sora.y = 0;
  }


  sora.cells.unshift({x: sora.x, y: sora.y});

  // remove cells as we move away from them
  if (sora.cells.length > sora.maxCells) {
    sora.cells.pop();
  }

  
  context.fillStyle = 'darkorange';
  context.fillRect(paopu.x, paopu.y, grid-1, grid-1);

  
  context.fillStyle = 'darkblue';
  sora.cells.forEach(function(cell, index) {
    
    
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  


    if (cell.x === paopu.x && cell.y === paopu.y) {
      sora.maxCells++;

    
      paopu.x = getRandomInt(0, 25) * grid;
      paopu.y = getRandomInt(0, 25) * grid;
    }


    for (var i = index + 1; i < sora.cells.length; i++) {
      
      
      if (cell.x === sora.cells[i].x && cell.y === sora.cells[i].y) {
        sora.x = 160;
        sora.y = 160;
        sora.cells = [];
        sora.maxCells = 4;
        sora.dx = grid;
        sora.dy = 0;

        paopu.x = getRandomInt(0, 25) * grid;
        paopu.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}


document.addEventListener('keydown', function(e) {
  
  
  // izq -- letra A
  if (e.which === 65 && sora.dx === 0) {
    sora.dx = -grid;
    sora.dy = 0;
  }
  //  arriba -- letra W
  else if (e.which === 87 && sora.dy === 0) {
    sora.dy = -grid;
    sora.dx = 0;
  }
  //  derecha -- letra D
  else if (e.which === 68 && sora.dx === 0) {
    sora.dx = grid;
    sora.dy = 0;
  }
  //  abajo -- letra S
  else if (e.which === 83 && sora.dy === 0) {
    sora.dy = grid;
    sora.dx = 0;
  }
});

// start the game
requestAnimationFrame(loop);