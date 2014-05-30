var myApp=angular.module('myModule', ['ui.bootstrap']);
myApp.controller('myCtrl',function($scope){
	$scope.reset=function(){
		$scope.user={account:'',email:''};
	}
});


