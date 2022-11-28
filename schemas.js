const Joi  = require('joi')
module.exports.sightSchema = Joi.object({
    sight: Joi.object({
        title:Joi.string().required(),
        image:Joi.string().required(),
        location:Joi.string().required(),
        description:Joi.string().required(),
    }).required()
});


