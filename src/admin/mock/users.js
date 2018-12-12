const uuidv4 = require('uuid/v4');

let	users = [
        {
        	  id: uuidv4(),
          	name: "Admin",
          	level: 0,
        },
        {
          	id: uuidv4(),
          	name: "Cao Son Duc",
          	level: 1,
        },
        {
        	 id: uuidv4(),
          	name: "Bui Thanh Son",
          	level: 2,
        },
        {
        	 id: uuidv4(),
          	name: "Luong Le Dat",
          	level: 1,
        },
    ];

export default users;