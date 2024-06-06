const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load Publication model
const Publication  = require('../../models/Publication');

// @route GET api/publication/test
// @description tests publication route
// @access Public
router.get('/', (req, res) => {
  Publication.find()
  .then(publication => res.json(publication))
  .catch(err => res.status(404).json({ nopublicationfound: 'No Publication found' }));
  // console.log(req.body);
  // res.send('publication route testing!')
 });

// create a new publication
router.post('/add', (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Publication.create({
      title: req.body.title,
      authors: req.body.authors,
      journal_or_conference: req.body.journal_or_conference
  }).then(publication => res.json(publication));
  
  // can write a delete-publication part also 
});



  module.exports = router;