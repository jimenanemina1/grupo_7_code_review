const fs = require("fs");
const path = require("path");


const User = {
  dataPath: path.join(__dirname, "../data/users.json"),

  getUsers: function () {
    return JSON.parse(fs.readFileSync(this.dataPath, "utf8"));
  },

  findById: function (id) {
    let allUsers = this.getUsers();
    return allUsers.find((user) => user.id == id);
  },

  findByField: function(field, text){
    let allUsers = this.getUsers();
    let userFound = allUsers.find(user => user[field] == text);
    return userFound;
  },

  generateId: function () {
    let allUsers = this.getUsers();
    return allUsers.length + 1;
  },

  createUser: function (userData) {
    let allUsers = this.getUsers();
    let newUser = {
      id: this.generateId(),
      ...userData,
    };
    
    allUsers.push(newUser);
    fs.writeFileSync(this.dataPath, JSON.stringify(allUsers, null, " "));
    return newUser;
  },
};

module.exports = User;
