/**
 * DonationsController
 *
 * @description :: Server-side logic for managing donations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    Donations.find().exec(function (err, donations) {
      if (err) {
        return res.json(err);
      }
      return res.json(donations);
    });
  },

  findOne: function (req, res) {
    Donations.find({id: req.params['id']}).exec(function (err, donation) {
      if (err) {
        return res.json(err);
      }
      return res.json(donation);
    });
  },

  find: function (req, res) {
    Donations.find(req.query).exec(function (err, donations) {
      if (err) {
        return res.json(err);
      }
      return res.json(donations);
    });
  },

  create: function (req, res) {
    Donations.create(req.body).exec(function (err, donation) {
      if (err) {
        return res.json(err);
      }
      return res.json(donation);
    });
  },
};

