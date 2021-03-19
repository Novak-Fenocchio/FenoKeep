const mongoose = require('mongoose');
const { db } = require('../../nodejs/components/message/model');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

console.log(MONGODB_URI);

mongoose.Promise = global.Promise; 
 /* mongoose.createConnection(MONGODB_URI, */
mongoose.connect('mongodb+srv://user:user123@telegrom.yqdqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
}) 
.then(console.log('[db] connected corrrectlly'))
.catch(err => console.log(err));

