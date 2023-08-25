const express = require("express");
const Router = new express.Router();
const Events = require('../Modules/eventModule')


Router.post('/create/event',async (req,res)=>{
    const dataEvent = new Events(req.body)
    try{
        await dataEvent.save();
        res.status(200).send({dataEvent})
    }catch(e){
        res.status(400).send(e)
        console.log('did not work! located in the create single method')
    }
})
Router.get('/fetch/events', async(req,res)=>{
    try{
        const events = await Events.find()
        res.status(200).send(events)
    }catch(e){
        res.status(400).send(e);
        console.log('did not work! located in fetch all method')
    }
})

Router.patch('/update/events', async(req,res)=>{
    try{
        res.status(200).send()
    }catch(e){
        res.status(400).send(e)
    }
})
Router.delete('/delete/event/:id',async(req,res)=>{
    try{
        res.status(200).send()
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = Router;