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
        current=next;
        
    }
    this.head=prev
}
