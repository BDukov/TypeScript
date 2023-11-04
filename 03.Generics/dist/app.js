"use strict";
const user = {
    firstName: "Pesho",
    lastName: "Petrov",
    email: "pesho@gmail.com",
    tellDetails: function () {
        {
            console.log(`User details: ${this.firstName} ${this.lastName} with email: ${this.email}`);
        }
    }
};
user.tellDetails();
//# sourceMappingURL=app.js.map