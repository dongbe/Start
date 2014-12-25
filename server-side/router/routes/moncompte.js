/**
 * Created by donatien-gbe on 23/12/14.
 */
var express = require('express');
var router = express.Router();

router.post('/', function(req,res){
    console.log(req.body);
    var body = req.body;
    res.json({
        // traitement de la requete vers serveur
        'msg':'success!'
    });
});

module.exports = router;