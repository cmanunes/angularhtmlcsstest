window.ng = angular;

angular.module('communityApp.common', []);
angular.module('communityApp.community', []);

var communityApp = angular.module('communityApp', [
    'ui.router', 
	'ui.bootstrap', 
	'ngSanitize', 
	'ngResource', 
	'ngMessages', 
	'communityApp.common', 
	'communityApp.community'
]);
