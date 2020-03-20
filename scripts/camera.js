
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
    
    document.body.appendChild(video);
   
   
    
     







            
          