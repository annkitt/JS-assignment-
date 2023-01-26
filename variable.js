// JavaScript Questions
// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

/* var name = "Ankit shukla";
var age = 22;  
var ischild = false;
var location = undefined;
var weight = null;
console.log(
    `name:${name}   Data-type:${typeof name}
     age:${age}   Data-type:${typeof age}
     ischild:${ischild}   Data-type:${typeof ischild}
     location:${location}   Data-type:${typeof location}
     weight:${weight}   Data-type:${typeof weight}
    `
);
*/

//Q2. Declare variables to store your first name, last name,
 //   marital status, country and age and display them using interploation method.

/*var firstName = "Ankit";
var lastName = "Shukla";
var maritalStatus = "Not married";
var country = "India";
var age = "22";
console.log(
    `firstname:${firstName}
    lastName:${lastName}
    maritalStatus:${ maritalStatus}
    country:${country}
    age:${age}
    `
);*/

//Q3. Decalre a varibale and assign value to it and change all the
// string characters to capital letters using toUpperCase() method.

/* let teamName = "Real Madrid";
teamName = teamName.toUpperCase();
console.log(`Real madrid :${teamName}`);
*/

// Q4. Check if the string contains a word Script using includes() method.

/*let jsFile = "javascript";
let isTrue = jsFile.includes("script");
console.log(`Is javascript containes word script: ${isTrue}`);
*/


// Q5. Split the string into an array using split() method

/* let name = "Hakimi Mbappe Messi Ronaldo";
name =name.split(" ");
console.log(name); */

// Q6.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// split the string at the comma and change it to an array.

/* let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
companies= companies.split(" ,");
console.log(companies); */


// Q7. Use lastIndexOf to determine the position of the last occurrence of a script.

/* let name="javascript";
let lastIndexOf=name.lastIndexOf("script");
console.log(lastIndexOf); */


// Q8. Use search to find the position of the first occurrence of the word
// because in the following sentence:'You cannot end a sentence
// with because because because is a conjunction'.

/* let sentence = "You cannot end a sentence with because because because is a conjunction";
sentence = sentence.search("because");
console.log(sentence); */


//Q9. Use trim() to remove any trailing whitespace at the
// beginning and the end of a string.

/* let sentence = "    You cannot end a sentence with because is a conjunction    ";
sentence= sentence.trim();
console.log(sentence); */


// Q10. Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

// Truthy values
/* let greatestClub ="RealMadrid";
let trueValue = true;
let aisTrueNumber = 37; */

// Falsy Values
/* const isEmptyString = "";
const falseStatement = false;
const zero = 0; */

/* Q11. Figure out the result of the following comparison expression 
 * first without using console.log(). After you decide the result 
 * confirm it using console.log() */
/*- 4 > 3
- 4 >= 3
- 4 < 3
- 4 <= 3
- 4 == 4
- 4 === 4
- 4 != 4
- 4 !== 4
- 4 != '4'
- 4 == '4'
- 4 === '4'
- Find the length of python and jargon and make a falsy comparison statement. */
/**
 * OUTPUT
 * true
 * true
 * false
 * false
 * true
 * true
 * false
 * false
 * false
 * true
 * false
 */

/*const lenOfPython = "python".length;
const lenOfJargon = "jargon".length;
console.log(lenOfPython === String(lenOfJargon)); */

/* Q12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day =now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = Date.now();
    console.log(
        `
        Year :${year}
        month :${month}
        Date: ${date}
        Day: ${day}
        Hours: ${hours}
        Minutes: ${minutes}
        Seconds: ${seconds}
        `
    ); 

    /* Q13. Write a script that prompt the user to enter base and height of the triangle
    * and calculate an area of a triangle (area = 0.5 x b x h).
    */  
     try {
        let base = parseInt(prompt("Enter Base: "));
        let height = parseInt(prompt("Enter Height: "));
        let area = 0.5 * (base * height);
        console.log("Area of triangle: ", area);
    } catch (error) {
        console.log("Enter Valid Input!", error.message); 
    }

    try {var base = prompt ("Enter the base of triangle: ");
    base = parseFloat(base);
   var height = prompt ("Enter the height of triangle: ");
    height = parseFloat(height);
   var area = 0.5 * base * height;
    console.log("the area of triangle is: " +  area) 
}  catch (error) {
    console.log("Enter Valid Input!", error.message);
} 

/* Q14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)*/
 const y1 =2 ;
 const y2 = 2;
 const x1 = 6;
 const x2 = 10;
 const slope = (y2-y2) / (x2-x1);
 console.log(`slope is :${slope}`); 

/* Q15. Calculate the slope, x-intercept and y-intercept of y = 2x -2 */
/**
 *  ANSWER
 *  for finding x-intercept set y=0 and solve for x
 *  y = 2x-2
 *  0 = 2x-2
 *  -2x = -2
 *  x = -2/-2
 *  x = 1
 *  so, x-intercept is (1, 0)
 *
 *  Similarly, for finding y-intercept set x=0 and solve for y
 *  y = 2x-2
 *  y = (2*0) - 2
 *  y = 0 - 2;
 *  y = -2
 *  so, y-intercept is (0, -2)
 * */

