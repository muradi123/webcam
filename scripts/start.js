(function enchantHtml() {
    var frame = document.querySelector('video');
    if (frame.style.display === "none") {
       let newVideo = document.createElement('video');
        newVideo.className = 'videoElement2';
        document.body.appendChild(frame);
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
    document.querySelector('.videoElement').style.display = 'block';
    }
    
} )()