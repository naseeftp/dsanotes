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
    
    append(value)
    {
        const newNode=new Node(value)
        if(!this.head)
        {
            this.head=newNode
            return
        }
        let current=this.head;
        while(current.next)
        {
         current=current.next   
        }
        current.next=newNode
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
            console.log('error:invalid index')
            return false
        }
        if(index==0)
        {
            this.prepend(value)
            return true
        }
        let newNode=new Node(value);
        let current=this.head;
        let count=0
        while(current&&count<index-1)
        {
            current=current.next;
            count++;
        }
        if(!current)
        {
            console.log('error:out of bounds')
            return false
        }
        newNode.next=current.next;
        current.next=newNode;
        return true
    }
   
    deleteAt(index)
    {
        if(index<0)
        {
            console.log('error:index cannot be  negative');
            return false;
        }
        if(!this.head)
        {
            console.log('error:empty list');
            return false;
        }
        let current=this.head;
        let count=0;
        while(current&&count<index-1)
        {
            current=current.next;
            count++
        }
        if(!current||!current.next)
        {
            console.log('error:index out of bounds')
            return false;
        }
        current.next=current.next.next;
        return true
    }
   
    deleteend()
    {
        
        if(!this.head)
        {
            return
        }
        if(!this.head.next)
        {
          this.head=null;
          return
        }
        let current=this.head;
        while(current.next.next)
        {
            current=current.next
        }
        current.next=null
    }
    
    deleteFromeFront()
    {
        if(!this.head)
        {
          return
        }
        this.head=this.head.next
        
    }
    

     reverse()
    {
       if(!this.head||!this.head.next) 
       {
           return null
       }
      let prev=null
      let current=this.head
      while(current)
      {
          let next=current.next;
          current.next=prev;
          prev=current;
          current=next;
      }
      this.head=prev
        
    }
    print(){
        let current=this.head;
        let values=[]
        while(current)
        {
            values.push(current.value)
            current=current.next
        }
        console.log(values.join('->'))
    }
    
    
    
}

const list=new LinkedList()
list.append(5)
list.append(29)
list.append(35)
list.append(8)
list.append(9)
list.prepend(19)
list.deleteFromeFront()
list.deleteend()
list.print()
list.reverse()
list.print()
