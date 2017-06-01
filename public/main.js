'use strict'
window.onload = function() {

  var socket = io();
  var container = document.getElementById('container');
  var container2 = document.getElementById('container2');
  var selectedColor = 'red';
  var guessSquare = null;
  socket.on('userDivClick', function(msg) {
    console.log('test');
    var squareAttack = document.getElementById(msg.square)
    squareAttack.className += ' ship'
  });

  for (var i = 1; i <= 100; i++) {
    let setSquare = document.createElement('div');
    setSquare.className = 'square';
    setSquare.id = `a${i}`;
    setSquare.addEventListener('click', function(ev) {
      var opposingSquareId = "b" + setSquare.id.slice(1, 4);
      socket.emit('userDivClick', {
        square: opposingSquareId
      });
      var ship = document.getElementById(opposingSquareId)
      console.log(ship);
      setSquare.style.backgroundColor = '#FFFFF2';
    })

    container.append(setSquare);
  }
  for (var i = 1; i <= 100; i++) {
    guessSquare = document.createElement('div');
    guessSquare.className = 'square';
    var squareClass = guessSquare.className
    guessSquare.id = `b${i}`;
    guessSquare.addEventListener('click', function(ev) {
      console.log(squareClass)
    })

    container2.append(guessSquare);
  }
};
