import express from 'express';
var router = express.Router();
import bcrypt from 'bcryptjs';
import models from '../../models.js'

// // Sign up
router.post('/signup', async (req, res) => {
  try {
    let user = await models.User.findOne({email: req.body.email});
    if (user) return res.status(200).send({ error: 'Email already in use!' });
    req.body.password = await bcrypt.hash(req.body.password, 5);

    const userNew = await models.User.create(req.body);
    if (!userNew) {
      return res.status(200).send({ error: 'Unable to save user' });
    }
    return res.status(200).send(userNew);
  } catch (e) {
    return res.status(500).send({
      'error': e.message
    });
  }
})

// Login
router.post('/login', async(req, res) => {
  try {
    const user = await models.User.findOne({email: req.body.email});
    if (!user) return res.status(200).send({ error: 'User does not exist' });
    const pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) return res.status(200).send({ error: 'Invalid Username or Password' });
    const resPayload = {
      success: true,
    }
    return res.status(200).send(resPayload);
  } catch (e) {
    return res.status(500).send({
      'error': e.message
    });
  }
})

export default router;
