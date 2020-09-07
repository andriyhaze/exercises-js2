/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/
const newAdress = "Berlin";

let person = {
  name: "Alice",
  age: 25,
  currentAddress: "Glasgow",
  changeAddress: function (newAddress) {
    this.currentAddress = newAddress;
  },
  celebrateBirthday: function () {
    this.age = this.age + 1;
  },
};

console.log(person);

// let person = {
//     name: "Alice",
//     age: 25,
//     currentAddress: "Glasgow",
//     changeAddress: function (newAddress) {
//         currentAddress = newAddress;
//     },
//     celebrateBirthday: function {
//         that.age = that.age + 1;
//     }
// };
