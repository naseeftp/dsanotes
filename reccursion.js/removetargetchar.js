function deletetarget(string,target,index=0)
{
    if(index>=string.length)
    {
        return ''
    }
    if(string[index]==target)
    {
        return deletetarget(string,target,index+1)
    }
    
     return string[index]+deletetarget(string,target,index+1)  
}


let string="naseef"
let target='e'
console.log(deletetarget(string,target))