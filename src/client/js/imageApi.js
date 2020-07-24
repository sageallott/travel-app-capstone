export const getImage = (city) => {
    let img;
    city = city.replace(/\s/g, '+');
    const key = '17523475-b889a51482c3ab74476c6df59';
    const url =  'https://pixabay.com/api/?key=' + key + '&q='+ city + '&image_type=photo&pretty=true&category=places';
    
    return fetch(url)
    .then((data) => {
        return data.json()
    }).then((data) => {
        if (data.totalHits > 0) {
            img = {
                src: data.hits[0].largeImageURL
            }
            return img;
        } else {
            img = {
                src: ''
            }
            return img;
        }
    })
}