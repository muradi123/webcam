  
  let video = document.createElement('video');
  video.className = 'videoElement';
  video.autoplay = true;
  
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    })
    .then(stream => {
      window.localStream = stream;
      document.querySelector('video').srcObject = stream;

    })
    .catch((err) => {
      console.log(err);
    });
    
    document.body.appendChild(video)
     
     chrome.storage.sync.get(['shape'], function(result) {
         let value = result.shape;

         switch(value) {
         case "oval":
         document.querySelector('.videoElement').style.borderRadius = "50%"
         break;

         case "rectangle":
         document.querySelector('.videoElement').style.borderRadius = "none"
         break;

         case "square":
         document.querySelector('.videoElement').style.width= "180px"
         break;

        default:
          document.querySelector('.videoElement').style.borderRadius = "50%";
          document.querySelector('.videoElement').style.width = "160px";
        }
    });



 
     chrome.storage.sync.get(['position'], function(result) {
         let pos = result.position;

         switch(pos) {
         case "leftBottom":
         document.querySelector('.videoElement').style.top = "65vh"
         document.querySelector('.videoElement').style.left = "3vw"
         break;

         case "rightBottom":
         document.querySelector('.videoElement').style.right = "3vw"
          document.querySelector('.videoElement').style.top = "65vh"
         break;

         case "rightTop":
         document.querySelector('.videoElement').style.right = "3vw";
         document.querySelector('.videoElement').style.top = "3vh";
         break;
         
        default:
          document.querySelector('.videoElement').style.left = "3vw";
          document.querySelector('.videoElement').style.top = "3vh";
        }
    });


    chrome.storage.sync.get(['mirrors'], function(result) {
         let miror = result.mirrors;
          if (miror === true) {
            document.querySelector('.videoElement').style.transform = " scaleX(-1)"
          }
       })

            
          