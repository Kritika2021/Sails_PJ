module.exports = {


    friendlyName: 'Destroy one thing',
  
  
    description: 'Delete a thing that is no longer borrowable.',
  
  
    inputs: {
  
      id: {
        description: 'The id of the thing to destroy',
        type: 'number',
        required: true
      },
  
    },
  
  
    exits: {
  
      notFound: {
        responseType: 'notFound'
      },
  
      forbidden: {
        responseType: 'forbidden'
      },
  
    },
  
  
    fn: async function ({id}) {
  
      var thingToDestroy = await Thing.findOne({ id });
      // Ensure the thing still exists.
      if(!thingToDestroy) {
        throw 'notFound';
      }
      
      // Archive the record.
      var result = await Thing.archiveOne({ id });
      console.log("Deleted Thing is", result);


      return result;
    }
  
  };
  