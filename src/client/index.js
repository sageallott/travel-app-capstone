import { handleSubmit } from "./js/application.js"

document.querySelector('.submit').addEventListener('click', () => {
    event.preventDefault();

    const date = document.querySelector('#date-start').value;
    const loc = document.querySelector('#user-location').value;
    const todayDate = new Date().toJSON().slice(0, 10);

    if (date == '' || loc == '') {
        alert('Please enter a valid date and city');
    } else if (date < todayDate) {
        alert('Travel date has passed!');
    } else {
        handleSubmit(loc);
    }
});

document.querySelector('.btn-reset').addEventListener('click', ()=> {
    document.querySelector('.data-wrapper').style.display = 'none';
});

import './styles/base.scss'
import './styles/main.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/results.scss'
import './styles/media-screen.scss'

export { handleSubmit }