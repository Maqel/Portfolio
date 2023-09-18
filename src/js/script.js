const toggleBtn = document.querySelector('.toggle_btn');
let menuOpen = false;
toggleBtn.addEventListener('click', () => {
  if(!menuOpen) {
    toggleBtn.classList.add('open');
    menuOpen = true;
  } else {
    toggleBtn.classList.remove('open');
    menuOpen = false;
  }
});
