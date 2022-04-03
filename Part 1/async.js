/*

    Asynchronicity
    Note: We recommend that after you complete a challenge, you re-comment out the test case for that challenge so the console output is not confusing when working on subsequent challenges.
    Challenge 1
    Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?
    Challenge 2
    Create a function delayedGreet that console logs welcome after 3 seconds.
    Challenge 3
    Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
    Challenge 4
    Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
    Challenge 5
    Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
    Challenge 6

    Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

    everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

    Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
    What do you expect to happen?
    Challenge 7

    Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

    When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
    Challenge 8

    Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

    Hint: take a look at the Promise object docs on MDN.
    Challenge 9
    Write a SecondClock class, with two methods: start and reset. ​

    start: upon invocation, invokes a callback (this.cb, defined in the constructor) on an argument every second, with the argument to the callback being the current seconds "value".

    In other words, the callback gets invoked every second on the "seconds hand" of the clock. Always start with 1 and don't utilize the seconds value of the current computer clock time.
        The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
        The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
        ...
        The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
        The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
        The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
        etc.

    reset: upon invocation, completely stops the "clock".
    Also resets the time back to the beginning.
    ​
    Hint: look up setInterval and clearInterval.
    Challenge 10

    Write a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.

    Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset.

    For examples of debouncing, check out https://css-tricks.com/debouncing-throttling-explained-examples/

*/
/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below


console.log("I am at the beginning of the code");

setTimeout(function cb() {
  console.log("I am in the setTimeout callback function");
}, 0);


console.log("I am at the end of the code");


console.log('End of Challenge 1');
// */// (do not alter this line)



/////////////////
 //             //
 // CHALLENGE 2 //
 //             //
 /////////////////
 
/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 2');
 // ...your code below
 
 var intervals = setInterval(function cb() {
    console.log("Interval Hello!")
 }, 2000);

  //clearAllIntervals()

  //setTimeout(clearAllIntervals, 10000)
  
  setTimeout(function cb (){
    clearInterval(intervals);
  }, 10000);

 // ...your code above
 function clearAllIntervals() {
   for (let i = 0; i < 1000; i++) {
     clearInterval(i);
   }
 }

 console.log('End of Challenge 2');
 // */// (do not alter this line)



/////////////////
 //             //
 // CHALLENGE 3 //
 //             //
 /////////////////
 
 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 3');
 // ...your code below

function sayHowdy() {
  console.log("Howdy");
}
  
 
function everyXsecsForYsecs(cb, intVal, totaltime) {
  var intervals = setInterval(sayHowdy, intVal*5);
  setTimeout(function cb (){
    clearInterval(intervals);
  }, totaltime*5);
}

everyXsecsForYsecs(sayHowdy, 1000, 5000);
 
 console.log('End of Challenge 3');
 // */// (do not alter this line)



 /////////////////
 //             //
 // CHALLENGE 4 //
 //             //
 /////////////////
 
 /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 4');
 // ...your code below

var delays = [];

 function foreach(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
      cb(arr[i], i);
    }
 }
 
 function delayLog(delayTime, i) {
   setTimeout(function cb() {
     console.log(`${delayTime} - ${i}`);
   }, delayTime);
 }
 
delays.push(2000);
delays.push(5000);
delays.push(0);
delays.push(3500);

foreach(delays, delayLog);
 

 console.log('End of Challenge 4');
 // */// (do not alter this line)
 

 

/////////////////
 //             //
 // CHALLENGE 5 //
 //             //
 /////////////////
 
  /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 5');
 // ...your code below
 
function changeColor() {
  

  if(window.getComputedStyle(document.body).backgroundColor == "rgb(221, 238, 255)") {
    console.log("if");
    document.body.style.backgroundColor = "rgb(255, 238, 221)";
  } else {
    console.log("else");
    document.body.style.backgroundColor = 'rgb(' + 221 + ',' + 238 + ',' + 255 + ')';
  }
}

