'use strict';
let config = {

	development:{
		db:{

			host:'localhost',
			port:27017,
			name:'test_db_photo'
		}
	},
	production:{
		db:{
			host:'localhost',
			port:27017,
			name:'test_db_photo'
		}
	}

};

let env = process.env.NODE_ENV ||'development';
module.exports = config[env];