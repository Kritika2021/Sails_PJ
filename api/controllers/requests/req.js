
module.exports = async function welcomeUser (req, res) {

  // Get the `userId` parameter from the request.
  // This could have been set on the querystring, in
  // the request body, or as part of the URL used to
  // make the request.
  var userId = req.param('userName');
  sails.log(req.body());
 
}
