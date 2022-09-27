// Imports a "node fetch" //
const fetch = require('node-fetch');

// Create Module //
module.exports = {

    get: async function (params) {

        return fetch("https://akaneko-api.herokuapp.com/api/" + params)
            .then(res => res.json())
            .then(json => { return json });
    }
} 