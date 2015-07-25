/**
 * OrganizationController
 *
 * @description :: Server-side logic for managing organizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    Organizations.find().exec(function (err, orgs) {
      if (err) {
        return res.json(err);
      }
      return res.json(orgs);
    });
  },

  findOne: function (req, res) {
    console.log('find one');
    Organizations.find({id: req.params['id']}).exec(function (err, org) {
      if (err) {
        return res.json(err);
      }
      return res.json(org);
    });
  },

  create: function (req, res) {
    Organizations.create(req.body).exec(function (err, org) {
      if (err) {
        return res.json(err);
      }
      return res.json(org);
    })
  },
};

