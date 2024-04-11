class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    //enqueue, dequeue, peek, isempty. error if dqueue empty
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let node = new Node(val);
        if(this.first){
            this.last.next = node;
            this.last = node;
        }else{
            this.first = node;
            this.last = node;
        }
        this.size++;
    }
    dequeue(){
        if(!this.size){
            throw new Error("queue empty")
        }else{
            let shift = this.first;
            if(this.first == this.last){
                this.first = null;
                this.last = null;
            }else{
                this.first = this.first.next;
            }
            this.size--;
            return shift.val;
        }
    }
    peek(){
        return this.first.val;
    }
    isEmpty(){
        return this.size === 0;
    }

}

class Stack{
    //push, pop, peek, isempty. error if dqueue empty
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            let oldTop = this.first;
            this.first = node;
            this.first.next = oldTop;
        }
        this.size++;
    }
    peek(){
        return this.first.val;
    }
    pop(){
        if(!this.first){
            throw new Error('stack is empty');
        }
        let oldTop = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return oldTop.val;
    }
    isEmpty(){
        return this.size === 0;
    }
}