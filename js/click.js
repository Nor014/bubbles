'use strict';

let connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

showBubbles(connection);

document.addEventListener('click', onClick);

function onClick(event) {
  let coordinates = { x: event.pageX, y: event.pageY };
  connection.send(JSON.stringify(coordinates));
}


