let todoAngular = angular.module('todoAngular', []);
todoAngular.controller('todoAngularController', todoAngularController);

todoAngularController.$inject = ['$scope'];

function todoAngularController($scope) {
    let objNews = [
        {task: 'test1'},
        {task: 'test111'},
        {task: 'test11'},
        {task: 'test1111'},
    ];
    let objDoings = [
        {task: 'test2'},
        {task: 'test22'},
        {task: 'test22'},
    ];
    let objDones = [
        {task: 'test3'},
        {task: 'test33'},
        {task: 'test333'},
    ];
    $scope.objNews = objNews;
    $scope.objDoings = objDoings;
    $scope.objDones = objDones;

    $scope.elChange = function(input){
        console.log(input);
    };

    $scope.addTask = function (inputText, type) {
        if (type === 'new' && inputText !== '') {
            objNews.push({task: inputText});
            $scope.inputTextNew = '';
        }
        if (type === 'doing' && inputText !== '') {
            objDoings.push({task: inputText});
            $scope.inputTextDoing = '';
        }
        if (type === 'done' && inputText !== '') {
            objDones.push({task: inputText});
            $scope.inputTextDone = '';
        }
    }
}