angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'pgs/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'pgs/home.html',
            controller:'homectrl'
    }).when('/car',
    {
        templateUrl:'pgs/car.html',
        controller:'carctrl'
    }).when('/bike',
    {
        templateUrl:'pgs/bike.html',
        controller:'bikectrl'
    })
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Home Page"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("carctrl",function($scope, $http)
{
   

   $http.get("https://rajesh-ss.github.io/json/demo1.json")
    .success(function(response)
    {
      //console.log("got the response");
        $scope.data=response;
        
       /*  console.log(response.length); */
  

        $scope.filterDropDown = [
          {"option":"Brand"},
          {"option":"model"},
          {"option":"year"}
        ]
    
        $scope.filterDisplay = [
          {"option":"1"},
          {"option":"2"},
          {"option":"3"}
        ]
    
        $scope.brand =[
          {"option":"abc"},
          {"option":"bcd"},
          {"option":"cde"}
        ]
    
        $scope.model =[
          {"option":"alto"},
          {"option":"xyz"},
          {"option":"swift"}
        ]
    
        $scope.year =[
          {"option":"2004"},
          {"option":"2007"},
          {"option":"2008"}
        ]

        $scope.currency = [
          {"option": "rupees"},
          {"option": "dollars"}
        ]
    }); 
})
.filter("myfilterCar",function()
{
    return function(input,option)
    {

          /* console.log(input);  */

          if(option=='rupees'){
              return "₹ "+parseFloat(input);
          }
          else{
            return "\$"+parseFloat(input)/ 64;
          }
    }
})


.controller("bikectrl",function($scope,$http)
{
    $http.get("https://rajesh-ss.github.io/jsonbike/demo1.json")
    .success(function(response)
    {
      //console.log("got the response");
        $scope.data=response;
        
        let takeBrand = [];
        let takeModel = [];
        let takeYear = [];

        for(let i=0; i<response.length;i++){
            takeBrand[i]= { "option": response[i].Brand};
        }
        for(let i=0; i<response.length;i++){
            takeModel[i]= { "option": response[i].model};
        }
        for(let i=0; i<response.length;i++){
            takeYear[i]= { "option": response[i].year};
        }

        $scope.brand = takeBrand;
        $scope.model = takeModel;
        $scope.year = takeYear;


        $scope.filterDropDown = [
          {"option":"Brand"},
          {"option":"model"},
          {"option":"year"}
        ]
    
        $scope.filterDisplay = [
          {"option":"1"},
          {"option":"2"},
          {"option":"3"}
        ]

        $scope.currency = [
          {"option": "rupees"},
          {"option": "dollars"}
        ]
    }); 
});
