'use strict';

angular.module('sgb-screen-highlights', ['megazord'])
    .controller('sgb-screen-highlights-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams', function ($scope, _router, _screen, _screenParams, $stateParams) {
        _screen.initialize($scope, _screenParams);

        $scope.data=$stateParams.data;
        $scope.high=[];
        $scope.channelNShow=[];
        $scope.class;


        var loadingHigh = function () {
        	for (var i=0;i<$scope.data.length;i++){
	        	for (var j=0;j<$scope.data[i].shows.length;j++){
	        		if ($scope.data[i].shows[j].trending){
	        			$scope.channelNShow=[];
	        			$scope.channelNShow.push($scope.data[i].channel);
	        			$scope.channelNShow.push($scope.data[i].shows[j]);
	        			$scope.high.push($scope.channelNShow);
	        		}
	        	}
	        }
        }

        loadingHigh();

        $scope.convertTime = function (hours) {
        	var hour = Math.floor(hours);
        	var minutes = 60*(hours-hour);
        	return ("0" + hour).slice(-2)+':'+minutes;
        }

        var getQty = function () {
            switch ($scope.high.length) {
                case 1:
                    $scope.class= 1;
                    break;
                case 2:
                    $scope.class= 2;
                    break;
                default:
                    $scope.class= 3;
            }
        }

        getQty();
        
    }]);