const generateAccessToken = require("../helpers/generateAccessToken");
const sendVerifyEmail = require("../helpers/sendMail");
const { userModel } = require("../models/User.model");
const bcrypt = require('bcrypt');
require('dotenv').config()
var jwt = require('jsonwebtoken');

const userController = {
  getAll: async (req, res) => {
    const users = await userModel.find();
    if (users.length > 0) {
      res.status(200).send({
        message: "success",
        data: users,
      });
    } else {
      res.send({
        message: "not found",
        data: null
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let user;
    try {
      user = await userModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (user) {
      res.status(200).send({
        message: "success",
        data: user,
      });
    } else {
      res.send({
        message: "no content",
        data: null,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    let response;
    try {
      response = await userModel.findByIdAndDelete(id);
    } catch (error) {
      res.send({
        error: error
      });
    }
    res.send({
      message: "deleted",
      response: response,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const response = await userModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    try {
      const { userName, email } = req.body
      // const dublicateUserName = await userModel.find({ userName: userName })
      const dublicateEmail = await userModel.find({ email: email })
      let message = ''
      // if (dublicateUserName.length > 0) {
      // message = 'username already exists';
      // }
      if (dublicateEmail.length > 0) {
        message = 'Email already exists!';
      }
      if (message.length > 0) {
        res.send({
          error: true,
          message: message,
        })
      }
      else {
        let newUser = { ...req.body }
        let saltRounds = 10;
        bcrypt
          .genSalt(saltRounds)
          .then((salt) => bcrypt.hash(req.body.password, salt))
          .then(async (hash) => {
            console.log('hash: ', hash)
            newUser.password = hash
            newUser.src = 'http://localhost:8080/uploads/' + req.file.filename
            const user = new userModel(newUser);
            const token = jwt.sign({ email: newUser.email, password: newUser.password }, process.env.PRIVATE_KEY)
            sendVerifyEmail(newUser.email, token)
            await user.save();
            res.send({
              message: "posted",
              error: false,
              data: user,
            })
          })
      }

    } catch (error) {
      res.status(500).send({

        message: error,
        error: true
      })
    }

  },
  login: async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email })
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, response) {
        if (response) {
          if (user.isVerified == true) {
            const token = generateAccessToken(user)
            res.send({
              message: "Signed in successfully!",
              auth: true,
              user: user,
              token: token
            })
          }
          else {
            res.send({
              message: "Verify your email!",
              auth: false
            })
          }
        }
        else {
          res.send({
            message: "Email or password is incorrect!",
            auth: false
          })
        }
      });


    }
    else {
      res.send({
        message: "No such user",
        auth: false
      })
    }
  },
  verify: async (req, res) => {
    const { token } = req.params
    const validToken = jwt.verify(token, process.env.PRIVATE_KEY)
    if (validToken) {
      const { email } = validToken
      const user = await userModel.findOne({ email: email })
      if (user) {
        await userModel.findByIdAndUpdate(user._id, { isVerified: true })
        res.redirect('http://localhost:5173/sign-in')
        return
      }
      else {
        res.send({
          message: 'No such user'
        })
      }
    }
    else {
      res.send({
        message: 'Invalid Token',
        auth: false
      })
    }
  }

};

module.exports = { userController };