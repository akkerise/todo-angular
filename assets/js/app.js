let todoAngular = angular.module('todoAngular', []);
todoAngular.controller('todoAngularController', todoAngularController);

todoAngularController.$inject = ['$scope'];

function todoAngularController($scope) {

    $scope.elChange = function (input) {
        console.log(input);
    };

    $scope.list = list;

    $scope.addTask = function (inputText, type) {
        if (type === 'new' && inputText.trim() !== '') {
            if (!list[type]) list[type] = [];
            list[type].push(inputText);
            DB.setData(list);

            $scope.inputTextNew = '';
        }
        if (type === 'doing' && inputText.trim() !== '') {
            if (!list[type]) list[type] = [];
            list[type].push(inputText);
            DB.setData(list);

            $scope.inputTextDoing = '';
        }
        if (type === 'done' && inputText.trim() !== '') {
            if (!list[type]) list[type] = [];
            list[type].push(inputText);
            DB.setData(list);

            $scope.inputTextDone = '';
        }
    }


    $scope.delTask = function (index, type) {
        if (type === 'new') {
            list.new.splice(index, 1);
            index = Number(index);
            DB.setData(list);
        }
        if (type === 'doing') {
            list.doing.splice(index, 1);
            index = Number(index);
            DB.setData(list);
        }
        if (type === 'done') {
            list.done.splice(index, 1);
            index = Number(index);
            DB.setData(list);
        }
    }
}

let COLUMN_TYPE = ['new', 'doing', 'done'];
let DB = {
    getData: () => {
        if (typeof(Storage) !== 'undefined') {
            let data;
            try {
                data = JSON.parse(localStorage.getItem('list')) || {}
            } catch (error) {
                data = {};
            }
            return data
        } else {
            alert('Sorry! LocalStorage not support your browser ...')
            return {}
        }
    },
    setData: function (data) {
        localStorage.setItem('list', JSON.stringify(data))
    }
};
let list = DB.getData();