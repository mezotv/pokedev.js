const { getPokemonRandom } = require("@rtgamingwdt/pokeapi");
const { getPokemonByID } = require("@rtgamingwdt/pokeapi");
const { getPokemonByName } = require("@rtgamingwdt/pokeapi");

const run = async () => {
    const pokemon = await getPokemonRandom();
    console.log(pokemon);
}

run();