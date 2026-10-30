////// CHAPTER # 01  alert //////// 

// Q-01//
//alert("welcome to my website!")


// Q-02//
/*let password = prompt ("Enter your password");

if(password !=="abcd"){
    alert("Error! please enter a valid password")
}else{
    alert("welcome to our page")
}*/


// Q-03//

//alert(`welcome to js land...
  //  Happy coding`)


    // Q-04//


   /* alert("welcome to js land...");


    alert("happy coding!\n\
        prevent this page from creating additional dialogs.");*/



        // Q-05//


       // alert("Hello... I can run js through my web browser's console")



        // Q-07//


// <head>
    // <meta charset="UTF-8">
    /* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */
    /* <title>Document</title> */

    /* <script> */
        /* console.log("script inside the head section") */
    /* </script> */
/* </head> */

       
/* <script>
        console.log("script in body,befor HTML content")
    </script> */


//      <div>
//     <script>
//         console.log("script inside the page's HTML(between elements)");
//     </script>
// <p>script inside the page's HTML between elements</p>
// </div>



/* <script>
    alert("script in body ,after all HTML content");
    console.log("script in body ,after all HTML content")
</script> */



// ////////////////////////////////////////////////////////////////



// /////// CHAPTER # 02 variables for string ////////

// 01///

//let username;


// 02///


//let myName= "sumaira rahim"


//03//


/*var message = "hello world";
alert(message);*/


//04//

/*var studentName = "momina shah";
var age = "6 years old";
var cource ="techno kidz";

alert(studentName);
alert(age);
alert(cource);*/

//05//

/*let pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert (pizza);*/


// 06  //

/*var email = "sumairarahim20@gmail.com";
alert("Email me at " + email);*/


// 07 //

/*var book = "A smarter way to learn javascript"
alert("I am trying to learn javascript from the Book " + book);*/

//  08  //

//document.writeln("yahoo! I can write HTML content through javascript");

//  09  //

/* var design = "☆*: .｡. o(≧▽≦)o .｡.:*☆";
alert(design);
document.writeln(design);*/



////////////// CHAPTER # O3 VARIABLES FOR NUMBERS  ///////////////////



//  01  //

/*var age = "I m 15 years old";
alert(age);*/


//  02  //

//  var visitcount = 0;
// visitcount = visitcount + 1;
//  alert("you have visited this site"+ visitcount + "times");

//   03  //

// var birthyear = 1990;
// document.write("my birthyear is" + birthyear
// );
// document.write("<br/>");
// document.write ("data type of my declear veriable is number");


//   04   //

// var visitorName = "sumaira rahim";
// var productTitle = "Bag";
// var Quantity =2 ;

// document.write(visitorName  + " " + "order"  + " " + Quantity  +  "  "  +  productTitle  +  "(s) on abc store");


// ////////////chapter # 04 VARIABLE NAMES LEGAL & ILLEGAL////////////



// //////// 01 ///////////

// var name = "sumaira rahim";
// var age = 10;
// var city = "lahore";



// //////// 02 ///////////
 
// // LEGAL VARIABLE NAMES///

// var myName;
// var $name;
// var name;
// var _name;
// var name1;


// // ILLEGAL VARIABLE NAMES ////

// var 1name;
// var my-Name;
// var myName@;
// var my Name;
// var var;


// //// 03 //////


// document.write("<h2>Rules for naming JS variables</h2>");

// document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable");

// document.write("<br><br>");

// document.write("Variables must begin with a $, _ or letter. For example $name, _name or name");

// document.write("<br><br>");

// document.write("Variable names are case sensitive");

// document.write("<br><br>");

// document.write("Variable names should not be JS keywords");



// //////////////   CHAPETR # 05 MATH EXPRESSIONS ////////////////////////


// // 01 ////

// var num1 = 5;
// var num2 = 3;

// var sum = num1 + num2;

// document.write(" sum of " + num1 + " " +"and"  +" "+ num2 + " Is " + sum);


// // 02 ////

// // substraction ///

/* var num1 = 5;
 var num2 = 3;

var  result = num1 - num2;

document.write(" substraction of " + num1 + " " +"and"  +" "+ num2 + " Is " + result);*/


// // multiplication ////

