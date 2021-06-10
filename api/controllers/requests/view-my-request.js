module.exports = {


  friendlyName: 'View my request',


  description: 'Display "My request" page.',


  exits: {

    success: {
      responseType: "",
      //viewTemplatePath: 'pages/requests/my-request'
    }

  },


  fn: async function () {

   // sails.log.info("Request start time is : "+ req._startTime);
    sails.log.info("Request method is "+ this.req.method);
    // Respond with view.
    //return req._startTime;
     return res;
  }

};
