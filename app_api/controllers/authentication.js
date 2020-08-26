var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.register = function(req,res) {
    User.findOne({ 'email': req.body.email },function(err, person) 
    {
        console.log("before working");
        if(err) return handleError(err); 

        if(person){
            console.log(person);
            res.status(404).json({
                "message": "User Already exists"
            });

        }
        else{
            var user = User();
            user.name = req.body.name;
            user.email = req.body.email;

            user.setPassword(req.body.password);

            user.save(function(err){
                var token;
                token = user.generateJwt();
                res.status(200);
                res.json({
                    "token": token
                });
            });
        }
});
};

module.exports.login = function(req,res) {

    passport.authenticate('local', function(err, user, info){
        var token;

        if(err){
            res.status(404).json(err);
            return;
        }
        //If user is found then generate token for the client/user to further make his requests to the server
        if(user){
            token = usr.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });
        }
        else{
            //If user is not found
            res.status(401).son(info);
        }
        
    })(req,res);
};