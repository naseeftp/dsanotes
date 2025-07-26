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
  append(value)
  {
      const newNode=new Node(value);
      if(!this.head)
      {
          this.head=newNode;
          this.tail=newNode
      }
      else
      {
          newNode.prev=this.tail;
          this.tail.next=newNode;
          this.tail=newNode;
      }
      this.size++
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
list.append(19)
list.append(17)
list.append(15)
list.append(13)
list.append(12)
list.print()
