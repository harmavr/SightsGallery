module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        
        req.flash('error','u must be signed in');
        return res.redirect('/login');
    }
    next();
}