/* var num1 = 5;
 var num2 = 3;

var  result = num1 * num2;

document.write(" multiplication of " + num1 + " " +"and"  +" "+ num2 + " Is " + result);*/


// // division ////

/* var num1 = 3;
 var num2 = 5;

var  result = num1  /  num2;

document.write(" division of " + num1 + " " +"and"  +" "+ num2 + " Is " + result);*/


// // modulus ////

 /*var num1 = 3;
 var num2 = 5;

var  result = num1  %  num2;

document.write(" modulus of " + num1 + " " +"and"  +" "+ num2 + " Is " + result);*/


// // 03 ////

// a. Declare a variable
/*var num;

// b. Show value after variable declaration
document.write("Value after variable declaration is " + num);
document.write("<br><br>");

// c. Initialize variable with 5
num = 5;

// d. Show initial value
document.write("Initial value: " + num);
document.write("<br><br>");

// e. Increment the variable
num++;

// f. Show value after increment
document.write("Value after increment is: " + num);
document.write("<br><br>");

// g. Add 7 to the variable
num = num + 7;

// h. Show value after addition
document.write("Value after addition is: " + num);
document.write("<br><br>");

// i. Decrement the variable
num--;

// j. Show value after decrement
document.write("Value after decrement is: " + num);
document.write("<br><br>");

// k. Find remainder after dividing by 3
var remainder = num % 3;

// l. Show remainder
document.write("The remainder is: " + remainder);*/


// // 04 ////


// var ticket = 600;
// var totalCost = ticket*5;
// document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");





///////////////     05      /////////////////////

// var num =4;
// document.writeln("Table of "+num + "<br><br>");
// for (var i = 1; i <=10; i++) {
//    document.writeln(num+ " x "+ i +" = " + num*i + "<br>");
    
// }



/// 6.Temperature Converter:
// a) Store a Celsius value in a variable.
// b) Convert it to Fahrenheit and print: “NN°C is NN°F”.
// c) Store a Fahrenheit value in a variable.
// d) Convert it to Celsius and print: “NN°F is NN°C”.

///////////////     Answer       /////////////////////


// var celsius = 25;
// var fahrenheit = (celsius *9/5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F <br><br>");

// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C <br><br>");





/// 7.Shopping Cart Checkout Program:
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Calculate the total cost and display the receipt in the browser.

///////////////     Answer       /////////////////////

// var price1 = 650;
// var price2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shippingCharges = 100;
// var totalCost = (price1*quantity1) + (price2*quantity2) + shippingCharges;

// document.writeln(`    <h1>Shopping Cart Receipt</h1> <br>
//     <p>price of item 1 : ${ price1 }</p>
//      <p>Quantity of 1 : ${quantity1 }</p>
//      <p>price of item 2 : ${ price2 }</p>
//      <p>Quantity of 2 : ${quantity2}</p>
//       <p>Shipping charges : ${shippingCharges}</p><br>
//        <p>Total cost of your order is : ${totalCost}</p>

//     `)



/// 8.Percentage Calculator Program:
// Store total marks and obtained marks in variables, calculate the percentage, and display the result in the browser.


///////////////     Answer       /////////////////////


// var total = 980;
// var obtained =804;
// var percentage =(obtained/total)*100;

// document.writeln(`    <h1>Mark Sheet</h1> <br>
//      <p>total marks :${ total }</p>
//       <p>marks obtained : ${obtained}</p>
//       <p>percentage : ${ percentage }</p>
//      `)


/// 9.Convert 10 USD and 25 SAR into Pakistani Rupees in one expression.
// (Rates: 1 USD = 104.80 PKR, 1 SAR = 28 PKR)

///////////////     Answer       /////////////////////

// document.writeln(`    <h1>Currency in PKR</h1> <br>
//      <p>total currency in PKR is :${ 10 * 104.80 + 25 * 28 }</p>
     
//      `)



/// 10.Write a program that takes a number and performs: +5, ×10, ÷2 in a single expression.

///////////////     Answer       /////////////////////

// var num = 10;
//          document.writeln(`    
//      <p>Answer :${ num +5 *10 /2 }</p>
     
//      `)


/// 11.Write a program to calculate a person’s two possible ages using current year and birth year, and display: “They are either NN or NN years old.”

