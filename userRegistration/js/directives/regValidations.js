app.directive('validPassword',function(){
    return{
        require:"ngModel",
        link:function(scope,element,attribute,ctrl){
            ctrl.$parsers.push(function(){
                var noMatch=scope.profileForm.reTypePassword.$viewValue===scope.profileForm.password.$viewValue;
                scope.profileForm.password.$setValidity('noMatch',noMatch);
                scope.profileForm.reTypePassword.$setValidity('noMatch',noMatch);
                return noMatch?noMatch:!noMatch;

            });
        }
    };
});