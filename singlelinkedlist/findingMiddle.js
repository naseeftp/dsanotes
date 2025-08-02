class Node{
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
        if(!this.head)
        {
            this.head=newNode
            return
        }
       else
       {
               newNode.next=this.head;
        this.head=newNode
       }
        
        
    }
    
    append(value)
    {
        const newNode=new Node(value)
        if(!this.head)
        {
            this.head=newNode
        }
        let current=this.head;
        while(current.next)
        {
            current=current.next
        }
        current.next=newNode
    }
    insertAt(value,index)
    {
        if(index<0)
        {
            console.log('invalid index')
        }
        if(index==0)
        {
            this.prepend(value)
            return
        }
        let newNode=new Node(value)
        let current=this.head;
        let count=0;
        while(current&&count<index-1)
        {
            current=current.next;
            count=count+1
        }
        if (!current) {
        console.log('Index out of bounds');
        return;
    }
        newNode.next=current.next;
        current.next=newNode
    }
    
    deleteFront()
    {
        if(!this.head)
        {
            return null
        }
        if(!this.head.next)
        {
            this.head=null
            this.head.next=null
        }
        this.head=this.head.next
    }
    deleteEnd()
    {
        if(!this.head)
        {
            return
        }
        if(!this.head.next)
        {
            this.head=null;
            this.next=null;
        }
        let current=this.head;
        while(current.next.next)
        {
            current=current.next;
        }
        current.next=null
    }
    deleteAt(index)
    {
        if(index<0)
        {
            console.log('invalid index')
        }
        if(index==0)
        {
            this.deleteFront()
        }
        let current=this.head;
        let count=0;
        while(current&&count<index-1)
        {
            current=current.next;
            count++
        }
        current.next=current.next.next
    }
    reverse()
    {
        let prev=null;
        let current=this.head;
        let next=null;
        while(current!==null)
        {
            next=current.next;
             current.next=prev;
             prev=current;
             current=next
            
            
        }
        this.head=prev
    }
    findMiddle()
    {
        if(!this.head)
        {
            console.log('list is empty')
            return null
        }
        
        let slow=this.head;
        let fast=this.head;
        while(fast!==null&&fast.next!==null)
        {
            slow=slow.next;
            fast=fast.next.next
        }
        console.log('middle element of the linked list',slow.value)
        
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

let list=new LinkedList()
list.prepend(7)
list.prepend(9)
list.append(18)
list.append(19)
list.append(20)
list.insertAt(99,2)
list.insertAt(98,2)
list.print()
list.findMiddle()