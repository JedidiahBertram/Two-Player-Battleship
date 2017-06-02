'use strict'
window.onload = function() {

  var socket = io();
  var container = document.getElementById('container');
  var container2 = document.getElementById('container2');
  var selectedColor = 'red';
  var fireMissile = null;
  var hitCount = 0;
  socket.on('userDivClick', function(msg) {
    console.log('test');
    var opponentTarget = document.getElementById(msg.square)
    opponentTarget.className += ' ship';
  });

  for (var i = 1; i <= 100; i++) {
    let shipSelectionDiv = document.createElement('div');
    shipSelectionDiv.className = 'square';
    shipSelectionDiv.id = `a${i}`;
    shipSelectionDiv.addEventListener('click', function(ev) {
      var opposingSquareId = "b" + shipSelectionDiv.id.slice(1, 4);
      socket.emit('userDivClick', {
        square: opposingSquareId
      });
      var ship = document.getElementById(opposingSquareId)
      console.log(ship);
      shipSelectionDiv.style.backgroundColor = '#D3D3D3';
    })

    container.appendChild(shipSelectionDiv);
  }
  for (var i = 1; i <= 100; i++) {
    fireMissile = document.createElement('div');
    fireMissile.className = 'square';
    //var squareClass = fireMissile.className
    fireMissile.id = `b${i}`;
    container2.appendChild(fireMissile);
    let _fireMissile = document.getElementById(`b${i}`)

    _fireMissile.addEventListener('click', function(ev) {
      console.log(_fireMissile);
      console.log(_fireMissile.className)
      if (_fireMissile.className == 'square ship') {
        console.log(true);
        _fireMissile.className = 'hitShip';
        hitCount += 1;
        console.log(hitCount);
      } else {
        _fireMissile.className = 'miss';
      }
      if (hitCount > 16) {
        window.alert("Game over. Someone won. BE HONEST!")
        console.log('Someone won. I dont know who. But Someone won.')
      }
    })
  }
};
