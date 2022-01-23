// output statements

//fucntion that changes text when we click on it
function changeText() {
  document.querySelector(".para").innerHTML = "changed using javascript";
}

// alert("hello"); //gives an alert message

console.log("first console log"); //logs into console

// window.print("first print");can be used to print data on the page or save the page

//javascript variables

// var,let,const

//var->best used if the value of the variable is bound to change and it works fine on older browsers
//let->introduced newely and values of he variabl cannot be redeclared change may not work with older browsers
//const->used when varibles values are not supposed to change

// var x = multiplier(3, 4);

// function multiplier(a, b) {
//   return a * b;
// }

// alert(x);

// var myObject = { name: "varun", age: "19" };

// alert(myObject.name);

// var myArray = [100, 200, 400];

// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// var myObject = {
//   fistName: "Varun",
//   lastName: "Sadananda",
//   fullName: function () {
//     return this.fistName + " " + this.lastName;
//   },
// };

// console.log(myObject.fullName());

// let name = "varun";
// let nameLength = name.length;
// alert(nameLength);

// let x = "varun is awesome";
// let y = x.slice(6, 8);
// alert(y);

// var x = "hello";
// var y = x.toUpperCase();
// var z = x.toLowerCase();
// // alert(y);
// alert(z);

// var str = "hello";
// var str2 = str.concat(" morning");
// alert(str2);

// var str = `"varun" is "awesome"`;
// alert(str);

// var first = "varun";
// var second = "s";

// var text = `welcome ${first} ${second} here `;
// alert(text);

var a = ["hello", "world", "how", "are", "you"];
// a.push("varun");
// alert(a);

// console.log(a.toString());
// console.log(a.join("*"));

// a.push("varun");
// console.log(a);

// a.pop();
// console.log(a);

// a.shift();
// console.log(a);

// a.unshift("varun");
// console.log(a);

// a.splice(5, 0, "not", "good");
// console.log(a);

// a.sort();
// console.log(a);

const num = [100, 300, 2, 4, 600];
// num.sort();
// console.log(num);//sort does not work with numbers
// num.sort(function (a, b) {
//   //sorts elements in ascending order
//   return a - b;
// });

// console.log(num);

// function maxiFinder(num) {
//   return Math.max.apply(null, num);
// }

// console.log(maxiFinder(num));

// function minFinder(num) {
//   return Math.min.apply(null, num);
// }

// console.log(minFinder(num));

// console.log(Date());

// //returns num form 0 10
// var x = Math.floor(Math.random() * 11);
// console.log(x);

// const objectss = { name: "varun", age: "19", dob: 2002 };

// var text = "";
// for (var i in objectss) {
//   text += objectss[i] + " ";
// }

// console.log(text);

function msg() {
  return "hello";
}

var hello = () => {
  return "hello";
};

console.log(hello());

document.querySelector(".second-para").innerHTML = "helloo";
