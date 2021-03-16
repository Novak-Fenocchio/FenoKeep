const mongoose = require('mongoose');
const { db } = require('../../nodejs/components/message/model');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

console.log(MONGODB_URI);

mongoose.Promise = global.Promise; 
 mongoose.connect(MONGODB_URI,
{
        useNewUrlParser: true,
        useUnifiedTopology: true
}) 
.then(console.log('[db] connected corrrectlly'))
.catch(err => console.log(err));

