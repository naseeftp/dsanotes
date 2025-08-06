function firstNonRepeating(string,index=0)
{
    if(index>=string.length)
    {
        return null
    }
    const char=string[index]
    if(string.indexOf(char)===string.lastIndexOf(char))
    {
        return char
    }
    return firstNonRepeating(string,index+1)
    
}
console.log(firstNonRepeating("aabbcdde"));