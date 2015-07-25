/**
* Events.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
      required: true
  	},
    description: {
      type: 'text',
      defaultsTo: 'No description provided'
    },
    // This is actually JSON formatted string
    location: {
      type: 'string',
      required: true
    },
    numNeeded: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },
    eventDate: {
      type: 'datetime',
      defaultsTo: new Date()
    },
    owner: {
      model: 'organizations',
      required: true
    }
  }
};

