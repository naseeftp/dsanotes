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
   removeNthfromEnd(n) 
   {
     let dummy=new Node(0) 
     dummy.next=this.head;
     let fast=dummy;
     let slow=dummy
     for(let i=0;i<=n;i++)
     {
         if(fast==null)return
         fast=fast.next
     }
     while(fast!==null)
     {
         fast=fast.next;
         slow=slow.next
     }
     if(slow.next)
     {
         slow.next=slow.next.next
     }
     this.head=dummy.next
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
list.removeNthfromEnd(2) 
list.print()