let knex = require('knex')(require('./knexfile').development);
let crypto = require("crypto");



/************************************User**********************************/

function getUser(email) {
  return knex("User").where({
    email: email
  })
}

function randomString() {
  return crypto.randomBytes(4).toString('hex')
}


/*function saltHashPassword(password) {
  const salt = randomString();
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password);
  return {
    salt,
    hash: hash.digest('hex')
  }
} */



function saltHashPassword ({ password,
  salt = randomString()
}) 
{
const hash = crypto
.createHmac('sha512', salt)
.update(password)
return {
salt,
hash: hash.digest('hex')
}
}
 




/*   `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `sexe` enum('M','F') NOT NULL,
  `email` varchar(50) NOT NULL,
  `naissance` date NOT NULL,
  `inscription` date NOT NULL,
  `mdp` varchar(250) NOT NULL
  */

function createUser(data) {
  console.log(`Add user ${data.email}`);
  const {
    salt,
    hash
  } = saltHashPassword(data.mdp);
  data.password = hash;
  data.salt = salt;
  let user_data = {
    nom: data.nom,
    prenom: data.prenom,
    sexe: data.sexe,
    email: data.email,
    naissance: data.naissance,
    inscription: data.inscription,
    mdp: data.password,
    salt: data.salt
  };
  return knex('User').insert(user_data).then(result => {
       if (result) {
            return knex('User').where({email: data.email}).limit(1);
       } else {
            throw Error("User not inserted")
      }
    });
} 

function listUsers(data) {
  return knex("User").where(data)
};

function authenticate({
  mail, password}) {
  console.log(`Authenticating mail ${email}`)
  return knex('User').where({email})
    .then(([user]) => {
      if (!user) return {
        success: false
      }
      const {
        hash
      } = saltHashPassword({
        password,
        salt: user.salt
      })
      return {
        success: hash === user.encrypted_password
      }
    })
}

/************************************Publication**********************************/


function createPublication(data) {
  let publication_data = {
    autheur: data.autheur,
    date_publication: data.date_publication,
    contenue: data.contenue,
    titre: data.titre,
    commentaire: data.commentaire,
    aime: data.aime
  };
  return knex('Publication').insert(publication_data).then(results => {
            if (results) {
                return data
            } else {
                throw Error("Publication not inserted")
            }
        }
    )
}

function listPublication(data){
  return knex("Publication").where(data)
}



/************************************commentaire**********************************/



function createComment(data) {
  let comment_data = {
    id_publication: data.id_publication,
    autheur: data.autheur,
    date_publication: data.date_publication,
    contenue: data.contenue,
  };
  return knex('commentaire').insert(comment_data).then(result => {
        return data
    })
}


function listCommentaire(data){
  return knex("commentaire").where(data)
}




module.exports = {
  getUser,
  createUser,
  listUsers,
  createPublication,
  createComment,
  authenticate

};
