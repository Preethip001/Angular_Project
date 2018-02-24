app.directive('logo',function(){ 
	return {
		restrict : "EA",
		template : 	function(element,attribute){
			if (attribute.type=="I")	
				return "<img src='images/me.jpg'/>"//"<h1>This is the Pic</h1>"
			else
				return "<img src='images/rose.jpg'/>"
		}						
	}
});

//logoPic-->logo-pic