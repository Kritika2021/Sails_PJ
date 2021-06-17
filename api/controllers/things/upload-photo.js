
module.exports = {

  friendlyName: 'Upload PHoto',

  description: 'Upload Photo',

  files: ['photo'],

  inputs: {

    photo: {
      description: 'file upload.',
      type: 'ref'
    },
  },


  exits: {
    success: {
      description: 'New Photo uploaded successfully.',
      
    },

    noFileFound: {
      description: "No File Found to upload",
    },

 },


  fn: async function (inputs, exits) {

    // Upload the image.
    var info = await sails.upload(inputs.photo, {
      maxBytes: 3000000
    })
   

    if(!info) {
      return exits.noFileFound;
    }

    var imageSrc = sails.config.custom.baseUrl;  
    
    // Return the newly image file path
    return {
      imageSrc
    };

  }


};
