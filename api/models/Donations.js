/**
* Donations.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string'
  	},
  	amountNeeded: {
  		type: 'integer'
  	},
    // This is actually JSON formatted string
    localtion: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime',
      defaultsTo: new Date()
    },
    owner: {
      model: 'organizations'
    }
  }
};

