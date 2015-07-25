/**
* Donations.js
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
  	amountNeeded: {
  		type: 'integer',
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
    owner: {
      model: 'organizations',
      required: true
    }
  }
};

