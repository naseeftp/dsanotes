function findMin(array)
{
    let left=0,right=array.length-1;
    while(left<right)
    {
        let mid=Math.floor((left+right)/2)
        if(array[mid]>array[right])
        {
            left=mid+1
        }
        else
        {
            right=mid
        }
        
    }
    
    return array[left]
}
let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums))