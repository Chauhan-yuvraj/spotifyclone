const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const mainContainer =  document.querySelector('.main-container')

toggleButton.addEventListener('click', function() {
  sidebar.classList.toggle('hidden');
  if ( toggleButton.innerHTML === 'Close Menu'){
    toggleButton.innerHTML = 'Open Menu';
    mainContainer.style.marginLeft = '0px';
    toggleButton.style.left = '2em'
    toggleButton.style.top = '2em'

}else if ( toggleButton.innerHTML === 'Open Menu'){
    toggleButton.innerHTML = 'Close Menu';
    mainContainer.style.marginLeft = '245px';
    toggleButton.style.left = '8em'
    toggleButton.style.top = '2em'


}
});

