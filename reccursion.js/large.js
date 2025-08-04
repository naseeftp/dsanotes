function ArrayLarge(array,index=0,max=-Infinity)
{
    if(index==array.length)
    {
        return max
    }
    if(array[index]>max)
    {
        max=array[index]
    }
    return ArrayLarge(array,index+1,max)
    
}


let array=[1,3,4,5,67,90,17,22]
console.log(ArrayLarge(array))