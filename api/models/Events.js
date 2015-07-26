/**
* Events.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    orgName: {
      type: 'string'
    },
    orgImgName: {
      type: 'string'
    },
  	eventTitle: {
  		type: 'string',
      required: true
  	},
    eventDesc: {
      type: 'text',
      defaultsTo: 'No description provided'
    },
    // This is actually JSON formatted string
    eventLocation: {
      type: 'string',
      required: true
    },
    numNeeded: {
      type: 'integer',
      defaultsTo: 10
    },
    numFriends: {
      type: 'integer',
      defaultsTo: 3
    },
    eventDate: {
      type: 'string',
      defaultsTo: 'Nov 11'
    },
    skills: {
      type: 'string',
      defaultsTo: 'IT support, Linux Admin'
    }
  }
};

