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
    
  insertAt(value,index)
  {
      if(index<0)
      {
          console.log('invalid index')
      }
      
      const newNode=new Node(value)
      
      if(index==0)
      {
          this.prepend(value)
      }
      
      let current=this.head;
      let count=0;
      while(current&&count<index-1)
      {
          current=current.next;
          count++
      }
      newNode.next=current.next;
      current.next=newNode;
      
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

list.insertAt(300,3)

list.print()