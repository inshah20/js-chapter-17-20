// chapter 17-20:
// Loops and arrays:

// Qno:1 Declare and initialize an empty multidimensional array.
// (Array of arrays)
// ans;
// let array = [];

// Qno:2 Declare and initialize a multidimensional array
// representing the following matrix:
// ans;
// let array = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]]

// for(let i=0; i<=3; i++){
//     for(let j=0; j<=4; j++){
//         document.write(array[i][j] +"");
//     }
//     document.write("<br />");
// }

// Qno:3 Write a program to print numeric counting from 1 to 10.
// ans;
// for(let i=1; i<=10; i++){
//     document.write(i + "<br />");
// }

// Qno:4 Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// ans;
// let tableNum = +prompt("enter the table number");
// let tableLength = +prompt("enter your table length");

// document.write("Multiplication " + "table " + "of " + tableNum + " length " + tableLength + "<br />");
// for (let i = 1; i <= tableLength; i++) {
//     document.write(tableNum + "x " + i + "=" + tableNum * i + "<br />");
// }

// Qno:5 Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
//ans;
//  let fruits = ["apple", "banana", "mango", "orange",  "strawberry"];
//  for (let i=0; i<fruits.length; i++){
//     document.write(fruits[i]+ "<br />");
//  }
// for (let j=0; j<fruits.length; j++){
//     document.write("Element at index " + j + " is " + fruits[j] + "<br />");
// }

// Qno:6 Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//ans;
// Part : a
// document.write("<h3>" + "Counting: " + "<h3 />");
// document.write("<br />");
// for (let i=1; i<=15; i++){
//     document.write(i+ " ");
// }

//  part : b
// document.write("<h3>" + " Reverse counting: " + "<h3 />");
// document.write("<br />");
// for(let i=10; i>=1; i--){
//     document.write(i + " ");
// }

//  part : c
// document.write("<h3>" + "Even: " + "<h3 />");
// document.write("<br />");
//  for(let i=0; i<=20; i++){
//  document.write(i++ + " ");
//  }

//   part : d 
//  document.write("<h3>" + "Odd: " + "<h3 />");
// document.write("<br />");
// for(let i=1; i<=19; i= i+2){
//  document.write(i + " ");
// }

// part : e
// document.write("<h3>" + "Series:" + "<h3 />");
// document.write("<br />");
// for(let i=2; i<=20; i++){
//     document.write(i + "k, " + " ");
// }

// Qno:7 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// ans;

// let saylaniBakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userDesire = prompt("what you wanna eat???");

// let flag = false ;
// for(let i = 0; i< saylaniBakery.length; i++){
    // if(saylaniBakery[i] == userDesire)
        // {document.write(userDesire + " is available");
            // flag = true;
        // break;
    // }
// }
// if(flag === false){
    // document.write("Sorry! "+ userDesire + " is not available")
// }

//Qno: 8 Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// let arr = [24, 53, 78, 91, 12];
// let largest  = arr[0];
// console.log(arr[0]);
// for(let i = 0; i<arr.length; i++){
    // if(arr[i] > largest){
        // largest = arr[i];
    // }
// }
// document.write("Array item : " + "24 ", "53 ", "78 ", "91 " ," 12" + "<br />")
// document.write("The largest number is " + largest);


// Qno: 9  Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12].
// ans;
// let arr = [24, 53, 78, 91, 12];
// let smallest = arr[0];
// console.log(arr[0]);
// 
// for(let i = 0; i<arr.length; i++){
    // if(arr[i] < smallest){
        // smallest= arr[i];
    // }
// }
// document.write("Array item : " + "24 ", "53 ", "78 ", "91 " ," 12" + "<br />")
// document.write("The smallest number is " + smallest);

// Qno: 10 Write a program to print multiples of 5 ranging 1 to
// 100.
//ans;
// for(let i=1; i<21; i++){
    // document.write(i*5 + " ");
// }