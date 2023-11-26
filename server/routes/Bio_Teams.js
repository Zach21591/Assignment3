var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let STeam = require('../models/Bio_Teams');
let TeamController = require('../controllers/Bio_Teams')
// helper method
let mongoose = require('mongoose');
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* Get route for the Bio Books list */
// Read Operation
router.get('/', TeamController.DisplayTeamList);
/* Get route for Add Team page --> Create */
router.get('/add', requireAuth, TeamController.AddTeam); 
/* Post route for Add Team page --> Create */
router.post('/add', TeamController.ProcessTeam);
/* Get route for displaying the Edit Team page --> Update */
router.get('/edit/:id', requireAuth, TeamController.EditTeam);
/* Post route for processing the Edit Team page --> Update */
router.post('/edit/:id', TeamController.ProcessEditTeam);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', requireAuth, TeamController.DeleteTeam);
 module.exports = router;