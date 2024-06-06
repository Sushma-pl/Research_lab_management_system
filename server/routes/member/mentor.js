// routes/api/alumni.js

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load Alumni model
const Mentor  = require('../../models/Mentor');

// @route GET /mentor/test
// @description tests Mentor route
// @access Public
router.get('/', (req, res) => {
   Mentor.find()
  .then(mentor => res.json(mentor))
  .catch(err => res.status(404).json({ nomentorfound: 'No Mentor found' }));
  
 });

// create a new mentor
router.post('/add',[
    body('name').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Mentor.create({
      name: req.body.name,
      post: req.body.post,
      mentor: req.body.mentor,
      description: req.body.description,
      googleScholar_link: req.body.googleScholar_link,
      linked_link: req.body.linked_link
  }).then(mentor => res.json(mentor));
  
  // can write a delete-alumni part also 
});



  module.exports = router;