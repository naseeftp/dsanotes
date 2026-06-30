function reverse(string)
{
    if(string.length<=1)
    {
        return string
    }
    return string[string.length-1]+reverse(string.slice(0,-1))
}

let string="naseef";
console.log(reverse(string))

function reverseString(string,index=string.length-1){
    if(index<0) return '';
    return string[index]+reverseString(string,index-1)
}
console.log(reverseString('naseef'));
