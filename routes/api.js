const mongoose = require('mongoose');

app.post('/signup', (req, res) => {
  const { name, email, phone, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'User already registered' });
    } else {
      const user = new User({
        name,
        email,
        phone,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: 'User Successfully Registered' });
        }
      });
    }
  });
});
