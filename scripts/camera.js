let html = `<video id="videoElement" autoplay></video>`;
navigator.mediaDevices.getUserMedia({
  video: true
}).then(mediaStream => {
  document.querySelector('#videoElement').srcObject = mediaStream;
  
}) 
  
document.body.innerHTML += html;
           chrome.storage.sync.get(['position'], function(result) {
              let value =  result.position;
        
                 if (value === 'top-left') {
                   document.querySelector('#videoElement').style.margin = "0  75% ";
                 }
    
                 else if (value === 'bottom-left') {
                   document.querySelector('#videoElement').style.margin = "25% 75% ";
                 }
                 else if (value === 'bottom-right') {
                   document.querySelector('#videoElement').style.margin = "25% 0";
                   
                 }
                  else if (value === 'top-right') {
                   document.querySelector('#videoElement').style.margin = "0 0";
                 }
                
            });

            chrome.storage.sync.get(['shape'], function(result) {
              let test =  result.shape;
              
                 if (test === 'oval') {
                   document.querySelector('#videoElement').style.borderRadius = "50% ";
                   
                 } else if (test === 'reqtangle') {
                  document.querySelector('#videoElement').style.borderRadius= "0";
                }
                else if (test === 'circle') {
              
                  document.querySelector('#videoElement').classList.add("circle");
  
                }
                 else if (test === 'square') {
                  document.querySelector('#videoElement').classList.add("square");
                  
                }
    
                 
                
            });










            
          