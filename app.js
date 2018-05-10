angular.module('myApp', [])
    .controller('AppController', function($scope){
        //save inputted user name
        $scope.username = '';
        //user list
        $scope.users = [];
        //hide alert
        $("#alertUsername").hide();


        //when register button is clicked, new username is stored in user list
       $scope.submit = function(){
            if(isEmpty($scope.username)){
                $("#alertUsername").show();
                $("#alertUsername").delay(4000).fadeOut('slow');
            }else{
                $scope.users.push({
                    username: $scope.username,
                    url: 'https://twitter.com/' + $scope.username
                });
            }
            $scope.username = '';
        };

        //when delete button is clicked, the item is deleteted
        $scope.deleteUser = function(index){
            $scope.users.splice(index, 1)
        }

    });


function isEmpty(str) {
    return (!str || 0 === str.length);
}