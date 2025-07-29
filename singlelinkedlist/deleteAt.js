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
        newNode.next=this.head;
        this.head=newNode;
    }
    
    deleteFront()
    {
        if(!this.head)
        {
            return
        }
        this.head=this.head.next
    }
    
    deleteEnd()
    {
        let current=this.head;
        while(current.next.next)
        
        {
            current=current.next
        }
        
       current.next=null 
        
    }
   deleteAt(index)
   {
       if(index<0)
       {
           console.log('invalid index')
           return false
       }
       
       if(index==0)
       {
           this.head=this.head.next
           return true
       }
       
       let current=this.head;
       let count=0;
       if(current&&count<index-1)
       {
           current=current.next;
           count++
       }
       current.next=current.next.next
   }



    print()
    {
        let values=[];
        let current=this.head;
        while(current)
        {
            values.push(current.value);
            current=current.next
        }
        console.log(values.join('->'))
    }
    
}

const list=new LinkedList()
list.prepend(8)
list.prepend(9)
list.prepend(11)
list.prepend(111)
list.prepend(112)
list.prepend(113)
list.deleteAt(2)


list.print()