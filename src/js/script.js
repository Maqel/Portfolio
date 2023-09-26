const toggleBtn = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

let menuOpen = false;
toggleBtn.addEventListener('click', () => {
  if(!menuOpen) {
    toggleBtn.classList.add('open');
    dropDownMenu.classList.add('open');
    menuOpen = true;
  } else {
    toggleBtn.classList.remove('open');
    dropDownMenu.classList.remove('open');

    menuOpen = false;
  }
});
