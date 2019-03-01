const expect = require('expect');
const {Users} = require('./users');

describe('Users', () =>
{

  let users;  // should be accessible inside beforeEach and within each expect test case

  beforeEach(() =>
  {
      users = new Users();
      users.users = [
        {
          id: 1,
          name: 'PNJ Annear',
          roomName: 'Node Course'
        },
        {
          id: 2,
          name: 'JNP Jones',
          roomName: 'C++ Course'
        },
        {
          id: 3,
          name: 'NPJ Murdoch',
          roomName: 'Node Course'
        },
      ];
  });

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

  // challenges 9-125 (x4)

  it('should remove a user', () =>
  {
    // take an id, remove & assert removal (removed user returned and users array length decremented)
    let usersLength = users.length;
    let removedUser = users.removeUser(1);

    expect(removedUser).toEqual({
      id: 1,
      name: 'PNJ Annear',
      roomName: 'Node Course'
    });
    expect(users.length).toEqual(usersLength - 1);
  });

  it('should not remove a user', () =>
  {
    // take an invalid id, remove & assert no removal (ie null returned and length unchanged)
    let usersLength = users.length;
    let removedUser = users.removeUser(99);

    expect(removedUser).toEqual(null);
    expect(users.length).toEqual(usersLength);
  });

  it('should find a user', () =>
  {
    // take an id, find & assert return
    let gottenUser = users.getUser(1);

    expect(gottenUser).toEqual({
      id: 1,
      name: 'PNJ Annear',
      roomName: 'Node Course'
    });
  });

  it('should not find a user', () =>
  {
      // take an invalid id, try to find & assert not found
      let gottenUser = users.getUser(99);

      expect(gottenUser).toEqual(null);
  });


  it('should return names with argument as \'Node Course\'',() =>
  {
    let userList = users.getUserList('Node Course');
    expect(userList).toEqual(['PNJ Annear', 'NPJ Murdoch']);
  });

  it('should return names with argument as \'C++ course\'',() =>
  {
    let userList = users.getUserList('C++ Course');

    expect(userList).toEqual(['JNP Jones']);
  });
});
