import User from './user.model';

export const createOne = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }, (err, result) => {
    console.log(result);
    console.log(!result);
    if (!result) {
      const user = new User({
        name,
        email,
        password
      });
      user.save()
        .then(() => res.json({ user }))
        .catch(error => res.json({ error }));
    } else {
      res.json({ message: ' This is the email duplicate' });
    }
  });
};

export const getOne = (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  User.findById(userID, (err, user) => {
    if (err) res.status(500).json({ server: false });
    res.json({ user });
  });
};
