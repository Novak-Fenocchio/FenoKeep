const helpers = {};

helpers.isAuthenticated = (req, res, next) =>
{
    if(req.isAuthenticated())
    {
        return next();
    }
    req.flash("error_msg", "You must login.");          
    res.redirect('/users/signIn');
}

module.exports = helpers;