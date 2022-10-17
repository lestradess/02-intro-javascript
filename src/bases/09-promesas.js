//import { heroes } from "./data/heroes";
import { getHeroesById } from "./data/heroesFunctions";
const apiKey = "TWjNVrExyVVNEjTITwbau61EWtH7cnKA"
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
peticion
        .then( resp => resp.json() )
        .then( ({ data }) => {
            const { url } = data.images.original;
            
            const img = document.createElement('img');
            img.src = url;
    
            document.body.append( img );
    
    })
    .catch(console.warn);

    const peticion2 = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

    peticion2
        .then( resp => resp.json() )
        .then( ({ data }) => {
            const { url } = data.images.original;
            
            const img = document.createElement('img');
            img.src = url;
    
            document.body.append( img );
    
    
        })
        .catch( console.warn );


