//""
//g
//h


//Chapter 35-38;

// question 3;


// function myFunc(a,b){
//         return a+b;
//       }
      
      
//       var result =myFunc(10,5);
      
//       console.log(result);


// question 1;

// var date = new Date();

//   console.log(date)


// question 2;



// function name(){
//        document.write("Salam")
//     }
    
//     name();

// function printName(name){
//          document.write(name);
//        }
      
      
//        var name =prompt("Enter your first name");
//        printName(name);


//        function printName(name){
//         document.write("  " + (name));
//       }
     
     
//       var name =prompt("Enter your last name");
//       printName(name);

 // question 4;


//  function myFunc(a,b){
//             return a+b;
//           }
          
          
//           var result =myFunc(10,5);
          
//           console.log(result);


 // question 5;

//  function abc(a){
//         return a*a;
//       }
      
      
//       console.log(abc(5));


// question 6;

// function abc(a){
//     if(a===0 ,  "||" , a===1)
//     {
//          return 1;
//     } else{
//         return a* abc(a-1)
//     }
// } console.log(abc(5));


// question 7;

// function displayCountFromUserInput(){

//     var start = parseInt(prompt("Enter your start number"))

//     var end = parseInt(prompt("Enter your end name"))


//     var numbers = Array.from({ length: end -start + 1 }, (_, index) => start + index);

//     document.write(numbers.join("<br>"))
// }


// question 8;


// function creatLoop(firstNum, secondNum){
//     for (var i= firstNum; i<=secondNum; i++){
//         console.log(i)
//     }
// }
// creatLoop(0, 250)

// question 9;

// function calculateYpotenuse(){
//     var base = prompt("Enter base value")
//     var perpendicular = prompt("Enter perpendicular value")

//     var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)

//     function calculateSquare(value) {
//         return value * value
//     }
//         return hypotenuse
// }calculateYpotenuse()


//Chapter 38-42;


// question 1;

// function power(num,power){
//       var power=num**power;
//       return power
// }

// var a=+prompt('Enter number ');
// var b=+prompt('Enter  power');
// var power=power(a,b);
// document.write(a+'<sup>' + b +'</sup>'+'is '+power)


// question 2;

// var userYear = prompt('Enter the year');
// switch (userYear) {
//     case '2012':
//         alert('Leap Year')
//         break;
//     case '2016':
//         alert('Leap Year')
//         break;
//     case '2020':
//         alert('Leap Year')
//         break;

//     default:
//         alert('Not a leap year')


// }


// question 3;

// function area(s1, s2, s3) {
//     var S = findS(s1, s2, s3);
//     var area = S*(S - a)*(S - b)*(S - c);
//     return area;
// }
// function findS(a, b, c) {
//     var find = (a + b + c) / 2
//     return find
// }
// var a = +prompt('length a');
// var b = +prompt('length b');
// var c = +prompt('length c');
// var result = area(a, b, c)
// document.write('The area of triangle is '+result)


// question 4;

// function mainFunction() {
//     var sub1 = +prompt('Enter first subject marks');
//     var sub2 = +prompt('Enter second subject marks');
//     var sub3 = +prompt('Enter third subject marks');
//     var total = +prompt('Enter total marks')
//     var average = ave(sub1, sub2, sub3);
//     var per = percen(sub1, sub2, sub3, total);
//     document.write('<h3>' + 'Average is ' + '</h3>' + average + '<br>');
//     document.write('<h3>' + 'Percentage is ' + '</h3>' + per+' %' + '<br>');

// }
// function ave(a, b, c) {
//     var av = (a + b + c) / 3;
//     av=av.toFixed(2)
//     return av;
// }

// function percen(a, b, c, total) {
//     var percentage = ((a + b + c) / total) * 100;
//    percentage= percentage.toFixed(2);
//     return percentage;
// }
// mainFunction();


// question 5;


// function index(str, char) {
//     var no;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             no = i
//             break;
//         }
//     }
//     return no
// }
// var str = 'hello world'
// var indexOf = prompt('Write character to find ');
// var result = index(str, indexOf);
// document.write('The indexOf ' + indexOf + ' is ' + result)


// question 6;

// var str = prompt('Enter sentences to delete vowels in them');
// function removeVowels(sentence) {
//     var removed = ''
//     for (var i = 0; i < sentence.length; i++) {
//         if (sentence[i] === 'a' || sentence[i] === 'A' || sentence[i] === 'e' || sentence[i] === 'E' || sentence[i] === 'i' || sentence[i] === 'I' || sentence[i] === 'o' || sentence[i] === 'O' || sentence[i] === 'u' || sentence[i] === 'U') {
//             continue
//         }
//         else {
//             removed += sentence[i]
//         }
//     }
//     return removed
// }
// var result = removeVowels(str);
// document.write('Before :' + str + '<br>');
// document.write('After  : ' + result + '<br>');

// question 7;

// var str = 'Please read this application and give me gratuity';
// var occurence = [];
// var count = 0;
// function findOccurence() {
//     var chars = str.toLowerCase().split('');
//     for (var i = 0; i < chars.length; i++) {
//         var char = chars[i];
//         var next = chars[i + 1];
//         if (isCorrectCharc(char) && isCorrectCharc(next)) {
//             count++;
//             var twoChar = char + next;
//             occurence.push(twoChar)
//         }
//     } return count
// }
// function isCorrectCharc(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false
//     }

// }
// var count = findOccurence();
// document.write('String :' + str + '<br>');
// document.write('Count :' + count + '<br>');
// document.write('Occurence :' + occurence + '<br>');


// question 8;

// var distance = +prompt("Enter distance from city A to City B in KM: ")
// meter(distance)
// feet(distance)
// inches(distance)
// centimeters(distance)

// function meter(dis){
//   var meterDistance = dis * 1000
//   document.write("Distance between city A to city B is " + meterDistance + " meters." + "<br>")
// }

// function feet(dis){
//   var feetDistance = dis * 3281
//   document.write("Distance between city A to city B is " + feetDistance + " feets." + "<br>")
// }

// function inches(dis){
//   var inchDistance = dis * 39370
//   document.write("Distance between city A to city B is " + inchDistance + " inches." + "<br>")
// }

// function centimeters(dis){
//   var centimeterDistance = dis * 100000
//   document.write("Distance between city A to city B is " + centimeterDistance + " centimeters." + "<br>")
// }

// question 9;

// var workingHours = +prompt("Enter your working hours: ")
// var overTime, overTimePay;
// var overTimeHourPay = 12;

// if(workingHours > 40){
//   overTime = workingHours - 40;
//   overTimePay = overTime * overTimeHourPay;
//   alert("Your overtime pay cost is: " + overTimePay + "rupees");
// }

// else{
//   alert("You need to work more to get overtime")
// }

// question 10;

// var amount = +prompt("Enter amount to Withdraw")
// var hundred = parseInt(amount / 100)
// var fifty = parseInt((amount % 100) / 50)
// var ten = parseInt((((amount % 100) % 50) / 10))

// document.write("Entered amount: " + amount + "<br>");
// document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.")

