function fibonacci(n)
{
    if(n==0) return 0
    if(n==1) return 1
    return fibonacci(n-1)+fibonacci(n-2)
}


function printing(count,i=0)
{
    if(i>count) return;
    console.log(fibonacci(i))
    printing(count,i+1)
}

printing(7)