let express = require("express");
let models = require("./model");

// les routes seront créées avec un routers
const router = express.Router();

router.get("/", (req, res) => {res.send("Hello")});


// création d'un user
router.post("/user/signup", (req, res) => {
    let result = models.createUser(req.body);
    result.then(result => res.send("User inserted")).catch(error => res.end(error))

});


// connexion d'un utilisateur

router.post("/user/signin", (req, res) => {
    let result = models.createUser(req.body);
    result.then(result => res.send("User inserted")).catch(error => res.end(error))

});


// listing d'un user
router.get("/users", (req, res) => {
    let result_promise = models.listUsers(req.body);
    return result_promise.then(result => res.send(result))

});

// creation d'une publication

router.post("/user/post", (req, res) => {
    let result = models.createPublication(req.body);
    result.then(result => res.send("Post inserted")).catch(error => res.end(error))

});

// creation d'un commentaire

router.post("/user/post/comment", (req, res) => {
    let result = models.createComment(req.body);
    result.then(result => res.send("coment inserted")).catch(error => res.end(error))

});




module.exports = router;
