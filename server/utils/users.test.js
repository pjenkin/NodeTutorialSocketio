const expect = require('expect');
const {Users} = require('./users');

describe('Users', () =>
{
  it('should add new user', () =>
  {
    let users = new Users();
    let user =
    {
      id: 'abc',
      name: 'PNJ',
      roomName: 'Cowsva Kernow'
    };
    let resUser = users.addUser(user.id, user.name, user.roomName);

    expect(users.users).toEqual([user]);
    
  });
});
