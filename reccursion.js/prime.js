function isPrime(n,divisor=2)
{
    if(n<=1) return false;
    if(n==2) return true;
    if(n%divisor==0) return false;
    if(divisor*divisor>n) return true
    return isPrime(n,divisor+1)
    
}
let n=19
console.log(isPrime(n))


//prime array
function isPrime(n,divisor=2)
{
    if(n<=1) return false;
    if(n==2) return true;
    if(n%divisor==0) return false;
    if(divisor*divisor>n) return true
    return isPrime(n,divisor+1)
    
}


function findPrime(array,index=0,result=[])
{
 if(index==array.length) return result 
 if(isPrime(array[index]))
 {
     result.push(array[index])
 }
 return findPrime(array,index+1,result)   
    
    
}

const numbers = [2, 3, 4, 5, 6, 7, 10, 11, 13, 17];

console.log(findPrime(numbers))