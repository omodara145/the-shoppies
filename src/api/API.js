const API_KEY = "e1d21db6"
const BASE_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

export const search = (QUERY) =>
    fetch(`${BASE_URL}&s=${QUERY}`)
        .then(res => res.json())
        .then(data => data)
