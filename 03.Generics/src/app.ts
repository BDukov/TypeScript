//Contract
interface UserDetails {
  firstName: string;
  lastName: string;
  email?: string;
  tellDetails?: () => void;
}

class Person implements UserDetails {
  firstName: string
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// const user: UserDetails = {
//     firstName:"Pesho",
//     lastName: "Petrov",
//     email: "pesho@gmail.com",
// tellDetails: function () {{
//     console.log(`User details: ${this.firstName} ${this.lastName} with email: ${this.email}`);

// }}};

// user.tellDetails();
