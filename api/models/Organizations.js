/**
* Organization.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    iconUrl: {
      type: 'string'
    },
    bankName: {
      type: 'string',
      required: true
    },
    bankAccountNum: {
      type: 'string',
      required: true,
      unique: true
    },
    description: {
      type: 'text',
      defaultsTo: 'No description provided'
    },
    donations: {
      collection: 'donations',
      via: 'owner'
    },
    events: {
      collection: 'events',
      via: 'owner'
    }
  }
};

