let isEnabled = true;
let on = false;

function stop(){
  chrome.tabs.executeScript(null, {file:"./scripts/off.js"})
  }

  chrome.browserAction.onClicked.addListener(function() {
    isEnabled = !isEnabled
    if (isEnabled) {
        chrome.browserAction.setIcon({
            path: {
                19: "./images/camera16.png",
                38: "./images/camera16.png"
            }
        
        });
         on = false;
         stop()
    } else {
        chrome.browserAction.setIcon({
            path: {
                
                19: "./images/camera-on.png",
                38: "./images/camera-on.png"
            }
        });

        chrome.tabs.executeScript(null, {file:"./scripts/camera.js"})
        on = true;
    }
})

function updateTab (tabId) {
 if (on === true) {
  chrome.tabs.executeScript(null, {file:"./scripts/camera.js"})
 }
}

chrome.tabs.onUpdated.addListener(function (tabId) {
    updateTab(tabId); 
});