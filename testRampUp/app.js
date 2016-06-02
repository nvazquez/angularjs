(function() {	//Wrapping your Javascript in a closure is a good habbit
	var app = angular.module('store',[]);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		};
	});
	
	var gems = [
	{
		name : 'Dodecahedron',
		price : 2.95,
		description : 'Dodecahedron bla bla bla lorem ipsum',
		canPurchase : true,
		soldOut : false,
		images : [
			{
				full : 'images/dodecahedron-01-full.jpg',
				thumb : 'images/dodecahedron-01-thumb.jpg'
			}
		]
	},
	{
		name : 'Pentagonal Gem',
		price : 5.95,
		description : 'Pentagonal Gem lorem ipsum',
		canPurchase : false,
		soldOut : false,
		images : [
			{
				full : 'images/pentagonal-01-full.jpg',
				thumb : 'images/pentagonal-01-thumb.jpg'
			}
		]
	}]
})();