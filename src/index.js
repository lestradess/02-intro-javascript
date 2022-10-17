const getImagen = async () => {
  try {
    const apiKey = "TWjNVrExyVVNEjTITwbau61EWtH7cnKA";
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await respuesta.json();

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //Manejo de error
  }
};

getImagen();

// peticion
// //import { heroes } from "./data/heroes";
// import { getHeroesById } from "./data/heroesFunctions";
//
//
//         .then( resp => resp.json() )
//         .then( ({ data }) => {
//             const { url } = data.images.original;

//             const img = document.createElement('img');
//             img.src = url;

//             document.body.append( img );

//     })
//     .catch(console.warn);

//     const peticion2 = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//     peticion2
//         .then( resp => resp.json() )
//         .then( ({ data }) => {
//             const { url } = data.images.original;

//             const img = document.createElement('img');
//             img.src = url;

//             document.body.append( img );

//         })
//         .catch( console.warn );
