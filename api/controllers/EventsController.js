/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    Events.find().exec(function (err, events) {
      if (err) {
        return res.json(err);
      }
      return res.json(events);
    });
  },

  findOne: function (req, res) {
    Events.find({id: req.params['id']}).exec(function (err, event) {
      if (err) {
        return res.json(err);
      }
      return res.json(event);
    });
  },

  find: function (req, res) {
    Events.find(req.query).exec(function (err, events) {
      if (err) {
        return res.json(err);
      }
      return res.json(events);
    });
  },

  create: function (req, res) {
    Events.create(req.body).exec(function (err, event) {
      if (err) {
        return res.json(err);
      }
      return res.json(event);
    });
  },
};

