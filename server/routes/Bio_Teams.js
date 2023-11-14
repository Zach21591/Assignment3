var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let STeam = require('../models/Bio_Teams');
let TeamController = require('../controllers/Bio_Teams')
/* Get route for the Bio Books list */
// Read Operation
router.get('/', TeamController.DisplayTeamList);
/* Get route for Add Team page --> Create */
router.get('/add', TeamController.AddTeam); 
/* Post route for Add Team page --> Create */
router.post('/add', TeamController.ProcessTeam);
/* Get route for displaying the Edit Team page --> Update */
router.get('/edit/:id', TeamController.EditTeam);
/* Post route for processing the Edit Team page --> Update */
router.post('/edit/:id', TeamController.ProcessEditTeam);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', TeamController.DeleteTeam);
 module.exports = router;