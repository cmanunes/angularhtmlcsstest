(function() {
    'use strict';

	ng.module('communityApp.community')
		.controller('CommunityController', CommunityController);
		
	/* @ngInject */
	function CommunityController($scope, $log, $sce, $http) {
		var page = 1, vm = this;
		$scope.alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		$scope.initQuantity = 18;
		$scope.quantity = 18;
		$scope.letter = "";
		$scope.showLoadMore = true;
		$scope.emailPopover = $sce.trustAsHtml('Email selected members');
		$scope.showCommunitiesInfoDiv = false;
		$scope.showSearchOptions = false;		
		
		activate();

		function activate() {
			$scope.showLoader = true;
			$scope.communityData = window.selOpts;
			
			getCommunityNames();
		}		
		
        function getCommunityNames() {
            vm.showLoader = true;
			//$http.get('names.json').then(getCommunityNamesSuccess, getCommunityNamesError);
            $scope.showLoader = false;
        }

        function getCommunityNamesSuccess(response) {
            $scope.communityData = response.data;
            $scope.showLoader = false;
        }

        function getCommunityNamesError(error) {
			$log.debug(error);
            $scope.showLoader = false;
        }
		
		$scope.filterCommunity = function(letter) {
			//TODO - implement hiding button when reaching end of results
			$scope.quantity = $scope.initQuantity;
			$scope.showLoadMore = true;
			$scope.query = letter;
			$scope.letter = letter;
		};
		
		$scope.customFilter = function(actual, expected) {
			if (expected.length === 0) {
				$scope.letter = "";
			}
			
			var lowerStr = (actual + "").toLowerCase();
			return lowerStr.indexOf(expected.toLowerCase()) === 0;
		};
		
		$scope.loadMore = function() {
			$scope.quantity = $scope.initQuantity * ++page;
		};
		
		$scope.showCommunitiesInfo = function() {
			$scope.showCommunitiesInfoDiv =  !$scope.showCommunitiesInfoDiv;
		}
		
		$scope.showSearchOptionsInfo = function() {
			$scope.showSearchOptions =  !$scope.showSearchOptions;
		}
	}
})();
