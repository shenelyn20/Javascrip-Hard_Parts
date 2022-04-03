// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


// ##########################
// # Higher-Order Functions #
// ##########################


// Challenge 1
/*
Create a function addTwo that accepts one input and adds 2 to it.
*/
const addTwo = (num) => {
	return num + 2;
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
/*
	Create a function addS that accepts one input and adds an "s" to it.
*/
const addS = (word) => {
	return word + 's'
};

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
/* Create a function called map that takes two inputs:

    an array of numbers (a list of numbers)
    a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')

Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

const map = (array, callback) => {
	// return array.reduce((prev, curr) => {
	// 	prev.push(addTwo(curr))
	// 	return prev
	// }, []);
  
  for(let i = 0 ; i < array.length; i++) {
  	array[i] = callback(array[i])
  }
	return array;
};

// console.log(map([1, 2, 3], addTwo));
// console.log(map([4, 5, 6], addTwo));


// Challenge 4
/*
The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
*/
const forEach = (array, callback) => {
	for(let i = 0; i < array.length; i++) {
		callback(array[i]);
  }
};

// See for yourself if your forEach works!

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, char => alphabet += char);
// console.log(alphabet);   //prints 'abcd'

// Challenge 5
/*
For this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop. 
*/
const mapWith = (array, callback) => {
	// let res = [];
	// array.forEach(element => {
	// res.push(callback(element))
	// })
	// return res;
	array.forEach((element, index) => {
    array[index] = callback(element);
  })
  return array;
};

// console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
/*
The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
*/
const reduce = (array, callback, initialValue) => {
	
  for(let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i])
  }
  return initialValue;
};

// const nums = [4, 1, 3];
// const add = (a, b) => a + b; 
// console.log(reduce(nums, add, 0));   //-> 8


// Challenge 7
/*
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce! 
*/
const intersection = (...arrays) => {
  //...arrays merges arrays 
	return arrays.reduce((prevArr, currentArr) => {
    return prevArr.filter((element) => currentArr.includes(element));
  })
};

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
/*
Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce! 
*/
const union = (...arrays) => {
  //...arrays merges arrays 
  
	// return arrays.reduce((prevArr, currentArr) => {
	// 	currentArr.forEach(element => {
	// if(!prevArr.includes(element))
	// prevArr.push(element);
	// })
	// return prevArr;
	// }, [])

	return arrays.reduce((prevArr, currentArr) => {
		currentArr = currentArr.filter(element => !prevArr.includes(element))
    return prevArr.concat(currentArr)
  }, [])	
  
};

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
/*
Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value. 
*/
const objOfMatches = (array1, array2, callback) => {
//   let obj = {};
//   array1.forEach((element, index) => {
// 		if(callback(element) === array2[index])
//       Object.assign(obj, {[element]: array2[index]});
//   });

// 	return obj
  
  return array1.reduce((reducer, curr, index, arr) => {
  	if(callback(arr[index]) === array2[index])
  		Object.assign(reducer, {[arr[index]]: array2[index]});
    return reducer;
  }, {});

};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
/*
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. 
*/
const multiMap = (arrVals, arrCallbacks) => {
  
	return arrVals.reduce((reducer, curr) => {
  	let arr = arrCallbacks.map((element)=> {
    	return element(curr);
		});
    
  	return Object.assign(reducer, {[curr]: arr});
	}, {});
};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
/*
Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function). 
*/
const commutative = (func1, func2, value) => {
  
  return func2(func1(value)) === func1(func2(value))
};

// /*** Uncomment these to check your work! ***/
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 12
/*
Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object. 
*/
const objFilter = (obj, callback) => {
//Object.entries() transforms an object of key-value pairs into an array
//Object.fromEntries() transforms an array of key-value pairs into an object
	return Object.fromEntries(Object.entries(obj).filter(([key, value]) => {
    return callback(key) === value;
  }));


};

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 13
/*
Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input. 
*/
const rating = (arrOfFuncs, value) => {
  
  let total = 0;
	arrOfFuncs.forEach(function(cb) {
    if(cb(value)) total ++;
  });
  
  return (total / arrOfFuncs.length) * 100;
};

