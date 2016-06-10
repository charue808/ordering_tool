Template.upload.onCreated( () => {
	Template.instance().uploading = new ReactiveVar( false );
});

Template.upload.helpers({
	uploading() {
		return Template.instance().uploading.get();
	}
});




Template.upload.events({
	'change select'(event, template) {
		var values = $.map($('#collection :selected'), function(ele) {
   return ele.value; 
			});

		console.log(values);
	},

	'change [name=uploadCSV]'(event, template) {
		template.uploading.set(true);

		Papa.parse( event.target.files[0], {
			header: true,
			complete(results, file) {
				Meteor.call('parseUpload',results.data, ( error, response) => {
					if ( error ) {
						conosle.log( error.reason );
					} else {
						template.uploading.set( false );
						Bert.alert( 'Upload complete', 'success', 'growl-top-right');
					}
				});
			}
		});
	}
});