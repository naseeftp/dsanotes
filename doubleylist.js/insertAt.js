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
  
  insertAt(value,index)
  {
      
      if(index<0||index>this.size)
      {
          console.log('error:out of the bound')
      }
      if(index==0)
      {
          this.prepend(value)
          return
      }
      if(index==this.size)
      {
          this.append(value)
      }
      const newNode=new Node(value)
        let current=this.head;
      for(let i=0;i<index-1;i++)
      {
          current=current.next
      }
      newNode.next=current.next;
      newNode.prev=current;
      current.next=newNode;
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
list.insertAt(45,2)
list.print()






























































