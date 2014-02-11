angular.module('app.filters.translate', [ 'ngTranslate' ]).filter('translate',
		[ '$translate', function($translate) {
			return function(key) {
				return $translate[key] || key;
			};
		} ]);