'use strict';

/* Controllers */
/* TODO:
    * Move routing elsewhere or section off!

    *Fixed (Remove issue after next commit) - Injected empty location into tests. Now worknig properly.
    
    Perhaps now that projevo-core promises are understood we can move the contacts assignment somewhere else?
    
*/

angular.module('contactApp.controllers', ['contactApp.controllers.list', 'contactApp.controllers.edit']).
    value('com', "I bring controllers together");
  

