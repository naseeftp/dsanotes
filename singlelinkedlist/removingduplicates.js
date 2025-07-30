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
    removeDuplicates()
    {
        if(!this.head)
        {
            return 
        }
        let seen=new Set();
        seen.add(this.head.value)
        let current=this.head;
        while(current&&current.next)
        {
            if(seen.has(current.next.value))
            {
                current.next=current.next.next
            }
            else
            {
                seen.add(current.next.value)
                current=current.next
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
list.prepend(5)
list.prepend(1)
list.print()
list.removeDuplicates()
list.print()
