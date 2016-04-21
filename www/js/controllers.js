angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope) {

})
/********* MANEJO DE TAXONOMIES EN LAS VIEWS ***********/
// Controlador que lista las categorias que extrae desde el api rest
.controller("TaxListCtrl",function($scope,ServiTaxonomies,$location){
   		$scope.lists = ServiTaxonomies.query();
      $scope.updateTaxonomy = function(id){
         //$location.path('#/app/updateTaxonomies/'+id).replace();
         $location.url("/updateTaxonomies/"+id);
      };

      $scope.deleteTaxonomy = function(id){
        alert(" Voy a eliminar");
      };
})

.controller('TaxFormCtrl', function ($scope,ServiTaxonomies,$stateParams) {
    $scope.formData = {
      name:'',
      description:'',
      type:'user',
      uid:'2'
    };
    
    $scope.saveTaxonomy = function(){
       ServiTaxonomies.save($scope.formData);
       console.log($scope.formData)
    }

})



.controller('TaxUpdCtrl', function ($scope) {

  
})
.controller('ListPropCtrl', function($scope,$stateParams) {
    $scope.taxo = $stateParams.taxonomy;  /* Pasar datos  al controlador*/


})
