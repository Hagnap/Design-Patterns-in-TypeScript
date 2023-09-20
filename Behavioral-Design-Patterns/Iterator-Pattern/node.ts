export class Node {
    private value: any;
    private next: Node | undefined;

    public constructor(_value: any, _next: Node | undefined = undefined) {
        this.value = _value;
        this.next  = _next;
    }

    public getValue(): any {
        return this.value;
    }

    public setValue(_value: any): void {
        this.value = _value;
    }

    public getNext(): Node | undefined {
        return this.next;
    }

    public setNext(_next: Node | undefined): void {
        this.next = _next;
    }
}