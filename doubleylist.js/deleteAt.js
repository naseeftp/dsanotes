class Node
{
    constructor(value)
    {
        this.value=value;
        this.next=null;
        this.prev=null
    }
}
class DoubleyLinkedList
{
    constructor()
    {
        this.head=null;
        this.tail=null;
        this.size=0
    }
      prepend(value)
  {
       const newNode=new Node(value);
       if(!this.head)
       {
           this.head=newNode;
           this.tail=newNode;
           this.size++
       }
       else
       {
           newNode.next=this.head;
           this.head.prev=newNode;
           this.head=newNode;
           this.size++
       }
     
  }
  deleteAt(index)
  {
      if(index<0||index>=this.size)
      {
          console.log('out of bounds')
      }
      if(index==0)
      {
          return this.deletefront()
      }
      if(index==this.size)
      {
         return this.deleteEnd()
      }
      let current=this.head;
      for(let i=0;i<index;i++)
      {
          current=current.next;
      }
       current.prev.next=current.next;
      current.next.prev=current.prev;
     
      this.size--
  }

  
  print()
  {
     let  current=this.head;
      let values=[]
      while(current)
      {
          values.push(current.value)
          current= current.next;
      }
      console.log('forward',values.join('<->'))
  }
}

const list =new DoubleyLinkedList()
list.prepend(19)
list.prepend(17)
list.prepend(15)
list.prepend(13)
list.prepend(12)
list.deleteAt(2)
list.print()