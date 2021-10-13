import menuTpl from './templates/menu-cards.hbs'
import './css/styles.css';
import menu from './menu.json'
import localStorage from './js/theme.js'




const listRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');

listRef.insertAdjacentHTML('beforeend', menuTpl(menu));
checkboxRef.addEventListener('change', onInputChange);
document.body.classList.add('light-theme');


function onInputChange(e) {
  const input = e.target;
  const isChanged = input.checked;
  

  document.body.classList.toggle('dark-theme');
  localStorage.save('isChecked', isChanged);
}
const changeCheck = () => {
  const isInputChecked = LS.load('isChecked');
  console.log(isInputChecked);
  if (isInputChecked) {
    document.body.classList.add('dark-theme');
    checkboxRef.checked = isInputChecked;
  }
}

changeCheck();