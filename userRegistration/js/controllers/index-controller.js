app.controller('RegistrationController',['$scope','userFactory','crudFactory',function($scope,userFactory,crudFactory){
    $scope.submitFormReg=function(){
        console.log($scope.user);
        crudFactory.post('/url',{
            name:$scope.user.username,
            password:$scope.user.password,
            age:$scope.user.age,
            email:$scope.user.email,
            mobile:$scope.user.mobile
        }).then(function(res){
            alert("Success");
        },function(err) {
            alert("error");
        });
    }


    $scope.welcomeMessage=userFactory.userFac("Preethi");
    $scope.countryList=[
        {
            "country_id":0,
            "country_name":'--Select--'
        },
        {
            "country_id":1,
            "country_name":'India'
        },
        {
            "country_id":2,
            "country_name":'Singapore'
        },
        {
            "country_id":3,
            "country_name":'Indonesia'
        },
        {
            "country_id":4,
            "country_name":'Sri Lanka'
        }
    ];

}]);