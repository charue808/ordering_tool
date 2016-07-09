Meteor.methods({
  parseUpload( data, fileName ) {
    check( data, Array );
    check(fileName, String);

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ];

      if ( item['Title'] ) {
        Mongo.Collection.get(fileName).insert( item );
      } else {
        console.warn( 'Rejected. Invalid item.' );
      }
    }
  }
 
});

