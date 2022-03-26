const config = require("../../resource/PokeList");
const getPokemonByID = require("./getPokemonByID")

module.exports = async function getPokemonRandom() {
    const id = Math.floor(Math.random() * ((config.length - 1) - 1 + 1) + 1);

    const data = await getPokemonByID(id);
    
    return data;
}
