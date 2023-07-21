const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { URI } = require('./config/keys.js');
const { CHATBOT_KEY } = require('./config/keys.js');
const { Configuration, OpenAIApi } = require('openai');

// require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('successfully connected to the server');
});
mongoose.connection.on('error', (err) => {
  console.log('successfully connected to the server', err);
});

//Set up OpenAI endpoint
const configuration = new Configuration({
  apiKey: process.env.CHATBOT_KEY,
});
const openai = new OpenAIApi(configuration);
app.post('/chatai', async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 2048,
  });
  res.send(completion.data.choices[0].text);
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  { timestamps: true }
);
const User = new mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(201).send({
            message: 'User Created Successfully',
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: 'Error creating user',
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      res.status(500).send({
        message: 'Password was not hashed successfully',
        e,
      });
    });
});

app.post('/login', (req, res) => {
  // check if email exists
  User.findOne({ email: req.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(req.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return res.status(400).send({
              message: 'Passwords does not match',
              error,
            });
          }
          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            'RANDOM-TOKEN',
            { expiresIn: '24h' }
          );
          //   return success response
          res.status(200).send({
            message: 'Login Successful',
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          res.status(400).send({
            message: 'Passwords does not match',
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: 'Email not found',
        e,
      });
    });
});

app.listen(5000, () => {
  console.log('server started on port 5000' + { PORT });
});
