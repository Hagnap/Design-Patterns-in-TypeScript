import { Patient } from "./Patient";

export class NodeClass {
    private value: Patient;
    private next: NodeClass | undefined;
    private prev: NodeClass | undefined;

    public constructor(_value: Patient, _next: NodeClass | undefined = undefined, _prev: NodeClass | undefined = undefined) {
        this.value = _value;
        this.next  = _next
        this.prev = _prev;
    }

    public getValue(): Patient {
        return this.value;
    }

    public setValue(_value: Patient): void {
        this.value = _value;
    }

    public getNext(): NodeClass | undefined {
        return this.next;
    }

    public setNext(_next: NodeClass | undefined): void {
        this.next = _next;
    }

    public getPrev(): NodeClass | undefined {
        return this.prev;
    }

    public setPrev(_prev: NodeClass | undefined): void {
        this.prev = _prev;
    }
}