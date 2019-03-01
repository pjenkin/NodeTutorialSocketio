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

  // challenges 9-125: removeUser and getUser

  removeUser (id)
  {
    // removeUser by filtering out the specified user
    // there may be a quicker/neater way
    // could've used splice or _.remove or other means https://love2dev.com/blog/javascript-remove-from-array/
    let removedUser = this.users.filter((user) => user.id === id);
    let filteredUsers = this.users.filter((user) => user.id !== id);
    this.users = filteredUsers;       /* non-matching filter will return empty array */
    if (removedUser.length > 0)
      return removedUser[0];
    else
      return null;
    // in my solution, I'm indexing 1st (only) of array if array has any content
    // return user which has been removed - for undo &c
  }

  getUser(id)
  {
    let gottenUser = this.users.filter((user) => user.id === id);
    if (gottenUser.length > 0)
      return gottenUser[0];
    else
      return null;

    /* non-matching filter will return empty array */
  }

  getUserList(roomName)
  {
    // return array of strings of names
    let users = this.users.filter((user) => user.roomName === roomName);
    // ES6 shorthand
    // {
    //     // return true to keep in array or false to remove from array
    //     return user.roomName === roomName;
    // });
    let namesArray = users.map((user) => user.name);
    // ES6 shorthand

    // {
    //   return user.name;
    // });
    // return only names, using array.map

    return namesArray;
  }

  // use 'get' keyword to bind function as a run-time evaluated getter property
  get length()
  {
    return this.users.length;   // constructor d'initialise with empty array (length: 0)
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
