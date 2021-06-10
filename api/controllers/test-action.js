/**
 * Module dependencies
 */

// ...


/**
 * test-action.js
 *
 * Test action.
 */
module.exports = async function testAction(req, res) {

  sails.log(req.body());
  sails.log.debug('TODO: implement');
  return res.ok();

};
