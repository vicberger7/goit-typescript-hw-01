interface Address {
  city: string;
  country: string;
}

interface UserDetails {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const mango: UserDetails = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: UserDetails = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
