const fib = (n) =>{
    if(n <= 2) return 1;
    return fib(n-1)+fib(n-2);
}

console.log(fib(6));
console.log(fib(3));
console.log(fib(4));
//console.log(fib(50)); //The Program become very slow at it. 
