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
reverseMiddle(n){
        let length=0,current=this.head;
        while(current){
            length++;
            current=current.next
        };
        if(n<=0||n>length) return;
        let skip=Math.floor((length-n)/2);
        let beforeStart=null;
        current=this.head;
        for(let i=0;i<skip;i++){
            beforeStart=current;
            current=current.next
        }
        let prev=null;
        let start=current;
        for(let i=0;i<n;i++){
            let next=current.next;
            current.next=prev;
            prev=current;
            current=next
        }
        if(beforeStart){
        beforeStart.next=prev
        }else{
            this.head=prev
        }
       start.next=current
    }
