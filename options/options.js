

  const saveButton = document.getElementById('save');
  saveButton.addEventListener('click', function(){
    saveButton.innerHTML = 'saved';
    setTimeout(() => {
      saveButton.innerHTML = 'save';
    }, 750);
  })


function save_options() {
  const shapes = document.getElementById('shapes').value;
  const positions = document.getElementById('positions').value;
  chrome.storage.sync.set({
  position: positions,
  shape:shapes
});
}

document.getElementById('save').addEventListener('click',save_options); 