///////////////     Answer       /////////////////////


// var year = 2016;
// var birthYear = 1992;
// var age1 = year-birthYear;
// var age2 = age1-1;
// document.writeln(`They are either ${age2} or ${age1} years old.`);

// document.writeln(`<h1>Age calculator</h1> <br>
//       <p>Current year :${ year }</p>
//         <p>Birth year :${birthYear}</p>
//           <p>Age :${ age1 }</p>`);
        


/// 12. The Geometrizer – Circle Calculation
// a)Store a radius in a variable.
// b)Calculate the circumference using the formula: Circumference = 2 × π × r (π = 3.142)
// c)Calculate the area using the formula: Area = π × r² (π = 3.142)

///////////////     Answer       /////////////////////

// var radius = 20;
// var pi = 3.142;
// var circum = 2 * pi * radius;
// var area = pi* radius*radius;

// document.writeln(`    <h1>The Geometrizer</h1> <br>
//     <p>Radius of circle : ${ radius }</p>
//      <p>The circumference is : ${circum }</p>
//      <p>The area is : ${ area }</p>
     
//     `)



/// 13.The Lifetime Supply Calculator
// a)Store your favorite snack in a variable.
// b)Store your current age in a variable.
// c)Store your maximum age in a variable.
// d)Store the estimated amount eaten per day in a variable.
// e)Calculate the total amount needed for the rest of your life.


///////////////     Answer       /////////////////////

// var snack= "chocolate chip";
// var age = 15;
// var maxAge = 65;
// var est = 3;
// var calc= (maxAge-age)* est *365;

// document.writeln(`<h1>The Lifetime Supply Calculator</h1>

//     <p>Favourite Snack: ${ snack }</p>
//     <p>Current age: ${age}</p>
//     <p>Estimated Maximum Age: ${ maxAge }</p>
//     <p>Amount of snacks per day: ${est }</p>
//     <p>You will need  ${calc } chocolate chip to last you until the ripe old age of 65</p>`)


/// 1. Write a program that calculates and displays a number’s result in browser.

///////////////     Answer       /////////////////////

// var a = 10;

//  document.writeln(`    <h1>Reults</h1> 
//     <p>The value of a is : ${ a }</p>
//      <p>..............................................</p><br>
//      <p>The value of ++a is : ${++a }</p>
//      <p>Now the value of a is: ${ a }</p><br>
    
//      <p>The value of a++ is : ${a++ }</p>
//      <p>Now the value of a is: ${ a }</p><br>

//      <p>The value of --a is : ${--a }</p>
//      <p>Now the value of a is: ${ a }</p><br>

//      <p>The value of a-- is : ${a-- }</p>
//      <p>Now the value of a is: ${ a }</p>

//     `);


/// 2. Repet task 1 for subtraction, multiplication, division & modulus

///////////////     Answer       /////////////////////

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.writeln(`     
    
//      <p>a is : ${a }</p>
    
//      <p>b is : ${b }</p>
    
//      <p>result is : ${result }</p>


//     <h1>Explanation</h1> 
//     <p><b>Step 1 (--a)</b> Pre-decrement → a becomes 1</p>
     
//     <p><b>Step 2 (--a - --b)</b> a = 1,

// --b → b becomes 0,

// 1 - 0 = 1</p>

//     <p><b>Step 3 (--a - --b + ++b)</b> ++b → b becomes 1,

// 1 + 1 = 2</p>

//     <p><b>Step 4 (--a - --b + ++b + b--)</b> b-- → use 1, then b becomes 0

// 2 + 1 = 3</p>

//     `);

/// 3.Write a program to take username and display greeting.


///////////////     Answer       /////////////////////

// var uName =prompt("Enter Your name ");
// document.writeln("Hello " + uName + " !");

/// 4. store ticket price 600pkr in variable & show total cost of buying 5 tickets

///////////////     Answer       /////////////////////

// var table = +prompt("Enter a number to Show its multiplication table");


// if (table != " ") {
//     document.writeln("Table of "+table + "<br><br>");
//     for (var i = 1; i <=10; i++) {
//    document.writeln(table+ " x "+ i +" = " + table*i + "<br>");
    
// }
    
