import { Collection } from "./Collection";
import { Node } from "./node";
import { LinkedListIterator } from "./LinkedListIterator";
import { Iterator } from "./Iterator";

export class LinkedList implements Collection<Node> {

    private head: Node | undefined;

    public constructor (_head: Node | undefined = undefined) {
        this.head = _head;
    }

    public getHead(): Node | undefined {
        return this.head;
    }

    public clear(): void {
        this.head = undefined;
    }

    public append(node: Node): void {
        if(this.head) {

            let current: Node | undefined = this.head;
            while(current) {
                if(current.getNext()) {
                    current = current.getNext();
                } else {
                    current.setNext(node);
                    break;
                }
            }

        } else {
            this.head = node;
        }
    }

    public iterator(): Iterator<Node> | undefined {
        return new LinkedListIterator(this.head);
    }
}