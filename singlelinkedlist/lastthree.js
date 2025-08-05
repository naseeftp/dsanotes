class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null
    }
}

class LinkedList{
    constructor()
    {
        this.head=null
    }
    prepend(value)
    {
        const newNode=new Node(value)
        if(!this.head)
        {
            this.head=newNode;
            return
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    print()
    {
        const values=[];
        let current=this.head;
        while(current)
        {
            values.push(current.value)
            current=current.next
        }
        console.log(values.join('-->'))
    }
    
    lastThree()
    {
        let current=this.head;
        let length=0;
        while(current)
        {
            length++
            current=current.next;
        }
        if(length==0) {return []}
        if(length<=3)
        {
            current=this.head;
            let result=[]
             while(current)
             {
                   result.push(current.value)
                   current=current.next
             }
             return result
        }
        
        current=this.head;
        for(let i=0;i<length-3;i++)
        {
            current=current.next
        }
        let result=[] ;
        while(current)
        {
            result.push(current.value)
            current=current.next
        }
        
        return result
    }
}


const list=new LinkedList()
list.prepend(8)
list.prepend(18)
list.prepend(28)
list.prepend(38)
list.prepend(48)
list.prepend(58)
list.prepend(68)
list.prepend(78)
list.print()
console.log(list.lastThree())