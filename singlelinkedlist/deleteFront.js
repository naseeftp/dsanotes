class Node
{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor()
    {
        this.head=null
    }
    append(value)
    {
        const newNode=new Node(value)
        if(!this.head)
        {
            this.head=newNode;
            return
        }
        let current=this.head;
        while(current.next)
        {
            current=current.next;
            
        }
        current.next=newNode
    }
    
    deleteFront()
    {
       if(!this.head)   //if node empty
       {
           return
       }
        this.head=this.head.next;
    }
    
    
    
    print()
    {
       let current=this.head;
       let values=[];
       while(current)
       {
           values.push(current.value)
           current=current.next
       }
       console.log(values.join('->'))
    }
}
let list=new LinkedList();
list.append(5)
list.append(7)
list.append(9)
list.append(13)
list.print()
list.deleteFront()
list.print()