function square(x) {
  return x * x;
}


function sum(n){
	if (n <= 0){
		return 0;
	}
	return n + sum(n-1);
}


function factorial(n){
	if (n <= 0){
		return 1;
	}
	return n + sum(n-1);
}

function string(str, count){
	if (count === 1){
		return str;
	}
	return str + string(str, count - 1)
}

function fib(n){
	if (n <= 1){
		return 1
	}
	return fib(n - 1) + fib(n - 2);
}

function multiply(number, n){
	if (n === 0){
		return number
	}
	10 * multiply(number, n-1)
}

multiply(4, 3)


function sum1(start, end){
	if (start === end){
		return end;
	} else if(start > end){
		return end + sum1(start, end + 1)
	}
	return start + sum1(start + 1 , end);
}










