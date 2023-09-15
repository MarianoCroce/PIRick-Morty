const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"


 const getCharById = async (req, res) =>{
    try {
        const { id } = req.params;

        const { data } = await axios(`${URL}${id}`)// si pusimos mal la URL o el ID tira un error 500.
        if(!data.name) throw Error(`Le faltan propiedades al ID: ${id}`)// va a tirar un 404 cuando la propiedad nombre no exista.

            const character = {
                id: data.id,
                name: data.name ,
                gender: data.gender,
                species: data.species,
                origin: data.origin?.name,
                location: data.location?.name,
                image: data.image,
                status: data.status
            }
            return res.status(200).json(character)

    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
 
}


module.exports = getCharById



// const axios = require("axios");

// async function getCharById(req, res) {
//   try {
//   const { id } = req.params;
  
//   const url = "https://rickandmortyapi.com/api/character/";
//   const { data } = await axios(`${url}${id}`);
//   const { status, name, species, origin, image, gender } = data;
  
//     if (!name) {
//       return res.status(404).json(character);
      
//     }
//       const character = {
//         id: id,
//         status: status,
//         species: species,
//         origin: origin,
//         image: image,
//         gender: gender,
        
//       };
//     return res.status(200).json(character);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// axios
//   .get(`https://rickandmortyapi.com/api/character/${id}`)
//   .then((response) => {
//     const {id, status, name, species, origin, image, gender} = response.data;
//     name
//       ? res
//           .status(200)
//           .json({id, status, name, species, origin, image, gender})
//       : res.status(404).send("Not Found");
//   })
//   .catch((error) => {
//     res.status(500).json({message: error.message});
//   });

module.exports = getCharById;
