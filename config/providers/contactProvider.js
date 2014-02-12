// contactProvider corresponds to contactCollection in this local project's lib
// Provide logic here for that collection
var log = require('projevo-core').Logger.getLogger(),
Q = require('q'),
// promises promises
collection = require('./../../lib/contactCollection.js');
// Collection available functions: [find, get, getById, getURL, update, remove, aggregate, save]

module.exports = {
  type: 'Socket',
  services: {
    getContacts: {
        handler: function(queryObj){
            // options should look like {"sort": ['name', 'asc']}
            var filter = queryObj.filter;
            var options = queryObj.options;
            console.log("Filters: %s, Options: %s", filter, options);
            return collection.get(filter, options);
        }
    },
    saveContact: {
        handler: collection.save
    },
    removeContact: {
        handler: collection.remove
    }
  },
  emitters: {
    events: []
  }
};


