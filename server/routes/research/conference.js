const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load Conference model
const Conference  = require('../../models/Conference');

// @route GET api/conference/test
// @description tests conference route
// @access Public
router.get('/', (req, res) => {
  Conference.find()
  .then(conference => res.json(conference))
  .catch(err => res.status(404).json({ noconferencefound: 'No Conference found' }));
  // console.log(req.body);
  // res.send('conference route testing!')
 });

// create a new conference
router.post('/add', (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Conference.create({
      name: req.body.name,
      abstract_date: req.body.abstract_date,
      submission_date: req.body.submission_date,
      notification_date: req.body.notification_date,
      event_date: req.body.event_date,
      location: req.body.location,
      core_rank: req.body.core_rank
  }).then(conference => res.json(conference));
  
  // can write a delete-conference part also 
});



  module.exports = router;