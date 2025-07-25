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
    prepend(value)
    {
        const newNode=new Node(value)
        newNode.next=this.head;
        this.head=newNode;
        
        
    }
    deleteFromend()
    {
        if(!this.head)
        {
            return
        }
        if(!this.head.next)
        {
            this.head=null
        }
        let current=this.head;
        while(current.next.next)
        {
            current=current.next
        }
        current.next=null
        
    }
    
    
    print()
    {
      let current=this.head;
      let values=[]
      while(current)
      {
        values.push(current.value) 
        current=current.next
      }
      console.log(values.join('->'))
    }
}


let list= new LinkedList()
list.prepend(5)
list.prepend(7)
list.prepend(9)
list.prepend(12)

list.print()
list.deleteFromend()
list.print()