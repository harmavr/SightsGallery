const Sight = require('../models/sight');

module.exports.index = async(req,res)=>{
    const sights = await Sight.find({});
    res.render('sights/index',{sights});
}

module.exports.new= (req,res)=>{
    res.render('sights/new');
}

module.exports.create = async(req,res,next)=>{
    const sight = new Sight(req.body.sight);
    sight.author = req.user._id;
    await sight.save();
    req.flash('success','New sight created!!')
    res.redirect(`/sights/${sight._id}`)    
}

module.exports.show =async (req,res)=>{
    const sights = await Sight.findById(req.params.id).populate('author');
    if(!sights){
        req.flash('error','sight doesnt exists!!!');
        return res.redirect('/sights');
    }
    res.render('sights/show',{sights});
}

module.exports.edit = async(req,res)=>{
    const {id} = req.params;
    const sights = await Sight.findById(id)
    if(!sights){
        req.flash('error','sight doesnt exists!!!');
        return res.redirect('/sights');
    }
    if(!sights.author.equals(req.user._id)){
        req.flash('error','you dont have permission');
        res.redirect(`/sights/${sights._id}`)
    }
    res.render('sights/edit',{sights});
}

module.exports.update= async(req,res)=>{
    const {id} = req.params;
    const sights = await Sight.findById(id)
    if(!sights.author.equals(req.user._id)){
        req.flash('error','you dont have permission');
        res.redirect(`/sights/${sights._id}`)
    }
    const sight = await Sight.findByIdAndUpdate(id,{...req.body.sight} );
    req.flash('success','sight successfully upgrated!!')
    res.redirect(`/sights/${sight._id}`)
}

module.exports.delete = async(req,res)=>{
    const {id} = req.params;
    const sights = await Sight.findById(id)
    if(!sights.author.equals(req.user._id)){
        req.flash('error','you dont have permission');
        res.redirect(`/sights/${sights._id}`)
    }
    await Sight.findByIdAndDelete(id);
    req.flash('success','sight deleted!!')
    res.redirect('/sights');
}