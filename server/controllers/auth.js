const passport = require('passport')


//Only for session auth
// exports.onlyAuthUser = function(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		return next()
// 	}

// 	return res.status(401).send({errors: {auth: 'Not Authenticated'}})
// }


exports.onlyAuthUser = passport.authenticate('jwt', {session: false})