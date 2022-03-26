const config = require("../../resource/PokeList");

module.exports = async function getPokemonByName(name) {
    let data;

    if (!(isNaN(name))) {
        return console.log("Looks like you put an integer for the name instead of an string. If you would like to search for a pokemon via id. Consider using the getPokemonByID method")
    } else {
        data = config.find((p) => p.name === `${name.charAt(0).toUpperCase() + name.slice(1)}`);
    }

    if (!data) data = config[0];

    if (!data.forms) data.forms = [
        null,
        null
    ]

    const formIndex = Math.floor(Math.random() * ((data.forms.length - 1) - 0 + 1) + 0);

    return {
        name: `${data.name}`,
        id: `${data.id}`,
        form: `${data.forms[formIndex]}`
    };
};