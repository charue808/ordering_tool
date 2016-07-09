Template.orderBearport.helpers({
	items() {
		return Bearport.find();
	}
});

Template.bearportItems.helpers({
	complete() {
		
		if (Bearport.Title == Bearport.Series) {
			console.log("match") 
	  }
	}
});