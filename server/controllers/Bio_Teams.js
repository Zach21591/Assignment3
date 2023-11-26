var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Team = require('../models/Bio_Teams');

module.exports.DisplayTeamList = async (req,res,next)=>{ //< Mark function as async
    try{
       const TeamList = await Team.find(); //< Use of await keyword
       res.render('team/list', {
          title: 'Team List', 
          TeamList: TeamList,
          displayName: req.user ? req.user.displayName:''
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('team/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddTeam = async (req,res,next)=>{
    try{
        res.render('team/add',
        {
            title:'Add Team',
            displayName: req.user ? req.user.displayName:''
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('team/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessTeam = async (req,res,next)=>{
    try{
        let newTeam = Team({
            "TeamName":req.body.TeamName,
            "Founded":req.body.Founded,
            "KeyPlayers":req.body.KeyPlayers
        });
        Team.create(newTeam).then(() =>{
            res.redirect('/teamlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('team/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditTeam = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const teamToEdit = await Team.findById(id);
    res.render('team/edit',
    {
        title:'Edit Team',
        Team:teamToEdit,
        displayName: req.user ? req.user.displayName:''
    })
}
catch(error){
    console.error(err);
    res.render('team/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditTeam = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedTeam = Team({
            "_id":id,
            "TeamName":req.body.TeamName,
            "Founded":req.body.Founded,
            "KeyPlayers":req.body.KeyPlayers
        });
        Team.findByIdAndUpdate(id,updatedTeam).then(()=>{
            res.redirect('/teamlist')
        });
    }
    catch(error){
        console.error(err);
        res.render('team/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteTeam = (req,res,next)=>{
    try{
        let id = req.params.id;
        Team.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/teamlist')
        })
    }
    catch(error){
        console.error(err);
        res.render('team/list',
        {
            error: 'Error on the server'
        });
    }
}