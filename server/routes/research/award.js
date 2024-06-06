const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load Award model
const Award  = require('../../models/Award');

// @route GET api/award/test
// @description tests award route
// @access Public
router.get('/', (req, res) => {
  Award.find()
  .then(award => res.json(award))
  .catch(err => res.status(404).json({ noawardfound: 'No Award found' }));
  // console.log(req.body);
  // res.send('award route testing!')
 });

// create a new award
router.post('/add', (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Award.create({
      name_of_award: req.body.name_of_award,
      recipient: req.body.recipient,
      description: req.body.description,
      date: req.body.date
  }).then(award => res.json(award));
  
  // can write a delete-award part also 
});



  module.exports = router;