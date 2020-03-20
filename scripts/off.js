

  (function(){
  	document.querySelector('.videoElement').style.display = "none";
    localStream.getTracks().forEach((track) => {
    track.stop();
  })
})()