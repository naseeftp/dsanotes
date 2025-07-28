function SumArray(array)
{
    if(array.length==0)
    {
        return 0
    }
    
    return array[0]+SumArray(array.slice(1))
    
}

let array=[1,2,3,4,5]
console.log(SumArray(array))