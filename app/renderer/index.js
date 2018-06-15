// Display the current version
let version = window.location.hash.substring(1);
document.getElementById('version').innerText = version;

// Listen for messages
const { ipcRenderer } = require('electron');

ipcRenderer.on('message', function (event, text) {
  var message = document.createElement('div');
  message.innerHTML = text;

  var container = document.getElementById('messages');
  container.appendChild(message);
});

ipcRenderer.on('update-downloaded', function() {
  var button = document.createElement('input');
  button.type = 'button';
  button.value = 'Restart and Update';
  button.onclick = restartAndUpdate();

  document.getElementById('controls').appendChild(button);
});

function restartAndUpdate() {
  ipcRender.send('restart-and-update');
}
