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
       }
       else
       {
           newNode.next=this.head;
           this.head.prev=newNode;
           this.head=newNode;
       }
  }
deleteFromEnd()
{
    if(!this.head)
    {
        return null
    }
    if(this.head==this.tail)
    {
        this.head=null;
        this.tail=null
    }
    else
    {
        this.tail=this.tail.prev;
        this.tail.next=null
    }
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
list.deleteFromEnd()
list.print()