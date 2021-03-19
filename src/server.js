const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const morgan = require('morgan');
const methodOverrride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/* Settings */
app.set('port', process.env.PORT || 3001)
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');



/* middleware */
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(methodOverrride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/* Global variables */
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


/* Routes */
app.get('/', (req,res) => {
    res.render('index');
})

/* Static files */
app.use(express.static(path.join(__dirname,'public')))

module.exports = app;

