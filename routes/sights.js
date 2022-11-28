const express = require('express');
const router = express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const {sightSchema } =require('../schemas.js');
const {isLoggedIn} =  require('../middleware')
const sights = require('../controllers/sights')


const validateSight = (req,res,next) =>{
    const {error} = sightSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg,400)
    }else{
        next();
    }   
}

router.route('/')
    .get(catchAsync(sights.index))
    .post(isLoggedIn,validateSight,catchAsync(sights.create ))

router.get('/new',isLoggedIn, sights.new)

router.route('/:id')
    .get(isLoggedIn,catchAsync(sights.show))
    .put(validateSight,catchAsync(sights.update))
    .delete(isLoggedIn,catchAsync(sights.delete))



router.get('/:id/edit',isLoggedIn,catchAsync(sights.edit))

module.exports = router;