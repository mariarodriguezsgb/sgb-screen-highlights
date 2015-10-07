'use strict';

angular.module('sgb-screen-highlights', ['megazord'])
    .controller('sgb-screen-highlights-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams', function ($scope, _router, _screen, _screenParams, $stateParams) {
        _screen.initialize($scope, _screenParams);

        //Add your controller logic here.
    }]);