/*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 14
/*
Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output. 
*/
const pipe = (arrOfFuncs, value) => {

  return arrOfFuncs.reduce((reducer, curr) => {
  	return curr(reducer)
  }, value);
};

/*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 15
/*
Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input. 
*/
const highestFunc = (objOfFuncs, subject) => {
  var maxKey;
  for (let entry in objOfFuncs) {
    
    if(!maxKey) maxKey =  entry;
    else {
      maxKey = objOfFuncs[maxKey](subject) < objOfFuncs[entry](subject)?
        entry :maxKey;
    }   
  }
    return maxKey;

  
	// let newVal = Object.entries(objOfFuncs).reduce((reducer, [key,val]) => {
	// 	if(val(subject) > reducer) reducer = val(subject);
	// return reducer;
	// }, 0);
	// return Object.keys(objOfFuncs).find(key => objOfFuncs[key](subject) === newVal);
  
};

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'








// ###########
// # Closure #
// ###########


// Challenge 1
/*

Challenge 1
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".

const function1 = createFunction();
// now we'll call the function we just created
function1(); //should console.log('hello');
  

When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

*/
const createFunction = () => {

  	function inner() {
      console.log("hello");
    }
  	return inner;
};

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
// function1();


// Challenge 2
/*
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

const printSample = createFunctionPrinter('sample');
const printHello = createFunctionPrinter('hello')
// now we'll call the functions we just created
printSample(); //should console.log('sample');
printHello(); //should console.log('hello');

*/
const createFunctionPrinter = (input) => {
	function inner() {
    console.log(input);
  }
  
  return inner;
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();


// Challenge 3
/*
Challenge 3
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. 
*/
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


// Challenge 4
/*
Now we are going to create a function addByX that returns a function that will add an input by x.

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14


*/
const addByX = (x) => {
  function inner(y) {
    return x + y;
  }
  return inner;

};

const addByTwo = addByX(2);

// // now call addByTwo with an input of 1
// console.log(addByTwo(1));

// // now call addByTwo with an input of 2
// console.log(addByTwo(2));

// Challenge 5
/*
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called. 
*/
const once = (func) => {
	function inner(input) {
    return func(input)
  }
  return inner;
};

const onceFunc = once(addByTwo);

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


// Challenge 6
/*
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter. 
*/
const after = (count, func) => {
  let i = 1;
	function inner() {
    if(i === count) return func();
    i++;
    
  }
  return inner;
};

const called = () => console.log('hello');
const afterCalled = after(3, called);

  // afterCalled(); // -> nothing is print``ed``
// afterCalled(); // -> nothing is prin ted
// afterCalled(); // -> 'hello' is printed


// Challenge 7
/*
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout(); 
*/
function delay(func, wait, ...rest) {
    function inner() {
      func(...rest);
    }
    setTimeout(inner, wait);
}
  
const firstMsg = function(num) {console.log(`this is the first message: ${num}`)};
  
// const delayFunc = delay(firstMsg, 1000, 1 )
// delayFunc

// const samp = setTimeout(() => {console.log("this is the second message")}, 2000);
// samp

// Challenge 8
/*
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'. 
*/
const russianRoulette = (num) => {
  let counter = 1;
  function inner() {
    let str = counter < num? 'click' : 
    	(counter === num? 'bang': 'reload to play again')
  	counter++;
    
    return str;
  
  }

  return inner;
};

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'


// Challenge 9
/*
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0. 
*/
// function average() {
//   var arr = [];
//   var output = 0;
//   function getTheAve() {
//     if (arguments.length) {
//         arr.push(arguments[0]);
//       output = (arr.reduce((a, b) => a + b))/arr.length
//     }
//       return output;

//   }
//   return getTheAve;
  
// }
function average() {
  var arr = [];
  var output = 0;
  function getTheAve() {
    if (arguments.length) {
        arr.push(arguments[0]);
      output = (arr.reduce((a, b) => a + b))/arr.length
    }
      return output;

  }
  return getTheAve;

  } 
/*
  
  const average = () => {
  let counter = 0;
  let total = 0;
	function inner(...args) {
    let avg;
    if(args.length>0)counter++;
    if(counter === 0) avg = 0;
    else {
      total = total + Number(args);
      avg = total/counter
    }
    return avg
	
	}
  return inner;
};

*/

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
// console.log(avgSoFar()); // should log: 0
// console.log(avgSoFar(4)); // should log: 4
// console.log(avgSoFar(8)); // should log: 6
// console.log(avgSoFar()); // should log: 6
// console.log(avgSoFar(12)); // should log: 8
// console.log(avgSoFar()); // should log: 8


// Challenge 10
/*
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false. 
*/

const makeFuncTester = (arrOfTests) => {
  function inner(func) {
    let result = false;
    arrOfTests.forEach(element => {
			result = func(element[0]) === element[1]
    });
    
    return result;
  }
  return inner;
};

/*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true


// Challenge 11
/*
Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that delted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'. 
*/
const makeHistory = (limit) => {
  let arr = [];
	function inner(str) {
    if(arr.length > limit) arr.shift()
    if(str === 'undo'){
    	if(!arr.length) str = "nothing to undo"
      else {
      	str = arr[arr.length-1] + " undone";
        arr.pop();
      }
    } else {
      arr.push(str)
      str += " done";
    }
    return str;
    
  }
  return inner;
};

/*

  function makeHistory(limit) {
    var arr = [];
      function pushNPop(str) {
      if(str !== 'undo'){
        
        arr.push(str);
        
        if(arr.length > limit) arr = arr.slice(1);
        
        return `${str} done`
      }
      
      else {
        if(!arr.length ) return 'nothing to undo';
        
        else {
          var popped = arr[(arr.length)-1];
          arr.pop();
          return `${popped} undone`
        }
      }
      
      
    }
    return pushNPop;
  }
  
*/
/*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
// console.log(myActions('jump')); // should log: 'jump done'
// console.log(myActions('undo')); // should log: 'jump undone'
// console.log(myActions('walk')); // should log: 'walk done'
// console.log(myActions('code')); // should log: 'code done'
// console.log(myActions('pose')); // should log: 'pose done'
// console.log(myActions('undo')); // should log: 'pose undone'
// console.log(myActions('undo')); // should log: 'code undone'
// console.log(myActions('undo')); // should log: 'nothing to undo'


// Challenge 12
/*
Inspect the commented out test cases carefully if you need help to understand these instructions.
Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.

On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

On the SECOND invocation of the PLAYER function, it will return either:

    the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
    the string 'bust' if that sum is over 21.


If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

    the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
    the string 'bust' if the new sum is over 21.


And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.

You may assume that the given array is long enough to give a 'bust' before running out of numbers.

BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.
*/
  // CHALLENGE 19
  function blackjack(array) {
    
    var index = 0;
      function dealer(arg1, arg2) {
        var sum = arg1 + arg2;
        var over21 = false;
        var start = true; //start of deal
        function player() {
          if(!start) {
            sum = sum + array[index-1];
            if(sum > 21){
              
              if(over21) return 'you are done!';
              else {
                over21 = true;
                return 'bust';
              }
            }
          }
          
          index++;
          start = false;
          return sum;
    
          
        }
        return player;
      }
    return dealer;
  }
  
// const blackjack = (array) => {
  
//   let arr_index = 0
// 	function dealer(num1, num2) {
//     let bool = false;
//     let total = 0;
//     function player() {
//       let str = 'bust';
//       if(total === 0) total = num1 + num2;
//       else if(total < 21 ) {
//       	total += array[arr_index];
//         arr_index++;
        
//         if(total > 21) {
//           bool = true;
//           return str;
//         }
//       }
//       if(total > 21) {
//         str = 'you are done!';
//         return str
//       }
//       return total
      
//     }
//     return player;
    
//   }
  
//   return dealer;
// };

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// // /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // should log: 9
// console.log(i_like_to_live_dangerously()); // should log: 11
// console.log(i_like_to_live_dangerously()); // should log: 17
// console.log(i_like_to_live_dangerously()); // should log: 18
// console.log(i_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// // /*** BELOW LINES ARE FOR THE BONUS ***/

// // /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // should log: 4
// console.log(i_TOO_like_to_live_dangerously()); // should log: 15
// console.log(i_TOO_like_to_live_dangerously()); // should log: 19
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// // /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!






// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
/*
Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce! 
*/
const functionValidator = (funcArr, input, output) => {
  return funcArr.reduce((reducer, curr) => {
    if(curr(input) === output) reducer.push(curr);
    return reducer;
  }, []);

}

const addFive = num => num + 5;
const multiplyByTwo = num => num * 2;
const subtractOne = num => num - 1;
const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]


