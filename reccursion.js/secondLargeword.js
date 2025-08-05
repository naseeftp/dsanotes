function secondLargest(words,index=0,largest='',second='')
{
    if(index==words.length)
    return second;
    let current=words[index];
    if(current.length>largest.length)
    {
        second=largest;
        largest=current
    }
    else if(current.length>second.length&&current!=longest)
    {
        second=current;
    }
    return secondLargest(words,index+1,largest,second)
}

function findSecondLongest(sentence)
{
    const words=sentence.split(' ')
    if(words.length<2) return nul
    return secondLargest(words)
    
}
let sentence = "I am learning recursion through practice";
console.log(findSecondLongest(sentence))