// function square(x) {
//   return x * x;
// }


// function sum(n){
// 	if (n <= 0){
// 		return 0;
// 	}
// 	return n + sum(n-1);
// }


// function factorial(n){
// 	if (n <= 0){
// 		return 1;
// 	}
// 	return n + sum(n-1);
// }

// function string(str, count){
// 	if (count === 1){
// 		return str;
// 	}
// 	return str + string(str, count - 1)
// }

// function fib(n){
// 	if (n <= 1){
// 		return 1
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }

// function multiply(number, n){
// 	if (n === 0){
// 		return number
// 	}
// 	10 * multiply(number, n-1)
// }

// multiply(4, 3)


// function sum1(start, end){
// 	if (start === end){
// 		return end;
// 	} else if(start > end){
// 		return end + sum1(start, end + 1)
// 	}
// 	return start + sum1(start + 1 , end);
// }


// function multiply1(start, end){
// 	if (start === end){
// 		return end;
// 	} else if(start === 0 || end === 0) {
// 		return 0
// 	}
// 	else if(start > end){
// 		return end * multiply1(start, end + 1)
// 	}
// 	return start * multiply1(start + 1 , end);
// }

// function isEven(n){
// 	if (n === 0){
// 		return true;
// 	}
// 	else if (n === 1){
// 		return false;
// 	} 
// 	return isEven(n-2);
// }

// function isEven1(n){
// 	if (n === 1){
// 		return true;
// 	} else if ( n ){
// 		return false;
// 	}
// 	return isEven1(n/2)
// }

//  function inc(x) { 
//  return x + 1; 
//  } 
//  function dec(x) { 
//  return x - 1; 
//  }

//  function add(x, y){
//  	if (dec(y) < 0){
//  		return x
//  	}
//  	return add(inc(x), dec(y));
//  }


function sum(n){
	var start = 0;
	var result = 0;
	while(start <= n){
		result = result + start;
		start++ 
	}
	return result;
}




function factorial(n){
	var start = 1;
	var result = 1;
	while(start <= n){
		result = result * start;
		start++ 
	}
	return result;
}

function stringRepeating(str, count){
	var result = "";
	var start = 0;
	while (start < count){
		result = result + str;
		count--
	}
	return result;
}

// function fib(n){
// 	var start1 = 0;
// 	var start2 = start1 - 1;
// 	var result = 1;
// 	// var previous = start - 1
// 	while (start1 < n){
// 		result = result + start1 + start2;
// 		start1 ++
// 	}
// 	return result;
// }


// More Practice
// 1
function multiply(number, n){
	var result = 1;
while (n > 0){
result = result * 10
n--
}
return result * number;
}

function counting(n){
	var result = "";
	while (n > 0 ){
		result = n + ", " + result;
	
	n--
}
return result = result.slice(0, result.length - 2)
}

function counting1(n){
	var result = "";
	while (n > 1 ){
		result = ", " + n + result;
	
	n--
}
return result = n + result
}

// function greet(n){
// 	var welcome = 1;
// 	var meet = 0;
// 	var result;
// 	while (n===1){
//     result = "welcome " + welcome + "/n";
// 	}
// 	n--
// 	while (n>0){
// 	 meet++
// 	 result = "welcome " + welcome + " meet" + meet + "/n",
// 	 n--
// 	}

// 	return result;
// }

function revStr(str){
var result = "";
var count = str.length;
while (count > 0){
result = result + str[count-1];
	count--
}
return result;
}

// function prime(n){
// 	var start = 1;
// 	var oddResult;
// 	var evenResult;
// 	while(start < n){
// var odd = if (start % 2 !== 0){
// 	oddResult = start + " is odd"
// }
// var even = if (start % 2 === 0){
// 	evenResult = start + " is even"

// 	}
// 	start++
// }
// 	return odd + "\n" + even + "\n";
// }

function prime(n){
var start = 2;
var result;
while (start < n && start > 1){
	if (n % start === 0){
		return false;
	}
	
	start++ 
}
return true;
}




// function oddOrEven(n){
// var result = '';
// var start = 0;
// while (n > 0){
// 	result = n + 
// }
// return result;
// }


