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