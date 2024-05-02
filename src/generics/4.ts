type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
    ...initialValues,
  };

  return defaultUser;
}

const updatedUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(updatedUser);
