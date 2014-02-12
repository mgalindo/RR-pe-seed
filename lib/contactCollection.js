var pec = require('projevo-core'),
log = pec.Logger.getLogger(),
eventBus = pec.EventBus,
contactCollection = pec.Collection('contact', null, null);
// log: info, debug

module.exports = {
    get: function get(query, options){
        log.debug('Fetching contacts');
        return contactCollection.find(query, options);
    },
    
    save: function save(data){
        log.debug('Saving contact');
        return contactCollection.save(data).then(function(data){
            return data;
        });
    },
    
    remove: function remove(data){
        log.debug('Deleting contact')
        return contactCollection.remove(data);
    }
}
