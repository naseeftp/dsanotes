function fibonacci(n)
{
    if(n==0)
    {
        return 0
    }
    if(n==1)
    {
        return 1
    }
    
    return fibonacci(n-1)+fibonacci(n-2);
}
function printing(count)
{
    for(i=0;i<=count;i++)
    {
        console.log(fibonacci(i))
    }
    
}

printing(7)