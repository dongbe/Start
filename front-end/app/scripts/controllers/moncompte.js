'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoncompteCtrl
 * @description
 * # MoncompteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoncompteCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var moncompte,user;

    //creation d'un scope pour la page moncompte
    $scope.moncompte = moncompte = {};
    moncompte.user=user={};
    moncompte.submit = function () {

      //Control des champs de texte
      if (!user.firstname || !user.lastname || !user.email || !user.password1 || !user.password2) {
        alert('Please fill out all form fields.');
        return false;
      }

      // verifier que les passwords match
      if (user.password1 !== user.password2) {
        alert('Your passwords must match.');
        return false;
      }

      /*
        Faire la requete au serveur
       */
      var request = $http.post('/moncompte', user);

      request.success(function (data) {
        console.log(data);
      });

      request.error(function (data) {
        console.log(data);
      });
    };
  });
