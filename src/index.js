require('dotenv').config();

const app = require('./server.js');
require('./database.js');
require('./config/password');

/* Routes */
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

app.listen(app.get('port'), ()=> {
    console.log('Works! on ' + app.get('port'));
});
