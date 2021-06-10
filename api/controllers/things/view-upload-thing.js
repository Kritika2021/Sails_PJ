module.exports = {


  friendlyName: 'View upload thing',


  description: 'Display "Upload thing" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/upload-thing'       
    }

  },


  fn: async function () {
  
    // Respond with view.
     return {};

  }


};
