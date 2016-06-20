Template.publisher1.onCreated( () => {
	Template.instance().uploading = new ReactiveVar( false );
});

Template.publisher1.helpers({
	uploading() {
		return Template.instance().uploading.get();
	}
});

Template.publisher1.events({
	'change [name=uploadCSV]'(event, template) {
		template.uploading.set(true);

		var csvString = event.target.files[0];
		var header = 'qty,series,title,ISBN,listPrice,yourPrice,copyright,grl,atos,lexile';
		csvString = header+'\n'+csvString;
			//event.target.files[0]
		Papa.parse(csvString, {
			header: true,
			complete(results, file) {
				Meteor.call('parseUpload1',results.data, ( error, response) => {
					if ( error ) {
						console.log( error.reason );
					} else {
						template.uploading.set( false );
						Bert.alert( 'Upload complete', 'success', 'growl-top-right');
					}
				});
			}
		});
	}
});

Template.publisher2.onCreated( () => {
	Template.instance().uploading = new ReactiveVar( false );
});

Template.publisher2.helpers({
	uploading() {
		return Template.instance().uploading.get();
	}
});

Template.publisher2.events({
	'change [name=uploadCSV]'(event, template) {
		template.uploading.set(true);

		Papa.parse( event.target.files[0], {
			header: true,
			complete(results, file) {
				Meteor.call('parseUpload2',results.data, ( error, response) => {
					if ( error ) {
						console.log( error.reason );
					} else {
						template.uploading.set( false );
						Bert.alert( 'Upload complete', 'success', 'growl-top-right');
					}
				});
			}
		});
	}
});

Template.publisher3.onCreated( () => {
	Template.instance().uploading = new ReactiveVar( false );
});

Template.publisher3.helpers({
	uploading() {
		return Template.instance().uploading.get();
	}
});

Template.publisher3.events({
	'change [name=uploadCSV]'(event, template) {
		template.uploading.set(true);

		Papa.parse( event.target.files[0], {
			header: true,
			complete(results, file) {
				Meteor.call('parseUpload3',results.data, ( error, response) => {
					if ( error ) {
						console.log( error.reason );
					} else {
						template.uploading.set( false );
						Bert.alert( 'Upload complete', 'success', 'growl-top-right');
					}
				});
			}
		});
	}
});

Template.publisher4.onCreated( () => {
	Template.instance().uploading = new ReactiveVar( false );
});

Template.publisher4.helpers({
	uploading() {
		return Template.instance().uploading.get();
	}
});

Template.publisher4.events({
	'change [name=uploadCSV]'(event, template) {
		template.uploading.set(true);

		Papa.parse( event.target.files[0], {
			header: true,
			complete(results, file) {
				Meteor.call('parseUpload4',results.data, ( error, response) => {
					if ( error ) {
						console.log( error.reason );
					} else {
						template.uploading.set( false );
						Bert.alert( 'Upload complete', 'success', 'growl-top-right');
					}
				});
			}
		});
	}
});