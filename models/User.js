var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var validateEmail = function(email) {

    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return re.test(email)

};

var userSchema = new Schema({

  full_name: { type: String,  required: [true, 'Full name must be provided'] },

  email:    {

    type: String,

    Required:  'Email address cannot be left blank.',

    validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: {unique: true, dropDups: true}

    },

  password: { type: String , required: [true,  'Password cannot be left blank']},

  dob: { type: Date , required: [true, 'Date of birth must be provided']},

  country: { type: String , required: [true, 'Country cannot be left blank.']},

});

module.exports = mongoose.model('Users', userSchema);
Mongoose is included using require. A schema is created using mongoose.schma. Next, there is an email validation utility method. After this method, UserSchma is created.

Inside user schema fields like full_name, email. password, date of birth, country, gender, food preference like calorie and salt are added as string data types with validations and messages. In the last, userSchema is exported using modules.export so other modules can use it.

Update layout.js file in views
Before coding part let us first create HTML form to take user data. Open Views folder, open layout.pug file, replace existing code with the code below.

doctype html

html

  head

    title= title

    link(rel='stylesheet', href='/stylesheets/style.css')

    link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css")

  body

    block content

    script(src='http://code.jquery.com/jquery-3.3.1.min.js')

    script(src='/javascripts/app.js')