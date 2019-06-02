/*const knex = require(“knex”);

knex(‘User’).select(“*”).then(results => console.log(results)); */



const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        database: "Bdd_reseau_social"
    }
});

knex.select("*").from('User')
        .then(result => console.log(result));
