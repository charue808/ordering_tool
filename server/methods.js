Meteor.methods({
  parseUpload1( data ) {
    check( data, Array );


    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ];

      if ( item['Title'] ) {
        Lerner.insert( item );
      } else {
        console.warn( 'Rejected. Invalid item.' );
      }
    }
  }
});

Meteor.methods({
  parseUpload2( data ) {
    check( data, Array );


    for ( let i = 0; i < data.length; i++ ) {
      let item = data[ i ];
          


      if ( item['Title'] ) {
        Bearport.insert( item );
      } else {
        console.warn( 'Rejected. Invalid item.' );
      }
    }
  }
});

Meteor.methods({
  parseUpload3( data ) {
    check( data, Array );


    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ];


      if ( item['Title']) {
        Mongo.Collection.get('lerner').insert( item );
      } else {
        console.warn( 'Rejected. Invalid item.' );
      }
    }
  }
});

Meteor.methods({
  parseUpload4( data ) {
    check( data, Array );


    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ];


      if ( item['Title'] ) {
        Mongo.Collection.get('salem').insert( item );
      } else {
        console.warn( 'Rejected. Invalid item.' );
      }
    }
  }
});