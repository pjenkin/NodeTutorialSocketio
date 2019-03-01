/* array of users for rooms */
[
  {
    id: 'abc'
  }
]

// use socket id

// addUser(id, name, roomName);
// removeUser(id)
// getUser(id) - user
// getUserList(roomName) - [names]


class Users
{
  constructor ()
  {
    this.users = [];    // no users at first
  }

  addUser (id, name, roomName)
  {
    let user = {id, name, roomName};
    this.users.push(user);
    return user;
  }
}

module.exports = {Users};




/*
class Person
{
  // constructor for this class
  constructor (name, age)
  {
    // console.log (name, age);
    this.name = name;
    this.age = age;
  }
  getUserdescription ()
  {
    return `${this.name}, ${this.age}, likes walking`;
  }
}

let me = new Person('Peter', 45);
console.log('this.name', me.name);
console.log('this.age', me.age);
let description = me.getUserdescription();
console.log(description);
*/
