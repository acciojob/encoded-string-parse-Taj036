const parseCode = (str) => {
  let user = {
    firstName: '',
    lastName: '',
    id: ''
  };
  let val = '';
  let property = '';

  for (let key of str) {
    if (key !== '0') {
      val += key;
    } else {
      if (!property) {
        property = 'firstName';
      } else if (property === 'firstName') {
        user.firstName = val;
        property = 'lastName';
        val = '';
      } else if (property === 'lastName') {
        user.lastName = val;
        property = 'id';
        val = '';
      }
    }
  }

  if (property === 'id') {
    user.id = val;
  }

  return user;
};


// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