// Challenge 2
/*
Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value. Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true). 
*/
const allClear = (funcArr, value) => {
  return funcArr.reduce((reducer, curr) => {
    reducer = curr(value) && reducer? true: false;
    return reducer;
  }, true);
}

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true 
// console.log(allClear(numFnArr, -25)) // should log false
 

// Challenge 3
/*
Write a function numSelectString that accepts an array of numbers and returns a string. This function should use filter, sort, and reduce to return a string containing only the odd numbers from the array, separated by commas, in ascending order. 
*/
const numSelectString = (numArr) => {
	return numArr.filter((element) => element % 2)
	.sort((a, b) => a - b)
  .reduce((reducer, curr, index, arr) => {
    if(index < arr.length-1) curr +=", ";
    reducer += curr
    return reducer
  }, "");
  
}

const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"


// Challenge 4
/*
Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. The titles should be all uppercase strings. 
*/
const movieSelector = (moviesArr) => {

// 	let samp = moviesArr.map(obj => {
		
    
//   	let arr = Object.entries(obj).reduce((reducer, [key,val]) => {
//     	if(key === 'title' || key === 'score') reducer.push(val);
//       return reducer
//     }, []);
    
//     return arr;

//   })
//   .filter(([key,val]) => val > 5)
//     .map(([key,val]) => {
//     	return key.toUpperCase();
//   	});
  
//   return samp
  

	return moviesArr.filter(obj => obj.score > 5)
  .map(obj => {
    return Object.entries(obj).reduce((reducer, [key,val]) => {
    	if(key === 'title') reducer.push(val);
    	return reducer
    }, []).toString().toUpperCase()
    
  })
}

const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]



// Challenge 5
/*
Create a function curriedAddThreeNums that adds three numbers together when run thrice in succession as follows:

curriedAddThreeNums(1)(3)(7) //should return 10

*/
const curriedAddThreeNums = (num1) => {

  function second(num2) {
    num2 += num1
    function third(num3) {
      num3 += num2
      return num3;
		}
    return third;
	}
  return second
}

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3
// console.log(curriedAddThreeNums(1)(3)(7)) //should return 11


//Challenge 6
/*
Use partial application with your previously-defined curriedAddThreeNums to create a new function curriedAddTwoNumsToFive that when run twice in succession, adds two numbers to five as follows:

curriedAddTwoNumsToFive(6)(7) //should return 18
*/
const curriedAddTwoNumsToFive = (num1) => {

  function second(num2) {
    num2 += num1 + 5;

    return num2;
	}
  return second
}
// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18






