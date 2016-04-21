
angular.module('starter.services',['ngResource'])


.factory('ServiTaxonomies',function($resource){
	//return $resource('http://jsonplaceholder.typicode.com/users/:user',{user:"@user"});
	return $resource('http://localhost:3200/api/taxonomies/:id',{id:"@id"});
})
