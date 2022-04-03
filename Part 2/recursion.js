// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


// Challenge 1
function countdown(n) {
  console.log(n);
  if(n > 0) {
  	n--; 
  	countdown(n)
  }

}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
function sum(array) {

  
  const firstElement = array.shift();

  if(array.length > 0) return firstElement + sum(array);
  else return firstElement;

}

// uncomment these to check your work
 // console.log(sum([1,1,1 ])); // -> returns 3
 // console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(string) {

	string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	if(string.charAt(0) === string.charAt(string.length-1)) {
    if(string.length === 1 || string.length === 2 )
    	return true;
    else {
    	string = string.slice(1, -1);
      return palindrome(string);
    }
  } else return false
    
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false


// Challenge 4

function isPrime(num) {
  
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
    return num > 1;
//   if(num === 1) return false;
//   if(num === 2) return true;
//   if(num > 2) {
//   	for(let i = 2; i < num; i++) {
//     	if(num%i === 0) return false;
//       else if (i === num-1) return true;
      
// 		}
//   }

}

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false


console.log(isPrime(11)); //-> true
console.log(isPrime(13)); //-> true
console.log(isPrime(33)); //-> false
console.log(isPrime(44)); //-> false


//Challenge 5
function pathFinder(obj, arr) {

}

const obj = { first: 
            	{ second: 
               	{third: "finish" 
              	}
              }, 
             	second: {
                third: "wrong" 
              } 
            };
const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6
function flattenRecursively(arr) {

}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
function findInOrderedSet(arr, target) {

}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
function countWaysToReachNthStair(n) {

}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9
function getPermutations(arr) {

}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
function getRangeBetween(x, y) {

}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
