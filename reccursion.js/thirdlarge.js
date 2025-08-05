function ThirdLarge(array,index=0,large=-Infinity,second=-Infinity,third=-Infinity){
    if(index==array.length)
   {
       return third==-Infinity?null:third
   }
    
    let current=array[index]
    if(current>large)
    {
        third=second;
        second=large;
        large=current
        
    }
    else if(current>second&&current!=large)
    {
        third=second;
        second=current;
    }
    else if(current>third&&current!=second&&current!=large){
        third=current
    }
    
    return ThirdLarge(array,index+1,large,second,third)
    
}

let array=[1,3,4,5,67,90,17,22]
console.log(ThirdLarge(array))


