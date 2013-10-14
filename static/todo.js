var app = angular.module("mvc-module", []);
app.directive('compileData', function ($compile) {
    return {
        scope: true,
        link: function (scope, element, attrs) {
            var elmnt;
            attrs.$observe('template', function (myTemplate) {
                if (angular.isDefined(myTemplate)) {
                    // compile the provided template against the current scope
                    elmnt = $compile(myTemplate)(scope);

                    element.html("");

                    element.append(elmnt);
                }
            });
        }
    };
});
//app.config(function ($routeProvider) {
//    $routeProvider.
//        when('/', {controller: InitCtrl, template: '<div ng-controller="InitCtrl" ng-bind-html-unsafe="mainPage"></div>'}).
////            when('/', {controller: LoginCtrl, template: '<div  ng-bind-html-unsafe="mainPage"</div>'}).
////        when('/loged', {controller: TodoCtrl, template: '<div ng-bind-html-unsafe="mainPage"</div>'}).
//        otherwise({redirectTo: '/'});
//});


function InitCtrl($scope, $http) {

    $scope.todos = [];
    $scope.addTodo = function () {
        var item = {done: $scope.done, text: $scope.todoText};
        $http.post("addTodo", item).success(
            function (data, status, headers, config) {
                console.log("Successfully added!");
//                fill(data);

            }).error(
            function (data, status, headers, config) {

            }
        );
        $scope.todos.push(item);
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {

        $http.post("archive", $scope.todos).success(
            function (data, status, headers, config) {
//                console.log(data);
                $scope.todos = data;
            }).error(
            function (data, status, headers, config) {

            }
        );
        var tempTodo = $scope.todos;

        for (var i = 0; i < tempTodo.length; i++) {
            if (tempTodo.done) {
                tempTodo.remove(i);
            }
            $scope.todo = tempTodo;
        }
    };

    $http.post("getTodos").success(
        function (data, status, headers, config) {
//            console.log("data is " + data);
            $scope.todos = data;
        });

//    $scope.fillTodos = function () {
//
//    };


//    function fill(data) {
//        $scope.todos = [];
//        angular.forEach(data, function (item) {
//            console.log(item);
//            $scope.todos.push(item);
//        });
//    }

    $scope.login = function () {
        console.log("In login!");
        $http.post("login", {password: $scope.password, username: $scope.username}).
            success(function (data, status, headers, config) {
                $scope.mainPage = data;
                console.log("successfully logged to login");
            }).error(function (data, status, headers, config) {
                console.log("error in post");
            });
    };

    $http.get("login").success(function (data, status, headers, config) {
        $scope.mainPage = data;
    });
}