(function(){
	'use strict';

angular.module('ShoppingApp',[])
.controller('ShoppingListController1',ShoppingListController1)
.controller('ShoppingListController2',ShoppingListController2)
.service('ShoppingListService',ShoppingListService)


ShoppingListController1.$inject=['ShoppingListService'];

function ShoppingListController1(ShoppingListService){
	var ToBuyList = this;
	ToBuyList.items = ShoppingListService.getItems();


	ToBuyList.buyItem = function(itemIndex){
		ShoppingListService.buyItem(itemIndex);	
	};

};


ShoppingListController2.$inject=['ShoppingListService'];

function ShoppingListController2(ShoppingListService){
	var alreadyBought = this;
	alreadyBought.items = ShoppingListService.getboughtItems();
	};


function ShoppingListService(){
	var service = this;
	var boughtItems = [];
	var items = [
	{ name: "cookies", quantity: 10 },
	{ name: "Milk", quantity: 2 },
	{ name: "Bread", quantity: 1 },
	{ name: "Eggs", quantity: 6 },
	{ name: "Butter", quantity: 1 }

	];

	service.buyItem = function(itemIndex){
		var removedItems = items.splice(itemIndex, 1);
		boughtItems.push(removedItems[0]);
		
	};

	

	service.getItems = function(){
		return items;

	};
	service.getboughtItems = function(){
		return boughtItems;

	};
}

})();