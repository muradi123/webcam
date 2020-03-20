

  const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', function(){
    let saved = document.getElementById('saved');
    saved.innerHTML = 'options saved';
    setTimeout(() => {
      saved.innerHTML = '';
    }, 750);
  })


function save_options() {
  const shapes = document.getElementById('shape').value;
  const positions = document.getElementById('position').value;
  const mirror = document.getElementById('mirror').checked;
  chrome.storage.sync.set({
  position: positions,
  shape:shapes,
  mirrors:mirror
});
}

document.getElementById('save').addEventListener('click',save_options); 
