export let trips = {};

import { getLocation } from './locationApi'
import { getWeather } from './weatherApi'
import { getImage } from './imageApi'

/*Update UI */
export function updateUI (trips) {

    const countdown = trips.dates;
    const days = ( countdown === 1) ? 'day' : 'days';
    const imgUrl = trips.img.src;
    const temp = Math.round(trips.temp.temp);
    const endDate = document.querySelector('#date-end').value;
    const startDate = document.querySelector('#date-start').value;
    const getTripLength = diffDates(startDate, endDate);
    const today = new Date().getTime()
    const getCountdown = diffDates(today, startDate);

    document.querySelector('.data-wrapper').style.display = 'flex';  
    document.querySelector('.city').innerHTML = trips.coords.city;
    document.querySelector('.length').innerHTML = getTripLength;

    if (getTripLength > 1) {
        document.querySelector('.label-day').innerHTML = ' days';
    } else {
        document.querySelector('.label-day').innerHTML = ' day';
    }

    document.querySelector('.days').innerHTML = getCountdown + ' ' + days + ' ';
    document.querySelector('.img').src = imgUrl;    
    document.querySelector('.temps').innerHTML = 'Temperature is: ' + temp + '&deg;F';
       
}

function diffDates(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.floor((Date.UTC(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate()) - Date.UTC(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate()) ) /(1000 * 60 * 60 * 24));
};

export const handleSubmit = (loc) => {
    getLocation(loc).then((response) => {
        trips.coords = response;
        getWeather(trips)
        .then((resp) => {
            trips.temp = resp;
            getImage(loc)
            .then((respo) => {
                trips.img = respo;
                updateUI(trips)
            })
        })
    });
}