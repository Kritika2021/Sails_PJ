
module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',

  exits: {

    success: {
      responseType :""
      //viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function (inputs, exits) {
    
    // var record = await Thing.create({label:'Label One'});
    // sails.log("Thing created : "+ record);

    var things = await Thing.find();

    console.log(this.req.method);
    //res.type('application/json');
    //res = JSON.stringify(things);
    return exits.success({ 
      things : things
    })
    // return {
    //   things : things
    // } 
    
    //return res.status(200).json(things);
    //res.send('I am a tapper');
    //return res.status("200");
  }


};
