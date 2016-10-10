/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
            $scope.newNote = {
                body: ""
            };

            $scope.addNote = function () {
                if ($scope.notes.length == 0)
                    $scope.newNote.id = 1;
                else
                    $scope.newNote.id = $scope.notes[$scope.notes.length - 1].id + 1;

                $scope.notes.push($scope.newNote);
                $scope.newNote = {};
                console.log($scope.notes);
            }

        }
    ]);