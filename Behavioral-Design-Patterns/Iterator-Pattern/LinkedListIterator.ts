import { Node } from "./node";
import { Iterator } from "./Iterator";

export class LinkedListIterator implements Iterator<Node> {

    public currPatientReference: Node | undefined; 
    private position;

    public constructor(_node: Node | undefined) {
        this.currPatientReference = _node; // Node is a reference within a linked list
        this.position = 0;
    }

    public next(): Node | undefined{
        this.position++;
        this.currPatientReference = this.currPatientReference?.getNext();
        return this.currPatientReference;
    }

    public currentItem(): Node | undefined {
        return this.currPatientReference;
    }

    public hasNext(): boolean {
        let curr = this.currentItem();

        if(curr?.getNext()) {
            return true;
        }

        return false;
    }
}