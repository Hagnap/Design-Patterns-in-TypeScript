import { ISubject } from "./ISubject";
import { IObserver } from "./IObserver";

// The Concrete Subject
export class YoutubeChannel implements ISubject {

    // State = the most recent video title
    private state: string;
    private subscribers: Array<IObserver>;

    constructor(_state: string = "") {
        this.state = _state;
        this.subscribers = new Array<IObserver>();
    }

    public register(observer: IObserver) {
        this.subscribers.push(observer);
    }
    
    public unregister(observer: IObserver) {
        this.subscribers.splice(this.subscribers.indexOf(observer), 1);
    }
    
    public notify() {
        this.subscribers.forEach(item => item.update());
    }

    public getState(): string {
        return this.state;
    }

    public setState(_state: string) {
        this.state = _state;
    }
}