// }
// else{
//     document.writeln("Table of 5 <br><br>");
//     for (var i = 1; i <=10; i++) {
//    document.writeln(5+ " x "+ i +" = " + 5*i + "<br>");
    
// }
    
// }


/// 5. Take three subjects, calculate total marks and percentage.

///////////////     Answer       /////////////////////

///////////////////////////////// a

// var sub1 = prompt("Enter first subject name ");
// var sub2 = prompt("Enter Second subject name ");
// var sub3 = prompt("Enter Third subject name ");

// ///////////////////////////////// b

// var total= 100;


// ///////////////////////////////// c ,d

// var sub1Marks = prompt("Enter obtained marks for " + sub1);
// var sub2Marks = prompt("Enter obtained marks for " +sub2);
// var sub3Marks = prompt("Enter obtained marks for "+sub3);


// ///////////////////////////////// e

// var totalMarks =total*3
// var obtMarks = sub1Marks + sub2Marks +sub3Marks;
// var percentage = (obtMarks/totalMarks)*100;

// document.writeln(`<table border='1'>
// <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>

// <tr><td> ${sub1 } </td><td> ${total } </td><td> ${sub1Marks } </td></tr>
// <tr><td> ${sub2 } </td><td> ${total } </td><td> ${sub2Marks } </td></tr>
// <tr><td> ${sub3 } </td><td> ${total } </td><td> ${sub3Marks } </td></tr>

// <tr><th colspan="2">${totalMarks }</th><th> ${obtMarks } </th><th> ${percentage } % </th></tr>
// </table>

// `);

// //// chapter 9-11  ///////
/// 1. Take city name and display special welcome message.

///////////////     Answer       /////////////////////

// var city = prompt("Enter your city name").toLowerCase();
// if (city === "karachi") {
//     alert("Welcome to city of lights")
    
// }
// else{
//     alert("Sorry. try another city name");
    
// }

/// 2.Take gender input and display appropriate greeting message.

///////////////     Answer       /////////////////////

// var gender = prompt("Enter your gender (male/female):").toLowerCase();

// if (gender === "male") {
//     alert("Good Morning Sir.");
// }
// else if (gender === "female") {
//     alert("Good Morning Ma’am.");
// }
// else {
//     alert("Good Morning!");

//     }
/// 3. Take traffic signal color input and display appropriate warning message.


///////////////     Answer       /////////////////////

// var color = prompt("Enter traffic signal color (red, yellow, green):").toLowerCase();
//  if (color === "red") {
//         alert("Must Stop!");
//     } else if (color === "yellow") {
//         alert("Ready to move");
//     } else if (color === "green") {
//         alert("Move now");
//     } else {
//         alert("Invalid color!");
//     }



/// 4. Check car fuel input and alert if less than 0.25 litres.

///////////////     Answer       /////////////////////

// var fuel = prompt("Enter remaining fuel in your car");



// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }else{
//     alert("Have a good day");
// }



/// 5.

///////////////     Answer       /////////////////////

// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }
//  var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
//  var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 
//  var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
//  if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }

/// 6.Write a program to input marks obtained in three subjects and total marks, calculate the percentage, determine the grade and remarks using this table:

///////////////     Answer       /////////////////////


// var marks1 =+prompt("Enter marks obtained in subject 1:");
// var marks2 =+prompt("Enter marks obtained in subject 2:");
// var marks3 =+prompt("Enter marks obtained in subject 3:");
// var totalMarks =300;

// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.writeln(`<h2>Result:</h2>
// Total Marks: ${totalMarks }    <br>
// Marks Obtained: ${obtainedMarks }    <br>
// Percentage: ${percentage }  %<br>
// Grade:  ${grade }   <br>
// Remarks: ${remarks }    <br>`);





/// 7.Create a guess game with secret number and close guess check.

///////////////     Answer       /////////////////////

// var secretNumber = Math.floor(Math.random()*10)+1;


// var guess = Number(prompt("Guess the secret number (1-10):"));

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }





/// 8.Check if number is divisible by 3 and show message.


///////////////     Answer       /////////////////////


var num = +prompt("Enter a number:");

if (num % 3 === 0) {
    alert(num + " is divisible by 3");
} else {
    alert(num + " is not divisible by 3");
}


