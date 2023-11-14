let mongoose = require('mongoose');

// create a model class
let sportsTeamModel = mongoose.Schema({
    TeamName:String,
    Founded:Number,
    KeyPlayers:String
},
{
    collection: "Teams"
});
module.exports = mongoose.model('STeam',sportsTeamModel);
