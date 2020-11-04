const mongosse = require('mongoosse')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio:String,
    avatar_url: String,
    techs:[String],
});

module.exports = mongosse.model('Dev',DevSchema);

