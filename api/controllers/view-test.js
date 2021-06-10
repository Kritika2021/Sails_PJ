module.exports = {


  friendlyName: 'View test page',


  description: 'Tets Page',


  exits: {

    success: {
      statusCode: 200,
      description: 'Testing Page',
      viewTemplatePath: 'pages/test'
    }
  },


  fn: async function () {

     return {};

  }


};