/// 9. Check if a number is even or odd and display result.

///////////////     Answer       /////////////////////

var num = +prompt("Enter a number:");

if (num % 2 === 0) {
    alert(num + " is an even number");
} else {
    alert(num + " is an odd number");
}


/// 10.Take temperature input and display message according to given range.

///////////////     Answer       /////////////////////

// var temp = +prompt("Enter the temperature in °C:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today's Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("It's very cold today!");
// }


/// 11.Create a simple calculator using if statements for basic operations.
///////////////     Answer       /////////////////////


// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operation (+, -, *, /, %):");
// var result;

// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// } else if (operator === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operator!");
// }

// if (result !== undefined) {
//     alert("Result: " + result);
// }
        
// ////// chapter 12-13 /////////


/// 1. Takes character and check if it is a number, uppercase or lowercase letter

///////////////     Answer       /////////////////////



// var char = prompt("Enter a character:");
// var ascii = char.charCodeAt(0);

// if (char.length === 1) {
//     if (ascii >= 48 && ascii <= 57) {
//     document.writeln("It is a number.");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     document.writeln("It is an uppercase letter.");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     document.writeln("It is a lowercase letter.");
// }
// else {
//     document.writeln("Invalid input.");
// }
// }
// else {
//     document.writeln("Please enter only one character!");
// }



/// 2. “Find larger of two integers. show if both are  equal

///////////////     Answer       /////////////////////

// var num1= +prompt("Enter First Number");
// var num2= +prompt("Enter Second Number");
// if(num1>num2){document.writeln(`${num1} is greater`);}
// else if(num1<num2){document.writeln(`${num2} is greater`);}
// else{document.writeln(`Both numbers are equal`)}




/// 3.Check if a number is positive, negative, or zero

///////////////     Answer       /////////////////////

// var num = +prompt("Enter a Number!");
// if (num>0 ) {
//     document.writeln(`${num} is Positive`);
// }else if (num<0) {
//     document.writeln(`${num} is Negative`);
// }
// else{document.writeln(`${num} is Zero`);}





/// 4.Check if a character is a vowel

///////////////     Answer       /////////////////////

// var char = prompt("Enter a character").toLocaleLowerCase();
// if (char.length === 1) {
//     if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
//          document.writeln(`${char} is a vowel`);
//     }
//     else{
//          document.writeln(`${char} is not a vowel`);
//     }
// }
//  else{
//          document.writeln(`Please Enter only one Character`);
//     }


/// 5.Check if entered password is correct

///////////////     Answer       /////////////////////


// var correctPass = "my password";
// var userPass = prompt("Enter your password.");
// if (!userPass) {
//      document.writeln(` Please enter your password`)
// }else  if (userPass === correctPass) {
//          document.writeln(`Correct! The password you entered matches the original password`);
// }

//     else{document.writeln(`Incorrect password`)}
  



/// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }

///////////////     Answer       /////////////////////


// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; }
// else { 
// greeting = "Good evening"; 
// }
// document.writeln(greeting)

/// 7.Convert 24-hour time to 12-hour format.

///////////////     Answer       /////////////////


// var time = prompt("Enter time in 24-hour format (e.g., 1900):");

// var hours = time.slice(0, 2);
// var minutes = time.slice(2, 4);

// var period;

// if (hours === 0) {
//     hours = 12;
//     period = "AM";
// } 
// else if (hours < 12) {
//     period = "AM";
// } 
// else if (hours === 12) {
//     period = "PM";
// } 
// else {
//     hours = hours - 12;
//     period = "PM";
// }

// document.writeln(hours + ":" + minutes + " " + period);




// /// chapter 14-16 ////////////

/// 1. Declare an empty array for student names.

///////////////     Answer       /////////////////////

// var student = [];



/// 2. Create an empty array using object notation.

///////////////     Answer       /////////////////////

//var students = new Array();



/// 3. Declare and initialize a strings array.

///////////////     Answer       /////////////////////

// var arr = ["john","doe"];



/// 4.  Declare and initialize a numbers array.

///////////////     Answer       /////////////////////

// var arr =[1,2,3,4];



/// 5. Declare and initialize a boolean array.

///////////////     Answer       /////////////////////

