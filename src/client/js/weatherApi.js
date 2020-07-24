export const getWeather = (trips) => {
    let weather;
    const lat = trips.coords.lat;
    const lng = trips.coords.lng;
    const key = 'd09a00e279bd4120af10706e61ea1fdd';
    const url = 'https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' + lng+ '&key=' + key + '&units=I';

    return fetch(url)
    .then((resp) => {
        return resp.json()
    }).then((data) => {
        weather = {
            temp: data.data[0].temp
        }
        return weather;
    }).catch((e) => {
        console.log(e);
    });
}