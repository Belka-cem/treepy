let http = require("http");
let url = require("url");
let database = require("./database");
let express = require("express");
let app = express();


// utilisation de knex

let knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        database: "Bdd_reseau_social"
    }
});

knex.select("*").from('User').then(result => console.log(result));

knex("User").insert({
  nom:"beka",
  prenom:"cem" ,
  sexe : "1",
  email: "@brr",

}).then(result => console.log(result)) ;



  // lancement server

  app.listen(8080);
  console.log("sernver en écoute");
