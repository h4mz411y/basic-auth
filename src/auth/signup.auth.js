"use strict";

const bcrypt = require('bcrypt');
const base64 = require('base-64');
 const signupModel = require ('../Models/user.model');

 async function Signup(req, res) {
      if (req.headers.authorization) {
          //Basic YWhtYWQ6YWhtYWQxMjM=
          let basicHeaderParts = req.headers.authorization.split(" ");
          //basicHeaderParts = ['Basic','YWhtYWQ6YWhtYWQxMjM=']
    
          let encoded = basicHeaderParts[1];
          //encoded = 'YWhtYWQ6YWhtYWQxMjM='
    
          let decoded = base64.decode(encoded);
          //decoded = "username:password"
          let username = decoded.split(":")[0];
          let password = decoded.split(":")[1];
    
          /* let [username,password] = decoded.split(":");*/
          try {
              const user = await signupModel.findOne({ where: { username: username } });
              const valid = await bcrypt.compare(password, user.password);
              if (valid) {
                  res.status(200).json({
                      user
                  });
              } else {
                  res.status(500).send("Invalid username or password");
              }
          } catch {
              res.status(500).send("app error");
          }
      }
    };

    
module.exports = Signup;