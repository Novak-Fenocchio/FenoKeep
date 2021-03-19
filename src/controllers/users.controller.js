const usersCtrl = {};

const User = require('../models/User');
const passport = require('passport');

/* Sign up */
usersCtrl.renderSignUpForm = (req, res) =>{
    res.render('signUpForm');
}

usersCtrl.signUp = async(req, res) =>
{
    const errors = [];
    const { name, password, confirm_password, email } = req.body;
    
    if(password != confirm_password)
    {
        errors.push({text: 'Passwords dont match'})
    }
    
    if(errors.length > 0)
    {
        res.render('signUpForm', {errors, name, password, confirm_password, email});
    }else
    {
       const emailUser = await User.findOne({email: email});
       if(emailUser)
       {
           console.log('email used');
           req.flash("error_msg", "The Email is already in use.");          
           res.render('signUpForm', {name, password, confirm_password, email, message: 'Email is already in use'}) 
        }else{
           const newUser = new User({name: name, email: email, password: password});
            await newUser.save();
            res.redirect('/signInForm');
       }
    }
}

/* Log In */
usersCtrl.renderSignInForm = (req,res)=>
{
    res.render('signInForm');
}

usersCtrl.signIn = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true,
  });


/* Logout */
usersCtrl.logOut = (req, res) =>
{
    req.logout();
    res.redirect('/users/signIn');
}


module.exports = usersCtrl;