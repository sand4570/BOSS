import apiKey from '../config/api_key'

const apiUrl = 'https://bossinfo-f45f.restdb.io/rest/accounts';

export const accountsFetch = () => {
    fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey,
        }})
      .then((response) => response.json() )
      .then((data) => console.log(data));
}

