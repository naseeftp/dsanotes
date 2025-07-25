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
        this.head=null;
    }
  prepend(value)
  {
    const newNode=new Node(value);
    newNode.next=this.head;
    this.head=newNode
  }
  
 print()
 {
     let current=this.head;
     const values=[];
     while(current)
     {
         values.push(current.value)
         current=current.next
     }
     console.log(values.join('->'))
 }
}

const list=new LinkedList()
list.prepend(6)
list.prepend(9)
list.prepend(19)
list.prepend(23)
list.print()