// var arr = [true,false];



/// 6.Declare and initialize a mixed array.

///////////////     Answer       /////////////////////

// var arr = ["john",1,true];



/// 7.Declare and display education qualifications in browser.

///////////////     Answer       /////////////////////


// var qualifications = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS"," M. Phil.", "PhD"];
// document.writeln(`<h1>qualifications</h1> `) 
// for (var i = 0; i < qualifications.length; i++) {
//     document.writeln (`<p>${qualifications[i]}</p>`);
    
// }


/// 8. Store 3 students' names, marks, calculate percentages.

// var students =["Michael","John","Tony"];
// var score = [320,230,480]; 
// var total = 500;

// for (var i = 0; i< students.length; i++) {
// var percentage = (score[i]/total)*100;
// document.writeln(`Score of ${students[i] } is ${score[i]} . Percentage is : ${percentage}%`);
//  document.writeln(`<br> `) 

//     }



/// 9. Manage colors array: add, delete, update by user input.

// var color = ["Red ","Green ","Blue"];

//   document.writeln(`<h3>Initial colours: ${color }</h3>`);

  ////////////////////////////a. add at begning

//   var addStart = prompt("Which color do you want to add to the beginning?");
//   color.unshift(addStart);
//   document.writeln(`<h3>After adding at beginning: ${color } </h3>`);

 /////////////////////////////b. add at end

//     var addEnd = prompt("Which color do you want to add to the end?");
//   color.push(addEnd);
//   document.writeln(`<h3>After adding at End: ${color } </h3>`);

 /////////////////////////////c. Add two more colors to beginning

// color.unshift("purple ","Orange ");
//   document.writeln(`<h3>After adding two colours at beginning: ${color } </h3>`);

  ////////////////////////////d. Delete first color

// color.shift();
//   document.writeln(`<h3>After deleting first color: ${color } </h3>`);

    //////////////////////////e. Delete last color

// color.pop();
//   document.writeln(`<h3>After deleting last color: ${color } </h3>`);

  ////////////////////////////f. Add color at specific index

//   var addIndex = +prompt("At which index do you want to add a color?");
//   var addColor = prompt("Enter colour name");
//   color.splice(addIndex,0,addColor);
//     document.writeln(`<h3>After adding colours at Index ${addIndex }: ${color } </h3>`);

 /////////////////////////////g. Delete color(s) from specific index

// var deletIndex = +prompt("At which index do you want to delete color(s)?");
// var deletColour = +prompt("How many colors do you want to delete?");
// color.splice(deletIndex,deletColour);
//   document.writeln(`<h3>After deleting color(s): ${color } </h3>`);

///10.Store student scores and sort in ascending order.

// var scores = [320, 230, 480, 120];

// document.writeln(`Original Scores: ${scores }  <br><br>`);

// scores.sort();

// document.writeln(`Sorted Scores (Ascending):  ${scores }`);


///11.Initialize cities array and copy 3 elements to another array.

// var cities =["Karach ","Lahore","Islamabad ","Quetta","Peshawar"];
// var cityCopy = cities.slice(2,5);
// document.writeln(`<h3>Cities List:  </h3><h3>${cities }</h3>`);
// document.writeln(`<h3>Selected Cities:</h3> <h3> ${cityCopy }</h3>`);


///12.Join array elements into single string using join() method.

// var arr = ["This" , " is ","  my ","  cat"]; 
// var string = arr.join("");
// document.writeln(`<h3>Array:  </h3><h3>${arr }</h3>`);
// document.writeln(`<h3>String:</h3> <h3> ${string }</h3>`);


///13.Create array and access values using FIFO method.

// var arr =[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer ");
// arr.push("Monitor");
// document.writeln(`<h3>Devices:  </h3><h3>${arr }</h3>`);

// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);

///14.Create array and access values using LIFO method.

// var arr =[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer ");
// arr.push("Monitor");
// document.writeln(`<h3>Devices:  </h3><h3>${arr }</h3>`);

// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);


/// 15.Store phone brands in array and display dropdown menu.

// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.writeln("<select>");
// for (var i = 0; i < phones.length; i++) {
//    document.writeln(`<option> ${phones[i] } </option>`);

    
// }
// document.writeln("</select>");


