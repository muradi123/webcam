
  let video = document.createElement('video');
  let button = document.createElement('button');
  button.className = 'both';
  button.textContent = 'test';
  
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
    document.body.appendChild(button)
    document.body.appendChild(video);
    button.addEventListener("click", function(){
    localStream.getTracks().forEach((track) => {
    track.stop();
  })
});
   
    
     







            
          