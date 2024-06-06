// routes/api/visitor.js

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load visitor model
const Visitor  = require('../../models/Visitor');

// @route GET api/visitor/test
// @description tests visitor route
// @access Public
router.get('/', (req, res) => {
  Visitor.find()
  .then(visitor => res.json(visitor))
  .catch(err => res.status(404).json({ novisitorfound: 'No visitor found' }));
 });

// create a new visitor
router.post('/add',[
    body('name').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Visitor.create({
      name: req.body.name,
      affiliation: req.body.affiliation,
      visit_date: req.body.visit_date,
      website: req.body.website
  }).then(visitor => res.json(visitor));
  
  // can write a delete-visitor part also 
});



  module.exports = router;