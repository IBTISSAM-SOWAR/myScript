const user = {
    firstName: "Ibtesam",
    email: "ibesam@hotmail.com",
    id: 5566,
    fullName: function() {
      return `User Name :${this.firstName} the Email ${this.email}`;
    }
  };

  console.log(user.fullName())