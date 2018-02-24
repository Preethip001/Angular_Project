app.factory("userFactory",["$rootScope",function($rootScope){
    return{
        userFac:function(name){
            return "Hello "+name;
        }
    }
}]);