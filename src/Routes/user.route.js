"use strict";
const express = require("express");


const SignUp=require("../auth/signup.auth");
const Signin=require("../auth/signin.auth");
const AllUsers = require ("../auth/allUsers.auth");

const {Users} = require("../Models/index");

const usersRouter = express.Router();

usersRouter.post("/signup", SignUp);
usersRouter.post("/signin", Signin);
usersRouter.get("/users", AllUsers);


// async function allUsers (req, res){
    
//         const allUsers = await users.findAll();
//         res.status(200).json(allusers);
 


// }

//  async function SignUp (req, res){
//   try {
//         let username = req.body.username;
//         let valid = await Users.findOne({ where: { username: username } });
//         if (valid) {
//             res.status(500).send("username is already exists");
//         } else {
            
        
//       let password = await bcrypt.hash(req.body.password, 10);

//       console.log('username', username);
//       console.log('password', password);

//       const record = await Users.create({
//           username: username,
//           password: password,
//       })
//       res.status(201).json(record);
//     }
//   } catch (e) {
//       throw new Error('signup error');
//   }
// };

// async function Signin(req, res) {
//   if (req.headers.authorization) {
//       //Basic YWhtYWQ6YWhtYWQxMjM=
//       let basicHeaderParts = req.headers.authorization.split(" ");
//       //basicHeaderParts = ['Basic','YWhtYWQ6YWhtYWQxMjM=']

//       let encoded = basicHeaderParts[1];
//       //encoded = 'YWhtYWQ6YWhtYWQxMjM='

//       let decoded = base64.decode(encoded);
//       //decoded = "username:password"
//       let username = decoded.split(":")[0];
//       let password = decoded.split(":")[1];

//       /* let [username,password] = decoded.split(":");*/
//       try {
//           const user = await Users.findOne({ where: { username: username } });
//           const valid = await bcrypt.compare(password, user.password);
//           if (valid) {
//               res.status(200).json({
//                   user
//               });
//           } else {
//               res.status(500).send("Invalid username or password");
//           }
//       } catch {
//           res.status(500).send("app error");
//       }
//   }
// };


module.exports = usersRouter;