/**
* Donations.js
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
  	donationTitle: {
  		type: 'string',
      required: true
  	},
  	targetCollection: {
  		type: 'integer',
      required: true
  	},
    achivedCollection: {
      type: 'integer',
      required: true
    },
    donationDesc: {
      type: 'text',
      defaultsTo: 'No description provided'
    }
  }
};

