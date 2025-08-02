deleteMiddle()
    {
        if(!this.head)
        {
            console.log('list is empty')
            return null
        }
        if(!this.head.next)
        {
            this.head=null
            return 
        }
        let slow=this.head;
        let fast=this.head;
        let prev=null;
        while(fast!==null&&fast.next!==null)
        {
            fast=fast.next.next
            prev=slow
            slow=slow.next
        }
        
        prev.next=slow.next
        
    }