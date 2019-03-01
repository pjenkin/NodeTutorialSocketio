/* array of users */
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
