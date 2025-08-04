function SecondLarge(array,index=0,large=-Infinity,second=-Infinity)
{
    if(index==array.length)
    {
        return second==-Infinity?null:second
        
    }
    let current=array[index]
    if(current>large)
    {
        second=large;
        large=current
    }
    else if(current>second&&large!=large)
    {
        second=current
    }
    
    return SecondLarge(array,index+1,large,second)
}


let array=[1,3,4,5,67,90,17,22]
console.log(SecondLarge(array))
