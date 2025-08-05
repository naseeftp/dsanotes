function reverseString(str)
{
    if(str.length<=1)
    {
        return str
    }
    
    return str[str.length-1]+reverseString(str.slice(0,-1))
}
function reverse(sentence)
{
    const words=sentence.split(' ')
    const reversedwords=words.map((word)=>reverseString(word)).join(' ')
    return reversedwords
}


const input='hello world'
console.log(reverse(input))