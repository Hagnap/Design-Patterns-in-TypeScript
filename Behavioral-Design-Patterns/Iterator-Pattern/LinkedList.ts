import { Patient } from "./Patient";
import { NodeClass } from "./NodeClass";
import { Iterator } from "./Iterator";

export class LinkedList  implements Iterator<Patient> {

    private head: NodeClass | undefined;

    public constructor (_head: NodeClass | undefined = undefined) {
        this.head = _head;
    }

    public getHead(): NodeClass | undefined {
        return this.head;
    }

    public clear(): void {
        this.head = undefined;
    }

    public append(node: NodeClass): void {
        if(this.head == null) {
            this.head = node;
        } else {
            let current: NodeClass | undefined = this.head;

            while(current) {
                if(!current.getNext()) {
                    current = current.getNext();
                }
            }
        }
    }

    public iterator(): Iterator<Patient> {
        return new PatientLinkedListIterator();
    }
}