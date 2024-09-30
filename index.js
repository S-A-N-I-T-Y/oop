"use strict";
// Lesson 1

// let userOne = {
//   email: "user1@gmail.com",
//   name: "user1",
//   login() {
//     console.log(this.email, "has logged in");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };

// console.log(userOne.login());

// // lesson 2
// // Ways to acccess properties
// let userTwo = {
//   email: "user2@gmail.com",
//   name: "user2",
//   login() {
//     console.log(this.email, "has logged in");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };

// console.log(userTwo['login']())

// Lesson 3
// Using classes and constructor function

// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//   }
//   login() {
//     console.log(this.email, "just logged in");
//     return this;
//   }
//   // always return "this" after executing a function so not to return undefined but return the instance of the object
//   logout() {
//     console.log(this.email, "just logged out");
//     return this;
//   }
// }

// let userOne = new User("user1@gmail.com", "user1");

// let userTwo = new User("user2@gmail.com", "user2");

// // chaining methods
// console.log(userOne.login().logout());

// // lesson 4 : class inheritance
// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter((u) => {
//       return user.email != u.email;
//     });
//   }
// }

// let admin = new Admin("justinokpara19@gmail.com", "sanity");

// let users = [userOne, userTwo, admin];
// console.log(users)

// console.log(admin.login().logout());

// admin.deleteUser(userTwo)
// console.log(users)

// Lesson 5 : Prototypes
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  console.log(this.email, "has logged in");
  this.online = true;
  return this;
};

User.prototype.logout = function () {
  console.log(this.email, "has logged out");
  this.online = true;
  return this;
};

let userOne = new User("user1@gmail.com", "userOne");
userOne.login().logout().login();
console.log(userOne);

// Lesson 6 : prototypes inheritance
function Admin(...args) {
  User.apply(this, args);
  this.online = true;
  this.role = "CEO";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

let admin = new Admin("admin@gmail.com", "admin");
let users = [userOne, admin];
console.log(admin);

console.log(users);
admin.deleteUser(users[0]);
console.log(users);

class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}
let button = new Button("Hello Sanity");
let button2 = new Button("Button2 is active");
console.log(button);
button.click();
button2.click();

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + mins;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render();
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
clock.stop();

class Animal {
  constructor(name) {
    this.name = name;
  }
  run(speed){
    this.speed = speed
  }
}
