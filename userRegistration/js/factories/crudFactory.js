app.factory("crudFactory",['$rootScope','$http','$q',function($rootScope,$http,$q){
    var base_url='http://localhost:8080/api';
    return{
        post:function(url,user_data){
            var deferred=$q.defer();//Asynchronous request to server
            $http({
                method:'post',
                url:'base_url'+url,
                data:user_data
            }).success(function(res){
                deferred.resolve(res);
            }).error(function(err){
                deferred.reject(err);
            });
            return deferred.promise;//Asynchronous request to server
        }
    }
}]);