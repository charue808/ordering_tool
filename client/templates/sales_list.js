

Template.orderBearport.helpers({
	items() {
		return Bearport.find();
	}
});

Template.bearportItems.helpers({
	Price() {
		// change field name from "Your Price" to "Price or YourPrice"
		// Error received for YOUR
	}
});