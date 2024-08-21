

export const getDataDetails = (pokemon ) => {
    return fetch(pokemon.url)
    .then(response => response.json())
    .then(data => data)
    
}