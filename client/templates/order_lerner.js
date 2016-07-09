Template.orderLerner.helpers({
	items() {
		return Lerner.find();
	}
});

Template.lernerItem.helpers({
	price() {
		var selector = {};
		var selector[key] = value;
		
		var csvPrice = Lerner.find(selector);
		console.log('this is a yourPrice value' + csvPrice);
	 }
});

Template.lernerItem.events({

});