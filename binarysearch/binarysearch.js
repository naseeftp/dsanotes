function binarySearch(array,value)
{
    let left=0;
    let right=array.length-1;
    while(left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(array[mid]==value)
        {
            return mid
        }
        else if(array[mid]<value)
        {
            left=mid+1
        }
        else
        {
            right=mid-1
        }
        
    }
    return -1;
}


let array=[1,2,3,4,5,6,7,8,9,10,11,12,15,19]
let value=12;
let result=binarySearch(array,value)
console.log(`the specified value ${value} found at index ${result}`)