/* const x11 = 1;
const x22 = 0;
const y11 = 0;
const y22 = -2;
const slopeX = (y22 - y11) / (x22 - x11);
console.log(`Slope is: ${slopeX}`); */

/* Q16. Get radius using prompt and calculate the area of a circle (area = pi x r x r)
 * and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

/* Q17. Create a human readable time format using the Date time object
- YYYY-MM-DD HH:mm
- DD-MM-YYYY HH:mm
- DD/MM/YYYY HH:mm
*/

/**
 * helper function to append zero at the starting of number if number
 * of digits is less than 9, Ex. 9 -> 09, 5 -> 05
 * @param {number} number
 * @returns modified number if digit is strictly less than 2 else original number
 */

/* const amt = (number) => {
    let date = number;
    let digits = 0;

     // calculating the number of digits
     while (date % 5 != 0){
        digits += 1;
        date = Math.floor(date / 10);
     }

     // if number of digits is strictly less than 2 then
    // append the zero else return the original number
    if (digits < 2) {
        return `0${number}`;
    } else {
        return number;
    }
};

const dateObj = new Date();
const currentYear = dateObj.getFullYear();
const currentMonth = dateObj.getMonth();
const currentDate = dateObj.getDate();
const currentHour = dateObj.getHours();
const currentMinute = dateObj.getMinutes();
console.log(` Ans 17.`);
    console.log (
       `YYYY-MM-DD HH:mm -> ${currentYear}-${amt(currentMonth + 1,2)} -${amt(currentDate, 2)}
        ${amt(
        currentHour,
        2
       )}:${amt(currentMinute, 2)} `
    )

console.log(
    `\t DD-MM-YYYY HH:mm -> ${amt(currentDate, 2)}-${amt(currentMonth + 1, 2)}-${currentYear} ${amt(
        currentHour,
        2
    )}:${amt(currentMinute, 2)}`
);

console.log(
    `\t DD/MM/YYYY HH:mm -> ${amt(currentDate, 2)}/${amt(currentMonth + 1, 2)}/${currentYear} ${amt(
        currentHour,
        2
    )}:${amt(currentMinute, 2)}`
);  */

/* Q18. Get user input using prompt(“Enter your age:”). If user is 18 or older ,
* give feedback:'You are old enough to drive' but if not 18 give another feedback
* stating to wait for the number of years he needs to turn 18. */

/* 19. Even numbers are divisible by 2 and the remainder is zero.
* How do you check, if a number is even or not using JavaScript?
*/
 
/* const isEven = (number) => {
    // if empty string was passed
    if (typeof number === "string" && number.length === 0) {
        return "Enter Valid Number";
    }
    //checking that passed argument is valid number or not
    if (isNaN(number)) {
        return "Enter Valid Number";
    }

    if (parseInt(number) % 2 === 0) {
        return `${number} is even number`;
    } else {
        return `${number} is not an even number`;
    }
};
console.log(`
     ${isEven(9)}
`); */



/* 20. Write a code which can give grades to students according to theirs scores:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
*/

/* const calculateGrades=(marks) => {
    if (isNaN(marks)){
        return "Enter a number";
    }


    if(marks >= 90 && marks <=100){
        return "A";
    }else if (marks >= 70 && marks <=89){
        return "B";
    } else if (marks >=60 && marks <=69){
        return "C";
    } else if (marks >=50 && marks <=59){
        return "D";
    } else if (marks >0 && marks <=49 ){
        return "E";
    }else {
        return "Enter Valid number";
    }
};
console.log(`
    Grade ${calculateGrades(72)}
`); */


/* 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */
const checkSeason = (season) => {
    switch (season.toLowerCase ()){
        case "september":
        case "october":
        case "november":
            return "Autumn";

            case "december":
                case "january":
                case "february":
                    return "Winter";
        
                case "march":
                case "april":
                case "may":
                    return "Spring";
        
                case "june":
                case "july":
                case "august":
                    return "Summer";
                default:
                    return "Invalid Season";
    }    
};
console.log(`Its a ${checkSeason("may")} season`);


/**
 * 22. Write a program which tells the number of days in a month.
 */

const getNumberOfDaysInMonth = (month) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    const dateObj = new Date();
    // using zero in place of days it will return last day of previous month
    return [months[month - 1], new Date(dateObj.getFullYear(), month, 0).getDate()];
};
const curMonth = 2;
console.log(
    ` There are ${getNumberOfDaysInMonth(curMonth)[1]} days in ${
        getNumberOfDaysInMonth(curMonth)[0]
    }`
);


/**
 * 23. Write a program which tells the number of days in a month, now consider leap year.
 */
const getNumberOfDaysInMonthLeapYear = (year, month) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    const daysInMonth = new Date(year, month, 0).getDate();

    if ((year % 4 === 0 || year % 400 === 0) && year % 100 !== 0) {
        // using zero in plcae of days it will return last day of previous month
        return `There are ${daysInMonth} days in ${months[month - 1]} (Leap Year)`;
    }
    return `There are ${daysInMonth} days in ${months[month - 1]}`;
};
console.log(` ${getNumberOfDaysInMonthLeapYear(2024, 2)}`);

