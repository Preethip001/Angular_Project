app.controller('IndexController',['$scope',function($scope){
	$scope.message="Hello Angular";
	
	$scope.postData=function(){
		//alert($scope.username);
		$scope.retMessage = "Hi "+$scope.username;
	}
	$scope.languages=[
	{
		"name":"JavaScript",
		"version":"1.0"
	},
	{
		"name":"PHP",
		"version":"5.5"
	},
	{
		"name":"AngularJS",
		"version":"1.4"
	}
	];
	
	$scope.products=[
		{
			"product_id":1,
			"product_name":"Dell I15",
			"product_description":"Intel i5 Inspiron 5000 series",
			"product_image":"images/rose.jpg",
			"product_price":30000
		},
		{
			"product_id":2,
			"product_name":"Dell I17",
			"product_description":"Intel i7 Inspiron 7000 series",
			"product_image":"images/2.jpg",
			"product_price":40000
		},
		{
			"product_id":3,
			"product_name":"MacPro",
			"product_description":"Apple iOS 256GB",
			"product_image":"images/1.jpg",
			"product_price":60000
		}
	];
	
	$scope.cart=[];
	
	$scope.addToCart=function(productIndex){
		$scope.cart.push($scope.products[productIndex]);
		$scope.products[productIndex].disable=true;
		
	};
	
	$scope.removeFromCart=function(itemIndex){
		$scope.cart[itemIndex].disable=false;
		$scope.cart.splice([itemIndex],1);
		
	};
	
	$scope.getCartTotal=function(){
		var total=0;
		angular.forEach($scope.cart,function(value){
			total=total+value.product_price;
		});
		return total;
	};
}]);