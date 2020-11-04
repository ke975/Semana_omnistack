const {Router} = require('express')
const axios = require('axios')
const routes =Router()

 routes.post('/devs', async function(req,res){
    
    const {github_username} = req.body
 const response = await axios.get(`https://api.github.com/users/${github_username}`)

  console.log(response)
    return res.json('{message:hello omnistack}')
})




module.exports= routes;