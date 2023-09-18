export abstract class IComponent {

    private name: string;

    public constructor(_name: string) {
        this.name = _name;
    }

    public setName(_name: string) {
        this.name = _name;
    }

    public getName(): string {
        return this.name;
    }

    public abstract inspect();
}