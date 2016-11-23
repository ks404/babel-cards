import { Meteor } from 'meteor/meteor';


import { Vocab } from '../imports/api/vocab.js';

Meteor.startup(() => {
  // code to run on server at startup

Vocab._ensureIndex({
  'engword': 'text',
  'vietword': 'text',
  'category': 'text'
});



Meteor.publish('allvocab', 

function showall() {
 

return Vocab.find()
});



Meteor.publish('searchvocab',

function showsearch(searchQ)
	{
 


		if (searchQ)
		{

			return Vocab.find
			(
			
			{ $text: {$search: searchQ} }

    		)
		}
  		else 
  		{
  			return Vocab.find();
		};
});

});