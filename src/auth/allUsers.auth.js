const REGUSTER_MODEL=require("../Models/user.model")




async function allUsers(req, res) {
    let user=await REGUSTER_MODEL.findAll()
    res.json(user)
  };

  
module.exports = allUsers;