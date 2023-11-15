let mongoose = require('mongoose');

// create a model class for the sports teams in my mongodb
let sportsTeamModel = mongoose.Schema({
    TeamName:String,
    Founded:Number,
    KeyPlayers:String
},
{
    //makes the webpage know what collection to look at
    collection: "Teams"
});
module.exports = mongoose.model('STeam',sportsTeamModel);
