const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load Seminar model
const Seminar  = require('../../models/Seminar');

// @route GET api/seminar/test
// @description tests seminar route
// @access Public
router.get('/', (req, res) => {
  Seminar.find()
  .then(seminar => res.json(seminar))
  .catch(err => res.status(404).json({ noseminarfound: 'No Seminar found' }));
  // console.log(req.body);
  // res.send('seminar route testing!')
 });

// create a new seminar
router.post('/add', (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Seminar.create({
      topic: req.body.topic,
      organizer: req.body.organizer,
      type_of_seminar: req.body.type_of_seminar,
      date: req.body.date
  }).then(seminar => res.json(seminar));
  
  // can write a delete-seminar part also 
});



  module.exports = router;