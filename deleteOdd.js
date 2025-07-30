class Node
{
    constructor(value)
    {
        this.value=value
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
        this.head=newNode
    }
   deleteOdd()
   {
       if(!this.head)
       {
           return
       }
      
      while(this.head&&this.head.value%2!==0)
      {
          this.head=this.head.next;
      }
      if(!this.head)
      {
          return;
      }
      let current=this.head
       while(current&&current.next)
       {
           if(current.next.value%2!==0)
           {
               current.next=current.next.next
           }
           else
           {
               current= current.next
           }
       }
       
   }

 
    print()
    {
        let values=[];
        let current=this.head;
        while(current)
        {
            values.push(current.value)
            current=current.next
        }
       console.log(values.join('->')) 
    }
}

const list=new LinkedList()
list.prepend(8)
list.prepend(1)
list.prepend(3)
list.prepend(12)
list.prepend(5)
list.prepend(9)
list.prepend(10)
list.print()
list.deleteOdd()
list.print()