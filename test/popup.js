
var vidlinks;
var dropDown = document.getElementById('drop');
resetAll();
// Displays the qualities
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'updatePopup') {
    dropDown.style.display='block';
    console.log('Received data:', message.data);  
    vidlinks = message.data;
    var qualities = Object.keys(message.data);
    console.log(qualities);

    for (let i = 0; i < qualities.length; i++) {
      var qual = document.getElementById(qualities[i]);
      qual.style.display = 'block';
    }
    
  }
});
// Listens for when the button is first clicked
document.getElementById('download4').addEventListener('click', function() {
  chrome.runtime.sendMessage({ action: 'real' });
});


document.getElementById('144').addEventListener('click', function() {
  const downUrl = vidlinks['144'];
  chrome.storage.sync.set({ storedValue: downUrl }, function() {
    console.log(downUrl);

  });
  resetAll();

  chrome.runtime.sendMessage({ action: 'download' });
});

document.getElementById('240').addEventListener('click', function() {
  const downUrl = vidlinks['240'];
  chrome.storage.sync.set({ storedValue: downUrl }, function() {
    console.log(downUrl);

  });
  resetAll();

  chrome.runtime.sendMessage({ action: 'download' });
});

document.getElementById('360').addEventListener('click', function() {
  const downUrl = vidlinks['360'];
  chrome.storage.sync.set({ storedValue: downUrl }, function() {
    console.log(downUrl);
  });
  resetAll();

  chrome.runtime.sendMessage({ action: 'download' });
});



document.getElementById('480').addEventListener('click', function() {
  const downUrl = vidlinks['480'];
  chrome.storage.sync.set({ storedValue: downUrl }, function() {
    console.log(downUrl);

  });
  resetAll();

  chrome.runtime.sendMessage({ action: 'download' });
});


document.getElementById('720').addEventListener('click', function() {
  const downUrl = vidlinks['720'];
  chrome.storage.sync.set({ storedValue: downUrl }, function() {
    console.log(downUrl);

  });
  resetAll();

  chrome.runtime.sendMessage({ action: 'download' });
});


document.getElementById('1080').addEventListener('click', function() {
  const downUrl = vidlinks['1080'];
  chrome.storage.sync.set({ storedValue: downUrl }, function() {
    console.log(downUrl);

  });
  resetAll();
  chrome.runtime.sendMessage({ action: 'download' });

});

// Removes the quality button and the options.
function resetAll() {
  let qualities = ['144', '240', '360', '480', '720', '1080'];
  for (let i = 0; i < qualities.length; i++) {
    var qua = document.getElementById(qualities[i]);
    qua.style.display = 'none';
  }
  dropDown.style.display='none';
}