//   ///  chapter 17-20 //////


/// 1.Create and initialize an empty multidimensional array.

///////////////     Answer       /////////////////////

// var arr = [
//     [],
//     [],
//     []
// ];


/// 2. Declare and initialize a multidimensional matrix array.

///////////////     Answer       /////////////////////

// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for (var i = 0; i < arr.length; i++) {
//     document.writeln(`${arr[i].join(" ") } <br>`)
    
// }

/// 3. Write a program to print numeric counting from 1 to 10. 
///////////////     Answer       /////////////////////

// for (var i = 1; i <=10; i++) {
// document.writeln(i +"<br>")   
// }


/// 4. Print multiplication table using for loop with user input number and length.

///////////////     Answer       /////////////////////

// var table = +prompt("Enter a number to Show its multiplication table");
// var length = +prompt("Enter Length for multiplication table");

// document.writeln("Table of "+table + "<br><br>");
// for (var i = 1; i <=length; i++) {
//    document.writeln(table+ " x "+ i +" = " + table*i + "<br>");
    
// }


/// 5.Print all items of the given fruits array using a for loop.

///////////////     Answer       /////////////////////

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"] ;
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln(fruits[i]+"<br><br>");  
// }
// for (var i = 0; i < fruits.length; i++) {
    
//     document.writeln(`Element at Index ${i} is ${fruits[i]}<br><br>`);
// }



/// 6.Generate counting, reverse, even, odd, and k-series in browser.

///////////////     Answer       /////////////////////

  //////////////////////////// a
//  document.writeln (`<h3>Counting:</h3>`);

//   for (var i = 1; i <=15; i++) {
     

//     if (i <15) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//   }

//    document.writeln(`<br><br>`);

//   //////////////////////////// b
//  document.writeln (`<h3> Reverse counting:</h3>`);
//   for (var i = 10; i >=1; i--) {
//      if (i  >1) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//   }


//   //////////////////////////// c

//  document.writeln (`<h3> Even: </h3>`);
//   for (var i = 0; i <=20; i++) {
//     if (i % 2 === 0) {
//          if (i  <20) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
  
//   }


//   //////////////////////////// d

//  document.writeln (`<h3> Odd: </h3>`);
//   for (var i = 0; i <=20; i++) {
//     if (i % 2 !== 0) {
//          if (i  <19) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
  
//   }


//   //////////////////////////// e

//  document.writeln (`<h3> Series:</h3>`);
//   for (var i = 2; i <=20; i+=2) {
   
//          if (i  <20) {
//          document.writeln(i+"k,");
//     }
//     else{
//          document.writeln(i+"k");
//     }
    
  
//   }



/// 7.Search user input in array and show if the item is found or not.

///////////////     Answer       /////////////////////

// var items =  ["cake", "apple pie","cookie","chips", "patties"]; 
// var user = prompt("Welcome too ABC bakery . what do you want to order sir/ma'am?").toLowerCase();
// var isItemFound = false;

// for (var i = 0; i < items.length; i++) {
//     if (user === items[i]) {
//         isItemFound = true;
//     document.writeln(`${user} is <b>avaible</b> at Index ${i} in our bakery  <br><br>`);
// break;
//     }
 
//     }

// if (isItemFound === false) {
//     document.writeln(` We are sorry ${user} is <b>not avaible</b> in our bakery  <br><br>`); 
// }



/// 8. Find the largest number in the given array

// var a  = [24, 53, 78, 91, 12];
//     document.writeln(`Array items ${a} <br><br>`);

//   var largest = a[0];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i]> largest) {
//         largest= a[i];
   
   
//     }
    
//   }
//    document.writeln(` The largest number is ${largest} `); 



/// 9. Find the smallest number in the given array

// var a  = [24, 53, 78, 91, 12] ;
//     document.writeln(`Array items ${a} <br><br>`);

//   var smallest = a[0];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i]< smallest) {
//         smallest= a[i];
   
   
//     }
    
//   }
//    document.writeln(` The smallest number is ${smallest} `); 


/// 10.Print all multiples of 5 from 1 to 100.


// for (var i= 1; i <= 100; i++) {
//      if (i % 5 === 0) {
//          if (i  <100) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
    
// }