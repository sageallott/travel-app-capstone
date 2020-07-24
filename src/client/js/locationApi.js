export const getLocation = (loc) => {
    let coords;
    const url = 'http://api.geonames.org/postalCodeSearchJSON?placename=' + loc + '&maxRows=10&username=' + 'sageallott';

    return fetch(url)
    .then((resp) => {
        return resp.json()
    }).then((data) => {
        coords = {
            lat: data.postalCodes[0].lat,
            lng: data.postalCodes[0].lng,
            countryCode: data.postalCodes[0].countryCode,
            city: data.postalCodes[0].placeName,
        }
        return coords;
    }).catch ((e) => {
        console.log(e);
    });
}