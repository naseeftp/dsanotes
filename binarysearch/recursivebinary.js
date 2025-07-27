function binarySearch(array,value,left=0,right=array.length-1)
{
    if(left>right)
    {
        return -1;
    }
    let mid=Math.floor((left+right)/2)
    if(array[mid]==value)
    {
        return mid;
    }
    else if(array[mid]<value)
    {
        return binarySearch(array,value,mid+1,right)
    }
    else
    {
        return binarySearch(array,value,left,mid-1)
    }
    
}

let array=[1,2,3,4,5,6,7,8,9,10,11]
let value=3
let result=binarySearch(array,value)
console.log(`the value ${value} found at the index ${result}`)