function button1(){
  console.log("clicked 1");
  document.getElementById("color").addEventListener("click", changeColor); 
}
 
document.getElementById("activate").addEventListener("click", button1); 
 
 // ...your code above
 document.body.style.background = '#def';
 console.log('End of Challenge 5');
 // */// (do not alter this line)
 
 

 /////////////////
 //             //
 // CHALLENGE 6 //
 //             //
 /////////////////
 
/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 6');
 var dataReceived;
 
 function ajaxSimulate(id, callback) {
   var database = ['Aaron', 'Barbara', 'Chris'];
   setTimeout(function cb (){
           callback(database[id]);
   }, 0)
 
 }
 // ...your code below
 
function storeData(input) {
  dataReceived = input;
  
  console.log(dataReceived);
}


ajaxSimulate(1, storeData);


  console.log(dataReceived); //undefined bc of settimeout this will be run first
 
 console.log('End of Challenge 6');
 // */// (do not alter this line)




 /////////////////
 //             //
 // CHALLENGE 7 //
 //             //
 /////////////////
 
  /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 7');
 // ...your code below
 
 // ...your code below
function getArtist(artist){
  var url = "https://rest.bandsintown.com/artists/" + artist + "?app_id=jshp";
  fetch(url)
  .then(function(data){
    return data.json();
  })
  .then(function(res){
    var img = res.image_url;
    var dom = document.getElementById("ch2");
    var imgDom = document.createElement("img");
    imgDom.setAttribute("src", img);
    dom.appendChild(imgDom);
  })
  .catch(function(err){
    console.log(err);
  })
}
getArtist("maroon5");
//  function getArtist(artist){
//   let request = new XMLHttpRequest();
//   var url = "https://rest.bandsintown.com/artists/" + artist + "?app_id=jshp";
//   request.open('GET', url);
//   request.responseType = "json";

//   request.onload = function() {
//     var img = request.response.image_url;
//     var dom = document.getElementById("ch2");
//     var imgDom = document.createElement("img");
//     imgDom.setAttribute("src", img);
//     dom.appendChild(imgDom);
//   };

//   request.send();

// }

// getArtist("maroon5");
 
 console.log('End of Challenge 7');
 // */// (do not alter this line)
 


  /////////////////
 //             //
 // CHALLENGE 8 //
 //             //
 /////////////////
 
  /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 8');
 // ...your code below
 
 
 function getEvents(artist){
  var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=jshp";
  fetch(url)
  .then(function(data){
    return data.json();
  })
  .then(function(res){
    var ul = document.createElement("ul");
    
    for (let element in res) {
      var li = document.createElement("li");
      var node = document.createTextNode(res[element].venue.name);
      li.appendChild(node);
      ul.appendChild(li);
      
      console.log(res[element].venue.name);
    }
     document.getElementById("ch3").appendChild(ul);
  })
  .catch(function(err){
    console.log(err);
  })
}
getEvents("maroon5");
 
 
 
 console.log('End of Challenge 8');
 // */// (do not alter this line)




 /////////////////
 //             //
 // CHALLENGE 9 //
 //             //
 /////////////////
 
 // /* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
 console.log('Start of Challenge 9');
 // ...your code below
 
 
  function findEventUS(artist){
  var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=jshp";
  fetch(url)
  .then(function(data){
    return data.json();
  })
  .then(function(res){
    var ul = document.createElement("ul");
    
    for (let element in res) {
      
      if(res[element].venue.country === 'Costa Rica') {
         
        var li = document.createElement("li");
        var node = document.createTextNode(res[element].venue.name);
        li.appendChild(node);
        ul.appendChild(li);
      
      }
      console.log(res[element].venue.name);
    }
     document.getElementById("ch4").appendChild(ul);
  })
  .catch(function(err){
    console.log(err);
  })
}

findEventUS("maroon5");
 
 
 
 
 console.log('End of Challenge 9');
 // */// (do not alter this line)
 

