const User = require('../models/user')

module.exports.register=(req,res)=>{
    res.render('users/register');
}

module.exports.registerUser = async(req,res)=>{
    try{
        const {email ,username, password} =req.body
        const user = new User({email,username});
        const registerUser = await User.register(user,password);
        req.login(registerUser,err=>{
            if(err) return next(e);
            req.flash('success','welcome');
            res.redirect('/sights');
        })
        
        }
    catch(e){
        req.flash('error',e.message);
        res.redirect('register')
    }
}

module.exports.login = (req,res)=>{
    res.render('users/login');
}

module.exports.loginRedirect= (req, res) => {
    req.flash('success', 'welcome back!');
    res.redirect('/sights');
}



module.exports.logout = (req, res, next)=> {
    req.logout((e)=> {
      if (e)  return next(e);  
        req.flash('success', "Goodbye!");   
        res.redirect('/sights');
    });
  }