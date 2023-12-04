const fib = (n) =>{
    if(n <= 2) return 1;
    return fib(n-1)+fib(n-2);
}
// Memoization
const fibWithMem = (n,memos={})=>{
    if(n in memos) return memos[n];
    if(n <= 2) return 1;
    memos[n] = fibWithMem(n-1,memos) + fibWithMem(n-2,memos);
    return memos[n];
}
// Solution of Climb Stairs on Leet Code  Link = "https://leetcode.com/problems/climbing-stairs"
var climbStairs = function(n,memos={}) {
    if(n in memos) return memos[n];
    if(n <= 1) return 1;
    memos[n] = climbStairs(n-1,memos) + climbStairs(n-2,memos);
    return memos[n];
};
// Grid travel from left most corner to right bottom corner m = rows and n = columns
const  gridTravel = (m,n,memos={})=>{
    const key = m + "," + n;
    if(key in memos) return memos[key];
    if(m == 0 || n == 0) return 0;
    if(m == 1 && n == 1) return 1;
    memos[key] =  gridTravel(m-1,n,memos)+gridTravel(m,n-1,memos);
    return memos[key];
}

console.log(fibWithMem(6));
console.log(fib(3));
console.log(fib(4));
//console.log(fib(50)); //The Program become very slow at it. 
console.log(fibWithMem(50));
console.log(gridTravel(50,18));