

class User {

	constructor () {
		this.users = [];
	}
	addUser (id, name, room) {
		var user = {id, name, room};
		this.users.push(user);
		return user;
	}
	removeUser (id) {
		var user = this.getUser(id);
		if (user) {
			this.users = this.users.filter(function(user){
				return user.id !== id;
			});
		}
		return user;
	}
	getUser (id) {
		return this.users.filter(function(user){
			return user.id === id;
		})[0];
	}
	getUserList (room) {
		var users = this.users.filter(function(user){
			return user.room === room;
		});
		var namesArray = users.map(function(user){
			return user.name;
		});
		return namesArray;
	}

}

module.exports = {User};